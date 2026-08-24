export const ERP_HERO = {
  eyebrow: "School ERP Software India · Cloud based · Since 2010",
  h1: ["School ERP software", "that runs admissions,", "fees and classrooms."],
  lead:
    "ACSIUS builds and deploys cloud based school ERP software for CBSE, ICSE, State and IB schools — admissions, attendance, timetable, exams, online fees, transport and parent app in one login.",
  support:
    "Rolled out module by module with data migration, staff training and support from a single accountable team in New Delhi.",
  badges: ["Online fees", "Parent app", "CBSE report cards", "Cloud hosted"],
  stats: [
    { value: 120, suffix: "+", label: "Schools deployed" },
    { value: 18, suffix: "", label: "Core modules" },
    { value: 30, suffix: "d", label: "Typical rollout" },
    { value: 99, suffix: "%", label: "Uptime target" },
  ],
};

/** Sidebar-style module explorer */
export const ERP_MODULES = [
  {
    key: "admissions",
    icon: "◈",
    label: "Admissions",
    title: "Enquiry to enrolment, without paper",
    body:
      "Online enquiry forms, prospectus sales, entrance scheduling and one-click enrolment that pushes the student straight into class rosters.",
    ships: ["Online application", "Document upload", "Merit & waitlist", "Auto admission number"],
    metric: "62%",
    metricLabel: "less admission desk time",
  },
  {
    key: "fees",
    icon: "₹",
    label: "Online fees",
    title: "School ERP software with online fees",
    body:
      "Term, transport and optional heads in one fee plan, with UPI, card and netbanking collection, auto receipts, late-fee rules and daily reconciliation.",
    ships: ["UPI / card / netbanking", "Auto receipts & reminders", "Concessions & late fees", "Day-close reports"],
    metric: "3.4x",
    metricLabel: "faster fee collection",
  },
  {
    key: "attendance",
    icon: "◉",
    label: "Attendance",
    title: "Biometric, RFID or teacher app",
    body:
      "Period-wise and day-wise attendance from any device, with SMS or app alerts to parents the moment a child is marked absent.",
    ships: ["Biometric / RFID sync", "Period-wise marking", "Absent alerts", "Monthly registers"],
    metric: "< 2 min",
    metricLabel: "to mark a full class",
  },
  {
    key: "exams",
    icon: "✎",
    label: "Exams & results",
    title: "CBSE-ready assessment and report cards",
    body:
      "Grading schemes for CBSE, ICSE, State and IB, co-scholastic areas, marks entry checks and printable report cards in your school's format.",
    ships: ["Board grading schemes", "Marks entry validation", "Report card designer", "Result analytics"],
    metric: "9 hrs",
    metricLabel: "saved per exam cycle",
  },
  {
    key: "timetable",
    icon: "▦",
    label: "Timetable",
    title: "Clash-free scheduling in minutes",
    body:
      "Auto-generated timetables that respect teacher load, subject periods and lab availability, with instant substitution when staff are on leave.",
    ships: ["Auto generation", "Teacher load rules", "Substitution board", "Room & lab mapping"],
    metric: "0",
    metricLabel: "double-booked teachers",
  },
  {
    key: "transport",
    icon: "➤",
    label: "Transport",
    title: "Live routes parents can see",
    body:
      "Route and stop masters, GPS tracking, driver rosters and stop-wise fee mapping, with pickup and drop notifications in the parent app.",
    ships: ["GPS tracking", "Stop-wise fees", "Driver roster", "Pickup alerts"],
    metric: "41%",
    metricLabel: "fewer transport calls",
  },
  {
    key: "parent",
    icon: "☏",
    label: "Parent & student app",
    title: "One app instead of ten WhatsApp groups",
    body:
      "Homework, circulars, attendance, results, fee dues and leave requests in an Android and iOS app branded for your school.",
    ships: ["Homework & circulars", "Fee payment", "Leave requests", "Push notifications"],
    metric: "78%",
    metricLabel: "monthly parent logins",
  },
  {
    key: "admin",
    icon: "⚙",
    label: "Staff & accounts",
    title: "Payroll, inventory and library",
    body:
      "HR records, leave and payroll, library circulation, hostel and inventory — the back office modules most school ERP demos skip.",
    ships: ["Payroll & leave", "Library circulation", "Hostel & inventory", "Audit-ready ledgers"],
    metric: "1",
    metricLabel: "source of truth",
  },
];

