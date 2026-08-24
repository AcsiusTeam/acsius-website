export const SHOPIFY_HERO = {
  eyebrow: "Hire Shopify Developers · New Delhi, India · Since 2010",
  h1: ["Hire Shopify developers", "who build stores", "that actually convert."],
  lead:
    "ACSIUS is a Shopify web development company delivering Shopify website development services for DTC brands, retailers and B2B catalogues — custom themes, headless Hydrogen storefronts, private apps and checkout extensions.",
  support:
    "Hire a dedicated Shopify developer or a full commerce pod. Profiles in 48 hours, a paid two-week trial sprint, and every line of Liquid in your repo.",
  badges: ["Shopify Plus ready", "Hydrogen / headless", "Checkout extensibility", "Store migrations"],
  stats: [
    { value: 160, suffix: "+", label: "Stores shipped" },
    { value: 18, suffix: "", label: "Shopify specialists" },
    { value: 34, suffix: "%", label: "Avg. CVR lift" },
    { value: 48, suffix: "h", label: "To profiles" },
  ],
};

/** Vertical accordion — Shopify website development services */
export const SHOPIFY_SERVICES = [
  {
    key: "theme",
    title: "Custom Shopify theme development",
    summary: "Brand-true storefronts in Liquid, built section-by-section for merchandisers.",
    body:
      "We design and code custom themes with reusable sections, metafield-driven content and editor guardrails, so your team can launch campaigns without a developer in the loop.",
    chips: ["Liquid", "Online Store 2.0", "Metaobjects", "Sections everywhere"],
    metric: "1.4s",
    metricLabel: "median LCP on launch",
  },
  {
    key: "headless",
    title: "Headless & Hydrogen storefronts",
    summary: "React storefronts on Shopify's Storefront API when speed is the differentiator.",
    body:
      "Hydrogen or Next.js front-ends wired to the Storefront API with edge caching, predictive search and app-like navigation — while checkout stays on Shopify.",
    chips: ["Hydrogen", "Oxygen", "Storefront API", "Next.js"],
    metric: "96",
    metricLabel: "Lighthouse performance",
  },
  {
    key: "apps",
    title: "Private apps & integrations",
    summary: "Custom apps for ERP, 3PL, subscriptions and back-office automation.",
    body:
      "Admin API and webhook-driven apps that sync inventory, orders and customers with NetSuite, SAP, Zoho, Unicommerce, Klaviyo and your warehouse — with retries and audit logs.",
    chips: ["Admin API", "Webhooks", "GraphQL", "ERP / 3PL", "Klaviyo"],
    metric: "0",
    metricLabel: "manual order entries",
  },
  {
    key: "checkout",
    title: "Checkout & Plus extensibility",
    summary: "Upsells, custom fields, discount logic and B2B rules on Shopify Plus.",
    body:
      "Checkout UI extensions, Shopify Functions for discounts and shipping, plus Plus features like B2B catalogues, wholesale pricing and multi-store markets.",
    chips: ["Checkout UI", "Shopify Functions", "B2B", "Markets"],
    metric: "+19%",
    metricLabel: "AOV after upsell work",
  },
  {
    key: "migration",
    title: "Migrations & replatforming",
    summary: "WooCommerce, Magento or BigCommerce to Shopify without losing SEO.",
    body:
      "Products, customers, orders, reviews and 301 maps moved on a rehearsed cutover plan — with redirects tested before DNS changes and rankings monitored for 30 days.",
    chips: ["WooCommerce", "Magento", "BigCommerce", "301 maps"],
    metric: "0%",
    metricLabel: "organic traffic lost",
  },
  {
    key: "cro",
    title: "CRO & speed sprints",
    summary: "Monthly experiments on PDP, cart and checkout — measured in revenue.",
    body:
      "Heatmaps, funnel analysis and A/B tests on product pages, bundles and cart drawers, paired with theme performance work so wins are not eaten by page weight.",
    chips: ["A/B tests", "PDP", "Cart drawer", "Core Web Vitals"],
    metric: "34%",
    metricLabel: "avg. conversion lift",
  },
];

/** Editorial numbered rows */
export const SHOPIFY_BUILDS = [
  {
    name: "DTC brand storefronts",
    detail: "Launch-ready stores with bundles, subscriptions and a story-led PDP.",
    tag: "DTC",
  },
  {
    name: "B2B & wholesale portals",
    detail: "Company accounts, price lists, net terms and quick reorder on Plus.",
    tag: "B2B",
  },
  {
    name: "Multi-market stores",
    detail: "Markets, currencies, translations and localised shipping logic.",
    tag: "Global",
  },
  {
    name: "Headless commerce",
    detail: "Hydrogen or Next.js front-ends on the Storefront API.",
    tag: "Headless",
  },
  {
    name: "Custom Shopify apps",
    detail: "Private apps for ops, loyalty, ERP sync and reporting.",
    tag: "Apps",
  },
  {
    name: "Store rescues",
    detail: "Slow, broken or app-bloated themes audited and rebuilt.",
    tag: "Rescue",
  },
];

export const SHOPIFY_STACK: { group: string; items: string[] }[] = [
  { group: "Storefront", items: ["Liquid", "OS 2.0", "Hydrogen", "Oxygen", "Next.js", "Tailwind"] },
  { group: "APIs", items: ["Storefront API", "Admin GraphQL", "Functions", "Webhooks", "Flow"] },
  { group: "Commerce apps", items: ["Klaviyo", "Recharge", "Yotpo", "Gorgias", "Judge.me"] },
  { group: "Ops & data", items: ["NetSuite", "Zoho", "Unicommerce", "GA4", "Looker Studio"] },
];

