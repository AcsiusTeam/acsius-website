import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { SeoAuditDemo } from "@/components/site/SeoAuditDemo";
import { CONTACT } from "@/lib/site";
import {
  SC_COMPARE,
  SC_FAQS,
  SC_HERO,
  SC_LEDGER,
  SC_PILLARS,
  SC_SECTORS,
  SC_TIMELINE,
  SC_WHY,
} from "@/lib/seo-company";

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
              {SC_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {SC_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {SC_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">{SC_HERO.support}</p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Free SEO Audit
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to an SEO lead
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {SC_HERO.stats.map((stat) => (
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
              <SeoAuditDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Pillars: effort-weight segmented bar + detail panel ---------- */
function Pillars() {
  const [active, setActive] = useState(0);
  const p = SC_PILLARS[active] ?? SC_PILLARS[0]!;
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              SEO Company India
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Where your budget goes, in four pillars.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Click a segment to see the work, the deliverables and the number it moves.
            </p>
          </Reveal>
        </div>

        {/* segmented effort bar */}
        <Reveal delay={100}>
          <div className="mt-10 flex overflow-hidden rounded-full border border-line bg-card">
            {SC_PILLARS.map((item, i) => {
              const on = active === i;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  style={{ flexGrow: parseInt(item.weight, 10) }}
                  className={`cursor-pointer px-4 py-4 text-left transition-all duration-500 ${
                    on ? "bg-navy text-navy-foreground" : "text-muted-foreground hover:bg-mist"
                  } ${i > 0 ? "border-l border-line" : ""}`}
                >
                  <span
                    className={`block font-display text-xs font-extrabold sm:text-sm ${on ? "text-ember" : ""}`}
                  >
                    {item.label}
                  </span>
                  <span className="mt-0.5 hidden text-[10px] font-bold uppercase tracking-[0.12em] opacity-70 sm:block">
                    {item.weight}
                  </span>
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
              Pillar {String(active + 1).padStart(2, "0")} · {p.label}
            </p>
            <h3 className="relative mt-4 max-w-lg font-display text-2xl font-extrabold leading-snug lg:text-3xl">
              {p.title}
            </h3>
            <p className="relative mt-5 max-w-xl leading-relaxed text-navy-foreground/75">{p.body}</p>
            <div className="relative mt-9 flex items-end gap-4 border-t border-white/10 pt-7">
              <span className="font-display text-5xl font-extrabold text-ember">{p.metric}</span>
              <span className="pb-2 text-xs font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                {p.metricLabel}
              </span>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
}

/* ---------- Retainer ledger (dark table rows) ---------- */
function Ledger() {
  return (
    <section className="bg-navy py-24 text-navy-foreground lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            Best SEO Company India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            The retainer ledger. Nothing hidden.
          </h2>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-white/12">
          {SC_LEDGER.map((row, i) => (
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
                <span className="text-sm leading-relaxed text-navy-foreground/70 sm:border-l sm:border-white/10 sm:pl-6">
                  {row.output}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Timeline: rising step chart ---------- */
function Timeline() {
  return (
    <section className="bg-mist pt-24 pb-14 lg:pt-32 lg:pb-20">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            SEO India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            What the first six months look like.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {SC_TIMELINE.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col rounded-[26px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <div className="flex items-end justify-between">
                  <span className="text-[11px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                    {s.month}
                  </span>
                  <span className="font-display text-sm font-extrabold text-ember">{s.level}%</span>
                </div>
                <div className="mt-3 h-20 flex items-end rounded-2xl bg-mist p-2">
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
            Bars show typical programme momentum, not a guaranteed ranking curve.
          </p>
          <div className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
            <p>
              Early weeks remove the blockers that cap everything after — index bloat, speed, schema and redirect hygiene. Once the foundation is clean, optimisation and editorial velocity compound, and authority work begins to move commercial terms.
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ember" />
                <span>Monthly outcome reports track clicks, leads and revenue by page.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ember" />
                <span>Quarterly strategy reviews re-prioritise the roadmap and budget.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ember" />
                <span>Every recommendation is scored by effort against expected impact.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ember" />
                <span>You see the full plan before committing to a retainer.</span>
              </li>
            </ul>
          </div>
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
            Sectors
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Sectors we rank every quarter.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SC_SECTORS.map((s, i) => (
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

/* ---------- Compare: row-by-row table ---------- */
function Compare() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            SEO Agency India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two kinds of SEO agency. Only one you can audit.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
            <div className="grid grid-cols-2 gap-px bg-line">
              <div className="bg-mist px-6 py-4">
                <p className="font-display text-sm font-extrabold text-muted-foreground">
                  {SC_COMPARE.typical.title}
                </p>
              </div>
              <div className="bg-navy px-6 py-4">
                <p className="font-display text-sm font-extrabold text-ember">
                  {SC_COMPARE.acsius.title}
                </p>
              </div>
            </div>
            {SC_COMPARE.typical.points.map((p, i) => (
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
                    {SC_COMPARE.acsius.points[i]}
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

/* ---------- Why: inline strip ---------- */
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
            An SEO partner your CFO can question.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SC_WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="h-full">
              <div className="group flex h-full items-start gap-5 rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <p className="font-display text-3xl font-extrabold text-ember">{item.metric}</p>
                <div>
                  <h3 className="font-display text-sm font-extrabold text-foreground">
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
                SEO questions, answered plainly.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send your domain and the queries you want to win. Within two working days you get a
                scored audit summary, a roadmap outline and a written investment range.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Get a free SEO audit
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {SC_FAQS.map((faq, index) => {
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

export function SeoCompanyPage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Ledger />
      <Timeline />
      <Sectors />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
