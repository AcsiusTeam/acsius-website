export const PHP_HERO = {
  eyebrow: "Hire PHP Developers · New Delhi, India · Since 2010",
  h1: ["Hire PHP developers", "who ship clean backends", "that stay fast under load."],
  lead:
    "ACSIUS is a PHP development company in India. Hire dedicated PHP developers monthly, part-time or per project — custom CMS modules, REST APIs, legacy rescues, e-commerce backends and cloud deployments on PHP 8.",
  support:
    "In-house senior engineers, your timezone overlap, daily standups, code in your repo from day one — and a replacement seat inside 48 hours if the fit is wrong.",
  stats: [
    { value: 16, suffix: "+", label: "Years in PHP" },
    { value: 30, suffix: "+", label: "PHP engineers" },
    { value: 220, suffix: "+", label: "Backends delivered" },
    { value: 48, suffix: "h", label: "To onboard" },
  ],
};

/** Horizontal capability explorer — PHP development services */
export const PHP_CAPABILITIES = [
  {
    key: "api",
    tab: "APIs & microservices",
    headline: "REST and GraphQL APIs that mobile and web teams trust.",
    body:
      "Versioned endpoints, typed resources, JWT or OAuth auth, rate limiting and OpenAPI docs — built with Slim, Laravel or plain PHP so your frontend team never has to guess.",
    chips: ["REST", "GraphQL", "JWT", "OAuth2", "OpenAPI"],
    metric: "98ms",
    metricLabel: "median API response",
  },
  {
    key: "cms",
    tab: "CMS & e-commerce",
    headline: "Custom modules for WordPress, WooCommerce and Magento.",
    body:
      "Plugins, themes, payment gateways, shipping rules and admin tools built to WordPress and Magento coding standards — secure, upgrade-safe and documented.",
    chips: ["WordPress", "WooCommerce", "Magento", "ACF", "Custom blocks"],
    metric: "180+",
    metricLabel: "CMS modules shipped",
  },
  {
    key: "legacy",
    tab: "Legacy rescue",
    headline: "Old PHP, brought back to life.",
    body:
      "We audit raw PHP, CodeIgniter, CakePHP and early Laravel apps, add tests around the risky paths, upgrade PHP versions and migrate data with a rehearsed cutover plan.",
    chips: ["PHP 5 → 8", "CodeIgniter", "CakePHP", "Pest", "CI/CD"],
    metric: "0 hrs",
    metricLabel: "planned downtime",
  },
  {
    key: "cloud",
    tab: "Cloud & DevOps",
    headline: "Deployments that stay up when traffic spikes.",
    body:
      "Dockerised PHP apps, queue workers, Redis caching, load balancing, Cloudflare and AWS setups with monitoring, backups and rollback-ready pipelines.",
    chips: ["Docker", "AWS", "Redis", "Queues", "Cloudflare"],
    metric: "99.9%",
    metricLabel: "uptime on care plans",
  },
  {
    key: "db",
    tab: "Database & performance",
    headline: "Queries tuned before they become a problem.",
    body:
      "Schema design, indexing, query optimisation, read replicas and migration scripts — so reports, exports and checkout flows stay fast as you grow.",
    chips: ["MySQL", "PostgreSQL", "MariaDB", "Indexing", "Replication"],
    metric: "6x",
    metricLabel: "faster report queries",
  },
];

/** Dark navy build cards */
export const PHP_BUILDS = [
  {
    name: "Custom web applications",
    detail: "Portals, dashboards and workflow tools with role-based access.",
    tag: "Apps",
  },
  {
    name: "CMS extensions",
    detail: "WordPress plugins, theme features and admin tooling.",
    tag: "WordPress",
  },
  {
    name: "E-commerce backends",
    detail: "WooCommerce, Magento and bespoke cart logic.",
    tag: "Commerce",
  },
  {
    name: "API platforms",
    detail: "Headless backends for React, React Native and Vue front-ends.",
    tag: "API-first",
  },
  {
    name: "Legacy modernisation",
    detail: "Upgrade, refactor and migrate ageing PHP codebases.",
    tag: "Rescue",
  },
  {
    name: "SaaS foundations",
    detail: "Billing, tenants, queues and admin panels on PHP.",
    tag: "SaaS",
  },
];

