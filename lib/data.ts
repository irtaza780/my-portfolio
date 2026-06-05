/**
 * Single source of truth for all portfolio content.
 * Edit copy here — components stay presentation-only.
 */

export const profile = {
  name: "Syed Muhammad Irtaza",
  shortName: "Irtaza",
  initials: "SI",
  title: "Full-Stack Software Engineer",
  tagline: "AI Workflows · Cloud Systems · Scalable Product Engineering",
  location: "Montreal, Canada",
  email: "irtaza780@gmail.com",
  phone: "+1 263 355 2859",
  phoneHref: "tel:+12633552859",
  github: "https://github.com/irtaza780",
  githubHandle: "irtaza780",
  linkedin: "https://www.linkedin.com/in/syed-muhammad-irtaza-211156181/",
  linkedinHandle: "syed-muhammad-irtaza",
  resume: "/resume/SYED__MUHAMMAD_IRTAZA_SOFTWARE_ENGINEER_RESUME.pdf",
  headline:
    "I build scalable full-stack products, AI workflows, and cloud systems that solve real business problems.",
  intro:
    "I work end-to-end across frontend, backend, cloud infrastructure, automation, and AI-powered workflows — turning messy business problems into production systems that ship and scale.",
} as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "AI Systems", href: "#ai-systems" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroChips = [
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "AWS",
  "Flowise",
  "n8n",
  "Stripe",
  "AI / RAG",
] as const;

export const systemStatus: {
  key: string;
  label: string;
  value: string;
  accent?: "emerald";
}[] = [
  { key: "status", label: "STATUS", value: "Available for Full-Stack / AI Engineering roles", accent: "emerald" },
  { key: "focus", label: "FOCUS", value: "Product Engineering · AI Workflows · Cloud Systems" },
  { key: "location", label: "LOCATION", value: "Montreal, Canada" },
  { key: "stack", label: "CORE", value: "Next.js · NestJS · PostgreSQL · AWS" },
];

/* ----------------------------------------------------------------
   Case studies
   ---------------------------------------------------------------- */
export type DiagramNode = { label: string; sub?: string };

