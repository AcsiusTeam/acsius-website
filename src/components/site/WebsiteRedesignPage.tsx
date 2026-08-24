import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Counter, Reveal, useInView, usePointerParallax } from "@/components/motion";
import { RedesignDemo } from "@/components/site/RedesignDemo";
import { CONTACT } from "@/lib/site";
import {
  WR_COMPARE,
  WR_DELIVERABLES,
  WR_FAQS,
  WR_HERO,
  WR_MODELS,
  WR_PPC,
  WR_PROCESS,
  WR_RESULTS,
  WR_SEO_SAFE,
  WR_SYMPTOMS,
  WR_TRACKS,
  WR_WHY,
} from "@/lib/website-redesign";

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
            "radial-gradient(50% 50% at 88% 14%, oklch(0.71 0.17 52 / 0.22), transparent 70%), radial-gradient(52% 52% at 4% 30%, oklch(0.62 0.11 250 / 0.34), transparent 70%), radial-gradient(65% 45% at 50% 118%, oklch(0.71 0.17 52 / 0.12), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {WR_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {WR_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/80 lg:text-lg">
              {WR_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-foreground/65">
              {WR_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-6 flex flex-wrap gap-2">
              {WR_HERO.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-navy-foreground/20 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-navy-foreground/85"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Redesign Quote
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a redesign specialist
              </a>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {WR_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full min-w-0 max-w-[480px]">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(45% 45% at 22% 18%, oklch(0.71 0.17 52 / 0.32), transparent 70%), radial-gradient(42% 42% at 82% 84%, oklch(0.62 0.11 250 / 0.4), transparent 70%)",
              }}
            />
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0)` }}
            >
              <RedesignDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Symptoms: numbered ticket cards ---------- */
function Symptoms() {
  return (
    <section id="symptoms" className="py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Website redesign company India
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Six signals it is time to redesign.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Two or more of these usually means you are paying for traffic your site cannot convert.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WR_SYMPTOMS.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 60, 300)} className="h-full">
              <div className="group flex h-full gap-4 rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-navy font-display text-sm font-black text-ember transition-colors duration-500 group-hover:bg-ember group-hover:text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                    {s.tag}
                  </span>
                  <h3 className="mt-2 font-display text-base font-extrabold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tracks switcher (navy) ---------- */
function Tracks() {
  const [active, setActive] = useState(0);
  const t = WR_TRACKS[active] ?? WR_TRACKS[0]!;
  return (
    <section
      id="tracks"
      className="relative overflow-hidden bg-navy py-16 text-navy-foreground lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 45% at 12% 10%, oklch(0.62 0.11 250 / 0.3), transparent 70%), radial-gradient(45% 45% at 90% 90%, oklch(0.71 0.17 52 / 0.2), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            Web redesign services in India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            Four ways to redesign. Pick the smallest one that fixes it.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal delay={80}>
            <div
              key={t.key}
              className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.06] p-8 backdrop-blur-sm lg:p-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -left-14 -top-14 h-48 w-48 rounded-full bg-ember opacity-20 blur-2xl"
              />
              <div className="relative flex flex-wrap items-end justify-between gap-4">
                <h3 className="font-display text-2xl font-extrabold text-ember">{t.name}</h3>
                <span className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em]">
                  {t.stat} · {t.statLabel}
                </span>
              </div>
              <p className="relative mt-5 max-w-xl leading-relaxed text-navy-foreground/80">
                {t.body}
              </p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {t.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/18 bg-white/[0.05] px-3 py-1.5 text-xs font-bold"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta px-6 py-3">
                  Scope this track
                </a>
                <Link
                  to={t.href}
                  className="rounded-full border border-navy-foreground/25 px-6 py-3 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
                >
                  Related service
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-2">
            {WR_TRACKS.map((item, i) => {
              const on = active === i;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={on}
                  className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                    on
                      ? "border-ember/50 bg-white/[0.1] shadow-lift"
                      : "border-white/12 bg-white/[0.04] hover:border-ember/30 hover:bg-white/[0.07]"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block font-display text-base font-extrabold">{item.name}</span>
                    <span className="mt-1 block text-xs text-navy-foreground/70">{item.best}</span>
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-lg transition-transform duration-300 ${
                      on ? "translate-x-1 text-ember" : "text-navy-foreground/50"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SEO-safe migration: three-stage lists ---------- */
function SeoSafe() {
  const stages = [WR_SEO_SAFE.before, WR_SEO_SAFE.during, WR_SEO_SAFE.after];
  return (
    <section id="seo-safe" className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            {WR_SEO_SAFE.eyebrow}
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            {WR_SEO_SAFE.heading}
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{WR_SEO_SAFE.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {stages.map((stage, i) => (
            <Reveal key={stage.title} delay={i * 90} className="h-full">
              <div className="relative h-full overflow-hidden rounded-[26px] border border-line bg-card p-7 shadow-soft">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-1 w-full bg-ember"
                  style={{ opacity: 0.35 + i * 0.3 }}
                />
                <p className="font-display text-xs font-black uppercase tracking-[0.16em] text-ember">
                  Stage {i + 1}
                </p>
                <h3 className="mt-3 font-display text-lg font-extrabold text-foreground">
                  {stage.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span
                        aria-hidden
                        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-black text-primary-foreground"
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-sm text-muted-foreground">
            Pair a redesign with{" "}
            <Link to="/seo-company-india" className="font-bold text-ember hover:underline">
              SEO services
            </Link>{" "}
            to compound the gain after launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Before / after result rows ---------- */
function Results() {
  return (
    <section id="results" className="py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Before vs. after
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              What actually moves after a redesign.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Blended 90-day numbers from recent redesign projects.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
          <div className="hidden grid-cols-[1.4fr_0.6fr_0.6fr_0.6fr] gap-3 border-b border-line bg-mist px-6 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground sm:grid">
            <span>Metric</span>
            <span>Before</span>
            <span>After</span>
            <span className="text-right">Change</span>
          </div>
          {WR_RESULTS.map((row, i) => (
            <Reveal key={row.area} delay={Math.min(i * 60, 300)}>
              <div className="grid items-center gap-2 border-b border-line px-6 py-5 transition-colors duration-300 last:border-0 hover:bg-mist/70 sm:grid-cols-[1.4fr_0.6fr_0.6fr_0.6fr] sm:gap-3">
                <p className="font-display text-base font-extrabold text-foreground">{row.area}</p>
                <p className="text-sm text-muted-foreground line-through decoration-ember/50">
                  {row.before}
                </p>
                <p className="font-display text-base font-extrabold text-foreground">{row.after}</p>
                <p className="font-display text-lg font-extrabold text-ember sm:text-right">
                  {row.lift}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Google Ads / PPC ---------- */
function QualityMeter() {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="grid gap-5">
      {WR_PPC.meter.map((m, i) => (
        <div key={m.label}>
          <div className="flex items-end justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              {m.label}
            </p>
            <p className="font-display text-sm font-extrabold text-ember">
              {m.from} → {m.to}
            </p>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-ember transition-[width] duration-[1400ms] ease-out"
              style={{ width: `${visible ? m.to : m.from}%`, transitionDelay: `${i * 180}ms` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Ppc() {
  return (
    <section id="google-ads" className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              {WR_PPC.eyebrow}
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              {WR_PPC.heading}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{WR_PPC.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/contact" className="btn-cta px-7 py-3.5">
                Get one page + Google Ads
              </a>
              <Link
                to="/ppc-services-company-india"
                className="rounded-full border border-line bg-card px-7 py-3.5 font-bold text-foreground transition-colors hover:border-ember hover:text-ember"
              >
                See PPC services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[28px] border border-line bg-card p-7 shadow-soft">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                Quality Score signals after redesign
              </p>
              <div className="mt-6">
                <QualityMeter />
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                A faster, message-matched page lowers your CPC for the same ad rank.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-3">
          {WR_PPC.items.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 60, 300)} className="h-full">
              <div className="h-full bg-card p-7 transition-colors duration-500 hover:bg-mist">
                <span className="inline-flex rounded-full bg-ember/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-ember">
                  {item.tag}
                </span>
                <h3 className="mt-4 font-display text-base font-extrabold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-sm font-semibold text-foreground">
            {WR_PPC.note}{" "}
            <Link to="/landing-page-design" className="text-ember hover:underline">
              See landing page design
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Deliverables ---------- */
function Deliverables() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            What you get
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            One scope, three sets of deliverables.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {WR_DELIVERABLES.map((col, i) => (
            <Reveal key={col.group} delay={i * 80} className="h-full">
              <div className="h-full rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                  {col.group}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                      />
                      <span>{item}</span>
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

/* ---------- Models ---------- */
function Models() {
  const [active, setActive] = useState(0);
  return (
    <section id="models" className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Engagement models
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Full project, one page, or phased rollout.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {WR_MODELS.map((model, i) => {
            const on = active === i;
            return (
              <Reveal key={model.name} delay={i * 80} className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`flex h-full w-full cursor-pointer flex-col rounded-[26px] border bg-card p-7 text-left shadow-soft transition-all duration-500 ${
                    on
                      ? "-translate-y-1.5 border-ember/60 shadow-lift ring-2 ring-ember/25"
                      : "border-line hover:-translate-y-1 hover:border-primary/30"
                  }`}
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-display text-lg font-extrabold text-foreground">
                      {model.name}
                    </span>
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[11px] font-black transition-colors ${
                        on
                          ? "border-transparent bg-ember text-primary-foreground"
                          : "border-line text-muted-foreground"
                      }`}
                    >
                      ✓
                    </span>
                  </span>
                  <span className="mt-4 block font-display text-2xl font-extrabold text-ember">
                    {model.price}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">
                    {model.note}
                  </span>
                  <ul className="mt-6 space-y-2.5">
                    {model.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold ${
                      on ? "text-ember" : "text-muted-foreground"
                    }`}
                  >
                    {on ? "Selected — get a quote" : "Choose this model"}
                    <span aria-hidden>→</span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-10 inline-flex px-7 py-3.5">
            Get a Redesign Quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  return (
    <section id="process" className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Redesign roadmap
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Audit first, launch last, nothing lost in between.
          </h2>
        </Reveal>

        <ol className="relative mt-12 border-l border-line pl-6 sm:pl-10">
          {WR_PROCESS.map((phase, i) => (
            <Reveal key={phase.step} as="li" delay={i * 70} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(1.5rem+0.75rem)] top-1 grid h-6 w-6 place-items-center rounded-full bg-ember font-display text-[10px] font-black text-primary-foreground sm:-left-[calc(2.5rem+0.75rem)]">
                {i + 1}
              </span>
              <div className="grid gap-3 rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-ember/50 hover:shadow-lift sm:grid-cols-[1fr_auto] sm:items-start">
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-extrabold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {phase.body}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col sm:items-end">
                  <span className="rounded-full border border-line bg-mist px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-foreground">
                    {phase.duration}
                  </span>
                  <span className="rounded-full bg-ember/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-ember">
                    {phase.ship}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Compare ---------- */
function Compare() {
  return (
    <section id="compare" className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Theme swap vs. redesign
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two redesigns. Only one keeps the traffic.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] border border-line bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                {WR_COMPARE.typical.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {WR_COMPARE.typical.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line text-[11px] font-black text-muted-foreground"
                    >
                      ✕
                    </span>
                    <span>{pt}</span>
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
                {WR_COMPARE.acsius.title}
              </h3>
              <ul className="relative mt-6 space-y-4">
                {WR_COMPARE.acsius.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-navy-foreground/85">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-black text-primary-foreground"
                    >
                      ✓
                    </span>
                    <span>{pt}</span>
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
    <section id="why" className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            A website redesign agency in India that owns the launch.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {WR_WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="h-full">
              <div className="h-full bg-card p-7 transition-colors duration-500 hover:bg-mist">
                <p className="font-display text-4xl font-extrabold text-ember">{item.metric}</p>
                <h3 className="mt-4 font-display text-base font-extrabold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-sm text-muted-foreground">
            Also explore{" "}
            <Link to="/website-design-company-india" className="font-bold text-ember hover:underline">
              website design
            </Link>
            ,{" "}
            <Link to="/ui-ux-website-design-company" className="font-bold text-ember hover:underline">
              UI/UX design
            </Link>{" "}
            and{" "}
            <Link to="/landing-page-design" className="font-bold text-ember hover:underline">
              landing page design
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQs ---------- */
function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-mist py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                Website redesign, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Send your current URL. You get an audit summary, a redesign direction and a fixed
                price inside two working days.
              </p>
              <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta mt-7 inline-flex px-7 py-3.5">
                Request a Free Site Audit
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {WR_FAQS.map((faq, index) => {
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

export function WebsiteRedesignPage() {
  return (
    <>
      <Hero />
      <Symptoms />
      <Tracks />
      <SeoSafe />
      <Results />
      <Ppc />
      <Deliverables />
      <Models />
      <Process />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
