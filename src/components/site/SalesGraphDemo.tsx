import { useEffect, useState } from "react";

const BARS = [34, 46, 40, 58, 52, 70, 64, 82, 76, 94, 100];

/** Looping "increased sales" chart: bars grow and the total climbs. */
export function SalesGraphDemo() {
  const [tick, setTick] = useState(3);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTick((t) => (t >= BARS.length ? 3 : t + 1));
    }, 520);
    return () => window.clearInterval(timer);
  }, []);

  const growth = (tick / BARS.length) * 312;
  const revenue = 42_000 + tick * 5_600;

  return (
    <div
      className="flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-navy p-4 shadow-soft"
      role="img"
      aria-label="Animated chart showing increased sales"
    >
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-widest text-navy-foreground/60">
          Increased sales
        </p>
        <span className="flex items-center gap-1.5 text-[10px] font-bold text-ember">
          <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-ember" />
          LIVE
        </span>
      </div>

      <div className="mt-1 flex items-baseline gap-2">
        <p className="font-display text-xl font-extrabold text-navy-foreground">
          ${revenue.toLocaleString()}
        </p>
        <span className="text-[10px] font-black text-ember">▲ {Math.round(growth)}%</span>
      </div>

      <div className="mt-3 flex h-16 items-end gap-1.5">
        {BARS.map((h, i) => {
          const active = i < tick;
          return (
            <span
              key={i}
              className="flex-1 rounded-t-[3px] transition-all duration-500 ease-out"
              style={{
                height: active ? `${h}%` : "8%",
                opacity: active ? 1 : 0.25,
                backgroundColor: i > 6 ? "var(--ember)" : "var(--brand-soft)",
              }}
            />
          );
        })}
      </div>

      <div className="mt-2 flex items-baseline justify-between">
        <p className="text-[10px] font-semibold text-navy-foreground/60">
          Conversion rate 4.8% → 9.1%
        </p>
        <p className="text-[10px] font-bold text-navy-foreground/75">1,284 leads</p>
      </div>
    </div>
  );
}
