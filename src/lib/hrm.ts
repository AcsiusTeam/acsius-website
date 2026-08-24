export const HRM_HERO = {
  eyebrow: "HRM Software India · Cloud based · Since 2010",
  h1: ["HRM software", "that runs people,", "policy and paperwork."],
  lead:
    "ACSIUS builds and deploys cloud based HRM software for Indian businesses — employee records, onboarding, attendance, leave, performance, payroll inputs and a self-service app in one login.",
  support:
    "Configured around your policies, migrated from your existing sheets and supported by a single accountable team in New Delhi.",
  badges: ["Employee self-service", "Attendance & leave", "Performance reviews", "Cloud hosted"],
  stats: [
    { value: 260, suffix: "+", label: "Companies live" },
    { value: 16, suffix: "", label: "HR modules" },
    { value: 18, suffix: "d", label: "Typical rollout" },
    { value: 99, suffix: "%", label: "Uptime target" },
  ],
};

/** Sidebar-style module explorer */
export const HRM_MODULES = [
  {
    key: "core",
    icon: "◈",
    label: "Employee records",
    title: "One employee file, not seven folders",
    body:
      "Personal, contractual, statutory and document data in a single record, with expiry alerts for IDs, contracts and visas and a full change history.",
    ships: ["Custom field groups", "Document vault", "Expiry reminders", "Org chart & reporting lines"],
    metric: "1",
    metricLabel: "record per employee",
  },
  {
    key: "onboarding",
    icon: "▶",
    label: "Onboarding & exits",
    title: "Day one ready before day one",
    body:
      "Offer to joining as a checklist across HR, IT and admin, with digital document collection, e-sign and an exit flow that closes assets and clearances.",
    ships: ["Digital joining kit", "Task checklists", "Asset issue & return", "Exit clearance trail"],
    metric: "3 days",
    metricLabel: "saved per joiner",
  },
  {
    key: "attendance",
    icon: "◉",
    label: "Attendance & shifts",
    title: "Biometric, app or geo punch",
    body:
      "Shift rosters, weekly offs, regularisation requests and geo-tagged mobile punching for field teams — all feeding one attendance register.",
    ships: ["Biometric / app / geo punch", "Shift & roster rules", "Regularisation workflow", "Monthly registers"],
    metric: "< 5 min",
    metricLabel: "to close a month",
  },
  {
    key: "leave",
    icon: "▤",
    label: "Leave management",
    title: "Leave policy as rules, not emails",
    body:
      "Accrual, carry-forward, encashment and comp-off encoded per grade, with approval chains, holiday calendars by location and live balances.",
    ships: ["Accrual & carry-forward", "Approval chains", "Location holiday lists", "Comp-off & encashment"],
    metric: "0",
    metricLabel: "leave balance disputes",
  },
  {
    key: "performance",
    icon: "✦",
    label: "Performance",
    title: "Goals, reviews and ratings in one cycle",
    body:
      "KRA and OKR libraries, self and manager reviews, 360 feedback and normalised ratings that flow into increment and promotion letters.",
    ships: ["KRA / OKR library", "Self & manager review", "360 feedback", "Increment workings"],
    metric: "94%",
    metricLabel: "reviews completed on time",
  },
  {
    key: "payrollinputs",
    icon: "₹",
    label: "Payroll & claims",
    title: "HR data that payroll can trust",
    body:
      "Loss of pay, overtime, arrears, reimbursements and salary revisions handed to payroll as approved inputs instead of a chased spreadsheet.",
    ships: ["Approved LOP & OT", "Reimbursement claims", "Salary revision history", "Payroll handoff file"],
    metric: "70%",
    metricLabel: "fewer month-end corrections",
  },
  {
    key: "ess",
    icon: "☏",
    label: "Employee app",
    title: "Employees stop emailing HR",
    body:
      "Android, iOS and web self-service for attendance, leave, claims, documents, letters and directory — with manager approvals on the same app.",
    ships: ["Punch & leave from phone", "Letters & documents", "Claims & approvals", "Team directory"],
    metric: "82%",
    metricLabel: "monthly active employees",
  },
  {
    key: "reports",
    icon: "⚙",
    label: "HR analytics",
    title: "Headcount, attrition and cost views",
    body:
      "Dashboards for headcount movement, attrition by function, absence trends and manpower cost, plus exportable statutory registers.",
    ships: ["Headcount & attrition", "Absence trends", "Manpower cost MIS", "Statutory registers"],
    metric: "1",
    metricLabel: "source of truth",
  },
];

