import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { PythonDemo } from "@/components/site/PythonDemo";
import { CONTACT } from "@/lib/site";
import {
  PY_CAPABILITIES,
  PY_COMPARE,
  PY_FAQS,
  PY_HERO,
  PY_MODELS,
  PY_PROCESS,
  PY_ROLES,
  PY_STACK,
  PY_WHY,
} from "@/lib/python-dev";

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
              {PY_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {PY_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {PY_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {PY_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Hire Python Developers
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
              {PY_HERO.stats.map((stat) => (
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
              <PythonDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Vertical accordion explorer — distinct rhythm from the tab pages */
function Capabilities() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="py-20 lg:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              What our Python developers build
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Five tracks. Scoped in writing before a branch exists.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Open a track to see the stack and the number we hold ourselves to.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3">
          {PY_CAPABILITIES.map((cap, i) => {
            const on = open === i;
            return (
              <Reveal key={cap.key} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-[26px] border transition-all duration-500 ${
                    on
                      ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                      : "border-line bg-card shadow-soft hover:border-primary/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left sm:px-8"
                  >
                    <span
                      className={`font-display text-xs font-black ${on ? "text-ember" : "text-ember/80"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 font-display text-lg font-extrabold ${on ? "text-navy-foreground" : "text-foreground"}`}
                    >
                      {cap.tab}
                    </span>
                    <span
                      className={`hidden shrink-0 font-display text-sm font-extrabold sm:block ${on ? "text-ember" : "text-primary"}`}
                    >
                      {cap.metric}
                    </span>
                    <span
                      aria-hidden
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-black transition-all duration-300 ${
                        on
                          ? "rotate-45 bg-ember text-primary-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="min-h-0">
                      <div className="grid gap-6 px-6 pb-7 sm:px-8 lg:grid-cols-[1.4fr_0.6fr]">
                        <div className="min-w-0">
                          <h3 className="font-display text-xl font-extrabold leading-snug lg:text-2xl">
                            {cap.headline}
                          </h3>
                          <p className="mt-3 max-w-xl leading-relaxed text-navy-foreground/75">
                            {cap.body}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-2">
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
                        <div className="flex flex-col justify-center rounded-[20px] border border-white/12 bg-white/[0.05] p-6">
                          <p className="font-display text-3xl font-extrabold text-ember">
                            {cap.metric}
                          </p>
                          <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-navy-foreground/60">
                            {cap.metricLabel}
                          </p>
                          <a
                            href="mailto:info@acsius.com?subject=Request%20from%20acsius.com"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ember"
                          >
                            Scope this track →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Roles — compact card grid */
function Roles() {
  return (
    <section className="bg-mist/70 py-20 lg:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Hire Python developers by role
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Build the squad seat by seat.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta inline-flex px-7 py-3.5">
              Request Developer Profiles
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PY_ROLES.map((r, i) => (
            <Reveal key={r.role} className="h-full" delay={i * 60}>
              <a
                href="/contact"
                className="group flex h-full flex-col rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40 hover:shadow-lift"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-display text-xs font-black text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-line bg-mist px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-foreground transition-colors group-hover:border-ember/40 group-hover:text-ember">
                    {r.level}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold text-foreground">
                  {r.role}
                </h3>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-primary">
                  {r.focus}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.detail}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            The stack we hire for
          </p>
          <h2 className="mt-5 max-w-sm font-display text-2xl font-extrabold leading-[1.15] text-foreground lg:text-[2rem]">
            Every Python developer works these daily.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            No CV padding. If a tool is on this list, someone on the bench shipped production code
            with it this year.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="flex flex-wrap gap-2.5">
            {PY_STACK.map((tool, i) => (
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
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-24">
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
            Hire dedicated Python developer · models
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            Pick how you want to hire.
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-fr gap-4 lg:grid-cols-3">
          {PY_MODELS.map((model, i) => {
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
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                        />
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
            Hire a dedicated Python developer
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* Process — horizontal stepped rail */
function Process() {
  return (
    <section id="process" className="bg-mist/70 py-20 lg:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              From call to code
            </p>
            <h2 className="mt-5 max-w-lg font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Two weeks to judge us on output.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex px-7 py-3.5">
              Start the discovery call
            </a>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {PY_PROCESS.map((phase, i) => (
            <Reveal key={phase.step} as="li" className="h-full" delay={i * 60}>
              <div className="group flex h-full flex-col rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40 hover:shadow-lift">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-navy font-display text-[10px] font-black text-navy-foreground transition-colors duration-400 group-hover:bg-ember group-hover:text-primary-foreground">
                  {phase.step}
                </span>
                <h3 className="mt-4 font-display text-base font-extrabold text-foreground">
                  {phase.title}
                </h3>
                <span className="mt-2 self-start rounded-full border border-line px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground">
                  {phase.duration}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
                <p className="mt-auto border-t border-line pt-3 text-[10px] font-black uppercase tracking-[0.12em] text-ember">
                  Ships: {phase.ship}
                </p>
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
    <section className="py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Python programmer for hire
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
              {PY_COMPARE.columns.map((col, i) => (
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
            {PY_COMPARE.rows.map((row) => (
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
                      {PY_COMPARE.columns[i]}:
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
    <section id="why" className="bg-mist py-20 lg:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Hire Python developers in India, not a marketplace listing.
          </h2>
          <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-8 inline-flex px-7 py-3.5">
            Talk to an engineering lead
          </a>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {PY_WHY.map((item, i) => (
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
    <section id="faq" className="py-20 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                Hiring Python developers, answered.
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
            {PY_FAQS.map((faq, index) => {
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

export function PythonDevPage() {
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
