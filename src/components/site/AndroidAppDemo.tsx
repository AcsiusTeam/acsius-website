import { useEffect, useState, type ReactElement } from "react";

type Screen = {
  key: string;
  label: string;
  title: string;
  glyph: string;
  render: () => ReactElement;
};

function Bar({ w, tone = "mist" }: { w: string; tone?: "mist" | "primary" | "ember" }) {
  const bg =
    tone === "primary" ? "bg-primary/70" : tone === "ember" ? "bg-ember/80" : "bg-foreground/12";
  return <span className={`block h-2 rounded-full ${bg}`} style={{ width: w }} />;
}

const SCREENS: Screen[] = [
  {
    key: "auth",
    label: "Google & biometric sign-in",
    title: "Sign in",
    glyph: "◉",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between">
        <div className="space-y-3">
          <div className="h-12 rounded-2xl bg-primary/12" />
          <Bar w="58%" tone="primary" />
          <Bar w="82%" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-2xl border border-foreground/10 p-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/15 text-[10px] font-black text-primary">
              G
            </span>
            <p className="whitespace-nowrap text-[10px] font-black text-foreground">
              Continue with Google
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-foreground/10 p-2.5">
            <span
              className="grid h-7 w-7 place-items-center rounded-full bg-ember/15 text-[10px] font-black text-ember"
              style={{ animation: "and-pulse 1.5s ease-in-out infinite" }}
            >
              ⌾
            </span>
            <p className="whitespace-nowrap text-[10px] font-black text-foreground">
              Fingerprint unlock
            </p>
            <span className="ml-auto text-[10px] font-black text-ember">✓</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "home",
    label: "Compose home & live data",
    title: "Home",
    glyph: "▦",
    render: () => (
      <div className="flex h-full w-full flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2">
          {[
            { k: "Orders", v: "1,284" },
            { k: "Active", v: "312" },
          ].map((c, i) => (
            <div
              key={c.k}
              className="rounded-xl border border-foreground/8 bg-primary/6 p-2"
              style={{ animation: `and-pop 400ms ease-out ${i * 90}ms both` }}
            >
              <p className="text-[8px] font-black uppercase tracking-[0.12em] text-primary">{c.k}</p>
              <p className="mt-0.5 text-[13px] font-black leading-none text-foreground">{c.v}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-xl border border-foreground/8 p-2.5">
          {[36, 52, 44, 70, 58, 86, 74].map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t-sm ${i === 5 ? "bg-ember" : "bg-primary/45"}`}
              style={{ height: `${h}%`, animation: `and-rise 620ms ease-out ${i * 70}ms both` }}
            />
          ))}
        </div>
        <div className="space-y-1.5">
          <Bar w="72%" />
          <Bar w="44%" tone="ember" />
        </div>
      </div>
    ),
  },
  {
    key: "pay",
    label: "UPI & in-app payments",
    title: "Pay",
    glyph: "₹",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between gap-2">
        <div className="rounded-2xl border border-foreground/10 p-3">
          <p className="text-[8px] font-black uppercase tracking-[0.14em] text-foreground/45">
            Amount
          </p>
          <p className="mt-1 text-[18px] font-black leading-none text-foreground">₹ 2,499</p>
        </div>
        {["UPI · any app", "Card · saved", "Play Billing"].map((m, i) => (
          <div
            key={m}
            className={`flex items-center gap-2 rounded-xl border p-2.5 ${i === 0 ? "border-ember/40 bg-ember/8" : "border-foreground/8"}`}
            style={{ animation: `and-slide 420ms ease-out ${i * 80}ms both` }}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember/70" />
            <p className="whitespace-nowrap text-[10px] font-black text-foreground">{m}</p>
            {i === 0 && <span className="ml-auto text-[9px] font-black text-ember">Selected</span>}
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "offline",
    label: "Offline sync & push",
    title: "Sync",
    glyph: "⟳",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between gap-2">
        <div className="rounded-2xl border border-primary/25 bg-primary/8 p-2.5">
          <p className="text-[9px] font-black text-primary">Notification</p>
          <p className="mt-0.5 truncate text-[9px] text-foreground/60">
            3 forms uploaded from the field
          </p>
        </div>
        {[
          { n: "Visit report", s: "Queued offline" },
          { n: "Photo proof", s: "Uploading…" },
          { n: "Attendance", s: "Synced" },
        ].map((d, i) => (
          <div
            key={d.n}
            className="flex items-center gap-2.5 rounded-xl border border-foreground/8 p-2.5"
            style={{ animation: `and-slide 420ms ease-out ${i * 90}ms both` }}
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/12 text-[9px] font-black text-primary">
              ⇅
            </span>
            <div className="min-w-0">
              <p className="truncate text-[10px] font-black text-foreground">{d.n}</p>
              <p className="truncate text-[9px] text-foreground/50">{d.s}</p>
            </div>
            <span
              className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
              style={{ animation: "and-pulse 1.2s ease-in-out infinite" }}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "play",
    label: "Signed AAB live on Play",
    title: "Release",
    glyph: "▶",
    render: () => (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 text-center">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl bg-ember text-lg font-black text-primary-foreground"
          style={{ animation: "and-pop 520ms cubic-bezier(.2,1.4,.4,1) both" }}
        >
          ✓
        </span>
        <p className="text-[11px] font-black text-foreground">Play review passed</p>
        <p className="text-[9px] text-foreground/50">AAB signed · staged rollout 20%</p>
        <div className="mt-1 h-1.5 w-28 overflow-hidden rounded-full bg-foreground/10">
          <span
            className="block h-full w-1/3 rounded-full bg-primary"
            style={{ animation: "and-track 1.6s ease-in-out infinite" }}
          />
        </div>
      </div>
    ),
  },
];

export function AndroidAppDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const screen = SCREENS[index]!;

  return (
    <div className="relative mx-auto w-full max-w-[300px]" data-testid="android-app-demo">
      <style>{`
        @keyframes and-pop { from { opacity: 0; transform: scale(.7);} to { opacity: 1; transform: none;} }
        @keyframes and-pulse { 0%,100% { opacity: 1;} 50% { opacity: .35;} }
        @keyframes and-track { 0% { transform: translateX(-10%);} 100% { transform: translateX(230%);} }
        @keyframes and-rise { from { height: 8%; opacity: .3;} }
        @keyframes and-slide { from { opacity: 0; transform: translateX(-8px);} to { opacity: 1; transform: none;} }
      `}</style>

      <div className="relative rounded-[34px] border border-white/15 bg-navy p-2.5 shadow-lift">
        <div className="relative overflow-hidden rounded-[26px] bg-background">
          {/* Status bar */}
          <div className="flex items-center gap-2 px-4 pb-1.5 pt-2.5">
            <span className="h-1.5 w-10 rounded-full bg-foreground/15" />
            <span className="ml-auto text-[8px] font-black tracking-[0.1em] text-foreground/40">
              9:41 ▮▮ ▰
            </span>
          </div>

          {/* App bar */}
          <div className="flex items-center gap-2 border-b border-foreground/8 px-4 pb-2">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-primary/15 text-[10px] font-black text-primary">
              {screen.glyph}
            </span>
            <p className="truncate text-[10px] font-black uppercase tracking-[0.14em] text-foreground/55">
              {screen.title} · ACSIUS
            </p>
          </div>

          <div
            key={screen.key}
            className="min-w-0 animate-in fade-in px-4 py-3.5 duration-500"
            style={{ height: 262 }}
          >
            {screen.render()}
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-around border-t border-foreground/8 px-3 py-2.5">
            {SCREENS.map((s, i) => (
              <span
                key={s.key}
                className={`grid h-7 w-7 place-items-center rounded-xl text-[10px] font-black transition-all duration-500 ${
                  i === index
                    ? "bg-ember text-primary-foreground"
                    : "bg-foreground/8 text-foreground/40"
                }`}
              >
                {s.glyph}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-foreground/8 px-4 py-2 text-[8px] font-black uppercase tracking-[0.14em] text-foreground/40">
            <span>Kotlin · Compose</span>
            <span className="text-primary">Build #86 signed</span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[10px] font-black uppercase tracking-[0.18em] text-navy-foreground/70">
        {screen.label}
      </p>
    </div>
  );
}
