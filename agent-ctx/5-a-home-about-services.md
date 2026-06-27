# Task 5-a — Home / About / Services pages (Libmarc rebrand)

## What I built
Three pages for the Libmarc Projects website (Next.js 16 App Router), overwriting the old BUILDCORE content:

1. **`src/app/page.tsx`** — `/` Home ("use client")
2. **`src/app/about/page.tsx`** — `/about` (server component, exports `Metadata`)
3. **`src/app/services/page.tsx`** — `/services` (server component, exports `Metadata`)

## Critical fix: image format
The z-ai CLI saves generated images as JPEG-content with .png extension. Next.js Image optimizer (`/_next/image`) returns HTTP 400 "received null" because `sharp` detects JPEG magic bytes but the file extension says PNG.

**Fix applied**: Re-encoded every affected PNG via:
```bash
ffmpeg -y -i /tmp/in.jpg -f image2 -vcodec png /tmp/out.png
```

Converted 18 files total:
- 7 new images: hero-demolition.png, services/{demolition,rock-blasting,rubble-removal,plant-hire,cctv,roller-shutter,automatic-gate}.png
- 11 pre-existing JPEG-as-PNG files: about-site.png, cta-bg.png, hero-worker.png, team/team-1..6.png, projects/project-1..6.png

All are now real PNG image data (verified with `file` command).

## Image generation gotchas (for downstream agents)
1. CLI allow-list: `1024x1024, 768x1344, 864x1152, 1344x768, 1152x864, 720x1440`
2. CLI lists `1440x720` as supported, but the API rejects it (720 is not a multiple of 32). **Use 1344x768 for all landscape images.**
3. Running >5 image gens in parallel triggers HTTP 429 rate limit. Run sequentially with `sleep 8` between.

## Page highlights

### Home (`/`)
- Hero: `/images/hero-demolition.png` bg, "WE GET THE [TOUGH JOBS] DONE", badge "Trusted Johannesburg Contractor Since 2015", yellow "Get a Free Quote" + outline "WhatsApp Us" CTAs, floating quote card (Bongani M., Brixton, 5 stars), 3 trust badges (R5M Public Liability / 9+ Years / Certified Shot-Firers)
- Client logos strip (clientLogos)
- Dark stats band with Counter (4 stats)
- About preview 2-col with `/images/about-site.png` + floating "9+" badge, "Our Story" + "View Rates" buttons
- Services grid: ALL 5 services as cards + 6th "Explore All Services" tile
- Featured projects (dark): 3 projects (yeoville-demolition, rosebank-rock-blasting, sandton-excavator-hire) as hover-reveal 4:5 cards
- Rates preview: 3 highlight rates (Demolition R450/m², Rubble Truck R1,800/load, TLB R650/hour) with "Popular" badges
- Process: 4 steps (Enquire/Quote/Execute/Handover) with Phone/FileText/HardHat/CheckCircle2
- Testimonials: 3 SA testimonials (Bongani, Sarah N., Frans)
- Certifications strip (6 with ShieldCheck)
- CTABand

### About (`/about`)
- PageHero (eyebrow "About Us", title "Johannesburg's Demolition & [Plant Hire Specialists]", image /images/about-site.png)
- Mission/Vision/Promise 3-card grid (Target/Eye/ShieldCheck)
- Company story 2-col with /images/cta-bg.png + floating "9+" Counter badge
- Dark animated stats band (4 stats with Calendar/Building2/HardHat/ShieldCheck icons)
- Core values grid: 6 values (Safety First, Honest Pricing, On-Time Delivery, Skilled Crews, Fully Insured, Community Focused)
- Certifications grid (6 with CheckCircle2)
- Milestones timeline: 5 milestones (2009–2015, 2018, 2020, 2022, 2024) — vertical alternating on desktop, Flag markers
- Team preview: first 3 team members (Marc, Lerato, Sipho) with image/role/bio/expertise badges + careers CTA card linking to /contact (since /team page was deleted in REBRAND-1)
- CTABand

### Services (`/services`)
- PageHero (eyebrow "Our Services", title "Complete site & [security solutions]", image /images/services/plant-hire.png)
- Intro: SectionHeading + "Get a Free Quote" button
- Services grid: ALL 5 services as RICH cards (2-col) — 16/9 image + size-12 icon badge + 01-05 number badge + title overlay + short + first-4-features bullet list (2-col CheckCircle2) + "Learn More" + "View Details & Rates" footer
- Sub-services breakdown: filters `services.filter(s => s.subServices)` → 3 services (demolition-rock-blasting, plant-hire, roller-shutter-gates) rendered as dark-left/light-right cards with sub-services grid
- Process: 4 steps (Enquire/Quote/Execute/Handover)
- Why choose us: 6 cards (Honest Pricing, Fully Insured, Certified Crews, Same-Day Quotes, All of Gauteng, 9+ Years)
- CTABand

## Quality bar
- Bold Oswald headings (`font-display text-3xl md:text-4xl lg:text-5xl font-bold`)
- Yellow accents (`text-primary`, `bg-primary`)
- Hazard stripes on dark sections (`<div className="hazard-stripe h-1.5 w-full" />`)
- Generous spacing (`py-20 lg:py-28`)
- Hover effects on cards (`hover:border-primary hover:shadow-xl transition-all`)
- Scroll-reveal animations (`<Reveal delay={...}>` wrapping every card)
- Real SA demolition imagery
- Mobile-first responsive (1-col → md:2-col → lg:3-col grids; mobile timeline collapses)
- All pricing in ZAR (R), WhatsApp links use `wa.me/${company.whatsapp1}`, dual phone numbers wired through site-data.ts

## Lint status
`bun run lint` → **0 errors, 0 warnings** in all 3 new files.

## Data dependencies
All data imported from `@/lib/site-data`:
- `company` (phone1, phone2, whatsapp1, whatsapp2, email, address, founded, region)
- `stats` (4: 9+ Years, 850+ Projects, 40+ Machines, 100% Safety)
- `services` (5, with slug/title/short/description/icon/image/features/subServices/process)
- `projects` (8, filtered to 3 by slug for home featured section)
- `team` (6, sliced to first 3 for about preview)
- `testimonials` (6, sliced to first 3 for home)
- `rates` (13, filtered to indices [0,3,4] for home preview)
- `certifications` (6)
- `clientLogos` (6)

## Dev server verification
- GET /, /about, /services all return HTTP 200
- No image errors in dev.log after JPEG-to-PNG conversion
- Optimized `/_next/image?url=...&w=640&q=75` URLs return 200
- Page HTML includes proper srcset with multiple widths (640/750/828/1080/1200/1920/2048/3840)

