import { useEffect, useState } from "react";

type Line = { text: string; tone: "cmd" | "ok" | "info" | "dim" };

const STEPS: Line[] = [
  { text: "$ php artisan make:resource InvoiceResource", tone: "cmd" },
  { text: "  INFO  Resource created successfully.", tone: "ok" },
  { text: "$ php artisan migrate --force", tone: "cmd" },
  { text: "  2026_04_11_add_tenant_id ....... 34ms DONE", tone: "ok" },
  { text: "$ php artisan queue:work --queue=invoices", tone: "cmd" },
  { text: "  App\\Jobs\\GenerateInvoice ....... 118ms DONE", tone: "info" },
  { text: "$ ./vendor/bin/pest --parallel", tone: "cmd" },
  { text: "  Tests:  142 passed (318 assertions)", tone: "ok" },
];

const TONE: Record<Line["tone"], string> = {
  cmd: "text-navy-foreground/90",
  ok: "text-[oklch(0.86_0.09_160)]",
  info: "text-[oklch(0.82_0.13_52)]",
  dim: "text-navy-foreground/55",
};

const ROUTES = [
  { method: "GET", path: "/api/v1/invoices", ms: 96 },
  { method: "POST", path: "/api/v1/invoices", ms: 141 },
  { method: "GET", path: "/api/v1/tenants/42", ms: 74 },
];

/** Animated Laravel artisan terminal + live API route monitor. */
export function LaravelApiDemo() {
  const [shown, setShown] = useState(1);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setShown((n) => (n >= STEPS.length ? 1 : n + 1));
      setTick((t) => t + 1);
    }, 900);
    return () => window.clearInterval(timer);
  }, []);

  const activeRoute = ROUTES[tick % ROUTES.length]!;
  const queued = 12 + (tick % 7) * 3;

  return (
    <div
      className="overflow-hidden rounded-[26px] border border-white/10 bg-navy/95 shadow-lift backdrop-blur"
      role="img"
      aria-label="Animated Laravel terminal running artisan commands and API routes"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ember" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 text-[9px] font-black uppercase tracking-[0.18em] text-navy-foreground/60">
          Laravel 11 · artisan
        </span>
        <span className="ml-auto rounded-full border border-white/12 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-navy-foreground/70">
          PHP 8.3
        </span>
      </div>

      <pre className="min-h-[168px] space-y-1 px-4 py-3.5 font-mono text-[10px] leading-[1.6] sm:text-[11px]">
        {STEPS.slice(0, shown).map((line) => (
          <div key={line.text} className={`animate-[fadeUp_0.35s_ease-out_both] ${TONE[line.tone]}`}>
            {line.text}
          </div>
        ))}
        <span className="inline-block h-[11px] w-[5px] translate-y-[2px] animate-pulse-dot bg-ember" />
      </pre>

      <div className="grid gap-px border-t border-white/10 bg-white/10 sm:grid-cols-2">
        <div className="bg-navy/90 p-4">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/55">
            Route monitor
          </p>
          <div key={activeRoute.path} className="mt-2.5 animate-[fadeUp_0.4s_ease-out_both]">
            <p className="flex items-center gap-2 font-mono text-[10px] text-navy-foreground/85">
              <span className="rounded bg-ember px-1.5 py-0.5 text-[8px] font-black text-primary-foreground">
                {activeRoute.method}
              </span>
              {activeRoute.path}
            </p>
            <p className="mt-2 font-display text-xl font-extrabold text-[oklch(0.86_0.09_160)]">
              200 · {activeRoute.ms}ms
            </p>
          </div>
        </div>
        <div className="bg-navy/90 p-4">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/55">
            Horizon queue
          </p>
          <p className="mt-2.5 font-display text-xl font-extrabold text-ember">{queued} jobs/min</p>
          <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-ember transition-all duration-700"
              style={{ width: `${40 + (tick % 7) * 8}%` }}
            />
          </div>
          <p className="mt-2 text-[9px] font-bold text-navy-foreground/55">0 failed · 3 workers</p>
        </div>
      </div>
    </div>
  );
}
