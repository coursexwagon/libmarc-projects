# Task 5-c — Projects / Rates / Safety pages (Libmarc Projects)

Agent: full-stack-developer
Pages built: 3 (Page 9, Page 10, Page 11)

## What I built

1. **`src/app/projects/page.tsx`** — `/projects` (OVERWRITE, `"use client"`)
2. **`src/app/rates/page.tsx`** — `/rates` (CREATE NEW, server component with `metadata`)
3. **`src/app/safety/page.tsx`** — `/safety` (CREATE NEW, server component with `metadata`)

All three pages target the rebranded **Libmarc Projects** (Johannesburg demolition / plant-hire / security company) and follow the established design system: yellow primary (`bg-primary`), near-black dark sections (`bg-foreground text-background`), Oswald display headings via `.font-display`, hazard stripes on dark bands, `py-20 lg:py-28` section padding, `container mx-auto px-4` containers, scroll-reveal animations, and hover effects on every interactive card.

## Page 9 — `/projects` Projects & Gallery
- **PageHero**: eyebrow "Our Work", title "Projects & Gallery" (with yellow highlight on "Gallery"), description about 850+ projects across Gauteng since 2015, breadcrumbs Home/Projects, image `/images/projects/project-1.png`
- **Filter tabs** (useState): All, Demolition, Rock Blasting, Rubble Removal, Plant Hire, CCTV Installation, Roller Shutter & Gates — each button shows a live count badge of projects in that category. Filter applies `projects.filter((p) => p.category === active)`.
- **Gallery grid**: 3-col responsive (`sm:grid-cols-2 lg:grid-cols-3`). Each card is a non-clickable `<article>` with:
  * `aspect-[4/3]` image with `group-hover:scale-110` zoom
  * gradient overlay from foreground/70 → transparent
  * yellow `<Badge>` category badge top-left + year chip top-right (backdrop blur)
  * MapPin + location + title overlay at bottom of image
  * summary (line-clamp-3) in card body
  * footer row: category icon + "View Gallery" hint (visual only — no detail page since /projects/[slug] was removed)
- **Stats band** (dark, `bg-foreground text-background`): hazard stripes top + bottom, grid overlay, Counter for 850+ Projects / 9+ Years / 40+ Machines / 100% Safety
- **"Have a Project in Mind?"** section: 2-col, left image `/images/cta-bg.png` with overlay badge "Active Project / Gauteng Demolition & Rubble Clearance", right side has SectionHeading + bullet list of 5 Libmarc-specific points (free site visit, ZAR rates, R5M liability, disposal slips, certified shot-firers) + dual CTAs (Start Your Project → /contact, WhatsApp Us → wa.me/27781500069)
- **CTABand**

## Page 10 — `/rates` Rates & Availability
- **PageHero**: eyebrow "Pricing", title "Rates & Availability" (yellow highlight on "Availability"), description about transparent ZAR rates, breadcrumbs Home/Rates, image `/images/services/plant-hire.png`
- **Rate card grouped by category**: defined 5 `rateGroups` (Demolition & Rock Blasting, Rubble Removal, Plant Hire, CCTV Installation, Roller Shutter/Gates/Electrical) with icon + match function. Each group renders as a card with:
  * dark header strip (foreground bg, yellow icon tile, group name, count)
  * **Desktop**: full `<table>` with Service / Unit / Price (ZAR) / Note columns. Popular rows get a yellow `<Badge>` with star.
  * **Mobile** (`md:hidden`): stacked card layout per rate row.
- **Rate notes**: rendered from `rateNotes` array as a 2-col bulleted list inside a `border-2 border-primary/30 bg-primary/5` highlighted card with Info icon header
- **Availability section** ("Check Machine Availability", `bg-secondary/40`): 6-machine demo fleet (TLB, 20-Ton Excavator, Tipper Truck 10m³, Mini Excavator, Bakkie, Tipper Truck 6m³) each with colored status badge — Available Now (emerald) / On Site (amber) / Booked (zinc). Includes "Book a Machine" yellow button + phone call button.
- **Bundled packages**: 3 package cards (Demolition + Removal Bundle save 10%, Site Security Bundle save 12% [POPULAR with border-2 border-primary shadow-xl lg:scale-[1.03] + "Most Popular" badge], Plant Hire Weekly save 15%). Each has icon, save %, price, description, feature checkmark list, "Get Quote" button → /contact
- Quick reassurance row: 4 mini cards (Same-day quotes / R5M public liability / COID registered / Free JHB site visit)
- **Stats band** (dark): 40+ Machines in Fleet / 24h Quote Turnaround / R5M Liability Cover (Counter with R prefix) / 850+ Projects Billed
- **CTABand** with custom title "Need a custom rate?"

