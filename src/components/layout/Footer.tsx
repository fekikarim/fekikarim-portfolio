import { Github, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/kf-logo.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/karimfeki", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/karimfeki", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@karimfeki.dev", label: "Email" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="KF Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <p className="font-bold text-foreground">Karim Feki</p>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Karim Feki. Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
