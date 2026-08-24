import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.some((e) => e.isIntersecting) && setInView(true),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

const URLS = [
  { path: "/collections/running-shoes", state: "index", demand: "8.1k / mo" },
  { path: "/collections/running-shoes?color=red", state: "index", demand: "1.2k / mo" },
  { path: "/collections/running-shoes?sort=price", state: "block", demand: "no demand" },
  { path: "/collections/running-shoes?page=7", state: "canon", demand: "paginated" },
  { path: "/products/aero-trail-v3", state: "index", demand: "2.4k / mo" },
];

const STATE_STYLES: Record<string, { label: string; cls: string }> = {
  index: { label: "Index", cls: "bg-ember text-navy" },
  block: { label: "Noindex", cls: "bg-white/15 text-navy-foreground" },
  canon: { label: "Canonical", cls: "bg-blue-400/80 text-navy" },
};

/** Catalogue crawl-control panel — visual unique to the eCommerce SEO page. */
export function EcomSeoDemo() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % (URLS.length + 2)), 1100);
    return () => window.clearInterval(id);
  }, [inView]);

  const revenue = 4.2 + Math.min(step, URLS.length) * 0.6;

  return (
    <div
      ref={ref}
      className="rounded-[30px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur lg:p-7"
      role="img"
      aria-label="Animated e-commerce catalogue crawl control panel showing collection and product URLs being set to index, noindex or canonical, with non-brand organic revenue rising"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-ember">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
          Catalogue crawl control
        </p>
        <span className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white/55">
          12,480 URLs
        </span>
      </div>

      <div className="mt-5 space-y-2">
        {URLS.map((u, i) => {
          const done = inView && step > i;
          const s = STATE_STYLES[u.state]!;
          return (
            <div
              key={u.path}
              className={`flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-700 ${
                done ? "border-white/15 bg-white/[0.07]" : "border-white/8 bg-white/[0.03] opacity-60"
              }`}
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate font-mono text-[10px] text-navy-foreground/85">
                  {u.path}
                </span>
                <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.1em] text-white/40">
                  {u.demand}
                </span>
              </span>
              <span
                className={`shrink-0 rounded-lg px-2 py-1 text-[9px] font-black uppercase tracking-[0.1em] transition-all duration-500 ${
                  done ? s.cls : "bg-white/8 text-white/35"
                }`}
              >
                {done ? s.label : "scanning"}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex items-end justify-between">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/50">
            Non-brand organic revenue
          </p>
          <p className="font-display text-lg font-extrabold text-ember">
            ₹{revenue.toFixed(1)}L / mo
          </p>
        </div>
        <div className="mt-4 flex h-16 items-end gap-1.5">
          {[22, 30, 27, 41, 48, 44, 58, 66, 74, 82, 90].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-md transition-all duration-1000 ease-out ${
                i > 7 ? "bg-ember" : "bg-white/20"
              }`}
              style={{ height: inView ? `${h}%` : "6%", transitionDelay: `${i * 60}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
