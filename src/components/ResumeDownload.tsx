import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useRef } from "react";

const resumeData = {
  name: "Karim Feki",
  title: "Full-Stack Developer • Mobile Engineer • UI/UX Designer",
  email: "contact@karimfeki.dev",
  location: "Tunis, Tunisia",
  linkedin: "linkedin.com/in/karimfeki",
  github: "github.com/karimfeki",
  summary:
    "Highly motivated, results-oriented computer engineering student with strong expertise in mobile, web, and desktop application development. Combines software architecture, UI/UX design, and scalable system engineering with a focus on delivering user-centric, high-performance digital solutions.",
  education: {
    degree: "Computer Engineering",
    school: "ESPRIT University",
    specialization: "Computer & Mobile Systems",
    location: "Tunisia",
  },
  experience: [
    {
      title: "Business Immersion Intern",
      company: "STAR ASSURANCES",
      period: "Jun 2025 – Aug 2025",
      location: "La Goleta, Tunis",
      points: [
        "Designed and deployed a full-stack Challenge Management System to gamify sales performance",
        "Developed a Flutter mobile application connected to an Express.js / Node.js backend with SQLite",
        "Implemented real-time updates, role-based access control, and performance dashboards",
        "Applied UI/UX best practices, REST API design, and Agile methodologies",
      ],
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Tunisie Telecom",
      period: "Jun 2023 – Jul 2023",
      location: "Ariana, Tunisia",
      points: [
        "Developed a professional full-stack e-commerce platform using React.js",
        "Improved user experience and application performance",
        "Received official internship certification for technical excellence",
      ],
    },
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "Kotlin", "Swift", "Dart"],
    frontend: ["React.js", "Next.js", "SwiftUI", "Jetpack Compose", "Flutter", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Spring Boot", "Symfony", "Firebase"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    tools: ["Git", "Docker", "REST API", "Agile/Scrum", "UI/UX Design", "Figma"],
  },
  projects: [
    {
      name: "Tâche-Lik",
      description: "Cross-platform mobile learning platform with iOS (SwiftUI) and Android (Kotlin) apps",
      tech: "SwiftUI, Kotlin, Socket.IO, AI Integration",
    },
    {
      name: "STAR Challenge Platform",
      description: "Enterprise sales gamification system with real-time tracking and analytics",
      tech: "Flutter, Node.js, Express.js, SQLite",
    },
    {
      name: "eco.net",
      description: "Sustainable resource management platform with AI-powered features",
      tech: "Symfony 6.4, PHP 8.1+, Gemini AI, OAuth",
    },
  ],
};

export function ResumeDownload() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const styles = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; color: #1a1a2e; line-height: 1.5; padding: 40px; max-width: 800px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 2px solid #0284c7; }
        .name { font-size: 28px; font-weight: 700; color: #0284c7; margin-bottom: 4px; }
        .title { font-size: 14px; color: #64748b; margin-bottom: 12px; }
        .contact { font-size: 11px; color: #475569; }
        .contact span { margin: 0 8px; }
        .section { margin-bottom: 20px; }
        .section-title { font-size: 14px; font-weight: 700; color: #0284c7; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 12px; }
        .summary { font-size: 12px; color: #475569; }
        .exp-item { margin-bottom: 14px; }
        .exp-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; }
        .exp-title { font-size: 13px; font-weight: 600; }
        .exp-company { font-size: 12px; color: #0284c7; }
        .exp-meta { font-size: 11px; color: #64748b; }
        .exp-points { list-style: none; padding-left: 12px; }
        .exp-points li { font-size: 11px; color: #475569; margin-bottom: 3px; position: relative; padding-left: 10px; }
        .exp-points li::before { content: "•"; position: absolute; left: 0; color: #0284c7; }
        .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
        .skill-category { font-size: 11px; }
        .skill-label { font-weight: 600; color: #1a1a2e; }
        .skill-items { color: #475569; }
        .projects-grid { display: grid; gap: 10px; }
        .project-item { font-size: 11px; }
        .project-name { font-weight: 600; color: #1a1a2e; }
        .project-desc { color: #475569; }
        .project-tech { color: #0284c7; font-size: 10px; }
        .edu-item { font-size: 12px; }
        .edu-degree { font-weight: 600; }
        .edu-school { color: #0284c7; }
        .edu-detail { font-size: 11px; color: #64748b; }
        @media print { body { padding: 20px; } }
      </style>
    `;

    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Karim Feki - Resume</title>
        ${styles}
      </head>
      <body>
        <div class="header">
          <div class="name">${resumeData.name}</div>
          <div class="title">${resumeData.title}</div>
          <div class="contact">
            <span>${resumeData.email}</span>•
            <span>${resumeData.location}</span>•
            <span>${resumeData.linkedin}</span>•
            <span>${resumeData.github}</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Professional Summary</div>
          <p class="summary">${resumeData.summary}</p>
        </div>

        <div class="section">
          <div class="section-title">Experience</div>
          ${resumeData.experience
            .map(
              (exp) => `
            <div class="exp-item">
              <div class="exp-header">
                <div>
                  <span class="exp-title">${exp.title}</span>
                  <span class="exp-company"> — ${exp.company}</span>
                </div>
                <span class="exp-meta">${exp.period}</span>
              </div>
              <div class="exp-meta">${exp.location}</div>
              <ul class="exp-points">
                ${exp.points.map((p) => `<li>${p}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="section">
          <div class="section-title">Projects</div>
          <div class="projects-grid">
            ${resumeData.projects
              .map(
                (p) => `
              <div class="project-item">
                <span class="project-name">${p.name}:</span>
                <span class="project-desc">${p.description}</span>
                <div class="project-tech">${p.tech}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <div class="section">
          <div class="section-title">Skills</div>
          <div class="skills-grid">
            <div class="skill-category"><span class="skill-label">Languages:</span> <span class="skill-items">${resumeData.skills.languages.join(", ")}</span></div>
            <div class="skill-category"><span class="skill-label">Frontend:</span> <span class="skill-items">${resumeData.skills.frontend.join(", ")}</span></div>
            <div class="skill-category"><span class="skill-label">Backend:</span> <span class="skill-items">${resumeData.skills.backend.join(", ")}</span></div>
            <div class="skill-category"><span class="skill-label">Databases:</span> <span class="skill-items">${resumeData.skills.databases.join(", ")}</span></div>
            <div class="skill-category"><span class="skill-label">Tools:</span> <span class="skill-items">${resumeData.skills.tools.join(", ")}</span></div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Education</div>
          <div class="edu-item">
            <span class="edu-degree">${resumeData.education.degree}</span> — 
            <span class="edu-school">${resumeData.education.school}</span>
            <div class="edu-detail">${resumeData.education.specialization} • ${resumeData.education.location}</div>
          </div>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <Button variant="hero-outline" size="lg" onClick={handleDownload} className="gap-2">
      <Download className="w-4 h-4" />
      Download Resume
    </Button>
  );
}
