import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { ReactNativeDemo } from "@/components/site/ReactNativeDemo";
import { CONTACT } from "@/lib/site";
import {
  RN_BUILDS,
  RN_CAPABILITIES,
  RN_COMPARE,
  RN_FAQS,
  RN_HERO,
  RN_MODELS,
  RN_PROCESS,
  RN_STACK,
  RN_WHY,
} from "@/lib/react-native-dev";

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
              {RN_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {RN_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {RN_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {RN_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Hire React Native Developers
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
              {RN_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full max-w-[560px]">
            <div
              aria-hidden
              className="absolute -inset-12 -z-10 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(45% 45% at 20% 18%, oklch(0.71 0.17 52 / 0.34), transparent 70%), radial-gradient(42% 42% at 84% 84%, oklch(0.62 0.11 250 / 0.4), transparent 70%)",
              }}
            />
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)` }}
            >
              <ReactNativeDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Interactive capability explorer — vertical tabs + metric panel */
function Capabilities() {
  const [active, setActive] = useState(0);
  const cap = RN_CAPABILITIES[active] ?? RN_CAPABILITIES[0]!;
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              React Native app development services
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Five things clients hire our React Native team for.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tap one. Every engagement is scoped in writing before a branch is created.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="flex flex-col gap-2">
            {RN_CAPABILITIES.map((c, i) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-pressed={active === i}
                className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-400 ${
                  active === i
                    ? "border-ember bg-card shadow-soft"
                    : "border-line/70 bg-card/40 hover:border-primary/30 hover:bg-card"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`font-display text-xs font-black ${active === i ? "text-ember" : "text-muted-foreground"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-base font-extrabold ${active === i ? "text-primary" : "text-foreground"}`}
                  >
                    {c.tab}
                  </span>
                </span>
                <span aria-hidden className={active === i ? "text-ember" : "text-muted-foreground/50"}>
                  →
                </span>
              </button>
            ))}
          </div>

          <Reveal delay={100}>
            <div
              key={cap.key}
              className="relative flex h-full animate-[fadeUp_0.5s_ease-out_both] flex-col overflow-hidden rounded-[30px] border border-transparent bg-navy p-8 text-navy-foreground shadow-lift lg:p-11"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember opacity-20 blur-2xl"
              />
              <p className="relative font-display text-5xl font-extrabold text-ember lg:text-6xl">
                {cap.metric}
              </p>
              <p className="relative mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-navy-foreground/60">
                {cap.metricLabel}
              </p>
              <h3 className="relative mt-8 max-w-md font-display text-2xl font-extrabold leading-snug lg:text-3xl">
                {cap.headline}
              </h3>
              <p className="relative mt-4 max-w-lg leading-relaxed text-navy-foreground/75">
                {cap.body}
              </p>
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
      </div>
    </section>
  );
}

/** Simple line icons for the build-type cards. */
function BuildIcon({ index }: { index: number }) {
  const shapes = [
    <>
      <rect x="6" y="8" width="28" height="20" rx="3" />
      <path d="M6 16h28M14 34h12" />
    </>,
    <>
      <path d="M8 34V10h24v24" />
      <path d="M14 16h4M22 16h4M14 22h4M22 22h4M14 28h12" />
    </>,
    <>
      <path d="M6 14h28l-2 20H8z" />
      <path d="M14 14a6 6 0 0112 0" />
    </>,
    <>
      <circle cx="20" cy="20" r="13" />
      <path d="M20 12v16M16 16h6a3 3 0 010 6h-4a3 3 0 000 6h6" />
    </>,
    <>
      <path d="M14 12L6 20l8 8M26 12l8 8-8 8" />
      <path d="M22 10l-4 20" />
    </>,
    <>
      <circle cx="20" cy="15" r="5" />
      <path d="M8 33c0-6 5.5-10 12-10s12 4 12 10" />
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

/* Sector-style icon card grid — what we build */
function Builds() {
  return (
    <section className="bg-mist/70 py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            React Native development company
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            What we build in React Native.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RN_BUILDS.map((b, index) => (
            <Reveal key={b.name} as="li" delay={index * 60}>
              <a
                href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-6 rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <BuildIcon index={index} />
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{b.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.detail}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Talk to an engineer →
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


/* Stack chip cloud */
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
            No CV padding. If a tool is on this list, someone on the bench has shipped production
            code with it this year — on shipped iOS and Android apps.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="flex flex-wrap gap-2.5">
            {RN_STACK.map((tool, i) => (
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

/* Clickable engagement models */
function Models() {
  const [picked, setPicked] = useState(0);
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
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
            React Native developer hire · models
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            Pick how you want to hire.
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-fr gap-4 lg:grid-cols-3">
          {RN_MODELS.map((model, i) => {
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
            Hire dedicated React Native developers
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* Wavy journey — cards ride an animated curve */
function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-mist/70 py-24 lg:py-32">
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 w-full text-navy"
      >
        <path
          d="M0 0h1440v40c-180 60-360-40-540-20S240 120 0 60z"
          fill="currentColor"
        />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full rotate-180 text-background"
      >
        <path
          d="M0 0h1440v40c-180 60-360-40-540-20S240 120 0 60z"
          fill="currentColor"
        />
      </svg>

      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              From call to code
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Two weeks to judge us on a real build.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <svg
            aria-hidden
            viewBox="0 0 1000 260"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          >
            <path
              d="M20 90C170 -10 270 200 420 120S620 -20 760 80s110 160 220 90"
              fill="none"
              stroke="oklch(0.71 0.17 52 / 0.45)"
              strokeWidth="2.5"
              strokeDasharray="10 10"
            />
            <path
              d="M20 140C170 40 270 250 420 170S620 30 760 130s110 160 220 90"
              fill="none"
              stroke="oklch(0.62 0.11 250 / 0.25)"
              strokeWidth="2"
            />
          </svg>

          <div className="relative grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {RN_PROCESS.map((phase, i) => (
              <Reveal key={phase.step} className="h-full" delay={i * 70}>
                <div
                  className={`group flex h-full flex-col rounded-[28px] border border-line bg-card/95 p-6 shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40 hover:shadow-lift ${
                    i % 2 === 0 ? "lg:-mt-8" : "lg:mt-12"
                  }`}
                >

                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy font-display text-xs font-black text-navy-foreground transition-colors duration-400 group-hover:bg-ember group-hover:text-primary-foreground">
                    {phase.step}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-line pt-4 text-[10px] font-black uppercase tracking-[0.12em]">
                    <span className="text-muted-foreground">{phase.duration}</span>
                    <span className="text-ember">{phase.ship}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* Comparison matrix */
function Compare() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Hire dedicated React Native developers
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
              {RN_COMPARE.columns.map((col, i) => (
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
            {RN_COMPARE.rows.map((row) => (
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
                    <span className="md:hidden mr-2 text-[10px] font-black uppercase tracking-[0.12em] opacity-60">
                      {RN_COMPARE.columns[i]}:
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
          <a
            href={CONTACT.whatsapp ?? "/contact"}
            className="btn-cta mt-8 inline-flex px-7 py-3.5"
          >
            Chat with an engineering lead
          </a>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {RN_WHY.map((item, i) => (
            <Reveal key={item.title} className="h-full" delay={i * 70}>
              <div className="group h-full rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
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
                Hiring React Native developers, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Share your brief, Figma or repo. You get matched profiles, an engagement plan and a written
                cost inside two working days.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Request Developer Profiles
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {RN_FAQS.map((faq, index) => {
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

export function ReactNativeDevPage() {
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
