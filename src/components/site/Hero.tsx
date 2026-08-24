import { METRICS } from "@/lib/site";
import { Counter, Reveal, usePointerParallax } from "@/components/motion";
import { WpAdminDemo } from "@/components/site/WpAdminDemo";
import { ShopifyDemo } from "@/components/site/ShopifyDemo";
import { ReactCodeDemo } from "@/components/site/ReactCodeDemo";
import { SeoSerpDemo } from "@/components/site/SeoSerpDemo";
import { SalesGraphDemo } from "@/components/site/SalesGraphDemo";

function DemoBox({
  label,
  children,
  className = "",
  bodyHeight = 180,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  bodyHeight?: number;
}) {
  return (
    <div className={`rounded-[20px] border border-white/10 bg-white/5 p-2.5 ${className}`}>
      <p className="mb-2 flex items-center gap-1.5 px-1 text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/70">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
        {label}
      </p>
      <div className="overflow-hidden" style={{ height: bodyHeight }}>
        <div className="h-full [&>*]:h-full">{children}</div>
      </div>
    </div>
  );
}


function HeroVisual() {
  const { ref, offset } = usePointerParallax<HTMLDivElement>(1);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[600px]">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 30% 25%, oklch(0.62 0.11 250 / 0.35), transparent 70%), radial-gradient(40% 40% at 75% 80%, oklch(0.71 0.17 52 / 0.32), transparent 70%)",
        }}
      />

      <div
        className="relative rounded-[28px] border border-white/12 bg-white/[0.06] p-3 shadow-lift backdrop-blur transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${offset.x * -8}px, ${offset.y * -8}px, 0) rotateX(${offset.y * -2}deg) rotateY(${offset.x * 2}deg)`,
        }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <DemoBox label="WordPress" bodyHeight={172}>
            <WpAdminDemo />
          </DemoBox>
          <DemoBox label="Shopify" bodyHeight={172}>
            <ShopifyDemo />
          </DemoBox>
          <DemoBox label="React" bodyHeight={214}>
            <ReactCodeDemo />
          </DemoBox>
          <DemoBox label="SEO · Rankings" bodyHeight={214}>
            <SeoSerpDemo />
          </DemoBox>
          <DemoBox label="Revenue growth" bodyHeight={186} className="sm:col-span-2">
            <SalesGraphDemo />
          </DemoBox>

        </div>
      </div>
    </div>
  );
}


export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-32 pb-10 text-navy-foreground lg:pt-40"
    >
      {/* dark aurora background */}
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
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] w-full opacity-[0.35]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 520"
      >
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M-50 ${120 + i * 90} C 250 ${40 + i * 90}, 500 ${230 + i * 70}, 780 ${140 + i * 80} S 1100 ${60 + i * 90}, 1260 ${170 + i * 80}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.28"
            strokeWidth="1.5"
          />
        ))}
      </svg>


      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <Reveal>
              <p className="eyebrow text-navy-foreground/75">
                <span className="h-px w-8 bg-ember" />
                Web Design Services in India · Since 2010
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] text-navy-foreground sm:text-6xl lg:text-[4.2rem]">
                Website Designing &
                <br />
                Development Company
                <br />
                <span className="text-ember">in India.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/75">
                ACSIUS Technologies is a New Delhi–based website development company in India
                offering web design services, website development services, ecommerce stores and
                custom web applications — 3000+ projects delivered for clients in 35+ countries.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/919891764802"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cta px-7 py-4 text-base"
                >
                  Start Your Project
                </a>
                <a
                  href="#work"
                  className="btn-outline group px-7 py-4 text-base"
                >
                  View Our Work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-6 text-sm text-navy-foreground/65">
                Free 30-minute discovery call · No obligation · Response within 4 business hours
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:pl-6">
            <HeroVisual />
          </Reveal>
        </div>

        {/* trust metrics */}
        <div className="mt-20 rounded-[28px] border border-white/12 bg-white/5 p-2 shadow-soft backdrop-blur">
          <dl className="grid grid-cols-2 divide-white/12 lg:grid-cols-4 lg:divide-x">
            {METRICS.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 90} className="px-6 py-7 text-center">
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-extrabold tracking-tight text-navy-foreground lg:text-5xl">
                    <Counter value={metric.value} suffix={metric.suffix} />
                  </span>
                  <span className="mt-2 block text-sm font-semibold uppercase tracking-[0.14em] text-navy-foreground/60">
                    {metric.label}
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
