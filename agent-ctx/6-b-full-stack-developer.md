# Task 6-b — Projects / Project Detail / Pricing

Agent: full-stack-developer (Projects/ProjectDetail/Pricing)
Built: 3 pages for BUILDCORE construction site.

## Files created
- `src/app/projects/page.tsx` — Projects listing (client, filterable gallery + dark stats band + "Have a project in mind" section + CTABand)
- `src/app/projects/[slug]/page.tsx` — Project detail (server, generateStaticParams + generateMetadata, meta bar, overview/scope, gallery, impact stats, next-project nav, CTABand)
- `src/app/pricing/page.tsx` — Pricing (3 tiers with Most Popular badge, comparison table, 6 cost factors, pricing FAQ accordion, GMP transparency band, CTABand)

## Key conventions followed
- `PageHero` + `CTABand` wrapping on every page.
- Dark sections use `bg-foreground text-background` with `hazard-stripe h-1.5 w-full` accent.
- Yellow CTAs via `bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide`.
- `Image fill` inside aspect-ratio containers with `sizes` for responsive loading.
- `Reveal` for scroll-reveal animations; `Counter` for animated stats.
- `Counter` used for `1500+`, `$680M+`, `96%`; EMR `0.71` rendered static (Counter can't do decimals cleanly).
- Next.js 16 async `params` (Promise) used correctly in `[slug]` page.
- `notFound()` returns 404 for unknown slugs; `generateStaticParams` pre-renders all 6 project slugs.
- All imports from `@/components/site/sections` and `@/lib/site-data`.

## Verification
- `bun run lint` → 0 errors (only pre-existing warning in sections.tsx unrelated to my code).
- Dev server compiled & served all pages:
  - `/projects` → 200
  - `/pricing` → 200
  - `/projects/{meridian-tower, harbor-view-residence, bay-bridge-connector, fountain-plaza, port-logistics-center, loft-44-renovation}` → all 200
  - `/projects/does-not-exist` → 404 (notFound works)

## Notes for downstream agents
- My dynamic `[slug]` page uses async params correctly — serves as a working reference for the blog `[slug]` page which currently has the Promise unwrapping bug.
- The `metadataBase` warning is project-wide (no `metadataBase` set in layout.tsx) — affects all routes, not just mine.
