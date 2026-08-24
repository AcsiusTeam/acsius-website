export const WIN_HERO = {
  eyebrow: "Windows App Development Company · New Delhi, India · Since 2010",
  h1: ["Windows Apps Built by", "Developers Who Ship to the Store."],
  lead:
    "ACSIUS Technologies is a Windows app development company building WinUI 3, .NET and WPF desktop software — discovery, UI/UX, engineering, MSIX packaging, code signing and Microsoft Store submission under one in-house team.",
  support:
    "You get a named Windows lead, a signed MSIX build on your own machine every week, and C# source code in your repository from the first commit.",
  stats: [
    { value: 16, suffix: "+", label: "Years building software" },
    { value: 70, suffix: "+", label: "Desktop apps shipped" },
    { value: 40, suffix: "+", label: "Designers & engineers" },
    { value: 10, suffix: "wk", label: "Typical v1 build" },
  ],
};

/** Signature interaction: what a Windows engagement actually covers. */
export const WIN_TRACKS = [
  {
    key: "winui",
    tab: "WinUI 3 & .NET apps",
    headline: "Modern Windows 11 apps in WinUI 3, C# and .NET 8.",
    body:
      "Our core practice. Fluent Design surfaces, MVVM architecture, async data flow, offline-first local storage and motion that feels like the OS rather than a web page in a frame. Built to Microsoft's own design and packaging guidelines so Store certification is a formality.",
    stat: "Win 10+",
    statLabel: "supported baseline",
    stack: ["C# / .NET 8", "WinUI 3", "Windows App SDK", "MVVM", "SQLite / LiteDB", "xUnit"],
    points: [
      "Keyboard, mouse, pen and touch input handled properly",
      "Light, dark and high-contrast themes plus Narrator support",
      "Live tiles' successors: widgets, toasts and jump lists",
    ],
  },
  {
    key: "legacy",
    tab: "WPF, WinForms & migration",
    headline: "Modernise the WPF or WinForms app your business runs on.",
    body:
      "We keep line-of-business software alive: .NET Framework to .NET 8 upgrades, WinForms screens rehosted inside WinUI shells, dependency and licence audits, and installer replacement — done incrementally so your team never loses a working build.",
    stat: "0 downtime",
    statLabel: "incremental migration",
    stack: ["WPF", "WinForms", ".NET upgrade assistant", "XAML Islands", "Crystal-free reporting", "WiX / MSIX"],
    points: [
      "Branch-by-branch migration with CI on every commit",
      "Legacy database and COM interop preserved",
      "Written debt register with effort estimates up front",
    ],
  },
  {
    key: "integrations",
    tab: "Windows-only capabilities",
    headline: "The platform features that make a desktop app worth building.",
    body:
      "Windows Hello sign-in, background services, printing and barcode hardware, COM and Office interop, file-system watchers, USB and serial devices, multi-monitor layouts and enterprise SSO with Entra ID — implemented with the capabilities and manifests Microsoft expects.",
    stat: "MSIX",
    statLabel: "signed & auto-updating",
    stack: ["Windows Hello", "Entra ID SSO", "WinRT APIs", "Office interop", "Serial / USB devices", "Background tasks"],
    points: [
      "Auto-update channels so users never chase a download link",
      "Per-machine or per-user install with silent switches for IT",
      "On-device processing so records never have to leave the LAN",
    ],
  },
  {
    key: "backend",
    tab: "Backend & release ops",
    headline: "The half of a Windows app that lives outside Visual Studio.",
    body:
      "APIs, auth with refresh rotation, admin dashboards, sync engines, telemetry and crash reporting — plus Azure DevOps or GitHub Actions pipelines so every build is reproducible, signed and one command away from release.",
    stat: "99.9%",
    statLabel: "API uptime target",
    stack: ["ASP.NET Core", "SQL Server / PostgreSQL", "SignalR", "Azure DevOps", "GitHub Actions", "App Center / Sentry"],
    points: [
      "Signed installers distributed to internal and pilot testers",
      "Staged rollout with crash-free session gates",
      "Documented handover so any team can take over",
    ],
  },
];

export const WIN_ANSWERS = [
  {
    q: "WinUI 3, WPF or Electron for a new desktop app?",
    a: "If the app needs real desktop performance, hardware access, offline data or a Windows 11 look, WinUI 3 with .NET is the right call. WPF still wins for dense line-of-business grids and teams with existing XAML skills. We only recommend Electron when the same product must run on macOS and Linux and the UI is mostly forms and dashboards — and we will say so plainly instead of selling you a rewrite.",
  },
  {
    q: "How does Microsoft Store certification get handled?",
    a: "We prepare the MSIX package, capabilities manifest, code-signing certificate, listing copy, screenshots and age rating, then submit under your own Partner Center account and answer certification failures ourselves. Most of our submissions clear on the first pass because policy checks happen during QA, not after.",
  },
  {
    q: "Who owns the C# code and the Partner Center account?",
    a: "You do. The Visual Studio solution lives in your Git from the first commit, the app is published under your Partner Center account, and design files, signing certificates and pipelines move to your team on payment. Nothing is tied to ACSIUS for future work.",
  },
  {
    q: "Can you take over an existing Windows application?",
    a: "Regularly. We start with an architecture, dependency and licence audit, then send a prioritised list of crashes, technical debt and quick wins with effort estimates. Work continues on a branch with CI so your live app keeps running while we stabilise it.",
  },
];

