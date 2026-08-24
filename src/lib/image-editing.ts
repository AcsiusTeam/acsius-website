export const IE_HERO = {
  eyebrow: "Image Editing Services in India · New Delhi",
  h1: ["Image editing that", "makes products", "look worth buying."],
  lead:
    "ACSIUS is an image editing company in India delivering clipping paths, background removal, retouching and marketplace-ready exports at catalogue scale.",
  support:
    "Ecommerce catalogues, real-estate shoots, jewellery, apparel and food — edited to a written style guide, QC'd twice, delivered in 24 hours.",
  badges: ["24h turnaround", "Amazon & Shopify specs", "Hand-drawn clipping paths", "NDA + secure transfer"],
  stats: [
    { value: 2, suffix: "M+", label: "Images edited" },
    { value: 24, suffix: "h", label: "Standard TAT" },
    { value: 99, suffix: "%", label: "First-pass QC" },
    { value: 60, suffix: "+", label: "Editors on bench" },
  ],
};

/** Service switcher */
export const IE_SERVICES = [
  {
    key: "background",
    name: "Background removal",
    best: "Marketplace catalogues, D2C stores",
    body:
      "Hand-drawn clipping paths — not one-click AI cutouts — so hair, straps, glass and mesh keep their real edges on pure white.",
    chips: ["Clipping path", "Transparent PNG", "Pure white #FFFFFF", "Multi-path layers"],
    stat: "0.2 px",
    statLabel: "edge tolerance",
    sizes: ["Clipping path", "Deep etch", "Transparent PNG", "Shadow retained", "Colour swap ready"],
  },
  {
    key: "retouch",
    name: "Product retouching",
    best: "Jewellery, watches, apparel, cosmetics",
    body:
      "Dust, scratches, creases and reflections cleaned while texture stays intact — the product still looks like the product.",
    chips: ["Dust & scratch", "Reflection control", "Crease removal", "Symmetry fixes"],
    stat: "3 pass",
    statLabel: "retouch depth",
    sizes: ["Dust removal", "Highlight recovery", "Metal polish", "Fabric texture", "Colour match"],
  },
  {
    key: "model",
    name: "Model & portrait editing",
    best: "Fashion, beauty, campaign shoots",
    body:
      "Natural skin retouching with frequency separation, plus body and garment corrections that never cross into plastic.",
    chips: ["Skin retouch", "Hair masking", "Ghost mannequin", "Garment shaping"],
    stat: "100%",
    statLabel: "texture kept",
    sizes: ["Skin softening", "Hair mask", "Neck join", "Invisible mannequin", "Colour grade"],
  },
  {
    key: "realestate",
    name: "Real estate & interiors",
    best: "Listings, hotels, architecture",
    body:
      "Exposure blending, vertical correction, sky replacement and window pulls that make a room read bright without looking fake.",
    chips: ["HDR blending", "Sky replacement", "Lens correction", "Object removal"],
    sizes: ["HDR blend", "Day to dusk", "Perspective fix", "Clutter removal", "Virtual staging"],
    stat: "5 exp",
    statLabel: "bracket blend",
  },
  {
    key: "bulk",
    name: "Bulk catalogue processing",
    best: "10k+ SKU libraries, seasonal drops",
    body:
      "Batch cropping, alignment, margin rules and naming conventions applied across thousands of SKUs with the same style guide.",
    chips: ["SKU naming", "Batch crop", "Margin rules", "CSV mapping"],
    stat: "10k+",
    statLabel: "images per week",
    sizes: ["Batch crop", "Auto align", "Resize set", "Rename by SKU", "Bulk export"],
  },
];

export const IE_DELIVERABLES = [
  {
    tag: "Style guide",
    name: "One written edit spec, every image",
    detail:
      "Margins, angle, shadow, white point and crop rules documented after a paid pilot — so image 5,000 matches image 1.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    tag: "Formats",
    name: "JPG, PNG, TIFF, WebP",
    detail: "Every output format and size set you need, from one edit master.",
    span: "",
  },
  {
    tag: "Marketplace",
    name: "Amazon, Flipkart, Shopify specs",
    detail: "Frame fill, pixel size and white-background rules met per channel.",
    span: "",
  },
  {
    tag: "Layers",
    name: "Layered PSD on request",
    detail: "Masks, paths and adjustment layers handed over, not flattened.",
    span: "",
  },
  {
    tag: "QC",
    name: "Two-stage quality check",
    detail: "Editor check, then an independent QC pass against your spec sheet.",
    span: "",
  },
  {
    tag: "Security",
    name: "NDA, secure transfer, deletion",
    detail: "Signed NDA, private transfer links, and source files purged on request after handover.",
    span: "lg:col-span-2",
  },
];

