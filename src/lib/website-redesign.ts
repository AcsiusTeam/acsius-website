export const WR_HERO = {
  eyebrow: "Website Redesign Company · New Delhi, India",
  h1: ["Website redesign", "that keeps your rankings", "and lifts your leads."],
  lead:
    "ACSIUS is a website redesign company in India rebuilding dated, slow and low-converting sites into fast, modern, search-safe websites — with redirects, schema and Core Web Vitals handled before launch day.",
  support:
    "Redesign only, redesign plus migration, or a single high-converting page for your ads — you pick the scope, we protect the traffic you already earn.",
  badges: ["No ranking drop", "Redirect mapping", "Core Web Vitals pass", "Phased launch"],
  stats: [
    { value: 420, suffix: "+", label: "Sites redesigned" },
    { value: 168, suffix: "%", label: "Avg. lead lift" },
    { value: 0, suffix: "", label: "Traffic lost on launch" },
    { value: 4, suffix: "wk", label: "Typical timeline" },
  ],
};

/** Symptom checklist — "is it time to redesign?" */
export const WR_SYMPTOMS = [
  { tag: "Speed", title: "Loads in 6+ seconds", body: "Bloated themes and unoptimised media burn your ad clicks before the page paints." },
  { tag: "Mobile", title: "Broken on phones", body: "Pinch-to-zoom layouts, tap targets too small and forms that fight the thumb." },
  { tag: "Trust", title: "Looks older than you are", body: "A 2014 design quietly tells buyers your product and process are dated too." },
  { tag: "Search", title: "Rankings sliding", body: "Thin templates, duplicate titles and no schema — Google has better options." },
  { tag: "Leads", title: "Traffic but no enquiries", body: "No clear offer, buried CTAs and a contact form nobody can find on mobile." },
  { tag: "Ops", title: "Every edit needs a developer", body: "Hard-coded content and plugin sprawl make simple changes expensive." },
];

/** Segmented switcher — redesign tracks */
export const WR_TRACKS = [
  {
    key: "refresh",
    name: "Visual refresh",
    best: "Structure is fine, the look is dated",
    body:
      "New design language, typography and imagery on your existing URLs and CMS — the fastest way to look current without a migration.",
    chips: ["New design system", "Same URLs", "Brand refresh", "No migration"],
    stat: "2-3 wk",
    statLabel: "typical go-live",
    href: "/website-design-company-india",
  },
  {
    key: "rebuild",
    name: "Full rebuild",
    best: "Slow, messy or unmaintainable site",
    body:
      "Fresh information architecture, hand-built templates, clean CMS and a speed budget — the site rebuilt properly, page by page.",
    chips: ["New IA + templates", "Clean CMS", "Speed budget", "Content migration"],
    stat: "4-6 wk",
    statLabel: "typical go-live",
    href: "/custom-cms-website-design-development",
  },
  {
    key: "replatform",
    name: "Replatform / migrate",
    best: "Moving CMS, host or commerce stack",
    body:
      "WordPress, Shopify, Magento or headless — content, media and URLs mapped across with redirects tested before the switch.",
    chips: ["URL mapping", "301 redirects", "Data migration", "Rollback plan"],
    stat: "0",
    statLabel: "broken links",
    href: "/ecommerce-website-developement",
  },
  {
    key: "cro",
    name: "Conversion redesign",
    best: "Traffic is fine, leads are not",
    body:
      "Message, layout and form redesigned around one goal per page, then tested — judged on enquiries, not visual taste.",
    chips: ["Offer clarity", "Form redesign", "A/B testing", "CRM routing"],
    stat: "+168%",
    statLabel: "avg. lead lift",
    href: "/landing-page-design",
  },
];

/** SEO-safe migration checklist (split list section) */
export const WR_SEO_SAFE = {
  eyebrow: "Website redesign services India",
  heading: "The part most agencies skip: keeping your traffic.",
  lead:
    "A redesign is a technical migration wearing a new coat of paint. We freeze a baseline, map every URL and verify search health after launch — so the design changes and the rankings do not.",
  before: {
    title: "Before we touch a pixel",
    items: [
      "Full crawl and URL inventory of the live site",
      "Baseline of rankings, traffic, conversions and CWV",
      "Top-100 pages ranked by revenue and organic value",
      "Analytics, Search Console and goal audit",
    ],
  },
  during: {
    title: "During the rebuild",
    items: [
      "One-to-one redirect map with no chains",
      "Titles, meta, headings and schema carried over",
      "Internal links, canonicals and sitemap rebuilt",
      "Staging site blocked from indexing",
    ],
  },
  after: {
    title: "After go-live",
    items: [
      "Crawl diff and 404 sweep within 24 hours",
      "Search Console inspection of priority URLs",
      "Core Web Vitals and speed verification",
      "30-day ranking and conversion watch",
    ],
  },
};

