export const ORM_HERO = {
  eyebrow: "Online Reputation Management Company India · Since 2010",
  h1: ["Online reputation", "management that changes", "what page one says."],
  lead:
    "ACSIUS is an online reputation management company in India that monitors every mention, pushes down damaging results, rebuilds review ratings and gives your brand a page one you would happily show a customer.",
  support:
    "Listening, suppression, review generation and crisis response run as one programme from a single accountable team in New Delhi.",
  badges: ["Review growth", "SERP suppression", "24x7 listening", "Crisis desk"],
  stats: [
    { value: 240, suffix: "+", label: "Brands protected" },
    { value: 92, suffix: "%", label: "Negatives suppressed" },
    { value: 3, suffix: "x", label: "Owned page-one slots" },
    { value: 24, suffix: "h", label: "Crisis response" },
  ],
};

/** Sidebar-style service explorer */
export const ORM_SERVICES = [
  {
    key: "listening",
    icon: "◉",
    label: "Monitoring",
    title: "Know the mention before your customer does",
    body:
      "Always-on tracking across search, review sites, news, forums, YouTube and social so nothing reaches page one unnoticed.",
    ships: ["Brand & exec alerts", "Review site tracking", "Sentiment scoring", "Weekly mention digest"],
    metric: "24x7",
    metricLabel: "listening coverage",
  },
  {
    key: "suppression",
    icon: "▼",
    label: "Search suppression",
    title: "Push damaging results off page one",
    body:
      "Legitimate content, owned assets and authority profiles built and optimised until the harmful URL slips past where anyone looks.",
    ships: ["Owned asset build-out", "Authority profiles", "Keyword-level tracking", "Position reporting"],
    metric: "92%",
    metricLabel: "results moved off page one",
  },
  {
    key: "reviews",
    icon: "★",
    label: "Review growth",
    title: "Turn quiet happy customers into ratings",
    body:
      "Compliant review request flows across Google, Glassdoor, Trustpilot and marketplaces, plus a response playbook for every star level.",
    ships: ["Request automation", "Response templates", "Glassdoor & Google", "Rating dashboards"],
    metric: "4.6★",
    metricLabel: "median rating reached",
  },
  {
    key: "removal",
    icon: "✕",
    label: "Removal requests",
    title: "Take down what genuinely violates policy",
    body:
      "Policy-based removal and de-indexing requests for fake reviews, doxxed data and defamatory posts, documented and escalated properly.",
    ships: ["Policy violation filing", "Fake review flagging", "De-index requests", "Legal coordination"],
    metric: "1.7k",
    metricLabel: "items removed to date",
  },
  {
    key: "content",
    icon: "✎",
    label: "Positive content",
    title: "Give search something better to rank",
    body:
      "Founder profiles, PR features, thought-leadership articles and knowledge panels that outrank the noise on your own name.",
    ships: ["Founder & brand PR", "Knowledge panel", "Wikipedia-grade sourcing", "Editorial placements"],
    metric: "3.1x",
    metricLabel: "more owned page-one slots",
  },
  {
    key: "crisis",
    icon: "⚡",
    label: "Crisis desk",
    title: "A plan already written for the bad week",
    body:
      "Holding statements, escalation ladder, comment moderation and hourly sentiment tracking from the moment a story breaks.",
    ships: ["Holding statements", "Escalation ladder", "Comment moderation", "Hourly sentiment"],
    metric: "< 24h",
    metricLabel: "to first response plan",
  },
  {
    key: "social",
    icon: "☏",
    label: "Social cleanup",
    title: "Profiles that look verified and alive",
    body:
      "Handle claiming, impostor takedowns, bio and highlight cleanup, and moderation rules so old posts stop resurfacing.",
    ships: ["Impostor takedowns", "Handle claiming", "Moderation rules", "Profile refresh"],
    metric: "0",
    metricLabel: "unclaimed brand handles",
  },
  {
    key: "exec",
    icon: "◈",
    label: "Executive ORM",
    title: "Protect the people, not just the logo",
    body:
      "Personal search results for founders, directors and doctors — data-broker removals, profile control and name-search cleanup.",
    ships: ["Data-broker removals", "Name-search cleanup", "Profile control", "Pre-funding audits"],
    metric: "48h",
    metricLabel: "to first audit report",
  },
];