export const WIN_APP_TYPES = [
  { name: "ERP & line of business", detail: "Dense grids, roles, approvals, reporting and offline-tolerant sync.", tag: "Enterprise" },
  { name: "POS & retail counters", detail: "Barcode scanners, receipt printers, cash drawers and offline billing.", tag: "Retail" },
  { name: "Manufacturing & IoT", detail: "Serial and USB device reads, shop-floor dashboards, alarms and logs.", tag: "Industry" },
  { name: "Healthcare desktop", detail: "Records, DICOM viewers, consent-first data and audit-ready trails.", tag: "Healthcare" },
  { name: "Finance & accounting", detail: "Ledgers, reconciliation, statement imports and signed audit exports.", tag: "Finance" },
  { name: "Media & creative tools", detail: "GPU rendering, large-file pipelines, drag-and-drop and pen input.", tag: "Creative" },
  { name: "Kiosk & digital signage", detail: "Locked-down shell, assigned access, remote content and health pings.", tag: "Kiosk" },
  { name: "Utilities & agents", detail: "Tray apps, background services, schedulers and silent auto-update.", tag: "Tooling" },
];

export const WIN_PHASES = [
  {
    step: "01",
    title: "Product & platform scope",
    body: "Workshops on users, workflows and must-have vs later. You leave with a feature list, a Windows version baseline and a written phased scope.",
    duration: "Week 1–2",
    deliverable: "Scope doc + roadmap",
  },
  {
    step: "02",
    title: "Desktop UX prototype",
    body: "Clickable prototype of the core workflows using native Windows patterns, tested with real operators before a line of C# is written.",
    duration: "Week 2–3",
    deliverable: "Figma prototype",
  },
  {
    step: "03",
    title: "Fluent design system",
    body: "Components, states, empty states, icons, keyboard maps and theme tokens — a XAML system your future engineers can extend, not redraw.",
    duration: "Week 3–4",
    deliverable: "Design system",
  },
  {
    step: "04",
    title: ".NET sprint engineering",
    body: "Two-week sprints across app and backend, each closing with a signed MSIX build you install on your own machine.",
    duration: "Week 4–11",
    deliverable: "Weekly signed builds",
  },
  {
    step: "05",
    title: "Device & policy QA",
    body: "Functional, performance, accessibility and Store policy passes across Windows 10 and 11, multiple DPI settings and locked-down enterprise machines.",
    duration: "Rolling",
    deliverable: "Test + policy report",
  },
  {
    step: "06",
    title: "Store launch & rollout",
    body: "Listing, screenshots, code signing, submission, certification replies, phased rollout, crash monitoring and 30 days of post-launch support.",
    duration: "Launch +30d",
    deliverable: "Live on Microsoft Store",
  },
];

export const WIN_ENGAGE = [
  {
    key: "v1",
    label: "Windows v1 sprint",
    tagline: "Validate on the desktop first",
    body: "WinUI app with 4–6 core screens, one integration, telemetry and a signed installer. Built to be used by real operators, not to win an award.",
    best: "Founders and new product bets",
    commitment: "8–10 weeks",
  },
  {
    key: "product",
    label: "Full Windows product",
    tagline: "Ship the real thing",
    body: "Desktop app, backend, admin dashboard, licensing, auto-update, device integrations, QA coverage and Store launch under your Partner Center account.",
    best: "Funded startups and SMBs",
    commitment: "4–6 months",
  },
  {
    key: "team",
    label: "Dedicated Windows pod",
    tagline: "Extend your bench",
    body: "Hire Windows app developers in India as an embedded pod — engineers, designer and QA in your standups, sprints and repo, scaling month to month.",
    best: "Enterprise and product teams",
    commitment: "From 1 month",
  },
];

/** PPC / single-landing-page add-on for clients who don't need a full site. */
export const WIN_PPC = {
  eyebrow: "Need downloads, not a website?",
  heading: "One landing page + Google Ads to drive app downloads.",
  body:
    "Plenty of software owners only need a single high-converting page: a place for Google Ads, Microsoft Ads and social traffic to land before the download button. We design, build and run it as a standalone package.",
  items: [
    { title: "Single conversion page", body: "One page — hero, proof, screenshots, FAQ and download buttons. Live in days, no CMS to learn." },
    { title: "Google & Microsoft Ads", body: "Search, Performance Max and Bing campaigns structured around download and demo-request intent." },
    { title: "Tracking that actually works", body: "GA4, offline conversion imports and install or trial events wired before a rupee of spend goes out." },
    { title: "Creative & A/B testing", body: "Ad copy, banner sets and two hero variants tested weekly so cost per download keeps falling." },
  ],
  metrics: [
    { k: "CTR", v: "+2.3×" },
    { k: "Cost per download", v: "−36%" },
    { k: "Trial CVR", v: "+29%" },
    { k: "Quality Score", v: "8–10" },
  ],
};

