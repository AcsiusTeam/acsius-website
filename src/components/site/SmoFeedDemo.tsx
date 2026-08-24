import { useEffect, useState } from "react";

const TABS = ["Instagram", "LinkedIn", "YouTube"] as const;

const POSTS = [
  {
    handle: "@yourbrand",
    kind: "Reel",
    caption: "3 things buyers check before they enquire →",
    stats: [
      { k: "Reach", from: 4200, to: 18600 },
      { k: "Saves", from: 96, to: 742 },
      { k: "Clicks", from: 31, to: 214 },
    ],
  },
  {
    handle: "Company page",
    kind: "Document post",
    caption: "The 90-day SMO roadmap we run for every brand.",
    stats: [
      { k: "Impressions", from: 2600, to: 12400 },
      { k: "Engage", from: 41, to: 386 },
      { k: "Leads", from: 2, to: 19 },
    ],
  },
  {
    handle: "Your channel",
    kind: "Short",
    caption: "Optimised titles, chapters and thumbnails in one pass.",
    stats: [
      { k: "Views", from: 3100, to: 21800 },
      { k: "Watch-time", from: 58, to: 312 },
      { k: "Subs", from: 7, to: 96 },
    ],
  },
];

const BARS = [26, 38, 31, 52, 44, 68, 61, 84, 76, 100];

function format(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(Math.round(n));
}

/** Animated social feed loop: platform switch + engagement counters climbing */
export function SmoFeedDemo() {
  const [tab, setTab] = useState(0);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setGrown((g) => {
        if (g) setTab((t) => (t + 1) % TABS.length);
        return !g;
      });
    }, 1900);
    return () => window.clearInterval(id);
  }, []);

  const post = POSTS[tab] ?? POSTS[0]!;

  return (
    <div className="relative rounded-[28px] border border-white/12 bg-white/[0.06] p-4 shadow-lift backdrop-blur-sm">
      {/* platform switcher */}
      <div className="flex items-center justify-between gap-3 px-1.5 pb-3">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-ember text-[10px] font-black text-primary-foreground">
            ◎
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.14em] text-navy-foreground/60">
            SMO live
          </span>
        </div>
        <div className="flex gap-1">
          {TABS.map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.1em] transition-all duration-500 ${
                i === tab ? "bg-ember text-primary-foreground" : "bg-white/10 text-navy-foreground/50"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* post card */}
      <div className="relative overflow-hidden rounded-[20px] bg-[oklch(0.19_0.03_255)] p-4">
        <div className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-gradient-to-br from-white/25 to-white/5" />
          <div className="flex-1">
            <p className="text-xs font-bold text-navy-foreground/90">{post.handle}</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ember">
              {post.kind}
            </p>
          </div>
          <span className="rounded-full bg-white/10 px-2 py-1 text-[9px] font-black text-navy-foreground/60">
            optimised
          </span>
        </div>

        <p className="mt-3 text-sm font-semibold leading-snug text-navy-foreground/85">
          {post.caption}
        </p>

        {/* growth chart */}
        <div className="mt-4 flex h-24 items-end gap-1.5 rounded-2xl bg-white/[0.04] p-3">
          {BARS.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-ember/80 transition-all duration-700 ease-out"
              style={{
                height: grown ? `${h}%` : `${Math.max(10, h * 0.28)}%`,
                transitionDelay: `${i * 45}ms`,
                opacity: 0.45 + (i / BARS.length) * 0.55,
              }}
            />
          ))}
        </div>

        {/* counters */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {post.stats.map((s) => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-2.5">
              <p className="font-display text-base font-extrabold text-ember">
                {format(grown ? s.to : s.from)}
              </p>
              <p className="text-[9px] font-black uppercase tracking-[0.1em] text-navy-foreground/55">
                {s.k}
              </p>
            </div>
          ))}
        </div>

        {/* reaction pills */}
        <div className="mt-3 flex flex-wrap gap-2">
          {["♥ replied", "↗ shared", "⤓ saved", "→ enquiry"].map((r, i) => (
            <span
              key={r}
              className={`rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-bold text-navy-foreground/70 transition-all duration-700 ${
                grown ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-30"
              }`}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
