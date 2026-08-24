import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Counter, Reveal, useInView, usePointerParallax } from "@/components/motion";
import { LandingPageDemo } from "@/components/site/LandingPageDemo";
import { CONTACT } from "@/lib/site";
import {
  LP_ANATOMY,
  LP_COMPARE,
  LP_DELIVERABLES,
  LP_FAQS,
  LP_HERO,
  LP_MODELS,
  LP_PPC,
  LP_PROCESS,
  LP_TESTS,
  LP_TYPES,
  LP_WHY,
} from "@/lib/landing-page";

/* ---------- Hero ---------- */
function Hero() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 86% 12%, oklch(0.71 0.17 52 / 0.24), transparent 70%), radial-gradient(52% 52% at 2% 32%, oklch(0.62 0.11 250 / 0.34), transparent 70%), radial-gradient(65% 45% at 55% 118%, oklch(0.71 0.17 52 / 0.13), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {LP_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {LP_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/80 lg:text-lg">
              {LP_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-foreground/65">
              {LP_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-6 flex flex-wrap gap-2">
              {LP_HERO.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-navy-foreground/20 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-navy-foreground/85"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Landing Page Quote
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a CRO specialist
              </a>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {LP_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full min-w-0 max-w-[480px]">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(45% 45% at 20% 18%, oklch(0.71 0.17 52 / 0.34), transparent 70%), radial-gradient(42% 42% at 84% 84%, oklch(0.62 0.11 250 / 0.4), transparent 70%)",
              }}
            />
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)` }}
            >
              <LandingPageDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Page types switcher ---------- */
function Types() {
  const [active, setActive] = useState(0);
  const t = LP_TYPES[active] ?? LP_TYPES[0]!;
  return (
    <section id="types" className="py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Landing page design company India
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              One page, built for your traffic source.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tap a page type to see the layout logic and go-live time.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="grid gap-2">
            {LP_TYPES.map((item, i) => {
              const on = active === i;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={on}
                  className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                    on
                      ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                      : "border-line bg-card text-foreground hover:border-primary/30 hover:bg-mist/60"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block font-display text-base font-extrabold">{item.name}</span>
                    <span
                      className={`mt-1 block text-xs ${on ? "text-navy-foreground/70" : "text-muted-foreground"}`}
                    >
                      {item.best}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-lg transition-transform duration-300 ${on ? "translate-x-1 text-ember" : "text-muted-foreground"}`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <Reveal delay={80}>
            <div
              key={t.key}
              className="relative overflow-hidden rounded-[30px] border border-line bg-mist p-8 shadow-soft lg:p-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-ember opacity-[0.12] blur-2xl"
              />
              <div className="relative flex flex-wrap items-end justify-between gap-4">
                <h3 className="font-display text-2xl font-extrabold text-foreground">{t.name}</h3>
                <span className="rounded-full border border-line bg-card px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-foreground">
                  {t.stat} · {t.statLabel}
                </span>
              </div>
              <p className="relative mt-5 max-w-xl leading-relaxed text-muted-foreground">{t.body}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {t.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line bg-card px-3 py-1.5 text-xs font-bold text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta px-6 py-3">
                  Brief this page
                </a>
                <Link
                  to={t.href}
                  className="rounded-full border border-line bg-card px-6 py-3 font-bold text-foreground transition-colors hover:border-ember hover:text-ember"
                >
                  Related service
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Anatomy bento on navy ---------- */
function Anatomy() {
  return (
    <section
      id="anatomy"
      className="relative overflow-hidden bg-navy py-16 text-navy-foreground lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 45% at 10% 8%, oklch(0.62 0.11 250 / 0.3), transparent 70%), radial-gradient(45% 45% at 92% 92%, oklch(0.71 0.17 52 / 0.2), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            Landing page design services India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            Anatomy of a page that converts.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LP_ANATOMY.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 60, 300)} className={`h-full ${s.span}`}>
              <div className="group flex h-full flex-col rounded-[26px] border border-white/12 bg-white/[0.05] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40 hover:bg-white/[0.08]">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                  {s.tag}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-foreground/75">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Google Ads / PPC ---------- */
function QualityMeter() {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="grid gap-5">
      {LP_PPC.meter.map((m, i) => (
        <div key={m.label}>
          <div className="flex items-end justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              {m.label}
            </p>
            <p className="font-display text-sm font-extrabold text-ember">
              {m.from} → {m.to}
            </p>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-ember transition-[width] duration-[1400ms] ease-out"
              style={{
                width: `${visible ? m.to : m.from}%`,
                transitionDelay: `${i * 180}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Ppc() {
  return (
    <section id="google-ads" className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              {LP_PPC.eyebrow}
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              {LP_PPC.heading}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{LP_PPC.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/contact" className="btn-cta px-7 py-3.5">
                Add Google Ads to my page
              </a>
              <Link
                to="/ppc-services-company-india"
                className="rounded-full border border-line bg-card px-7 py-3.5 font-bold text-foreground transition-colors hover:border-ember hover:text-ember"
              >
                See PPC services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[28px] border border-line bg-card p-7 shadow-soft">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                Quality Score signals after redesign
              </p>
              <div className="mt-6">
                <QualityMeter />
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Better ad relevance and landing page experience lower your CPC for the same ad rank.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-3">
          {LP_PPC.items.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 60, 300)} className="h-full">
              <div className="h-full bg-card p-7 transition-colors duration-500 hover:bg-mist">
                <span className="inline-flex rounded-full bg-ember/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-ember">
                  {item.tag}
                </span>
                <h3 className="mt-4 font-display text-base font-extrabold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-sm font-semibold text-foreground">{LP_PPC.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Deliverables ---------- */
function Deliverables() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            What you get
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            One fixed scope, three sets of deliverables.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {LP_DELIVERABLES.map((col, i) => (
            <Reveal key={col.group} delay={i * 80} className="h-full">
              <div className="h-full rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                  {col.group}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span
                        aria-hidden
                        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-black text-primary-foreground"
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- A/B test rows ---------- */
function Tests() {
  return (
    <section
      id="tests"
      className="relative overflow-hidden bg-navy py-16 text-navy-foreground lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 48% at 88% 14%, oklch(0.71 0.17 52 / 0.2), transparent 70%), radial-gradient(46% 46% at 6% 86%, oklch(0.62 0.11 250 / 0.28), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Tested, not decorated
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
              Changes we run, and what they moved.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              Blended lifts from recent client tests. Yours start after the first 200 clicks.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-2">
          {LP_TESTS.map((row, i) => (
            <Reveal key={row.area} delay={i * 60}>
              <div className="grid items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-6 py-5 transition-colors duration-500 hover:border-ember/40 hover:bg-white/[0.08] sm:grid-cols-[0.7fr_1.4fr_auto]">
                <p className="font-display text-base font-extrabold">{row.area}</p>
                <p className="text-sm text-navy-foreground/75">{row.change}</p>
                <p className="font-display text-xl font-extrabold text-ember sm:text-right">
                  {row.lift}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Models ---------- */
function Models() {
  const [active, setActive] = useState(0);
  return (
    <section id="models" className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Engagement models
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Page only, page plus ads, or ongoing testing.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {LP_MODELS.map((model, i) => {
            const on = active === i;
            return (
              <Reveal key={model.name} delay={i * 80} className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`flex h-full w-full cursor-pointer flex-col rounded-[26px] border bg-card p-7 text-left shadow-soft transition-all duration-500 ${
                    on
                      ? "-translate-y-1.5 border-ember/60 shadow-lift ring-2 ring-ember/25"
                      : "border-line hover:-translate-y-1 hover:border-primary/30"
                  }`}
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-display text-lg font-extrabold text-foreground">
                      {model.name}
                    </span>
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[11px] font-black transition-colors ${
                        on
                          ? "border-transparent bg-ember text-primary-foreground"
                          : "border-line text-muted-foreground"
                      }`}
                    >
                      ✓
                    </span>
                  </span>
                  <span className="mt-4 block font-display text-2xl font-extrabold text-ember">
                    {model.price}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">
                    {model.note}
                  </span>
                  <ul className="mt-6 space-y-2.5">
                    {model.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold ${
                      on ? "text-ember" : "text-muted-foreground"
                    }`}
                  >
                    {on ? "Selected — get a quote" : "Choose this model"}
                    <span aria-hidden>→</span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-10 inline-flex px-7 py-3.5">
            Get a Landing Page Quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  return (
    <section id="process" className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Seven-day sprint
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Brief on Monday, live page next week.
          </h2>
        </Reveal>

        <ol className="relative mt-12 border-l border-line pl-6 sm:pl-10">
          {LP_PROCESS.map((phase, i) => (
            <Reveal key={phase.step} as="li" delay={i * 70} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(1.5rem+0.75rem)] top-1 grid h-6 w-6 place-items-center rounded-full bg-ember font-display text-[10px] font-black text-primary-foreground sm:-left-[calc(2.5rem+0.75rem)]">
                {i + 1}
              </span>
              <div className="grid gap-3 rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-ember/50 hover:shadow-lift sm:grid-cols-[1fr_auto] sm:items-start">
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-extrabold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {phase.body}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col sm:items-end">
                  <span className="rounded-full border border-line bg-mist px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-foreground">
                    {phase.duration}
                  </span>
                  <span className="rounded-full bg-ember/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-ember">
                    {phase.ship}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Compare ---------- */
function Compare() {
  return (
    <section id="compare" className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Builder vs. built
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two landing pages. Very different cost per lead.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] border border-line bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                {LP_COMPARE.typical.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {LP_COMPARE.typical.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line text-[11px] font-black text-muted-foreground"
                    >
                      ✕
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-[28px] bg-navy p-8 text-navy-foreground shadow-lift">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember opacity-20 blur-2xl"
              />
              <h3 className="relative font-display text-xl font-extrabold text-ember">
                {LP_COMPARE.acsius.title}
              </h3>
              <ul className="relative mt-6 space-y-4">
                {LP_COMPARE.acsius.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-navy-foreground/85">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-black text-primary-foreground"
                    >
                      ✓
                    </span>
                    <span>{pt}</span>
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

/* ---------- Why ---------- */
function Why() {
  return (
    <section id="why" className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            A landing page designing agency in India that owns the result.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {LP_WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="h-full">
              <div className="h-full bg-card p-7 transition-colors duration-500 hover:bg-mist">
                <p className="font-display text-4xl font-extrabold text-ember">{item.metric}</p>
                <h3 className="mt-4 font-display text-base font-extrabold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-sm text-muted-foreground">
            Also explore{" "}
            <Link to="/ppc-services-company-india" className="font-bold text-ember hover:underline">
              PPC services
            </Link>
            ,{" "}
            <Link
              to="/website-design-company-india"
              className="font-bold text-ember hover:underline"
            >
              website design
            </Link>{" "}
            and{" "}
            <Link
              to="/ui-ux-website-design-company"
              className="font-bold text-ember hover:underline"
            >
              UI/UX design
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQs ---------- */
function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                Landing page design, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send your offer and traffic source. You get a wireframe direction, timeline and fixed
                price inside two working days.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Request a Proposal
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {LP_FAQS.map((faq, index) => {
              const isOpen = open === index;
              return (
                <Reveal key={faq.q} delay={Math.min(index * 60, 320)}>
                  <div
                    className={`group relative overflow-hidden rounded-[26px] border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${
                      isOpen ? "border-primary/30" : "border-line hover:border-primary/30"
                    }`}
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
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-black text-primary-foreground transition-all duration-300 ${
                          isOpen ? "rotate-45 bg-ember" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`relative grid overflow-hidden transition-all duration-500 ${
                        isOpen ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="min-h-0 max-w-[62ch] pl-10 text-sm leading-relaxed text-muted-foreground">
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

export function LandingPageDesignPage() {
  return (
    <>
      <Hero />
      <Types />
      <Anatomy />
      <Ppc />
      <Deliverables />
      <Tests />
      <Models />
      <Process />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
