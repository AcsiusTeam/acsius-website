export const MAD_HERO = {
  eyebrow: "Mobile App Development Company in India · New Delhi · Since 2010",
  h1: ["Mobile App Development Services", "that ship to the stores,", "not just to Figma."],
  lead:
    "ACSIUS Technologies is a top mobile app development company in India building iOS, Android, React Native and Flutter apps end to end — product discovery, UI/UX, engineering, store submission and post-launch growth.",
  support:
    "One in-house team owns design, code, QA and release. You get a named lead, weekly builds you can install on your own phone, and source code in your repository from day one.",
  stats: [
    { value: 16, suffix: "+", label: "Years building software" },
    { value: 180, suffix: "+", label: "Apps launched" },
    { value: 40, suffix: "+", label: "Designers & engineers" },
    { value: 12, suffix: "wk", label: "Typical MVP" },
  ],
};

/** Platform explorer — the page's signature interaction. */
export const MAD_PLATFORMS = [
  {
    key: "react-native",
    tab: "React Native",
    headline: "React Native app development for one codebase, two stores.",
    body:
      "Our largest practice. A single TypeScript codebase compiled to native iOS and Android, with native modules written by us wherever the JS bridge is not enough — payments, background location, BLE, camera pipelines. Best value when you need both platforms and one roadmap.",
    stat: "1 codebase",
    statLabel: "iOS + Android",
    stack: ["React Native", "TypeScript", "Expo / bare RN", "Reanimated", "Redux / Zustand", "Detox"],
    points: [
      "40–55% lower build cost than two native apps",
      "Over-the-air updates for non-native fixes",
      "Shared design system across both platforms",
    ],
  },
  {
    key: "ios",
    tab: "iOS (Swift)",
    headline: "Native iOS when the experience is the product.",
    body:
      "Swift and SwiftUI apps for teams whose users live on iPhone and iPad — heavy animation, HealthKit, ARKit, Apple Pay, widgets, Live Activities and offline-first data. Built to Apple's review guidelines so submission is a formality, not a fight.",
    stat: "iOS 15+",
    statLabel: "supported baseline",
    stack: ["Swift", "SwiftUI", "Combine", "Core Data", "StoreKit 2", "XCTest"],
    points: [
      "App Store submission and review handled by us",
      "Widgets, App Clips and push done properly",
      "Accessibility and Dynamic Type from the start",
    ],
  },
  {
    key: "android",
    tab: "Android (Kotlin)",
    headline: "Native Android for the devices your users actually own.",
    body:
      "Kotlin and Jetpack Compose apps tested on the low-end and mid-range handsets that dominate India, South-East Asia and Africa — not just a flagship emulator. Play Store policy, data-safety forms and staged rollouts included.",
    stat: "20+ devices",
    statLabel: "real-device QA lab",
    stack: ["Kotlin", "Jetpack Compose", "Coroutines", "Room", "Hilt", "Play Console"],
    points: [
      "Tested on real low-RAM and low-bandwidth devices",
      "Staged rollout with crash-rate gates",
      "Play Data Safety and policy compliance",
    ],
  },
  {
    key: "backend",
    tab: "Backend & APIs",
    headline: "The half of the app nobody sees.",
    body:
      "Every app we ship gets a real backend: authentication, roles, payments, notifications, admin dashboards, analytics events and monitoring. Node, Laravel or Firebase depending on your team's comfort — documented so another team can take over.",
    stat: "99.9%",
    statLabel: "uptime target",
    stack: ["Node / NestJS", "Laravel", "PostgreSQL", "Firebase", "AWS / GCP", "Stripe / Razorpay"],
    points: [
      "Admin dashboard for your ops team",
      "Event analytics wired before launch, not after",
      "Load-tested before the marketing push",
    ],
  },
];

