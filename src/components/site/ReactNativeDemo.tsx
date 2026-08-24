import { useEffect, useState } from "react";

const SCREENS = [
  { key: "home", label: "Home", chip: "Feed" },
  { key: "detail", label: "Product", chip: "Detail" },
  { key: "pay", label: "Checkout", chip: "Pay" },
] as const;

function Bar({ w, tone = "mute" }: { w: string; tone?: "mute" | "ember" | "blue" }) {
  const bg =
    tone === "ember" ? "bg-ember/80" : tone === "blue" ? "bg-[oklch(0.62_0.11_250)]/80" : "bg-white/15";
  return <span className={`block h-2 rounded-full ${bg}`} style={{ width: w }} />;
}

function ScreenBody({ index, os }: { index: number; os: "ios" | "android" }) {
  if (index === 0) {
    return (
      <div className="flex h-full flex-col gap-3">
        <div className="h-16 rounded-xl bg-[oklch(0.62_0.11_250)]/25" />
        <Bar w="70%" tone="blue" />
        <Bar w="90%" />
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-xl bg-white/[0.06] p-2">
            <span className="h-8 w-8 shrink-0 rounded-lg bg-ember/40" />
            <span className="flex-1 space-y-1.5">
              <Bar w="80%" />
              <Bar w="45%" tone="ember" />
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="flex h-full flex-col gap-3">
        <div className="h-28 rounded-xl bg-ember/25" />
        <Bar w="60%" tone="ember" />
        <Bar w="88%" />
        <Bar w="74%" />
        <div
          className={`mt-auto grid h-8 place-items-center text-[10px] font-black text-navy ${
            os === "ios" ? "rounded-xl bg-white/85" : "rounded-full bg-ember text-primary-foreground"
          }`}
        >
          Add to cart
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col gap-3">
      <Bar w="55%" tone="blue" />
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center justify-between gap-2 rounded-xl bg-white/[0.06] px-2 py-2">
          <Bar w="60px" />
          <Bar w="28px" tone="ember" />
        </div>
      ))}
      <div className="mt-auto grid h-10 place-items-center whitespace-nowrap rounded-full bg-[oklch(0.86_0.09_160)] px-3 text-[8px] font-black leading-none text-navy">
        Pay · Apple / Google Pay
      </div>
    </div>
  );
}

function Phone({ os, index }: { os: "ios" | "android"; index: number }) {
  return (
    <div
      className={`w-[150px] shrink-0 border border-white/15 bg-navy/90 p-2 shadow-lift ${
        os === "ios" ? "rounded-[26px]" : "rounded-[16px]"
      }`}
    >
      <div className="mb-1.5 flex items-center justify-between px-1.5">
        <span className="text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/50">
          {os === "ios" ? "iOS" : "Android"}
        </span>
        <span
          className={`h-1.5 rounded-full bg-white/25 ${os === "ios" ? "w-8" : "w-1.5"}`}
          aria-hidden
        />
      </div>
      <div
        key={index}
        className={`h-[220px] animate-[fadeUp_0.45s_ease-out_both] bg-black/30 p-3 ${
          os === "ios" ? "rounded-[18px]" : "rounded-[12px]"
        }`}
      >
        <ScreenBody index={index} os={os} />
      </div>
    </div>
  );
}

/** Animated dual-platform React Native preview: one codebase, two stores. */
export function ReactNativeDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), 2600);
    return () => window.clearInterval(timer);
  }, []);

  const screen = SCREENS[index]!;

  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/10 bg-navy/95 shadow-lift backdrop-blur"
      role="img"
      aria-label="React Native app preview rendering the same screen on iOS and Android from one codebase"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ember" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-1 text-[10px] font-bold uppercase tracking-[0.16em] text-navy-foreground/60">
          React Native · App.tsx
        </span>
        <span className="ml-auto text-[10px] font-black uppercase tracking-[0.14em] text-ember">
          {screen.chip}
        </span>
      </div>

      <div className="flex items-center justify-center gap-4 px-5 py-7">
        <Phone os="ios" index={index} />
        <div className="flex flex-col items-center gap-1.5">
          <span aria-hidden className="h-12 w-px bg-white/15" />
          <span className="whitespace-nowrap rounded-full border border-ember/40 bg-ember/10 px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-ember">
            1 codebase
          </span>
          <span aria-hidden className="h-12 w-px bg-white/15" />
        </div>
        <Phone os="android" index={index} />
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[10px] font-bold text-[oklch(0.86_0.09_160)]">
          <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-[oklch(0.86_0.09_160)]" />
          {screen.label} · fast refresh
        </span>
        <span className="text-[10px] font-bold text-navy-foreground/55">60 fps</span>
      </div>
    </div>
  );
}
