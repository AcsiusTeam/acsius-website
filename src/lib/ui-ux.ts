export const UIUX_HERO = {
  eyebrow: "UI/UX Website Design Company · New Delhi, India · Since 2010",
  h1: ["UI/UX website design", "that turns attention", "into revenue."],
  lead:
    "ACSIUS is a UI/UX web design agency delivering UI/UX website design services for startups, SMBs and enterprise teams — research, wireframes, high-fidelity UI, prototypes and a design system your developers can ship.",
  support:
    "Every engagement starts with real user evidence and ends with build-ready Figma files, tokens and a handoff call — not a pretty deck.",
  badges: ["User research", "Design systems", "Prototypes", "WCAG 2.2 AA"],
  stats: [
    { value: 420, suffix: "+", label: "Screens designed" },
    { value: 12, suffix: "", label: "Product designers" },
    { value: 38, suffix: "%", label: "Avg. CVR lift" },
    { value: 72, suffix: "h", label: "To first concept" },
  ],
};

/** Segmented stage explorer: wireframe → UI → prototype → system */
export const UIUX_STAGES = [
  {
    key: "research",
    label: "Research",
    title: "Evidence before pixels",
    body:
      "Heatmaps, session replays, funnel drop-offs and 5–8 user interviews tell us which screens lose money. That list becomes the design brief.",
    outputs: ["Journey map", "Friction log", "Persona brief", "Priority screens"],
    metric: "5–8",
    metricLabel: "user interviews",
  },
  {
    key: "wireframe",
    label: "Wireframes",
    title: "Structure you can argue with",
    body:
      "Low-fidelity layouts for every key template so hierarchy, content order and CTA placement are agreed before anyone picks a colour.",
    outputs: ["Grey-box flows", "Content hierarchy", "CTA placement", "Edge cases"],
    metric: "2",
    metricLabel: "review rounds included",
  },
  {
    key: "ui",
    label: "UI design",
    title: "High-fidelity, on-brand screens",
    body:
      "Typography scale, colour tokens, spacing rhythm and component states — designed responsive-first for mobile, tablet and desktop.",
    outputs: ["Desktop + mobile UI", "Component states", "Motion notes", "Dark mode (optional)"],
    metric: "3",
    metricLabel: "breakpoints per screen",
  },
  {
    key: "prototype",
    label: "Prototype",
    title: "Clickable before it is coded",
    body:
      "An interactive Figma prototype your team and five real users can walk through, so navigation and form logic are validated pre-build.",
    outputs: ["Clickable flows", "Usability test notes", "Fix list", "Stakeholder demo"],
    metric: "5",
    metricLabel: "usability testers",
  },
  {
    key: "system",
    label: "Design system",
    title: "Handoff developers thank you for",
    body:
      "Tokens, variants, auto-layout and documented rules mapped to your front-end framework, with a live handoff call and two weeks of build support.",
    outputs: ["Token library", "Component docs", "Handoff call", "Build QA"],
    metric: "100%",
    metricLabel: "components documented",
  },
];

/** Bento deliverables */
export const UIUX_DELIVERABLES = [
  {
    name: "Website UI/UX design",
    detail: "Marketing sites, product pages and lead funnels designed around one conversion goal.",
    tag: "Web",
    size: "lg" as const,
  },
  {
    name: "SaaS & dashboard UX",
    detail: "Data-dense screens, tables, filters and empty states that stay readable at scale.",
    tag: "Product",
    size: "sm" as const,
  },
  {
    name: "Mobile app UI",
    detail: "iOS and Android flows with native patterns and gesture-friendly targets.",
    tag: "App",
    size: "sm" as const,
  },
  {
    name: "Design systems",
    detail: "Tokens, components and documentation that keep every future page on brand.",
    tag: "System",
    size: "md" as const,
  },
  {
    name: "UX audits & CRO",
    detail: "A scored teardown of your current site with a ranked, effort-tagged fix list.",
    tag: "Audit",
    size: "md" as const,
  },
  {
    name: "Accessibility design",
    detail: "Contrast, focus order, labels and keyboard paths checked against WCAG 2.2 AA.",
    tag: "A11y",
    size: "sm" as const,
  },
];

/** Animated audit scorecard */
export const UIUX_SCORES = [
  { label: "First-impression clarity", before: 38, after: 92 },
  { label: "Mobile usability", before: 44, after: 96 },
  { label: "Form & checkout flow", before: 31, after: 88 },
  { label: "Accessibility (WCAG 2.2 AA)", before: 47, after: 98 },
  { label: "Visual consistency", before: 35, after: 94 },
];

