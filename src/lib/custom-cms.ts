export const CMS_HERO = {
  eyebrow: "Custom CMS Development · New Delhi, India · Since 2010",
  h1: ["Custom CMS website design", "and development that your", "team can actually run."],
  lead:
    "ACSIUS Technologies is a custom CMS development company in India building content systems around how your team works — editor-first dashboards, structured content models, role-based approvals and headless APIs.",
  support:
    "Custom CMS website development on WordPress, Laravel, headless or fully bespoke — with training, documentation and no licence lock-in.",
  stats: [
    { value: 16, suffix: "+", label: "Years building CMS" },
    { value: 420, suffix: "+", label: "CMS sites delivered" },
    { value: 92, suffix: "%", label: "Editors need no dev help" },
    { value: 48, suffix: "h", label: "To written scope" },
  ],
};

/** Tabbed intro explorer — scannable, not a wall of text. */
export const CMS_PILLARS = [
  {
    key: "why",
    tab: "Why custom",
    stat: "0",
    statLabel: "unused plugins shipped",
    headline: "A template CMS fits everyone. A custom CMS fits you.",
    body:
      "Off-the-shelf themes give editors forty fields they never use and none of the three they need. Our custom CMS website design India work starts from your real content — what changes weekly, who approves it, where it gets published.",
    points: [
      "Fields named after your business, not the theme demo",
      "Only the modules your team touches — nothing decorative",
      "Publishing rules and approvals modelled before design starts",
    ],
  },
  {
    key: "editors",
    tab: "Built for editors",
    stat: "92%",
    statLabel: "edits done without a developer",
    headline: "If marketing needs a ticket to change a headline, the CMS failed.",
    body:
      "Every screen is designed for the person using it daily: live preview, drag-ordering, image cropping in-place, and validation that stops a broken page from ever going live.",
    points: [
      "Live preview before publish, on desktop and mobile",
      "Reusable content blocks instead of raw HTML",
      "Scheduled publishing, drafts and one-click rollback",
    ],
  },
  {
    key: "stack",
    tab: "Platform choice",
    stat: "4",
    statLabel: "build routes we advise on",
    headline: "We recommend the cheapest thing that survives three years.",
    body:
      "Sometimes that is WordPress with custom post types. Sometimes a Laravel admin panel. Sometimes headless with a React front-end. We tell you which before you pay for the wrong one.",
    points: [
      "WordPress / WooCommerce with bespoke fields and blocks",
      "Laravel or Node custom admin for complex workflows",
      "Headless CMS with a Next.js or React front-end",
    ],
  },
  {
    key: "own",
    tab: "You own it",
    stat: "100%",
    statLabel: "code and data handed over",
    headline: "No monthly licence, no vendor hostage situation.",
    body:
      "Source code, database, documentation and credentials transfer to you on final payment. Your next agency can read what we wrote — we write for that person.",
    points: [
      "Git repository and deployment scripts handed over",
      "Written admin manual plus recorded training session",
      "Optional support retainer, never a requirement",
    ],
  },
];

/** Answer-first blocks for AI overviews and featured snippets. */
export const CMS_ANSWERS = [
  {
    q: "What is custom CMS website development?",
    a: "Custom CMS website development means building the content management layer around your workflow instead of adapting your workflow to a template. Content types, fields, user roles, approval steps and publishing destinations are designed for your business, then a front-end is built on top. The result is fewer plugins, faster editing and a system that scales with content volume rather than breaking at it.",
  },
  {
    q: "How much does custom CMS development in India cost?",
    a: "A custom CMS website in India typically ranges from ₹85,000 for a content-managed brochure site with bespoke fields, to ₹3,50,000–8,00,000 for a multi-role platform with workflows, APIs and multilingual content. ACSIUS quotes a fixed range against a written page and module list, so the number does not move unless the scope does.",
  },
  {
    q: "Should I choose WordPress or a fully custom CMS?",
    a: "Choose WordPress when content is mostly pages, posts and products and speed to launch matters. Choose a custom CMS when you have multi-step approvals, complex relationships between records, heavy integrations or data volumes that make a generic admin slow. ACSIUS audits your content model first and recommends the lighter option honestly.",
  },
  {
    q: "How long does a CMS website design project take?",
    a: "Content modelling and design take two to three weeks, build four to eight weeks, then content migration, training and launch. A straightforward custom CMS website goes live in six to eight weeks; a multi-role platform with integrations runs ten to sixteen weeks with milestone demos every fortnight.",
  },
];

