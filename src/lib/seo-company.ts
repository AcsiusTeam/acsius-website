export const SC_HERO = {
  eyebrow: "SEO Company India · Delhi NCR · Since 2010",
  h1: ["SEO Agency in India", "judged on pipeline,", "not on rank screenshots."],
  lead:
    "ACSIUS is an SEO company in India that runs search as an accountable programme — audit, roadmap, engineering, editorial and authority — with one named lead and a monthly number you can defend to your board.",
  support:
    "Every engagement opens with a scored audit. You see the issues, the effort, the expected return and the order we will ship them in before you commit a rupee.",
  stats: [
    { value: 16, suffix: "+", label: "Years in search" },
    { value: 3000, suffix: "+", label: "Projects delivered" },
    { value: 35, suffix: "+", label: "Countries served" },
    { value: 92, suffix: "%", label: "Client retention" },
  ],
};

/** Audit dimensions used by the animated hero scorecard. */
export const SC_AUDIT = [
  { label: "Crawl & indexing", score: 94 },
  { label: "Core Web Vitals", score: 88 },
  { label: "On-page & entities", score: 91 },
  { label: "Backlink quality", score: 79 },
  { label: "Content coverage", score: 85 },
];

export const SC_PILLARS = [
  {
    key: "foundations",
    label: "Foundations",
    weight: "30% of effort",
    title: "Make the site trivially easy to crawl, render and trust.",
    body:
      "Index bloat, render blocking, redirect chains and slow templates quietly cap every other lever. We clear them first, because everything after compounds on top.",
    ships: [
      "Crawl, log-file and index audit",
      "Core Web Vitals on real device data",
      "Schema for organisation, service and FAQ",
      "Redirect, canonical and sitemap hygiene",
    ],
    metric: "4–6 wks",
    metricLabel: "to first technical wins",
  },
  {
    key: "demand",
    label: "Demand map",
    weight: "20% of effort",
    title: "One query set, one page, one owner — no cannibalisation.",
    body:
      "We rebuild your keyword universe from sales calls, CRM notes and competitor gaps, then assign every commercial term to exactly one URL with intent labelled.",
    ships: [
      "Keyword-to-URL map you can audit",
      "Competitor gap and SERP-feature analysis",
      "Cluster and pillar publishing plan",
      "Priority scoring by revenue potential",
    ],
    metric: "1 page",
    metricLabel: "per commercial query",
  },
  {
    key: "pages",
    label: "Page craft",
    weight: "25% of effort",
    title: "Pages built to be the best answer, then refreshed on evidence.",
    body:
      "Answer-first structure, complete entity coverage, comparison tables and internal links that push authority into pages that actually convert.",
    ships: [
      "Title, meta and heading rewrites",
      "Answer-first content and FAQ blocks",
      "Internal link architecture",
      "Decay refresh cycles, not endless new posts",
    ],
    metric: "+42%",
    metricLabel: "avg. non-brand clicks",
  },
  {
    key: "authority",
    label: "Authority",
    weight: "25% of effort",
    title: "Links earned editorially, in publications your buyers read.",
    body:
      "Digital PR built on original data and founder expertise. No PBNs, no bulk directories, no networks that become a liability at the next update.",
    ships: [
      "Editorial outreach and expert commentary",
      "Original data and survey assets",
      "Anchor and destination planning",
      "Toxic link review and disavow",
    ],
    metric: "0",
    metricLabel: "paid link networks used",
  },
];

/** Monthly retainer ledger — what actually lands each month. */
export const SC_LEDGER = [
  { when: "Month 0", item: "Scored audit + written roadmap", output: "Prioritised fix list, keyword map, forecast" },
  { when: "Month 1", item: "Technical remediation shipped", output: "Speed, crawl and schema fixes live on your stack" },
  { when: "Month 1–2", item: "Money-page optimisation", output: "Priority URLs rewritten and internally linked" },
  { when: "Month 2+", item: "Editorial production", output: "4–8 answer-first pages or refreshes per month" },
  { when: "Month 2+", item: "Authority campaign", output: "Editorial placements and expert commentary" },
  { when: "Monthly", item: "Outcome report", output: "Clicks, positions, leads and revenue by page" },
  { when: "Quarterly", item: "Strategy review", output: "Re-prioritised roadmap and budget shift" },
];

export const SC_TIMELINE = [
  { month: "Wk 1–2", title: "Audit", body: "Technical, content and backlink review scored by effort against impact.", level: 18 },
  { month: "Wk 3–4", title: "Roadmap", body: "Keyword map, page plan and a forecast you can hold us to.", level: 30 },
  { month: "Mo 2", title: "Fixes live", body: "Our developers ship the technical work on your stack.", level: 46 },
  { month: "Mo 3–4", title: "Movement", body: "Priority terms enter striking distance; impressions climb.", level: 68 },
  { month: "Mo 5–6", title: "Compounding", body: "Content velocity plus authority moves commercial terms into top three.", level: 88 },
];

