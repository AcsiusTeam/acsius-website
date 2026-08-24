import { useState } from "react";
import { PROCESS } from "@/lib/site";
import { Reveal } from "@/components/motion";

export function Process() {
  const [active, setActive] = useState(0);
  const step = PROCESS[active] ?? PROCESS[0]!;

  return (
    <section id="process" className="relative overflow-hidden bg-gradient-navy py-24 text-navy-foreground lg:py-32">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            How We Work
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.4rem]">
            A delivery journey you can actually track.
          </h2>
        </Reveal>

        <div className="mt-14 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative min-w-[860px]">
            <div aria-hidden className="absolute left-0 right-0 top-7 h-px bg-navy-foreground/20" />
            <div
              aria-hidden
              className="absolute top-7 h-px bg-gradient-brand transition-all duration-700"
              style={{ width: `${((active + 1) / PROCESS.length) * 100}%` }}
            />
            <ol className="relative grid grid-cols-7 gap-3">
              {PROCESS.map((item, index) => {
                const isActive = index === active;
                const isDone = index <= active;
                return (
                  <li key={item.step}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      aria-current={isActive}
                      className="group block w-full pt-0 text-left"
                    >
                      <span
                        className={`grid h-14 w-14 place-items-center rounded-2xl font-display text-sm font-extrabold transition-all duration-500 ${
                          isActive
                            ? "bg-gradient-brand text-primary-foreground shadow-ember"
                            : isDone
                              ? "surface-glass-dark text-navy-foreground"
                              : "border border-navy-foreground/15 bg-navy-foreground/5 text-navy-foreground/60"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={`mt-4 block font-display text-base font-bold transition-colors ${isActive ? "text-navy-foreground" : "text-navy-foreground/60"}`}
                      >
                        {item.step}
                      </span>
                      <span className="mt-1 block text-xs text-navy-foreground/45">
                        {item.duration}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <Reveal delay={80}>
          <div className="surface-glass-dark mt-10 grid gap-6 rounded-[28px] p-8 lg:grid-cols-[auto_1fr_1fr] lg:items-start lg:gap-10">
            <p className="font-display text-6xl font-extrabold text-ember/80 lg:text-7xl">
              0{active + 1}
            </p>
            <div>
              <h3 className="font-display text-2xl font-extrabold">{step.step}</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-foreground/75">
                {step.summary}
              </p>
            </div>
            <div className="rounded-2xl border border-navy-foreground/12 bg-navy-foreground/5 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                What happens
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/80">{step.detail}</p>
              <p className="mt-4 text-sm font-bold">Typical duration · {step.duration}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
