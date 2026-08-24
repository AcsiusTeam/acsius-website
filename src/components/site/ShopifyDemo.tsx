import { useEffect, useState } from "react";

const ORDERS = [
  { id: "#1042", amount: "$248", item: "Bundle · 2 items" },
  { id: "#1043", amount: "$96", item: "Subscription" },
  { id: "#1044", amount: "$412", item: "Bundle · 5 items" },
  { id: "#1045", amount: "$159", item: "Gift card" },
];

/** Looping Shopify admin dashboard: orders drop in and today's sales tick up. */
export function ShopifyDemo() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((c) => (c >= ORDERS.length ? 1 : c + 1));
    }, 1500);
    return () => window.clearInterval(timer);
  }, []);

  const total = 1840 + count * 274;

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-soft"
      role="img"
      aria-label="Animated Shopify dashboard with new orders arriving"
    >
      <div className="flex items-center justify-between bg-[oklch(0.52_0.13_150)] px-3 py-1.5">
        <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-white">
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-white/20 text-[7px] font-black">
            S
          </span>
          Shopify · Orders
        </span>
        <span className="flex items-center gap-1 text-[8px] font-bold text-white/85">
          <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-white" />
          live
        </span>
      </div>

      <div className="flex items-baseline justify-between px-3 pt-2.5">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
            Sales today
          </p>
          <p className="font-display text-base font-extrabold text-foreground">
            ${total.toLocaleString()}
          </p>
        </div>
        <span className="rounded-full bg-mist px-2 py-1 text-[8px] font-black text-[oklch(0.52_0.13_150)]">
          {count} new order{count > 1 ? "s" : ""}
        </span>
      </div>

      {/* fixed number of slots so the card height never changes */}
      <ul className="flex-1 space-y-1.5 p-2.5">
        {ORDERS.map((order, i) => {
          const shown = i < count;
          const isNewest = i === count - 1;
          return (
            <li
              key={order.id}
              className={`flex items-center justify-between rounded-xl px-2 py-1.5 transition-all duration-500 ${
                shown
                  ? isNewest
                    ? "bg-mist ring-1 ring-[oklch(0.52_0.13_150)]/35 opacity-100"
                    : "bg-mist/60 opacity-100"
                  : "bg-mist/25 opacity-0"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.52_0.13_150)]" />
                <span className="text-[9px] font-bold text-foreground">{order.id}</span>
                <span className="text-[8px] font-semibold text-muted-foreground">{order.item}</span>
              </span>
              <span className="text-[9px] font-black text-foreground">{order.amount}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

