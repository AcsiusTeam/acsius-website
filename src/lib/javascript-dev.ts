export const JS_HERO = {
  eyebrow: "Hire JavaScript Developers · New Delhi, India · Since 2010",
  h1: ["Hire JavaScript developers", "who own the whole stack —", "browser to database."],
  lead:
    "ACSIUS gives you full stack JavaScript developers on demand. Hire JavaScript experts for React front ends, Node.js APIs, TypeScript refactors and realtime features — one language, one team, one accountable delivery lead.",
  support:
    "In-house senior engineers, four-hour timezone overlap, daily written updates, tests in CI — and a replacement inside 48 hours if the fit is wrong.",
  stats: [
    { value: 16, suffix: "+", label: "Years shipping JS" },
    { value: 30, suffix: "+", label: "JS engineers" },
    { value: 240, suffix: "+", label: "Apps delivered" },
    { value: 48, suffix: "h", label: "To onboard" },
  ],
};

/** Interactive capability explorer */
export const JS_CAPABILITIES = [
  {
    key: "frontend",
    tab: "Front end engineering",
    headline: "Interfaces that stay fast as features pile up.",
    body:
      "React, Next.js and TypeScript front ends with real component systems, accessible patterns and bundle budgets we actually enforce.",
    chips: ["React", "Next.js", "TypeScript", "Vite", "Tailwind"],
    metric: "<1.8s",
    metricLabel: "target Largest Contentful Paint",
  },
  {
    key: "node",
    tab: "Node.js APIs",
    headline: "Backends that hold under real traffic.",
    body:
      "Express, NestJS and Fastify services with validation at the edge, typed contracts, queues for slow work and logs you can debug from.",
    chips: ["Node.js", "NestJS", "Express", "Fastify", "REST", "GraphQL"],
    metric: "120ms",
    metricLabel: "median API response",
  },
  {
    key: "realtime",
    tab: "Realtime & data",
    headline: "Live dashboards, chat and collaboration.",
    body:
      "WebSockets, server-sent events and queue-driven pipelines wired into Postgres, Mongo or Redis — with backpressure handled, not hoped for.",
    chips: ["WebSockets", "Redis", "Postgres", "MongoDB", "BullMQ"],
    metric: "10k+",
    metricLabel: "concurrent sockets tested",
  },
  {
    key: "typescript",
    tab: "TypeScript rescue",
    headline: "Legacy JavaScript, made safe to change.",
    body:
      "Incremental TypeScript migration, dead-code removal, test harnesses and dependency upgrades — shipped in slices so releases never stop.",
    chips: ["TS migration", "ESLint", "Vitest", "Playwright", "Refactors"],
    metric: "0 hrs",
    metricLabel: "planned downtime",
  },
  {
    key: "devops",
    tab: "Ship & observe",
    headline: "From merge to production, automatically.",
    body:
      "CI pipelines, preview environments, containerised deploys and monitoring dashboards so every release is boring and reversible.",
    chips: ["GitHub Actions", "Docker", "AWS", "Vercel", "Sentry"],
    metric: "9 min",
    metricLabel: "commit to production",
  },
];

/** Full-stack roles you can hire */
export const JS_ROLES = [
  {
    role: "Full stack JavaScript developer",
    focus: "React + Node",
    detail: "Owns a feature end to end: UI, API, schema, tests, deploy.",
    level: "Senior",
  },
  {
    role: "JavaScript front-end expert",
    focus: "React / Next.js",
    detail: "Design systems, performance budgets, accessibility, animation.",
    level: "Senior",
  },
  {
    role: "Node.js backend coder",
    focus: "NestJS / Express",
    detail: "APIs, auth, integrations, queues, database modelling.",
    level: "Mid–Senior",
  },
  {
    role: "TypeScript architect",
    focus: "Monorepo / types",
    detail: "Shared contracts, module boundaries, migration roadmaps.",
    level: "Lead",
  },
  {
    role: "JavaScript QA automation",
    focus: "Playwright / Vitest",
    detail: "Regression suites, CI gates, flaky-test elimination.",
    level: "Mid",
  },
  {
    role: "Delivery lead",
    focus: "Sprint + scope",
    detail: "Standups, demos, written updates, risk calls before they bite.",
    level: "Lead",
  },
];

