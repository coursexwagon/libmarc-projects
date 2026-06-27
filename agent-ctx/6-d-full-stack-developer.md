# Task 6-d — Blog/BlogPost/FAQ pages

## What was built
- `src/app/blog/page.tsx` (server component, metadata, PageHero + BlogListClient + BlogNewsletter + CTABand)
- `src/app/blog/blog-list-client.tsx` (client component: featured post + category filter tabs + posts grid)
- `src/app/blog/blog-newsletter.tsx` (client component: dark newsletter signup with visual-only subscribe state)
- `src/app/blog/[slug]/page.tsx` (async server component: generateStaticParams, generateMetadata, content parser, meta bar, share buttons, author box, related posts)
- `src/app/faq/page.tsx` (server component, metadata, PageHero + FaqContent + CTABand)
- `src/app/faq/faq-content.tsx` (client component: search filter + accordion categories + dark "still have questions" band + quick contact cards)

## Key technical notes
- Next.js 16 requires `params` to be a `Promise` — unwrapped with `await` in `BlogPostPage` and `generateMetadata`.
- Blog content parser: splits on `\n\n`, renders `## ` blocks as `<h2>` with yellow `#` accent, everything else as `<p>`.
- Category filter for blog (All, Project Delivery, Technology, Pre-Construction, Safety) and live search for FAQ both work client-side via `useMemo`.
- All routes verified: `/blog` 200, `/blog/[slug]` 200 for all 4 slugs, `/blog/nonexistent` → 404 (via `notFound()`), `/faq` 200.
- `bun run lint`: 0 errors, only pre-existing warning in `sections.tsx`.

## Conventions followed
- Shared components: `PageHero`, `CTABand`, `Reveal` from `@/components/site/sections`.
- Data: `blogPosts`, `faqs`, `company` from `@/lib/site-data`.
- shadcn/ui: `Accordion`, `Badge`, `Button`, `Card`, `Input`.
- Dark sections: `bg-foreground text-background` + hazard stripe + grid pattern overlay.
- Yellow CTAs: `bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide`.
- Section padding `py-20 lg:py-28`, container `container mx-auto px-4`.
