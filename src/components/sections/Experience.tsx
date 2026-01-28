import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Business Immersion Intern",
    company: "STAR ASSURANCES",
    location: "La Goleta, Tunis",
    period: "Jun 2025 – Aug 2025",
    type: "Hybrid",
    description: [
      "Designed and deployed a full-stack Challenge Management System to gamify sales performance",
      "Developed a Flutter mobile application connected to an Express.js / Node.js backend with SQLite",
      "Implemented real-time updates, role-based access control, and performance dashboards",
      "Applied UI/UX best practices, REST API design, and Agile methodologies",
      "Delivered a secure, scalable, and production-ready solution improving transparency and efficiency",
    ],
    technologies: ["Flutter", "Node.js", "Express.js", "SQLite", "REST API"],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Tunisie Telecom",
    location: "Ariana, Tunisia",
    period: "Jun 2023 – Jul 2023",
    type: "Hybrid",
    description: [
      "Developed a professional full-stack e-commerce platform using React.js",
      "Improved user experience and application performance significantly",
      "Collaborated effectively within a technical team under real deadlines",
      "Received official internship certification for technical excellence",
    ],
    technologies: ["React.js", "JavaScript", "CSS", "REST API"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            badge="Experience"
            title="Professional Journey"
            description="Real-world experience building production-grade solutions"
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <ScrollReveal
                key={exp.title}
                delay={index * 150}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10"
                  />

                  {/* Card */}
                  <div
                    className={`ml-8 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    } glass rounded-xl p-6 hover-lift`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <Briefcase className="w-3 h-3" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location} • {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
