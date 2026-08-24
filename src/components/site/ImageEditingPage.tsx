import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { ImageEditingDemo } from "@/components/site/ImageEditingDemo";
import { CONTACT } from "@/lib/site";
import {
  IE_COMPARE,
  IE_DELIVERABLES,
  IE_FAQS,
  IE_HERO,
  IE_PLANS,
  IE_PPC,
  IE_PROCESS,
  IE_SECTORS,
  IE_SERVICES,
  IE_SPECS,
  IE_WHY,
} from "@/lib/image-editing";

const WA = CONTACT.whatsapp ?? "/contact";

function Hero() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 48% at 86% 16%, oklch(0.71 0.17 52 / 0.26), transparent 70%), radial-gradient(55% 55% at 6% 26%, oklch(0.62 0.11 250 / 0.34), transparent 70%), radial-gradient(70% 50% at 46% 120%, oklch(0.71 0.17 52 / 0.14), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {IE_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {IE_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {IE_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {IE_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-7 flex flex-wrap gap-2">
              {IE_HERO.badges.map((badge) => (
                <span
                  key={badge}
                  className="whitespace-nowrap rounded-full border border-white/18 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-navy-foreground/70"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Free Trial Edit
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {IE_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full min-w-0 max-w-[460px]">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(45% 45% at 24% 20%, oklch(0.71 0.17 52 / 0.36), transparent 70%), radial-gradient(40% 40% at 82% 82%, oklch(0.62 0.11 250 / 0.4), transparent 70%)",
              }}
            />
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)` }}
            >
              <ImageEditingDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Service explorer — rail + technique preview */
function Services() {
  const [active, setActive] = useState(0);
  const svc = IE_SERVICES[active] ?? IE_SERVICES[0]!;
  return (
    <section id="services" className="bg-mist py-16 lg:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Image editing services India
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Five desks. One quality bar.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tap a service to see the techniques and outputs it ships with.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-2">
            {IE_SERVICES.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-pressed={active === i}
                className={`group flex cursor-pointer items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-400 ${
                  active === i
                    ? "border-ember bg-card shadow-soft"
                    : "border-transparent hover:border-line hover:bg-card/60"
                }`}
              >
                <span
                  className={`font-display text-base font-extrabold ${active === i ? "text-primary" : "text-foreground"}`}
                >
                  {s.name}
                </span>
                <span
                  className={`font-mono text-xs ${active === i ? "text-ember" : "text-muted-foreground"}`}
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[32px] border border-line bg-card shadow-lift">
            <div className="relative grid min-h-[190px] place-items-center bg-navy p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.13]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div key={svc.key} className="relative flex flex-wrap justify-center gap-2.5">
                {svc.sizes.map((size, i) => (
                  <span
                    key={size}
                    className="animate-[fadeUp_0.5s_ease-out_both] whitespace-nowrap rounded-lg border border-ember/40 bg-white/[0.04] px-3.5 py-2 font-mono text-xs text-ember"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl font-extrabold text-foreground lg:text-3xl">
                  {svc.name}
                </h3>
                <p className="text-right">
                  <span className="font-display text-2xl font-extrabold text-ember">{svc.stat}</span>
                  <span className="ml-2 text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                    {svc.statLabel}
                  </span>
                </p>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {svc.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {svc.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-mist px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <p className="mt-5 border-t border-line pt-5 text-sm text-foreground">
                <span className="font-bold text-primary">Best for:</span> {svc.best}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Bento deliverables */
function Deliverables() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              What lands in your drive
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              More than a folder of JPGs.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A repeatable system, so batch fifty looks like batch one.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:auto-rows-[190px] lg:grid-cols-4">
          {IE_DELIVERABLES.map((item, i) => (
            <Reveal key={item.name} className={`h-full ${item.span}`} delay={i * 60}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] border p-6 transition-all duration-500 hover:-translate-y-1.5 ${
                  i === 0
                    ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                    : "border-line bg-card text-foreground shadow-soft hover:border-primary/30 hover:shadow-lift"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-ember transition-transform duration-700 group-hover:scale-150 ${i === 0 ? "opacity-20" : "opacity-[0.08]"}`}
                />
                <span
                  className={`relative w-fit rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${
                    i === 0
                      ? "border border-white/15 bg-white/10 text-navy-foreground/75"
                      : "bg-mist text-muted-foreground"
                  }`}
                >
                  {item.tag}
                </span>
                <h3
                  className={`relative mt-auto font-display font-extrabold ${i === 0 ? "text-3xl lg:text-4xl" : "text-xl"}`}
                >
                  {item.name}
                </h3>
                <p
                  className={`relative mt-2 text-sm leading-relaxed ${i === 0 ? "max-w-sm text-navy-foreground/75" : "text-muted-foreground"}`}
                >
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Channel specs — dark strip */
function Specs() {
  const [active, setActive] = useState(0);
  const spec = IE_SPECS[active] ?? IE_SPECS[0]!;
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-navy-foreground lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 88% 12%, oklch(0.71 0.17 52 / 0.2), transparent 70%), radial-gradient(50% 50% at 10% 90%, oklch(0.62 0.11 250 / 0.26), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Channel rules, not guesswork
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.2rem]">
              Exported to the spec each channel accepts.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {IE_SPECS.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                    active === i
                      ? "border-transparent bg-ember text-primary-foreground"
                      : "border-white/20 text-navy-foreground/70 hover:border-ember hover:text-ember"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <p
              key={spec.label}
              className="mt-6 animate-[fadeUp_0.5s_ease-out_both] font-display text-2xl font-extrabold leading-snug lg:text-[2rem]"
            >
              {spec.note}
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-8 inline-flex px-7 py-3.5"
            >
              Send us your channel spec
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[28px] border border-white/12 bg-white/[0.04] p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ember">
                Export preset
              </p>
              <p
                key={spec.detail}
                className="mt-4 animate-[fadeUp_0.5s_ease-out_both] font-display text-2xl font-extrabold"
              >
                {spec.detail}
              </p>
              <ul className="mt-6 grid gap-2.5 border-t border-white/12 pt-6">
                {[
                  "Consistent crop & margin",
                  "White point matched across the set",
                  "Colour profile embedded",
                  "Named by your SKU convention",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ember text-[9px] font-black text-primary-foreground"
                    >
                      ✓
                    </span>
                    <span className="text-navy-foreground/80">{item}</span>
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

function Process() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            How the pipeline runs
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
            Free trial edit today, production tomorrow.
          </h2>
        </Reveal>

        <ol className="mt-12 border-t border-line">
          {IE_PROCESS.map((phase, i) => (
            <li key={phase.step}>
              <Reveal delay={i * 60}>
                <div className="group grid gap-4 border-b border-line py-7 md:grid-cols-[5rem_1fr_1.1fr_auto] md:items-start">
                  <span className="font-display text-3xl font-extrabold text-ember/40 transition-colors duration-400 group-hover:text-ember">
                    {phase.step}
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-foreground transition-transform duration-400 group-hover:translate-x-1">
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
                  <div className="flex flex-col gap-2 md:items-end">
                    <span className="w-fit rounded-full bg-mist px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                      {phase.duration}
                    </span>
                    <span className="text-xs font-bold text-primary">{phase.ship}</span>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Google Ads / single landing page section */
function PpcAddon() {
  return (
    <section id="ppc" className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-16">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              {IE_PPC.eyebrow}
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              {IE_PPC.heading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {IE_PPC.lead}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {IE_PPC.cards.map((card, i) => (
                <Reveal key={card.name} className="h-full" delay={i * 60}>
                  <div className="flex h-full flex-col rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                    <span className="w-fit rounded-full bg-mist px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground">
                      {card.chip}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-extrabold text-foreground">
                      {card.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                    <Link
                      to={card.href}
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-bold text-primary"
                    >
                      {card.linkLabel}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-transparent bg-navy p-8 text-navy-foreground shadow-lift">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 60% at 90% 0%, oklch(0.71 0.17 52 / 0.24), transparent 70%)",
                }}
              />
              <p className="relative font-mono text-[10px] uppercase tracking-[0.16em] text-ember">
                Campaign funnel · typical
              </p>
              <div className="relative mt-6 grid gap-3">
                {IE_PPC.funnel.map((step, i) => (
                  <div key={step.label}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-navy-foreground/80">{step.label}</span>
                      <span className="font-display text-lg font-extrabold text-ember">
                        {step.value}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-ember/80"
                        style={{ width: `${100 - i * 22}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                {[
                  { label: "Avg. CTR", value: "5.1%" },
                  { label: "Cost per order", value: "₹318" },
                  { label: "ROAS", value: "4.6x" },
                  { label: "Quality Score", value: "9/10" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-navy-foreground/55">
                      {m.label}
                    </p>
                    <p className="mt-1 font-display text-2xl font-extrabold text-ember">{m.value}</p>
                  </div>
                ))}
              </div>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta relative mt-8 inline-flex px-6 py-3 text-sm"
              >
                Plan my one-page campaign
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const [active, setActive] = useState(0);
  const row = IE_COMPARE.rows[active]!;
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Cheap freelancer vs studio
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Pick a worry. See the difference.
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {IE_COMPARE.rows.map((r, i) => (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                    active === i
                      ? "border-transparent bg-navy text-navy-foreground shadow-soft"
                      : "border-line bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4">
              <div className="rounded-[26px] border border-dashed border-line bg-card/60 p-7">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="grid h-6 w-6 place-items-center rounded-full bg-muted-foreground/15 text-xs font-black text-muted-foreground"
                  >
                    ✕
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                    Cheapest bidder
                  </p>
                </div>
                <p
                  key={`t-${active}`}
                  className="mt-4 animate-[fadeUp_0.5s_ease-out_both] font-display text-xl leading-snug text-muted-foreground line-through decoration-muted-foreground/30 lg:text-2xl"
                >
                  {row.typical}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[26px] border border-transparent bg-navy p-7 text-navy-foreground shadow-lift lg:p-9">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 92% 0%, oklch(0.71 0.17 52 / 0.24), transparent 70%)",
                  }}
                />
                <div className="relative flex items-center gap-2">
                  <span
                    aria-hidden
                    className="grid h-6 w-6 place-items-center rounded-full bg-ember text-xs font-black text-primary-foreground"
                  >
                    ✓
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-ember">
                    ACSIUS
                  </p>
                </div>
                <p
                  key={`a-${active}`}
                  className="relative mt-4 animate-[fadeUp_0.5s_ease-out_both] font-display text-2xl font-extrabold leading-snug lg:text-[2rem]"
                >
                  {row.acsius}
                </p>
                <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta relative mt-8 inline-flex px-6 py-3 text-sm">
                  Get a written quote
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Ways to start
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Per image, per catalogue, or a full pod.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Every option is quoted in writing after a free trial edit.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-5 lg:grid-cols-3">
          {IE_PLANS.map((plan, i) => (
            <Reveal key={plan.name} className="h-full" delay={i * 70}>
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                  plan.highlight
                    ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                    : "border-line bg-card text-foreground shadow-soft hover:shadow-lift"
                }`}
              >
                <h3 className="font-display text-xl font-extrabold">{plan.name}</h3>
                {i !== 0 && (
                  <p className="mt-4 font-display text-3xl font-extrabold text-ember">{plan.price}</p>
                )}
                <p
                  className={`mt-3 text-sm leading-relaxed ${plan.highlight ? "text-navy-foreground/75" : "text-muted-foreground"}`}
                >
                  {plan.note}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {plan.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm">
                      <span
                        aria-hidden
                        className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ember text-[9px] font-black text-primary-foreground"
                      >
                        ✓
                      </span>
                      <span
                        className={plan.highlight ? "text-navy-foreground/85" : "text-foreground"}
                      >
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
                {plan.cta === "whatsapp" ? (
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold ${plan.highlight ? "text-ember" : "text-primary"}`}
                  >
                    Ask on WhatsApp
                    <span aria-hidden>→</span>
                  </a>
                ) : (
                  <a
                    href="mailto:info@acsius.com?subject=Request%20from%20acsius.com"
                    className={`mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold ${plan.highlight ? "text-ember" : "text-primary"}`}
                  >
                    Get a quote
                    <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Where we edit most
          </p>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {IE_SECTORS.map((s, i) => (
            <Reveal key={s.name} className="h-full" delay={i * 50}>
              <div className="group h-full bg-card p-6 transition-colors duration-400 hover:bg-mist">
                <p className="font-mono text-[10px] text-ember">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-lg font-extrabold text-foreground">
                  {s.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beyond() {
  const links = [
    {
      to: "/graphic-design-services" as const,
      label: "Graphic Design Services",
      body: "Turn the edited set into ads, decks, packaging and social creative.",
    },
    {
      to: "/banner-design-services" as const,
      label: "Banner & Brochure Design",
      body: "Ad banners, flyers and print-ready brochures built on your imagery.",
    },
    {
      to: "/ecommerce-website-developement" as const,
      label: "Ecommerce Development",
      body: "A storefront that shows those images at the speed buyers expect.",
    },
  ];
  return (
    <section className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.6rem]">
            Beyond the edit.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {links.map((link, i) => (
            <Reveal key={link.to} className="h-full" delay={i * 70}>
              <Link
                to={link.to}
                className="group flex h-full flex-col rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <h3 className="font-display text-xl font-extrabold text-foreground">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{link.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-primary">
                  Explore
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-navy-foreground lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 90% 10%, oklch(0.71 0.17 52 / 0.2), transparent 70%), radial-gradient(50% 50% at 8% 92%, oklch(0.62 0.11 250 / 0.26), transparent 70%)",
        }}
      />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.2rem]">
            An image editing company in India that also sells the product.
          </h2>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta mt-8 inline-flex px-7 py-3.5"
          >
            Start on WhatsApp
          </a>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/12 bg-white/10 sm:grid-cols-2">
          {IE_WHY.map((item, i) => (
            <Reveal key={item.title} className="h-full" delay={i * 70}>
              <div className="group h-full bg-navy/80 p-7 transition-colors duration-500 hover:bg-white/[0.07]">
                <p className="font-display text-4xl font-extrabold text-ember">{item.metric}</p>
                <h3 className="mt-4 font-display text-lg font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/72">{item.body}</p>
                <p className="mt-4 border-t border-white/12 pt-4 text-xs leading-relaxed text-navy-foreground/55">
                  {item.proof}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
                Image editing, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send 10 sample images and the channels you sell on. You get a free trial edit and a
                written rate card within one working day.
              </p>
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Talk to a Production Lead
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {IE_FAQS.map((faq, index) => {
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

export function ImageEditingPage() {
  return (
    <>
      <Hero />
      <Services />
      <Deliverables />
      <Specs />
      <Process />
      <PpcAddon />
      <Compare />
      <Plans />
      <Sectors />
      <Beyond />
      <Why />
      <Faqs />
    </>
  );
}
