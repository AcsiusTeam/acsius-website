import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { WpAdminDemo } from "@/components/site/WpAdminDemo";
import { ShopifyDemo } from "@/components/site/ShopifyDemo";
import { ReactCodeDemo } from "@/components/site/ReactCodeDemo";
import { SalesGraphDemo } from "@/components/site/SalesGraphDemo";
import { CONTACT } from "@/lib/site";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import {
  WD_ANSWERS,
  WD_DELIVERABLES,
  WD_FAQS,
  WD_HERO,
  WD_INDUSTRIES,
  WD_PILLARS,
  WD_OUTCOMES,
  WD_PROCESS,
  WD_SERVICES,
  WD_WHY,
} from "@/lib/web-design";

function DemoBox({
  label,
  children,
  className = "",
  bodyHeight = 172,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  bodyHeight?: number;
}) {
  return (
    <div className={`rounded-[20px] border border-white/10 bg-white/5 p-2.5 ${className}`}>
      <p className="mb-2 flex items-center gap-1.5 px-1 text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/70">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
        {label}
      </p>
      <div className="overflow-hidden" style={{ height: bodyHeight }}>
        <div className="h-full [&>*]:h-full">{children}</div>
      </div>
    </div>
  );
}

function HeroPanel() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);
  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[580px]">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 30% 25%, oklch(0.62 0.11 250 / 0.35), transparent 70%), radial-gradient(40% 40% at 75% 80%, oklch(0.71 0.17 52 / 0.32), transparent 70%)",
        }}
      />
      <div
        className="relative rounded-[28px] border border-white/12 bg-white/[0.06] p-3 shadow-lift backdrop-blur transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0) rotateX(${offset.y * -2}deg) rotateY(${offset.x * 2}deg)`,
        }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <DemoBox label="WordPress">
            <WpAdminDemo />
          </DemoBox>
          <DemoBox label="Shopify">
            <ShopifyDemo />
          </DemoBox>
          <DemoBox label="Custom code" bodyHeight={200}>
            <ReactCodeDemo />
          </DemoBox>
          <DemoBox label="Conversions" bodyHeight={200}>
            <SalesGraphDemo />
          </DemoBox>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 12% 8%, oklch(0.62 0.11 250 / 0.35), transparent 70%), radial-gradient(50% 55% at 88% 22%, oklch(0.71 0.17 52 / 0.25), transparent 70%), radial-gradient(70% 60% at 50% 110%, oklch(0.62 0.11 250 / 0.22), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {WD_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {WD_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {WD_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {WD_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta px-7 py-3.5">
                Get a Free Design Consultation
              </a>
              <a
                href={CONTACT.whatsapp ?? "#contact"}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Request a Quote
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {WD_HERO.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-3xl font-extrabold text-ember">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy-foreground/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <HeroPanel />
        </Reveal>
      </div>
    </section>
  );
}

function Intro() {
  const [active, setActive] = useState(WD_PILLARS[0]!.key);
  const [openAnswer, setOpenAnswer] = useState<number | null>(0);
  const pillar = WD_PILLARS.find((p) => p.key === active) ?? WD_PILLARS[0]!;

  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Website Designing Services India
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              A web design company in India that designs for the buyer, not the trend.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-base leading-relaxed text-muted-foreground">
              Four things shape how we work. Pick one to see what it means for your project.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {WD_PILLARS.map((item) => {
              const isActive = item.key === active;
              return (
                <button
                  key={item.key}
                  type="button"
                  onMouseEnter={() => setActive(item.key)}
                  onFocus={() => setActive(item.key)}
                  onClick={() => setActive(item.key)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "border-transparent bg-primary text-primary-foreground shadow-lift"
                      : "border-line bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/40"
                  }`}
                >
                  {item.tab}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-[28px] border border-line bg-card p-8 shadow-soft lg:p-10">
              <span
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary opacity-[0.07]"
              />
              <h3 className="relative font-display text-2xl font-extrabold leading-[1.12] text-foreground lg:text-[2rem]">
                {pillar.title}
              </h3>
              <p className="relative mt-4 max-w-[58ch] leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
              <ul className="relative mt-7 flex flex-wrap gap-2">
                {pillar.facts.map((fact) => (
                  <li
                    key={fact}
                    className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold text-primary"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-3">
            {WD_ANSWERS.map((item, index) => {
              const isOpen = openAnswer === index;
              return (
                <Reveal key={item.q} delay={index * 80}>
                  <div
                    className={`group rounded-[26px] border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${isOpen ? "border-primary/30" : "border-line hover:border-primary/30"}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenAnswer(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 text-left"
                    >
                      <h3 className="font-display text-base font-bold text-foreground">
                        {item.q}
                      </h3>
                      <span
                        aria-hidden
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-black text-primary-foreground transition-all duration-300 ${isOpen ? "rotate-45 bg-ember" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pt-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <p className="min-h-0 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="bg-mist/70 py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Why ACSIUS
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              What a good website design company in India should give you.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Four commitments behind every website we design — from a five-page business site to a
              full ecommerce build.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WD_WHY.map((item, index) => (
            <Reveal key={item.title} as="li" delay={index * 60}>
              <div className="group flex h-full flex-col gap-4 rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span className="font-display text-4xl font-extrabold text-ember/25 transition-colors duration-500 group-hover:text-ember">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceExplorer() {
  const [active, setActive] = useState(WD_SERVICES[0]!.key);
  const current = WD_SERVICES.find((s) => s.key === active) ?? WD_SERVICES[0]!;

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Our Web Design Services
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              Eight disciplines. One website that performs.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Hover or tap any discipline to see what is included and the outcome it is meant to
              produce.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)]">
          <ul className="grid gap-2 sm:grid-cols-2">
            {WD_SERVICES.map((service, index) => {
              const isActive = service.key === active;
              return (
                <Reveal key={service.key} as="li" delay={Math.min(index * 40, 320)}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(service.key)}
                    onFocus={() => setActive(service.key)}
                    onClick={() => setActive(service.key)}
                    aria-pressed={isActive}
                    className={`h-full w-full rounded-3xl border p-5 text-left transition-all duration-500 ${
                      isActive
                        ? "border-transparent bg-primary text-primary-foreground shadow-lift"
                        : "border-line bg-card text-foreground hover:-translate-y-1 hover:shadow-soft"
                    }`}
                  >
                    <span
                      className={`font-display text-xs font-extrabold ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-base font-bold">{service.name}</h3>
                    <p
                      className={`mt-1 text-xs leading-relaxed ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      {service.outcome}
                    </p>
                  </button>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={140}>
            <div className="h-full rounded-[26px] border border-line bg-card p-8 shadow-soft lg:p-10">
              <h3 className="font-display text-2xl font-extrabold text-foreground lg:text-3xl">
                {current.name}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{current.summary}</p>
              <ul className="mt-7 grid gap-3">
                {current.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-sm font-semibold text-primary">
                Outcome: {current.outcome}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const [active, setActive] = useState(0);
  const stage = WD_PROCESS[active] ?? WD_PROCESS[0]!;

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 55% at 12% 5%, oklch(0.62 0.11 250 / 0.3), transparent 70%), radial-gradient(45% 50% at 90% 90%, oklch(0.71 0.17 52 / 0.22), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            How We Work
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.4rem]">
            A six-stage design and development journey you can track.
          </h2>
        </Reveal>

        <div className="mt-14 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative min-w-[860px]">
            <div aria-hidden className="absolute left-0 right-0 top-7 h-px bg-navy-foreground/20" />
            <div
              aria-hidden
              className="absolute top-7 h-px bg-ember transition-all duration-700"
              style={{ width: `${((active + 1) / WD_PROCESS.length) * 100}%` }}
            />
            <ol className="relative grid grid-cols-6 gap-3">
              {WD_PROCESS.map((item, index) => {
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
                      className="group block w-full text-left"
                    >
                      <span
                        className={`grid h-14 w-14 place-items-center rounded-2xl font-display text-sm font-extrabold transition-all duration-500 ${
                          isActive
                            ? "bg-ember text-primary-foreground shadow-ember"
                            : isDone
                              ? "border border-navy-foreground/20 bg-navy-foreground/10 text-navy-foreground"
                              : "border border-navy-foreground/15 bg-navy-foreground/5 text-navy-foreground/60"
                        }`}
                      >
                        {item.step}
                      </span>
                      <span
                        className={`mt-4 block font-display text-base font-bold transition-colors ${isActive ? "text-navy-foreground" : "text-navy-foreground/60"}`}
                      >
                        {item.title}
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
          <div className="mt-10 grid gap-6 rounded-[28px] border border-white/12 bg-white/[0.06] p-8 backdrop-blur lg:grid-cols-[auto_1fr_1fr] lg:items-start lg:gap-10">
            <p className="font-display text-6xl font-extrabold text-ember/80 lg:text-7xl">
              {stage.step}
            </p>
            <div>
              <h3 className="font-display text-2xl font-extrabold">{stage.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-foreground/75">{stage.body}</p>
            </div>
            <div className="rounded-2xl border border-navy-foreground/12 bg-navy-foreground/5 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                Stage {active + 1} of {WD_PROCESS.length}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/80">
                Each stage is signed off before the next begins, so you always know what is being
                worked on, what it costs and when it lands.
              </p>
              <p className="mt-4 text-sm font-bold">Typical duration · {stage.duration}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Success Stories
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
            Design decisions we can show you in numbers.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WD_OUTCOMES.map((item, index) => (
            <Reveal key={item.v} as="li" delay={index * 70}>
              <div className="group relative h-full overflow-hidden rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span
                  aria-hidden
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary opacity-[0.1] transition-transform duration-700 group-hover:scale-150"
                />
                <p className="font-display text-5xl font-extrabold tracking-tight text-foreground">
                  {item.k}
                </p>
                <p className="mt-3 font-display text-base font-bold text-foreground">{item.v}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.note}</p>
                <span
                  aria-hidden
                  className="mt-6 block h-1 w-12 rounded-full bg-ember transition-all duration-500 group-hover:w-24"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IndustryIcon({ index }: { index: number }) {
  const shapes = [
    <>
      <path d="M20 10v20M10 20h20" />
      <circle cx="20" cy="20" r="15" />
    </>,
    <>
      <path d="M8 14h24l-2 20H10z" />
      <path d="M15 14a5 5 0 0110 0" />
    </>,
    <>
      <path d="M6 34V16l8-4v22" />
      <path d="M14 34V12l10 6v16" />
      <path d="M24 34V22l10 4v8" />
    </>,
    <>
      <path d="M6 20l14-12 14 12" />
      <path d="M10 20v14h20V20" />
      <path d="M18 34v-8h4v8" />
    </>,
    <>
      <path d="M4 14l16-8 16 8-16 8z" />
      <path d="M12 18v10c0 2 4 4 8 4s8-2 8-4V18" />
    </>,
    <>
      <circle cx="20" cy="20" r="14" />
      <path d="M20 13v14M16 17h8M16 23h8" />
    </>,
    <>
      <path d="M4 24l32-12-6 18-10-4z" />
      <path d="M20 26v8l5-5" />
    </>,
    <>
      <path d="M10 34V12h20v22" />
      <path d="M16 20h8M16 26h8M6 34h28" />
    </>,
  ];

  return (
    <svg
      viewBox="0 0 40 40"
      className="h-10 w-10 text-primary transition-transform duration-500 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {shapes[index % shapes.length]}
    </svg>
  );
}

function Industries() {
  return (
    <section className="bg-mist/70 py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Industries We Serve
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
            Website design shaped to your sector.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WD_INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.name} as="li" delay={index * 60}>
              <a
                href="/contact"
                className="group flex h-full flex-col justify-between gap-6 rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <IndustryIcon index={index} />
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {industry.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Discuss your project →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Deliverables() {
  const [active, setActive] = useState(0);
  const item = WD_DELIVERABLES[active] ?? WD_DELIVERABLES[0]!;

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 50% at 85% 10%, oklch(0.71 0.17 52 / 0.22), transparent 70%), radial-gradient(50% 55% at 5% 90%, oklch(0.62 0.11 250 / 0.28), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              What you receive
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.08] lg:text-[3rem]">
              Every website design project includes these deliverables
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm leading-relaxed text-navy-foreground/70">
              Scope and volume scale with your goals, but nothing on this list is optional. Hover any
              deliverable to see what it means in practice.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <ul className="grid gap-2 sm:grid-cols-2">
            {WD_DELIVERABLES.map((deliverable, index) => {
              const isActive = index === active;
              return (
                <Reveal key={deliverable.name} as="li" delay={Math.min(index * 40, 320)}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    className={`flex h-full w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm font-semibold transition-all duration-500 ${
                      isActive
                        ? "border-transparent bg-ember text-primary-foreground shadow-ember"
                        : "border-white/10 bg-white/[0.05] text-navy-foreground hover:-translate-y-0.5 hover:border-ember/50"
                    }`}
                  >
                    <span
                      className={`font-display text-xs font-extrabold ${isActive ? "text-primary-foreground/75" : "text-ember"}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {deliverable.name}
                  </button>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={140}>
            <div className="h-full rounded-[26px] border border-white/12 bg-white/[0.06] p-8 backdrop-blur">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                Deliverable {String(active + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl font-extrabold">{item.name}</h3>
              <p className="mt-4 leading-relaxed text-navy-foreground/75">{item.detail}</p>
              <a href="/contact" className="btn-cta mt-8 inline-block px-6 py-3 text-sm">
                Get a Free Design Consultation
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
                Web design services in India — your questions answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Straight answers on cost, timelines, platforms and what happens after your website
                goes live.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {WD_FAQS.map((faq, index) => {
              const isOpen = open === index;
              return (
                <Reveal key={faq.q} delay={Math.min(index * 60, 320)}>
                  <div
                    className={`group relative overflow-hidden rounded-[26px] border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${isOpen ? "border-primary/30" : "border-line hover:border-primary/30"}`}
                  >
                    <span
                      aria-hidden
                      className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary opacity-[0.08] transition-transform duration-700 group-hover:scale-150"
                    />
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="relative flex w-full items-center justify-between gap-5 text-left"
                    >
                      <span className="font-display text-xs font-extrabold text-ember">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="flex-1 font-display text-base font-bold text-foreground lg:text-lg">
                        {faq.q}
                      </h3>
                      <span
                        aria-hidden
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-black text-primary-foreground transition-all duration-300 ${isOpen ? "rotate-45 bg-ember" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`relative grid overflow-hidden transition-all duration-400 ${isOpen ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <p className="min-h-0 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WebDesignPage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyUs />
      <ServiceExplorer />
      <Process />
      <Results />
      <BeforeAfter />
      <Industries />
      <Deliverables />
      <Faqs />
    </>
  );
}
