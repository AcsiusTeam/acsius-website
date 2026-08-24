import { useEffect, useRef, useState } from "react";
import { SEO_ENGINE } from "@/lib/seo-services";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.some((e) => e.isIntersecting) && setInView(true),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

/** Animated rank-tracker + clicks chart illustrating the SEO process. */
export function SeoEngineDemo() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => setTick((t) => (t + 1) % 6), 1400);
    return () => window.clearInterval(id);
  }, [inView]);

  const progress = inView ? (tick + 1) / 6 : 0;

  return (
    <div ref={ref} className="grid gap-4 xl:grid-cols-[1.05fr_1fr]">
      {/* Rank tracker */}
      <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur">
        <p className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-ember">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
          Rank tracker
        </p>
        <ul className="mt-5 grid gap-3">
          {SEO_ENGINE.keywords.map((kw) => {
            const pos = Math.round(kw.from + (kw.to - kw.from) * progress);
            const bar = Math.max(6, 100 - (pos / 60) * 100);
            return (
              <li key={kw.term} className="min-h-[54px]">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="truncate text-sm font-semibold text-navy-foreground/85">
                    {kw.term}
                  </span>
                  <span className="shrink-0 font-display text-sm font-extrabold tabular-nums text-ember">
                    #{pos}
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-ember transition-all duration-700 ease-out"
                    style={{ width: `${bar}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Clicks chart */}
      <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur">
        <p className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-navy-foreground/70">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Organic clicks trend
        </p>
        <div className="mt-6 flex h-[132px] items-end gap-3">
          {SEO_ENGINE.clicks.map((value, index) => {
            const active = inView && index <= tick;
            return (
              <div key={index} className="flex h-full flex-1 flex-col justify-end gap-2">
                <div
                  className="w-full rounded-t-lg transition-all duration-700 ease-out"
                  style={{
                    height: active ? `${value}%` : "6%",
                    background:
                      index === SEO_ENGINE.clicks.length - 1
                        ? "oklch(0.71 0.17 52)"
                        : "oklch(0.62 0.11 250)",
                    opacity: active ? 1 : 0.35,
                  }}
                />
                <span className="text-center text-[0.65rem] font-bold uppercase tracking-wider text-navy-foreground/50">
                  {SEO_ENGINE.months[index]}
                </span>
              </div>
            );
          })}
        </div>
        <dl className="mt-6 divide-y divide-white/10 border-t border-white/12">
          {SEO_ENGINE.metrics.map((metric) => (
            <div key={metric.label} className="flex items-center justify-between gap-3 py-2.5">
              <dt className="text-[0.68rem] font-semibold uppercase tracking-wider text-navy-foreground/55">
                {metric.label}
              </dt>
              <dd className="shrink-0 font-display text-lg font-extrabold tabular-nums leading-none text-navy-foreground">
                +{Math.round(metric.value * (0.35 + 0.65 * progress))}
                {metric.suffix}
              </dd>
            </div>
          ))}
        </dl>


      </div>
    </div>
  );
}
