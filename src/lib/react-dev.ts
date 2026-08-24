export const RCT_HERO = {
  eyebrow: "Hire ReactJS Developers · New Delhi, India · Since 2010",
  h1: ["Hire ReactJS Developers", "who ship shippable UI,", "sprint after sprint."],
  lead:
    "ACSIUS Technologies is a React JS development company in India. Hire dedicated React JS developers full-time, part-time or per project — dashboards, design systems, SaaS front-ends, Next.js sites, API integration and performance work.",
  support:
    "Hire a remote React developer who works in your timezone overlap, your repo and your standups — with a paid trial sprint first and a 48-hour replacement promise.",
  stats: [
    { value: 9, suffix: "+", label: "Years on React" },
    { value: 30, suffix: "+", label: "React devs in-house" },
    { value: 180, suffix: "+", label: "Front-ends shipped" },
    { value: 48, suffix: "h", label: "To matched CVs" },
  ],
};

/** Tabbed intro explorer — scannable, not a wall of text. */
export const RCT_PILLARS = [
  {
    key: "gap",
    tab: "The skill gap",
    stat: "9 yrs",
    statLabel: "on React in production",
    headline: "Anyone can render a component. Few can ship a front-end.",
    body:
      "The gap between a tutorial React app and a production one is state design, data fetching, accessibility and bundle discipline. Our React JS development services are delivered by engineers who maintained the apps they built, so decisions are made for month twelve.",
    points: [
      "Predictable state — server state in TanStack Query, not prop soup",
      "Accessible, keyboard-usable components by default",
      "Bundles budgeted and measured, not discovered after launch",
    ],
  },
  {
    key: "range",
    tab: "Range of work",
    stat: "180+",
    statLabel: "front-ends shipped",
    headline: "Marketing site to 200-screen operations console.",
    body:
      "We staff React work for founders, in-house product teams, and agencies who white-label our bench. That range means we can tell you what your budget actually buys before scope is locked.",
    points: [
      "SaaS dashboards, admin consoles and internal tools",
      "Next.js and SSR marketing sites that score on Core Web Vitals",
      "Design systems and component libraries in Storybook",
    ],
  },
  {
    key: "hiring",
    tab: "How hiring works",
    stat: "48h",
    statLabel: "to matched profiles",
    headline: "Hire dedicated React JS developers, or one defined job.",
    body:
      "Take a named developer monthly and treat them as part of your team. Take a pod (React dev, designer, QA) on written scope. Or bring in an expert for one job: a rewrite, a rescue, a performance sprint.",
    points: [
      "Legacy jQuery or AngularJS to React migrations",
      "Rescues on half-finished front-ends from another vendor",
      "Performance sprints on slow, over-rendering apps",
    ],
  },
  {
    key: "practice",
    tab: "Engineering practice",
    stat: "0",
    statLabel: "lock-in at handover",
    headline: "TypeScript, tests, reviews — as a default, not an upsell.",
    body:
      "Every project runs on your Git remote with typed components, ESLint and Prettier enforced in CI, Vitest and Playwright coverage on critical paths, and preview deployments per pull request.",
    points: [
      "TypeScript strict mode and typed API contracts",
      "PR previews your team can click before merge",
      "Repo, docs and credentials handed over on payment",
    ],
  },
];

/** Answer-first blocks for AI overviews and featured snippets. */
export const RCT_ANSWERS = [
  {
    q: "How do I hire ReactJS developers?",
    a: "Define the outcome first (new product front-end, rewrite, design system, ongoing feature work), then pick a model: a dedicated React developer monthly, a project pod on fixed scope, or hourly for small work. Review shipped apps and read their code — not just screenshots. With ACSIUS you get a free consultation, matched CVs in 48 hours, your own technical interview and a paid two-week trial sprint before any commitment.",
  },
  {
    q: "How much does it cost to hire dedicated React JS developers in India?",
    a: "Hiring dedicated React JS developers in India typically costs USD 1,500–3,000 per developer per month full-time, or USD 18–35 per hour part-time, depending on seniority and whether Next.js, TypeScript or React Native experience is needed. Fixed-scope React front-end projects usually start around ₹1,80,000 for an MVP dashboard.",
  },
  {
    q: "What does a React JS development company actually deliver?",
    a: "A React JS development company builds component architecture and design systems, wires server state and API contracts, implements routing and auth flows, handles forms and validation, adds SSR or static rendering where SEO matters, writes unit and end-to-end tests, tunes bundle size and rendering performance, and sets up CI with preview deployments.",
  },
  {
    q: "Can I hire a remote React developer for a short engagement?",
    a: "Yes. We take short React engagements from 20 hours — a performance sprint, an accessibility pass, a component library, an API integration or a rescue on an unfinished front-end — on a fixed quote or hourly basis. Longer retainers get lower effective rates and a named developer reserved for your account.",
  },
];

