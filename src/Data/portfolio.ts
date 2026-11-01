export const profile = {
  name: "Jyotirmay Gupta",
  role: "Backend Software Engineer",
  location: "Noida, Uttar Pradesh, India",
  email: "jyotirmay2000gupta@gmail.com",
  phone: "+91 7982343785",
  linkedin: "https://www.linkedin.com/in/jyotirmay-gupta/",
  github: "https://github.com/jyotirmaygithub",
  resumeUrl: "/jyotirmay_resume.pdf",
  headline: "APIs, microservices, and production systems that stay up.",
  summary:
    "Software engineer with nearly two years of full-time experience building backend APIs, microservices, and production deployments across healthcare, financial applications, and voice platforms.",
};

export const about = {
  heading: "About",
  paragraphs: [
    "I design and ship backend systems that need to be secure, observable, and easy to operate — from JWT gateways and Redis-backed rate limits to RabbitMQ event pipelines and multi-tenant FastAPI services.",
    "Recently at Shyphan AI Solutions I've owned Node.js/TypeScript microservices for ORBS and a Voice Hub calling platform. Before that at QuadB I delivered Genius CFO APIs, LangChain RAG workflows, and TypeScript SDKs for DiFinance.",
    "Outside work I care about clean service boundaries, CI/CD that can roll back safely, and interfaces that make complex systems feel simple.",
  ],
  image: "/Images/jyotirmay.jpg",
};

