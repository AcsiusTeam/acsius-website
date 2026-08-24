import { useEffect, useState } from "react";

const CELLS = [
  {
    label: "In [1]",
    tag: "FastAPI",
    accent: "text-ember",
    dot: "bg-ember",
    code: ["@app.post('/score')", "def score(req: Lead) -> Score:"],
    out: "200 OK · schema validated",
  },
  {
    label: "In [2]",
    tag: "pandas",
    accent: "text-[oklch(0.62_0.11_250)]",
    dot: "bg-[oklch(0.62_0.11_250)]",
    code: ["df = pd.read_sql(q, engine)", "df = clean(df).dropna()"],
    out: "48,210 rows · 0 nulls",
  },
  {
    label: "In [3]",
    tag: "scikit-learn",
    accent: "text-[oklch(0.86_0.09_160)]",
    dot: "bg-[oklch(0.86_0.09_160)]",
    code: ["model.fit(X_train, y_train)", "print(model.score(X_test, y))"],
    out: "accuracy 0.94",
  },
  {
    label: "In [4]",
    tag: "pytest",
    accent: "text-ember",
    dot: "bg-ember",
    code: ["$ pytest -q --cov=app", "deploy: docker build && push"],
    out: "36 passed · cov 92%",
  },
];

/**
 * Animated Python notebook runner: cells execute in sequence, each printing
 * its output. Single stacked column so nothing overlaps at any width.
 */
export function PythonDemo() {
  const [active, setActive] = useState(0);
  const [runs, setRuns] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % (CELLS.length + 1);
        if (next === 0) setRuns((r) => r + 1);
        return next;
      });
    }, 1400);
    return () => window.clearInterval(t);
  }, []);

  const ms = 820 + (runs % 5) * 40;

  return (
    <div
      className="overflow-hidden rounded-[26px] border border-white/10 bg-navy/95 shadow-lift backdrop-blur"
      role="img"
      aria-label="Animated Python notebook running FastAPI, pandas, scikit-learn and pytest cells in sequence"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ember" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 truncate text-[9px] font-black uppercase tracking-[0.18em] text-navy-foreground/60">
          pipeline.ipynb · running
        </span>
        <span className="ml-auto shrink-0 rounded-full border border-white/12 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-navy-foreground/70">
          Python 3.12
        </span>
      </div>

      <ul className="divide-y divide-white/10">
        {CELLS.map((cell, i) => {
          const running = active === i;
          const done = active > i;
          return (
            <li
              key={cell.label}
              className={`min-w-0 px-4 py-3.5 transition-colors duration-500 sm:px-5 ${
                running ? "bg-white/[0.06]" : "bg-transparent"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-2 w-2 shrink-0 rounded-full transition-all duration-500 ${cell.dot} ${
                    running ? "scale-125 opacity-100" : done ? "opacity-70" : "opacity-30"
                  }`}
                />
                <span className="font-mono text-[9px] text-navy-foreground/45">{cell.label}</span>
                <span
                  className={`font-display text-[10px] font-black uppercase tracking-[0.14em] ${cell.accent}`}
                >
                  {cell.tag}
                </span>
                <span className="ml-auto shrink-0 font-mono text-[8px] uppercase tracking-[0.12em] text-navy-foreground/45">
                  {running ? "running…" : done ? "done" : "queued"}
                </span>
              </div>

              <pre className="mt-2 min-w-0 space-y-1 font-mono text-[10px] leading-[1.6] sm:text-[11px]">
                {cell.code.map((line) => (
                  <div
                    key={line}
                    className={`overflow-hidden text-ellipsis whitespace-nowrap transition-opacity duration-500 ${
                      running || done ? "text-navy-foreground/90" : "text-navy-foreground/40"
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </pre>

              <div
                className={`mt-2 grid overflow-hidden transition-all duration-500 ${
                  running || done ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="min-h-0 truncate font-mono text-[9px] text-[oklch(0.86_0.09_160)] sm:text-[10px]">
                  → {cell.out}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="grid grid-cols-3 gap-px border-t border-white/10 bg-white/10">
        <div className="min-w-0 bg-navy/90 px-3 py-3.5 sm:px-4">
          <p className="truncate text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
            Full run
          </p>
          <p className="mt-1.5 font-display text-lg font-extrabold text-ember sm:text-xl">{ms}ms</p>
        </div>
        <div className="min-w-0 bg-navy/90 px-3 py-3.5 sm:px-4">
          <p className="truncate text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
            Type checked
          </p>
          <p className="mt-1.5 font-display text-lg font-extrabold text-[oklch(0.62_0.11_250)] sm:text-xl">
            mypy
          </p>
        </div>
        <div className="min-w-0 bg-navy/90 px-3 py-3.5 sm:px-4">
          <p className="truncate text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
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
