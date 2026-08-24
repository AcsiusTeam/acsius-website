import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { EcomSeoDemo } from "@/components/site/EcomSeoDemo";
import { CONTACT } from "@/lib/site";
import {
  ES_AUDIT,
  ES_COMPARE,
  ES_FAQS,
  ES_FUNNEL,
  ES_HERO,
  ES_INTRO,
  ES_PILLARS,
  ES_PLATFORMS,
  ES_SECTORS,
  ES_WHY,
} from "@/lib/ecommerce-seo";

const SECTOR_ICONS = ["✦", "◈", "❋", "⌂", "▤", "◉", "⚙", "➤"];

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
              {ES_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {ES_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {ES_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">{ES_HERO.support}</p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Free Store SEO Audit
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
              {ES_HERO.stats.map((stat) => (
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
              <EcomSeoDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Intro + funnel panel ---------- */
function Intro() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            E-commerce SEO Services
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Fix the catalogue first. Rankings follow the architecture.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
            {ES_INTRO.map((para) => (
              <p key={para.slice(0, 28)}>{para}</p>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Store work usually sits inside a wider programme. See our{" "}
            <Link to="/seo-services-india" className="font-bold text-ember hover:underline">
              SEO services in India
            </Link>{" "}
            for the full scope, how we operate as an{" "}
            <Link to="/seo-company-india" className="font-bold text-ember hover:underline">
              SEO company in India
            </Link>
            , and{" "}
            <Link to="/local-seo-services" className="font-bold text-ember hover:underline">
              local SEO services
            </Link>{" "}
            when your store also has physical outlets. Delhi NCR brands can review our{" "}
            <Link to="/seo-company-in-delhi" className="font-bold text-ember hover:underline">
              eCommerce SEO in Delhi
            </Link>{" "}
            approach, and agencies can resell this delivery through{" "}
            <Link to="/seo-outsourcing-services" className="font-bold text-ember hover:underline">
              SEO outsourcing services
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[28px] border border-line bg-card p-8 shadow-soft">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
              Where organic revenue leaks
            </p>
            <div className="mt-6 space-y-4">
              {ES_FUNNEL.map((row, i) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between text-xs font-bold text-foreground">
                    <span>{row.label}</span>
                    <span className="text-muted-foreground">{row.value}%</span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-mist">
                    <div
                      className={`h-full rounded-full ${i === ES_FUNNEL.length - 1 ? "bg-ember" : "bg-ember/60"}`}
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                    {row.note}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta mt-7 inline-flex px-6 py-3"
            >
              Ask where your store leaks
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Pillars ---------- */
function Pillars() {
  const [active, setActive] = useState(0);
  const p = ES_PILLARS[active] ?? ES_PILLARS[0]!;
  return (
    <section id="services" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Best eCommerce SEO Company India
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Where the budget goes, in four pillars.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Click a segment to see the work, the deliverables and the number it moves.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-10 flex overflow-hidden rounded-full border border-line bg-card">
            {ES_PILLARS.map((item, i) => {
              const on = active === i;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  style={{ flexGrow: parseInt(item.weight, 10) }}
                  className={`cursor-pointer px-4 py-4 text-left transition-all duration-500 ${
                    on ? "bg-navy text-navy-foreground" : "text-foreground hover:bg-mist"
                  }`}
                >
                  <span className="block truncate font-display text-xs font-extrabold sm:text-sm">
                    {item.label}
                  </span>
                  <span
                    className={`mt-0.5 block truncate text-[10px] font-black uppercase tracking-[0.12em] ${
                      on ? "text-ember" : "text-muted-foreground"
                    }`}
                  >
                    {item.weight}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="flex h-full flex-col rounded-[30px] bg-navy p-8 text-navy-foreground shadow-lift lg:p-10">
              <h3 className="font-display text-xl font-extrabold leading-snug lg:text-2xl">
                {p.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-navy-foreground/75">{p.body}</p>
              <div className="mt-auto flex items-baseline gap-3 pt-8">
                <span className="font-display text-4xl font-extrabold text-ember">{p.metric}</span>
                <span className="pb-2 text-xs font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                  {p.metricLabel}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[30px] border border-line bg-card p-8 shadow-soft lg:p-9">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                What ships
              </p>
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
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-8 inline-flex px-6 py-3">
                Scope this pillar
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Platforms ---------- */
function Platforms() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Platforms
            </p>
            <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Built for the stack you already run.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              Platform decides what is possible and what is expensive. We know the constraints of
              each, so the roadmap is realistic before it is signed.
            </p>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full border border-line px-6 py-3 font-bold text-foreground transition-colors hover:border-ember hover:text-ember"
            >
              Ask about your platform
            </a>
          </Reveal>

          <div className="space-y-3">
            {ES_PLATFORMS.map((pf, i) => (
              <Reveal key={pf.name} delay={i * 70}>
                <div className="group flex items-start gap-5 rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-ember/50 hover:shadow-lift">
                  <span className="font-display text-sm font-extrabold text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-foreground">
                      {pf.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{pf.note}</p>
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

/* ---------- Audit ledger ---------- */
function Ledger() {
  return (
    <section className="bg-navy py-24 text-navy-foreground lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            eCommerce SEO agency
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            The delivery ledger. Nothing hidden.
          </h2>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-white/12">
          {ES_AUDIT.map((row, i) => (
            <Reveal key={row.item} delay={i * 50}>
              <div
                className={`group grid gap-2 px-6 py-5 transition-colors duration-500 hover:bg-white/[0.05] sm:grid-cols-[130px_1fr_1.15fr] sm:items-center sm:gap-6 lg:px-8 ${
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
            Ask what your retainer would include
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Sectors ---------- */
function Sectors() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Categories
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Catalogues we rank every quarter.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ES_SECTORS.map((s, i) => (
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
            eCommerce SEO Delhi
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two kinds of store SEO. Only one shows revenue.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
            <div className="grid grid-cols-2 gap-px bg-line">
              <div className="bg-mist px-6 py-4">
                <p className="font-display text-sm font-extrabold text-muted-foreground">
                  {ES_COMPARE.typical.title}
                </p>
              </div>
              <div className="bg-navy px-6 py-4">
                <p className="font-display text-sm font-extrabold text-ember">
                  {ES_COMPARE.acsius.title}
                </p>
              </div>
            </div>
            {ES_COMPARE.typical.points.map((p, i) => (
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
                    {ES_COMPARE.acsius.points[i]}
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

/* ---------- Why ---------- */
function Why() {
  return (
    <section id="why" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            A store SEO partner your CFO can question.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ES_WHY.map((item, i) => (
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
                Store SEO questions, answered plainly.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send your store URL and your top categories. Within two working days you get a
                catalogue health summary, a roadmap outline and a written investment range.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-6 py-3">
                  Request your audit
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
            {ES_FAQS.map((faq, index) => {
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

export function EcommerceSeoPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Pillars />
      <Platforms />
      <Ledger />
      <Sectors />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
