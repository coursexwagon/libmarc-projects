import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  HardHat,
  Clock,
  Users,
  Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Libmarc Projects",
  description:
    "Learn about Libmarc Projects — Johannesburg's trusted contractor for demolition, plant hire, CCTV, and gate installations since 2015.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Zero lost-time incidents. Every crew member is trained, insured, and follows strict safety protocols.",
  },
  {
    icon: Clock,
    title: "On Time",
    description:
      "We turn up when we say we will. No excuses, no delays, no ghosting.",
  },
  {
    icon: HardHat,
    title: "Experienced Crew",
    description:
      "Our operators and installers have years of hands-on experience across Gauteng.",
  },
  {
    icon: Users,
    title: "One Team",
    description:
      "Demolition, plant hire, CCTV, and gates — all under one roof. No subcontractor runaround.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/real/about-hero.png"
            alt="Libmarc earthworks"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              About us
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Built on trust.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Johannesburg&apos;s contractor for demolition, plant hire, CCTV,
              and gate installations since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              Our story
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-6">
              From one machine to a full fleet.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Libmarc Projects started in 2015 with a single TLB and a phone.
                Today we run a fleet of excavators, graders, rollers, and
                bobcats — plus certified CCTV installers and gate motor
                technicians.
              </p>
              <p>
                We work across Johannesburg, Pretoria, Ekurhuleni, and
                surrounding areas. Residential, commercial, and industrial. No
                job too small, no site too far.
              </p>
              <p>
                Our clients come back because we do what we say. Written quotes,
                real timelines, no surprises.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src="/images/real/tlb-hire.jpg"
              alt="Libmarc TLB on site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              What we stand for
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold">
              Our values.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <value.icon className="size-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
              Ready to work together?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-xl">
              Call or WhatsApp for a free quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold uppercase tracking-wide h-14 px-8"
              >
                <Link href="/contact">
                  Get a quote <ArrowRight className="size-5" />
                </Link>
              </Button>
              <a
                href={`tel:${company.phone1.replace(/\s/g, "")}`}
                className="inline-flex h-14 items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-bold uppercase tracking-wide px-8 transition-colors"
              >
                {company.phone1}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
