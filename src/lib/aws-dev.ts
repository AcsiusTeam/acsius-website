export const AWS_HERO = {
  eyebrow: "Hire AWS Developers · New Delhi, India · Since 2010",
  h1: ["Hire AWS developers", "and consultants who own", "the whole environment."],
  lead:
    "ACSIUS gives you AWS certified developers and cloud consultants on demand — serverless APIs, container platforms, migrations, CI/CD and cost cleanups. Infrastructure as code, never console clicks nobody can repeat.",
  support:
    "Matched profiles in 48 hours, four-hour timezone overlap, daily written updates, Terraform in your repo — and a replacement inside 48 hours if the fit is wrong.",
  stats: [
    { value: 16, suffix: "+", label: "Years on AWS" },
    { value: 20, suffix: "+", label: "Certified engineers" },
    { value: 150, suffix: "+", label: "Workloads shipped" },
    { value: 48, suffix: "h", label: "To onboard" },
  ],
};

/** Split-list capability explorer */
export const AWS_CAPABILITIES = [
  {
    key: "serverless",
    tab: "Serverless app development",
    headline: "APIs that scale to zero and back.",
    body:
      "Lambda, API Gateway, DynamoDB and EventBridge apps with typed handlers, cold-start budgets and per-endpoint alarms wired in from day one.",
    chips: ["Lambda", "API Gateway", "DynamoDB", "EventBridge", "SQS"],
    metric: "0 → 10k",
    metricLabel: "requests/sec without a redeploy",
  },
  {
    key: "containers",
    tab: "Containers & Kubernetes",
    headline: "ECS and EKS platforms your team can operate.",
    body:
      "Docker workloads on ECS Fargate or EKS with autoscaling, blue-green rollouts, health checks and dashboards that show what broke.",
    chips: ["ECS Fargate", "EKS", "ECR", "ALB", "Autoscaling"],
    metric: "99.95%",
    metricLabel: "uptime target on managed workloads",
  },
  {
    key: "migration",
    tab: "Cloud migration",
    headline: "Off the old server, without a horror weekend.",
    body:
      "Assessment, landing zone, staged data migration and cutover runbooks — moved in waves with a tested rollback at every step.",
    chips: ["Landing zone", "RDS", "DMS", "S3", "Route 53"],
    metric: "<15 min",
    metricLabel: "typical cutover window",
  },
  {
    key: "devops",
    tab: "DevOps & IaC",
    headline: "Every environment rebuildable from code.",
    body:
      "Terraform or CDK modules, GitHub Actions or CodePipeline, secrets in Secrets Manager and preview environments per pull request.",
    chips: ["Terraform", "AWS CDK", "CodePipeline", "GitHub Actions", "CloudWatch"],
    metric: "11 min",
    metricLabel: "commit to production deploy",
  },
  {
    key: "cost",
    tab: "Cost & security review",
    headline: "Smaller bill, tighter blast radius.",
    body:
      "Right-sizing, savings plans, storage lifecycle rules, IAM least-privilege and guardrails — reported as a written plan with numbers.",
    chips: ["Cost Explorer", "IAM", "GuardDuty", "WAF", "Savings Plans"],
    metric: "31%",
    metricLabel: "average monthly spend removed",
  },
];

/** Roles you can hire */
export const AWS_ROLES = [
  {
    role: "AWS certified developer",
    focus: "Serverless / APIs",
    detail: "Builds Lambda and container services with IaC and tests.",
    level: "Senior",
  },
  {
    role: "AWS consultant",
    focus: "Architecture review",
    detail: "Landing zones, well-architected reviews, migration roadmaps.",
    level: "Lead",
  },
  {
    role: "DevOps / platform engineer",
    focus: "Terraform / CI-CD",
    detail: "Pipelines, environments, observability, on-call runbooks.",
    level: "Senior",
  },
  {
    role: "Cloud security engineer",
    focus: "IAM / guardrails",
    detail: "Least privilege, WAF, GuardDuty, audit and compliance evidence.",
    level: "Senior",
  },
  {
    role: "Data / analytics engineer",
    focus: "Glue / Redshift",
    detail: "Pipelines, lakehouse models, Athena reporting layers.",
    level: "Mid–Senior",
  },
  {
    role: "Delivery lead",
    focus: "Sprint + scope",
    detail: "Standups, demos, written updates, risks raised early.",
    level: "Lead",
  },
];

export const AWS_MODELS = [
  {
    name: "Dedicated developer",
    price: "Monthly retainer",
    note: "Hire an AWS certified developer working only on your roadmap, in your accounts.",
    points: [
      "160 hrs/month, your standups and sprints",
      "Your repo, your AWS org, your definition of done",
      "Swap or scale the seat with 2 weeks' notice",
    ],
    highlight: true,
  },
  {
    name: "Cloud project pod",
    price: "Fixed scope",
    note: "Architect + developer + DevOps with a milestone plan and a launch date in writing.",
    points: [
      "Milestone plan signed before code starts",
      "Weekly demo on a staging environment",
      "Fixed cost, change requests priced in writing",
    ],
  },
  {
    name: "AWS consultant",
    price: "From 40 hrs/mo",
    note: "Hire an AWS consultant for architecture reviews, audits and cost cleanups.",
    points: [
      "Well-architected review with written findings",
      "Cost and security remediation sprints",
      "Emergency support for outages and migrations",
    ],
  },
];

