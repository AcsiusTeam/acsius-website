export const HMS_HERO = {
  eyebrow: "Hospital Management Software · Cloud based · Since 2010",
  h1: ["Hospital software", "that runs OPD, IPD", "and billing as one."],
  lead:
    "ACSIUS builds and deploys cloud based hospital management software for Indian hospitals and clinics — registration, OPD, IPD, OT, pharmacy, lab, radiology, insurance and billing in a single login.",
  support:
    "Configured around your departments and tariff sheets, migrated from your existing registers and supported by one accountable team in New Delhi.",
  badges: ["OPD & IPD", "Pharmacy & lab", "Insurance & TPA", "Cloud hosted"],
  stats: [
    { value: 180, suffix: "+", label: "Facilities live" },
    { value: 18, suffix: "", label: "HMS modules" },
    { value: 24, suffix: "d", label: "Typical rollout" },
    { value: 99, suffix: "%", label: "Uptime target" },
  ],
};

/** Sidebar-style module explorer */
export const HMS_MODULES = [
  {
    key: "front",
    icon: "◈",
    label: "Registration & OPD",
    title: "One queue from gate to consultation",
    body:
      "Front-desk registration, UHID generation, appointment slots, token queue and doctor-wise OPD sheets, with repeat-visit history pulled up in a second.",
    ships: ["UHID & patient master", "Appointment & token queue", "Doctor OPD sheet", "Visit history"],
    metric: "40 sec",
    metricLabel: "to register a patient",
  },
  {
    key: "ipd",
    icon: "▤",
    label: "IPD & wards",
    title: "Bed board, not a whiteboard",
    body:
      "Admission, bed transfer and discharge on a live bed map, with nursing notes, doctor rounds, diet orders and running charges posted per bed.",
    ships: ["Live bed availability map", "Admission to discharge trail", "Nursing & round notes", "Running IPD charges"],
    metric: "100%",
    metricLabel: "bed status accuracy",
  },
  {
    key: "billing",
    icon: "₹",
    label: "Billing & cash",
    title: "Hospital management software with billing built in",
    body:
      "Tariff-wise pricing for cash, corporate and insurance patients, advance receipts, package deductions and a discharge bill that reconciles itself.",
    ships: ["Multi-tariff price lists", "Advance & part payments", "Package & procedure billing", "Day-close cash report"],
    metric: "6 min",
    metricLabel: "to a discharge bill",
  },
  {
    key: "emr",
    icon: "✚",
    label: "EMR & prescriptions",
    title: "Clinical notes doctors will actually use",
    body:
      "Templated notes by speciality, vitals, diagnosis coding, e-prescriptions with drug interaction alerts, and past reports attached to the same file.",
    ships: ["Speciality note templates", "Vitals & growth charts", "E-prescription printing", "Allergy & interaction alerts"],
    metric: "1",
    metricLabel: "file per patient",
  },
  {
    key: "pharmacy",
    icon: "◉",
    label: "Pharmacy & stores",
    title: "Stock that matches the shelf",
    body:
      "Batch and expiry-wise inventory, indent to issue for wards, counter sales, purchase orders, GST invoices and reorder alerts across stores.",
    ships: ["Batch & expiry tracking", "Ward indent & issue", "Purchase & GRN", "Reorder & expiry alerts"],
    metric: "0",
    metricLabel: "expired stock write-offs",
  },
  {
    key: "diagnostics",
    icon: "⚗",
    label: "Lab & radiology",
    title: "Sample to signed report",
    body:
      "Order entry from OPD or ward, barcoded samples, analyser interfacing, validated result entry and PDF reports pushed to WhatsApp or the patient portal.",
    ships: ["Barcoded sample flow", "Analyser interface (HL7)", "Template result entry", "Report delivery links"],
    metric: "2 hrs",
    metricLabel: "average report turnaround",
  },
  {
    key: "insurance",
    icon: "▦",
    label: "Insurance & TPA",
    title: "Claims that don't sit in a drawer",
    body:
      "Pre-authorisation, query tracking, claim file assembly with supporting documents, and settlement follow-up per TPA, Ayushman or corporate scheme.",
    ships: ["Pre-auth & query log", "Scheme-wise tariffs", "Claim document pack", "Settlement ageing"],
    metric: "34%",
    metricLabel: "faster claim settlement",
  },
  {
    key: "mis",
    icon: "⚙",
    label: "MIS & dashboards",
    title: "Occupancy, revenue and leakage views",
    body:
      "Owner dashboards for footfall, bed occupancy, department revenue, doctor-wise share, collection ageing and revenue leakage, plus statutory registers.",
    ships: ["Occupancy & footfall", "Department P&L", "Doctor share workings", "Statutory registers"],
    metric: "1",
    metricLabel: "source of truth",
  },
];

