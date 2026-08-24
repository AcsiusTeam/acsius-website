export const MGT_HERO = {
  eyebrow: "Hire Magento Developers · New Delhi, India · Since 2010",
  h1: ["Hire dedicated Magento developers", "who ship storefronts that", "check out faster."],
  lead:
    "ACSIUS is a Magento development agency in India. Hire Magento developers monthly, part-time or per project — Adobe Commerce and Magento Open Source builds, upgrades, B2B portals, multi-store rollouts, ERP integrations and checkout performance work.",
  support:
    "In-house certified engineers, four-hour timezone overlap, weekly staging demos — and a replacement seat inside 48 hours if the fit is wrong.",
  stats: [
    { value: 16, suffix: "+", label: "Years in commerce" },
    { value: 20, suffix: "+", label: "Magento engineers" },
    { value: 240, suffix: "+", label: "Stores shipped" },
    { value: 48, suffix: "h", label: "To onboard" },
  ],
};

/** Accordion-style services list */
export const MGT_SERVICES = [
  {
    key: "build",
    title: "Store builds on Adobe Commerce",
    summary: "New storefronts, themes and PWA fronts.",
    body:
      "Custom themes on Luma or Hyvä, PWA Studio fronts, structured category logic, faceted search and a checkout trimmed to the fewest steps your payment stack allows.",
    chips: ["Hyvä", "PWA Studio", "Luma", "Elasticsearch", "One-step checkout"],
    metric: "1.9s",
    metricLabel: "median LCP after launch",
  },
  {
    key: "migrate",
    title: "Magento 1 → 2 and version upgrades",
    summary: "Data, extensions and SEO carried over intact.",
    body:
      "Catalog, customers, orders and URL keys migrated with rehearsed dry runs, 301 maps kept whole, extensions replaced where vendors went quiet, and a rollback plan for launch night.",
    chips: ["Data Migration Tool", "301 mapping", "Extension audit", "Dry runs", "Rollback plan"],
    metric: "0 hrs",
    metricLabel: "planned downtime",
  },
  {
    key: "b2b",
    title: "B2B commerce & multi-store",
    summary: "Company accounts, quotes, tiered pricing.",
    body:
      "Adobe Commerce B2B with company hierarchies, requisition lists, quote negotiation, credit limits, plus multi-website setups for regions, brands and currencies from one admin.",
    chips: ["B2B module", "Requisition lists", "Tier pricing", "Multi-website", "Multi-currency"],
    metric: "6",
    metricLabel: "storefronts, one codebase",
  },
  {
    key: "integrations",
    title: "ERP, PIM & marketplace integrations",
    summary: "Stock and orders that agree with each other.",
    body:
      "Two-way syncs with SAP, NetSuite, Dynamics, Zoho, Akeneo and 3PL partners — plus Amazon, Flipkart and eBay feeds — using queues so a slow API never blocks a customer.",
    chips: ["SAP", "NetSuite", "Akeneo", "RabbitMQ", "3PL / shipping"],
    metric: "99.9%",
    metricLabel: "sync accuracy",
  },
  {
    key: "speed",
    title: "Performance, security & support",
    summary: "Retainers for speed, patches and peaks.",
    body:
      "Varnish and Redis tuning, indexer and cron repair, image and JS budgets, quarterly security patches, and load rehearsals before sale season so traffic spikes stay boring.",
    chips: ["Varnish", "Redis", "Security patches", "Load testing", "24/7 escalation"],
    metric: "3.4x",
    metricLabel: "faster catalog pages",
  },
];

/** Bento grid — what we build */
export const MGT_BUILDS = [
  {
    name: "D2C brand stores",
    detail: "Editorial storefronts with subscriptions, bundles and loyalty wired in.",
    tag: "Retail",
    size: "wide",
  },
  { name: "B2B wholesale portals", detail: "Company accounts, quotes and credit terms.", tag: "Wholesale", size: "tall" },
  { name: "Marketplaces", detail: "Vendor onboarding, commissions and split payouts.", tag: "Multi-vendor", size: "std" },
  { name: "Multi-region rollouts", detail: "One admin, many storefronts, local tax and currency.", tag: "Global", size: "std" },
  { name: "Headless commerce", detail: "GraphQL Magento behind a Next.js or React front-end.", tag: "API-first", size: "wide" },
  { name: "Rescue & replatform", detail: "Stalled builds, broken upgrades, abandoned extensions.", tag: "Recovery", size: "std" },
];

/** Migration stepper */
export const MGT_MIGRATION = [
  { step: "01", title: "Audit", body: "Extension inventory, custom code, data volume and SEO risk mapped.", meta: "Week 1" },
  { step: "02", title: "Blueprint", body: "Target architecture, extension replacements, URL and redirect plan.", meta: "Week 1–2" },
  { step: "03", title: "Dry run", body: "Full data migration to staging, delta runs measured and timed.", meta: "Week 3" },
  { step: "04", title: "Cutover", body: "Delta sync, DNS switch, redirect verification, monitoring live.", meta: "Launch night" },
  { step: "05", title: "Stabilise", body: "30 days of watch, ranking checks, conversion and speed report.", meta: "Post-launch" },
];

