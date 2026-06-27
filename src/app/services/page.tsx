import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  HardHat,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Eye,
  Users,
  BadgeDollarSign,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SectionHeading,
  PageHero,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { services } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services | BUILDCORE",
  description:
    "Twelve integrated construction services under one roof — residential, commercial, industrial, civil infrastructure, design-build, renovation, fit-out, and more.",
};

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Top 5% Safety",
    desc: "EMR 0.71, zero lost-time incidents for 38 months, OSHA 30-certified supervisors on every site.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Design-build delivery 33% faster than design-bid-build, with critical-path schedules updated weekly.",
  },
  {
    icon: Eye,
    title: "Total Transparency",
    desc: "GMP pricing with full backup, written change orders before work proceeds, and live dashboards.",
  },
  {
    icon: Users,
    title: "In-House Team",
    desc: "Architects, engineers, and 750+ skilled craftspeople — all under one roof, no hand-offs to third parties.",
  },
  {
    icon: BadgeDollarSign,
    title: "GMP Pricing",
    desc: "Guaranteed maximum price locked before construction begins. Rarely needs a change order.",
  },
  {
    icon: FileCheck,
    title: "Real Warranty",
    desc: "1-year craftsmanship, 10-year structural, plus manufacturer pass-through on every system we install.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow="Our Expertise"
        title={
          <>
            Construction services{" "}
            <span className="text-primary">built to deliver</span>
          </>
        }
        description="Twelve integrated disciplines under one roof — from pre-construction planning to final handover. Single-point accountability from the people who will actually build your project."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        image="/images/projects/project-4.png"
      />

      {/* ===================== INTRO ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Full-Service Builder"
                title={
                  <>
                    Every discipline your project demands,{" "}
                    <span className="text-primary">under one contract</span>
                  </>
                }
                description="Most general contractors coordinate a web of subcontractors. We staff the disciplines ourselves — architects, engineers, superintendents, and 750+ craftspeople — so when something needs to change on your project, the decision is made by people who share an office, not by lawyers reading separate contracts."
              />
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-12 px-6"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES GRID (all 12) ===================== */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
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
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            {[
              {
                step: "01",
                title: "Consult",
                icon: Phone,
                desc: "We listen to your vision, budget, and timeline, then map feasibility and recommend a delivery method.",
              },
              {
                step: "02",
                title: "Design",
                icon: HardHat,
                desc: "Architects and engineers finalize plans; we secure all permits and lock the guaranteed maximum price.",
              },
              {
                step: "03",
                title: "Build",
                icon: Wrench,
                desc: "Site mobilization through finishes with weekly milestone reporting and live dashboards.",
              },
              {
                step: "04",
                title: "Deliver",
                icon: CheckCircle2,
                desc: "Final inspection, walkthrough, warranty documentation, and keys in hand — on or ahead of schedule.",
              },
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

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Why BUILDCORE"
            title={
              <>
                Reasons owners keep{" "}
                <span className="text-primary">coming back</span>
              </>
            }
            description="Six concrete advantages that show up in every project we deliver — and in the 480 five-star reviews our clients have written."
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-7">
                    <div className="flex size-12 items-center justify-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="size-6" strokeWidth={2} />
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand
        title="Not sure which service fits your project?"
        description="Tell us about your site, budget, and timeline. A pre-construction lead will respond within one business day with a recommended scope and delivery method."
      />
    </>
  );
}