export const SC_TIERS = [
  {
    name: "Audit & Roadmap",
    price: "₹45,000",
    unit: "one-time",
    for: "Teams who want the diagnosis before the retainer.",
    points: ["Full technical + content + link audit", "Keyword-to-URL map", "Prioritised 6-month roadmap", "Walkthrough call with the lead"],
  },
  {
    name: "Growth Retainer",
    price: "₹60,000",
    unit: "per month",
    featured: true,
    for: "Single-market brands competing nationally.",
    points: ["All four pillars running", "6 editorial pieces per month", "Developer time included", "Monthly outcome report + quarterly review"],
  },
  {
    name: "Enterprise / Multi-market",
    price: "Custom",
    unit: "scoped",
    for: "Large catalogues, multi-country or post-penalty recovery.",
    points: ["Dedicated pod with named leads", "Migration and hreflang programmes", "Log-file and crawl automation", "Board-level reporting cadence"],
  },
];

export const SC_SECTORS = [
  { name: "Healthcare & Clinics", note: "Treatment pages, map-pack visibility and reputation signals that fill appointment slots." },
  { name: "Finance & Insurance", note: "Trust-heavy explainers, compliant claims and authority building in a YMYL vertical." },
  { name: "E-commerce & D2C", note: "Facet architecture, collection content and product schema that grow non-brand revenue." },
  { name: "SaaS & IT", note: "Use-case, alternatives, integration and pricing pages that catch decision-stage buyers." },
  { name: "Real Estate", note: "Locality and project pages with enquiry paths, tracked by map grid rather than averages." },
  { name: "Education & EdTech", note: "Course and admission pages planned around exam and intake cycles." },
  { name: "Manufacturing & Export", note: "Capability, specification and country-targeted pages for international buyers." },
  { name: "Travel & Hospitality", note: "Destination content, seasonal demand planning and optimised booking journeys." },
];

export const SC_COMPARE = {
  typical: {
    title: "Typical SEO agency in India",
    points: [
      "Package tiers priced before anyone looked at your site",
      "Rank screenshots for terms nobody searches",
      "A PDF of recommendations you must implement yourself",
      "Links from bulk directories and paid networks",
      "Content volume as the strategy",
      "A monthly email you have to chase",
    ],
  },
  acsius: {
    title: "ACSIUS as your SEO company",
    points: [
      "Scope and price written after a scored audit",
      "Reporting on clicks, leads and revenue by page",
      "Our developers ship the fixes on your stack",
      "Editorial outreach and digital PR only",
      "Fewer pages, each built to be the best answer",
      "Named lead on email and WhatsApp, scheduled calls",
    ],
  },
};

export const SC_WHY = [
  { metric: "16 yrs", title: "Through every update", body: "Search programmes run since 2010 — Panda to AI overviews — without a single penalty recovery on our own work." },
  { metric: "1 lead", title: "One accountable name", body: "A senior strategist owns your account end to end. No rotating juniors, no ticket queue." },
  { metric: "In-house", title: "Engineers, not advisors", body: "We are a development company too, so technical fixes ship instead of waiting on your dev backlog." },
  { metric: "0", title: "Lock-in games", body: "Documented deliverables, clear scope, and a hand-over pack so knowledge stays with you." },
];

export const SC_FAQS = [
  {
    q: "What does an SEO company in India actually charge?",
    a: "Retainers commonly run ₹30,000 to ₹1,50,000 per month depending on competition, page count and how much content and authority work is needed. We quote after the audit, so the number reflects your site rather than a package tier.",
  },
  {
    q: "How do you decide what to work on first?",
    a: "Every audit issue is scored on effort against expected impact. Fixes that unlock indexing or speed ship first because everything after compounds on them, then money-page optimisation, then content and authority.",
  },
  {
    q: "How long before we see results from SEO?",
    a: "Technical wins usually surface in four to six weeks. Ranking and lead movement typically becomes clear between month four and six, and competitive national terms can take longer. Anyone promising page one in a month is planning to take risks with your domain.",
  },
  {
    q: "Can you guarantee number one on Google?",
    a: "No agency can, because none of us control the algorithm. We commit to a documented roadmap, work delivered on schedule and transparent reporting on visibility, traffic and conversions.",
  },
  {
    q: "Do you implement changes or only advise?",
    a: "We implement. ACSIUS builds on WordPress, Shopify, Magento, Laravel and custom stacks, so our engineers push technical and template changes directly.",
  },
  {
    q: "We lost traffic after an update. Can you help?",
    a: "Yes. We run a forensic review across update timing, manual actions, toxic links, thin or duplicated content and technical regressions, then target the actual cause instead of publishing over it.",
  },
];
