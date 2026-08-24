export const LP_HERO = {
  eyebrow: "Landing Page Design Services · New Delhi, India",
  h1: ["Landing page design", "built for one job:", "more qualified leads."],
  lead:
    "ACSIUS is a landing page design company in India building single-page, conversion-first pages for Google Ads, Meta and email campaigns — message-matched copy, fast load and a form that actually gets filled.",
  support:
    "Need only one page? That is exactly what we ship — design, build, tracking and a first A/B test, without touching your main website.",
  badges: ["Google Ads ready", "PPC message match", "A/B tested", "Live in 7 days"],
  stats: [
    { value: 900, suffix: "+", label: "Pages designed" },
    { value: 140, suffix: "%", label: "Avg. CVR lift" },
    { value: 96, suffix: "+", label: "Lighthouse score" },
    { value: 7, suffix: "d", label: "Fastest go-live" },
  ],
};

/** Segmented switcher — page types */
export const LP_TYPES = [
  {
    key: "ppc",
    name: "PPC / Google Ads page",
    best: "Paid traffic that must convert today",
    body:
      "One offer, one form, zero navigation. Headline mirrors the ad, proof sits above the fold and conversions fire into Google Ads.",
    chips: ["Ad message match", "Call + form", "Conversion tracking", "Quality Score"],
    stat: "5-7 d",
    statLabel: "typical go-live",
    href: "/ppc-services-company-india",
  },
  {
    key: "lead",
    name: "Lead-gen page",
    best: "Services, B2B and consultation offers",
    body:
      "Problem-led narrative, credibility blocks and a short qualifying form that routes straight to your CRM or WhatsApp.",
    chips: ["Qualifying form", "CRM routing", "WhatsApp CTA", "Thank-you flow"],
    stat: "3 fields",
    statLabel: "average form",
    href: "/contact",
  },
  {
    key: "product",
    name: "Product / offer launch",
    best: "New launches, pricing and demo pages",
    body:
      "Interactive feature walkthrough, comparison and pricing table with sticky CTA that follows the scroll on mobile.",
    chips: ["Sticky CTA", "Pricing table", "Demo booking", "Scroll story"],
    stat: "68%",
    statLabel: "scroll depth",
    href: "/ui-ux-website-design-company",
  },
  {
    key: "event",
    name: "Event & app download",
    best: "Webinars, registrations and app installs",
    body:
      "Countdown, speaker or screenshot strip, seat scarcity and a two-tap registration built for mobile-first traffic.",
    chips: ["Countdown", "Calendar add", "Store badges", "Mobile-first"],
    stat: "2 taps",
    statLabel: "to register",
    href: "/mobile-app-development-services",
  },
];

/** Google Ads / PPC — single landing page bundle */
export const LP_PPC = {
  eyebrow: "Google Ads & PPC support",
  heading: "Only need one landing page? We can run the ads behind it too.",
  lead:
    "Most clients come for one page and stay for the traffic. Add a lean PPC layer — search, Performance Max or Meta — managed by the same team that designed the page.",
  meter: [
    { label: "Ad relevance", from: 42, to: 94 },
    { label: "Landing page experience", from: 38, to: 96 },
    { label: "Expected CTR", from: 46, to: 88 },
  ],
  items: [
    {
      tag: "Search Ads",
      title: "Google Search campaigns",
      body: "Keyword clusters, exact-match ad groups and RSAs written to mirror the page headline.",
    },
    {
      tag: "P-Max",
      title: "Performance Max & Display",
      body: "Asset groups, audience signals and creative sets pointing to one focused page.",
    },
    {
      tag: "Meta",
      title: "Meta & LinkedIn lead ads",
      body: "Paid social creatives and lead forms mapped to the same offer and CRM pipeline.",
    },
    {
      tag: "Tracking",
      title: "Conversion tracking that ties out",
      body: "GA4 events, Google Ads conversions, Meta CAPI and call tracking verified before spend starts.",
    },
    {
      tag: "Remarketing",
      title: "Remarketing & lead nurture",
      body: "Audience lists, sequenced creatives and follow-up emails for visitors who did not convert.",
    },
    {
      tag: "Reporting",
      title: "Cost-per-lead reporting",
      body: "One dashboard for spend, leads, CPL and qualified-lead rate — no vanity metrics.",
    },
  ],
  note: "Page only, page + ads, or ads on a page you already have — all three are fine.",
};

