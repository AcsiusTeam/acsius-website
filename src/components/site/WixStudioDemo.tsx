import { useEffect, useState } from "react";

const BREAKPOINTS = [
  { name: "Desktop", w: 100, cols: "grid-cols-3" },
  { name: "Tablet", w: 74, cols: "grid-cols-2" },
  { name: "Mobile", w: 44, cols: "grid-cols-1" },
];

/** Animated Wix Studio canvas: one layout re-flowing across breakpoints. */
export function WixStudioDemo() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % BREAKPOINTS.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const bp = BREAKPOINTS[i]!;

  return (
    <div className="flex h-full flex-col rounded-[14px] bg-navy/60 p-3">
      <div className="flex items-center gap-2">
        {BREAKPOINTS.map((b, idx) => (
          <span
            key={b.name}
            className={`rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] transition-colors duration-500 ${
              idx === i ? "bg-ember text-primary-foreground" : "bg-white/10 text-navy-foreground/60"
            }`}
          >
            {b.name}
          </span>
        ))}
        <span className="ml-auto text-[9px] font-bold tabular-nums text-navy-foreground/55">
          {bp.name === "Desktop" ? "1440px" : bp.name === "Tablet" ? "1024px" : "375px"}
        </span>
      </div>

      <div className="mt-3 flex flex-1 justify-center">
        <div
          className="flex h-full flex-col gap-2 rounded-xl border border-white/12 bg-white/[0.05] p-2.5 transition-all duration-700 ease-out"
          style={{ width: `${bp.w}%` }}
        >
          <div className="h-6 shrink-0 rounded-md bg-ember/30" />
          <div className={`grid flex-1 gap-2 ${bp.cols}`}>
            {[0, 1, 2].map((k) => (
              <div
                key={k}
                className="rounded-md bg-white/10 p-2 transition-all duration-700"
                style={{ display: bp.cols === "grid-cols-1" && k > 1 ? "none" : undefined }}
              >
                <span className="block h-1.5 w-8 rounded-full bg-primary/70" />
                <span className="mt-1.5 block h-1 w-full rounded-full bg-white/20" />
                <span className="mt-1 block h-1 w-2/3 rounded-full bg-white/15" />
              </div>
            ))}
          </div>
          <div className="h-4 shrink-0 rounded-md bg-white/10" />
        </div>
      </div>
    </div>
  );
}

const LINES = [
  "// backend/enquiry.jsw",
  "import { fetch } from 'wix-fetch';",
  "export async function sendLead(data) {",
  "  const res = await fetch(CRM_URL, {",
  "    method: 'post',",
  "    body: JSON.stringify(data),",
  "  });",
  "  return res.ok;",
  "}",
];

/** Typing Velo snippet — shows custom code behind the editor. */
export function VeloCodeDemo() {
  const [n, setN] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setN((v) => (v + 1) % (LINES.length + 4)), 620);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="h-full overflow-hidden rounded-[14px] bg-navy/70 p-3 font-mono text-[10px] leading-relaxed">
      {LINES.map((line, i) => (
        <p
          key={line}
          className={`truncate transition-opacity duration-300 ${
            i < n ? "opacity-100" : "opacity-20"
          } ${line.startsWith("//") ? "text-navy-foreground/50" : "text-navy-foreground/85"}`}
        >
          <span className="mr-2 inline-block w-3 text-right text-ember/60">{i + 1}</span>
          {line}
        </p>
      ))}
    </div>
  );
}
