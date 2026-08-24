import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT, SOCIALS } from "@/lib/site";
// import whiteLogoAsset from "@/assets/acsius-logo-white-01.png.asset.json";
import whiteLogo from "@/assets/images/acsius-logo-white-01.png";


const COMPANY_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Our Work", href: "/our-work" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Web Development", href: "/web-development" },
  { label: "Website Design", href: "/ui-ux-website-design-company" },
  { label: "SEO Services", href: "/seo-services-india" },
  { label: "PPC Services", href: "/ppc-services-company-india" },
  { label: "Mobile App Development", href: "/mobile-app-development-services" },
  { label: "Ecommerce Development", href: "/ecommerce-website-developement" },
];

const LEGAL_LINKS = [
  { label: "Terms and Conditions", href: "/our-terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer id="careers" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="container-x relative py-14 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={whiteLogo}
              alt="ACSIUS Technologies"
              width={200}
              height={82}
              loading="lazy"
              className="h-20 w-auto lg:h-24"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              Premium website design and development company in New Delhi, building
              high-performance digital products for clients in 35+ countries since 2010.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-navy-foreground/20 px-3.5 py-2 text-xs font-bold text-navy-foreground/80 transition-colors hover:border-ember hover:text-ember"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-ember">
              Company
            </h3>
            <ul className="mt-5 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-ember">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <nav aria-label="Contact">
            <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-ember">
              Contact
            </h3>
            <div className="mt-5 space-y-3 text-sm">
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-navy-foreground/70 transition-colors hover:text-navy-foreground"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <address className="not-italic leading-relaxed">
                  {CONTACT.address.join(", ")}
                </address>
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2.5 font-semibold text-navy-foreground/90 transition-colors hover:text-ember"
              >
                <Phone className="h-4 w-4 shrink-0 text-ember" />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 font-semibold text-navy-foreground/90 transition-colors hover:text-ember"
              >
                <Mail className="h-4 w-4 shrink-0 text-ember" />
                {CONTACT.email}
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-navy-foreground/12 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-navy-foreground/55">
            © {new Date().getFullYear()} ACSIUS Technologies. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4 sm:gap-6">
            {LEGAL_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs font-semibold text-navy-foreground/60 transition-colors hover:text-ember"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
