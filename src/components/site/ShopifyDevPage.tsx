import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { ShopifyStoreDemo } from "@/components/site/ShopifyStoreDemo";
import { CONTACT } from "@/lib/site";
import {
  SHOPIFY_BUILDS,
  SHOPIFY_COMPARE,
  SHOPIFY_FAQS,
  SHOPIFY_HERO,
  SHOPIFY_MODELS,
  SHOPIFY_PROCESS,
  SHOPIFY_SERVICES,
  SHOPIFY_STACK,
  SHOPIFY_WHY,
} from "@/lib/shopify-dev";

const STACK_ICONS = ["◈", "⇄", "◎", "◉"];

/* ---------- Hero: copy left, visual right (editorial, navy) ---------- */
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
              {SHOPIFY_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {SHOPIFY_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {SHOPIFY_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {SHOPIFY_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Hire Shopify Developers
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a Shopify expert
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {SHOPIFY_HERO.stats.map((stat) => (
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
              <ShopifyStoreDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Services: horizontal tab explorer ---------- */
function Services() {
  const [active, setActive] = useState(0);
  const svc = SHOPIFY_SERVICES[active] ?? SHOPIFY_SERVICES[0]!;
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Shopify website development services
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Six ways we move revenue on Shopify.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tap a track to see what ships, the stack behind it and the number it moves.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {SHOPIFY_SERVICES.map((s, i) => {
            const on = active === i;
            return (
              <button
                key={s.key}
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
                {s.title.replace(/^Custom Shopify /, "").replace(/ development$/, "")}
              </button>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div
            key={svc.key}
            className="relative mt-8 flex animate-[fadeUp_0.5s_ease-out_both] flex-col overflow-hidden rounded-[30px] border border-transparent bg-navy p-8 text-navy-foreground shadow-lift lg:p-11"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember opacity-20 blur-2xl"
            />
            <div className="relative flex flex-wrap items-end justify-between gap-4">
              <h3 className="max-w-xl font-display text-2xl font-extrabold leading-snug lg:text-3xl">
                {svc.title}
              </h3>
              <p className="text-right">
                <span className="block font-display text-4xl font-extrabold text-ember">
                  {svc.metric}
                </span>
                <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                  {svc.metricLabel}
                </span>
              </p>
            </div>
            <p className="relative mt-6 max-w-3xl leading-relaxed text-navy-foreground/75">
              {svc.body}
            </p>
            <div className="relative mt-auto flex flex-wrap gap-2 pt-8">
              {svc.chips.map((chip) => (
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


/* ---------- Builds: editorial numbered rows ---------- */
function Builds() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Shopify web development company
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            What we build on Shopify.
          </h2>
        </Reveal>

        <ul className="mt-12 border-t border-line">
          {SHOPIFY_BUILDS.map((b, i) => (
            <Reveal key={b.name} as="li" delay={Math.min(i * 60, 300)}>
              <a
                href="/contact"
                className="group grid items-center gap-4 border-b border-line py-7 transition-colors duration-500 hover:bg-mist/70 sm:grid-cols-[auto_1fr_1.2fr_auto] sm:gap-8 sm:px-4"
              >
                <span className="font-display text-sm font-black text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-extrabold text-foreground lg:text-xl">
                  {b.name}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{b.detail}</span>
                <span className="flex items-center gap-3">
                  <span className="rounded-full border border-line bg-card px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-foreground">
                    {b.tag}
                  </span>
                  <span
                    aria-hidden
                    className="text-ember transition-transform duration-500 group-hover:translate-x-1.5"
                  >
                    →
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

/* ---------- Stack: full-width heading + 4-column board ---------- */
function Stack() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 45% at 8% 10%, oklch(0.62 0.11 250 / 0.32), transparent 70%), radial-gradient(45% 45% at 94% 90%, oklch(0.71 0.17 52 / 0.2), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Our Shopify stack
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
              Custom code first. Apps only when they earn it.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-relaxed text-navy-foreground/70">
              We pick the layer that matches your scale — Liquid, Hydrogen, or private apps — only when native Shopify cannot do the job.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SHOPIFY_STACK.map((col, i) => (
            <Reveal key={col.group} delay={i * 70} className="h-full">
              <div className="group relative flex h-full flex-col rounded-[28px] border border-white/12 bg-white/[0.05] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40 hover:bg-white/[0.08]">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ember opacity-[0.12] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.22]"
                />
                <div className="relative flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ember/15 text-lg text-ember">
                    {STACK_ICONS[i]}
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                    {col.group}
                  </p>
                </div>
                <ul className="relative mt-5 space-y-2.5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-semibold text-navy-foreground/85"
                    >
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ember/80" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                  {col.items.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-bold text-navy-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Hiring models: clickable cards ---------- */
function Models() {
  const [active, setActive] = useState(0);
  return (
    <section id="models" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Hire dedicated Shopify developer
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Pick the engagement. Click a card to select it.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {SHOPIFY_MODELS.map((model, i) => {
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
          <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-10 inline-flex px-7 py-3.5">
            Hire a dedicated Shopify developer
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Process: horizontal scroll stepper ---------- */
function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 lg:py-32">
      {/* wavy backdrop */}
      <svg
        aria-hidden
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] w-full"
      >
        <path
          d="M0 250 C 180 130, 360 370, 540 250 S 900 130, 1080 250 S 1320 340, 1440 230"
          fill="none"
          stroke="oklch(0.71 0.17 52 / 0.35)"
          strokeWidth="2"
          strokeDasharray="10 10"
        />
        <path
          d="M0 300 C 200 190, 400 420, 620 300 S 980 190, 1180 300 S 1360 380, 1440 290"
          fill="none"
          stroke="oklch(0.62 0.11 250 / 0.22)"
          strokeWidth="2"
        />
        <path
          d="M0 420 C 240 320, 420 470, 720 380 S 1180 300, 1440 400 L1440 420 L0 420 Z"
          fill="oklch(0.71 0.17 52 / 0.06)"
        />
      </svg>

      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            From audit to launch
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Five steps, one preview URL you can watch.
          </h2>
        </Reveal>
      </div>

      <div className="container-x relative mt-12">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SHOPIFY_PROCESS.map((phase, i) => (
            <Reveal key={phase.step} as="li" delay={i * 70}>
              <div className="group flex h-full flex-col rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <span className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ember font-display text-sm font-black text-primary-foreground transition-colors duration-300 group-hover:bg-navy group-hover:text-navy-foreground">
                    {phase.step}
                  </span>
                  <span className="rounded-full border border-line bg-mist px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-foreground">
                    {phase.duration}
                  </span>
                </span>
                <h3 className="mt-6 font-display text-lg font-extrabold text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
                <p className="mt-auto pt-6 text-xs font-black uppercase tracking-[0.12em] text-ember">
                  Delivers: {phase.ship}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Compare: split panels ---------- */
function Compare() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Hire Shopify expert
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two ways to get a store. Only one you can maintain.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] border border-line bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                {SHOPIFY_COMPARE.typical.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {SHOPIFY_COMPARE.typical.points.map((p) => (
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
                {SHOPIFY_COMPARE.acsius.title}
              </h3>
              <ul className="relative mt-6 space-y-4">
                {SHOPIFY_COMPARE.acsius.points.map((p) => (
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

/* ---------- Why: metric rows ---------- */
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
            Hire professional Shopify developers, not a reseller queue.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {SHOPIFY_WHY.map((item, i) => (
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

/* ---------- FAQs (consistent with other service pages) ---------- */
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
                Hiring Shopify developers, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send your store URL or brief. You get matched profiles, an engagement plan and a written cost inside two working days.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Request Developer Profiles
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {SHOPIFY_FAQS.map((faq, index) => {
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

export function ShopifyDevPage() {
  return (
    <>
      <Hero />
      <Services />
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
