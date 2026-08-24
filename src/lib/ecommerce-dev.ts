export const ECOM_HERO = {
  eyebrow: "eCommerce Website Development Services · New Delhi, India",
  h1: ["eCommerce website design", "and development that", "sells on every device."],
  lead:
    "ACSIUS is an eCommerce web development company in India building conversion-first stores — Shopify, WooCommerce, Magento and headless builds with catalogue, checkout, payments and logistics wired end to end.",
  support:
    "Fixed-scope launches or a dedicated commerce pod. Design in week one, a clickable preview URL every week, and the full codebase in your repository.",
  badges: ["Shopify & Plus", "WooCommerce", "Magento / Adobe", "Headless storefronts"],
  stats: [
    { value: 240, suffix: "+", label: "Stores launched" },
    { value: 96, suffix: "+", label: "Lighthouse score" },
    { value: 38, suffix: "%", label: "Avg. CVR lift" },
    { value: 30, suffix: "d", label: "Fastest launch" },
  ],
};

/** Segmented platform switcher */
export const ECOM_PLATFORMS = [
  {
    key: "shopify",
    name: "Shopify / Plus",
    best: "DTC brands wanting speed to market",
    body:
      "Custom Online Store 2.0 themes, metaobject-driven merchandising, checkout UI extensions and B2B catalogues on Plus.",
    chips: ["Liquid", "OS 2.0", "Checkout UI", "Markets"],
    stat: "3-6 wks",
    statLabel: "typical launch",
    href: "/hire-shopify-developers",
  },
  {
    key: "woo",
    name: "WooCommerce",
    best: "Content-led stores already on WordPress",
    body:
      "Custom Woo themes and plugins, variable and subscription products, Indian payment gateways and GST-ready invoicing.",
    chips: ["WordPress", "Woo REST", "Razorpay", "GST"],
    stat: "4-7 wks",
    statLabel: "typical launch",
    href: "/hire-wordpress-developers",
  },
  {
    key: "magento",
    name: "Magento / Adobe",
    best: "Large catalogues and multi-store retail",
    body:
      "Adobe Commerce builds with 100k+ SKUs, tiered B2B pricing, ERP sync and Elasticsearch-backed search and filters.",
    chips: ["Adobe Commerce", "GraphQL", "ERP", "Elastic"],
    stat: "8-14 wks",
    statLabel: "typical launch",
    href: "/hire-magento-developers",
  },
  {
    key: "headless",
    name: "Headless / custom",
    best: "Storefronts where performance is the moat",
    body:
      "React and Next.js storefronts on Storefront or commerce APIs with edge caching, app-like navigation and instant search.",
    chips: ["Next.js", "Hydrogen", "Edge cache", "PWA"],
    stat: "96+",
    statLabel: "Lighthouse score",
    href: "/hire-reactjs-developers",
  },
];

/** Bento grid — ecommerce website design services */
export const ECOM_SERVICES = [
  {
    title: "eCommerce website design",
    body: "Brand-led UI for home, category, PDP, cart and checkout — designed around the buying decision, not a template.",
    tag: "Design",
    span: "lg:col-span-2",
  },
  {
    title: "Catalogue engineering",
    body: "Variants, bundles, filters and faceted search that stay fast at 100k SKUs.",
    tag: "Catalogue",
    span: "",
  },
  {
    title: "Checkout & payments",
    body: "One-page checkout, UPI, cards, wallets, EMI, COD rules and express pay.",
    tag: "Checkout",
    span: "",
  },
  {
    title: "Integrations & automation",
    body: "ERP, 3PL, Unicommerce, Shiprocket, Tally, CRM and email flows synced with retries and audit logs.",
    tag: "Ops",
    span: "lg:col-span-2",
  },
  {
    title: "Migration & replatform",
    body: "Move stores without losing rankings — data, reviews and a tested 301 map.",
    tag: "Migrate",
    span: "",
  },
  {
    title: "Speed & Core Web Vitals",
    body: "Image pipelines, script budgets and caching to keep LCP under 2 seconds.",
    tag: "Speed",
    span: "",
  },
  {
    title: "CRO & growth sprints",
    body: "Monthly A/B tests on PDP, cart and checkout, reported in revenue per session.",
    tag: "CRO",
    span: "lg:col-span-2",
  },
];

/** Feature checklist — three buckets */
export const ECOM_FEATURES = [
  {
    group: "Storefront",
    items: [
      "Mega-menu and faceted search",
      "PDP with bundles and reviews",
      "Wishlist and quick view",
      "Mobile-first cart drawer",
    ],
  },
  {
    group: "Commerce",
    items: [
      "Multi-currency and tax rules",
      "Coupons, tiers and B2B pricing",
      "Subscriptions and reorder",
      "Abandoned cart recovery",
    ],
  },
  {
    group: "Back office",
    items: [
      "Order and inventory sync",
      "Shipping and returns flows",
      "GST invoices and reports",
      "Role-based admin access",
    ],
  },
];

export const ECOM_STACK: { group: string; items: string[] }[] = [
  { group: "Platforms", items: ["Shopify Plus", "WooCommerce", "Adobe Commerce", "Hydrogen", "Next.js"] },
  { group: "Payments", items: ["Razorpay", "PayU", "Stripe", "PayPal", "Cashfree", "UPI"] },
  { group: "Logistics", items: ["Shiprocket", "Delhivery", "Unicommerce", "3PL APIs"] },
  { group: "Growth data", items: ["GA4", "Meta CAPI", "Klaviyo", "Looker Studio", "Clarity"] },
];

