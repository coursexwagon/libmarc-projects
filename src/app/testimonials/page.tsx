import type { Metadata } from "next";
import Image from "next/image";
import {
  Star,
  Quote,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SectionHeading,
  PageHero,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { testimonials, clientLogos } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials | BUILDCORE",
  description:
    "480+ verified reviews. 4.9/5 average rating. Hear directly from Bay Area owners who trusted BUILDCORE to deliver their residential, commercial, and infrastructure projects.",
};

const ratingDistribution = [
  { stars: 5, pct: 92 },
  { stars: 4, pct: 6 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

// Use the longest, most detailed testimonial as the featured highlight.
const featured = testimonials[0];

const reviewPlatforms = [
  {
    name: "Google Reviews",
    rating: "4.9",
    count: "312 reviews",
    accent: "Google",
  },
  {
    name: "Yelp",
    rating: "4.8",
    count: "94 reviews",
    accent: "Yelp",
  },
  {
    name: "Better Business Bureau",
    rating: "A+",
    count: "Accredited since 2011",
    accent: "BBB",
  },
];

function StarRow({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < count ? "fill-primary text-primary" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow="Client Reviews"
        title="Trusted by Bay Area Owners"
        description="A 4.9/5 average across 480+ verified reviews. The words below are from real owners — developers, homeowners, public agencies, and asset managers — who put their project in our hands."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
        image="/images/projects/project-4.png"
      />

      {/* ===================== RATING SUMMARY BAND ===================== */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Big rating */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="flex items-baseline justify-center lg:justify-start gap-2">
                <span className="font-display text-7xl lg:text-8xl font-bold text-foreground leading-none">
                  4.9
                </span>
                <span className="font-display text-3xl font-bold text-muted-foreground">
                  /5
                </span>
              </div>
              <StarRow count={5} className="mt-3 justify-center lg:justify-start" />
              <p className="mt-3 text-sm text-muted-foreground">
                Based on{" "}
                <span className="font-bold text-foreground">480+ verified reviews</span>{" "}
                across Google, Yelp & BBB
              </p>
            </div>

            {/* Distribution bars */}
            <div className="lg:col-span-5">
              <div className="space-y-2.5">
                {ratingDistribution.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-12 text-sm font-semibold text-foreground">
                      {row.stars}
                      <Star className="size-3.5 fill-primary text-primary" />
                    </div>
                    <div className="flex-1 h-2.5 bg-muted overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-700"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <div className="w-10 text-right text-sm font-semibold text-muted-foreground">
                      {row.pct}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 border border-border p-4">
                  <CheckCircle2 className="size-7 text-primary shrink-0" />
                  <div>
                    <div className="font-display text-lg font-bold leading-tight">
                      98% Satisfaction
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Across 1,500+ projects
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-border p-4">
                  <ShieldCheck className="size-7 text-primary shrink-0" />
                  <div>
                    <div className="font-display text-lg font-bold leading-tight">
                      0 Lost-Time Incidents
                    </div>
                    <div className="text-xs text-muted-foreground">
                      38 months running
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS GRID ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Client Voices"
            title={
              <>
                Real projects.{" "}
                <span className="text-primary">Real outcomes.</span>
              </>
            }
            description="Every review below is tied to a delivered, occupied project — not a marketing reel. We publish both the wins and the lessons learned."
            align="center"
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 100}>
                <Card className="h-full flex flex-col border-border hover:border-primary hover:shadow-xl transition-all duration-300 rounded-none">
                  <CardContent className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <Quote className="size-9 text-primary/30" />
                      <StarRow count={t.rating} />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6 pt-5 border-t border-border">
                      <div className="flex items-center gap-3">
                        <div className="relative size-12 shrink-0 overflow-hidden bg-muted">
                          <Image
                            src={t.avatar}
                            alt={t.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="font-display font-bold text-foreground leading-tight truncate">
                            {t.name}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">
                            {t.title}, {t.company}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Badge className="bg-accent/60 text-foreground text-[10px] uppercase tracking-wide font-bold rounded-none border-0">
                          {t.project}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED TESTIMONIAL (DARK) ===================== */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="hazard-stripe h-1.5 w-full" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container relative mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <span className="h-0.5 w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Featured Review
              </span>
              <span className="h-0.5 w-8 bg-primary" />
            </div>
            <Quote className="size-14 text-primary mx-auto mb-8" />
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.25] tracking-tight">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="relative size-14 shrink-0 overflow-hidden bg-background/10">
                  <Image
                    src={featured.avatar}
                    alt={featured.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-display text-lg font-bold text-background">
                    {featured.name}
                  </div>
                  <div className="text-xs text-background/70">
                    {featured.title}, {featured.company}
                  </div>
                </div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-background/20" />
              <StarRow count={featured.rating} />
              <Badge className="bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-bold rounded-none border-0">
                {featured.project}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CLIENT LOGOS ===================== */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-14">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-8">
            Trusted by owners & agencies across the Bay Area
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="font-display text-lg lg:text-xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== REVIEW PLATFORMS ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Find Us Online"
            title={
              <>
                Read reviews on{" "}
                <span className="text-primary">every platform</span> that matters
              </>
            }
            description="We do not curate or filter. Every review below is publicly verifiable on the platform it was posted to."
            align="center"
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {reviewPlatforms.map((platform, i) => (
              <Reveal key={platform.name} delay={i * 100}>
                <a
                  href="#"
                  className="group block h-full"
                  aria-label={`Read reviews on ${platform.name}`}
                >
                  <Card className="h-full border-border hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-none">
                    <CardContent className="p-7">
                      <div className="flex items-center justify-between mb-5">
                        <div className="inline-flex size-12 items-center justify-center bg-foreground text-primary">
                          <BadgeCheck className="size-6" />
                        </div>
                        <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        {platform.accent}
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2">
                        {platform.name}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-3xl font-bold text-primary">
                          {platform.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {platform.count}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand
        title="Ready to be our next success story?"
        description="Tell us about your project and a pre-construction lead will respond within one business day. No call centers, no sales scripts — just builders."
      />
    </>
  );
}
