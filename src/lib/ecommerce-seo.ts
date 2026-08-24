export const ES_HERO = {
  eyebrow: "E-commerce SEO Services · India & Delhi NCR · Since 2010",
  h1: ["E-commerce SEO services", "measured in revenue per URL,", "not keyword counts."],
  lead:
    "ACSIUS Technologies is an eCommerce SEO agency that treats your catalogue as an asset — crawl budget, facets, category pages, product schema and content — so non-brand organic revenue grows quarter on quarter.",
  support:
    "We work on Shopify, WooCommerce, Magento and headless builds, and because our developers ship the fixes, technical work does not sit waiting in a sprint backlog.",
  stats: [
    { value: 16, suffix: "+", label: "Years in search" },
    { value: 120, suffix: "+", label: "Stores optimised" },
    { value: 2, suffix: "M+", label: "SKUs handled" },
    { value: 92, suffix: "%", label: "Client retention" },
  ],
};

export const ES_INTRO = [
  "Most stores do not have a keyword problem. They have an architecture problem: thousands of near-duplicate facet URLs eating crawl budget, category pages with no content, and product pages that go out of stock without a plan. Rankings follow once that is fixed.",
  "We start by mapping demand to your catalogue — which categories deserve a page, which filters deserve indexing, and which long-tail queries belong in buying guides instead of new collections. Then we sequence the fixes by revenue potential.",
  "Reporting is tied to commerce, not vanity: non-brand organic revenue, revenue per landing page, assisted conversions and the share of category terms in the top three.",
];

export const ES_PILLARS = [
  {
    key: "architecture",
    label: "Catalogue architecture",
    weight: "30% of effort",
    title: "One indexable URL per real demand, and nothing else.",
    body:
      "Facet and parameter rules, pagination, canonical logic and internal links designed so crawl budget lands on the pages that actually earn money.",
    ships: [
      "Facet and parameter indexation rules",
      "Category and subcategory URL map",
      "Pagination and canonical clean-up",
      "Internal link and breadcrumb architecture",
    ],
    metric: "−60%",
    metricLabel: "typical index bloat removed",
  },
  {
    key: "technical",
    label: "Technical & speed",
    weight: "25% of effort",
    title: "Fast templates, valid schema, clean crawl paths.",
    body:
      "Core Web Vitals on real device data, image and script discipline, Product, Offer and Review schema, plus log-file checks that prove the crawler is reaching new SKUs.",
    ships: [
      "Core Web Vitals on PLP and PDP templates",
      "Product, Offer and Review schema",
      "Log-file crawl analysis",
      "Out-of-stock and redirect policy",
    ],
    metric: "<2.5s",
    metricLabel: "LCP target on PDPs",
  },
  {
    key: "pages",
    label: "Category & product craft",
    weight: "25% of effort",
    title: "Collection pages built to outrank marketplaces.",
    body:
      "Buying-intent copy above the fold, comparison and spec tables, unique product descriptions at scale, and FAQ blocks that answer the objections stopping the sale.",
    ships: [
      "Category intros and buying guidance",
      "Unique PDP copy at catalogue scale",
      "Title, meta and heading templates",
      "Review and UGC surfacing",
    ],
    metric: "+38%",
    metricLabel: "avg. non-brand category clicks",
  },
  {
    key: "authority",
    label: "Authority & merch",
    weight: "20% of effort",
    title: "Links, comparisons and seasonal merchandising.",
    body:
      "Editorial outreach around original data and product expertise, plus a seasonal calendar so festive and sale demand is captured before the peak, not during it.",
    ships: [
      "Editorial and gift-guide placements",
      "Comparison and alternatives content",
      "Seasonal and festive demand calendar",
      "Toxic link review and disavow",
    ],
    metric: "0",
    metricLabel: "paid link networks used",
  },
];

export const ES_PLATFORMS = [
  { name: "Shopify & Plus", note: "Collection templates, app bloat control and Liquid-level speed fixes." },
  { name: "WooCommerce", note: "Query-string discipline, plugin audits and hosting-level performance work." },
  { name: "Magento / Adobe", note: "Layered navigation rules, multi-store SEO and large-catalogue crawl control." },
  { name: "Headless & custom", note: "Rendering checks, sitemap automation and edge caching for JS storefronts." },
];

