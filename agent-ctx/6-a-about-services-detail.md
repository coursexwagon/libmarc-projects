# Task 6-a — About / Services / Service Detail pages

## What I built
Three pages for the BUILDCORE construction website (Next.js 16 App Router):

1. **`src/app/about/page.tsx`** — `/about` (server component, exports `Metadata`)
2. **`src/app/services/page.tsx`** — `/services` (server component, exports `Metadata`)
3. **`src/app/services/[slug]/page.tsx`** — `/services/[slug]` (dynamic SSG route, `generateStaticParams` + `generateMetadata` + `notFound()`)

## Design system used (from worklog + sections.tsx)
- Yellow primary (`bg-primary text-primary-foreground`), near-black dark sections (`bg-foreground text-background`)
- Oswald display font via `.font-display`
- `.hazard-stripe` accent on dark sections (1.5px tall band at top/bottom)
- Section padding `py-20 lg:py-28`, container `container mx-auto px-4`
- `<Image fill className="object-cover" sizes="..." />` inside aspect-ratio containers
- `<Button asChild>` + `<Link>` for yellow CTAs (`bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide`)
- Shared components: `SectionHeading`, `PageHero`, `Counter`, `CTABand`, `Reveal` from `@/components/site/sections`

## Page highlights

### About (`/about`)
- PageHero: eyebrow "Our Story", title "Building the Bay Area since 2009", breadcrumbs Home/About, image `/images/about-site.png`
- Mission/Vision/Promise: 3 cards with Target/Eye/ShieldCheck icons in dark icon-square badges
- Company story: 2-col with image inside border-2 primary frame + floating `Counter(750+)` badge; narrative covers 2009 founding → 2013 first $10M → today
- Animated stats band: dark section with hazard stripes top+bottom, grid overlay, `Counter` for all 4 stats
- Core values grid: 6 cards (Safety First, Craftsmanship, Integrity, Innovation, Collaboration, Sustainability) with icon squares that animate solid yellow on hover
- Certifications: 1+3 split, 6 cert cards with CheckCircle2 icons
- **Milestones timeline**: vertical center-line with alternating left/right cards on desktop (md+), single left-marker column on mobile; 5 milestones (2009/2013/2018/2022/2024); Flag markers in primary yellow
- Team preview: 3 team member cards with gradient image overlays
- CTABand

### Services (`/services`)
- PageHero: eyebrow "Our Expertise", breadcrumbs Home/Services, image `/images/projects/project-4.png`
- Intro: SectionHeading + paragraph + right-aligned "Get a Free Quote" button
- **Services grid: ALL 12 services** — each card matches Home page style exactly (image 16/10, primary yellow icon badge top-left, numbered Badge top-right, "Learn More" link)
- Process: 4-step Consult/Design/Build/Deliver with bordered size-24 squares + connecting line (same as home page)
- Why choose us: 6 feature cards (Safety, On-time, Transparency, In-house team, GMP pricing, Warranty)
- CTABand

### Service detail (`/services/[slug]`)
- `generateStaticParams()` returns all 12 service slugs → SSG
- `generateMetadata({ params: Promise<{ slug }> })` → per-service title/description/openGraph image
- Default export is `async function` that `await`s `params` (Next.js 16 server-component pattern), looks up service, calls `notFound()` if missing
- PageHero: eyebrow "BUILDCORE Services", title=service.title, description=service.short, breadcrumbs Home/Services/{title}, image=service.image
- Overview: 12-col (7+5) split. Left: SectionHeading + full description + secondary paragraph + 16/9 image with primary icon overlay. Right: **sticky Key Features card** with dark header (icon + "Key Features" eyebrow + service title), CheckCircle2 feature list, "Get a Quote" yellow button + "View Related Projects" outline button
- Process: renders `service.process` array (4 steps) as numbered cards with large primary/20 step numerals + small primary step counter
- Related services: 3 other services (excludes current slug, slice 0-3) as small image cards with primary icon badges
- CTABand with dynamic title "Ready to start your {service.title} project?"

## Quality bar achieved
- Bold Oswald headings (`font-display text-3xl md:text-4xl lg:text-5xl font-bold`)
- Yellow accents (`text-primary`, `bg-primary`)
- Hazard stripes on dark sections
- Generous spacing (`py-20 lg:py-28`)
- Hover effects on cards (`hover:border-primary hover:shadow-xl transition-all`)
- Scroll-reveal animations (`<Reveal delay={...}>` wrapping every card)
- Real construction imagery (service.image, project images)
- Mobile-first responsive (1-col → md:2-col → lg:3-col grids; mobile timeline collapses)

## Lint status
`bun run lint` → **0 errors, 0 warnings** in my 3 new files.
(1 pre-existing warning in shared `src/components/site/sections.tsx` for an unused eslint-disable directive on `<img>` in PageHero — out of scope for this task, left untouched.)

## Data dependencies
All data imported from `@/lib/site-data`:
- `services` (12, with slug/title/short/description/icon/image/features/process)
- `stats` (4)
- `certifications` (6)
- `team` (6, used first 3)
- `company` (founded year, etc.)

## Notes for downstream agents (projects/team/etc. pages)
- `Reveal` accepts a `delay` prop in ms — staggering 80/100/150 produces nice cascading reveal
- For dark sections, the canonical pattern is: `<section className="bg-foreground text-background">` with `<div className="hazard-stripe h-1.5 w-full" />` at top (and optionally bottom)
- PageHero already includes a hazard stripe at its bottom edge — no need to add another
- For dynamic routes in Next.js 16: `params` is a `Promise` and must be `await`ed in both `generateMetadata` and the page component
- Sticky sidebar pattern used in service detail (right card with `lg:sticky lg:top-24`) works well for any detail page with a sidebar CTA
- Timeline pattern in About page can be reused for any chronological content (project history, team career paths, etc.)