/** Role switcher — who logs in and what they see */
export const ORM_VIEWS = [
  {
    key: "founder",
    label: "Founder",
    headline: "One score for how the brand looks",
    lines: [
      "Reputation score with month-on-month movement",
      "Page one snapshot for brand and founder searches",
      "Escalations that actually need a decision",
    ],
  },
  {
    key: "marketing",
    label: "Marketing",
    headline: "Sentiment tied to campaigns",
    lines: [
      "Mention volume and tone by channel",
      "Which content is winning page-one slots",
      "Review velocity against target rating",
    ],
  },
  {
    key: "hr",
    label: "HR & talent",
    headline: "Employer brand you can hire on",
    lines: [
      "Glassdoor, AmbitionBox and Indeed tracking",
      "Response drafts approved by legal",
      "Alumni sentiment before hiring drives",
    ],
  },
  {
    key: "support",
    label: "Support",
    headline: "Complaints closed in public",
    lines: [
      "Negative reviews routed with ticket context",
      "Approved response snippets per issue type",
      "Follow-up nudge once the issue is fixed",
    ],
  },
  {
    key: "legal",
    label: "Legal",
    headline: "A documented paper trail",
    lines: [
      "Every removal request logged with evidence",
      "Defamation escalation checklist",
      "Archived screenshots with timestamps",
    ],
  },
];

/** Horizontal repair flow */
export const ORM_FLOW = [
  { step: "01", title: "Audit", note: "Every page-one result, review site and mention scored." },
  { step: "02", title: "Triage", note: "What can be removed, what must be outranked." },
  { step: "03", title: "Build", note: "Owned assets, PR and profiles created to rank." },
  { step: "04", title: "Suppress", note: "Harmful URLs pushed past page one, tracked weekly." },
  { step: "05", title: "Sustain", note: "Review flow and listening keep the gain in place." },
];

export const ORM_SECTORS = [
  { name: "Healthcare & clinics", note: "Doctor name searches, patient reviews and practice listings." },
  { name: "Hospitality", note: "Google, TripAdvisor and OTA ratings that drive bookings." },
  { name: "Real estate", note: "Project-name searches, RERA chatter and buyer forums." },
  { name: "Finance & NBFC", note: "Complaint forums, regulator mentions and trust signals." },
  { name: "Education", note: "Admission-season searches, parent groups and alumni posts." },
  { name: "D2C & retail", note: "Marketplace ratings, unboxing videos and returns chatter." },
  { name: "IT & SaaS", note: "G2, Clutch and Glassdoor for buyers and candidates alike." },
  { name: "Founders & execs", note: "Personal search results before funding, press or hiring." },
];

export const ORM_ENGAGE = {
  managed: {
    title: "Managed ORM programme",
    tag: "Recommended",
    points: [
      "Monthly retainer with a named strategist",
      "Monitoring, suppression, reviews and PR together",
      "Weekly position and sentiment reporting",
      "Crisis desk on standby at no extra fee",
    ],
  },
  crisis: {
    title: "Crisis & cleanup sprint",
    tag: "For an active fire",
    points: [
      "Kick-off within 24 hours of approval",
      "Fixed-scope 60 to 90 day repair sprint",
      "Daily standups while the story is live",
      "Handover plan to keep results stable",
    ],
  },
};

export const ORM_TRUST = [
  { title: "White-hat only", body: "No fake reviews, no bots, no paid takedown brokers — ever." },
  { title: "Evidence logged", body: "Screenshots, filings and rank history archived with timestamps." },
  { title: "NDA by default", body: "Signed before the audit; access limited to your named team." },
  { title: "You own the assets", body: "Every profile, page and login is created in your name." },
];

export const ORM_IMPACT = [
  { value: 92, suffix: "%", label: "Negatives suppressed", note: "Harmful URLs moved off page one within two quarters." },
  { value: 3, suffix: "x", label: "Owned page-one slots", note: "Your properties replace forums and complaint sites." },
  { value: 1700, suffix: "+", label: "Items removed", note: "Fake reviews, impostor profiles and policy-violating posts." },
  { value: 24, suffix: "h", label: "Crisis response", note: "Holding statement and action plan inside a day." },
];

