export const PY_HERO = {
  eyebrow: "Hire Python Developers · New Delhi, India · Since 2010",
  h1: ["Hire Python developers", "for APIs, automation", "and AI that ships."],
  lead:
    "ACSIUS gives you a dedicated Python developer — or a full squad — for Django and FastAPI backends, data pipelines, scraping, automation and ML features. Senior engineers on payroll, not a marketplace lottery.",
  support:
    "Matched profiles in 48 hours, four-hour timezone overlap, daily written updates, tests in CI — and a replacement inside 48 hours if the fit is wrong.",
  stats: [
    { value: 16, suffix: "+", label: "Years shipping Python" },
    { value: 25, suffix: "+", label: "Python engineers" },
    { value: 180, suffix: "+", label: "Builds delivered" },
    { value: 48, suffix: "h", label: "To onboard" },
  ],
};

/** Vertical accordion capability explorer */
export const PY_CAPABILITIES = [
  {
    key: "backend",
    tab: "Django & FastAPI backends",
    headline: "APIs that stay clean as the product grows.",
    body:
      "Django, DRF and FastAPI services with typed schemas, auth, permissions, migrations and OpenAPI docs generated from the code itself.",
    chips: ["Django", "DRF", "FastAPI", "Pydantic", "PostgreSQL"],
    metric: "110ms",
    metricLabel: "median API response",
  },
  {
    key: "data",
    tab: "Data engineering",
    headline: "Pipelines that run without babysitting.",
    body:
      "ETL and reporting pipelines in pandas, Polars and Airflow — idempotent jobs, retries, alerting and warehouse models your analysts can trust.",
    chips: ["pandas", "Polars", "Airflow", "dbt", "BigQuery"],
    metric: "99.5%",
    metricLabel: "scheduled job success rate",
  },
  {
    key: "ai",
    tab: "AI & ML features",
    headline: "Models wired into the product, not a notebook.",
    body:
      "RAG search, classification, forecasting and LLM workflows served behind versioned endpoints with evaluation sets and cost guardrails.",
    chips: ["PyTorch", "scikit-learn", "LangChain", "pgvector", "OpenAI"],
    metric: "3 wks",
    metricLabel: "prototype to production endpoint",
  },
  {
    key: "automation",
    tab: "Automation & scraping",
    headline: "Manual work deleted, permanently.",
    body:
      "Scrapers, integrations and back-office bots with rotating requests, queue workers, structured logs and dashboards that show what ran.",
    chips: ["Celery", "Scrapy", "Playwright", "Redis", "Cron"],
    metric: "40 hrs",
    metricLabel: "typical monthly hours saved",
  },
  {
    key: "rescue",
    tab: "Legacy Python rescue",
    headline: "Python 2 leftovers and untested code, made safe.",
    body:
      "Version upgrades, dependency untangling, pytest harnesses and profiling — delivered in slices so releases never stop while we clean up.",
    chips: ["Python 3.12", "pytest", "mypy", "Ruff", "Profiling"],
    metric: "0 hrs",
    metricLabel: "planned downtime",
  },
];

/** Squad roles */
export const PY_ROLES = [
  {
    role: "Dedicated Python developer",
    focus: "Django / FastAPI",
    detail: "Owns features end to end: schema, API, tests, deploy.",
    level: "Senior",
  },
  {
    role: "Python data engineer",
    focus: "Airflow / pandas",
    detail: "Pipelines, warehouse models, reporting, data quality checks.",
    level: "Senior",
  },
  {
    role: "ML / AI engineer",
    focus: "PyTorch / LLMs",
    detail: "Training, evaluation, RAG search, served inference endpoints.",
    level: "Senior",
  },
  {
    role: "Automation developer",
    focus: "Celery / Scrapy",
    detail: "Scrapers, integrations, scheduled jobs, back-office bots.",
    level: "Mid–Senior",
  },
  {
    role: "Python QA automation",
    focus: "pytest / Playwright",
    detail: "Regression suites, CI gates, load and contract testing.",
    level: "Mid",
  },
  {
    role: "Delivery lead",
    focus: "Sprint + scope",
    detail: "Standups, demos, written updates, risks raised early.",
    level: "Lead",
  },
];

export const PY_MODELS = [
  {
    name: "Dedicated developer",
    price: "Monthly retainer",
    note: "Hire a Python programmer working only on your roadmap, inside your tools.",
    points: [
      "160 hrs/month, your standups and sprints",
      "Your repo, your board, your definition of done",
      "Swap or scale the seat with 2 weeks' notice",
    ],
    highlight: true,
  },
  {
    name: "Python squad",
    price: "Fixed scope",
    note: "Backend + data + QA with a milestone plan and a launch date in writing.",
    points: [
      "Milestone plan signed before code starts",
      "Weekly demo on a staging URL",
      "Fixed cost, change requests priced in writing",
    ],
  },
  {
    name: "Part-time expert",
    price: "From 40 hrs/mo",
    note: "A senior Python developer for architecture reviews, rescues and performance sprints.",
    points: [
      "Code review and architecture guardrails",
      "Query and pipeline performance sprints",
      "Emergency rescue for broken releases",
    ],
  },
];

