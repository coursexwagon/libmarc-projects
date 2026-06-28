"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { company, services, projects } from "@/lib/site-data";

const heroServices = [
  { icon: Icons.bomb, label: "Demolition" },
  { icon: Icons.truck, label: "Plant Hire" },
  { icon: Icons.recycle, label: "Rubble Removal" },
  { icon: Icons.camera, label: "CCTV" },
  { icon: Icons.doorClosed, label: "Gates & Shutters" },
];

const serviceImages: Record<string, string> = {
  "demolition-rock-blasting": "/images/real/demolition.jpg",
  "rubble-removal": "/images/real/tipper-truck.jpg",
  "plant-hire": "/images/real/tlb-hire.jpg",
  "cctv-installation": "/images/real/cctv-install.jpg",
  "roller-shutter-gates": "/images/real/gate-motor.jpg",
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        {/* Industrial grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Libmarc excavation site in Johannesburg"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />

        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-[3]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-primary/30 px-4 py-1.5 mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                Johannesburg · Available Now
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
              We get the
              <br />
              <span className="text-primary">tough jobs</span> done.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Demolition, rock blasting, rubble removal, plant hire, CCTV and
              roller shutter gates. One crew, one phone call, one written
              quote.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="shadow-[0_6px_0_0_#a03a00] hover:shadow-[0_3px_0_0_#a03a00]"
              >
                <Link href="/contact">
                  Get a quote <ArrowRight className="size-5" />
                </Link>
              </Button>
              <a
                href={`tel:${company.phone1.replace(/\s/g, "")}`}
                className="inline-flex h-14 items-center justify-center gap-3 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold uppercase tracking-wide px-8 transition-all duration-200 hover:translate-y-[-2px]"
              >
                <Icons.phone className="size-5 text-primary" />
                {company.phone1}
              </a>
            </div>
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
              {heroServices.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="flex size-9 items-center justify-center bg-primary/15 border border-primary/30">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <span className="font-semibold text-primary-foreground/80">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="border-b border-border relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(200,80,20,0.02) 20px, rgba(200,80,20,0.02) 21px)",
          }}
        />
        <div className="container mx-auto px-4 py-4 relative">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Icons.shieldCheck className="size-3.5 text-primary" /> Fully insured
            </span>
            <span className="flex items-center gap-1.5">
              <Icons.clock className="size-3.5 text-primary" /> Same-day quotes
            </span>
            <span className="flex items-center gap-1.5">
              <Icons.mapPin className="size-3.5 text-primary" /> Serving Gauteng
            </span>
            <span className="flex items-center gap-1.5">
              <Icons.hardHat className="size-3.5 text-primary" /> 8+ years
            </span>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="container mx-auto px-4 py-20 lg:py-28 relative">
        {/* Decorative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary to-transparent opacity-30" />

        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
              Why Libmarc
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
            Construction that
            <br />
            <span className="text-primary">shows up</span>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            We don&apos;t subcontract. We don&apos;t overpromise. We arrive with
            the right machine and a fair price.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "Direct, no middleman",
              desc: "You speak to the crew that does the work. One call, one team, one invoice.",
            },
            {
              number: "02",
              title: "Written quotes, firm prices",
              desc: "No escalation clauses. What we quote is what you pay — even if the job runs longer.",
            },
            {
              number: "03",
              title: "We bring the whole yard",
              desc: "TLBs, graders, excavators, rollers, tipper trucks. If we don't own it, we don't hire it out.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative border border-border bg-background p-8 group hover:border-primary/40 transition-all duration-300"
              style={{
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.05)",
              }}
            >
              {/* Number */}
              <span
                className="font-display text-6xl font-bold leading-none absolute -top-3 -right-3 opacity-[0.04] pointer-events-none select-none"
                style={{ color: "#3d3425" }}
              >
                {item.number}
              </span>
              {/* Top accent */}
              <div className="w-10 h-0.5 bg-primary mb-5" />
              <h3 className="font-display text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="relative bg-muted/30 border-y border-border">
        {/* Crosshatch texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.008) 10px, rgba(0,0,0,0.008) 11px)`,
          }}
        />
        <div className="container mx-auto px-4 py-20 lg:py-28 relative">
          <div className="flex items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/25 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                  What we do
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
                Our services.
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden sm:inline-flex"
            >
              <Link href="/services">
                See all <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden bg-foreground border border-border"
                style={{
                  aspectRatio: "4/3",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <Image
                  src={
                    serviceImages[service.slug] || "/images/real/demolition.jpg"
                  }
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                {/* Overlay accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2">
                    {service.short}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link href="/services">
                See all services <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== EQUIPMENT GRID ===== */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src="/images/real/earthworks.jpg"
              alt="Libmarc earthworks in Johannesburg"
              width={800}
              height={600}
              className="w-full h-auto object-cover border border-border"
              style={{
                boxShadow:
                  "8px 8px 0 rgba(200,80,20,0.12), -4px -4px 0 rgba(200,80,20,0.06)",
              }}
            />
            {/* Stamp */}
            <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider -rotate-3">
              Real photo · Live site
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 mb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                The fleet
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-5">
              Heavy machines,{" "}
              <span className="text-primary">real results</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From Bobcats in tight backyards to excavators on open sites. We
              match the machine to the job — never upsell you on equipment you
              don&apos;t need.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                "Bobcat hire (labour supplied)",
                "3-ton & 8-ton TLB hire",
                "Padfoot/ smooth drum rollers",
                "Motor grader",
                "Excavator & transport",
                "8-ton tipper trucks",
                "Compactor & plate tampers",
                "Bakkie hire",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="size-1.5 bg-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Button asChild>
              <Link href="/services/plant-hire">
                View plant hire rates <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== RECENT WORK ===== */}
      <section className="relative bg-muted/30 border-y border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(0,0,0,0.006) 15px, rgba(0,0,0,0.006) 16px)",
          }}
        />
        <div className="container mx-auto px-4 py-20 lg:py-28 relative">
          <div className="flex items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/25 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                  Recent work
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
                Where we&apos;ve been.
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden sm:inline-flex"
            >
              <Link href="/projects">
                All projects <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.slug}
                className="bg-background border border-border p-6 hover:border-primary/30 transition-all duration-300 group"
                style={{
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Icons.mapPin className="size-3.5" />
                  {project.location} · {project.year}
                </div>
                <div className="w-8 h-0.5 bg-primary/40 mb-4 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-display text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 py-20 lg:py-24 relative">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl lg:text-6xl font-bold leading-[0.95] tracking-tight">
              Got a job?
              <br />
              <span className="text-primary-foreground/90">Call us.</span>
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Same-day quote, written, no surprises. We turn up when we say we
              will.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-[0_5px_0_0_#d4a080] hover:shadow-[0_2px_0_0_#d4a080]"
              >
                <Link href="/contact">
                  Get a quote <ArrowRight className="size-5" />
                </Link>
              </Button>
              <a
                href={`tel:${company.phone1.replace(/\s/g, "")}`}
                className="inline-flex h-14 items-center justify-center gap-3 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-bold uppercase tracking-wide px-8 transition-all duration-200 hover:translate-y-[-2px]"
              >
                <Icons.phone className="size-5" />
                {company.phone1}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fold effect */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08))",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      </section>
    </>
  );
}
