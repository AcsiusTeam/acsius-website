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

const TASKS = [
  { title: "Technical audit · Client A", owner: "SEO lead", tag: "Audit" },
  { title: "CWV fixes · Client B", owner: "Dev", tag: "Technical" },
  { title: "6 briefs · Client C", owner: "Editor", tag: "Content" },
  { title: "Outreach batch · Client A", owner: "PR", tag: "Authority" },
  { title: "Monthly report · Client D", owner: "SEO lead", tag: "Report" },
];

const COLUMNS = ["Briefed", "In delivery", "Your review", "Delivered"];

/** White-label delivery board — distinct from the SERP/audit visuals used elsewhere. */
export function SeoOutsourcingDemo() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 1600);
    return () => window.clearInterval(id);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="rounded-[30px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur lg:p-7"
      role="img"
      aria-label="Animated white-label SEO outsourcing delivery board showing audit, technical, content and reporting tasks moving from briefed to delivered"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-ember">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
          White-label delivery board
        </p>
        <span className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white/55">
          Your brand
        </span>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-1.5">
        {COLUMNS.map((c) => (
          <span
            key={c}
            className="truncate rounded-lg bg-white/[0.05] px-2 py-1.5 text-center text-[9px] font-black uppercase tracking-[0.1em] text-white/45"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-3 space-y-2.5">
        {TASKS.map((t, i) => {
          const stage = inView ? Math.min(3, (tick + i) % 5) : 0;
          const done = stage === 3;
          return (
            <div key={t.title} className="relative h-[52px] rounded-2xl bg-white/[0.04]">
              <div
                className="absolute top-1 bottom-1 w-[calc(25%-6px)] transition-all duration-1000 ease-out"
                style={{ left: `calc(${stage * 25}% + 3px)` }}
              >
                <div
                  className={`flex h-full flex-col justify-center rounded-xl px-2.5 ${
                    done ? "bg-ember text-navy" : "bg-white/12 text-navy-foreground"
                  }`}
                >
                  <span className="truncate text-[9.5px] font-black leading-tight">{t.title}</span>
                  <span className="mt-0.5 truncate text-[8.5px] font-bold opacity-70">
                    {t.owner} · {t.tag}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {[
          { k: "Capacity used", v: "78%" },
          { k: "On-time ships", v: "96%" },
          { k: "Revisions incl.", v: "2" },
        ].map((m) => (
          <div key={m.k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <p className="font-display text-lg font-extrabold text-ember">{m.v}</p>
            <p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.1em] text-white/45">
              {m.k}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
