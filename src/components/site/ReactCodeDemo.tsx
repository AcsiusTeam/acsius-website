import { useEffect, useState } from "react";

const LINES: { text: string; tone: "key" | "fn" | "str" | "plain" }[] = [
  { text: "const [leads, setLeads] = useState(0);", tone: "key" },
  { text: "useEffect(() => {", tone: "fn" },
  { text: "  track('cta_click', { plan })", tone: "str" },
  { text: "}, [plan]);", tone: "fn" },
  { text: "return <Pricing leads={leads} />;", tone: "plain" },
];

const TONE: Record<string, string> = {
  key: "text-[oklch(0.82_0.13_52)]",
  fn: "text-[oklch(0.78_0.11_250)]",
  str: "text-[oklch(0.86_0.09_160)]",
  plain: "text-navy-foreground/85",
};

const FULL = LINES.reduce((n, l) => n + l.text.length, 0);

/** Looping "code being written" terminal card. */
export function ReactCodeDemo() {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setChars((c) => (c >= FULL + 26 ? 0 : c + 1));
    }, 45);
    return () => window.clearInterval(timer);
  }, []);

  let remaining = chars;

  return (
    <div
      className="flex h-full flex-col w-full overflow-hidden rounded-2xl border border-white/10 bg-navy/95 shadow-lift backdrop-blur"
      role="img"
      aria-label="Animated React code being typed"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-ember" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="ml-1 text-[8px] font-bold uppercase tracking-[0.16em] text-navy-foreground/60">
          React · Pricing.tsx
        </span>
      </div>
      <pre className="flex-1 space-y-0.5 px-3 py-2.5 font-mono text-[9px] leading-[1.5]">
        {LINES.map((line) => {
          const shown = Math.max(0, Math.min(line.text.length, remaining));
          remaining -= line.text.length;
          const isTyping = shown > 0 && shown < line.text.length;
          return (
            <div key={line.text} className={TONE[line.tone]}>
              {line.text.slice(0, shown) || "\u00a0"}
              {isTyping && (
                <span className="ml-px inline-block h-[9px] w-[3px] translate-y-[1px] bg-ember align-middle" />
              )}
            </div>
          );
        })}
      </pre>
      <div className="flex items-center justify-between border-t border-white/10 px-3 py-1.5">
        <span className="flex items-center gap-1 text-[8px] font-bold text-[oklch(0.86_0.09_160)]">
          <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[oklch(0.86_0.09_160)]" />
          compiled
        </span>
        <span className="text-[8px] font-bold text-navy-foreground/55">HMR 42ms</span>
      </div>
    </div>
  );
}