/** Before / after metrics rows */
export const WR_RESULTS = [
  { area: "Largest Contentful Paint", before: "6.4s", after: "1.3s", lift: "-80%" },
  { area: "Mobile conversion rate", before: "0.8%", after: "2.4%", lift: "+200%" },
  { area: "Organic sessions (90d)", before: "12.4k", after: "19.7k", lift: "+59%" },
  { area: "Bounce on key pages", before: "71%", after: "42%", lift: "-29pt" },
  { area: "Monthly qualified leads", before: "34", after: "91", lift: "+168%" },
];

/** Google Ads / PPC — single page option */
export const WR_PPC = {
  eyebrow: "Google Ads & PPC support",
  heading: "Only need one page for your ads while the redesign runs?",
  lead:
    "Many clients start with a single conversion page for Google Ads, then roll the same design system into the full redesign. We can build that page — and run the campaigns behind it.",
  meter: [
    { label: "Ad relevance", from: 44, to: 93 },
    { label: "Landing page experience", from: 36, to: 96 },
    { label: "Expected CTR", from: 48, to: 89 },
  ],
  items: [
    { tag: "One page", title: "Single conversion page", body: "One offer, one form, no navigation — live in days on your domain or a subdomain." },
    { tag: "Search Ads", title: "Google Search campaigns", body: "Keyword clusters and RSAs written to mirror the page headline for a better Quality Score." },
    { tag: "P-Max", title: "Performance Max & Display", body: "Asset groups, audience signals and creative sets pointed at one focused page." },
    { tag: "Meta", title: "Meta & LinkedIn lead ads", body: "Paid social creatives and lead forms mapped to the same offer and pipeline." },
    { tag: "Tracking", title: "Conversion tracking that ties out", body: "GA4 events, Ads conversions and call tracking verified before spend starts." },
    { tag: "Reporting", title: "Cost-per-lead reporting", body: "One dashboard for spend, leads and CPL — reviewed on a monthly call." },
  ],
  note: "Redesign only, one page only, or the page plus ads while the redesign is being built — all three work.",
};

export const WR_DELIVERABLES = [
  {
    group: "Design",
    items: ["UX audit and new sitemap", "Design system with tokens", "Desktop + mobile page designs", "Two revision rounds per template"],
  },
  {
    group: "Build",
    items: ["Hand-built responsive templates", "Editable CMS blocks", "Forms, CRM and WhatsApp wiring", "Accessibility and QA pass"],
  },
  {
    group: "Search & speed",
    items: ["Redirect map and technical SEO", "Schema and metadata migration", "Core Web Vitals optimisation", "30-day post-launch monitoring"],
  },
];

export const WR_MODELS = [
  {
    name: "Redesign project",
    price: "Fixed price",
    note: "Scoped by template count — design, build, migration and launch in one project.",
    points: ["Fixed scope and timeline", "Weekly demo builds", "30 days of post-launch fixes"],
    highlight: true,
  },
  {
    name: "Single page + ads",
    price: "Page + monthly",
    note: "One conversion page now, Google Ads managed by the same team, redesign later.",
    points: ["Live in 5-7 working days", "Campaign build and tracking", "Design system reused later"],
  },
  {
    name: "Phased redesign",
    price: "From 40 hrs/mo",
    note: "Ship template by template so revenue pages never wait on the whole site.",
    points: ["Priority pages first", "Monthly roadmap and reporting", "CRO testing after each phase"],
  },
];