/** Clickable hiring models */
export const PHP_MODELS = [
  {
    name: "Dedicated PHP developer",
    price: "Monthly retainer",
    note: "One or more PHP developers working only on your roadmap, in your tools.",
    points: [
      "160 hrs/month, your standups and sprints",
      "Your repo, your board, your definition of done",
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
      "Fixed cost, changes priced in writing",
    ],
  },
  {
    name: "Part-time expert",
    price: "From 40 hrs/mo",
    note: "A senior PHP developer for audits, rescues and performance sprints.",
    points: [
      "Code review and architecture guardrails",
      "Legacy rescue and upgrade sprints",
      "Emergency support for broken deploys",
    ],
  },
];

export const PHP_STACK = [
  "PHP 8.3",
  "Laravel",
  "Slim",
  "Symfony",
  "WordPress",
  "WooCommerce",
  "Magento",
  "CodeIgniter",
  "MySQL",
  "PostgreSQL",
  "MariaDB",
  "Redis",
  "Docker",
  "Composer",
  "Pest",
  "PHPUnit",
  "GitHub Actions",
  "AWS",
  "Cloudflare",
  "RabbitMQ",
];

/** Vertical timeline */
export const PHP_PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    body: "45 minutes on your codebase, goals and the first release that matters.",
    duration: "Day 1",
    ship: "Written summary",
  },
  {
    step: "02",
    title: "Profiles & plan",
    body: "Matched PHP developers with live projects they built, plus an engagement plan.",
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
    body: "Sprint demos on staging, PR reviews, tests in CI, daily written updates.",
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

export const PHP_COMPARE = {
  columns: ["Freelance marketplace", "Generalist agency", "ACSIUS PHP bench"],
  rows: [
    { label: "Who writes the code", values: ["Unverified solo dev", "Rotating juniors", "Named in-house senior"] },
    { label: "Tests & CI", values: ["Rarely", "On request", "PHPUnit/Pest from sprint one"] },
    { label: "If they disappear", values: ["You restart hiring", "Ticket queue", "Replacement in 48 hours"] },
    { label: "Code ownership", values: ["Zips over chat", "Agency repo", "Your repo, day one"] },
    { label: "After launch", values: ["Chat goes quiet", "New contract", "30 days support + runbook"] },
  ],
};

export const PHP_WHY = [
  {
    metric: "48h",
    title: "Profiles, not promises",
    body: "You see matched PHP developers and the backends they shipped before you commit.",
    proof: "Average 2 working days from call to CVs",
  },
  {
    metric: "100%",
    title: "In-house, one studio",
    body: "No subcontracting. Every engineer sits in our New Delhi office on your sprint.",
    proof: "30+ PHP engineers on payroll",
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
    body: "Repo, environments, deploy pipeline and docs are yours from the start.",
    proof: "Handover pack on every project",
  },
];

export const PHP_FAQS = [
  {
    q: "How do I hire PHP developers from ACSIUS?",
    a: "Send your brief, repo access or existing site URL. Within 48 hours you get matched PHP developer profiles with live projects they built, a suggested engagement model and a written monthly or project cost. Most clients start with a two-week paid trial sprint before committing further.",
  },
  {
    q: "Can I hire a dedicated PHP developer for a single project?",
    a: "Yes. You can hire a dedicated PHP developer for one fixed-scope project, take a part-time senior for audits and performance work, or run a monthly retainer. There is no minimum contract beyond the trial sprint.",
  },
  {
    q: "What PHP frameworks and platforms do you work with?",
    a: "We work with PHP 8.3, Laravel, Slim, Symfony, WordPress, WooCommerce, Magento, CodeIgniter and CakePHP. We also rescue and upgrade legacy PHP 5 and 7 codebases to modern, supported versions.",
  },
  {
    q: "Do you offer PHP development services in India for international clients?",
    a: "Yes. We are a PHP development company in India serving clients in the US, UK, Europe, Middle East and APAC. Our team overlaps at least four hours with your business hours and provides daily written updates in your preferred channel.",
  },
  {
    q: "Why hire PHP developers in India through ACSIUS?",
    a: "You get in-house senior engineers at India rates, with at least four hours of timezone overlap, daily written updates, code in your repository from day one, tests in CI from sprint one and a 48-hour replacement guarantee on any seat.",
  },
];
