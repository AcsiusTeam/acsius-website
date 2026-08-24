import { useEffect, useState } from "react";

const TABS = ["OPD", "Wards", "Pharmacy", "Billing"];

const FEED = [
  { icon: "✚", text: "Admitted · Bed W2-108 · Gen. Ward", tone: "ember" },
  { icon: "⚗", text: "Lab report signed · CBC · MR-4821", tone: "blue" },
  { icon: "₹", text: "Discharge bill settled · ₹48,260", tone: "ember" },
  { icon: "▦", text: "Pre-auth approved · TPA · ₹1.2L", tone: "blue" },
  { icon: "◉", text: "Pharmacy issue · Ward indent #338", tone: "blue" },
];

const BEDS = [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1];

export function HospitalDemo() {
  const [tab, setTab] = useState(0);
  const [occupancy, setOccupancy] = useState(64);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTick((v) => v + 1);
      setOccupancy((v) => (v >= 92 ? 64 : v + 6));
      setTab((v) => (v + 1) % TABS.length);
    }, 1900);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[oklch(0.18_0.03_255)] shadow-lift">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-3 truncate text-[11px] font-bold text-white/50">
          hms.yourhospital.in / today
        </span>
      </div>

      <div className="grid grid-cols-[110px_1fr]">
        <div className="border-r border-white/10 p-2">
          {TABS.map((t, i) => (
            <div
              key={t}
              className={`mb-1.5 truncate rounded-xl px-2 py-2 text-[10px] font-black uppercase tracking-[0.05em] transition-colors duration-500 ${
                tab === i ? "bg-ember text-primary-foreground" : "text-white/40"
              }`}
              title={t}
            >
              {t}
            </div>
          ))}
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: "OPD today", v: "212" },
              { k: "In-patients", v: "68" },
              { k: "Collection", v: "₹9.4L" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/[0.05] px-3 py-2.5">
                <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
                  {s.k}
                </p>
                <p className="mt-1 font-display text-sm font-extrabold text-white">{s.v}</p>
              </div>
            ))}
          </div>

          {/* occupancy */}
          <div className="mt-3 rounded-2xl bg-white/[0.05] p-3.5">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
                Bed occupancy
              </p>
              <p className="font-display text-xs font-extrabold text-ember">{occupancy}%</p>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-ember transition-all duration-[1500ms] ease-out"
                style={{ width: `${occupancy}%` }}
              />
            </div>
          </div>

          {/* bed map */}
          <div className="mt-3 rounded-2xl bg-white/[0.05] p-3">
            <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
              Ward bed map
            </p>
            <div className="mt-2 grid grid-cols-12 gap-1">
              {BEDS.map((b, i) => {
                const busy = (b + Math.floor((tick + i) / 7)) % 2 === 1;
                return (
                  <span
                    key={i}
                    className="h-3.5 rounded-[4px] transition-colors duration-[1200ms]"
                    style={{
                      background: busy ? "oklch(0.71 0.17 52)" : "oklch(0.62 0.11 250 / 0.45)",
                    }}
                  />
                );
              })}
            </div>
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
