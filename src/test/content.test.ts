import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { certifications, internshipDocuments } from "@/lib/documents";
import { projects } from "@/lib/projects";

const publicFile = (path: string) => resolve(__dirname, "../../public", path.replace(/^\//, ""));
const documents = [...certifications, ...Object.values(internshipDocuments)];

describe("documents on file", () => {
  it.each(documents.map((doc) => [doc.id, doc] as const))("%s points at real files", (_, doc) => {
    expect(existsSync(publicFile(doc.src))).toBe(true);
    expect(existsSync(publicFile(doc.preview))).toBe(true);
  });

  it("maps each certification to its own document", () => {
    const byId = Object.fromEntries(certifications.map((cert) => [cert.id, cert.src]));
    expect(byId).toEqual({
      "nvidia-diffusion": "/certifs/Certificate-Of-Competency-NVIDIA.png",
      "aws-cloud-foundations": "/certifs/AWS-Academy-Graduate-Cloud-Foundations.pdf",
      "hedera-hcda": "/certifs/certificate-of-completion-HCDA.pdf",
      "hedera-hbf": "/certifs/certificate-of-completion-HBF.pdf",
      "hedera-hcf": "/certifs/certificate-of-completion-HCF.pdf",
    });
  });

  it("keeps the credential IDs from the brief", () => {
    expect(certifications.map((cert) => cert.credentialId)).toEqual([
      "TauXuWfURMOBYNutOVkopw",
      "66470e4e-18f5-427a-a48b-e1c3f51b03c6",
      "bfd8053f-1f68-40af-9a95-d1fd72289438",
      "fbb09b33-b870-4dcf-8c51-ee39544866de",
      "3b5dddfb-4bcd-448c-b322-cde699d7fa42",
    ]);
    expect(new Set(certifications.map((cert) => cert.issued))).toEqual(new Set(["Oct 2026"]));
  });
});

describe("projects", () => {
  it("lists the briefed projects in order, with existing ones kept", () => {
    expect(projects.map((p) => p.slug)).toEqual([
      "fight-zone",
      "farmy",
      "mallouka-motors-website",
      "tache-lik",
      "star-challenge",
      "eco-net",
      "mallouka-motors-management",
      "hireup",
      "the-world-within",
    ]);
  });

  it("has unique slugs and drawing numbers", () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
    expect(new Set(projects.map((p) => p.code)).size).toBe(projects.length);
  });

  it("uses the supplied live URLs as primary actions", () => {
    const primary = (slug: string) => projects.find((p) => p.slug === slug)?.links[0]?.href;
    expect(primary("fight-zone")).toBe("https://fight-zone.app");
    expect(primary("farmy")).toBe("https://www.farmynet.giize.com/");
    expect(primary("mallouka-motors-website")).toBe("https://mallouka-motors.netlify.app");
    expect(primary("the-world-within")).toBe("https://kanm.netlify.app");
  });

  it("links only to https destinations and never to LinkedIn edit forms", () => {
    for (const link of projects.flatMap((p) => p.links)) {
      expect(link.href).toMatch(/^https:\/\//);
      expect(link.href).not.toContain("linkedin.com");
    }
  });

  it("keeps attribution accurate", () => {
    const find = (slug: string) => projects.find((p) => p.slug === slug)!;
    expect(find("fight-zone").team).toContain("Nesrine Derouiche");
    expect(find("farmy").team).toContain("Team Be.net");
    expect(find("hireup").team).toContain("Team Be.net");
    expect(find("hireup").recognition).toContain("CDIO 2024");
    expect(find("the-world-within").team).toContain("KANM Team");
    expect(find("mallouka-motors-website").role).toBe("Sole creator");
  });
});