export const AWS_STACK = [
  "Lambda",
  "API Gateway",
  "ECS Fargate",
  "EKS",
  "EC2",
  "S3",
  "RDS",
  "Aurora",
  "DynamoDB",
  "SQS",
  "SNS",
  "EventBridge",
  "CloudFront",
  "Route 53",
  "Terraform",
  "AWS CDK",
  "CodePipeline",
  "CloudWatch",
  "IAM",
  "Secrets Manager",
];

export const AWS_PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    body: "45 minutes on the workload, the accounts and what the first release must prove.",
    duration: "Day 1",
    ship: "Written summary",
  },
  {
    step: "02",
    title: "Profiles & plan",
    body: "Matched AWS developer CVs with certifications and live workloads they ran.",
    duration: "48 hours",
    ship: "CVs + costs",
  },
  {
    step: "03",
    title: "Architecture sprint",
    body: "Diagram, IaC skeleton and cost estimate for the target environment.",
    duration: "1 week",
    ship: "Diagram + estimate",
  },
  {
    step: "04",
    title: "Build cadence",
    body: "Terraform reviews, pipeline deploys, alarms and daily written updates.",
    duration: "Ongoing",
    ship: "Release every week",
  },
  {
    step: "05",
    title: "Cutover & handover",
    body: "Production cutover, monitoring, runbook, repo access and 30 days support.",
    duration: "Release week",
    ship: "Runbook + repo",
  },
];

export const AWS_COMPARE = {
  columns: ["Freelance marketplace", "Generalist agency", "ACSIUS AWS bench"],
  rows: [
    {
      label: "Who builds it",
      values: ["Unverified solo coder", "Rotating juniors", "Named certified engineer"],
    },
    {
      label: "Infrastructure as code",
      values: ["Console clicks", "Partly scripted", "Terraform in your repo"],
    },
    {
      label: "If they disappear",
      values: ["You restart hiring", "Ticket queue", "Replacement in 48 hours"],
    },
    {
      label: "Account ownership",
      values: ["Their account", "Agency org", "Your AWS org, day one"],
    },
    {
      label: "After launch",
      values: ["Chat goes quiet", "New contract", "30 days support + runbook"],
    },
  ],
};

export const AWS_WHY = [
  {
    metric: "48h",
    title: "Profiles, not promises",
    body: "You see matched AWS developers with certifications and the workloads they ran.",
    proof: "Average 2 working days from call to CVs",
  },
  {
    metric: "100%",
    title: "In-house, one studio",
    body: "No subcontracting. Every engineer sits in our New Delhi office on your sprint.",
    proof: "20+ AWS certified engineers on payroll",
  },
  {
    metric: "31%",
    title: "Bill goes down",
    body: "Right-sizing, lifecycle rules and savings plans reviewed every quarter.",
    proof: "Average spend cut on cost engagements",
  },
  {
    metric: "0",
    title: "Lock-in",
    body: "Your AWS org, Terraform state, pipelines and docs stay yours from the start.",
    proof: "Handover pack on every project",
  },
];

export const AWS_FAQS = [
  {
    q: "How do I hire AWS developers from ACSIUS?",
    a: "Share your workload or brief. Within 48 hours you get matched AWS developer profiles with their certifications and live environments they built, a suggested engagement model and a written monthly or project cost. Most clients start with a one-week architecture sprint before scaling the team.",
  },
  {
    q: "Are your AWS developers certified?",
    a: "Yes. Our engineers hold AWS Certified Developer, Solutions Architect and DevOps Engineer certifications, and every profile you receive lists the certifications plus the workloads that engineer has run in production.",
  },
  {
    q: "Can I hire an AWS consultant for a one-off review?",
    a: "Yes. You can hire an AWS consultant from 40 hours a month for a well-architected review, a security and IAM audit, or a cost optimisation sprint. You get written findings with prioritised fixes and estimated savings, not a slide deck.",
  },
  {
    q: "Why hire AWS developers in India through ACSIUS?",
    a: "You get senior AWS certified developers in India on our own payroll at roughly a third of Western in-house cost, with four-hour daily overlap, English-first written updates and a delivery lead accountable for the sprint. No freelancer churn and no subcontracting.",
  },
  {
    q: "Do you work inside our AWS account?",
    a: "Yes. We work in your AWS organisation with least-privilege IAM roles, and all infrastructure is defined in Terraform or CDK committed to your repository. Nothing important lives in a console click that only we know about.",
  },
  {
    q: "What does AWS app development cost?",
    a: "Cost depends on seniority and engagement model. You get a written monthly rate for a dedicated AWS developer or a fixed milestone cost for scoped projects, plus an estimated AWS run-rate for the target architecture — all quoted within two working days of the discovery call.",
  },
];
