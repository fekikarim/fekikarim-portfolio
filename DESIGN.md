---
name: Karim Feki Portfolio
description: A signed engineering drawing set. Drafting paper by day, blueprint print by night.
colors:
  drafting-blue: "hsl(224 74% 45%)"
  drafting-blue-deep: "hsl(224 74% 30%)"
  drafting-blue-wash: "hsl(222 60% 93%)"
  drafting-paper: "hsl(160 8% 96%)"
  sheet-white: "hsl(160 10% 98.5%)"
  drawing-ink: "hsl(216 22% 9%)"
  graphite: "hsl(216 12% 33%)"
  vellum-grey: "hsl(210 14% 91%)"
  hairline: "hsl(212 14% 80%)"
  frame-rule: "hsl(216 18% 22%)"
  grid-line: "hsl(214 30% 45%)"
  error-red: "hsl(0 72% 45%)"
  blueprint-navy: "hsl(218 66% 14%)"
  blueprint-sheet: "hsl(218 60% 17%)"
  blueprint-chalk: "hsl(216 55% 94%)"
  blueprint-cyan: "hsl(214 100% 80%)"
  blueprint-faded: "hsl(216 38% 77%)"
  blueprint-hairline: "hsl(216 40% 32%)"
  blueprint-rule: "hsl(214 60% 82%)"
typography:
  display:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 10vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 78"
  headline:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 78"
  title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 78"
  subtitle:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body-dense:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 75"
rounded:
  none: "0px"
  balloon: "9999px"
spacing:
  cell-y: "8px"
  cell-x: "12px"
  sheet-sm: "20px"
  sheet-md: "32px"
  sheet-lg: "40px"
  sheet-xl: "48px"
  sheet-gap-sm: "40px"
  sheet-gap-lg: "64px"
components:
  action-primary:
    backgroundColor: "{colors.drafting-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "8px 8px 8px 20px"
    height: "44px"
  action-primary-hover:
    backgroundColor: "{colors.drawing-ink}"
    textColor: "{colors.drafting-paper}"
  action-line:
    backgroundColor: "transparent"
    textColor: "{colors.drawing-ink}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
    height: "44px"
  action-line-hover:
    backgroundColor: "{colors.drawing-ink}"
    textColor: "{colors.drafting-paper}"
  title-block-cell:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.drawing-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  balloon:
    backgroundColor: "{colors.drafting-paper}"
    textColor: "{colors.drawing-ink}"
    rounded: "{rounded.balloon}"
    size: "24px"
  sheet:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.drawing-ink}"
    rounded: "{rounded.none}"
    padding: "20px"
  nav-link:
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    padding: "8px 16px"
  nav-link-active:
    textColor: "{colors.drawing-ink}"
---

# Design System: Karim Feki Portfolio

## Overview

**Creative North Star: "The Signed Drawing Set"**

Every surface is a sheet from an engineering drawing set. A sheet is a flat paper rectangle with a plotted 1px frame. Its information sits in labelled cells, ruled tables, numbered notes and balloons, not in floating cards. The light theme is drafting paper with a faint two-weight grid. The dark theme is the same drawing as a blueprint print: navy ground, pale linework. Both themes share the same geometry; only the ink and ground change.

Density follows a drawing, not a brochure. Titles are large condensed capitals. Metadata is set small in condensed tracked capitals inside hairline cells. Reading text stays at normal width and in sentence case. One drafting blue does all the accent and action work. Depth comes from linework weight (hairline vs. frame rule), never from shadow.

Motion is the plotter. A sheet's frame lines draw themselves in on entry, top, right, bottom then left. Content is visible from the start and never waits on that animation.

**Key Characteristics:**
- Square corners everywhere. The only round shapes are item balloons and status dots.
- Two line weights: hairline for cell and table divisions, frame rule for sheet edges and header underlines.
- Condensed uppercase lettering for labels, titles and nav. Normal-width sentence case for prose.
- One accent hue (drafting blue / blueprint cyan). Email is the only filled action.
- Drawing vocabulary as structure: title blocks, zone markers, revision tables, bills of materials, general notes, figure callouts with leader lines.

## Colors

Low-chroma paper and ink, with one saturated drafting blue. The blueprint theme inverts the ground to deep navy and turns the blue into a pale cyan.

### Primary
- **Drafting Blue** (`drafting-blue`): the single accent and action colour in light mode. Fills the primary Email action, the active nav underline, the status dot, project subtitles, company names in the revision table, text selection and the focus ring.
- **Drafting Blue Deep** (`drafting-blue-deep`): text colour on the blue wash.
- **Drafting Blue Wash** (`drafting-blue-wash`): hover tint for table rows (at 60%) and quiet icon buttons.
- **Blueprint Cyan** (`blueprint-cyan`): plays the Drafting Blue role in the dark theme. Primary actions here use dark navy text (`hsl(218 70% 12%)`).

