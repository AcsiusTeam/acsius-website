export const WEB_HERO = {
  eyebrow: "Web Development Company in India · New Delhi · Since 2010",
  h1: ["Web Development Services", "that turn clicks into", "revenue — not just pages."],
  lead:
    "ACSIUS is a web development company in India building fast, search-friendly websites and web applications. From corporate sites and ecommerce stores to custom CMS and landing pages, we design, code, launch and optimise under one roof.",
  support:
    "In-house designers and full-stack engineers in New Delhi. You get a named project lead, weekly demos on a staging URL, and source code in your repository from day one.",
  stats: [
    { value: 16, suffix: "+", label: "Years building websites" },
    { value: 500, suffix: "+", label: "Sites delivered" },
    { value: 40, suffix: "+", label: "Designers & developers" },
    { value: 4, suffix: "wk", label: "Typical site launch" },
  ],
};

/** Interactive track explorer — the page's signature interaction. */
export const WEB_TRACKS = [
  {
    key: "corporate",
    tab: "Corporate Websites",
    headline: "Company websites that build trust before the first call.",
    body:
      "Clean architecture, fast loads, accessible markup and a CMS your marketing team can actually use. Built to rank and to convert.",
    stat: "90+",
    statLabel: "Lighthouse performance",
    stack: ["Next.js", "React", "WordPress", "Tailwind", "Vite"],
    points: [
      "SEO-ready HTML from the first build",
      "Editor-friendly blocks and components",
      "Core Web Vitals optimised by default",
    ],
  },
  {
    key: "ecommerce",
    tab: "Ecommerce Stores",
    headline: "Online stores built for checkout, not just catalogues.",
    body:
      "Shopify, WooCommerce, Magento or a custom headless storefront. We wire payments, inventory, shipping and abandoned-cart recovery.",
    stat: "3x",
    statLabel: "avg. conversion lift",
    stack: ["Shopify", "WooCommerce", "Magento", "Stripe", "Razorpay"],
    points: [
      "Mobile-first checkout flows",
      "Payment, shipping and tax automation",
      "Upsell, cross-sell and cart recovery",
    ],
  },
  {
    key: "webapps",
    tab: "Web Applications",
    headline: "Product-grade web apps with roles, workflows and dashboards.",
    body:
      "Custom portals, SaaS MVPs and internal tools on React, Laravel or Node. Auth, permissions, APIs and analytics included.",
    stat: "99.9%",
    statLabel: "uptime SLA",
    stack: ["React", "Laravel", "Node.js", "PostgreSQL", "AWS"],
    points: [
      "Role-based access and audit logs",
      "Real-time dashboards and reports",
      "Scales with your user base",
    ],
  },
  {
    key: "cms",
    tab: "CMS Platforms",
    headline: "Content systems your team owns without calling a developer.",
    body:
      "WordPress, custom CMS or headless setups with structured content, reusable blocks, versioning and publishing workflows.",
    stat: "50%",
    statLabel: "less publishing friction",
    stack: ["WordPress", "ACF", "Gutenberg", "Strapi", "Sanity"],
    points: [
      "Drag-and-drop page builder blocks",
      "Multi-language and multi-site ready",
      "Training and documentation included",
    ],
  },
  {
    key: "landing",
    tab: "Landing Pages",
    headline: "High-intent landing pages for paid campaigns and launches.",
    body:
      "Conversion-focused pages with A/B test hooks, form tracking, speed scores and clear CTAs — built to pair with Google Ads.",
    stat: "40%",
    statLabel: "lower cost per lead",
    stack: ["Figma", "React", "Unbounce", "HubSpot", "GA4"],
    points: [
      "Form and CTA heatmap tracking",
      "Lightning-fast mobile loads",
      "Built for A/B testing from day one",
    ],
  },
];

/** Answer-first blocks for the target keywords. */
export const WEB_ANSWERS = [
  {
    q: "What are web development services in India?",
    a: "Web development services in India cover the design, coding, launch and maintenance of websites and web applications. At ACSIUS, this includes corporate sites, ecommerce stores, custom CMS platforms, landing pages and web apps — built by an in-house team in New Delhi and delivered under fixed-scope or monthly engagement models.",
  },
  {
    q: "Which is the best web development company in India?",
    a: "The best web development company in India is one that owns design, engineering and QA under one roof, ships weekly demos, writes clean code in your repo and optimises for speed and search. ACSIUS has delivered 3000+ sites since 2010 with a 40+ person in-house team and a 48-hour response guarantee.",
  },
  {
    q: "What does a website development company in India do?",
    a: "A website development company in India plans the site structure, designs the interface, writes front-end and back-end code, integrates CMS and third-party tools, tests across devices, launches on your domain and provides ongoing support. ACSIUS also adds SEO, analytics and conversion tracking as standard.",
  },
  {
    q: "How much do website development services cost in India?",
    a: "A marketing website typically ranges from $2,500 to $8,000, an ecommerce store from $5,000 to $20,000, and a custom web application from $15,000 upward depending on features and integrations. ACSIUS provides a written fixed range after a free scoping call, with milestone billing.",
  },
];

export const WEB_ENGAGE = [
  {
    key: "project",
    label: "Fixed-scope project",
    price: "From $2.5k",
    tagline: "Launch a new site",
    body: "A defined brief, a milestone plan and a fixed cost. Best for corporate websites, redesigns and campaign landing pages.",
    best: "Marketing sites & redesigns",
    commitment: "2–8 weeks",
  },
  {
    key: "retainer",
    label: "Monthly web team",
    price: "Monthly",
    tagline: "Ongoing velocity",
    body: "A dedicated designer and developer working on your backlog every month — new pages, optimisations, integrations and support.",
    best: "Growth and product teams",
    commitment: "From 1 month",
  },
  {
    key: "enterprise",
    label: "Enterprise build",
    price: "Custom quote",
    tagline: "Complex platforms",
    body: "Multi-site, multi-language, custom CMS, SSO, API integrations and dedicated QA. Scoped after a discovery workshop.",
    best: "Large sites & web apps",
    commitment: "8–24 weeks",
  },
];

