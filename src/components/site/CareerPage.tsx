import { useState } from "react";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/motion";
import { APPLY_FIELDS, CAREER_INTRO, OPENINGS, type Opening } from "@/lib/career";
import { CONTACT } from "@/lib/site";

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 86% 8%, oklch(0.71 0.17 52 / 0.24), transparent 70%), radial-gradient(52% 52% at 2% 34%, oklch(0.62 0.11 250 / 0.34), transparent 70%), radial-gradient(65% 45% at 55% 120%, oklch(0.71 0.17 52 / 0.13), transparent 70%)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 1200 220"
        className="pointer-events-none absolute inset-x-0 bottom-4 opacity-30"
      >
        <path
          d="M0 160 C 240 60, 460 200, 700 100 S 1000 30, 1200 130"
          fill="none"
          stroke="oklch(0.71 0.17 52)"
          strokeWidth="2"
          strokeDasharray="220 40"
          className="animate-dash"
        />
      </svg>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Career
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              <span className="block">ACSIUS Supports Your Growth</span>
              <span className="block text-ember">Join Us Now</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              {CAREER_INTRO[0]}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#openings" className="btn-cta px-7 py-3.5">
                See latest openings
              </a>
              <a
                href="#apply"
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Apply for a job
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative mx-auto w-full max-w-[440px] space-y-4">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(45% 45% at 18% 16%, oklch(0.71 0.17 52 / 0.32), transparent 70%), radial-gradient(42% 42% at 86% 86%, oklch(0.62 0.11 250 / 0.4), transparent 70%)",
              }}
            />
            {CAREER_INTRO.slice(1).map((line, i) => (
              <div
                key={i}
                className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 shadow-lift backdrop-blur"
              >
                <span className="font-display text-xs font-black tracking-[0.18em] text-ember">
                  0{i + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/80">{line}</p>
              </div>
            ))}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-ember">
                Open roles right now
              </p>
              <p className="mt-3 font-display text-4xl font-extrabold">{OPENINGS.length}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Openings ---------------- */
function Openings({ onApply }: { onApply: (role: string) => void }) {
  return (
    <section id="openings" className="bg-background py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-primary" />
            Latest Openings @ ACSIUS
          </p>
          <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
            Find your dream job and career opportunities at ACSIUS.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We respect talent and know how to embrace it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {OPENINGS.map((job: Opening, i) => (
            <Reveal key={job.id} delay={i * 70}>
              <article className="group flex h-full flex-col rounded-[28px] border border-line bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex flex-wrap items-center gap-2">
                  {job.urgent && (
                    <span className="rounded-full bg-ember px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-navy">
                      Urgent required
                    </span>
                  )}
                  {job.alwaysOpen && (
                    <span className="rounded-full border border-line bg-mist px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                      Always open for applications
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-xl font-extrabold leading-snug text-foreground">
                  {job.title}
                </h3>

                {job.tools && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted-foreground"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                      Experience
                    </dt>
                    <dd className="mt-1 text-sm font-bold text-foreground">{job.experience}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                      Openings
                    </dt>
                    <dd className="mt-1 text-sm font-bold text-foreground">
                      {job.openings ?? "—"}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => onApply(job.title)}
                  className="btn-cta mt-auto w-full px-6 py-3 text-sm"
                >
                  Apply
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Apply form ---------------- */
function ApplyForm({ role, setRole }: { role: string; setRole: (r: string) => void }) {
  const [sent, setSent] = useState(false);

  return (
    <section id="apply" className="bg-mist py-20 lg:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-primary" />
            Apply for Job
          </p>
          <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
            Send us your details and resume.
          </h2>
          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="block rounded-2xl border border-line bg-card p-5 shadow-soft transition-colors hover:border-primary"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                Mail us
              </p>
              <p className="mt-1 font-bold text-foreground">{CONTACT.email}</p>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="block rounded-2xl border border-line bg-card p-5 shadow-soft transition-colors hover:border-primary"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                Call us
              </p>
              <p className="mt-1 font-bold text-foreground">{CONTACT.phone}</p>
            </a>
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-line bg-card p-5 shadow-soft transition-colors hover:border-primary"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                Visit us
              </p>
              <p className="mt-1 flex items-start gap-2 font-bold text-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span>{CONTACT.address.join(", ")}</span>
              </p>
            </a>

            <div className="rounded-2xl border border-line bg-card p-5 shadow-soft">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                Why ACSIUS
              </p>
              <ul className="mt-4 space-y-2.5 text-sm font-semibold text-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  Competitive CTC & timely growth
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  Flexible hybrid work culture
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  Hands-on learning with real projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  Friendly, collaborative team
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-[32px] border border-line bg-card p-7 shadow-lift lg:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                  Applying for
                </span>
                <select
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  {OPENINGS.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </label>

              {APPLY_FIELDS.map((field) => (
                <label key={field.name} className="block">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                    {field.label}
                    {field.required && <span className="text-ember"> *</span>}
                  </span>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>
              ))}

              <label className="block sm:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                  Upload Resume
                </span>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3 text-sm text-muted-foreground outline-none transition-colors file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-xs file:font-bold file:text-primary-foreground focus:border-primary"
                />
              </label>
            </div>

            <button type="submit" className="btn-cta mt-8 w-full px-8 py-4 text-base">
              Apply Now!
            </button>
            {sent && (
              <p className="mt-4 text-center text-sm font-semibold text-primary">
                Thanks — your application has been noted. We'll get back to you shortly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function CareerPage() {
  const [role, setRole] = useState(OPENINGS[0]?.title ?? "");

  const handleApply = (title: string) => {
    setRole(title);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero />
      <Openings onApply={handleApply} />
      <ApplyForm role={role} setRole={setRole} />
    </>
  );
}
