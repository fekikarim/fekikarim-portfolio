export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "repo" | "video";
};

export type Project = {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  /** Disciplines, shown as the project's category line */
  focus: string[];
  period: string;
  role?: string;
  team?: string;
  organization: string;
  recognition?: string;
  description: string;
  notesTitle?: string;
  features: string[];
  capabilities?: string[];
  goals?: string[];
  technologies: string[];
  /** The first link is the primary external action */
  links: ProjectLink[];
  /** Earlier work is drawn compactly below the featured sheets */
  tier: "featured" | "earlier";
};

const BE_NET = "Team Be.net";

export const projects: Project[] = [
  {
    slug: "fight-zone",
    code: "KF-03.1",
    title: "Fight Zone",
    subtitle: "Official gym platform and community hub",
    focus: ["Full-stack", "Architecture", "Security"],
    period: "Jul 2026 – Aug 2026",
    role: "Co-lead developer",
    team: "Co-led with Nesrine Derouiche",
    organization: "Seif Dridi, boxing coach and athlete",
    description:
      "The official digital platform of boxing coach and athlete Seif Dridi, co-led with Nesrine Derouiche from architecture through deployment. A secure, real-time web application that streamlines training-event management, athlete participation and gym operations.",
    features: [
      "Data model, database architecture and core business workflows on Next.js, TypeScript, Supabase and PostgreSQL",
      "36 version-controlled database migrations, Row-Level Security policies, PostgreSQL triggers and RPC functions",
      "Database-level registration and capacity controls that prevent overbooking under concurrent requests",
      "Role-based access control, server-side validation, secure session handling and database-enforced authorization",
      "Contributed to structured logging, request tracing, disaster-recovery and database-restoration procedures, and automated quality checks",
      "Fight Zone logo and visual identity, co-created with Nesrine Derouiche",
    ],
    capabilities: [
      "Real-time event participation",
      "Athlete management",
      "Coach administration",
      "Automated notifications",
      "AI-powered daily motivational coach",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "PostgreSQL 17",
      "Google Gemini",
      "Resend",
      "Netlify",
    ],
    links: [
      { label: "Live platform", href: "https://fight-zone.app", kind: "live" },
      { label: "Repository", href: "https://github.com/fekikarim/fight-zone", kind: "repo" },
    ],
    tier: "featured",
  },
  {
    slug: "farmy",
    code: "KF-03.2",
    title: "Farmy",
    subtitle: "Smart agricultural ecosystem",
    focus: ["Mobile", "Full-stack", "AI", "Blockchain"],
    period: "Feb 2026 – Jun 2026",
    role: "Team project",
    team: `${BE_NET}: Karim Feki, Nesrine Derouiche, Mohamed Abidi, Oussema Issaoui and Fatma Hidoussi`,
    organization: "ESPRIT, integrated mobile project",
    description:
      "An agritech platform connecting farmers, investors, workers and customers in one digital ecosystem, built to modernise agricultural operations and collaboration across the value chain. It combines a Flutter mobile application, a React administration dashboard and a Node.js backend with artificial intelligence, Hedera blockchain verification and secure payments.",
    notesTitle: "Capabilities",
    features: [
      "Agricultural marketplace",
      "Land investment and rental management",
      "Workforce recruitment and task management",
      "AI-powered agricultural assistance",
      "Blockchain-based verification on Hedera",
      "Secure financial transactions with Stripe",
      "FarmBox subscription services",
      "Analytics and performance dashboards",
      "Real-time notifications and monitoring",
    ],
    goals: [
      "SDG 2: Zero Hunger",
      "SDG 8: Decent Work and Economic Growth",
      "SDG 9: Industry, Innovation and Infrastructure",
      "SDG 12: Responsible Consumption and Production",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
      "Firebase",
      "Stripe",
      "Hedera",
      "AI",
    ],
    links: [
      { label: "Landing site", href: "https://www.farmynet.giize.com/", kind: "live" },
      { label: "Mobile app repo", href: "https://github.com/fekikarim/farmyapp", kind: "repo" },
      { label: "Back-office repo", href: "https://github.com/fekikarim/farmy-back-office", kind: "repo" },
      { label: "Landing repo", href: "https://github.com/fekikarim/farmy-landing", kind: "repo" },
    ],
    tier: "featured",
  },
  {
    slug: "mallouka-motors-website",
    code: "KF-03.3",
    title: "Mallouka Motors",
    subtitle: "Corporate website and digital showroom",
    focus: ["Web", "Multilingual", "SEO", "Brand identity"],
    period: "Jun 2026",
    role: "Sole creator",
    team: "Solo project: conception, architecture, development, branding and logo",
    organization: "Mallouka Motors",
    description:
      "The official corporate website and digital showroom of Mallouka Motors, a Tunisian automotive business specialising in imported engines, gearboxes, electrical components and spare parts. Conceived, designed and built end to end, it modernises the company's digital presence while preserving its heritage as the business formerly known as Allo Casse Auto.",
    features: [
      "Responsive platform architected and built with Next.js, React, TypeScript and Tailwind CSS",
      "Logo and visual identity: colour palette, typography and reusable design tokens",
      "English, French and Arabic, with native right-to-left layout and localised navigation",
      "15 modular sections: services, brands, history, import process, showroom, testimonials, leadership, FAQs and contact",
      "Structured and multilingual SEO metadata, canonical URLs, sitemap generation, social sharing and optimised images",
      "Media galleries, animated content, validated inquiry forms, WhatsApp actions and Google Maps locations",
      "Deployed to Netlify as a public-facing platform",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "next-intl",
      "React Hook Form",
      "Zod",
      "Netlify",
    ],
    links: [
      { label: "Live website", href: "https://mallouka-motors.netlify.app", kind: "live" },
      { label: "Repository", href: "https://github.com/fekikarim/mallouka-landing", kind: "repo" },
    ],
    tier: "featured",
  },
  {
    slug: "tache-lik",
    code: "KF-03.4",
    title: "Tâche-Lik",
    subtitle: "Cross-platform mobile learning platform",
    focus: ["Native iOS", "Native Android", "AI"],
    period: "Nov 2025 – Jan 2026",
    organization: "ESPRIT",
    description:
      "A learning platform for ESPRIT students and teachers with a structured learning flow, real-time messaging and AI-assisted content generation. Built on MVVM with modular services and secure authentication, for maintainability and performance on both iOS and Android.",
    features: [
      "iOS in SwiftUI; Android in Kotlin with Jetpack Compose",
      "MVVM architecture with a clean separation of concerns",
      "Real-time messaging over Socket.IO",
      "AI-assisted quiz and content generation",
      "Badges, leaderboards and progress tracking",
      "Secure authentication flows",
    ],
    technologies: ["SwiftUI", "Kotlin", "Jetpack Compose", "Socket.IO", "AI integration"],
    links: [
      { label: "iOS repository", href: "https://github.com/fekikarim/TacheLik_iosApp", kind: "repo" },
      { label: "Android repository", href: "https://github.com/fekikarim/TacheLik_androidApp", kind: "repo" },
    ],
    tier: "featured",
  },
  {
    slug: "star-challenge",
    code: "KF-03.5",
    title: "STAR Challenge Platform",
    subtitle: "Enterprise sales gamification system",
    focus: ["Mobile", "Backend", "Dashboards"],
    period: "Jun 2025 – Aug 2025",
    organization: "STAR Assurances",
    description:
      "A challenge management system for STAR Assurances that lifts sales engagement through real-time tracking, rankings and rewards. Designed from a complete UML model, with scalable backend services and a Flutter interface tailored to agents and regional managers.",
    features: [
      "Complete UML class diagram design",
      "Real-time challenge tracking and rankings",
      "Performance analytics dashboards",
      "Role-based access for agents and managers",
      "Flutter front end optimised for mobile",
      "Scalable backend architecture",
    ],
    technologies: ["Flutter", "Node.js", "Express.js", "SQLite", "REST API"],
    links: [
      { label: "Backend", href: "https://github.com/fekikarim/starChallenge_backend", kind: "repo" },
      { label: "Dashboard", href: "https://github.com/fekikarim/starChallenge_dashboard", kind: "repo" },
      { label: "Front end", href: "https://github.com/fekikarim/star_frontend", kind: "repo" },
    ],
    tier: "featured",
  },
  {
    slug: "eco-net",
    code: "KF-03.6",
    title: "eco.net",
    subtitle: "Sustainable resource management platform",
    focus: ["Web", "Backend", "AI"],
    period: "Feb 2025 – Jun 2025",
    organization: "ESPRIT / be.net",
    description:
      "A sustainable resource management platform on Symfony 6.4 and PHP 8.1+ with AI-assisted content generation, environmental challenges and analytics. Delivered an eco-focused interface, secure watermarking and multiple sign-in methods to support community collaboration and a marketplace.",
    features: [
      "Symfony 6.4 and PHP 8.1+ architecture",
      "AI-powered content generation (Gemini AI)",
      "Environmental challenges and quizzes",
      "Secure watermarking system",
      "Sign-in with email, Google or GitHub OAuth",
      "Comprehensive admin panel",
    ],
    technologies: ["Symfony", "PHP 8.1+", "Gemini AI", "OAuth", "MySQL"],
    links: [
      { label: "GitHub", href: "https://github.com/fekikarim/econet", kind: "repo" },
      { label: "Demo video", href: "https://www.youtube.com/watch?v=TldqTb1ZuK0", kind: "video" },
    ],
    tier: "featured",
  },
  {
    slug: "mallouka-motors-management",
    code: "KF-03.7",
    title: "Mallouka Motors",
    subtitle: "Professional motor management system",
    focus: ["Desktop", "Database design", "UI/UX"],
    period: "Nov 2024 – Dec 2024",
    role: "Lead developer and architect",
    organization: "Mallouka Motors",
    description:
      "A cross-platform desktop application for stock and business management at a motor dealership, built with Python, Flet and SQLite. Led end-to-end development, from database design and application architecture to UI/UX implementation and optimisation, to improve operational efficiency, reduce manual errors and give stakeholders data-driven insight.",
    features: [
      "Analytics dashboard with real-time KPIs, revenue tracking and sales insights",
      "Automated PDF invoice generation with branded templates",
      "Motor inventory with full CRUD, advanced search and filters",
      "Client profiles with contact and tax details",
      "Dark and light themes with intuitive, responsive navigation",
    ],
    technologies: ["Python", "Flet", "SQLite", "Git"],
    links: [],
    tier: "earlier",
  },
  {
    slug: "hireup",
    code: "KF-03.8",
    title: "HireUp",
    subtitle: "AI-powered recruitment and employment platform",
    focus: ["Web", "AI"],
    period: "Feb 2024 – Jun 2024",
    role: "Team project",
    team: `${BE_NET}: Karim Feki, Nesrine Derouiche, Mohamed Abidi, Salma Laifi, Amin Hmem and Amin Saadallah`,
    organization: "ESPRIT, university project",
    recognition: "Selected among the top projects at ESPRIT during CDIO 2024",
    description:
      "A recruitment platform built under the theme Smart Recruitment and Employment. It streamlines hiring for recruiters and job seekers through role-based workflows and AI-powered recruitment assistance.",
    features: [
      "CV analysis and relevance scoring with OpenAI GPT models",
      "Job recommendations from vector-based profile similarity",
      "Chat-based interview preparation assistant using NLP",
      "Job description generator for recruiters",
      "Role-based access for administrators, recruiters and candidates",
      "Application tracking, dashboards, live chat, notifications and moderation",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "OpenAI GPT", "NLP"],
    links: [],
    tier: "earlier",
  },
  {
    slug: "the-world-within",
    code: "KF-03.9",
    title: "The World Within",
    subtitle: "Action-adventure game",
    focus: ["Game development", "Hardware"],
    period: "Feb 2023 – Jun 2023",
    role: "Team project",
    team: "KANM Team, ESPRIT University",
    organization: "ESPRIT University",
    description:
      "A young man is transported into a virtual world by a device his grandfather built, accidentally unleashing a digital virus that turns peaceful creatures into dangerous beasts. Players explore the world of Arda, complete quests, save infected regions, rebuild civilisations and discover cultures across continents and planets.",
    notesTitle: "Custom Arduino controller",
    features: [
      "Movement: right, left and jump",
      "Combat: normal attack, blaster and ultimate",
      "Other actions: item bar, interaction and pause",
    ],
    technologies: ["C", "Arduino", "Game design", "Git"],
    links: [{ label: "Showcase and trailer", href: "https://kanm.netlify.app", kind: "video" }],
    tier: "earlier",
  },
];
