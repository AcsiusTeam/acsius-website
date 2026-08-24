import { Reveal } from "@/components/motion";

type CtaBandProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export function CtaBand({
  eyebrow = "Let's talk",
  heading = "Let's Build Something Extraordinary Together",
  body = "Tell us where your current website falls short. We'll come back with a clear plan, an honest timeline and a fixed budget range — usually within two working days.",
  primaryLabel = "Book a Free Consultation",
  secondaryLabel = "Get a Proposal",
  primaryHref = "mailto:info@acsius.com?subject=Book%20a%20Free%20Consultation",
  secondaryHref = "/contact",
}: CtaBandProps = {}) {

  return (
    <section className="relative overflow-hidden bg-gradient-navy py-24 text-navy-foreground lg:py-32">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 55% at 50% 110%, oklch(0.71 0.17 52 / 0.3), transparent 70%), radial-gradient(40% 50% at 10% -10%, oklch(0.62 0.11 250 / 0.35), transparent 70%)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 1200 200"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-30"
      >
        <path
          d="M0 140 C 250 40, 450 190, 700 90 S 1000 20, 1200 110"
          fill="none"
          stroke="oklch(0.71 0.17 52)"
          strokeWidth="2"
          strokeDasharray="220 40"
          className="animate-dash"
        />
        <path
          d="M0 90 C 220 180, 480 30, 720 130 S 1020 170, 1200 60"
          fill="none"
          stroke="oklch(0.62 0.11 250)"
          strokeWidth="2"
          strokeDasharray="180 60"
          className="animate-dash"
        />
      </svg>

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-ember">
            <span className="h-px w-8 bg-ember" />
            {eyebrow}
          </p>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] lg:text-6xl">
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/75">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={primaryHref} className="btn-cta px-8 py-4 text-base">
              {primaryLabel}
            </a>
            <a
              href={secondaryHref}
              className="rounded-full border border-navy-foreground/25 px-8 py-4 text-base font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
            >
              {secondaryLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
