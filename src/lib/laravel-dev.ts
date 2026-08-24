export const LRV_HERO = {
  eyebrow: "Hire Laravel Developers · New Delhi, India · Since 2010",
  h1: ["Hire Laravel developers", "who ship APIs, dashboards", "and payments that hold up."],
  lead:
    "ACSIUS is a Laravel web development company in India. Hire dedicated Laravel developers monthly, part-time or per project — REST and GraphQL APIs, admin panels, SaaS products, multi-tenant platforms, queues, payments and migrations off legacy PHP.",
  support:
    "In-house senior engineers, your timezone overlap, daily standups, tests in CI — and a replacement inside 48 hours if the fit is wrong.",
  stats: [
    { value: 16, suffix: "+", label: "Years in PHP" },
    { value: 25, suffix: "+", label: "Laravel engineers" },
    { value: 180, suffix: "+", label: "Apps delivered" },
    { value: 48, suffix: "h", label: "To onboard" },
  ],
};

/** Interactive capability explorer — Laravel website development services */
export const LRV_CAPABILITIES = [
  {
    key: "api",
    tab: "APIs & integrations",
    headline: "APIs your mobile and web clients can trust.",
    body:
      "Versioned REST or GraphQL endpoints with Sanctum or Passport auth, rate limits, pagination, typed resources and OpenAPI docs your frontend team can read without asking us.",
    chips: ["Sanctum", "Passport", "GraphQL", "OpenAPI", "Webhooks"],
    metric: "120ms",
    metricLabel: "median API response",
  },
  {
    key: "saas",
    tab: "SaaS & multi-tenant",
    headline: "One codebase, many tenants, clean billing.",
    body:
      "Tenant isolation by database or scope, plan gating, seat management, trials and dunning wired into Stripe or Razorpay — plus the admin tooling your support team needs on day one.",
    chips: ["Cashier", "Stripe", "Razorpay", "Tenancy", "Roles & permissions"],
    metric: "3 wks",
    metricLabel: "to a billable MVP",
  },
  {
    key: "panels",
    tab: "Admin panels",
    headline: "Dashboards operators actually enjoy.",
    body:
      "Filament, Nova or a bespoke Livewire/Inertia panel with audit logs, exports, bulk actions and role-based access — replacing the spreadsheets your ops team quietly maintains.",
    chips: ["Filament", "Nova", "Livewire", "Inertia + React", "Audit logs"],
    metric: "40%",
    metricLabel: "ops hours recovered",
  },
  {
    key: "scale",
    tab: "Queues & scale",
    headline: "Heavy work moved off the request.",
    body:
      "Horizon-supervised queues, scheduled jobs, Redis caching, Octane for throughput, read replicas and query tuning — so exports, invoices and imports never block a user again.",
    chips: ["Horizon", "Redis", "Octane", "Scout", "Query tuning"],
    metric: "9.1x",
    metricLabel: "throughput after tuning",
  },
  {
    key: "rescue",
    tab: "Rescue & migration",
    headline: "Legacy PHP, brought back to life.",
    body:
      "CodeIgniter, CakePHP, raw PHP or an abandoned Laravel 5 app — we audit, add tests around the risky paths, upgrade in steps and migrate data with a rehearsed cutover plan.",
    chips: ["Version upgrades", "Data migration", "Pest tests", "CI/CD", "Zero-downtime deploys"],
    metric: "0 hrs",
    metricLabel: "planned downtime",
  },
];

export const LRV_BUILDS = [
  {
    name: "SaaS products",
    detail: "Subscriptions, tenants, usage limits and a founder-friendly admin.",
    tag: "Product",
  },
  {
    name: "ERP & internal tools",
    detail: "Inventory, procurement, HR and approval workflows in one place.",
    tag: "Operations",
  },
  {
    name: "Marketplaces",
    detail: "Vendor onboarding, split payouts, commissions, disputes.",
    tag: "Commerce",
  },
  {
    name: "Fintech back-ends",
    detail: "Ledgers, KYC flows, reconciliation and immutable audit trails.",
    tag: "Regulated",
  },
  {
    name: "Headless back-ends",
    detail: "Laravel API behind a React, Next.js or mobile front-end.",
    tag: "API-first",
  },
  {
    name: "Portals & CRMs",
    detail: "Customer, dealer and partner portals with granular permissions.",
    tag: "Relationships",
  },
];

/** Clickable engagement models */
export const LRV_MODELS = [
  {
    name: "Dedicated developer",
    price: "Monthly retainer",
    note: "One or more Laravel developers working only on your roadmap, in your tools.",
    points: [
      "160 hrs/month, your standups and sprints",
      "Your repo, your Jira, your definition of done",
      "Swap or scale the seat with 2 weeks' notice",
    ],
    highlight: true,
  },
  {
    name: "Delivery pod",
    price: "Fixed scope",
    note: "Backend + frontend + QA with a written milestone plan and a launch date.",
    points: [
      "Milestone plan signed before code starts",
      "Weekly demo on a staging URL",
      "Fixed cost, change requests priced in writing",
    ],
  },
  {
    name: "Part-time expert",
    price: "From 40 hrs/mo",
    note: "A senior Laravel developer for reviews, rescues and performance sprints.",
    points: [
      "Code review and architecture guardrails",
      "Core Web Vitals and query tuning sprints",
      "Emergency rescue for broken deploys",
    ],
  },
];