/** Clickable hiring models */
export const MGT_MODELS = [
  {
    name: "Dedicated Magento developer",
    price: "Monthly retainer",
    note: "One or more certified developers working only on your roadmap, in your tools.",
    points: [
      "160 hrs/month, your sprints and standups",
      "Your repo, your board, your definition of done",
      "Scale or swap the seat with 2 weeks' notice",
    ],
    highlight: true,
  },
  {
    name: "Store launch pod",
    price: "Fixed scope",
    note: "Backend, frontend, QA and a launch date agreed in writing.",
    points: [
      "Milestone plan signed before code starts",
      "Weekly demo on a staging storefront",
      "Fixed cost, changes priced in writing",
    ],
  },
  {
    name: "Support & speed retainer",
    price: "From 40 hrs/mo",
    note: "A senior Magento engineer for patches, peaks and performance sprints.",
    points: [
      "Quarterly security patch cycles",
      "Core Web Vitals and checkout tuning",
      "Sale-season load rehearsals",
    ],
  },
];

export const MGT_STACK = [
  "Adobe Commerce",
  "Magento Open Source 2.4",
  "Hyvä",
  "PWA Studio",
  "GraphQL",
  "PHP 8.3",
  "MySQL",
  "Elasticsearch",
  "OpenSearch",
  "Redis",
  "Varnish",
  "RabbitMQ",
  "Composer",
  "Docker",
  "Adobe Commerce Cloud",
  "AWS",
  "Razorpay",
  "Stripe",
  "Klaviyo",
  "New Relic",
];

export const MGT_COMPARE = {
  columns: ["Freelance marketplace", "Generalist agency", "ACSIUS Magento bench"],
  rows: [
    { label: "Who writes the code", values: ["Unverified solo dev", "Rotating juniors", "Named certified senior"] },
    { label: "Upgrade & patch cycle", values: ["Never mentioned", "Extra quote", "Quarterly, in the retainer"] },
    { label: "Speed accountability", values: ["Not measured", "Screenshot of a score", "LCP budget per template"] },
    { label: "If they disappear", values: ["You restart hiring", "Ticket queue", "Replacement in 48 hours"] },
    { label: "After launch", values: ["Chat goes quiet", "New contract", "30 days support + runbook"] },
  ],
};

export const MGT_WHY = [
  {
    metric: "48h",
    title: "Profiles, not promises",
    body: "You see matched Magento developers and the stores they shipped before you commit.",
    proof: "Average 2 working days from call to CVs",
  },
  {
    metric: "100%",
    title: "In-house, one studio",
    body: "No subcontracting. Every engineer sits in our New Delhi office on your sprint.",
    proof: "20+ Magento engineers on payroll",
  },
  {
    metric: "Weekly",
    title: "Staging you can click",
    body: "Every sprint ends on a staging storefront your team tests, not a status document.",
    proof: "Written daily updates in your channel",
  },
  {
    metric: "0",
    title: "Lock-in",
    body: "Repo, environments, deploy pipeline and docs are yours from day one.",
    proof: "Handover pack on every project",
  },
];

export const MGT_FAQS = [
  {
    q: "How do I hire Magento developers from ACSIUS?",
    a: "Share your brief, store URL or repo access. Within 48 hours you get matched Magento developer profiles with live stores they built, a suggested engagement model and a written monthly or project cost. Most clients start with a two-week paid trial sprint before committing further.",
  },
  {
    q: "Can I hire a dedicated Magento developer for a single project?",
    a: "Yes. You can hire a dedicated Magento developer for one fixed-scope project, take a part-time senior for patches and performance work, or run a monthly retainer. There is no minimum contract beyond the trial sprint.",
  },
  {
    q: "Do you work with Adobe Commerce as well as Magento Open Source?",
    a: "Both. We deliver Magento development services on Adobe Commerce (including B2B and Commerce Cloud) and on Magento Open Source 2.4, with Hyvä or PWA Studio front-ends and headless GraphQL setups where that suits your team.",
  },
  {
    q: "Can you migrate our Magento 1 store or upgrade an old Magento 2 version?",
    a: "Yes. We audit extensions and custom code, rehearse the data migration on staging, keep URL keys and 301 redirects intact to protect rankings, and cut over with a rollback plan — typically with no planned downtime.",
  },
  {
    q: "Why hire Magento developers in India through ACSIUS?",
    a: "You get certified in-house engineers at India rates with at least four hours of overlap with US, UK, Europe, Middle East and APAC business hours, daily written updates, code in your repository from day one and a 48-hour replacement guarantee on any seat.",
  },
];
