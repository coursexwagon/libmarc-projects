import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  HardHat,
  Award,
  Handshake,
  Lightbulb,
  Leaf,
  CheckCircle2,
  Calendar,
  Flag,
  Building2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SectionHeading,
  PageHero,
  Counter,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { company, stats, certifications, team } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BUILDCORE | Building the Bay Area Since 2009",
  description:
    "Founded in 2009 in Oakland, BUILDCORE has grown into one of Northern California's most trusted construction firms — 1,500+ projects, 750+ skilled workers, and a 0.71 EMR safety record.",
};

const milestones = [
  {
    year: "2009",
    title: "BUILDCORE Founded",
    detail:
      "Marcus Holloway launches BUILDCORE from a single pickup truck in Oakland with a zero-incident pledge and three employees.",
  },
  {
    year: "2013",
    title: "First $10M Project",
    detail:
      "Delivered the 90,000 sq ft Westgate Medical Campus — our first eight-figure project and proof we could scale.",
  },
  {
    year: "2018",
    title: "500th Project Delivered",
    detail:
      "Crossed 500 completed projects, opened a dedicated design studio, and grew the field organization past 400 craftspeople.",
  },
  {
    year: "2022",
    title: "Bay Bridge Connector",
    detail:
      "Completed the $112M, 1.4-mile elevated connector for Caltrans — delivered on a 38-month DBFO contract with zero lost-time incidents.",
  },
  {
    year: "2024",
    title: "1,500th Project",
    detail:
      "Capped 1,500 delivered projects with the Port Logistics Center, and crossed 750 skilled workers across a dozen active sites.",
  },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Zero-incident mindset on every shift. EMR 0.71. Stop-work authority belongs to every worker.",
  },
  {
    icon: HardHat,
    title: "Craftsmanship",
    desc: "We build like our name is on the building — because it is. Detail-oriented execution from foundation to finish.",
  },
  {
    icon: Award,
    title: "Integrity",
    desc: "Transparent GMP pricing, honest change orders, and rare reputations for delivering on what we promise.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "BIM, drones, layout robotics, and LiDAR reality capture deployed on every active site — measured, not gimmicky.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    desc: "Design-build integration under one roof. Owners, architects, and builders solve problems together, not against each other.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "LEED Platinum, WELL Silver, and net-zero projects delivered. We build for the next generation, not the next quarter.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Building the Bay Area{" "}
            <span className="text-primary">since {company.founded}</span>
          </>
        }
        description="What started in 2009 with a single pickup truck and a zero-incident pledge has grown into one of Northern California's most trusted construction firms — without ever losing the craftsman's mindset that started it all."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        image="/images/about-site.png"
      />

      {/* ===================== MISSION / VISION / VALUES ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="What Drives Us"
            title={
              <>
                Mission, vision, and the{" "}
                <span className="text-primary">values we build on</span>
              </>
            }
            description="Three principles that shape every decision we make — from the projects we pursue to the people we hire."
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To deliver construction projects of lasting value — on schedule, on budget, and with an uncompromising commitment to safety, quality, and the people we serve.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be the Bay Area's most trusted builder — recognized for craftsmanship, innovation, and the integrity with which we treat every client, trade, and community.",
              },
              {
                icon: ShieldCheck,
                title: "Our Promise",
                desc: "Single-point accountability from design through handover. Transparent pricing. A zero-incident safety culture. And a building you will be proud to own for decades.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 size-32 bg-primary/5 rounded-full" />
                  <CardContent className="p-7 relative">
                    <div className="flex size-14 items-center justify-center bg-foreground text-primary mb-5">
                      <item.icon className="size-7" strokeWidth={2} />
                    </div>
                    <h3 className="font-display text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COMPANY STORY ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary z-0" />
                <div className="relative aspect-[4/3] overflow-hidden bg-muted z-10">
                  <Image
                    src="/images/cta-bg.png"
                    alt="BUILDCORE construction crew on site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 z-20 shadow-xl hidden sm:block">
                  <div className="font-display text-4xl font-bold">
                    <Counter value={750} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold mt-1">
                    Skilled Craftspeople
                    <br />
                    Across a Dozen Sites
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <SectionHeading
                  eyebrow="The BUILDCORE Story"
                  title={
                    <>
                      From a pickup truck to a{" "}
                      <span className="text-primary">regional powerhouse</span>
                    </>
                  }
                />
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    In <strong className="text-foreground">2009</strong>, Marcus
                    Holloway loaded a circular saw, a ladder, and a clipboard
                    into a used Ford F-150 and parked it on a job site in West
                    Oakland. The Great Recession was still grinding, but Marcus
                    had a conviction: that contractors who showed up on time,
                    communicated honestly, and refused to cut corners on safety
                    would always have work.
                  </p>
                  <p>
                    He was right. By <strong className="text-foreground">2013</strong>{" "}
                    BUILDCORE had delivered its first $10M project. By{" "}
                    <strong className="text-foreground">2018</strong> we had
                    completed our 500th project, opened a dedicated design
                    studio, and grown the field organization past 400
                    craftspeople. Today we employ{" "}
                    <strong className="text-foreground">750+ skilled workers</strong>{" "}
                    across a dozen active sites, with $25M bonding capacity and
                    an EMR of 0.71 that places us in the top 5% of contractors
                    nationally.
                  </p>
                  <p>
                    The trucks are newer now, the crews are larger, and the
                    projects are bigger — but the operating system is the same
                    one Marcus wrote on that clipboard:{" "}
                    <span className="text-primary font-semibold">
                      show up, tell the truth, build it right, send everyone
                      home safe.
                    </span>
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
                  >
                    <Link href="/team">
                      Meet Our Team
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="font-bold uppercase tracking-wide"
                  >
                    <Link href="/projects">See Our Work</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== ANIMATED STATS BAND ===================== */}
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
              const icons = [Calendar, Building2, Users, CheckCircle2];
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

      {/* ===================== CORE VALUES GRID ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="What We Stand For"
            title={
              <>
                Six values that shape{" "}
                <span className="text-primary">every project</span>
              </>
            }
            description="These aren't posters in the trailer. They're the operating principles that show up in daily decisions on every site we run."
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-7">
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 items-center justify-center bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <value.icon className="size-6" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                          {value.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {value.desc}
                        </p>
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
                Certified & Compliant
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Every credential you need from a modern contractor.
              </p>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert} delay={i * 60}>
                  <div className="flex items-center gap-3 bg-background border border-border p-4 hover:border-primary transition-colors h-full">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TIMELINE / MILESTONES ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Milestones"
            title={
              <>
                Fifteen years of{" "}
                <span className="text-primary">building the Bay Area</span>
              </>
            }
            description="The moments that shaped BUILDCORE — from a single pickup truck to a regional construction powerhouse."
            className="mb-16"
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={m.year} delay={i * 80}>
                  <div
                    className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Marker */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 z-10">
                      <div className="flex size-8 items-center justify-center bg-primary text-primary-foreground font-display font-bold text-xs border-4 border-background">
                        <Flag className="size-3.5" />
                      </div>
                    </div>

                    {/* Year (mobile inside card, desktop as side) */}
                    <div
                      className={`pl-12 md:pl-0 md:w-1/2 ${
                        isLeft
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:text-left"
                      }`}
                    >
                      <Card className="border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div
                            className={`flex items-center gap-3 mb-3 ${
                              isLeft ? "md:justify-end" : ""
                            }`}
                          >
                            <Badge className="bg-primary text-primary-foreground border-0 font-display font-bold text-base px-3 py-1">
                              {m.year}
                            </Badge>
                          </div>
                          <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                            {m.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {m.detail}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== TEAM PREVIEW ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Leadership"
              title={
                <>
                  The people who{" "}
                  <span className="text-primary">run the firm</span>
                </>
              }
              description="A second-generation builder, a principal architect, and a field-ops director with 750 craftspeople under his command."
            />
            <Button
              asChild
              variant="outline"
              className="font-bold uppercase tracking-wide shrink-0"
            >
              <Link href="/team">
                Full Team
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.slice(0, 3).map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <Link
                  href="/team"
                  className="group block h-full"
                >
                  <Card className="h-full overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-background">
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="font-display text-xl font-bold text-background group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-sm text-background/80 font-medium">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand
        title="Let's build your next chapter."
        description="From a single-family home to a $100M+ infrastructure project, our team is ready to deliver. Tell us about your vision and get a transparent quote within one business day."
      />
    </>
  );
}
