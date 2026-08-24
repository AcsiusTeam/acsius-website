export const WD_HERO = {
  eyebrow: "Web Design Services in India · New Delhi · Since 2010",
  h1: ["Website Designing Company", "in India that designs", "for growth, not applause."],
  lead: "ACSIUS Technologies is a website design company in India delivering web design services for startups, SMBs and enterprises — strategy, UI/UX, WordPress, Shopify and custom development in one accountable team.",
  support:
    "Affordable web design services with fixed scope, transparent pricing and a written timeline. 3000+ websites delivered for clients in 35+ countries.",
  stats: [
    { value: 16, suffix: "+", label: "Years designing" },
    { value: 3000, suffix: "+", label: "Websites delivered" },
    { value: 35, suffix: "+", label: "Countries served" },
    { value: 98, suffix: "%", label: "On-time launches" },
  ],
};

export const WD_INTRO = [
  "A website is the first, and often the only, sales conversation your business gets. Most websites in India are still built the wrong way round: a template is bought, content is squeezed into it, and the result looks acceptable but converts poorly. Our web design services in India start from the opposite end — who your buyer is, what they need to be sure of before enquiring, and what the page has to prove in the first five seconds.",
  "As a website designing company in India, we handle the entire build in-house: research and wireframes, visual design, responsive front-end, CMS development on WordPress, Shopify or a custom stack, technical SEO groundwork, speed optimisation and launch. You work with one team and one point of contact from the first call to the day the site goes live — no agency middle layer, no handing your project to a freelancer marketplace.",
  "Affordable does not mean cheap. It means the money goes into the pages that earn — the home page, the service pages, the enquiry flow, the product templates — instead of decorative extras nobody scrolls to. We quote a fixed scope with a fixed range, and if something changes we tell you what it costs before we build it.",
  "Every website we ship is designed mobile-first, tested on real devices, tuned for Core Web Vitals, structured for search engines and AI answer engines, and handed over with a plain-language user guide plus one month of free maintenance so your team can make everyday edits without calling us.",
];

/** Answer-first blocks written for AI overviews and featured snippets. */
export const WD_ANSWERS = [
  {
    q: "What do web design services in India include?",
    a: "Professional web design services in India include discovery and content planning, wireframes, UI/UX design, responsive front-end development, CMS setup on WordPress or Shopify, on-page SEO basics, speed optimisation, testing, launch and post-launch support. ACSIUS delivers all of these in one fixed-scope engagement.",
  },
  {
    q: "How much does website designing cost in India?",
    a: "A professional business website in India typically costs ₹35,000 to ₹1,50,000, an ecommerce store ₹80,000 to ₹4,00,000, and custom web applications more depending on functionality. Affordable web design services keep cost down by scoping tightly, not by cutting quality — you get a fixed quote after a free consultation.",
  },
  {
    q: "Which is the best website design company in India for small businesses?",
    a: "Look for a web design company in India with in-house designers and developers, a portfolio of live sites you can visit, fixed written scope, mobile-first and SEO-ready builds, and support after launch. ACSIUS has delivered 3000+ websites since 2010 across 35+ countries on exactly those terms.",
  },
];

export const WD_WHY = [
  {
    title: "Designers and developers in one team",
    body: "No handoff gaps. The people who design your pages sit with the people who build them, so what you approve is what ships.",
  },
  {
    title: "Fixed scope, honest pricing",
    body: "A written scope, a fixed range and no surprise invoices. Affordable web design services with the trade-offs explained up front.",
  },
  {
    title: "Built to be found",
    body: "Clean structure, fast loading, schema markup and SEO groundwork included in every build — not sold to you later as an add-on.",
  },
  {
    title: "You own it after launch",
    body: "A recorded user guide, documentation and one month of free maintenance so your team can update content without a retainer.",
  },
];

export type WdService = {
  key: string;
  name: string;
  summary: string;
  points: string[];
  outcome: string;
};

