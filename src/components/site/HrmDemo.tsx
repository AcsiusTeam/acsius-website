import { useEffect, useState } from "react";

const TABS = ["People", "Attend", "Leave", "Reviews"];

const FEED = [
  { icon: "◈", text: "Onboarding complete · 4 joiners", tone: "ember" },
  { icon: "▤", text: "Leave approved · Priya S · 2 days", tone: "blue" },
  { icon: "◉", text: "Attendance synced · 3 locations", tone: "blue" },
  { icon: "✦", text: "Review cycle · 118 of 126 done", tone: "ember" },
  { icon: "☏", text: "Letter issued · Confirmation", tone: "blue" },
];

export function HrmDemo() {
  const [tab, setTab] = useState(0);
  const [progress, setProgress] = useState(41);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTick((v) => v + 1);
      setProgress((v) => (v >= 93 ? 41 : v + 6));
      setTab((v) => (v + 1) % TABS.length);
    }, 1900);
    return () => clearInterval(t);
  }, []);

  const bars = [61, 72, 58, 84, 77, 88, 69];

  return (
    <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[oklch(0.18_0.03_255)] shadow-lift">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-3 truncate text-[11px] font-bold text-white/50">
          hr.yourcompany.in / people
        </span>
      </div>

      <div className="grid grid-cols-[86px_1fr]">
        <div className="border-r border-white/10 p-3">
          {TABS.map((t, i) => (
            <div
              key={t}
              className={`mb-1.5 rounded-xl px-2.5 py-2 text-[10px] font-black uppercase tracking-[0.08em] transition-colors duration-500 ${
                tab === i ? "bg-ember text-primary-foreground" : "text-white/40"
              }`}
            >
              {t}
            </div>
          ))}
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: "Headcount", v: "126" },
              { k: "Present", v: "118" },
              { k: "On leave", v: "6" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/[0.05] px-3 py-2.5">
                <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
                  {s.k}
                </p>
                <p className="mt-1 font-display text-sm font-extrabold text-white">{s.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-2xl bg-white/[0.05] p-3.5">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
                Review cycle · Q3
              </p>
              <p className="font-display text-xs font-extrabold text-ember">{progress}%</p>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-ember transition-all duration-[1500ms] ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-3 flex h-20 items-end gap-1.5 rounded-2xl bg-white/[0.05] p-3">
            {bars.map((b, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-md transition-all duration-[1200ms] ease-out"
                style={{
                  height: `${((b + ((tick * 6 + i * 13) % 16)) / 112) * 100}%`,
                  background: i % 3 === 2 ? "oklch(0.71 0.17 52)" : "oklch(0.62 0.11 250)",
                }}
              />
            ))}
          </div>

          <div className="mt-3 space-y-1.5">
            {[0, 1].map((offset) => {
              const item = FEED[(tick + offset) % FEED.length]!;
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
                  <span className="truncate text-[11px] font-semibold text-white/70">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
