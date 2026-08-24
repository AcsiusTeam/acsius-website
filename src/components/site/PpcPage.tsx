import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { PpcAdsDemo } from "@/components/site/PpcAdsDemo";
import { CONTACT } from "@/lib/site";
import {
  PPC_ANSWERS,
  PPC_CHANNELS,
  PPC_FAQS,
  PPC_HERO,
  PPC_NUMBERS,
  PPC_PROCESS,
  PPC_WHY,
} from "@/lib/ppc";

function Hero() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 52% at 82% 10%, oklch(0.71 0.17 52 / 0.26), transparent 70%), radial-gradient(58% 58% at 6% 22%, oklch(0.62 0.11 250 / 0.36), transparent 70%), radial-gradient(70% 55% at 52% 120%, oklch(0.62 0.11 250 / 0.2), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {PPC_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {PPC_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {PPC_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {PPC_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Free PPC Audit
              </a>
              <a
                href={CONTACT.whatsapp ?? "#contact"}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a PPC Strategist
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {PPC_HERO.stats.map((stat) => (
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
                  "radial-gradient(45% 45% at 28% 18%, oklch(0.62 0.11 250 / 0.4), transparent 70%), radial-gradient(40% 40% at 80% 84%, oklch(0.71 0.17 52 / 0.34), transparent 70%)",
              }}
            />
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)` }}
            >
              <PpcAdsDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CHANNEL_ICONS = [
  // Search
  <svg key="search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>,
  // Shopping
  <svg key="shopping" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>,
  // Display
  <svg key="display" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <rect x="2" y="4" width="20" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>,
  // Social
  <svg key="social" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
  </svg>,
  // Remarketing
  <svg key="remarketing" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <path d="M21 3v6h-6" />
  </svg>,
  // Geo
  <svg key="geo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  // Video
  <svg key="video" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="m10 9.5 5 2.5-5 2.5Z" />
  </svg>,
];

/** Signature section: the seven paid channels. */
function Channels() {
  const [active, setActive] = useState(0);
  return (
    <section id="channels" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              PPC Services India
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              Seven paid channels, one accountable plan.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Hover or tap a channel to see how we run it. We only recommend the ones your margin can carry.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PPC_CHANNELS.map((item, i) => {
            const isActive = active === i;
            return (
              <Reveal key={item.name} delay={i * 60}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group relative h-full w-full cursor-pointer overflow-hidden rounded-[28px] border p-7 text-left transition-all duration-500 hover:-translate-y-2 ${
                    isActive
                      ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                      : "border-line bg-card text-foreground shadow-soft hover:border-primary/30 hover:shadow-lift"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember transition-transform duration-700 group-hover:scale-150 ${isActive ? "opacity-[0.14]" : "opacity-[0.07]"}`}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl border transition-colors duration-500 ${
                        isActive
                          ? "border-ember/50 bg-ember text-primary-foreground"
                          : "border-primary/20 bg-primary/10 text-primary"
                      }`}
                    >
                      {CHANNEL_ICONS[i]}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${
                        isActive
                          ? "border border-white/15 bg-white/10 text-navy-foreground/75"
                          : "bg-mist text-muted-foreground"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-extrabold">{item.name}</h3>
                  <p
                    className={`relative mt-2.5 text-sm leading-relaxed ${isActive ? "text-navy-foreground/75" : "text-muted-foreground"}`}
                  >
                    {item.detail}
                  </p>
                  <p className="relative mt-6 flex items-center gap-2 text-xs font-bold text-ember">
                    <span className="h-px w-5 bg-ember transition-all duration-500 group-hover:w-8" />
                    {item.metric}
                  </p>
                </button>
              </Reveal>
            );
          })}

          <Reveal delay={PPC_CHANNELS.length * 60}>
            <div className="flex h-full flex-col justify-between rounded-[28px] bg-primary p-7 text-primary-foreground shadow-lift">
              <div>
                <p className="font-display text-2xl font-extrabold leading-snug">
                  Not sure which channels deserve your budget?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                  Send us your account and website. You get a channel-by-channel recommendation with
                  budget splits in 48 hours.
                </p>
              </div>
              <a
                href="mailto:info@acsius.com?subject=Request%20from%20acsius.com"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get the plan
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Answers() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <span className="h-px w-8 bg-ember" />
              Straight Answers
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              Cost, timeline, ownership.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-8 inline-flex px-7 py-3.5">
              Get a written proposal
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PPC_ANSWERS.map((item, i) => (
            <Reveal key={item.q} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary opacity-[0.07] transition-transform duration-700 group-hover:scale-150"
                />
                <div className="relative flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-ember/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-ember">
                    {item.tag}
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

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 10% 8%, oklch(0.62 0.11 250 / 0.32), transparent 70%), radial-gradient(45% 45% at 92% 90%, oklch(0.71 0.17 52 / 0.24), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Pay Per Click Management
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.4rem]">
              From audit to scale in five moves.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/65">
              Each step ships something you can read — a report, a tracking sheet, a test log.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PPC_PROCESS.map((phase, i) => (
            <li key={phase.step} className="h-full">
              <Reveal className="h-full" delay={i * 70}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.07] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:bg-white/[0.11]">
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
                  <p className="relative mt-auto flex items-center gap-2 border-t border-white/15 pt-4 text-xs font-bold text-ember">
                    <span aria-hidden>◆</span>
                    {phase.deliverable}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}

          <li className="h-full">
            <Reveal className="h-full" delay={PPC_PROCESS.length * 70}>
              <div className="flex h-full flex-col justify-between rounded-[28px] border border-ember/40 bg-ember/10 p-7 backdrop-blur">
                <p className="font-display text-xl font-extrabold">
                  Want your wasted spend mapped first?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
                  We send the audit summary before you commit to anything — no obligation, no deck.
                </p>
                <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 w-fit px-6 py-3">
                  Request the audit
                </a>
              </div>
            </Reveal>
          </li>
        </ol>
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
            The commitments behind every PPC retainer.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PPC_NUMBERS.map((item, i) => (
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
  <svg key="cpl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <path d="M3 3v18h18" />
    <path d="m7 15 4-5 3 3 5-7" />
  </svg>,
  <svg key="track" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" />
  </svg>,
  <svg key="own" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>,
  <svg key="omni" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
  </svg>,
  <svg key="pages" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 13h6" />
  </svg>,
  <svg key="nolock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
    <path d="M9 12H5a3 3 0 0 1 0-6h4M15 12h4a3 3 0 0 0 0-6h-4" />
    <path d="M8 18h8" />
  </svg>,
];

function Why() {
  const [selected, setSelected] = useState(0);
  const CRED = [
    { v: "16+", l: "Years" },
    { v: "40+", l: "Team" },
    { v: "0%", l: "Spend markup" },
    { v: "30d", l: "Rolling term" },
  ];

  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                Why ACSIUS
              </p>
              <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
                A PPC India partner you can audit.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Tap a reason to see the proof point. Every claim below is backed by a process, a report, or a term in your contract.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {CRED.map((s) => (
                  <div key={s.l} className="rounded-[20px] border border-line bg-card p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                    <p className="font-display text-3xl font-extrabold text-ember">{s.v}</p>
                    <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-4 rounded-[24px] border border-line bg-card p-5 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Platform access</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Google Ads", "Meta Ads", "LinkedIn", "YouTube"].map((p) => (
                    <span key={p} className="rounded-full border border-line bg-mist px-3 py-1.5 text-xs font-semibold text-foreground">
                      {p}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Campaigns run inside your own accounts with partner access. You keep every pixel, audience and asset.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <a
                href="mailto:info@acsius.com?subject=Request%20from%20acsius.com"
                className="mt-4 flex items-center justify-between rounded-[24px] bg-navy p-5 text-navy-foreground shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-ember"
              >
                <div>
                  <p className="font-display text-lg font-extrabold">Free PPC audit</p>
                  <p className="mt-1 text-sm text-navy-foreground/75">Wasted-spend map before you commit.</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ember text-lg font-black text-primary-foreground">→</span>
              </a>
            </Reveal>
          </div>

          <div className="space-y-3">
            {PPC_WHY.map((item, i) => {
              const isOpen = selected === i;
              return (
                <Reveal key={item.title} delay={i * 60}>
                  <button
                    type="button"
                    onClick={() => setSelected(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className={`group relative w-full cursor-pointer overflow-hidden rounded-[26px] border p-6 text-left transition-all duration-500 hover:-translate-y-1 ${
                      isOpen
                        ? "border-primary/30 bg-card shadow-lift"
                        : "border-line bg-card shadow-soft hover:border-primary/30 hover:shadow-lift"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ember transition-transform duration-700 ${isOpen ? "opacity-[0.12] scale-150" : "opacity-[0.06] group-hover:scale-125"}`}
                    />
                    <div className="relative flex items-center gap-4">
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border transition-all duration-500 ${
                          isOpen
                            ? "border-ember/50 bg-ember text-primary-foreground shadow-[0_0_24px_rgba(249,115,22,0.35)]"
                            : "border-primary/20 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                        }`}
                      >
                        {WHY_ICONS[i]}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-extrabold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                      </div>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-black transition-all duration-300 ${
                          isOpen ? "rotate-45 bg-ember text-primary-foreground" : "bg-primary/10 text-primary"
                        }`}
                      >
                        +
                      </span>
                    </div>
                    <div
                      className={`relative grid overflow-hidden transition-all duration-400 ${
                        isOpen ? "grid-rows-[1fr] pt-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <div className="flex items-center gap-4 rounded-[20px] border border-ember/20 bg-ember/10 p-4">
                          <span className="font-display text-3xl font-extrabold text-ember">{item.metric}</span>
                          <p className="text-sm leading-relaxed text-muted-foreground">{item.proof}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
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
                PPC in India, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Share your ad account, website and target cost per lead. We will tell you what to fix
                first and what it should cost.
              </p>
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Talk to a PPC Lead
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {PPC_FAQS.map((faq, index) => {
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

export function PpcPage() {
  return (
    <>
      <Hero />
      <Channels />
      <Answers />
      <Process />
      <Numbers />
      <Why />
      <Faqs />
    </>
  );
}
