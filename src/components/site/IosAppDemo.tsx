import { useEffect, useState, type ReactElement } from "react";

type Screen = {
  key: string;
  label: string;
  render: () => ReactElement;
};

function Bar({ w, tone = "mist" }: { w: string; tone?: "mist" | "primary" | "ember" }) {
  const bg =
    tone === "primary" ? "bg-primary/70" : tone === "ember" ? "bg-ember/80" : "bg-foreground/12";
  return <span className={`block h-2 rounded-full ${bg}`} style={{ width: w }} />;
}

const SCREENS: Screen[] = [
  {
    key: "signin",
    label: "Sign in with Apple",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between">
        <div className="space-y-3">
          <div className="h-20 rounded-3xl bg-primary/12" />
          <Bar w="66%" tone="primary" />
          <Bar w="88%" />
          <Bar w="54%" />
        </div>
        <div className="space-y-2">
          <div className="grid h-9 place-items-center rounded-xl bg-navy text-[10px] font-black text-navy-foreground">
             Sign in with Apple
          </div>
          <div className="grid h-9 place-items-center rounded-xl border border-foreground/12 text-[10px] font-bold text-foreground/60">
            Use email instead
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "widgets",
    label: "Home screen & widgets",
    render: () => (
      <div className="flex h-full w-full flex-col gap-2.5">
        <div className="rounded-2xl border border-foreground/8 bg-primary/8 p-3">
          <p className="text-[8px] font-black uppercase tracking-[0.14em] text-primary">Widget</p>
          <p className="mt-1 text-base font-black leading-none text-foreground">8,412</p>
          <p className="mt-1 text-[9px] font-bold text-ember">↑ steps today</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className={`aspect-square rounded-xl ${i % 3 === 0 ? "bg-ember/60" : "bg-foreground/10"}`}
              style={{ animation: `ios-pop 420ms ease-out ${i * 55}ms both` }}
            />
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 rounded-2xl border border-foreground/8 p-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-ember text-[9px] font-black text-primary-foreground">
            ●
          </span>
          <Bar w="58%" tone="ember" />
        </div>
      </div>
    ),
  },
  {
    key: "applepay",
    label: "Apple Pay checkout",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between">
        <div className="space-y-2.5">
          <Bar w="46%" tone="primary" />
          <div className="rounded-2xl border border-foreground/8 p-2.5">
            <div className="flex items-center justify-between">
              <Bar w="46%" />
              <span className="text-[9px] font-black text-foreground/70">Pro plan</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <Bar w="32%" />
              <span className="text-[9px] font-black text-foreground/70">7-day trial</span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-primary/10 p-2.5">
            <span className="h-6 w-9 rounded-md bg-primary/40" />
            <Bar w="48%" tone="primary" />
          </div>
        </div>
        <div
          className="grid h-9 place-items-center whitespace-nowrap rounded-xl bg-navy px-3 text-[10px] font-black text-navy-foreground"
          style={{ animation: "ios-pulse 1.4s ease-in-out infinite" }}
        >
           Pay · Face ID
        </div>
      </div>
    ),
  },
  {
    key: "health",
    label: "HealthKit & Watch",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between">
        <div className="space-y-1.5">
          <Bar w="40%" tone="primary" />
          <p className="text-lg font-black leading-none text-foreground">72 bpm</p>
          <p className="text-[9px] font-bold text-ember">Watch synced · live</p>
        </div>
        <div className="relative mx-auto grid h-24 w-24 place-items-center">
          <span className="absolute inset-0 rounded-full border-[7px] border-foreground/10" />
          <span
            className="absolute inset-0 rounded-full border-[7px] border-ember border-r-transparent border-b-transparent"
            style={{ animation: "ios-spin 2.6s linear infinite" }}
          />
          <span className="text-[10px] font-black text-foreground">86%</span>
        </div>
        <div className="flex gap-1.5">
          {["Move", "Exercise", "Stand"].map((r, i) => (
            <span
              key={r}
              className={`flex-1 rounded-lg px-1 py-1 text-center text-[8px] font-black ${
                i === 0 ? "bg-ember/15 text-ember" : "bg-foreground/8 text-foreground/60"
              }`}
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "review",
    label: "App Store live",
    render: () => (
      <div className="flex h-full w-full flex-col justify-center gap-3 text-center">
        <span
          className="mx-auto grid h-14 w-14 place-items-center rounded-3xl bg-ember text-xl font-black text-primary-foreground"
          style={{ animation: "ios-pop 520ms cubic-bezier(.2,1.4,.4,1) both" }}
        >
          ✓
        </span>
        <p className="text-[11px] font-black text-foreground">Ready for sale</p>
        <p className="text-[9px] text-foreground/50">Approved on first review pass</p>
        <div className="mx-auto flex items-center gap-0.5 text-[10px] text-ember">★★★★★</div>
        <div className="mx-auto mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-foreground/10">
          <span
            className="block h-full w-1/3 rounded-full bg-primary"
            style={{ animation: "ios-track 1.6s ease-in-out infinite" }}
          />
        </div>
      </div>
    ),
  },
];

export function IosAppDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const screen = SCREENS[index]!;

  return (
    <div className="relative mx-auto w-[248px] max-w-full" data-testid="ios-phone-demo">
      <style>{`
        @keyframes ios-pop { from { opacity: 0; transform: scale(.6);} to { opacity: 1; transform: none;} }
        @keyframes ios-pulse { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-3px);} }
        @keyframes ios-track { 0% { transform: translateX(-10%);} 100% { transform: translateX(230%);} }
        @keyframes ios-spin { to { transform: rotate(360deg);} }
      `}</style>

      <div className="relative rounded-[42px] border border-white/15 bg-navy p-2.5 shadow-lift">
        <div className="relative overflow-hidden rounded-[34px] bg-background">
          <div className="flex items-center justify-between px-5 pt-3 text-[8px] font-black text-foreground/45">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              5G
            </span>
          </div>
          <span
            aria-hidden
            className="absolute left-1/2 top-2 h-4 w-14 -translate-x-1/2 rounded-full bg-navy"
          />
          <div
            key={screen.key}
            className="h-[292px] w-full animate-in fade-in px-4 pb-4 pt-4 duration-500"
          >
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