/** Role switcher — app-window cards */
export const HRM_ROLES = [
  {
    key: "founder",
    label: "Founder / CEO",
    headline: "The people picture on one screen",
    lines: [
      "Headcount, cost and attrition dashboard by function",
      "Hiring pipeline and open position status",
      "Approval gate on offers, increments and exits",
    ],
  },
  {
    key: "hr",
    label: "HR",
    headline: "Policy runs itself, HR handles people",
    lines: [
      "Onboarding, confirmation and exit checklists on autopilot",
      "Attendance, leave and claim exceptions in one queue",
      "Letters, documents and queries answered by self-service",
    ],
  },
  {
    key: "manager",
    label: "Manager",
    headline: "Approvals and reviews from a phone",
    lines: [
      "Approve leave, regularisation and claims in a tap",
      "Team attendance, absence and roster view",
      "Goals, feedback and review cycle for direct reports",
    ],
  },
  {
    key: "finance",
    label: "Finance",
    headline: "Clean inputs before payroll runs",
    lines: [
      "Approved LOP, overtime and arrears in one file",
      "Reimbursement settlements with receipts attached",
      "Manpower cost and provision reports by cost centre",
    ],
  },
  {
    key: "employee",
    label: "Employee",
    headline: "Answers without asking HR",
    lines: [
      "Punch in, apply for leave and check balances",
      "Download letters, payslips and policy documents",
      "Fill goals, self-review and see feedback",
    ],
  },
];

/** Horizontal employee lifecycle flow */
export const HRM_FLOW = [
  { step: "01", title: "Hire", note: "Offer, digital joining kit and document collection." },
  { step: "02", title: "Onboard", note: "Checklists across HR, IT and admin before day one." },
  { step: "03", title: "Operate", note: "Attendance, leave, claims and approvals run daily." },
  { step: "04", title: "Grow", note: "Goals, reviews, increments and promotion letters." },
  { step: "05", title: "Exit", note: "Clearance, asset return and full-and-final handoff." },
];

export const HRM_SECTORS = [
  { name: "IT & software", note: "Remote teams, geo punching and OKR-led review cycles." },
  { name: "Manufacturing", note: "Shift rosters, contractor registers and overtime slabs." },
  { name: "Retail & QSR", note: "Multi-outlet rosters, hourly staff and fast attrition." },
  { name: "Healthcare", note: "Duty rosters, on-call tracking and credential expiry alerts." },
  { name: "Staffing agencies", note: "Client-wise deployment, bulk onboarding and compliance proof." },
  { name: "Schools & institutes", note: "Teaching and non-teaching grades with leave and gratuity records." },
  { name: "Small business", note: "HRM software for small business — start with records, leave and the app." },
  { name: "Multi-state groups", note: "One login across entities with location-wise policies." },
];

export const HRM_DEPLOY = {
  cloud: {
    title: "Cloud based HRM software",
    tag: "Recommended",
    points: [
      "Hosted, backed up and updated by us",
      "Access from office, site or phone",
      "Per-employee monthly subscription",
      "Policy and compliance updates applied for you",
    ],
  },
  onprem: {
    title: "On-premise / private server",
    tag: "For strict IT policies",
    points: [
      "Runs inside your own server room",
      "Employee data stays on your infrastructure",
      "One-time licence plus AMC",
      "VPN access for HR and managers off site",
    ],
  },
};

export const HRM_IMPACT = [
  { value: 82, suffix: "%", label: "Employee app adoption", note: "Median monthly active employees after rollout." },
  { value: 70, suffix: "%", label: "Fewer HR queries", note: "Letters, balances and documents self-served." },
  { value: 6, suffix: "hrs", label: "Saved per week", note: "Registers, approvals and reports stop being manual." },
  { value: 18, suffix: "d", label: "Go-live", note: "From data migration to first live attendance cycle." },
];