export const RCT_MODELS = [
  {
    key: "dedicated",
    label: "Dedicated React developer",
    tagline: "Your team, our payroll",
    body:
      "A named React engineer working only on your roadmap, in your repo, tickets and standups. You direct the work; we handle hiring, cover, appraisals and replacement.",
    best: "Ongoing product and feature work",
    commitment: "Monthly · 160 hours",
    points: [
      "Daily standup plus a written end-of-day summary",
      "4–5 hours of overlap with your working hours",
      "Free replacement within 48 hours if the fit is wrong",
      "Scale into a pod with design, QA and DevOps",
    ],
  },
  {
    key: "project",
    label: "Fixed-scope build",
    tagline: "Written scope, fixed range",
    body:
      "A pod — React developer, designer and QA — delivering an agreed screen list and feature set against milestones, with the budget range signed off before code starts.",
    best: "MVPs, dashboards, rewrites, redesigns",
    commitment: "5–12 weeks typical",
    points: [
      "Screen inventory, states and scope document up front",
      "Milestone demos on a staging URL you can click",
      "Change requests priced before they are built",
      "One month of free post-launch support",
    ],
  },
  {
    key: "support",
    label: "Retainer & rescue",
    tagline: "Hours on tap",
    body:
      "A monthly block of hours for features, refactors, dependency upgrades, performance work and bug triage on a live React app — including inherited codebases.",
    best: "Live apps and vendor handovers",
    commitment: "From 20 hours / month",
    points: [
      "Dependency and React version upgrades",
      "Performance and re-render profiling",
      "Same-day triage for anything blocking revenue",
      "Monthly report of what changed and why",
    ],
  },
];

