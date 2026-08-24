import { useState } from "react";
import { TESTIMONIALS, YOUTUBE_CHANNEL } from "@/lib/site";
import { Reveal } from "@/components/motion";

export function Testimonials() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(50% 50% at 85% 10%, oklch(0.71 0.17 52 / 0.18), transparent 70%), radial-gradient(50% 60% at 10% 90%, oklch(0.44 0.13 253 / 0.35), transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Client Stories
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] lg:text-[3.4rem]">
              Hear it from the people who signed off the invoice.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              Real founders and directors on what changed after launch — filmed at their offices.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => {
            const isPlaying = playing === index;
            return (
              <Reveal key={item.name} delay={index * 100}>
                <article className="surface-glass-dark group h-full overflow-hidden rounded-[28px] transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="relative aspect-video overflow-hidden bg-navy">
                    {isPlaying ? (
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`}
                        title={`Client story from ${item.name}, ${item.company}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <img
                          src={`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`}
                          alt={`Video testimonial thumbnail — ${item.name}, ${item.role} at ${item.company}`}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span aria-hidden className="absolute inset-0 bg-navy/35" />
                        <button
                          type="button"
                          onClick={() => setPlaying(index)}
                          aria-label={`Play video testimonial from ${item.name}, ${item.company}`}
                          className="absolute inset-0 grid place-items-center"
                        >
                          <span className="grid h-16 w-16 place-items-center rounded-full bg-navy-foreground/95 shadow-lift transition-transform duration-300 group-hover:scale-110">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5 fill-navy">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </button>
                        <span className="absolute bottom-3 right-3 rounded-md bg-navy/85 px-2 py-1 text-[11px] font-bold">
                          {item.duration}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-brand font-display text-sm font-extrabold text-primary-foreground">
                        {item.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate font-display text-sm font-bold">{item.name}</p>
                        <p className="truncate text-xs text-navy-foreground/60">
                          {item.role} · {item.company}
                        </p>
                      </div>
                    </div>

                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta px-7 py-4 text-base"
          >
            More Stories
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
