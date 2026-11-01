import { ArrowUpRight, Github, Play } from "lucide-react";
import { Sheet, SheetHeader, TitleBlock } from "@/components/drawing/Sheet";

const getLinkIcon = (href: string, label: string) => {
  const normalized = `${label} ${href}`.toLowerCase();

  if (normalized.includes("github")) {
    return Github;
  }

  if (normalized.includes("youtube") || normalized.includes("video")) {
    return Play;
  }

  return ArrowUpRight;
};

const projects = [
  {
    code: "KF-03.1",
    title: "Tâche-Lik",
    subtitle: "Cross-platform mobile learning platform",
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
      { label: "iOS repository", href: "https://github.com/fekikarim/TacheLik_iosApp" },
      { label: "Android repository", href: "https://github.com/fekikarim/TacheLik_androidApp" },
    ],
  },
  {
    code: "KF-03.2",
    title: "STAR Challenge Platform",
    subtitle: "Enterprise sales gamification system",
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
      { label: "Backend", href: "https://github.com/fekikarim/starChallenge_backend" },
      { label: "Dashboard", href: "https://github.com/fekikarim/starChallenge_dashboard" },
      { label: "Front end", href: "https://github.com/fekikarim/star_frontend" },
    ],
  },
  {
    code: "KF-03.3",
    title: "eco.net",
    subtitle: "Sustainable resource management platform",
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
      { label: "GitHub", href: "https://github.com/fekikarim/econet" },
      { label: "Demo video", href: "https://www.youtube.com/watch?v=TldqTb1ZuK0" },
    ],
  },
];

export function Projects() {
  return (
    <div className="container py-10 lg:py-16">
      <Sheet id="projects" labelledBy="projects-title">
        <SheetHeader
          id="projects-title"
          title="Projects"
          lede="Three systems across native mobile, cross-platform and web, with their source code open for review."
          drawing="Project sheets"
          number="KF-03"
          sheet="4 of 6"
        />

        {projects.map((project) => (
          <article
            key={project.code}
            aria-labelledby={`${project.code}-title`}
            className="grid border-b border-rule last:border-b-0 lg:grid-cols-12"
          >
            {/* Description */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10">
              <h3 id={`${project.code}-title`} className="display text-[clamp(1.75rem,3.6vw,2.75rem)] text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-lg font-medium text-primary">{project.subtitle}</p>
              <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-foreground">{project.description}</p>

              <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${project.title} links`}>
                {project.links.map((link) => {
                  const Icon = getLinkIcon(link.href, link.label);
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex min-h-11 items-center gap-2 border border-rule px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                        {link.label}
                        <ArrowUpRight
                          aria-hidden
                          className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background"
                          strokeWidth={1.5}
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Notes + title block */}
            <div className="lg:col-span-5 flex flex-col border-t border-border lg:border-t-0 lg:border-l">
              <div className="flex-1 p-5 sm:p-8 lg:p-10">
                <h4 className="lettering text-xs text-muted-foreground">General notes</h4>
                <ol className="mt-4 space-y-2.5">
                  {project.features.map((feature, i) => (
                    <li key={feature} className="grid grid-cols-[1.75rem_1fr] text-[15px] leading-snug text-foreground">
                      <span className="tabular-nums text-muted-foreground">{i + 1}.</span>
                      {feature}
                    </li>
                  ))}
                </ol>
              </div>
              <TitleBlock
                className="grid-cols-2 border-l-0"
                cells={[
                  { label: "Dwg no.", value: <span className="tabular-nums">{project.code}</span> },
                  { label: "Date", value: <span className="tabular-nums">{project.period}</span> },
                  { label: "For", value: project.organization, className: "col-span-2" },
                  { label: "Material", value: project.technologies.join(" · "), className: "col-span-2" },
                ]}
              />
            </div>
          </article>
        ))}
      </Sheet>
    </div>
  );
}
