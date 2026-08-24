import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { GraphicDesignDemo } from "@/components/site/GraphicDesignDemo";
import { CONTACT } from "@/lib/site";
import {
  GD_DELIVERABLES,
  GD_FAQS,
  GD_HERO,
  GD_INDUSTRIES,
  GD_OUTSOURCE,
  GD_PLANS,
  GD_PROCESS,
  GD_STYLES,
  GD_WHY,
} from "@/lib/graphic-design";

function Hero() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 48% at 88% 14%, oklch(0.71 0.17 52 / 0.26), transparent 70%), radial-gradient(55% 55% at 6% 24%, oklch(0.62 0.11 250 / 0.34), transparent 70%), radial-gradient(70% 50% at 46% 120%, oklch(0.71 0.17 52 / 0.14), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {GD_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {GD_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {GD_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {GD_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta px-7 py-3.5">
                Get a Design Quote
              </a>
              <a
                href={CONTACT.whatsapp ?? "#contact"}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                See How We Work
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {GD_HERO.stats.map((stat) => (
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
                  "radial-gradient(45% 45% at 24% 20%, oklch(0.71 0.17 52 / 0.36), transparent 70%), radial-gradient(40% 40% at 82% 82%, oklch(0.62 0.11 250 / 0.4), transparent 70%)",
              }}
            />
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)` }}
            >
              <GraphicDesignDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Bento grid — visually distinct from the card grids on other pages */
function Deliverables() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Graphic Design Services India
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              What lands in your drive.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Pick a lane or combine them. Scope is written before anyone opens a canvas.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:auto-rows-[190px] lg:grid-cols-4">
          {GD_DELIVERABLES.map((item, i) => (
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

/* Style switcher with live swatch preview */
function Styles() {
  const [active, setActive] = useState(0);
  const style = GD_STYLES[active] ?? GD_STYLES[0]!;
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Best Graphic Design Services
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Four directions. Yours in one.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tap a direction to preview the palette and where it performs. We always present real
              layouts, never mood boards.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-2">
            {GD_STYLES.map((s, i) => (
              <button
                key={s.name}
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
                <span className="flex gap-1">
                  {s.swatches.map((c) => (
                    <span
                      key={c}
                      className="h-4 w-4 rounded-full border border-line"
                      style={{ background: c }}
                    />
                  ))}
                </span>
              </button>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[32px] border border-line bg-card shadow-lift">
            <div className="grid h-44 grid-cols-4">
              {style.swatches.map((c) => (
                <span
                  key={c}
                  className="transition-all duration-500"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-ember">
                Direction {String(active + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-3xl font-extrabold text-foreground">
                {style.name}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {style.note}
              </p>
              <p className="mt-6 flex items-center gap-2 text-xs font-bold text-primary">
                <span className="h-px w-6 bg-ember" />
                Fits: {style.fits}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Numbered vertical rail — different rhythm to the card grids */
function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 12% 10%, oklch(0.62 0.11 250 / 0.3), transparent 70%), radial-gradient(45% 45% at 90% 88%, oklch(0.71 0.17 52 / 0.22), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              How the studio runs
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.2rem]">
              Brief on Monday. Artwork you can use.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-14 border-t border-white/12">
          {GD_PROCESS.map((phase, i) => (
            <li key={phase.step}>
              <Reveal delay={i * 60}>
                <div className="group grid gap-4 border-b border-white/12 py-8 md:grid-cols-[5rem_1fr_1.1fr_auto] md:items-start">
                  <span className="font-display text-3xl font-extrabold text-ember/40 transition-colors duration-400 group-hover:text-ember">
                    {phase.step}
                  </span>
                  <h3 className="font-display text-xl font-extrabold transition-transform duration-400 group-hover:translate-x-1">
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-foreground/70">{phase.body}</p>
                  <div className="flex flex-col gap-2 md:items-end">
                    <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/70">
                      {phase.duration}
                    </span>
                    <span className="text-xs font-bold text-ember">{phase.ship}</span>
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

function Outsource() {
  const [active, setActive] = useState(0);
  const row = GD_OUTSOURCE.rows[active]!;

  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Outsource Graphic Design
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Pick a worry. See how we handle it.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The usual reasons outsourcing goes wrong — and what changes when a named senior
              designer owns your brief.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {GD_OUTSOURCE.rows.map((r, i) => (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
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
              <div className="rounded-[26px] border border-dashed border-line bg-mist/60 p-7">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="grid h-6 w-6 place-items-center rounded-full bg-muted-foreground/15 text-xs font-black text-muted-foreground"
                  >
                    ✕
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                    Typical vendor
                  </p>
                </div>
                <p
                  key={`t-${active}`}
                  className="animate-[fadeUp_0.5s_ease-out_both] mt-4 font-display text-xl leading-snug text-muted-foreground line-through decoration-muted-foreground/30 lg:text-2xl"
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
                  className="animate-[fadeUp_0.5s_ease-out_both] relative mt-4 font-display text-2xl font-extrabold leading-snug lg:text-[2rem]"
                >
                  {row.acsius}
                </p>
                <a
                  href="/contact"
                  className="btn-cta relative mt-8 inline-flex px-6 py-3 text-sm"
                >
                  Outsource your design
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
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Ways to work with us
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Project, retainer or a designer of your own.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Every option is quoted in writing after a short brief.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-fr gap-5 lg:grid-cols-3">
          {GD_PLANS.map((plan, i) => (
            <Reveal key={plan.name} className="h-full" delay={i * 70}>
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                  plan.highlight
                    ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                    : "border-line bg-card text-foreground shadow-soft hover:shadow-lift"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute right-6 top-6 rounded-full bg-ember px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-primary-foreground">
                    Most picked
                  </span>
                )}
                <h3 className="font-display text-xl font-extrabold">{plan.name}</h3>
                <p className="mt-4 font-display text-3xl font-extrabold text-ember">{plan.price}</p>
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
                      <span className={plan.highlight ? "text-navy-foreground/85" : "text-foreground"}>
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:info@acsius.com?subject=Request%20from%20acsius.com"
                  className={`mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold ${plan.highlight ? "text-ember" : "text-primary"}`}
                >
                  Get a quote
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorIcon({ index }: { index: number }) {
  const shapes = [
    <>
      <path d="M20 10v20M10 20h20" />
      <circle cx="20" cy="20" r="15" />
    </>,
    <>
      <path d="M8 32V14M16 32V8M24 32V18M32 32V12" />
      <path d="M4 36h32" />
    </>,
    <>
      <path d="M8 14h24l-2 20H10z" />
      <path d="M15 14a5 5 0 0110 0" />
    </>,
    <>
      <path d="M4 14l16-8 16 8-16 8z" />
      <path d="M12 18v10c0 2 4 4 8 4s8-2 8-4V18" />
    </>,
    <>
      <path d="M6 20l14-12 14 12" />
      <path d="M10 20v14h20V20" />
      <path d="M18 34v-8h4v8" />
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
            Sectors we design for
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
            Design that respects your rules.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GD_INDUSTRIES.map((sector, index) => (
            <Reveal key={sector.name} as="li" delay={index * 60}>
              <a
                href="/contact"
                className="group flex h-full flex-col justify-between gap-6 rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <SectorIcon index={index} />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                    {sector.focus}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                    {sector.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {sector.angle}
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


function Why() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 86% 8%, oklch(0.71 0.17 52 / 0.2), transparent 70%), radial-gradient(50% 50% at 8% 90%, oklch(0.62 0.11 250 / 0.28), transparent 70%)",
        }}
      />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.2rem]">
            A graphic design agency you can actually reach.
          </h2>
          <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-8 inline-flex px-7 py-3.5">
            Start a project
          </a>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/12 bg-white/10 sm:grid-cols-2">
          {GD_WHY.map((item, i) => (
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
                Graphic design, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send your brief and references. You get a written scope with deliverables, timeline
                and cost within one working day.
              </p>
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Talk to a Design Lead
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {GD_FAQS.map((faq, index) => {
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

export function GraphicDesignPage() {
  return (
    <>
      <Hero />
      <Deliverables />
      <Styles />
      <Process />
      <Outsource />
      <Plans />
      <Industries />
      <Why />
      <Faqs />
    </>
  );
}
