import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { HospitalDemo } from "@/components/site/HospitalDemo";
import { CONTACT } from "@/lib/site";
import {
  HMS_COMPARE,
  HMS_DEPLOY,
  HMS_FAQS,
  HMS_FLOW,
  HMS_HERO,
  HMS_IMPACT,
  HMS_MODULES,
  HMS_ROLES,
  HMS_ROLLOUT,
  HMS_SECTORS,
  HMS_TRUST,
  HMS_WHY,
} from "@/lib/hospital";

const SECTOR_ICONS = ["✚", "⌂", "◈", "▤", "☺", "◉", "⚗", "▦"];

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
              {HMS_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {HMS_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {HMS_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {HMS_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Book a Free HMS Demo
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Talk to a hospital IT consultant
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {HMS_HERO.stats.map((stat) => (
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
              <HospitalDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Modules explorer ---------- */
function Modules() {
  const [active, setActive] = useState(0);
  const m = HMS_MODULES[active] ?? HMS_MODULES[0]!;
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Hospital Management Software
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Eighteen modules. Switch on what your departments need.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Browse it the way your front desk and billing team would — pick a module to see what it
              does.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-line bg-card p-3 shadow-soft">
              {HMS_MODULES.map((item, i) => {
                const on = active === i;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                      on
                        ? "bg-navy text-navy-foreground shadow-lift"
                        : "text-muted-foreground hover:bg-mist hover:text-foreground"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl text-sm ${
                        on ? "bg-ember text-primary-foreground" : "bg-mist text-ember"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-display text-sm font-extrabold">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div key={m.key} className="grid animate-[fadeUp_0.5s_ease-out_both] gap-4">
            <div className="relative overflow-hidden rounded-[30px] bg-navy p-8 text-navy-foreground shadow-lift lg:p-11">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember opacity-20 blur-2xl"
              />
              <p className="relative text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                {m.label} module
              </p>
              <h3 className="relative mt-4 max-w-lg font-display text-2xl font-extrabold leading-snug lg:text-3xl">
                {m.title}
              </h3>
              <p className="relative mt-5 max-w-xl leading-relaxed text-navy-foreground/75">
                {m.body}
              </p>
              <div className="relative mt-9 flex items-end gap-4 border-t border-white/10 pt-7">
                <span className="font-display text-4xl font-extrabold text-ember lg:text-5xl">
                  {m.metric}
                </span>
                <span className="pb-2 text-xs font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                  {m.metricLabel}
                </span>
              </div>
            </div>

            <div className="rounded-[30px] border border-line bg-card p-8 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                  What you get
                </p>
                <a href="/contact" className="btn-cta px-6 py-3">
                  See {m.label} in a demo
                </a>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {m.ships.map((s) => (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Roles ---------- */
function Roles() {
  const [active, setActive] = useState(0);
  const r = HMS_ROLES[active] ?? HMS_ROLES[0]!;
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Hospital Management System India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            One system, five very different logins.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 inline-flex flex-wrap gap-1.5 rounded-full border border-line bg-card p-1.5 shadow-soft">
            {HMS_ROLES.map((item, i) => {
              const on = active === i;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`cursor-pointer rounded-full px-5 py-2.5 font-display text-sm font-extrabold transition-all duration-300 ${
                    on ? "bg-ember text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div
            key={r.key}
            className="mt-8 animate-[fadeUp_0.4s_ease-out_both] overflow-hidden rounded-[30px] border border-line bg-card shadow-soft"
          >
            <div className="flex items-center gap-2 border-b border-line bg-mist px-6 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-3 text-[11px] font-bold text-muted-foreground">
                {r.label.toLowerCase()} · hms.yourhospital.in
              </span>
            </div>
            <div className="grid gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-11">
              <h3 className="font-display text-2xl font-extrabold leading-snug text-foreground lg:text-3xl">
                {r.headline}
              </h3>
              <ul className="space-y-3">
                {r.lines.map((line, i) => (
                  <li
                    key={line}
                    className="flex items-start gap-4 rounded-2xl bg-mist px-5 py-4 text-sm font-semibold text-foreground"
                  >
                    <span className="font-display text-xs font-black text-ember">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Patient journey on a wavy spine ---------- */
function Journey() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            HMS Software
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            How a patient moves through the system.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <svg
            aria-hidden
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-16 w-full -translate-y-1/2 lg:block"
          >
            <path
              d="M0 30 C 120 0, 240 60, 360 30 S 600 0, 720 30 S 900 60, 1000 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 10"
              className="text-ember/35"
            />
          </svg>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {HMS_FLOW.map((s, i) => (
              <Reveal key={s.step} delay={i * 70} className="h-full">
                <div
                  className={`group h-full rounded-[26px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift ${
                    i % 2 === 1 ? "lg:mt-14" : "lg:mb-14"
                  }`}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-navy font-display text-xs font-black text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-primary-foreground">
                    {s.step}
                  </span>
                  <h3 className="mt-5 font-display text-base font-extrabold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Deployment ---------- */
function Deployment() {
  const [cloud, setCloud] = useState(true);
  const d = cloud ? HMS_DEPLOY.cloud : HMS_DEPLOY.onprem;
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Cloud based hospital management software
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Hosted by us, or inside your server room.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Same product, same modules. Only the hosting, access and commercial model change —
              toggle to compare.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 inline-flex gap-1.5 rounded-full border border-line bg-card p-1.5 shadow-soft">
              {[
                { label: "Cloud", on: cloud },
                { label: "On-premise", on: !cloud },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setCloud(opt.label === "Cloud")}
                  aria-pressed={opt.on}
                  className={`cursor-pointer rounded-full px-6 py-2.5 font-display text-sm font-extrabold transition-all duration-300 ${
                    opt.on ? "bg-ember text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 grid gap-px overflow-hidden rounded-[26px] bg-line sm:grid-cols-2">
              {HMS_TRUST.map((t) => (
                <div key={t.title} className="bg-card p-6">
                  <h3 className="font-display text-sm font-extrabold text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div
            key={d.title}
            className="relative animate-[fadeUp_0.4s_ease-out_both] overflow-hidden rounded-[30px] bg-navy p-8 text-navy-foreground shadow-lift lg:p-11"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-ember opacity-20 blur-3xl"
            />
            <span className="relative inline-flex rounded-full bg-ember px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-primary-foreground">
              {d.tag}
            </span>
            <h3 className="relative mt-6 font-display text-2xl font-extrabold lg:text-3xl">
              {d.title}
            </h3>
            <ul className="relative mt-8 space-y-4">
              {d.points.map((p) => (
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
            <a href="mailto:info@acsius.com?subject=Request%20from%20acsius.com" className="btn-cta relative mt-9 inline-flex px-6 py-3">
              Get a written quote
            </a>
          </div>
        </Reveal>
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
        {HMS_IMPACT.map((item, i) => (
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

/* ---------- Rollout ---------- */
function Rollout() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Implementation
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            From registers to a live OPD day in about 24 days.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line lg:grid-cols-5">
          {HMS_ROLLOUT.map((step, i) => (
            <Reveal key={step.phase} delay={i * 70} className="h-full">
              <div className="group h-full bg-card p-7 transition-colors duration-500 hover:bg-mist">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-ember" />
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                    {step.phase}
                  </p>
                </div>
                <h3 className="mt-4 font-display text-base font-extrabold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
            Who runs on it
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Facilities and set-ups we configure for.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HMS_SECTORS.map((b, i) => (
            <Reveal key={b.name} delay={i * 60} className="h-full">
              <div className="group flex h-full flex-col rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mist text-lg text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-primary-foreground">
                  {SECTOR_ICONS[i]}
                </span>
                <h3 className="mt-5 font-display text-base font-extrabold text-foreground">
                  {b.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.note}</p>
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
            Best hospital management software provider in India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two kinds of HMS demo. Only one survives month one.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] border border-line bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                {HMS_COMPARE.typical.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {HMS_COMPARE.typical.points.map((p) => (
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
                {HMS_COMPARE.acsius.title}
              </h3>
              <ul className="relative mt-6 space-y-4">
                {HMS_COMPARE.acsius.points.map((p) => (
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
            A software partner your hospital can actually reach.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {HMS_WHY.map((item, i) => (
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
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                Hospital software questions, answered straight.
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
                Still comparing vendors? Send us your tariff sheet and department list — we will load
                a sandbox with your own data and walk your team through it.
              </p>
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta mt-8 inline-flex px-7 py-3.5">
                Book a Free HMS Demo
              </a>
            </Reveal>
          </div>

          <div className="space-y-3">
            {HMS_FAQS.map((faq, index) => {
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

export function HospitalPage() {
  return (
    <>
      <Hero />
      <Modules />
      <Roles />
      <Journey />
      <Deployment />
      <Impact />
      <Rollout />
      <Sectors />
      <Compare />
      <Why />
      <Faqs />
    </>
  );
}
