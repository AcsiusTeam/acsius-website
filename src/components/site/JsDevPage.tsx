import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { JsStackDemo } from "@/components/site/JsStackDemo";
import { CONTACT } from "@/lib/site";
import {
  JS_CAPABILITIES,
  JS_COMPARE,
  JS_FAQS,
  JS_HERO,
  JS_MODELS,
  JS_PROCESS,
  JS_ROLES,
  JS_STACK,
  JS_WHY,
} from "@/lib/javascript-dev";

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
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {JS_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {JS_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {JS_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {JS_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Hire JavaScript Developers
              </a>
              <a
                href={CONTACT.whatsapp ?? "#contact"}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Request Developer Profiles
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {JS_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full min-w-0 max-w-[440px]">
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
              <JsStackDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Capability explorer — horizontal pill tabs + dark panel */
function Capabilities() {
  const [active, setActive] = useState(0);
  const cap = JS_CAPABILITIES[active] ?? JS_CAPABILITIES[0]!;
  return (
    <section id="services" className="py-24 lg:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              What our JavaScript experts do
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Five reasons teams hire JavaScript coders here.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tap a track. Every engagement is scoped in writing before a branch is created.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap gap-2.5">
            {JS_CAPABILITIES.map((c, i) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`cursor-pointer rounded-full border px-5 py-2.5 font-display text-sm font-extrabold transition-all duration-300 ${
                  active === i
                    ? "border-transparent bg-navy text-ember shadow-lift"
                    : "border-line bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/40"
                }`}
              >
                <span className="mr-2 text-[10px] font-black opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {c.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            key={cap.key}
            className="mt-6 grid animate-[fadeUp_0.5s_ease-out_both] gap-px overflow-hidden rounded-[30px] bg-line shadow-lift lg:grid-cols-[1.35fr_0.65fr]"
          >
            <div className="relative overflow-hidden bg-navy p-8 text-navy-foreground lg:p-11">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-16 -bottom-20 h-56 w-56 rounded-full bg-primary opacity-25 blur-2xl"
              />
              <h3 className="relative max-w-lg font-display text-2xl font-extrabold leading-snug lg:text-3xl">
                {cap.headline}
              </h3>
              <p className="relative mt-4 max-w-xl leading-relaxed text-navy-foreground/75">
                {cap.body}
              </p>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {cap.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-navy-foreground/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center bg-card p-8 lg:p-10">
              <p className="font-display text-4xl font-extrabold text-ember lg:text-5xl">
                {cap.metric}
              </p>
              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                {cap.metricLabel}
              </p>
              <a
                href="mailto:info@acsius.com?subject=Request%20from%20acsius.com"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-ember"
              >
                Scope this track →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Roles table-style list — visually distinct from card grids */
function Roles() {
  return (
    <section className="bg-mist/70 py-24 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Hire JavaScript programmers
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Roles you can add to your sprint.
          </h2>
        </Reveal>

        <ul className="mt-12 overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
          {JS_ROLES.map((r, i) => (
            <Reveal key={r.role} as="li" delay={i * 50}>
              <a
                href="/contact"
                className={`group grid items-center gap-3 px-6 py-6 transition-colors duration-400 hover:bg-mist/70 sm:grid-cols-[1.15fr_0.7fr_1.3fr_auto] sm:px-8 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="font-display text-xs font-black text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base font-extrabold text-foreground">
                    {r.role}
                  </span>
                </span>
                <span className="text-xs font-black uppercase tracking-[0.12em] text-primary">
                  {r.focus}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{r.detail}</span>
                <span className="justify-self-start rounded-full border border-line bg-mist px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-foreground transition-colors group-hover:border-ember/40 group-hover:text-ember sm:justify-self-end">
                  {r.level}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="py-24 lg:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            The stack we hire for
          </p>
          <h2 className="mt-5 max-w-sm font-display text-2xl font-extrabold leading-[1.15] text-foreground lg:text-[2rem]">
            Every developer works these daily.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            No CV padding. If a tool is on this list, someone on the bench shipped production code
            with it this year.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="flex flex-wrap gap-2.5">
            {JS_STACK.map((tool, i) => (
              <li
                key={tool}
                className={`cursor-default rounded-2xl border px-4 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
                  i % 5 === 0
                    ? "border-transparent bg-navy text-navy-foreground"
                    : i % 5 === 2
                      ? "border-ember/40 bg-ember/10 text-foreground"
                      : "border-line bg-card text-foreground hover:border-primary/40"
                }`}
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Models() {
  const [picked, setPicked] = useState(0);
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 10% 12%, oklch(0.62 0.11 250 / 0.3), transparent 70%), radial-gradient(45% 45% at 92% 86%, oklch(0.71 0.17 52 / 0.22), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            Hire dedicated JavaScript developer · models
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            Pick how you want to hire.
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-fr gap-4 lg:grid-cols-3">
          {JS_MODELS.map((model, i) => {
            const on = picked === i;
            return (
              <Reveal key={model.name} className="h-full" delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setPicked(i)}
                  aria-pressed={on}
                  className={`flex h-full w-full cursor-pointer flex-col rounded-[28px] border p-8 text-left transition-all duration-500 hover:-translate-y-1.5 ${
                    on
                      ? "border-ember bg-white/[0.08] shadow-lift"
                      : "border-white/12 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-extrabold">{model.name}</h3>
                    <span
                      aria-hidden
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-black transition-all duration-300 ${
                        on
                          ? "border-transparent bg-ember text-primary-foreground"
                          : "border-white/25 text-navy-foreground/50"
                      }`}
                    >
                      ✓
                    </span>
                  </span>
                  <p className="mt-4 font-display text-2xl font-extrabold text-ember">
                    {model.price}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
                    {model.note}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {model.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        <span className="text-navy-foreground/85">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold transition-colors ${on ? "text-ember" : "text-navy-foreground/60"}`}
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
          <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-10 inline-flex px-7 py-3.5">
            Hire a dedicated JavaScript developer
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* Vertical timeline rail — different rhythm from the other pages */
function Process() {
  return (
    <section id="process" className="bg-mist/70 py-24 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              From call to code
            </p>
            <h2 className="mt-5 max-w-sm font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Two weeks to judge us on output.
            </h2>
            <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-8 inline-flex px-7 py-3.5">
              Start the discovery call
            </a>
          </div>
        </Reveal>

        <ol className="relative border-l border-line pl-8">
          {JS_PROCESS.map((phase, i) => (
            <Reveal key={phase.step} as="li" delay={i * 70}>
              <div className="group relative pb-8">
                <span className="absolute -left-[2.55rem] grid h-9 w-9 place-items-center rounded-full bg-navy font-display text-[10px] font-black text-navy-foreground transition-colors duration-400 group-hover:bg-ember group-hover:text-primary-foreground">
                  {phase.step}
                </span>
                <div className="rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:border-ember/40 group-hover:shadow-lift">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-extrabold text-foreground">
                      {phase.title}
                    </h3>
                    <span className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
                  <p className="mt-4 border-t border-line pt-3 text-[10px] font-black uppercase tracking-[0.12em] text-ember">
                    Ships: {phase.ship}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="py-24 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Hire JavaScript experts
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Three ways to staff it. One that survives month three.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
            <div className="hidden grid-cols-[1.1fr_1fr_1fr_1.1fr] gap-px bg-line md:grid">
              <div className="bg-mist px-6 py-4 font-display text-sm font-black uppercase tracking-[0.1em] text-foreground">
                What matters
              </div>
              {JS_COMPARE.columns.map((col, i) => (
                <div
                  key={col}
                  className={`px-6 py-4 font-display text-sm font-black uppercase tracking-[0.1em] ${
                    i === 2 ? "bg-navy text-ember" : "bg-mist text-foreground"
                  }`}
                >
                  {col}
                </div>
              ))}
            </div>
            {JS_COMPARE.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-px border-t border-line bg-line md:grid-cols-[1.1fr_1fr_1fr_1.1fr]"
              >
                <div className="bg-card px-6 py-5 font-display text-sm font-extrabold text-foreground">
                  {row.label}
                </div>
                {row.values.map((v, i) => (
                  <div
                    key={v}
                    className={`px-6 py-5 text-sm ${
                      i === 2
                        ? "bg-navy font-bold text-navy-foreground"
                        : "bg-card text-muted-foreground"
                    }`}
                  >
                    <span className="mr-2 text-[10px] font-black uppercase tracking-[0.12em] opacity-60 md:hidden">
                      {JS_COMPARE.columns[i]}:
                    </span>
                    {v}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="bg-mist py-24 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Hire the team, not a marketplace listing.
          </h2>
          <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-8 inline-flex px-7 py-3.5">
            Talk to an engineering lead
          </a>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {JS_WHY.map((item, i) => (
            <Reveal key={item.title} className="h-full" delay={i * 70}>
              <div className="h-full rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <p className="font-display text-4xl font-extrabold text-ember">{item.metric}</p>
                <h3 className="mt-4 font-display text-lg font-extrabold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-muted-foreground/80">
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
    <section id="faq" className="py-24 lg:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                Hiring JavaScript developers, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Share your brief or repo. You get matched profiles, an engagement plan and a written
                cost inside two working days.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Request Developer Profiles
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {JS_FAQS.map((faq, index) => {
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

export function JsDevPage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Roles />
      <Stack />
      <Models />
      <Process />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