export const LRV_STACK = [
  "Laravel 11",
  "PHP 8.3",
  "Livewire",
  "Inertia",
  "Filament",
  "Nova",
  "Horizon",
  "Octane",
  "Sanctum",
  "Cashier",
  "Pest",
  "PHPUnit",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Meilisearch",
  "Docker",
  "GitHub Actions",
  "AWS",
  "Vapor",
];

export const LRV_PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    body: "45 minutes on the product, the data model and what the first release must do.",
    duration: "Day 1",
    ship: "Written summary",
  },
  {
    step: "02",
    title: "Profiles & plan",
    body: "Matched developer CVs with live Laravel apps they built, plus an engagement plan.",
    duration: "48 hours",
    ship: "CVs + costs",
  },
  {
    step: "03",
    title: "Paid trial sprint",
    body: "Two weeks on a real slice of scope so you judge output, not interviews.",
    duration: "2 weeks",
    ship: "Working feature",
  },
  {
    step: "04",
    title: "Build cadence",
    body: "Sprint demos on staging, PR reviews, Pest tests in CI, daily written updates.",
    duration: "Ongoing",
    ship: "Staging every week",
  },
  {
    step: "05",
    title: "Launch & handover",
    body: "Zero-downtime deploy, monitoring, runbook, repo access and 30 days of support.",
    duration: "Release week",
    ship: "Runbook + repo",
  },
];

export const LRV_COMPARE = {
  columns: ["Freelance marketplace", "Generalist agency", "ACSIUS Laravel bench"],
  rows: [
    {
      label: "Who writes the code",
      values: ["Unverified solo dev", "Rotating juniors", "Named in-house senior"],
    },
    {
      label: "Tests & CI",
      values: ["Rarely", "On request", "Pest + CI from sprint one"],
    },
    {
      label: "If they disappear",
      values: ["You restart hiring", "Ticket queue", "Replacement in 48 hours"],
    },
    {
      label: "Code ownership",
      values: ["Zips over chat", "Agency repo", "Your repo, day one"],
    },
    {
      label: "After launch",
      values: ["Chat goes quiet", "New contract", "30 days support + runbook"],
    },
  ],
};

export const LRV_WHY = [
  {
    metric: "48h",
    title: "Profiles, not promises",
    body: "You see matched Laravel developers with the apps they shipped before you commit.",
    proof: "Average 2 working days from call to CVs",
  },
  {
    metric: "100%",
    title: "In-house, in one studio",
    body: "No subcontracting. Every engineer sits in our New Delhi office on your sprint.",
    proof: "25+ Laravel engineers on payroll",
  },
  {
    metric: "Daily",
    title: "Written updates",
    body: "What moved, what is blocked, what ships next — in your channel every day.",
    proof: "Slack, Teams or email — your call",
  },
  {
    metric: "0",
    title: "Lock-in",
    body: "Repo, environment variables, deploy pipeline and docs are yours from the start.",
    proof: "Handover pack on every project",
  },
];

export const LRV_FAQS = [
  {
    q: "How do I hire Laravel developers from ACSIUS?",
    a: "Send your brief or repo access. Within 48 hours you get matched developer profiles with live Laravel apps they built, a suggested engagement model and a written monthly or project cost. Most clients start with a two-week paid trial sprint before committing further.",
  },
  {
    q: "Can I hire a dedicated Laravel developer for just one project?",
    a: "Yes. You can hire a dedicated Laravel developer for a single fixed-scope project, take a part-time senior for reviews and performance work, or run a monthly retainer. There is no minimum contract beyond the trial sprint.",
  },
  {
    q: "What Laravel versions and ecosystem tools do you work with?",
    a: "We build on Laravel 11 with PHP 8.3 and work daily with Livewire, Inertia, Filament, Nova, Horizon, Octane, Sanctum, Cashier, Scout and Pest. We also maintain and upgrade older Laravel 5 to 9 applications.",
  },
  {
    q: "Do you offer Laravel website development services as well as applications?",
    a: "Yes. Alongside product engineering we deliver Laravel website development services — marketing sites with a custom CMS, multilingual content, headless Laravel APIs behind a React or Next.js front-end, and integrations with WordPress or Shopify where that suits your team better.",
  },
  {
    q: "Will the developers work in my timezone?",
    a: "Our team overlaps at least four hours with US, UK, Europe, Middle East and APAC business hours, and we run daily standups inside that window. Handover notes are written so work continues outside the overlap.",
  },
];
