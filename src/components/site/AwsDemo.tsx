import { useEffect, useState } from "react";

const STAGES = [
  {
    name: "terraform plan",
    service: "IaC",
    accent: "text-[oklch(0.62_0.11_250)]",
    bar: "bg-[oklch(0.62_0.11_250)]",
    lines: ["+ aws_lambda_function.api", "+ aws_dynamodb_table.orders"],
    out: "12 to add · 0 to destroy",
  },
  {
    name: "build & push",
    service: "ECR",
    accent: "text-ember",
    bar: "bg-ember",
    lines: ["docker build -t api:sha ." , "push → ecr/api:9f2c1d"],
    out: "image 84 MB · scanned clean",
  },
  {
    name: "deploy",
    service: "ECS Fargate",
    accent: "text-ember",
    bar: "bg-ember",
    lines: ["blue/green shift 10% → 100%", "target group healthy 4/4"],
    out: "rollout complete in 2m 41s",
  },
  {
    name: "verify",
    service: "CloudWatch",
    accent: "text-[oklch(0.86_0.09_160)]",
    bar: "bg-[oklch(0.86_0.09_160)]",
    lines: ["p95 latency 128ms", "alarms: 0 in ALARM"],
    out: "release marked stable",
  },
];

/**
 * Animated AWS pipeline console: stages run in sequence with a progress rail,
 * then a footer of live environment metrics. Stacked lanes, no overlap.
 */
export function AwsDemo() {
  const [active, setActive] = useState(0);
  const [runs, setRuns] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % (STAGES.length + 1);
        if (next === 0) setRuns((r) => r + 1);
        return next;
      });
    }, 1400);
    return () => window.clearInterval(t);
  }, []);

  const spend = 412 + (runs % 4) * 9;

  return (
    <div
      className="overflow-hidden rounded-[26px] border border-white/10 bg-navy/95 shadow-lift backdrop-blur"
      role="img"
      aria-label="Animated AWS deployment pipeline running terraform plan, container build, ECS deploy and CloudWatch verification"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ember" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 truncate text-[9px] font-black uppercase tracking-[0.18em] text-navy-foreground/60">
          pipeline · main → prod
        </span>
        <span className="ml-auto shrink-0 rounded-full border border-white/12 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-navy-foreground/70">
          ap-south-1
        </span>
      </div>

      <ol className="divide-y divide-white/10">
        {STAGES.map((stage, i) => {
          const running = active === i;
          const done = active > i;
          return (
            <li
              key={stage.name}
              className={`min-w-0 px-4 py-3.5 transition-colors duration-500 sm:px-5 ${
                running ? "bg-white/[0.06]" : "bg-transparent"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[8px] font-black transition-all duration-500 ${
                    done
                      ? "border-transparent bg-[oklch(0.86_0.09_160)] text-navy"
                      : running
                        ? "border-ember text-ember"
                        : "border-white/20 text-navy-foreground/40"
                  }`}
                >
                  {done ? "✓" : i + 1}
                </span>
                <span className="truncate font-mono text-[10px] text-navy-foreground/85 sm:text-[11px]">
                  {stage.name}
                </span>
                <span
                  className={`ml-auto shrink-0 font-display text-[9px] font-black uppercase tracking-[0.14em] ${stage.accent}`}
                >
                  {stage.service}
                </span>
              </div>

              <span className="mt-2.5 block h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                <span
                  className={`block h-full rounded-full transition-all duration-[1200ms] ease-out ${stage.bar} ${
                    done ? "w-full" : running ? "w-2/3" : "w-0"
                  }`}
                />
              </span>

              <pre className="mt-2 min-w-0 space-y-1 font-mono text-[9px] leading-[1.6] sm:text-[10px]">
                {stage.lines.map((line) => (
                  <div
                    key={line}
                    className={`overflow-hidden text-ellipsis whitespace-nowrap transition-opacity duration-500 ${
                      running || done ? "text-navy-foreground/80" : "text-navy-foreground/35"
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </pre>

              <div
                className={`mt-1.5 grid overflow-hidden transition-all duration-500 ${
                  running || done ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="min-h-0 truncate font-mono text-[9px] text-[oklch(0.86_0.09_160)] sm:text-[10px]">
                  → {stage.out}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="grid grid-cols-3 gap-px border-t border-white/10 bg-white/10">
        <div className="min-w-0 bg-navy/90 px-3 py-3.5 sm:px-4">
          <p className="truncate text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
            Monthly run-rate
          </p>
          <p className="mt-1.5 font-display text-lg font-extrabold text-ember sm:text-xl">
            ${spend}
          </p>
        </div>
        <div className="min-w-0 bg-navy/90 px-3 py-3.5 sm:px-4">
          <p className="truncate text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
            Drift
          </p>
          <p className="mt-1.5 font-display text-lg font-extrabold text-[oklch(0.62_0.11_250)] sm:text-xl">
            none
          </p>
        </div>
        <div className="min-w-0 bg-navy/90 px-3 py-3.5 sm:px-4">
          <p className="truncate text-[8px] font-black uppercase tracking-[0.14em] text-navy-foreground/55">
            Alarms
          </p>
          <p className="mt-1.5 font-display text-lg font-extrabold text-[oklch(0.86_0.09_160)] sm:text-xl">
            0
          </p>
        </div>
      </div>
    </div>
  );
}
