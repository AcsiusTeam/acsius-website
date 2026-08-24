import { useEffect, useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { CONTACT } from "@/lib/site";
import {
  CW_COMPARE,
  CW_DELIVERABLES,
  CW_FAQS,
  CW_FORMATS,
  CW_HERO,
  CW_INDUSTRIES,
  CW_PROCESS,
  CW_STANDARDS,
  CW_TONES,
  CW_WHY,
} from "@/lib/content-writing";

const DRAFT_LINES = [
  "Headline: Cut onboarding from 9 days to 2",
  "Hook: Your team already knows the problem.",
  "Proof: 3 client numbers, one table.",
  "CTA: Book a 30-minute scope call.",
];

function DraftDemo() {
  const [typed, setTyped] = useState("");
  const [line, setLine] = useState(0);

  useEffect(() => {
    const target = DRAFT_LINES[line % DRAFT_LINES.length] ?? "";
    if (typed.length < target.length) {
      const t = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 28);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setTyped("");
      setLine((l) => l + 1);
    }, 1400);
    return () => clearTimeout(t);
  }, [typed, line]);

  const done = DRAFT_LINES.slice(0, line % DRAFT_LINES.length);

  return (
    <div className="rounded-[26px] border border-line bg-card p-6 shadow-lift">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Draft · v2</p>
        <span className="rounded-full bg-mist px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
          Editor assigned
        </span>
      </div>
      <ul className="mt-5 grid gap-3 text-sm">
        {done.map((l) => (
          <li key={l} className="flex items-start gap-2 text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
            <span className="line-clamp-2">{l}</span>
          </li>
        ))}
        <li className="flex items-start gap-2 font-semibold text-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>
            {typed}
            <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-ember align-middle" />
          </span>
        </li>
      </ul>
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5 text-center">
        {[
          { k: "Words", v: "1,240" },
          { k: "Reading", v: "Gr. 8" },
          { k: "Sources", v: "6" },
        ].map((m) => (
          <div key={m.k} className="rounded-2xl bg-mist px-2 py-3">
            <p className="font-display text-lg font-extrabold text-primary">{m.v}</p>
            <p className="text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground">
              {m.k}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
              {CW_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {CW_HERO.h1.map((l, i) => (
                <span key={l} className="block">
                  {i === 0 ? <span className="text-ember">{l}</span> : l}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {CW_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {CW_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Content Sample
              </a>
              <a
                href={CONTACT.whatsapp ?? "#contact"}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to an Editor
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {CW_HERO.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-extrabold text-ember">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy-foreground/60">
                    {s.label}
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
              <DraftDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Formats() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              What we write
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              Six formats. One voice across all of them.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Pick a format or combine them. Every piece runs through the same brief, draft and edit
              cycle.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CW_FORMATS.map((f, i) => (
            <Reveal key={f.name} delay={i * 60}>
              <article className="group relative h-full overflow-hidden rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span
                  aria-hidden
                  className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-ember opacity-[0.08] transition-transform duration-700 group-hover:scale-150"
                />
                <span className="relative inline-flex rounded-full bg-mist px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                  {f.metric}
                </span>
                <h3 className="relative mt-5 font-display text-xl font-extrabold text-foreground">
                  {f.name}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tones() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-mist/70 py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Tone of voice
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
            Pick a register. Read a real sample.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex flex-col gap-2">
            {CW_TONES.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-pressed={active === i}
                className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-400 ${
                  active === i
                    ? "border-ember bg-card shadow-soft"
                    : "border-transparent hover:border-line hover:bg-card/60"
                }`}
              >
                <span>
                  <span
                    className={`block font-display text-base font-extrabold ${active === i ? "text-primary" : "text-foreground"}`}
                  >
                    {t.name}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                    {t.use}
                  </span>
                </span>
                <span className={active === i ? "text-ember" : "text-muted-foreground/50"}>→</span>
              </button>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[32px] border border-transparent bg-navy p-8 text-navy-foreground shadow-lift lg:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(45% 45% at 88% 10%, oklch(0.71 0.17 52 / 0.22), transparent 70%), radial-gradient(50% 50% at 6% 90%, oklch(0.62 0.11 250 / 0.3), transparent 70%)",
                }}
              />
              <p className="relative text-[10px] font-black uppercase tracking-[0.18em] text-ember">
                {CW_TONES[active]?.name} sample
              </p>
              <p
                key={active}
                className="relative mt-6 animate-[fadeUp_0.5s_ease-out_both] font-display text-2xl font-extrabold leading-snug sm:text-3xl"
              >
                “{CW_TONES[active]?.sample}”
              </p>
              <p className="relative mt-8 flex items-center gap-2 text-xs font-bold text-ember">
                <span className="h-px w-6 bg-ember" />
                Written for: {CW_TONES[active]?.use}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32"
    >
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
              How it runs
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.2rem]">
              From brief to published, on named dates.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-14 border-t border-white/12">
          {CW_PROCESS.map((p, i) => (
            <li key={p.step}>
              <Reveal delay={i * 60}>
                <div className="group grid gap-4 border-b border-white/12 py-8 md:grid-cols-[5rem_1fr_1.1fr_auto] md:items-start">
                  <span className="font-display text-3xl font-extrabold text-ember/40 transition-colors duration-400 group-hover:text-ember">
                    {p.step}
                  </span>
                  <h3 className="font-display text-xl font-extrabold transition-transform duration-400 group-hover:translate-x-1">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-foreground/70">{p.body}</p>
                  <div className="flex flex-col gap-2 md:items-end">
                    <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/70">
                      {p.duration}
                    </span>
                    <span className="text-xs font-bold text-ember">{p.ship}</span>
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

function Why() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Why ACSIUS
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              A writing team you can hold accountable.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {CW_DELIVERABLES.map((d) => (
                <div
                  key={d.k}
                  className="rounded-[22px] border border-line bg-card p-5 shadow-soft transition-colors duration-300 hover:border-primary/30"
                >
                  <p className="font-display text-lg font-extrabold text-primary">{d.k}</p>
                  <p className="mt-1 text-sm font-bold text-foreground">{d.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {CW_WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <article className="h-full rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <p className="font-display text-3xl font-extrabold text-ember">{w.metric}</p>
                <h3 className="mt-3 font-display text-lg font-extrabold text-foreground">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </article>
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
      <path d="M6 12h28v18H6z" />
      <path d="M14 34h12M20 30v4" />
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
      <path d="M4 24l32-12-6 18-10-4z" />
      <path d="M20 26v8l5-5" />
    </>,
    <>
      <path d="M6 34V16l8-4v22" />
      <path d="M14 34V12l10 6v16" />
      <path d="M24 34V22l10 4v8" />
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
            Sectors
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
            Writers matched to your industry.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CW_INDUSTRIES.map((s, i) => (
            <Reveal key={s.name} as="li" delay={i * 50}>
              <a
                href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-6 rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <SectorIcon index={i} />
                <div>
                  <h3 className="font-display text-lg font-extrabold text-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Talk to a writer →
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

function Compare() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <span className="h-px w-8 bg-ember" />
              {CW_COMPARE.title}
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Typical service vs ACSIUS.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
            <div className="grid grid-cols-[1fr_1fr] items-center gap-4 border-b border-line bg-mist px-5 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground md:grid-cols-[0.7fr_1fr_1fr] md:px-8">
              <span className="hidden md:block">Dimension</span>
              <span>Typical service</span>
              <span className="text-ember">ACSIUS</span>
            </div>
            {CW_COMPARE.rows.map((row) => (
              <div
                key={row.label}
                className="group grid grid-cols-[1fr_1fr] gap-4 border-b border-line px-5 py-5 transition-colors duration-300 last:border-0 hover:bg-mist/60 md:grid-cols-[0.7fr_1fr_1fr] md:px-8"
              >
                <p className="col-span-2 font-display text-xs font-black uppercase tracking-[0.14em] text-foreground md:col-span-1 md:text-sm md:normal-case md:tracking-normal">
                  {row.label}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground line-through decoration-muted-foreground/30">
                  {row.typical}
                </p>
                <p className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-foreground">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ember text-[9px] font-black text-primary-foreground"
                  >
                    ✓
                  </span>
                  {row.acsius}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Standards() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 10% 10%, oklch(0.62 0.11 250 / 0.3), transparent 70%), radial-gradient(45% 45% at 90% 90%, oklch(0.71 0.17 52 / 0.22), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Editorial standards
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.2rem]">
              What you get on every piece.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-base leading-relaxed text-navy-foreground/75">
              No exceptions, no surprise upgrades. These four checks run before anything reaches your inbox.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CW_STANDARDS.map((s, i) => (
            <Reveal key={s.k} delay={i * 60}>
              <li className="group h-full rounded-[26px] border border-white/12 bg-white/8 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40 hover:bg-white/12">
                <span className="font-display text-4xl font-extrabold text-ember/40 transition-colors duration-400 group-hover:text-ember">
                  {s.k}
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
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
                Content writing questions, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Still deciding what to commission? Send us one page or topic and we'll recommend the right format and cadence.
              </p>
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Talk to an Editor
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {CW_FAQS.map((faq, index) => {
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

export function ContentWritingPage() {
  return (
    <>
      <Hero />
      <Formats />
      <Tones />
      <Process />
      <Why />
      <Compare />
      <Industries />
      <Standards />
      <Faqs />
    </>
  );
}