/** Role switcher — app-window cards */
export const ERP_ROLES = [
  {
    key: "principal",
    label: "Principal",
    headline: "Every number on one screen",
    lines: [
      "Live strength, attendance and fee collection dashboard",
      "Section-wise result and teacher performance analytics",
      "Approvals for concessions, leave and purchase requests",
    ],
  },
  {
    key: "teacher",
    label: "Teacher",
    headline: "Less paperwork, more class time",
    lines: [
      "Mark attendance and homework from a phone",
      "Marks entry with validation and locked deadlines",
      "Direct message to a class or a single parent",
    ],
  },
  {
    key: "accounts",
    label: "Accounts",
    headline: "Fees reconciled the same day",
    lines: [
      "Online and offline collection in one ledger",
      "Defaulter lists with automated reminder cycles",
      "Export-ready reports for audit and Tally",
    ],
  },
  {
    key: "parent",
    label: "Parent",
    headline: "Answers without visiting school",
    lines: [
      "Pay fees online and download receipts instantly",
      "See attendance, homework and report cards",
      "Apply for leave and track the school bus",
    ],
  },
  {
    key: "student",
    label: "Student",
    headline: "One place for the day's work",
    lines: [
      "Timetable, homework and study material",
      "Exam schedule and marks history",
      "Circulars, events and achievements",
    ],
  },
];

/** Horizontal fee flow */
export const ERP_FEE_FLOW = [
  { step: "01", title: "Fee plan", note: "Heads, terms and concessions configured per class." },
  { step: "02", title: "Invoice", note: "Auto-generated dues with due dates and late-fee rules." },
  { step: "03", title: "Notify", note: "App push, SMS and email reminders on a schedule." },
  { step: "04", title: "Pay online", note: "UPI, card, netbanking or wallet from the parent app." },
  { step: "05", title: "Reconcile", note: "Receipt, ledger entry and day-close in one action." },
];

export const ERP_BOARDS = [
  { name: "CBSE", note: "Grading, co-scholastic areas and CBSE-format report cards." },
  { name: "ICSE / ISC", note: "Subject weightage, internal assessment and mark statements." },
  { name: "State boards", note: "Regional grading, language subjects and local reporting." },
  { name: "IB / IGCSE", note: "Criteria-based assessment and descriptor-led reporting." },
  { name: "Pre-school", note: "Observation notes, milestones and photo-led parent updates." },
  { name: "Coaching & institutes", note: "Batches, test series and instalment-based fees." },
  { name: "Multi-branch groups", note: "One login across campuses with consolidated reporting." },
  { name: "Hostel schools", note: "Hostel allotment, mess, gate pass and warden records." },
];

export const ERP_DEPLOY = {
  cloud: {
    title: "Cloud based school ERP",
    tag: "Recommended",
    points: [
      "Hosted, backed up and updated by us",
      "Access from school, home or phone",
      "Per-student annual subscription",
      "Scales for admission season traffic",
    ],
  },
  onprem: {
    title: "On-premise / private server",
    tag: "For strict IT policies",
    points: [
      "Runs inside your own server room",
      "Data stays on school infrastructure",
      "One-time licence plus AMC",
      "VPN access for staff off campus",
    ],
  },
};

export const ERP_IMPACT = [
  { value: 3, suffix: "x", label: "Fee collection speed", note: "Online payments clear before term deadlines." },
  { value: 62, suffix: "%", label: "Less admin paperwork", note: "Registers, receipts and reports generated, not typed." },
  { value: 78, suffix: "%", label: "Parent app adoption", note: "Median monthly active parents after rollout." },
  { value: 30, suffix: "d", label: "Go-live", note: "From data migration to first live fee cycle." },
];