/** Role switcher — app-window cards */
export const HMS_ROLES = [
  {
    key: "owner",
    label: "Owner / Director",
    headline: "The hospital on one screen",
    lines: [
      "Occupancy, footfall and revenue by department",
      "Collection ageing and insurance receivables",
      "Discount, write-off and leakage approvals",
    ],
  },
  {
    key: "doctor",
    label: "Doctor",
    headline: "Patient history before the patient sits down",
    lines: [
      "OPD list, past visits, reports and prescriptions",
      "E-prescribe with allergy and interaction alerts",
      "Ward rounds and order entry from a tablet",
    ],
  },
  {
    key: "nurse",
    label: "Nurse / Ward",
    headline: "Ward work without paper chits",
    lines: [
      "Bed board, admissions, transfers and discharges",
      "Vitals, medication charts and nursing notes",
      "Indents to pharmacy and sample requests to lab",
    ],
  },
  {
    key: "billing",
    label: "Billing / Front desk",
    headline: "Correct bill the first time",
    lines: [
      "Tariff picked automatically by patient category",
      "Advances, part payments and package deductions",
      "Day-close cash, card and UPI reconciliation",
    ],
  },
  {
    key: "patient",
    label: "Patient",
    headline: "Appointments and reports on a phone",
    lines: [
      "Book or reschedule an OPD appointment",
      "Download lab reports, bills and prescriptions",
      "Pay online and see estimate before admission",
    ],
  },
];

/** Horizontal patient journey */
export const HMS_FLOW = [
  { step: "01", title: "Register", note: "UHID, appointment or walk-in token at the front desk." },
  { step: "02", title: "Consult", note: "OPD notes, vitals and e-prescription by the doctor." },
  { step: "03", title: "Diagnose", note: "Lab and radiology orders, samples and signed reports." },
  { step: "04", title: "Admit & treat", note: "Bed allotment, ward charges, OT and pharmacy issues." },
  { step: "05", title: "Discharge & bill", note: "Summary, insurance claim and reconciled final bill." },
];

export const HMS_SECTORS = [
  { name: "Multi-speciality hospitals", note: "Departments, OT scheduling and doctor-wise revenue share." },
  { name: "Small hospitals", note: "Hospital management software for small hospitals — OPD, IPD and billing first." },
  { name: "Clinics & polyclinics", note: "Clinic management software with appointments, EMR and counter billing." },
  { name: "Nursing homes", note: "Bed board, nursing charts and simple pharmacy stock." },
  { name: "Maternity & IVF", note: "ANC cards, cycle tracking and package-wise billing." },
  { name: "Eye & dental chains", note: "Multi-branch tariffs, optical or implant stock and recall lists." },
  { name: "Diagnostic centres", note: "Barcoded samples, analyser interfacing and report delivery." },
  { name: "Hospital groups", note: "One login across units with branch-wise tariffs and MIS." },
];

export const HMS_DEPLOY = {
  cloud: {
    title: "Cloud based hospital management software",
    tag: "Recommended",
    points: [
      "Hosted, encrypted, backed up and updated by us",
      "Access from OPD, ward, branch or home",
      "Per-user or per-bed monthly subscription",
      "New tariffs and compliance updates applied for you",
    ],
  },
  onprem: {
    title: "On-premise / private server",
    tag: "For strict IT policies",
    points: [
      "Runs inside your own server room",
      "Patient data stays on your infrastructure",
      "One-time licence plus AMC",
      "Works through a local network outage window",
    ],
  },
};

export const HMS_IMPACT = [
  { value: 34, suffix: "%", label: "Faster claim settlement", note: "Pre-auth, queries and claim packs tracked in one place." },
  { value: 22, suffix: "%", label: "Less revenue leakage", note: "Every order billed to the patient it belongs to." },
  { value: 6, suffix: "min", label: "Discharge billing", note: "From discharge order to a reconciled final bill." },
  { value: 24, suffix: "d", label: "Go-live", note: "From data migration to the first live OPD day." },
];

