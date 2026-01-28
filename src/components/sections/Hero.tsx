import { Button } from "@/components/ui/button";
import { ResumeDownload } from "@/components/ResumeDownload";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/karim-feki.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/fekikarim/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/karimfeki/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:feki.karim28@gmail.com", label: "Email" },
];

export function Hero() {
  const handleScrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary">
                Available for opportunities
              </span>
            </div>

            <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6" style={{ animationDelay: "0.1s" }}>
              Hi, I'm{" "}
              <span className="text-gradient">Karim Feki</span>
            </h1>

            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-2">
                Full-Stack Developer • Mobile Engineer • UI/UX Designer
              </p>
              <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto lg:mx-0">
                Computer Engineering student at ESPRIT University, specializing in building 
                scalable, user-centric digital solutions with a focus on production-grade quality.
              </p>
            </div>

            <div className="opacity-0 animate-fade-in flex flex-wrap gap-4 justify-center lg:justify-start mt-8" style={{ animationDelay: "0.3s" }}>
              <Button
                variant="hero"
                size="xl"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <ResumeDownload />
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in flex gap-4 justify-center lg:justify-start mt-8" style={{ animationDelay: "0.4s" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl scale-110" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src={profileImage}
                  alt="Karim Feki"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-0 glass px-4 py-2 rounded-full shadow-lg animate-float">
                <span className="text-sm font-semibold text-foreground">🎓 ESPRIT University</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleScrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full border border-border hover:border-primary/50 transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
