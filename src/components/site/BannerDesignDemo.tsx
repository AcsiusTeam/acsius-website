import { useEffect, useState } from "react";

type Board = {
  label: string;
  file: string;
  /** rendered box in the 320x220 stage */
  w: number;
  h: number;
  layout: "wide" | "tall" | "square" | "page";
  headline: string;
  sub: string;
  cta: string;
};

const BOARDS: Board[] = [
  {
    label: "Banner · 728×90",
    file: "leaderboard.psd",
    w: 292,
    h: 68,
    layout: "wide",
    headline: "Monsoon Sale",
    sub: "Flat 30% off",
    cta: "Shop now",
  },
  {
    label: "Banner · 300×250",
    file: "mpu.psd",
    w: 176,
    h: 148,
    layout: "square",
    headline: "Monsoon Sale",
    sub: "Flat 30% off · ends Sunday",
    cta: "Shop now",
  },
  {
    label: "Banner · 160×600",
    file: "skyscraper.psd",
    w: 78,
    h: 186,
    layout: "tall",
    headline: "30% off",
    sub: "Monsoon Sale",
    cta: "Shop",
  },
  {
    label: "Flyer · A4",
    file: "flyer-a4.ai",
    w: 132,
    h: 186,
    layout: "page",
    headline: "Monsoon Sale",
    sub: "Flat 30% off across the range",
    cta: "Visit store",
  },
];

function Artwork({ board }: { board: Board }) {
  const isWide = board.layout === "wide";
  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden rounded-md bg-[#0d1830]"
      style={{ flexDirection: isWide ? "row" : "column" }}
    >
      <div
        aria-hidden
        className="relative shrink-0 overflow-hidden bg-primary/30"
        style={
          isWide
            ? { width: "34%", height: "100%" }
            : { width: "100%", height: board.layout === "tall" ? "34%" : "40%" }
        }
      >
        <span className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_30%,rgba(249,115,22,0.55),transparent_70%)]" />
        <span className="absolute bottom-1 left-1 h-1.5 w-6 rounded-full bg-white/40" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 px-2 py-1.5">
        <p className="truncate font-display text-[11px] font-extrabold leading-tight text-white">
          {board.headline}
        </p>
        <p className="line-clamp-2 text-[8px] leading-tight text-white/60">{board.sub}</p>
        <span className="mt-0.5 w-fit whitespace-nowrap rounded-full bg-ember px-2 py-[3px] text-[7px] font-black uppercase tracking-[0.08em] text-primary-foreground">
          {board.cta}
        </span>
      </div>
    </div>
  );
}

export function BannerDesignDemo() {
  const [i, setI] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % BOARDS.length), 3600);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    setProgress(0);
    const t = window.setInterval(() => setProgress((p) => (p >= 100 ? 100 : p + 4)), 130);
    return () => window.clearInterval(t);
  }, [i]);

  const board = BOARDS[i]!;

  return (
    <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[#080e1b] shadow-lift">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
        <p className="ml-2 truncate font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
          artboards / {board.file}
        </p>
      </div>

      {/* stage */}
      <div className="relative h-[360px] overflow-hidden px-5 py-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        {/* bleed guides */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-4 rounded-lg border border-dashed border-ember/25"
        />
        <div className="relative grid h-full place-items-center">
          <div
            className="relative transition-all duration-700 ease-out"
            style={{ width: board.w, height: board.h }}
          >
            <span
              aria-hidden
              className="absolute -inset-2 rounded-lg border border-white/15"
            />
            <span className="absolute -top-5 left-0 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.14em] text-ember">
              {board.label}
            </span>
            <div key={board.label} className="h-full w-full animate-[fadeUp_0.5s_ease-out_both]">
              <Artwork board={board} />
            </div>
          </div>
        </div>
      </div>

      {/* footer / resize progress */}
      <div className="border-t border-white/10 px-5 py-4">
        <div className="flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.14em]">
          <span className="text-white/45">Auto-resize from master</span>
          <span className="text-ember">
            {String(i + 1).padStart(2, "0")}/{String(BOARDS.length).padStart(2, "0")}
          </span>
        </div>
        <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-ember transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {["3 mm bleed", "CMYK ready", "Under 150 KB", "Editable source"].map((chip) => (
            <span
              key={chip}
              className="whitespace-nowrap rounded-full border border-white/12 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-white/55"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