/** Clickable hiring models */
export const SHOPIFY_MODELS = [
  {
    name: "Dedicated Shopify developer",
    price: "Monthly retainer",
    note: "One Shopify expert on your roadmap only — your standups, board and repo.",
    points: [
      "160 hrs/month with 4+ hours timezone overlap",
      "Theme, app and CRO work in one seat",
      "Swap or scale the seat with 2 weeks' notice",
    ],
    highlight: true,
  },
  {
    name: "Store launch pod",
    price: "Fixed scope",
    note: "Designer, Shopify developer and QA with a signed milestone plan.",
    points: [
      "Milestones and launch date agreed up front",
      "Weekly demo on a preview theme",
      "Fixed cost, changes priced in writing",
    ],
  },
  {
    name: "Growth & care plan",
    price: "From 40 hrs/mo",
    note: "Ongoing CRO experiments, app updates and speed work after launch.",
    points: [
      "Monthly experiment roadmap with revenue targets",
      "Theme updates, app hygiene and monitoring",
      "Priority fixes during sales events",
    ],
  },
];

/** Horizontal stepper */
export const SHOPIFY_PROCESS = [
  {
    step: "01",
    title: "Store audit call",
    body: "45 minutes on your catalogue, apps, funnel numbers and the release that matters first.",
    duration: "Day 1",
    ship: "Audit notes",
  },
  {
    step: "02",
    title: "Profiles & plan",
    body: "Matched Shopify developers with stores they built, plus an engagement plan and cost.",
    duration: "48 hours",
    ship: "CVs + costs",
  },
  {
    step: "03",
    title: "Trial sprint",
    body: "Two weeks on a real slice — a PDP rebuild, an app sync or a speed pass.",
    duration: "2 weeks",
    ship: "Live preview theme",
  },
  {
    step: "04",
    title: "Build & test",
    body: "Sprint demos on a preview URL, device QA, checkout tests and staged data loads.",
    duration: "Ongoing",
    ship: "Weekly preview",
  },
  {
    step: "05",
    title: "Launch & grow",
    body: "Cutover with redirects, analytics checks, then a CRO backlog for month two.",
    duration: "Release week",
    ship: "Runbook + backlog",
  },
];

/** Split comparison */
export const SHOPIFY_COMPARE = {
  typical: {
    title: "Typical Shopify freelancer or reseller",
    points: [
      "A stack of paid apps instead of custom code",
      "Theme edits made straight on the live store",
      "No analytics baseline, so wins are guesswork",
      "Files zipped over chat — no repo, no history",
      "Goes quiet the week after launch",
    ],
  },
  acsius: {
    title: "ACSIUS Shopify bench",
    points: [
      "Custom sections and Functions replace app bloat",
      "Preview themes, Git branches and reviewed PRs",
      "GA4 and funnel baseline set before the rebuild",
      "Your repo and Shopify org from day one",
      "30 days of post-launch support plus a CRO backlog",
    ],
  },
};

export const SHOPIFY_WHY = [
  {
    metric: "48h",
    title: "Profiles, not promises",
    body: "See matched Shopify developers and the live stores they shipped before you commit.",
  },
  {
    metric: "34%",
    title: "Conversion-first",
    body: "Every build ships with a measurement plan, not just a prettier theme.",
  },
  {
    metric: "100%",
    title: "In-house team",
    body: "No subcontracting — 18 Shopify specialists in one New Delhi studio.",
  },
  {
    metric: "0",
    title: "Lock-in",
    body: "Repo, theme files, app code and docs are handed over as we build.",
  },
];

export const SHOPIFY_FAQS = [
  {
    q: "How do I hire Shopify developers from ACSIUS?",
    a: "Share your store URL or brief. Within 48 hours you get matched Shopify developer profiles with live stores they built, a suggested engagement model and a written monthly or project cost. Most clients start with a paid two-week trial sprint before committing further.",
  },
  {
    q: "Can I hire a dedicated Shopify developer part-time?",
    a: "Yes. You can hire a dedicated Shopify developer full-time at 160 hours a month, take a part-time Shopify expert from 40 hours a month for CRO and maintenance, or book a fixed-scope store launch pod. There is no minimum contract beyond the trial sprint.",
  },
  {
    q: "What Shopify website development services do you offer?",
    a: "Custom theme development in Liquid and Online Store 2.0, headless Hydrogen and Next.js storefronts, private apps and ERP or 3PL integrations, checkout UI extensions and Shopify Functions on Plus, migrations from WooCommerce, Magento and BigCommerce, plus ongoing CRO and speed sprints.",
  },
  {
    q: "Can you migrate my store to Shopify without losing SEO?",
    a: "Yes. We move products, customers, orders and reviews, then build and test a full 301 redirect map before DNS changes. Rankings and crawl errors are monitored for 30 days after cutover, and content structure is preserved so equity carries over.",
  },
  {
    q: "Why hire professional Shopify developers in India through ACSIUS?",
    a: "You get in-house Shopify experts at India rates with at least four hours of timezone overlap, daily written updates, code in your repository from day one, custom code instead of paid app stacks, and a 48-hour replacement guarantee on any seat.",
  },
];