### Neutral
- **Drafting Paper** (`drafting-paper`): the page ground, overlaid with the drafting grid.
- **Sheet White** (`sheet-white`): the sheet surface, one step lighter than the paper, so a sheet reads as a sheet laid on a table.
- **Drawing Ink** (`drawing-ink`): all primary text. Also the hover fill for every action (actions turn to solid ink on hover).
- **Graphite** (`graphite`): secondary text, lettering labels, ledes.
- **Vellum Grey** (`vellum-grey`): muted fills, such as the portrait backing and the certificate viewer stage.
- **Hairline** (`hairline`): cell, table-row and zone divisions.
- **Frame Rule** (`frame-rule`): sheet frame lines, sheet-header underline, outlined actions, balloons, the footer grid.
- **Grid Line** (`grid-line`): only used translucently in the background grid (7% major, 3.5% minor).
- **Blueprint Navy / Sheet / Chalk / Faded / Hairline / Rule**: the dark-theme counterparts of paper, sheet, ink, graphite, hairline and frame rule.

### Named Rules
**The One Blue Rule.** Drafting blue is the only chromatic hue. It marks linework accents and the contact action, and nothing decorative. Error red appears only in error states.

**The Ink-On-Hover Rule.** Every action, primary or outlined, fills with Drawing Ink and switches its text to the paper colour on hover. The interface never invents a lighter or darker shade of blue for hover.

## Typography

**Display Font:** Archivo Variable at condensed width (with ui-sans-serif, system-ui)
**Body Font:** Archivo Variable at normal width
**Label Font:** Archivo Variable at 75% width, tracked caps

**Character:** One variable family plays every role along its width axis. Condensed bold capitals for the drawing's lettering, regular width for prose. This mirrors how a drawing pairs technical lettering with written notes.

### Hierarchy
- **Display** (700, clamp 3.25–6rem, 0.92, 78% width, uppercase): only the name on the cover sheet.
- **Headline** (700, clamp 2.5–4.5rem, 0.92, 78% width, uppercase): sheet titles in the sheet header.
- **Title** (700, clamp 1.75–2.75rem, 0.92, 78% width, uppercase): project names within a sheet. Mobile menu items use the same treatment at 1.875rem.
- **Subtitle** (600, 1.5rem, tight tracking, sentence case): role titles in the revision table.
- **Body** (400, 1rem–1.125rem, 1.625): ledes and prose, capped at 52–68ch.
- **Body Dense** (400, 15px, 1.625): bullet lists, general notes, bill-of-materials parts, spec values.
- **Label** (600, 11–12px, 0.08em tracking, 75% width, uppercase): title-block cell labels, table headings, zone markers, figure captions, nav links, section sub-headings ("General notes", "Specifications").

### Named Rules
**The Two Widths Rule.** Condensed uppercase is for titles and labels. Anything meant to be read as a sentence uses normal width and sentence case.

**The Tabular Numbers Rule.** Drawing numbers, sheet counts, dates, quantities and note numbers always use tabular figures.

## Layout

The page is a vertical stack of sheets. Each sheet sits in a centred container (max 1360px, side padding 1rem / 1.5rem / 2rem at base / sm / lg). Sheets are separated by 40px of paper (64px from lg). Inside a sheet, content uses a 12-column split at lg. The working split is 7 + 5: statement or prose on the left, and on the right a figure, notes or a title block behind a hairline vertical rule. Below lg, the right column drops under the left one, divided by a hairline top border.

Sheet padding steps 20 / 32 / 40px (sm / md / lg); the cover sheet uses 48px at lg. Title-block cells pad 8px × 12px. The sticky header is 4rem tall (`--header-h`), and scroll padding offsets anchors by that height plus 1rem.

The cover sheet alone carries zone markers (columns 1–6 along the top, rows A–D down the left) in a 20–24px gutter, hidden below sm. Figure callouts with leader lines appear only at xl; below that, numbered balloons sit on the figure edge and a numbered legend follows the figure.

Breakpoints are Tailwind defaults (640 / 768 / 1024 / 1280px). The nav collapses to a full-screen menu below 768px.

## Elevation & Depth

The system is flat. Depth is expressed by line weight and by the one-step tonal lift from paper to sheet, plus the background grid. Nothing on the page casts a shadow.

### Shadow Vocabulary
- **Viewer lift** (`box-shadow: 0 24px 60px -20px hsl(var(--foreground) / 0.35)`): only on the modal certificate viewer, which really does sit above the page over a 60% ink scrim.

### Named Rules
**The Linework-Not-Shadow Rule.** Separation is drawn: a hairline between cells, a frame rule around a sheet. If two things need separating, add a line, not a shadow or a blur.

## Shapes

Rectangles with square corners (0px). Containment is always a 1px border, either a hairline or a frame rule. Cells tile edge to edge and share borders: a grid draws its top and left edges, and each cell draws its right and bottom edges. Circles are reserved for drawing symbols: the 24px item balloon, the 6px leader-line terminator and the 8px status dot. Leader lines are 1px horizontals, 40px long. List bullets are 10px hairline dashes, not dots.

