export const SMO_HERO = {
  eyebrow: "SMO Company in India · New Delhi · Since 2010",
  h1: ["Social media optimization", "that turns followers", "into pipeline."],
  lead:
    "ACSIUS is a social media optimization agency in India running SMO services for startups, SMBs and enterprise brands — optimised profiles, a planned content engine, community replies and reporting tied to leads, not likes.",
  support:
    "One team handles strategy, design, copy, scheduling and monthly measurement, so nothing stalls waiting on a freelancer.",
  badges: ["Profile optimisation", "Content engine", "Community management", "Monthly reporting"],
  stats: [
    { value: 240, suffix: "+", label: "Brands managed" },
    { value: 6, suffix: "", label: "Core platforms" },
    { value: 3, suffix: "x", label: "Avg. reach lift" },
    { value: 48, suffix: "h", label: "To first calendar" },
  ],
};

/** Horizontal chip tabs — platform playbooks */
export const SMO_PLATFORMS = [
  {
    key: "instagram",
    label: "Instagram",
    title: "Reels-first discovery",
    body:
      "Bio, highlights and grid rebuilt around one offer, then a weekly reel and carousel cadence built from what already earns saves.",
    ships: ["Profile rewrite", "Highlight covers", "8 reels / month", "12 carousels / month"],
    metric: "3.1x",
    metricLabel: "reach after 90 days",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    title: "Buyer-facing authority",
    body:
      "Company page plus founder profile optimised for search, with document posts and insight threads your sales team can reuse in outreach.",
    ships: ["Page + founder SEO", "12 posts / month", "Document carousels", "Comment strategy"],
    metric: "4.4%",
    metricLabel: "avg. engagement rate",
  },
  {
    key: "facebook",
    label: "Facebook",
    title: "Local demand capture",
    body:
      "Page, catalogue and review flow tuned for local search, with community posting that feeds your remarketing pools.",
    ships: ["Page optimisation", "Review workflow", "Local posting", "Audience seeding"],
    metric: "38%",
    metricLabel: "more page actions",
  },
  {
    key: "youtube",
    label: "YouTube",
    title: "Search-driven video",
    body:
      "Titles, descriptions, chapters and thumbnails built from keyword demand so shorts and long-form both keep earning views.",
    ships: ["Channel setup", "Keyword titles", "Thumbnail sets", "Shorts repurposing"],
    metric: "2.6x",
    metricLabel: "watch-time growth",
  },
  {
    key: "x",
    label: "X",
    title: "Fast, opinionated presence",
    body:
      "Daily short-form built from your team's real point of view, plus reply targeting on the accounts your buyers already read.",
    ships: ["Bio + pinned offer", "Daily posting", "Reply targeting", "Thread series"],
    metric: "5x",
    metricLabel: "profile visits",
  },
  {
    key: "pinterest",
    label: "Pinterest",
    title: "Evergreen product traffic",
    body:
      "Boards, rich pins and product feeds structured so retail and D2C catalogues keep pulling traffic months after publishing.",
    ships: ["Board architecture", "Rich pins", "Feed setup", "Seasonal pushes"],
    metric: "41%",
    metricLabel: "assisted sessions",
  },
];

/** Alternating editorial rows — what's inside SMO services */
export const SMO_TRACKS = [
  {
    no: "01",
    name: "Profile & handle optimisation",
    detail:
      "Every bio, banner, pinned post, link and category rewritten around one offer and one keyword set — the fastest win in any SMO engagement.",
    chips: ["Bio + keywords", "Banners", "Link hub", "Pinned offer"],
  },
  {
    no: "02",
    name: "Content engine",
    detail:
      "A rolling 30-day calendar of reels, carousels, static posts and stories, designed and written in-house, approved before anything publishes.",
    chips: ["Calendar", "Design", "Copy", "Approvals"],
  },
  {
    no: "03",
    name: "Community management",
    detail:
      "Comments, DMs and mentions answered inside working hours, with qualified conversations passed to your sales inbox the same day.",
    chips: ["Replies", "DM triage", "Lead handoff", "Escalations"],
  },
  {
    no: "04",
    name: "Hashtag & discovery research",
    detail:
      "Live tag sets per platform refreshed monthly from what actually reached new accounts, not a saved list from last year.",
    chips: ["Tag sets", "Trend watch", "Sound library", "Competitor scan"],
  },
  {
    no: "05",
    name: "Influencer & collaboration",
    detail:
      "Shortlists, briefs and rate negotiation for micro-creators in your sector, with a shared deliverables tracker.",
    chips: ["Shortlists", "Briefs", "Rates", "Tracking"],
  },
  {
    no: "06",
    name: "Reporting that names numbers",
    detail:
      "One monthly dashboard: reach, engagement, saves, profile visits, clicks and leads — plus what we change next month and why.",
    chips: ["GA4 linked", "Lead source", "Monthly call", "Next actions"],
  },
];

/** Interactive weekly calendar */
export const SMO_CALENDAR = [
  { day: "Mon", type: "Reel", note: "Hook-led product demo", platform: "Instagram" },
  { day: "Tue", type: "Insight", note: "Founder POV post", platform: "LinkedIn" },
  { day: "Wed", type: "Carousel", note: "How-it-works breakdown", platform: "Instagram" },
  { day: "Thu", type: "Short", note: "Repurposed clip + chapters", platform: "YouTube" },
  { day: "Fri", type: "Proof", note: "Client result / review", platform: "Facebook" },
  { day: "Sat", type: "Story", note: "Poll + behind the scenes", platform: "Instagram" },
  { day: "Sun", type: "Evergreen", note: "Board refresh / thread", platform: "Pinterest" },
];

