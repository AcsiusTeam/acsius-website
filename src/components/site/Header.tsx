import { useEffect, useState } from "react";
import { NAV, CONTACT, MENU } from "@/lib/site";
// import blueLogoAsset from "@/assets/acsius-logo-blue.png.asset.json";
// import whiteLogoAsset from "@/assets/acsius-logo-white-01.png.asset.json";
import blueLogo from "@/assets/images/acsius-logo-blue.png";
import whiteLogo from "@/assets/images/acsius-logo-white-01.png";


const SERVICE_GROUPS = MENU.map((c) => ({
  name: c.title,
  icon: c.icon,
  description: c.description,
  featured: c.featured,
  items: c.links,
}));

function MenuIcon({ name, className }: { name: string; className?: string }) {
  const stroke = "currentColor";
  const props = { className, stroke, strokeWidth: 1.6, fill: "none", viewBox: "0 0 24 24" };
  switch (name) {
    case "trending":
      return (
        <svg {...props}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "cart":
      return (
        <svg {...props}>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case "code":
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "box":
      return (
        <svg {...props}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <span className="relative flex h-16 w-auto shrink-0 items-center justify-center sm:h-20 lg:h-24">
      <img
        src={scrolled ? blueLogo : whiteLogo}
        alt="ACSIUS Technologies"
        className="h-16 w-auto sm:h-20 lg:h-24"
      />
    </span>
  );
}


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [megaTimer, setMegaTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [activeGroup, setActiveGroup] = useState(0);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (megaTimer) clearTimeout(megaTimer);
    };
  }, [megaTimer]);

  const openMega = () => {
    if (megaTimer) {
      clearTimeout(megaTimer);
      setMegaTimer(null);
    }
    setMega(true);
  };

  const closeMega = () => {
    const timer = setTimeout(() => setMega(false), 250);
    setMegaTimer(timer);
  };

  const linkTone = scrolled
    ? "text-foreground/75 hover:text-primary"
    : "text-navy-foreground/80 hover:text-ember";

  const active = SERVICE_GROUPS[activeGroup];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-card/95 py-1.5 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent py-3"
      }`}
    >
      <div className="container-x">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <Logo scrolled={scrolled} />
            <span className="sr-only">ACSIUS</span>
          </a>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {NAV.map((item) =>
                item.href === "/#services" ? (
                  <div
                    key={item.label}
                    className="static"
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                  >
                    <a
                      href={item.href}
                      aria-expanded={mega}
                      className={`group relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${linkTone}`}
                    >
                      {item.label}
                      <span
                        className={`transition-transform duration-300 ${mega ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 12 8" className="h-2 w-3 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round">
                          <path d="M1 1.5 6 6.5 11 1.5" />
                        </svg>
                      </span>
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
                    </a>

                    <div
                      className={`absolute left-1/2 top-full w-[min(calc(100vw-2rem),1120px)] -translate-x-1/2 transition-all duration-300 ${mega ? "visible opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0"}`}
                    >
                      {/* invisible hover bridge between trigger and dropdown card */}
                      <div className="h-3 w-full" aria-hidden="true" />
                      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-deep shadow-lift">
                        {/* subtle ambient glow */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-ember/10 blur-[100px]"
                        />

                        <div className="relative grid grid-cols-[16rem_minmax(0,1fr)_18.5rem]">
                          {/* category rail */}
                          <div className="border-r border-white/10 bg-navy/60 p-3">
                            {SERVICE_GROUPS.map((group, i) => {
                              const isActive = activeGroup === i;
                              return (
                                <button
                                  key={group.name}
                                  type="button"
                                  onMouseEnter={() => setActiveGroup(i)}
                                  onFocus={() => setActiveGroup(i)}
                                  className={`group flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition-all ${
                                    isActive
                                      ? "bg-gradient-to-r from-ember to-ember-soft text-navy shadow-lg"
                                      : "text-navy-foreground/70 hover:bg-white/6 hover:text-navy-foreground"
                                  }`}
                                >
                                  <span
                                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                                      isActive ? "bg-navy/15" : "bg-white/8"
                                    }`}
                                  >
                                    <MenuIcon
                                      name={group.icon}
                                      className={`h-[1.1rem] w-[1.1rem] ${isActive ? "text-navy" : "text-ember"}`}
                                    />
                                  </span>
                                  <span className="block min-w-0">
                                    <span className={`block text-sm font-bold ${isActive ? "text-navy" : "text-navy-foreground"}`}>
                                      {group.name}
                                    </span>
                                    <span className={`mt-0.5 block text-[0.7rem] leading-snug ${isActive ? "text-navy/80" : "text-navy-foreground/55"}`}>
                                      {group.description}
                                    </span>
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          {/* links for active category */}
                          <div className="p-6">
                            <div className="flex items-center justify-between">
                              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ember">
                                {active?.name}
                              </p>
                              <span className="text-[0.65rem] font-semibold text-navy-foreground/40">
                                {active?.items.length} services
                              </span>
                            </div>
                            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                              {active?.items.map((s) => (
                                <li key={s.label}>
                                  <a
                                    href={s.href}
                                    className="group/link flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy-foreground/85 transition-all hover:bg-white/8 hover:text-navy-foreground"
                                  >
                                    <span className="truncate">{s.label}</span>
                                    <svg
                                      viewBox="0 0 8 12"
                                      className="h-2.5 w-2 shrink-0 fill-none stroke-current opacity-0 transition-all group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                                      strokeWidth="1.8"
                                      strokeLinecap="round"
                                    >
                                      <path d="M1.5 1 6.5 6l-5 5" />
                                    </svg>
                                  </a>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                              <p className="text-sm text-navy-foreground/60">
                                Not sure which fits? We&apos;ll scope it in 30 minutes.
                              </p>
                              <a href="https://wa.me/919891764802" target="_blank" rel="noopener noreferrer" className="btn-cta shrink-0 px-4 py-2 text-sm">
                                Book a call
                              </a>
                            </div>
                          </div>

                          {/* featured panel */}
                          <div className="relative flex flex-col justify-between border-l border-white/10 bg-gradient-to-br from-navy/80 to-navy-deep p-6">
                            <div>
                              <div className="inline-flex rounded-full bg-ember/12 px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-wider text-ember">
                                Featured
                              </div>
                              <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-navy-foreground">
                                {active?.featured.headline}
                              </h3>
                              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">
                                {active?.featured.description}
                              </p>
                            </div>

                            <div className="mt-8">
                              <div className="flex items-baseline gap-1.5">
                                <span className="font-display text-4xl font-bold text-ember">
                                  {active?.featured.stat}
                                </span>
                                <span className="text-sm font-semibold text-navy-foreground/70">
                                  {active?.featured.statLabel}
                                </span>
                              </div>
                              <a
                                href={active?.featured.href}
                                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-foreground py-3 text-sm font-extrabold text-navy transition-all hover:bg-ember hover:text-navy"
                              >
                                {active?.featured.cta}
                                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M3 8h10M10 5l3 3-3 3" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${linkTone}`}
                  >
                    {item.label}
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                ),
              )}
            </nav>

            <a
              href={CONTACT.phoneHref}
              className={`hidden rounded-full px-4 py-2.5 text-sm font-semibold transition-colors xl:inline-flex ${scrolled ? "border border-border text-foreground hover:border-primary hover:text-primary" : "border border-white/25 text-navy-foreground hover:border-ember hover:text-ember"}`}
            >
              {CONTACT.phone}
            </a>

            <a
              href="https://wa.me/919891764802"
              target="_blank"
              rel="noreferrer"
              className="btn-cta hidden px-5 py-2.5 text-sm sm:inline-flex"
            >
              Start Your Project
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-card lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute inset-x-0 top-0 h-0.5 rounded bg-foreground transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
                />
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 rounded bg-foreground transition-transform duration-300 ${open ? "translate-y-1 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 max-h-[75vh] overflow-y-auto rounded-3xl border border-white/10 bg-navy-deep p-3 shadow-lift lg:hidden">
            <nav className="grid gap-1" aria-label="Mobile">
              {NAV.map((item) =>
                item.href === "/#services" ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileServices((v) => !v)}
                      aria-expanded={mobileServices}
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/10"
                    >
                      {item.label}
                      <svg
                        viewBox="0 0 12 8"
                        className={`h-2.5 w-3.5 fill-none stroke-current transition-transform duration-300 ${mobileServices ? "rotate-180" : ""}`}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M1 1.5 6 6.5 11 1.5" />
                      </svg>
                    </button>
                    {mobileServices && (
                      <div className="mt-1 grid gap-1 rounded-2xl bg-white/5 p-2">
                        {SERVICE_GROUPS.map((group) => {
                          const isOpen = mobileGroup === group.name;
                          return (
                            <div key={group.name}>
                              <button
                                type="button"
                                onClick={() => setMobileGroup(isOpen ? null : group.name)}
                                aria-expanded={isOpen}
                                className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${isOpen ? "bg-ember text-navy" : "text-navy-foreground/80 hover:bg-white/10"}`}
                              >
                                <span className="flex items-center gap-2">
                                  <MenuIcon name={group.icon} className="h-4 w-4" />
                                  {group.name}
                                </span>
                                <svg
                                  viewBox="0 0 12 8"
                                  className={`h-2 w-3 fill-none stroke-current transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  aria-hidden="true"
                                >
                                  <path d="M1 1.5 6 6.5 11 1.5" />
                                </svg>
                              </button>
                              {isOpen && (
                                <ul className="mt-1 grid gap-0.5 pl-2">
                                  {group.items.map((s) => (
                                    <li key={s.label}>
                                      <a
                                        href={s.href}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-navy-foreground/75 transition-colors hover:text-ember"
                                      >
                                        {s.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/10 hover:text-ember"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>
            <a
              href="https://wa.me/919891764802"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-cta mt-2 w-full px-5 py-3.5 text-base"
            >
              Start Your Project
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