/** Channel spec strip */
export const IE_SPECS = [
  {
    label: "Amazon India",
    note: "Product fills 85% of the frame on pure white, no props, no watermarks, no borders.",
    detail: "2000×2000 px · sRGB JPG",
  },
  {
    label: "Shopify / D2C",
    note: "Square crop with consistent margin and an optional soft reflection for depth.",
    detail: "2048×2048 px · WebP + JPG",
  },
  {
    label: "Print catalogue",
    note: "CMYK conversion with a profile match, 3 mm bleed and sharpening applied at final size.",
    detail: "300 dpi · TIFF / PDF/X",
  },
  {
    label: "Real estate portals",
    note: "Verticals straightened, windows exposed, colour cast neutralised across the whole set.",
    detail: "1920×1080 px · sRGB JPG",
  },
];

export const IE_PROCESS = [
  {
    step: "01",
    title: "Pilot batch",
    body: "Send 10–20 images. We edit them free and lock the look you approve.",
    duration: "24h",
    ship: "Sample set",
  },
  {
    step: "02",
    title: "Spec sheet",
    body: "Your approved look written down: crop, margin, white point, shadow, naming.",
    duration: "Day 2",
    ship: "Style guide",
  },
  {
    step: "03",
    title: "Production",
    body: "Batches enter the queue with a named team lead and a daily delivery rhythm.",
    duration: "Ongoing",
    ship: "Daily batches",
  },
  {
    step: "04",
    title: "Double QC",
    body: "Editor self-check, then an independent reviewer compares against the spec sheet.",
    duration: "Same day",
    ship: "QC report",
  },
  {
    step: "05",
    title: "Delivery & revisions",
    body: "Files land on your drive or FTP in your naming convention. Revisions are free.",
    duration: "24h",
    ship: "Final files",
  },
];

/** Single landing page + PPC section */
export const IE_PPC = {
  eyebrow: "Need one page, not a website?",
  heading: "Edited images plus a single landing page and the ads to sell them.",
  lead:
    "Great product shots only pay back when traffic lands somewhere that converts. We pair the edited set with one focused landing page and run the paid side end to end.",
  cards: [
    {
      name: "Single landing page",
      body: "One product, one offer, one form — built around your new hero images.",
      chip: "Live in 7 days",
      href: "/landing-page-design" as const,
      linkLabel: "Landing page design",
    },
    {
      name: "Google Shopping & Search",
      body: "Feed-ready images, campaign build and bidding tuned to your margins.",
      chip: "Shopping · Search",
      href: "/ppc-services-company-india" as const,
      linkLabel: "PPC services",
    },
    {
      name: "Meta catalogue ads",
      body: "Placement-sized crops and story ratios generated from the same edit master.",
      chip: "Feed · Story · Reels",
      href: "/ppc-services-company-india" as const,
      linkLabel: "Paid social",
    },
    {
      name: "Tracking & reporting",
      body: "Conversion tracking and one dashboard for spend, orders and cost per acquisition.",
      chip: "GA4 + Ads",
      href: "/contact" as const,
      linkLabel: "Talk to a strategist",
    },
  ],
  funnel: [
    { label: "Ad impressions", value: "100%" },
    { label: "Clicks to page", value: "4.2%" },
    { label: "Add to cart", value: "18%" },
    { label: "Purchases", value: "6.4%" },
  ],
};

export const IE_PLANS = [
  {
    name: "Per image",
    price: "From ₹12",
    note: "Pay by image for clipping path, background removal or basic retouch.",
    points: ["No minimum volume", "24h turnaround", "Free revisions", "JPG + PNG exports"],
    cta: "quote" as const,
    highlight: false,
  },
  {
    name: "Catalogue plan",
    price: "Most popular",
    note: "A dedicated pod for ongoing catalogue volume with a locked style guide.",
    points: [
      "Named team lead",
      "Written spec sheet",
      "10k+ images per month",
      "Marketplace-ready exports",
      "Double QC pass",
    ],
    cta: "whatsapp" as const,
    highlight: true,
  },
  {
    name: "Creative retainer",
    price: "Monthly",
    note: "Editing plus the landing page and ad creative that uses those images.",
    points: ["Editing queue", "Single landing page", "Ad creative sets", "Monthly reporting"],
    cta: "quote" as const,
    highlight: false,
  },
];

