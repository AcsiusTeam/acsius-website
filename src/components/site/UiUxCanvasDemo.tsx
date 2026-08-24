import { useEffect, useState } from "react";

const STAGES = ["Wireframe", "UI design", "Prototype", "Shipped"] as const;

/** Animated design-canvas loop: wireframe → UI → prototype → shipped */
export function UiUxCanvasDemo() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setStage((s) => (s + 1) % STAGES.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const hi = stage >= 1;
  const proto = stage >= 2;
  const shipped = stage === 3;

  return (
    <div className="relative rounded-[28px] border border-white/12 bg-white/[0.06] p-4 shadow-lift backdrop-blur-sm">
      {/* toolbar */}
      <div className="flex items-center justify-between gap-3 px-1.5 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </div>
        <div className="flex gap-1">
          {STAGES.map((s, i) => (
            <span
              key={s}
              className={`rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.1em] transition-all duration-500 ${
                i === stage
                  ? "bg-ember text-primary-foreground"
                  : "bg-white/10 text-navy-foreground/50"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* canvas */}
      <div className="relative overflow-hidden rounded-[20px] bg-[oklch(0.19_0.03_255)] p-4">
        {/* nav */}
        <div className="flex items-center justify-between">
          <div
            className={`h-3 w-20 rounded transition-all duration-700 ${
              hi ? "bg-ember" : "bg-white/20"
            }`}
          />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded transition-all duration-700 ${
                  hi ? "bg-white/45" : "bg-white/15"
                }`}
              />
            ))}
            <div
              className={`h-4 w-14 rounded-full transition-all duration-700 ${
                hi ? "bg-ember/90" : "border border-dashed border-white/25"
              }`}
            />
          </div>
        </div>

        {/* hero block */}
        <div className="mt-4 grid grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="space-y-2">
            <div
              className={`h-2 w-16 rounded transition-all duration-700 ${
                hi ? "bg-ember/80" : "bg-white/15"
              }`}
            />
            <div
              className={`h-4 w-full rounded transition-all duration-700 ${
                hi ? "bg-white/85" : "bg-white/20"
              }`}
            />
            <div
              className={`h-4 w-4/5 rounded transition-all duration-700 ${
                hi ? "bg-white/70" : "bg-white/20"
              }`}
            />
            <div className="space-y-1.5 pt-1">
              <div className="h-1.5 w-full rounded bg-white/15" />
              <div className="h-1.5 w-11/12 rounded bg-white/12" />
              <div className="h-1.5 w-3/4 rounded bg-white/10" />
            </div>
            <div className="flex items-center gap-2 pt-2">
              <div
                className={`relative h-6 w-24 rounded-full transition-all duration-700 ${
                  hi ? "bg-ember" : "border border-dashed border-white/25"
                }`}
              >
                {proto && (
                  <span
                    aria-hidden
                    className="absolute -inset-1 animate-ping rounded-full border border-ember/60"
                  />
                )}
              </div>
              <div className="h-6 w-20 rounded-full border border-white/20" />
            </div>
          </div>

          <div
            className={`relative overflow-hidden rounded-xl transition-all duration-700 ${
              hi
                ? "bg-[linear-gradient(140deg,oklch(0.62_0.11_250/0.55),oklch(0.71_0.17_52/0.4))]"
                : "border border-dashed border-white/20 bg-white/[0.04]"
            }`}
          >
            {!hi && (
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-30">
                <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.6" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.6" />
              </svg>
            )}
            {shipped && (
              <div className="absolute inset-x-3 bottom-3 rounded-lg bg-black/35 px-2.5 py-2 backdrop-blur-sm">
                <p className="text-[9px] font-black uppercase tracking-[0.12em] text-ember">
                  CVR +38%
                </p>
              </div>
            )}
          </div>
        </div>

        {/* card row */}
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`rounded-xl p-2.5 transition-all duration-700 ${
                hi ? "bg-white/10" : "border border-dashed border-white/18"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div
                className={`h-5 w-5 rounded-md transition-colors duration-700 ${
                  hi ? "bg-ember/85" : "bg-white/15"
                }`}
              />
              <div className="mt-2 h-1.5 w-4/5 rounded bg-white/25" />
              <div className="mt-1 h-1.5 w-3/5 rounded bg-white/15" />
            </div>
          ))}
        </div>

        {/* cursor */}
        <span
          aria-hidden
          className="pointer-events-none absolute text-lg transition-all duration-1000 ease-out"
          style={{
            left: proto ? "28%" : "62%",
            top: proto ? "58%" : "26%",
            color: "white",
          }}
        >
          ➤
        </span>
      </div>

      {/* footer strip */}
      <div className="mt-3 flex items-center justify-between px-1.5">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy-foreground/55">
          Figma → tokens → build
        </p>
        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-ember">
          {shipped ? "Handoff ready" : "In review"}
        </p>
      </div>
    </div>
  );
}
