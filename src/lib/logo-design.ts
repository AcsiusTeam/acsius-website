export const LD_HERO = {
  eyebrow: "Logo Design Company in India",
  h1: ["A mark that works", "at 16px and on a wall."],
  lead:
    "ACSIUS delivers creative logo design and full identity kits for founders, D2C brands and enterprise teams — drawn in vector, tested at every size.",
  support:
    "One senior designer, three routes, fixed turnaround. Logo design services in India without the template mills.",
  stats: [
    { value: 16, suffix: "+", label: "Years drawing marks" },
    { value: 40, suffix: "+", label: "Identities shipped" },
    { value: 48, suffix: "h", label: "First routes" },
    { value: 100, suffix: "%", label: "Vector source files" },
  ],
};

export const LD_MARKS = [
  {
    name: "Wordmark",
    note: "The name itself, custom-set. Strongest when the name is short and ownable.",
    fits: "Consulting, SaaS, premium services",
    sample: "NORTHWIND",
    kind: "word",
  },
  {
    name: "Lettermark",
    note: "A monogram built from initials — compact, ideal for app icons and stamps.",
    fits: "Finance, legal, institutions",
    sample: "NW",
    kind: "letter",
  },
  {
    name: "Pictorial",
    note: "One recognisable object, simplified until it survives a favicon.",
    fits: "D2C, food, travel, apps",
    sample: "◈",
    kind: "picto",
  },
  {
    name: "Abstract + Combination",
    note: "A geometric mark locked to the wordmark, with a stacked and horizontal lockup.",
    fits: "Tech, manufacturing, healthcare",
    sample: "⬡",
    kind: "combo",
  },
];

export const LD_KIT = [
  {
    name: "Primary Logo & Lockups",
    detail: "Horizontal, stacked and icon-only versions, optically balanced by hand.",
    tag: "Core",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Favicon & App Icon",
    detail: "16px, 32px and 512px cuts that stay legible.",
    tag: "Digital",
    span: "",
  },
  {
    name: "Colour & Mono Sets",
    detail: "Full colour, one-colour, reversed and greyscale.",
    tag: "Variants",
    span: "",
  },
  {
    name: "Type & Colour System",
    detail: "Typeface pairing, hex/CMYK/Pantone values and a usage scale.",
    tag: "System",
    span: "lg:col-span-2",
  },
  {
    name: "Logo Usage Guide",
    detail: "Clear space, minimum size, do-and-don't pages your team can follow.",
    tag: "Guide",
    span: "lg:col-span-2",
  },
  {
    name: "Source & Export Pack",
    detail: "AI, SVG, EPS, PDF plus PNG cuts for web, print and social.",
    tag: "Files",
    span: "lg:col-span-2",
  },
];

export const LD_STRESS = [
  { label: "Favicon 16px", note: "Icon still reads in a crowded tab bar.", size: 16 },
  { label: "App icon", note: "Safe area respected, no clipped strokes.", size: 44 },
  { label: "Business card", note: "Prints clean in single-colour foil.", size: 72 },
  { label: "Signage", note: "Holds proportion blown up 40x on a facade.", size: 140 },
];

export const LD_PROCESS = [
  {
    step: "01",
    title: "Brand discovery",
    body: "A 30-minute call plus a short form: audience, competitors, three marks you admire and three you do not.",
    ship: "Signed-off creative brief",
    duration: "Day 1",
  },
  {
    step: "02",
    title: "Sketch to vector",
    body: "Hand sketches narrowed to the strongest ideas, then redrawn on a grid in vector.",
    ship: "Shortlisted sketches",
    duration: "Day 2-3",
  },
  {
    step: "03",
    title: "Three routes",
    body: "Three distinct logo directions presented in context — sign, packaging, app icon, website header.",
    ship: "Concept routes",
    duration: "Day 4-5",
  },
  {
    step: "04",
    title: "Refine the winner",
    body: "Curves, spacing and optical weight tuned until the mark holds at every size and in one colour.",
    ship: "Master logo",
    duration: "Week 2",
  },
  {
    step: "05",
    title: "Kit & handoff",
    body: "Full variant set, usage guide and every source file. No vendor lock-in, no watermarks.",
    ship: "Source + guide",
    duration: "Delivery",
  },
];

