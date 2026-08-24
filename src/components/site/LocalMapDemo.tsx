import { useEffect, useState } from "react";

const RESULTS = [
  { name: "ACSIUS-optimised client", rating: "4.9", reviews: 412, dist: "0.8 km" },
  { name: "Competitor A", rating: "4.2", reviews: 138, dist: "1.4 km" },
  { name: "Competitor B", rating: "3.9", reviews: 76, dist: "2.1 km" },
];

/** Animated local map-pack + grid visibility panel used on the Local SEO page hero. */
export function LocalMapDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setStep((s) => (s + 1) % 4), 1400);
    return () => window.clearInterval(id);
  }, []);

  const grid = Array.from({ length: 25 }, (_, i) => {
    const ring = Math.max(Math.abs((i % 5) - 2), Math.abs(Math.floor(i / 5) - 2));
    return ring <= step;
  });

  return (
    <div className="space-y-5 text-navy-foreground">
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ember text-xs font-black text-primary-foreground">
          G
        </span>
        <span className="flex-1 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm text-navy-foreground/70">
          dentist near me — New Delhi
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
        <ul className="space-y-3">
          {RESULTS.map((r, i) => (
            <li
              key={r.name}
              className={`rounded-2xl border px-4 py-4 transition-all duration-500 ${
                i === 0
                  ? "border-ember/60 bg-ember/12 shadow-ember"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold">{r.name}</p>
                <span className="text-xs font-semibold text-navy-foreground/55">{r.dist}</span>
              </div>
              <p className="mt-1.5 text-xs text-navy-foreground/60">
                <span className="font-bold text-ember">{r.rating}★</span> · {r.reviews} reviews
                {i === 0 ? " · Open now" : ""}
              </p>
              {i === 0 && (
                <div className="mt-3 flex gap-2">
                  <span className="rounded-full bg-ember px-3 py-1.5 text-xs font-bold text-primary-foreground">
                    Call
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold">
                    Directions
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="self-start rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-ember">Grid rank</p>
          <div className="mt-3 grid grid-cols-5 gap-1.5">
            {grid.map((on, i) => (
              <span
                key={i}
                className={`h-5 w-5 rounded-md transition-colors duration-500 ${
                  on ? "bg-ember" : "bg-white/12"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-xs text-navy-foreground/60">
            Top-3 zones: {grid.filter(Boolean).length}/25
          </p>
        </div>
      </div>
    </div>
  );
}
