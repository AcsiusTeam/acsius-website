import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/lib/site";
import { Reveal } from "@/components/motion";

function ServiceGlyph({ index, active }: { index: number; active: boolean }) {
  const paths = [
    "M6 26h28M6 18h20M6 10h14",
    "M10 8l-6 12 6 12M30 8l6 12-6 12M22 6l-4 28",
    "M20 4l14 8v16l-14 8L6 28V12z",
    "M6 12h28v16H6zM14 32h12",
    "M8 30l8-20 8 20M28 10v20",
    "M20 6a14 14 0 100 28 14 14 0 000-28zM6 20h28",
  ];
  return (
    <svg
      viewBox="0 0 40 40"
      className={`h-9 w-9 transition-colors duration-500 ${active ? "text-primary-foreground" : "text-primary"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d={paths[index % paths.length]} />
    </svg>
  );
}

export function Expertise() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active] ?? SERVICES[0]!;
  const sectionRef = useRef<HTMLElement>(null);


  return (
    <section ref={sectionRef} id="services" className="relative py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Our Expertise
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              Ten core capabilities. One accountable delivery team.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Hover or tap any capability to see the stack, the business benefit and the industries
              we deliver it for.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <ul className="grid gap-2 sm:grid-cols-2">
            {SERVICES.map((service, index) => {
              const isActive = index === active;
              return (
                <Reveal key={service.name} as="li" delay={Math.min(index * 40, 320)}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    className={`group h-full w-full rounded-3xl border p-5 text-left transition-all duration-500 ${
                      isActive
                        ? "border-transparent bg-gradient-brand text-primary-foreground shadow-lift"
                        : "border-line bg-card text-foreground hover:-translate-y-1 hover:shadow-soft"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <ServiceGlyph index={index} active={isActive} />
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                          isActive
                            ? "bg-navy/25 text-primary-foreground"
                            : "bg-mist text-muted-foreground"
                        }`}
                      >
                        {service.group}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold leading-snug">
                      {service.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed transition-all duration-500 ${
                        isActive
                          ? "max-h-24 opacity-100"
                          : "max-h-0 overflow-hidden opacity-0 sm:group-hover:max-h-24 sm:group-hover:opacity-100"
                      }`}
                    >
                      {service.overview}
                    </p>
                  </button>
                </Reveal>
              );
            })}
          </ul>

          <aside className="relative hidden h-full lg:block">
            <div
              className="sticky top-28 z-10 rounded-[28px] border border-line bg-card p-7 shadow-lift"
            >
              <p className="eyebrow">Capability detail</p>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.overview}
              </p>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Technologies
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-mist px-3 py-1.5 text-xs font-semibold text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Benefits
                  </dt>
                  <dd className="mt-2 space-y-1.5">
                    {service.benefits.map((benefit) => (
                      <p
                        key={benefit}
                        className="flex items-start gap-2 text-sm font-medium text-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        {benefit}
                      </p>
                    ))}
                  </dd>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Industries
                    </dt>
                    <dd className="mt-2 text-sm text-foreground">
                      {service.industries.join(", ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Project types
                    </dt>
                    <dd className="mt-2 text-sm text-foreground">{service.projects}</dd>
                  </div>
                </div>
              </dl>

              <a
                href={service.slug ?? "#contact"}
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-navy-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Discuss a {service.name} project →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
