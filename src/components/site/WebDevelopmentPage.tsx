import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { WebDevelopmentDemo } from "@/components/site/WebDevelopmentDemo";
import { CONTACT } from "@/lib/site";
import {
  WEB_ANSWERS,
  WEB_ENGAGE,
  WEB_FAQS,
  WEB_HERO,
  WEB_PPC,
  WEB_PROCESS,
  WEB_TRACKS,
  WEB_WHY,
} from "@/lib/web-development";

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
              {WEB_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-[3.2rem]">
              {WEB_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {WEB_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {WEB_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Website Quote
              </a>
              <a
                href={CONTACT.whatsapp ?? "#contact"}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a Specialist
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {WEB_HERO.stats.map((stat) => (
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
              className="transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)`,
              }}
            >
              <WebDevelopmentDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Interactive track explorer — vertical tabs + metric panel */
function Tracks() {
  const [active, setActive] = useState(0);
  const track = WEB_TRACKS[active] ?? WEB_TRACKS[0]!;
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Website development services
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Five ways we build websites that work harder.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tap a track. Every build is scoped in writing before a line of code is written.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="flex flex-col gap-2">
            {WEB_TRACKS.map((t, i) => (
              <button
                key={t.key}
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
                    {t.tab}
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
              key={track.key}
              className="relative flex h-full animate-[fadeUp_0.5s_ease-out_both] flex-col overflow-hidden rounded-[30px] border border-transparent bg-navy p-8 text-navy-foreground shadow-lift lg:p-11"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember opacity-20 blur-2xl"
              />
              <p className="relative font-display text-5xl font-extrabold text-ember lg:text-6xl">
                {track.stat}
              </p>
              <p className="relative mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-navy-foreground/60">
                {track.statLabel}
              </p>
              <h3 className="relative mt-8 max-w-md font-display text-2xl font-extrabold leading-snug lg:text-3xl">
                {track.headline}
              </h3>
              <p className="relative mt-4 max-w-lg leading-relaxed text-navy-foreground/75">
                {track.body}
              </p>
              <div className="relative mt-auto flex flex-wrap gap-2 pt-8">
                {track.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-navy-foreground/80"
                  >
                    {tech}
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

/* Answer-first keyword cards */
function Answers() {
  return (
    <section className="bg-navy py-24 text-navy-foreground lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Straight answers
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
              What businesses ask before hiring a web development company in India.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WEB_ANSWERS.map((item, i) => (
            <Reveal key={item.q} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/30 hover:bg-white/[0.07]">
                <h3 className="font-display text-lg font-extrabold leading-snug">{item.q}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-foreground/70">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Engagement models */
function Engagement() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Engagement models
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Website development services, priced the way you work.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {WEB_ENGAGE.map((m, i) => (
            <Reveal key={m.key} delay={i * 100}>
              <div className="relative flex h-full flex-col rounded-[26px] border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ember/40">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">{m.tagline}</span>
                <h3 className="mt-3 font-display text-xl font-extrabold text-foreground">{m.label}</h3>
                <p className="mt-2 font-display text-3xl font-extrabold text-ember">{m.price}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                <div className="mt-6 space-y-2">
                  {m.best && (
                    <p className="text-xs font-bold text-foreground/80">
                      <span className="text-ember">Best for:</span> {m.best}
                    </p>
                  )}
                  {m.commitment && (
                    <p className="text-xs font-bold text-muted-foreground">Typical timeline: {m.commitment}</p>
                  )}
                </div>
                <a
                  href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy py-3 text-sm font-extrabold text-navy-foreground transition-colors hover:bg-ember hover:text-navy"
                >
                  Start this model
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6-phase process */
function Process() {
  return (
    <section className="bg-muted/30 py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            How we work
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            From first call to live site in six phases.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {WEB_PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 80}>
              <div className="group relative h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft">
                <span className="font-display text-4xl font-extrabold text-ember/20 transition-colors group-hover:text-ember/40">
                  {p.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-extrabold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-xs font-bold">
                  <span className="text-foreground/70">{p.duration}</span>
                  <span className="text-muted-foreground">{p.deliverable}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PPC / Google Ads section */
function PPC() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-ember/10 blur-[120px]"
      />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {WEB_PPC.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.5rem]">
              {WEB_PPC.headline}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-foreground/80">{WEB_PPC.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a PPC + Website Plan
              </a>
              <a
                href={CONTACT.whatsapp ?? "#contact"}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a Specialist
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {WEB_PPC.channels.map((c, i) => (
              <Reveal key={c.name} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/30 hover:bg-white/[0.07]">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold text-ember">{c.metric}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-foreground/60">{c.metricLabel}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-extrabold">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Why ACSIUS */
function Why() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            A website development company in India that ships, not just sells.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WEB_WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft">
                <span className="font-display text-4xl font-extrabold text-ember">{w.metric}</span>
                <h3 className="mt-3 font-display text-lg font-extrabold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                <p className="mt-4 text-xs font-bold text-ember/80">{w.proof}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ accordion */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-muted/30 py-24 lg:py-32">
      <div className="container-x max-w-4xl">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            FAQ
          </p>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Common questions about website development services in India.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {WEB_FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-300 hover:border-primary/30">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-extrabold text-foreground">{faq.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border transition-transform duration-300 ${isOpen ? "rotate-45 bg-ember text-navy" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
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

export function WebDevelopmentPage() {
  return (
    <>
      <Hero />
      <Tracks />
      <Answers />
      <Engagement />
      <Process />
      <PPC />
      <Why />
      <FAQ />
    </>
  );
}
