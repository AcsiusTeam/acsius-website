import { useState } from "react";
import { Reveal, Counter } from "@/components/motion";
import { CONTACT, METRICS } from "@/lib/site";
import { submitContactForm } from "@/lib/contact-form";

const [sent, setSent] = useState(false);
const [sending, setSending] = useState(false);
const [error, setError] = useState("");


const CHANNELS = [
  {
    id: "location",
    label: "Location",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lines: CONTACT.address,
    action: { label: "Open in Maps", href: CONTACT.mapUrl },
  },
  {
    id: "email",
    label: "Mail Us",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m2 5 8.5 6.5a3 3 0 0 0 3 0L22 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lines: [CONTACT.email],
    action: { label: "Send email", href: `mailto:${CONTACT.email}` },
  },
  {
    id: "phone",
    label: "Call Us",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.92 12.92 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.92 12.92 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lines: [CONTACT.phone],
    action: { label: "Call now", href: CONTACT.phoneHref },
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lines: [CONTACT.phone],
    action: { label: "Chat on WhatsApp", href: CONTACT.whatsapp },
  },
];

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground lg:pt-40 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 84% 10%, oklch(0.71 0.17 52 / 0.24), transparent 70%), radial-gradient(52% 52% at 4% 30%, oklch(0.62 0.11 250 / 0.34), transparent 70%), radial-gradient(65% 45% at 55% 118%, oklch(0.71 0.17 52 / 0.13), transparent 70%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">
              <span className="h-px w-8 bg-ember" />
              Contact
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] sm:text-4xl lg:text-[2.9rem]">
              <span className="block">Let's build something</span>
              <span className="block text-ember">worth talking about.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-foreground/80">
              Tell us what you are building. We will reply within 4 business hours with a written scope, timeline and cost — no obligation.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#form" className="btn-cta px-7 py-3.5">
                Send an enquiry
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border border-navy-foreground/25 px-7 py-3.5 font-bold text-navy-foreground transition-colors hover:border-ember hover:text-ember"
              >
                Call {CONTACT.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {METRICS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-3xl font-extrabold text-ember">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy-foreground/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(45% 45% at 20% 18%, oklch(0.71 0.17 52 / 0.34), transparent 70%), radial-gradient(42% 42% at 84% 84%, oklch(0.62 0.11 250 / 0.4), transparent 70%)",
              }}
            />
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7 shadow-lift backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-ember">Response time</p>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
              </div>
              <p className="mt-5 font-display text-4xl font-extrabold text-navy-foreground">&lt; 4 hrs</p>
              <p className="mt-2 text-sm text-navy-foreground/70">Average reply time, Mon–Sat.</p>
              <div className="mt-6 space-y-3">
                {[
                  "Discovery call — 30 minutes",
                  "Written scope in 48 hours",
                  "Named delivery lead from day one",
                ].map((step, i) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-navy/40 px-4 py-3 text-sm text-navy-foreground/85"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-black text-primary-foreground">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Channels ---------- */
function Channels() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Reach us
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              Four ways to start the conversation.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Prefer a call? We are available Mon–Sat, 9:30 AM to 7:00 PM IST.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((channel, i) => (
            <Reveal key={channel.id} delay={i * 70} className="h-full">
              <div className="group flex h-full flex-col rounded-[28px] border border-line bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                <span
                  aria-hidden
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-ember transition-colors duration-500 group-hover:bg-ember group-hover:text-navy"
                >
                  {channel.icon}
                </span>
                <h3 className="mt-6 font-display text-base font-extrabold text-foreground">{channel.label}</h3>
                <div className="mt-2 space-y-0.5 text-sm leading-relaxed text-muted-foreground">
                  {channel.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <a
                    href={channel.action.href}
                    target={channel.id === "location" || channel.id === "whatsapp" ? "_blank" : undefined}
                    rel={channel.id === "location" || channel.id === "whatsapp" ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-ember"
                  >
                    {channel.action.label}
                    <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3 stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 6h7M7 2.5 10.5 6 7 9.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Map + Form ---------- */
function MapAndForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  return (
    <section id="form" className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Visit us
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] text-foreground lg:text-[2.3rem]">
              New Delhi office.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Our delivery team works from the New Delhi studio. Clients are welcome by appointment.
            </p>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="relative block h-80 bg-mist lg:h-[420px]"
              >
                <iframe
                  title="ACSIUS office location map"
                  src={CONTACT.mapEmbed}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-card px-4 py-2 text-xs font-bold text-foreground shadow-soft">
                  Hasanpur, New Delhi
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              /* onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                setSent(true);
                void submitContactForm(form);
              }} */
              onSubmit={async (event) => {
                event.preventDefault();
                const form = event.currentTarget;
                setSending(true);
                setSent(false);
                setError("");
                try {
                  await submitContactForm(form);
                  setSent(true);
                  form.reset();
                } catch (error) {
                  console.error("Contact form submission failed:", error);
                  setError(
                    error instanceof Error
                      ? error.message
                      : "Unable to send your enquiry. Please try again.",
                  );
                } finally {
                  setSending(false);
                }
              }}

              className="rounded-[32px] border border-line bg-card p-7 shadow-lift lg:p-9"
            >
              <h3 className="font-display text-2xl font-extrabold text-foreground">Start your project</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Share a few details and we will prepare a tailored plan.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Full name</span>
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Work email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Phone</span>
                  <input
                    name="phone"
                    className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="+91 00000 00000"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Service needed</span>
                  <select
                    name="service"
                    className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    defaultValue="Website Design & Development"
                  >
                    <option>Website Design &amp; Development</option>
                    <option>WordPress Development</option>
                    <option>Ecommerce (Shopify / Magento)</option>
                    <option>Custom Web Application</option>
                    <option>SEO &amp; Digital Marketing</option>
                    <option>Maintenance &amp; Support</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Project brief</span>
                  <textarea
                    required
                    name="brief"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="What are you building, and what is the deadline?"
                  />
                </label>
              </div>

              <button type="submit" className="btn-cta mt-7 w-full px-8 py-4 text-base">
                {sending
                  ? "Sending..."
                  : sent
                    ? "Thank you - we'll be in touch"
                    : "Send enquiry"}
              </button>

              <p aria-live="polite" className="mt-4 text-center text-xs text-muted-foreground">
                {error
                  ? error
                  : sent
                    ? "Your enquiry has been sent. Expect a reply within 4 business hours."
                    : "Response time promise: within 4 business hours, Mon-Sat."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <>
      <Hero />
      <Channels />
      <MapAndForm />
    </>
  );
}