export const LD_COMPARE = {
  rows: [
    {
      label: "Where it comes from",
      typical: "Stock icon nudged in a template maker",
      acsius: "Drawn from sketches on a vector grid",
    },
    {
      label: "How many routes",
      typical: "One idea, take it or leave it",
      acsius: "Three distinct directions, shown in context",
    },
    {
      label: "Small sizes",
      typical: "Turns to mud below 32px",
      acsius: "Tested at 16px favicon before sign-off",
    },
    {
      label: "One-colour use",
      typical: "Falls apart without gradients",
      acsius: "Mono, reversed and stamp versions included",
    },
    {
      label: "Files delivered",
      typical: "A single flattened PNG",
      acsius: "AI, SVG, EPS, PDF plus every PNG cut",
    },
    {
      label: "After delivery",
      typical: "Silence, then paid re-exports",
      acsius: "Usage guide plus free format cuts for a year",
    },
  ],
};

export const LD_SECTORS = [
  { name: "Startups & SaaS", angle: "A mark that survives an app icon, an OG image and a pitch deck.", focus: "Scalable" },
  { name: "D2C & Retail", angle: "Shelf-ready marks with packaging and label lockups.", focus: "Shelf appeal" },
  { name: "Healthcare", angle: "Calm, legible symbols for clinics, labs and signage.", focus: "Trust" },
  { name: "Finance & Legal", angle: "Monograms and seals that read as established, not loud.", focus: "Authority" },
  { name: "Real Estate", angle: "Emblems for projects, hoardings and brochure systems.", focus: "Aspiration" },
  { name: "Education", angle: "Crests and modern marks that work bilingually.", focus: "Readability" },
];

export const LD_PLANS = [
  {
    name: "Starter logo",
    price: "Fixed quote",
    note: "For founders who need one strong mark, fast.",
    points: ["2 concept routes", "Colour + mono versions", "SVG, PNG, PDF exports"],
    highlight: false,
    cta: "whatsapp" as const,
  },
  {
    name: "Logo + identity kit",
    price: "Most picked",
    note: "The mark plus the system that keeps it consistent.",
    points: ["3 concept routes", "Type & colour system", "Usage guide + full source pack"],
    highlight: true,
    cta: "contact" as const,
  },
  {
    name: "Rebrand & rollout",
    price: "Scoped",
    note: "Redraw an existing mark and roll it across every touchpoint.",
    points: ["Audit of current mark", "Migration checklist", "Collateral rollout support"],
    highlight: false,
    cta: "contact" as const,
  },
];

export const LD_WHY = [
  {
    metric: "3",
    title: "Routes, not one guess",
    body: "Three genuinely different directions, each shown in real context.",
    proof: "Sign, favicon, packaging and header mockups in the same deck.",
  },
  {
    metric: "16px",
    title: "Tested small first",
    body: "If a mark fails as a favicon, it never reaches your review.",
    proof: "Every route is checked at favicon, app icon and signage scale.",
  },
  {
    metric: "1",
    title: "One senior designer",
    body: "The designer who drew your mark is the one you talk to.",
    proof: "No account-manager relay, no brief drift between rounds.",
  },
  {
    metric: "100%",
    title: "Full vector ownership",
    body: "Editable source files and unrestricted usage rights on delivery.",
    proof: "Written into the scope — nothing held back as leverage.",
  },
];

export const LD_FAQS = [
  {
    q: "What makes ACSIUS a leading logo design company in India?",
    a: "Every mark is drawn from scratch by a senior designer, presented as three distinct routes in real context, and stress-tested from a 16px favicon up to signage. You receive full vector source files and usage rights on delivery.",
  },
  {
    q: "How much do logo design services in India cost at ACSIUS?",
    a: "A starter logo is a fixed quote based on the number of routes and variants. A full logo and identity kit is scoped after a short brief. Rebrand and rollout projects are quoted on the touchpoints involved. Every option is priced in writing before work begins.",
  },
  {
    q: "How long does creative logo design take?",
    a: "First concept routes land within 48 hours of a signed brief. A complete logo with variants, guide and source files typically ships in two weeks.",
  },
  {
    q: "How many revisions are included?",
    a: "Three revision rounds on the chosen direction are included. Extra rounds are quoted transparently before we start them.",
  },
  {
    q: "Which files will I receive?",
    a: "Editable AI or Figma source, plus SVG, EPS, print-ready PDF/X in CMYK, and PNG cuts for web, social and app icons — in colour, mono and reversed versions.",
  },
  {
    q: "Do I own the logo and its copyright?",
    a: "Yes. Full ownership and unrestricted commercial usage rights transfer to you on final payment, along with the source files.",
  },
  {
    q: "Can you redesign our existing logo instead of starting over?",
    a: "Yes. We audit the current mark, keep the equity worth keeping, and redraw the geometry, spacing and colour so it performs across digital and print.",
  },
  {
    q: "Do you design the rest of the brand too?",
    a: "Yes. Many clients continue with our graphic design, UI/UX design and website design teams so the mark, the collateral and the site all follow one system.",
  },
];