export const ERP_ROLLOUT = [
  {
    phase: "Week 1",
    title: "Discovery & data audit",
    body: "Module scope, board requirements and a clean-up plan for existing student and fee data.",
  },
  {
    phase: "Week 2",
    title: "Setup & migration",
    body: "Classes, sections, fee heads and staff imported; branding, roles and permissions configured.",
  },
  {
    phase: "Week 3",
    title: "Training",
    body: "Hands-on sessions for office, accounts and teaching staff, plus recorded walkthroughs.",
  },
  {
    phase: "Week 4",
    title: "Go live",
    body: "Parent app rollout, first online fee cycle and daily support on standby.",
  },
  {
    phase: "Ongoing",
    title: "Support & updates",
    body: "Named support contact, board circular updates and quarterly feature releases.",
  },
];

export const ERP_TRUST = [
  { title: "Role-based access", body: "Every screen and report locked to a role, with an activity log." },
  { title: "Daily backups", body: "Automated encrypted backups with point-in-time restore." },
  { title: "PG-certified payments", body: "Collection through RBI-compliant gateways; no card data stored." },
  { title: "Data ownership", body: "Your data, exportable any time in open formats." },
];

export const ERP_COMPARE = {
  typical: {
    title: "Typical ERP vendor",
    points: [
      "Demo shows features that are still on a roadmap",
      "Fee module cannot handle concessions or late fees",
      "Report cards need manual Excel work every term",
      "Support is a shared ticket queue",
      "Data migration billed as a surprise extra",
      "Parent app is a browser page in a wrapper",
    ],
  },
  acsius: {
    title: "ACSIUS school ERP",
    points: [
      "You test your own data in a sandbox before signing",
      "Fee engine built for Indian school fee structures",
      "Board-format report cards configured once, printed forever",
      "Named support contact with agreed response times",
      "Migration, training and go-live priced upfront",
      "Native Android and iOS app under your school's brand",
    ],
  },
};

export const ERP_WHY = [
  { metric: "16", title: "Years building software", body: "Delhi-based product and engineering team since 2010." },
  { metric: "120+", title: "Schools live", body: "Single-campus schools to multi-branch groups across India." },
  { metric: "18", title: "Modules ready", body: "Turn on what you need now, add the rest later." },
  { metric: "0", title: "Hidden charges", body: "Migration, training and support scoped in writing." },
];

export const ERP_FAQS = [
  {
    q: "What is school ERP software and what does it replace?",
    a: "School ERP software is a single system that runs the entire school: admissions, student records, attendance, timetable, exams and report cards, fee collection, transport, library, hostel, payroll and parent communication. It replaces the mix of registers, Excel sheets, standalone accounting software and WhatsApp groups most schools use, so every department works from the same data.",
  },
  {
    q: "Is your school management software suitable for CBSE schools?",
    a: "Yes. Our school ERP software for CBSE schools ships with CBSE grading schemes, co-scholastic areas, internal assessment weightage and report card formats that match board requirements, and we configure your exact template during setup. ICSE, State board, IB and IGCSE assessment structures are also supported, which matters for groups running more than one curriculum.",
  },
  {
    q: "Can parents pay fees online through the system?",
    a: "Yes. The online school management system includes an integrated payment gateway, so parents pay term fees, transport fees and optional heads by UPI, card, netbanking or wallet from the parent app or a web link. Receipts are generated instantly, ledgers update in real time, and your accounts team gets a day-close and reconciliation report without manual entry.",
  },
  {
    q: "Is the ERP cloud based or installed on our server?",
    a: "Both options exist. Most schools choose our cloud based school ERP software: we host, secure, back up and update it, and staff and parents access it from anywhere on a per-student annual subscription. Schools with strict internal IT policies can run the same product on a private server with a one-time licence and an annual maintenance contract.",
  },
  {
    q: "How long does implementation take and do you migrate our old data?",
    a: "A typical rollout is about 30 days: week one for discovery and a data audit, week two for setup and migration of students, classes, fee heads and staff, week three for staff training, and week four for parent app rollout and the first live fee cycle. Data migration from Excel or an existing ERP is included and priced upfront, never billed later as an extra.",
  },
  {
    q: "What does school ERP software cost in India?",
    a: "Cloud plans are priced per student per year and depend on the modules you switch on, with a one-time setup, migration and training fee. Small single-campus schools usually start with admissions, fees, attendance and the parent app, then add exams, transport and payroll. You get a written quote listing modules, setup cost, support scope and renewal terms before you commit.",
  },
];
