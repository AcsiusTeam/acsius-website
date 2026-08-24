import { useEffect, useState } from "react";

const STEPS = [
  { label: "Product page", note: "Bundle viewed", cvr: 2.1 },
  { label: "Cart drawer", note: "Upsell added", cvr: 3.4 },
  { label: "Checkout", note: "Express pay", cvr: 4.2 },
  { label: "Order placed", note: "Confirmed", cvr: 4.8 },
];

const BARS = [38, 52, 44, 66, 58, 78, 92];

/** Looping storefront → checkout journey with a live conversion readout. */
export function ShopifyStoreDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setStep((s) => (s + 1) % STEPS.length), 1800);
    return () => window.clearInterval(timer);
  }, []);

  const current = STEPS[step] ?? STEPS[0]!;
  const items = step === 0 ? 1 : step === 1 ? 2 : 2;

  return (
    <div
      className="overflow-hidden rounded-[28px] border border-line bg-card shadow-lift"
      role="img"
      aria-label="Animated Shopify storefront moving a shopper from product page to completed order"
    >
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-mist px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="ml-2 flex-1 truncate rounded-full bg-card px-3 py-1 text-[10px] font-bold text-muted-foreground">
          yourbrand.com/products/signature-bundle
        </span>
        <span className="rounded-full bg-[oklch(0.52_0.13_150)] px-2 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-white">
          Shopify
        </span>
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-[1.05fr_0.95fr]">
        {/* storefront */}
        <div className="rounded-[20px] border border-line bg-background p-4">
          <div className="flex items-center justify-between">
            <span className="font-display text-xs font-black uppercase tracking-[0.14em] text-foreground">
              Signature bundle
            </span>
            <span className="relative rounded-full bg-navy px-2.5 py-1 text-[9px] font-black text-navy-foreground">
              Cart {items}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-14 rounded-xl border transition-all duration-700 ${
                  i <= step
                    ? "border-ember/40 bg-ember/15"
                    : "border-line bg-mist"
                }`}
              />
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <span className="block h-2 w-3/4 rounded-full bg-mist" />
            <span className="block h-2 w-1/2 rounded-full bg-mist" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-display text-lg font-extrabold text-foreground">$248</span>
            <span
              className={`rounded-full px-3 py-1.5 text-[10px] font-black transition-colors duration-500 ${
                step >= 2
                  ? "bg-[oklch(0.52_0.13_150)] text-white"
                  : "bg-ember text-primary-foreground"
              }`}
            >
              {step >= 3 ? "Order placed" : step >= 2 ? "Checkout" : "Add to cart"}
            </span>
          </div>
        </div>

        {/* analytics */}
        <div className="flex flex-col rounded-[20px] border border-line bg-navy p-4 text-navy-foreground">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-black uppercase tracking-[0.14em] text-navy-foreground/60">
              Conversion rate
            </span>
            <span className="flex items-center gap-1 text-[9px] font-bold text-navy-foreground/70">
              <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-ember" />
              live
            </span>
          </div>
          <p className="mt-1 font-display text-3xl font-extrabold text-ember">
            {current.cvr.toFixed(1)}%
          </p>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {BARS.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t bg-white/15 transition-all duration-700"
                style={{
                  height: `${i <= step + 3 ? h : 12}%`,
                  background:
                    i <= step + 3 && i >= 4 ? "oklch(0.71 0.17 52)" : undefined,
                }}
              />
            ))}
          </div>
          <ul className="mt-4 space-y-1.5">
            {STEPS.map((s, i) => (
              <li
                key={s.label}
                className={`flex items-center justify-between rounded-lg px-2 py-1 text-[10px] transition-all duration-500 ${
                  i === step
                    ? "bg-white/12 font-bold text-navy-foreground"
                    : "text-navy-foreground/50"
                }`}
              >
                <span>{s.label}</span>
                <span className={i === step ? "text-ember" : ""}>{s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
