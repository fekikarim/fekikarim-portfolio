import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "Kotlin", "Swift", "Dart"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "SwiftUI", "Jetpack Compose", "Flutter", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "Symfony", "Firebase"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase Realtime DB"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "Docker", "REST API", "Agile/Scrum", "UI/UX Design", "Figma"],
  },
  {
    title: "Architecture",
    skills: ["MVVM", "Clean Architecture", "Microservices", "Design Patterns", "UML"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            badge="Skills"
            title="Technical Expertise"
            description="A comprehensive toolkit for building modern, scalable applications"
          />
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollReveal key={category.title} delay={categoryIndex * 100}>
                <div className="glass rounded-xl p-6 hover-lift h-full">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium bg-background/80 text-foreground rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional Info */}
          <ScrollReveal delay={600}>
            <div className="mt-12 glass rounded-xl p-6 md:p-8 text-center">
              <p className="text-lg text-foreground/80">
                Continuously learning and adapting to new technologies. Currently exploring{" "}
                <span className="text-primary font-semibold">AI/ML integration</span>,{" "}
                <span className="text-primary font-semibold">cloud-native architectures</span>, and{" "}
                <span className="text-primary font-semibold">advanced mobile development patterns</span>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