export const JS_MODELS = [
  {
    name: "Dedicated developer",
    price: "Monthly retainer",
    note: "Hire a JavaScript programmer working only on your roadmap, in your tools.",
    points: [
      "160 hrs/month, your standups and sprints",
      "Your repo, your board, your definition of done",
      "Swap or scale the seat with 2 weeks' notice",
    ],
    highlight: true,
  },
  {
    name: "Full stack pod",
    price: "Fixed scope",
    note: "Front end + Node + QA with a milestone plan and a launch date in writing.",
    points: [
      "Milestone plan signed before code starts",
      "Weekly demo on a staging URL",
      "Fixed cost, change requests priced in writing",
    ],
  },
  {
    name: "Part-time expert",
    price: "From 40 hrs/mo",
    note: "A senior JavaScript expert for architecture reviews, rescues and performance sprints.",
    points: [
      "Code review and architecture guardrails",
      "Performance and bundle-size sprints",
      "Emergency rescue for broken releases",
    ],
  },
];

export const JS_STACK = [
  "JavaScript ES2024",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Express",
  "Fastify",
  "GraphQL",
  "tRPC",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "BullMQ",
  "Vitest",
  "Playwright",
  "Docker",
  "AWS",
  "Sentry",
];

export const JS_PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    body: "45 minutes on the product, the stack and what the first release must prove.",
    duration: "Day 1",
    ship: "Written summary",
  },
  {
    step: "02",
    title: "Profiles & plan",
    body: "Matched JavaScript developer CVs with live products they shipped, plus an engagement plan.",
    duration: "48 hours",
    ship: "CVs + costs",
  },
  {
    step: "03",
    title: "Paid trial sprint",
    body: "Two weeks on a real slice of scope so you judge output, not interviews.",
    duration: "2 weeks",
    ship: "Working build",
  },
  {
    step: "04",
    title: "Build cadence",
    body: "Sprint demos on staging, PR reviews, unit and E2E tests in CI, daily updates.",
    duration: "Ongoing",
    ship: "Release every week",
  },
  {
    step: "05",
    title: "Launch & handover",
    body: "Production deploy, monitoring, runbook, repo access and 30 days of support.",
    duration: "Release week",
    ship: "Runbook + repo",
  },
];

export const JS_COMPARE = {
  columns: ["Freelance marketplace", "Generalist agency", "ACSIUS JavaScript bench"],
  rows: [
    {
      label: "Who writes the code",
      values: ["Unverified solo coder", "Rotating juniors", "Named in-house senior"],
    },
    {
      label: "Types & tests",
      values: ["Rarely", "On request", "TypeScript + CI from sprint one"],
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

export const JS_WHY = [
  {
    metric: "48h",
    title: "Profiles, not promises",
    body: "You see matched JavaScript coders with the products they shipped before you commit.",
    proof: "Average 2 working days from call to CVs",
  },
  {
    metric: "100%",
    title: "In-house, one studio",
    body: "No subcontracting. Every engineer sits in our New Delhi office on your sprint.",
    proof: "30+ JavaScript engineers on payroll",
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
    body: "Repo, env vars, deploy pipeline and docs are yours from the start.",
    proof: "Handover pack on every project",
  },
];

export const JS_FAQS = [
  {
    q: "How do I hire JavaScript developers from ACSIUS?",
    a: "Share your brief or existing repo. Within 48 hours you get matched JavaScript developer profiles with live products they built, a suggested engagement model and a written monthly or project cost. Most clients start with a two-week paid trial sprint before scaling the team.",
  },
  {
    q: "Can I hire a dedicated JavaScript developer part-time?",
    a: "Yes. You can hire a dedicated JavaScript developer full-time on a monthly retainer, take a part-time senior from 40 hours a month for architecture and reviews, or run a fixed-scope full stack pod. There is no long-term lock-in beyond the trial sprint.",
  },
  {
    q: "Do your full stack JavaScript developers handle both front end and backend?",
    a: "Yes. Our full stack JavaScript developers work across React or Next.js on the front end and Node.js, NestJS or Express on the backend, with PostgreSQL, MongoDB and Redis for data. One engineer can own a feature from UI to schema to deploy.",
  },
  {
    q: "Do you work in TypeScript or plain JavaScript?",
    a: "Both. New builds default to TypeScript for safer refactors and better editor tooling. For existing plain JavaScript codebases we can keep the current setup or run an incremental TypeScript migration in slices so releases never stop.",
  },
  {
    q: "Will the JavaScript programmers work in my timezone?",
    a: "Our team overlaps at least four hours with US, UK, Europe, Middle East and APAC business hours, and daily standups run inside that window. Handover notes are written so work continues outside the overlap.",
  },
  {
    q: "What does it cost to hire JavaScript experts in India?",
    a: "Cost depends on seniority and engagement model. You get a written monthly rate for dedicated developers or a fixed milestone cost for scoped projects — both quoted within two working days of the discovery call, with no hidden onboarding fees.",
  },
];
