import { useState } from "react";
import { CONTACT } from "@/lib/site";
import { Reveal } from "@/components/motion";
import { submitContactForm } from "@/lib/contact-form";

export function Contact() {
  const [sent, setSent] = useState(false);


  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" />
              Contact
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground lg:text-[3rem]">
              Talk to the people who'll build it.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              No sales script and no gatekeeping — your first call is with a strategist and an
              engineer. We reply to every enquiry within 4 business hours.
            </p>

            <div className="mt-8 overflow-hidden rounded-[26px] border border-line shadow-soft transition-transform duration-300 hover:-translate-y-0.5">
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="relative block h-48 bg-mist"
              >
                <iframe
                  title="ACSIUS office location map"
                  src={CONTACT.mapEmbed}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-card px-3 py-1.5 text-xs font-bold text-foreground shadow-soft">
                  Hasanpur, New Delhi
                </span>
              </a>

              <dl className="grid gap-5 bg-card p-6 sm:grid-cols-2">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Office
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground">
                    {CONTACT.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="space-y-4">
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Phone
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={CONTACT.phoneHref}
                        className="text-sm font-bold text-foreground hover:text-primary"
                      >
                        {CONTACT.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Email
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-sm font-bold text-foreground hover:text-primary"
                      >
                        {CONTACT.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-navy-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                WhatsApp us
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Schedule Meeting
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                setSent(true);
                void submitContactForm(form);
              }}

              className="rounded-[32px] border border-line bg-card p-7 shadow-lift lg:p-9"
            >
              <h3 className="font-display text-2xl font-extrabold text-foreground">
                Start your project
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Share a few details and we'll prepare a tailored plan.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Full name
                  </span>
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Work email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Phone
                  </span>
                  <input
                    name="phone"
                    className="mt-2 w-full rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="+91 00000 00000"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Service needed
                  </span>
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
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Project brief
                  </span>
                  <textarea
                    required
                    name="brief"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-2xl border border-input bg-mist/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="What are you building, and what's the deadline?"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="btn-cta mt-7 w-full px-8 py-4 text-base"
              >
                {sent ? "Thank you — we'll be in touch" : "Send enquiry"}
              </button>

              <p aria-live="polite" className="mt-4 text-center text-xs text-muted-foreground">
                {sent
                  ? "Your enquiry has been captured. Expect a reply within 4 business hours."
                  : "Response time promise: within 4 business hours, Mon–Sat."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
