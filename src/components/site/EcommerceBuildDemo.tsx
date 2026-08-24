import { useEffect, useState } from "react";

const STAGES = [
  {
    key: "catalogue",
    label: "Catalogue",
    url: "yourstore.com/collections/new-in",
    note: "Faceted search live",
    kpi: { lcp: "1.9s", cvr: "1.8%", rev: "₹1.2L" },
  },
  {
    key: "pdp",
    label: "Product page",
    url: "yourstore.com/products/signature-kit",
    note: "Variants + bundle",
    kpi: { lcp: "1.6s", cvr: "2.6%", rev: "₹2.4L" },
  },
  {
    key: "cart",
    label: "Cart",
    url: "yourstore.com/cart",
    note: "Upsell accepted",
    kpi: { lcp: "1.5s", cvr: "3.5%", rev: "₹3.9L" },
  },
  {
    key: "checkout",
    label: "Checkout",
    url: "yourstore.com/checkout",
    note: "UPI · Cards · COD",
    kpi: { lcp: "1.4s", cvr: "4.6%", rev: "₹6.1L" },
  },
];

/** Looping store build preview: catalogue → PDP → cart → checkout with live KPIs. */
export function EcommerceBuildDemo() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % STAGES.length), 2000);
    return () => window.clearInterval(t);
  }, []);

  const stage = STAGES[i] ?? STAGES[0]!;

  return (
    <div
      className="w-full overflow-hidden rounded-[28px] border border-line bg-card shadow-lift"
      role="img"
      aria-label="Animated eCommerce store preview moving from catalogue to product page, cart and checkout with live performance metrics"
    >
      {/* browser chrome */}
      <div className="flex min-w-0 items-center gap-2 border-b border-line bg-mist px-4 py-3">
        <span className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="ml-1 min-w-0 flex-1 truncate rounded-full bg-card px-3 py-1 text-[10px] font-bold text-muted-foreground">
          {stage.url}
        </span>
        <span className="shrink-0 rounded-full bg-navy px-2 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-navy-foreground">
          Live
        </span>
      </div>

      {/* stage rail */}
      <div className="flex min-w-0 gap-1.5 border-b border-line bg-card px-4 py-3">
        {STAGES.map((s, idx) => (
          <span
            key={s.key}
            className={`min-w-0 flex-1 truncate rounded-full px-2 py-1 text-center text-[9px] font-black uppercase tracking-[0.08em] transition-all duration-500 ${
              idx === i
                ? "bg-ember text-primary-foreground"
                : idx < i
                  ? "bg-mist text-foreground"
                  : "bg-mist/60 text-muted-foreground"
            }`}
          >
            {s.label}
          </span>
        ))}
      </div>

      {/* preview */}
      <div className="min-h-[228px] bg-background p-4">
        {stage.key === "catalogue" && (
          <div className="animate-[fadeUp_0.4s_ease-out_both]">
            <div className="flex items-center justify-between gap-3">
              <span className="font-display text-xs font-black uppercase tracking-[0.12em] text-foreground">
                New in · 148 products
              </span>
              <span className="rounded-full border border-line px-2 py-1 text-[9px] font-bold text-muted-foreground">
                Filters 3
              </span>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                <span
                  key={n}
                  className="h-[62px] rounded-xl border border-line bg-mist"
                  style={{ animation: `fadeUp 0.5s ease-out ${n * 60}ms both` }}
                />
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              {["Size", "Colour", "Price", "In stock"].map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-line bg-card px-2.5 py-1 text-[9px] font-bold text-muted-foreground"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}

        {stage.key === "pdp" && (
          <div className="grid animate-[fadeUp_0.4s_ease-out_both] gap-3 sm:grid-cols-[0.9fr_1.1fr]">
            <span className="h-[150px] min-w-0 rounded-xl border border-ember/40 bg-ember/10" />
            <div className="min-w-0">
              <span className="block h-2.5 w-3/4 rounded-full bg-mist" />
              <span className="mt-2 block h-2 w-1/2 rounded-full bg-mist" />
              <p className="mt-3 font-display text-xl font-extrabold text-foreground">₹4,980</p>
              <div className="mt-3 flex gap-1.5">
                {["S", "M", "L", "XL"].map((s, idx) => (
                  <span
                    key={s}
                    className={`grid h-7 w-7 place-items-center rounded-lg border text-[10px] font-black ${
                      idx === 1
                        ? "border-transparent bg-navy text-navy-foreground"
                        : "border-line text-muted-foreground"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="mt-3 flex h-9 items-center justify-center rounded-full bg-ember px-3 text-[10px] font-black whitespace-nowrap text-primary-foreground">
                Add to cart
              </span>
            </div>
          </div>
        )}

        {stage.key === "cart" && (
          <div className="animate-[fadeUp_0.4s_ease-out_both] space-y-2">
            {[
              { n: "Signature kit · M", p: "₹4,980" },
              { n: "Refill pack (upsell)", p: "₹1,240" },
            ].map((row, idx) => (
              <div
                key={row.n}
                className={`flex min-w-0 items-center gap-3 rounded-xl border px-3 py-2.5 ${
                  idx === 1 ? "border-ember/40 bg-ember/10" : "border-line bg-mist"
                }`}
                style={{ animation: `fadeUp 0.45s ease-out ${idx * 120}ms both` }}
              >
                <span className="h-9 w-9 shrink-0 rounded-lg bg-card" />
                <span className="min-w-0 flex-1 truncate text-[11px] font-bold text-foreground">
                  {row.n}
                </span>
                <span className="shrink-0 text-[11px] font-black text-foreground">{row.p}</span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-xl border border-line bg-card px-3 py-2.5">
              <span className="text-[10px] font-black uppercase tracking-[0.1em] text-muted-foreground">
                Subtotal · free shipping
              </span>
              <span className="font-display text-base font-extrabold text-ember">₹6,220</span>
            </div>
            <span className="flex h-9 items-center justify-center rounded-full bg-navy text-[10px] font-black whitespace-nowrap text-navy-foreground">
              Proceed to checkout
            </span>
          </div>
        )}

        {stage.key === "checkout" && (
          <div className="animate-[fadeUp_0.4s_ease-out_both]">
            <div className="grid gap-2 sm:grid-cols-2">
              {["UPI", "Cards", "Wallets", "COD"].map((m, idx) => (
                <span
                  key={m}
                  className={`flex h-9 min-w-0 items-center justify-center rounded-xl border text-[10px] font-black whitespace-nowrap ${
                    idx === 0
                      ? "border-transparent bg-ember text-primary-foreground"
                      : "border-line bg-mist text-foreground"
                  }`}
                  style={{ animation: `fadeUp 0.45s ease-out ${idx * 90}ms both` }}
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-3 space-y-2 rounded-xl border border-line bg-mist p-3">
              <span className="block h-2 w-2/3 rounded-full bg-card" />
              <span className="block h-2 w-1/2 rounded-full bg-card" />
              <span className="block h-2 w-3/5 rounded-full bg-card" />
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-navy px-3 py-2.5 text-navy-foreground">
              <span className="flex items-center gap-2 text-[10px] font-bold">
                <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ember" />
                Order placed · 12s
              </span>
              <span className="font-display text-sm font-extrabold text-ember">₹6,220</span>
            </div>
          </div>
        )}
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-3 gap-px border-t border-line bg-line">
        {[
          { k: "LCP", v: stage.kpi.lcp },
          { k: "CVR", v: stage.kpi.cvr },
          { k: "Revenue / day", v: stage.kpi.rev },
        ].map((kpi) => (
          <div key={kpi.k} className="min-w-0 bg-card px-3 py-3">
            <p className="truncate text-[9px] font-black uppercase tracking-[0.1em] text-muted-foreground">
              {kpi.k}
            </p>
            <p className="mt-1 truncate font-display text-base font-extrabold text-ember transition-all duration-500">
              {kpi.v}
            </p>
          </div>
        ))}
      </div>

      <p className="border-t border-line bg-mist px-4 py-2.5 text-center text-[10px] font-bold text-muted-foreground">
        {stage.note}
      </p>
    </div>
  );
}
