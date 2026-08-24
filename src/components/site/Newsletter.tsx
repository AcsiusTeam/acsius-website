import { useState } from "react";
import { Reveal } from "@/components/motion";

export function Newsletter() {
  const [joined, setJoined] = useState(false);

  return (
    <section className="pb-24 lg:pb-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-line bg-mist/70 p-8 shadow-soft lg:p-14">
            <span
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-brand opacity-[0.14] blur-2xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="eyebrow">
                  <span className="h-px w-8 bg-ember" />
                  Digital Insights
                </p>
                <h2 className="mt-5 max-w-xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.6rem]">
                  Get Digital Insights That Actually Help Your Business Grow
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  One email a month: a teardown, a performance lesson and one SEO tactic you can
                  apply the same week. No fluff, no drip sequences.
                </p>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setJoined(true);
                }}
                className="rounded-3xl border border-line bg-card p-6 shadow-soft"
              >
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Email address
                  </span>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="you@company.com"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-navy-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {joined ? "You're on the list" : "Send me insights"}
                </button>
                <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
                  {joined ? "Confirmed — first issue lands next month." : "Unsubscribe any time."}
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
