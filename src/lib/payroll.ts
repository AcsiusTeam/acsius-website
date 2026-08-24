export const PAY_HERO = {
  eyebrow: "Payroll Software in India · Cloud based · Since 2010",
  h1: ["Payroll software", "that runs salaries,", "compliance and payslips."],
  lead:
    "ACSIUS builds and deploys cloud payroll software for Indian businesses — salary structures, attendance-linked inputs, PF, ESI, TDS and professional tax, payslips and a self-service employee portal in one login.",
  support:
    "Configured for your CTC structure, migrated from your existing sheets and supported by a single accountable team in New Delhi.",
  badges: ["PF & ESI", "TDS ready", "Employee self-service", "Cloud hosted"],
  stats: [
    { value: 240, suffix: "+", label: "Businesses live" },
    { value: 14, suffix: "", label: "Payroll modules" },
    { value: 21, suffix: "d", label: "Typical rollout" },
    { value: 99, suffix: "%", label: "Uptime target" },
  ],
};

/** Sidebar-style module explorer */
export const PAY_MODULES = [
  {
    key: "salary",
    icon: "₹",
    label: "Salary structure",
    title: "Any CTC structure, calculated once",
    body:
      "Earnings, deductions, reimbursements and variable heads defined as formulas, so a change in basic ripples correctly through HRA, PF and net pay.",
    ships: ["Formula-based heads", "Grade & band templates", "Arrears & revisions", "Multi-entity CTC"],
    metric: "0",
    metricLabel: "manual Excel formulas",
  },
  {
    key: "runpayroll",
    icon: "▶",
    label: "Payroll run",
    title: "Online payroll software with a locked run",
    body:
      "Attendance, leave, overtime and loss-of-pay flow into a single monthly run with validation checks, maker-checker approval and a locked audit trail.",
    ships: ["One-click monthly run", "Validation warnings", "Maker-checker approval", "Locked audit trail"],
    metric: "4 hrs",
    metricLabel: "to close a month",
  },
  {
    key: "compliance",
    icon: "§",
    label: "Statutory compliance",
    title: "PF, ESI, PT and TDS without chasing",
    body:
      "Statutory rates maintained by us, with ECR files, ESI returns, professional tax slabs by state and Form 16 / 24Q workings generated from the same run.",
    ships: ["PF ECR file", "ESI return file", "State-wise PT slabs", "Form 16 & 24Q workings"],
    metric: "100%",
    metricLabel: "returns filed on time",
  },
  {
    key: "attendance",
    icon: "◉",
    label: "Attendance & leave",
    title: "Biometric, app or roster inputs",
    body:
      "Shift rosters, biometric sync, leave balances and approvals feed payroll directly, so loss-of-pay and overtime never get typed twice.",
    ships: ["Biometric / app sync", "Shift & roster rules", "Leave policy engine", "Overtime & LOP"],
    metric: "< 5 min",
    metricLabel: "to import a month",
  },
  {
    key: "payslip",
    icon: "▤",
    label: "Payslips & taxes",
    title: "Payslips and tax declarations in one place",
    body:
      "Branded payslips released with one action, employee tax regime choice, investment declaration and proof upload with finance-side verification.",
    ships: ["Branded payslips", "Old vs new regime", "Investment declarations", "Proof verification"],
    metric: "92%",
    metricLabel: "declarations self-served",
  },
  {
    key: "ess",
    icon: "☏",
    label: "Employee portal",
    title: "Employees stop emailing HR",
    body:
      "Android, iOS and web self-service for payslips, tax proofs, leave, reimbursement claims and letters — with role-based access for managers.",
    ships: ["Payslip download", "Leave & claims", "Letter requests", "Manager approvals"],
    metric: "70%",
    metricLabel: "fewer HR queries",
  },
  {
    key: "reimburse",
    icon: "◈",
    label: "Reimbursements",
    title: "Claims that settle with salary",
    body:
      "Policy limits per grade, receipt upload, approval chain and settlement either with the payroll run or as an off-cycle payout.",
    ships: ["Grade-wise limits", "Receipt upload", "Approval chain", "Off-cycle payout"],
    metric: "3 days",
    metricLabel: "average claim closure",
  },
  {
    key: "reports",
    icon: "⚙",
    label: "Reports & payouts",
    title: "Bank files, MIS and ledgers",
    body:
      "Bank advice files for every major Indian bank, cost-centre MIS, provisions and a journal export that your accountant can post as-is.",
    ships: ["Bank advice files", "Cost-centre MIS", "Provision reports", "Tally / ERP export"],
    metric: "1",
    metricLabel: "source of truth",
  },
];

