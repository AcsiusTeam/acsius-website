export const BD_HERO = {
  eyebrow: "Banner Design Service India · New Delhi",
  h1: ["Banners, flyers and", "brochures that get", "read, not scrolled."],
  lead:
    "ACSIUS is a banner design and brochure design company in India producing ad banners, flyers and print-ready brochures — one layout system, every size you need.",
  support:
    "Web banners, Google Ads creatives, A4 flyers, bi-folds and tri-folds — resized, proofed and exported with print bleed in days, not weeks.",
  badges: ["Google Ads sizes", "Print-ready CMYK", "Editable source files", "48h first drafts"],
  stats: [
    { value: 12, suffix: "k+", label: "Creatives shipped" },
    { value: 30, suffix: "+", label: "Ad sizes per set" },
    { value: 48, suffix: "h", label: "First drafts" },
    { value: 300, suffix: "dpi", label: "Print exports" },
  ],
};

/** Format switcher — banner / flyer / brochure */
export const BD_FORMATS = [
  {
    key: "banner",
    name: "Ad & web banners",
    best: "Google Display, Meta, marketplaces",
    body:
      "One master layout adapted to every IAB and social size, with the offer legible at 300×250 and the CTA never clipped.",
    chips: ["Google Display set", "Static + animated HTML5", "Marketplace creatives", "Retargeting sets"],
    stat: "30+",
    statLabel: "sizes per campaign",
    sizes: ["300×250", "728×90", "160×600", "1080×1080", "1200×628"],
  },
  {
    key: "flyer",
    name: "Flyer design services",
    best: "Launches, offers, events, distribution",
    body:
      "A single-glance hierarchy: one headline, one offer, one action. Built for hand-outs, inserts and WhatsApp forwards alike.",
    chips: ["A4 / A5 / DL", "Print + digital export", "QR to landing page", "Bulk offer variants"],
    stat: "3 s",
    statLabel: "message read time",
    sizes: ["A4", "A5", "DL", "Square post", "Story 9:16"],
  },
  {
    key: "brochure",
    name: "Brochure design",
    best: "Corporate profiles, product ranges, sales kits",
    body:
      "Multi-page storytelling with a grid, typographic scale and image treatment that holds from cover to back page.",
    chips: ["Bi-fold / tri-fold", "8–24 page profiles", "Bleed + crop marks", "Print liaison"],
    stat: "24 pp",
    statLabel: "typical profile",
    sizes: ["Tri-fold", "Bi-fold", "A4 booklet", "Square 210mm", "Digital PDF"],
  },
  {
    key: "standee",
    name: "Large format & standees",
    best: "Expos, retail, hoardings, backdrops",
    body:
      "Scaled artwork checked at viewing distance — readable from ten feet, exported at the printer's exact spec.",
    chips: ["Standee / roll-up", "Hoarding artwork", "Expo backdrop", "Vehicle wraps"],
    stat: "10 ft",
    statLabel: "legibility check",
    sizes: ["3×6 ft", "2×5 ft", "Hoarding", "Backdrop", "Table top"],
  },
];

/** Bento — what you get */
export const BD_DELIVERABLES = [
  {
    tag: "Master layout",
    name: "One design system, every size",
    detail:
      "A master artboard with type scale, colour and image rules — so the 20th banner looks as considered as the first.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    tag: "Ad sizes",
    name: "Full Google Display set",
    detail: "All standard IAB sizes, plus social and marketplace crops.",
    span: "",
  },
  {
    tag: "Print",
    name: "Bleed, marks, CMYK",
    detail: "Press-ready PDF/X exports your printer will accept first time.",
    span: "",
  },
  {
    tag: "Source",
    name: "Editable AI / PSD / Figma",
    detail: "You own the working files, fonts list and colour references.",
    span: "",
  },
  {
    tag: "Copy",
    name: "Headline + offer writing",
    detail: "Short, benefit-led lines written to fit the space available.",
    span: "",
  },
  {
    tag: "Variants",
    name: "A/B creative pairs",
    detail: "Two angles per size so paid campaigns have something to test.",
    span: "lg:col-span-2",
  },
];

