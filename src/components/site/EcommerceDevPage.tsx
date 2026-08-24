import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { EcommerceBuildDemo } from "@/components/site/EcommerceBuildDemo";
import { CONTACT } from "@/lib/site";
import {
  ECOM_COMPARE,
  ECOM_FAQS,
  ECOM_FEATURES,
  ECOM_HERO,
  ECOM_MODELS,
  ECOM_PLATFORMS,
  ECOM_PROCESS,
  ECOM_SERVICES,
  ECOM_STACK,
  ECOM_WHY,
} from "@/lib/ecommerce-dev";

const STACK_ICONS = ["◈", "⇄", "◎", "◉"];

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
            "radial-gradient(50% 50% at 84% 10%, oklch(0.71 0.17 52 / 0.24), transparent 70%), radial-gradient(52% 52% at 4% 30%, oklch(0.62 0.11 250 / 0.34), transparent 70%), radial-gradient(65% 45% at 55% 118%, oklch(0.71 0.17 52 / 0.13), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {ECOM_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {ECOM_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {ECOM_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {ECOM_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get an eCommerce Quote
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a commerce expert
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {ECOM_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full min-w-0 max-w-[500px]">
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
              <EcommerceBuildDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Platforms: segmented switcher on light ---------- */
function Platforms() {
  const [active, setActive] = useState(0);
  const p = ECOM_PLATFORMS[active] ?? ECOM_PLATFORMS[0]!;
  return (
    <section id="platforms" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              eCommerce web development company India
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Pick the platform. We build it properly.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Four routes to launch. Tap one to see fit, stack and timeline.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="grid gap-2">
            {ECOM_PLATFORMS.map((item, i) => {
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
              key={p.key}
              className="relative overflow-hidden rounded-[30px] border border-line bg-mist p-8 shadow-soft lg:p-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-ember opacity-[0.12] blur-2xl"
              />
              <div className="relative flex flex-wrap items-end justify-between gap-4">
                <h3 className="font-display text-2xl font-extrabold text-foreground">{p.name}</h3>
                <span className="rounded-full border border-line bg-card px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-foreground">
                  {p.stat} · {p.statLabel}
                </span>
              </div>
              <p className="relative mt-5 max-w-xl leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line bg-card px-3 py-1.5 text-xs font-bold text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-6 py-3">
                  Start a {p.name.split(" ")[0]} build
                </a>
                <Link
                  to={p.href}
                  className="rounded-full border border-line bg-card px-6 py-3 font-bold text-foreground transition-colors hover:border-ember hover:text-ember"
                >
                  Hire the team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services: bento grid on navy ---------- */
function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-28"
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
            eCommerce website design services India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            Everything a store needs to take money.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ECOM_SERVICES.map((s, i) => (
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

/* ---------- Features: three checklist columns ---------- */
function Features() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Feature set
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Shipped as standard, not as an upsell.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {ECOM_FEATURES.map((col, i) => (
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

/* ---------- Stack board ---------- */
function Stack() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Our commerce stack
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Payments, logistics and data wired on day one.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              We integrate what your operations already run on, instead of forcing a new tool stack.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ECOM_STACK.map((col, i) => (
            <Reveal key={col.group} delay={i * 70} className="h-full">
              <div className="h-full bg-card p-7 transition-colors duration-500 hover:bg-mist">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ember/15 text-lg text-ember">
                    {STACK_ICONS[i]}
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                    {col.group}
                  </p>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-semibold text-foreground"
                    >
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ember/80" />
                      {item}
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

/* ---------- Models ---------- */
function Models() {
  const [active, setActive] = useState(0);
  return (
    <section id="models" className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Engagement models
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Launch it, staff it, or grow it. Click a card.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {ECOM_MODELS.map((model, i) => {
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
            Get an eCommerce Quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Process: vertical timeline ---------- */
function Process() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            How we build
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Five phases, one preview URL you can watch.
          </h2>
        </Reveal>

        <ol className="relative mt-12 border-l border-line pl-6 sm:pl-10">
          {ECOM_PROCESS.map((phase, i) => (
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
                  <span className="rounded-full border border-line bg-mist px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-foreground">
                    {phase.duration}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.12em] text-ember">
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
    <section className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Template vs. built
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two ways to get a store. Only one you can scale.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] border border-line bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                {ECOM_COMPARE.typical.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {ECOM_COMPARE.typical.points.map((pt) => (
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
                {ECOM_COMPARE.acsius.title}
              </h3>
              <ul className="relative mt-6 space-y-4">
                {ECOM_COMPARE.acsius.points.map((pt) => (
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
    <section id="why" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            An eCommerce development company that stays after launch.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ECOM_WHY.map((item, i) => (
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
            <Link to="/ecommerce-seo-services" className="font-bold text-ember hover:underline">
              eCommerce SEO services
            </Link>
            ,{" "}
            <Link to="/hire-shopify-developers" className="font-bold text-ember hover:underline">
              Shopify developers
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
    <section id="faq" className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                eCommerce development, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send your catalogue size and target launch date. You get a platform recommendation,
                milestone plan and written cost inside two working days.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Request a Proposal
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {ECOM_FAQS.map((faq, index) => {
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

export function EcommerceDevPage() {
  return (
    <>
      <Hero />
      <Platforms />
      <Services />
      <Features />
      <Stack />
      <Models />
      <Process />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
