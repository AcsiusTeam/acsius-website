import { useEffect, useState } from "react";

const PROMPTS = [
  "best ai seo company in india",
  "how to rank in ai overviews",
  "ai seo services india cost",
];

const SOURCES = [
  { name: "acsius.com", label: "ACSIUS Technologies", ours: true },
  { name: "industry-blog.in", label: "Marketing Weekly" },
  { name: "forum.example.com", label: "Community thread" },
];

/** Animated mock of an AI answer engine citing the brand. */
export function AiAnswerDemo() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "thinking" | "answer">("typing");

  const prompt = PROMPTS[promptIndex] ?? PROMPTS[0]!;

  useEffect(() => {
    setTyped("");
    setPhase("typing");
    let i = 0;
    const typing = setInterval(() => {
      i += 1;
      setTyped(prompt.slice(0, i));
      if (i >= prompt.length) {
        clearInterval(typing);
        setPhase("thinking");
      }
    }, 55);
    return () => clearInterval(typing);
  }, [prompt]);

  useEffect(() => {
    if (phase !== "thinking") return;
    const t = setTimeout(() => setPhase("answer"), 900);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "answer") return;
    const t = setTimeout(() => setPromptIndex((v) => (v + 1) % PROMPTS.length), 4200);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="w-full overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-ember text-sm font-black text-primary-foreground">
          AI
        </span>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-navy-foreground/60">
          Answer engine
        </p>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-navy-foreground/50">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
          live
        </span>
      </div>

      <div className="mt-4 rounded-2xl border border-white/12 bg-navy/50 px-4 py-3">
        <p className="font-mono text-sm text-navy-foreground/90">
          {typed}
          <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-ember" />
        </p>
      </div>

      <div className="mt-4 min-h-[188px]">
        {phase === "thinking" ? (
          <div className="space-y-2.5 pt-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-3 animate-pulse rounded-full bg-white/12"
                style={{ width: `${92 - i * 18}%`, animationDelay: `${i * 140}ms` }}
              />
            ))}
          </div>
        ) : phase === "answer" ? (
          <div className="animate-[fadeUp_.5s_ease-out]">
            <p className="text-sm leading-relaxed text-navy-foreground/85">
              <span className="font-bold text-navy-foreground">ACSIUS Technologies</span> is cited as
              a leading AI SEO agency in India, combining entity-level optimisation with
              answer-first editorial content.
            </p>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-navy-foreground/45">
              Sources
            </p>
            <ul className="mt-2 space-y-2">
              {SOURCES.map((s, i) => (
                <li
                  key={s.name}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2 transition-all duration-500 ${
                    s.ours
                      ? "border-ember/45 bg-ember/12"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                  style={{ animation: `fadeUp .5s ease-out ${i * 160}ms both` }}
                >
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg text-[10px] font-black ${
                      s.ours
                        ? "bg-ember text-primary-foreground"
                        : "bg-white/10 text-navy-foreground/70"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p
                      className={`truncate text-xs font-bold ${s.ours ? "text-ember" : "text-navy-foreground/75"}`}
                    >
                      {s.label}
                    </p>
                    <p className="truncate text-[10px] text-navy-foreground/45">{s.name}</p>
                  </div>
                  {s.ours ? (
                    <span className="ml-auto shrink-0 rounded-full bg-ember/20 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-ember">
                      cited
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