/** Dark spec strip — print / screen specs */
export const BD_SPECS = [
  {
    label: "Web banner",
    note: "RGB, 72 dpi, under 150 KB — offer readable at 300×250 without zooming.",
    detail: "300×250 px · JPG / PNG / HTML5",
  },
  {
    label: "A4 flyer",
    note: "3 mm bleed on every edge, safe margin 8 mm, CMYK with rich black headings.",
    detail: "210×297 mm · 300 dpi PDF/X-1a",
  },
  {
    label: "Tri-fold brochure",
    note: "Panel widths adjusted for the fold-in flap so nothing crushes at the crease.",
    detail: "297×210 mm · 3 panels · 300 dpi",
  },
  {
    label: "Standee",
    note: "Built at 1:4 scale with type sized for a ten-foot read, artwork checked at 100%.",
    detail: "3×6 ft · 150 dpi at size",
  },
];

export const BD_PROCESS = [
  {
    step: "01",
    title: "Brief & offer",
    body: "We pin down the single message, audience and where the piece will appear.",
    duration: "Day 1",
    ship: "Brief sheet",
  },
  {
    step: "02",
    title: "Layout routes",
    body: "Two or three distinct layout directions for the hero size — no colour-swap clones.",
    duration: "Day 2–3",
    ship: "2–3 routes",
  },
  {
    step: "03",
    title: "Refine & copy",
    body: "Chosen route sharpened: headline, hierarchy, imagery and CTA treatment.",
    duration: "Day 4",
    ship: "Final master",
  },
  {
    step: "04",
    title: "Resize & adapt",
    body: "Master rolled out to every banner size, flyer format or brochure page.",
    duration: "Day 5–6",
    ship: "Full size set",
  },
  {
    step: "05",
    title: "Proof & handover",
    body: "Print proof or ad-platform preview, then source files and export pack.",
    duration: "Day 7",
    ship: "Files + specs",
  },
];

/** Single landing page + PPC section */
export const BD_PPC = {
  eyebrow: "Need one page, not a website?",
  heading: "Creative plus a single landing page and the ads to feed it.",
  lead:
    "Most banner and flyer campaigns die because the click lands nowhere useful. We pair the creative with one focused landing page and run the paid side end to end.",
  cards: [
    {
      name: "Single landing page",
      body: "One offer, one form, no navigation — message-matched to the banner or flyer.",
      chip: "Live in 7 days",
      href: "/landing-page-design" as const,
      linkLabel: "Landing page design",
    },
    {
      name: "Google Ads (Search + Display)",
      body: "Campaign build, keyword and placement targeting, and your banner set loaded correctly.",
      chip: "Search · Display · YouTube",
      href: "/ppc-services-company-india" as const,
      linkLabel: "PPC services",
    },
    {
      name: "Meta & LinkedIn creative",
      body: "Static and story-ratio variants sized per placement, with A/B pairs for testing.",
      chip: "A/B pairs included",
      href: "/ppc-services-company-india" as const,
      linkLabel: "Paid social",
    },
    {
      name: "Tracking & reporting",
      body: "Conversion tracking, call tracking and a single dashboard for spend, leads and cost per lead.",
      chip: "GA4 + Ads",
      href: "/contact" as const,
      linkLabel: "Talk to a strategist",
    },
  ],
  funnel: [
    { label: "Banner impressions", value: "100%" },
    { label: "Clicks to landing page", value: "3.8%" },
    { label: "Form starts", value: "24%" },
    { label: "Qualified leads", value: "11%" },
  ],
};

export const BD_PLANS = [
  {
    name: "Creative pack",
    price: "Per set",
    note: "A banner set, flyer or single brochure — fixed scope, fixed price.",
    points: ["1 master layout", "Up to 12 adaptations", "2 revision rounds", "Print + web exports"],
    cta: "quote" as const,
    highlight: false,
  },
  {
    name: "Campaign kit",
    price: "Most popular",
    note: "Creative plus one landing page and Google Ads build — the full funnel.",
    points: [
      "30+ ad sizes",
      "Single landing page",
      "Google Ads campaign build",
      "A/B creative pairs",
      "Conversion tracking",
    ],
    cta: "whatsapp" as const,
    highlight: true,
  },
  {
    name: "Design retainer",
    price: "Monthly",
    note: "A dedicated designer for ongoing banners, flyers, brochures and decks.",
    points: ["Named designer", "Rolling queue", "48h turnaround", "Brand guardianship"],
    cta: "quote" as const,
    highlight: false,
  },
];