export const IE_COMPARE = {
  rows: [
    {
      label: "Cutouts",
      typical: "One-click AI select chews through hair, lace and glass edges.",
      acsius: "Hand-drawn clipping paths at 0.2 px tolerance, checked at 300% zoom.",
    },
    {
      label: "Consistency",
      typical: "Every editor crops differently, so the grid looks like three brands.",
      acsius: "A written spec sheet locks crop, margin, white point and shadow for all editors.",
    },
    {
      label: "Turnaround",
      typical: "Batches slip a week and nobody tells you until you chase.",
      acsius: "24h standard TAT with a daily batch rhythm and a named team lead.",
    },
    {
      label: "Retouch depth",
      typical: "Skin and metal blurred into plastic to hide dust quickly.",
      acsius: "Frequency separation and dodge-and-burn keep real texture visible.",
    },
    {
      label: "Data safety",
      typical: "Files passed around personal drives with no agreement in place.",
      acsius: "Signed NDA, private transfer links and source deletion after handover.",
    },
  ],
};

export const IE_SECTORS = [
  { name: "Ecommerce & D2C", note: "SKU catalogues, marketplace uploads, seasonal drops." },
  { name: "Jewellery", note: "Metal polish, stone clarity, reflection control." },
  { name: "Apparel & fashion", note: "Ghost mannequin, crease removal, colour match." },
  { name: "Real estate", note: "HDR blends, sky swaps, vertical correction." },
  { name: "Food & hospitality", note: "Menu shots, garnish cleanup, warm colour grade." },
  { name: "Automotive", note: "Showroom backgrounds, paint cleanup, plate masking." },
];

export const IE_WHY = [
  {
    metric: "60+",
    title: "Editors on the bench",
    body: "Volume spikes absorbed without pushing your delivery dates.",
    proof: "Pods sized per client, not shared queues.",
  },
  {
    metric: "24h",
    title: "Standard turnaround",
    body: "Batches submitted by evening come back the next working day.",
    proof: "Rush lanes available for launch weeks.",
  },
  {
    metric: "99%",
    title: "First-pass acceptance",
    body: "Double QC against your written spec before anything is delivered.",
    proof: "Free revisions until it matches the guide.",
  },
  {
    metric: "0",
    title: "Leaks in 16 years",
    body: "NDA, restricted access and secure transfer on every project.",
    proof: "Source files purged on request after handover.",
  },
];

export const IE_FAQS = [
  {
    q: "What do your image editing services in India include?",
    a: "Clipping paths and background removal, product and jewellery retouching, model and skin retouching, ghost mannequin, real estate HDR and sky replacement, plus bulk catalogue processing with cropping, resizing and SKU-based naming. Files are delivered in the formats and pixel sizes each sales channel needs.",
  },
  {
    q: "How much does image editing cost per image?",
    a: "Simple clipping paths and background removal start from around ₹12 per image. Retouching, ghost mannequin and real estate HDR are quoted by complexity and volume. After a free pilot batch you receive a written per-image rate card with turnaround committed in writing.",
  },
  {
    q: "How fast is your turnaround?",
    a: "Standard turnaround is 24 hours from batch submission. Large catalogues run on a daily delivery rhythm agreed up front, and rush lanes are available for launch weeks or marketplace deadlines.",
  },
  {
    q: "Can I test your quality before committing?",
    a: "Yes. Send 10 to 20 representative images and we edit them free of charge. Once you approve the look, we write it into a spec sheet — crop, margin, white point, shadow and naming — that every editor on your account follows.",
  },
  {
    q: "Do you follow Amazon, Flipkart and Shopify image rules?",
    a: "We do. That means pure white backgrounds where required, the product filling roughly 85% of the frame, minimum pixel dimensions, no props, watermarks or borders, and separate crops for feed, listing gallery and ad placements.",
  },
  {
    q: "Is my product imagery kept confidential?",
    a: "Every engagement runs under a signed NDA with restricted access, private transfer links and no third-party outsourcing. Source and working files are deleted from our systems on request once you have signed off on delivery.",
  },
  {
    q: "I only need a single landing page for these images, not a full website. Can you do that?",
    a: "That is a common request. We design and build one focused landing page around your edited images, add the enquiry or checkout flow and tracking, and can run the Google Ads, Shopping or Meta campaigns that send traffic to it — no main website rebuild needed.",
  },
  {
    q: "Why choose ACSIUS as an image editing agency in India?",
    a: "You get a named team lead, a written style guide, double QC before delivery and 60+ editors to absorb volume — plus an in-house design and performance marketing team that can turn the edited images into landing pages and ad campaigns.",
  },
];