## Page 11 — `/safety` Safety & Compliance
- **PageHero**: eyebrow "Safety", title "Safety & Compliance" (yellow highlight on "Compliance"), description about zero-incident culture since 2015, breadcrumbs Home/Safety, image `/images/services/rock-blasting.png`
- **Safety intro** (2-col): left text about safety-first culture (HIRA, R5M liability, COID, certified shot-firers, City of JHB permits) + dual CTAs (Request Safety Pack → /contact, PhoneCall to `company.phone1Intl`); right image `/images/cta-bg.png` with overlay badge "Zero Incidents / 9 years of disciplined delivery across Gauteng"
- **Safety practices grid** (6 cards on `bg-secondary/40`): renders `safetyPractices` array, each card maps to its icon (in order: ClipboardCheck, Bomb, HardHat, ShieldCheck, FileCheck, Stamp). Card has yellow icon tile (animates to primary on hover), large faded step number, title, description.
- **Stats band** (dark): 100% Safety Compliance / 0 Lost-Time Incidents (12 mo) / R5M Public Liability Cover (Counter with R prefix) / 40+ Certified Crew Members
- **Certifications** (2-col 5+7 split): left SectionHeading + warning callout about unregistered contractors; right grid of 6 cert cards with CheckCircle2 icon + "Verified & current" subtitle
- **Safety process** (4 steps on `bg-secondary/40`): Risk Assessment → Method Statement → PPE & Signage → Execution & Cleanup. Each card has yellow icon tile, large faded step number, title, detail.
- **Compliance documents** (2-col 5+7 split): left SectionHeading + "Request a Document" CTA; right vertical list of 6 documents (HIRA, Method Statements, Blast Plans, CoC, Disposal Slips, Insurance Certificates) each with FileText icon, name, note, large faded index.
- **CTABand** with custom title "Safety questions before you book?"

## Conventions followed
- All imports from `@/lib/site-data`: `projects`, `rates`, `rateNotes`, `certifications`, `safetyPractices`, `company`, `type RateItem`
- All shared components from `@/components/site/sections`: `PageHero`, `SectionHeading`, `Counter`, `CTABand`, `Reveal`, (`Breadcrumbs` used inside PageHero)
- `Image` from `next/image` with `fill` + `object-cover` + `aspect-ratio` containers + `sizes`
- Yellow CTAs: `<Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 text-base"><Link href="...">…</Link></Button>`
- WhatsApp button: `<a href="https://wa.me/${company.whatsapp1}" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center gap-2 border border-border px-6 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary">…</a>`
- Dark sections: `bg-foreground text-background` with `.hazard-stripe h-1.5 w-full` top + bottom
- Section padding: `py-20 lg:py-28`; container: `container mx-auto px-4`
- ZAR (R) only — never $
- Company phone: `company.phone1` ("078 150 0069"), WhatsApp: `company.whatsapp1` ("27781500069"), international dial: `company.phone1Intl` ("+27781500069")
- No footer added (global from layout)
- Mobile-first responsive: 1-col → sm:2-col → lg:3-col grids; rates table collapses to stacked cards on mobile

## Lint status
`bun run lint` → **0 errors, 0 warnings** across all 3 files.

## Compile / runtime verification
- `curl http://localhost:3000/projects` → **200** (compile 108ms, render 190ms)
- `curl http://localhost:3000/rates` → **200** (compile 431ms, render 342ms)
- `curl http://localhost:3000/safety` → **200** (compile 391ms, render 200ms)
- dev.log shows clean `✓ Compiled` lines for all three pages, no errors.

## Notes for downstream agents
- Image paths used (per task spec): `/images/projects/project-1.png` (exists), `/images/services/plant-hire.png`, `/images/services/rock-blasting.png`, `/images/cta-bg.png` (exists). The `/images/services/*.png` files are referenced in `site-data.ts` (used by services/[slug] pages too) and the REBRAND-1 worklog notes that 7 service images were being generated in the background — once present, all my pages will display them automatically with no code change.
- Project cards on `/projects` are intentionally non-clickable (no /projects/[slug] route exists). Each card uses a `<article>` with hover zoom + always-visible category/location/title/summary. A subtle "View Gallery" hint is shown in the footer row as a visual cue only.
- The `/rates` page groups rates by category using a local `rateGroups` array (defined in the page file) with icon + match function — extendable if new rates are added to `site-data.ts`.
- The `/rates` page stats band uses `<Counter value={5} suffix="M" />` with a `prefix="R"` rendered as a separate `<span>` to display "R5M".
- The `/safety` page maps `safetyPractices` indices to icons in a `practiceIcons` array (ClipboardCheck/Bomb/HardHat/ShieldCheck/FileCheck/Stamp) — order must match the array in site-data.ts.
- The `/safety` page stats band handles `value=0` (Lost-Time Incidents) cleanly — Counter starts at 0 and stays at 0, displaying "0" correctly.
- All three pages use the `Reveal` component for scroll-triggered fade-up animations with staggered delays (`(i % 3) * 100`).
