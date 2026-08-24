import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { OrmDemo } from "@/components/site/OrmDemo";
import { CONTACT } from "@/lib/site";
import {
  ORM_COMPARE,
  ORM_ENGAGE,
  ORM_FAQS,
  ORM_FLOW,
  ORM_HERO,
  ORM_IMPACT,
  ORM_PHASES,
  ORM_SECTORS,
  ORM_SERVICES,
  ORM_TRUST,
  ORM_VIEWS,
  ORM_WHY,
} from "@/lib/orm";

const PLATFORMS = [
  "Google Reviews",
  "Google Search",
  "Trustpilot",
  "Glassdoor",
  "AmbitionBox",
  "JustDial",
  "TripAdvisor",
  "MouthShut",
  "Indeed",
  "G2",
  "Clutch",
  "YouTube",
  "Reddit",
  "Quora",
  "X / Twitter",
  "News & PR",
];

/* ---------- Hero (brand-consistent navy) ---------- */
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
              {ORM_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {ORM_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {ORM_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-7 flex flex-wrap gap-2">
              {ORM_HERO.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold text-navy-foreground/80"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Free Reputation Audit
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to an ORM specialist
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {ORM_HERO.stats.map((stat) => (
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
              <OrmDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Platform ticker (ORM-specific) ---------- */
function PlatformTicker() {
  return (
    <section className="border-y border-line bg-card py-7">
      <div className="container-x mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
          Monitored around the clock
        </p>
        <p className="text-xs font-semibold text-muted-foreground">
          16 platforms · search, reviews, forums, video, news
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-mist px-5 py-2.5 text-sm font-bold text-foreground"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ember" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Before / after page one (signature ORM section) ---------- */
const BEFORE = [
  { t: "yourbrand.com — Official site", bad: false },
  { t: "complaints-forum.in / yourbrand — 41 angry threads", bad: true },
  { t: "“Is YourBrand a scam?” — Quora", bad: true },
  { t: "ratemybrand.co — 2.1★ (86 reviews)", bad: true },
  { t: "Glassdoor — 2.6★ employee reviews", bad: true },
  { t: "Facebook page (unclaimed, 2017)", bad: true },
];
const AFTER = [
  { t: "yourbrand.com — Official site + sitelinks", bad: false },
  { t: "Google Business — 4.6★ (1,204 reviews)", bad: false },
  { t: "Founder profile — Forbes India feature", bad: false },
  { t: "Knowledge panel — verified brand entity", bad: false },
  { t: "Newsroom — funding & CSR coverage", bad: false },
  { t: "complaints-forum.in — now position #14", bad: true },
];

function PageOne() {
  const [after, setAfter] = useState(true);
  const rows = after ? AFTER : BEFORE;
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 45% at 88% 12%, oklch(0.71 0.17 52 / 0.18), transparent 70%), radial-gradient(45% 45% at 8% 88%, oklch(0.62 0.11 250 / 0.26), transparent 70%)",
        }}
      />
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Page one, before and after
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
              The only scoreboard that matters is the first ten results.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-navy-foreground/70">
              Nobody scrolls to page two to give you a fair hearing. Flip the switch to see what a
              six-month ORM programme changes on a real brand-name search.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 inline-flex gap-1.5 rounded-full border border-white/15 bg-white/[0.06] p-1.5">
              {[
                { label: "Before", on: !after },
                { label: "After ORM", on: after },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setAfter(opt.label === "After ORM")}
                  aria-pressed={opt.on}
                  className={`cursor-pointer rounded-full px-6 py-2.5 font-display text-sm font-extrabold transition-all duration-300 ${
                    opt.on
                      ? "bg-ember text-primary-foreground"
                      : "text-navy-foreground/60 hover:text-navy-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.05] shadow-lift backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
              <span className="text-[11px] font-bold text-navy-foreground/50">
                google.com / search?q=yourbrand
              </span>
              <span className="rounded-full bg-ember px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-primary-foreground">
                {after ? "5 owned slots" : "1 owned slot"}
              </span>
            </div>
            <ol key={after ? "a" : "b"} className="animate-[fadeUp_0.4s_ease-out_both] divide-y divide-white/8">
              {rows.map((r, i) => (
                <li key={r.t} className="flex items-center gap-4 px-6 py-4">
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-xl font-display text-[11px] font-black ${
                      r.bad
                        ? "bg-white/10 text-navy-foreground/50"
                        : "bg-ember text-primary-foreground"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      r.bad ? "text-navy-foreground/45 line-through" : "text-navy-foreground/90"
                    }`}
                  >
                    {r.t}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Services: SERP-style expanding rows ---------- */
function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Online Reputation Management Services
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Eight ORM tracks, stacked like a result page.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Open a row to see the deliverables and the number that track moves.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-2">
          {ORM_SERVICES.map((s, i) => {
            const on = open === i;
            return (
              <Reveal key={s.key} delay={i * 40}>
                <div
                  className={`overflow-hidden rounded-[24px] border transition-all duration-500 ${
                    on
                      ? "border-ember/40 bg-navy text-navy-foreground shadow-lift"
                      : "border-line bg-card shadow-soft hover:border-ember/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left"
                  >
                    <span
                      aria-hidden
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-base transition-colors duration-300 ${
                        on ? "bg-ember text-primary-foreground" : "bg-mist text-ember"
                      }`}
                    >
                      {s.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-display text-base font-extrabold ${
                          on ? "text-navy-foreground" : "text-foreground"
                        }`}
                      >
                        {s.label}
                      </span>
                      <span
                        className={`mt-0.5 block truncate text-sm ${
                          on ? "text-navy-foreground/60" : "text-muted-foreground"
                        }`}
                      >
                        {s.title}
                      </span>
                    </span>
                    <span
                      className={`hidden shrink-0 font-display text-xl font-extrabold text-ember sm:block ${
                        on ? "" : ""
                      }`}
                    >
                      {s.metric}
                    </span>
                    <span
                      aria-hidden
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-black transition-all duration-300 ${
                        on
                          ? "rotate-45 bg-ember text-primary-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ${
                      on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 px-6 pb-7">
                      <div className="grid gap-6 border-t border-white/10 pt-6 lg:grid-cols-[1fr_1.1fr]">
                        <div>
                          <p className="max-w-md leading-relaxed text-navy-foreground/75">{s.body}</p>
                          <p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-ember">
                            {s.metric} · {s.metricLabel}
                          </p>
                        </div>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {s.ships.map((x) => (
                            <li
                              key={x}
                              className="flex items-center gap-2.5 rounded-2xl bg-white/[0.06] px-4 py-3 text-sm font-semibold text-navy-foreground/85"
                            >
                              <span
                                aria-hidden
                                className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[10px] font-black text-primary-foreground"
                              >
                                ✓
                              </span>
                              {x}
                            </li>
                          ))}
                        </ul>
                      </div>
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

/* ---------- Repair flow: vertical alternating timeline ---------- */
function Flow() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Online Reputation Management Services India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            How a bad page one becomes a good one.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <span
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-line lg:left-1/2"
          />
          <div className="space-y-5">
            {ORM_FLOW.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={s.step} delay={i * 60}>
                  <div className="relative pl-14 lg:grid lg:grid-cols-2 lg:gap-12 lg:pl-0">
                    <span
                      aria-hidden
                      className="absolute left-0 top-5 grid h-10 w-10 place-items-center rounded-2xl bg-navy font-display text-[11px] font-black text-ember lg:left-1/2 lg:-translate-x-1/2"
                    >
                      {s.step}
                    </span>
                    <div className={right ? "lg:col-start-2 lg:pl-10" : "lg:col-start-1 lg:pr-10 lg:text-right"}>
                      <div className="rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-ember/50 hover:shadow-lift">
                        <h3 className="font-display text-lg font-extrabold text-foreground">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
                      </div>
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

/* ---------- Team views: stacked report cards ---------- */
function Views() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              ORM Services Company India
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              One programme, five reports that land in different inboxes.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Everyone gets the slice they act on — not a 40-page deck nobody opens.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ORM_VIEWS.map((v, i) => (
            <Reveal key={v.key} delay={i * 60} className="h-full">
              <div
                className={`group flex h-full flex-col rounded-[28px] p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                  i === 0
                    ? "bg-navy text-navy-foreground shadow-lift lg:col-span-2"
                    : "border border-line bg-card shadow-soft hover:border-ember/50 hover:shadow-lift"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] ${
                      i === 0 ? "bg-ember text-primary-foreground" : "bg-mist text-ember"
                    }`}
                  >
                    {v.label}
                  </span>
                  <span
                    aria-hidden
                    className={`font-display text-xs font-black ${
                      i === 0 ? "text-navy-foreground/40" : "text-muted-foreground/50"
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3
                  className={`mt-5 font-display text-xl font-extrabold leading-snug ${
                    i === 0 ? "" : "text-foreground"
                  }`}
                >
                  {v.headline}
                </h3>
                <ul className={`mt-5 space-y-2.5 ${i === 0 ? "sm:columns-2 sm:gap-5" : ""}`}>
                  {v.lines.map((line) => (
                    <li
                      key={line}
                      className={`flex items-start gap-2.5 text-sm ${
                        i === 0 ? "text-navy-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Engagement: two dedicated cards, no toggle ---------- */
function Engagement() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            ORM Services India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            A long game, or a fire to put out today.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {[ORM_ENGAGE.managed, ORM_ENGAGE.crisis].map((d, i) => (
            <Reveal key={d.title} delay={i * 100} className="h-full">
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-[30px] p-8 lg:p-10 ${
                  i === 0
                    ? "bg-navy text-navy-foreground shadow-lift"
                    : "border border-line bg-card shadow-soft"
                }`}
              >
                {i === 0 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-ember opacity-20 blur-3xl"
                  />
                )}
                <span
                  className={`relative inline-flex w-fit rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] ${
                    i === 0 ? "bg-ember text-primary-foreground" : "bg-mist text-ember"
                  }`}
                >
                  {d.tag}
                </span>
                <h3
                  className={`relative mt-6 font-display text-2xl font-extrabold ${
                    i === 0 ? "" : "text-foreground"
                  }`}
                >
                  {d.title}
                </h3>
                <ul className="relative mt-7 space-y-3.5">
                  {d.points.map((p) => (
                    <li
                      key={p}
                      className={`flex items-start gap-3 text-sm ${
                        i === 0 ? "text-navy-foreground/85" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-black ${
                          i === 0
                            ? "bg-ember text-primary-foreground"
                            : "border border-line text-ember"
                        }`}
                      >
                        ✓
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`relative mt-9 inline-flex w-fit rounded-full px-6 py-3 font-bold transition-colors ${
                    i === 0
                      ? "btn-cta"
                      : "border border-line text-foreground hover:border-ember hover:text-ember"
                  }`}
                >
                  {i === 0 ? "Get a written scope" : "Start a crisis sprint"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ORM_TRUST.map((t, i) => (
            <Reveal key={t.title} delay={i * 60} className="h-full">
              <div className="h-full rounded-[24px] border border-line bg-card p-6 shadow-soft">
                <span
                  aria-hidden
                  className="grid h-9 w-9 place-items-center rounded-xl bg-mist text-sm font-black text-ember"
                >
                  ✓
                </span>
                <h3 className="mt-4 font-display text-sm font-extrabold text-foreground">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Impact ---------- */
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
        {ORM_IMPACT.map((item, i) => (
          <Reveal key={item.label} delay={i * 70}>
            <div className="rounded-[26px] border border-white/12 bg-white/[0.05] p-6">
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

/* ---------- Phases: numbered rail ---------- */
function Phases() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Reputation management company
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              From audit to a page one you control.
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
              Removals land in days, ratings move in weeks, suppression consolidates over a quarter.
              Here is the honest sequence.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[28px] bg-line">
          {ORM_PHASES.map((step, i) => (
            <Reveal key={step.phase} delay={i * 60}>
              <div className="group grid gap-3 bg-card p-7 transition-colors duration-500 hover:bg-mist sm:grid-cols-[150px_1fr] sm:gap-8">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                  {step.phase}
                </p>
                <div>
                  <h3 className="font-display text-base font-extrabold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Sectors: split list rows ---------- */
function Sectors() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Online Reputation Management Company India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Sectors where page one decides the sale.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {ORM_SECTORS.map((s, i) => (
            <Reveal key={s.name} delay={i * 45}>
              <div className="group flex items-start gap-5 border-b border-line py-6 transition-colors duration-300 hover:border-ember/60">
                <span className="font-display text-xs font-black text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-foreground transition-colors duration-300 group-hover:text-ember">
                    {s.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
                </div>
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
            Why the tactics matter
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two ways to fix a reputation. Only one holds.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
            <div className="grid grid-cols-2 gap-px bg-line">
              <div className="bg-mist px-6 py-4">
                <p className="font-display text-sm font-extrabold text-muted-foreground">
                  {ORM_COMPARE.typical.title}
                </p>
              </div>
              <div className="bg-navy px-6 py-4">
                <p className="font-display text-sm font-extrabold text-ember">
                  {ORM_COMPARE.acsius.title}
                </p>
              </div>
            </div>
            {ORM_COMPARE.typical.points.map((p, i) => (
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
                    {ORM_COMPARE.acsius.points[i]}
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
            An ORM partner that answers when it gets loud.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ORM_WHY.map((item, i) => (
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

/* ---------- FAQs (consistent with other pages) ---------- */
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
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                ORM questions, answered straight.
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
                Send us your brand name and the URLs that worry you. We will send back a page-one
                audit with what can be removed and what has to be outranked.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-8 inline-flex px-7 py-3.5">
                Get a Free Reputation Audit
              </a>
            </Reveal>
          </div>

          <div className="space-y-3">
            {ORM_FAQS.map((faq, index) => {
              const isOpen = open === index;
              return (
                <Reveal key={faq.q} delay={index * 60}>
                  <div
                    className={`group relative overflow-hidden rounded-[24px] border bg-card p-6 shadow-soft transition-all duration-500 ${
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

export function OrmPage() {
  return (
    <>
      <Hero />
      <PlatformTicker />
      <PageOne />
      <Services />
      <Flow />
      <Views />
      <Engagement />
      <Impact />
      <Phases />
      <Sectors />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
