import { ArrowUpRight, Award, Github, Globe, Play, Plus } from "lucide-react";
import { PartTags, Sheet, SheetHeader, TitleBlock } from "@/components/drawing/Sheet";
import { projects, type Project, type ProjectLink } from "@/lib/projects";
import { cn } from "@/lib/utils";

const linkIcons = { live: Globe, repo: Github, video: Play } satisfies Record<ProjectLink["kind"], unknown>;

const featured = projects.filter((project) => project.tier === "featured");
const earlier = projects.filter((project) => project.tier === "earlier");

const anchor = (project: Project) => `project-${project.slug}`;

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  if (project.links.length === 0) return null;
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label={`${project.title} links`}>
      {project.links.map((link) => {
        const Icon = linkIcons[link.kind];
        const host = link.kind === "live" ? new URL(link.href).host.replace(/^www\./, "") : null;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 border border-rule px-4 py-2 text-sm font-semibold text-foreground transition-[background-color,color,transform] duration-200 hover:bg-foreground hover:text-background active:scale-[0.98]"
            >
              <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
              {link.label}
              {host && (
                <span className="font-normal text-muted-foreground group-hover:text-background/75">{host}</span>
              )}
              <ArrowUpRight
                aria-hidden
                className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background"
                strokeWidth={1.5}
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Role first, then disciplines: the attribution is the first fact after the name. */
function Focus({ project }: { project: Project }) {
  return (
    <p className="lettering mt-3 text-[11px] leading-relaxed text-muted-foreground">
      {project.role && <span className="text-foreground">{project.role}</span>}
      {project.focus.map((item, i) => (
        <span key={item}>
          {(project.role || i > 0) && <span aria-hidden> · </span>}
          {project.role && i === 0 && <span className="sr-only">, </span>}
          {item}
        </span>
      ))}
    </p>
  );
}

function Notes({ project, className }: { project: Project; className?: string }) {
  return (
    <ol className={cn("space-y-2.5", className)}>
      {project.features.map((feature, i) => (
        <li key={feature} className="grid grid-cols-[1.75rem_1fr] text-[15px] leading-snug text-foreground">
          <span className="tabular-nums text-muted-foreground">{i + 1}.</span>
          {feature}
        </li>
      ))}
    </ol>
  );
}

function Register() {
  return (
    <nav aria-labelledby="project-register" className="border-b border-rule">
      <h3
        id="project-register"
        className="flex justify-between gap-4 border-b border-border px-5 py-2 sm:px-8 lg:px-10 lettering text-[11px] text-muted-foreground"
      >
        Drawing register
        <span className="tabular-nums">{projects.length} sheets</span>
      </h3>
      <ol className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="bg-card sm:last:odd:col-span-2 lg:last:odd:col-span-1">
            <a
              href={`#${anchor(project)}`}
              className="group grid h-full grid-cols-[4.25rem_minmax(0,1fr)] gap-x-3 px-5 py-3 transition-colors duration-200 hover:bg-accent/60 sm:px-8 lg:px-6"
            >
              <span className="pt-0.5 text-xs leading-5 tabular-nums text-muted-foreground">
                {project.code}
                <span className="block">{project.period.slice(-4)}</span>
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[15px] font-semibold text-foreground underline decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-primary">
                  {project.title}
                </span>
                <span className="block truncate text-sm text-muted-foreground">{project.subtitle}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      id={anchor(project)}
      aria-labelledby={`${project.slug}-title`}
      className="grid border-b border-rule lg:grid-cols-12"
    >
      {/* Description */}
      <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10">
        <h3 id={`${project.slug}-title`} className="display text-[clamp(1.75rem,3.6vw,2.75rem)] text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-lg font-medium text-primary">{project.subtitle}</p>
        <Focus project={project} />
        <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-foreground">{project.description}</p>

        {project.capabilities && (
          <div className="mt-6 max-w-[62ch]">
            <h4 className="lettering text-[11px] text-muted-foreground">Platform capabilities</h4>
            <ul className="mt-2 flex flex-wrap gap-x-1 text-[15px] leading-relaxed text-foreground">
              {project.capabilities.map((item, i) => (
                <li key={item}>
                  {item}
                  {i < project.capabilities!.length - 1 && <span aria-hidden className="text-muted-foreground">,</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <ProjectLinks project={project} className="mt-8" />
      </div>

      {/* Notes + title block */}
      <div className="lg:col-span-5 flex flex-col border-t border-border lg:border-t-0 lg:border-l">
        <div className="flex-1 p-5 sm:p-8 lg:p-10">
          <h4 className="lettering text-xs text-muted-foreground">{project.notesTitle ?? "General notes"}</h4>
          <Notes project={project} className="mt-4" />
          {project.goals && (
            <>
              <h4 className="lettering mt-8 text-xs text-muted-foreground">Sustainable Development Goals</h4>
              <ul className="mt-3 space-y-1.5 text-[15px] leading-snug text-foreground">
                {project.goals.map((goal) => (
                  <li key={goal} className="grid grid-cols-[1.75rem_1fr]">
                    <span aria-hidden className="mt-[0.6em] h-px w-2.5 bg-rule" />
                    {goal}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <TitleBlock
          className="grid-cols-2 border-l-0"
          cells={[
            { label: "Dwg no.", value: <span className="tabular-nums">{project.code}</span> },
            { label: "Date", value: <span className="tabular-nums">{project.period}</span> },
            ...(project.team ? [{ label: "Team", value: project.team, className: "col-span-2" }] : []),
            { label: "For", value: project.organization, className: "col-span-2" },
            {
              label: "Material",
              value: <PartTags className="mt-1" items={project.technologies} label={`${project.title} technology stack`} />,
              className: "col-span-2",
            },
          ]}
        />
      </div>
    </article>
  );
}

function EarlierProject({ project }: { project: Project }) {
  return (
    <article
      id={anchor(project)}
      aria-labelledby={`${project.slug}-title`}
      className="flex flex-col bg-card md:last:odd:col-span-2 xl:last:odd:col-span-1"
    >
      <div className="flex-1 p-5 sm:p-8">
        <p className="flex justify-between gap-4 text-xs tabular-nums text-muted-foreground">
          <span>{project.code}</span>
          <span>{project.period}</span>
        </p>
        <h4 id={`${project.slug}-title`} className="display mt-4 text-[clamp(1.5rem,2.6vw,2rem)] text-foreground">
          {project.title}
        </h4>
        <p className="mt-2 text-base font-medium text-primary">{project.subtitle}</p>
        <Focus project={project} />
        <p className="mt-4 text-[15px] leading-relaxed text-foreground">{project.description}</p>

        {project.recognition && (
          <p className="mt-4 flex gap-2.5 border-y border-border py-2.5 text-sm text-foreground">
            <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
            {project.recognition}
          </p>
        )}

        <details className="group/notes mt-5 border-t border-border">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 py-2 lettering text-xs text-foreground transition-colors duration-200 hover:text-primary [&::-webkit-details-marker]:hidden">
            {project.notesTitle ?? "General notes"}
            <span className="flex items-center gap-2 text-muted-foreground">
              <span className="tabular-nums">{project.features.length}</span>
              <Plus
                aria-hidden
                className="h-4 w-4 transition-transform duration-300 ease-out-expo group-open/notes:rotate-45"
                strokeWidth={1.5}
              />
            </span>
          </summary>
          <Notes project={project} className="pb-2 pt-2" />
        </details>
      </div>

      <dl className="border-t border-border">
        {project.team && (
          <div className="border-b border-border px-5 py-2.5 sm:px-8">
            <dt className="lettering text-[11px] text-muted-foreground">Team</dt>
            <dd className="mt-1 text-sm font-medium leading-snug text-foreground">{project.team}</dd>
          </div>
        )}
        <div className="px-5 py-3 sm:px-8">
          <dt className="lettering text-[11px] text-muted-foreground">Material</dt>
          <dd className="mt-2">
            <PartTags items={project.technologies} label={`${project.title} technology stack`} />
          </dd>
        </div>
      </dl>
      {project.links.length > 0 && <ProjectLinks project={project} className="px-5 pb-5 sm:px-8 sm:pb-8" />}
    </article>
  );
}

export function Projects() {
  return (
    <div className="container py-10 lg:py-16">
      <Sheet id="projects" labelledBy="projects-title">
        <SheetHeader
          id="projects-title"
          title="Projects"
          lede="Production platforms, team builds and academic work across web, mobile, desktop and games, with live sites and source code wherever they are public."
          drawing="Project sheets"
          number="KF-03"
          sheet="4 of 7"
        />

        <Register />

        {featured.map((project) => (
          <FeaturedProject key={project.slug} project={project} />
        ))}

        <section aria-labelledby="earlier-work">
          <h3
            id="earlier-work"
            className="border-b border-border px-5 py-3 sm:px-8 lg:px-10 lettering text-xs text-muted-foreground"
          >
            Earlier work · 2023 – 2024
          </h3>
          <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
            {earlier.map((project) => (
              <EarlierProject key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </Sheet>
    </div>
  );
}
