import { useEffect, useState } from "react";

const TABS = ["Dashboard", "Fees", "Attendance", "Results"];

const FEED = [
  { icon: "₹", text: "Fee paid · Aarav S. · ₹18,400", tone: "ember" },
  { icon: "◉", text: "Attendance locked · Class 7-B", tone: "blue" },
  { icon: "✎", text: "Marks entered · Science · Class 9", tone: "blue" },
  { icon: "◈", text: "New admission enquiry · Class 4", tone: "ember" },
  { icon: "➤", text: "Bus 12 reached Stop 6", tone: "blue" },
];

export function SchoolErpDemo() {
  const [tab, setTab] = useState(0);
  const [collected, setCollected] = useState(42);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTick((v) => v + 1);
      setCollected((v) => (v >= 92 ? 42 : v + 6));
      setTab((v) => (v + 1) % TABS.length);
    }, 1900);
    return () => clearInterval(t);
  }, []);

  const bars = [58, 72, 64, 86, 79, 94, 88];

  return (
    <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[oklch(0.18_0.03_255)] shadow-lift">
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-3 truncate text-[11px] font-bold text-white/50">
          erp.yourschool.edu.in / admin
        </span>
      </div>

      <div className="grid grid-cols-[120px_1fr]">
        {/* sidebar */}
        <div className="border-r border-white/10 p-2.5">
          {TABS.map((t, i) => (
            <div
              key={t}
              className={`mb-2 truncate rounded-xl px-2.5 py-2 text-[10px] font-bold uppercase leading-none tracking-[0.04em] transition-colors duration-500 ${
                tab === i ? "bg-ember text-primary-foreground" : "text-white/40"
              }`}
              title={t}
            >
              {t}
            </div>
          ))}
        </div>

        {/* body */}
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: "Students", v: "1,482" },
              { k: "Present", v: "94%" },
              { k: "Dues", v: "₹6.2L" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/[0.05] px-3 py-2.5">
                <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
                  {s.k}
                </p>
                <p className="mt-1 font-display text-sm font-extrabold text-white">{s.v}</p>
              </div>
            ))}
          </div>

          {/* fee collection progress */}
          <div className="mt-3 rounded-2xl bg-white/[0.05] p-3.5">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
                Term fee collected
              </p>
              <p className="font-display text-xs font-extrabold text-ember">{collected}%</p>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-ember transition-all duration-[1500ms] ease-out"
                style={{ width: `${collected}%` }}
              />
            </div>
          </div>

          {/* attendance bars */}
          <div className="mt-3 flex h-20 items-end gap-1.5 rounded-2xl bg-white/[0.05] p-3">
            {bars.map((b, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-md transition-all duration-[1200ms] ease-out"
                style={{
                  height: `${((b + ((tick * 7 + i * 11) % 18)) / 112) * 100}%`,
                  background: i % 3 === 2 ? "oklch(0.71 0.17 52)" : "oklch(0.62 0.11 250)",
                }}
              />
            ))}
          </div>

          {/* live feed */}
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
