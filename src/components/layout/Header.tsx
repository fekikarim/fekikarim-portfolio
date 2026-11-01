import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MAILTO, navLinks } from "@/lib/profile";
import { cn } from "@/lib/utils";

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ["#top", ...navLinks.map((link) => link.href)]
      .map((selector) => document.querySelector<HTMLElement>(selector))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === "top" ? null : `#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule/80 bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <nav aria-label="Primary" className="container flex h-[var(--header-h)] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 min-w-0" onClick={() => setIsMenuOpen(false)}>
          <img src="/assets/kf-logo.webp" alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
          <span className="lettering text-sm text-foreground truncate">Karim Feki</span>
        </a>

        <ul className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "location" : undefined}
                className={cn(
                  "lettering relative block px-3 lg:px-4 py-2 text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground",
                  "after:absolute after:inset-x-3 lg:after:inset-x-4 after:-bottom-[calc((var(--header-h)-2.25rem)/2)] after:h-0.5 after:bg-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out-expo",
                  active === link.href && "text-foreground after:scale-x-100",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={MAILTO}
            className="hidden md:inline-flex h-10 items-center bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
          >
            Email Karim
          </a>
          <button
            type="button"
            className="md:hidden relative h-10 w-10 border border-border"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              aria-hidden
              className={cn(
                "absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-foreground transition-transform duration-300 ease-out-expo",
                isMenuOpen ? "rotate-45" : "-translate-y-[4px]",
              )}
            />
            <span
              aria-hidden
              className={cn(
                "absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-foreground transition-transform duration-300 ease-out-expo",
                isMenuOpen ? "-rotate-45" : "translate-y-[4px]",
              )}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="md:hidden fixed inset-x-0 top-[var(--header-h)] bottom-0 overflow-y-auto bg-background border-t border-border"
      >
        <ul className="container py-6">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className="border-b border-border animate-fade-in opacity-0"
              style={{ animationDelay: `${60 + index * 50}ms` }}
            >
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 text-3xl display"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container pb-10">
          <a
            href={MAILTO}
            onClick={() => setIsMenuOpen(false)}
            className="flex h-12 items-center justify-center bg-primary text-base font-semibold text-primary-foreground"
          >
            Email Karim
          </a>
        </div>
      </div>
    </header>
  );
}
