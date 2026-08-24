import { useEffect, useState } from "react";

const CODE_LINES = [
  { text: "<?php", tone: "dim" },
  { text: "declare(strict_types=1);", tone: "dim" },
  { text: "", tone: "dim" },
  { text: "class InvoiceController", tone: "keyword" },
  { text: "{", tone: "dim" },
  { text: "    public function store(Request $request)", tone: "func" },
  { text: "    {", tone: "dim" },
  { text: "        $invoice = DB::transaction(fn() =>", tone: "cmd" },
  { text: "            Invoice::create($request->validated())", tone: "cmd" },
  { text: "                ->items()->createMany($request->items)", tone: "cmd" },
  { text: "        );", tone: "dim" },
  { text: "", tone: "dim" },
  { text: "        dispatch(new SendInvoice($invoice));", tone: "cmd" },
  { text: "", tone: "dim" },
  { text: "        return new InvoiceResource($invoice);", tone: "func" },
  { text: "    }", tone: "dim" },
  { text: "}", tone: "dim" },
];

const TONE: Record<string, string> = {
  dim: "text-navy-foreground/40",
  keyword: "text-[oklch(0.82_0.13_52)]",
  func: "text-[oklch(0.86_0.09_160)]",
  cmd: "text-navy-foreground/90",
};

const ROUTES = [
  { method: "GET", path: "/api/v1/invoices", ms: 98 },
  { method: "POST", path: "/api/v1/invoices", ms: 124 },
  { method: "GET", path: "/api/v1/customers/84", ms: 67 },
  { method: "POST", path: "/api/v1/payments", ms: 156 },
];

/** Animated PHP code editor + live API monitor. */
export function PhpCodeDemo() {
  const [shown, setShown] = useState(3);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setShown((n) => (n >= CODE_LINES.length ? 4 : n + 1));
      setTick((t) => t + 1);
    }, 700);
    return () => window.clearInterval(timer);
  }, []);

  const activeRoute = ROUTES[tick % ROUTES.length]!;
  const queries = 340 + (tick % 8) * 42;

  return (
    <div
      className="overflow-hidden rounded-[26px] border border-white/10 bg-navy/95 shadow-lift backdrop-blur"
      role="img"
      aria-label="Animated PHP code editor running an invoice controller and API monitor"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="grid h-5 w-5 place-items-center rounded bg-ember text-[9px] font-black text-primary-foreground">
          P
        </span>
        <span className="text-[9px] font-black uppercase tracking-[0.18em] text-navy-foreground/60">
          PHP 8.3 · InvoiceController.php
        </span>
        <span className="ml-auto rounded-full border border-white/12 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-navy-foreground/70">
          strict_types
        </span>
      </div>

      <div className="grid gap-px bg-white/10 sm:grid-cols-[1fr_160px]">
        <pre className="min-h-[200px] space-y-0.5 bg-navy/90 px-4 py-3.5 font-mono text-[10px] leading-[1.55] sm:text-[11px]">
          {CODE_LINES.slice(0, shown).map((line, i) => (
            <div key={`${i}-${line.text}`} className="flex animate-[fadeUp_0.35s_ease-out_both] gap-3">
              <span className="w-5 shrink-0 text-right text-navy-foreground/30">{i + 1}</span>
              <span className={TONE[line.tone] ?? TONE["cmd"]}>{line.text || " "}</span>
            </div>
          ))}
          <div className="flex gap-3">
            <span className="w-5 shrink-0 text-right text-navy-foreground/30">{shown + 1}</span>
            <span className="inline-block h-[11px] w-[5px] translate-y-[2px] animate-pulse-dot bg-ember" />
          </div>
        </pre>

        <div className="flex flex-col gap-px bg-white/10">
          <div className="flex flex-1 flex-col justify-center bg-navy/90 p-4">
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
          <div className="flex flex-1 flex-col justify-center bg-navy/90 p-4">
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/55">
              DB queries / min
            </p>
            <p className="mt-2.5 font-display text-xl font-extrabold text-ember">{queries}</p>
            <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-ember transition-all duration-700"
                style={{ width: `${35 + (tick % 8) * 7}%` }}
              />
            </div>
            <p className="mt-2 text-[9px] font-bold text-navy-foreground/55">0 slow · cache hit 94%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
