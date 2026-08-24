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
    key: "onboard",
    label: "Onboarding",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between">
        <div className="space-y-3">
          <div className="h-24 rounded-2xl bg-primary/12" />
          <Bar w="72%" tone="primary" />
          <Bar w="90%" />
          <Bar w="62%" />
        </div>
        <div className="space-y-2">
          <div className="grid h-9 place-items-center rounded-full bg-primary text-[10px] font-black text-primary-foreground">
            Create account
          </div>
          <div className="grid h-9 place-items-center rounded-full border border-foreground/12 text-[10px] font-bold text-foreground/60">
            Continue with Apple
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "feed",
    label: "Marketplace",
    render: () => (
      <div className="flex h-full w-full flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <span className="h-6 flex-1 rounded-full bg-foreground/8" />
          <span className="grid h-6 w-6 place-items-center rounded-full bg-ember text-[9px] font-black text-primary-foreground">
            3
          </span>
        </div>
        <div className="flex gap-1.5">
          {["All", "Near", "Top"].map((c, i) => (
            <span
              key={c}
              className={`rounded-full px-2.5 py-1 text-[8px] font-black ${
                i === 0 ? "bg-navy text-navy-foreground" : "bg-foreground/8 text-foreground/60"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-2xl border border-foreground/8 p-2"
            style={{ animation: `phone-row-in 500ms ease-out ${i * 120}ms both` }}
          >
            <span className="h-9 w-9 shrink-0 rounded-xl bg-primary/15" />
            <span className="min-w-0 flex-1 space-y-1.5">
              <Bar w="70%" />
              <Bar w="45%" tone="ember" />
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "checkout",
    label: "Checkout",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between">
        <div className="space-y-2.5">
          <Bar w="50%" tone="primary" />
          <div className="rounded-2xl border border-foreground/8 p-2.5">
            <div className="flex items-center justify-between">
              <Bar w="46%" />
              <span className="text-[9px] font-black text-foreground/70">₹1,240</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <Bar w="34%" />
              <span className="text-[9px] font-black text-foreground/70">₹ 320</span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-primary/10 p-2.5">
            <span className="h-6 w-9 rounded-md bg-primary/40" />
            <Bar w="50%" tone="primary" />
          </div>
        </div>
        <div
          className="grid h-9 place-items-center rounded-full bg-ember text-[10px] font-black text-primary-foreground"
          style={{ animation: "phone-pulse 1.4s ease-in-out infinite" }}
        >
          Pay ₹1,560
        </div>
      </div>
    ),
  },
  {
    key: "success",
    label: "Confirmed",
    render: () => (
      <div className="flex h-full w-full flex-col justify-center gap-3 text-center">
        <span
          className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ember text-xl font-black text-primary-foreground"
          style={{ animation: "phone-pop 520ms cubic-bezier(.2,1.4,.4,1) both" }}
        >
          ✓
        </span>
        <p className="text-[11px] font-black text-foreground">Order confirmed</p>
        <p className="text-[9px] text-foreground/50">Live tracking started</p>
        <div className="mx-auto mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-foreground/10">
          <span className="block h-full w-1/3 rounded-full bg-primary" style={{ animation: "phone-track 1.6s ease-in-out infinite" }} />
        </div>
      </div>
    ),
  },
  {
    key: "analytics",
    label: "Insights",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between">
        <div className="space-y-1.5">
          <Bar w="42%" tone="primary" />
          <p className="text-lg font-black leading-none text-foreground">12.4k</p>
          <p className="text-[9px] font-bold text-ember">↑ 38% installs</p>
        </div>
        <div className="flex h-24 items-end gap-1.5">
          {[28, 44, 36, 58, 50, 74, 92].map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t-md ${i === 6 ? "bg-ember" : "bg-primary/45"}`}
              style={{ height: `${h}%`, animation: `phone-bar-in 620ms ease-out ${i * 70}ms both` }}
            />
          ))}
        </div>
      </div>
    ),
  },
];

export function AppPhoneDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const screen = SCREENS[index]!;

  return (
    <div className="relative mx-auto w-[248px] max-w-full" data-testid="phone-demo">
      <style>{`
        @keyframes phone-row-in { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none;} }
        @keyframes phone-bar-in { from { transform: scaleY(0.15); opacity: .3; transform-origin: bottom;} to { transform: scaleY(1); opacity: 1; transform-origin: bottom;} }
        @keyframes phone-pop { from { transform: scale(.4); opacity: 0;} to { transform: scale(1); opacity: 1;} }
        @keyframes phone-pulse { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-3px);} }
        @keyframes phone-track { 0% { transform: translateX(-10%);} 100% { transform: translateX(230%);} }
      `}</style>

      <div className="relative rounded-[38px] border border-white/15 bg-navy p-2.5 shadow-lift">
        <div className="relative overflow-hidden rounded-[30px] bg-background">
          <div className="flex items-center justify-between px-4 pt-3 text-[8px] font-black text-foreground/45">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              5G
            </span>
          </div>
          <span
            aria-hidden
            className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-navy"
          />
          <div key={screen.key} className="h-[292px] w-full px-4 pb-4 pt-4 animate-in fade-in duration-500">
            {screen.render()}
          </div>
          <div className="flex items-center justify-around border-t border-foreground/8 px-4 py-2.5">
            {SCREENS.map((s, i) => (
              <span
                key={s.key}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-6 bg-ember" : "w-1.5 bg-foreground/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[10px] font-black uppercase tracking-[0.18em] text-navy-foreground/70">
        {screen.label}
      </p>
    </div>
  );
}
