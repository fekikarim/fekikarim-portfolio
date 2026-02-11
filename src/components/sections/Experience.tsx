import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Business Immersion Intern",
    company: "STAR ASSURANCES",
    location: "La Goleta, Tunis",
    period: "Jun 2025 – Aug 2025",
    type: "Hybrid",
    description: [
      "Designed and deployed a full-stack Challenge Management System to gamify sales performance",
      "Developed a Flutter mobile application connected to an Express.js / Node.js backend with SQLite",
      "Implemented real-time updates, role-based access control, and performance dashboards",
      "Applied UI/UX best practices, REST API design, and Agile methodologies",
      "Delivered a secure, scalable, and production-ready solution improving transparency and efficiency",
    ],
    technologies: ["Flutter", "Node.js", "Express.js", "SQLite", "REST API"],
    certificate: {
      label: "Internship Certificate",
      src: "/certifs/attestation_de_stage_STAR.pdf",
      type: "pdf",
      alt: "STAR ASSURANCES internship certificate",
    },
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Tunisie Telecom",
    location: "Ariana, Tunisia",
    period: "Jun 2023 – Jul 2023",
    type: "Hybrid",
    description: [
      "Developed a professional full-stack e-commerce platform using React.js",
      "Improved user experience and application performance significantly",
      "Collaborated effectively within a technical team under real deadlines",
      "Received official internship certification for technical excellence",
    ],
    technologies: ["React.js", "JavaScript", "CSS", "REST API"],
    certificate: {
      label: "Internship Certificate",
      src: "/certifs/attestation_de_stage_TT.jpeg",
      type: "image",
      alt: "Tunisie Telecom internship certificate",
    },
  },
];

type Certificate = {
  label: string;
  src: string;
  type: "pdf" | "image";
  alt: string;
};

type CertificatePreviewProps = {
  company: string;
  certificate: Certificate;
  onOpen: (payload: { company: string; certificate: Certificate }) => void;
};

function CertificatePreview({ company, certificate, onOpen }: CertificatePreviewProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="mt-4"
      onClick={() => onOpen({ company, certificate })}
    >
      Preview Certificate
    </Button>
  );
}

export function Experience() {
  const [activeCert, setActiveCert] = useState<
    null | { company: string; certificate: Certificate }
  >(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (activeCert) {
      setIsLoaded(false);
      setHasError(false);
    }
  }, [activeCert]);

  useEffect(() => {
    if (!activeCert) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCert(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCert]);

  const handleOpenPreview = (payload: { company: string; certificate: Certificate }) => {
    setActiveCert(payload);
  };

  const handleClosePreview = () => {
    setActiveCert(null);
  };

  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            badge="Experience"
            title="Professional Journey"
            description="Real-world experience building production-grade solutions"
          />
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/80 md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <ScrollReveal
                key={exp.title}
                delay={index * 150}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="relative mb-12 md:mb-16 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 shadow-sm" />

                  <div className="pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
                    {/* Card */}
                    <div
                      className={`w-full md:max-w-[520px] ${
                        index % 2 === 0
                          ? "md:col-start-1 md:justify-self-end md:pr-6"
                          : "md:col-start-2 md:justify-self-start md:pl-6"
                      } glass rounded-xl p-6 border border-border/60 bg-card/70 shadow-lg hover:shadow-xl transition-shadow`}
                    >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <Briefcase className="w-3 h-3" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location} • {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.certificate && (
                      <CertificatePreview
                        company={exp.company}
                        certificate={exp.certificate}
                        onOpen={handleOpenPreview}
                      />
                    )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClosePreview}
            aria-label="Close certificate preview"
          />
          <div className="relative z-10 flex h-[min(86vh,780px)] w-[min(94vw,980px)] flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b bg-background/90 px-6 py-5">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{activeCert.company}</p>
                <h3 className="text-lg font-semibold text-foreground">
                  {activeCert.certificate.label}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={activeCert.certificate.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in new tab
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={activeCert.certificate.src} download>
                    Download
                  </a>
                </Button>
                <Button variant="ghost" size="sm" onClick={handleClosePreview}>
                  Close
                </Button>
              </div>
            </div>

            <div className="relative flex-1 min-h-0 bg-muted/30 p-4">
              {!isLoaded && !hasError && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/70 backdrop-blur-sm">
                  <div className="text-sm text-muted-foreground animate-pulse">
                    Loading certificate preview...
                  </div>
                </div>
              )}

              <div className="h-full w-full rounded-xl border border-border/70 bg-background shadow-sm">
                {hasError ? (
                  <div className="flex h-full items-center justify-center px-6 text-sm text-muted-foreground">
                    We could not load the preview. Please open the file in a new tab or download it.
                  </div>
                ) : activeCert.certificate.type === "pdf" ? (
                  <iframe
                    src={`${activeCert.certificate.src}#toolbar=0&navpanes=0&view=FitH`}
                    title={`${activeCert.company} certificate preview`}
                    className="h-full w-full rounded-xl"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                  />
                ) : (
                  <img
                    src={activeCert.certificate.src}
                    alt={activeCert.certificate.alt}
                    className="h-full w-full rounded-xl object-contain"
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
