export const AND_HERO = {
  eyebrow: "Android App Development Company · New Delhi, India · Since 2010",
  h1: ["Android App Development", "by Developers Who Ship to Play."],
  lead:
    "ACSIUS Technologies builds native Kotlin and cross-platform Android apps end to end — discovery, UI/UX, engineering, QA on real devices, Play Console release and post-launch iteration under one in-house team.",
  support:
    "You get a named Android lead, an installable signed build every sprint, and Kotlin source code in your repository from the first commit.",
  stats: [
    { value: 16, suffix: "+", label: "Years building software" },
    { value: 120, suffix: "+", label: "Mobile apps shipped" },
    { value: 40, suffix: "+", label: "Designers & engineers" },
    { value: 8, suffix: "wk", label: "Typical v1 build" },
  ],
};

/** Signature interaction: what an Android engagement actually covers. */
export const AND_TRACKS = [
  {
    key: "native",
    tab: "Native Kotlin apps",
    headline: "Native Android in Kotlin, Jetpack Compose and Material 3.",
    body:
      "Our core practice. Compose UI, MVVM with coroutines and Flow, Room for offline-first data, WorkManager for background jobs, and motion that matches the OS. Built to Google Play policy so review is a formality, not a gamble.",
    stat: "API 24+",
    statLabel: "supported baseline",
    stack: ["Kotlin", "Jetpack Compose", "Material 3", "Coroutines / Flow", "Room", "Hilt"],
    points: [
      "Compose-first UI with dark theme and dynamic colour",
      "TalkBack, font scaling and large-screen layouts handled",
      "Widgets, deep links, shortcuts and share targets",
    ],
  },
  {
    key: "cross",
    tab: "Flutter & React Native",
    headline: "One codebase when Android and iOS must launch together.",
    body:
      "When budget matters more than platform purity we build in Flutter or React Native with native modules where it counts — camera, payments, maps, Bluetooth. You get both stores from one team, and an honest recommendation when native is the better buy.",
    stat: "2 stores",
    statLabel: "one delivery team",
    stack: ["Flutter / Dart", "React Native", "Native modules", "Firebase", "Riverpod / Redux", "Fastlane"],
    points: [
      "Shared design system across Android and iOS",
      "Native bridges for hardware and SDK-heavy features",
      "Single CI pipeline publishing to both stores",
    ],
  },
  {
    key: "capabilities",
    tab: "Device & platform features",
    headline: "The Android capabilities that make an app worth installing.",
    body:
      "Google sign-in and biometrics, FCM push, in-app payments and UPI, camera and ML Kit, maps and geofencing, Bluetooth and NFC, offline sync, background services and foreground-service compliance — implemented with the permissions and manifests Google actually expects.",
    stat: "Offline",
    statLabel: "first by default",
    stack: ["Google / biometric auth", "FCM push", "UPI & Play Billing", "ML Kit & CameraX", "Maps & geofencing", "BLE / NFC"],
    points: [
      "Permission flows written so users actually accept them",
      "Battery, data and background limits respected",
      "Play Data safety form filled from real code, not guesses",
    ],
  },
  {
    key: "backend",
    tab: "Backend & release ops",
    headline: "The half of an Android app that lives outside the phone.",
    body:
      "APIs, auth with refresh rotation, admin dashboards, notifications, analytics and crash reporting — plus Fastlane, GitHub Actions and Play Console tracks so every build is reproducible and one command from internal testing to production.",
    stat: "99.9%",
    statLabel: "API uptime target",
    stack: ["Node / Laravel / .NET", "PostgreSQL / MongoDB", "Firebase", "GitHub Actions", "Fastlane", "Crashlytics"],
    points: [
      "Internal, closed and open testing tracks configured",
      "Staged rollout with crash-free session gates",
      "Documented handover so any team can take over",
    ],
  },
];

export const AND_ANSWERS = [
  {
    q: "Native Kotlin, Flutter or React Native?",
    a: "Kotlin when the app leans on hardware, heavy data, animation performance or long-term platform depth. Flutter when Android and iOS must ship together with one UI language and a tight budget. React Native when your team already lives in JavaScript and you want to share logic with a web product. We recommend based on your feature list, not on what we prefer to bill.",
  },
  {
    q: "How is Google Play release handled?",
    a: "We prepare the signed AAB, Play Console listing, screenshots, content rating, Data safety form and privacy policy links, then publish under your own developer account and answer any policy rejection ourselves. Most releases clear the first review because policy checks happen during QA, not after submission.",
  },
  {
    q: "Who owns the Kotlin code and the Play account?",
    a: "You do. The repository is yours from the first commit, the app is published under your own Google Play developer account, and design files, keystores and pipelines transfer to your team on payment. Nothing is tied to ACSIUS for version two.",
  },
  {
    q: "Can you take over an existing Android app?",
    a: "Regularly. We start with an architecture, dependency and ANR/crash audit, then send a prioritised list of defects, technical debt and quick wins with effort estimates. Work happens on a branch with CI so your live app keeps serving users while we stabilise it.",
  },
];

