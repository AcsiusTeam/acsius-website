import { useState } from "react";
import { CASES } from "@/lib/site";
import { Reveal } from "@/components/motion";

function SiteShot({ image, client, url }: { image: string; client: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-2xl border border-line bg-card shadow-lift transition-transform duration-500 group-hover:-translate-y-1.5"
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-mist px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ember/70" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-2 truncate rounded-full bg-card px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </span>
      </div>
      <img
        src={image}
        alt={`${client} website homepage designed and developed by ACSIUS`}
        loading="lazy"
        className="h-auto w-full"
      />
    </a>
  );
}

export function Portfolio() {
  const [index, setIndex] = useState(0);
  const total = CASES.length;
  const go = (next: number) => setIndex(((next % total) + total) % total);

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Our Work
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              Real websites. Real clients.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Request the full portfolio →
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-[32px]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {CASES.map((item) => (
                <div key={item.site} className="w-full shrink-0 px-0.5">
                  <article className="group grid h-full gap-10 rounded-[32px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:shadow-lift lg:grid-cols-[1fr_1.1fr] lg:items-center lg:p-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-mist px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                          {item.industry}
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground">
                          {item.client}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-2xl font-extrabold leading-snug text-foreground lg:text-3xl">
                        {item.site}
                      </h3>

                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {item.summary}
                      </p>

                      <ul className="mt-6 space-y-2.5 border-l-2 border-line pl-5">
                        {item.highlights.map((point) => (
                          <li
                            key={point}
                            className="text-sm font-semibold leading-relaxed text-foreground"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>

                      {item.stats && (
                        <div className="mt-6">
                          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                            {item.stats.map((stat) => (
                              <div
                                key={stat.label}
                                className="rounded-2xl border border-line bg-mist px-3 py-3"
                              >
                                <p className="font-display text-xl font-extrabold text-primary">
                                  {stat.value}
                                </p>
                                <p className="mt-1 text-[11px] font-bold leading-tight text-foreground">
                                  {stat.label}
                                </p>
                                <p className="mt-0.5 text-[11px] font-semibold text-muted-foreground">
                                  {stat.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                          {item.statsNote && (
                            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                              {item.statsNote}
                            </p>
                          )}
                        </div>
                      )}

                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {item.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-foreground"
                          >
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
                          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                            →
                          </span>
                        </a>
                      </div>
                    </div>

                    <div>
                      <SiteShot image={item.image} client={item.client} url={item.url} />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {total > 1 && (
            <div className="mt-8 flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous case study"
                  onClick={() => go(index - 1)}
                  className="grid h-12 w-12 place-items-center rounded-full border border-line bg-card text-lg font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next case study"
                  onClick={() => go(index + 1)}
                  className="grid h-12 w-12 place-items-center rounded-full border border-line bg-card text-lg font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  →
                </button>
              </div>

              <div className="flex items-center gap-2">
                {CASES.map((item, i) => (
                  <button
                    key={item.site}
                    type="button"
                    aria-label={`Go to ${item.client}`}
                    aria-current={i === index}
                    onClick={() => go(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-ember" : "w-2 bg-border hover:bg-primary"
                    }`}
                  />
                ))}
              </div>

              <p className="hidden text-sm font-semibold text-muted-foreground sm:block">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
