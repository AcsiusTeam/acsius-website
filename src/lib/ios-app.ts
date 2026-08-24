export const IOS_HERO = {
  eyebrow: "iOS App Development Company · New Delhi, India · Since 2010",
  h1: ["iOS Apps Built by", "Indian Developers for the App Store."],
  lead:
    "ACSIUS Technologies is an iOS app development company building Swift and SwiftUI apps for iPhone, iPad, Watch and Vision — discovery, UI/UX, engineering, App Store review and post-launch iteration under one in-house team.",
  support:
    "You get a named iOS lead, a TestFlight build on your own iPhone every week, and Swift source code in your repository from the first commit.",
  stats: [
    { value: 16, suffix: "+", label: "Years building software" },
    { value: 90, suffix: "+", label: "iOS apps shipped" },
    { value: 40, suffix: "+", label: "Designers & engineers" },
    { value: 10, suffix: "wk", label: "Typical v1 build" },
  ],
};

/** Signature interaction: what an iOS engagement actually covers. */
export const IOS_TRACKS = [
  {
    key: "iphone",
    tab: "iPhone apps",
    headline: "Swift + SwiftUI iPhone apps built to Apple's own guidelines.",
    body:
      "Our core practice. Declarative SwiftUI screens, Combine or async/await data flow, offline-first storage and motion that feels native rather than ported. Written against Apple's Human Interface Guidelines so App Store review is a formality, not a fight.",
    stat: "iOS 16+",
    statLabel: "supported baseline",
    stack: ["Swift", "SwiftUI", "async/await", "SwiftData / Core Data", "Combine", "XCTest"],
    points: [
      "Accessibility, Dynamic Type and VoiceOver from sprint one",
      "Dark mode, haptics and gesture polish included",
      "Widgets, App Clips, Live Activities and push done properly",
    ],
  },
  {
    key: "ipad",
    tab: "iPad & multi-device",
    headline: "One codebase across iPhone, iPad, Watch and Mac.",
    body:
      "Adaptive layouts with split views, keyboard shortcuts, drag and drop and Apple Pencil support where it matters — plus companion watchOS complications and Catalyst builds when your users work at a desk.",
    stat: "4 devices",
    statLabel: "one Swift codebase",
    stack: ["SwiftUI adaptive layout", "Catalyst", "watchOS", "WidgetKit", "iCloud sync", "Universal links"],
    points: [
      "Size-class aware layouts instead of stretched phone screens",
      "iCloud / CloudKit sync across a user's devices",
      "Watch complications and Handoff continuity",
    ],
  },
  {
    key: "integrations",
    tab: "Apple frameworks",
    headline: "The Apple-only capabilities that make an iOS app worth building.",
    body:
      "Apple Pay and StoreKit 2 subscriptions, HealthKit, ARKit, Core ML on-device inference, MapKit, Sign in with Apple, Core Bluetooth and background location — implemented with the entitlements, privacy strings and review notes Apple asks for.",
    stat: "StoreKit 2",
    statLabel: "subscriptions & IAP",
    stack: ["Apple Pay", "StoreKit 2", "HealthKit", "ARKit", "Core ML", "Core Bluetooth"],
    points: [
      "In-app purchase, trials, upgrades and receipt validation",
      "Privacy manifests and tracking consent handled correctly",
      "On-device ML so user data never has to leave the phone",
    ],
  },
  {
    key: "backend",
    tab: "Backend & release ops",
    headline: "The half of an iOS app that lives outside Xcode.",
    body:
      "APIs, auth with refresh rotation, admin dashboards, push infrastructure, analytics events and crash monitoring — plus Xcode Cloud or Fastlane pipelines so every build is reproducible and every release is one command.",
    stat: "99.9%",
    statLabel: "API uptime target",
    stack: ["Node / Laravel", "PostgreSQL", "APNs", "Xcode Cloud", "Fastlane", "Firebase Crashlytics"],
    points: [
      "TestFlight distribution to your internal and beta testers",
      "Staged rollout with crash-free session gates",
      "Documented handover so any team can take over",
    ],
  },
];

export const IOS_ANSWERS = [
  {
    q: "Swift or cross-platform for an iOS-first product?",
    a: "If iPhone is where your revenue and reputation live — heavy animation, Apple Pay subscriptions, HealthKit, ARKit, widgets, wearables or offline-first data — native Swift wins on performance, review safety and long-term maintenance. If you need Android on the same roadmap and the features are mostly UI, data and payments, we will say so and recommend React Native instead.",
  },
  {
    q: "How does App Store review actually get handled?",
    a: "We prepare the listing, screenshots, privacy manifest, data-collection declarations and review notes, then submit under your Apple Developer account and answer reviewer questions ourselves. Most of our submissions clear on the first pass because guideline checks happen during QA, not after.",
  },
  {
    q: "Who owns the Swift code and the developer account?",
    a: "You do. The Xcode project lives in your Git from the first commit, the app is published under your own Apple Developer account, and design files, certificates and provisioning move to your team on payment. Nothing is tied to ACSIUS for future work.",
  },
  {
    q: "Can you take over an existing iOS app?",
    a: "Regularly. We start with an architecture and dependency audit, then send a prioritised list of crashes, technical debt and quick wins with effort estimates. Work continues on a branch with CI so your live app keeps running while we stabilise it.",
  },
];