export const AND_APP_TYPES = [
  { name: "On-demand & delivery", detail: "Live tracking, driver apps, routing, OTP flows and cash-on-delivery.", tag: "Logistics" },
  { name: "Fintech & wallets", detail: "KYC, UPI, biometric locks, statements and audit-ready trails.", tag: "Finance" },
  { name: "eCommerce apps", detail: "Catalogue, cart, Play Billing or UPI, returns and push-led retention.", tag: "Retail" },
  { name: "Health & fitness", detail: "Health Connect, wearables, reminders and consent-first data.", tag: "Health" },
  { name: "EdTech & learning", detail: "Video lessons, downloads for offline, quizzes and progress tracking.", tag: "Education" },
  { name: "Field force & sales", detail: "Offline forms, geo-attendance, photo proof and background sync.", tag: "Enterprise" },
  { name: "Social & community", detail: "Feeds, chat, media pipelines, moderation and notification design.", tag: "Social" },
  { name: "IoT & device control", detail: "BLE pairing, provisioning, telemetry dashboards and OTA prompts.", tag: "IoT" },
];

export const AND_PHASES = [
  {
    step: "01",
    title: "Product & platform scope",
    body: "Workshops on users, journeys and must-have vs later. You leave with a feature list, an Android version baseline and a written phased scope.",
    duration: "Week 1–2",
    deliverable: "Scope doc + roadmap",
  },
  {
    step: "02",
    title: "Mobile UX prototype",
    body: "Clickable prototype of the core journeys using Material patterns, tested on a real handset before a line of Kotlin is written.",
    duration: "Week 2–3",
    deliverable: "Figma prototype",
  },
  {
    step: "03",
    title: "Material design system",
    body: "Components, states, empty states, icons, motion and theme tokens — a Compose-ready system your future engineers extend instead of redraw.",
    duration: "Week 3–4",
    deliverable: "Design system",
  },
  {
    step: "04",
    title: "Kotlin sprint engineering",
    body: "Two-week sprints across app and backend, each closing with a signed APK or internal-testing build on your own phone.",
    duration: "Week 4–9",
    deliverable: "Weekly installable builds",
  },
  {
    step: "05",
    title: "Real-device & policy QA",
    body: "Functional, performance, battery, accessibility and Play policy passes across low-end and flagship handsets, tablets and multiple OS versions.",
    duration: "Rolling",
    deliverable: "Test + policy report",
  },
  {
    step: "06",
    title: "Play launch & rollout",
    body: "Listing, screenshots, signing, Data safety, submission, staged rollout, crash monitoring and 30 days of post-launch support.",
    duration: "Launch +30d",
    deliverable: "Live on Google Play",
  },
];

export const AND_ENGAGE = [
  {
    key: "mvp",
    label: "Android MVP sprint",
    tagline: "Validate on real phones first",
    body: "Kotlin app with 4–6 core screens, one integration, analytics and an internal-testing release. Built to be used by real users, not to win an award.",
    best: "Founders and new product bets",
    commitment: "6–8 weeks",
  },
  {
    key: "product",
    label: "Full Android product",
    tagline: "Ship the real thing",
    body: "App, backend, admin dashboard, payments, push, deep links, QA coverage and Play launch under your own developer account.",
    best: "Funded startups and SMBs",
    commitment: "3–5 months",
  },
  {
    key: "team",
    label: "Dedicated Android pod",
    tagline: "Extend your bench",
    body: "Hire Android developers in India as an embedded pod — engineers, designer and QA in your standups, sprints and repo, scaling month to month.",
    best: "Enterprise and product teams",
    commitment: "From 1 month",
  },
];

/** Local-intent block for "android app developer near me" style searches. */
export const AND_LOCAL = {
  eyebrow: "Searching for an Android app developer near you?",
  heading: "A Delhi NCR studio that works like an in-house team.",
  body:
    "Our office is in East Delhi and clients visit for scope workshops, sprint reviews and device testing. Remote clients get the same rhythm on video — same lead, same sprint demo, same recorded notes.",
  points: [
    { k: "Meet in person", v: "New Delhi 110092", note: "Hasanpur, near Krishna Complex" },
    { k: "Overlap hours", v: "4–5 hrs daily", note: "US, UK, EU, AU, Middle East" },
    { k: "Reply window", v: "Same working day", note: "Call, WhatsApp or email" },
    { k: "Device lab", v: "20+ handsets", note: "Low-end to flagship, tablets" },
  ],
};

