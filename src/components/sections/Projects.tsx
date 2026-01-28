import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Calendar, Users } from "lucide-react";

const projects = [
  {
    title: "Tâche-Lik",
    subtitle: "Cross-Platform Mobile Learning Platform",
    period: "Nov 2025 – Jan 2026",
    organization: "ESPRIT",
    description:
      "A comprehensive cross-platform educational mobile application designed for students and teachers, featuring course exploration, interactive quizzes, gamification elements, and real-time messaging.",
    features: [
      "iOS: SwiftUI | Android: Kotlin + Jetpack Compose",
      "MVVM architecture with clean separation of concerns",
      "Real-time messaging via Socket.IO",
      "AI-assisted quiz and content generation",
      "Badges, leaderboards & progress tracking",
      "Secure authentication flows",
    ],
    technologies: ["SwiftUI", "Kotlin", "Jetpack Compose", "Socket.IO", "AI Integration"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "STAR Challenge Platform",
    subtitle: "Enterprise Sales Gamification System",
    period: "Jun 2025 – Aug 2025",
    organization: "STAR ASSURANCES",
    description:
      "Enterprise-level platform designed to boost sales engagement through gamification. Features real-time challenge tracking, rankings, rewards, and comprehensive performance analytics.",
    features: [
      "Complete UML class diagram design",
      "Real-time challenge tracking & rankings",
      "Performance analytics dashboards",
      "Role-based access for agents & managers",
      "Flutter frontend optimized for mobile",
      "Scalable backend architecture",
    ],
    technologies: ["Flutter", "Node.js", "Express.js", "SQLite", "REST API"],
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "eco.net",
    subtitle: "Sustainable Resource Management Platform",
    period: "Feb 2025 – Jun 2025",
    organization: "ESPRIT / be.net",
    description:
      "A full-stack platform built with Symfony 6.4 promoting environmental sustainability. Features AI-powered content generation, interactive quizzes, marketplace, and community collaboration tools.",
    features: [
      "Symfony 6.4 & PHP 8.1+ architecture",
      "AI-powered content generation (Gemini AI)",
      "Environmental challenges & quizzes",
      "Secure watermarking system",
      "Multi-auth: Email, Google, GitHub OAuth",
      "Comprehensive admin panel",
    ],
    technologies: ["Symfony", "PHP 8.1+", "Gemini AI", "OAuth", "MySQL"],
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
