import { ArrowUpRight } from "lucide-react";
import { Action, Balloon, Sheet, TitleBlock } from "@/components/drawing/Sheet";
import { MAILTO, socialLinks } from "@/lib/profile";

const disciplines = [
  { title: "Native iOS", detail: "SwiftUI", top: "16%" },
  { title: "Android", detail: "Kotlin · Jetpack Compose", top: "38%" },
  { title: "Cross-platform & Web", detail: "Flutter · React", top: "60%" },
  { title: "Backend", detail: "Node.js · Symfony · Spring Boot", top: "82%" },
];

export function Hero() {
  return (
    <div id="top" className="container pt-4 pb-10 sm:pt-6 lg:pb-16">
      <Sheet
        zones
        as="div"
        innerClassName="grid lg:grid-cols-12"
      >
        {/* Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-12 p-5 py-8 sm:p-8 lg:p-12">
          <div>
            <h1 className="display text-[clamp(3.25rem,10vw,6rem)] text-foreground">
              Karim
              <br />
              Feki
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-medium text-foreground">
              Full-Stack Developer, Mobile Engineer and UI/UX Designer
            </p>
            <p className="mt-4 max-w-[54ch] text-base sm:text-lg leading-relaxed text-muted-foreground">
              Computer Engineering student at ESPRIT University building scalable, user-centred web and
              mobile applications to production-grade standards.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Action href={MAILTO} className="lg:hidden">Email Karim</Action>
              <Action href="#projects" variant="line">
                View projects
              </Action>
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.slice(0, 2).map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lettering text-xs text-muted-foreground underline decoration-border hover:text-foreground hover:decoration-primary"
                >
                  {social.label} {social.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Figure + title block */}
        <div className="lg:col-span-5 flex flex-col border-t border-border lg:border-t-0 lg:border-l">
          <figure className="flex-1 flex flex-col justify-center p-5 sm:p-8 lg:p-10">
            <div className="relative">
              <div className="relative w-full max-w-[300px] sm:max-w-[360px] mx-auto xl:mx-0 xl:w-[60%]">
                <div className="relative aspect-square overflow-hidden border border-rule bg-muted">
                  <img
                    src="/assets/karim-feki.webp"
                    alt="Portrait of Karim Feki"
                    width={800}
                    height={800}
                    {...{ fetchpriority: "high" }}
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Item balloons on the figure edge (compact screens; the legend below references them) */}
                {disciplines.map((d, i) => (
                  <Balloon
                    key={d.title}
                    n={i + 1}
                    className="xl:hidden absolute -right-3 -translate-y-1/2"
                    style={{ top: d.top }}
                  />
                ))}
              </div>

              {/* Assembly callouts (wide screens): leaders start on the figure with a dot terminator */}
              <ol className="hidden xl:block absolute inset-y-0 left-[calc(60%-2rem)] right-0" aria-label="Disciplines">
                {disciplines.map((d, i) => (
                  <li
                    key={d.title}
                    className="absolute left-0 right-0 -translate-y-1/2 flex items-center"
                    style={{ top: d.top }}
                  >
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground ring-1 ring-rule" />
                    <span aria-hidden className="h-px w-10 shrink-0 bg-rule dark:bg-primary" />
                    <Balloon n={i + 1} />
                    <span className="ml-3 min-w-0">
                      <span className="block lettering text-[11px] text-foreground">{d.title}</span>
                      <span className="block text-xs text-muted-foreground">{d.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Legend (compact screens) */}
            <ol className="xl:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4" aria-label="Disciplines">
              {disciplines.map((d, i) => (
                <li key={d.title} className="flex items-start gap-3">
                  <Balloon n={i + 1} />
                  <span>
                    <span className="block lettering text-[11px] text-foreground">{d.title}</span>
                    <span className="block text-sm text-muted-foreground">{d.detail}</span>
                  </span>
                </li>
              ))}
            </ol>

            <figcaption className="mt-6 lettering text-[11px] text-muted-foreground">
              Fig. 1 — Karim Feki, Tunis
            </figcaption>
          </figure>

          {/* Cover-sheet title block */}
          <TitleBlock
            className="grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 border-l-0"
            cells={[
              {
                label: "Status",
                value: (
                  <span className="inline-flex items-center gap-2">
                    <span aria-hidden className="h-2 w-2 rounded-full bg-primary" />
                    Open to internships
                  </span>
                ),
                className: "sm:col-span-2 lg:col-span-1 xl:col-span-2",
              },
              { label: "Location", value: "Tunis, Tunisia", className: "sm:col-span-2 lg:col-span-1 xl:col-span-2" },
              { label: "Education", value: "ESPRIT University", className: "sm:col-span-2 lg:col-span-1 xl:col-span-2" },
              { label: "Specialisation", value: "Computer & Mobile Systems", className: "sm:col-span-2 lg:col-span-1 xl:col-span-2" },
              { label: "Drawn by", value: "K. Feki" },
              { label: "Dwg no.", value: <span className="tabular-nums">KF-00</span> },
              { label: "Sheet", value: <span className="tabular-nums">1 of 6</span>, className: "col-span-2" },
            ]}
          />
          <a
            href={MAILTO}
            className="group flex min-h-14 items-center justify-between gap-4 bg-primary px-4 text-primary-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
          >
            <span>
              <span className="block lettering text-[11px] opacity-80">Approve · Contact</span>
              <span className="block text-base font-semibold">Email Karim</span>
            </span>
            <ArrowUpRight
              className="h-5 w-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </a>
        </div>
      </Sheet>
    </div>
  );
}