export const experienceData = [
  {
    company: "Shyphan AI Solutions",
    location: "Noida, India",
    role: "Full Stack Engineer",
    duration: "Apr 2026 — Present",
    highlights: [
      "Engineered Node.js/TypeScript microservices for ORBS using PostgreSQL, Redis, and RabbitMQ; enforced service boundaries with ESLint and added Winston logging plus OpenTelemetry/SigNoz observability.",
      "Implemented an API gateway with JWT validation, silent refresh, session anomaly detection, three-tier Redis rate limiting, reverse proxy routing, Swagger docs, and security/integration tests.",
      "Strengthened admin RBAC with Redis-cached grants, fail-closed guards, TOTP MFA, encrypted secrets, backup codes, and step-up re-authentication.",
      "Enabled FIDO2/WebAuthn passwordless login with attestation verification, expiring Redis challenges, credential public-key storage, and OTP fallback.",
      "Designed a standalone notification microservice with Zod-validated RabbitMQ events, delayed retries, dead-letter routing, and multi-channel delivery (email, SMS, WhatsApp, FCM, in-app).",
      "Automated CI/CD with GitHub Actions, Trivy scans, GHCR publishing, health-gated deployments, automatic rollback, and pre-migration backups.",
      "Built a multi-tenant FastAPI Voice Hub for campaigns, contacts, calls, and wallet billing; integrated Ultravox, Twilio, and Plivo with Celery/APScheduler workflows.",
    ],
    tags: [
      "Node.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
    ],
  },
  {
    company: "QuadB Technologies",
    location: "Ludhiana, India",
    role: "Software Developer (SDE 1)",
    duration: "Nov 2024 — Mar 2026",
    highlights: [
      "Delivered JWT-secured REST APIs for Genius CFO using Python/FastAPI, Pydantic, Node.js, TypeScript, PostgreSQL, and Redis in a microservices architecture.",
      "Connected LangChain agents to ChatGPT and Claude APIs; implemented Qdrant-based RAG with OpenAI embeddings for financial automation workflows.",
      "Deployed Python microservices on DigitalOcean using Docker, Nginx, and AWS S3.",
      "Authored a TypeScript SDK for mini-app integrations and backend services for DiFinance.",
    ],
    tags: [
      "FastAPI",
      "Python",
      "LangChain",
      "Qdrant",
      "PostgreSQL",
      "Docker",
      "TypeScript",
    ],
  },
  {
    company: "QuadB Technologies",
    location: "Ludhiana, India",
    role: "Software Developer Intern",
    duration: "Aug 2024 — Nov 2024",
    highlights: [
      "Created the MERN-based dDate application using React hooks and Context API.",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
];

export const projects = [
  {
    title: "ORBS Platform",
    subtitle: "Healthcare microservices & gateway",
    desc: "Production Node.js/TypeScript microservices with PostgreSQL, Redis, and RabbitMQ — including a hardened API gateway, RBAC/MFA, WebAuthn, and a multi-channel notification service.",
    impact:
      "Service boundaries, observability (OpenTelemetry/SigNoz), and CI/CD with health-gated rollouts and automatic rollback.",
    tags: ["TypeScript", "Node.js", "Redis", "RabbitMQ", "PostgreSQL", "WebAuthn"],
    links: [],
  },
  {
    title: "Voice Hub",
    subtitle: "Multi-tenant voice campaigns",
    desc: "FastAPI backend for campaigns, contacts, outbound calls, and wallet billing with JWT/RBAC, Ultravox/Twilio/Plivo integrations, and async Celery workflows.",
    impact:
      "End-to-end call lifecycle tracking with webhooks, scheduled campaigns, and multi-tenant isolation.",
    tags: ["FastAPI", "Python", "Celery", "PostgreSQL", "Twilio", "SQLAlchemy"],
    links: [],
  },
  {
    title: "Genius CFO",
    subtitle: "Financial APIs + RAG automation",
    desc: "JWT-secured REST APIs and LangChain agents connected to ChatGPT/Claude, with Qdrant RAG over OpenAI embeddings for financial automation.",
    impact:
      "Microservices on DigitalOcean with Docker, Nginx, and AWS S3-backed deployments.",
    tags: ["FastAPI", "LangChain", "Qdrant", "Redis", "Docker", "AWS S3"],
    links: [{ label: "Live", href: "https://geniuscfo.ai/business" }],
  },
  {
    title: "DiFinance SDK",
    subtitle: "TypeScript integrations",
    desc: "TypeScript SDK for mini-app integrations plus supporting backend services for DiFinance product surfaces.",
    impact: "Cleaner third-party and mini-app integration paths for backend consumers.",
    tags: ["TypeScript", "Node.js", "SDK"],
    links: [],
  },
  {
    title: "ComfortQuest",
    subtitle: "Hotel booking platform",
    desc: "Browse and register hotels, upload images, and manage bookings with MongoDB CRUD — including reservation visualization and a 40% cancellation charge flow.",
    impact: "Full-stack booking UX with Cloudinary-backed media and profile dashboards.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: [{ label: "GitHub", href: "https://github.com/jyotirmaygithub/Hotels" }],
    screenshot: "/Images/hotels .png",
  },
  {
    title: "API Management System",
    subtitle: "Keys, auth tokens, docs",
    desc: "Secure API access with key creation, auth tokens after login, and documentation-driven request headers for authenticated calls.",
    impact: "Self-serve API key lifecycle with cookie-backed auth flows.",
    tags: ["React", "Node.js", "Tailwind"],
    links: [
      { label: "Live", href: "https://api-management-system.netlify.app/" },
      { label: "GitHub", href: "https://github.com/jyotirmaygithub/Api-Management-System" },
    ],
    screenshot: "/Images/api.png",
  },
];

export const openSourceProjects = [
  {
    title: "Git-File",
    desc: "Web interface for exploring GitHub repositories as folders and files in the browser, with short-lived access tokens for safer API use.",
    impact:
      "Makes large codebases easier to navigate for onboarding and structure comprehension.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    links: [
      { label: "Live", href: "https://gitfile.vercel.app/" },
      { label: "GitHub", href: "https://github.com/BalajiSriraman/Git-File" },
    ],
  },
];

export const educationData = [
  {
    school: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Computer Applications",
    duration: "Sep 2022 — May 2025",
    notes: [
      "Focused coursework and projects around full-stack engineering, APIs, and applied problem solving.",
      "Built production instincts through internships and full-time backend roles during and after the degree.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Backend",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Pydantic",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Data & processing",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "SQLAlchemy",
      "Celery",
      "APScheduler",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux / Redux Toolkit",
      "HTML",
      "CSS",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    title: "Delivery & integrations",
    items: [
      "Docker",
      "Git / GitHub",
      "GitHub Actions",
      "DigitalOcean",
      "AWS S3",
      "Nginx",
      "Socket.IO",
    ],
  },
  {
    title: "AI applications",
    items: ["LangChain", "Qdrant", "RAG", "ChatGPT / OpenAI APIs", "Claude APIs"],
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/project", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/open-source", label: "Open Source" },
];
