export const INDIA_HERO = {
  eyebrow: "Organic SEO Services in India · Delhi NCR · Since 2010",
  h1: ["SEO Services in India", "that grow rankings,", "traffic and revenue."],
  lead:
    "ACSIUS Technologies delivers organic SEO services in India for startups, D2C brands, service businesses and enterprises — technical engineering, editorial content and white-hat authority building in one accountable programme.",
  support:
    "Every engagement starts with a full audit and a written roadmap, so you know what we are doing, why it matters and what it should return.",
  stats: [
    { value: 16, suffix: "+", label: "Years in search" },
    { value: 3000, suffix: "+", label: "Projects delivered" },
    { value: 35, suffix: "+", label: "Countries served" },
    { value: 61, suffix: "%", label: "Avg. organic lift" },
  ],
};

export const INDIA_INTRO = [
  "Search in India has changed. Buyers no longer scan ten blue links — they read an AI overview, expand a People Also Ask box, watch a short video and only then click. Ranking today means being the source those surfaces quote: fast pages, clean structure, unambiguous entities and content that answers the question completely on the page.",
  "That is the standard our organic SEO services in India are built to. We cover the full stack — crawlability and Core Web Vitals, information architecture, keyword-to-page mapping, on-page optimisation, editorial content, internal linking, digital PR and local visibility. Nothing is outsourced to automated spam, and nothing is done without a reason we can explain in plain language.",
  "We work as an extension of your team. You get a named point of contact, communication over email and WhatsApp, scheduled review calls, and a monthly report that connects rankings and impressions to leads and revenue rather than vanity charts.",
];

/** Answer-first blocks written for AI overviews and featured snippets. */
export const INDIA_ANSWERS = [
  {
    q: "What are organic SEO services?",
    a: "Organic SEO services are the ongoing technical, content and authority work that earns unpaid rankings in Google, Bing and AI answer engines. Unlike ads, the visibility keeps compounding after the work is done, which is why organic search is usually the lowest cost-per-lead channel for Indian businesses.",
  },
  {
    q: "What makes the best SEO services in India?",
    a: "The best SEO services in India share four traits: a documented audit before any work starts, one clear keyword target per page, editorial links instead of purchased ones, and reporting tied to leads and revenue rather than screenshots of rankings.",
  },
  {
    q: "Who are organic SEO services in India right for?",
    a: "Businesses with a working website that needs qualified demand — clinics, D2C stores, SaaS products, real-estate developers, educators, exporters and B2B service firms competing nationally or in a single city.",
  },
];

export const INDIA_WHY = [
  {
    title: "16 years of search, not a side service",
    body: "ACSIUS has run organic search programmes since 2010 across 3000+ projects and 35+ countries — through every major Google update.",
  },
  {
    title: "Developers and SEOs on one team",
    body: "We do not hand you a PDF of recommendations. Our engineers ship the technical fixes on WordPress, Shopify, Magento and custom stacks.",
  },
  {
    title: "White-hat only, always",
    body: "Editorial outreach and digital PR. No PBNs, no bulk directories, no shortcuts that put your domain at risk later.",
  },
  {
    title: "Reporting a founder can read",
    body: "Clicks, leads and revenue mapped to specific pages, with a quarterly re-prioritised roadmap — not vanity charts.",
  },
];


export type IndiaService = {
  key: string;
  name: string;
  summary: string;
  points: string[];
  outcome: string;
};

