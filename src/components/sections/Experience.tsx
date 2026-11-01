import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Download, ExternalLink, FileCheck2, X } from "lucide-react";
import { Sheet, SheetHeader } from "@/components/drawing/Sheet";

type Certificate = {
  label: string;
  src: string;
  type: "pdf" | "image";
  alt: string;
};

type ExperienceEntry = {
  rev: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
  certificate: Certificate;
};

const experiences: ExperienceEntry[] = [
  {
    rev: "B",
    title: "Business Immersion Intern",
    company: "STAR Assurances",
    location: "La Goleta, Tunis",
    period: "Jun 2025 – Aug 2025",
    type: "Hybrid",
    description: [
      "Designed and deployed a full-stack Challenge Management System that gamifies sales performance.",
      "Built a Flutter mobile application backed by an Express.js / Node.js API and SQLite.",
      "Implemented real-time updates, role-based access control and performance dashboards.",
      "Applied UI/UX best practices, REST API design and Agile methodology.",
      "Delivered a secure, scalable, production-ready solution that improved transparency and efficiency.",
    ],
    technologies: ["Flutter", "Node.js", "Express.js", "SQLite", "REST API"],
    certificate: {
      label: "Internship certificate",
      src: "/certifs/attestation_de_stage_STAR.pdf",
      type: "pdf",
      alt: "STAR Assurances internship certificate",
    },
  },
  {
    rev: "A",
    title: "Full-Stack Developer Intern",
    company: "Tunisie Telecom",
    location: "Ariana, Tunisia",
    period: "Jun 2023 – Jul 2023",
    type: "Hybrid",
    description: [
      "Developed a professional full-stack e-commerce platform with React.js.",
      "Significantly improved user experience and application performance.",
      "Collaborated within a technical team against real deadlines.",
      "Received official internship certification for technical excellence.",
    ],
    technologies: ["React.js", "JavaScript", "CSS", "REST API"],
    certificate: {
      label: "Internship certificate",
      src: "/certifs/attestation_de_stage_TT.jpeg",
      type: "image",
      alt: "Tunisie Telecom internship certificate",
    },
  },
];

