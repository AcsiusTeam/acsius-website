import { useState } from "react";
import { CASES, CONTACT } from "@/lib/site";
import { Reveal } from "@/components/motion";

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "wordpress", label: "WordPress" },
  { key: "shopify", label: "Shopify" },
  { key: "php", label: "PHP / Laravel" },
  { key: "wix", label: "WIX" },
  { key: "prestashop", label: "PrestaShop" },
  { key: "squarespace", label: "Squarespace" },
  { key: "webflow", label: "Webflow" },
  { key: "seo", label: "SEO" },
  { key: "landing", label: "Landing Page" },
];

const PROJECT_CATEGORIES: Record<string, string[]> = {
  "magictouch.ba": ["wordpress", "seo"],
  "troutflyfishingflieskenya.com": ["wordpress"],
  "beautysups.com": ["shopify"],
  "lititon.com.sg": ["wix"],
  "simbaadventures.com": ["php"],
  "mhmtuning.fr": ["prestashop"],
  "grandtoursports.com": ["shopify"],
  "bougroug.com": ["shopify"],
  "flywing.sg": ["php"],
  "loveskinfoodskincare.com": ["shopify"],
  "acraapluscpa.com": ["wordpress"],
  "nldisplays.com": ["squarespace", "seo"],
  "disar-reti.it": ["wordpress"],
  "evolve-nextgen.com": ["wordpress"],
  "theaird.com": ["webflow"],
  "redwoodcityfloristandballoons.com": ["shopify"],
  "sweettreatpharmacy.com": ["wordpress", "landing"],
  "langhauswartung.ch": ["wordpress", "landing"],
  "jkbima.com": ["wordpress"],
  "eliteecus.co.uk": ["wordpress", "seo"],
  "studiobound.sg": ["wordpress"],
  "dj-fischer-spezial.de": ["wix"],
  "greenroot.hk": ["shopify"],
  "samscare.fi": ["wix"],
  "lavyhair.com": ["seo"],
  "dyhair777.com": ["seo"],
  "curls.com": ["seo"],
  "japandeluxetours.com": ["seo"],
  "clayesmore.com": ["seo"],
  "thegazpacho.com": ["wordpress", "landing"],
};

function SiteShot({
  image,
  client,
  url,
}: {
  image: string;
  client: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/site block overflow-hidden rounded-2xl border border-line bg-card shadow-lift transition-transform duration-500 group-hover:-translate-y-1.5"
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-mist px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ember/70" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-2 truncate rounded-full bg-card px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`${client} website homepage designed and developed by ACSIUS`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </a>
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
            "radial-gradient(50% 55% at 78% 8%, oklch(0.71 0.17 52 / 0.26), transparent 70%), radial-gradient(60% 60% at 8% 20%, oklch(0.62 0.11 250 / 0.36), transparent 70%), radial-gradient(70% 55% at 55% 118%, oklch(0.62 0.11 250 / 0.22), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow justify-center text-ember">
              <span className="h-px w-8 bg-ember" />
              Our Work
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
              Websites and SEO results <span className="text-ember">built to perform.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-navy-foreground/80">
              A selection of live ACSIUS projects — from Shopify redesigns and WordPress ecommerce builds to ongoing SEO campaigns that move the needle.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta px-7 py-3.5"
              >
                Discuss Your Project
              </a>
              <a
                href="mailto:info@acsius.com"
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Email Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function projectKey(url: string) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

function ProjectCard({ item }: { item: (typeof CASES)[number] }) {
  const key = projectKey(item.url);
  const categories = PROJECT_CATEGORIES[key] ?? ["design", "development"];
  const categoryLabels: Record<string, string> = {
    wordpress: "WordPress",
    shopify: "Shopify",
    php: "PHP / Laravel",
    wix: "WIX",
    prestashop: "PrestaShop",
    squarespace: "Squarespace",
    webflow: "Webflow",
    seo: "SEO",
    landing: "Landing Page",
  };

  return (
    <article className="group grid h-full gap-8 rounded-[28px] border border-line bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift lg:grid-cols-[1fr_1.15fr] lg:items-center lg:p-8">
      <div className="order-2 lg:order-1">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-mist px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {item.industry}
          </span>
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
            >
              {categoryLabels[c as keyof typeof categoryLabels]}
            </span>
          ))}
        </div>

        <h3 className="mt-5 font-display text-2xl font-extrabold leading-snug text-foreground lg:text-3xl">
          {item.client}
        </h3>
        <p className="mt-1 text-sm font-semibold text-primary">{item.site}</p>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.summary}</p>

        <ul className="mt-6 space-y-2.5 border-l-2 border-line pl-5">
          {item.highlights.map((point) => (
            <li key={point} className="text-sm font-semibold leading-relaxed text-foreground">
              {point}
            </li>
          ))}
        </ul>

        {item.stats && (
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {item.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-line bg-mist px-3 py-3">
                  <p className="font-display text-xl font-extrabold text-primary">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-bold leading-tight text-foreground">{stat.label}</p>
                  <p className="mt-0.5 text-[11px] font-semibold text-muted-foreground">{stat.detail}</p>
                </div>
              ))}
            </div>
            {item.statsNote && (
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{item.statsNote}</p>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {item.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-foreground">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-xs font-bold text-ember">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            {item.status}
          </span>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary"
          >
            Visit live site
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <SiteShot
          image={item.image}
          client={item.client}
          url={item.url}
        />
      </div>
    </article>
  );
}

export function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = CASES.filter((item) => {
    const key = projectKey(item.url);
    const cats = PROJECT_CATEGORIES[key] ?? ["design", "development"];
    if (activeFilter === "all") return true;
    return cats.includes(activeFilter);
  });

  return (
    <>
      <Hero />

      <section id="work" className="py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-ember" />
                Featured Projects
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
                Filter by service area.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setActiveFilter(f.key)}
                    aria-pressed={activeFilter === f.key}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                      activeFilter === f.key
                        ? "bg-navy text-navy-foreground shadow-soft"
                        : "border border-line bg-card text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-14 space-y-10">
            {filtered.map((item) => (
              <Reveal key={item.site}>
                <ProjectCard item={item} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-14 rounded-2xl border border-line bg-card p-10 text-center">
              <p className="text-muted-foreground">No projects match this filter yet.</p>
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-ember/10 blur-[120px]"
        />
        <div className="container-x relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-ember">
                <span className="h-px w-8 bg-ember" />
                Start your project
              </p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] lg:text-[2.5rem]">
                Want a site or SEO campaign that shows up in a portfolio like this?
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-foreground/80">
                Tell us what you are building. We will scope it, design it, build it and optimise it — all under one roof in New Delhi.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta px-7 py-3.5"
                >
                  Talk on WhatsApp
                </a>
                <a
                  href="mailto:info@acsius.com"
                  className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
                >
                  Email Your Brief
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { metric: "3000+", label: "Projects delivered", detail: "Across 35+ countries" },
                  { metric: "90+", label: "Performance scores", detail: "Core Web Vitals tuned" },
                  { metric: "320%", label: "Avg. organic lift", detail: "SEO campaigns" },
                  { metric: "48h", label: "To a written estimate", detail: "After our first call" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/30 hover:bg-white/[0.07]"
                  >
                    <div className="font-display text-3xl font-extrabold text-ember">{card.metric}</div>
                    <h3 className="mt-3 font-display text-lg font-extrabold">{card.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{card.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