export const INDIA_SERVICES: IndiaService[] = [
  {
    key: "technical",
    name: "Technical SEO",
    summary:
      "The engineering layer. If search engines cannot crawl, render and understand your site quickly, no amount of content will rescue it.",
    points: [
      "Crawl and index audits — orphan pages, duplicate paths, wasted crawl budget",
      "Core Web Vitals: LCP, INP and CLS tuned on real device data",
      "Rendering checks for JavaScript-heavy and headless builds",
      "Schema markup for organisation, service, product, article, FAQ and breadcrumbs",
      "Sitemaps, canonicals, hreflang, robots rules and redirect hygiene",
    ],
    outcome: "A site that loads fast, indexes cleanly and gives crawlers zero reasons to skip a page.",
  },
  {
    key: "keywords",
    name: "Keyword & Intent Research",
    summary:
      "We map the words your buyers actually use to the pages that should own them — commercial, comparison, local and informational intent, each in its right place.",
    points: [
      "Seed research from your sales calls, CRM notes and existing search data",
      "Competitor gap analysis to find terms rivals rank for and you do not",
      "Intent classification so money pages are never diluted by blog-level terms",
      "Cluster and pillar planning around topics, not isolated keywords",
      "A keyword-to-URL map you can hold us accountable to",
    ],
    outcome: "One clear target per page, no cannibalisation, and a publishing plan with priorities.",
  },
  {
    key: "onpage",
    name: "On-Page & Content SEO",
    summary:
      "Pages written to be the most useful answer on the results page — for humans first, and for the AI systems that summarise them second.",
    points: [
      "Titles, meta descriptions, headings and entity coverage rewritten with intent in mind",
      "Answer-first structure: the takeaway in the opening lines, detail below",
      "Supporting formats — tables, checklists, comparisons, FAQs, calculators",
      "Internal linking that passes authority to pages that convert",
      "Refresh cycles for decaying pages instead of endless new posts",
    ],
    outcome: "Higher click-through, longer engagement and content that AI answers cite by name.",
  },
  {
    key: "authority",
    name: "Link Building & Digital PR",
    summary:
      "Authority earned, never bought from link farms. We pitch stories, data and expertise to publications your audience already reads.",
    points: [
      "Editorial outreach to relevant Indian and international publishers",
      "Digital PR built on original data, commentary and founder expertise",
      "Guest contributions, expert round-ups and industry directory clean-up",
      "Anchor and destination planning to protect a natural link profile",
      "Toxic link review and disavow where a previous agency left damage",
    ],
    outcome: "Stronger domain authority, faster indexing and rankings that hold their position.",
  },
  {
    key: "local",
    name: "Local SEO",
    summary:
      "For clinics, showrooms, studios, agencies and multi-branch businesses that need to win the map pack in their city.",
    points: [
      "Google Business Profile optimisation, categories, services and posts",
      "City and locality landing pages that are genuinely distinct, not spun",
      "NAP consistency across Indian directories and citation sources",
      "Review generation workflows and response templates",
      "Tracking rank by grid location, not just national average position",
    ],
    outcome: "Visibility in map results and near-me searches where purchase intent is highest.",
  },
  {
    key: "ecommerce",
    name: "E-commerce SEO",
    summary:
      "Catalogue-scale search for WooCommerce, Shopify and Magento stores — where structure decides how much of your range is even discoverable.",
    points: [
      "Category and facet architecture that ranks without creating index bloat",
      "Product titles, descriptions and specification tables built for search",
      "Product, offer, review and availability structured data",
      "Out-of-stock, variant and pagination handling that protects equity",
      "Merchandising insight: which collections deserve content investment",
    ],
    outcome: "More of your catalogue indexed, ranked and converting from organic traffic.",
  },
  {
    key: "aeo",
    name: "AI & Answer Engine Optimisation",
    summary:
      "Optimising for AI overviews, ChatGPT, Perplexity and voice assistants — the surfaces that increasingly stand between a search and a click.",
    points: [
      "Entity clarity: consistent naming, sameAs signals and an unambiguous brand graph",
      "Extractable formatting — short definitional answers, lists and comparison tables",
      "Coverage of the full question cluster, including follow-up questions",
      "Citation-worthy assets: original data, pricing transparency, process detail",
      "Monitoring brand mentions and citations inside AI answers",
    ],
    outcome: "Your brand quoted as the source in AI answers, not scrolled past beneath them.",
  },
  {
    key: "reporting",
    name: "Audits & Reporting",
    summary:
      "You should never wonder what your SEO budget bought. We report on outcomes, in language a founder or CFO can read.",
    points: [
      "Full technical, content and backlink audit at kickoff",
      "Analytics and Search Console configured with clean conversion tracking",
      "Monthly reporting on clicks, impressions, positions, leads and revenue",
      "Quarterly strategy reviews with a re-prioritised roadmap",
      "Documentation and a hand-over guide so knowledge stays with you",
    ],
    outcome: "Complete transparency, and a record of what changed, when and with what effect.",
  },
];