function CertificateDialog({
  entry,
  onOpenChange,
}: {
  entry: ExperienceEntry | null;
  onOpenChange: (open: boolean) => void;
}) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const certificate = entry?.certificate;

  return (
    <DialogPrimitive.Root
      open={entry !== null}
      onOpenChange={(open) => {
        if (open) setStatus("loading");
        onOpenChange(open);
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-foreground/60 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content
          onOpenAutoFocus={() => setStatus("loading")}
          className="fixed left-1/2 top-1/2 z-50 flex h-[min(88dvh,820px)] w-[min(94vw,1000px)] -translate-x-1/2 -translate-y-1/2 flex-col border border-rule bg-background shadow-[0_24px_60px_-20px_hsl(var(--foreground)/0.35)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.98] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 duration-300"
        >
          {entry && certificate && (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule px-4 py-3 sm:px-6 sm:py-4">
                <div className="min-w-0">
                  <DialogPrimitive.Description className="lettering text-[11px] text-muted-foreground">
                    {entry.company} · {entry.period}
                  </DialogPrimitive.Description>
                  <DialogPrimitive.Title className="mt-1 text-lg font-semibold text-foreground">
                    {certificate.label}
                  </DialogPrimitive.Title>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={certificate.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 border border-border px-3 text-sm font-medium hover:border-rule hover:bg-accent"
                  >
                    <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                    <span className="hidden sm:inline">Open in new tab</span>
                    <span className="sr-only sm:hidden">Open in new tab</span>
                  </a>
                  <a
                    href={certificate.src}
                    download
                    className="inline-flex h-10 items-center gap-2 border border-border px-3 text-sm font-medium hover:border-rule hover:bg-accent"
                  >
                    <Download className="h-4 w-4" strokeWidth={1.5} />
                    <span className="hidden sm:inline">Download</span>
                    <span className="sr-only sm:hidden">Download</span>
                  </a>
                  <DialogPrimitive.Close
                    className="inline-flex h-10 w-10 items-center justify-center bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
                    aria-label="Close certificate preview"
                  >
                    <X className="h-4 w-4" strokeWidth={1.75} />
                  </DialogPrimitive.Close>
                </div>
              </div>

              <div className="relative min-h-0 flex-1 bg-muted p-3 sm:p-5">
                {status === "loading" && (
                  <p className="absolute inset-0 z-10 flex items-center justify-center text-sm text-muted-foreground">
                    Loading certificate…
                  </p>
                )}
                {status === "error" ? (
                  <p className="flex h-full items-center justify-center px-6 text-center text-sm text-muted-foreground">
                    The preview could not load. Open the file in a new tab or download it instead.
                  </p>
                ) : certificate.type === "pdf" ? (
                  <iframe
                    src={`${certificate.src}#toolbar=0&navpanes=0&view=FitH`}
                    title={certificate.alt}
                    className="h-full w-full bg-background"
                    onLoad={() => setStatus("ready")}
                    onError={() => setStatus("error")}
                  />
                ) : (
                  <img
                    src={certificate.src}
                    alt={certificate.alt}
                    className="h-full w-full object-contain"
                    onLoad={() => setStatus("ready")}
                    onError={() => setStatus("error")}
                  />
                )}
              </div>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export function Experience() {
  const [active, setActive] = useState<ExperienceEntry | null>(null);

  return (
    <div className="container py-10 lg:py-16">
      <Sheet id="experience" labelledBy="experience-title">
        <SheetHeader
          id="experience-title"
          title="Experience"
          lede="Production systems shipped during internships, each backed by an official certificate."
          drawing="Revision history"
          number="KF-02"
          sheet="3 of 6"
        />

        {/* Column heads of the revision table */}
        <div
          aria-hidden
          className="hidden lg:grid grid-cols-12 gap-10 border-b border-border px-10 py-2 lettering text-[11px] text-muted-foreground"
        >
          <span className="col-span-3">Rev · Period</span>
          <span className="col-span-6">Description</span>
          <span className="col-span-3">Approval</span>
        </div>

        <ol>
          {experiences.map((exp) => (
            <li key={exp.company} className="grid gap-6 border-b border-border last:border-b-0 p-5 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
              <div className="lg:col-span-3 flex lg:flex-col gap-4 lg:gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-rule display text-2xl">
                  {exp.rev}
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-foreground tabular-nums">{exp.period}</p>
                  <p className="text-muted-foreground">
                    {exp.location} · {exp.type}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">{exp.title}</h3>
                <p className="lettering mt-1 text-xs text-primary">{exp.company}</p>
                <ul className="mt-5 space-y-2.5">
                  {exp.description.map((item) => (
                    <li key={item} className="grid grid-cols-[1rem_1fr] text-[15px] leading-relaxed text-foreground">
                      <span aria-hidden className="mt-[0.7em] h-px w-2.5 bg-rule" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-muted-foreground">
                  <span className="lettering text-[11px] mr-2">Material</span>
                  {exp.technologies.join(" · ")}
                </p>
              </div>

              <div className="lg:col-span-3">
                <button
                  type="button"
                  onClick={() => setActive(exp)}
                  className="group flex w-full items-center gap-3 border border-rule p-3 text-left transition-colors duration-200 hover:bg-foreground hover:text-background"
                >
                  <FileCheck2 className="h-5 w-5 shrink-0 text-primary group-hover:text-background" strokeWidth={1.5} />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">View certificate</span>
                    <span className="block text-xs text-muted-foreground group-hover:text-background/75">
                      Issued by {exp.company}
                    </span>
                  </span>
                </button>
              </div>
            </li>
          ))}
        </ol>
      </Sheet>

      <CertificateDialog entry={active} onOpenChange={(open) => !open && setActive(null)} />
    </div>
  );
}
