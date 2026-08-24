import { useEffect, useState } from "react";

const STEPS = [
  {
    key: "ad",
    stage: "Google Ads · search result",
    headline: "Landing Page Design Services",
    sub: "Live in 7 days · Built to convert",
    focus: "ad",
    kpi: { cvr: "1.4%", cpl: "₹1,240", score: "5/10" },
  },
  {
    key: "match",
    stage: "Message match · hero",
    headline: "Landing Page Design Services",
    sub: "Same promise, same words, one CTA",
    focus: "hero",
    kpi: { cvr: "2.6%", cpl: "₹860", score: "7/10" },
  },
  {
    key: "proof",
    stage: "Proof + objections",
    headline: "900+ pages · 4.9★ rated",
    sub: "Doubt answered before the form",
    focus: "proof",
    kpi: { cvr: "3.4%", cpl: "₹610", score: "8/10" },
  },
  {
    key: "form",
    stage: "3-field form · lead captured",
    headline: "Get my free page mockup",
    sub: "Form · WhatsApp · Call",
    focus: "form",
    kpi: { cvr: "5.1%", cpl: "₹420", score: "9/10" },
  },
];

/** Looping landing-page preview: ad click → message match → proof → form conversion. */
export function LandingPageDemo() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % STEPS.length), 2100);
    return () => window.clearInterval(t);
  }, []);

  const step = STEPS[i] ?? STEPS[0]!;
  const on = (k: string) => step.focus === k;

  return (
    <div
      className="w-full overflow-hidden rounded-[28px] border border-line bg-card shadow-lift"
      role="img"
      aria-label="Animated landing page preview showing a Google ad click, matched hero, proof section and a three-field form converting a lead"
    >
      {/* chrome */}
      <div className="flex min-w-0 items-center gap-2 border-b border-line bg-mist px-4 py-3">
        <span className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full border border-line bg-card px-3 py-1 text-[10px] font-semibold text-muted-foreground">
          yourbrand.com/landing-page-design
        </span>
        <span className="shrink-0 rounded-full bg-ember px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-primary-foreground">
          Live
        </span>
      </div>

      <div className="space-y-3 p-4">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">{step.stage}</p>

        {/* ad card */}
        <div
          className={`rounded-2xl border p-3 transition-all duration-500 ${
            on("ad") ? "border-ember/60 bg-ember/[0.07] shadow-soft" : "border-line bg-mist/60"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="rounded bg-navy px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-navy-foreground">
              Ad
            </span>
            <span className="truncate text-[10px] font-semibold text-muted-foreground">
              acsius.com › landing-page-design
            </span>
          </div>
          <p className="mt-1.5 truncate font-display text-sm font-extrabold text-primary">
            Landing Page Design Company India
          </p>
        </div>

        {/* hero block */}
        <div
          className={`rounded-2xl border p-4 transition-all duration-500 ${
            on("hero") ? "border-ember/60 bg-ember/[0.07] shadow-soft" : "border-line bg-mist/60"
          }`}
        >
          <p className="truncate font-display text-base font-extrabold text-foreground">
            {step.headline}
          </p>
          <p className="mt-1 truncate text-[11px] text-muted-foreground">{step.sub}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="whitespace-nowrap rounded-full bg-ember px-3 py-1.5 text-[10px] font-black text-primary-foreground">
              Get my free mockup
            </span>
            <span className="whitespace-nowrap rounded-full border border-line bg-card px-3 py-1.5 text-[10px] font-bold text-foreground">
              WhatsApp us
            </span>
          </div>
        </div>

        {/* proof + form row */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div
            className={`min-w-0 rounded-2xl border p-3 transition-all duration-500 ${
              on("proof") ? "border-ember/60 bg-ember/[0.07] shadow-soft" : "border-line bg-mist/60"
            }`}
          >
            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-muted-foreground">
              Proof
            </p>
            <div className="mt-2 space-y-1.5">
              {["900+ pages shipped", "4.9★ client rating", "Since 2010, New Delhi"].map((t) => (
                <p key={t} className="flex items-center gap-1.5 truncate text-[10px] font-semibold text-foreground">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  {t}
                </p>
              ))}
            </div>
          </div>

          <div
            className={`min-w-0 rounded-2xl border p-3 transition-all duration-500 ${
              on("form") ? "border-ember/60 bg-ember/[0.07] shadow-soft" : "border-line bg-mist/60"
            }`}
          >
            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-muted-foreground">
              Form · 3 fields
            </p>
            <div className="mt-2 space-y-1.5">
              {["Name", "Phone", "What do you need?"].map((f, idx) => (
                <div
                  key={f}
                  className={`truncate rounded-lg border px-2 py-1 text-[10px] transition-colors duration-500 ${
                    on("form") && idx <= i
                      ? "border-ember/50 bg-card text-foreground"
                      : "border-line bg-card/60 text-muted-foreground"
                  }`}
                >
                  {f}
                </div>
              ))}
            </div>
            <p
              className={`mt-2 truncate text-[10px] font-black transition-opacity duration-500 ${
                on("form") ? "text-ember opacity-100" : "opacity-0"
              }`}
            >
              ✓ Lead sent to CRM
            </p>
          </div>
        </div>

        {/* kpi bar */}
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-line">
          {[
            { k: "Conv. rate", v: step.kpi.cvr },
            { k: "Cost / lead", v: step.kpi.cpl },
            { k: "Quality Score", v: step.kpi.score },
          ].map((m) => (
            <div key={m.k} className="bg-card px-3 py-2.5 text-center">
              <p className="font-display text-sm font-extrabold text-ember">{m.v}</p>
              <p className="mt-0.5 truncate text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {m.k}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
