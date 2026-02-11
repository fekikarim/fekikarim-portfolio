import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Calendar, Github, ExternalLink, Play, Users } from "lucide-react";

const getLinkIcon = (href: string, label: string) => {
  const normalized = `${label} ${href}`.toLowerCase();

  if (normalized.includes("github")) {
    return Github;
  }

  if (normalized.includes("youtube") || normalized.includes("video")) {
    return Play;
  }

  return ExternalLink;
};

const projects = [
  {
    title: "Tâche-Lik",
    subtitle: "Cross-Platform Mobile Learning Platform",
    period: "Nov 2025 – Jan 2026",
    organization: "ESPRIT",
    description:
      "Cross-platform learning platform for ESPRIT students and teachers with a structured learning flow, real-time messaging, and AI-assisted content generation. Built with MVVM architecture, modular services, and secure authentication to ensure maintainability and performance across iOS and Android.",
    features: [
      "iOS: SwiftUI | Android: Kotlin + Jetpack Compose",
      "MVVM architecture with clean separation of concerns",
      "Real-time messaging via Socket.IO",
      "AI-assisted quiz and content generation",
      "Badges, leaderboards & progress tracking",
      "Secure authentication flows",
    ],
    technologies: ["SwiftUI", "Kotlin", "Jetpack Compose", "Socket.IO", "AI Integration"],
    links: [
      {
        label: "iOS Repo",
        href: "https://github.com/fekikarim/TacheLik_iosApp",
      },
      {
        label: "Android Repo",
        href: "https://github.com/fekikarim/TacheLik_androidApp",
      },
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "STAR Challenge Platform",
    subtitle: "Enterprise Sales Gamification System",
    period: "Jun 2025 – Aug 2025",
    organization: "STAR ASSURANCES",
    description:
      "Challenge management system for STAR Assurance that improves sales engagement through real-time tracking, rankings, and rewards. Designed around a robust UML model with scalable backend services and a Flutter interface tailored to agents and regional managers.",
    features: [
      "Complete UML class diagram design",
      "Real-time challenge tracking & rankings",
      "Performance analytics dashboards",
      "Role-based access for agents & managers",
      "Flutter frontend optimized for mobile",
      "Scalable backend architecture",
    ],
    technologies: ["Flutter", "Node.js", "Express.js", "SQLite", "REST API"],
    links: [
      {
        label: "Backend",
        href: "https://github.com/fekikarim/starChallenge_backend",
      },
      {
        label: "Dashboard",
        href: "https://github.com/fekikarim/starChallenge_dashboard",
      },
      {
        label: "Frontend",
        href: "https://github.com/fekikarim/star_frontend",
      },
    ],
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "eco.net",
    subtitle: "Sustainable Resource Management Platform",
    period: "Feb 2025 – Jun 2025",
    organization: "ESPRIT / be.net",
    description:
      "Sustainable resource management platform built with Symfony 6.4 and PHP 8.1+ featuring AI-assisted content generation, environmental challenges, and analytics. Delivered an eco-focused UI/UX, secure watermarking, and multi-auth flows to support community collaboration and marketplace features.",
    features: [
      "Symfony 6.4 & PHP 8.1+ architecture",
      "AI-powered content generation (Gemini AI)",
      "Environmental challenges & quizzes",
      "Secure watermarking system",
      "Multi-auth: Email, Google, GitHub OAuth",
      "Comprehensive admin panel",
    ],
    technologies: ["Symfony", "PHP 8.1+", "Gemini AI", "OAuth", "MySQL"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/fekikarim/econet",
      },
      {
        label: "Demo Video",
        href: "https://www.youtube.com/watch?v=TldqTb1ZuK0",
      },
    ],
    color: "from-primary/10 to-primary/5",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            badge="Projects"
            title="Featured Work"
            description="Production-grade applications showcasing technical depth and design excellence"
          />
        </ScrollReveal>

        <div className="grid gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 150}>
              <div className="relative glass rounded-2xl overflow-hidden hover-lift group">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity`}
                />

                <div className="relative p-6 md:p-8 lg:p-10">
                  <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
                    {/* Content */}
                    <div className="lg:col-span-3">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          <Calendar className="w-3 h-3" />
                          {project.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="w-3 h-3" />
                          {project.organization}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-lg text-primary font-medium mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.links.map((link) => (
                            <Button key={link.href} variant="outline" size="sm" asChild>
                              <a href={link.href} target="_blank" rel="noopener noreferrer">
                                {(() => {
                                  const Icon = getLinkIcon(link.href, link.label);
                                  return (
                                    <>
                                      <Icon className="w-4 h-4" />
                                      {link.label}
                                    </>
                                  );
                                })()}
                              </a>
                            </Button>
                          ))}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-semibold bg-card/80 text-foreground rounded-lg border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-2">
                      <div className="glass-strong rounded-xl p-5">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          Key Features
                        </h4>
                        <ul className="space-y-2.5">
                          {project.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