export const WD_SERVICES: WdService[] = [
  {
    key: "uiux",
    name: "UI/UX Design",
    summary:
      "Research-led interface design. We map the journey your buyer actually takes, then design the screens that remove friction from it.",
    points: [
      "Audience, competitor and conversion research before any visual work",
      "Wireframes and content hierarchy signed off before design begins",
      "Design system: type scale, colour, spacing, components and states",
      "Interactive prototypes you can click through and comment on",
      "Accessibility, contrast and touch-target checks built into review",
    ],
    outcome: "A design you approve with confidence, because you saw the logic before the pixels.",
  },
  {
    key: "business",
    name: "Business Website Design",
    summary:
      "The core of our website designing services in India — corporate and service websites that make a credible case and generate enquiries.",
    points: [
      "Home, service, about, industry and contact page architecture",
      "Copy structure guidance so every page has one clear job",
      "Enquiry forms, WhatsApp and call actions placed where intent peaks",
      "Trust assets: case studies, certifications, testimonials, team pages",
      "CMS setup so your team can edit content without a developer",
    ],
    outcome: "A professional website that turns visits into qualified enquiries.",
  },
  {
    key: "wordpress",
    name: "WordPress Development",
    summary:
      "Custom WordPress builds — not bloated themes with twenty plugins holding the layout together.",
    points: [
      "Custom themes or performance-tuned page-builder implementations",
      "Reusable blocks and templates your marketing team can compose",
      "Plugin discipline: fewer, audited, security-updated plugins",
      "Migration from old sites without losing rankings or redirects",
      "Backups, hardening, caching and staging environment setup",
    ],
    outcome: "A WordPress site that is fast, safe and genuinely easy to update.",
  },
  {
    key: "ecommerce",
    name: "Ecommerce & Shopify",
    summary:
      "Stores designed around the buying decision — WooCommerce, Shopify and Magento builds that make browsing and checkout effortless.",
    points: [
      "Category, filter and product template design at catalogue scale",
      "Product pages with specs, trust signals and clear delivery answers",
      "Payment, shipping, GST and logistics integrations for India and export",
      "Checkout optimisation to cut abandonment on mobile",
      "Product schema and collection SEO built in from launch",
    ],
    outcome: "More of your catalogue discoverable, and more of your traffic converting.",
  },
  {
    key: "redesign",
    name: "Website Redesign",
    summary:
      "For sites that look dated, load slowly or lose visitors before the enquiry form. We fix the cause, not just the skin.",
    points: [
      "Analytics and heatmap review to find where visitors actually drop",
      "Content audit: what to keep, rewrite, merge or retire",
      "Redirect mapping so existing search rankings carry across",
      "Phased rollout options so business never pauses for a launch",
      "Before-and-after benchmarks on speed, enquiries and bounce",
    ],
    outcome: "A modern site that keeps your traffic and converts more of it.",
  },
  {
    key: "custom",
    name: "Custom Web Applications",
    summary:
      "When off-the-shelf will not do — portals, dashboards, booking systems and internal tools built on modern stacks.",
    points: [
      "Requirement workshops and functional specification documents",
      "Laravel, PHP, React and Node development with clean handover",
      "Role-based access, dashboards and reporting interfaces",
      "Third-party API, CRM, ERP and payment gateway integrations",
      "Documentation and code ownership transferred to you",
    ],
    outcome: "Software that fits your process instead of forcing you to change it.",
  },
  {
    key: "landing",
    name: "Landing Pages & CRO",
    summary: "High-intent pages for campaigns, plus conversion work on the pages you already have.",
    points: [
      "Campaign landing pages matched to ad message and audience",
      "Form length, field order and micro-copy tested for completion",
      "Above-the-fold clarity: offer, proof and action in one view",
      "Speed budgets so paid traffic never waits on a page",
      "Event and conversion tracking configured before go-live",
    ],
    outcome: "Lower cost per lead from the traffic you are already paying for.",
  },
  {
    key: "seoready",
    name: "SEO-Ready & Speed",
    summary:
      "Design decisions decide performance. Every build ships with the technical foundation search engines and AI answers reward.",
    points: [
      "Semantic HTML, heading structure and crawlable navigation",
      "Core Web Vitals tuning: LCP, INP and CLS on real devices",
      "Image compression, lazy loading and font delivery strategy",
      "Schema markup for organisation, service, product and FAQ",
      "Sitemaps, canonicals, metadata and Search Console setup",
    ],
    outcome: "A site that starts ranking sooner because nothing is blocking it.",
  },
];

