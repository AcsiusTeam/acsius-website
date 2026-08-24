import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { MagentoStoreDemo } from "@/components/site/MagentoStoreDemo";
import { CONTACT } from "@/lib/site";
import {
  MGT_BUILDS,
  MGT_COMPARE,
  MGT_FAQS,
  MGT_HERO,
  MGT_MIGRATION,
  MGT_MODELS,
  MGT_SERVICES,
  MGT_STACK,
  MGT_WHY,
} from "@/lib/magento-dev";

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
              {MGT_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {MGT_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {MGT_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {MGT_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Hire Magento Developers
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
              {MGT_HERO.stats.map((stat) => (
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
              <MagentoStoreDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Services: split explorer (rail of titles + detail panel) ---------- */
function Services() {
  const [at, setAt] = useState(0);
  const active = MGT_SERVICES[at] ?? MGT_SERVICES[0]!;
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Magento development services
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Five reasons teams call our Magento bench.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="flex flex-col gap-2">
              {MGT_SERVICES.map((s, i) => {
                const on = at === i;
                return (
                  <li key={s.key}>
                    <button
                      type="button"
                      onClick={() => setAt(i)}
                      onMouseEnter={() => setAt(i)}
                      aria-pressed={on}
                      className={`flex w-full cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                        on
                          ? "border-ember bg-ember/10"
                          : "border-line bg-card hover:border-primary/30 hover:bg-mist/60"
                      }`}
                    >
                      <span
                        className={`font-display text-xs font-black ${on ? "text-ember" : "text-muted-foreground"}`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span
                          className={`block font-display text-base font-extrabold ${on ? "text-primary" : "text-foreground"}`}
                        >
                          {s.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {s.summary}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className={`text-lg transition-transform duration-300 ${on ? "translate-x-1 text-ember" : "text-muted-foreground"}`}
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div
              key={active.key}
              className="relative h-full animate-[fadeUp_0.4s_ease-out_both] overflow-hidden rounded-[28px] border border-line bg-navy p-8 text-navy-foreground shadow-lift lg:p-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-ember opacity-20 blur-2xl"
              />
              <div className="relative flex flex-wrap items-end justify-between gap-4">
                <h3 className="max-w-sm font-display text-2xl font-extrabold">{active.title}</h3>
                <p className="text-right">
                  <span className="block font-display text-4xl font-extrabold text-ember">
                    {active.metric}
                  </span>
                  <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                    {active.metricLabel}
                  </span>
                </p>
              </div>
              <p className="relative mt-6 leading-relaxed text-navy-foreground/80">{active.body}</p>
              <div className="relative mt-7 flex flex-wrap gap-2">
                {active.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-navy-foreground/85"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <a
                href="mailto:info@acsius.com?subject=Request%20from%20acsius.com"
                className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-ember"
              >
                Scope this in writing <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Build icons ---------- */
function BuildIcon({ index }: { index: number }) {
  const shapes = [
    /* D2C brand stores — shopping bag */
    <>
      <path d="M8 14h24l-2 20H10z" />
      <path d="M15 14a5 5 0 0110 0" />
    </>,
    /* B2B wholesale — warehouse / boxes */
    <>
      <path d="M6 34V16l14-6 14 6v18" />
      <path d="M14 34V24h12v10" />
      <path d="M20 24v10" />
    </>,
    /* Marketplaces — storefront */
    <>
      <path d="M6 16l3-6h22l3 6" />
      <path d="M8 16v18h24V16" />
      <path d="M6 16c0 3 2.5 4 4 4s4-1 4-4c0 3 2.5 4 4 4s4-1 4-4c0 3 2.5 4 4 4s4-1 4-4" />
    </>,
    /* Multi-region — globe */
    <>
      <circle cx="20" cy="20" r="14" />
      <path d="M6 20h28" />
      <path d="M20 6c4 4 4 24 0 28-4-4-4-24 0-28z" />
    </>,
    /* Headless — plug / api */
    <>
      <rect x="6" y="14" width="12" height="12" rx="3" />
      <rect x="22" y="14" width="12" height="12" rx="3" />
      <path d="M18 20h4" />
      <path d="M12 14V8M28 26v6" />
    </>,
    /* Rescue — life buoy / wrench */
    <>
      <circle cx="20" cy="20" r="13" />
      <circle cx="20" cy="20" r="5" />
      <path d="M11 11l5 5M29 11l-5 5M11 29l5-5M29 29l-5-5" />
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

/* ---------- Builds: icon card grid ---------- */
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
            Magento development agency
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            What we build on Magento.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MGT_BUILDS.map((b, i) => (
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

/* ---------- Migration: vertical timeline ---------- */
function Migration() {
  return (
    <section id="process" className="bg-mist/70 py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Magento 1 to 2 · version upgrades
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            A migration rehearsed before it happens.
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-5 lg:grid-cols-[auto_1fr]">
          {MGT_MIGRATION.map((m, i) => (
            <Reveal key={m.step} as="li" delay={i * 70} className="lg:col-span-2">
              <div className="group relative flex gap-5 sm:gap-8">
                <div className="relative flex flex-col items-center">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy font-display text-sm font-black text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-primary-foreground">
                    {m.step}
                  </span>
                  {i < MGT_MIGRATION.length - 1 && (
                    <span
                      aria-hidden
                      className="mt-2 w-px flex-1 bg-line"
                      style={{ minHeight: "2rem" }}
                    />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:border-ember/40 group-hover:shadow-lift lg:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-extrabold text-foreground lg:text-xl">
                        {m.title}
                      </h3>
                      <span className="rounded-full border border-ember/35 bg-ember/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-foreground">
                        {m.meta}
                      </span>
                    </div>
                    <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {m.body}
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

/* ---------- Models: selectable rows + detail ---------- */
function Models() {
  const [picked, setPicked] = useState(0);
  const active = MGT_MODELS[picked] ?? MGT_MODELS[0]!;
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Hire Magento developers in India · models
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Pick how you want to hire.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <ul className="grid gap-3">
              {MGT_MODELS.map((model, i) => {
                const on = picked === i;
                return (
                  <li key={model.name}>
                    <button
                      type="button"
                      onClick={() => setPicked(i)}
                      aria-pressed={on}
                      className={`flex w-full cursor-pointer items-center gap-4 rounded-3xl border px-6 py-5 text-left transition-all duration-400 ${
                        on
                          ? "border-ember bg-card shadow-lift"
                          : "border-line bg-card/60 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-black transition-all duration-300 ${
                          on
                            ? "border-transparent bg-ember text-primary-foreground"
                            : "border-line text-muted-foreground"
                        }`}
                      >
                        ✓
                      </span>
                      <span className="flex-1">
                        <span className="block font-display text-lg font-extrabold text-foreground">
                          {model.name}
                        </span>
                        <span className="mt-0.5 block text-sm font-bold text-ember">
                          {model.price}
                        </span>
                      </span>
                      <span
                        className={`hidden text-xs font-black uppercase tracking-[0.12em] sm:block ${on ? "text-ember" : "text-muted-foreground"}`}
                      >
                        {on ? "Selected" : "Select"}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div
              key={active.name}
              className="animate-[fadeUp_0.4s_ease-out_both] rounded-[28px] border border-line bg-mist/70 p-8 lg:p-10"
            >
              <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                What you get
              </p>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-foreground">
                {active.name}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{active.note}</p>
              <ul className="mt-6 space-y-3">
                {active.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ember"
                    />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-8 inline-flex px-7 py-3.5">
                Get a quote for this model
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stack ---------- */
function Stack() {
  return (
    <section className="border-y border-line bg-card py-20 lg:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Magento developer India · stack
          </p>
          <h2 className="mt-5 max-w-sm font-display text-2xl font-extrabold leading-[1.15] text-foreground lg:text-[2rem]">
            Tools the bench uses every week.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="flex flex-wrap gap-2.5">
            {MGT_STACK.map((tool, i) => (
              <li
                key={tool}
                className={`cursor-default rounded-2xl border px-4 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
                  i % 5 === 0
                    ? "border-transparent bg-navy text-navy-foreground"
                    : i % 5 === 2
                      ? "border-ember/40 bg-ember/10 text-foreground"
                      : "border-line bg-mist/60 text-foreground hover:border-primary/40"
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

/* ---------- Compare: three stacked column cards ---------- */
function Compare() {
  return (
    <section className="bg-mist/60 py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Hire dedicated Magento developer
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Three ways to staff it. One that survives sale season.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {MGT_COMPARE.columns.map((col, colIndex) => {
            const best = colIndex === MGT_COMPARE.columns.length - 1;
            return (
              <Reveal key={col} className="h-full" delay={colIndex * 90}>
                <div
                  className={`flex h-full flex-col rounded-[28px] border p-8 transition-all duration-500 ${
                    best
                      ? "border-ember bg-navy text-navy-foreground shadow-lift"
                      : "border-line bg-card hover:-translate-y-1 hover:shadow-soft"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3
                      className={`font-display text-xl font-extrabold ${best ? "text-ember" : "text-foreground"}`}
                    >
                      {col}
                    </h3>
                    {best && (
                      <span className="rounded-full bg-ember px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-primary-foreground">
                        Recommended
                      </span>
                    )}
                  </div>
                  <ul
                    className={`mt-7 space-y-5 border-t pt-6 ${best ? "border-white/15" : "border-line"}`}
                  >
                    {MGT_COMPARE.rows.map((row) => (
                      <li key={row.label}>
                        <p
                          className={`text-[10px] font-black uppercase tracking-[0.14em] ${best ? "text-navy-foreground/55" : "text-muted-foreground/80"}`}
                        >
                          {row.label}
                        </p>
                        <p
                          className={`mt-1 text-sm font-bold ${best ? "text-navy-foreground" : "text-foreground/80"}`}
                        >
                          {row.values[colIndex]}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why: full-width numbered strip ---------- */
function Why() {
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Why ACSIUS
            </p>
            <h2 className="mt-5 max-w-lg font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Hire the team, not a marketplace listing.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex px-7 py-3.5">
              Talk to a commerce lead
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {MGT_WHY.map((item, i) => (
            <Reveal key={item.title} className="h-full" delay={i * 70}>
              <div className="group h-full bg-card p-7 transition-colors duration-500 hover:bg-mist/70">
                <p className="font-display text-4xl font-extrabold text-ember">{item.metric}</p>
                <h3 className="mt-4 font-display text-base font-extrabold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted-foreground/80">
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
    <section id="faq" className="bg-mist/60 py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                Hiring Magento developers, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Share your store URL or repo. You get matched profiles, an engagement plan and a
                written cost inside two working days.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Request Developer Profiles
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {MGT_FAQS.map((faq, index) => {
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

export function MagentoDevPage() {
  return (
    <>
      <Hero />
      <Services />
      <Builds />
      <Migration />
      <Models />
      <Stack />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
