import { useEffect, useRef, useState } from "react";
import { SC_AUDIT } from "@/lib/seo-company";

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

type SeoAuditDemoProps = {
  items?: { label: string; score: number }[];
  domain?: string;
  label?: string;
};

/** Animated SEO audit scorecard: dial climbs, dimension bars fill in sequence. */
export function SeoAuditDemo({
  items = SC_AUDIT,
  domain = "acsius-client.com",
  label = "Animated SEO audit scorecard",
}: SeoAuditDemoProps = {}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(
      () => setStep((s) => (s >= items.length ? 0 : s + 1)),
      900,
    );
    return () => window.clearInterval(id);
  }, [inView, items.length]);

  const revealed = items.slice(0, step);
  const total = revealed.reduce((sum, a) => sum + a.score, 0);
  const score = revealed.length ? Math.round(total / revealed.length) : 0;
  const circumference = 2 * Math.PI * 42;

  return (
    <div
      ref={ref}
      className="rounded-[30px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur lg:p-7"
      role="img"
      aria-label={label}
    >
      <p className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-ember">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
        Live audit · {domain}
      </p>

      <div className="mt-6 flex items-center gap-6">
        <div className="relative h-28 w-28 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" strokeWidth="8" className="stroke-white/12" />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              className="stroke-ember transition-all duration-700 ease-out"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - score / 100)}
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-2xl font-extrabold text-navy-foreground">{score}</span>
          </div>
        </div>
        <div>
          <p className="font-display text-lg font-extrabold text-navy-foreground">Health score</p>
          <p className="mt-1 text-xs leading-relaxed text-navy-foreground/65">
            {revealed.length}/{items.length} dimensions scanned · effort-weighted fix list generating
          </p>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {items.map((a, i) => {
          const on = i < step;
          return (
            <li key={a.label}>
              <div className="flex items-center justify-between text-[0.72rem] font-bold">
                <span className={on ? "text-navy-foreground/85" : "text-navy-foreground/35"}>
                  {a.label}
                </span>
                <span className={on ? "text-ember" : "text-navy-foreground/30"}>
                  {on ? a.score : "—"}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-ember transition-all duration-700 ease-out"
                  style={{ width: on ? `${a.score}%` : "0%" }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
