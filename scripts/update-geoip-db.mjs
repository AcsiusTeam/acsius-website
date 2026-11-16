import { createWriteStream } from "node:fs";
import { mkdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { createGunzip } from "node:zlib";
import maxmind from "maxmind";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dataDirectory = resolve(projectRoot, "data");
const databasePath = resolve(dataDirectory, "dbip-city-lite.mmdb");
const releasePath = resolve(dataDirectory, "dbip-city-lite.release");
const temporaryPath = `${databasePath}.tmp`;
const allowMissing = process.argv.includes("--allow-missing");

function getReleaseMonth(offset = 0) {
  const date = new Date();
  date.setUTCDate(1);
  date.setUTCMonth(date.getUTCMonth() - offset);
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}

async function hasCurrentDatabase(release) {
  try {
    const [savedRelease, databaseInfo] = await Promise.all([
      readFile(releasePath, "utf8"),
      stat(databasePath),
    ]);
    return savedRelease.trim() === release && databaseInfo.size > 0;
  } catch {
    return false;
  }
}

await mkdir(dataDirectory, { recursive: true });

const currentRelease = getReleaseMonth();
if (await hasCurrentDatabase(currentRelease)) {
  console.log(`DB-IP City Lite ${currentRelease} is already installed.`);
  process.exit(0);
}

let lastError;
for (let offset = 0; offset < 3; offset += 1) {
  const release = getReleaseMonth(offset);
  const url = `https://download.db-ip.com/free/dbip-city-lite-${release}.mmdb.gz`;

  try {
    console.log(`Downloading DB-IP City Lite ${release}...`);
    const response = await fetch(url, { signal: AbortSignal.timeout(60_000) });
    if (!response.ok || !response.body) {
      throw new Error(`Database download returned HTTP ${response.status}.`);
    }

    await rm(temporaryPath, { force: true });
    await pipeline(
      Readable.fromWeb(response.body),
      createGunzip(),
      createWriteStream(temporaryPath),
    );

    const databaseInfo = await stat(temporaryPath);
    if (databaseInfo.size < 1_000_000) {
      throw new Error("Downloaded database is unexpectedly small.");
    }

    const reader = await maxmind.open(temporaryPath);
    if (!reader.get("8.8.8.8")) {
      throw new Error("Downloaded database did not return a known public IP.");
    }

    await rename(temporaryPath, databasePath);
    await writeFile(releasePath, `${release}\n`, "utf8");
    console.log(`Installed DB-IP City Lite ${release}.`);
    process.exit(0);
  } catch (error) {
    lastError = error;
    await rm(temporaryPath, { force: true });
    console.warn(
      `Could not install DB-IP City Lite ${release}:`,
      error instanceof Error ? error.message : "unknown error",
    );
  }
}

try {
  const databaseInfo = await stat(databasePath);
  if (databaseInfo.size > 0) {
    console.warn("Keeping the existing DB-IP database; no newer release was available.");
    process.exit(0);
  }
} catch {
  // A usable existing database is not present.
}

if (allowMissing) {
  console.warn(
    "No DB-IP database is installed; contact form location will be unavailable until one is downloaded.",
  );
  process.exit(0);
}

throw lastError ?? new Error("Unable to download a DB-IP City Lite database.");
