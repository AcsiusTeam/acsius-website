import { INDUSTRIES } from "@/lib/site";
import { Reveal } from "@/components/motion";

function IndustryIllustration({ index }: { index: number }) {
  const shapes = [
    <>
      <path d="M20 10v20M10 20h20" />
      <circle cx="20" cy="20" r="15" />
    </>,
    <>
      <path d="M4 14l16-8 16 8-16 8z" />
      <path d="M12 18v10c0 2 4 4 8 4s8-2 8-4V18" />
    </>,
    <>
      <path d="M6 20l14-12 14 12" />
      <path d="M10 20v14h20V20" />
      <path d="M18 34v-8h4v8" />
    </>,
    <>
      <path d="M6 34V16l8-4v22" />
      <path d="M14 34V12l10 6v16" />
      <path d="M24 34V22l10 4v8" />
    </>,
    <>
      <path d="M8 14h24l-2 20H10z" />
      <path d="M15 14a5 5 0 0110 0" />
    </>,
    <>
      <path d="M8 32V14M16 32V8M24 32V18M32 32V12" />
      <path d="M4 36h32" />
    </>,
    <>
      <path d="M4 24l32-12-6 18-10-4z" />
      <path d="M20 26v8l5-5" />
    </>,
    <>
      <path d="M20 34s-12-7-12-15a6 6 0 0112-3 6 6 0 0112 3c0 8-12 15-12 15z" />
    </>,
    <>
      <path d="M10 34V12h20v22" />
      <path d="M16 20h8M16 26h8M6 34h28" />
    </>,
  ];

  return (
    <svg
      viewBox="0 0 40 40"
      className="h-10 w-10 text-primary transition-transform duration-500 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {shapes[index % shapes.length]}
    </svg>
  );
}

export function Industries() {
  return (
    <section id="industries" className="bg-mist/70 py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" />
            Industries We Serve
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
            Domain context, built in from day one.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.name} as="li" delay={index * 60}>
              <a
                href="https://wa.me/919891764802"
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between gap-6 rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <IndustryIllustration index={index} />
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {industry.line}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Talk to a specialist →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
