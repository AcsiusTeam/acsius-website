import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { CONTACT } from "@/lib/site";
import { SeoEngineDemo } from "@/components/site/SeoEngineDemo";
import {
  SEO_APPROACH,
  SEO_ENGINE,
  SEO_FAQS,
  SEO_HERO,
  SEO_INDUSTRIES,
  SEO_REASONS,
  SEO_SERVICES,
  SEO_STATS,
  SEO_STEPS,
  SEO_TRUST,
} from "@/lib/seo-services";

function HeroPanel() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[560px]">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 30% 25%, oklch(0.62 0.11 250 / 0.35), transparent 70%), radial-gradient(40% 40% at 75% 80%, oklch(0.71 0.17 52 / 0.32), transparent 70%)",
        }}
      />
      <div
        className="relative rounded-[28px] border border-white/12 bg-white/[0.06] p-5 shadow-lift backdrop-blur transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0) rotateX(${offset.y * -2}deg) rotateY(${offset.x * 2}deg)`,
        }}
      >
        <p className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-navy-foreground/70">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          What we optimise
        </p>
        <ul className="mt-4 grid gap-2">
          {SEO_SERVICES.map((service, index) => (
            <li
              key={service.name}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-ember/50"
            >
              <span className="font-display text-xs font-extrabold text-ember">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold text-navy-foreground/85">{service.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SeoHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-32 pb-16 text-navy-foreground lg:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 12% 8%, oklch(0.62 0.11 250 / 0.35), transparent 70%), radial-gradient(45% 55% at 88% 4%, oklch(0.71 0.17 52 / 0.24), transparent 70%), radial-gradient(60% 50% at 60% 100%, oklch(0.62 0.11 250 / 0.16), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full opacity-70 blur-3xl"
        style={{ background: "oklch(0.62 0.11 250 / 0.32)" }}
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full opacity-70 blur-3xl"
        style={{ animationDelay: "1.6s", background: "oklch(0.71 0.17 52 / 0.26)" }}
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <Reveal>
              <p className="eyebrow text-navy-foreground/75">
                <span className="h-px w-8 bg-ember" />
                {SEO_HERO.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.03] sm:text-5xl lg:text-[3.9rem]">
                {SEO_HERO.h1[0]}
                <br />
                {SEO_HERO.h1[1]}
                <br />
                <span className="text-ember">{SEO_HERO.h1[2]}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/75">
                {SEO_HERO.lead}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-foreground/60">
                {SEO_HERO.support}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-4 text-base">
                  Get a Free SEO Audit
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline group px-7 py-4 text-base"
                >
                  Talk to Our Experts
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:pl-6">
            <HeroPanel />
          </Reveal>
        </div>

        <div className="mt-16 rounded-[28px] border border-white/12 bg-white/5 p-2 shadow-soft backdrop-blur">
          <dl className="grid grid-cols-2 divide-white/12 lg:grid-cols-4 lg:divide-x">
            {SEO_STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 90} className="px-6 py-7 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-extrabold tracking-tight lg:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-2 block text-sm font-semibold uppercase tracking-[0.14em] text-navy-foreground/60">
                    {stat.label}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-seo" className="py-24 lg:py-32">
      <div className="container-x grid items-stretch gap-14 lg:grid-cols-2">
        <Reveal className="lg:max-w-[58ch]">
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why choose our SEO services
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.1rem]">
            Building trust, authority and long-term partnerships.
          </h2>
          <div className="mt-7 max-w-[64ch] space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              SEO is a competitive environment, and outcomes speak louder than promises. Businesses
              choose ACSIUS because we bring years of experience and measurable results. We do not
              believe in shortcuts — our plans are geared towards sustainable growth that search
              engines reward and audiences trust.
            </p>
            <p>
              Our work is built on E-E-A-T: experience, expertise, authoritativeness and
              trustworthiness. From deep keyword research through to technical audits, every action
              is informed by industry knowledge and mapped to a clear outcome.
            </p>
            <p>
              By combining data-driven strategies with continuous optimisation, we focus on improving
              rankings, attracting qualified traffic, and turning search visibility into meaningful
              business growth. We continuously monitor performance, adapt to search engine changes,
              and refine our approach to ensure your SEO strategy keeps delivering long-term value
              and stays aligned with your business goals.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="h-full w-full lg:ml-auto lg:max-w-[540px] lg:justify-self-end">
          <div className="flex h-full flex-col rounded-[32px] border border-line bg-mist/60 p-8 shadow-soft">
            <h3 className="font-display text-xl font-extrabold text-foreground">
              Your business isn&apos;t generic — so why should your SEO be?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We blend innovation and integrity so your brand stands out and stays ahead.
            </p>
            <ul className="mt-7 grid flex-1 gap-3 content-start">
              {SEO_APPROACH.map((item, index) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-line bg-card p-5 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <p className="flex items-center justify-start gap-3 font-display text-sm font-bold text-foreground">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary font-display text-xs font-extrabold text-primary-foreground">
                      0{index + 1}
                    </span>
                    <span>{item.title}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Reasons() {
  return (
    <section className="border-y border-line bg-mist/50 py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why your business needs SEO
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.1rem]">
            Ranking on Google isn&apos;t luck. It&apos;s a system.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Most customers never scroll past the first page. If your business isn&apos;t there,
            potential buyers simply don&apos;t see you — which is exactly the gap SEO closes.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SEO_REASONS.map((reason, index) => (
            <Reveal as="li" key={reason.title} delay={index * 70}>
              <div className="group h-full rounded-3xl border border-line bg-card p-6 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-lift">
                <span className="font-display text-sm font-extrabold text-ember">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="seo-services" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Our organic SEO services
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.1rem]">
            Data-driven strategies, tailored to your business.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A complete range of organic SEO services designed to maximise visibility, attract
            qualified leads and improve your return on investment.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SEO_SERVICES.map((service, index) => (
            <Reveal key={service.name} delay={index * 60}>
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-card p-7 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <h3 className="font-display text-xl font-extrabold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
                <a
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-ember"
                >
                  {service.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-base font-semibold text-foreground">
            Every service we offer is geared towards one thing — your long-term success.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-24 text-navy-foreground lg:py-32">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-ember">
            <span className="h-px w-8 bg-ember" />
            How SEO works with us
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.1rem]">
            A step-by-step path to growth, backed by transparency.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-foreground/70">
            SEO isn&apos;t magic — it&apos;s a structured system. Businesses grow faster when they
            understand the process, so we walk you through every stage.
          </p>
        </Reveal>

        <div className="mt-12 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {SEO_STEPS.map((step, index) => (
            <Reveal
              key={step.step}
              delay={index * 90}
              className="relative min-w-[280px] snap-start lg:min-w-0"
            >
              {index < SEO_STEPS.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-ember/45 bg-navy text-sm font-black text-ember lg:grid"
                >
                  →
                </span>
              ) : null}
              <div className="flex h-full flex-col rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur transition-colors hover:border-ember/45">
                <p className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-ember">
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-ember/50 bg-ember/12 font-display text-xs">
                    {index + 1}
                  </span>
                  {step.step}
                </p>
                <h3 className="mt-3 font-display text-lg font-extrabold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">{step.intro}</p>
                <ul className="mt-5 grid flex-1 gap-2.5">
                  {step.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-navy-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-white/12 pt-4 text-xs leading-relaxed text-navy-foreground/60">
                  {step.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-16">
          <div className="grid gap-8 rounded-[32px] border border-white/12 bg-white/[0.04] p-6 backdrop-blur lg:p-8">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-ember">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
                {SEO_ENGINE.eyebrow}
              </p>
              <h3 className="mt-4 font-display text-2xl font-extrabold lg:text-3xl">
                {SEO_ENGINE.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
                {SEO_ENGINE.body}
              </p>
            </div>
            <SeoEngineDemo />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Industries we serve
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.1rem]">
            Can SEO really work across every sector?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every industry has its own challenges, audiences and goals. Our strategies are
            industry-focused, so businesses rank better, attract the right traffic and see
            quantifiable growth.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SEO_INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.name} delay={index * 70}>
              <article className="h-full rounded-3xl border border-line bg-card p-7 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-lift">
                <h3 className="font-display text-lg font-extrabold text-foreground">
                  {industry.name} SEO
                </h3>
                <p className="mt-2 text-sm font-semibold text-primary">{industry.question}</p>
                <ul className="mt-5 grid gap-2.5">
                  {industry.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-y border-line bg-mist/50 py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Why businesses stay with us
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.1rem]">
            What makes clients stay with ACSIUS for long-term SEO?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Businesses don&apos;t just want rankings — they want visibility, traffic and consistent
            growth. Here is why clients keep choosing us as their growth partner.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SEO_TRUST.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="h-full rounded-3xl border border-line bg-card p-6 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary font-display text-xs font-extrabold text-primary-foreground">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="/contact" className="btn-cta px-7 py-4 text-base">
              Partner with ACSIUS
            </a>
            <a href={CONTACT.phoneHref} className="btn-outline px-7 py-4 text-base">
              {CONTACT.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section id="seo-faqs" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            FAQs about SEO services in India
          </p>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] text-foreground lg:text-[2.6rem]">
            Clear answers to the questions we hear most.
          </h2>
        </Reveal>

        <dl className="mt-10 grid gap-4 lg:grid-cols-2">
          {SEO_FAQS.map((faq, index) => (
            <Reveal key={faq.q} delay={index * 60}>
              <div className="h-full rounded-2xl border border-line bg-card p-6 shadow-soft">
                <dt className="font-display text-base font-bold text-foreground">{faq.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 55% at 50% 110%, oklch(0.71 0.17 52 / 0.3), transparent 70%), radial-gradient(40% 50% at 10% -10%, oklch(0.62 0.11 250 / 0.35), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-ember">
            <span className="h-px w-8 bg-ember" />
            Partner with a trusted SEO team
          </p>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] lg:text-[3.4rem]">
            Your business deserves more than promises. It deserves results.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/75">
            We combine expertise, innovation and transparency to help you climb search rankings and
            achieve real business growth.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta px-8 py-4 text-base">
              Request a Free SEO Consultation
            </a>
            <a
              href={CONTACT.phoneHref}
              className="rounded-full border border-navy-foreground/25 px-8 py-4 text-base font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
            >
              Get Started Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SeoServicesPage() {
  return (
    <>
      <SeoHero />
      <WhyUs />
      <Reasons />
      <Services />
      <Process />
      <Industries />
      <Trust />
      <Faqs />
      <FinalCta />
    </>
  );
}
