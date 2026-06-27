---
Task ID: 6-c
Agent: full-stack-developer (Team/Testimonials/Contact)
Task: Build Team, Testimonials, and Contact pages + contact API route

Work Log:
- Read worklog.md, lib/site-data.ts (team[], testimonials[], company, clientLogos, faqs), components/site/sections.tsx (PageHero, SectionHeading, Counter, CTABand, Reveal, Breadcrumbs), src/app/page.tsx (Home), and globals.css to align with the established BUILDCORE design system (Oswald display, yellow primary, hazard stripes on dark sections, hover effects, scroll reveals).
- Confirmed layout.tsx mounts `<Toaster />` from `@/components/ui/toaster` (the useToast hook system), so the contact form uses `useToast` / `toast` from `@/hooks/use-toast` for success/error feedback.
- Verified team data shape: `{ name, role, bio, image, linkedin, expertise[] }` and testimonial shape: `{ name, title, company, quote, rating, avatar, project }`.

Built pages & components:

1. `src/app/team/page.tsx` (server component, `"use client"` not needed — Reveal/Counter handle client interactivity)
   - PageHero (eyebrow "Our People", title "The Builders Behind BUILDCORE", breadcrumbs Home/Team, image `/images/cta-bg.png`)
   - Team grid: all 6 members as Cards with portrait `aspect-[3/4]` images, gradient overlay, role (yellow), name overlay, bio (`line-clamp-3`), expertise badges (accent), LinkedIn icon link that fades/slides in on hover. Hover effects: image zoom (`group-hover:scale-105`), card lift (`hover:-translate-y-1`), border-primary, shadow-xl.
   - Culture & Values section (4 cards: Safety Culture, Craftsmanship, Continuous Learning, Community) with icon tiles (dark bg, yellow icon).
   - "Now Hiring" dark careers section (`bg-foreground text-background` + hazard stripe + grid overlay) with: pitch headline, 6 benefits checklist (competitive pay, medical/dental/vision, 401k, training, safety-first, advancement), 4 open role preview cards (Project Engineer, Superintendent, Estimator, Carpenter Journeyman) with type badges, and a yellow "View Open Roles" button → /contact.
   - Stats section with Counter: 750+ workers, 35 avg yrs leadership experience, 100% OSHA 30 certified, 15+ years.
   - CTABand.

2. `src/app/testimonials/page.tsx` (server component)
   - PageHero (eyebrow "Client Reviews", title "Trusted by Bay Area Owners", breadcrumbs Home/Testimonials, image `/images/projects/project-4.png`).
   - Rating summary band: huge 4.9/5, star row, "480+ verified reviews", rating distribution bars (5★ 92%, 4★ 6%, 3★ 1%, 2★ 1%, 1★ 0%) animated to width, plus 2 trust badges (98% satisfaction, 0 lost-time incidents).
   - Testimonials grid: all 6 testimonials as Cards with Quote icon, 5-star row, quote text, avatar (12x12 next/image), name, title/company, project badge. 3-col responsive grid with scroll-reveal stagger.
   - Featured testimonial dark section: hazard stripe + grid overlay, large centered Quote icon, big Oswald blockquote, avatar + name + role + star row + project badge.
   - Client logos row (rendered from `clientLogos`).
   - Review platforms: 3 cards (Google Reviews 4.9/312, Yelp 4.8/94, BBB A+/Accredited since 2011) with hover lift and ArrowUpRight.
   - CTABand.

3. `src/components/site/contact-form.tsx` (`"use client"` component)
   - Controlled form with useState, fields: Full Name, Email, Phone, Project Type (Select: Residential/Commercial/Industrial/Infrastructure/Renovation/Other), Budget (Select: Under $250k / $250k-$1M / $1M-$10M / $10M+), Preferred Timeline (Select: ASAP / 3-6 / 6-12 / 12+ / Just exploring), Message (Textarea).
   - Client-side validation mirrors server (name ≥ 2 chars, valid email regex, message ≥ 10 chars) with destructive toast on failure.
   - POSTs JSON to `/api/contact`. On success: success toast with inquiry id, resets form, shows a "Message received" success state with a "Send another message" reset button.
   - Submit button shows loading spinner (`Loader2 animate-spin`) while submitting.
   - Uses shadcn Input, Textarea, Label, Select, Button — all `rounded-none` to match the industrial aesthetic.

4. `src/app/contact/page.tsx` (server component)
   - PageHero (eyebrow "Contact", title "Let's Build Something Together", breadcrumbs Home/Contact, image `/images/cta-bg.png`).
   - 2-col grid (lg:col-span-5 / lg:col-span-7):
     - LEFT: SectionHeading, quick contact cards (clickable tel: and mailto:), HQ address card (with license), office hours card, Google Maps `<iframe>` embed (with grayscale + address pin overlay), Department Directory (4 depts: New Projects/Careers/Media/Subcontractor Bids — each a clickable mailto row), Follow Us social icons (LinkedIn, Instagram, Facebook, YouTube).
     - RIGHT: sticky wrapper with eyebrow + heading "Send us a project brief" + `<ContactForm />` client component.
   - FAQ snippet section (bg-secondary/60): "Getting Started" FAQs in an Accordion + button to /faq.
   - CTABand.

5. `src/app/api/contact/route.ts` (server route, no "use client")
   - POST handler: parses JSON body, validates (name ≥ 2 chars, valid email regex, message ≥ 10 chars). Returns 400 with `{ success: false, error }` on validation failure. On success: generates an `INQ-<base36 timestamp>` id, logs the full submission to console, returns 200 with `{ success: true, id, message }`.
   - GET handler: returns API metadata (endpoint, method, required fields) for discoverability.

Verification:
- `bun run lint`: 0 errors. The single warning is a pre-existing unused eslint-disable in sections.tsx (not mine).
- Dev server compile check: `/team` 200, `/testimonials` 200, `/contact` 200, `/api/contact` (GET) 200.
- API POST tested with curl: valid submission → `{ success: true, id: "INQ-..." }`; invalid (short name) → 400 with "Please enter your full name."; invalid (short message) → 400 with "Please include a message of at least 10 characters."

Stage Summary:
- 3 production-ready pages built matching the Home page quality bar: bold Oswald headings, yellow primary accents, hazard stripes on dark sections, generous `py-20 lg:py-28` spacing, scroll-reveal animations, hover effects on every interactive card.
- Team page: full 6-member grid with portrait cards + culture section + dark "Now Hiring" careers band with role previews + animated stats.
- Testimonials page: rating distribution band + 6-card grid + featured dark blockquote + client logos + review platform cards.
- Contact page: complete 2-column contact experience with department directory, Google Maps iframe embed, sticky form column, and FAQ accordion.
- Contact form: fully wired client component with validation, loading state, success state, and toast notifications via the globally-mounted Toaster.
- API route: validates required fields, generates inquiry IDs, logs submissions, returns proper status codes (200/400).
- All pages use only relative paths, no port numbers, and follow the established component conventions (PageHero, SectionHeading, Counter, CTABand, Reveal from `@/components/site/sections`).
