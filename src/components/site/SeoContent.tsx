import { AWARDS } from "@/lib/site";

const FAQS = [
  {
    q: "What web design services in India does ACSIUS offer?",
    a: "Website design, UI/UX design, responsive website development, WordPress, Shopify and Magento ecommerce development, Laravel and React web applications, plus technical SEO — delivered from New Delhi to clients in 35+ countries.",
  },
  {
    q: "How much does website development in India cost?",
    a: "Marketing websites are quoted as a fixed scope package; ecommerce stores and custom web applications are priced after a discovery call. Every proposal lists scope, milestones and timelines in writing before work starts.",
  },
  {
    q: "How long does it take to design and develop a website?",
    a: "A marketing website usually takes 4–8 weeks from discovery to launch. Ecommerce and custom web application projects typically run 8–16 weeks depending on integrations and content volume.",
  },
  {
    q: "Why choose ACSIUS as your website development company in India?",
    a: "Since 2010 we have delivered 3000+ projects with a named delivery lead, sprint demos, Core Web Vitals budgets enforced before launch, SEO-ready markup and structured data, and post-launch care plans.",
  },
];
import { Reveal } from "@/components/motion";

export function SeoContent() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Why businesses choose ACSIUS
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.2rem]">
              Website designing and development company in India, built around outcomes.
            </h2>

            <div className="mt-7 max-w-[68ch] space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                ACSIUS Technologies is a New Delhi–based website designing company in India,
                providing web design services and website development services in India for
                organisations that need more than a brochure site. Since 2010 our designers and engineers have delivered over 500
                projects — from responsive website design for growing startups to custom web
                development and enterprise platforms for teams across healthcare, education,
                finance, manufacturing and retail.
              </p>
              <p>
                Every engagement starts with the commercial question: what should this website
                actually achieve? From there we shape UI UX design around real user journeys, then
                build on the platform that fits — WordPress development for content-led marketing
                sites, Shopify and Magento for ecommerce website development, and Laravel, React or
                Node.js for web application development and custom software development.
              </p>
              <p>
                Performance and visibility are not an afterthought. We deliver SEO-friendly website
                development with semantic markup, structured data, sensible information
                architecture and Core Web Vitals budgets enforced before launch, so your pages are
                fast for people and legible to search engines. After go-live, care plans, analytics
                and CRO keep the site improving instead of quietly ageing.
              </p>
              <p>
                Whether you are replacing a slow legacy site, launching a new product, or planning a
                full digital transformation programme, you get a named delivery lead, transparent
                sprints and engineers who will explain every technical decision in plain language.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[32px] border border-line bg-mist/60 p-8 shadow-soft">
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
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand font-display text-xs font-extrabold text-primary-foreground">
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

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-extrabold text-foreground lg:text-3xl">
              Web design and website development services in India — FAQs
            </h3>
          </Reveal>
          <dl className="mt-8 grid gap-4 lg:grid-cols-2">
            {FAQS.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 80}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 shadow-soft">
                  <dt className="font-display text-base font-bold text-foreground">{faq.q}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