/** Module explorer — sidebar list + detail panel (School ERP rhythm). */
export const CMS_MODULES = [
  {
    key: "model",
    icon: "◈",
    label: "Content modelling",
    title: "Your content, mapped before a single screen is designed.",
    body:
      "We inventory every content type, its fields, relationships and lifecycle. That map becomes the admin structure — which is why editors find things where they expect them.",
    metric: "1",
    metricLabel: "source of truth",
    ships: [
      "Content type and field inventory",
      "Relationship and taxonomy design",
      "Draft, review, publish lifecycle",
      "Naming that matches your team's language",
    ],
  },
  {
    key: "editor",
    icon: "✎",
    label: "Editor experience",
    title: "A dashboard non-technical staff open without dread.",
    body:
      "Block-based page building, in-place image cropping, inline validation, live preview and autosave. Everything an editor needs on one screen, nothing they don't.",
    metric: "-70%",
    metricLabel: "time to publish a page",
    ships: [
      "Reusable block library with previews",
      "Drag-and-drop ordering",
      "Autosave, drafts and revision history",
      "Bulk actions and smart search",
    ],
  },
  {
    key: "roles",
    icon: "☑",
    label: "Roles & workflow",
    title: "Approval chains that mirror your actual sign-off.",
    body:
      "Authors draft, editors review, legal approves, admins publish. Permissions are enforced server-side per role, per content type and per field where needed.",
    metric: "0",
    metricLabel: "unapproved publishes",
    ships: [
      "Role-based permissions per module",
      "Multi-step approval with comments",
      "Full audit log of who changed what",
      "Scheduled and expiring content",
    ],
  },
  {
    key: "headless",
    icon: "➤",
    label: "Headless & APIs",
    title: "One content store, every channel it feeds.",
    body:
      "Publish once and serve a website, a mobile app, a kiosk screen and a partner feed through documented REST or GraphQL endpoints with caching built in.",
    metric: "4+",
    metricLabel: "channels from one CMS",
    ships: [
      "REST and GraphQL content APIs",
      "Webhook triggers on publish",
      "CDN and edge caching strategy",
      "React or Next.js front-end option",
    ],
  },
  {
    key: "commerce",
    icon: "₹",
    label: "Commerce & catalogue",
    title: "Product data managed like content, not spreadsheets.",
    body:
      "Catalogue, variants, pricing rules, stock sync and merchandising blocks — wired into WooCommerce, Shopify or a custom catalogue module with ERP feeds.",
    metric: "10k+",
    metricLabel: "SKUs handled comfortably",
    ships: [
      "Variant and attribute management",
      "ERP and inventory sync jobs",
      "Merchandising and promo blocks",
      "Payment gateway integration",
    ],
  },
  {
    key: "multilingual",
    icon: "◉",
    label: "Multilingual & multisite",
    title: "Many languages, many brands, one admin.",
    body:
      "Translation workflows with per-locale review, hreflang handled correctly, and multiple brand sites sharing components while keeping separate content and permissions.",
    metric: "12",
    metricLabel: "locales in one build",
    ships: [
      "Per-locale drafts and reviewers",
      "Correct hreflang and canonicals",
      "Shared component, separate content",
      "Regional pricing and contact data",
    ],
  },
  {
    key: "seo",
    icon: "✦",
    label: "SEO & performance",
    title: "Fast pages and clean markup, enforced by the CMS.",
    body:
      "Metadata fields with guardrails, schema generated from structured content, image pipelines with modern formats, and Core Web Vitals measured before launch.",
    metric: "90+",
    metricLabel: "target Lighthouse score",
    ships: [
      "Meta, canonical and OG fields per page",
      "Auto JSON-LD from content types",
      "Automatic image resizing and WebP",
      "Redirect manager for migrations",
    ],
  },
  {
    key: "migration",
    icon: "▦",
    label: "Migration & security",
    title: "Move years of content without losing rankings.",
    body:
      "Scripted migration with mapped URLs, 301 rules, hardened admin access, daily backups and staging you can break safely before anything reaches production.",
    metric: "0",
    metricLabel: "ranking drops targeted",
    ships: [
      "Scripted, repeatable content migration",
      "URL mapping and 301 redirect plan",
      "2FA, rate limiting and hardened admin",
      "Automated backups and staging clone",
    ],
  },
];