export type CaseStudy = {
  id: string;
  index: string;
  name: string;
  category: string;
  featured?: boolean;
  problem: string;
  built: string;
  impact: string;
  metric?: { value: string; label: string };
  stack: string[];
  image?: string;
  diagram?: DiagramNode[];
  highlights: string[];
  link?: { label: string; href: string };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "ai-property-report",
    index: "01",
    name: "AI Property Report Generator",
    category: "AI / LLM Workflow",
    featured: true,
    problem:
      "Property data was locked inside listing URLs and needed to become useful, personalized reports — a slow, manual analysis process.",
    built:
      "An LLM-powered workflow that scrapes a property URL, analyzes the listing details, evaluates location context, derives mortgage-related insights, and formats a final structured report delivered to the user.",
    impact:
      "Automated a previously manual analysis and reporting process, creating a repeatable, scalable way to generate property insights on demand.",
    metric: { value: "Manual → Auto", label: "Report generation" },
    stack: ["Flowise", "Next.js", "NestJS", "LLM Agents", "Web Scraping", "PDF / Email"],
    image: "/project-images/habily.png",
    highlights: [
      "Built Flowise AI agents that generate contextual reports directly from a property URL.",
      "Resilient scraping with fallbacks to keep listing data available and reliable.",
      "Location, pricing and mortgage context fused into one personalized report.",
      "Output formatted for delivery via report / PDF / email flow.",
    ],
    link: { label: "habily.es", href: "https://habily.es/" },
  },
  {
    id: "ai-chatbot-n8n",
    index: "02",
    name: "Custom AI Chatbot & Chat Workflow",
    category: "AI Product Feature",
    problem:
      "An embedded third-party chatbot widget was limited — it couldn't carry user-specific context or persist conversations across sessions.",
    built:
      "A custom chatbot UI integrated into the platform with authenticated user sessions, backend chat APIs, persisted chat sessions, and n8n / Flowise workflow automation behind the responses.",
    impact:
      "Turned a throwaway chat widget into a central, context-aware product feature backed by real data and workflows.",
    metric: { value: "Widget → Feature", label: "Product surface" },
    stack: ["Next.js", "NestJS", "n8n", "Flowise", "Auth Tokens", "PostgreSQL"],
    diagram: [
      { label: "User Session", sub: "auth token" },
      { label: "Chat API", sub: "NestJS" },
      { label: "n8n / Flowise", sub: "workflow" },
      { label: "Persisted History", sub: "DB" },
    ],
    highlights: [
      "Logged-in user sessions thread user-specific context into every conversation.",
      "Chat sessions persisted to the database for durable history.",
      "Backend APIs orchestrate auth, message storage and workflow calls.",
      "n8n / Flowise automation powers responses beyond a single prompt.",
    ],
  },
  {
    id: "s3-cost-optimization",
    index: "03",
    name: "AWS S3 Cost Optimization System",
    category: "Cloud / Cost Engineering",
    problem:
      "Media-heavy platforms were generating high S3 storage costs spread across production, staging and development buckets with no visibility.",
    built:
      "A cost-optimization strategy: bucket segmentation and analysis, lifecycle policies, access logging, automated cleanup rules, and intelligent storage tiering for infrequently accessed assets.",
    impact:
      "Targeted a roughly 50% monthly S3 cost reduction — from around $800/month toward under $400/month — while keeping assets available.",
    metric: { value: "~50%", label: "Targeted cost cut" },
    stack: ["AWS S3", "CloudFront", "Athena", "Lambda", "Lifecycle Rules", "Intelligent-Tiering"],
    diagram: [
      { label: "Bucket Analysis", sub: "prod / stage / dev" },
      { label: "Access Logs", sub: "Athena" },
      { label: "Lifecycle + Tiering", sub: "auto cleanup" },
      { label: "Lower Spend", sub: "$800 → <$400" },
    ],
    highlights: [
      "Segmented media into prod / staging / dev buckets for clear ownership.",
      "Enabled versioning + lifecycle rules for automated cleanup of stale objects.",
      "Activated access logging and analyzed usage patterns with Athena.",
      "Adopted Intelligent-Tiering for infrequently accessed media.",
    ],
  },
  {
    id: "quick-payment",
    index: "04",
    name: "Quick Payment & Invoice Automation",
    category: "Payments / Operations",
    problem:
      "Creator and business payments were manual or delayed, creating operational friction and slow turnaround for finance teams.",
    built:
      "A quick-payment flow with business credit validation, user/payment metadata, invoice generation, an approval step, and background jobs to process payouts reliably.",
    impact:
      "Helped cut quick-payment processing time dramatically and streamlined internal payment operations.",
    metric: { value: "~80%", label: "Faster processing" },
    stack: ["NestJS", "Node.js", "Sequelize", "PostgreSQL", "Stripe", "Bull Queues"],
    diagram: [
      { label: "Credit Check", sub: "validation" },
      { label: "Invoice Gen", sub: "metadata" },
      { label: "Approval", sub: "review" },
      { label: "Payout Job", sub: "Bull queue" },
    ],
    highlights: [
      "Business credit validation gates payments before they're issued.",
      "Invoice generation with structured user + payment metadata.",
      "Approval flow keeps finance in control of every payout.",
      "Background queues process payments without blocking the UI.",
    ],
  },
  {
    id: "influencer-campaign-platform",
    index: "05",
    name: "Influencer Campaign Platform",
    category: "Product Engineering",
    problem:
      "Brands needed better ways to search, filter, invite and manage creators across campaigns at scale.",
    built:
      "Creator search with complex filters, campaign management tooling, reporting features, invoice reminders, and targeted performance optimizations across a large creator dataset.",
    impact:
      "Improved creator discovery, campaign management and operational visibility across the platform.",
    metric: { value: "10M+", label: "Creator profiles" },
    stack: ["React", "Next.js", "Node.js", "Sequelize", "PostgreSQL", "AWS"],
    image: "/project-images/lua.webp",
    highlights: [
      "Advanced multi-filter creator search across a 10M+ profile dataset.",
      "Refactored monolithic APIs into modular endpoints; query time 6s → 1.2s.",
      "Debounced + cancellable requests for snappy, rapid-fire filtering.",
      "Campaign dashboards, reporting and automated invoice reminders.",
    ],
    link: { label: "luagroup.com", href: "https://luagroup.com/en/" },
  },
];

/* ----------------------------------------------------------------
   AI systems pipeline
   ---------------------------------------------------------------- */
export const aiPipeline: { label: string; sub: string; icon: string }[] = [
  { label: "Input", sub: "URL / User question", icon: "Link" },
  { label: "Retrieve", sub: "Scraping / context", icon: "Search" },
  { label: "Reason", sub: "LLM agent / workflow", icon: "Cpu" },
  { label: "Structure", sub: "Validated output", icon: "Braces" },
  { label: "Deliver", sub: "Report / chat / email", icon: "Send" },
];

export const aiCapabilities = [
  "LLM agent workflows",
  "Flowise apps",
  "n8n automations",
  "RAG-oriented retrieval",
  "Property report generation",
  "Chatbot integration",
  "Scraping + AI analysis",
  "LangSmith tracing",
] as const;

export const aiNote =
  "These are shipped features, not demos — practical AI plumbing wired into real products: authenticated sessions, persisted state, scraping fallbacks, structured outputs, and delivery flows.";

/* ----------------------------------------------------------------
   Tech stack — grouped for the command-palette explorer
   ---------------------------------------------------------------- */
export type StackGroup = {
  id: string;
  label: string;
  icon: string;
  blurb: string;
  items: { name: string; note?: string }[];
};

