import { useState } from "react";
import { Balloon, PartTags, Sheet, SheetHeader } from "@/components/drawing/Sheet";
import { DocumentTrigger, DocumentViewer } from "@/components/drawing/DocumentViewer";
import { certifications } from "@/lib/documents";

const VISIBLE_SKILLS = 4;
/** Balloon · certificate · issued · scope · document */
const COLUMNS = "lg:grid-cols-[1.5rem_minmax(0,5fr)_minmax(0,1.5fr)_minmax(0,3fr)_minmax(0,2fr)]";

export function Certifications() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="container py-10 lg:py-16">
      <Sheet id="certifications" labelledBy="certifications-title">
        <SheetHeader
          id="certifications-title"
          title="Certifications"
          lede="Credentials in generative AI, cloud computing and distributed ledger technology, each with the issued document on file."
          drawing="Certificates of conformity"
          number="KF-04"
          sheet="5 of 7"
        />

        {/* Column heads of the register */}
        <div
          aria-hidden
          className={`hidden lg:grid ${COLUMNS} gap-x-8 border-b border-border px-10 py-2 lettering text-[11px] text-muted-foreground`}
        >
          <span className="col-start-2">Certificate</span>
          <span>Issued</span>
          <span>Scope</span>
          <span>Document</span>
        </div>

        <ol>
          {certifications.map((cert, index) => {
            const extra = cert.skills.length - VISIBLE_SKILLS;
            return (
              <li
                key={cert.id}
                className={`grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-4 border-b border-border last:border-b-0 p-5 sm:p-8 lg:items-start ${COLUMNS} lg:gap-x-8 lg:px-10 lg:py-6 transition-colors duration-200 hover:bg-accent/60`}
              >
                <Balloon n={index + 1} className="row-span-4 lg:row-span-1 mt-0.5" />

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground">{cert.title}</h3>
                  <p className="lettering mt-1 text-xs text-primary">{cert.issuer}</p>
                  <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">{cert.summary}</p>
                </div>

                <p className="col-start-2 lg:col-start-auto text-sm lg:pt-1">
                  <span className="lettering mr-2 text-[11px] text-muted-foreground lg:hidden">Issued</span>
                  <span className="font-semibold tabular-nums text-foreground">{cert.issued}</span>
                </p>

                <div className="col-start-2 lg:col-start-auto lg:pt-0.5">
                  <PartTags items={cert.skills.slice(0, VISIBLE_SKILLS)} label={`Skills covered by ${cert.title}`} />
                  {extra > 0 && (
                    <p className="mt-1.5 text-xs text-muted-foreground">+{extra} more in the certificate details</p>
                  )}
                </div>

                <div className="col-start-2 lg:col-start-auto">
                  <DocumentTrigger
                    doc={cert}
                    onOpen={() => setActive(index)}
                    label="View"
                    caption={cert.format === "pdf" ? "PDF certificate" : "Certificate image"}
                    className="sm:max-w-xs"
                  />
                </div>
              </li>
            );
          })}
        </ol>

        <p className="border-t border-rule p-5 sm:px-8 lg:px-10 text-base text-foreground">
          <span className="lettering text-xs text-muted-foreground mr-3">Note</span>
          Credential IDs and verification links are listed in each certificate&rsquo;s detail view.
        </p>
      </Sheet>

      <DocumentViewer documents={certifications} index={active} onIndexChange={setActive} />
    </div>
  );
}
