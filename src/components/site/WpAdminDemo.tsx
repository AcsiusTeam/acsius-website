import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MENU = ["Dashboard", "Posts", "Media", "Pages", "Plugins"];

/** Loop: hover Pages -> click Pages -> click Add New -> type title -> click Publish -> published */
const STEPS = [
  { target: "pages", duration: 1100, click: false },
  { target: "pages", duration: 700, click: true },
  { target: "addNew", duration: 1200, click: true },
  { target: "title", duration: 1500, click: false },
  { target: "publish", duration: 1100, click: true },
  { target: "publish", duration: 1400, click: false },
] as const;

type TargetKey = (typeof STEPS)[number]["target"];

const TITLE = "Pricing — ACSIUS";

export function WpAdminDemo() {
  const [step, setStep] = useState(0);
  const [cursor, setCursor] = useState({ x: 30, y: 26 });
  const [typed, setTyped] = useState(0);

  const frameRef = useRef<HTMLDivElement>(null);
  const targets = useRef<Record<string, HTMLElement | null>>({});
  const setTarget = (key: TargetKey) => (node: HTMLElement | null) => {
    targets.current[key] = node;
  };

  const current = STEPS[step]!;
  const onPagesScreen = step >= 1;
  const onEditor = step >= 2;
  const published = step >= 5;

  useEffect(() => {
    const timer = window.setTimeout(
      () => setStep((s) => (s + 1) % STEPS.length),
      current.duration,
    );
    return () => window.clearTimeout(timer);
  }, [step, current.duration]);

  // typing animation for the new page title
  useEffect(() => {
    if (step < 3) {
      setTyped(0);
      return;
    }
    if (step > 3) {
      setTyped(TITLE.length);
      return;
    }
    const timer = window.setInterval(() => {
      setTyped((t) => (t >= TITLE.length ? t : t + 1));
    }, 70);
    return () => window.clearInterval(timer);
  }, [step]);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const node = targets.current[current.target];
    if (!frame || !node) return;
    const f = frame.getBoundingClientRect();
    const t = node.getBoundingClientRect();
    setCursor({
      x: t.left - f.left + t.width * 0.55,
      y: t.top - f.top + t.height * 0.6,
    });
  }, [step, current.target, onEditor, onPagesScreen]);

  return (
    <div
      ref={frameRef}
      className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-soft"
      aria-label="Animated WordPress admin walkthrough: open Pages, add new page, publish"
      role="img"
    >
      <div className="flex items-center justify-between bg-navy px-3 py-1.5">
        <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-navy-foreground/80">
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-navy-foreground/15 text-[7px] font-black text-navy-foreground">
            W
          </span>
          wp-admin
        </span>
        <span className="text-[9px] font-semibold text-navy-foreground/60">Howdy, ACSIUS</span>
      </div>

      <div className="grid flex-1 grid-cols-[64px_1fr]">
        <div className="space-y-1 bg-navy/95 px-2 py-2.5">
          {MENU.map((item) => {
            const active = onPagesScreen ? item === "Pages" : item === "Dashboard";
            const hovered = !onPagesScreen && item === "Pages" && step === 0;
            return (
              <p
                key={item}
                ref={item === "Pages" ? setTarget("pages") : undefined}
                className={`flex items-center gap-1 rounded-[5px] px-1 py-[3px] text-[8px] font-semibold transition-colors duration-300 ${
                  active
                    ? "bg-brand-soft/35 text-navy-foreground"
                    : hovered
                      ? "bg-navy-foreground/10 text-navy-foreground/90"
                      : "text-navy-foreground/55"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-[2px] bg-navy-foreground/40" />
                {item}
              </p>
            );
          })}
        </div>

        <div className="relative min-h-[112px] p-3">
          {!onEditor ? (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {onPagesScreen ? "Pages" : "At a glance"}
                </p>
                <span
                  ref={setTarget("addNew")}
                  className={`rounded-full px-2 py-[3px] text-[8px] font-bold transition-colors duration-300 ${
                    onPagesScreen
                      ? "bg-brand-soft text-navy-foreground"
                      : "border border-border text-muted-foreground"
                  }`}
                >
                  Add New
                </span>
              </div>
              <div className="mt-2 space-y-1.5">
                {["Home", "Services", "Case Studies"].map((row) => (
                  <div
                    key={row}
                    className="flex items-center justify-between rounded-lg bg-mist px-2 py-1.5"
                  >
                    <span className="text-[8px] font-bold text-foreground">{row}</span>
                    <span className="text-[8px] font-semibold text-muted-foreground">
                      Published
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Add new page
              </p>
              <div ref={setTarget("title")} className="mt-2 rounded-lg border border-border px-2 py-1.5">
                <span className="text-[9px] font-bold text-foreground">
                  {TITLE.slice(0, typed)}
                </span>
                <span className="ml-px inline-block h-2.5 w-px animate-pulse bg-foreground align-middle" />
              </div>
              <div className="mt-1.5 space-y-1">
                <span className="block h-1.5 w-full rounded-full bg-mist" />
                <span className="block h-1.5 w-4/5 rounded-full bg-mist" />
              </div>
              <div className="mt-2.5 flex items-center gap-2">
                <span
                  ref={setTarget("publish")}
                  className={`rounded-full px-2.5 py-1 text-[8px] font-bold transition-colors duration-300 ${
                    published ? "bg-ember text-navy" : "bg-navy text-navy-foreground"
                  }`}
                >
                  {published ? "Published ✓" : "Publish"}
                </span>
                <span
                  className="rounded-full border border-border px-2.5 py-1 text-[8px] font-bold text-muted-foreground"
                >
                  Preview
                </span>
                <span className="flex items-center gap-1 text-[8px] font-bold text-ember">
                  <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-ember" />
                  {published ? "Live" : "Autosaved"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* cursor */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 transition-transform duration-700 ease-in-out"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      >
        {current.click && (
          <span className="absolute -left-2 -top-2 block h-5 w-5 animate-ping rounded-full bg-ember/40" />
        )}
        <svg viewBox="0 0 12 18" className="relative h-4 w-4 drop-shadow" aria-hidden>
          <path
            d="M1 1 L1 14 L4.6 10.8 L7 16.5 L9.4 15.4 L7 9.8 L11 9.4 Z"
            fill="var(--navy-foreground)"
            stroke="var(--navy)"
            strokeWidth="1"
          />
        </svg>
      </span>
    </div>
  );
}