export const INDIA_PROCESS = [
  {
    step: "01",
    title: "Discovery & Audit",
    duration: "Week 1–2",
    body:
      "We interview your team, review analytics history and run a full technical, content and backlink audit. You receive a prioritised issue list scored by effort against expected impact.",
  },
  {
    step: "02",
    title: "Strategy & Mapping",
    duration: "Week 2–3",
    body:
      "Keyword research, competitor gap analysis and intent mapping become a written roadmap: which pages to fix, which to build, which to merge, and in what order.",
  },
  {
    step: "03",
    title: "Implementation",
    duration: "Month 1 onward",
    body:
      "Technical fixes ship first, then on-page optimisation, new content and internal linking. Our developers can implement directly on WordPress, Shopify or your custom stack.",
  },
  {
    step: "04",
    title: "Authority & Content Velocity",
    duration: "Month 2 onward",
    body:
      "Editorial outreach, digital PR and a steady publishing cadence compound month over month, widening the range of queries you can realistically win.",
  },
  {
    step: "05",
    title: "Measure & Refine",
    duration: "Ongoing",
    body:
      "Monthly reporting and quarterly reviews. Winning patterns get more budget, weak ones get cut, and the roadmap is rewritten against what the data actually shows.",
  },
];

export const INDIA_COMPARE = [
  { theme: "Reporting", typical: "Rank screenshots with no business context", acsius: "Clicks, leads and revenue tied to specific pages" },
  { theme: "Links", typical: "Bulk directories and paid link networks", acsius: "Editorial outreach and digital PR only" },
  { theme: "Content", typical: "Volume of AI-spun blog posts", acsius: "Fewer pages, each built to be the best answer" },
  { theme: "Technical work", typical: "A PDF of recommendations you must implement", acsius: "Our developers ship the fixes for you" },
  { theme: "Communication", typical: "A monthly email you have to chase", acsius: "Named contact on email and WhatsApp, scheduled calls" },
  { theme: "Contracts", typical: "Long lock-ins with vague deliverables", acsius: "Clear scope, documented deliverables, no lock-in games" },
];

export const INDIA_INDUSTRIES = [
  { name: "Healthcare & Clinics", body: "Local visibility, treatment pages and reputation signals that bring bookings, built with compliance in mind." },
  { name: "E-commerce & D2C", body: "Catalogue architecture, collection content and product schema that grow non-brand organic revenue." },
  { name: "SaaS & IT Services", body: "Use-case, integration, alternatives and pricing pages that capture buyers at the decision stage." },
  { name: "Real Estate", body: "Hyperlocal project and locality pages, map-pack visibility and enquiry-focused conversion paths." },
  { name: "Education & EdTech", body: "Course and admissions pages, exam-cycle content planning and student-intent question coverage." },
  { name: "Manufacturing & Export", body: "Capability and specification pages plus country-level targeting for international buyers." },
  { name: "Finance & Insurance", body: "Trust-heavy explainer content, authority building and technically compliant page performance." },
  { name: "Travel & Hospitality", body: "Destination content, seasonal demand planning and optimised booking journeys." },
];

export const INDIA_OUTCOMES = [
  { k: "+61%", v: "Organic search sessions", note: "Three months after SEO handover" },
  { k: "+68%", v: "Search impressions", note: "Search Console, quarter on quarter" },
  { k: "+42%", v: "Organic clicks", note: "Same period, non-brand queries" },
  { k: "Top 3", v: "Priority keyword positions", note: "Commercial-intent terms" },
  { k: "4–6", v: "Weeks to first technical wins", note: "Crawl, speed and indexing fixes" },
  { k: "35+", v: "Countries served from India", note: "Including US, UK, UAE and Kenya" },
];

