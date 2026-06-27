"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Star,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  Quote,
  HardHat,
  MapPin,
  TrendingUp,
  Users,
  Building2,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SectionHeading,
  Counter,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import {
  company,
  stats,
  services,
  projects,
  testimonials,
  certifications,
  clientLogos,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-foreground text-background">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-worker.png"
            alt="Construction worker in yellow hard hat"
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container relative mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 border border-background/20 bg-background/5 px-4 py-2 mb-6 backdrop-blur-sm">
                  <span className="flex size-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-background/90">
                    Trusted Bay Area Builder Since {company.founded}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
                  WE PROVIDE
                  <br />
                  <span className="text-primary">BEST SERVICE</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 text-lg lg:text-xl text-background/75 max-w-xl leading-relaxed">
                  We will provide you the best service which you deserve —
                  delivered fast, built safe, and engineered to last for
                  generations.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 px-8 text-base"
                  >
                    <Link href="/contact">
                      Get a Free Quote
                      <ArrowRight className="size-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background font-bold uppercase tracking-wide h-14 px-8 text-base"
                  >
                    <Link href="/projects">
                      View Our Work
                      <ArrowUpRight className="size-5" />
                    </Link>
                  </Button>
                </div>
              </Reveal>

              {/* Trust badges */}
              <Reveal delay={400}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {[
                    { icon: ShieldCheck, label: "EMR 0.71 Safety" },
                    { icon: Award, label: "15+ Years Experience" },
                    { icon: CheckCircle2, label: "Licensed & Bonded" },
                  ].map((b) => (
                    <div
                      key={b.label}
                      className="flex items-center gap-2 text-sm text-background/80"
                    >
                      <b.icon className="size-5 text-primary" />
                      {b.label}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Floating quote card */}
            <div className="lg:col-span-5 hidden lg:block">
              <Reveal delay={500}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-5 py-3 z-10">
                    <div className="text-3xl font-bold font-display">
                      <Counter value={1500} suffix="+" />
                    </div>
                    <div className="text-xs uppercase tracking-wider font-semibold">
                      Projects Completed
                    </div>
                  </div>
                  <Card className="bg-background/95 backdrop-blur border-0 shadow-2xl">
                    <CardContent className="p-7">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-4 fill-primary text-primary" />
                        ))}
                        <span className="ml-2 text-sm font-semibold text-foreground">
                          4.9/5
                        </span>
                        <span className="text-sm text-muted-foreground">
                          (480 reviews)
                        </span>
                      </div>
                      <Quote className="size-8 text-primary/30 mb-3" />
                      <p className="text-foreground leading-relaxed">
                        &ldquo;BUILDCORE delivered Meridian Tower two months ahead
                        of schedule and under GMP. They are the only GC we use in
                        the Bay Area now.&rdquo;
                      </p>
                      <div className="mt-5 flex items-center gap-3 pt-5 border-t border-border">
                        <div className="flex size-11 items-center justify-center bg-foreground text-background font-bold">
                          JP
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm">
                            Jonathan Pierce
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Director of Real Estate, Meridian Properties
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Hazard stripe bottom */}
        <div className="hazard-stripe h-2 w-full" />
      </section>

      {/* ===================== CLIENT LOGOS ===================== */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground shrink-0">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
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
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => {
              const icons = [Clock, Building2, Users, TrendingUp];
              const Icon = icons[i];
              return (
                <Reveal key={stat.label} delay={i * 100}>
                  <div className="relative group">
                    {i > 0 && (
                      <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 h-16 w-px bg-background/15" />
                    )}
                    <div className="text-center lg:text-left lg:pl-4">
                      <Icon className="size-8 text-primary mx-auto lg:mx-0 mb-3" />
                      <div className="font-display text-5xl lg:text-6xl font-bold text-primary leading-none">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="mt-2 text-sm uppercase tracking-wider text-background/70 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT PREVIEW ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary z-0" />
                <div className="relative aspect-[4/3] overflow-hidden bg-muted z-10">
                  <Image
                    src="/images/about-site.png"
                    alt="Construction site aerial view"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 z-20 shadow-xl hidden sm:block">
                  <div className="font-display text-4xl font-bold">15+</div>
                  <div className="text-xs uppercase tracking-wider font-semibold mt-1">
                    Years of Building
                    <br />
                    the Bay Area
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <SectionHeading
                  eyebrow="About BUILDCORE"
                  title={
                    <>
                      Building the Bay Area with{" "}
                      <span className="text-primary">precision & pride</span>{" "}
                      since {company.founded}.
                    </>
                  }
                  description="What started in 2009 with a single pickup truck and a zero-incident pledge has grown into one of Northern California's most trusted construction firms — without ever losing the craftsman's mindset that started it all."
                />

                <div className="mt-8 space-y-4">
                  {[
                    "Single-point accountability from design through handover",
                    "In-house architects, engineers, and 750+ skilled craftspeople",
                    "Top 5% safety record (EMR 0.71) with zero lost-time incidents",
                    "Transparent GMP pricing — rarely needing a change order",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
                  >
                    <Link href="/about">
                      Our Story
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="font-bold uppercase tracking-wide">
                    <Link href="/team">Meet the Team</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="What We Do"
              title={
                <>
                  Comprehensive construction
                  <br />
                  <span className="text-primary">services</span> under one roof
                </>
              }
              description="From pre-construction planning to final handover, our integrated teams cover every discipline a project demands."
            />
            <Button
              asChild
              variant="outline"
              className="font-bold uppercase tracking-wide shrink-0"
            >
              <Link href="/services">
                All Services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-background">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                      <div className="absolute top-4 left-4 flex size-11 items-center justify-center bg-primary text-primary-foreground">
                        <service.icon className="size-5" strokeWidth={2.2} />
                      </div>
                      <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border-0 backdrop-blur">
                        {String(i + 1).padStart(2, "0")}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {service.short}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-sm font-bold text-primary uppercase tracking-wide">
                        Learn More
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED PROJECTS ===================== */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              light
              eyebrow="Featured Work"
              title={
                <>
                  Landmark projects that
                  <br />
                  <span className="text-primary">define skylines</span>
                </>
              }
              description="A selection of recent projects spanning residential, commercial, industrial, and infrastructure."
            />
            <Button
              asChild
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background font-bold uppercase tracking-wide shrink-0"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <Link href={`/projects/${project.slug}`} className="group block relative aspect-[4/5] overflow-hidden bg-background/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground border-0 font-bold uppercase tracking-wide">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-xs text-background/70 mb-2">
                      <MapPin className="size-3.5 text-primary" />
                      {project.location}
                      <span className="mx-1">•</span>
                      {project.year}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-background group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-background/70 line-clamp-2 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                      {project.summary}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-sm font-bold text-primary uppercase tracking-wide">
                      View Project
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PRICING PREVIEW ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Transparent Pricing"
            title={
              <>
                Pricing built for <span className="text-primary">every project</span>
              </>
            }
            description="Clear, per-square-foot benchmarks for residential and commercial builds. Enterprise and infrastructure projects are quoted custom."
            className="mb-12"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { price: "$250", name: "Starter", desc: "Residential builds under 3,000 sq ft", popular: false },
              { price: "$450", name: "Professional", desc: "Custom homes & light commercial", popular: true },
              { price: "Custom", name: "Enterprise", desc: "Large commercial & infrastructure", popular: false },
            ].map((tier, i) => (
              <Reveal key={tier.name} delay={i * 100}>
                <Card
                  className={`relative h-full ${
                    tier.popular
                      ? "border-primary border-2 shadow-xl lg:scale-105"
                      : "border-border"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-7">
                    <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      {tier.name}
                    </div>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-display text-5xl font-bold">{tier.price}</span>
                      {tier.price !== "Custom" && (
                        <span className="text-muted-foreground font-medium">/sq ft</span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{tier.desc}</p>
                    <Button
                      asChild
                      className={`mt-6 w-full font-bold uppercase tracking-wide ${
                        tier.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : ""
                      }`}
                      variant={tier.popular ? "default" : "outline"}
                    >
                      <Link href="/pricing">View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="link" className="font-bold uppercase tracking-wide text-primary">
              <Link href="/pricing">
                See full pricing breakdown
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="How We Work"
            title={
              <>
                A proven process from{" "}
                <span className="text-primary">groundbreaking to handover</span>
              </>
            }
            description="Four disciplined phases that turn your vision into a delivered building — on schedule and on budget."
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            {[
              { step: "01", title: "Consult", icon: Phone, desc: "We listen to your vision, budget, and timeline, then map feasibility." },
              { step: "02", title: "Design", icon: HardHat, desc: "Architects and engineers finalize plans; we secure all permits." },
              { step: "03", title: "Build", icon: Wrench, desc: "Site mobilization through finishes with weekly milestone reporting." },
              { step: "04", title: "Deliver", icon: CheckCircle2, desc: "Final inspection, walkthrough, warranty docs, and keys in hand." },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative text-center">
                  <div className="relative inline-flex size-24 items-center justify-center bg-background border-2 border-primary mx-auto mb-5">
                    <p.icon className="size-9 text-primary" strokeWidth={2} />
                    <span className="absolute -top-3 -right-3 flex size-8 items-center justify-center bg-primary text-primary-foreground font-display font-bold text-sm">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Client Voices"
            title={
              <>
                What our <span className="text-primary">clients say</span>
              </>
            }
            description="Over 480 verified reviews with a 4.9-star average. Here is what owners say about working with BUILDCORE."
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <Card className="h-full border-border hover:border-primary transition-colors">
                  <CardContent className="p-7 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} className="size-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <Quote className="size-7 text-primary/30" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                      <div className="relative size-12 overflow-hidden bg-muted shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{t.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {t.title}, {t.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="font-bold uppercase tracking-wide">
              <Link href="/testimonials">
                Read All Reviews
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== CERTIFICATIONS ===================== */}
      <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 items-center">
            <div className="lg:col-span-1">
              <ShieldCheck className="size-12 text-primary mb-3" />
              <h2 className="font-display text-2xl font-bold">
                Certified & Compliant
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Every credential you need from a modern contractor.
              </p>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 bg-background border border-border p-4"
                >
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand />
    </>
  );
}