/** Answer-first blocks for AI overviews and featured snippets. */
export const MAD_ANSWERS = [
  {
    q: "How much does mobile app development cost in India?",
    a: "A focused MVP typically lands between $8,000 and $20,000, a production app with payments, roles and an admin panel between $20,000 and $50,000, and a multi-module platform above that. React Native app development usually costs 40–55% less than building two separate native apps. ACSIUS quotes a fixed range against a written scope after a free consultation, and prices any change before building it.",
  },
  {
    q: "How long does it take to build a mobile app?",
    a: "Discovery and UI/UX take 2–3 weeks, an MVP build 8–12 weeks, and a full-feature app 4–6 months including QA and store review. You see an installable build every week from the second sprint, so progress is something you can hold in your hand rather than read in a status report.",
  },
  {
    q: "Should I choose React Native or native development?",
    a: "Choose React Native when you need both platforms on one roadmap and your features are mostly UI, data and payments — most marketplace, booking, fintech dashboard and content apps qualify. Choose native Swift or Kotlin when the app depends on heavy graphics, deep OS integration, wearables or sustained background hardware access. We recommend the cheaper option whenever it genuinely fits.",
  },
  {
    q: "Do I own the source code and app store accounts?",
    a: "Yes. Code lives in your repository from the first commit, apps are published under your Apple and Google developer accounts, and all design files and credentials transfer to you on payment. There is no lock-in to ACSIUS for future work.",
  },
];

export const MAD_APP_TYPES = [
  { name: "Marketplace & on-demand", detail: "Two-sided flows, live tracking, ratings, wallets and split payouts.", tag: "Retail · Logistics" },
  { name: "Fintech & wallets", detail: "KYC, UPI and card rails, ledgers, statements and audit-ready logging.", tag: "Finance" },
  { name: "Healthcare & telemedicine", detail: "Appointments, video consults, e-prescriptions and consent-first data handling.", tag: "Healthcare" },
  { name: "Ecommerce & D2C", detail: "Catalogue, cart, subscriptions, returns and Shopify or WooCommerce sync.", tag: "Retail" },
  { name: "Learning & EdTech", detail: "Courses, offline video, quizzes, cohorts and progress analytics.", tag: "Education" },
  { name: "Booking & travel", detail: "Availability, dynamic pricing, itineraries and gateway integrations.", tag: "Hospitality" },
  { name: "Enterprise & field ops", detail: "Offline-first data capture, role permissions, approvals and SSO.", tag: "Enterprise" },
  { name: "Social & community", detail: "Feeds, chat, moderation tooling, notifications and creator monetisation.", tag: "Consumer" },
];

export const MAD_PHASES = [
  {
    step: "01",
    title: "Discovery & scope",
    body: "Workshops on users, jobs-to-be-done and must-have vs nice-to-have. You leave with a feature list, a platform recommendation and a fixed cost range.",
    duration: "Week 1–2",
    deliverable: "Scope doc + estimate",
  },
  {
    step: "02",
    title: "UX flows & prototype",
    body: "Clickable prototype of the core journeys before any code, tested with 3–5 real users so we fix flow problems while they are still cheap.",
    duration: "Week 2–4",
    deliverable: "Figma prototype",
  },
  {
    step: "03",
    title: "UI design system",
    body: "Screens, components, states, empty states and motion specs — a system your future developers can extend instead of redrawing.",
    duration: "Week 4–5",
    deliverable: "Design system",
  },
  {
    step: "04",
    title: "Sprint engineering",
    body: "Two-week sprints across app and backend, with an installable TestFlight or Play internal build at the end of each one.",
    duration: "Week 5–14",
    deliverable: "Weekly builds",
  },
  {
    step: "05",
    title: "QA & device lab",
    body: "Functional, regression, performance and security passes on 20+ real devices, plus crash and ANR budgets agreed before release.",
    duration: "Rolling",
    deliverable: "Test reports",
  },
  {
    step: "06",
    title: "Store launch & growth",
    body: "Store listings, screenshots, review responses, staged rollout, crash monitoring and a 30-day post-launch support window.",
    duration: "Launch +30d",
    deliverable: "Live on both stores",
  },
];

export const MAD_ENGAGE = [
  {
    key: "mvp",
    label: "MVP sprint",
    price: "From $8k",
    tagline: "Validate fast",
    body: "One platform or React Native, 4–6 core screens, one integration and analytics. Built to be tested with real users, not to win an award.",
    best: "Pre-seed founders and new bets",
    commitment: "8–12 weeks",
  },
  {
    key: "product",
    label: "Full product build",
    price: "From $20k",
    tagline: "Ship the real thing",
    body: "Both platforms, backend, admin dashboard, payments, notifications, QA lab coverage and store launch under your developer accounts.",
    best: "Funded startups and SMBs",
    commitment: "4–6 months",
  },
  {
    key: "team",
    label: "Dedicated app team",
    price: "Monthly",
    tagline: "Extend your bench",
    body: "Hire mobile engineers, a designer and QA as an embedded pod in your standups, sprints and repo — scale up or down each month.",
    best: "Enterprise and product teams",
    commitment: "From 1 month",
  },
];

