import { useState } from "react";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { CONTACT, AWARDS } from "@/lib/site";
// import founderPhoto from "@/assets/arun-singh-founder.jpg.asset.json";
import founderPhoto from "@/assets/images/arun-singh-founder.png";
import {
  ABOUT_FAQS,
  ABOUT_HERO,
  ABOUT_STORY,
  ABOUT_TEAM,
  ABOUT_VALUES,
  ABOUT_WHY,
  CORE_TEAM,
  FOUNDER,
} from "@/lib/about";

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
              {ABOUT_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              {ABOUT_HERO.h1.map((line, i) => (
                <span key={line} className="block">
                  {i === 0 ? <span className="text-ember">{line}</span> : line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {ABOUT_HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-navy-foreground/65">
              {ABOUT_HERO.support}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919891764802"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta px-7 py-3.5"
              >
                Talk to our team
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Call {CONTACT.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {ABOUT_HERO.stats.map((stat) => (
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
          <div ref={ref} className="relative mx-auto w-full max-w-[440px]">
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
              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-lift backdrop-blur">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-ember">
                  Delivery model
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Discovery call — 30 minutes, no pitch deck",
                    "Written scope, milestones and cost in 48 hours",
                    "Weekly sprint demos with a named lead",
                    "Performance & accessibility sign-off before launch",
                    "Care plan, analytics and CRO after go-live",
                  ].map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-navy/40 px-4 py-3 text-sm text-navy-foreground/85"
                    >
                      <span
                        aria-hidden
                        className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-black text-primary-foreground"
                      >
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */
function Founder() {
  return (
    <section id="founder" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Leadership
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Founder-led since day one.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <figure className="relative mx-auto w-full max-w-[360px]">
              <span
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[36px] bg-ember/15 blur-2xl"
              />
              <span
                aria-hidden
                className="absolute -left-4 -top-4 h-24 w-24 rounded-[28px] border-2 border-ember/50"
              />
              <div className="relative overflow-hidden rounded-[32px] border border-line bg-navy shadow-lift">
                <img
                  src={founderPhoto}
                  alt="Mr. Arun Singh, Founder and CEO of ACSIUS Technologies"
                  width={720}
                  height={860}
                  loading="lazy"
                  className="aspect-[4/5] w-full scale-[1.02] object-cover object-top contrast-[1.06] saturate-[0.92] transition-transform duration-700 hover:scale-[1.06]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,oklch(0.22_0.05_255/0.78),transparent_58%)]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-xl font-extrabold text-navy-foreground">
                    {FOUNDER.name}
                  </p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-ember">
                    {FOUNDER.role}
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[32px] border border-line bg-card p-8 shadow-soft lg:p-11">
              <p className="font-display text-xl font-bold leading-snug text-foreground lg:text-2xl">
                <span aria-hidden className="mr-2 text-ember">
                  “
                </span>
                {FOUNDER.quote}
              </p>
              <div className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {FOUNDER.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <dl className="mt-9 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-3">
                {FOUNDER.signals.map((s) => (
                  <div key={s.k} className="bg-card p-5">
                    <dt className="font-display text-2xl font-extrabold text-ember">{s.k}</dt>
                    <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Core Team ---------- */
function CoreTeam() {
  return (
    <section id="team" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Our Core Team
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Meet the core team behind every ACSIUS project.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A senior, in-house leadership team that stays close to delivery — not a sales layer
              that disappears after kickoff.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CORE_TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 60} className="h-full">
              <div className="group h-full overflow-hidden rounded-[28px] border border-line bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      width={512}
                      height={640}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-navy px-4 text-center">
                      <span
                        aria-hidden
                        className="grid h-16 w-16 place-items-center rounded-full border border-navy-foreground/20 bg-navy-foreground/5 font-display text-lg font-extrabold text-ember"
                      >
                        {member.name
                          .replace(/^Md\.\s*/, "")
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-navy-foreground/60">
                        Photo coming soon
                      </p>
                    </div>
                  )}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,oklch(0.22_0.05_255/0.72),transparent_55%)]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-lg font-extrabold text-navy-foreground">
                      {member.name}
                    </p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-ember">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={CORE_TEAM.length * 60} className="h-full">
            <a
              href="/career"
              className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-[28px] border border-dashed border-line bg-card p-6 text-center shadow-soft transition-all duration-500 hover:border-ember hover:bg-mist hover:shadow-lift"
            >
              <span
                aria-hidden
                className="grid h-16 w-16 place-items-center rounded-full bg-navy text-2xl text-ember transition-transform duration-500 group-hover:scale-110"
              >
                +
              </span>
              <p className="mt-5 font-display text-lg font-extrabold text-foreground">
                Join our team
              </p>
              <p className="mt-2 max-w-[24ch] text-sm leading-relaxed text-muted-foreground">
                We are always looking for designers, engineers and growth minds.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ember">
                Send your profile
                <span aria-hidden>→</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Story (horizontal wavy timeline) ---------- */
function Story() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <svg
        aria-hidden
        viewBox="0 0 1200 260"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[260px] w-full -translate-y-1/2 opacity-40"
      >
        <path
          d="M0 170 C 150 40, 300 40, 450 150 S 750 260, 900 130 S 1100 30, 1200 110"
          fill="none"
          stroke="oklch(0.71 0.17 52)"
          strokeWidth="1.5"
          strokeDasharray="7 9"
        />
      </svg>
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            Our story
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.3rem]">
            Fifteen years, one direction.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ABOUT_STORY.map((item, i) => (
            <Reveal key={item.year} delay={i * 80} className="h-full">
              <li
                className={`h-full rounded-[26px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-transform duration-500 hover:-translate-y-1 ${
                  i % 2 === 1 ? "lg:translate-y-8" : ""
                }`}
              >
                <span className="font-display text-2xl font-extrabold text-ember">{item.year}</span>
                <h3 className="mt-3 font-display text-base font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Values ---------- */
function Values() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              How we work
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Six rules we do not negotiate on.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              These are the commitments clients hold us to — printed in every proposal we send.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT_VALUES.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="h-full">
              <div className="group h-full bg-card p-7 transition-colors duration-500 hover:bg-mist">
                <span
                  aria-hidden
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-mist text-lg text-ember transition-colors duration-500 group-hover:bg-navy group-hover:text-ember"
                >
                  {item.icon}
                </span>
                <h3 className="mt-5 font-display text-base font-extrabold text-foreground">
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

/* ---------- Team + awards ---------- */
function Team() {
  const [active, setActive] = useState(0);
  const unit = ABOUT_TEAM[active] ?? ABOUT_TEAM[0]!;
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            The team
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Forty-plus specialists. All in-house.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[28px] border border-line bg-card p-3 shadow-soft">
              {ABOUT_TEAM.map((item, i) => {
                const on = active === i;
                return (
                  <button
                    key={item.unit}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                      on
                        ? "bg-navy text-navy-foreground shadow-lift"
                        : "text-muted-foreground hover:bg-mist hover:text-foreground"
                    }`}
                  >
                    <span className="font-display text-sm font-extrabold">{item.unit}</span>
                    <span
                      className={`text-xs font-black uppercase tracking-[0.12em] ${on ? "text-ember" : "text-muted-foreground"}`}
                    >
                      {item.size}
                    </span>
                  </button>
                );
              })}
              <div
                key={unit.unit}
                className="m-1 mt-2 animate-[fadeUp_0.5s_ease-out_both] rounded-2xl bg-mist p-5"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                  What this team owns
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{unit.detail}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-[28px] border border-line bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                Awards, partnerships & certifications
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Recognition earned through delivery, not marketing budgets.
              </p>
              <ul className="mt-7 grid gap-3">
                {AWARDS.map((award, index) => (
                  <li
                    key={award.title}
                    className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy font-display text-xs font-extrabold text-ember">
                      0{index + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-display text-sm font-bold text-foreground">
                        {award.title}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {award.note}
                      </span>
                    </span>
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
    <section id="why" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why clients stay
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
            Predictable delivery, in writing.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_WHY.map((item, i) => (
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
    <section id="faq" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                FAQs
              </p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                About ACSIUS, answered straight.
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
                Want to meet the team first? We are happy to introduce the people who would work on
                your project before you commit to anything.
              </p>
              <a
                href="https://wa.me/919891764802"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta mt-8 inline-flex px-7 py-3.5"
              >
                Book a discovery call
              </a>
            </Reveal>
          </div>

          <div className="space-y-3">
            {ABOUT_FAQS.map((faq, index) => {
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

export function AboutPage() {
  return (
    <>
      <Hero />
      <Founder />
      <CoreTeam />
      <Story />
      <Values />
      <Team />
      <Why />
      <Faqs />
    </>
  );
}