/** Role-based view of who uses the CMS. */
export const CMS_ROLES = [
  {
    key: "editor",
    label: "Marketing editor",
    headline: "Publishes a campaign page before the standup ends.",
    lines: [
      "Builds pages from approved blocks — no HTML, no developer",
      "Previews desktop and mobile before anything goes live",
      "Schedules launches and expiries around campaign dates",
      "Sees SEO field guidance inline while writing",
    ],
  },
  {
    key: "admin",
    label: "Site administrator",
    headline: "Controls who can touch what, and sees every change.",
    lines: [
      "Role and permission management per module and field",
      "Full audit trail with rollback to any revision",
      "User onboarding, 2FA and session controls",
      "Backup, staging and release controls in one place",
    ],
  },
  {
    key: "dev",
    label: "In-house developer",
    headline: "Reads the repo on day one and ships on day two.",
    lines: [
      "Documented content schema and typed API contracts",
      "Local setup script, staging parity and CI checks",
      "Extension points instead of core file edits",
      "Written architecture notes and handover session",
    ],
  },
  {
    key: "leadership",
    label: "Leadership",
    headline: "Sees what content is doing without asking anyone.",
    lines: [
      "Dashboard of published, pending and stale content",
      "Traffic and conversion data beside each page",
      "Approval bottlenecks visible per team",
      "Monthly report on content velocity and performance",
    ],
  },
];

/** Delivery rhythm — horizontal stepper. */
export const CMS_RHYTHM = [
  { k: "Week 1", t: "Content workshop", d: "We map types, fields, roles and approvals with your team." },
  { k: "Week 2–3", t: "Design the admin", d: "Editor screens and front-end designs approved before build." },
  { k: "Week 4–7", t: "Build & demo", d: "Fortnightly staging demos you click yourself, not screenshots." },
  { k: "Launch week", t: "Migrate & train", d: "Content moved, redirects live, team trained and recorded." },
];

export const CMS_MODELS = [
  {
    key: "wordpress",
    label: "Custom WordPress build",
    tagline: "Familiar admin, bespoke fields",
    body:
      "A hand-built theme with custom post types, block patterns and only the plugins that earn their place. Fastest route when content is pages, posts and products.",
    best: "Content and marketing sites",
    commitment: "4–7 weeks",
    points: [
      "Custom post types, taxonomies and field groups",
      "Gutenberg blocks matched to your design system",
      "WooCommerce where selling is involved",
      "Hardened, cache-optimised hosting setup",
    ],
  },
  {
    key: "bespoke",
    label: "Fully custom CMS",
    tagline: "Built to your workflow",
    body:
      "A Laravel or Node admin panel written for your processes — complex relationships, multi-step approvals, calculations, integrations and data volumes a generic CMS struggles with.",
    best: "Platforms and internal portals",
    commitment: "8–16 weeks",
    points: [
      "Purpose-built admin with role-based access",
      "Workflow engine with audit logging",
      "ERP, CRM and payment integrations",
      "Reporting dashboards for leadership",
    ],
  },
  {
    key: "headless",
    label: "Headless CMS + React",
    tagline: "One store, many channels",
    body:
      "A content API feeding a React or Next.js front-end, plus apps and partner feeds. Best when the same content has to appear in more than one place.",
    best: "Multi-channel and app-backed brands",
    commitment: "6–12 weeks",
    points: [
      "REST or GraphQL content APIs",
      "Next.js front-end with SSR and caching",
      "Preview environment for unpublished drafts",
      "Webhooks into build and notification pipelines",
    ],
  },
];

