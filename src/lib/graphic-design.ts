export const GD_HERO = {
  eyebrow: "Graphic Design Company India",
  h1: ["Design that sells,", "not just decorates."],
  lead:
    "ACSIUS is a graphic design agency in India delivering brand identity, marketing creatives and packaging for startups, SMBs and enterprise teams worldwide.",
  support:
    "One senior designer, one art director, fixed turnaround. Outsource graphic design without losing control of quality.",
  stats: [
    { value: 16, suffix: "+", label: "Years designing" },
    { value: 40, suffix: "+", label: "Brands identified" },
    { value: 48, suffix: "h", label: "First concepts" },
    { value: 3, suffix: "", label: "Free revisions" },
  ],
};

export const GD_DELIVERABLES = [
  {
    name: "Brand Identity",
    detail: "Logo systems, colour, type scale and a usage guide your team can follow.",
    tag: "Identity",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Marketing Creatives",
    detail: "Ad sets, banners and social kits built per channel spec.",
    tag: "Performance",
    span: "",
  },
  {
    name: "Packaging & Print",
    detail: "Dielines, labels and print-ready artwork with pre-press checks.",
    tag: "Print",
    span: "",
  },
  {
    name: "Pitch & Sales Decks",
    detail: "Investor and sales decks with a reusable master template.",
    tag: "Decks",
    span: "lg:col-span-2",
  },
  {
    name: "UI & Web Graphics",
    detail: "Landing page visuals, icon sets and illustrations for dev handoff.",
    tag: "Digital",
    span: "lg:col-span-2",
  },
  {
    name: "Motion & Video Cuts",
    detail: "Short animated logos, reels and explainer edits from your stills.",
    tag: "Motion",
    span: "lg:col-span-2",
  },
];

export const GD_STYLES = [
  {
    name: "Minimal Editorial",
    note: "Whitespace, restrained palette, typography does the talking.",
    fits: "SaaS, consulting, premium services",
    swatches: ["#101828", "#475467", "#EAECF0", "#F97316"],
  },
  {
    name: "Bold Commerce",
    note: "High contrast, big claims, thumb-stopping ad frames.",
    fits: "D2C, retail, marketplaces",
    swatches: ["#111827", "#F97316", "#FDE68A", "#FFFFFF"],
  },
  {
    name: "Clinical Trust",
    note: "Calm blues, generous spacing, compliance-safe layouts.",
    fits: "Healthcare, finance, insurance",
    swatches: ["#0B3B7A", "#2E6FD1", "#DBEAFE", "#FFFFFF"],
  },
  {
    name: "Craft & Heritage",
    note: "Texture, warm neutrals and hand-set detail for artisan brands.",
    fits: "F&B, hospitality, lifestyle",
    swatches: ["#3F2A17", "#A9713F", "#E7D9C4", "#F5F1EA"],
  },
];

export const GD_PROCESS = [
  {
    step: "01",
    title: "Brief & references",
    body: "A 30-minute call plus a short form. You show us three brands you admire and three you do not.",
    ship: "Signed-off creative brief",
    duration: "Day 1",
  },
  {
    step: "02",
    title: "Direction routes",
    body: "Two or three distinct visual routes as real layouts — never a mood board dump.",
    ship: "Concept routes",
    duration: "Day 2-4",
  },
  {
    step: "03",
    title: "Refine one route",
    body: "You pick a direction. We push type, colour and composition until it holds at every size.",
    ship: "Master artwork",
    duration: "Day 5-7",
  },
  {
    step: "04",
    title: "Scale the system",
    body: "The chosen route is rolled out across every asset in scope with consistent rules.",
    ship: "Full asset set",
    duration: "Week 2",
  },
  {
    step: "05",
    title: "Handoff & source files",
    body: "Editable source files, export presets and a one-page usage guide. No vendor lock-in.",
    ship: "Source + guide",
    duration: "Delivery",
  },
];

export const GD_OUTSOURCE = {
  rows: [
    {
      label: "Turnaround",
      typical: "Waiting a week for a first look",
      acsius: "First concepts inside 48 hours",
    },
    {
      label: "Who designs",
      typical: "Rotating junior pool",
      acsius: "A named senior designer plus art director",
    },
    {
      label: "Revisions",
      typical: "Billed per round, vaguely scoped",
      acsius: "Three revisions written into the scope",
    },
    {
      label: "Files you get",
      typical: "Flattened JPGs only",
      acsius: "Editable source, vectors and export presets",
    },
    {
      label: "Consistency",
      typical: "Every asset looks like a new brand",
      acsius: "One system, documented rules",
    },
    {
      label: "Communication",
      typical: "Email ping-pong across time zones",
      acsius: "Shared board, overlap hours with IST/EST/GMT",
    },
  ],
};