/** Stack explorer — sidebar list + detail panel (School ERP rhythm). */
export const RCT_STACK = [
  {
    key: "core",
    icon: "◈",
    label: "React 19 core",
    title: "Component architecture that survives a growing team.",
    body:
      "Composable components with typed props, colocated state, suspense boundaries and error boundaries where they belong — so a new developer can find and change things without fear.",
    metric: "100%",
    metricLabel: "TypeScript coverage",
    ships: [
      "Typed component contracts",
      "Suspense and error boundaries",
      "Hooks extracted and unit tested",
      "No prop drilling past two levels",
    ],
  },
  {
    key: "state",
    icon: "▦",
    label: "State & data",
    title: "Server state and UI state kept apart.",
    body:
      "TanStack Query for anything that lives on a server — caching, retries, invalidation, optimistic updates — and lightweight local state for the rest. No global store bloat by default.",
    metric: "0",
    metricLabel: "stale-data bugs shipped",
    ships: [
      "TanStack Query cache design",
      "Optimistic updates and rollback",
      "Zustand or context only where needed",
      "Typed API clients with Zod validation",
    ],
  },
  {
    key: "nextjs",
    icon: "✦",
    label: "SSR & routing",
    title: "Rendering chosen per route, not per fashion.",
    body:
      "Next.js or TanStack Start where SEO and first paint matter, client rendering where an app sits behind a login. Routing, metadata and caching decided route by route.",
    metric: "90+",
    metricLabel: "target Lighthouse score",
    ships: [
      "SSR, SSG and streaming where it pays",
      "Per-route metadata and canonicals",
      "Code splitting and route preloading",
      "Edge-ready builds",
    ],
  },
  {
    key: "design",
    icon: "✎",
    label: "Design systems",
    title: "A component library your designers trust.",
    body:
      "Tokenised Tailwind themes, headless primitives for accessibility, and a Storybook your designers and QA can review — so the tenth screen looks like the first.",
    metric: "1",
    metricLabel: "source of truth",
    ships: [
      "Design tokens and theming",
      "Accessible primitives (Radix)",
      "Storybook with visual review",
      "Dark mode without hardcoded colours",
    ],
  },
  {
    key: "api",
    icon: "➤",
    label: "APIs & integrations",
    title: "The front-end is only as good as its contracts.",
    body:
      "REST and GraphQL integration, auth and session flows, payments, file uploads, webhooks and third-party SDKs — wired with typed contracts and real error states.",
    metric: "48h",
    metricLabel: "typical integration spike",
    ships: [
      "Auth, roles and protected routes",
      "Stripe, Razorpay and payment flows",
      "GraphQL codegen and REST clients",
      "Real loading, empty and error states",
    ],
  },
  {
    key: "quality",
    icon: "☑",
    label: "Testing & CI",
    title: "Green pipeline before anything reaches your users.",
    body:
      "Vitest for units, Playwright for the flows that make money, lint and type checks in CI, and a preview deployment on every pull request so review happens on a URL.",
    metric: "PR",
    metricLabel: "preview on every change",
    ships: [
      "Vitest unit and hook tests",
      "Playwright end-to-end coverage",
      "Type + lint gates in CI",
      "Per-PR preview deployments",
    ],
  },
  {
    key: "perf",
    icon: "⚡",
    label: "Performance",
    title: "Fast on a mid-range Android, not just your laptop.",
    body:
      "Bundle budgets, memoisation where profiling says so, virtualised lists, image strategy and Core Web Vitals measured on real devices before and after.",
    metric: "-45%",
    metricLabel: "typical bundle reduction",
    ships: [
      "React Profiler re-render audits",
      "List virtualisation at scale",
      "Bundle budgets in CI",
      "Web Vitals monitoring",
    ],
  },
  {
    key: "mobile",
    icon: "⌂",
    label: "React Native reuse",
    title: "Share logic between web and app where it makes sense.",
    body:
      "When a mobile app is on the roadmap, we keep types, validation and API clients shared so a React Native build reuses the thinking instead of restarting it.",
    metric: "60%",
    metricLabel: "logic reuse typical",
    ships: [
      "Shared types and schemas",
      "Common API layer",
      "Consistent design tokens",
      "Native handover documentation",
    ],
  },
];

/** Role-based view of who you actually get (segmented control + app window). */
export const RCT_ROLES = [
  {
    key: "senior",
    label: "Senior React engineer",
    headline: "Owns architecture, reviews every merge, unblocks the rest.",
    lines: [
      "Designs component and state architecture before the first sprint",
      "Reviews pull requests daily with written, actionable feedback",
      "Runs profiling and sets the bundle budget you ship against",
      "Pairs with your in-house devs so knowledge does not leave with us",
    ],
  },
  {
    key: "product",
    label: "Product React dev",
    headline: "Turns tickets into shipped, tested screens every sprint.",
    lines: [
      "Builds features from Figma with real empty and error states",
      "Writes the tests that cover the flow, not just the function",
      "Raises scope questions before building the wrong thing",
      "Demos on staging at the end of every sprint",
    ],
  },
  {
    key: "fullstack",
    label: "Full-stack (React + API)",
    headline: "Ships the endpoint and the screen in the same pull request.",
    lines: [
      "Node, Laravel or PHP APIs behind a typed React front-end",
      "Database and query work when the bottleneck is the backend",
      "Auth, roles and permissions wired end to end",
      "Deploys through CI with rollback ready",
    ],
  },
  {
    key: "qa",
    label: "QA & accessibility",
    headline: "Breaks it on purpose before your users do it by accident.",
    lines: [
      "Playwright suites for signup, checkout and admin flows",
      "Keyboard and screen-reader passes on every new screen",
      "Cross-browser and mid-range Android device checks",
      "Regression report attached to every release",
    ],
  },
];