/** Role switcher — app-window cards */
export const PAY_ROLES = [
  {
    key: "founder",
    label: "Founder / CEO",
    headline: "Payroll cost, visible before it is paid",
    lines: [
      "Monthly cost, headcount and provision dashboard",
      "Department and cost-centre wise salary spend",
      "Approval gate before any run is released",
    ],
  },
  {
    key: "hr",
    label: "HR",
    headline: "One month-end, not three days of it",
    lines: [
      "Attendance and leave flow straight into payroll",
      "Onboarding, exits and full-and-final in the same flow",
      "Letters, payslips and queries handled by self-service",
    ],
  },
  {
    key: "finance",
    label: "Finance",
    headline: "Books that reconcile the same day",
    lines: [
      "Bank advice file and payout confirmation in one place",
      "Statutory challans, returns and provisions ready",
      "Journal export straight into your accounting system",
    ],
  },
  {
    key: "manager",
    label: "Manager",
    headline: "Approvals without spreadsheets",
    lines: [
      "Approve leave, overtime and claims from a phone",
      "Team attendance and absence view",
      "Visibility on team cost, not individual salaries",
    ],
  },
  {
    key: "employee",
    label: "Employee",
    headline: "Answers without asking HR",
    lines: [
      "Payslips and tax computation any time",
      "Declare investments and upload proofs",
      "Apply for leave, claims and letters",
    ],
  },
];

/** Horizontal payroll cycle flow */
export const PAY_FLOW = [
  { step: "01", title: "Inputs", note: "Attendance, leave, overtime and new joiners captured." },
  { step: "02", title: "Compute", note: "Formulas run CTC, PF, ESI, PT and TDS in one pass." },
  { step: "03", title: "Review", note: "Variance checks and maker-checker approval before release." },
  { step: "04", title: "Pay out", note: "Bank advice file uploaded; salaries credited on schedule." },
  { step: "05", title: "File & post", note: "Challans, returns, payslips and journal entries generated." },
];

export const PAY_SECTORS = [
  { name: "IT & software", note: "Variable pay, stock-linked components and remote-state PT." },
  { name: "Manufacturing", note: "Shift allowances, overtime slabs and contractor wage registers." },
  { name: "Retail & QSR", note: "Multi-outlet rosters, hourly staff and high attrition cycles." },
  { name: "Healthcare", note: "Duty rosters, on-call allowances and nurse-grade structures." },
  { name: "Staffing agencies", note: "Client-wise billing, deployed-staff payroll and compliance proof." },
  { name: "Schools & institutes", note: "Teaching and non-teaching grades with gratuity tracking." },
  { name: "Startups", note: "Fast headcount changes, ESOP notes and founder-lean HR teams." },
  { name: "Multi-state groups", note: "One login across entities with state-wise statutory rules." },
];

export const PAY_DEPLOY = {
  cloud: {
    title: "Cloud payroll software",
    tag: "Recommended",
    points: [
      "Hosted, backed up and updated by us",
      "Statutory rate changes applied for you",
      "Per-employee monthly subscription",
      "Access from office, home or phone",
    ],
  },
  onprem: {
    title: "On-premise / private server",
    tag: "For strict IT policies",
    points: [
      "Runs inside your own server room",
      "Salary data stays on your infrastructure",
      "One-time licence plus AMC",
      "VPN access for finance and HR off site",
    ],
  },
};

export const PAY_IMPACT = [
  { value: 4, suffix: "hrs", label: "Month-end payroll close", note: "Down from two to three working days." },
  { value: 70, suffix: "%", label: "Fewer HR queries", note: "Payslips and proofs self-served by employees." },
  { value: 99, suffix: "%", label: "Calculation accuracy", note: "Formula-driven heads with variance checks." },
  { value: 21, suffix: "d", label: "Go-live", note: "From data migration to first live payroll run." },
];