export const WR_PROCESS = [
  { step: "01", title: "Audit & baseline", body: "Crawl, analytics, rankings, speed and a heatmap read of where the current site loses people.", duration: "Week 1", ship: "Audit + baseline report" },
  { step: "02", title: "IA & wireframes", body: "New sitemap, page-by-page message map and wireframes for every template before visual design.", duration: "Week 1-2", ship: "Sitemap + wireframes" },
  { step: "03", title: "Design system", body: "Type, colour, components and key templates designed for desktop and mobile in your brand.", duration: "Week 2-3", ship: "Design preview" },
  { step: "04", title: "Build & migrate", body: "Templates coded, content migrated, redirects mapped, forms and tracking wired on staging.", duration: "Week 3-5", ship: "Staging URL" },
  { step: "05", title: "Launch & monitor", body: "Go live off-peak, run the crawl diff and 404 sweep, then watch rankings and leads for 30 days.", duration: "Week 5-6", ship: "Live site + report" },
];

export const WR_COMPARE = {
  typical: {
    title: "Typical template redesign",
    points: [
      "A premium theme dropped over old content",
      "URLs changed with no redirect map",
      "Rankings dip for months after launch",
      "Slower than the site it replaced",
      "Pretty screenshots, same enquiry count",
    ],
  },
  acsius: {
    title: "ACSIUS redesign",
    points: [
      "New IA and copy built around buyer questions",
      "One-to-one redirects tested before launch",
      "Search baseline protected and verified",
      "Speed budget with Core Web Vitals pass",
      "Judged on leads, not on likes",
    ],
  },
};

export const WR_WHY = [
  { metric: "420+", title: "Redesigns since 2010", body: "Corporate, SaaS, education, healthcare, manufacturing and ecommerce rebuilds." },
  { metric: "0", title: "Traffic-loss launches", body: "Redirects, schema and metadata migrated and verified on every project we ship." },
  { metric: "In-house", title: "One accountable team", body: "Designers, developers, SEO and PPC specialists in New Delhi — no subcontracting." },
  { metric: "Yours", title: "Full handover", body: "Your domain, your accounts, editable CMS and source files — no lock-in." },
];

export const WR_FAQS = [
  {
    q: "What is included in your website redesign services in India?",
    a: "A UX and technical audit of the current site, new sitemap and wireframes, a full design system with desktop and mobile designs, hand-built responsive templates on your CMS, content and media migration, a one-to-one redirect map, metadata and schema migration, form and CRM wiring, speed and Core Web Vitals optimisation, cross-device QA, launch support and 30 days of post-launch monitoring and fixes.",
  },
  {
    q: "Will a redesign hurt my Google rankings?",
    a: "Not when the migration is done properly. We record a baseline of rankings, traffic and conversions before work starts, keep or improve titles, headings, schema and internal links, build a one-to-one redirect map with no chains, block staging from indexing, then run a crawl diff and 404 sweep within 24 hours of launch. Priority URLs are re-inspected in Search Console and we watch rankings for 30 days.",
  },
  {
    q: "How long does a website redesign take and what does it cost?",
    a: "Most redesigns go live in four to six weeks depending on template count, content volume and approval speed. A visual refresh on existing URLs can be two to three weeks; large replatforming projects run longer. Pricing is fixed per project, quoted by number of templates and integrations, with anything outside scope priced in advance before it is built.",
  },
  {
    q: "I only need one landing page for my Google Ads, not a full redesign. Can you help?",
    a: "Yes. We regularly build a single conversion page first — one offer, one form, no navigation — live in five to seven working days on your domain or a subdomain. We can also run the Google Search, Performance Max or Meta campaigns behind it with conversion tracking and cost-per-lead reporting, then reuse the same design system when you are ready for the full redesign.",
  },
  {
    q: "Can you redesign our site without changing our CMS?",
    a: "Usually yes. If you are on WordPress, Shopify, Magento, Webflow or a custom CMS that your team is comfortable with, we can rebuild templates in place so editors keep the workflow they know. We only recommend replatforming when the current stack is the actual bottleneck — for example unmaintainable page builders, security risk or unavoidable speed limits.",
  },
  {
    q: "Why choose ACSIUS as your website redesign agency in India?",
    a: "We have rebuilt over 420 websites since 2010 with an in-house New Delhi team of designers, developers, SEO and PPC specialists, so design, migration, search and paid traffic sit with one accountable group. You get India pricing, at least four hours of timezone overlap, weekly demo builds instead of a big reveal, a launch plan that protects existing rankings and a full handover with no lock-in.",
  },
];