export const WIN_WHY = [
  { title: "Store certification handled", body: "MSIX packaging, capabilities, code signing, listing and certification replies are our job — submitted under your own Partner Center account." },
  { title: "Weekly signed builds", body: "From sprint two you install the real app on your own machine every week. Progress you can click beats a status report you have to trust." },
  { title: "Real device coverage", body: "Windows 10 and 11, multiple DPI and language settings, low-spec machines and locked-down enterprise images — because your users are not on your dev box." },
  { title: "Your repo, your certificate", body: "C# code in your Git from the first commit, signing certificates and pipelines handed over, no lock-in to us for version two." },
  { title: "Enterprise IT ready", body: "Silent install switches, per-machine deployment, Intune and Group Policy notes so your IT team can roll it out without calling us." },
  { title: "We stay after launch", body: "30 days of free post-launch support, then care plans covering Windows releases, .NET upgrades, crash triage and iteration sprints." },
];

export const WIN_NUMBERS = [
  { k: "48h", v: "To a written scope", note: "Feature list and phased plan" },
  { k: "2 weeks", v: "Sprint cadence", note: "Signed build every sprint" },
  { k: "1st pass", v: "Typical certification", note: "Policy checks inside QA" },
  { k: "4–5 hrs", v: "Timezone overlap", note: "US, UK, EU, AU and Middle East" },
  { k: "< 1%", v: "Crash-free gate", note: "Release blocked above budget" },
  { k: "30 days", v: "Free post-launch support", note: "After every go-live" },
];

export const WIN_FAQS = [
  {
    q: "What makes ACSIUS a reliable Windows app development company?",
    a: "Sixteen years of delivery, an in-house salaried team of 40+ designers and engineers in New Delhi, 70+ desktop apps in production, and a method built on weekly signed builds instead of monthly slide decks. We publish under your Partner Center account and hand over C# source code, so our record has to stand on its own rather than on lock-in.",
  },
  {
    q: "What do your Windows app development services cover?",
    a: "Discovery and scoping, desktop UX and Fluent design systems, WinUI 3, WPF and WinForms engineering, .NET backends and APIs, device and hardware integrations, licensing and auto-update, QA across Windows 10 and 11, MSIX packaging with code signing, Microsoft Store submission, and post-launch support plans.",
  },
  {
    q: "Why hire Windows app developers in India through ACSIUS?",
    a: "You get senior C# and XAML engineers with 4–5 hours of daily overlap with US, UK, EU and Middle East teams, at Indian delivery rates but with in-house accountability — no freelancer churn, no unnamed resources. Every engagement has a named Windows lead who joins your standups and owns the release.",
  },
  {
    q: "Do you build native Windows apps or cross-platform?",
    a: "Both, and we recommend the honest option. Native WinUI 3 or WPF with .NET when the app needs desktop performance, hardware access, offline data or deep OS integration. Cross-platform with .NET MAUI or Electron when the same product must also run on macOS or Linux and the interface is mostly forms, grids and dashboards.",
  },
  {
    q: "How long does Windows app development take?",
    a: "Discovery and UX take 2–3 weeks, a focused v1 build 8–10 weeks, and a full-feature Windows product 4–6 months including QA and Store certification. You install a signed build every sprint from week four, so timelines are verified by working software rather than percentages.",
  },
  {
    q: "Can you modernise our old WPF or WinForms application?",
    a: "Yes, and it is a large part of what we do. We audit the architecture, dependencies and licences, upgrade .NET Framework projects to .NET 8, rehost WinForms screens inside modern shells where a full rewrite is not justified, replace legacy installers with signed MSIX, and do it branch by branch so your live application keeps working throughout.",
  },
  {
    q: "Will you publish the app to the Microsoft Store for us?",
    a: "Yes. We prepare the MSIX package, listing, screenshots, age rating and privacy declarations, then submit and manage certification under your Partner Center account. If you would rather distribute outside the Store, we ship a signed installer with an auto-update channel and silent switches for your IT team.",
  },
  {
    q: "Do you support the app after launch?",
    a: "Every project includes 30 days of free post-launch support. After that, care plans cover annual Windows releases, .NET and SDK upgrades, Store policy changes, crash triage and a monthly change report, with iteration sprints whenever you want new features.",
  },
  {
    q: "Do you sign an NDA before we share the idea?",
    a: "Always, before any code or product detail changes hands. Access is least-privilege, credentials stay in your vault, and delivery can be aligned with HIPAA or GDPR requirements when your sector needs it.",
  },
];