/** Engagement packages */
export const ECOM_MODELS = [
  {
    name: "Store launch (fixed scope)",
    price: "Milestone based",
    note: "Design, build, data load and go-live against a signed milestone plan.",
    points: [
      "Scope, launch date and cost agreed up front",
      "Weekly preview URL and demo",
      "30 days post-launch support included",
    ],
    highlight: true,
  },
  {
    name: "Dedicated commerce pod",
    price: "Monthly retainer",
    note: "Designer, developer and QA reserved for your roadmap only.",
    points: [
      "160 hrs/month with 4+ hours overlap",
      "Your board, repo and standups",
      "Scale the pod with two weeks' notice",
    ],
  },
  {
    name: "Growth & care plan",
    price: "From 40 hrs/mo",
    note: "CRO experiments, speed work and platform updates after launch.",
    points: [
      "Monthly experiment roadmap with revenue targets",
      "Security, plugin and theme updates",
      "Uptime, checkout and error monitoring",
    ],
  },
];

/** Vertical timeline */
export const ECOM_PROCESS = [
  {
    step: "01",
    title: "Commerce discovery",
    body: "Catalogue audit, margin and shipping rules, competitor teardown and a platform recommendation in writing.",
    duration: "Week 1",
    ship: "Scope + platform pick",
  },
  {
    step: "02",
    title: "UX & design system",
    body: "Journey maps, then high-fidelity home, category, PDP and checkout screens with a reusable component kit.",
    duration: "Weeks 2-3",
    ship: "Clickable prototype",
  },
  {
    step: "03",
    title: "Build & integrate",
    body: "Theme or storefront build, payment gateways, shipping, ERP sync and content models on a staging store.",
    duration: "Weeks 3-7",
    ship: "Weekly preview URL",
  },
  {
    step: "04",
    title: "Data, QA & SEO",
    body: "Product import, device and checkout QA, schema markup, redirect map and analytics with commerce events.",
    duration: "Pre-launch",
    ship: "QA + 301 map",
  },
  {
    step: "05",
    title: "Launch & optimise",
    body: "Cutover with monitoring, then a CRO and speed backlog prioritised by revenue impact from month two.",
    duration: "Launch week",
    ship: "Runbook + backlog",
  },
];

export const ECOM_COMPARE = {
  typical: {
    title: "Typical template store build",
    points: [
      "A bought theme with the demo content swapped out",
      "Plugin stack for every feature, breaking on updates",
      "Checkout untested on real payment and COD cases",
      "No analytics or commerce events before launch",
      "Handover is a login and a zip file",
    ],
  },
  acsius: {
    title: "ACSIUS eCommerce build",
    points: [
      "Design system built around your catalogue and margins",
      "Custom code where plugins would slow the store",
      "Checkout, payment, COD and returns cases QA'd",
      "GA4, CAPI and funnel baseline live before cutover",
      "Repo, docs and admin ownership from day one",
    ],
  },
};

export const ECOM_WHY = [
  {
    metric: "240+",
    title: "Commerce-only track record",
    body: "Stores across fashion, FMCG, pharma, industrial and B2B distribution since 2010.",
  },
  {
    metric: "1.4s",
    title: "Built for speed",
    body: "Performance budgets set in design, not patched after launch.",
  },
  {
    metric: "38%",
    title: "Measured in revenue",
    body: "Every build ships with a funnel baseline and a CRO backlog.",
  },
  {
    metric: "0",
    title: "No lock-in",
    body: "Your repo, your store admin, your gateway and analytics accounts.",
  },
];

export const ECOM_FAQS = [
  {
    q: "What is included in your eCommerce website development services?",
    a: "Discovery and platform selection, eCommerce website design for home, category, product, cart and checkout, front-end and back-end development, payment gateway and shipping integrations, ERP or 3PL sync, product data import, SEO structure and schema, analytics with commerce events, QA across devices, launch support and a post-launch CRO backlog.",
  },
  {
    q: "Which platform should I choose for my store?",
    a: "Shopify or Shopify Plus suits DTC brands that want the fastest launch, WooCommerce fits content-led stores already on WordPress, Adobe Commerce or Magento suits large catalogues and multi-store B2B retail, and a headless Next.js or Hydrogen storefront makes sense when performance is your differentiator. We recommend a platform in writing after the discovery call, based on catalogue size, margins and your team's skills.",
  },
  {
    q: "How much do eCommerce website design services in India cost?",
    a: "A focused Shopify or WooCommerce launch usually starts in the low five figures in rupees per milestone, while multi-store Magento or headless builds are quoted after scoping. You get a fixed milestone cost for the launch and an optional monthly care plan; every change outside scope is priced in writing before work starts.",
  },
  {
    q: "How long does it take to build an eCommerce website?",
    a: "A clean Shopify or WooCommerce store typically launches in three to seven weeks, and Magento or headless builds run eight to fourteen weeks depending on catalogue size and integrations. Design starts in week one and you get a preview URL every week, so nothing is a surprise at the end.",
  },
  {
    q: "Can you migrate my existing store without losing SEO or data?",
    a: "Yes. We move products, customers, orders and reviews, rebuild URL structures where possible and test a full 301 redirect map on staging before DNS changes. Rankings, crawl errors and revenue are monitored for 30 days after cutover, and rollback steps are documented in the launch runbook.",
  },
  {
    q: "Why choose ACSIUS as your eCommerce web development company in India?",
    a: "We are an in-house team in New Delhi working on commerce since 2010, with designers, platform developers, QA and SEO under one roof. You get India rates with at least four hours of timezone overlap, daily written updates, code in your repository from day one, custom code instead of a plugin pile-up, and 30 days of support after launch.",
  },
];
