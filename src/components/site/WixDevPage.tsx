import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { WixStudioDemo, VeloCodeDemo } from "@/components/site/WixStudioDemo";
import { CONTACT } from "@/lib/site";
import {
  WIX_ANSWERS,
  WIX_FAQS,
  WIX_FIT,
  WIX_HERO,
  WIX_INDUSTRIES,
  WIX_MODELS,
  WIX_NEXT,
  WIX_OUTCOMES,
  WIX_PILLARS,
  WIX_SKILLS,
  WIX_STEPS,
  WIX_WHY,
} from "@/lib/wix-dev";

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
            Wix Studio canvas · responsive stacks
          </p>
          <div className="overflow-hidden" style={{ height: 208 }}>
            <WixStudioDemo />
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[20px] border border-white/10 bg-white/5 p-2.5">
            <p className="mb-2 flex items-center gap-1.5 px-1 text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
              Velo backend module
            </p>
            <div className="overflow-hidden" style={{ height: 168 }}>
              <VeloCodeDemo />
            </div>
          </div>

          <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/70">
              Bench snapshot
            </p>
            <ul className="mt-3 space-y-3">
              {[
                { role: "Senior Wix Studio dev", exp: "7+ yrs" },
                { role: "Velo / JS developer", exp: "5+ yrs" },
                { role: "Wix Stores specialist", exp: "5+ yrs" },
                { role: "SEO & speed QA", exp: "4+ yrs" },
              ].map((row) => (
                <li key={row.role} className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ember/20 text-[10px] font-black text-ember">
                    {row.role.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[11px] font-bold text-navy-foreground">
                      {row.role}
                    </span>
                    <span className="block text-[10px] text-navy-foreground/55">
                      Available · {row.exp}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-32">
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
              {WIX_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
              {WIX_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {WIX_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {WIX_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                Hire Wix Developers
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
              {WIX_HERO.stats.map((stat) => (
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
  const [active, setActive] = useState(WIX_PILLARS[0]!.key);
  const current = WIX_PILLARS.find((p) => p.key === active) ?? WIX_PILLARS[0]!;

  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Hire Wix Developers India
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              A Wix development team you can hand the account to.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Four things clients check before they hire a Wix expert. Tap through them.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mt-10 overflow-hidden rounded-[32px] border border-line bg-card shadow-soft">
            <div className="flex flex-wrap gap-2 border-b border-line p-3">
              {WIX_PILLARS.map((p) => {
                const isActive = p.key === active;
                return (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setActive(p.key)}
                    aria-pressed={isActive}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
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
              className="grid animate-in gap-10 fade-in p-8 duration-500 lg:grid-cols-[1fr_0.7fr] lg:p-12"
            >
              <div>
                <h3 className="font-display text-2xl font-extrabold leading-snug text-foreground lg:text-3xl">
                  {current.headline}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{current.body}</p>
              </div>
              <div className="rounded-[24px] bg-mist p-7">
                <p className="font-display text-3xl font-extrabold text-ember">{current.stat}</p>
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
          {WIX_ANSWERS.map((item, i) => (
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

function Models() {
  const [active, setActive] = useState(WIX_MODELS[0]!.key);

  return (
    <section id="models" className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Hiring Models
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Three ways to hire dedicated Wix developers or a single Wix expert.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Pick the model that matches the work. Switch mid-engagement — the same developer stays
              on your account.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {WIX_MODELS.map((model, i) => {
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
                    aria-hidden
                    className={`absolute right-5 top-5 grid h-7 w-7 place-items-center rounded-full text-xs font-black transition-all duration-300 ${
                      isActive
                        ? "bg-ember text-primary-foreground"
                        : "bg-mist text-foreground opacity-0 group-hover:opacity-100"
                    }`}
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
                        Commitment
                      </dt>
                      <dd className="mt-1 font-semibold">{model.commitment}</dd>
                    </div>
                  </dl>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
              Ask Which Model Fits
            </a>
            <p className="text-sm text-muted-foreground">
              Two-minute WhatsApp answer, no form and no sales sequence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  const [open, setOpen] = useState(0);

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            What Our Wix Experts Do
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
            Hire Expert Wix Developers, not template pickers.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {WIX_SKILLS.map((skill, i) => {
            const isOpen = i === open;
            return (
              <Reveal key={skill.name} delay={i * 50}>
                <button
                  type="button"
                  onMouseEnter={() => setOpen(i)}
                  onFocus={() => setOpen(i)}
                  onClick={() => setOpen(i)}
                  aria-expanded={isOpen}
                  className="group grid w-full gap-3 py-6 text-left lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.35fr)] lg:items-start lg:gap-8"
                >
                  <span
                    className={`font-display text-sm font-black tabular-nums transition-colors ${
                      isOpen ? "text-ember" : "text-muted-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-xl font-extrabold transition-all duration-300 lg:text-2xl ${
                      isOpen ? "text-primary lg:translate-x-1.5" : "text-foreground"
                    }`}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`text-sm leading-relaxed transition-all duration-500 ${
                      isOpen ? "text-muted-foreground opacity-100" : "text-muted-foreground/60"
                    }`}
                  >
                    {skill.detail}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Honest fit section — two columns, visually unlike anything else on the page. */
function Fit() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Straight Advice
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
            When Wix is right — and when you've outgrown it.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[28px] border border-primary/25 bg-card p-8 shadow-soft">
              <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-primary">
                Wix is the right call
              </p>
              <ul className="mt-6 space-y-4">
                {WIX_FIT.good.map((row) => (
                  <li key={row} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <span aria-hidden className="mt-0.5 font-black text-primary">
                      ✓
                    </span>
                    {row}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@acsius.com?subject=Request%20from%20acsius.com"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-ember"
              >
                Scope a Wix build <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-[28px] border border-line bg-navy p-8 text-navy-foreground shadow-lift">
              <p className="inline-flex items-center gap-2 rounded-full bg-ember/20 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-ember">
                You've outgrown Wix
              </p>
              <ul className="mt-6 space-y-4">
                {WIX_FIT.outgrown.map((row) => (
                  <li key={row} className="flex gap-3 text-sm leading-relaxed text-navy-foreground/85">
                    <span aria-hidden className="mt-0.5 font-black text-ember">
                      ↗
                    </span>
                    {row}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-relaxed text-navy-foreground/70">
                In that case we say so, and move you to the right stack — our{" "}
                <Link to="/hire-wordpress-developers" className="font-bold text-ember hover:underline">
                  WordPress developers
                </Link>{" "}
                for content-heavy sites, or{" "}
                <Link to="/hire-shopify-developers" className="font-bold text-ember hover:underline">
                  Shopify developers
                </Link>{" "}
                for serious catalogues.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HowToHire() {
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
            How Hiring Works
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.2rem]">
            From first call to first published section in under a week.
          </h2>
        </Reveal>

        <ol className="relative mt-12 space-y-6 lg:space-y-0">
          <span aria-hidden className="absolute left-[19px] top-2 bottom-2 w-px bg-white/15 lg:left-1/2" />
          {WIX_STEPS.map((step, i) => (
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
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
              Start with a Free Consultation
            </a>
            <p className="text-sm text-navy-foreground/65">
              No lock-in — cancel a dedicated Wix developer with 15 days' notice.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section id="numbers" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            What You Can Count On
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
            The commitments behind every Wix engagement.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WIX_OUTCOMES.map((item, i) => (
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
    <section id="why" className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why ACSIUS
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
            Hire Wix Developers India without the usual freelancer risk.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WIX_WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 font-display text-sm font-black text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Who We Build Wix Sites For
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
            Sector context, not a stock template.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-10 md:grid-cols-2">
          {WIX_INDUSTRIES.map((item, i) => (
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

/** Interlinking band to related ACSIUS services. */
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
            Where Wix Fits In
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.2rem]">
            One studio for the whole web stack.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {WIX_NEXT.map((item, i) => (
            <Reveal key={item.href} delay={i * 80}>
              <Link
                to={item.href}
                className="group flex h-full flex-col rounded-[26px] border border-white/12 bg-white/[0.05] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/40"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-ember">
                  {item.label}
                </span>
                <h3 className="mt-3 font-display text-2xl font-extrabold leading-snug">
                  {item.title}
                </h3>
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
              <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
                Hire a Wix Developer, answered.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Still unsure? Send us your Wix URL and we'll tell you what we would fix first and
                what it would take.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta mt-7 inline-flex px-7 py-3.5"
              >
                Message a Wix Lead
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {WIX_FAQS.map((faq, index) => {
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

export function WixDevPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Models />
      <Skills />
      <Fit />
      <HowToHire />
      <Numbers />
      <Why />
      <Industries />
      <NextSteps />
      <Faqs />
    </>
  );
}