export const GD_INDUSTRIES = [
  { name: "Healthcare", angle: "Patient-safe claims, clean iconography, print and clinic signage.", focus: "Trust first" },
  { name: "Finance", angle: "Data-heavy decks, compliance-ready layouts, restrained palettes.", focus: "Clarity" },
  { name: "Retail & D2C", angle: "Packaging, festive campaigns and high-volume ad refreshes.", focus: "Shelf appeal" },
  { name: "SaaS & Tech", angle: "Product illustration, feature graphics and launch kits.", focus: "Explainability" },
  { name: "Real Estate", angle: "Brochures, floor-plan styling and site hoarding artwork.", focus: "Aspiration" },
  { name: "Education", angle: "Course covers, admission campaigns and bilingual collateral.", focus: "Readability" },
];

export const GD_PLANS = [
  {
    name: "One-off project",
    price: "Fixed quote",
    note: "A defined deliverable: identity, packaging or a deck.",
    points: ["Scoped in writing", "2-3 concept routes", "Source files on delivery"],
    highlight: false,
  },
  {
    name: "Design retainer",
    price: "Monthly block",
    note: "A steady stream of marketing creatives and campaign assets.",
    points: ["Named senior designer", "Priority queue", "Rolling asset calendar"],
    highlight: true,
  },
  {
    name: "Dedicated designer",
    price: "Full-time",
    note: "Outsource graphic design as an extension of your in-house team.",
    points: ["Your tools and standups", "Overlap hours you choose", "Monthly quality review"],
    highlight: false,
  },
];

export const GD_WHY = [
  {
    metric: "48h",
    title: "Concepts, fast",
    body: "You see real layouts in two days, not a status update.",
    proof: "Standard for identity and campaign briefs signed before noon IST.",
  },
  {
    metric: "1",
    title: "One accountable lead",
    body: "The designer who drew it is the designer you talk to.",
    proof: "No account-manager relay, no brief drift between rounds.",
  },
  {
    metric: "100%",
    title: "Source files, always",
    body: "Vectors, layered files and export presets ship with every project.",
    proof: "Written into the contract — nothing is held back as leverage.",
  },
  {
    metric: "16+",
    title: "Years of studio craft",
    body: "Print, packaging and digital under one roof since 2009.",
    proof: "Pre-press, dielines and dev handoff handled by the same team.",
  },
];

export const GD_FAQS = [
  {
    q: "What makes ACSIUS one of the best graphic design services in India?",
    a: "A senior designer owns your brief end to end, first concepts land within 48 hours, and every project ships with editable source files. You get studio-level craft with the responsiveness of a small team.",
  },
  {
    q: "What does your graphic design services India pricing look like?",
    a: "One-off projects are quoted as a fixed fee after a short brief. Retainers are a monthly block of design hours, and dedicated designers are billed full-time. Every option is scoped in writing before work starts.",
  },
  {
    q: "Can we outsource graphic design to you long term?",
    a: "Yes. Most clients start with one project, then move to a retainer or a dedicated designer who joins your standups, uses your tools and follows your brand rules.",
  },
  {
    q: "How many revisions are included?",
    a: "Three revision rounds on the selected direction are included in every scope. Additional rounds are quoted transparently before we begin them.",
  },
  {
    q: "Do you work with international time zones?",
    a: "We overlap daily with IST, GMT and EST hours, and we work with clients across India, the US, UK, UAE and Australia.",
  },
  {
    q: "Which files and formats do you deliver?",
    a: "Editable AI, PSD or Figma sources plus print-ready PDF/X, CMYK artwork with bleed, and web-optimised PNG, JPG and SVG exports.",
  },
  {
    q: "Do you also design for print and packaging?",
    a: "Yes. We handle dielines, labels, brochures and large-format artwork, including pre-press checks and coordination with your printer.",
  },
  {
    q: "How do we get started with your graphic design agency?",
    a: "Send your brief or book a call. You receive a written scope with deliverables, timeline and cost within one working day, and design starts as soon as it is approved.",
  },
];