export const WD_PROCESS = [
  {
    step: "01",
    title: "Discovery & Scope",
    duration: "Week 1",
    body: "A free consultation, then a working session on goals, audience, competitors and content. You receive a written scope, sitemap and fixed budget range before anything is designed.",
  },
  {
    step: "02",
    title: "Wireframes & Structure",
    duration: "Week 1–2",
    body: "Page-by-page wireframes and content hierarchy. We agree what each page must prove and where the enquiry actions live — the cheapest stage to change your mind.",
  },
  {
    step: "03",
    title: "Visual Design & Mockups",
    duration: "Week 2–4",
    body: "Home page design first, then inner templates. Mockups are shared over email and WhatsApp with review calls, and revised until you sign off.",
  },
  {
    step: "04",
    title: "Development & Integrations",
    duration: "Week 3–6",
    body: "Responsive front-end, CMS build on WordPress, Shopify or custom stack, forms, payments and third-party integrations — reviewed on a staging link throughout.",
  },
  {
    step: "05",
    title: "Testing & Launch",
    duration: "Launch week",
    body: "Cross-browser and real-device testing, speed tuning, SEO checks, redirects, analytics and Search Console setup, then a controlled go-live.",
  },
  {
    step: "06",
    title: "Training & Support",
    duration: "Month 1 onward",
    body: "A user guide and walkthrough so your team can edit content confidently, plus one month of free maintenance and optional ongoing SEO or support.",
  },
];

export const WD_INDUSTRIES = [
  {
    name: "Healthcare & Clinics",
    body: "Appointment-focused sites with treatment pages, doctor profiles and trust signals patients look for.",
  },
  {
    name: "Ecommerce & D2C",
    body: "Shopify and WooCommerce stores designed around browsing, product confidence and fast checkout.",
  },
  {
    name: "Manufacturing & Export",
    body: "Capability, specification and certification pages that convince international buyers to enquire.",
  },
  {
    name: "Real Estate",
    body: "Project showcases, locality pages, gallery-led layouts and enquiry paths built for site visits.",
  },
  {
    name: "Education & EdTech",
    body: "Course catalogues, admission journeys and content structures that answer student questions.",
  },
  {
    name: "Finance & Insurance",
    body: "Compliance-aware design with calculators, explainers and credibility-first page structure.",
  },
  {
    name: "Travel & Hospitality",
    body: "Visual, mobile-first booking journeys with seasonal landing pages and enquiry capture.",
  },
  {
    name: "Professional Services",
    body: "Law, consulting and agency websites where clarity, proof and authority do the selling.",
  },
];

export const WD_OUTCOMES = [
  { k: "3000+", v: "Websites delivered", note: "Since 2010, across 35+ countries" },
  { k: "100%", v: "Mobile-first layouts", note: "Designed and tested on real devices" },
  { k: "3", v: "Design revision rounds", note: "Included in every fixed-scope build" },
  { k: "4–6", v: "Weeks to typical launch", note: "Business websites with agreed content" },
  { k: "1 month", v: "Free maintenance", note: "Included after every go-live" },
  { k: "90+", v: "Target performance score", note: "Core Web Vitals tuned at launch" },
];