export const INDIA_DELIVERABLES = [
  {
    name: "Technical audit & fix list",
    detail:
      "A full crawl, index, speed and rendering audit at kickoff, scored by effort against expected impact so the highest-value fixes ship first.",
  },
  {
    name: "Keyword-to-page map",
    detail:
      "Every target query assigned to exactly one URL, with intent labelled, so money pages are never diluted or cannibalised by blog content.",
  },
  {
    name: "On-page optimisation",
    detail:
      "Titles, metas, headings, entity coverage and internal links rewritten on priority URLs, then reviewed again after the first ranking movement.",
  },
  {
    name: "Structured data",
    detail:
      "Organisation, service, product, article, FAQ and breadcrumb schema implemented and validated so search and AI surfaces can parse your pages.",
  },
  {
    name: "Editorial content production",
    detail:
      "A monthly publishing cadence of answer-first pages and refreshes of decaying content, written by people who understand your sector.",
  },
  {
    name: "Link acquisition & digital PR",
    detail:
      "Editorial outreach, expert commentary and original data pitched to relevant publishers. No PBNs, no bulk directories, no paid networks.",
  },
  {
    name: "Local SEO & citations",
    detail:
      "Google Business Profile optimisation, distinct locality pages, NAP consistency across Indian directories and a review generation workflow.",
  },
  {
    name: "Analytics & Search Console setup",
    detail:
      "Clean conversion tracking, event definitions and property configuration so every number in your report can be traced back to a source.",
  },
  {
    name: "Monthly performance report",
    detail:
      "Clicks, impressions, positions, leads and revenue mapped to specific pages — written in plain language a founder or CFO can read.",
  },
  {
    name: "Quarterly strategy review",
    detail:
      "A working session where winning patterns get more budget, weak ones are cut, and the roadmap is rewritten against what the data shows.",
  },
];


export const INDIA_FAQS = [
  {
    q: "How much do SEO services in India cost?",
    a: "Most ongoing SEO retainers in India sit between ₹25,000 and ₹1,50,000 per month, driven by competition, the number of pages in scope and how much content and link work is needed. A one-off audit is cheaper. We scope after the audit, so the number you get is based on your site rather than a package guess.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Technical wins can appear within four to six weeks. Meaningful movement in rankings, traffic and leads usually takes four to six months, and competitive national terms can take longer. Anyone promising page one in thirty days is either bidding on ads or planning to take risks with your domain.",
  },
  {
    q: "Can you guarantee a number one ranking on Google?",
    a: "No ethical agency can, because no agency controls the algorithm. What we commit to is a documented roadmap, work delivered on schedule and transparent reporting on keyword visibility, organic traffic and conversions.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. We have delivered projects in more than twenty countries, including the US, UK, UAE, Kenya and across Europe, with hreflang and country-level targeting where needed. Delivery runs on your working hours where overlap allows.",
  },
  {
    q: "What is the difference between SEO and AI search optimisation?",
    a: "Classic SEO wins a position in the ranked results. AI search optimisation makes your page the one an AI overview or assistant quotes. The foundations overlap — speed, structure, authority — but AI surfaces reward clear entities, direct answers near the top of the page and content that covers the full question cluster.",
  },
  {
    q: "Will you implement the changes or just send recommendations?",
    a: "We implement. ACSIUS is a development company as well as an SEO agency, so our team can push technical fixes, template changes and content directly on WordPress, Shopify, Magento and custom builds.",
  },
  {
    q: "Do you offer local SEO for a single city?",
    a: "Yes. For single-location businesses we focus on Google Business Profile, locality pages, citations and reviews. For multi-branch brands we build a scalable location template and track rankings by map grid rather than a single national position.",
  },
  {
    q: "What happens if we have been penalised or lost traffic?",
    a: "We start with a forensic review — algorithm-update timing, manual actions, toxic backlinks, thin or duplicated content, and technical regressions. Recovery work then targets the actual cause instead of layering new content over an unresolved problem.",
  },
];
