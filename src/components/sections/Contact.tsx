import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Mail, MapPin, Linkedin, Github, Instagram, Facebook, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "feki.karim28@gmail.com",
    href: "mailto:feki.karim28@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tunis, Tunisia",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karimfeki/",
    username: "@karimfeki",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/fekikarim/",
    username: "@fekikarim",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/karimfeki.co/",
    username: "@karimfeki.co",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/KarimFeki.co/",
    username: "@KarimFeki.co",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            badge="Contact"
            title="Let's Work Together"
            description="I'm currently open to internship opportunities and exciting projects"
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal delay={100} direction="left">
                <div className="glass rounded-xl p-6 hover-lift">
                  <h3 className="text-lg font-bold text-foreground mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200} direction="left">
                <div className="glass rounded-xl p-6 hover-lift">
                  <h3 className="text-lg font-bold text-foreground mb-4">Follow Me</h3>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-2 -mx-2 rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <social.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* CTA Card */}
            <ScrollReveal delay={150} direction="right">
              <div className="glass rounded-xl p-8 flex flex-col justify-center items-center text-center hover-lift h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Ready to Collaborate?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Whether you have a project in mind, an internship opportunity, or just want to connect—I'd love to hear from you.
                </p>
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto"
                  onClick={() => window.open("mailto:feki.karim28@gmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5" />
                  Send an Email
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
