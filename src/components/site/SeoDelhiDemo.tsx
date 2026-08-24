import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.some((e) => e.isIntersecting) && setInView(true),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

const RACE = [
  { label: "National aggregator", start: 1, end: 3, color: "bg-white/25" },
  { label: "Old Delhi agency", start: 2, end: 4, color: "bg-white/25" },
  { label: "Marketplace listing", start: 3, end: 5, color: "bg-white/25" },
  { label: "Your site (ACSIUS)", start: 6, end: 1, color: "bg-ember", text: "text-navy" },
];

const INTENT = [
  { label: "Commercial", value: 45, color: "bg-ember" },
  { label: "Local / near-me", value: 30, color: "bg-blue-400" },
  { label: "Informational", value: 25, color: "bg-white/35" },
];

/** Delhi SERP race + intent mix — a visual distinct from the audit scorecard. */
export function SeoDelhiDemo() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => setTick((t) => (t + 1) % 24), 1200);
    return () => window.clearInterval(id);
  }, [inView]);

  const progress = tick / 24;

  return (
    <div
      ref={ref}
      className="rounded-[30px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur lg:p-7"
      role="img"
      aria-label="Animated Delhi SERP race track showing a client moving from position six to position one"
    >
      <p className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-ember">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
        Delhi SERP race · live simulation
      </p>

      <div className="mt-6 space-y-3">
        {[1, 2, 3, 4, 5, 6].map((pos) => (
          <div key={pos} className="relative h-8 rounded-xl bg-white/[0.05]">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-black text-white/30">
              {pos}
            </span>
            {RACE.map((r, i) => {
              const movingUp = r.start > r.end;
              const current = movingUp
                ? Math.max(r.end, r.start - (r.start - r.end) * progress * 1.4)
                : Math.min(r.end, r.start + (r.end - r.start) * progress * 1.4);
              const isHere = Math.round(current) === pos;
              if (!isHere) return null;
              const offset = (current - pos) * 100;
              return (
                <div
                  key={r.label}
                  className={`absolute top-1 bottom-1 left-6 right-3 flex items-center rounded-lg px-3 text-[10px] font-bold transition-all duration-1000 ease-out ${r.color} ${r.text ?? "text-navy-foreground"}`}
                  style={{ transform: `translateY(${offset}%)` }}
                >
                  <span className="truncate">{r.label}</span>
                  {r.label.includes("ACSIUS") && (
                    <span className="ml-auto text-[9px] font-black uppercase tracking-wider opacity-80">
                      +{Math.round(progress * 5)} spots
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/50">
          Search intent mix we plan for
        </p>
        <div className="mt-4 space-y-3">
          {INTENT.map((i) => (
            <div key={i.label}>
              <div className="flex items-center justify-between text-[0.72rem] font-bold text-navy-foreground/85">
                <span>{i.label}</span>
                <span>{i.value}%</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${i.color} transition-all duration-1000 ease-out`}
                  style={{ width: inView ? `${i.value}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
