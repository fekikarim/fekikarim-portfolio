/**
 * Documents on file in `public/certifs/`. Each entry points at the untouched original and at a
 * WebP preview rendered from it (`public/certifs/previews/`), so the viewer can show a one-page
 * PDF on every device without a PDF engine. Width and height are the preview's pixel size and
 * let the viewer reserve the page before it loads.
 */
export type ViewerDocument = {
  id: string;
  title: string;
  issuer: string;
  /** Issue month for credentials */
  issued?: string;
  /** Covered period for internship certificates, whose issue date is not recorded here */
  period?: string;
  /** The original file, offered for opening and download */
  src: string;
  /** The raster shown in the viewer */
  preview: string;
  format: "pdf" | "image";
  width: number;
  height: number;
  alt: string;
  credentialId?: string;
  verifyUrl?: string;
  description?: string;
  skills?: string[];
};

export type Certification = ViewerDocument & {
  issued: string;
  /** One line for the register row; the full description lives in the viewer */
  summary: string;
  skills: string[];
};

export const internshipDocuments = {
  steg: {
    id: "steg-internship",
    title: "Internship certificate",
    issuer: "STEG Tunisie",
    period: "Jul 2026 – Aug 2026",
    src: "/certifs/attestation_de_stage_STEG.pdf",
    preview: "/certifs/previews/attestation_de_stage_STEG.webp",
    format: "pdf",
    width: 1254,
    height: 1800,
    alt: "STEG internship certificate (attestation de stage) for Karim Feki, 1 July to 31 August 2026",
    description: "Attestation de stage issued by the STEG Central Directorate of IT and Telecommunications.",
  },
  star: {
    id: "star-internship",
    title: "Internship certificate",
    issuer: "STAR Assurances",
    period: "Jun 2025 – Aug 2025",
    src: "/certifs/attestation_de_stage_STAR.pdf",
    preview: "/certifs/previews/attestation_de_stage_STAR.webp",
    format: "pdf",
    width: 1233,
    height: 1800,
    alt: "STAR Assurances internship certificate for Karim Feki",
  },
  tt: {
    id: "tt-internship",
    title: "Internship certificate",
    issuer: "Tunisie Telecom",
    period: "Jun 2023 – Jul 2023",
    src: "/certifs/attestation_de_stage_TT.jpeg",
    preview: "/certifs/attestation_de_stage_TT.jpeg",
    format: "image",
    width: 800,
    height: 565,
    alt: "Tunisie Telecom internship certificate for Karim Feki",
  },
} satisfies Record<string, ViewerDocument>;

const HASHGRAPH = "The Hashgraph Association";