export const PAY_ROLLOUT = [
  {
    phase: "Week 1",
    title: "Discovery & policy audit",
    body: "CTC structures, leave and shift policies, statutory registrations and current-sheet clean-up.",
  },
  {
    phase: "Week 2",
    title: "Setup & migration",
    body: "Employee masters, salary heads, opening balances and YTD tax data imported and reconciled.",
  },
  {
    phase: "Week 3",
    title: "Parallel run & training",
    body: "One month run in parallel against your existing payroll, plus HR and finance training.",
  },
  {
    phase: "Week 4",
    title: "Go live",
    body: "Employee portal rollout, first live run, bank file upload and statutory filing support.",
  },
  {
    phase: "Ongoing",
    title: "Support & updates",
    body: "Named support contact, budget-change updates and quarterly feature releases.",
  },
];

export const PAY_TRUST = [
  { title: "Role-based access", body: "Salary visibility locked by role, with a full activity log." },
  { title: "Daily backups", body: "Automated encrypted backups with point-in-time restore." },
  { title: "Statutory upkeep", body: "PF, ESI, PT and TDS rules updated by us after every change." },
  { title: "Data ownership", body: "Your payroll data, exportable any time in open formats." },
];

export const PAY_COMPARE = {
  typical: {
    title: "Typical payroll vendor",
    points: [
      "Demo uses their sample data, never your CTC structure",
      "Formula changes need a support ticket and a wait",
      "Statutory files exported half-ready for the portal",
      "Support is a shared queue with no owner",
      "Migration of YTD tax data billed as an extra",
      "Employee portal is a browser page in a wrapper",
    ],
  },
  acsius: {
    title: "ACSIUS payroll software",
    points: [
      "Parallel run on your own last-month data before you sign",
      "Salary heads you can edit as formulas, not tickets",
      "PF ECR, ESI and 24Q files ready to upload",
      "Named support contact with agreed response times",
      "Migration, parallel run and training priced upfront",
      "Native Android and iOS self-service under your brand",
    ],
  },
};

export const PAY_WHY = [
  { metric: "16", title: "Years building software", body: "Delhi-based product and engineering team since 2010." },
  { metric: "240+", title: "Businesses live", body: "From 20-person startups to multi-state groups." },
  { metric: "14", title: "Modules ready", body: "Turn on payroll now, add HR and claims later." },
  { metric: "0", title: "Hidden charges", body: "Migration, training and support scoped in writing." },
];

export const PAY_FAQS = [
  {
    q: "What is payroll software and what does it replace?",
    a: "Payroll software is a single system that calculates salaries, deductions and statutory dues, releases payslips and produces bank and compliance files. For most businesses it replaces a stack of Excel sheets, a separate attendance register and manual PF, ESI and TDS workings, so HR and finance work from the same numbers instead of reconciling three versions every month.",
  },
  {
    q: "Does the payroll software handle PF, ESI, PT and TDS compliance?",
    a: "Yes. Statutory rates and slabs are maintained by us, and every monthly run produces PF ECR files, ESI return files, state-wise professional tax workings and TDS computations with 24Q and Form 16 data. Employees can pick between the old and new tax regime, declare investments and upload proofs for finance-side verification inside the same system.",
  },
  {
    q: "Can employees download payslips and submit tax proofs themselves?",
    a: "Yes. The employee self-service portal, available on web, Android and iOS under your brand, gives every employee their payslips, tax computation, leave balance, reimbursement claims and letter requests. In practice this removes around 70 percent of routine HR email, because people stop asking for documents they can download in two taps.",
  },
  {
    q: "Is it cloud payroll software or installed on our server?",
    a: "Both options exist. Most businesses choose our cloud payroll software: we host, secure, back up and update it, statutory changes are applied for you, and the cost is a per-employee monthly subscription. Companies with strict internal IT policies can run the same product on a private server with a one-time licence and an annual maintenance contract.",
  },
  {
    q: "How long does implementation take and do you migrate our old data?",
    a: "A typical rollout is about 21 to 30 days: discovery and a policy audit, then migration of employee masters, salary heads, opening balances and year-to-date tax data, then a parallel run against your existing payroll for one month, then go-live with the employee portal. Migration from Excel or another payroll product is included and priced upfront.",
  },
  {
    q: "What does payroll software cost in India?",
    a: "Cloud plans are priced per employee per month and depend on the modules you switch on, with a one-time setup, migration and training fee. Smaller teams usually start with payroll, compliance and the employee portal, then add attendance, reimbursements and MIS. You get a written quote listing modules, setup cost, support scope and renewal terms before you commit.",
  },
];
