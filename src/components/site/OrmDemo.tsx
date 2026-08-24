import { useEffect, useState } from "react";

const RESULTS = [
  { label: "yourbrand.com — Official site", own: true },
  { label: "complaints-forum.in / yourbrand", own: false },
  { label: "Founder profile — Forbes India", own: true },
  { label: "ratemybrand.co / thread 4412", own: false },
  { label: "Google Business — 4.6★ (1,204)", own: true },
];

const MENTIONS = [
  { icon: "★", text: "New 5★ review · Google · Delhi", tone: "ember" },
  { icon: "▼", text: "Negative URL dropped to #14", tone: "blue" },
  { icon: "✕", text: "Impostor profile removed · X", tone: "ember" },
  { icon: "✎", text: "Feature published · Business Std.", tone: "blue" },
  { icon: "◉", text: "Sentiment up 6 pts this week", tone: "ember" },
];

export function OrmDemo() {
  const [score, setScore] = useState(58);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTick((v) => v + 1);
      setScore((v) => (v >= 94 ? 58 : v + 9));
    }, 1900);
    return () => clearInterval(t);
  }, []);

  const bars = [42, 55, 51, 68, 74, 83, 91];
  const stars = Math.min(5, 3 + ((tick % 3) + 1) * 0.5);

  return (
    <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[oklch(0.18_0.03_255)] shadow-lift">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-3 truncate text-[11px] font-bold text-white/50">
          google.com / search?q=yourbrand
        </span>
      </div>

      <div className="p-4">
        {/* reputation score */}
        <div className="rounded-2xl bg-white/[0.05] p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
              Reputation score
            </p>
            <p className="font-display text-xs font-extrabold text-ember">{score}/100</p>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-ember transition-all duration-[1500ms] ease-out"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        {/* page one results */}
        <div className="mt-3 space-y-1.5 rounded-2xl bg-white/[0.05] p-3">
          <p className="mb-1 text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
            Page one · live
          </p>
          {RESULTS.map((r, i) => {
            const rank = r.own ? i : i + (tick % 3);
            return (
              <div
                key={r.label}
                className="flex items-center gap-2.5 rounded-xl px-2 py-1.5 transition-all duration-[1200ms] ease-out"
                style={{ order: rank, opacity: r.own ? 1 : 0.45 }}
              >
                <span
                  className={`grid h-4 w-4 shrink-0 place-items-center rounded-md text-[9px] font-black ${
                    r.own ? "bg-ember text-primary-foreground" : "bg-white/15 text-white/70"
                  }`}
                >
                  {r.own ? "✓" : "!"}
                </span>
                <span className="truncate text-[10.5px] font-semibold text-white/70">{r.label}</span>
              </div>
            );
          })}
        </div>

        {/* sentiment bars + stars */}
        <div className="mt-3 grid grid-cols-[1.4fr_1fr] gap-2">
          <div className="flex h-20 items-end gap-1.5 rounded-2xl bg-white/[0.05] p-3">
            {bars.map((b, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-md transition-all duration-[1200ms] ease-out"
                style={{
                  height: `${((b + ((tick * 6 + i * 9) % 14)) / 108) * 100}%`,
                  background: i > 4 ? "oklch(0.71 0.17 52)" : "oklch(0.62 0.11 250)",
                }}
              />
            ))}
          </div>
          <div className="grid place-items-center rounded-2xl bg-white/[0.05] p-3 text-center">
            <div>
              <p className="font-display text-lg font-extrabold text-white">{stars.toFixed(1)}</p>
              <p className="mt-0.5 text-[10px] tracking-[0.15em] text-ember">★★★★★</p>
              <p className="mt-1 text-[8.5px] font-black uppercase tracking-[0.1em] text-white/40">
                Avg rating
              </p>
            </div>
          </div>
        </div>

        {/* mention feed */}
        <div className="mt-3 space-y-1.5">
          {[0, 1].map((offset) => {
            const item = MENTIONS[(tick + offset) % MENTIONS.length]!;
            return (
              <div
                key={offset}
                className="flex animate-[fadeUp_0.5s_ease-out_both] items-center gap-2.5 rounded-xl bg-white/[0.05] px-3 py-2"
              >
                <span
                  className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-black ${
                    item.tone === "ember"
                      ? "bg-ember text-primary-foreground"
                      : "bg-white/15 text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="truncate text-[11px] font-semibold text-white/70">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
