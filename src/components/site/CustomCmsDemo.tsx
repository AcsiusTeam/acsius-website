import { useEffect, useState } from "react";

const NAV = ["Pages", "Blocks", "Media", "Roles"];

const BLOCKS = [
  { label: "Hero banner", w: "100%", tone: "ember" },
  { label: "Feature grid · 3 col", w: "82%", tone: "blue" },
  { label: "Testimonial slider", w: "64%", tone: "blue" },
  { label: "Pricing table", w: "74%", tone: "ember" },
  { label: "Enquiry form", w: "56%", tone: "blue" },
];

const LOG = [
  { icon: "✎", text: "Draft saved · Home hero · Priya", tone: "blue" },
  { icon: "☑", text: "Approved · Careers page · Editor", tone: "ember" },
  { icon: "➤", text: "Published via API · 4 channels", tone: "blue" },
  { icon: "◈", text: "New block added · Case study", tone: "ember" },
  { icon: "◉", text: "Locale synced · Hindi · 12 pages", tone: "blue" },
];

/** Animated custom CMS admin panel: block builder, workflow and publish log. */
export function CustomCmsDemo() {
  const [nav, setNav] = useState(0);
  const [tick, setTick] = useState(0);
  const [built, setBuilt] = useState(2);

  useEffect(() => {
    const t = setInterval(() => {
      setTick((v) => v + 1);
      setNav((v) => (v + 1) % NAV.length);
      setBuilt((v) => (v >= BLOCKS.length ? 2 : v + 1));
    }, 1900);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[oklch(0.18_0.03_255)] shadow-lift">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-3 truncate text-[11px] font-bold text-white/50">
          cms.yourbrand.in / editor
        </span>
      </div>

      <div className="grid grid-cols-[78px_1fr]">
        <div className="border-r border-white/10 p-3">
          {NAV.map((n, i) => (
            <div
              key={n}
              className={`mb-1.5 rounded-xl px-2.5 py-2 text-[10px] font-black uppercase tracking-[0.08em] transition-colors duration-500 ${
                nav === i ? "bg-ember text-primary-foreground" : "text-white/40"
              }`}
            >
              {n}
            </div>
          ))}
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: "Templates", v: "24" },
              { k: "Locales", v: "12" },
              { k: "Roles", v: "6" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/[0.05] px-3 py-2.5">
                <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
                  {s.k}
                </p>
                <p className="mt-1 font-display text-sm font-extrabold text-white">{s.v}</p>
              </div>
            ))}
          </div>

          {/* block builder */}
          <div className="mt-3 rounded-2xl bg-white/[0.05] p-3.5">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">
                Page builder · Home
              </p>
              <p className="font-display text-[10px] font-extrabold text-ember">
                {built}/{BLOCKS.length} blocks
              </p>
            </div>
            <div className="mt-2.5 space-y-1.5">
              {BLOCKS.map((b, i) => {
                const on = i < built;
                return (
                  <div key={b.label} className="flex items-center gap-2">
                    <span
                      className={`grid h-4 w-4 shrink-0 place-items-center rounded-md text-[8px] font-black transition-colors duration-500 ${
                        on ? "bg-ember text-primary-foreground" : "bg-white/10 text-white/30"
                      }`}
                    >
                      {on ? "✓" : "＋"}
                    </span>
                    <span
                      className="h-3 rounded-md transition-all duration-[1200ms] ease-out"
                      style={{
                        width: on ? b.w : "18%",
                        background:
                          b.tone === "ember"
                            ? "oklch(0.71 0.17 52 / 0.75)"
                            : "oklch(0.62 0.11 250 / 0.7)",
                      }}
                    />
                    <span className="truncate text-[9px] font-semibold text-white/45">
                      {b.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* workflow lane */}
          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {["Draft", "Review", "Legal", "Live"].map((s, i) => {
              const on = i <= tick % 4;
              return (
                <div
                  key={s}
                  className={`rounded-xl px-2 py-2 text-center text-[9px] font-black uppercase tracking-[0.06em] transition-colors duration-500 ${
                    on ? "bg-ember/25 text-ember" : "bg-white/[0.05] text-white/35"
                  }`}
                >
                  {s}
                </div>
              );
            })}
          </div>

          {/* activity log */}
          <div className="mt-3 space-y-1.5">
            {[0, 1].map((offset) => {
              const item = LOG[(tick + offset) % LOG.length]!;
              return (
                <div
                  key={offset}
                  className="flex animate-[fadeUp_0.5s_ease-out_both] items-center gap-2.5 rounded-xl bg-white/[0.05] px-3 py-2"
                >
                  <span
                    className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-black ${
                      item.tone === "ember"
                        ? "bg-ember text-primary-foreground"
                        : "bg-white/15 text-white"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="truncate text-[11px] font-semibold text-white/70">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
