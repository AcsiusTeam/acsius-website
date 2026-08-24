import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { WindowsAppDemo } from "@/components/site/WindowsAppDemo";
import { CONTACT } from "@/lib/site";
import {
  WIN_ANSWERS,
  WIN_APP_TYPES,
  WIN_ENGAGE,
  WIN_FAQS,
  WIN_HERO,
  WIN_NUMBERS,
  WIN_PHASES,
  WIN_PPC,
  WIN_TRACKS,
  WIN_WHY,
} from "@/lib/windows-app";

function Hero() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 55% at 78% 8%, oklch(0.71 0.17 52 / 0.26), transparent 70%), radial-gradient(60% 60% at 8% 20%, oklch(0.62 0.11 250 / 0.36), transparent 70%), radial-gradient(70% 55% at 55% 118%, oklch(0.62 0.11 250 / 0.22), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {WIN_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {WIN_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {WIN_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {WIN_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Windows App Scope
              </a>
              <a
                href={CONTACT.whatsapp ?? "#contact"}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a Windows Lead
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {WIN_HERO.stats.map((stat) => (
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
                  "radial-gradient(45% 45% at 30% 20%, oklch(0.62 0.11 250 / 0.4), transparent 70%), radial-gradient(40% 40% at 78% 82%, oklch(0.71 0.17 52 / 0.34), transparent 70%)",
              }}
            />
            <div
              className="relative space-y-4 transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)` }}
            >
              <WindowsAppDemo />
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Build", v: "MSIX #142", note: "Signed this sprint" },
                  { k: "Crash-free", v: "99.8%", note: "Gate: 99% minimum" },
                  { k: "Store", v: "1st pass", note: "Your Partner Center" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="min-w-0 rounded-[20px] border border-white/12 bg-white/[0.06] p-4 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-ember/40"
                  >
                    <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/60">
                      {row.k}
                    </p>
                    <p className="mt-1.5 font-display text-base font-extrabold text-navy-foreground">
                      {row.v}
                    </p>
                    <p className="mt-0.5 text-[11px] text-navy-foreground/55">{row.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Signature interaction: Windows delivery-track switcher. */
function Tracks() {
  const [active, setActive] = useState(WIN_TRACKS[0]!.key);
  const current = WIN_TRACKS.find((p) => p.key === active) ?? WIN_TRACKS[0]!;

  return (
    <section id="tracks" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Windows App Development Services
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Four tracks inside every Windows engagement.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Choose one to see the .NET stack, the Windows APIs and what it buys you.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex flex-col gap-3">
            {WIN_TRACKS.map((p, i) => {
              const isActive = p.key === active;
              return (
                <Reveal key={p.key} delay={i * 70}>
                  <button
                    type="button"
                    onClick={() => setActive(p.key)}
                    aria-pressed={isActive}
                    className={`group flex w-full cursor-pointer items-center gap-4 rounded-[24px] border p-5 text-left transition-all duration-500 ${
                      isActive
                        ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                        : "border-line bg-card text-foreground shadow-soft hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
                    }`}
                  >
                    <span
                      className={`font-display text-sm font-black tabular-nums ${
                        isActive ? "text-ember" : "text-muted-foreground"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-lg font-extrabold">{p.tab}</span>
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-full text-xs font-black transition-all duration-300 ${
                        isActive
                          ? "bg-ember text-primary-foreground"
                          : "bg-mist text-foreground opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100"
                      }`}
                      aria-hidden
                    >
                      {isActive ? "✓" : "→"}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={140}>
            <div
              key={current.key}
              className="h-full animate-in rounded-[32px] border border-line bg-card p-8 shadow-soft duration-500 fade-in lg:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                <h3 className="max-w-md font-display text-2xl font-extrabold leading-snug text-foreground lg:text-3xl">
                  {current.headline}
                </h3>
                <div className="rounded-[20px] bg-mist px-5 py-4 text-right">
                  <p className="font-display text-2xl font-extrabold text-ember">{current.stat}</p>
                  <p className="mt-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                    {current.statLabel}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{current.body}</p>

              <ul className="mt-7 space-y-3">
                {current.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-line pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                  Stack we use
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {current.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-bold text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const ANSWER_TAGS = ["Framework", "Certification", "Ownership", "Takeover"];

function Answers() {
  return (
    <section id="answers" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <span className="h-px w-8 bg-ember" />
              Straight Answers
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.6rem]">
              Framework, Store, ownership.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Four decisions every desktop product owner has to make, answered without the sales
              layer.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-8 inline-flex px-7 py-3.5">
              Get a written scope
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {WIN_ANSWERS.map((item, i) => (
            <Reveal key={item.q} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary opacity-[0.07] transition-transform duration-700 group-hover:scale-150"
                />
                <div className="relative flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-ember/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-ember">
                    {ANSWER_TAGS[i]}
                  </span>
                  <span className="font-display text-sm font-black text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="relative mt-4 font-display text-xl font-extrabold text-foreground">
                  {item.q}
                </h3>
                <p className="relative mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Engage() {
  return (
    <section id="engage" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Ways To Engage
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
            Three ways to start, one written scope.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {WIN_ENGAGE.map((item, i) => (
            <Reveal key={item.key} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary opacity-[0.07] transition-transform duration-700 group-hover:scale-150"
                />
                <span className="relative inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item.tagline}
                </span>
                <h3 className="relative mt-3 font-display text-2xl font-extrabold text-foreground">
                  {item.label}
                </h3>
                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <dl className="relative mt-6 grid gap-3 border-t border-line pt-5 text-xs sm:grid-cols-2">
                  <div>
                    <dt className="font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Best for
                    </dt>
                    <dd className="mt-1 font-semibold text-foreground">{item.best}</dd>
                  </div>
                  <div>
                    <dt className="font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Timeline
                    </dt>
                    <dd className="mt-1 font-semibold text-foreground">{item.commitment}</dd>
                  </div>
                </dl>
                <a
                  href="/contact"
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  Get this scoped
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Phases() {
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
            "radial-gradient(55% 50% at 12% 8%, oklch(0.62 0.11 250 / 0.32), transparent 70%), radial-gradient(45% 45% at 92% 88%, oklch(0.71 0.17 52 / 0.24), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              How We Build
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.4rem]">
              Idea to signed installer in six phases.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/65">
              Every phase ships something you can open, click or install. No hidden gates.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-ember/60 via-ember/30 to-transparent md:left-1/2 md:-translate-x-1/2 lg:hidden"
          />
          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WIN_PHASES.map((phase, i) => (
              <li key={phase.step}>
                <Reveal delay={i * 70}>
                  <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.07] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:bg-white/[0.11]">
                    <span
                      aria-hidden
                      className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember opacity-[0.06] transition-transform duration-700 group-hover:scale-150"
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ember font-display text-sm font-black text-primary-foreground shadow-[0_0_24px_rgba(249,115,22,0.35)]">
                        {phase.step}
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/80">
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="relative mt-6 font-display text-xl font-extrabold">
                      {phase.title}
                    </h3>
                    <p className="relative mt-2.5 text-sm leading-relaxed text-navy-foreground/75">
                      {phase.body}
                    </p>
                    <p className="relative mt-6 flex items-center gap-2 border-t border-white/15 pt-4 text-xs font-bold text-ember">
                      <span aria-hidden className="text-ember">
                        ◆
                      </span>
                      {phase.deliverable}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mt-12">
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Start with a Free Consultation
              </a>
              <p className="text-sm text-navy-foreground/65">
                Milestone invoicing, weekly signed builds, and your repo from the first commit.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Google Ads / single landing page add-on. */
function PpcAddon() {
  return (
    <section id="ppc" className="py-24 lg:py-28">
      <div className="container-x">
        <div className="overflow-hidden rounded-[36px] border border-line bg-card shadow-soft">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 lg:p-12">
              <Reveal>
                <p className="eyebrow">
                  <span className="h-px w-8 bg-ember" />
                  {WIN_PPC.eyebrow}
                </p>
                <h2 className="mt-5 max-w-lg font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.6rem]">
                  {WIN_PPC.heading}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {WIN_PPC.body}
                </p>
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {WIN_PPC.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 70}>
                    <div className="h-full rounded-[22px] border border-line bg-mist p-5">
                      <p className="font-display text-base font-extrabold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden bg-navy p-8 text-navy-foreground lg:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(55% 55% at 85% 10%, oklch(0.71 0.17 52 / 0.24), transparent 70%), radial-gradient(60% 60% at 10% 95%, oklch(0.62 0.11 250 / 0.3), transparent 70%)",
                }}
              />
              <div className="relative">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-navy-foreground/60">
                  Typical 90-day movement
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {WIN_PPC.metrics.map((m) => (
                    <div
                      key={m.k}
                      className="rounded-[20px] border border-white/12 bg-white/[0.06] p-4 backdrop-blur"
                    >
                      <p className="font-display text-2xl font-extrabold text-ember">{m.v}</p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                        {m.k}
                      </p>
                    </div>
                  ))}
                </div>

                <ul className="mt-7 space-y-3 border-t border-white/12 pt-6 text-sm">
                  {[
                    "One page, no CMS, live in days",
                    "Google Ads + Microsoft Ads managed monthly",
                    "Download and demo events tracked end to end",
                  ].map((line) => (
                    <li key={line} className="flex gap-3 text-navy-foreground/80">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta px-6 py-3">
                    Get the one-page plan
                  </a>
                  <a
                    href="/ppc-services-company-india"
                    className="rounded-full border border-navy-foreground/25 px-6 py-3 text-sm font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
                  >
                    See PPC services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppTypes() {
  return (
    <section id="app-types" className="relative overflow-hidden bg-navy-deep py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 88% 12%, oklch(0.71 0.17 52 / 0.22), transparent 70%), radial-gradient(60% 55% at 8% 95%, oklch(0.62 0.11 250 / 0.28), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Windows Apps We Build
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-navy-foreground lg:text-[3.4rem]">
              Sector-shaped desktop software, not a rebadged template.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/65">
              Eight categories we have shipped repeatedly, each with its own architecture.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WIN_APP_TYPES.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.07] p-6 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-ember/50 hover:bg-white/[0.11]">
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember opacity-[0.07] transition-transform duration-700 group-hover:scale-150"
                />
                <div className="relative flex items-center justify-between">
                  <span className="font-display text-sm font-black text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-navy-foreground/70">
                    {item.tag}
                  </span>
                </div>
                <h3 className="relative mt-5 font-display text-lg font-extrabold text-navy-foreground">
                  {item.name}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-navy-foreground/70">
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

function Numbers() {
  return (
    <section className="bg-mist py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            How We Work
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.8rem]">
            Delivery commitments, in numbers.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WIN_NUMBERS.map((n, i) => (
            <Reveal key={n.v} delay={i * 60}>
              <div className="flex h-full items-start gap-4 rounded-[24px] border border-line bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span className="font-display text-2xl font-extrabold text-ember">{n.k}</span>
                <div>
                  <p className="font-display text-base font-extrabold text-foreground">{n.v}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{n.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Why ACSIUS
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              A Windows partner you can audit.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-6 lg:gap-8">
              {[
                { v: "16+", l: "Years" },
                { v: "70+", l: "Desktop apps" },
                { v: "30d", l: "Support" },
                { v: "<1%", l: "Crash gate" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="font-display text-2xl font-extrabold text-ember">{s.v}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WIN_WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="group flex h-full gap-4 overflow-hidden rounded-[24px] border border-line bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-primary/10 font-display text-sm font-black text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-[28px] border border-line bg-card p-6 shadow-soft lg:p-7">
            <div>
              <p className="font-display text-xl font-extrabold text-foreground">
                Send your idea and get a free Windows scope call.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                No lock-in, no hidden phases, no demo theatre.
              </p>
            </div>
            <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
              Book a call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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
              <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
                Windows app development, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send us your idea, a competitor app or your existing Visual Studio solution and we'll
                tell you what we would build and how long it takes.
              </p>
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Talk to a Windows Lead
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {WIN_FAQS.map((faq, index) => {
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
                      className="relative flex w-full items-center justify-between gap-5 text-left"
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

export function WindowsAppPage() {
  return (
    <>
      <Hero />
      <Tracks />
      <Answers />
      <Engage />
      <Phases />
      <PpcAddon />
      <AppTypes />
      <Numbers />
      <Why />
      <Faqs />
    </>
  );
}
