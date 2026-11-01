import { ArrowUpRight } from "lucide-react";
import { Sheet, SheetHeader, TitleBlock } from "@/components/drawing/Sheet";
import { CONTACT_EMAIL, MAILTO, socialLinks } from "@/lib/profile";

export function Contact() {
  return (
    <div className="container py-10 lg:py-16">
      <Sheet id="contact" labelledBy="contact-title">
        <SheetHeader
          id="contact-title"
          title="Contact"
          lede="Open to internship opportunities and ambitious projects."
          drawing="Approval"
          number="KF-05"
          sheet="6 of 6"
        />

        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-5 py-10 sm:p-8 lg:p-12 flex flex-col justify-between gap-10">
            <div>
              <p className="max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
                Whether you have a role, an internship or a project in mind, or simply want to connect, I would be
                glad to hear from you.
              </p>
              <a
                href={MAILTO}
                className="mt-8 block w-fit max-w-full text-[clamp(1.5rem,4.2vw,3rem)] font-semibold leading-tight tracking-tight text-foreground underline decoration-primary decoration-2 underline-offset-[0.18em] [overflow-wrap:anywhere] hover:text-primary"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              {/* Signature block */}
              <TitleBlock
                className="grid-cols-2 max-w-md"
                cells={[
                  { label: "Drawn by", value: "Karim Feki" },
                  { label: "Checked", value: "Karim Feki" },
                  {
                    label: "Approved by",
                    value: <span className="text-muted-foreground">Awaiting your email</span>,
                    className: "col-span-2",
                  },
                ]}
              />
            </div>
          </div>

          <div className="lg:col-span-5 border-t border-border lg:border-t-0 lg:border-l p-5 sm:p-8 lg:p-10">
            <h3 className="lettering text-xs text-muted-foreground">Elsewhere</h3>
            <ul className="mt-4 border-t border-border">
              {socialLinks.map((social) => (
                <li key={social.label} className="border-b border-border">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-14 items-center justify-between gap-4 py-3 transition-colors duration-200 hover:text-primary"
                  >
                    <span className="lettering text-sm">{social.label}</span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary">
                      {social.handle}
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Sheet>
    </div>
  );
}
