import { useEffect, useState } from "react";

type Board = {
  label: string;
  file: string;
  palette: string[];
  headline: string;
  sub: string;
  shape: "poster" | "logo" | "social" | "pack";
};

const BOARDS: Board[] = [
  {
    label: "Brand identity",
    file: "acsius-identity.ai",
    palette: ["#0B2447", "#F97316", "#E7ECF3", "#FFFFFF"],
    headline: "NORTHWIND",
    sub: "Logo system · v3",
    shape: "logo",
  },
  {
    label: "Campaign poster",
    file: "festive-launch.psd",
    palette: ["#111827", "#F97316", "#FDE68A", "#FFFFFF"],
    headline: "BIG DAYS",
    sub: "Poster · A2 CMYK",
    shape: "poster",
  },
  {
    label: "Social kit",
    file: "social-kit.fig",
    palette: ["#0B3B7A", "#2E6FD1", "#DBEAFE", "#FFFFFF"],
    headline: "9 frames",
    sub: "1080 × 1350",
    shape: "social",
  },
  {
    label: "Packaging",
    file: "label-dieline.pdf",
    palette: ["#3F2A17", "#A9713F", "#E7D9C4", "#F5F1EA"],
    headline: "COLD BREW",
    sub: "Label · dieline ready",
    shape: "pack",
  },
];

export function GraphicDesignDemo() {
  const [i, setI] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setI((n) => (n + 1) % BOARDS.length);
          return 0;
        }
        return p + 4;
      });
    }, 140);
    return () => window.clearInterval(id);
  }, []);

  const board = BOARDS[i] ?? BOARDS[0]!;

  return (
    <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[#0d1526] shadow-lift">
      {/* toolbar */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="truncate font-mono text-[11px] text-white/55">{board.file}</p>
        <span className="ml-auto rounded-full bg-ember/20 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.14em] text-ember">
          {board.label}
        </span>
      </div>

      <div className="grid grid-cols-[1fr_92px]">
        {/* canvas */}
        <div className="relative aspect-[4/3.4] bg-[#111a2c] p-5">
          <div
            key={i}
            className="relative h-full w-full overflow-hidden rounded-xl"
            style={{ background: board.palette[2], animation: "fadeUp 500ms ease-out" }}
          >
            <span
              aria-hidden
              className="absolute -right-8 -top-10 h-28 w-28 rounded-full"
              style={{ background: board.palette[1], opacity: 0.9 }}
            />
            {board.shape === "logo" && (
              <span
                aria-hidden
                className="absolute bottom-6 left-5 h-16 w-16 rounded-2xl"
                style={{ background: board.palette[0] }}
              />
            )}
            {board.shape === "poster" && (
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-1/2 w-full"
                style={{ background: board.palette[0], opacity: 0.92 }}
              />
            )}
            {board.shape === "social" && (
              <div aria-hidden className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-1.5">
                {Array.from({ length: 6 }).map((_, k) => (
                  <span
                    key={k}
                    className="h-7 rounded-md"
                    style={{ background: board.palette[k % 2 === 0 ? 0 : 1], opacity: 0.85 }}
                  />
                ))}
              </div>
            )}
            {board.shape === "pack" && (
              <span
                aria-hidden
                className="absolute bottom-5 left-1/2 h-24 w-16 -translate-x-1/2 rounded-t-[28px] rounded-b-md"
                style={{ background: board.palette[0] }}
              />
            )}
            <div className="absolute left-5 top-6">
              <p
                className="font-display text-2xl font-extrabold leading-none tracking-tight"
                style={{ color: board.palette[0] }}
              >
                {board.headline}
              </p>
              <p
                className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: board.palette[0], opacity: 0.6 }}
              >
                {board.sub}
              </p>
            </div>

            {/* selection frame */}
            <span
              aria-hidden
              className="absolute inset-3 rounded-lg border-2 border-dashed"
              style={{ borderColor: board.palette[1], opacity: 0.55 }}
            />
          </div>
        </div>

        {/* layers / swatches rail */}
        <div className="border-l border-white/10 bg-white/[0.03] p-3">
          <p className="text-[8px] font-black uppercase tracking-[0.16em] text-white/40">Palette</p>
          <div className="mt-2 space-y-1.5">
            {board.palette.map((c) => (
              <div key={c} className="flex items-center gap-1.5">
                <span
                  className="h-4 w-4 rounded border border-white/15"
                  style={{ background: c }}
                />
                <span className="font-mono text-[8px] text-white/45">{c}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[8px] font-black uppercase tracking-[0.16em] text-white/40">
            Layers
          </p>
          <div className="mt-2 space-y-1">
            {["Type", "Shape", "Grid", "BG"].map((l, k) => (
              <p
                key={l}
                className={`rounded px-1.5 py-0.5 text-[9px] ${
                  k === i % 4 ? "bg-ember/25 text-ember" : "text-white/40"
                }`}
              >
                {l}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* render bar */}
      <div className="flex items-center gap-3 border-t border-white/10 px-4 py-3">
        <p className="font-mono text-[10px] text-white/45">exporting artwork</p>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
          <span
            className="block h-full rounded-full bg-ember transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="font-mono text-[10px] font-bold text-ember">{progress}%</p>
      </div>
    </div>
  );
}
