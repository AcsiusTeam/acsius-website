import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { SmoFeedDemo } from "@/components/site/SmoFeedDemo";
import { CONTACT } from "@/lib/site";
import {
  SMO_CALENDAR,
  SMO_COMPARE,
  SMO_FAQS,
  SMO_HERO,
  SMO_IMPACT,
  SMO_PLATFORMS,
  SMO_ROADMAP,
  SMO_SECTORS,
  SMO_TRACKS,
  SMO_WHY,
} from "@/lib/smo";

const SECTOR_ICONS = ["✚", "₹", "◈", "◉", "⌂", "✦", "➤", "⚙"];

/* ---------- Hero (consistent navy editorial) ---------- */
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
              {SMO_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {SMO_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {SMO_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {SMO_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get an SMO Proposal
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a strategist
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {SMO_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full max-w-[480px]">
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
              <SmoFeedDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Platform playbooks: horizontal chip tabs + split panel ---------- */
function Platforms() {
  const [active, setActive] = useState(0);
  const p = SMO_PLATFORMS[active] ?? SMO_PLATFORMS[0]!;
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              SMO Services India
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Six platform playbooks. Pick two to four.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tap a platform to see what ships every month and the number it moves.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {SMO_PLATFORMS.map((item, i) => {
              const on = active === i;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`cursor-pointer rounded-full border px-5 py-2.5 font-display text-sm font-extrabold transition-all duration-300 ${
                    on
                      ? "-translate-y-0.5 border-transparent bg-ember text-primary-foreground shadow-lift"
                      : "border-line bg-card text-muted-foreground hover:border-ember/50 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          key={p.key}
          className="mt-8 grid animate-[fadeUp_0.5s_ease-out_both] gap-4 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative overflow-hidden rounded-[30px] bg-navy p-8 text-navy-foreground shadow-lift lg:p-11">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember opacity-20 blur-2xl"
            />
            <p className="relative text-[10px] font-black uppercase tracking-[0.16em] text-ember">
              {p.label} playbook
            </p>
            <h3 className="relative mt-4 max-w-lg font-display text-2xl font-extrabold leading-snug lg:text-3xl">
              {p.title}
            </h3>
            <p className="relative mt-5 max-w-xl leading-relaxed text-navy-foreground/75">
              {p.body}
            </p>
            <div className="relative mt-9 flex items-end gap-4 border-t border-white/10 pt-7">
              <span className="font-display text-5xl font-extrabold text-ember">{p.metric}</span>
              <span className="pb-2 text-xs font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                {p.metricLabel}
              </span>
            </div>
          </div>

          <div className="rounded-[30px] border border-line bg-card p-8 shadow-soft lg:p-9">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
              Ships every month
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
              Add {p.label} to my plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tracks: alternating editorial rows ---------- */
function Tracks() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Social media optimization agency
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Six tracks inside every engagement.
          </h2>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-[30px] border border-line bg-card shadow-soft">
          {SMO_TRACKS.map((t, i) => (
            <Reveal key={t.no} delay={i * 60}>
              <div
                className={`group grid items-center gap-5 p-7 transition-colors duration-500 hover:bg-mist lg:grid-cols-[72px_1fr_1.1fr] lg:gap-8 lg:p-8 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="font-display text-3xl font-extrabold text-ember/40 transition-colors duration-500 group-hover:text-ember">
                  {t.no}
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-foreground">{t.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-line bg-background px-3 py-1 text-[11px] font-bold text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground lg:border-l lg:border-line lg:pl-8">
                  {t.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Calendar: interactive week strip ---------- */
function CalendarWeek() {
  const [active, setActive] = useState(0);
  const slot = SMO_CALENDAR[active] ?? SMO_CALENDAR[0]!;
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            The content engine
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            A typical publishing week, planned a month ahead.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {SMO_CALENDAR.map((c, i) => {
            const on = active === i;
            return (
              <Reveal key={c.day} delay={i * 50} className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={on}
                  className={`flex h-full w-full cursor-pointer flex-col rounded-3xl border p-5 text-left transition-all duration-400 ${
                    on
                      ? "-translate-y-1.5 border-transparent bg-navy text-navy-foreground shadow-lift"
                      : "border-line bg-card shadow-soft hover:border-ember/50"
                  }`}
                >
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.16em] ${
                      on ? "text-ember" : "text-muted-foreground"
                    }`}
                  >
                    {c.day}
                  </span>
                  <span
                    className={`mt-5 font-display text-base font-extrabold ${
                      on ? "text-navy-foreground" : "text-foreground"
                    }`}
                  >
                    {c.type}
                  </span>
                  <span
                    aria-hidden
                    className={`mt-4 h-1.5 w-full rounded-full transition-all duration-500 ${
                      on ? "bg-ember" : "bg-line"
                    }`}
                  />
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div
            key={slot.day}
            className="mt-6 flex animate-[fadeUp_0.4s_ease-out_both] flex-wrap items-center justify-between gap-5 rounded-[26px] border border-line bg-mist p-7"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                {slot.platform} · {slot.day}
              </p>
              <p className="mt-2 font-display text-xl font-extrabold text-foreground">{slot.note}</p>
            </div>
            <a href="/contact" className="btn-cta px-6 py-3">
              Get my 30-day calendar
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Impact: dark counters band ---------- */
function Impact() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 45% at 92% 8%, oklch(0.71 0.17 52 / 0.2), transparent 70%), radial-gradient(45% 45% at 6% 92%, oklch(0.62 0.11 250 / 0.3), transparent 70%)",
        }}
      />
      <div className="container-x relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {SMO_IMPACT.map((item, i) => (
          <Reveal key={item.label} delay={i * 70}>
            <div className="border-l border-white/12 pl-6">
              <p className="font-display text-4xl font-extrabold text-ember lg:text-5xl">
                <Counter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-3 font-display text-base font-extrabold">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Roadmap: staggered diagonal steps ---------- */
function Roadmap() {
  return (
    <section id="process" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            The first 90 days
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            From audit to a plan you can renew.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <span
            aria-hidden
            className="absolute left-4 top-0 bottom-0 w-px bg-line lg:left-1/2"
          />
          <ul className="space-y-6">
            {SMO_ROADMAP.map((step, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal as="li" key={step.phase} delay={i * 70}>
                  <div
                    className={`relative pl-12 lg:w-1/2 lg:pl-0 ${
                      right ? "lg:ml-auto lg:pl-14" : "lg:pr-14 lg:text-right"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute left-[9px] top-7 h-3.5 w-3.5 rounded-full border-2 border-mist bg-ember lg:top-8 ${
                        right ? "lg:-left-[7px]" : "lg:left-auto lg:-right-[7px]"
                      }`}
                    />
                    <div className="rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                        {step.phase}
                      </p>
                      <h3 className="mt-3 font-display text-lg font-extrabold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sectors (consistent icon cards) ---------- */
function Sectors() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            SMO Company India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Sectors we run social for.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SMO_SECTORS.map((s, i) => (
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

/* ---------- Compare (consistent) ---------- */
function Compare() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            SMO India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two kinds of social work. Only one you can measure.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] border border-line bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                {SMO_COMPARE.typical.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {SMO_COMPARE.typical.points.map((p) => (
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
                {SMO_COMPARE.acsius.title}
              </h3>
              <ul className="relative mt-6 space-y-4">
                {SMO_COMPARE.acsius.points.map((p) => (
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
            A social team that reports on outcomes.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {SMO_WHY.map((item, i) => (
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

/* ---------- FAQs (consistent) ---------- */
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
                SMO questions, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send your handles and your target buyer. Inside two working days you get a profile audit, a 30-day calendar outline and a written monthly cost.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Get a free social audit
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {SMO_FAQS.map((faq, index) => {
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

export function SmoPage() {
  return (
    <>
      <Hero />
      <Platforms />
      <Tracks />
      <CalendarWeek />
      <Impact />
      <Roadmap />
      <Sectors />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