/** Anatomy of a converting page — bento on navy */
export const LP_ANATOMY = [
  {
    title: "Above-the-fold offer",
    body: "One promise, one proof point and one CTA visible in under two seconds on a mid-range phone.",
    tag: "Hero",
    span: "lg:col-span-2",
  },
  { title: "Trust strip", body: "Logos, ratings, certifications and numbers placed where doubt starts.", tag: "Proof", span: "" },
  { title: "Objection blocks", body: "The three reasons people hesitate, answered before the form.", tag: "Copy", span: "" },
  {
    title: "Frictionless form",
    body: "Three fields, inline validation, WhatsApp and call fallback, plus a real thank-you page.",
    tag: "Form",
    span: "lg:col-span-2",
  },
  { title: "Sticky mobile CTA", body: "A thumb-reachable action bar that never leaves the screen.", tag: "Mobile", span: "" },
  { title: "Speed budget", body: "No page builder bloat — LCP under 1.5s so paid clicks are not wasted.", tag: "Speed", span: "" },
  {
    title: "Tracking & heatmaps",
    body: "GA4, Ads conversions, scroll and click heatmaps live from day one so the first test has data.",
    tag: "Data",
    span: "lg:col-span-2",
  },
];

/** Deliverables */
export const LP_DELIVERABLES = [
  {
    group: "Design",
    items: ["Custom desktop + mobile design", "Conversion copy framework", "Icon and image direction", "Two design revisions"],
  },
  {
    group: "Build",
    items: ["Hand-coded or clean WordPress build", "Form, CRM and WhatsApp wiring", "Thank-you page and autoresponder", "Speed and Core Web Vitals pass"],
  },
  {
    group: "Growth",
    items: ["GA4 + Ads conversion setup", "Heatmap and recording install", "First A/B test hypothesis", "30-day support window"],
  },
];

/** A/B test proof rows */
export const LP_TESTS = [
  { area: "Hero headline", change: "Offer-led headline mirroring the ad", lift: "+31%" },
  { area: "Form length", change: "Seven fields cut to three", lift: "+44%" },
  { area: "Proof placement", change: "Ratings moved above the fold", lift: "+18%" },
  { area: "Mobile CTA", change: "Sticky action bar added", lift: "+27%" },
  { area: "Page speed", change: "Builder replaced with coded page", lift: "+22%" },
];

export const LP_MODELS = [
  {
    name: "Single landing page",
    price: "Fixed price",
    note: "One page, designed, built, tracked and live — nothing else touched.",
    points: ["Design + build + tracking", "Live in 5-7 working days", "30 days of fixes included"],
    highlight: true,
  },
  {
    name: "Page + Google Ads",
    price: "Page + monthly",
    note: "The page plus a lean paid search or Meta layer managed by the same team.",
    points: ["Campaign build and creatives", "CPL dashboard and call tracking", "Monthly optimisation calls"],
  },
  {
    name: "CRO retainer",
    price: "From 20 hrs/mo",
    note: "Ongoing testing on your existing pages, reported in cost per lead.",
    points: ["Monthly test roadmap", "Variant design and build", "Result readouts with next steps"],
  },
];

