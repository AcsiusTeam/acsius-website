import { useEffect, useState } from "react";

type Route = {
  label: string;
  file: string;
  name: string;
  tagline: string;
  palette: string[];
  kind: "monogram" | "hex" | "arc" | "leaf";
};

const ROUTES: Route[] = [
  {
    label: "Route 01 · Lettermark",
    file: "northwind-monogram.svg",
    name: "NORTHWIND",
    tagline: "Monogram · grid 12",
    palette: ["#0B2447", "#F97316", "#E7ECF3", "#FFFFFF"],
    kind: "monogram",
  },
  {
    label: "Route 02 · Abstract",
    file: "northwind-hexmark.svg",
    name: "NORTHWIND",
    tagline: "Abstract mark · 6-fold",
    palette: ["#111827", "#F97316", "#FDE68A", "#FFFFFF"],
    kind: "hex",
  },
  {
    label: "Route 03 · Combination",
    file: "northwind-arc.svg",
    name: "NORTHWIND",
    tagline: "Arc lockup · horizontal",
    palette: ["#0B3B7A", "#2E6FD1", "#DBEAFE", "#FFFFFF"],
    kind: "arc",
  },
  {
    label: "Route 04 · Pictorial",
    file: "northwind-leaf.svg",
    name: "NORTHWIND",
    tagline: "Pictorial · single stroke",
    palette: ["#14532D", "#F97316", "#DCFCE7", "#FFFFFF"],
    kind: "leaf",
  },
];

function Mark({ kind, color }: { kind: Route["kind"]; color: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-full w-full"
      fill="none"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {kind === "monogram" && (
        <>
          <path d="M16 48V16l32 32V16" />
          <circle cx="32" cy="32" r="26" strokeWidth="1.6" opacity="0.35" />
        </>
      )}
      {kind === "hex" && (
        <>
          <path d="M32 8l21 12v24L32 56 11 44V20z" />
          <path d="M32 22l11 6v12l-11 6-11-6V28z" strokeWidth="2" opacity="0.6" />
        </>
      )}
      {kind === "arc" && (
        <>
          <path d="M12 44a20 20 0 0140 0" />
          <path d="M24 44a8 8 0 0116 0" strokeWidth="2.4" opacity="0.65" />
          <circle cx="32" cy="52" r="2.6" fill={color} stroke="none" />
        </>
      )}
      {kind === "leaf" && (
        <>
          <path d="M32 54C18 46 14 30 22 14c16 2 26 14 22 30-1.6 6-6 9-12 10z" />
          <path d="M32 54c0-14 2-24 8-32" strokeWidth="2" opacity="0.6" />
        </>
      )}
    </svg>
  );
}

export function LogoDesignDemo() {
  const [i, setI] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % ROUTES.length), 4200);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    setProgress(0);
    const t = window.setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 3));
    }, 110);
    return () => window.clearInterval(t);
  }, [i]);

  const route = ROUTES[i]!;
  const ink = route.palette[1]!;

  return (
    <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[#080e1b] shadow-lift">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
        <p className="ml-2 font-mono text-[10px] text-white/45">{route.file}</p>
        <p className="ml-auto text-[9px] font-black uppercase tracking-[0.16em] text-ember">
          Logo lab
        </p>
      </div>

      <div className="grid grid-cols-[1fr_86px]">
        {/* canvas */}
        <div className="relative p-5">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <p className="relative text-[9px] font-black uppercase tracking-[0.16em] text-white/40">
            {route.label}
          </p>

          <div key={i} className="relative mt-4 animate-[fadeUp_0.6s_ease-out_both]">
            <div className="mx-auto h-28 w-28">
              <Mark kind={route.kind} color={ink} />
            </div>
            <p
              className="mt-4 text-center font-display text-lg font-extrabold tracking-[0.22em] text-white"
            >
              {route.name}
            </p>
            <p className="mt-1 text-center font-mono text-[9px] text-white/40">{route.tagline}</p>
          </div>

          {/* scale strip */}
          <div className="relative mt-5 flex items-end justify-center gap-4 border-t border-white/10 pt-4">
            {[14, 22, 34].map((s) => (
              <div key={s} className="flex flex-col items-center gap-1">
                <div style={{ height: s, width: s }}>
                  <Mark kind={route.kind} color={ink} />
                </div>
                <span className="font-mono text-[8px] text-white/35">{s}px</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-1">
              <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: ink }}>
                <div className="h-6 w-6">
                  <Mark kind={route.kind} color="#0b1220" />
                </div>
              </div>
              <span className="font-mono text-[8px] text-white/35">app</span>
            </div>
          </div>
        </div>

        {/* rail */}
        <div className="border-l border-white/10 bg-white/[0.03] p-3">
          <p className="text-[8px] font-black uppercase tracking-[0.16em] text-white/40">Palette</p>
          <div className="mt-2 space-y-1.5">
            {route.palette.map((c) => (
              <div key={c} className="flex items-center gap-1.5">
                <span className="h-4 w-4 rounded border border-white/15" style={{ background: c }} />
                <span className="font-mono text-[8px] text-white/45">{c}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[8px] font-black uppercase tracking-[0.16em] text-white/40">
            Variants
          </p>
          <div className="mt-2 space-y-1">
            {["Colour", "Mono", "Reversed", "Icon"].map((l, k) => (
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

      {/* export bar */}
      <div className="flex items-center gap-3 border-t border-white/10 px-4 py-3">
        <p className="font-mono text-[10px] text-white/45">exporting SVG · EPS · PNG</p>
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