export const WEB_PROCESS = [
  {
    step: "01",
    title: "Discovery & sitemap",
    body: "We map your goals, audiences, pages and integrations so the build has a clear blueprint before design starts.",
    duration: "Week 1",
    deliverable: "Sitemap + wireframes",
  },
  {
    step: "02",
    title: "UI/UX design",
    body: "High-fidelity screens, component library and responsive states in Figma, reviewed and approved before any code.",
    duration: "Week 2–3",
    deliverable: "Figma design system",
  },
  {
    step: "03",
    title: "Front-end build",
    body: "Semantic, accessible markup with Tailwind or your chosen stack, animated with purpose and tuned for Core Web Vitals.",
    duration: "Week 3–5",
    deliverable: "Staging URL",
  },
  {
    step: "04",
    title: "CMS & integrations",
    body: "CMS setup, forms, CRM, analytics, payment gateways and any third-party APIs connected and tested.",
    duration: "Week 4–6",
    deliverable: "Integrated build",
  },
  {
    step: "05",
    title: "QA & launch prep",
    body: "Cross-browser testing, mobile checks, SEO metadata, speed audit, security headers and launch checklist.",
    duration: "Week 6",
    deliverable: "Go-live approval",
  },
  {
    step: "06",
    title: "Launch & optimise",
    body: "Domain pointed, SSL live, search console submitted and a 30-day support window to fix anything post-launch.",
    duration: "Go-live + 30d",
    deliverable: "Live site + runbook",
  },
];

/** Google Ads and PPC section — single landing page focus. */
export const WEB_PPC = {
  eyebrow: "Paid media, built in",
  headline: "Need traffic, not just a website?",
  body:
    "Every site we build is ready for Google Ads, Meta Ads and PPC campaigns. Fast loads, conversion tracking, landing-page variants and clear CTAs mean your ad spend goes further.",
  channels: [
    { name: "Google Ads", detail: "Search, Display, Shopping and Performance Max with conversion tracking.", metric: "↓ 35%", metricLabel: "avg. CPA" },
    { name: "Meta Ads", detail: "Facebook and Instagram campaigns tied to lead forms and pixel events.", metric: "↑ 3x", metricLabel: "lead volume" },
    { name: "LinkedIn Ads", detail: "B2B lead generation with audience targeting and CRM handoff.", metric: "↓ 28%", metricLabel: "cost per lead" },
    { name: "YouTube Ads", detail: "Awareness and remarketing campaigns with tracked view-through conversions.", metric: "↑ 42%", metricLabel: "brand lift" },
  ],
};

export const WEB_WHY = [
  { metric: "90+", title: "Lighthouse scores", body: "Performance, accessibility and SEO baked into the build, not patched later.", proof: "Core Web Vitals by default" },
  { metric: "48h", title: "To a written estimate", body: "Scope, sitemap and fixed cost range within two working days of our call.", proof: "No hidden change fees" },
  { metric: "100%", title: "In-house team", body: "Designers, developers and QA sit together in our New Delhi studio.", proof: "No freelancers passed off as staff" },
  { metric: "0", title: "Lock-in", body: "Your repo, your domain, your credentials. Full handover on every launch.", proof: "Source code from day one" },
];

export const WEB_FAQS = [
  {
    q: "What makes ACSIUS a top web development company in India?",
    a: "Sixteen years of delivery, a 40+ person in-house team in New Delhi, 3000+ websites and web apps launched, and a process built on weekly staging demos instead of slide decks. We also hand over source code and deploy under your accounts, so our work has to stand on its own.",
  },
  {
    q: "Do you offer website development services for small businesses?",
    a: "Yes. Our fixed-scope project model is designed for startups, SMEs and local businesses that need a professional, fast, search-friendly website without enterprise overhead. We scope in writing and bill in milestones.",
  },
  {
    q: "Can you build ecommerce websites as part of your web development services?",
    a: "Absolutely. We build Shopify, WooCommerce, Magento and custom headless ecommerce stores with payments, shipping, inventory, abandoned-cart recovery and conversion tracking included.",
  },
  {
    q: "How long does a website development project take?",
    a: "A typical marketing website takes 3–6 weeks, an ecommerce store 6–10 weeks, and a custom web application 3–6 months. You see a staging URL from week two and a working demo every week after that.",
  },
  {
    q: "Will my website be SEO-friendly and mobile-responsive?",
    a: "Yes. Every site is responsive by default, uses semantic HTML, structured data, optimised assets, clean URLs and fast loads. We also set up Google Search Console, sitemaps and conversion tracking before launch.",
  },
  {
    q: "Do you provide PPC and Google Ads services with the website?",
    a: "Yes. We can run Google Ads, Meta Ads, LinkedIn Ads and YouTube campaigns alongside the build. Sites are built with conversion tracking, landing-page variants and fast loads so your paid media performs better from day one.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We audit your current site for speed, UX, SEO and conversion issues, then redesign and rebuild on a modern stack with content migration and 301 redirects to protect your rankings.",
  },
  {
    q: "Who owns the website and its code?",
    a: "You do. Source code lives in your repository from the first commit, and design files, credentials, domain access and documentation transfer to you on launch. There is no ongoing licence fee.",
  },
];