export const ORM_PHASES = [
  {
    phase: "Week 1",
    title: "Reputation audit",
    body: "Page-one mapping, review inventory, sentiment baseline and a ranked risk list.",
  },
  {
    phase: "Week 2",
    title: "Triage & takedowns",
    body: "Policy-based removal filings, impostor reports and profile claiming start immediately.",
  },
  {
    phase: "Weeks 3-6",
    title: "Asset build-out",
    body: "Owned pages, founder profiles, PR features and review request flows go live.",
  },
  {
    phase: "Weeks 7-12",
    title: "Suppression",
    body: "Harmful results pushed down with weekly keyword-level position reporting.",
  },
  {
    phase: "Ongoing",
    title: "Listening & defence",
    body: "24x7 alerts, monthly reviews and a crisis desk that already knows your brand.",
  },
];

export const ORM_COMPARE = {
  typical: {
    title: "Typical ORM vendor",
    points: [
      "Posts fake five-star reviews that get filtered",
      "Promises guaranteed removal of anything",
      "Reports mention counts instead of page-one positions",
      "Disappears when a real crisis starts",
      "Builds assets on their own accounts, not yours",
      "No record of what was filed or when",
    ],
  },
  acsius: {
    title: "ACSIUS reputation management",
    points: [
      "Compliant review generation from real customers",
      "Honest split of what can be removed vs outranked",
      "Weekly page-one position and sentiment reporting",
      "Crisis desk included in the retainer",
      "Every asset and login created in your name",
      "Timestamped evidence archive for legal use",
    ],
  },
};

export const ORM_WHY = [
  { metric: "16", title: "Years in search", body: "SEO-native team — suppression is ranking work done right." },
  { metric: "240+", title: "Brands protected", body: "Clinics, hotels, NBFCs, D2C brands and founders across India." },
  { metric: "8", title: "Service tracks", body: "Monitoring to crisis, run as one programme not silos." },
  { metric: "0", title: "Black-hat tactics", body: "Nothing that risks a filter, penalty or defamation claim." },
];

export const ORM_FAQS = [
  {
    q: "What does an online reputation management company actually do?",
    a: "An online reputation management company controls what people find when they search your brand or your name. That means monitoring every mention across search, review sites, news and social; filing policy-based removals for content that genuinely violates platform rules; generating real reviews to lift your rating; and building and optimising legitimate owned content so damaging results are outranked and pushed off page one. Our ORM services in India combine all of that into one programme with weekly reporting.",
  },
  {
    q: "Can you remove negative reviews and articles completely?",
    a: "Only when the content breaks a platform policy or the law — fake reviews, doxxed personal data, impersonation or clearly defamatory posts. We file those properly with evidence and escalate where needed. Anything else, including a genuine unhappy customer or a legitimate news article, cannot honestly be removed, so we outrank and suppress it instead. Any reputation management company promising guaranteed removal of everything is either overcharging or using tactics that backfire.",
  },
  {
    q: "How long does online reputation management take to show results?",
    a: "Removals and profile cleanup can land in the first two weeks. Review ratings usually move visibly within 6 to 8 weeks once request flows are live. Search suppression is ranking work, so page-one movement typically starts around week 8 and consolidates across a 3 to 6 month programme, depending on how authoritative the harmful URL is and how competitive your brand name search is.",
  },
  {
    q: "Do you post fake reviews or use bots?",
    a: "Never. Fake reviews get filtered by Google and Trustpilot, can trigger penalties, and in India can attract consumer-protection action. We only run compliant review request flows to your real customers, plus response playbooks so every review gets an on-brand reply. That is what produces a rating that holds instead of one that collapses at the next platform audit.",
  },
  {
    q: "What do ORM services in India cost?",
    a: "Managed ORM runs as a monthly retainer scoped to the number of harmful results, review platforms and languages involved, and whether executive or personal search cleanup is included. Active crises are quoted as a fixed 60 to 90 day sprint. Either way you get a written scope listing deliverables, reporting cadence and exit terms before work begins — starting with a paid-nothing reputation audit of your current page one.",
  },
  {
    q: "Will you work with our PR and legal teams?",
    a: "Yes, and it works best that way. We hand your legal team a timestamped evidence archive of every filing, screenshot and rank change, and we align holding statements and escalation ladders with your PR agency or in-house comms before anything is published. During a live crisis we join your daily standup rather than running a parallel process.",
  },
];
