import { TECH_LOGOS, type TechLogo } from "@/lib/site";

const TONE_CLASS: Record<TechLogo["tone"], string> = {
  brand: "text-primary",
  ember: "text-ember",
  navy: "text-navy",
};

function TechMark({ tech }: { tech: TechLogo }) {
  return (
    <li className="group flex shrink-0 items-center gap-3 rounded-2xl border border-transparent px-6 py-4 transition-colors hover:border-line hover:bg-card">
      <span
        className={`grid h-11 w-11 place-items-center rounded-xl bg-mist font-display text-sm font-black transition-colors duration-300 group-hover:bg-card ${TONE_CLASS[tech.tone]}`}
        aria-hidden
      >
        {tech.monogram}
      </span>
      <span className="whitespace-nowrap font-display text-base font-bold tracking-tight text-muted-foreground opacity-70 transition-all duration-300 group-hover:text-foreground group-hover:opacity-100">
        {tech.name}
      </span>
    </li>
  );
}

export function ClientMarquee() {
  return (
    <section aria-label="Technologies we work with" className="border-y border-line bg-mist/60 py-10">
      <div className="container-x">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
          Technologies our web design and development team works with
        </h2>
      </div>
      <div
        className="relative mt-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul className="animate-marquee flex w-max items-center hover:[animation-play-state:paused]">
          {[...TECH_LOGOS, ...TECH_LOGOS].map((tech, index) => (
            <TechMark key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </ul>
      </div>
    </section>
  );
}
