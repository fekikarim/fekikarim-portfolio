import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Code2, Palette, Smartphone, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable web applications with React, Node.js, and modern frameworks.",
  },
  {
    icon: Smartphone,
    title: "Mobile Engineering",
    description: "Cross-platform mobile apps with Flutter, Swift, and Kotlin using native patterns.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful interfaces with a focus on user experience.",
  },
  {
    icon: Server,
    title: "Software Architecture",
    description: "Designing maintainable, production-ready systems with industry best practices.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            badge="About Me"
            title="Engineering Excellence"
            description="A passionate engineer who combines technical expertise with design thinking"
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* Bio */}
          <ScrollReveal delay={100}>
            <div className="glass rounded-2xl p-8 md:p-10 mb-12 hover-lift">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm a highly motivated, results-oriented computer engineering student with strong expertise 
                in mobile, web, and desktop application development. My profile combines{" "}
                <span className="text-primary font-semibold">software architecture</span>,{" "}
                <span className="text-primary font-semibold">UI/UX design</span>, and{" "}
                <span className="text-primary font-semibold">scalable system engineering</span>, with a 
                strong focus on delivering user-centric, high-performance digital solutions.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                I adopt a rigorous engineering mindset, apply industry best practices, and consistently 
                aim for real-world, production-grade quality. Currently pursuing Computer Engineering at 
                ESPRIT University, specializing in Computer & Mobile Systems.
              </p>
            </div>
          </ScrollReveal>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.title} delay={150 + index * 100}>
                <div className="glass rounded-xl p-6 hover-lift group h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
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