export const MAD_WHY = [
  { title: "Store-ready, not demo-ready", body: "We handle Apple and Google submission, policy forms, screenshots and review replies. Store review and listing updates managed by us until you are live." },
  { title: "Weekly installable builds", body: "From sprint two you install the real app on your own phone every week. Progress you can tap beats a status report you have to trust." },
  { title: "Real-device QA lab", body: "20+ physical iOS and Android devices, including low-RAM handsets and throttled networks, because emulators hide the bugs your users find." },
  { title: "Your repo, your accounts", body: "Code in your Git from the first commit, apps under your developer accounts, credentials and design files handed over on payment." },
  { title: "Backend and analytics included", body: "APIs, admin dashboard, event tracking and crash monitoring are part of the build — not a surprise phase after launch." },
  { title: "We stay after launch", body: "30 days of free post-launch support, then optional care plans covering OS updates, store policy changes and iteration sprints." },
];

export const MAD_NUMBERS = [
  { k: "48h", v: "To a written estimate", note: "Scope, platform pick and fixed range" },
  { k: "2 weeks", v: "Sprint cadence", note: "Installable build every sprint" },
  { k: "20+", v: "Real test devices", note: "Low-end Android included" },
  { k: "4–5 hrs", v: "Timezone overlap", note: "US, UK, EU, AU and Middle East" },
  { k: "< 1%", v: "Crash-free gate", note: "Release blocked above budget" },
  { k: "30 days", v: "Free post-launch support", note: "After every go-live" },
];

export const MAD_FAQS = [
  {
    q: "What makes ACSIUS a top mobile app development company in India?",
    a: "Sixteen years of delivery, an in-house salaried team of 40+ designers and engineers in New Delhi, 180+ apps live on the App Store and Play Store, and a working method built on weekly installable builds instead of monthly slide decks. We also publish under your developer accounts and hand over source code, so our track record has to stand on its own rather than on lock-in.",
  },
  {
    q: "Do you offer React Native app development or only native?",
    a: "Both. React Native is our largest practice because one TypeScript codebase serving iOS and Android usually cuts 40–55% of the cost, and we write native modules in Swift or Kotlin whenever a feature needs them. When an app depends on heavy graphics, wearables or sustained background hardware access, we recommend native Swift or Kotlin instead.",
  },
  {
    q: "How much do your mobile app development services cost?",
    a: "An MVP typically runs $8,000–$20,000, a production app with payments, roles and an admin panel $20,000–$50,000, and larger platforms more. After a free consultation you get a written scope with a fixed range, milestone-based invoicing and change requests priced before they are built.",
  },
  {
    q: "Will you publish the app to the App Store and Play Store for us?",
    a: "Yes. We prepare listings, screenshots, privacy and data-safety declarations, then submit and manage review under your Apple Developer and Google Play accounts. If you do not have accounts yet we walk your team through creating them, since ownership should stay with you.",
  },
  {
    q: "Can you take over an existing app built by another agency?",
    a: "Frequently. We start with a code and architecture audit, then send a prioritised list of fixes, risks and effort estimates. Work continues on a branch with CI so your live app keeps running while we stabilise it.",
  },
  {
    q: "How do you handle app security and data privacy?",
    a: "Secure token auth with refresh rotation, encrypted local storage, certificate pinning where warranted, least-privilege backend roles, no secrets in the bundle, and audit logging on sensitive actions. We sign NDAs before code access and can align delivery with HIPAA or GDPR requirements when your sector needs it.",
  },
  {
    q: "Do you provide app maintenance after launch?",
    a: "Every project includes 30 days of free post-launch support. After that, care plans cover iOS and Android OS updates, store policy changes, dependency upgrades, crash triage and a monthly change report, with iteration sprints when you want new features.",
  },
  {
    q: "Who owns the app and its design files?",
    a: "You do. Code sits in your repository from the first commit, and source code, design files, credentials and store assets transfer to you on payment. There is no licence fee and no obligation to keep working with us.",
  },
];