export const WD_DELIVERABLES = [
  {
    name: "Sitemap & written scope",
    detail:
      "Every page, template and integration listed before work starts, with a fixed budget range — so nobody discovers scope halfway through the build.",
  },
  {
    name: "Wireframes",
    detail:
      "Structural layouts for each page type showing content order, hierarchy and where enquiry actions sit, approved before visual design begins.",
  },
  {
    name: "Design mockups",
    detail:
      "Home page and inner-page mockups shared for review over email and WhatsApp, with revision rounds and review calls until you sign off.",
  },
  {
    name: "Responsive front-end",
    detail:
      "Pixel-accurate, mobile-first implementation tested on real phones, tablets and desktops across current browsers — not just resized in a browser window.",
  },
  {
    name: "CMS build & training",
    detail:
      "WordPress, Shopify or custom CMS configured with reusable blocks and templates, plus a recorded walkthrough so your team can edit content safely.",
  },
  {
    name: "SEO foundation",
    detail:
      "Semantic structure, metadata, schema markup, sitemap, robots rules and Search Console setup included in the build rather than sold afterwards.",
  },
  {
    name: "Speed optimisation",
    detail:
      "Image compression, caching, font strategy and Core Web Vitals tuning measured on real device data before we call the site ready.",
  },
  {
    name: "Integrations",
    detail:
      "Forms, payment gateways, WhatsApp, CRM, analytics, booking or ERP connections wired up and tested end to end on staging.",
  },
  {
    name: "Launch & migration",
    detail:
      "Redirect mapping, DNS and hosting setup, SSL, and a controlled go-live that protects the rankings your old site already earned.",
  },
  {
    name: "One month free maintenance",
    detail:
      "Post-launch fixes, small content changes and monitoring included for the first month, with optional support or SEO retainers after that.",
  },
];

export const WD_FAQS = [
  {
    q: "How much do web design services in India cost?",
    a: "A professional business website usually costs ₹35,000 to ₹1,50,000 depending on page count, custom design and integrations. Ecommerce stores typically range from ₹80,000 to ₹4,00,000, and custom web applications are quoted on functionality. We give you a fixed range in writing after a free consultation, so there are no surprise invoices later.",
  },
  {
    q: "How long does it take to design and build a website?",
    a: "A business website with agreed content takes four to six weeks: one week for scope and wireframes, two to three for design, and two to three for development and testing. Ecommerce and custom applications take eight to sixteen weeks. Delayed content is the single most common reason timelines slip, so we plan it up front.",
  },
  {
    q: "What makes ACSIUS an affordable web design company in India?",
    a: "We keep costs down structurally, not by cutting quality: an in-house team instead of subcontractors, reusable design systems, tight scoping so budget goes to pages that earn, and SEO plus speed work included rather than upsold. You get a fixed scope and a fixed range before we start.",
  },
  {
    q: "Will my website work properly on mobile phones?",
    a: "Yes. Every website we design is mobile-first, because most Indian traffic arrives on a phone. We design the mobile layout deliberately rather than shrinking the desktop version, and we test on real devices across Android and iOS before launch.",
  },
  {
    q: "Do you build on WordPress, Shopify or custom code?",
    a: "All three. WordPress suits most business and content websites, Shopify suits product-led ecommerce, and custom development on Laravel, PHP or React suits portals, dashboards and applications. We recommend the platform that fits your team and budget, and explain the trade-offs before you commit.",
  },
  {
    q: "Will the new website be SEO friendly?",
    a: "Yes. Semantic HTML, clean URL structure, heading hierarchy, metadata, schema markup, image optimisation, Core Web Vitals tuning, sitemaps and Search Console setup are part of every build. If you are replacing an existing site we also map redirects so current rankings carry across.",
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Yes. We build with reusable blocks and templates and hand over a plain-language user guide plus a walkthrough call, so your team can change text, images, blog posts and products without a developer. One month of free maintenance covers anything you would rather we handled.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Often. We review analytics to find where visitors drop, audit the content, keep what works, rebuild the rest and map redirects so search visibility is protected. Recent redesigns include a WordPress rebuild for Magic Touch and a WordPress-to-Shopify migration for BeautySups.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We have delivered 3000+ projects across 35+ countries including the US, UK, UAE, Kenya and Europe. Communication runs on email and WhatsApp with calls scheduled in whatever overlap your time zone allows.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A short call about your goals, examples of sites you like, your logo and brand assets, and whatever content you already have. If content is missing we will tell you exactly what is needed page by page, and can guide the structure so writing it is straightforward.",
  },
];

