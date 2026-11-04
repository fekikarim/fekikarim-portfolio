import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { PartTags, Sheet, SheetHeader } from "@/components/drawing/Sheet";
import { DocumentTrigger, DocumentViewer } from "@/components/drawing/DocumentViewer";
import { internshipDocuments, type ViewerDocument } from "@/lib/documents";

type ExperienceEntry = {
  rev: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary?: string;
  description: string[];
  technologies: string[];
  links?: { label: string; href: string }[];
  certificate: ViewerDocument;
};

const experiences: ExperienceEntry[] = [
  {
    rev: "C",
    title: "Software Engineer Intern",
    company: "STEG Tunisie",
    location: "Tunis, Tunisia",
    period: "Jul 2026 – Aug 2026",
    type: "Hybrid",
    summary:
      "Contributed, within the project team, to the STEG Smart Internship & Administrative Workflow Platform: an enterprise solution that digitalises the internship lifecycle, from application and administrative processing to task supervision, document verification, evaluation and certificate issuance.",
    description: [
      "Contributed to the architecture of a multi-component platform combining web applications, a cross-platform mobile app, a central backend and dedicated AI services.",
      "Implemented REST API integrations and backend features in Java, Spring Boot and PostgreSQL for business workflows, authentication, authorization and data management.",
      "Developed AI document-intelligence services with Python, FastAPI, PyMuPDF and Tesseract OCR for document classification, information extraction, report analysis and verification.",
      "Worked on role-based access control, JWT authentication, permission management and protected communication between internal services.",
      "Contributed to Next.js, React and Angular interfaces in TypeScript for candidate applications and administrative management.",
      "Took part in a Flutter companion app for task tracking, digital logbooks and supervisor interaction, with real-time messaging and notifications over STOMP and WebSocket.",
      "Contributed to automated document processing and PDF generation, including internship journal compilation and certificate verification.",
      "Applied engineering practice across system analysis, database design, API documentation, testing and technical documentation.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Python",
      "FastAPI",
      "Tesseract OCR",
      "PyMuPDF",
      "Next.js",
      "Angular",
      "Flutter",
      "WebSocket",
      "Docker",
    ],
    links: [{ label: "Repository", href: "https://github.com/fekikarim/steg-project" }],
    certificate: internshipDocuments.steg,
  },
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
    certificate: internshipDocuments.star,
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
    certificate: internshipDocuments.tt,
  },
];

const certificates = experiences.map((exp) => exp.certificate);

export function Experience() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="container py-10 lg:py-16">
      <Sheet id="experience" labelledBy="experience-title">
        <SheetHeader
          id="experience-title"
          title="Experience"
          lede="Production systems shipped during internships, each backed by an official certificate."
          drawing="Revision history"
          number="KF-02"
          sheet="3 of 7"
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
          {experiences.map((exp, index) => (
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
                {exp.summary && (
                  <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-foreground">{exp.summary}</p>
                )}
                <ul className="mt-5 space-y-2.5">
                  {exp.description.map((item) => (
                    <li key={item} className="grid grid-cols-[1rem_1fr] text-[15px] leading-relaxed text-foreground">
                      <span aria-hidden className="mt-[0.7em] h-px w-2.5 bg-rule" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <p className="lettering text-[11px] text-muted-foreground">Material</p>
                  <PartTags className="mt-2" items={exp.technologies} label={`Technologies used at ${exp.company}`} />
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col gap-2">
                <DocumentTrigger
                  doc={exp.certificate}
                  onOpen={() => setActive(index)}
                  caption={`Issued by ${exp.company}`}
                />
                {exp.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-11 items-center gap-3 border border-border p-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-rule hover:bg-foreground hover:text-background"
                  >
                    <Github className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
                    <span className="flex-1">{link.label}</span>
                    <ArrowUpRight
                      aria-hidden
                      className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background"
                      strokeWidth={1.5}
                    />
                    <span className="sr-only">for the {exp.company} project (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Sheet>

      <DocumentViewer documents={certificates} index={active} onIndexChange={setActive} />
    </div>
  );
}
