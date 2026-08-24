import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { SeoOutsourcingDemo } from "@/components/site/SeoOutsourcingDemo";
import { CONTACT } from "@/lib/site";
import {
  SO_COMPARE,
  SO_FAQS,
  SO_HERO,
  SO_INTRO,
  SO_MODELS,
  SO_PILLARS,
  SO_SECTORS,
  SO_TIMELINE,
  SO_TRUST,
  SO_WORKFLOW,
} from "@/lib/seo-outsourcing";

const SECTOR_ICONS = ["◈", "▤", "◉", "✦", "⌂", "⚙", "➤", "✚"];

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
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {SO_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {SO_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {SO_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">{SO_HERO.support}</p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Request Partner Pricing
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {SO_HERO.stats.map((stat) => (
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
              <SeoOutsourcingDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Intro + capacity panel ---------- */
function Intro() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            SEO Outsourcing Services India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Buy senior search capacity, not a headcount problem.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
            {SO_INTRO.map((para) => (
              <p key={para.slice(0, 28)}>{para}</p>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            The delivery playbook is the same one behind our{" "}
            <Link to="/seo-services-india" className="font-bold text-ember hover:underline">
              SEO services in India
            </Link>
            . For map-pack accounts you want to{" "}
            <Link to="/local-seo-services" className="font-bold text-ember hover:underline">
              outsource local SEO
            </Link>
            , the same team handles profiles and locality pages. You can also see how we run direct
            programmes as an{" "}
            <Link to="/seo-company-india" className="font-bold text-ember hover:underline">
              SEO company in India
            </Link>{" "}
            and as an{" "}
            <Link to="/seo-company-in-delhi" className="font-bold text-ember hover:underline">
              SEO company in Delhi
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[28px] border border-line bg-card p-8 shadow-soft">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
              What a partner month looks like
            </p>
            <div className="mt-6 space-y-4">
              {[
                { label: "Strategy & audit", value: 25, bar: "bg-ember" },
                { label: "Technical implementation", value: 25, bar: "bg-blue-400" },
                { label: "Editorial production", value: 30, bar: "bg-ember/70" },
                { label: "Authority & reporting", value: 20, bar: "bg-foreground/30" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between text-xs font-bold text-foreground">
                    <span>{row.label}</span>
                    <span className="text-muted-foreground">{row.value}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-mist">
                    <div className={`h-full rounded-full ${row.bar}`} style={{ width: `${row.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-4 rounded-2xl bg-mist p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-lg text-ember">
                ◈
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">Capacity is fixed, scope is flexible</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  You know the hours you have bought each month and can move them between accounts as
                  priorities change.
                </p>
              </div>
            </div>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-7 inline-flex px-6 py-3"
            >
              Ask about available capacity
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Pillars explorer ---------- */
function Pillars() {
  const [active, setActive] = useState(0);
  const p = SO_PILLARS[active] ?? SO_PILLARS[0]!;
  return (
    <section id="services" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              SEO Outsourcing Agency India
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Four workstreams you can hand over, together or one at a time.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Pick a workstream to see what we deliver and how fast it turns around.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-3">
              {SO_PILLARS.map((item, i) => {
                const on = active === i;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`flex w-full cursor-pointer items-center justify-between gap-4 rounded-[22px] border px-6 py-5 text-left transition-all duration-400 ${
                      on
                        ? "border-ember/50 bg-navy text-navy-foreground shadow-lift"
                        : "border-line bg-card text-foreground hover:border-ember/40"
                    }`}
                  >
                    <span>
                      <span className="font-display text-base font-extrabold">{item.label}</span>
                      <span
                        className={`mt-1 block text-[11px] font-black uppercase tracking-[0.14em] ${
                          on ? "text-ember" : "text-muted-foreground"
                        }`}
                      >
                        {item.weight}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-black transition-colors ${
                        on ? "bg-ember text-navy" : "bg-mist text-muted-foreground"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col rounded-[30px] border border-line bg-card p-8 shadow-soft lg:p-9">
              <h3 className="font-display text-xl font-extrabold leading-snug text-foreground lg:text-2xl">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{p.body}</p>
              <div className="mt-6 flex items-baseline gap-3 rounded-2xl bg-navy px-5 py-4 text-navy-foreground">
                <span className="font-display text-3xl font-extrabold text-ember">{p.metric}</span>
                <span className="text-xs font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                  {p.metricLabel}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.ships.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    <span
                      aria-hidden
                      className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[10px] font-black text-primary-foreground"
                    >
                      ✓
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-8 inline-flex self-start px-6 py-3">
                Scope this workstream
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Engagement models ---------- */
function Models() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Engagement models
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Three ways to buy delivery.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {SO_MODELS.map((m, i) => {
            const on = active === i;
            return (
              <Reveal key={m.name} delay={i * 80} className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`flex h-full w-full cursor-pointer flex-col rounded-[26px] border p-8 text-left transition-all duration-500 ${
                    on
                      ? "-translate-y-1.5 border-ember/55 bg-navy text-navy-foreground shadow-lift"
                      : "border-line bg-card shadow-soft hover:-translate-y-1 hover:border-ember/40"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-black uppercase tracking-[0.16em] ${
                        on ? "text-ember" : "text-muted-foreground"
                      }`}
                    >
                      {m.unit}
                    </span>
                    <span
                      aria-hidden
                      className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-black ${
                        on ? "bg-ember text-navy" : "border border-line text-muted-foreground"
                      }`}
                    >
                      {on ? "✓" : ""}
                    </span>
                  </span>
                  <span
                    className={`mt-5 font-display text-xl font-extrabold ${
                      on ? "" : "text-foreground"
                    }`}
                  >
                    {m.name}
                  </span>
                  <span
                    className={`mt-2 text-sm ${on ? "text-navy-foreground/70" : "text-muted-foreground"}`}
                  >
                    Best for: {m.best}
                  </span>
                  <span className="mt-6 space-y-2.5">
                    {m.points.map((pt) => (
                      <span key={pt} className="flex items-start gap-2.5 text-sm">
                        <span
                          aria-hidden
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                            on ? "bg-ember" : "bg-ember/70"
                          }`}
                        />
                        <span className={on ? "text-navy-foreground/85" : "text-muted-foreground"}>
                          {pt}
                        </span>
                      </span>
                    ))}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/contact" className="btn-cta px-7 py-3.5">
              Get a partner rate card
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-7 py-3.5 font-bold text-foreground transition-colors hover:border-ember hover:text-ember"
            >
              Discuss a specific account
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Workflow ledger ---------- */
function Workflow() {
  return (
    <section className="bg-navy py-24 text-navy-foreground lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            SEO Outsourcing India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            How the partnership runs, week by week.
          </h2>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-white/12">
          {SO_WORKFLOW.map((row, i) => (
            <Reveal key={row.item} delay={i * 50}>
              <div
                className={`group grid gap-2 px-6 py-5 transition-colors duration-500 hover:bg-white/[0.05] sm:grid-cols-[120px_1fr_1.15fr] sm:items-center sm:gap-6 lg:px-8 ${
                  i > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <span className="text-[11px] font-black uppercase tracking-[0.14em] text-ember">
                  {row.when}
                </span>
                <span className="font-display text-base font-extrabold">{row.item}</span>
                <span className="text-sm leading-relaxed text-navy-foreground/70">{row.output}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta mt-10 inline-flex px-7 py-3.5"
          >
            Ask how onboarding would work
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Ramp timeline ---------- */
function Timeline() {
  return (
    <section className="pt-24 pb-14 lg:pt-32 lg:pb-20">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Ramp-up
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            From signed NDA to full delivery cadence.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {SO_TIMELINE.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col rounded-[26px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <div className="flex items-end justify-between">
                  <span className="text-[11px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                    {s.month}
                  </span>
                  <span className="font-display text-sm font-extrabold text-ember">{s.level}%</span>
                </div>
                <div className="mt-3 flex h-20 items-end rounded-2xl bg-mist p-2">
                  <div
                    className="w-full rounded-xl bg-ember/85 transition-all duration-700"
                    style={{ height: `${s.level}%` }}
                  />
                </div>
                <h3 className="mt-5 font-display text-base font-extrabold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Bars show typical delivery ramp-up, not a guaranteed ranking curve.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Who we deliver for ---------- */
function Sectors() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Who we deliver for
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Partners who resell our search delivery.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SO_SECTORS.map((s, i) => (
            <Reveal key={s.name} delay={i * 60} className="h-full">
              <div className="group flex h-full flex-col rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mist text-lg text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-primary-foreground">
                  {SECTOR_ICONS[i]}
                </span>
                <h3 className="mt-5 font-display text-base font-extrabold text-foreground">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Compare ---------- */
function Compare() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            SEO Outsourcing Company India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Cheap capacity versus capacity you can resell.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
            <div className="grid grid-cols-2 gap-px bg-line">
              <div className="bg-mist px-6 py-4">
                <p className="font-display text-sm font-extrabold text-muted-foreground">
                  {SO_COMPARE.typical.title}
                </p>
              </div>
              <div className="bg-navy px-6 py-4">
                <p className="font-display text-sm font-extrabold text-ember">
                  {SO_COMPARE.acsius.title}
                </p>
              </div>
            </div>
            {SO_COMPARE.typical.points.map((p, i) => (
              <div key={p} className="grid grid-cols-2 gap-px bg-line">
                <div className="flex items-start gap-3 bg-card px-6 py-5">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line text-[11px] font-black text-muted-foreground"
                  >
                    ✕
                  </span>
                  <span className="text-sm text-muted-foreground">{p}</span>
                </div>
                <div className="flex items-start gap-3 bg-mist px-6 py-5">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-black text-primary-foreground"
                  >
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {SO_COMPARE.acsius.points[i]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Trust ---------- */
function Trust() {
  return (
    <section id="why" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why partners stay
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            A silent partner your clients never notice.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SO_TRUST.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="h-full">
              <div className="group flex h-full items-start gap-5 rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <p className="font-display text-lg font-extrabold text-ember">{item.metric}</p>
                <div>
                  <h3 className="font-display text-base font-extrabold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
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
                Outsourcing questions, answered plainly.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send one client domain and the workstream you want covered. Within two working days
                you get a sample white-label audit summary and a partner rate card.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-6 py-3">
                  Request a sample audit
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-6 py-3 font-bold text-foreground transition-colors hover:border-ember hover:text-ember"
                >
                  WhatsApp us
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3">
            {SO_FAQS.map((faq, index) => {
              const isOpen = open === index;
              return (
                <Reveal key={faq.q} delay={index * 60}>
                  <div
                    className={`group relative overflow-hidden rounded-[24px] border bg-card p-6 shadow-soft transition-all duration-500 ${
                      isOpen ? "border-ember/45" : "border-line hover:border-ember/30"
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

export function SeoOutsourcingPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Pillars />
      <Models />
      <Workflow />
      <Timeline />
      <Sectors />
      <Compare />
      <Trust />
      <Faqs />
    </>
  );
}