export const stackGroups: StackGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "LayoutDashboard",
    blurb: "Fast, accessible product UIs",
    items: [
      { name: "React", note: "core" },
      { name: "Next.js", note: "App Router" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "MUI" },
      { name: "Redux / RTK Query" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "Server",
    blurb: "APIs and services that scale",
    items: [
      { name: "Node.js" },
      { name: "NestJS", note: "primary" },
      { name: "Express" },
      { name: "GraphQL" },
      { name: "REST APIs" },
      { name: "Sequelize" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "Database",
    blurb: "Modeling and query performance",
    items: [
      { name: "PostgreSQL", note: "primary" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis", note: "cache" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud / DevOps",
    icon: "Cloud",
    blurb: "Ship, host and optimize",
    items: [
      { name: "AWS EC2" },
      { name: "AWS S3" },
      { name: "CloudFront" },
      { name: "RDS" },
      { name: "Route 53" },
      { name: "Docker" },
      { name: "PM2" },
      { name: "Nginx" },
      { name: "Vercel" },
    ],
  },
  {
    id: "ai",
    label: "AI / Automation",
    icon: "Sparkles",
    blurb: "LLM workflows that do real work",
    items: [
      { name: "Flowise" },
      { name: "n8n" },
      { name: "LangSmith" },
      { name: "LLM Agents" },
      { name: "RAG concepts" },
      { name: "Scraping workflows" },
    ],
  },
  {
    id: "integrations",
    label: "Payments / Integrations",
    icon: "Plug",
    blurb: "Money movement and messaging",
    items: [
      { name: "Stripe" },
      { name: "PayPal" },
      { name: "Twilio" },
      { name: "Firebase" },
      { name: "OneSignal" },
    ],
  },
];

/* ----------------------------------------------------------------
   Experience timeline
   ---------------------------------------------------------------- */
export type Role = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    role: "Freelance Developer",
    company: "Independent · Remote",
    period: "Aug 2025 — Present",
    current: true,
    summary:
      "Partnering with teams and founders to build full-stack products, AI workflows, and cloud systems as an independent engineer.",
    highlights: [
      "Design and ship full-stack features end-to-end — database to UI.",
      "Build AI / LLM workflows and automations (Flowise, n8n) into real products.",
      "Set up and optimize cloud infrastructure and deployments on AWS.",
      "Deliver dashboards, payment flows, and scalable backend APIs.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Flowise", "n8n"],
  },
  {
    role: "Full-Stack Developer",
    company: "Ideamappers / Numu",
    period: "May 2024 — Aug 2025",
    summary:
      "Full-stack product engineering across an influencer-marketing platform and AI-driven property tooling.",
    highlights: [
      "Shipped full-stack product features end-to-end across web and services.",
      "Built AI / LLM integrations — report generation and a custom chatbot feature.",
      "Led AWS cost optimization targeting ~50% lower S3 spend.",
      "Delivered payment / invoice flows and creator search dashboards.",
      "Added white-label theming and backend performance improvements.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Flowise", "n8n", "Stripe"],
  },
  {
    role: "MERN / Full-Stack Developer",
    company: "Codistan Ventures / Paklogics",
    period: "Sep 2022 — Mar 2024",
    summary:
      "Built and shipped e-commerce and marketplace platforms across the MERN stack.",
    highlights: [
      "Developed e-commerce and marketplace platforms with React / Next.js.",
      "Built Node.js backends and GraphQL / REST APIs.",
      "Integrated Stripe payment flows and MongoDB data layers.",
      "Improved performance and migrated legacy code toward TypeScript.",
    ],
    stack: ["React", "Next.js", "Node.js", "GraphQL", "MongoDB", "Stripe"],
  },
];

/* ----------------------------------------------------------------
   Impact metrics
   ---------------------------------------------------------------- */
export const metrics = [
  {
    value: "~80%",
    label: "Faster quick-payment processing",
    note: "Helped cut payment turnaround with validation + queued payouts.",
  },
  {
    value: "~50%",
    label: "Targeted S3 cost reduction",
    note: "Strategy aimed at $800/mo toward under $400/mo.",
  },
  {
    value: "5×",
    label: "API response improvement",
    note: "Refactored endpoints: query time 6s → 1.2s.",
  },
  {
    value: "10M+",
    label: "Creator profiles searchable",
    note: "Complex filters over a large creator dataset.",
  },
] as const;

export const impactNotes = [
  "Built AI report + chatbot workflows from scraped property data.",
  "Developed payment, invoice, creator-search and campaign systems.",
  "Worked across frontend, backend, cloud and AI workflows.",
] as const;

/* ----------------------------------------------------------------
   About
   ---------------------------------------------------------------- */
export const about = {
  paragraphs: [
    "I'm a full-stack software engineer based in Montreal, Canada, building production-ready web platforms, backend systems, AI workflows, and cloud-based infrastructure.",
    "I like solving business problems through practical engineering. My work spans influencer marketing, property technology, e-commerce, payments, dashboards, automation, and AI-powered workflows — usually owning a feature from database to UI.",
    "Right now I'm going deeper into AI engineering, RAG systems, and scalable cloud architecture — connecting LLM workflows to real product surfaces instead of one-off demos.",
  ],
  facts: [
    { label: "Based in", value: "Montreal, Canada" },
    { label: "Focus", value: "Full-stack · AI · Cloud" },
    { label: "Currently", value: "Deepening AI / RAG + cloud architecture" },
  ],
} as const;

export const contactCta =
  "Have a product, AI workflow, or engineering problem worth building? Let's connect.";
