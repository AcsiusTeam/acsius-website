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

const SPEND = [42, 46, 44, 51, 48, 55, 58, 54, 61, 57, 63, 60];
const LEADS = [18, 24, 22, 33, 31, 42, 48, 46, 58, 55, 70, 74];

/** Animated Google Ads style performance console. */
export function PpcAdsDemo() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => setTick((t) => (t + 1) % (SPEND.length + 4)), 550);
    return () => window.clearInterval(id);
  }, [inView]);

  const shown = Math.min(tick + 1, SPEND.length);
  const leads = LEADS.slice(0, shown);
  const totalLeads = leads.reduce((a, b) => a + b, 0);
  const totalSpend = SPEND.slice(0, shown).reduce((a, b) => a + b, 0) * 1000;
  const cpl = totalLeads ? Math.round(totalSpend / totalLeads) : 0;

  const pointsFor = (data: number[], max: number) =>
    data
      .map((v, i) => `${(i / (SPEND.length - 1)) * 100},${44 - (v / max) * 38}`)
      .join(" ");

  return (
    <div
      ref={ref}
      data-testid="ppc-ads-demo"
      className="w-full rounded-[28px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-[0.66rem] font-black uppercase tracking-[0.18em] text-ember">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
          Google Ads · live account
        </p>
        <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-navy-foreground/70">
          Last 12 weeks
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { l: "Leads", v: totalLeads.toLocaleString("en-IN") },
          { l: "Cost / lead", v: `₹${cpl.toLocaleString("en-IN")}` },
          { l: "Conv. rate", v: `${(3.2 + shown * 0.18).toFixed(1)}%` },
        ].map((m) => (
          <div key={m.l} className="rounded-2xl border border-white/12 bg-white/[0.05] px-3 py-3">
            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
              {m.l}
            </p>
            <p className="mt-1 font-display text-lg font-extrabold tabular-nums text-navy-foreground">
              {m.v}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-white/12 bg-white/[0.04] p-4">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em]">
          <span className="text-ember">Leads</span>
          <span className="text-navy-foreground/45">Spend</span>
        </div>
        <svg viewBox="0 0 100 48" className="mt-2 h-24 w-full overflow-visible" preserveAspectRatio="none">
          <polyline
            points={pointsFor(SPEND.slice(0, shown), 80)}
            fill="none"
            stroke="oklch(0.72 0.02 250)"
            strokeOpacity="0.45"
            strokeWidth="1"
            strokeDasharray="2 2"
            vectorEffect="non-scaling-stroke"
          />
          <polyline
            points={pointsFor(leads, 80)}
            fill="none"
            stroke="oklch(0.71 0.17 52)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="mt-4 space-y-2">
        {[
          { k: "Search · Brand + high intent", v: "ROAS 6.4x", w: "84%" },
          { k: "Shopping · Bestsellers", v: "ROAS 4.1x", w: "62%" },
          { k: "Remarketing · Cart 7d", v: "CPL ₹184", w: "48%" },
        ].map((row, i) => (
          <div
            key={row.k}
            className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 transition-colors duration-500"
            style={{ opacity: shown > i * 3 ? 1 : 0.35 }}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-[11px] font-semibold text-navy-foreground/85">{row.k}</p>
              <p className="shrink-0 text-[11px] font-black text-ember">{row.v}</p>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-ember transition-all duration-700"
                style={{ width: shown > i * 3 ? row.w : "6%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