export const HRM_ROLLOUT = [
  {
    phase: "Week 1",
    title: "Discovery & policy audit",
    body: "Leave, attendance, shift and review policies mapped, plus a clean-up plan for existing employee data.",
  },
  {
    phase: "Week 2",
    title: "Setup & migration",
    body: "Employee masters, org structure, leave balances and documents imported and reconciled.",
  },
  {
    phase: "Week 3",
    title: "Training",
    body: "Hands-on sessions for HR, managers and admin staff, plus recorded walkthroughs for employees.",
  },
  {
    phase: "Week 4",
    title: "Go live",
    body: "Employee app rollout, first live attendance and leave cycle, and daily support on standby.",
  },
  {
    phase: "Ongoing",
    title: "Support & updates",
    body: "Named support contact, policy-change updates and quarterly feature releases.",
  },
];

export const HRM_TRUST = [
  { title: "Role-based access", body: "Salary and personal data locked by role, with a full activity log." },
  { title: "Daily backups", body: "Automated encrypted backups with point-in-time restore." },
  { title: "Audit trail", body: "Every policy, approval and record change stamped with who and when." },
  { title: "Data ownership", body: "Your HR data, exportable any time in open formats." },
];

export const HRM_COMPARE = {
  typical: {
    title: "Typical HRMS vendor",
    points: [
      "Demo uses their sample company, never your policy",
      "Leave rules need a support ticket and a wait",
      "Attendance and payroll live in two disconnected tools",
      "Support is a shared queue with no owner",
      "Data migration billed later as a surprise extra",
      "Employee app is a browser page in a wrapper",
    ],
  },
  acsius: {
    title: "ACSIUS HRM software",
    points: [
      "Sandbox loaded with your own employee and leave data",
      "Leave, shift and review rules you can edit yourself",
      "One system from attendance to payroll handoff",
      "Named support contact with agreed response times",
      "Migration, training and go-live priced upfront",
      "Native Android and iOS app under your brand",
    ],
  },
};

export const HRM_WHY = [
  { metric: "16", title: "Years building software", body: "Delhi-based product and engineering team since 2010." },
  { metric: "260+", title: "Companies live", body: "From 15-person teams to multi-state groups." },
  { metric: "16", title: "Modules ready", body: "Turn on records and leave now, add performance later." },
  { metric: "0", title: "Hidden charges", body: "Migration, training and support scoped in writing." },
];

export const HRM_FAQS = [
  {
    q: "What is HRM software and what does it replace?",
    a: "HRM software is a single human resource management system that holds employee records and runs onboarding, attendance, leave, performance reviews, reimbursements, documents and payroll inputs. For most companies it replaces a stack of Excel sheets, a standalone biometric tool, shared drives full of documents and long email approval chains, so HR, managers and finance work from the same data.",
  },
  {
    q: "Is this HRM software suitable for small business?",
    a: "Yes. HRM software for small business usually starts with employee records, attendance, leave and the self-service app, priced per employee per month so a 15 to 50 person team pays only for what it uses. Performance reviews, reimbursements, recruitment and analytics can be switched on later without migrating to a different product or re-entering data.",
  },
  {
    q: "Does the employee management software handle attendance and leave policies?",
    a: "Yes. Shift rosters, weekly offs, biometric or geo-tagged mobile punching, regularisation requests, accrual and carry-forward rules, comp-off, encashment and location-wise holiday calendars are all configured as rules during setup. Managers approve from the app, balances update live, and HR gets monthly registers without rebuilding a spreadsheet.",
  },
  {
    q: "Is your HR management system cloud based or installed on our server?",
    a: "Both options exist. Most companies choose our cloud based HRM software: we host, secure, back up and update it, and staff access it from office, site or phone on a per-employee monthly subscription. Organisations with strict internal IT policies can run the same product on a private server with a one-time licence and an annual maintenance contract.",
  },
  {
    q: "Can it work with our existing payroll software?",
    a: "Yes. The HRM can hand over approved loss of pay, overtime, arrears, reimbursements and salary revisions as a structured payroll input file, or you can use our own payroll module so attendance, leave and salary sit in one system with a single audit trail and no monthly reconciliation between two tools.",
  },
  {
    q: "How long does implementation take and do you migrate our old data?",
    a: "A typical rollout is about 18 to 30 days: discovery and a policy audit, then migration of employee masters, org structure, leave balances and documents, then training for HR and managers, then go-live with the employee app and the first live attendance and leave cycle. Migration from Excel or another HRMS is included and priced upfront.",
  },
];
