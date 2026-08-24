import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { LocalMapDemo } from "@/components/site/LocalMapDemo";
import { CONTACT } from "@/lib/site";
import {
  LOCAL_ANSWERS,
  LOCAL_DELIVERABLES,
  LOCAL_FAQS,
  LOCAL_HERO,
  LOCAL_INDUSTRIES,
  LOCAL_INTRO,
  LOCAL_OUTCOMES,
  LOCAL_PROCESS,
  LOCAL_SERVICES,
  LOCAL_WHY,
} from "@/lib/local-seo";

function HeroPanel() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);
  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[640px]">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 30% 25%, oklch(0.62 0.11 250 / 0.35), transparent 70%), radial-gradient(40% 40% at 75% 80%, oklch(0.71 0.17 52 / 0.32), transparent 70%)",
        }}
      />
      <div
        className="relative rounded-[28px] border border-white/12 bg-white/[0.06] p-6 shadow-lift backdrop-blur transition-transform duration-300 ease-out lg:p-8"
        style={{
          transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0) rotateX(${offset.y * -2}deg) rotateY(${offset.x * 2}deg)`,
        }}
      >
        <LocalMapDemo />
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
              {LOCAL_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {LOCAL_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {LOCAL_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {LOCAL_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer"
                className="btn-cta px-7 py-3.5"
              >
                Get a Free Local SEO Audit
              </a>
              <a
                href={CONTACT.whatsapp}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a Local SEO Specialist
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {LOCAL_HERO.stats.map((stat) => (
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
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Local SEO Company India
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
            Local SEO India: win the three results that matter.
          </h2>
          <div className="mt-7 max-w-[68ch] space-y-5 text-base leading-relaxed text-muted-foreground">
            {LOCAL_INTRO.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p>
              Looking for national and category-level rankings too? Our full{" "}
              <Link
                to="/seo-services-india"
                className="font-semibold text-primary underline decoration-ember/50 decoration-2 underline-offset-4 hover:text-ember"
              >
                SEO services in India
              </Link>{" "}
              cover technical SEO, content and authority building, and run alongside this local
              programme as one roadmap.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 self-start">
          {LOCAL_ANSWERS.map((item, index) => (
            <Reveal key={item.q} delay={index * 80}>
              <article className="h-full rounded-[26px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <h3 className="font-display text-lg font-bold text-foreground">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </article>
            </Reveal>
          ))}
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
              What a serious local SEO company in India does differently.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Four commitments that shape every local search programme we run — for a single clinic
              or a hundred branches.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LOCAL_WHY.map((item, index) => (
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
  const [active, setActive] = useState(LOCAL_SERVICES[0]!.key);
  const current = LOCAL_SERVICES.find((s) => s.key === active) ?? LOCAL_SERVICES[0]!;

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Our Local SEO Services
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              Eight disciplines that decide local visibility.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Hover or tap any discipline to see what is included and the outcome it should produce.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)]">
          <ul className="grid gap-2 sm:grid-cols-2">
            {LOCAL_SERVICES.map((service, index) => {
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
  const stage = LOCAL_PROCESS[active] ?? LOCAL_PROCESS[0]!;

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
            From local audit to map-pack placement.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,20rem)_1fr]">
          <ol className="grid gap-2">
            {LOCAL_PROCESS.map((item, index) => {
              const isActive = index === active;
              return (
                <li key={item.step}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    aria-current={isActive}
                    className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all duration-500 ${
                      isActive
                        ? "border-transparent bg-ember text-primary-foreground shadow-ember"
                        : "border-white/10 bg-white/[0.05] hover:-translate-y-0.5 hover:border-ember/50"
                    }`}
                  >
                    <span
                      className={`font-display text-sm font-extrabold ${isActive ? "text-primary-foreground/80" : "text-ember"}`}
                    >
                      {item.step}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-sm font-bold">{item.title}</span>
                      <span
                        className={`block text-[11px] ${isActive ? "text-primary-foreground/75" : "text-navy-foreground/50"}`}
                      >
                        {item.duration}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <Reveal delay={80}>
            <div className="h-full rounded-[28px] border border-white/12 bg-white/[0.06] p-8 backdrop-blur lg:p-10">
              <p className="font-display text-6xl font-extrabold text-ember/80">{stage.step}</p>
              <h3 className="mt-4 font-display text-2xl font-extrabold">{stage.title}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
                {stage.body}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-navy-foreground/12 bg-navy-foreground/5 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                    Stage {active + 1} of {LOCAL_PROCESS.length}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/80">
                    Nothing moves forward until the previous stage is signed off, so you always know
                    what is being worked on and why.
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-foreground/12 bg-navy-foreground/5 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                    Typical duration
                  </p>
                  <p className="mt-2 font-display text-xl font-extrabold">{stage.duration}</p>
                  <p className="mt-2 text-sm text-navy-foreground/70">
                    Reported per location, not as a single national average.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
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
            Local Results
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
            Calls and directions, not activity logs.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOCAL_OUTCOMES.map((item, index) => (
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
      <path d="M10 8v12a10 10 0 0020 0V8" />
      <path d="M20 30v6M12 36h16" />
    </>,
    <>
      <path d="M6 20l14-12 14 12" />
      <path d="M10 20v14h20V20" />
      <path d="M18 34v-8h4v8" />
    </>,
    <>
      <path d="M6 28h6l4-10h14l4 10h-4" />
      <circle cx="14" cy="30" r="3" />
      <circle cx="28" cy="30" r="3" />
    </>,
    <>
      <path d="M14 6v14a6 6 0 0012 0V6" />
      <path d="M20 26v8M14 34h12" />
    </>,
    <>
      <path d="M4 26h4l4-10h16l4 10h4" />
      <circle cx="13" cy="28" r="3" />
      <circle cx="29" cy="28" r="3" />
    </>,
    <>
      <path d="M4 14l16-8 16 8-16 8z" />
      <path d="M12 18v10c0 2 4 4 8 4s8-2 8-4V18" />
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
            Who We Serve
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
            Local search, shaped to your business type.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LOCAL_INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.name} as="li" delay={index * 60}>
              <a
                href={CONTACT.whatsapp}
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
                    Talk to a specialist →
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
  const item = LOCAL_DELIVERABLES[active] ?? LOCAL_DELIVERABLES[0]!;

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
              Every local SEO retainer includes these deliverables
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm leading-relaxed text-navy-foreground/70">
              Volume scales with how many locations you run, but nothing on this list is optional.
              Hover any deliverable to see what it means in practice.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <ul className="grid gap-2 sm:grid-cols-2">
            {LOCAL_DELIVERABLES.map((deliverable, index) => {
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
              <a
                href="mailto:info@acsius.com?subject=Request%20from%20acsius.com"
                className="btn-cta mt-8 inline-block px-6 py-3 text-sm"
              >
                Get a Free Local SEO Audit
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PairWithOrganic() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div className="grid items-center gap-8 rounded-[28px] border border-line bg-card p-8 shadow-soft lg:grid-cols-[1.2fr_1fr] lg:p-12">
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                Local + Organic
              </p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.6rem]">
                Local SEO wins the map. Organic SEO wins the category.
              </h2>
              <p className="mt-5 max-w-[62ch] leading-relaxed text-muted-foreground">
                Most of our clients run both. Local work drives calls and directions from nearby
                buyers; the wider organic programme builds the technical foundation, content and
                authority that let you rank beyond your city.
              </p>
              <Link
                to="/seo-services-india"
                className="btn-cta mt-8 inline-block px-7 py-3.5 text-sm"
              >
                Explore SEO Services in India
              </Link>
            </div>
            <ul className="grid gap-3">
              {[
                { a: "Map pack, near-me and city keywords", b: "Local SEO" },
                { a: "Technical SEO, Core Web Vitals, schema", b: "Organic SEO" },
                { a: "Reviews, citations, locality pages", b: "Local SEO" },
                { a: "Editorial content and digital PR", b: "Organic SEO" },
              ].map((row) => (
                <li
                  key={row.a}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-mist/60 px-5 py-4"
                >
                  <span className="text-sm text-foreground">{row.a}</span>
                  <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                    {row.b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
                Local SEO services India — your questions answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Straight answers about pricing, timelines, multi-location work and how we run local
                search as your partner.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {LOCAL_FAQS.map((faq, index) => {
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

export function LocalSeoPage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyUs />
      <ServiceExplorer />
      <Process />
      <Results />
      <Industries />
      <Deliverables />
      <PairWithOrganic />
      <Faqs />
    </>
  );
}