/** Sprint rhythm — horizontal stepper. */
export const RCT_SPRINT = [
  { k: "Mon", t: "Sprint plan", d: "Scoped tickets with acceptance criteria you approve." },
  { k: "Tue–Thu", t: "Build & review", d: "Small PRs, previews per change, daily written updates." },
  { k: "Fri", t: "Demo on staging", d: "Click the work yourself; feedback goes into the next plan." },
  { k: "Every 2 wks", t: "Ship & measure", d: "Release notes, Web Vitals delta and a burndown you can read." },
];

export const RCT_STEPS = [
  {
    step: "01",
    title: "Free consultation",
    body: "A 30-minute call on the product, the stack, the deadline and the skills you actually need — no pitch deck.",
    duration: "Day 1",
  },
  {
    step: "02",
    title: "Matched profiles",
    body: "Within 48 hours you get two or three React developer CVs with the apps they built and maintained.",
    duration: "48 hours",
  },
  {
    step: "03",
    title: "Technical interview",
    body: "Interview them yourself — code review, hooks and state questions, a paid take-home if you prefer.",
    duration: "Day 3–4",
  },
  {
    step: "04",
    title: "Trial sprint",
    body: "A two-week paid sprint on real backlog items so you judge output, not promises. Walk away with no notice.",
    duration: "2 weeks",
  },
  {
    step: "05",
    title: "Onboard & ship",
    body: "Repo, CI, tickets and standups set up. Work lands in small reviewable PRs with previews.",
    duration: "Ongoing",
  },
  {
    step: "06",
    title: "Scale or hand over",
    body: "Add developers, designers and QA as scope grows — or take a documented handover with one month of free support.",
    duration: "On request",
  },
];

export const RCT_COMPARE = {
  typical: {
    title: "The React quote that looks cheap",
    points: [
      "One freelancer, no code review, no tests",
      "State scattered across contexts nobody owns",
      "Screens built without empty, loading or error states",
      "No TypeScript, so every refactor is a gamble",
      "Handover is a zip file and a phone number",
    ],
  },
  acsius: {
    title: "The ACSIUS React engagement",
    points: [
      "In-house salaried bench, senior code review on every PR",
      "Typed contracts, TanStack Query, documented state design",
      "Every screen ships with real states and accessibility checks",
      "Vitest and Playwright coverage on revenue-critical flows",
      "Repo, docs and credentials transfer on payment — no lock-in",
    ],
  },
};

export const RCT_OUTCOMES = [
  { k: "48h", v: "To matched profiles", note: "CVs plus apps they maintained" },
  { k: "2 weeks", v: "Paid trial sprint", note: "Judge output before committing" },
  { k: "160 hrs", v: "Monthly dedicated time", note: "One client at a time" },
  { k: "4–5 hrs", v: "Timezone overlap", note: "US, UK, EU, AU and Middle East" },
  { k: "90+", v: "Target Lighthouse score", note: "Measured on real devices" },
  { k: "1 month", v: "Free support", note: "Included after every go-live" },
];

export const RCT_WHY = [
  {
    title: "In-house bench, not a marketplace",
    body: "Every React developer is a salaried ACSIUS employee in our New Delhi office, reviewed by a senior lead. Nothing is quietly subcontracted.",
  },
  {
    title: "TypeScript and tests by default",
    body: "Strict types, lint gates and test coverage on the flows that matter — included in the rate, never quoted as an extra phase.",
  },
  {
    title: "Written scope, honest pricing",
    body: "A fixed range against a written scope. Anything new is priced before it is built, so invoices never surprise you.",
  },
  {
    title: "Communication you can plan around",
    body: "Daily written updates, a named point of contact and 4–5 hours of overlap with your working day.",
  },
  {
    title: "Replaceable, not irreplaceable",
    body: "If a developer is not right, we swap them in 48 hours and absorb the handover. Docs are maintained so nobody owns your app alone.",
  },
  {
    title: "We stay after launch",
    body: "One month of free support on every project, then optional retainers with upgrades, monitoring and a monthly change report.",
  },
];