/** Dark counters band */
export const SMO_IMPACT = [
  { value: 3, suffix: "x", label: "Organic reach", note: "Average lift across 90-day engagements." },
  { value: 62, suffix: "%", label: "More saves & shares", note: "The signals platforms reward most." },
  { value: 27, suffix: "%", label: "Cheaper paid CPA", note: "Warm audiences make ads cost less." },
  { value: 4, suffix: "h", label: "Reply time", note: "Median first response in working hours." },
];

/** 90-day roadmap */
export const SMO_ROADMAP = [
  {
    phase: "Days 1–7",
    title: "Audit & optimise",
    body: "Profile teardown across every handle, competitor benchmark and a fixed keyword set.",
  },
  {
    phase: "Days 8–21",
    title: "Calendar live",
    body: "First 30-day calendar approved, templates designed, posting and replies begin.",
  },
  {
    phase: "Days 22–45",
    title: "Format testing",
    body: "Four format bets per platform; we keep what earns saves and cut what doesn't.",
  },
  {
    phase: "Days 46–75",
    title: "Scale winners",
    body: "Winning hooks turned into series, creator collabs and repurposed shorts.",
  },
  {
    phase: "Days 76–90",
    title: "Report & re-scope",
    body: "Lead-level reporting, next-quarter plan and a written cost for any expansion.",
  },
];

export const SMO_SECTORS = [
  { name: "Healthcare", note: "Compliance-safe education content and review-led trust building." },
  { name: "Finance", note: "Explainer formats that simplify products without over-promising." },
  { name: "Retail & D2C", note: "Catalogue-led reels, UGC and seasonal launch pushes." },
  { name: "SaaS", note: "Feature stories, founder POV and demand-gen document posts." },
  { name: "Real estate", note: "Walkthrough video, locality content and enquiry DM flows." },
  { name: "Education", note: "Admission-cycle calendars, alumni proof and parent Q&A." },
  { name: "Travel", note: "Destination series, saves-optimised carousels and creator trips." },
  { name: "Manufacturing", note: "Plant, process and export credibility content for B2B buyers." },
];

export const SMO_COMPARE = {
  typical: {
    title: "Typical SMO vendor",
    points: [
      "Same 30 posts recycled across every client",
      "Reports that stop at follower count",
      "Comments and DMs left unanswered for days",
      "Hashtag list copied once, never refreshed",
      "No link between social activity and enquiries",
      "Design and copy outsourced to rotating freelancers",
    ],
  },
  acsius: {
    title: "ACSIUS SMO",
    points: [
      "Calendar built from your offer, sector and past winners",
      "Reporting down to clicks, enquiries and lead source",
      "Replies inside working hours, leads routed same day",
      "Tag and format research refreshed every month",
      "GA4 + UTM tracking wired from week one",
      "One in-house pod: strategist, designer, writer, manager",
    ],
  },
};

export const SMO_WHY = [
  {
    metric: "16",
    title: "Years in the work",
    body: "Delhi-based team running social for Indian and international brands since 2010.",
  },
  {
    metric: "1",
    title: "Accountable pod",
    body: "Strategist, designer, writer and community manager on one shared board.",
  },
  {
    metric: "48h",
    title: "First calendar",
    body: "Approved 30-day plan within two working days of kickoff.",
  },
  {
    metric: "0",
    title: "Lock-ins",
    body: "Month-to-month after the first quarter, with all assets handed over.",
  },
];

export const SMO_FAQS = [
  {
    q: "What does an SMO company in India actually do?",
    a: "An SMO company optimises everything organic about your social presence: profiles and handles, content formats, posting cadence, hashtags and discovery, community replies and measurement. At ACSIUS an SMO engagement covers profile optimisation, a rolling 30-day content calendar with design and copy, community management inside working hours, monthly research refreshes and reporting that ties activity to clicks and enquiries.",
  },
  {
    q: "How is SMO different from social media marketing or paid ads?",
    a: "SMO is the organic side — it improves how discoverable and credible your profiles and content are without media spend. Paid social buys reach. They work best together: strong optimised profiles and proven organic hooks make paid campaigns cheaper, which is why our clients typically see a lower cost per acquisition once SMO has been running for a quarter.",
  },
  {
    q: "How much do SMO services in India cost?",
    a: "Our SMO plans start at ₹24,000 per month for two platforms and 12 posts, ₹48,000 per month for four platforms with community management and format testing, and custom pricing for multi-brand or multi-location programmes. Every quote lists platforms, monthly deliverables, review cadence and reporting scope in writing before you commit.",
  },
  {
    q: "Which platforms do you cover as a social media optimization company in India?",
    a: "Instagram, LinkedIn, Facebook, YouTube, X and Pinterest. We recommend two to four platforms rather than all six, chosen by where your buyers already spend time — a B2B SaaS brand usually needs LinkedIn and YouTube, while a D2C retail brand does better on Instagram, Facebook and Pinterest.",
  },
  {
    q: "How long before SMO shows results?",
    a: "Profile optimisation shows measurable movement in profile visits and clicks within two to three weeks. Reach and engagement compound from week four as format testing identifies what your audience saves and shares, and enquiry-level results are typically clear by the end of the first 90-day cycle, which is also when we re-scope the plan.",
  },
  {
    q: "Do you handle content creation, or do we send it?",
    a: "We handle it end to end — strategy, design, copy, scheduling and replies. You approve the calendar once a month and send us raw material like product shots, founder clips or event footage when available. Brands with in-house creators can also use us in a hybrid model where we plan, optimise and report while your team shoots.",
  },
];