export const HMS_ROLLOUT = [
  {
    phase: "Week 1",
    title: "Discovery & tariff audit",
    body: "Departments, tariff sheets, insurance schemes and existing registers mapped with your billing team.",
  },
  {
    phase: "Week 2",
    title: "Setup & migration",
    body: "Patient masters, doctor lists, price lists, pharmacy stock and opening balances imported and reconciled.",
  },
  {
    phase: "Week 3",
    title: "Training",
    body: "Hands-on sessions for front desk, nursing, pharmacy, lab and billing, plus recorded walkthroughs.",
  },
  {
    phase: "Week 4",
    title: "Go live",
    body: "First live OPD day with on-site support, then IPD, pharmacy and lab switched on department by department.",
  },
  {
    phase: "Ongoing",
    title: "Support & updates",
    body: "Named support contact, tariff-change help and quarterly feature releases.",
  },
];

export const HMS_TRUST = [
  { title: "Role-based access", body: "Clinical and financial data locked by role, with a full activity log." },
  { title: "Encrypted backups", body: "Automated daily backups with point-in-time restore." },
  { title: "Audit trail", body: "Every bill edit, discount and record change stamped with who and when." },
  { title: "Data ownership", body: "Your patient and billing data, exportable any time in open formats." },
];

export const HMS_COMPARE = {
  typical: {
    title: "Typical HMS vendor",
    points: [
      "Demo runs on their sample hospital, never your tariff",
      "Billing and pharmacy are two disconnected products",
      "Tariff or scheme change needs a support ticket and a wait",
      "Support is a shared queue with no owner",
      "Data migration billed later as a surprise extra",
      "Reports need an export to Excel to make sense",
    ],
  },
  acsius: {
    title: "ACSIUS hospital ERP software",
    points: [
      "Sandbox loaded with your own tariff and patient data",
      "OPD, IPD, pharmacy, lab and billing in one system",
      "Tariffs, packages and schemes you can edit yourself",
      "Named support contact with agreed response times",
      "Migration, training and go-live priced upfront",
      "Owner dashboards ready on day one",
    ],
  },
};

export const HMS_WHY = [
  { metric: "16", title: "Years building software", body: "Delhi-based product and engineering team since 2010." },
  { metric: "180+", title: "Facilities live", body: "From 12-bed nursing homes to multi-unit hospital groups." },
  { metric: "18", title: "Modules ready", body: "Start with OPD and billing, add lab or insurance later." },
  { metric: "0", title: "Hidden charges", body: "Migration, training and support scoped in writing." },
];

export const HMS_FAQS = [
  {
    q: "What is hospital management software and what does it replace?",
    a: "Hospital management software is a single system that holds the patient record and runs registration, OPD, IPD, operation theatre, pharmacy, lab, radiology, insurance and billing. For most hospitals it replaces a front-desk register, a separate billing program, a standalone pharmacy tool, lab result sheets in Excel and a pile of claim files, so every department bills and reports from the same data.",
  },
  {
    q: "Is this HMS software suitable for small hospitals and clinics?",
    a: "Yes. Hospital management software for small hospitals usually starts with registration, OPD, billing and pharmacy, priced per user per month so a 15 to 50 bed facility pays only for what it uses. Clinic management software setups often run on just appointments, EMR and counter billing. Lab, insurance, OT and MIS modules switch on later without changing product or re-entering data.",
  },
  {
    q: "Does the hospital management software handle billing and insurance claims?",
    a: "Yes. Cash, corporate, TPA and government-scheme patients each get their own tariff, with advances, part payments, package deductions and running IPD charges posting automatically to the bill. Insurance work is tracked from pre-authorisation and queries through claim document assembly to settlement ageing, so receivables stay visible instead of sitting in a drawer.",
  },
  {
    q: "Is your hospital ERP software cloud based or installed on our server?",
    a: "Both options exist. Most facilities choose our cloud based hospital management software: we host, secure, encrypt, back up and update it, and staff reach it from OPD, ward, another branch or home on a monthly subscription. Hospitals with strict internal IT policies can run the same product on a private server with a one-time licence and an annual maintenance contract.",
  },
  {
    q: "Can it connect to our lab analysers, biometric devices and Tally?",
    a: "Yes. Lab analysers connect over HL7 or ASTM so results flow in without retyping, barcode printers and scanners are supported for samples and pharmacy, and biometric or card devices can be used for staff attendance. Financial summaries can be handed to Tally or your accounting package as a structured export, and payment gateways can be enabled for online patient payments.",
  },
  {
    q: "How long does implementation take and do you migrate our old data?",
    a: "A typical rollout is about 24 to 40 days: discovery and a tariff audit, then migration of patient masters, doctor lists, price lists, pharmacy stock and opening balances, then department-wise training, then go-live starting with a live OPD day under on-site support. Migration from Excel or another HMS is included and priced upfront.",
  },
];
