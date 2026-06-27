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
  Calendar,
  Building2,
  Users,
  FileText,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SectionHeading,
  Counter,
  CTABand,
  Reveal,
  Marquee,
} from "@/components/site/sections";
import {
  company,
  stats,
  services,
  projects,
  testimonials,
  certifications,
  clientLogos,
  rates,
} from "@/lib/site-data";

/* Featured projects on home (by slug) */
const featuredProjectSlugs = [
  "yeoville-demolition",
  "rosebank-rock-blasting",
  "sandton-excavator-hire",
];

/* Featured rates on home (matched against rates array) */
const featuredRateIndices = [0, 3, 4]; // Demolition, Rubble Truck, TLB

const homeProcess = [
  {
    step: "01",
    title: "Enquire",
    icon: Phone,
    desc: "Call or WhatsApp us with your project, site address, and scope. We respond fast — usually the same business day.",
  },
  {
    step: "02",
    title: "Quote",
    icon: FileText,
    desc: "A transparent written quote with itemised rates. No hidden fees, no surprises, no obligation.",
  },
  {
    step: "03",
    title: "Execute",
    icon: HardHat,
    desc: "Mobilise machines, certified crews, and supervision. HIRA signed off. Work carried out safely and on schedule.",
  },
  {
    step: "04",
    title: "Handover",
    icon: CheckCircle2,
    desc: "Site left clean and level. Disposal slips provided. We walk you through the completed work and hand over.",
  },
];

const heroTrustBadges = [
  { icon: ShieldCheck, label: "R5M Public Liability" },
  { icon: Clock, label: "9+ Years in Gauteng" },
  { icon: Award, label: "Certified Shot-Firers" },
];

