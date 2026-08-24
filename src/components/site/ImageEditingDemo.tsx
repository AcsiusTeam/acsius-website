import { useEffect, useState } from "react";

const STEPS = [
  { label: "Clipping path", note: "hand-drawn · 0.2 px" },
  { label: "Background removal", note: "pure white #FFFFFF" },
  { label: "Retouch & dust clean", note: "texture kept" },
  { label: "Export set", note: "2000×2000 · sRGB" },
];

const THUMBS = ["SKU-1042", "SKU-1043", "SKU-1044", "SKU-1045", "SKU-1046", "SKU-1047"];

/** Animated before → after retouch stage. Self-contained, fixed height, never overlaps. */
export function ImageEditingDemo() {
  const [step, setStep] = useState(0);
  const [wipe, setWipe] = useState(8);
  const [done, setDone] = useState(2);

  useEffect(() => {
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % STEPS.length);
    }, 2100);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const target = [14, 52, 78, 100][step] ?? 100;
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      setWipe((w) => w + (target - w) * 0.18);
      if (frame > 40) window.clearInterval(id);
    }, 24);
    return () => window.clearInterval(id);
  }, [step]);

  useEffect(() => {
    if (step !== 0) return;
    setDone((d) => (d >= THUMBS.length ? 2 : d + 1));
  }, [step]);

  const pct = Math.round(wipe);

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/12 bg-navy-deep shadow-lift">
      {/* window bar */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-5 py-3">
        <span className="flex gap-1.5">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-ember/80" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <p className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-navy-foreground/60">
          Image editing · batch_04.psd
        </p>
        <span className="ml-auto whitespace-nowrap rounded-full border border-ember/40 px-2.5 py-0.5 font-mono text-[10px] text-ember">
          {pct}%
        </span>
      </div>

      {/* stage */}
      <div className="relative h-[268px] overflow-hidden bg-[oklch(0.28_0.03_250)]">
        {/* BEFORE: messy studio background */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 20%, oklch(0.5 0.02 250 / 0.9), transparent 70%), linear-gradient(150deg, oklch(0.36 0.02 250), oklch(0.27 0.02 250))",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* AFTER: clean white, revealed by the wipe */}
        <div
          aria-hidden
          className="absolute inset-0 bg-white"
          style={{ clipPath: `inset(0 0 0 ${100 - wipe}%)` }}
        />

        {/* product silhouette (bottle) sits above both layers */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative h-[196px] w-[112px]">
            {/* cap */}
            <div className="mx-auto h-6 w-9 rounded-t-md bg-[oklch(0.45_0.06_250)]" />
            <div className="mx-auto h-2 w-11 rounded-sm bg-[oklch(0.38_0.05_250)]" />
            {/* body */}
            <div
              className="relative mt-1 h-[152px] w-full overflow-hidden rounded-[18px]"
              style={{
                background:
                  "linear-gradient(105deg, oklch(0.62 0.11 250), oklch(0.44 0.09 255) 55%, oklch(0.56 0.1 250))",
              }}
            >
              <span
                aria-hidden
                className="absolute left-3 top-3 h-[128px] w-3 rounded-full bg-white/25 blur-[1px]"
              />
              <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 rounded-md bg-white/92 px-2 py-2 text-center">
                <p className="font-display text-[11px] font-extrabold leading-none text-[oklch(0.34_0.05_255)]">
                  ACSIUS
                </p>
                <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.14em] text-[oklch(0.55_0.02_255)]">
                  studio edit
                </p>
              </div>
              {/* dust specks that vanish once retouch step passes */}
              {[
                { t: 14, l: 22 },
                { t: 96, l: 74 },
                { t: 128, l: 34 },
              ].map((d) => (
                <span
                  key={`${d.t}-${d.l}`}
                  aria-hidden
                  className="absolute h-1.5 w-1.5 rounded-full bg-white/70 transition-opacity duration-700"
                  style={{ top: d.t, left: d.l, opacity: step >= 2 ? 0 : 0.8 }}
                />
              ))}
            </div>
            {/* reflection appears with the export step */}
            <div
              aria-hidden
              className="mx-auto mt-1 h-5 w-[86px] rounded-[50%] transition-opacity duration-700"
              style={{
                opacity: step >= 2 ? 0.35 : 0.08,
                background:
                  "radial-gradient(50% 60% at 50% 40%, oklch(0.3 0.04 255 / 0.6), transparent 70%)",
              }}
            />
            {/* clipping path outline */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1.5 rounded-[22px] border border-dashed border-ember transition-opacity duration-500"
              style={{ opacity: step === 0 ? 0.95 : 0.25 }}
            />
            {step === 0 &&
              [
                "left-[-9px] top-[-9px]",
                "right-[-9px] top-[-9px]",
                "left-[-9px] bottom-[-9px]",
                "right-[-9px] bottom-[-9px]",
              ].map((pos) => (
                <span
                  key={pos}
                  aria-hidden
                  className={`absolute h-2 w-2 rounded-[2px] bg-ember ${pos}`}
                />
              ))}
          </div>
        </div>

        {/* wipe handle */}
        <div
          aria-hidden
          className="absolute inset-y-0 w-px bg-ember"
          style={{ left: `${100 - wipe}%` }}
        >
          <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-7 w-7 place-items-center rounded-full bg-ember font-mono text-[10px] font-black text-primary-foreground">
            ↔
          </span>
        </div>

        <span className="absolute bottom-3 left-4 rounded-full bg-black/45 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/70">
          Before
        </span>
        <span className="absolute bottom-3 right-4 rounded-full bg-[oklch(0.34_0.05_255)]/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[oklch(0.34_0.05_255)]">
          After
        </span>
      </div>

      {/* step list */}
      <div className="grid gap-px bg-white/10 sm:grid-cols-2">
        {STEPS.map((s, i) => {
          const active = step === i;
          const passed = step > i;
          return (
            <div
              key={s.label}
              className={`flex items-center gap-3 bg-navy-deep px-4 py-3 transition-colors duration-500 ${active ? "bg-white/[0.07]" : ""}`}
            >
              <span
                aria-hidden
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[9px] font-black transition-colors duration-500 ${
                  active || passed
                    ? "bg-ember text-primary-foreground"
                    : "border border-white/20 text-navy-foreground/50"
                }`}
              >
                {passed ? "✓" : i + 1}
              </span>
              <span className="min-w-0">
                <span
                  className={`block truncate text-xs font-bold ${active ? "text-ember" : "text-navy-foreground/80"}`}
                >
                  {s.label}
                </span>
                <span className="block truncate font-mono text-[9px] uppercase tracking-[0.12em] text-navy-foreground/45">
                  {s.note}
                </span>
              </span>
            </div>
          );
        })}
      </div>

      {/* batch queue */}
      <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
        <p className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.14em] text-navy-foreground/45">
          Queue
        </p>
        <div className="flex min-w-0 flex-1 gap-1.5 overflow-hidden">
          {THUMBS.map((t, i) => (
            <span
              key={t}
              className={`h-6 flex-1 rounded-md border transition-colors duration-500 ${
                i < done ? "border-ember/50 bg-ember/25" : "border-white/12 bg-white/[0.04]"
              }`}
              title={t}
            />
          ))}
        </div>
        <p className="whitespace-nowrap font-mono text-[9px] text-ember">
          {done}/{THUMBS.length}
        </p>
      </div>
    </div>
  );
}
