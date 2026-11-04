import { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface SheetProps {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** Show the A–D / 1–6 zone markers along the frame (hidden on small screens) */
  zones?: boolean;
  as?: "section" | "article" | "div";
  labelledBy?: string;
}

const COLS = ["1", "2", "3", "4", "5", "6"];
const ROWS = ["A", "B", "C", "D"];

/** A drawing sheet: a ruled frame whose linework is plotted in when it scrolls into view. */
export function Sheet({
  id,
  children,
  className,
  innerClassName,
  zones = false,
  as: Tag = "section",
  labelledBy,
}: SheetProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.05, rootMargin: "0px" });

  return (
    <Tag
      id={id}
      ref={ref as never}
      aria-labelledby={labelledBy}
      data-plotted={isVisible ? "true" : "false"}
      className={cn("relative bg-card", zones && "sm:p-5 lg:p-6", className)}
    >
      <span aria-hidden className="plot-line" data-axis="x" style={{ top: 0 }} />
      <span aria-hidden className="plot-line" data-axis="y" data-delay="1" style={{ right: 0 }} />
      <span aria-hidden className="plot-line" data-axis="x" data-delay="2" style={{ bottom: 0 }} />
      <span aria-hidden className="plot-line" data-axis="y" data-delay="3" style={{ left: 0 }} />

      {zones && (
        <div aria-hidden className="hidden sm:block">
          <div className="absolute inset-x-5 lg:inset-x-6 top-0 h-5 lg:h-6 grid grid-cols-6 border-b border-border">
            {COLS.map((c) => (
              <span key={c} className="lettering text-[11px] text-muted-foreground flex items-center justify-center border-l border-border first:border-l-0">
                {c}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-5 lg:inset-y-6 left-0 w-5 lg:w-6 grid grid-rows-4 border-r border-border">
            {ROWS.map((r) => (
              <span key={r} className="lettering text-[11px] text-muted-foreground flex items-center justify-center border-t border-border first:border-t-0">
                {r}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className={cn("relative h-full", zones && "sm:border sm:border-border", innerClassName)}>{children}</div>
    </Tag>
  );
}

interface TitleCell {
  label: string;
  value: ReactNode;
  className?: string;
}

/** Title block: the labelled cell grid found in the corner of every drawing. */
export function TitleBlock({ cells, className }: { cells: TitleCell[]; className?: string }) {
  return (
    <dl className={cn("grid border-t border-l border-border", className)}>
      {cells.map((cell) => (
        <div key={cell.label} className={cn("border-r border-b border-border px-3 py-2 min-w-0", cell.className)}>
          <dt className="lettering text-[11px] leading-none text-muted-foreground">{cell.label}</dt>
          <dd className="mt-1.5 text-sm font-medium leading-snug text-foreground break-words">{cell.value}</dd>
        </div>
      ))}
    </dl>
  );
}

interface SheetHeaderProps {
  id: string;
  title: string;
  lede?: string;
  drawing: string;
  number: string;
  sheet: string;
}

/** Header row of a section sheet: the plain heading for readers, the title block for the drawing. */
export function SheetHeader({ id, title, lede, drawing, number, sheet }: SheetHeaderProps) {
  return (
    <header className="grid gap-6 border-b border-rule p-5 sm:p-8 lg:grid-cols-12 lg:items-end lg:gap-10 lg:p-10">
      <div className="lg:col-span-8">
        <h2 id={id} className="display text-[clamp(2.5rem,6vw,4.5rem)] text-foreground">
          {title}
        </h2>
        {lede && <p className="mt-4 max-w-[60ch] text-base sm:text-lg text-muted-foreground">{lede}</p>}
      </div>
      <TitleBlock
        className="grid-cols-[auto_auto_minmax(0,1fr)] lg:grid-cols-2 lg:col-span-4"
        cells={[
          { label: "Drawing", value: drawing, className: "hidden lg:block lg:col-span-2" },
          { label: "Dwg no.", value: <span className="tabular-nums">{number}</span> },
          { label: "Sheet", value: <span className="tabular-nums">{sheet}</span> },
          {
            label: "Contact",
            value: (
              <a href="mailto:feki.karim28@gmail.com" className="font-semibold text-primary underline decoration-primary/40 hover:decoration-primary">
                Email Karim
              </a>
            ),
            className: "lg:col-span-2",
          },
        ]}
      />
    </header>
  );
}

/** Numbered item balloon, as used to reference parts on an assembly drawing. */
export function Balloon({ n, className, style }: { n: number | string; className?: string; style?: CSSProperties }) {
  return (
    <span
      aria-hidden
      style={style}
      className={cn(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rule text-[11px] font-semibold tabular-nums text-foreground bg-background",
        className,
      )}
    >
      {n}
    </span>
  );
}

interface ActionProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "line";
  external?: boolean;
  icon?: ReactNode;
}

/** The page's two link treatments: the blue primary action and the ruled secondary link. */
export function Action({ href, children, className, variant = "primary", external, icon }: ActionProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...externalProps}
      className={cn(
        "group inline-flex items-center gap-3 min-h-11 text-sm font-semibold transition-[background-color,color,border-color,transform] duration-300 ease-out-expo active:scale-[0.98]",
        variant === "primary" &&
          "bg-primary text-primary-foreground pl-5 pr-2 py-2 hover:bg-foreground hover:text-background",
        variant === "line" &&
          "border border-rule text-foreground px-4 py-2 hover:bg-foreground hover:text-background",
        className,
      )}
    >
      {icon}
      <span>{children}</span>
      {variant === "primary" && (
        <span className="inline-flex h-7 w-7 items-center justify-center bg-primary-foreground/15 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </span>
      )}
    </a>
  );
}

/** Parts list: technologies or skills as ruled, square tags. */
export function PartTags({ items, label, className }: { items: string[]; label: string; className?: string }) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="border border-border bg-background px-2 py-0.5 text-[13px] leading-5 text-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
