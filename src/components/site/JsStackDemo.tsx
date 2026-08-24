import { useEffect, useState } from "react";

const LAYERS = [
  {
    tag: "Browser",
    file: "app/checkout.tsx",
    lang: "React + TS",
    accent: "text-[oklch(0.62_0.11_250)]",
    dot: "bg-[oklch(0.62_0.11_250)]",
    lines: [
      "const { mutate } = useCheckout()",
      "<Button onClick={() => mutate(cart)}>Pay</Button>",
    ],
  },
  {
    tag: "Node API",
    file: "src/routes/orders.ts",
    lang: "NestJS",
    accent: "text-ember",
    dot: "bg-ember",
    lines: [
      "await schema.parseAsync(req.body)",
      "return orders.create({ cart, userId })",
    ],
  },
  {
    tag: "Data",
    file: "prisma/schema.prisma",
    lang: "PostgreSQL",
    accent: "text-[oklch(0.86_0.09_160)]",
    dot: "bg-[oklch(0.86_0.09_160)]",
    lines: [
      "INSERT INTO orders (...) RETURNING id",
      "→ order_8412 committed in 11ms",
    ],
  },
];

/**
 * Animated full-stack trace: a request travels Browser → Node API → Database
 * in one shared JavaScript codebase. Stacked lanes so nothing overlaps.
 */
export function JsStackDemo() {
  const [active, setActive] = useState(0);
  const [runs, setRuns] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % 3;
        if (next === 0) setRuns((r) => r + 1);
        return next;
      });
    }, 1500);
    return () => window.clearInterval(t);
  }, []);

  const ms = 96 + (runs % 4) * 11;

  return (
    <div
      className="overflow-hidden rounded-[26px] border border-white/10 bg-navy/95 shadow-lift backdrop-blur"
      role="img"
      aria-label="Animated full-stack JavaScript trace moving a request from React to a Node API to PostgreSQL"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ember" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 truncate text-[9px] font-black uppercase tracking-[0.18em] text-navy-foreground/60">
          One language · end to end
        </span>
        <span className="ml-auto shrink-0 rounded-full border border-white/12 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-navy-foreground/70">
          TypeScript
        </span>
      </div>

      <ul className="divide-y divide-white/10">
        {LAYERS.map((layer, i) => {
          const on = active === i;
          return (
            <li
              key={layer.tag}
              className={`px-4 py-4 transition-colors duration-500 sm:px-5 ${
                on ? "bg-white/[0.06]" : "bg-transparent"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-2 w-2 shrink-0 rounded-full transition-all duration-500 ${layer.dot} ${
                    on ? "scale-125 opacity-100" : "opacity-35"
                  }`}
                />
                <span className={`font-display text-xs font-black uppercase tracking-[0.14em] ${layer.accent}`}>
                  {layer.tag}
                </span>
                <span className="ml-auto shrink-0 rounded-full border border-white/12 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-navy-foreground/55">
                  {layer.lang}
                </span>
              </div>

              <p className="mt-2 truncate font-mono text-[9px] text-navy-foreground/40">{layer.file}</p>

              <pre className="mt-1.5 space-y-1 font-mono text-[10px] leading-[1.6] sm:text-[11px]">
                {layer.lines.map((line) => (
                  <div key={line} className="flex min-w-0 items-center">
                    <span
                      className={`overflow-hidden text-ellipsis whitespace-nowrap transition-opacity duration-500 ${
                        on ? "text-navy-foreground/90" : "text-navy-foreground/45"
                      }`}
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </pre>

              {/* connector rail */}
              {i < LAYERS.length - 1 && (
                <div className="mt-3 flex items-center gap-2">
                  <span className="relative h-px flex-1 overflow-hidden bg-white/10">
                    <span
                      className={`absolute inset-y-0 left-0 bg-ember transition-all duration-700 ease-out ${
                        active > i ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                  <span className="shrink-0 text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/40">
                    {i === 0 ? "typed payload" : "query"}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="grid grid-cols-3 gap-px border-t border-white/10 bg-white/10">
        <div className="bg-navy/90 px-3 py-3.5 sm:px-4">
          <p className="text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
            Round trip
          </p>
          <p className="mt-1.5 font-display text-lg font-extrabold text-ember sm:text-xl">{ms}ms</p>
        </div>
        <div className="bg-navy/90 px-3 py-3.5 sm:px-4">
          <p className="text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
            Types shared
          </p>
          <p className="mt-1.5 font-display text-lg font-extrabold text-[oklch(0.62_0.11_250)] sm:text-xl">
            100%
          </p>
        </div>
        <div className="bg-navy/90 px-3 py-3.5 sm:px-4">
          <p className="text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
            CI checks
          </p>
          <p className="mt-1.5 font-display text-lg font-extrabold text-[oklch(0.86_0.09_160)] sm:text-xl">
            green
          </p>
        </div>
      </div>
    </div>
  );
}
