import { Sheet, SheetHeader } from "@/components/drawing/Sheet";

const specifications = [
  { label: "Education", value: "Computer Engineering, ESPRIT University" },
  { label: "Specialisation", value: "Computer & Mobile Systems" },
  { label: "Disciplines", value: "Full-stack web, native and cross-platform mobile, UI/UX design, software architecture" },
  { label: "Method", value: "Industry best practices, clean architecture, production-grade quality" },
  { label: "Based in", value: "Tunis, Tunisia" },
];

export function About() {
  return (
    <div className="container py-10 lg:py-16">
      <Sheet id="about" labelledBy="about-title">
        <SheetHeader
          id="about-title"
          title="Profile"
          lede="An engineer who pairs technical rigour with design thinking."
          drawing="General arrangement"
          number="KF-01"
          sheet="2 of 6"
        />

        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 space-y-5 text-lg leading-relaxed text-foreground max-w-[68ch]">
            <p>
              I am a results-oriented Computer Engineering student with strong expertise in mobile, web and
              desktop application development. My work combines software architecture, UI/UX design and
              scalable systems engineering, with a constant focus on user-centred, high-performance products.
            </p>
            <p className="text-muted-foreground">
              I work with an engineer’s rigour: established best practices, maintainable code and real-world,
              production-grade quality. I am currently specialising in Computer & Mobile Systems at ESPRIT
              University.
            </p>
          </div>

          <div className="lg:col-span-5 border-t border-border lg:border-t-0 lg:border-l p-5 sm:p-8 lg:p-10">
            <h3 className="lettering text-xs text-muted-foreground">Specifications</h3>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {specifications.map((spec) => (
                <div key={spec.label} className="grid grid-cols-[8.5rem_1fr] gap-4 py-3">
                  <dt className="lettering text-[11px] leading-6 text-muted-foreground">{spec.label}</dt>
                  <dd className="text-[15px] leading-6 text-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Sheet>
    </div>
  );
}
