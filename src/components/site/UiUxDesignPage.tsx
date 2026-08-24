import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { UiUxCanvasDemo } from "@/components/site/UiUxCanvasDemo";
import { CONTACT } from "@/lib/site";
import {
  UIUX_COMPARE,
  UIUX_DELIVERABLES,
  UIUX_FAQS,
  UIUX_HERO,
  UIUX_MODELS,
  UIUX_PROCESS,
  UIUX_SCORES,
  UIUX_SECTORS,
  UIUX_STAGES,
  UIUX_WHY,
} from "@/lib/ui-ux";

const SECTOR_ICONS = ["✚", "₹", "◈", "◉", "✦", "⌂", "⚙", "➤"];

/* ---------- Hero (consistent navy editorial) ---------- */
function Hero() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 84% 10%, oklch(0.71 0.17 52 / 0.24), transparent 70%), radial-gradient(52% 52% at 4% 30%, oklch(0.62 0.11 250 / 0.34), transparent 70%), radial-gradient(65% 45% at 55% 118%, oklch(0.71 0.17 52 / 0.13), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {UIUX_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {UIUX_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {UIUX_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {UIUX_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a UI/UX Proposal
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a designer
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {UIUX_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full max-w-[520px]">
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
              <UiUxCanvasDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Stages: vertical rail explorer (unique to this page) ---------- */
function Stages() {
  const [active, setActive] = useState(0);
  const stage = UIUX_STAGES[active] ?? UIUX_STAGES[0]!;
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            UI/UX website design services
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Five stages, one continuous design rail.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* rail */}
          <div className="relative">
            <span aria-hidden className="absolute left-[13px] top-3 bottom-3 w-px bg-line" />
            <ul className="space-y-1">
              {UIUX_STAGES.map((s, i) => {
                const on = active === i;
                return (
                  <li key={s.key}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      aria-pressed={on}
                      className="group relative flex w-full cursor-pointer items-center gap-4 rounded-2xl px-2 py-3 text-left transition-colors duration-300 hover:bg-mist/70"
                    >
                      <span
                        className={`relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[10px] font-black transition-all duration-300 ${
                          on
                            ? "scale-110 border-transparent bg-ember text-primary-foreground"
                            : "border-line bg-card text-muted-foreground"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`font-display text-base font-extrabold transition-colors ${
                          on ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {s.label}
                      </span>
                      <span
                        aria-hidden
                        className={`ml-auto text-ember transition-all duration-300 ${
                          on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* panel */}
          <div
            key={stage.key}
            className="relative flex animate-[fadeUp_0.5s_ease-out_both] flex-col overflow-hidden rounded-[30px] bg-navy p-8 text-navy-foreground shadow-lift lg:p-11"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember opacity-20 blur-2xl"
            />
            <div className="relative flex flex-wrap items-end justify-between gap-5">
              <h3 className="max-w-lg font-display text-2xl font-extrabold leading-snug lg:text-3xl">
                {stage.title}
              </h3>
              <p className="text-right">
                <span className="block font-display text-4xl font-extrabold text-ember">
                  {stage.metric}
                </span>
                <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                  {stage.metricLabel}
                </span>
              </p>
            </div>
            <p className="relative mt-6 max-w-2xl leading-relaxed text-navy-foreground/75">
              {stage.body}
            </p>
            <div className="relative mt-auto grid gap-3 pt-9 sm:grid-cols-2">
              {stage.outputs.map((o) => (
                <div
                  key={o}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                >
                  <span
                    aria-hidden
                    className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[10px] font-black text-primary-foreground"
                  >
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-navy-foreground/85">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Deliverables: bento grid ---------- */
function Deliverables() {
  const span = { lg: "sm:col-span-2 lg:col-span-2 lg:row-span-2", md: "sm:col-span-2", sm: "" };
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              UI/UX web design agency
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              What you get from us.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Six design tracks, each delivered as build-ready Figma files with documented states.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(160px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {UIUX_DELIVERABLES.map((d, i) => (
            <Reveal key={d.name} delay={i * 70} className={`h-full ${span[d.size]}`}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                  d.size === "lg"
                    ? "bg-navy text-navy-foreground shadow-lift"
                    : "border border-line bg-card shadow-soft hover:border-ember/50 hover:shadow-lift"
                }`}
              >
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-ember blur-2xl transition-opacity duration-500 ${
                    d.size === "lg" ? "opacity-25" : "opacity-[0.07] group-hover:opacity-[0.16]"
                  }`}
                />
                <span
                  className={`relative w-fit rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] ${
                    d.size === "lg"
                      ? "bg-ember text-primary-foreground"
                      : "border border-line bg-mist text-foreground"
                  }`}
                >
                  {d.tag}
                </span>
                <h3
                  className={`relative mt-auto pt-8 font-display font-extrabold ${
                    d.size === "lg" ? "text-2xl lg:text-3xl" : "text-lg"
                  }`}
                >
                  {d.name}
                </h3>
                <p
                  className={`relative mt-2.5 text-sm leading-relaxed ${
                    d.size === "lg" ? "text-navy-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {d.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Scorecard: animated before/after bars ---------- */
function Scorecard() {
  const [shown, setShown] = useState(false);
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 45% at 92% 8%, oklch(0.71 0.17 52 / 0.2), transparent 70%), radial-gradient(45% 45% at 6% 92%, oklch(0.62 0.11 250 / 0.3), transparent 70%)",
        }}
      />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            UX audit scorecard
          </p>
          <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            We score your site before we design a pixel.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-navy-foreground/70">
            Every engagement opens with a scored teardown across five dimensions, so the redesign is measured against a real baseline — not a feeling.
          </p>
          <button
            type="button"
            onClick={() => setShown((v) => !v)}
            className="btn-cta mt-8 inline-flex cursor-pointer px-7 py-3.5"
          >
            {shown ? "Show current scores" : "Show scores after redesign"}
          </button>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[30px] border border-white/12 bg-white/[0.05] p-7 backdrop-blur-sm lg:p-9">
            <ul className="space-y-6">
              {UIUX_SCORES.map((s) => {
                const value = shown ? s.after : s.before;
                return (
                  <li key={s.label}>
                    <div className="flex items-end justify-between gap-4">
                      <p className="text-sm font-bold text-navy-foreground/85">{s.label}</p>
                      <p
                        className={`font-display text-lg font-extrabold ${
                          shown ? "text-ember" : "text-navy-foreground/60"
                        }`}
                      >
                        {value}
                      </p>
                    </div>
                    <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          shown ? "bg-ember" : "bg-navy-foreground/35"
                        }`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Process: wavy horizontal journey ---------- */
function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-16 lg:py-20">
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            How the design happens
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-2xl font-extrabold leading-[1.12] text-foreground lg:text-[2rem]">
            Brief on Monday, direction by Thursday.
          </h2>
        </Reveal>

        {/* wavy spine */}
        <div className="relative mt-10 hidden lg:block">
          <svg
            aria-hidden
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-0 h-full w-full"
          >
            <path
              d="M0 110 C 140 40, 260 180, 400 110 S 660 40, 800 110 S 1060 180, 1200 110"
              fill="none"
              stroke="oklch(0.71 0.17 52 / 0.45)"
              strokeWidth="2"
              strokeDasharray="8 10"
            />
          </svg>

          <ol className="relative grid grid-cols-5 gap-x-6">
            {UIUX_PROCESS.map((p, i) => {
              const top = i % 2 === 0;
              return (
                <Reveal key={p.step} as="li" delay={i * 70} className="relative">
                  <div
                    className={`group relative rounded-[24px] border border-line bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift ${
                      top ? "mb-[7.5rem]" : "mt-[7.5rem]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-ember font-display text-sm font-black text-primary-foreground transition-colors duration-300 group-hover:bg-navy group-hover:text-navy-foreground">
                        {p.step}
                      </span>
                      <span className="rounded-full border border-line bg-mist px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-foreground">
                        {p.duration}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-extrabold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                    <p className="mt-4 text-[11px] font-black uppercase tracking-[0.1em] text-ember">
                      Delivers: {p.ship}
                    </p>

                    {/* connector dot */}
                    <span
                      className={`absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-ember bg-card ${
                        top ? "-bottom-[2.35rem]" : "-top-[2.35rem]"
                      }`}
                    />
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        {/* mobile / tablet: compact vertical wave */}
        <ol className="relative mt-10 block lg:hidden">
          <span
            aria-hidden
            className="absolute left-[22px] top-4 bottom-4 w-px bg-ember/40"
            style={{ backgroundImage: "repeating-linear-gradient(to bottom, oklch(0.71 0.17 52 / 0.45) 0, oklch(0.71 0.17 52 / 0.45) 8px, transparent 8px, transparent 16px)" }}
          />
          {UIUX_PROCESS.map((p, i) => (
            <Reveal key={p.step} as="li" delay={i * 60} className="relative pl-14 pb-5 last:pb-0">
              <span className="absolute left-[17px] top-1.5 h-3 w-3 rounded-full border-2 border-ember bg-card" />
              <div className="group relative rounded-[22px] border border-line bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-ember/50 hover:shadow-lift">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-ember font-display text-sm font-black text-primary-foreground transition-colors duration-300 group-hover:bg-navy group-hover:text-navy-foreground">
                    {p.step}
                  </span>
                  <span className="rounded-full border border-line bg-mist px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-foreground">
                    {p.duration}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-extrabold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <p className="mt-4 text-[11px] font-black uppercase tracking-[0.1em] text-ember">
                  Delivers: {p.ship}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Sectors: icon cards (consistent with SEO page) ---------- */
function Sectors() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            UI/UX Website Design Services India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Sectors we design for.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {UIUX_SECTORS.map((s, i) => (
            <Reveal key={s.name} delay={i * 60} className="h-full">
              <div className="group flex h-full flex-col rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mist text-lg text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-primary-foreground">
                  {SECTOR_ICONS[i]}
                </span>
                <h3 className="mt-5 font-display text-base font-extrabold text-foreground">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Compare ---------- */
function Compare() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            UI/UX website design company
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two kinds of redesign. Only one you can measure.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] border border-line bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                {UIUX_COMPARE.typical.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {UIUX_COMPARE.typical.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line text-[11px] font-black text-muted-foreground"
                    >
                      ✕
                    </span>
                    <span>{p}</span>
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
                {UIUX_COMPARE.acsius.title}
              </h3>
              <ul className="relative mt-6 space-y-4">
                {UIUX_COMPARE.acsius.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-navy-foreground/85">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-black text-primary-foreground"
                    >
                      ✓
                    </span>
                    <span>{p}</span>
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

/* ---------- Models ---------- */
function Models() {
  const [active, setActive] = useState(0);
  return (
    <section id="models" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Engagement
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Pick how you want to work. Click a card to select it.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {UIUX_MODELS.map((model, i) => {
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
                    {model.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        <span>{p}</span>
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
            Request a design proposal
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Why ---------- */
function Why() {
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            A design studio that ships, not just presents.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {UIUX_WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="h-full">
              <div className="group h-full bg-card p-7 transition-colors duration-500 hover:bg-mist">
                <p className="font-display text-4xl font-extrabold text-ember">{item.metric}</p>
                <h3 className="mt-4 font-display text-base font-extrabold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQs (consistent) ---------- */
function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                UI/UX design questions, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Share your site or product and the screens that matter. You get a scored audit, a scope and a written cost inside two working days.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Get a free UX audit
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {UIUX_FAQS.map((faq, index) => {
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

export function UiUxDesignPage() {
  return (
    <>
      <Hero />
      <Stages />
      <Deliverables />
      <Scorecard />
      <Process />
      <Sectors />
      <Compare />
      <Models />
      <Why />
      <Faqs />
    </>
  );
}