export const IOS_APP_TYPES = [
  { name: "Subscription & content", detail: "StoreKit 2 tiers, trials, paywall tests and offline reading or viewing.", tag: "Media" },
  { name: "Fintech & wallets", detail: "Apple Pay, biometric unlock, ledgers, statements and audit-ready logs.", tag: "Finance" },
  { name: "Health & fitness", detail: "HealthKit metrics, workout sessions, Watch companions and consent-first data.", tag: "Healthcare" },
  { name: "Retail & D2C", detail: "Catalogue, Apple Pay checkout, loyalty passes and Shopify sync.", tag: "Retail" },
  { name: "Booking & travel", detail: "Availability, itineraries, Wallet passes, maps and offline access.", tag: "Hospitality" },
  { name: "Field & enterprise", detail: "Offline capture, roles, approvals, MDM distribution and Sign in with Apple.", tag: "Enterprise" },
  { name: "AR & camera", detail: "ARKit placement, RealityKit scenes and Core ML on-device vision.", tag: "Innovation" },
  { name: "Social & community", detail: "Feeds, chat, moderation tooling, Live Activities and creator payouts.", tag: "Consumer" },
];

export const IOS_PHASES = [
  {
    step: "01",
    title: "Product & platform scope",
    body: "Workshops on users, jobs-to-be-done and must-have vs later. You leave with a feature list, an iOS version baseline and a written phased scope.",
    duration: "Week 1–2",
    deliverable: "Scope doc + roadmap",
  },
  {
    step: "02",
    title: "iOS UX prototype",
    body: "Clickable prototype of the core journeys using native navigation patterns, tested with real iPhone users before a line of Swift is written.",
    duration: "Week 2–3",
    deliverable: "Figma prototype",
  },
  {
    step: "03",
    title: "SwiftUI design system",
    body: "Components, states, empty states, SF Symbols, Dynamic Type and motion specs — a system your future engineers can extend, not redraw.",
    duration: "Week 3–4",
    deliverable: "Design system",
  },
  {
    step: "04",
    title: "Swift sprint engineering",
    body: "Two-week sprints across app and backend, each closing with a TestFlight build you install on your own iPhone.",
    duration: "Week 4–11",
    deliverable: "Weekly TestFlight builds",
  },
  {
    step: "05",
    title: "Device lab & guideline QA",
    body: "Functional, performance, accessibility and App Review guideline passes on current and older iPhones and iPads, with agreed crash budgets.",
    duration: "Rolling",
    deliverable: "Test + guideline report",
  },
  {
    step: "06",
    title: "App Store launch & growth",
    body: "Listing, screenshots, privacy manifest, submission, reviewer replies, phased release, crash monitoring and 30 days of post-launch support.",
    duration: "Launch +30d",
    deliverable: "Live on the App Store",
  },
];

export const IOS_ENGAGE = [
  {
    key: "v1",
    label: "iOS v1 sprint",
    tagline: "Validate on iPhone first",
    body: "Swift app with 4–6 core screens, one integration, analytics and TestFlight distribution. Built to be tested by real users, not to win an award.",
    best: "Founders and new product bets",
    commitment: "8–10 weeks",
  },
  {
    key: "product",
    label: "Full iOS product",
    tagline: "Ship the real thing",
    body: "iPhone and iPad, backend, admin dashboard, Apple Pay or StoreKit subscriptions, push, QA lab coverage and App Store launch under your account.",
    best: "Funded startups and SMBs",
    commitment: "4–6 months",
  },
  {
    key: "team",
    label: "Dedicated iOS pod",
    tagline: "Extend your bench",
    body: "Hire iOS app developers in India as an embedded pod — engineers, designer and QA in your standups, sprints and repo, scaling month to month.",
    best: "Enterprise and product teams",
    commitment: "From 1 month",
  },
];

