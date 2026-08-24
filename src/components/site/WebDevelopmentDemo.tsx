import { useEffect, useState, type ReactElement } from "react";

type Screen = {
  key: string;
  label: string;
  render: () => ReactElement;
};

function Bar({ w, tone = "mist" }: { w: string; tone?: "mist" | "primary" | "ember" }) {
  const bg = tone === "primary" ? "bg-primary/70" : tone === "ember" ? "bg-ember/80" : "bg-foreground/12";
  return <span className={`block h-2 rounded-full ${bg}`} style={{ width: w }} />;
}

const SCREENS: Screen[] = [
  {
    key: "design",
    label: "Design",
    render: () => (
      <div className="flex h-full flex-col gap-3">
        <div className="flex gap-2">
          <span className="h-8 w-8 rounded-lg bg-primary/15" />
          <span className="min-w-0 flex-1 space-y-1.5">
            <Bar w="55%" tone="primary" />
            <Bar w="80%" />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-20 rounded-xl bg-foreground/6" />
          <div className="h-20 rounded-xl bg-ember/10" />
        </div>
        <div className="h-24 rounded-xl bg-primary/8" />
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2 flex-1 rounded-full bg-foreground/10" />
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "code",
    label: "Code",
    render: () => (
      <div className="space-y-2 font-mono text-[10px] leading-relaxed">
        <div className="flex gap-1.5">
          <span className="text-ember">import</span>
          <span className="text-navy-foreground/80">React</span>
          <span className="text-ember">from</span>
          <span className="text-[oklch(0.86_0.09_160)]">&quot;react&quot;</span>
        </div>
        <div className="text-navy-foreground/40">// Hero section component</div>
        <div>
          <span className="text-ember">export function</span>
          <span className="text-navy-foreground/90"> Hero</span>
          <span className="text-navy-foreground/80">() {"{"}</span>
        </div>
        <div className="pl-3 text-navy-foreground/70">
          <span className="text-ember">return</span> (
        </div>
        <div className="pl-6">
          <span className="text-navy-foreground/50">&lt;section className=</span>
          <span className="text-[oklch(0.86_0.09_160)]">&quot;bg-navy&quot;</span>
          <span className="text-navy-foreground/50">&gt;</span>
        </div>
        <div className="pl-9">
          <Bar w="60%" tone="primary" />
          <Bar w="85%" />
          <Bar w="50%" />
        </div>
        <div className="pl-6 text-navy-foreground/50">&lt;/section&gt;</div>
        <div className="pl-3 text-navy-foreground/80">);</div>
        <div className="text-navy-foreground/80">{"}"}</div>
      </div>
    ),
  },
  {
    key: "deploy",
    label: "Deploy",
    render: () => (
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-2.5">
          {[
            { label: "Build", status: "Passed", time: "1m 24s", tone: "ok" },
            { label: "Lighthouse", status: "96", time: "42s", tone: "ok" },
            { label: "Deploy", status: "Live", time: "18s", tone: "ok" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2.5">
              <span className="text-[10px] font-bold text-navy-foreground/80">{row.label}</span>
              <span className="rounded bg-ember px-1.5 py-0.5 text-[9px] font-black text-primary-foreground">{row.status}</span>
              <span className="text-[9px] text-navy-foreground/50">{row.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-navy-foreground/70">Production URL</span>
            <span className="h-2 w-2 rounded-full bg-[oklch(0.86_0.09_160)]" />
          </div>
          <p className="mt-1 font-mono text-[10px] text-[oklch(0.86_0.09_160)]">https://yoursite.com</p>
        </div>
      </div>
    ),
  },
  {
    key: "analytics",
    label: "Grow",
    render: () => (
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-1.5">
          <Bar w="40%" tone="primary" />
          <p className="font-display text-2xl font-extrabold text-navy-foreground">12,840</p>
          <p className="text-[10px] font-bold text-ember">↑ 38% organic sessions</p>
        </div>
        <div className="flex h-28 items-end gap-1.5">
          {[25, 38, 32, 48, 55, 72, 88].map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t-md ${i === 6 ? "bg-ember" : "bg-primary/45"}`}
              style={{ height: `${h}%`, animation: `web-bar-in 620ms ease-out ${i * 70}ms both` }}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { k: "Bounce", v: "32%" },
            { k: "CVR", v: "4.8%" },
            { k: "Speed", v: "0.9s" },
          ].map((m) => (
            <div key={m.k} className="rounded-lg bg-white/5 p-2 text-center">
              <p className="font-display text-sm font-extrabold text-navy-foreground">{m.v}</p>
              <p className="text-[8px] font-bold uppercase tracking-wider text-navy-foreground/50">{m.k}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

/** Animated browser mockup for the web development hero. */
export function WebDevelopmentDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), 2800);
    return () => window.clearInterval(id);
  }, []);

  const screen = SCREENS[index]!;

  return (
    <div className="relative mx-auto w-full max-w-[520px]" data-testid="web-dev-demo">
      <style>{`
        @keyframes web-bar-in { from { transform: scaleY(0.15); opacity: .3; transform-origin: bottom;} to { transform: scaleY(1); opacity: 1; transform-origin: bottom;} }
      `}</style>

      <div className="overflow-hidden rounded-[26px] border border-white/10 bg-navy/95 shadow-lift backdrop-blur">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-ember" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <div className="ml-2 flex flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <svg viewBox="0 0 16 16" className="h-3 w-3 fill-none stroke-current text-navy-foreground/40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7" cy="7" r="6" />
              <path d="M12 12l3 3" />
            </svg>
            <span className="text-[9px] font-semibold text-navy-foreground/50">acsius-elevate-digital.lovable.app</span>
          </div>
        </div>

        {/* viewport */}
        <div className="relative p-4">
          <div key={screen.key} className="animate-in fade-in duration-500">
            {screen.render()}
          </div>
        </div>

        {/* progress tabs */}
        <div className="flex border-t border-white/10">
          {SCREENS.map((s, i) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setIndex(i)}
              className={`flex-1 px-2 py-2.5 text-[10px] font-bold transition-colors ${
                i === index ? "bg-white/8 text-ember" : "text-navy-foreground/50 hover:bg-white/5 hover:text-navy-foreground/80"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