/** PPC / single-landing-page add-on for clients who don't need a full site. */
export const AND_PPC = {
  eyebrow: "Need installs, not a website?",
  heading: "One landing page + Google Ads to drive app installs.",
  body:
    "Plenty of app owners only need a single high-converting page: a place for Google Ads, App campaigns and social traffic to land before the Play Store button. We design, build and run it as a standalone package.",
  items: [
    { title: "Single conversion page", body: "One page — hero, proof, screenshots, FAQ and install buttons. Live in days, no CMS to learn." },
    { title: "Google Ads & App campaigns", body: "Search, Performance Max and Google App campaigns structured around install and signup intent." },
    { title: "Tracking that actually works", body: "GA4, Firebase and install or first-open conversions wired before a rupee of spend goes out." },
    { title: "Creative & A/B testing", body: "Ad copy, store creative and two hero variants tested weekly so cost per install keeps falling." },
  ],
  metrics: [
    { k: "CTR", v: "+2.4×" },
    { k: "Cost per install", v: "−38%" },
    { k: "Signup CVR", v: "+31%" },
    { k: "Quality Score", v: "8–10" },
  ],
};

export const AND_WHY = [
  { title: "Play policy handled", body: "Signing, Data safety, content rating, listing and review replies are our job — published under your own Google Play developer account." },
  { title: "Weekly installable builds", body: "From sprint two you install the real app on your own phone every week. Progress you can tap beats a status report you have to trust." },
  { title: "Real device coverage", body: "Low-end and flagship handsets, tablets, multiple Android versions and slow networks — because your users are not on your dev phone." },
  { title: "Your repo, your keystore", body: "Kotlin code in your Git from the first commit, keystores and pipelines handed over, no lock-in to us for version two." },
  { title: "Performance budgets", body: "Cold start, APK size, ANR rate and battery drain are tracked as release gates, not discovered in a one-star review." },
  { title: "We stay after launch", body: "30 days of free post-launch support, then care plans covering annual Android releases, SDK upgrades, crash triage and iteration sprints." },
];

export const AND_NUMBERS = [
  { k: "48h", v: "To a written scope", note: "Feature list and phased plan" },
  { k: "2 weeks", v: "Sprint cadence", note: "Installable build every sprint" },
  { k: "1st pass", v: "Typical Play review", note: "Policy checks inside QA" },
  { k: "4–5 hrs", v: "Timezone overlap", note: "US, UK, EU, AU and Middle East" },
  { k: "< 1%", v: "Crash-free gate", note: "Release blocked above budget" },
  { k: "30 days", v: "Free post-launch support", note: "After every go-live" },
];

export const AND_FAQS = [
  {
    q: "What makes ACSIUS a reliable Android development company?",
    a: "Sixteen years of delivery, an in-house salaried team of 40+ designers and engineers in New Delhi, 120+ mobile apps in production, and a method built on weekly installable builds instead of monthly slide decks. We publish under your own developer account and hand over Kotlin source code, so our record has to stand on its own rather than on lock-in.",
  },
  {
    q: "What do your Android app development services cover?",
    a: "Discovery and scoping, mobile UX and Material design systems, native Kotlin and Jetpack Compose engineering, Flutter and React Native builds, backends and APIs, payments and push, QA across real devices, Play Console release with Data safety and content rating, and post-launch support plans.",
  },
  {
    q: "I searched for an Android app developer near me — can we meet?",
    a: "Yes. Our studio is in Hasanpur, New Delhi 110092, and clients across Delhi NCR — Noida, Gurugram, Ghaziabad and Faridabad — visit for scope workshops, sprint demos and device testing. Clients outside NCR get the same cadence over video with a named Android lead and recorded notes after every session.",
  },
  {
    q: "How much does Android app development cost?",
    a: "It depends on screen count, integrations and whether a backend is in scope, so we quote against a written feature list rather than a page price. Send your idea or a reference app and within two working days you get a phased scope with what belongs in v1, what can wait, and a milestone-based commercial plan.",
  },
  {
    q: "How long does Android app development take?",
    a: "Discovery and UX take 2–3 weeks, a focused MVP 6–8 weeks, and a full-feature Android product 3–5 months including QA and Play review. You install a signed build every sprint from week four, so timelines are verified by working software rather than percentages.",
  },
  {
    q: "Do you build native Kotlin apps or cross-platform?",
    a: "Both, and we recommend the honest option. Native Kotlin with Jetpack Compose when the app needs hardware access, animation performance, offline data or deep OS integration. Flutter or React Native when Android and iOS must launch together and the interface is largely lists, forms and dashboards.",
  },
  {
    q: "Will you publish the app to Google Play for us?",
    a: "Yes. We prepare the signed AAB, listing copy, screenshots, content rating, Data safety declarations and privacy links, then submit and manage review under your Play Console account. If you also need iOS, the same team handles App Store submission.",
  },
  {
    q: "Do you support the app after launch?",
    a: "Every project includes 30 days of free post-launch support. After that, care plans cover annual Android releases, target-SDK deadlines, Play policy changes, crash and ANR triage and a monthly change report, with iteration sprints whenever you want new features.",
  },
  {
    q: "Do you sign an NDA before we share the idea?",
    a: "Always, before any code or product detail changes hands. Access is least-privilege, credentials stay in your vault, and delivery can be aligned with HIPAA or GDPR requirements when your sector needs it.",
  },
];