/** PPC / single-landing-page add-on for clients who don't need a full site. */
export const IOS_PPC = {
  eyebrow: "Need installs, not a website?",
  heading: "One landing page + Google Ads to drive App Store installs.",
  body:
    "Plenty of app owners only need a single high-converting page: a place for Google Ads, Apple Search Ads and social traffic to land before the store button. We design, build and run it as a standalone package.",
  items: [
    { title: "Single conversion page", body: "One page — hero, proof, screenshots, FAQ and store buttons. Live in days, no CMS to learn." },
    { title: "Google Ads & Search Ads", body: "Search, Performance Max, YouTube and Apple Search Ads structured around install intent keywords." },
    { title: "Tracking that survives iOS", body: "GA4, Search Ads Attribution and SKAdNetwork-aware conversion events wired before spend starts." },
    { title: "Creative & A/B testing", body: "Ad copy, banner sets and two hero variants tested weekly so cost per install keeps falling." },
  ],
  metrics: [
    { k: "CTR", v: "+2.4×" },
    { k: "Cost per install", v: "−38%" },
    { k: "Store CVR", v: "+31%" },
    { k: "Quality Score", v: "8–10" },
  ],
};

export const IOS_WHY = [
  { title: "App Store review handled", body: "Listing, screenshots, privacy manifest, data declarations and reviewer replies are our job — submitted under your Apple Developer account." },
  { title: "Weekly TestFlight builds", body: "From sprint two you install the real app on your own iPhone every week. Progress you can tap beats a status report you have to trust." },
  { title: "Real Apple device lab", body: "Current and older iPhones and iPads, plus Watch, on throttled networks — because the simulator hides the bugs your users find." },
  { title: "Your repo, your account", body: "Swift code in your Git from the first commit, certificates and provisioning handed over, no lock-in to us for version two." },
  { title: "Guideline QA, not guesswork", body: "Human Interface Guidelines and App Review rules are checked during QA, so rejections don't become launch-week surprises." },
  { title: "We stay after launch", body: "30 days of free post-launch support, then care plans covering iOS releases, SDK deprecations, crash triage and iteration sprints." },
];

export const IOS_NUMBERS = [
  { k: "48h", v: "To a written scope", note: "Feature list and phased plan" },
  { k: "2 weeks", v: "Sprint cadence", note: "TestFlight build every sprint" },
  { k: "1st pass", v: "Typical review outcome", note: "Guideline checks inside QA" },
  { k: "4–5 hrs", v: "Timezone overlap", note: "US, UK, EU, AU and Middle East" },
  { k: "< 1%", v: "Crash-free gate", note: "Release blocked above budget" },
  { k: "30 days", v: "Free post-launch support", note: "After every go-live" },
];

export const IOS_FAQS = [
  {
    q: "What makes ACSIUS a reliable iOS app development company?",
    a: "Sixteen years of delivery, an in-house salaried team of 40+ designers and engineers in New Delhi, 90+ iOS apps live on the App Store, and a method built on weekly TestFlight builds instead of monthly slide decks. We publish under your Apple Developer account and hand over Swift source code, so our record has to stand on its own rather than on lock-in.",
  },
  {
    q: "Why hire iOS app developers in India through ACSIUS?",
    a: "You get senior Swift and SwiftUI engineers with 4–5 hours of daily overlap with US, UK, EU and Middle East teams, at Indian delivery rates but with in-house accountability — no freelancer churn, no unnamed resources. Every engagement has a named iOS lead who joins your standups and owns the release.",
  },
  {
    q: "Do you build native iOS apps or cross-platform?",
    a: "Both, and we recommend the honest option. Native Swift and SwiftUI when the app leans on Apple frameworks — Apple Pay, StoreKit subscriptions, HealthKit, ARKit, widgets, Watch or heavy animation. React Native when iOS and Android must share one roadmap and the features are mostly UI, data and payments.",
  },
  {
    q: "How long does iOS app development take?",
    a: "Discovery and UX take 2–3 weeks, a focused v1 build 8–10 weeks, and a full-feature iOS product 4–6 months including QA and App Store review. You install a TestFlight build every sprint from week four, so timelines are verified by working software rather than percentages.",
  },
  {
    q: "Will you submit the app to the App Store for us?",
    a: "Yes. We prepare the listing, screenshots, privacy manifest and data-collection declarations, then submit and manage review under your Apple Developer account and reply to reviewer questions. If you do not have an account yet, we walk your team through creating one, because ownership should stay with you.",
  },
  {
    q: "Can you add Apple Pay, subscriptions or HealthKit later?",
    a: "Yes, and we architect for it early so it is not a rewrite. StoreKit 2 subscriptions with trials and upgrades, Apple Pay checkout, HealthKit metrics, ARKit scenes and Core ML on-device inference are all things we have shipped, together with the entitlements and privacy strings Apple requires.",
  },
  {
    q: "Do you support the app after launch?",
    a: "Every project includes 30 days of free post-launch support. After that, care plans cover annual iOS releases, Xcode and SDK deprecations, App Store policy changes, crash triage and a monthly change report, with iteration sprints whenever you want new features.",
  },
  {
    q: "Do you sign an NDA before we share the idea?",
    a: "Always, before any code or product detail changes hands. Access is least-privilege, credentials stay in your vault, and delivery can be aligned with HIPAA or GDPR requirements when your sector needs it.",
  },
];
