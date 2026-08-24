import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { PhpCodeDemo } from "@/components/site/PhpCodeDemo";
import { CONTACT } from "@/lib/site";
import {
  PHP_BUILDS,
  PHP_CAPABILITIES,
  PHP_COMPARE,
  PHP_FAQS,
  PHP_HERO,
  PHP_MODELS,
  PHP_PROCESS,
  PHP_STACK,
  PHP_WHY,
} from "@/lib/php-dev";

/* ---------- Hero: copy left, visual right (editorial) ---------- */
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
              {PHP_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {PHP_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {PHP_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {PHP_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Hire PHP Developers
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
              {PHP_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full max-w-[460px]">
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
              <PhpCodeDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Capabilities: horizontal tab explorer ---------- */
function Capabilities() {
  const [active, setActive] = useState(0);
  const cap = PHP_CAPABILITIES[active] ?? PHP_CAPABILITIES[0]!;
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              PHP development services
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Five things clients hire our PHP team for.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tap a capability. Every engagement is scoped in writing before a branch is created.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {PHP_CAPABILITIES.map((c, i) => {
            const on = active === i;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-pressed={on}
                className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  on
                    ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                    : "border-line bg-card text-foreground hover:border-primary/30 hover:bg-mist/60"
                }`}
              >
                {c.tab}
              </button>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div
            key={cap.key}
            className="relative mt-8 flex animate-[fadeUp_0.5s_ease-out_both] flex-col overflow-hidden rounded-[30px] border border-transparent bg-navy p-8 text-navy-foreground shadow-lift lg:p-11"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember opacity-20 blur-2xl"
            />
            <div className="relative flex flex-wrap items-end justify-between gap-4">
              <h3 className="max-w-xl font-display text-2xl font-extrabold leading-snug lg:text-3xl">
                {cap.headline}
              </h3>
              <p className="text-right">
                <span className="block font-display text-4xl font-extrabold text-ember">{cap.metric}</span>
                <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                  {cap.metricLabel}
                </span>
              </p>
            </div>
            <p className="relative mt-6 max-w-3xl leading-relaxed text-navy-foreground/75">{cap.body}</p>
            <div className="relative mt-auto flex flex-wrap gap-2 pt-8">
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
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Build icons ---------- */
function BuildIcon({ index }: { index: number }) {
  const shapes = [
    /* App */
    <>
      <rect x="6" y="8" width="28" height="20" rx="3" />
      <path d="M6 16h28M14 34h12" />
    </>,
    /* CMS plugin */
    <>
      <path d="M8 34V10h24v24" />
      <path d="M14 16h4M22 16h4M14 22h4M22 22h4M14 28h12" />
    </>,
    /* Commerce */
    <>
      <path d="M6 14h28l-2 20H8z" />
      <path d="M14 14a6 6 0 0112 0" />
    </>,
    /* API */
    <>
      <circle cx="20" cy="20" r="13" />
      <path d="M20 12v16M16 16h6a3 3 0 010 6h-4a3 3 0 000 6h6" />
    </>,
    /* Rescue */
    <>
      <circle cx="20" cy="20" r="13" />
      <circle cx="20" cy="20" r="5" />
      <path d="M11 11l5 5M29 11l-5 5M11 29l5-5M29 29l-5-5" />
    </>,
    /* SaaS */
    <>
      <path d="M8 34V16l12-8 12 8v18" />
      <path d="M20 8v26" />
      <path d="M12 24h16" />
    </>,
  ];
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-10 w-10 text-ember transition-transform duration-500 group-hover:scale-110"
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

/* ---------- Builds: dark icon card grid ---------- */
function Builds() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 45% at 92% 8%, oklch(0.71 0.17 52 / 0.2), transparent 70%), radial-gradient(40% 40% at 6% 92%, oklch(0.62 0.11 250 / 0.3), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            PHP website development services
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            What we build in PHP.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHP_BUILDS.map((b, i) => (
            <Reveal key={b.name} as="li" delay={i * 60}>
              <a
                href="/contact"
                className="group flex h-full flex-col justify-between gap-6 rounded-[26px] border border-white/12 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:bg-white/[0.08]"
              >
                <span className="flex items-start justify-between gap-4">
                  <BuildIcon index={i} />
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/70">
                    {b.tag}
                  </span>
                </span>
                <span>
                  <h3 className="font-display text-lg font-bold">{b.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{b.detail}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ember opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Talk to an engineer →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Stack: floating chip cloud ---------- */
function Stack() {
  return (
    <section className="bg-mist/70 py-24 lg:py-28">
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
            No CV padding. If a tool is on this list, someone on the bench has shipped production code with it this year.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="flex flex-wrap gap-2.5">
            {PHP_STACK.map((tool, i) => (
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

/* ---------- Models: selectable cards ---------- */
function Models() {
  const [picked, setPicked] = useState(0);
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Hire PHP developer · models
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Pick how you want to hire.
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-fr gap-4 lg:grid-cols-3">
          {PHP_MODELS.map((model, i) => {
            const on = picked === i;
            return (
              <Reveal key={model.name} className="h-full" delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setPicked(i)}
                  aria-pressed={on}
                  className={`flex h-full w-full cursor-pointer flex-col rounded-[28px] border p-8 text-left transition-all duration-500 hover:-translate-y-1.5 ${
                    on
                      ? "border-ember bg-card shadow-lift"
                      : "border-line bg-card/60 hover:border-primary/30 hover:shadow-soft"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-extrabold text-foreground">{model.name}</h3>
                    <span
                      aria-hidden
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-black transition-all duration-300 ${
                        on
                          ? "border-transparent bg-ember text-primary-foreground"
                          : "border-line text-muted-foreground"
                      }`}
                    >
                      ✓
                    </span>
                  </span>
                  <p className="mt-4 font-display text-2xl font-extrabold text-ember">{model.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{model.note}</p>
                  <ul className="mt-6 space-y-2.5">
                    {model.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold transition-colors ${
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
          <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-10 inline-flex px-7 py-3.5">
            Hire a dedicated PHP developer
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Process: vertical timeline ---------- */
function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
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
            From call to code
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            Two weeks to judge us on output.
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-5 lg:grid-cols-[auto_1fr]">
          {PHP_PROCESS.map((phase, i) => (
            <Reveal key={phase.step} as="li" delay={i * 70} className="lg:col-span-2">
              <div className="group relative flex gap-5 sm:gap-8">
                <div className="relative flex flex-col items-center">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ember font-display text-sm font-black text-primary-foreground transition-colors duration-300 group-hover:bg-white group-hover:text-navy">
                    {phase.step}
                  </span>
                  {i < PHP_PROCESS.length - 1 && (
                    <span aria-hidden className="mt-2 w-px flex-1 bg-white/15" style={{ minHeight: "2rem" }} />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="rounded-[24px] border border-white/12 bg-white/[0.05] p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-ember/40 lg:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-extrabold lg:text-xl">{phase.title}</h3>
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/70">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-navy-foreground/75">
                      {phase.body}
                    </p>
                    <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-ember">
                      Delivers: {phase.ship}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Comparison matrix ---------- */
function Compare() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Hire dedicated PHP developer
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
              {PHP_COMPARE.columns.map((col, i) => (
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
            {PHP_COMPARE.rows.map((row) => (
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
                      i === 2 ? "bg-navy font-bold text-navy-foreground" : "bg-card text-muted-foreground"
                    }`}
                  >
                    <span className="mr-2 text-[10px] font-black uppercase tracking-[0.12em] opacity-60 md:hidden">
                      {PHP_COMPARE.columns[i]}:
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

/* ---------- Why ACSIUS ---------- */
function Why() {
  return (
    <section id="why" className="bg-mist py-24 lg:py-32">
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
          {PHP_WHY.map((item, i) => (
            <Reveal key={item.title} className="h-full" delay={i * 70}>
              <div className="group h-full rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <p className="font-display text-4xl font-extrabold text-ember">{item.metric}</p>
                <h3 className="mt-4 font-display text-lg font-extrabold text-foreground">{item.title}</h3>
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

/* ---------- FAQs ---------- */
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
              <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                Hiring PHP developers, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Share your brief or repo. You get matched profiles, an engagement plan and a written cost inside two working days.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Request Developer Profiles
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {PHP_FAQS.map((faq, index) => {
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
                      className={`relative grid overflow-hidden transition-all duration-400 ${
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

export function PhpDevPage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Builds />
      <Stack />
      <Models />
      <Process />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