export const PY_STACK = [
  "Python 3.12",
  "Django",
  "Django REST",
  "FastAPI",
  "Flask",
  "Pydantic",
  "Celery",
  "Airflow",
  "pandas",
  "Polars",
  "NumPy",
  "PyTorch",
  "scikit-learn",
  "LangChain",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "pytest",
  "Docker",
  "AWS",
];

export const PY_PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    body: "45 minutes on the product, the data and what the first release must prove.",
    duration: "Day 1",
    ship: "Written summary",
  },
  {
    step: "02",
    title: "Profiles & plan",
    body: "Matched Python developer CVs with live systems they shipped, plus costs.",
    duration: "48 hours",
    ship: "CVs + costs",
  },
  {
    step: "03",
    title: "Paid trial sprint",
    body: "Two weeks on a real slice of scope so you judge output, not interviews.",
    duration: "2 weeks",
    ship: "Working build",
  },
  {
    step: "04",
    title: "Build cadence",
    body: "Sprint demos, PR reviews, pytest suites in CI and daily written updates.",
    duration: "Ongoing",
    ship: "Release every week",
  },
  {
    step: "05",
    title: "Launch & handover",
    body: "Production deploy, monitoring, runbook, repo access and 30 days support.",
    duration: "Release week",
    ship: "Runbook + repo",
  },
];

export const PY_COMPARE = {
  columns: ["Freelance marketplace", "Generalist agency", "ACSIUS Python bench"],
  rows: [
    {
      label: "Who writes the code",
      values: ["Unverified solo coder", "Rotating juniors", "Named in-house senior"],
    },
    {
      label: "Tests & typing",
      values: ["Rarely", "On request", "pytest + mypy from sprint one"],
    },
    {
      label: "If they disappear",
      values: ["You restart hiring", "Ticket queue", "Replacement in 48 hours"],
    },
    {
      label: "Code ownership",
      values: ["Zips over chat", "Agency repo", "Your repo, day one"],
    },
    {
      label: "After launch",
      values: ["Chat goes quiet", "New contract", "30 days support + runbook"],
    },
  ],
};

export const PY_WHY = [
  {
    metric: "48h",
    title: "Profiles, not promises",
    body: "You see matched Python developers with the systems they shipped before you commit.",
    proof: "Average 2 working days from call to CVs",
  },
  {
    metric: "100%",
    title: "In-house, one studio",
    body: "No subcontracting. Every engineer sits in our New Delhi office on your sprint.",
    proof: "25+ Python engineers on payroll",
  },
  {
    metric: "Daily",
    title: "Written updates",
    body: "What moved, what is blocked, what ships next — in your channel every day.",
    proof: "Slack, Teams or email — your call",
  },
  {
    metric: "0",
    title: "Lock-in",
    body: "Repo, env vars, deploy pipeline and docs are yours from the start.",
    proof: "Handover pack on every project",
  },
];

export const PY_FAQS = [
  {
    q: "How do I hire Python developers from ACSIUS?",
    a: "Share your brief or existing repository. Within 48 hours you get matched Python developer profiles with live systems they built, a suggested engagement model and a written monthly or project cost. Most clients start with a two-week paid trial sprint before scaling the team.",
  },
  {
    q: "Can I hire a dedicated Python developer part-time?",
    a: "Yes. You can hire a dedicated Python developer full-time on a monthly retainer, take a part-time senior from 40 hours a month for architecture reviews and rescues, or run a fixed-scope Python squad. There is no long-term lock-in beyond the trial sprint.",
  },
  {
    q: "Why hire a Python developer in India through ACSIUS?",
    a: "You get senior Python developers in India on our own payroll at roughly a third of Western in-house cost, with four-hour daily overlap, English-first written communication and a delivery lead accountable for the sprint. No freelancer churn and no subcontracting.",
  },
  {
    q: "Which Python frameworks and libraries do your developers use?",
    a: "Django, Django REST Framework, FastAPI and Flask for backends; pandas, Polars, Airflow and dbt for data work; PyTorch, scikit-learn and LangChain for ML and LLM features; Celery, Scrapy and Playwright for automation and scraping. PostgreSQL, pgvector and Redis are our default data layer.",
  },
  {
    q: "Will the Python programmer for hire work in my timezone?",
    a: "Yes. Our team overlaps at least four hours with US, UK, Europe, Middle East and APAC business hours, and daily standups run inside that window. Handover notes are written so work continues outside the overlap.",
  },
  {
    q: "What does it cost to hire a Python developer in India?",
    a: "Cost depends on seniority and engagement model. You get a written monthly rate for a dedicated Python developer or a fixed milestone cost for scoped projects — both quoted within two working days of the discovery call, with no hidden onboarding fees.",
  },
];
