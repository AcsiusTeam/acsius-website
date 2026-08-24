import { useState } from "react";
import { TECH } from "@/lib/site";
import { Reveal } from "@/components/motion";

export function TechEcosystem() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered === null ? null : TECH[hovered];

  const sizes = [
    "text-2xl",
    "text-xl",
    "text-3xl",
    "text-lg",
    "text-2xl",
    "text-xl",
    "text-lg",
    "text-2xl",
  ];

  return (
    <section id="technology" className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Technology Ecosystem
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              We pick the stack that fits the problem.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              No single-framework religion. Hover a technology to see our depth in it and the kind
              of projects we've shipped with it.
            </p>

            <div className="mt-8 min-h-[8.5rem] rounded-[26px] border border-line bg-card p-6 shadow-soft">
              {active ? (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-extrabold text-foreground">
                      {active.name}
                    </h3>
                    <span className="rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
                      {active.level}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {active.note}
                  </p>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">
                  16 core technologies · 3000+ delivered projects · certified AWS & Google partners.
                  Hover any technology to explore.
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-[32px] border border-line bg-mist/60 p-6 shadow-soft lg:p-9">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[32px] opacity-60"
                style={{
                  background:
                    "radial-gradient(45% 45% at 25% 20%, oklch(0.62 0.11 250 / 0.14), transparent 70%), radial-gradient(40% 40% at 80% 80%, oklch(0.71 0.17 52 / 0.14), transparent 70%)",
                }}
              />
              <ul className="relative flex flex-wrap items-center justify-center gap-x-5 gap-y-4">
                {TECH.map((tech, index) => (
                  <li key={tech.name}>
                    <button
                      type="button"
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(index)}
                      onBlur={() => setHovered(null)}
                      className={`font-display font-extrabold tracking-tight transition-all duration-300 ${sizes[index % sizes.length]} ${
                        hovered === index
                          ? "scale-110 text-primary"
                          : hovered === null
                            ? "text-foreground/70 hover:text-primary"
                            : "text-foreground/35"
                      }`}
                    >
                      {tech.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