/** Interactive pillars used in place of a long intro block. */
export const WD_PILLARS = [
  {
    key: "strategy",
    tab: "Strategy first",
    title: "We design the argument before the interface",
    body: "Most websites in India are built the wrong way round — a template is bought, content is squeezed in, and the result looks acceptable but converts poorly. We start with your buyer: what they need to be sure of, and what the page must prove in the first five seconds.",
    facts: [
      "Buyer and competitor research",
      "Wireframes signed off first",
      "One clear job per page",
    ],
  },
  {
    key: "team",
    tab: "One in-house team",
    title: "Design, build and launch under one roof",
    body: "Research, UI/UX, responsive front-end, CMS development on WordPress, Shopify or a custom stack, technical SEO and speed work all happen in-house. One point of contact from the first call to go-live — no agency middle layer, no freelancer marketplace.",
    facts: ["Named project contact", "Email, WhatsApp and review calls", "Staging link throughout"],
  },
  {
    key: "pricing",
    tab: "Affordable, fixed",
    title: "Affordable does not mean cheap",
    body: "Budget goes into the pages that earn — home, services, enquiry flow, product templates — instead of decorative extras nobody scrolls to. You get a fixed scope with a fixed range, and if something changes we price it before we build it.",
    facts: ["Written scope and sitemap", "Fixed budget range", "No surprise invoices"],
  },
  {
    key: "handover",
    tab: "Built to last",
    title: "Fast, findable and yours to run",
    body: "Every website is designed mobile-first, tested on real devices, tuned for Core Web Vitals and structured for search engines and AI answer engines — then handed over with a plain-language user guide and one month of free maintenance.",
    facts: [
      "Mobile-first, real-device tested",
      "Schema and SEO groundwork",
      "User guide + 1 month support",
    ],
  },
];

// import magicTouchBefore from "@/assets/magictouch-before.png.asset.json";
// import bougrougBefore from "@/assets/Bougroug-before.png.asset.json";
// import elburgonBefore from "@/assets/Elburgon_Flies_Supply-before.png.asset.json";
import magicTouchBefore from "@/assets/case-magictouch.png";
import bougrougBefore from "@/assets/images/Bougroug-before.webp";
import elburgonBefore from "@/assets/Elburgon_Flies_Supply-before.png";

export const WD_BEFORE_AFTER = [
  {
    beforeImage: magicTouchBefore,
    client: "Magic Touch",
    site: "magictouch.ba",
    platform: "WordPress redesign",
    beforeNote:
      "Dated layout, weak hierarchy, treatments buried in walls of text and no clear enquiry path on mobile.",
    afterNote:
      "Mobile-first redesign with treatment pages, an online webshop and clear booking actions — organic sessions up 61%.",
  },
  {
    beforeImage: bougrougBefore,
    client: "BeautySups",
    site: "beautysups.com",
    platform: "WordPress → Shopify",
    beforeNote:
      "An enquiry-only WordPress site: no cart, no product structure and every sale needed a manual email reply.",
    afterNote:
      "A full Shopify store with a version upgrade, Klaviyo automation, Klarna, Stripe and other payment gateways built for mobile buying.",
  },
  {
    beforeImage: elburgonBefore,
    client: "Elburgon Flies Supply",
    site: "troutflyfishingflieskenya.com",
    platform: "WordPress ecommerce",
    beforeNote:
      "No real storefront — a thin brochure presence with no catalogue, filtering or way to buy online.",
    afterNote:
      "A WooCommerce store with category browsing, product filtering, secure payments and worldwide shipping.",
  },
];