export const RCT_INDUSTRIES = [
  { name: "SaaS & startups", detail: "MVP front-ends, onboarding flows and usage dashboards built to iterate weekly." },
  { name: "Fintech & insurance", detail: "Calculators, KYC journeys and audit-friendly forms with strict validation." },
  { name: "Healthcare", detail: "Appointment consoles, patient portals and privacy-aware data handling." },
  { name: "Retail & marketplaces", detail: "Catalogue browsing, faceted search and checkout journeys that convert." },
  { name: "Education", detail: "Learning dashboards, assessment players and admin consoles for institutions." },
  { name: "Logistics & operations", detail: "Live tracking maps, dispatch boards and high-density data tables." },
  { name: "Real estate", detail: "Listing search, map filters and enquiry routing per property." },
  { name: "Agencies", detail: "White-label React delivery under NDA, plugged into your process." },
];

export const RCT_NEXT = [
  {
    href: "/hire-wordpress-developers",
    label: "CMS teams",
    title: "Hire WordPress developers",
    body: "Need a React front-end on a WordPress or headless CMS back end? The same studio staffs both benches.",
    cta: "See WordPress hiring",
  },
  {
    href: "/hire-laravel-developers",
    label: "Backend teams",
    title: "Hire Laravel developers",
    body: "Pair your React app with a Laravel API team — shared standups, one contract, typed contracts on both sides.",
    cta: "See Laravel hiring",
  },
  {
    href: "/hire-php-developers",
    label: "Legacy & APIs",
    title: "Hire PHP developers",
    body: "Modernising a PHP monolith screen by screen? We keep the PHP running while React takes over the front-end.",
    cta: "See PHP hiring",
  },
  {
    href: "/hire-wix-developers",
    label: "No-code sites",
    title: "Hire Wix developers",
    body: "Not every page needs React. For marketing sites your team edits daily, our Wix bench is the cheaper answer.",
    cta: "See Wix hiring",
  },
];

export const RCT_FAQS = [
  {
    q: "Why hire ReactJS developers from India?",
    a: "India offers senior React engineering at 40–60% of US or UK in-house cost, with a large English-speaking talent pool and hours that overlap Europe fully and the US morning. ACSIUS adds an in-house salaried bench, senior code review and written daily reporting, so you get the cost advantage without freelancer risk.",
  },
  {
    q: "Can I interview the React developer before hiring?",
    a: "Yes. You interview every shortlisted candidate technically and culturally, and you can set a paid take-home task. No developer joins your account without your approval, and you can ask for different profiles at any point.",
  },
  {
    q: "How do I hire a remote React developer who actually fits my team?",
    a: "Start with a two-week paid trial sprint on your real backlog, inside your repo and ticket system. You see PR quality, communication and estimation accuracy before any long commitment. ACSIUS structures every remote React hire this way and replaces a developer within 48 hours at no cost if the fit is wrong.",
  },
  {
    q: "Do you work with Next.js, TypeScript and React Native?",
    a: "Yes. Next.js and TanStack Start for SSR and SEO-critical builds, TypeScript strict mode as the default on new projects, and React Native when the same product needs mobile apps with shared types and API clients.",
  },
  {
    q: "Can your developers take over an existing React codebase?",
    a: "Yes. Takeovers are a large part of our React JS development services: we start with an audit of architecture, dependencies and test coverage, send a prioritised fix list with effort estimates, then work in small PRs so the live app keeps working while it improves.",
  },
  {
    q: "Do you sign an NDA and transfer IP?",
    a: "Yes. We sign your NDA or ours before any code or credentials move, and all source code, designs and documentation transfer to you on payment. Agencies regularly hire us as a white-label React JS development company.",
  },
  {
    q: "How quickly can a React developer start?",
    a: "Usually within 3–5 working days of the first call: 48 hours to shortlist, a day or two for your interview, then onboarding. Urgent rescue work can often begin the same week.",
  },
  {
    q: "What do you need from us to start?",
    a: "Repository or design access, a note on the current stack and API, your goals and deadline, and whoever will approve tickets. If you are starting fresh, we can handle architecture, design and hosting decisions too.",
  },
];
