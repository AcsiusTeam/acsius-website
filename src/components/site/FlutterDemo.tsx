import { useEffect, useState } from "react";

const SNIPPETS = [
  { line: 12, text: "class ProductCard extends StatelessWidget {", cls: "text-[oklch(0.82_0.13_52)]" },
  { line: 13, text: "  const ProductCard({required this.product});", cls: "text-navy-foreground/80" },
  { line: 14, text: "  final Product product;", cls: "text-[oklch(0.62_0.11_250)]" },
  { line: 15, text: "  @override", cls: "text-navy-foreground/55" },
  { line: 16, text: "  Widget build(BuildContext context) {", cls: "text-[oklch(0.82_0.13_52)]" },
  { line: 17, text: "    return Container(", cls: "text-navy-foreground/90" },
  { line: 18, text: "      decoration: BoxDecoration(...),", cls: "text-navy-foreground/80" },
  { line: 19, text: "      child: Column(", cls: "text-navy-foreground/90" },
  { line: 20, text: "        children: [", cls: "text-navy-foreground/80" },
  { line: 21, text: "          Hero(tag: product.id, child: Image.network(...)),", cls: "text-[oklch(0.86_0.09_160)]" },
  { line: 22, text: "          Text(product.name, style: titleStyle),", cls: "text-navy-foreground/80" },
  { line: 23, text: "          PriceTag(amount: product.price),", cls: "text-navy-foreground/80" },
  { line: "—", text: "", cls: "" },
];

const TARGETS = [
  { label: "iOS", icon: "", active: true },
  { label: "Android", icon: "▶", active: true },
  { label: "Web", icon: "🌐", active: true },
];

/** Animated Flutter editor: Dart code on the left, live widget preview on the right. */
export function FlutterDemo() {
  const [cursor, setCursor] = useState(0);
  const [reloadTick, setReloadTick] = useState(0);

  useEffect(() => {
    const t1 = window.setInterval(() => setCursor((c) => (c + 1) % 8), 1200);
    const t2 = window.setInterval(() => setReloadTick((t) => t + 1), 2600);
    return () => {
      window.clearInterval(t1);
      window.clearInterval(t2);
    };
  }, []);

  const buildMs = 840 + (reloadTick % 5) * 90;
  const frameMs = 14 + (reloadTick % 3);

  return (
    <div
      className="overflow-hidden rounded-[26px] border border-white/10 bg-navy/95 shadow-lift backdrop-blur"
      role="img"
      aria-label="Animated Flutter code editor showing Dart widgets and a live cross-platform preview"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ember" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 text-[9px] font-black uppercase tracking-[0.18em] text-navy-foreground/60">
          Flutter 3 · main.dart
        </span>
        <span className="ml-auto rounded-full border border-white/12 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-navy-foreground/70">
          Dart 3
        </span>
      </div>

      <div className="grid gap-px border-b border-white/10 bg-white/10 sm:grid-cols-2">
        {/* Code pane */}
        <div className="min-w-0 overflow-hidden bg-navy/90 p-3.5 sm:p-4">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/55">
            lib / product_card.dart
          </p>
          <pre className="mt-3 space-y-1 font-mono text-[10px] leading-[1.55] sm:text-[11px]">
            {SNIPPETS.map((s, i) => (
              <div key={i} className="flex animate-[fadeUp_0.35s_ease-out_both]">
                <span className="w-5 shrink-0 select-none text-navy-foreground/30 sm:w-6">
                  {s.line !== "—" ? s.line : ""}
                </span>
                <span className={`${s.cls} overflow-hidden text-ellipsis whitespace-nowrap`}>{s.text}</span>
                {i === cursor && (
                  <span className="ml-0.5 inline-block h-[11px] w-[5px] translate-y-[2px] animate-pulse-dot bg-ember" />
                )}
              </div>
            ))}
          </pre>
        </div>

        {/* Preview pane */}
        <div className="min-w-0 overflow-hidden bg-navy/90 p-3.5 sm:p-4">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/55">
            Live preview
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 sm:gap-3">
            {TARGETS.map((t) => (
              <span
                key={t.label}
                className={`flex items-center gap-1 rounded-full border px-1.5 py-1 text-[8px] font-bold sm:px-2 sm:text-[9px] ${
                  t.active
                    ? "border-ember/40 bg-ember/10 text-ember"
                    : "border-white/12 bg-white/5 text-navy-foreground/50"
                }`}
              >
                <span aria-hidden>{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-4 w-[100px] rounded-[22px] border border-white/15 bg-black/30 p-2 shadow-lift sm:w-[110px]">
            <div className="mb-1.5 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-8 rounded-full bg-white/20" />
            </div>
            <div
              key={reloadTick}
              className="h-[140px] animate-[fadeUp_0.45s_ease-out_both] rounded-[14px] bg-gradient-to-b from-ember/20 to-navy/40 p-2.5"
            >
              <div className="h-16 rounded-lg bg-white/10" />
              <div className="mt-2 h-2 w-3/4 rounded-full bg-white/20" />
              <div className="mt-1.5 h-2 w-1/2 rounded-full bg-white/15" />
              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="h-6 flex-1 rounded-md bg-ember/70" />
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[oklch(0.86_0.09_160)] text-[10px] font-black text-navy">
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-px bg-white/10 sm:grid-cols-3">
        <div className="bg-navy/90 p-4">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/55">
            Hot reload
          </p>
          <p className="mt-2 font-display text-xl font-extrabold text-[oklch(0.86_0.09_160)]">
            {buildMs}ms
          </p>
          <p className="mt-1 text-[9px] font-bold text-navy-foreground/55">Reloaded 3 widgets</p>
        </div>
        <div className="bg-navy/90 p-4">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/55">
            Frame time
          </p>
          <p className="mt-2 font-display text-xl font-extrabold text-ember">{frameMs}ms</p>
          <p className="mt-1 text-[9px] font-bold text-navy-foreground/55">60 fps target</p>
        </div>
        <div className="bg-navy/90 p-4">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-navy-foreground/55">
            Widget tests
          </p>
          <p className="mt-2 font-display text-xl font-extrabold text-[oklch(0.62_0.11_250)]">
            94 passed
          </p>
          <p className="mt-1 text-[9px] font-bold text-navy-foreground/55">0 failed</p>
        </div>
      </div>
    </div>
  );
}
