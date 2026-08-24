import { useEffect, useState } from "react";

const RESULTS = [
  { site: "acsius.com", title: "WordPress Development Company in India", top: true },
  { site: "agency-two.com", title: "Web design services — portfolio" },
  { site: "agency-three.io", title: "Hire WordPress developers" },
];

/** Looping mock Google SERP that climbs to #1 and highlights the top ranking. */
export function SeoSerpDemo() {
  const [rank, setRank] = useState(3);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRank((r) => (r <= 1 ? 3 : r - 1));
    }, 1500);
    return () => window.clearInterval(timer);
  }, []);

  const ordered = [...RESULTS];
  const ours = ordered.splice(
    ordered.findIndex((r) => r.top),
    1,
  )[0]!;
  ordered.splice(rank - 1, 0, ours);

  return (
    <div
      className="flex h-full flex-col w-full overflow-hidden rounded-2xl border border-line bg-card shadow-lift"
      role="img"
      aria-label="Animated Google search results showing ACSIUS ranking number one"
    >
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="h-4 w-4 rounded-full border-2 border-primary border-r-ember" />
        <span className="flex-1 truncate rounded-full bg-mist px-2 py-1 text-[8px] font-semibold text-muted-foreground">
          wordpress development company
        </span>
      </div>

      <ul className="flex-1 space-y-1 p-2">
        {ordered.map((r, i) => {
          const isOurs = r.top;
          return (
            <li
              key={r.site}
              className={`rounded-xl px-2 py-1.5 transition-all duration-500 ${
                isOurs ? "bg-primary/8 ring-1 ring-primary/40" : ""
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full text-[7px] font-black ${
                    isOurs ? "bg-ember text-navy" : "bg-mist text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`truncate text-[8px] font-bold ${
                    isOurs ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {r.site}
                </span>
              </div>
              <p
                className={`mt-0.5 truncate text-[9px] font-semibold ${
                  isOurs ? "text-foreground" : "text-muted-foreground/80"
                }`}
              >
                {r.title}
              </p>
              {isOurs && (
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-mist">
                  <span
                    className="block h-full rounded-full bg-ember transition-all duration-700"
                    style={{ width: `${(4 - rank) * 33}%` }}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-between border-t border-line px-3 py-1.5">
        <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          SEO · rank tracker
        </span>
        <span className="text-[8px] font-black text-ember">▲ #{rank}</span>
      </div>
    </div>
  );
}
