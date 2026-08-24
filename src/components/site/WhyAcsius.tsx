import { useState } from "react";
import { COMPARISON } from "@/lib/site";
import { Reveal } from "@/components/motion";

export function WhyAcsius() {
  const [active, setActive] = useState(0);

  return (
    <section id="why" className="relative bg-mist/70 py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Why ACSIUS
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              The difference shows up after the kickoff call.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Eight areas where clients tell us we work differently from the agency they left.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {COMPARISON.map((row, index) => (
              <li key={row.area}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  aria-pressed={index === active}
                  className={`w-full rounded-2xl px-5 py-3.5 text-left font-display text-sm font-bold transition-all duration-300 ${
                    index === active
                      ? "bg-navy text-navy-foreground shadow-soft"
                      : "border border-line bg-card text-foreground hover:border-primary/40"
                  }`}
                >
                  {row.area}
                </button>
              </li>
            ))}
          </ul>

          <aside className="relative hidden h-full lg:block">
            <div className="sticky top-28 z-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[26px] border border-dashed border-line bg-card/60 p-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Typical Agency
                  </p>
                  <p className="mt-4 font-display text-xl font-bold leading-snug text-muted-foreground line-through decoration-destructive/40 decoration-2">
                    {COMPARISON[active]?.typical}
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {COMPARISON[active]?.typicalBullets?.map((b) => (
                      <li key={b}>✕ {b}</li>
                    ))}
                  </ul>
                </div>

                <div className="relative overflow-hidden rounded-[26px] border border-transparent bg-gradient-brand p-7 text-primary-foreground shadow-lift">
                  <span
                    aria-hidden
                    className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-navy/20 blur-2xl"
                  />
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground/80">
                    ACSIUS
                  </p>
                  <p className="mt-4 font-display text-xl font-bold leading-snug">
                    {COMPARISON[active]?.acsius}
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-primary-foreground/90">
                    {COMPARISON[active]?.acsiusBullets?.map((b) => (
                      <li key={b}>✓ {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
