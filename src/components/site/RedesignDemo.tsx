import { useEffect, useState } from "react";

const STEPS = [
  {
    key: "old",
    stage: "Live site · baseline crawl",
    label: "Before",
    kpi: { lcp: "6.4s", cvr: "0.8%", cwv: "Fail" },
    note: "Dated template · 6.4s load",
  },
  {
    key: "map",
    stage: "URL mapping · 301 redirects",
    label: "Migration",
    kpi: { lcp: "4.1s", cvr: "0.8%", cwv: "Fail" },
    note: "128 URLs mapped · 0 chains",
  },
  {
    key: "build",
    stage: "New templates on staging",
    label: "Rebuild",
    kpi: { lcp: "2.0s", cvr: "1.6%", cwv: "Warn" },
    note: "Design system · clean CMS",
  },
  {
    key: "new",
    stage: "Launched · rankings intact",
    label: "After",
    kpi: { lcp: "1.3s", cvr: "2.4%", cwv: "Pass" },
    note: "Fast, modern, converting",
  },
];

const ROWS = [
  { label: "Homepage", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Case studies", to: "/work" },
  { label: "Contact", to: "/contact" },
];

/** Looping redesign preview: dated site → redirect mapping → rebuild → launched site. */
export function RedesignDemo() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % STEPS.length), 2200);
    return () => window.clearInterval(t);
  }, []);

  const step = STEPS[i] ?? STEPS[0]!;
  const modern = i >= 2;

  return (
    <div
      className="w-full overflow-hidden rounded-[28px] border border-line bg-card shadow-lift"
      role="img"
      aria-label="Animated website redesign preview showing a dated slow site, URL redirect mapping, the rebuilt templates and the launched fast site with improved metrics"
    >
      {/* chrome */}
      <div className="flex min-w-0 items-center gap-2 border-b border-line bg-mist px-4 py-3">
        <span className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full border border-line bg-card px-3 py-1 text-[10px] font-semibold text-muted-foreground">
          {modern ? "yourbrand.com" : "yourbrand.com/old-site/index.php"}
        </span>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] transition-colors duration-500 ${
            modern ? "bg-ember text-primary-foreground" : "bg-navy text-navy-foreground"
          }`}
        >
          {step.label}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ember">{step.stage}</p>

        {/* viewport mock */}
        <div
          className={`overflow-hidden rounded-2xl border transition-all duration-700 ${
            modern ? "border-ember/50 bg-ember/[0.05] shadow-soft" : "border-line bg-mist/70"
          }`}
        >
          <div className="flex items-center justify-between gap-3 border-b border-line/70 px-3 py-2">
            <span
              className={`h-2.5 rounded-full transition-all duration-700 ${
                modern ? "w-16 bg-ember" : "w-10 bg-muted-foreground/40"
              }`}
            />
            <span className="flex gap-1.5">
              {[0, 1, 2].map((n) => (
                <span
                  key={n}
                  className={`h-1.5 rounded-full transition-all duration-700 ${
                    modern ? "w-6 bg-primary/45" : "w-3 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </span>
          </div>
          <div className={`grid gap-3 p-3 transition-all duration-700 ${modern ? "sm:grid-cols-[1.15fr_0.85fr]" : ""}`}>
            <div className="min-w-0">
              <p
                className={`truncate font-display font-extrabold transition-all duration-700 ${
                  modern ? "text-base text-foreground" : "text-xs text-muted-foreground"
                }`}
              >
                {modern ? "Grow with a site built to convert" : "Welcome to our website!"}
              </p>
              <div className="mt-2 space-y-1.5">
                {[0, 1, 2].map((n) => (
                  <span
                    key={n}
                    className={`block h-1.5 rounded-full transition-all duration-700 ${
                      modern ? "bg-line" : "bg-muted-foreground/25"
                    }`}
                    style={{ width: modern ? `${92 - n * 14}%` : `${70 - n * 6}%` }}
                  />
                ))}
              </div>
              <span
                className={`mt-3 inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-black transition-all duration-700 ${
                  modern
                    ? "bg-ember text-primary-foreground"
                    : "border border-line bg-card text-muted-foreground"
                }`}
              >
                {modern ? "Book a strategy call" : "Click here"}
              </span>
            </div>
            <div
              className={`min-w-0 rounded-xl border transition-all duration-700 ${
                modern ? "border-line bg-card p-3 opacity-100" : "border-transparent p-0 opacity-0"
              }`}
            >
              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                Enquiry
              </p>
              <div className="mt-2 space-y-1.5">
                {["Name", "Phone", "Requirement"].map((f) => (
                  <div
                    key={f}
                    className="truncate rounded-lg border border-line bg-mist/60 px-2 py-1 text-[10px] text-muted-foreground"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* redirect map */}
        <div
          className={`rounded-2xl border p-3 transition-all duration-500 ${
            i === 1 ? "border-ember/60 bg-ember/[0.07] shadow-soft" : "border-line bg-mist/60"
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-muted-foreground">
              301 redirect map
            </p>
            <p className="shrink-0 text-[9px] font-black uppercase tracking-[0.14em] text-ember">
              {i >= 1 ? "128 / 128 ok" : "pending"}
            </p>
          </div>
          <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {ROWS.map((r, idx) => (
              <p
                key={r.label}
                className={`flex min-w-0 items-center gap-1.5 truncate text-[10px] font-semibold transition-colors duration-500 ${
                  i >= 1 && idx <= i + 1 ? "text-foreground" : "text-muted-foreground/70"
                }`}
              >
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    i >= 1 ? "bg-ember" : "bg-muted-foreground/40"
                  }`}
                />
                <span className="truncate">/old{r.to}.php</span>
                <span aria-hidden className="shrink-0 text-ember">
                  →
                </span>
                <span className="truncate">{r.to}</span>
              </p>
            ))}
          </div>
        </div>

        {/* kpi bar */}
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-line">
          {[
            { k: "LCP", v: step.kpi.lcp },
            { k: "Conv. rate", v: step.kpi.cvr },
            { k: "Core Web Vitals", v: step.kpi.cwv },
          ].map((m) => (
            <div key={m.k} className="bg-card px-3 py-2.5 text-center">
              <p className="font-display text-sm font-extrabold text-ember">{m.v}</p>
              <p className="mt-0.5 truncate text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {m.k}
              </p>
            </div>
          ))}
        </div>

        <p className="truncate text-center text-[10px] font-semibold text-muted-foreground">
          {step.note}
        </p>
      </div>
    </div>
  );
}