export const LP_PROCESS = [
  { step: "01", title: "Offer & audience brief", body: "A 45-minute call on the offer, traffic source, objections and what a qualified lead looks like.", duration: "Day 1", ship: "Brief + wireframe" },
  { step: "02", title: "Copy & wireframe", body: "Section-by-section message map so the page argues in the right order before design starts.", duration: "Day 2", ship: "Approved copy" },
  { step: "03", title: "Design", body: "Desktop and mobile design in your brand, built for scanning rather than reading.", duration: "Days 3-4", ship: "Design preview" },
  { step: "04", title: "Build & wire-up", body: "Coded page, form, CRM, WhatsApp, thank-you page, GA4 and Google Ads conversions.", duration: "Days 5-6", ship: "Staging URL" },
  { step: "05", title: "Launch & test", body: "Go live, verify conversions with a test lead, then queue the first A/B test from real data.", duration: "Day 7", ship: "Live page + test plan" },
];

export const LP_COMPARE = {
  typical: {
    title: "Typical builder landing page",
    points: [
      "A drag-and-drop template with stock photos",
      "Full site navigation leaking clicks away",
      "Ten-field form nobody completes on mobile",
      "No conversion tracking, so ads optimise blindly",
      "One version, never tested again",
    ],
  },
  acsius: {
    title: "ACSIUS landing page",
    points: [
      "Copy and layout designed around one offer",
      "Zero exits — one path, one action",
      "Three-field form with WhatsApp and call fallback",
      "GA4 and Ads conversions verified before spend",
      "A/B test roadmap from week two",
    ],
  },
};

export const LP_WHY = [
  { metric: "900+", title: "Pages, not guesses", body: "Landing pages across services, SaaS, education, healthcare and real estate since 2010." },
  { metric: "7d", title: "Campaign-speed delivery", body: "Brief on Monday, live page the following week — built for ad launch dates." },
  { metric: "CPL", title: "Judged on cost per lead", body: "We report leads and CPL, not impressions or bounce-rate trivia." },
  { metric: "0", title: "No lock-in", body: "Hosted on your domain, in your accounts, with the files handed over." },
];

export const LP_FAQS = [
  {
    q: "What is included in your landing page design services?",
    a: "Offer and audience discovery, conversion copywriting, wireframe, custom desktop and mobile design, a coded or clean WordPress build, form with CRM and WhatsApp routing, thank-you page, speed optimisation, GA4 and Google Ads conversion tracking, heatmap install, QA across devices and 30 days of support after launch.",
  },
  {
    q: "I only need one landing page — can you do that?",
    a: "Yes. A single landing page is our most common project. We design and build only that page at a fixed price, host it on your domain or a subdomain, and never touch the rest of your website. If you later want more pages or a full site, the same design system carries over.",
  },
  {
    q: "Can you also run the Google Ads and PPC campaigns for that page?",
    a: "Yes. We can add Google Search, Performance Max, Display, Meta or LinkedIn campaigns on top of the page — keyword research, ad copy that matches the page headline, audience signals, conversion tracking, remarketing and a cost-per-lead dashboard. You can take the page only, the page with ads, or ads on a page you already own.",
  },
  {
    q: "How long does a landing page take, and what does it cost?",
    a: "A single page usually goes live in five to seven working days once copy and brand assets are approved, and is quoted as a fixed price based on section count and integrations. PPC management is a separate monthly fee based on ad spend. Everything is written down before work starts and anything outside scope is priced in advance.",
  },
  {
    q: "Will the landing page improve my Google Ads Quality Score?",
    a: "It usually does. Quality Score rewards ad relevance, expected CTR and landing page experience, so we mirror ad group keywords in the headline and subhead, keep one clear offer per page, load in under two seconds on mobile and make the CTA obvious. Lower CPCs and a better ad rank normally follow within a few weeks of data.",
  },
  {
    q: "Why choose ACSIUS as your landing page design agency in India?",
    a: "We are an in-house team in New Delhi combining designers, developers, copywriters and PPC specialists, so the page, the tracking and the traffic are handled by one accountable team. You get India pricing, at least four hours of timezone overlap, daily written updates, delivery in about a week and A/B testing that keeps improving cost per lead after launch.",
  },
];