export const certifications: Certification[] = [
  {
    id: "nvidia-diffusion",
    title: "Generative AI with Diffusion Models",
    issuer: "NVIDIA",
    issued: "Oct 2026",
    src: "/certifs/Certificate-Of-Competency-NVIDIA.png",
    preview: "/certifs/previews/Certificate-Of-Competency-NVIDIA.webp",
    format: "image",
    width: 1436,
    height: 1210,
    alt: "NVIDIA Deep Learning Institute Certificate of Competency in Generative AI with Diffusion Models, awarded to Karim Feki",
    credentialId: "TauXuWfURMOBYNutOVkopw",
    summary: "NVIDIA Deep Learning Institute certificate of competency.",
    description:
      "Certificate of Competency awarded by NVIDIA for demonstrating competence in Generative AI with Diffusion Models.",
    skills: [
      "Generative AI",
      "Deep Learning",
      "PyTorch",
      "Computer Vision",
      "Neural Networks",
      "NLP",
      "Image Generation",
      "Python",
    ],
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate: Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    issued: "Oct 2026",
    src: "/certifs/AWS-Academy-Graduate-Cloud-Foundations.pdf",
    preview: "/certifs/previews/AWS-Academy-Graduate-Cloud-Foundations.webp",
    format: "pdf",
    width: 1800,
    height: 1391,
    alt: "AWS Academy Graduate, Cloud Foundations training badge certificate of completion for Karim Feki",
    credentialId: "66470e4e-18f5-427a-a48b-e1c3f51b03c6",
    // Printed on the certificate itself
    verifyUrl: "https://www.credly.com/go/40uyjxEs",
    summary: "Training badge for 20 hours of cloud computing and AWS fundamentals.",
    description:
      "Earned the AWS Academy Graduate, Cloud Foundations training badge after completing 20 hours of learning in cloud computing fundamentals and Amazon Web Services.",
    skills: ["Cloud Computing", "Cloud Infrastructure", "Cloud Security"],
  },
  {
    id: "hedera-hcda",
    title: "Hedera Certified Developer Associate (HCDA)",
    issuer: HASHGRAPH,
    issued: "Oct 2026",
    src: "/certifs/certificate-of-completion-HCDA.pdf",
    preview: "/certifs/previews/certificate-of-completion-HCDA.webp",
    format: "pdf",
    width: 1800,
    height: 1280,
    alt: "The Hashgraph Association certificate of completion, Hedera Certified Developer Associate (HCDA), for Karim Feki",
    credentialId: "bfd8053f-1f68-40af-9a95-d1fd72289438",
    summary: "Developer programme covering HTS, HCS, EVM smart contracts and wallet integration.",
    description:
      "Official certificate confirming completion of the Hedera Certified Developer Associate programme. Topics include Hedera Hashgraph fundamentals, development environment setup, account management and HBAR transactions, the Hedera Token Service (HTS), the Hedera Consensus Service (HCS), EVM-compatible smart contracts, interoperability, wallet and API integration, Stablecoin Studio and DevOps best practices.",
    skills: ["Blockchain", "Hashgraph", "Smart Contracts", "Solidity", "Web3", "DApps", "DLT"],
  },
  {
    id: "hedera-hbf",
    title: "Hedera Business Foundation (HBF)",
    issuer: HASHGRAPH,
    issued: "Oct 2026",
    src: "/certifs/certificate-of-completion-HBF.pdf",
    preview: "/certifs/previews/certificate-of-completion-HBF.webp",
    format: "pdf",
    width: 1800,
    height: 1280,
    alt: "The Hashgraph Association certificate of completion, Hedera Business Foundation (HBF), for Karim Feki",
    credentialId: "fbb09b33-b870-4dcf-8c51-ee39544866de",
    summary: "Enterprise use cases, tokenisation, digital identity and Hedera network architecture.",
    description:
      "Completed the Hedera Business Foundation certification. Topics include Distributed Ledger Technology (DLT), Hedera network architecture, enterprise use cases, tokenisation, digital identity, sustainability reporting and emerging Web3 applications.",
    skills: ["Blockchain", "DLT", "Web3", "Hashgraph", "Tokenization"],
  },
  {
    id: "hedera-hcf",
    title: "Hedera Certified Foundation (HCF)",
    issuer: HASHGRAPH,
    issued: "Oct 2026",
    src: "/certifs/certificate-of-completion-HCF.pdf",
    preview: "/certifs/previews/certificate-of-completion-HCF.webp",
    format: "pdf",
    width: 1800,
    height: 1280,
    alt: "The Hashgraph Association certificate of completion, Hedera Certified Foundation (HCF), for Karim Feki",
    credentialId: "3b5dddfb-4bcd-448c-b322-cde699d7fa42",
    summary: "DLT fundamentals, core network concepts and the Web3 ecosystem.",
    description:
      "Completed the Hedera Certified Foundation certification. Topics include Distributed Ledger Technology (DLT), Hedera network architecture, core network concepts, enterprise use cases and the Web3 ecosystem.",
    skills: ["Blockchain", "DLT", "Web3", "Hashgraph", "DApps"],
  },
];

/** Warm the browser cache for a document's preview, so the viewer opens on a loaded page. */
export function preloadDocument(doc: ViewerDocument) {
  if (typeof Image === "undefined") return;
  const img = new Image();
  img.decoding = "async";
  img.src = doc.preview;
}

export function formatLabel(doc: ViewerDocument) {
  if (doc.format === "pdf") return "PDF";
  return doc.src.toLowerCase().endsWith(".png") ? "PNG image" : "JPEG image";
}
