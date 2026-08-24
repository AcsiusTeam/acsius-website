import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { CustomCmsDemo } from "@/components/site/CustomCmsDemo";
import { CONTACT } from "@/lib/site";
import {
  CMS_ANSWERS,
  CMS_COMPARE,
  CMS_FAQS,
  CMS_HERO,
  CMS_INDUSTRIES,
  CMS_MODELS,
  CMS_MODULES,
  CMS_NEXT,
  CMS_OUTCOMES,
  CMS_PILLARS,
  CMS_RHYTHM,
  CMS_ROLES,
  CMS_STEPS,
  CMS_WHY,
} from "@/lib/custom-cms";

const WA = CONTACT.whatsapp ?? "/contact";

function HeroPanel() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);
  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[560px]">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 25% 20%, oklch(0.62 0.11 250 / 0.35), transparent 70%), radial-gradient(40% 40% at 80% 85%, oklch(0.71 0.17 52 / 0.32), transparent 70%)",
        }}
      />
      <div
        className="relative rounded-[28px] border border-white/12 bg-white/[0.06] p-3 shadow-lift backdrop-blur transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0) rotateX(${offset.y * -2}deg) rotateY(${offset.x * 2}deg)`,
        }}
      >
        <div className="rounded-[20px] border border-white/10 bg-white/5 p-2.5">
          <p className="mb-2 flex items-center gap-1.5 px-1 text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
            Custom CMS admin — live preview
          </p>
          <CustomCmsDemo />
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/70">
              Build routes
            </p>
            <ul className="mt-3 space-y-2.5">
              {[
                { k: "WP", t: "Custom WordPress" },
                { k: "LV", t: "Bespoke Laravel admin" },
                { k: "HL", t: "Headless + React" },
              ].map((row) => (
                <li key={row.t} className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ember/20 text-[10px] font-black text-ember">
                    {row.k}
                  </span>
                  <span className="truncate text-[11px] font-bold text-navy-foreground">
                    {row.t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/70">
              Included by default
            </p>
            <ul className="mt-3 space-y-2 text-[11px] font-semibold text-navy-foreground/75">
              {["Role-based approvals", "Redirect manager", "Auto schema + meta", "Editor training"].map(
                (t) => (
                  <li key={t} className="flex gap-2">
                    <span aria-hidden className="text-ember">
                      ✓
                    </span>
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 text-navy-foreground lg:pt-40 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 85% 10%, oklch(0.71 0.17 52 / 0.28), transparent 70%), radial-gradient(60% 60% at 10% 25%, oklch(0.62 0.11 250 / 0.34), transparent 70%), radial-gradient(70% 60% at 45% 115%, oklch(0.62 0.11 250 / 0.2), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              {CMS_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {CMS_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {CMS_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {CMS_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Get a Custom CMS Quote
              </a>
              <a
                href={WA}
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
              {CMS_HERO.stats.map((stat) => (
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
          <HeroPanel />
        </Reveal>
      </div>
    </section>
  );
}

function Intro() {
  const [active, setActive] = useState(CMS_PILLARS[0]!.key);
  const current = CMS_PILLARS.find((p) => p.key === active) ?? CMS_PILLARS[0]!;

  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Custom CMS Development Company India
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.4rem]">
              A content system shaped by your workflow.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Four things teams check before commissioning a custom CMS website. Tap through.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-[30px] border border-line bg-card shadow-soft">
            <div className="flex flex-wrap gap-1.5 border-b border-line bg-mist/60 p-2.5">
              {CMS_PILLARS.map((p) => {
                const isActive = p.key === active;
                return (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setActive(p.key)}
                    aria-pressed={isActive}
                    className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-navy text-navy-foreground shadow-lift"
                        : "text-muted-foreground hover:bg-mist hover:text-foreground"
                    }`}
                  >
                    {p.tab}
                  </button>
                );
              })}
            </div>

            <div
              key={current.key}
              className="grid animate-[fadeUp_0.5s_ease-out_both] gap-10 p-8 lg:grid-cols-[1fr_0.7fr] lg:p-11"
            >
              <div>
                <h3 className="font-display text-2xl font-extrabold leading-snug text-foreground lg:text-3xl">
                  {current.headline}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{current.body}</p>
              </div>
              <div className="rounded-[24px] bg-mist p-7">
                <p className="font-display text-4xl font-extrabold text-ember">{current.stat}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {current.statLabel}
                </p>
                <ul className="mt-6 space-y-3">
                  {current.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {CMS_ANSWERS.map((item, i) => (
            <Reveal key={item.q} delay={i * 70}>
              <div className="group h-full rounded-[24px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                <h3 className="font-display text-base font-bold leading-snug text-foreground">
                  {item.q}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                <span
                  aria-hidden
                  className="mt-5 block h-1 w-10 rounded-full bg-ember transition-all duration-500 group-hover:w-20"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Module explorer: sidebar list + detail panel ---------- */
function Modules() {
  const [active, setActive] = useState(0);
  const s = CMS_MODULES[active] ?? CMS_MODULES[0]!;
  return (
    <section id="services" className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Custom CMS Development Services
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Eight modules. Take only the ones your content needs.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Select a module to see exactly what ships inside it.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-line bg-card p-3 shadow-soft">
              {CMS_MODULES.map((item, i) => {
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

          <div key={s.key} className="grid animate-[fadeUp_0.5s_ease-out_both] gap-4">
            <div className="relative overflow-hidden rounded-[30px] bg-navy p-8 text-navy-foreground shadow-lift lg:p-11">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember opacity-20 blur-2xl"
              />
              <p className="relative text-[10px] font-black uppercase tracking-[0.16em] text-ember">
                {s.label} module
              </p>
              <h3 className="relative mt-4 max-w-lg font-display text-2xl font-extrabold leading-snug lg:text-3xl">
                {s.title}
              </h3>
              <p className="relative mt-5 max-w-xl leading-relaxed text-navy-foreground/75">{s.body}</p>
              <div className="relative mt-9 flex items-end gap-4 border-t border-white/10 pt-7">
                <span className="font-display text-4xl font-extrabold text-ember lg:text-5xl">
                  {s.metric}
                </span>
                <span className="pb-2 text-xs font-black uppercase tracking-[0.14em] text-navy-foreground/60">
                  {s.metricLabel}
                </span>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {s.ships.map((ship) => (
                <li
                  key={ship}
                  className="flex items-start gap-3 rounded-[22px] border border-line bg-card p-5 text-sm font-semibold text-foreground shadow-soft"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-black text-primary-foreground"
                  >
                    ✓
                  </span>
                  {ship}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={140}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Already running WordPress and only need ongoing custom work?{" "}
            <Link to="/hire-wordpress-developers" className="font-bold text-primary hover:text-ember">
              Hire WordPress developers
            </Link>{" "}
            monthly instead. If the design and content strategy come first, start with our{" "}
            <Link to="/website-design-company-india" className="font-bold text-primary hover:text-ember">
              website design services in India
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Roles: segmented control ---------- */
function Roles() {
  const [active, setActive] = useState(CMS_ROLES[0]!.key);
  const role = CMS_ROLES.find((r) => r.key === active) ?? CMS_ROLES[0]!;
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            CMS Website Design Agency India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Four people use the CMS. All four get a screen built for them.
          </h2>
        </Reveal>

        <div className="mt-10 inline-flex flex-wrap gap-1.5 rounded-full border border-line bg-card p-1.5 shadow-soft">
          {CMS_ROLES.map((r) => {
            const on = r.key === active;
            return (
              <button
                key={r.key}
                type="button"
                onClick={() => setActive(r.key)}
                aria-pressed={on}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  on
                    ? "bg-navy text-navy-foreground shadow-lift"
                    : "text-muted-foreground hover:bg-mist hover:text-foreground"
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>

        <div
          key={role.key}
          className="mt-6 grid animate-[fadeUp_0.5s_ease-out_both] gap-4 rounded-[30px] border border-line bg-card p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-11"
        >
          <h3 className="max-w-md font-display text-2xl font-extrabold leading-snug text-foreground lg:text-[1.75rem]">
            {role.headline}
          </h3>
          <ul className="grid gap-3">
            {role.lines.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-2xl bg-mist p-4 text-sm leading-relaxed text-foreground"
              >
                <span
                  aria-hidden
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[11px] font-black text-primary-foreground"
                >
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Delivery rhythm ---------- */
function Rhythm() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            How Delivery Runs
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            You see the CMS working long before launch week.
          </h2>
        </Reveal>

        <div className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-line lg:block"
          />
          {CMS_RHYTHM.map((item, i) => (
            <Reveal key={item.t} delay={i * 90}>
              <div className="relative h-full rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span className="relative grid h-9 w-9 place-items-center rounded-full bg-ember font-display text-xs font-black text-primary-foreground">
                  {i + 1}
                </span>
                <p className="mt-5 text-[11px] font-black uppercase tracking-[0.16em] text-primary">
                  {item.k}
                </p>
                <h3 className="mt-2 font-display text-lg font-extrabold text-foreground">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Build routes ---------- */
function Models() {
  const [active, setActive] = useState(CMS_MODELS[0]!.key);

  return (
    <section id="models" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Build Routes
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.4rem]">
              Three ways to deliver custom CMS website development.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              We recommend one after the content audit — including the cheaper option when it wins.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {CMS_MODELS.map((model, i) => {
            const isActive = model.key === active;
            return (
              <Reveal key={model.key} delay={i * 80}>
                <button
                  type="button"
                  onClick={() => setActive(model.key)}
                  aria-pressed={isActive}
                  className={`group relative h-full w-full cursor-pointer rounded-[28px] border p-7 text-left transition-all duration-500 ${
                    isActive
                      ? "border-transparent bg-navy text-navy-foreground shadow-lift"
                      : "border-line bg-card text-foreground shadow-soft hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
                  }`}
                >
                  <span
                    className={`absolute right-5 top-5 grid h-7 w-7 place-items-center rounded-full text-xs font-black transition-all duration-300 ${
                      isActive
                        ? "bg-ember text-primary-foreground"
                        : "bg-mist text-foreground opacity-0 group-hover:opacity-100"
                    }`}
                    aria-hidden
                  >
                    {isActive ? "✓" : "→"}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] ${
                      isActive ? "text-ember" : "text-muted-foreground"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-ember" : "bg-primary"}`} />
                    {model.tagline}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-extrabold leading-snug">
                    {model.label}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isActive ? "text-navy-foreground/75" : "text-muted-foreground"
                    }`}
                  >
                    {model.body}
                  </p>

                  <div
                    className={`grid overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <ul className="min-h-0 space-y-2.5">
                      {model.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <dl
                    className={`mt-6 grid gap-3 border-t pt-5 text-xs sm:grid-cols-2 ${
                      isActive ? "border-white/15" : "border-line"
                    }`}
                  >
                    <div>
                      <dt
                        className={`font-bold uppercase tracking-[0.14em] ${
                          isActive ? "text-navy-foreground/55" : "text-muted-foreground"
                        }`}
                      >
                        Best for
                      </dt>
                      <dd className="mt-1 font-semibold">{model.best}</dd>
                    </div>
                    <div>
                      <dt
                        className={`font-bold uppercase tracking-[0.14em] ${
                          isActive ? "text-navy-foreground/55" : "text-muted-foreground"
                        }`}
                      >
                        Timeline
                      </dt>
                      <dd className="mt-1 font-semibold">{model.commitment}</dd>
                    </div>
                  </dl>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
              Get a Written Scope
            </a>
            <p className="text-sm text-muted-foreground">
              Selling a large catalogue instead?{" "}
              <Link to="/hire-shopify-developers" className="font-bold text-primary hover:text-ember">
                Hire Shopify developers
              </Link>{" "}
              — hosted commerce is often the honest answer.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Project journey timeline ---------- */
function Journey() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 15% 5%, oklch(0.62 0.11 250 / 0.3), transparent 70%), radial-gradient(45% 45% at 90% 90%, oklch(0.71 0.17 52 / 0.22), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            How A Project Runs
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] lg:text-[2.4rem]">
            From first call to trained editors in six to eight weeks.
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-6 lg:space-y-0">
          <span aria-hidden className="absolute left-[19px] top-2 bottom-2 w-px bg-white/15 lg:left-1/2" />
          {CMS_STEPS.map((step, i) => (
            <Reveal key={step.step} as="li" delay={i * 70}>
              <div
                className={`relative pl-14 lg:grid lg:grid-cols-2 lg:gap-12 lg:pl-0 ${
                  i % 2 === 0 ? "" : "lg:[&>*:first-child]:col-start-2"
                }`}
              >
                <div className={`lg:py-4 ${i % 2 === 0 ? "lg:pr-4 lg:text-right" : "lg:pl-4"}`}>
                  <div className="rounded-[24px] border border-white/12 bg-white/[0.05] p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-ember/40">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-ember">
                      {step.step} · {step.duration}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-extrabold">{step.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-navy-foreground/75">{step.body}</p>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="absolute left-[12px] top-8 h-4 w-4 rounded-full border-2 border-navy bg-ember lg:left-1/2 lg:-translate-x-1/2"
                />
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
              Ask a CMS Architect on WhatsApp
            </a>
            <p className="text-sm text-navy-foreground/65">
              Migrating an old site? Send the URL and we'll audit the content model free.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Custom CMS Website Design India
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Two CMS quotes. Only one is still usable in year three.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] border border-line bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                {CMS_COMPARE.typical.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {CMS_COMPARE.typical.points.map((p) => (
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
              <h3 className="relative font-display text-xl font-extrabold">
                {CMS_COMPARE.acsius.title}
              </h3>
              <ul className="relative mt-6 space-y-4">
                {CMS_COMPARE.acsius.points.map((p) => (
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
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta relative mt-8 inline-flex px-7 py-3.5">
                Book a Content Audit
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            What You Can Count On
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.4rem]">
            The commitments behind every CMS build.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CMS_OUTCOMES.map((item, i) => (
            <Reveal key={item.v} as="li" delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span
                  aria-hidden
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary opacity-[0.1] transition-transform duration-700 group-hover:scale-150"
                />
                <p className="font-display text-5xl font-extrabold tracking-tight text-foreground">
                  {item.k}
                </p>
                <p className="mt-3 font-display text-base font-bold text-foreground">{item.v}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.note}</p>
                <span
                  aria-hidden
                  className="mt-6 block h-1 w-12 rounded-full bg-ember transition-all duration-500 group-hover:w-24"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.4rem]">
            A custom CMS development company that hands the keys over.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CMS_WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <h3 className="font-display text-lg font-extrabold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Running a smaller brochure site your team edits weekly? A{" "}
            <Link to="/hire-wix-developers" className="font-bold text-primary hover:text-ember">
              Wix developer
            </Link>{" "}
            is usually cheaper than a custom CMS — and we will say so on the first call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Industries We Build For
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.4rem]">
            Sector content models, not a generic starter kit.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-10 md:grid-cols-2">
          {CMS_INDUSTRIES.map((item, i) => (
            <Reveal key={item.name} delay={i * 50}>
              <div className="group flex items-start gap-5 border-b border-line py-6 transition-colors hover:border-primary/40">
                <span className="font-display text-sm font-black tabular-nums text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground transition-transform duration-300 group-hover:translate-x-1">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextSteps() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 55% at 80% 15%, oklch(0.71 0.17 52 / 0.2), transparent 70%), radial-gradient(50% 55% at 10% 85%, oklch(0.62 0.11 250 / 0.28), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            Where A CMS Fits In
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] lg:text-[2.4rem]">
            One studio for design, CMS and the team that maintains it.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {CMS_NEXT.map((item, i) => (
            <Reveal key={item.href} delay={i * 80}>
              <Link
                to={item.href}
                className="group flex h-full flex-col rounded-[26px] border border-white/12 bg-white/[0.05] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-ember">
                  {item.label}
                </span>
                <h3 className="mt-3 font-display text-2xl font-extrabold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">{item.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ember">
                  {item.cta}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.4rem]">
                Custom CMS development, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Not sure whether you need WordPress, headless or something bespoke? Send your current
                site and we'll tell you which is cheapest to live with.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta mt-7 inline-flex px-7 py-3.5"
              >
                Ask a CMS Architect on WhatsApp
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {CMS_FAQS.map((faq, index) => {
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

export function CustomCmsPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Modules />
      <Roles />
      <Rhythm />
      <Models />
      <Journey />
      <Compare />
      <Numbers />
      <Why />
      <Industries />
      <NextSteps />
      <Faqs />
    </>
  );
}
