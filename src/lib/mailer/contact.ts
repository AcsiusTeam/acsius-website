import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { isIP } from "node:net";
import { resolve } from "node:path";
import maxmind, { type CityResponse, type Reader } from "maxmind";
import { transporter } from "./mail";

const GEOIP_DATABASE_PATH =
  process.env.DBIP_CITY_MMDB_PATH ||
  resolve(process.cwd(), "data/dbip-city-lite.mmdb");

let geoIpReaderPromise: Promise<Reader<CityResponse>> | undefined;

export type ContactEmailData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  brief: string;
  pageUrl: string;
  ip: string;
  city: string;
  country: string;
};

function parseIpCandidate(value: string) {
  let candidate = value.trim().replace(/^for=/i, "").replace(/^"|"$/g, "");

  if (candidate.startsWith("[")) {
    const closingBracket = candidate.indexOf("]");
    if (closingBracket !== -1) candidate = candidate.slice(1, closingBracket);
  } else if (/^(?:\d{1,3}\.){3}\d{1,3}:\d+$/.test(candidate)) {
    candidate = candidate.slice(0, candidate.lastIndexOf(":"));
  }

  return isIP(candidate) ? candidate : undefined;
}

function getClientIp(request: Request) {
  const candidates = [
    request.headers.get("cf-connecting-ip"),
    request.headers.get("cf-connecting-ipv6"),
    request.headers.get("true-client-ip"),
    request.headers.get("fly-client-ip"),
    request.headers.get("x-nf-client-connection-ip"),
    ...(request.headers.get("x-vercel-forwarded-for")?.split(",") ?? []),
    request.headers.get("x-real-ip"),
    ...(request.headers.get("x-forwarded-for")?.split(",") ?? []),
    ...(request.headers.get("forwarded")?.split(",").flatMap((entry) => {
      const match = entry.match(/(?:^|;)\s*for=(\"?)(\[[^\]]+\](?::\d+)?|[^;,\"]+)\1/i);
      return match ? [match[2]] : [];
    }) ?? []),
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    const ip = parseIpCandidate(candidate);
    if (ip) return ip;
  }

  return "Unknown";
}

function getCloudflareLocation(request: Request) {
  const countryCode = request.headers.get("cf-ipcountry")?.trim();

  return {
    city: request.headers.get("cf-ipcity")?.trim().slice(0, 100) || "Unknown",
    country:
      countryCode && countryCode !== "XX" && countryCode !== "T1"
        ? countryCode
        : "Unknown",
  };
}

async function lookupIpLocation(ip: string) {
  if (!geoIpReaderPromise) {
    geoIpReaderPromise = maxmind
      .open<CityResponse>(GEOIP_DATABASE_PATH)
      .catch((error: unknown) => {
        geoIpReaderPromise = undefined;
        throw error;
      });
  }

  const reader = await geoIpReaderPromise;
  const location = reader.get(ip);

  return {
    city: location?.city?.names?.en || "Unknown",
    country:
      location?.country?.names?.en ||
      location?.country?.iso_code ||
      "Unknown",
  };
}

function normalizePageUrl(value: string) {
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "Unknown";
    if (url.href.length > 2048) return "Unknown";
    url.username = "";
    url.password = "";
    return url.href;
  } catch {
    return "Unknown";
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(data: ContactEmailData) {
  const subject = `Contact form - ${data.name || "New enquiry"}`;

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.CONTACT_MAIL_TO || "info@acsius.com",

    replyTo: data.email,

    subject,

    text: `
Full name: ${data.name || "-"}

Work email: ${data.email || "-"}

Phone: ${data.phone || "-"}

Service needed: ${data.service || "-"}

Project brief:
${data.brief || "-"}

Page URL: ${data.pageUrl || "Unknown"}
IP address: ${data.ip || "Unknown"}

Visitor location (approximate, based on IP)
City: ${data.city || "Unknown"}
Country: ${data.country || "Unknown"}
`.trim(),

    html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto">
        <h2>New Website Enquiry</h2>

        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
          <tr>
            <td><strong>Full name</strong></td>
            <td>${escapeHtml(data.name || "-")}</td>
          </tr>

          <tr>
            <td><strong>Work email</strong></td>
            <td>${escapeHtml(data.email || "-")}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${escapeHtml(data.phone || "-")}</td>
          </tr>

          <tr>
            <td><strong>Service needed</strong></td>
            <td>${escapeHtml(data.service || "-")}</td>
          </tr>
        </table>

        <h3>Project brief</h3>

        <p>
          ${escapeHtml(data.brief || "-").replace(/\n/g, "<br>")}
        </p>

        <hr>

        <h3>Submission details</h3>

        <p>
          <strong>Page URL:</strong> ${escapeHtml(data.pageUrl || "Unknown")}<br>
          <strong>IP address:</strong> ${escapeHtml(data.ip || "Unknown")}
        </p>

        <h3>Approximate visitor location (based on IP)</h3>

        <p>
          <strong>City:</strong> ${escapeHtml(data.city || "Unknown")}<br>
          <strong>Country:</strong> ${escapeHtml(data.country || "Unknown")}
        </p>
      </div>
    `.trim(),
  });
}

export const submitContactServer = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    email: string;
    phone: string;
    service: string;
    brief: string;
    pageUrl: string;
  }) => data)
  .handler(async ({ data }) => {
    const name = data.name.trim();
    const email = data.email.trim();
    const phone = data.phone.trim();
    const service = data.service.trim();
    const brief = data.brief.trim();
    let pageUrl = normalizePageUrl(data.pageUrl);
    let ip = "Unknown";
    let city = "Unknown";
    let country = "Unknown";

    let request: Request | undefined;
    try {
      request = getRequest();
      ip = getClientIp(request);
      if (ip === "Unknown") {
        console.warn(
          "Contact form request had no valid client IP forwarding header.",
        );
      }
      const edgeLocation = getCloudflareLocation(request);
      city = edgeLocation.city;
      country = edgeLocation.country;
      if (pageUrl === "Unknown") {
        pageUrl = normalizePageUrl(request.headers.get("referer") ?? "");
      }
    } catch {
      // Request metadata is optional; continue sending the enquiry.
    }

    if (!name || !email || !brief) {
      throw new Error("Name, email and project brief are required.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      throw new Error("Please provide a valid email address.");
    }

    if (ip !== "Unknown") {
      try {
        const localLocation = await lookupIpLocation(ip);
        city = localLocation.city || city;
        country = localLocation.country || country;
      } catch (error) {
        // Location is optional; keep any edge-provided location and send the email.
        console.warn(
          "Local IP geolocation database is unavailable:",
          error instanceof Error ? error.message : "unknown error",
        );
      }
    }

    await sendContactEmail({
      name,
      email,
      phone,
      service,
      brief,
      pageUrl,
      ip,
      city,
      country,
    });

    return {
      success: true,
    };
  });
