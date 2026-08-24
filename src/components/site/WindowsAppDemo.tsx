import { useEffect, useState, type ReactElement } from "react";

type Screen = {
  key: string;
  label: string;
  title: string;
  render: () => ReactElement;
};

function Bar({ w, tone = "mist" }: { w: string; tone?: "mist" | "primary" | "ember" }) {
  const bg =
    tone === "primary" ? "bg-primary/70" : tone === "ember" ? "bg-ember/80" : "bg-foreground/12";
  return <span className={`block h-2 rounded-full ${bg}`} style={{ width: w }} />;
}

const SCREENS: Screen[] = [
  {
    key: "hello",
    label: "Windows Hello sign-in",
    title: "Sign in",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between">
        <div className="space-y-3">
          <div className="h-14 rounded-2xl bg-primary/12" />
          <Bar w="52%" tone="primary" />
          <Bar w="80%" />
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-foreground/10 p-3">
          <span
            className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-[11px] font-black text-primary"
            style={{ animation: "win-pulse 1.5s ease-in-out infinite" }}
          >
            ◉
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-black text-foreground">Windows Hello</p>
            <p className="text-[9px] text-foreground/50">Face recognised · Entra ID</p>
          </div>
          <span className="text-[11px] font-black text-ember">✓</span>
        </div>
      </div>
    ),
  },
  {
    key: "dashboard",
    label: "Line-of-business dashboard",
    title: "Operations",
    render: () => (
      <div className="flex h-full w-full flex-col gap-2.5">
        <div className="grid grid-cols-3 gap-2">
          {[
            { k: "Orders", v: "1,284" },
            { k: "Uptime", v: "99.9%" },
            { k: "Queue", v: "07" },
          ].map((c, i) => (
            <div
              key={c.k}
              className="rounded-xl border border-foreground/8 bg-primary/6 p-2"
              style={{ animation: `win-pop 400ms ease-out ${i * 80}ms both` }}
            >
              <p className="text-[8px] font-black uppercase tracking-[0.12em] text-primary">{c.k}</p>
              <p className="mt-0.5 text-[13px] font-black leading-none text-foreground">{c.v}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-xl border border-foreground/8 p-2.5">
          {[38, 55, 44, 72, 60, 88, 76].map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t-sm ${i === 5 ? "bg-ember" : "bg-primary/45"}`}
              style={{ height: `${h}%`, animation: `win-rise 620ms ease-out ${i * 70}ms both` }}
            />
          ))}
        </div>
        <div className="space-y-1.5">
          <Bar w="70%" />
          <Bar w="46%" tone="ember" />
        </div>
      </div>
    ),
  },
  {
    key: "grid",
    label: "Data grid & printing",
    title: "Records",
    render: () => (
      <div className="flex h-full w-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <Bar w="34%" tone="primary" />
          <span className="rounded-md bg-foreground/8 px-2 py-0.5 text-[8px] font-black text-foreground/60">
            Print · Ctrl+P
          </span>
        </div>
        <div className="flex-1 overflow-hidden rounded-xl border border-foreground/10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-2.5 py-[7px] ${i === 2 ? "bg-primary/10" : i % 2 ? "bg-foreground/[0.03]" : ""}`}
              style={{ animation: `win-slide 420ms ease-out ${i * 55}ms both` }}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember/70" />
              <Bar w={`${34 + ((i * 11) % 34)}%`} />
              <span className="ml-auto text-[8px] font-black text-foreground/45">
                {i === 2 ? "Edit" : "OK"}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: "devices",
    label: "Hardware & devices",
    title: "Devices",
    render: () => (
      <div className="flex h-full w-full flex-col justify-between gap-2">
        {[
          { n: "Barcode scanner", s: "COM3 · reading" },
          { n: "Receipt printer", s: "USB · ready" },
          { n: "Weighing scale", s: "COM5 · 2.41 kg" },
        ].map((d, i) => (
          <div
            key={d.n}
            className="flex items-center gap-2.5 rounded-xl border border-foreground/8 p-2.5"
            style={{ animation: `win-slide 420ms ease-out ${i * 90}ms both` }}
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-ember/15 text-[9px] font-black text-ember">
              ▤
            </span>
            <div className="min-w-0">
              <p className="truncate text-[10px] font-black text-foreground">{d.n}</p>
              <p className="truncate text-[9px] text-foreground/50">{d.s}</p>
            </div>
            <span
              className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              style={{ animation: "win-pulse 1.2s ease-in-out infinite" }}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "store",
    label: "MSIX signed & live",
    title: "Release",
    render: () => (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 text-center">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl bg-ember text-lg font-black text-primary-foreground"
          style={{ animation: "win-pop 520ms cubic-bezier(.2,1.4,.4,1) both" }}
        >
          ✓
        </span>
        <p className="text-[11px] font-black text-foreground">Certification passed</p>
        <p className="text-[9px] text-foreground/50">MSIX signed · auto-update on</p>
        <div className="mt-1 h-1.5 w-28 overflow-hidden rounded-full bg-foreground/10">
          <span
            className="block h-full w-1/3 rounded-full bg-primary"
            style={{ animation: "win-track 1.6s ease-in-out infinite" }}
          />
        </div>
      </div>
    ),
  },
];

export function WindowsAppDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const screen = SCREENS[index]!;

  return (
    <div className="relative mx-auto w-full max-w-[380px]" data-testid="windows-app-demo">
      <style>{`
        @keyframes win-pop { from { opacity: 0; transform: scale(.7);} to { opacity: 1; transform: none;} }
        @keyframes win-pulse { 0%,100% { opacity: 1;} 50% { opacity: .35;} }
        @keyframes win-track { 0% { transform: translateX(-10%);} 100% { transform: translateX(230%);} }
        @keyframes win-rise { from { height: 8%; opacity: .3;} }
        @keyframes win-slide { from { opacity: 0; transform: translateX(-8px);} to { opacity: 1; transform: none;} }
      `}</style>

      <div className="relative rounded-[22px] border border-white/15 bg-navy p-2 shadow-lift">
        <div className="relative overflow-hidden rounded-[16px] bg-background">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-foreground/8 px-3 py-2">
            <span className="grid h-5 w-5 place-items-center rounded-md bg-primary/15 text-[9px] font-black text-primary">
              ⊞
            </span>
            <p className="truncate text-[9px] font-black uppercase tracking-[0.14em] text-foreground/55">
              {screen.title} — ACSIUS.App
            </p>
            <span className="ml-auto flex items-center gap-2 text-[9px] font-black text-foreground/35">
              <span>–</span>
              <span>▢</span>
              <span className="text-ember">✕</span>
            </span>
          </div>

          <div className="flex">
            {/* Nav rail */}
            <div className="flex w-11 shrink-0 flex-col items-center gap-2 border-r border-foreground/8 py-3">
              {SCREENS.map((s, i) => (
                <span
                  key={s.key}
                  className={`grid h-6 w-6 place-items-center rounded-lg text-[9px] font-black transition-all duration-500 ${
                    i === index
                      ? "bg-ember text-primary-foreground"
                      : "bg-foreground/8 text-foreground/40"
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>

            <div
              key={screen.key}
              className="min-w-0 flex-1 animate-in fade-in p-3.5 duration-500"
              style={{ height: 268 }}
            >
              {screen.render()}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-foreground/8 px-3 py-2 text-[8px] font-black uppercase tracking-[0.14em] text-foreground/40">
            <span>WinUI 3 · .NET 8</span>
            <span className="text-primary">Build #142 signed</span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[10px] font-black uppercase tracking-[0.18em] text-navy-foreground/70">
        {screen.label}
      </p>
    </div>
  );
}
