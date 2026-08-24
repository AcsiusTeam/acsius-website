import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { AppPhoneDemo } from "@/components/site/AppPhoneDemo";
import { CONTACT } from "@/lib/site";
import {
  MAD_ANSWERS,
  MAD_APP_TYPES,
  MAD_ENGAGE,
  MAD_FAQS,
  MAD_HERO,
  MAD_NUMBERS,
  MAD_PHASES,
  MAD_PLATFORMS,
  MAD_WHY,
} from "@/lib/mobile-app";

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
              {MAD_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {MAD_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {MAD_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {MAD_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get an App Estimate
              </a>
              <a
                href={CONTACT.whatsapp ?? "#contact"}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Book a Free Consultation
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {MAD_HERO.stats.map((stat) => (
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
              className="relative grid gap-4 transition-transform duration-300 ease-out sm:grid-cols-[auto_1fr] sm:items-center"
              style={{
                transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)`,
              }}
            >
              <AppPhoneDemo />
              <div className="space-y-3">
                {[
                  { k: "Release", v: "TestFlight build #24", note: "Shipped this sprint" },
                  { k: "Crash-free", v: "99.7% sessions", note: "Gate: 99% minimum" },
                  { k: "Store", v: "iOS + Android live", note: "Under your accounts" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="rounded-[20px] border border-white/12 bg-white/[0.06] p-4 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-ember/40"
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

/** Signature interaction: vertical platform switcher with a stack chip cloud. */
function Platforms() {
  const [active, setActive] = useState(MAD_PLATFORMS[0]!.key);
  const current = MAD_PLATFORMS.find((p) => p.key === active) ?? MAD_PLATFORMS[0]!;

  return (
    <section id="platforms" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Mobile App Development Services
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Pick the platform strategy before you pick a price.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Four ways we build. Choose one to see the stack, the trade-offs and what it buys you.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex flex-col gap-3">
            {MAD_PLATFORMS.map((p, i) => {
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
                          : "bg-mist text-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
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
              className="h-full animate-in fade-in duration-500 rounded-[32px] border border-line bg-card p-8 shadow-soft lg:p-10"
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
                      className="rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
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

const ANSWER_TAGS = ["Pricing", "Timeline", "Platform", "Ownership"];

function Answers() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <span className="h-px w-8 bg-ember" />
              Straight Answers
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.6rem]">
              Cost, timeline, ownership.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              No rate cards or hidden phases. Four decisions every product owner has to make,
              answered directly.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-8 inline-flex px-7 py-3.5">
              Get a written estimate
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {MAD_ANSWERS.map((item, i) => (
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
    <section id="pricing" className="py-24 lg:py-32">
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
          {MAD_ENGAGE.map((item, i) => (
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
                <p className="relative mt-1 font-display text-lg font-extrabold text-ember">
                  {item.price}
                </p>
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
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Six-phase build journey — fully visible grid with a connecting timeline thread. */
function Phases() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
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
              Idea to store listing in six phases.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/65">
              Every phase ships something you can open, click or install. No hidden gates.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          {/* connecting thread on mobile */}
          <div
            aria-hidden
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-ember/60 via-ember/30 to-transparent md:left-1/2 md:-translate-x-1/2 lg:hidden"
          />
          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MAD_PHASES.map((phase, i) => (
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
                    <h3 className="relative mt-6 font-display text-xl font-extrabold">{phase.title}</h3>
                    <p className="relative mt-2.5 text-sm leading-relaxed text-navy-foreground/75">
                      {phase.body}
                    </p>
                    <p className="relative mt-6 flex items-center gap-2 border-t border-white/15 pt-4 text-xs font-bold text-ember">
                      <span aria-hidden className="text-ember">◆</span>
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
                Milestone invoicing, weekly builds, and your repo from the first commit.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const APP_ICONS = [
  // Marketplace & on-demand
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" key="marketplace">
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 5.8a.7.7 0 0 0 .6 1.2h13.4" />
    <circle cx="9" cy="20" r="1" />
    <circle cx="17" cy="20" r="1" />
  </svg>,
  // Fintech & wallets
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" key="fintech">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <circle cx="7" cy="12" r="1" />
  </svg>,
  // Healthcare & telemedicine
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" key="health">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.33.83-4.37 2.15A5.5 5.5 0 0 0 7.5 3 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>,
  // Ecommerce & D2C
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" key="ecommerce">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>,
  // Learning & EdTech
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" key="edtech">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>,
  // Booking & travel
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" key="travel">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>,
  // Enterprise & field ops
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" key="enterprise">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>,
  // Social & community
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" key="social">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
];

/** Highlighted sector showcase — card grid with icons, glow and depth. */
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
              Apps We Build
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-navy-foreground lg:text-[3.4rem]">
              Sector-shaped apps, not a rebadged template.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/65">
              Eight categories we have shipped repeatedly. Each one gets its own architecture, not a cloned UI kit.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MAD_APP_TYPES.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.07] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-ember/50 hover:bg-white/[0.11] hover:shadow-[0_20px_60px_-20px_rgba(249,115,22,0.25)]">
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember opacity-[0.07] transition-transform duration-700 group-hover:scale-150"
                />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-ember/40 bg-ember/15 text-ember transition-colors duration-500 group-hover:bg-ember group-hover:text-primary-foreground">
                    {APP_ICONS[i]}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/70">
                    {item.tag}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-extrabold text-navy-foreground">
                  {item.name}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-navy-foreground/75">
                  {item.detail}
                </p>
                <div className="relative mt-6 flex items-center gap-2 text-xs font-bold text-ember">
                  <span className="h-px w-5 bg-ember transition-all duration-500 group-hover:w-8" />
                  Explore this category
                </div>
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
    <section id="numbers" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            What You Can Count On
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
            The commitments behind every app engagement.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MAD_NUMBERS.map((item, i) => (
            <Reveal key={item.v} delay={i * 60}>
              <div className="h-full rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <p className="font-display text-3xl font-extrabold text-ember">{item.k}</p>
                <p className="mt-2 font-display text-base font-bold text-foreground">{item.v}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY_ICONS = [
  // Store-ready
  <svg key="store" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M12 7v10" />
    <path d="M7 12h10" />
  </svg>,
  // Weekly builds
  <svg key="builds" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <path d="M12 18h.01" />
    <path d="M8 20.4A8 8 0 0 1 3 12a8 8 0 0 1 11.6-7.2" />
    <path d="M16 3.6A8 8 0 0 1 21 12a8 8 0 0 1-11.6 7.2" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  // Real-device QA
  <svg key="qa" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>,
  // Your repo
  <svg key="repo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <circle cx="12" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9" />
    <path d="M12 15V9" />
  </svg>,
  // Backend included
  <svg key="backend" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <rect x="2" y="3" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="13" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="7" x2="6.01" y2="7" />
    <line x1="6" y1="17" x2="6.01" y2="17" />
  </svg>,
  // Post launch
  <svg key="support" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
];

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
              A mobile app company you can audit.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-6 lg:gap-8">
              {[
                { v: "16+", l: "Years" },
                { v: "40+", l: "Team" },
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
          {MAD_WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="group flex h-full gap-4 overflow-hidden rounded-[24px] border border-line bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  {WHY_ICONS[i]}
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-foreground">{item.title}</h3>
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
                Send your idea and get a free scope call.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">No lock-in, no hidden phases, no demo theatre.</p>
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
                Mobile app development, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send us your idea, a competitor app or your existing codebase and we'll tell you what
                we would build, on which platform, and what it costs.
              </p>
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Talk to an App Lead
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {MAD_FAQS.map((faq, index) => {
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

export function MobileAppPage() {
  return (
    <>
      <Hero />
      <Platforms />
      <Answers />
      <Engage />
      <Phases />
      <AppTypes />
      <Numbers />
      <Why />
      <Faqs />
    </>
  );
}
