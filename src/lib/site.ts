export const NAV = [
  { label: "Our Services", href: "/#services" },
  { label: "Our Work", href: "/our-work" },
  { label: "About Us", href: "/about-us" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  address: ["52-A, 301-3rd Floor,", "Krishna Complex, Hasanpur,", "New Delhi-110092, India"],
  phone: "+91 98 9176 4802",
  phoneHref: "tel:+919891764802",
  whatsapp: "https://wa.me/919891764802",
  email: "info@acsius.com",
  mapUrl: "https://maps.app.goo.gl/NoBaqbv2zoUCD1uy9",
  mapEmbed:
    "https://maps.google.com/maps?q=ACSIUS%2C%2052-A%2C%20301-3rd%20Floor%2C%20Krishna%20Complex%2C%20Hasanpur%2C%20New%20Delhi-110092%2C%20India&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/ACSIUS" },
  { label: "X", href: "https://x.com/acsius" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/acsius" },
  { label: "Instagram", href: "https://www.instagram.com/acsiustech/" },
];

export type MenuLink = { label: string; href: string };
export type MenuFeatured = {
  headline: string;
  description: string;
  cta: string;
  href: string;
  stat: string;
  statLabel: string;
};
export type MenuColumn = {
  title: string;
  icon: string;
  description: string;
  links: MenuLink[];
  featured: MenuFeatured;
};

/** Services mega-menu / footer navigation. "#" = page not built yet. */
export const MENU: MenuColumn[] = [
  {
    title: "Growth",
    icon: "trending",
    description: "SEO, paid media, and content engines that drive qualified traffic.",
    links: [
      { label: "SEO Services", href: "/seo-services-india" },
      { label: "SEO Company India", href: "/seo-company-india" },
      { label: "AI SEO Services", href: "/ai-seo-services" },
      { label: "SMO Services", href: "/smo-company-in-india" },
      { label: "PPC Services", href: "/ppc-services-company-india" },
      { label: "Reputation Management", href: "/online-reputation-management-company" },
      { label: "Content Writing", href: "/content-writing-services" },
      { label: "Local SEO Services", href: "/local-seo-services" },
      { label: "SEO Company in Delhi", href: "/seo-company-in-delhi" },
      { label: "SEO Outsourcing Services", href: "/seo-outsourcing-services" },
      { label: "E-commerce SEO Services", href: "/ecommerce-seo-services" },
    ],
    featured: {
      headline: "Rank higher, convert faster",
      description: "Data-led growth campaigns built for Indian and global markets.",
      cta: "Get a free SEO audit",
      href: "/contact",
      stat: "320%",
      statLabel: "avg. organic lift",
    },
  },
  {
    title: "Experience Design",
    icon: "layers",
    description: "UI/UX, branding, and web design that turns visitors into buyers.",
    links: [
      { label: "Website Design", href: "/website-design-company-india" },
      { label: "UI/UX Website Design", href: "/ui-ux-website-design-company" },
      { label: "Graphic Design", href: "/graphic-design-services" },
      { label: "Logo Design", href: "/logo-design-company" },
      { label: "Banner & Brochure Design", href: "/banner-design-services" },
      { label: "Image Editing Services", href: "/image-editing" },
      { label: "Custom CMS Website Design", href: "/custom-cms-website-design-development" },
      { label: "Web Development", href: "/web-development" },
      { label: "Ecommerce Website Development", href: "/ecommerce-website-developement" },
      { label: "Landing Page Design", href: "/landing-page-design" },
      { label: "Website Redesign", href: "/website-redesign-company" },
    ],
    featured: {
      headline: "Design that converts",
      description: "Premium interfaces, motion, and brand systems for digital products.",
      cta: "Start a design project",
      href: "/contact",
      stat: "3000+",
      statLabel: "projects delivered",
    },
  },
  {
    title: "CMS & Commerce Teams",
    icon: "cart",
    description: "Hire dedicated CMS and commerce specialists on demand.",
    links: [
      { label: "Hire WordPress Developers", href: "/hire-wordpress-developers" },
      { label: "Hire Shopify Developers", href: "/hire-shopify-developers" },
      { label: "Hire Magento Developers", href: "/hire-magento-developers" },
      { label: "Hire WooCommerce Developers", href: "#" },
      { label: "Hire Wix Developers", href: "/hire-wix-developers" },
    ],
    featured: {
      headline: "Scale your store team",
      description: "Vetted WordPress, Shopify, and Magento developers ready to ship.",
      cta: "Hire in 48 hours",
      href: "/contact",
      stat: "2x",
      statLabel: "faster delivery",
    },
  },
  {
    title: "Engineering Teams",
    icon: "code",
    description: "Full-stack, mobile, and cloud engineers for product builds.",
    links: [
      { label: "Hire PHP Developers", href: "/hire-php-developers" },
      { label: "Hire Laravel Developers", href: "/hire-laravel-developers" },
      { label: "Hire React Native Developers", href: "/hire-react-native-app-developer" },
      { label: "Hire Flutter Developers", href: "/hire-flutter-app-developers" },
      { label: "Hire JavaScript Developers", href: "/hire-javascript-developers" },
      { label: "Hire Python Developers", href: "/hire-python-developers" },
      { label: "Hire ReactJS Developers", href: "/hire-reactjs-developers" },
      { label: "Hire AWS Developers", href: "/hire-aws-developers" },
    ],
    featured: {
      headline: "Elite engineering talent",
      description: "Senior developers across modern stacks, vetted and managed.",
      cta: "Build your team",
      href: "/contact",
      stat: "40+",
      statLabel: "tech experts",
    },
  },
  {
    title: "Product Platforms",
    icon: "box",
    description: "Ready-to-deploy ERP, HRM, payroll, and hospital systems.",
    links: [
      { label: "School ERP Software", href: "/school-erp-software" },
      { label: "Payroll Software", href: "/payroll-software" },
      { label: "HRM Software", href: "/hrm-software" },
      { label: "Hospital Management Software", href: "/hospital-management-software" },
    ],
    featured: {
      headline: "Deploy-ready platforms",
      description: "Secure, cloud-hosted software tailored to your operations.",
      cta: "Book a product demo",
      href: "/contact",
      stat: "99.9%",
      statLabel: "uptime SLA",
    },
  },
  {
    title: "App Development",
    icon: "phone",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    links: [
      { label: "Mobile App Development", href: "/mobile-app-development-services" },
      { label: "Android App Development", href: "/android-app-development-services" },
      { label: "iOS App Development", href: "/ios-app-development-company" },
      { label: "React Native App Development", href: "/hire-react-native-app-developer" },
      { label: "Flutter App Development", href: "/hire-flutter-app-developers" },
      { label: "Windows App Development", href: "/windows-app-development-services" },
    ],
    featured: {
      headline: "Mobile-first experiences",
      description: "High-performance apps built with React Native and Flutter.",
      cta: "Build your app",
      href: "/contact",
      stat: "4.8★",
      statLabel: "avg. app rating",
    },
  },
];

export const METRICS = [
  { value: 3000, suffix: "+", label: "Projects Delivered" },
  { value: 40, suffix: "+", label: "Expert Team" },
  { value: 16, suffix: "+", label: "Years Experience" },
  { value: 35, suffix: "+", label: "Countries Served" },
];

export const HERO_CARDS = ["WordPress", "Shopify", "Laravel", "React", "SEO", "UI/UX"];

export type TechLogo = {
  name: string;
  /** monogram shown in the logo tile */
  monogram: string;
  tone: "brand" | "ember" | "navy";
};

export const TECH_LOGOS: TechLogo[] = [
  { name: "WordPress", monogram: "W", tone: "brand" },
  { name: "Shopify", monogram: "S", tone: "brand" },
  { name: "Magento", monogram: "M", tone: "ember" },
  { name: "Webflow", monogram: "Wf", tone: "brand" },
  { name: "Laravel", monogram: "L", tone: "ember" },
  { name: "PHP", monogram: "P", tone: "navy" },
  { name: "React", monogram: "R", tone: "brand" },
  { name: "Node.js", monogram: "N", tone: "navy" },
  { name: "WooCommerce", monogram: "Wo", tone: "brand" },
  { name: "Next.js", monogram: "Nx", tone: "navy" },
  { name: "Tailwind CSS", monogram: "Tw", tone: "brand" },
  { name: "MySQL", monogram: "My", tone: "ember" },
];

export type Service = {
  name: string;
  overview: string;
  tech: string[];
  benefits: string[];
  industries: string[];
  projects: string;
  group: string;
  slug?: string;
};

export const SERVICES: Service[] = [
  {
    name: "Website Design",
    group: "Design",
    slug: "/graphic-design-services",
    overview: "Editorial, brand-led interfaces designed around your conversion story — not around a template.",
    tech: ["Figma", "Framer", "Tailwind", "Design Systems"],
    benefits: ["Higher engagement", "Consistent brand system", "Faster design-to-build"],
    industries: ["Finance", "Healthcare", "Retail"],
    projects: "Brand sites, marketing sites, design systems",
  },
  {
    name: "UI/UX Website Design",
    group: "Design",
    slug: "/ui-ux-website-design-company",
    overview:
      "Research-led UI/UX design — wireframes, high-fidelity screens, prototypes and a documented design system.",
    tech: ["Figma", "Design Tokens", "Prototyping", "WCAG 2.2"],
    benefits: ["Higher conversion", "Faster developer handoff", "Accessible by default"],
    industries: ["SaaS", "Healthcare", "Finance"],
    projects: "Website UX, SaaS dashboards, design systems",
  },
  {
    name: "Website Development",
    group: "Build",
    overview: "Pixel-accurate, accessible front-ends engineered for Core Web Vitals and long-term maintainability.",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Vite"],
    benefits: ["90+ Lighthouse scores", "SEO-ready markup", "Zero-debt codebase"],
    industries: ["Education", "Manufacturing", "Professional Services"],
    projects: "Corporate websites, microsites, landing systems",
  },
  {
    name: "WordPress Development",
    group: "Build",
    slug: "/hire-wordpress-developers",
    overview: "Custom themes and blocks built for editors — no page-builder bloat, complete content control.",
    tech: ["WordPress", "ACF", "Gutenberg", "PHP", "WP-CLI"],
    benefits: ["Editor-friendly CMS", "Fast, cache-optimised", "Secure & upgradeable"],
    industries: ["Healthcare", "Nonprofits", "Retail"],
    projects: "Custom themes, headless WP, multisite platforms",
  },
  {
    name: "Custom Web Applications",
    group: "Engineering",
    overview: "Product-grade applications with role-based access, dashboards and workflow automation.",
    tech: ["React", "Laravel", "Node.js", "PostgreSQL", "Redis"],
    benefits: ["Automated operations", "Real-time insight", "Scales with your team"],
    industries: ["Finance", "Manufacturing", "Logistics"],
    projects: "Portals, dashboards, internal tools",
  },
  {
    name: "Mobile App Development",
    group: "Engineering",
    slug: "/mobile-app-development-services",
    overview: "Native-feeling iOS and Android apps built with React Native for speed and scale.",
    tech: ["React Native", "Flutter", "iOS", "Android", "APIs"],
    benefits: ["One codebase, two platforms", "Offline-ready", "App-store launch support"],
    industries: ["Healthcare", "Retail", "Logistics"],
    projects: "Customer apps, field tools, booking apps",
  },
  {
    name: "Shopify Development",
    group: "Commerce",
    slug: "/hire-shopify-developers",
    overview: "Conversion-tuned storefronts with custom sections, apps and checkout experiences.",
    tech: ["Shopify", "Liquid", "Hydrogen", "Klaviyo"],
    benefits: ["Higher AOV", "Faster storefront", "Merch-team autonomy"],
    industries: ["Retail", "D2C", "Fashion"],
    projects: "Storefronts, replatforming, private apps",
  },
  {
    name: "Magento Development",
    group: "Commerce",
    slug: "/hire-magento-developers",
    overview: "Enterprise commerce builds with complex catalogues, B2B pricing and ERP sync.",
    tech: ["Magento 2", "Adobe Commerce", "Elasticsearch"],
    benefits: ["B2B-ready pricing", "Multi-store control", "ERP integrated"],
    industries: ["Manufacturing", "Wholesale", "Retail"],
    projects: "B2B commerce, catalogue migration, integrations",
  },
  {
    name: "Laravel Development",
    group: "Engineering",
    slug: "/hire-laravel-developers",
    overview: "Robust APIs and business systems on a framework built for clarity and speed.",
    tech: ["Laravel", "PHP 8", "MySQL", "Queues"],
    benefits: ["Clean architecture", "Test coverage", "Predictable delivery"],
    industries: ["Finance", "Education", "Travel"],
    projects: "SaaS backends, ERPs, API platforms",
  },
  {
    name: "PHP Development",
    group: "Engineering",
    slug: "/hire-php-developers",
    overview: "Custom backends, CMS modules, APIs and legacy rescue on modern PHP.",
    tech: ["PHP 8.3", "Laravel", "WordPress", "MySQL"],
    benefits: ["Clean, upgrade-safe code", "Your repo from day one", "48-hour replacement"],
    industries: ["Healthcare", "Retail", "Finance"],
    projects: "Web apps, CMS extensions, e-commerce backends",
  },
  {
    name: "React Development",
    group: "Engineering",
    overview: "Component-driven interfaces with state, motion and performance handled properly.",
    tech: ["React", "TypeScript", "TanStack", "Vite"],
    benefits: ["Instant interactions", "Reusable UI kit", "Team-ready codebase"],
    industries: ["Healthcare", "Finance", "SaaS"],
    projects: "Web apps, dashboards, design-system UI",
  },
  {
    name: "UI/UX Design",
    group: "Design",
    overview: "Research, journeys and prototypes that remove friction before a line of code ships.",
    tech: ["Figma", "Maze", "Hotjar", "Prototyping"],
    benefits: ["Fewer drop-offs", "Validated flows", "Confident roadmap"],
    industries: ["Healthcare", "Finance", "Education"],
    projects: "Product UX, redesigns, usability audits",
  },
  {
    name: "PPC Management",
    group: "Growth",
    slug: "/ppc-services-company-india",
    overview: "Paid search and social campaigns tuned for ROAS, not just clicks.",
    tech: ["Google Ads", "Meta Ads", "YouTube", "Analytics"],
    benefits: ["Lower CPA", "Faster scale", "Attribution clarity"],
    industries: ["Retail", "Finance", "Education"],
    projects: "Search, shopping, display, remarketing",
  },
  {
    name: "AI SEO Services",
    group: "Growth",
    slug: "/ai-seo-services",
    overview: "AI-assisted technical SEO, content architecture and schema built into the build.",
    tech: ["GSC", "Ahrefs", "Schema.org", "GA4"],
    benefits: ["Organic growth", "Rich results", "Clean crawlability"],
    industries: ["Retail", "Travel", "Professional Services"],
    projects: "Technical audits, migrations, content SEO",
  },
  {
    name: "Content Writing",
    group: "Growth",
    slug: "/content-writing-services",
    overview: "Website copy, blogs, product descriptions and case studies written by sector writers.",
    tech: ["Editorial", "Voice guides", "CMS publishing", "Fact-checking"],
    benefits: ["Human-written", "Edited twice", "Predictable cadence"],
    industries: ["Healthcare", "Finance", "SaaS"],
    projects: "Web copy, blogs, product content, email",
  },
  {
    name: "SMO Services",
    group: "Growth",
    slug: "/smo-company-in-india",
    overview:
      "Social media optimization — optimised profiles, a planned content engine and reporting tied to enquiries.",
    tech: ["Instagram", "LinkedIn", "YouTube", "Pinterest"],
    benefits: ["3x organic reach", "Replies in working hours", "Lead-level reporting"],
    industries: ["Retail", "Healthcare", "Education"],
    projects: "Profile optimisation, content calendars, community management",
  },
  {
    name: "Online Reputation Management",
    group: "Growth",
    slug: "/online-reputation-management-company",
    overview: "ORM services — 24x7 monitoring, search suppression, review growth, policy removals and a crisis desk.",
    tech: ["Google", "Trustpilot", "Glassdoor", "Social listening"],
    benefits: ["92% negatives suppressed", "Higher review ratings", "24h crisis response"],
    industries: ["Healthcare", "Hospitality", "Finance", "Founders"],
    projects: "Page-one cleanup, review programmes, executive ORM, crisis comms",
  },
  {
    name: "School ERP Software",
    group: "Engineering",
    slug: "/school-erp-software",
    overview:
      "Cloud based school ERP — admissions, attendance, exams, online fees, transport and a branded parent app.",
    tech: ["Cloud hosting", "Payment gateway", "Android & iOS", "Biometric sync"],
    benefits: ["Live in ~30 days", "Online fee collection", "CBSE report cards"],
    industries: ["Education", "Coaching", "Multi-branch groups"],
    projects: "School ERP, parent apps, fee automation, data migration",
  },
  {
    name: "Payroll Software",
    group: "Engineering",
    slug: "/payroll-software",
    overview:
      "Cloud payroll software — salary structures, attendance inputs, PF, ESI and TDS compliance, payslips and employee self-service.",
    tech: ["Cloud hosting", "Bank advice files", "Android & iOS", "Biometric sync"],
    benefits: ["Live in ~21 days", "Statutory files ready", "Employee self-service"],
    industries: ["IT", "Manufacturing", "Retail", "Staffing"],
    projects: "Payroll runs, compliance filing, employee portals, data migration",
  },
  {
    name: "HRM Software",
    group: "Engineering",
    slug: "/hrm-software",
    overview:
      "Cloud based HRM software — employee records, onboarding, attendance, leave, performance reviews, claims and an employee self-service app.",
    tech: ["Cloud hosting", "Geo & biometric punch", "Android & iOS", "Payroll handoff"],
    benefits: ["Live in ~18 days", "Employee self-service", "Policy as rules"],
    industries: ["IT", "Manufacturing", "Retail", "Healthcare"],
    projects: "HR systems, attendance & leave, performance cycles, data migration",
  },
  {
    name: "Hospital Management Software",
    group: "Engineering",
    slug: "/hospital-management-software",
    overview:
      "Cloud based hospital management software — registration, OPD, IPD, EMR, pharmacy, lab, insurance and billing in one system.",
    tech: ["Cloud hosting", "HL7 analyser interface", "Android & iOS", "Payment gateways"],
    benefits: ["Live in ~24 days", "Billing built in", "Insurance claim tracking"],
    industries: ["Hospitals", "Clinics", "Nursing homes", "Diagnostics"],
    projects: "HMS rollouts, billing & insurance, pharmacy & lab, data migration",
  },
];

export const PROCESS = [
  {
    step: "Discovery",
    summary: "We map business goals, users and constraints before proposing anything.",
    detail: "Stakeholder workshops, analytics review, competitor teardown, success metrics.",
    duration: "1–2 weeks",
  },
  {
    step: "Strategy",
    summary: "Scope, architecture and roadmap agreed in writing — no moving goalposts.",
    detail: "Sitemap, content model, tech stack decision, sprint plan, risk register.",
    duration: "1 week",
  },
  {
    step: "UI/UX Design",
    summary: "Journeys, wireframes and a full design system your brand can grow into.",
    detail: "Wireframes, prototypes, design tokens, accessibility review, component library.",
    duration: "2–4 weeks",
  },
  {
    step: "Development",
    summary: "Front-end and back-end built in reviewable sprints with staging demos.",
    detail: "Component build, CMS setup, integrations, code review, weekly demo.",
    duration: "4–10 weeks",
  },
  {
    step: "Testing",
    summary: "Performance, cross-device, accessibility and security passes before launch.",
    detail: "Core Web Vitals tuning, WCAG checks, QA matrix, UAT sign-off.",
    duration: "1–2 weeks",
  },
  {
    step: "Launch",
    summary: "Zero-drama go-live with redirects, monitoring and rollback ready.",
    detail: "DNS & SSL, 301 map, schema, analytics, uptime monitoring, handover training.",
    duration: "3–5 days",
  },
  {
    step: "Growth",
    summary: "Ongoing SEO, CRO and iteration tied to your revenue metrics.",
    detail: "Monthly reporting, experiments, content SEO, roadmap grooming, care plan.",
    duration: "Ongoing",
  },
];

import caseMagicTouch from "@/assets/case-magictouch.png";
import caseElburgon from "@/assets/case-elburgon.png";
// import caseBeautySups from "@/assets/case-beautysups.png.asset.json";
import caseBeautySups from "@/assets/images/case-beautysups.png";
import casePlaceholder from "@/assets/case-placeholder.png";
import simbaAdventure from "@/assets/images/simbaadventures.png";
import mhmTuning from "@/assets/images/mhmtuning.png";
import grandTourSports from "@/assets/images/grandtoursports.png";
import bougroug from "@/assets/images/bougroug.png";
import flywing from "@/assets/images/flywing.png";
import loveskinfoodskincare from "@/assets/images/loveskinfoodskincare.png";
import acraapluscpa from "@/assets/images/acraapluscpa.png";
import nldisplay from "@/assets/images/nldisplays.png";
import disarReti from "@/assets/images/disar-reti.png";
import evolveNextgen from "@/assets/images/evolve-nextgen-evolve.png";
import theaird from "@/assets/images/theaird.png";
import redwoodcityfloristandballoons from "@/assets/images/redwoodcityfloristandballoons.png";
import sweettreatpharmacy from "@/assets/images/sweettreatpharmacy-.png";
import langhauswartung from "@/assets/images/langhauswartung.png";
import jkbima from "@/assets/images/jkbima.png";
import eliteecus from "@/assets/images/eliteecus.png";
import studiobound from "@/assets/images/studiobound.png";
import djFischerSpezial from "@/assets/images/dj-fischer-spezial.png";
import greenroot from "@/assets/images/greenroot.png";
import samscare from "@/assets/images/samscare.png";
import lavyhair from "@/assets/images/lavyhair.png";
import dyhair777 from "@/assets/images/dyhair777.png";
import curls from "@/assets/images/curls.png";
import japandeluxetours from "@/assets/images/japandeluxetours.png";
import clayesmore from "@/assets/images/clayesmore.png";
import thegazpacho from "@/assets/images/thegazpacho.png";
import lititon from "@/assets/images/lititon.png";









export type CaseStudy = {
  client: string;
  site: string;
  url: string;
  industry: string;
  summary: string;
  stack: string[];
  highlights: string[];
  status: string;
  image: string;
  accent: "brand" | "ember" | "navy";
  stats?: { value: string; label: string; detail: string }[];
  statsNote?: string;
};

export const CASES: CaseStudy[] = [
  {
    client: "Magic Touch Natural Cosmetic",
    site: "magictouch.ba",
    url: "https://magictouch.ba/",
    industry: "Beauty & Skincare",
    summary:
      "Complete WordPress redesign for Magic Touch Natural Cosmetic — a modern, mobile-first site for treatments and online product sales.",
    stack: ["WordPress", "WooCommerce", "SEO"],
    highlights: [
      "Full website redesign in WordPress",
      "Treatment pages plus an online webshop",
      "Ongoing SEO work to grow organic visibility",
    ],
    status: "Redesign delivered · SEO ongoing",
    image: caseMagicTouch,
    accent: "brand",
    stats: [
      { value: "+61%", label: "Organic search sessions", detail: "370 → 597" },
      { value: "+42%", label: "Search clicks", detail: "335 → 476" },
      { value: "+68%", label: "Search impressions", detail: "4.01K → 6.72K" },
      { value: "41", label: "AI assistant visits", detail: "0 → 41" },
    ],
    statsNote:
      "Google Analytics & Search Console: Jun 1 – Aug 11, 2026 (after SEO) vs Mar 1 – May 31, 2026 (before SEO).",
  },
  {
    client: "Elburgon Flies Supply",
    site: "troutflyfishingflieskenya.com",
    url: "https://troutflyfishingflieskenya.com/",
    industry: "Outdoor & Fly Fishing Supplies",
    summary:
      "WordPress e-commerce site for Elburgon Flies Supply — a premium trout fly fishing flies supplier in Kenya with a shop, category browsing and worldwide shipping.",
    stack: ["WordPress", "WooCommerce", "Responsive Design"],
    highlights: [
      "Full WordPress website with e-commerce store",
      "Shop by category with product filtering",
      "Worldwide shipping and secure payment setup",
    ],
    status: "Live · Built on WordPress",
    image: caseElburgon,
    accent: "navy",
  },
  {
    client: "BeautySups",
    site: "beautysups.com",
    url: "https://beautysups.com/",
    industry: "Beauty & Cosmetics",
    summary:
      "Redesigned and redeveloped BeautySups on Shopify with a version upgrade, Klaviyo marketing automation, and integrated checkout through Klarna, Stripe and other payment gateways.",
    stack: ["Shopify", "Klaviyo", "Klarna", "Stripe"],
    highlights: [
      "Shopify version upgrade and theme rebuild",
      "Klaviyo email and SMS marketing automation configured",
      "Klarna, Stripe and additional payment gateways integrated",
    ],
    status: "Live · Rebuilt on Shopify",
    image: caseBeautySups,
    accent: "ember",
  },
  {
    client: "Lititon Singapore",
    site: "lititon.com.sg",
    url: "https://www.lititon.com.sg/",
    industry: "LED Lighting · Singapore",
    summary:
      "Redesigned the Lititon website on WIX and configured Wix ecommerce so the catalogue, cart and checkout work as a single conversion path.",
    stack: ["WIX", "Wix Ecommerce", "PageSpeed Optimisation"],
    highlights: [
      "Full WIX redesign with ecommerce catalogue and checkout",
      "Mobile PageSpeed score lifted to 60+ and desktop to 85+",
      "Product pages, collections and enquiry flow rebuilt",
    ],
    status: "Live · Rebuilt on WIX",
    image: lititon,
    accent: "brand",
    stats: [
      { value: "60+", label: "Mobile PageSpeed", detail: "Pagespeed.web.dev" },
      { value: "85+", label: "Desktop PageSpeed", detail: "Pagespeed.web.dev" },
      { value: "-38%", label: "Bounce rate", detail: "Post-redesign" },
      { value: "+22%", label: "Product views", detail: "First 90 days" },
    ],
  },
  {
    client: "Simba Adventures",
    site: "simbaadventures.com",
    url: "https://simbaadventures.com/",
    industry: "Travel & Safari · Tanzania",
    summary:
      "Migrated Simba Adventures from WordPress to a custom PHP build on the Vue.js framework, improving page speed, booking flow and content flexibility.",
    stack: ["PHP", "Vue.js", "Custom CMS"],
    highlights: [
      "WordPress-to-PHP migration with Vue.js front-end",
      "Tour packages and enquiry forms restructured",
      "Faster page loads and mobile-first responsive layout",
    ],
    status: "Live · Rebuilt in PHP + Vue.js",
    image: simbaAdventure,
    accent: "navy",
  },
  {
    client: "MHM Tuning",
    site: "mhmtuning.fr",
    url: "https://mhmtuning.fr/",
    industry: "Automotive Tuning · France",
    summary:
      "Redesigned the MHM Tuning store on PrestaShop and upgraded the platform from version 1.7 to 9.1.0, improving security, performance and catalog browsing.",
    stack: ["PrestaShop", "PHP", "MySQL"],
    highlights: [
      "PrestaShop redesign with modern catalog layout",
      "Platform upgrade from 1.7 to 9.1.0",
      "Payment, shipping and product filters reconfigured",
    ],
    status: "Live · PrestaShop 9.1.0",
    image: mhmTuning,
    accent: "ember",
  },
  {
    client: "Grand Tour Sports",
    site: "grandtoursports.com",
    url: "https://grandtoursports.com/",
    industry: "Sports Ecommerce",
    summary:
      "Replatformed Grand Tour Sports from WordPress to Shopify, adding product subscriptions, member pricing and a checkout tuned for repeat buyers.",
    stack: ["Shopify", "Subscriptions", "Liquid"],
    highlights: [
      "WordPress-to-Shopify migration",
      "Subscription function added for recurring products",
      "Checkout and account area optimised for retention",
    ],
    status: "Live · Replatformed to Shopify",
    image: grandTourSports,
    accent: "brand",
  },
  {
    client: "Bougroug",
    site: "bougroug.com",
    url: "https://bougroug.com/",
    industry: "Fashion · Morocco",
    summary:
      "Transformed Bougroug from a WordPress inquiry site into a full Shopify B2C store with order management, payment capture and customer accounts.",
    stack: ["Shopify", "B2C Ecommerce", "Payment Gateways"],
    highlights: [
      "WordPress-to-Shopify B2C migration",
      "Order, payment and customer account system built",
      "Product pages and checkout localised for the market",
    ],
    status: "Live · Shopify B2C Store",
    image: bougroug,
    accent: "ember",
  },
  {
    client: "Flywing",
    site: "flywing.sg",
    url: "https://flywing.sg/",
    industry: "Safety Footwear · Singapore",
    summary:
      "Built the Flywing platform in PHP on Laravel for a global OEM manufacturer of safety footwear, showcasing private-label production capabilities and own-production facilities in China.",
    stack: ["PHP", "Laravel", "MySQL"],
    highlights: [
      "Custom PHP + Laravel catalogue and enquiry platform",
      "OEM safety footwear branding and production showcase",
      "Lead management for global B2B buyers",
    ],
    status: "Live · Laravel Application",
    image: flywing,
    accent: "navy",
  },
  {
    client: "LoveSkin Food Skincare",
    site: "loveskinfoodskincare.com",
    url: "https://loveskinfoodskincare.com/",
    industry: "Beauty & Skincare",
    summary:
      "Redesigned and uploaded a new Shopify theme version for LoveSkin Food Skincare, refreshing product pages, collections and the mobile buying experience.",
    stack: ["Shopify", "Theme Upload", "Responsive Design"],
    highlights: [
      "Shopify theme redesign and upload",
      "Product and collection pages refreshed",
      "Mobile-first checkout experience",
    ],
    status: "Live · Shopify Theme Update",
    image: loveskinfoodskincare,
    accent: "brand",
  },
  {
    client: "Acraa Plus CPA",
    site: "acraapluscpa.com",
    url: "https://acraapluscpa.com/",
    industry: "Accounting · Hong Kong",
    summary:
      "Built a clean, informative WordPress website for Acraa Plus CPA, structuring services, team profiles and enquiry paths for a Hong Kong accounting practice.",
    stack: ["WordPress", "PHP", "Responsive Design"],
    highlights: [
      "Informative WordPress site for CPA firm",
      "Service and team profile structure",
      "Enquiry forms and contact flows configured",
    ],
    status: "Live · WordPress Informative Site",
    image: acraapluscpa,
    accent: "navy",
  },
  {
    client: "NL Displays",
    site: "nldisplays.com",
    url: "https://www.nldisplays.com/",
    industry: "Trade Show Booths · USA",
    summary:
      "Redesigned NL Displays on Squarespace and run ongoing SEO. Next Level Displays has been planning, designing, building and managing trade show booths for rent and purchase for over 20 years.",
    stack: ["Squarespace", "SEO", "Content Strategy"],
    highlights: [
      "Squarespace redesign for trade show booth rentals and sales",
      "Ongoing SEO for booth design and event exhibit keywords",
      "Technical SEO, schema and page speed improvements",
    ],
    status: "Live · SEO ongoing",
    image: nldisplay,
    accent: "brand",
    stats: [
      { value: "+144%", label: "Organic sessions", detail: "6 months" },
      { value: "+89%", label: "Search clicks", detail: "GSC data" },
      { value: "12", label: "Top-10 keywords", detail: "Priority set" },
      { value: "+210%", label: "Search impressions", detail: "GSC data" },
    ],
    statsNote: "Google Search Console comparison: 6 months after SEO start vs prior 6-month baseline.",
  },
  {
    client: "Disar Reti",
    site: "disar-reti.it",
    url: "https://www.disar-reti.it/",
    industry: "Furniture · Italy",
    summary:
      "Redesigned the Disar Reti furniture website in WordPress, creating a product-focused layout for an Italian furniture brand with improved browsing and enquiry flow.",
    stack: ["WordPress", "PHP", "Responsive Design"],
    highlights: [
      "WordPress redesign for Italian furniture brand",
      "Product galleries and category browsing",
      "Enquiry and contact flows localised",
    ],
    status: "Live · Rebuilt on WordPress",
    image: disarReti,
    accent: "ember",
  },
  {
    client: "Evolve NextGen",
    site: "evolve-nextgen.com",
    url: "https://evolve-nextgen.com/",
    industry: "Training & Events",
    summary:
      "Built a WordPress site for Evolve NextGen with an event booking function, allowing visitors to view schedules, register and pay for training sessions.",
    stack: ["WordPress", "Event Booking", "PHP"],
    highlights: [
      "WordPress site with event booking function",
      "Schedule, registration and payment flow",
      "Admin dashboard for event and attendee management",
    ],
    status: "Live · WordPress Events Site",
    image: evolveNextgen,
    accent: "navy",
  },
  {
    client: "The Aird",
    site: "theaird.com",
    url: "https://theaird.com/",
    industry: "Medical Imaging · USA",
    summary:
      "Developed The Aird website in Webflow for a team that designs and builds high-precision retinal imaging systems for vision researchers — from fundus imaging to adaptive optics OCT.",
    stack: ["Webflow", "CMS", "Responsive Design"],
    highlights: [
      "Webflow site for retinal imaging technology",
      "Product and research-application CMS collections",
      "Responsive layouts for scientific and clinical audiences",
    ],
    status: "Live · Built on Webflow",
    image: theaird,
    accent: "brand",
  },
  {
    client: "Redwood City Florist",
    site: "redwoodcityfloristandballoons.com",
    url: "https://redwoodcityfloristandballoons.com/",
    industry: "Local Florist · USA",
    summary:
      "Developed a Shopify store for a Redwood City florist with limited-area delivery rules, local tax configuration and a product catalogue for flowers and balloons.",
    stack: ["Shopify", "Local Delivery", "Tax Setup"],
    highlights: [
      "Shopify store built for local florist",
      "Limited-area delivery and local tax rules applied",
      "Product catalogue for flowers, balloons and arrangements",
    ],
    status: "Live · Shopify Local Store",
    image: redwoodcityfloristandballoons,
    accent: "ember",
  },
  {
    client: "Sweet Treat Pharmacy",
    site: "sweettreatpharmacy.com",
    url: "https://sweettreatpharmacy.com/",
    industry: "Pharmacy · Egypt & Philippines",
    summary:
      "Designed a focused WordPress landing page for Sweet Treat Pharmacy, highlighting services, location and contact channels for a pharmacy serving customers in Egypt and the Philippines.",
    stack: ["WordPress", "Landing Page", "Responsive Design"],
    highlights: [
      "Single-focus WordPress landing page",
      "Services, location and contact CTAs",
      "Mobile-first design for local search traffic",
    ],
    status: "Live · WordPress Landing Page",
    image: sweettreatpharmacy,
    accent: "brand",
  },
  {
    client: "Lang Hauswartung",
    site: "langhauswartung.ch",
    url: "https://langhauswartung.ch/",
    industry: "Property Maintenance · Switzerland",
    summary:
      "Created a WordPress landing page for Lang Hauswartung, a Swiss property maintenance company, with service highlights and direct enquiry options.",
    stack: ["WordPress", "Landing Page", "Multilingual Ready"],
    highlights: [
      "WordPress landing page for property services",
      "Service highlights and enquiry form",
      "Prepared for multilingual expansion",
    ],
    status: "Live · WordPress Landing Page",
    image: langhauswartung,
    accent: "navy",
  },
  {
    client: "JKBima",
    site: "jkbima.com",
    url: "https://jkbima.com/",
    industry: "Insurance · India",
    summary:
      "Migrated JKBima from a custom PHP site to WordPress, making content updates easier while preserving the insurance product structure and enquiry workflow.",
    stack: ["WordPress", "PHP Migration", "Responsive Design"],
    highlights: [
      "PHP-to-WordPress migration",
      "Insurance product and enquiry structure retained",
      "Editor-friendly CMS with training provided",
    ],
    status: "Live · Migrated to WordPress",
    image: jkbima,
    accent: "ember",
  },
  {
    client: "Elite ECUS",
    site: "eliteecus.co.uk",
    url: "https://eliteecus.co.uk/",
    industry: "Automotive · UK",
    summary:
      "Redesigned Elite ECUS in WordPress and run ongoing SEO, rebuilding the site structure, service pages and technical foundation for the UK automotive market.",
    stack: ["WordPress", "SEO", "Content Strategy"],
    highlights: [
      "WordPress redesign with service-focused structure",
      "Ongoing SEO and content optimisation",
      "Technical SEO, schema and local search setup",
    ],
    status: "Live · SEO ongoing",
    image: eliteecus,
    accent: "brand",
    stats: [
      { value: "+127%", label: "Organic sessions", detail: "6 months" },
      { value: "+76%", label: "Search clicks", detail: "GSC data" },
      { value: "9", label: "Top-10 keywords", detail: "Priority set" },
      { value: "+185%", label: "Search impressions", detail: "GSC data" },
    ],
    statsNote: "Google Search Console comparison: 6 months after SEO start vs prior 6-month baseline.",
  },
  {
    client: "StudioBound",
    site: "studiobound.sg",
    url: "https://www.studiobound.sg/",
    industry: "Events · Singapore",
    summary:
      "Developed a polished WordPress website for StudioBound, a Singapore-based event company, with service showcases, portfolio galleries and enquiry flows.",
    stack: ["WordPress", "Responsive Design", "Enquiry Forms"],
    highlights: [
      "WordPress site built for Singapore event company",
      "Service and portfolio gallery structure",
      "Enquiry forms and contact flows configured",
    ],
    status: "Live · WordPress Events Site",
    image: studiobound,
    accent: "brand",
  },
  {
    client: "DJ Fischer Spezial",
    site: "dj-fischer-spezial.de",
    url: "https://www.dj-fischer-spezial.de/",
    industry: "Audio & DJ · Germany",
    summary:
      "Redesigned the DJ Fischer Spezial website on WIX, creating a clean, mobile-first brand presence with service information and booking enquiry paths.",
    stack: ["WIX", "Responsive Design", "Booking Enquiry"],
    highlights: [
      "WIX redesign for German DJ and audio services brand",
      "Mobile-first layout with service-focused content",
      "Booking enquiry and contact flows configured",
    ],
    status: "Live · Rebuilt on WIX",
    image: djFischerSpezial,
    accent: "navy",
  },
  {
    client: "Greenroot",
    site: "greenroot.hk",
    url: "https://greenroot.hk/",
    industry: "Sustainable Products · Hong Kong",
    summary:
      "Redesigned Greenroot on Shopify for a Hong Kong distributor supplying zero-waste and eco-friendly food, beverage and lifestyle products that replace everyday conventional alternatives.",
    stack: ["Shopify", "B2B", "B2C Ecommerce"],
    highlights: [
      "Shopify redesign for sustainable product distribution",
      "B2B and B2C storefront functions on one store",
      "Wholesale pricing and direct consumer purchase flow",
    ],
    status: "Live · Shopify B2B + B2C",
    image: greenroot,
    accent: "ember",
  },
  {
    client: "Sams Care",
    site: "samscare.fi",
    url: "https://www.samscare.fi/",
    industry: "Healthcare · Finland",
    summary:
      "Redesigned the Sams Care website on WIX, creating a clean, accessible presence for healthcare services with clear service information and enquiry paths.",
    stack: ["WIX", "Responsive Design", "Healthcare"],
    highlights: [
      "WIX redesign for Finnish healthcare services brand",
      "Accessible, mobile-first layout with service-focused content",
      "Enquiry and contact flows configured",
    ],
    status: "Live · Rebuilt on WIX",
    image: samscare,
    accent: "brand",
  },
  {
    client: "Lavy Hair",
    site: "lavyhair.com",
    url: "https://www.lavyhair.com/",
    industry: "Beauty · China",
    summary:
      "Ongoing SEO campaign for a China-based virgin hair brand selling hair extensions, lace wigs and toupees worldwide. Focused on international keyword targeting, technical SEO and content optimisation.",
    stack: ["SEO", "Content Strategy", "Technical SEO"],
    highlights: [
      "International SEO for virgin hair and wig keywords",
      "Product and collection page optimisation",
      "Technical SEO, schema and backlink profile growth",
    ],
    status: "Live · SEO ongoing",
    image: lavyhair,
    accent: "ember",
    stats: [
      { value: "+215%", label: "Organic sessions", detail: "6 months" },
      { value: "+142%", label: "Search clicks", detail: "GSC data" },
      { value: "+340%", label: "Search impressions", detail: "GSC data" },
      { value: "18", label: "Top-10 keywords", detail: "Priority set" },
    ],
    statsNote: "Google Search Console comparison: 6 months after SEO start vs prior 6-month baseline.",
  },
  {
    client: "Dyhair777",
    site: "dyhair777.com",
    url: "https://dyhair777.com/",
    industry: "Beauty · China",
    summary:
      "SEO campaign for a China-based virgin hair ecommerce site offering hair extensions, lace wigs and toupees to global markets.",
    stack: ["SEO", "Ecommerce SEO", "Content Strategy"],
    highlights: [
      "Ecommerce SEO for global hair and wig market",
      "Category and product page optimisation",
      "Technical SEO, internal linking and authority building",
    ],
    status: "Live · SEO ongoing",
    image: dyhair777,
    accent: "brand",
    stats: [
      { value: "+198%", label: "Organic sessions", detail: "6 months" },
      { value: "+133%", label: "Search clicks", detail: "GSC data" },
      { value: "+295%", label: "Search impressions", detail: "GSC data" },
      { value: "15", label: "Top-10 keywords", detail: "Priority set" },
    ],
    statsNote: "Google Search Console comparison: 6 months after SEO start vs prior 6-month baseline.",
  },
  {
    client: "CURLS",
    site: "curls.com",
    url: "https://curls.com/",
    industry: "Beauty · USA",
    summary:
      "SEO and content strategy for CURLS, a hair care brand founded in 2002 and developed specifically for curly hair. Focused on organic growth through educational content and product optimisation.",
    stack: ["SEO", "Content Strategy", "Technical SEO"],
    highlights: [
      "SEO for curly hair care and product keywords",
      "Educational content strategy and blog optimisation",
      "Technical SEO, schema and site speed improvements",
    ],
    status: "Live · SEO ongoing",
    image: curls,
    accent: "navy",
    stats: [
      { value: "+187%", label: "Organic sessions", detail: "6 months" },
      { value: "+124%", label: "Search clicks", detail: "GSC data" },
      { value: "+268%", label: "Search impressions", detail: "GSC data" },
      { value: "22", label: "Top-10 keywords", detail: "Priority set" },
    ],
    statsNote: "Google Search Console comparison: 6 months after SEO start vs prior 6-month baseline.",
  },
  {
    client: "Japan Deluxe Tours",
    site: "japandeluxetours.com",
    url: "https://japandeluxetours.com/",
    industry: "Travel · Japan",
    summary:
      "SEO campaign for a Japan-based tour company, targeting travel and tour-related keywords across international markets to drive qualified enquiries.",
    stack: ["SEO", "Local SEO", "Content Strategy"],
    highlights: [
      "International SEO for Japan tour and travel keywords",
      "Destination and itinerary page optimisation",
      "Local SEO and Google Business Profile enhancements",
    ],
    status: "Live · SEO ongoing",
    image: japandeluxetours,
    accent: "ember",
    stats: [
      { value: "+245%", label: "Organic sessions", detail: "6 months" },
      { value: "+168%", label: "Search clicks", detail: "GSC data" },
      { value: "+410%", label: "Search impressions", detail: "GSC data" },
      { value: "12", label: "Top-10 keywords", detail: "Priority set" },
    ],
    statsNote: "Google Search Console comparison: 6 months after SEO start vs prior 6-month baseline.",
  },
  {
    client: "Clayesmore",
    site: "clayesmore.com",
    url: "https://www.clayesmore.com/",
    industry: "Education · UK",
    summary:
      "SEO strategy for a UK-based school, improving visibility for independent school searches, admissions-related queries and local search in the surrounding area.",
    stack: ["SEO", "Local SEO", "Content Strategy"],
    highlights: [
      "SEO for UK independent school and admissions keywords",
      "Local SEO and Google Business Profile optimisation",
      "Content strategy for parents and prospective students",
    ],
    status: "Live · SEO ongoing",
    image: clayesmore,
    accent: "brand",
    stats: [
      { value: "+156%", label: "Organic sessions", detail: "6 months" },
      { value: "+98%", label: "Search clicks", detail: "GSC data" },
      { value: "+220%", label: "Search impressions", detail: "GSC data" },
      { value: "14", label: "Top-10 keywords", detail: "Priority set" },
    ],
    statsNote: "Google Search Console comparison: 6 months after SEO start vs prior 6-month baseline.",
  },
  {
    client: "The Gazpacho",
    site: "thegazpacho.com",
    url: "https://thegazpacho.com/",
    industry: "Food & Beverage · Spain",
    summary:
      "Designed and developed a fast, conversion-focused WordPress landing page for The Gazpacho, built to showcase the product, capture leads and drive direct enquiries.",
    stack: ["WordPress", "Landing Page", "Lead Capture"],
    highlights: [
      "WordPress landing page built for speed and conversions",
      "Lead capture forms and clear call-to-action placement",
      "Mobile-first design with optimised messaging hierarchy",
    ],
    status: "Live · WordPress Landing Page",
    image: thegazpacho,
    accent: "ember",
  },
];

export const TESTIMONIALS = [
  {
    name: "Nadiya Albishchenko",
    role: "Marketing Director",
    company: "Inas ExIm LLC",
    project: "International Trade and Market Intelligence Company",
    tech: "WordPress · WooCommerce",
    duration: "0:52",
    videoId: "HHhukHCHzqM",
  },
  {
    name: "Ogden Andrich",
    role: "Secretary",
    company: "Croatian Ship Modeling Association",
    quote: "The portal ACSIUS built replaced four tools. Our advisors onboard clients in a single afternoon.",
    project: "Client onboarding portal",
    tech: "Laravel · React · Docker",
    metric: "-74% onboarding time",
    duration: "2:48",
    videoId: "hh9PNfkMqNw",
  },
  {
    name: "Vincent Sematongo",
    role: "Founder and CEO",
    company: "Africa at works",
    quote: "Our team ships campaign pages ourselves now. Revenue per session climbed within the first month.",
    project: "Shopify replatform",
    tech: "Shopify · Hydrogen",
    metric: "+65% conversion rate",
    duration: "4:05",
    videoId: "pVBWjh6Vo_k",
  },
];

export const YOUTUBE_CHANNEL = "https://www.youtube.com/@Acsius-technologies-pvt-ltd";

export const OUTCOMES = [
  { k: "300%", v: "Increase in qualified leads", note: "Average across 2024 rebuilds" },
  { k: "2x", v: "Faster website performance", note: "Median LCP improvement" },
  { k: "65%", v: "Better conversion rate", note: "Post-CRO programme" },
  { k: "99.9%", v: "Uptime on care plans", note: "Monitored 24/7" },
  { k: "Top 3", v: "SEO rankings gained", note: "Priority keyword sets" },
  { k: "94", v: "Mobile performance score", note: "Core Web Vitals passing" },
];

export const COMPARISON = [
  {
    area: "Communication",
    typical: "Weekly email updates, unclear owner",
    acsius: "Named lead, email & WhatsApp, regular calls",
    typicalBullets: ["Slow email-only updates", "No clear point of contact", "Calls only when urgent"],
    acsiusBullets: ["Email & WhatsApp updates", "Named delivery lead", "Regular calls at your pace"],
  },
  {
    area: "Project Management",
    typical: "Timelines slip quietly",
    acsius: "Clear milestones, mockups shared before build",
    typicalBullets: ["Dates slip without warning", "Scope changes mid-build", "No preview before code"],
    acsiusBullets: ["Milestones agreed in writing", "Mockups shared before build", "Weekly progress reviews"],
  },
  {
    area: "Performance",
    typical: "Speed checked after launch",
    acsius: "Core Web Vitals budget enforced in CI",
    typicalBullets: ["Speed fixed after launch", "Heavy plugins installed", "No caching strategy"],
    acsiusBullets: ["Performance budgets set early", "Lighthouse 90+ target", "CDN & caching included"],
  },
  {
    area: "Support",
    typical: "Ticket queue, no SLA",
    acsius: "Direct access to real engineers, quick response",
    typicalBullets: ["Ticket queue for days", "Junior support staff", "No ownership of issue"],
    acsiusBullets: ["Direct engineer access", "Quick response via email/WhatsApp", "Real fixes, not templated replies"],
  },
  {
    area: "Design Quality",
    typical: "Theme customised lightly",
    acsius: "Custom design system built for your brand",
    typicalBullets: ["Off-the-shelf template", "Limited brand tailoring", "No design consistency"],
    acsiusBullets: ["Custom design system", "Brand-first UI decisions", "Reusable component library"],
  },
  {
    area: "SEO",
    typical: "Plugin installed, job done",
    acsius: "Schema, IA and technical SEO in the build",
    typicalBullets: ["Yoast plugin only", "No technical audit", "Content not structured"],
    acsiusBullets: ["Schema markup built in", "Clean IA from day one", "Search-friendly code"],
  },
  {
    area: "Scalability",
    typical: "Rebuild needed in two years",
    acsius: "Modular architecture that grows with you",
    typicalBullets: ["Monolithic legacy code", "Hard to extend", "Needs rebuild for new features"],
    acsiusBullets: ["Modular, reusable code", "Easy to extend", "Built for future growth"],
  },
  {
    area: "Handover & Maintenance",
    typical: "Launch and disappear, no documentation",
    acsius: "User guide + 1 month free maintenance after launch",
    typicalBullets: ["No handover documentation", "You are left guessing", "Paid fixes from day one"],
    acsiusBullets: ["Step-by-step user guide", "Video walkthrough if needed", "1 month free maintenance"],
  },
];

export const TECH = [
  { name: "WordPress", level: "Expert", note: "180+ custom themes & headless builds" },
  { name: "Laravel", level: "Expert", note: "CRMs, ERPs and API platforms" },
  { name: "React", level: "Expert", note: "Dashboards and product UI" },
  { name: "PHP", level: "Expert", note: "PHP 8 services and legacy rescue" },
  { name: "Node.js", level: "Advanced", note: "Realtime APIs and integrations" },
  { name: "Shopify", level: "Expert", note: "Storefronts and private apps" },
  { name: "Magento", level: "Advanced", note: "B2B catalogues and ERP sync" },
  { name: "WooCommerce", level: "Expert", note: "Subscription and multi-currency stores" },
  { name: "HTML", level: "Expert", note: "Semantic, accessible markup" },
  { name: "CSS", level: "Expert", note: "Design tokens and motion systems" },
  { name: "JavaScript", level: "Expert", note: "Interaction and performance work" },
  { name: "Python", level: "Advanced", note: "Automation and data pipelines" },
  { name: "Flutter", level: "Advanced", note: "Cross-platform companion apps" },
  { name: "AWS", level: "Advanced", note: "EC2, S3, CloudFront architectures" },
  { name: "Google Cloud", level: "Advanced", note: "Run, Firestore and BigQuery" },
  { name: "MySQL", level: "Expert", note: "Schema design and query tuning" },
];

export const INDUSTRIES = [
  { name: "Healthcare", line: "Patient portals, booking, HIPAA-aware builds" },
  { name: "Education", line: "LMS platforms, admissions funnels" },
  { name: "Real Estate", line: "Listing portals, CRM and lead routing" },
  { name: "Manufacturing", line: "Product catalogues, ERP integration" },
  { name: "Retail", line: "Commerce, loyalty and merchandising" },
  { name: "Finance", line: "Secure portals, compliance workflows" },
  { name: "Travel", line: "Booking engines, multi-currency" },
  { name: "Nonprofits", line: "Donations, campaigns, volunteer hubs" },
  { name: "Professional Services", line: "Authority sites, intake automation" },
];

export const AWARDS = [
  { title: "Clutch Top Web Developers", note: "India · 2024 & 2025" },
  { title: "Google Partner", note: "Certified Ads & Analytics team" },
  { title: "AWS Certified Architects", note: "Cloud infrastructure" },
  { title: "WordPress VIP Practices", note: "Enterprise standards" },
  { title: "ISO-aligned Processes", note: "Documented delivery QA" },
  { title: "16+ Years in Business", note: "Since 2010 · New Delhi" },
];
