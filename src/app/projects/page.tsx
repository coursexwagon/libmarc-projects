"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Calendar,
  Building2,
  Hammer,
  Truck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  SectionHeading,
  PageHero,
  Counter,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { Lightbox, type LightboxItem } from "@/components/site/lightbox";
import { projects, company } from "@/lib/site-data";

const categories = [
  "All",
  "Demolition",
  "Rock Blasting",
  "Rubble Removal",
  "Plant Hire",
  "CCTV Installation",
  "Roller Shutter & Gates",
] as const;

type Category = (typeof categories)[number];

const stats = [
  {
    icon: Building2,
    value: 850,
    suffix: "+",
    label: "Projects Completed",
    footnote: "Across all service lines",
  },
  {
    icon: Calendar,
    value: 9,
    suffix: "+",
    label: "Years Serving Gauteng",
    footnote: "Since 2015",
  },
  {
    icon: Truck,
    value: 40,
    suffix: "+",
    label: "Machines in Fleet",
    footnote: "Serviced & roadworthy",
  },
  {
    icon: ShieldCheck,
    value: 0,
    suffix: "",
    label: "Lost-Time Incidents",
    footnote: "2023 – 2024",
  },
];

export default function ProjectsPage() {
  const [active, setActive] = React.useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = React.useState(-1);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const categoryCount = (cat: Category) =>
    cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;

  const lightboxItems: LightboxItem[] = React.useMemo(
    () =>
      filtered.map((p) => ({
        src: p.image,
        alt: p.title,
        title: p.title,
        category: p.category,
        location: p.location,
        year: p.year,
        description: p.summary,
      })),
    [filtered]
  );

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Projects & <span className="text-primary">Gallery</span>
          </>
        }
        description="From condemned apartment block demolitions in Yeoville to controlled rock blasting in Rosebank — over 850 projects delivered across Gauteng since 2015. Browse our recent work by service."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
        image="/images/projects/project-1.png"
      />

      {/* ===================== FILTER + GALLERY ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Portfolio"
              title={
                <>
                  Browse by <span className="text-primary">service</span>
                </>
              }
              description="Filter our recent work by service type. Every project below was delivered by Libmarc Projects crews across Johannesburg and greater Gauteng."
            />
            <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground shrink-0">
              Showing <span className="text-primary">{filtered.length}</span> of{" "}
              {projects.length} projects
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 text-xs lg:text-sm font-bold uppercase tracking-wide border-2 transition-all",
                  active === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/50 hover:-translate-y-0.5"
                )}
              >
                {cat}
                <span
                  className={cn(
                    "inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-[10px] rounded-sm",
                    active === cat
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {categoryCount(cat)}
                </span>
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 100}>
                <article
                  onClick={() => setLightboxIndex(i)}
                  className="group bg-card border border-border overflow-hidden hover:border-primary hover:shadow-premium-xl hover-lift transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted img-zoom">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <Badge className="bg-primary text-primary-foreground border-0 font-bold uppercase tracking-wide text-[10px]">
                        {project.category}
                      </Badge>
                    </div>
                    {/* Year chip */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-background/15 backdrop-blur-sm text-background text-xs font-bold uppercase tracking-wide px-2.5 py-1">
                        {project.year}
                      </span>
                    </div>
                    {/* Location + title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 text-xs text-background/80 mb-1.5">
                        <MapPin className="size-3.5 text-primary" />
                        {project.location}
                      </div>
                      <h3 className="font-display text-xl font-bold text-background leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        <Hammer className="size-3.5 text-primary" />
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                        View Gallery
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Lightbox */}
          <Lightbox
            items={lightboxItems}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(-1)}
            onNavigate={setLightboxIndex}
          />

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects in this category yet — check back soon.
            </div>
          )}
        </div>
      </section>

      {/* ===================== STATS BAND ===================== */}
      <section className="relative bg-foreground text-background">
        <div className="hazard-stripe h-1.5 w-full" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container relative mx-auto px-4 py-16 lg:py-20">
          <SectionHeading
            light
            align="center"
            eyebrow="By the Numbers"
            title={
              <>
                A track record built on{" "}
                <span className="text-primary">delivery</span>
              </>
            }
            description="Nine years of disciplined work across Johannesburg, Soweto, Sandton, Midrand and the greater Gauteng region."
            className="mb-12"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 100} className="text-center">
                <s.icon className="size-8 text-primary mx-auto mb-3" />
                <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-primary">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs lg:text-sm font-bold uppercase tracking-wider text-background/70">
                  {s.label}
                </div>
                <div className="mt-1 text-[11px] text-background/50 font-medium normal-case tracking-normal">
                  {s.footnote}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="hazard-stripe h-1.5 w-full" />
      </section>

      {/* ===================== HAVE A PROJECT IN MIND ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden bg-muted">
                <Image
                  src="/images/cta-bg.png"
                  alt="Libmarc Projects crew on a Johannesburg demolition site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-primary text-primary-foreground border-0 font-bold uppercase tracking-wide">
                    Active Project
                  </Badge>
                  <div className="mt-3 font-display text-2xl font-bold text-background">
                    Gauteng Demolition & Rubble Clearance
                  </div>
                  <div className="mt-1.5 flex items-center gap-2 text-xs text-background/80">
                    <MapPin className="size-3.5 text-primary" />
                    {company.addressShort}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <SectionHeading
                eyebrow="Have a Project in Mind?"
                title={
                  <>
                    Tell us what you want to{" "}
                    <span className="text-primary">build, break, or move</span>
                  </>
                }
                description="From a single bakkie load of rubble to a full basement rock blast — our team will respond with a transparent, no-obligation quote within one business day. Free site visits across Greater Johannesburg."
                className="mb-8"
              />
              <ul className="space-y-4 mb-8">
                {[
                  "Free site visit & same-business-day quote in Greater Johannesburg",
                  "Transparent ZAR rates — per m², per load, per hour, or fixed price",
                  "All work covered by R5 million public liability insurance",
                  "Disposal slips provided for every rubble removal",
                  "Certified shot-firers and COID-registered crews",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex size-6 items-center justify-center bg-primary text-primary-foreground shrink-0 mt-0.5">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <span className="text-base text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 text-base"
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
                <a
                  href={`https://wa.me/${company.whatsapp1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 border border-border px-6 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