export const BD_COMPARE = {
  rows: [
    {
      label: "Resizing",
      typical: "The A4 artwork is squashed into a 728×90 and the offer becomes unreadable.",
      acsius: "Each size is re-laid out from the master, then checked at 100% before export.",
    },
    {
      label: "Print quality",
      typical: "RGB file at 96 dpi with no bleed — the printer crops your headline off.",
      acsius: "CMYK PDF/X with 3 mm bleed, crop marks and a proof you sign before the run.",
    },
    {
      label: "Copy",
      typical: "Lorem-style filler headline pasted from the brief, three offers competing.",
      acsius: "One benefit-led headline written to the space, one offer, one clear action.",
    },
    {
      label: "Files",
      typical: "Only a flat JPG, so the next change means starting from scratch.",
      acsius: "Editable AI / PSD / Figma source, fonts list and colour references handed over.",
    },
    {
      label: "Results",
      typical: "Creative delivered, campaign untouched, nobody knows what converted.",
      acsius: "A/B pairs, tracking and a report on which creative produced leads.",
    },
  ],
};

export const BD_SECTORS = [
  { name: "Real estate", note: "Project launches, price-list flyers, expo standees." },
  { name: "Education", note: "Admission campaigns, prospectus brochures, campus banners." },
  { name: "Healthcare", note: "Camp flyers, service brochures, waiting-room standees." },
  { name: "Retail & D2C", note: "Offer banners, festive creatives, marketplace assets." },
  { name: "Manufacturing", note: "Product catalogues, dealer kits, expo backdrops." },
  { name: "Hospitality", note: "Menu cards, seasonal offers, in-room collateral." },
];

export const BD_WHY = [
  {
    metric: "16+",
    title: "Years of print & digital",
    body: "A studio that has sent files to press and to Google Ads for over a decade.",
    proof: "Delhi-based team, clients across India, UK and US.",
  },
  {
    metric: "48h",
    title: "First drafts, always",
    body: "You see real layout routes in two working days, not a mood board.",
    proof: "Named designer on your brief from day one.",
  },
  {
    metric: "0",
    title: "Reprints from our errors",
    body: "Pre-flight checks on bleed, colour, fonts and resolution before handover.",
    proof: "Print proof signed off before any run.",
  },
  {
    metric: "100%",
    title: "Source files to you",
    body: "Every working file, font list and export preset is yours to keep.",
    proof: "No lock-in, no per-edit charges.",
  },
];

export const BD_FAQS = [
  {
    q: "What does your banner design service in India include?",
    a: "A master layout for your campaign plus adaptations to every size you need — Google Display and IAB sizes, social placements, marketplace creatives and large-format artwork. You get web-ready exports, print-ready files where relevant, and the editable source file.",
  },
  {
    q: "Do you offer flyer design services for both print and digital?",
    a: "Yes. Every flyer is built once and exported twice: a CMYK press-ready PDF with 3 mm bleed and crop marks for printing, and an RGB image or PDF sized for WhatsApp, email and social sharing. QR codes to a landing page can be added.",
  },
  {
    q: "How long does brochure design take?",
    a: "A bi-fold or tri-fold typically takes 5–7 working days. An 8–24 page corporate profile takes 2–3 weeks depending on how quickly content, images and approvals come through. Layout routes are shared within 48 hours of the brief.",
  },
  {
    q: "Can you write the headlines and copy too?",
    a: "Yes. Our copy team writes the headline, offer line and call to action to fit the space, in English or Hinglish. If you already have approved copy we design to it and flag anything that will not fit legibly.",
  },
  {
    q: "I only need a single landing page, not a full website. Can you do that?",
    a: "That is a common request. We design and build one focused landing page that matches the banner or flyer, add the form and tracking, and can run the Google Ads or Meta campaign that sends traffic to it — no main website work required.",
  },
  {
    q: "Will the files be accepted by my printer?",
    a: "We export PDF/X-1a in CMYK at 300 dpi with bleed, crop marks and outlined or embedded fonts, at the exact trim size your printer specifies. Share the printer's spec sheet and we match it; we can also liaise with them directly.",
  },
  {
    q: "How much does banner, flyer or brochure design cost?",
    a: "Pricing is per set or per page count, quoted in writing after a short brief — a banner set, a single flyer and a 16-page brochure are very different jobs. Monthly retainers are available if you need ongoing creative.",
  },
  {
    q: "Do you provide animated HTML5 banners for Google Ads?",
    a: "Yes. We build animated HTML5 creatives within Google's file-size limits alongside static fallbacks, so your Display campaign runs both formats and you can compare performance.",
  },
];