export const ES_AUDIT = [
  { when: "Week 1", item: "Catalogue and crawl audit", output: "Index bloat, facet map and template scoring" },
  { when: "Week 2", item: "Demand-to-URL map", output: "Category plan, keyword map and revenue forecast" },
  { when: "Week 3–4", item: "Technical remediation", output: "Speed, schema and canonical fixes shipped live" },
  { when: "Month 2", item: "Category page rebuild", output: "Priority PLPs rewritten and internally linked" },
  { when: "Month 2+", item: "PDP content at scale", output: "Unique descriptions, specs and FAQ blocks" },
  { when: "Monthly", item: "Revenue report", output: "Non-brand revenue, revenue per URL, top movers" },
  { when: "Quarterly", item: "Merch & season review", output: "Re-prioritised roadmap ahead of peak demand" },
];

export const ES_FUNNEL = [
  { label: "Impressions", value: 100, note: "Category and long-tail visibility" },
  { label: "Clicks", value: 62, note: "Titles, schema and rich results" },
  { label: "Product views", value: 38, note: "Internal links and merchandising" },
  { label: "Add to cart", value: 17, note: "Copy, specs and social proof" },
  { label: "Revenue", value: 9, note: "Tracked per landing page" },
];

export const ES_SECTORS = [
  { name: "Fashion & apparel", note: "Size, colour and occasion facets that rank instead of duplicating." },
  { name: "Electronics", note: "Spec tables, comparison pages and model-number query coverage." },
  { name: "Beauty & wellness", note: "Ingredient and concern-led categories with compliant claims." },
  { name: "Home & furniture", note: "Room, material and dimension intent mapped to collections." },
  { name: "Grocery & FMCG", note: "High-SKU crawl control and repeat-purchase landing pages." },
  { name: "Jewellery", note: "Occasion and metal-purity intent with rich-result eligibility." },
  { name: "Auto parts", note: "Fitment and compatibility architecture for make-model queries." },
  { name: "B2B & wholesale", note: "Bulk enquiry paths, MOQ clarity and specification pages." },
];

export const ES_COMPARE = {
  typical: {
    title: "Typical eCommerce SEO vendor",
    points: [
      "A keyword list bolted onto your existing structure",
      "Blog volume while category pages stay thin",
      "Facet URLs left to bloat the index",
      "Recommendations your developer never gets to",
      "Ranking screenshots with no revenue context",
      "Nothing planned before festive peaks",
    ],
  },
  acsius: {
    title: "ACSIUS as your eCommerce SEO company",
    points: [
      "Architecture fixed before content is written",
      "Category and product pages treated as the priority",
      "Explicit indexation rules for every facet",
      "Our engineers deploy on Shopify, Woo and Magento",
      "Reporting on non-brand revenue per landing page",
      "Seasonal calendar built months ahead of peak",
    ],
  },
};

export const ES_WHY = [
  { metric: "Dev", title: "Engineers on the team", body: "Template, speed and schema changes ship on your storefront instead of waiting on a backlog." },
  { metric: "₹", title: "Revenue-first reporting", body: "Every month you see non-brand organic revenue and revenue per landing page, by category." },
  { metric: "1 lead", title: "One accountable name", body: "A senior commerce strategist owns the account end to end, on email and WhatsApp." },
  { metric: "2M+", title: "Large-catalogue experience", body: "Crawl control, feed hygiene and automation tested on multi-million SKU stores." },
];

export const ES_FAQS = [
  {
    q: "How much do eCommerce SEO services cost in India?",
    a: "Store retainers commonly run ₹35,000 to ₹2,00,000 per month depending on catalogue size, platform and how much content and development work is needed. We quote after a catalogue audit, so the figure reflects your SKU count and template debt rather than a package tier.",
  },
  {
    q: "How long before organic revenue moves?",
    a: "Technical and indexation wins usually show within four to six weeks. Category ranking and revenue movement typically becomes clear between month three and six, with festive and seasonal peaks amplifying whatever has been built before them.",
  },
  {
    q: "Should facet and filter URLs be indexed?",
    a: "Only where real search demand exists — for example a colour or size combination people actually search for. Everything else is blocked or canonicalised so crawl budget goes to pages that can earn revenue. We define the rule set explicitly and document it.",
  },
  {
    q: "Do you work with Shopify, WooCommerce and Magento?",
    a: "Yes, plus headless and custom storefronts. Our in-house developers implement template, speed and schema changes directly, so recommendations become deployed fixes with QA notes.",
  },
  {
    q: "Do you handle stores based in Delhi and NCR?",
    a: "Yes. Our office is in East Delhi, so Delhi NCR brands can have strategy reviews in person, and we combine store SEO with local visibility when there are physical outlets.",
  },
];
