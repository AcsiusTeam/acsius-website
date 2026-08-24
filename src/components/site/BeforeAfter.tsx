import { useRef, useState } from "react";
import { Reveal } from "@/components/motion";
import { CASES } from "@/lib/site";
import { WD_BEFORE_AFTER } from "@/lib/web-design";

export function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(46);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const item = WD_BEFORE_AFTER[index]!;
  const shot = CASES.find((c) => c.site === item.site);

  const updateFromClientX = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(97, Math.max(3, next)));
  };

  return (
    <section id="before-after" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Before & After
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3.4rem]">
              Drag the handle. See what a redesign actually changes.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Left is the dated structure we replace — cramped type, no hierarchy, no clear action.
              Right is the live redesigned website.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {WD_BEFORE_AFTER.map((entry, i) => (
              <button
                key={entry.site}
                type="button"
                onClick={() => {
                  setIndex(i);
                  setPosition(46);
                }}
                aria-pressed={i === index}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  i === index
                    ? "border-transparent bg-primary text-primary-foreground shadow-lift"
                    : "border-line bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/40"
                }`}
              >
                {entry.client}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-start">
          <Reveal>
            <div className="rounded-[28px] border border-line bg-card p-3 shadow-soft">
              <div className="mb-2.5 flex items-center gap-2 px-2 pt-1">
                <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="ml-2 truncate rounded-full bg-mist px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  {item.site}
                </span>
              </div>

              <div
                ref={frameRef}
                onPointerDown={(event) => {
                  dragging.current = true;
                  (event.target as HTMLElement).setPointerCapture?.(event.pointerId);
                  updateFromClientX(event.clientX);
                }}
                onPointerMove={(event) => {
                  if (!dragging.current) return;
                  updateFromClientX(event.clientX);
                }}
                onPointerUp={() => (dragging.current = false)}
                onPointerLeave={() => (dragging.current = false)}
                className="relative aspect-[16/10] cursor-ew-resize touch-none select-none overflow-hidden rounded-[20px] border border-line bg-mist"
              >
                {/* after — live redesigned site */}
                {shot ? (
                  <img
                    src={shot.image}
                    alt={`${item.client} website after redesign by ACSIUS`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                ) : null}

                {/* before — original website screenshot */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${position}%` }}
                >
                  <img
                    src={item.beforeImage}
                    alt={`${item.client} website before redesign`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top [filter:grayscale(0.85)]"
                    style={{ width: `${10000 / Math.max(position, 3)}%`, maxWidth: "none" }}
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-navy/85 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-navy-foreground">
                    Before
                  </span>
                </div>


                <span className="absolute bottom-3 right-3 rounded-full bg-ember px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-primary-foreground">
                  After
                </span>

                {/* handle */}
                <div
                  className="pointer-events-none absolute inset-y-0 w-0.5 bg-ember"
                  style={{ left: `${position}%` }}
                >
                  <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ember text-sm font-black text-primary-foreground shadow-ember">
                    ⇆
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={3}
                max={97}
                value={Math.round(position)}
                onChange={(event) => setPosition(Number(event.target.value))}
                aria-label={`Compare before and after design for ${item.client}`}
                className="mt-3 w-full accent-[oklch(0.71_0.17_52)]"
              />
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={80}>
              <div className="rounded-[26px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Before
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  What was holding it back
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.beforeNote}
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-[26px] border border-primary/25 bg-primary/5 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                  After · {item.platform}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  What we designed instead
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.afterNote}
                </p>
                <a
                  href={`https://${item.site}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary"
                >
                  Visit the live site →
                </a>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Both panels are real screenshots: the left is the client's original website before
                our redesign, the right is the live redesigned website.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