## Components

### Buttons (Action)
Plain and engineered: labelled rectangles that fill with ink on hover.
- **Shape:** square corners (0px), minimum height 44px.
- **Primary:** Drafting Blue fill, white 14px semibold text, padded 20px left and 8px right. Ends in a 28px tinted square holding an up-right arrow. Reserved for emailing Karim.
- **Line:** 1px frame-rule outline, ink text, 16px horizontal padding. Used for "View projects", repository and demo links, and the certificate button.
- **Hover / Focus:** fills with Drawing Ink and text turns to paper (colour 200–300ms, out-expo). The arrow nudges 2px up and right. On press it scales to 0.98. Focus uses a 2px ring-colour outline offset 3px.
- **Cover-sheet action:** a full-width blue bar under the title block, a label cell ("Approve · Contact") over "Email Karim".

### Title Block
The signature container. It is a `dl` grid of hairline cells, each with an 11px label above a 14px medium value. Every sheet header carries one (Drawing, Dwg no., Sheet, Contact), so Email is reachable from every sheet. Projects and Contact reuse it for metadata.

### Sheet
A Sheet White panel framed by four 1px frame-rule lines. When the sheet enters view, the lines plot in (scale from 0 over 1.1s, out-expo, staggered 0 / 120 / 240 / 360ms). Optional zone markers. The sheet header has a Headline on the left, a lede, and a Title Block on the right, ruled off below by a frame rule.

### Tables (Revision table, Bill of materials)
Experience is a revision table: a revision letter in a 44px ruled square, then period, description and approval columns. Skills is a bill of materials: Item balloon, Category, Parts, Qty. Column headings use Label type above a hairline. Rows are divided by hairlines and tint to the blue wash on hover. Below sm, rows restack as two-column grids.

### Balloon
A 24px circle with a frame-rule border, paper fill and an 11px semibold tabular numeral. It numbers items: disciplines, BOM rows.

### Navigation
A sticky 4rem bar on the paper ground with a frame-rule underline. The header Email action shows from lg; between md and lg the six links need the room, and every sheet's title block still carries Email. Links are Label type in graphite, turning ink on hover. The active section gets a 2px blue underline that scales in from the left and sits on the header's bottom rule. A square 40px theme toggle (hairline border, sun/moon swap) and a blue Email action sit on the right. Mobile: a 40px bordered hamburger drawn from two 1px lines opens a full-screen menu of condensed Title-sized links divided by hairlines, ending in a full-width blue Email bar.

### Part tags
Technologies and skills are listed as parts: square 1px hairline rectangles on the paper ground, 13px normal-width text. They sit under a "Material" label (projects, experience) or in a "Scope" column (certifications). Never rounded, never filled with blue.

### Registers
Certifications and the project index are registers: ruled rows or a hairline cell grid (`gap-px` over the hairline colour), each row numbered by a balloon or a drawing number. The project register links each entry to its sheet. Earlier projects (2023–2024) are drawn as compact cells with a native `details` disclosure for their general notes.

### Document viewer
One modal for every document on file (internship certificates and credentials). Full screen on phones, a framed sheet with the viewer lift from sm up. The stage is Vellum Grey and shows a WebP preview rendered from the original, so one-page PDFs display on every device without a PDF engine. The toolbar has zoom (Fit, 150%, 200%, 300%; + − 0 keys, double-click, drag to pan) and previous/next navigation (arrow keys). The details panel holds Open original, Download, Verify (only when a verification URL appears on the document itself), the issuer title block, credential ID with copy, description and skills. Nothing loads until the viewer opens. The original file is checked with a HEAD request. Loads time out after 15s, and failures fall back to an error panel with retry and open-original actions. Focus returns to the opening button.

### Footer
A tiled title-block strip in frame-rule cells: identity, label-type nav, and a credit line.

## Do's and Don'ts

### Do:
- **Do** put every new section on a Sheet with a SheetHeader and Title Block, so Email is available from every sheet.
- **Do** keep corners square (0px) on every rectangle, and limit circles to balloons, leader terminators and status dots.
- **Do** separate content with hairlines (`hairline`) inside a sheet and frame rules (`frame-rule`) at sheet edges.
- **Do** express structured content in drawing forms: labelled cells, ruled tables, numbered general notes, balloons with a legend.
- **Do** use the out-expo curve (cubic-bezier(0.16, 1, 0.3, 1)) for transforms, and keep content visible regardless of animation state.
- **Do** design both themes at once: each token has a paper value and a blueprint value.

### Don't:
- **Don't** use rounded, shadowed or glassy cards. A container is a ruled rectangle.
- **Don't** add a second accent hue, gradients or decorative blue fills. Blue is for linework accents and the contact action.
- **Don't** set prose in condensed uppercase, or titles in normal-width sentence case.
- **Don't** add shadows to anything that sits in the page flow. The only shadow is the modal viewer lift.
- **Don't** hide content until a reveal animation runs. Only the frame lines animate in.