export const CMS_STEPS = [
  {
    step: "01",
    title: "Free consultation",
    body: "A 30-minute call on your content, team size, integrations and deadline — no deck, no pressure.",
    duration: "Day 1",
  },
  {
    step: "02",
    title: "Content & platform audit",
    body: "We review your current site or spreadsheets and recommend WordPress, bespoke or headless with reasons.",
    duration: "Day 2–4",
  },
  {
    step: "03",
    title: "Written scope and quote",
    body: "Page list, module list, content types, roles, integrations, timeline and a fixed budget range.",
    duration: "48 hours",
  },
  {
    step: "04",
    title: "Design the editor and the site",
    body: "Admin screens and front-end designs signed off together, so building starts with no guesswork.",
    duration: "2–3 weeks",
  },
  {
    step: "05",
    title: "Build with fortnightly demos",
    body: "Work lands on staging every two weeks. You click it, comment on it, and we adjust before the next block.",
    duration: "4–8 weeks",
  },
  {
    step: "06",
    title: "Migrate, train, hand over",
    body: "Content migrated with redirects, team trained on video, repo and credentials transferred, one month free support.",
    duration: "Launch",
  },
];

export const CMS_COMPARE = {
  typical: {
    title: "The templated CMS quote",
    points: [
      "A marketplace theme with 30 plugins holding it together",
      "Editors given raw HTML blocks and told to be careful",
      "No roles or approvals — everyone is an administrator",
      "Migration done by copy-paste, redirects forgotten",
      "Licence renewals and page-builder lock-in every year",
    ],
  },
  acsius: {
    title: "The ACSIUS custom CMS build",
    points: [
      "Content model designed first, plugins only where justified",
      "Block library and live preview built for non-technical staff",
      "Role-based permissions with audit log and rollback",
      "Scripted migration with a mapped 301 redirect plan",
      "Code, data and docs handed over — zero licence lock-in",
    ],
  },
};

export const CMS_OUTCOMES = [
  { k: "48h", v: "To written scope", note: "Page list, modules and fixed range" },
  { k: "6–8 wks", v: "Typical go-live", note: "Standard custom CMS website" },
  { k: "92%", v: "Self-serve edits", note: "No developer ticket needed" },
  { k: "90+", v: "Target Lighthouse", note: "Measured on real devices" },
  { k: "1 month", v: "Free support", note: "Included after every launch" },
  { k: "100%", v: "Ownership", note: "Repo, data and documentation" },
];

export const CMS_WHY = [
  {
    title: "In-house team in New Delhi",
    body: "Designers, CMS engineers and QA on salary in one office — nothing subcontracted, one named point of contact throughout.",
  },
  {
    title: "Platform advice before invoices",
    body: "We recommend WordPress when WordPress is right, even though a bespoke build bills more. The audit comes before the quote.",
  },
  {
    title: "Editors trained, not abandoned",
    body: "A recorded walkthrough, a written admin manual and a month of questions answered free after launch.",
  },
  {
    title: "SEO built into the CMS",
    body: "Metadata guardrails, auto schema, clean URLs and a redirect manager — because our SEO team has to rank what we build.",
  },
  {
    title: "Fixed scope, honest change control",
    body: "A written page and module list with a fixed range. New requests are priced before they are built, never after.",
  },
  {
    title: "Support that is optional",
    body: "Retainers for upgrades, monitoring and content help exist — but the build works without them, and you can leave with everything.",
  },
];

export const CMS_INDUSTRIES = [
  { name: "Education & institutes", detail: "Admissions content, notices, faculty directories and multi-campus sites in one admin." },
  { name: "Healthcare", detail: "Doctor profiles, department pages, appointment forms and compliance-safe content approvals." },
  { name: "Manufacturing & B2B", detail: "Product catalogues with specs, datasheet downloads and distributor-only sections." },
  { name: "Retail & D2C", detail: "Catalogue plus editorial content, campaign landing pages and merchandising blocks." },
  { name: "Real estate", detail: "Project listings with units, floor plans, availability status and enquiry routing." },
  { name: "Media & publishing", detail: "High-volume editorial workflows, author roles, embargoes and scheduled releases." },
  { name: "Travel & hospitality", detail: "Packages, seasonal pricing, multilingual content and booking integrations." },
  { name: "NGOs & government", detail: "Accessible templates, document libraries, tenders and multilingual notices." },
];

