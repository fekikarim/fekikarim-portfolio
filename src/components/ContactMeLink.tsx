import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const CONTACT_EMAIL = "feki.karim28@gmail.com";

export function ContactMeLink() {
  return (
    <Button
      variant="hero-outline"
      size="lg"
      className="gap-2 min-w-[160px] sm:min-w-[180px] transition-all duration-300 hover:scale-105 active:scale-95"
      asChild
    >
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send email to Karim Feki"
      >
        <Mail className="w-4 h-4 flex-shrink-0" />
        <span className="whitespace-nowrap">Contact Me</span>
      </a>
    </Button>
  );
}