export default function HomePage() {
  const featuredProjects = featuredProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;
  const featuredRates = featuredRateIndices.map((i) => rates[i]);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-foreground text-background">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-demolition.png"
            alt="Libmarc Projects demolition excavator at work in Johannesburg"
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
                    Trusted Johannesburg Contractor Since {company.founded}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
                  WE GET THE
                  <br />
                  <span className="text-primary">TOUGH JOBS</span>
                  <br />
                  DONE
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 text-lg lg:text-xl text-background/75 max-w-xl leading-relaxed">
                  Demolition &amp; rock blasting, rubble removal, plant hire,
                  CCTV and roller shutter gates — delivered across Gauteng since
                  2015 by crews who show up, work safe, and quote honestly.
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
                  <a
                    href={`https://wa.me/${company.whatsapp1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center gap-2 border border-background/25 bg-transparent text-background hover:bg-background/10 font-bold uppercase tracking-wide px-8 text-base transition-colors"
                  >
                    <MessageCircle className="size-5 text-primary" />
                    WhatsApp Us
                  </a>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {heroTrustBadges.map((b) => (
                    <div
                      key={b.label}
                      className="flex items-center gap-2 text-sm text-background/80"
                    >
                      <b.icon className="size-4 text-primary" />
                      <span className="font-medium">{b.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Floating quote card */}
            <div className="lg:col-span-5">
              <Reveal delay={500}>
                <div className="relative bg-background text-foreground p-7 lg:p-8 shadow-2xl">
                  <div className="absolute -top-3 left-7 flex size-12 items-center justify-center bg-primary text-primary-foreground">
                    <Quote className="size-6" />
                  </div>
                  <div className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-base lg:text-lg leading-relaxed font-medium">
                      &ldquo;Libmarc stripped out the inside of my old house in
                      a single day and took all the rubble with them. The team
                      was professional, on time, and the price was exactly what
                      they quoted. Highly recommended.&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-4 pt-5 border-t border-border">
                      <div className="flex size-12 items-center justify-center bg-primary/15 text-primary font-display font-bold">
                        BM
                      </div>
                      <div>
                        <div className="font-bold">Bongani M.</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="size-3" />
                          Homeowner, Brixton
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Bottom hazard stripe */}
        <div className="hazard-stripe h-1.5 w-full" />
      </section>

      {/* ===================== CLIENT LOGOS (animated marquee) ===================== */}
      <section className="border-b border-border bg-background py-8">
        <div className="container mx-auto px-4 mb-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by builders &amp; bodies corporate across Gauteng
          </p>
        </div>
        <Marquee>
          {clientLogos.map((logo) => (
            <span
              key={logo}
              className="font-display text-lg lg:text-xl font-bold uppercase tracking-wide text-muted-foreground/50 hover:text-foreground transition-colors px-10 whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ===================== STATS BAND ===================== */}
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
        <div className="container relative mx-auto px-4 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => {
              const icons = [Calendar, Building2, Users, ShieldCheck];
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
        <div className="hazard-stripe h-1.5 w-full" />
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
                    alt="Libmarc Projects crew on a Johannesburg site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 z-20 shadow-xl hidden sm:block">
                  <div className="font-display text-5xl font-bold leading-none">
                    <Counter value={9} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold mt-2 leading-tight">
                    Years Serving
                    <br />
                    Greater Gauteng
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <SectionHeading
                  number="01"
                  eyebrow="Who We Are"
                  title={
                    <>
                      Founded in Yeoville. Built for{" "}
                      <span className="text-primary">tough jobs</span>.
                    </>
                  }
                />
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Libmarc Projects was founded in{" "}
                    <strong className="text-foreground">2015</strong> in
                    Yeoville, Johannesburg — starting with a single TLB and a
                    commitment to honest pricing. We made our name taking on
                    the jobs bigger contractors skip: tight demolitions, rock
                    blasting in built-up suburbs, same-day rubble removal.
                  </p>
                  <p>
                    Nine years on, we&apos;ve grown to a{" "}
                    <strong className="text-foreground">
                      fleet of 40+ machines
                    </strong>{" "}
                    — TLBs, excavators, tipper trucks and bakkies — and added
                    CCTV and roller shutter door installation so our clients
                    can secure what we help them build. We cover{" "}
                    <strong className="text-foreground">all of Gauteng</strong>{" "}
                    from Soweto to Sandton.
                  </p>
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
                  <Button
                    asChild
                    variant="outline"
                    className="font-bold uppercase tracking-wide"
                  >
                    <Link href="/rates">View Rates</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES GRID ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="What We Do"
            number="02"
            title={
              <>
                Five services,{" "}
                <span className="text-primary">one phone call</span>
              </>
            }
            description="Demolition, rubble, plant, CCTV, and gates — delivered by one team that takes the job from broken ground to secure premises."
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <Card className="h-full overflow-hidden border-border hover:border-primary hover-lift hover:shadow-premium-xl bg-background transition-all duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted img-zoom">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                      <div className="absolute top-4 left-4 flex size-11 items-center justify-center bg-primary text-primary-foreground">
                        <service.icon className="size-5" strokeWidth={2.2} />
                      </div>
                      <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border-0 backdrop-blur font-display font-bold">
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

            {/* "View all services" tile */}
            <Reveal delay={240}>
              <Link
                href="/services"
                className="group block h-full"
              >
                <div className="h-full flex flex-col items-start justify-center bg-foreground text-background p-7 border border-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  <div className="flex size-11 items-center justify-center bg-primary text-primary-foreground group-hover:bg-foreground group-hover:text-primary mb-5 transition-colors">
                    <ArrowUpRight className="size-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                    Explore All Services
                  </h3>
                  <p className="mt-2 text-sm text-background/70 group-hover:text-primary-foreground/80 leading-relaxed">
                    Full breakdown of every service line, sub-services, and
                    rates.
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide">
                    View Services
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED PROJECTS ===================== */}
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
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              light
              eyebrow="Recent Work"
              number="03"
              title={
                <>
                  Tough jobs,{" "}
                  <span className="text-primary">delivered</span>
                </>
              }
              description="A snapshot of demolition, blasting, and plant-hire projects we've completed across Gauteng."
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

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <Link
                  href="/projects"
                  className="group block relative aspect-[4/5] overflow-hidden bg-foreground"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground border-0 font-bold uppercase tracking-wide">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center gap-1.5 text-xs text-background/70 mb-2 uppercase tracking-wider font-semibold">
                      <MapPin className="size-3" />
                      {project.location} · {project.year}
                    </div>
                    <h3 className="font-display text-xl font-bold text-background group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-background/75 leading-relaxed line-clamp-2 max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-500">
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
        <div className="hazard-stripe h-1.5 w-full" />
      </section>

      {/* ===================== RATES PREVIEW ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Starting Rates"
            number="04"
            title={
              <>
                Transparent pricing,{" "}
                <span className="text-primary">no surprises</span>
              </>
            }
            description="Honest starting rates for the services we're asked about most. Every quote is itemised in writing — same business day."
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {featuredRates.map((rate, i) => (
              <Reveal key={rate.service} delay={i * 100}>
                <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {rate.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                      Popular
                    </div>
                  )}
                  <CardContent className="p-7">
                    <div className="flex size-12 items-center justify-center bg-foreground text-primary mb-5">
                      <HardHat className="size-6" strokeWidth={2} />
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide leading-tight">
                      {rate.service}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-display text-4xl font-bold text-primary">
                        {rate.price}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        / {rate.unit}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {rate.note}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="font-bold uppercase tracking-wide"
            >
              <Link href="/rates">
                See All Rates
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="How It Works"
            number="05"
            title={
              <>
                From your call to{" "}
                <span className="text-primary">clean handover</span>
              </>
            }
            description="Four simple steps — same whether you're hiring a TLB for a day or demolishing a block of flats."
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            {homeProcess.map((p, i) => (
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
            eyebrow="What Clients Say"
            number="06"
            title={
              <>
                Johannesburg homeowners &amp;{" "}
                <span className="text-primary">contractors trust us</span>
              </>
            }
            description="Real reviews from real Gauteng clients — from Brixton strip-outs to Sandton excavator hire."
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-7 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="size-9 text-primary/30" />
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star
                            key={j}
                            className="size-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-base leading-relaxed text-foreground/90 flex-1">
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
                        <div className="font-bold">{t.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {t.title} · {t.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
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
                Certified &amp; Insured
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Every credential your site requires.
              </p>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert} delay={i * 60}>
                  <div className="flex items-center gap-3 bg-background border border-border p-4 hover:border-primary transition-colors h-full">
                    <ShieldCheck className="size-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand
        title="Got a tough job? We'll handle it."
        description="Tell us what you need demolished, hauled, hired, or secured — and get a transparent, no-obligation quote within one business day. We work across all of Gauteng."
      />
    </>
  );
}
