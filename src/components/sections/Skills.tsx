import { Balloon, Sheet, SheetHeader } from "@/components/drawing/Sheet";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "Kotlin", "Swift", "Dart"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "SwiftUI", "Jetpack Compose", "Flutter", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "Symfony", "Firebase"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase Realtime DB"],
  },
  {
    title: "Tools & practices",
    skills: ["Git", "Docker", "REST API", "Agile/Scrum", "UI/UX Design", "Figma"],
  },
  {
    title: "Architecture",
    skills: ["MVVM", "Clean Architecture", "Microservices", "Design Patterns", "UML"],
  },
];

export function Skills() {
  return (
    <div className="container py-10 lg:py-16">
      <Sheet id="skills" labelledBy="skills-title">
        <SheetHeader
          id="skills-title"
          title="Skills"
          lede="The working toolkit, listed as a bill of materials."
          drawing="Bill of materials"
          number="KF-04"
          sheet="5 of 6"
        />

        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Technical skills by category</caption>
          <thead className="hidden sm:table-header-group">
            <tr className="border-b border-border lettering text-[11px] text-muted-foreground">
              <th scope="col" className="w-20 px-5 sm:px-8 lg:px-10 py-2 font-semibold">Item</th>
              <th scope="col" className="w-56 py-2 pr-6 font-semibold">Category</th>
              <th scope="col" className="py-2 pr-5 sm:pr-8 lg:pr-10 font-semibold">Parts</th>
              <th scope="col" className="w-20 py-2 pr-5 sm:pr-8 lg:pr-10 text-right font-semibold">Qty</th>
            </tr>
          </thead>
          <tbody>
            {skillCategories.map((category, i) => (
              <tr
                key={category.title}
                className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-b border-border p-5 sm:table-row sm:p-0 transition-colors duration-200 hover:bg-accent/60"
              >
                <td className="row-span-2 sm:px-8 lg:px-10 sm:py-5 align-top">
                  <Balloon n={i + 1} />
                </td>
                <th scope="row" className="sm:py-5 sm:pr-6 align-top text-left">
                  <span className="lettering text-sm text-foreground">{category.title}</span>
                </th>
                <td className="col-start-2 sm:py-5 sm:pr-8 lg:pr-10 align-top">
                  <ul className="flex flex-wrap gap-x-1 gap-y-1 text-[15px] leading-relaxed text-foreground">
                    {category.skills.map((skill, j) => (
                      <li key={skill}>
                        {skill}
                        {j < category.skills.length - 1 && <span aria-hidden className="text-muted-foreground">,</span>}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="hidden sm:table-cell sm:py-5 sm:pr-8 lg:pr-10 text-right align-top tabular-nums text-muted-foreground">
                  {category.skills.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="border-t border-rule p-5 sm:px-8 lg:px-10 text-base text-foreground">
          <span className="lettering text-xs text-muted-foreground mr-3">Note</span>
          Currently exploring AI/ML integration, cloud-native architectures and advanced mobile development
          patterns.
        </p>
      </Sheet>
    </div>
  );
}
