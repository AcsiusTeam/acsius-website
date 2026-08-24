// import arunSingh from "@/assets/arun-singh-founder.jpg.asset.json";
import arunSingh from "@/assets/images/arun-singh-founder.png";


export const ABOUT_HERO = {
  eyebrow: "About ACSIUS Technologies",
  h1: ["A New Delhi studio", "building the web since 2010."],
  lead:
    "ACSIUS Technologies is a website design, development and digital growth company based in New Delhi, India — 40+ designers, engineers and marketers working as one accountable delivery team.",
  support:
    "We have shipped 3000+ projects for startups, SMBs and enterprises across 35+ countries. Every engagement runs with a named delivery lead, sprint demos and written scope.",
  stats: [
    { value: 2010, suffix: "", label: "Founded" },
    { value: 3000, suffix: "+", label: "Projects Shipped" },
    { value: 40, suffix: "+", label: "In-house Team" },
    { value: 35, suffix: "+", label: "Countries Served" },
  ],
};

export const FOUNDER = {
  name: "Mr. Arun Singh",
  role: "Founder & Chief Executive Officer",
  quote:
    "A website is not a deliverable. It is the first promise a business makes to a customer — so it had better be fast, honest and easy to use.",
  bio: [
    "Arun Singh started ACSIUS in 2010 with a single conviction: Indian engineering teams could deliver web work that stands beside any studio in the world, at a price growing businesses can actually justify.",
    "Sixteen years later he still reviews delivery plans himself. He built the company around plain-language communication, fixed written scope and engineers who explain their decisions instead of hiding behind jargon.",
  ],
  signals: [
    { k: "16+ yrs", v: "Leading web & growth delivery" },
    { k: "3000+", v: "Projects overseen since 2010" },
    { k: "35+", v: "Countries served from New Delhi" },
  ],
};

export const CORE_TEAM: {
  name: string;
  role: string;
  image?: string ;
}[] = [
  { name: "Arun Singh", role: "CEO & Founder", image: arunSingh },
  { name: "Chandan Kumar", role: "Director" },
  { name: "Rahul Bansal", role: "Project Manager" },
  { name: "Mayank Nagpal", role: "Sr. Technial Team Lead" },
  { name: "Soyeb Akhtar", role: "Technial Team Lead" },
  { name: "Raghav Chaudhary", role: "SEO Team Lead" },
  { name: "Ajay Singh", role: "Email Marketing Head" },
  { name: "Nitesh Kumar", role: "Sr. Shopify Developer" },
  { name: "Chandan Saini", role: "Sr. WordPress Developer" },
  { name: "Gureent Kaur", role: "HR & Account Department" },
  { name: "Subhash Chand", role: "Senior WordPress Developer" },
  { name: "Md. Asif", role: "Front End Developer" },
];


export const ABOUT_STORY = [
  {
    year: "2010",
    title: "Two desks, one promise",
    body: "ACSIUS opens in New Delhi building WordPress and PHP websites for Indian SMBs.",
  },
  {
    year: "2014",
    title: "Ecommerce years",
    body: "Shopify, Magento and WooCommerce stores take the studio into retail and D2C.",
  },
  {
    year: "2018",
    title: "Product engineering",
    body: "Laravel, React and Node.js teams form to build portals, dashboards and School ERP.",
  },
  {
    year: "2021",
    title: "Growth practice",
    body: "SEO, PPC, SMO and content join delivery so launches keep compounding after go-live.",
  },
  {
    year: "2026",
    title: "3000+ and counting",
    body: "40+ specialists serving clients in 35+ countries with one accountable delivery model.",
  },
];

export const ABOUT_VALUES = [
  {
    icon: "◈",
    title: "Written scope, always",
    body: "Every proposal lists deliverables, milestones and timelines before a single invoice.",
  },
  {
    icon: "⚡",
    title: "Performance is a budget",
    body: "Core Web Vitals targets are agreed up front and enforced before launch — not audited later.",
  },
  {
    icon: "☺",
    title: "Plain language",
    body: "You get explanations you can repeat to your board, not acronyms you have to Google.",
  },
  {
    icon: "▦",
    title: "One accountable lead",
    body: "A named delivery lead owns your project end to end. No ticket roulette.",
  },
  {
    icon: "✦",
    title: "Own everything",
    body: "Code, design files, analytics and hosting access are yours on day one of handover.",
  },
  {
    icon: "➤",
    title: "Built to keep going",
    body: "Care plans, analytics and CRO keep the site improving long after the launch call.",
  },
];

export const ABOUT_TEAM = [
  { unit: "Design & UI/UX", size: "9 specialists", detail: "Research, wireframes, design systems, prototypes" },
  { unit: "Web Engineering", size: "14 specialists", detail: "WordPress, Shopify, Magento, Laravel, React, Node" },
  { unit: "Mobile & Product", size: "6 specialists", detail: "React Native, Flutter, API and ERP platforms" },
  { unit: "Growth & Content", size: "8 specialists", detail: "SEO, AI SEO, PPC, SMO, editorial content" },
  { unit: "QA & Support", size: "5 specialists", detail: "Accessibility, device labs, care plans, SLAs" },
];

export const ABOUT_WHY = [
  { metric: "48 hrs", title: "Proposal turnaround", body: "Discovery call to written scope, cost and timeline in two working days." },
  { metric: "100%", title: "In-house delivery", body: "No hidden subcontracting. The people on the call are the people building." },
  { metric: "Weekly", title: "Sprint demos", body: "You see working software every week, not a status email." },
  { metric: "90+", title: "Lighthouse targets", body: "Speed, accessibility and SEO scores signed off before go-live." },
];

export const ABOUT_FAQS = [
  {
    q: "Where is ACSIUS Technologies located?",
    a: "Our studio is at 52-A, 301-3rd Floor, Krishna Complex, Hasanpur, New Delhi-110092, India. We work remotely with clients across India, the US, UK, Europe, the Middle East and Australia.",
  },
  {
    q: "Who founded ACSIUS Technologies?",
    a: "ACSIUS was founded in 2010 by Mr. Arun Singh, who continues to lead the company as Founder and CEO and personally reviews delivery plans for every major engagement.",
  },
  {
    q: "How big is the ACSIUS team?",
    a: "Over 40 in-house designers, engineers, QA analysts and digital marketers across design, web engineering, mobile, growth and support functions.",
  },
  {
    q: "What kind of clients do you work with?",
    a: "Startups, SMBs and enterprises in healthcare, education, finance, manufacturing, retail, logistics and professional services — from single marketing sites to multi-year platform programmes.",
  },
  {
    q: "How do engagements usually start?",
    a: "A 30-minute discovery call, then a written proposal within two working days covering scope, milestones, team and cost. Work begins only after you approve that document.",
  },
];