/** Zigzag process */
export const UIUX_PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    body: "45 minutes on your audience, funnel numbers and the screens that matter most.",
    duration: "Day 1",
    ship: "Design brief",
  },
  {
    step: "02",
    title: "Research & audit",
    body: "Analytics, replays and interviews turn opinions into a ranked friction list.",
    duration: "Week 1",
    ship: "Friction report",
  },
  {
    step: "03",
    title: "Wireframes",
    body: "Grey-box layouts for every template, reviewed together before visual design.",
    duration: "Week 2",
    ship: "Wireframe set",
  },
  {
    step: "04",
    title: "UI & prototype",
    body: "High-fidelity screens plus a clickable prototype tested with five users.",
    duration: "Weeks 3–4",
    ship: "Figma prototype",
  },
  {
    step: "05",
    title: "System & handoff",
    body: "Tokens, component docs, a live walkthrough and two weeks of build support.",
    duration: "Week 5",
    ship: "Handoff kit",
  },
];

export const UIUX_SECTORS = [
  { name: "Healthcare", note: "Trust-first layouts, appointment and intake flows." },
  { name: "Finance", note: "Dense data made calm, compliant disclosure patterns." },
  { name: "Retail & DTC", note: "PDP, cart and bundle UX built for basket size." },
  { name: "SaaS", note: "Onboarding, activation and settings that reduce churn." },
  { name: "Education", note: "Course discovery, enquiry and portal dashboards." },
  { name: "Real estate", note: "Search, filters and listing detail that convert." },
  { name: "Manufacturing", note: "Catalogue, spec sheets and RFQ journeys." },
  { name: "Logistics", note: "Tracking, ops dashboards and exception handling." },
];

export const UIUX_MODELS = [
  {
    name: "Design sprint",
    price: "Fixed scope",
    note: "One flow or landing system designed, prototyped and tested in two weeks.",
    points: [
      "Research, wireframes, UI and prototype",
      "Two review rounds included",
      "Fixed price agreed up front",
    ],
    highlight: true,
  },
  {
    name: "Full site design",
    price: "Milestone based",
    note: "Complete UI/UX website design with a system your developers can extend.",
    points: [
      "Every template across 3 breakpoints",
      "Design system with tokens and docs",
      "Build support during development",
    ],
  },
  {
    name: "Dedicated designer",
    price: "Monthly retainer",
    note: "A product designer embedded in your team, on your board and standups.",
    points: [
      "160 hrs/month, 4+ hours overlap",
      "Continuous CRO and UX experiments",
      "Scale or pause with 2 weeks' notice",
    ],
  },
];

export const UIUX_COMPARE = {
  typical: {
    title: "Typical template-led web design agency",
    points: [
      "A theme recoloured and called a redesign",
      "No research, so layout decisions are opinions",
      "Flat JPEG mockups with no component states",
      "Mobile designed last, or never",
      "Handoff is a Figma link and silence",
    ],
  },
  acsius: {
    title: "ACSIUS UI/UX design studio",
    points: [
      "Research-led screens tied to funnel numbers",
      "Wireframes signed off before visual design",
      "Documented components, states and tokens",
      "Mobile, tablet and desktop in every round",
      "Live handoff call plus two weeks of build QA",
    ],
  },
};

export const UIUX_WHY = [
  {
    metric: "16",
    title: "Years designing for the web",
    body: "A senior bench that has shipped 420+ screens across 20+ industries since 2010.",
  },
  {
    metric: "38%",
    title: "Average conversion lift",
    body: "Measured against a pre-redesign baseline we record before design starts.",
  },
  {
    metric: "AA",
    title: "Accessibility by default",
    body: "Contrast, focus and keyboard paths checked against WCAG 2.2 AA in every file.",
  },
  {
    metric: "72h",
    title: "First concept turnaround",
    body: "A direction on your real content within three working days of the brief.",
  },
];

export const UIUX_FAQS = [
  {
    q: "What do your UI/UX website design services include?",
    a: "Research and analytics review, journey mapping, wireframes for every key template, high-fidelity responsive UI, a clickable prototype, usability testing with five users, and a documented design system with tokens and component states. Handoff includes a live walkthrough and two weeks of build support.",
  },
  {
    q: "How long does a UI/UX website design project take?",
    a: "A focused design sprint for one flow or landing system takes about two weeks. A full marketing website is typically four to six weeks, and a SaaS product or dashboard is six to ten weeks depending on the number of unique screens and testing rounds.",
  },
  {
    q: "Why choose a UI/UX website design company in India?",
    a: "You get senior product designers at a fraction of US or EU rates with four or more hours of daily overlap with your timezone. ACSIUS works in New Delhi with English-first documentation, weekly demos and written scope, so you keep the cost advantage without losing control.",
  },
  {
    q: "Do you design only, or can you build the site too?",
    a: "Both. Many clients take the Figma files and design system to their own developers. If you prefer one accountable team, our WordPress, Shopify, Laravel, PHP and React benches build the same designs pixel-accurately with the designer still reviewing each sprint.",
  },
  {
    q: "How do you measure whether the new design works?",
    a: "Before design starts we record a baseline: conversion rate, bounce, scroll depth, form completion and Core Web Vitals. After launch we compare the same metrics for 30 days and ship a prioritised list of follow-up experiments.",
  },
  {
    q: "What do you need from us to start?",
    a: "Access to analytics, your current site or product, brand assets if they exist, and one decision-maker for reviews. That is enough for the discovery call and a first concept within 72 hours.",
  },
];
