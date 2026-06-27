"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  DollarSign,
  Clock,
  Building2,
  ShieldCheck,
  HardHat,
  ArrowUpRight,
  PhoneCall,
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
import { projects, company } from "@/lib/site-data";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Infrastructure",
  "Renovation",
] as const;

type Category = (typeof categories)[number];

export default function ProjectsPage() {
  const [active, setActive] = React.useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Projects That <span className="text-primary">Define Skylines</span>
          </>
        }
        description="From custom hillside homes to elevated highway connectors, our portfolio spans every discipline — each delivered with the same obsession for schedule, safety, and craft."
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
                  Browse by <span className="text-primary">category</span>
                </>
              }
              description="Filter our recent work by project type. Click any card to see scope, gallery, and impact metrics."
            />
            <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground shrink-0">
              Showing{" "}
              <span className="text-primary">{filtered.length}</span> of{" "}
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
                  "px-5 py-2.5 text-sm font-bold uppercase tracking-wide border-2 transition-all",
                  active === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/50 hover:-translate-y-0.5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 100}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block relative aspect-[4/5] overflow-hidden bg-muted"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge className="bg-primary text-primary-foreground border-0 font-bold uppercase tracking-wide">
                      {project.category}
                    </Badge>
                    <span className="bg-background/15 backdrop-blur-sm text-background text-xs font-bold uppercase tracking-wide px-2.5 py-1">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 size-10 flex items-center justify-center bg-background/15 backdrop-blur-sm text-background opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                    <ArrowUpRight className="size-5" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-xs text-background/70 mb-2">
                      <MapPin className="size-3.5 text-primary" />
                      {project.location}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-background group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-background/70 line-clamp-2 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500">
                      {project.summary}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs font-bold text-background/60 uppercase tracking-wide">
                      <span className="flex items-center gap-1">
                        <DollarSign className="size-3.5 text-primary" />
                        {project.value}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5 text-primary" />
                        {project.duration}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-sm font-bold text-primary uppercase tracking-wide">
                      View Project
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

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
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <SectionHeading
            light
            align="center"
            eyebrow="By the Numbers"
            title={
              <>
                A track record built on{" "}
                <span className="text-primary">results</span>
              </>
            }
            description="Fifteen years of disciplined delivery across the Bay Area's most demanding projects."
            className="mb-12"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              {
                icon: Building2,
                prefix: "",
                value: 1500,
                suffix: "+",
                label: "Projects Completed",
              },
              {
                icon: DollarSign,
                prefix: "$",
                value: 680,
                suffix: "M+",
                label: "Total Value Delivered",
              },
              {
                icon: Clock,
                prefix: "",
                value: 96,
                suffix: "%",
                label: "On-Time Delivery",
              },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} className="text-center">
                <s.icon className="size-8 text-primary mx-auto mb-3" />
                <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="text-primary">{s.prefix}</span>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs lg:text-sm font-bold uppercase tracking-wider text-background/70">
                  {s.label}
                </div>
              </Reveal>
            ))}
            {/* EMR is a decimal — render static */}
            <Reveal delay={300} className="text-center">
              <ShieldCheck className="size-8 text-primary mx-auto mb-3" />
              <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="text-primary">0.</span>71
              </div>
              <div className="mt-2 text-xs lg:text-sm font-bold uppercase tracking-wider text-background/70">
                EMR Safety Record
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== HAVE A PROJECT IN MIND ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden bg-muted">
                <Image
                  src="/images/projects/project-3.png"
                  alt="Construction site at dusk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-primary text-primary-foreground border-0 font-bold uppercase tracking-wide">
                    Active Project
                  </Badge>
                  <div className="mt-3 font-display text-2xl font-bold text-background">
                    Bay Bridge Connector
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
                    <span className="text-primary">build</span>
                  </>
                }
                description="Whether it's a custom home, a commercial build-out, or a public infrastructure project, our pre-construction team will respond within one business day with a transparent, no-obligation assessment."
                className="mb-8"
              />
              <ul className="space-y-4 mb-8">
                {[
                  "Pre-construction discovery call within 24 hours",
                  "Transparent GMP or lump-sum pricing",
                  "Critical-path schedule delivered before contract",
                  "Single point of accountability from design through handover",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex size-6 items-center justify-center bg-primary text-primary-foreground shrink-0 mt-0.5">
                      <ArrowRight className="size-3.5" />
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
                  href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex h-14 items-center justify-center gap-2 border-2 border-foreground px-6 text-sm font-bold uppercase tracking-wide text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <PhoneCall className="size-4" />
                  {company.phone}
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
