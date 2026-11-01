import { navLinks } from "@/lib/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container pb-8 pt-2">
      <div className="grid border-t border-l border-rule text-sm sm:grid-cols-2 lg:grid-cols-12">
        <div className="flex items-center gap-3 border-r border-b border-rule p-4 lg:col-span-4">
          <img src="/assets/kf-logo.webp" alt="" width={32} height={32} loading="lazy" className="h-8 w-8" />
          <div>
            <p className="lettering text-xs text-foreground">Karim Feki</p>
            <p className="text-muted-foreground">Full-Stack & Mobile Engineer</p>
          </div>
        </div>
        <nav aria-label="Footer" className="border-r border-b border-rule p-4 lg:col-span-5">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="lettering text-xs text-muted-foreground hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="border-r border-b border-rule p-4 text-muted-foreground sm:col-span-2 lg:col-span-3">
          © {currentYear} Karim Feki. Designed and built in Tunis.
        </p>
      </div>
    </footer>
  );
}