export const CMS_NEXT = [
  {
    href: "/hire-wordpress-developers",
    label: "CMS teams",
    title: "Hire WordPress developers",
    body: "Already on WordPress and need ongoing custom development, plugins or a rescue? Take a dedicated developer instead of a project.",
    cta: "See WordPress hiring",
  },
  {
    href: "/website-design-company-india",
    label: "Design first",
    title: "Website design company India",
    body: "Need the design and content strategy before the CMS decision? Start with our web design engagement.",
    cta: "Explore web design",
  },
  {
    href: "/hire-shopify-developers",
    label: "Commerce",
    title: "Hire Shopify developers",
    body: "If the catalogue is the whole business, hosted commerce often beats a custom CMS. We staff that bench too.",
    cta: "See Shopify hiring",
  },
  {
    href: "/hire-wix-developers",
    label: "Lightweight",
    title: "Hire Wix developers",
    body: "For a small brochure site your team edits weekly, a Wix Studio build is the cheaper honest answer.",
    cta: "See Wix hiring",
  },
];

export const CMS_FAQS = [
  {
    q: "What makes ACSIUS a custom CMS development company rather than a theme installer?",
    a: "Every engagement starts with a content model workshop, not a theme demo. We design the content types, fields, roles and approval steps first, then build the admin and front-end around them. Code is written to your repository with documentation, and there are no page-builder licences or proprietary layers you must keep paying for.",
  },
  {
    q: "Do you provide custom CMS development services in India for agencies?",
    a: "Yes. We work white-label under NDA for agencies across India, the UK, US and Middle East — you keep the client relationship, we deliver the CMS build, staging demos and documentation in your name. Many agencies also hire our developers monthly rather than per project.",
  },
  {
    q: "Can you rebuild our existing site into a custom CMS without losing SEO?",
    a: "Yes. We crawl the current site, map every URL to its new destination, implement 301 redirects, preserve titles, metadata and structured data, and keep the old site live until the new one passes checks. Rankings and traffic are monitored for 30 days after launch and any drop is investigated immediately.",
  },
  {
    q: "Which technologies do you use for custom CMS website development?",
    a: "WordPress with custom post types and blocks for content-led sites, Laravel or Node for bespoke admin panels with complex workflows, and headless setups with a React or Next.js front-end for multi-channel publishing. Databases are MySQL or PostgreSQL, hosting is on AWS, DigitalOcean or your existing provider.",
  },
  {
    q: "Will our team be able to manage the CMS without a developer?",
    a: "That is the point of the build. Editors get block-based page building, live preview, image cropping and validation that prevents broken pages, plus a recorded training session and a written manual. Around 92% of day-to-day changes on our builds are made by clients without any developer involvement.",
  },
  {
    q: "How much does a CMS website design project cost in India?",
    a: "Content-managed brochure sites with bespoke fields start near ₹85,000. Mid-size custom CMS website development with multiple roles, integrations and 20+ templates typically runs ₹2,50,000–5,00,000. Large multilingual or multi-brand platforms go higher. You get a fixed range against a written scope before work starts.",
  },
  {
    q: "Do we own the CMS code and data?",
    a: "Fully. Source code, database, design files, documentation and hosting credentials transfer to you on final payment, and the repository is yours from day one if you prefer. There is no licence fee, no obligatory retainer and nothing another developer cannot read and continue.",
  },
  {
    q: "What support do you provide after launch?",
    a: "One month of free support covering bugs, editor questions and small tweaks. After that, optional retainers cover core and dependency updates, security monitoring, backups, performance checks, new templates and content help, with a monthly report of everything changed.",
  },
];
