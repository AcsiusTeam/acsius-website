import { useEffect, useState } from "react";

const ORDERS = [
  { id: "#100248", city: "Austin, TX", total: "$412.00", items: 3 },
  { id: "#100249", city: "Manchester, UK", total: "£188.50", items: 2 },
  { id: "#100250", city: "Dubai, AE", total: "AED 1,240", items: 5 },
  { id: "#100251", city: "Mumbai, IN", total: "₹18,900", items: 4 },
];

const FUNNEL = [
  { label: "Product view", pct: 100 },
  { label: "Add to cart", pct: 46 },
  { label: "Checkout", pct: 31 },
  { label: "Paid", pct: 24 },
];

/** Animated Magento admin: live orders, revenue and checkout funnel. */
export function MagentoStoreDemo() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setTick((t) => t + 1), 1400);
    return () => window.clearInterval(timer);
  }, []);

  const visible = ORDERS.slice(0, (tick % ORDERS.length) + 1).reverse();
  const revenue = 42800 + (tick % 9) * 1370;

  return (
    <div
      className="overflow-hidden rounded-[26px] border border-white/10 bg-navy/95 shadow-lift backdrop-blur"
      role="img"
      aria-label="Animated Magento admin dashboard showing live orders, revenue and checkout funnel"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="grid h-5 w-5 place-items-center rounded bg-ember text-[9px] font-black text-primary-foreground">
          M
        </span>
        <span className="text-[9px] font-black uppercase tracking-[0.18em] text-navy-foreground/60">
          Adobe Commerce · Dashboard
        </span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full border border-white/12 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-navy-foreground/70">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[oklch(0.86_0.09_160)]" />
          Live
        </span>
      </div>

      <div className="grid gap-px bg-white/10 sm:grid-cols-3">
        {[
          { k: "Revenue today", v: `$${revenue.toLocaleString()}`, tone: "text-ember" },
          { k: "Conversion", v: `${(2.4 + (tick % 5) * 0.21).toFixed(2)}%`, tone: "text-[oklch(0.86_0.09_160)]" },
          { k: "Avg order", v: `$${(168 + (tick % 6) * 7).toFixed(0)}`, tone: "text-navy-foreground" },
        ].map((s) => (
          <div key={s.k} className="bg-navy/90 px-4 py-3.5">
            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
              {s.k}
            </p>
            <p className={`mt-1.5 font-display text-lg font-extrabold ${s.tone}`}>{s.v}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 py-3.5">
        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/55">
          New orders
        </p>
        <ul className="mt-2.5 min-h-[132px] space-y-1.5">
          {visible.map((o) => (
            <li
              key={o.id}
              className="flex animate-[fadeUp_0.4s_ease-out_both] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2"
            >
              <span className="font-mono text-[10px] font-bold text-ember">{o.id}</span>
              <span className="truncate text-[10px] text-navy-foreground/70">{o.city}</span>
              <span className="ml-auto rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-bold text-navy-foreground/60">
                {o.items} items
              </span>
              <span className="font-display text-[11px] font-extrabold text-navy-foreground">
                {o.total}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/10 px-4 py-3.5">
        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/55">
          Checkout funnel
        </p>
        <div className="mt-2.5 space-y-2">
          {FUNNEL.map((f, i) => {
            const width = Math.min(100, f.pct + (i === FUNNEL.length - 1 ? (tick % 5) * 1.6 : 0));
            return (
              <div key={f.label} className="flex items-center gap-3">
                <span className="w-[74px] shrink-0 text-[9px] font-bold text-navy-foreground/60">
                  {f.label}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      i === FUNNEL.length - 1 ? "bg-ember" : "bg-white/35"
                    }`}
                    style={{ width: `${width}%` }}
                  />
                </div>
                <span className="w-9 shrink-0 text-right font-mono text-[9px] font-bold text-navy-foreground/70">
                  {width.toFixed(0)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
