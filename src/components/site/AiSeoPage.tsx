import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { AiAnswerDemo } from "@/components/site/AiAnswerDemo";
import { CONTACT } from "@/lib/site";
import {
  AISEO_ANSWERS,
  AISEO_COMPARE,
  AISEO_ENGINES,
  AISEO_FAQS,
  AISEO_HERO,
  AISEO_INDUSTRIES,
  AISEO_NUMBERS,
  AISEO_PROCESS,
  AISEO_SERVICES,
  AISEO_WHY,
} from "@/lib/ai-seo";

function Hero() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 84% 12%, oklch(0.71 0.17 52 / 0.24), transparent 70%), radial-gradient(56% 56% at 8% 20%, oklch(0.62 0.11 250 / 0.36), transparent 70%), radial-gradient(70% 55% at 50% 118%, oklch(0.62 0.11 250 / 0.2), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {AISEO_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {AISEO_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {AISEO_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {AISEO_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Free AI SEO Audit
              </a>
              <a
                href={CONTACT.whatsapp ?? "#contact"}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a Content Strategist
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {AISEO_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full max-w-[440px]">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(45% 45% at 26% 18%, oklch(0.62 0.11 250 / 0.4), transparent 70%), radial-gradient(40% 40% at 80% 84%, oklch(0.71 0.17 52 / 0.34), transparent 70%)",
              }}
            />
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)` }}
            >
              <AiAnswerDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const SERVICE_ICONS = [
  <svg key="audit" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>,
  <svg key="entity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="5" cy="18" r="2.5" />
    <circle cx="19" cy="18" r="2.5" />
    <path d="M12 7.5v4M10 13 6.6 15.8M14 13l3.4 2.8" />
  </svg>,
  <svg key="write" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <path d="M16 3l5 5-11 11H5v-5Z" />
    <path d="M14 5l5 5" />
  </svg>,
  <svg key="cluster" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" />
    <rect x="3" y="14" width="7" height="7" rx="2" />
    <rect x="14" y="14" width="7" height="7" rx="2" />
  </svg>,
  <svg key="schema" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <path d="m9 8-5 4 5 4M15 8l5 4-5 4" />
  </svg>,
  <svg key="monitor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <path d="M3 3v18h18" />
    <path d="m7 15 4-5 3 3 5-7" />
  </svg>,
];

function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              AI SEO Optimization India
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              Six moving parts. One citable page.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Hover or tap to see what each part does. We only run what your pages actually need.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AISEO_SERVICES.map((item, i) => {
            const isActive = active === i;
            return (
              <Reveal key={item.name} className="h-full" delay={i * 60}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[28px] border p-7 text-left transition-all duration-500 hover:-translate-y-2 ${
                    isActive
                      ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                      : "border-line bg-card text-foreground shadow-soft hover:border-primary/30 hover:shadow-lift"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember transition-transform duration-700 group-hover:scale-150 ${isActive ? "opacity-[0.14]" : "opacity-[0.07]"}`}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl border transition-colors duration-500 ${
                        isActive
                          ? "border-ember/50 bg-ember text-primary-foreground"
                          : "border-primary/20 bg-primary/10 text-primary"
                      }`}
                    >
                      {SERVICE_ICONS[i]}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${
                        isActive
                          ? "border border-white/15 bg-white/10 text-navy-foreground/75"
                          : "bg-mist text-muted-foreground"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-extrabold">{item.name}</h3>
                  <p
                    className={`relative mt-2.5 text-sm leading-relaxed ${isActive ? "text-navy-foreground/75" : "text-muted-foreground"}`}
                  >
                    {item.detail}
                  </p>
                  <p className="relative mt-auto flex items-center gap-2 pt-6 text-xs font-bold text-ember">
                    <span className="h-px w-5 bg-ember transition-all duration-500 group-hover:w-8" />
                    {item.metric}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Answers() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Straight Answers
            </p>
            <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              What, why, cost, timeline.
            </h2>
            <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-8 inline-flex px-7 py-3.5">
              Get a written proposal
            </a>
          </Reveal>
        </div>

        <div>
          {AISEO_ANSWERS.map((item, i) => (
            <Reveal key={item.q} delay={i * 70}>
              <div className="group flex gap-6 border-b border-line py-8 first:border-t">
                <span className="font-display text-4xl font-extrabold leading-none text-muted-foreground/25 transition-colors duration-400 group-hover:text-ember lg:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-foreground lg:text-2xl">
                    {item.q}
                  </h3>
                  <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
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
            "radial-gradient(55% 50% at 10% 8%, oklch(0.62 0.11 250 / 0.32), transparent 70%), radial-gradient(45% 45% at 92% 90%, oklch(0.71 0.17 52 / 0.24), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              How We Work
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.4rem]">
              Audit to citations in five moves.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/65">
              Every step ships a document you can read, not a status update.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AISEO_PROCESS.map((phase, i) => (
            <li key={phase.step} className="h-full">
              <Reveal className="h-full" delay={i * 70}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.07] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:bg-white/[0.11]">
                  <span
                    aria-hidden
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember opacity-[0.1] transition-transform duration-700 group-hover:scale-150"
                  />
                  <div className="relative flex items-center justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ember font-display text-sm font-black text-primary-foreground">
                      {phase.step}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/70">
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-extrabold">{phase.title}</h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-navy-foreground/72">
                    {phase.body}
                  </p>
                  <p className="relative mt-auto flex items-center gap-2 pt-6 text-xs font-bold text-ember">
                    <span className="h-px w-5 bg-ember" />
                    {phase.ship}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}

          <li className="h-full">
            <Reveal className="h-full" delay={AISEO_PROCESS.length * 70}>
              <div className="flex h-full flex-col justify-between rounded-[28px] bg-ember p-7 text-primary-foreground shadow-lift">
                <p className="font-display text-2xl font-extrabold leading-snug">
                  See which AI answers already mention your competitors.
                </p>
                <a
                  href="mailto:info@acsius.com?subject=Request%20from%20acsius.com"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-navy-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Get the audit
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section id="numbers" className="bg-mist py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              What You Can Count On
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              The commitments behind every retainer.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Written into the scope document before work starts — not aspirations.
            </p>
          </Reveal>
        </div>

        <dl className="border-t border-line">
          {AISEO_NUMBERS.map((item, i) => (
            <Reveal key={item.v} delay={i * 50}>
              <div className="group grid grid-cols-[6.5rem_1fr] items-baseline gap-5 border-b border-line py-6 transition-colors duration-300 hover:bg-card sm:grid-cols-[9rem_1fr] sm:px-3">
                <dt className="font-display text-2xl font-extrabold text-ember transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {item.k}
                </dt>
                <dd>
                  <p className="font-display text-base font-bold text-foreground">{item.v}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Engines() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 88% 6%, oklch(0.71 0.17 52 / 0.2), transparent 70%), radial-gradient(50% 50% at 6% 92%, oklch(0.62 0.11 250 / 0.3), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Answer Engine Coverage
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.2rem]">
              Where we fight for the citation.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 space-y-0 border-t border-white/12">
          {AISEO_ENGINES.map((engine, i) => (
            <Reveal key={engine.name} delay={i * 60}>
              <div className="group grid items-center gap-4 border-b border-white/12 py-7 md:grid-cols-[1.1fr_1.3fr_0.9fr]">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-xs font-black text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold transition-transform duration-300 group-hover:translate-x-1">
                      {engine.name}
                    </h3>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-navy-foreground/50">
                      {engine.kind}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-navy-foreground/70">{engine.note}</p>
                <div className="flex items-center gap-4">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/12">
                    <span
                      className="block h-full rounded-full bg-ember transition-[width] duration-1000 ease-out"
                      style={{ width: `${engine.coverage}%` }}
                    />
                  </div>
                  <span className="font-display text-sm font-black text-ember">
                    {engine.coverage}%
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <span className="h-px w-8 bg-ember" />
              Classic SEO vs AI SEO
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Same foundations. Different finish line.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
            <div className="grid grid-cols-[1fr_1fr] items-center gap-4 border-b border-line bg-mist px-5 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground md:grid-cols-[0.7fr_1fr_1fr] md:px-8">
              <span className="hidden md:block">Dimension</span>
              <span>Classic SEO</span>
              <span className="text-ember">AI SEO with ACSIUS</span>
            </div>
            {AISEO_COMPARE.rows.map((row) => (
              <div
                key={row.label}
                className="group grid grid-cols-[1fr_1fr] gap-4 border-b border-line px-5 py-5 last:border-0 transition-colors duration-300 hover:bg-mist/60 md:grid-cols-[0.7fr_1fr_1fr] md:px-8"
              >
                <p className="col-span-2 font-display text-xs font-black uppercase tracking-[0.14em] text-foreground md:col-span-1 md:text-sm md:normal-case md:tracking-normal">
                  {row.label}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground line-through decoration-muted-foreground/30">
                  {row.classic}
                </p>
                <p className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-foreground">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ember text-[9px] font-black text-primary-foreground"
                  >
                    ✓
                  </span>
                  {row.ai}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Industries() {
  const [hover, setHover] = useState(0);
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Sector Playbooks
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Written by people who know your buyer.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Hover a sector to see the angle and the assets we build first.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line">
          {AISEO_INDUSTRIES.map((sector, i) => {
            const isOn = hover === i;
            return (
              <Reveal key={sector.name} delay={i * 50}>
                <div
                  onMouseEnter={() => setHover(i)}
                  className={`grid cursor-default gap-3 border-b border-line px-2 py-7 transition-colors duration-400 md:grid-cols-[0.9fr_1.1fr_0.9fr] md:items-center md:px-5 ${isOn ? "bg-card" : ""}`}
                >
                  <h3
                    className={`font-display text-xl font-extrabold transition-all duration-400 lg:text-2xl ${isOn ? "translate-x-1 text-primary" : "text-foreground"}`}
                  >
                    {sector.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{sector.angle}</p>
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.12em] transition-colors duration-400 ${isOn ? "text-ember" : "text-muted-foreground/60"}`}
                  >
                    {sector.focus}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function Why() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Why ACSIUS
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              An AI SEO agency that ships, not advises.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tap a card to see the proof behind the claim.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-4">
          {AISEO_WHY.map((item, i) => {
            const isOpen = selected === i;
            return (
              <Reveal key={item.title} className="h-full" delay={i * 60}>
                <button
                  type="button"
                  onClick={() => setSelected(isOpen ? -1 : i)}
                  onMouseEnter={() => setSelected(i)}
                  aria-pressed={isOpen}
                  className={`group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[26px] border p-6 text-left transition-all duration-500 hover:-translate-y-1.5 ${
                    isOpen
                      ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                      : "border-line bg-card text-foreground shadow-soft hover:border-primary/30 hover:shadow-lift"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-ember transition-transform duration-700 group-hover:scale-150 ${isOpen ? "opacity-[0.16]" : "opacity-[0.07]"}`}
                  />
                  <p className="relative font-display text-4xl font-extrabold text-ember">
                    {item.metric}
                  </p>
                  <h3 className="relative mt-4 font-display text-lg font-extrabold">{item.title}</h3>
                  <p
                    className={`relative mt-2 text-sm leading-relaxed ${isOpen ? "text-navy-foreground/75" : "text-muted-foreground"}`}
                  >
                    {item.body}
                  </p>
                  <div
                    className={`relative mt-auto grid overflow-hidden transition-all duration-400 ${isOpen ? "grid-rows-[1fr] pt-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <p className="min-h-0 border-t border-white/15 pt-4 text-xs leading-relaxed text-navy-foreground/70">
                      {item.proof}
                    </p>
                  </div>
                </button>
              </Reveal>
            );
          })}
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
                AI SEO in India, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Share your website and the questions your buyers ask. We will show you who AI engines
                cite today and what it takes to replace them.
              </p>
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Talk to an AI SEO Lead
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {AISEO_FAQS.map((faq, index) => {
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
                      className="relative flex w-full cursor-pointer items-center justify-between gap-5 text-left"
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
                      <p className="min-h-0 max-w-[60ch] pl-10 text-sm leading-relaxed text-muted-foreground">
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

export function AiSeoPage() {
  return (
    <>
      <Hero />
      <Services />
      <Answers />
      <Compare />
      <Process />
      <Numbers />
      <Engines />
      <Industries />
      <Why />
      <Faqs />
    </>
  );
}
