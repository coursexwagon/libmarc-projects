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
              <strong>Libmarc Projects</strong> is a Johannesburg-based demolition and plant hire contractor. We do structural demolition, rock blasting, rubble removal, TLB and Bobcat hire, CCTV installation, and roller shutter door fitting across Gauteng. Founded in 2015, we operate our own fleet of TLBs, excavators, graders, rollers, and tipper trucks — every machine supplied with an experienced operator. Unlike big contractors that sub-contract the work, our crew shows up and does the job directly. Written quotes, no escalation clauses, same-day response.
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

      {/* ===== COMPARISON TABLE ===== */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 mb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                Why hire us
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
              Libmarc vs the rest.
            </h2>
          </div>

          <div className="overflow-x-auto border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-5 py-4 font-bold font-display uppercase tracking-wide text-xs">Factor</th>
                  <th className="text-left px-5 py-4 font-bold font-display uppercase tracking-wide text-xs bg-primary/10">Libmarc Projects</th>
                  <th className="text-left px-5 py-4 font-bold font-display uppercase tracking-wide text-xs text-muted-foreground">Other contractors</th>
                  <th className="text-left px-5 py-4 font-bold font-display uppercase tracking-wide text-xs text-muted-foreground">DIY / hiring owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { factor: "Written quote", us: "Before any work starts", them: "Verbal, changes later", diy: "N/A" },
                  { factor: "Machine + operator", us: "Included in hire price", them: "Separate charge", diy: "Need licence" },
                  { factor: "Same-day response", us: "Quote in 2 hours", them: "2-3 days typical", diy: "N/A" },
                  { factor: "Insurance", us: "Full public liability", them: "Often not covered", diy: "Your risk" },
                  { factor: "Price guarantee", us: "Fixed, no escalation", them: "Can increase mid-job", diy: "Unpredictable" },
                  { factor: "Who does the work", us: "Our crew, not subbies", them: "Sub-contracted out", diy: "You do it" },
                  { factor: "Dumping fees", us: "Included in quote", them: "Billed separately", diy: "You pay + drive" },
                  { factor: "Serving Gauteng since", us: "2015", them: "Varies", diy: "N/A" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3.5 font-medium">{row.factor}</td>
                    <td className="px-5 py-3.5 bg-primary/[0.02] font-semibold text-primary">{row.us}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.them}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-muted-foreground text-center">
            Based on average customer feedback across Johannesburg construction projects, 2020–2026.
            <br />Learn more about{" "}
            <a
              href="https://en.wikipedia.org/wiki/Demolition"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              demolition methods
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Heavy_equipment_(construction)"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              heavy equipment operations
            </a>
            , and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Closed-circuit_television"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              CCTV security systems
            </a>
            .
          </p>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="container mx-auto px-4 py-20 lg:py-28 relative">
        {/* FAQPage JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Does Libmarc Projects do demolition in Johannesburg?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle structural demolition, wall removal, and small-scale site clearing across Johannesburg and Gauteng. Our crew has 8+ years of experience with rock breaking machines, pneumatic breakers, and controlled blasting for hard rock. We get a written go-ahead before we start." }
                },
                {
                  "@type": "Question",
                  "name": "What plant machinery do you hire out?",
                  "acceptedAnswer": { "@type": "Answer", "text": "We hire TLB backhoes (3-ton and 8-ton), Bobcats with operator, padfoot and smooth drum rollers, motor graders, excavators with transport, 8-ton tipper trucks, compactor and plate tampers, and bakkies. Every machine is supplied with an experienced operator." }
                },
                {
                  "@type": "Question",
                  "name": "Do you install CCTV cameras and security gates?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. We install wired and wireless CCTV systems (HD, IP, and PTZ cameras) for homes and businesses. We also supply and fit roller shutter doors and automatic gate motors from Gemini, Centurion, and ET Nice." }
                },
                {
                  "@type": "Question",
                  "name": "How much does rubble removal cost in Gauteng?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Rubble removal starts at R1,200 per load for an 8-ton tipper truck. The final price depends on volume, access, and distance to the dumping site. We give a fixed written quote with no surprise bills." }
                },
                {
                  "@type": "Question",
                  "name": "How do I get a quote from Libmarc Projects?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Call us on 078 150 0069 or use the quote form on our contact page. We ask for the job location, scope, and photos if possible. We send a written quote within 2 hours on weekdays." }
                },
                {
                  "@type": "Question",
                  "name": "Do you work outside Johannesburg?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, we serve the entire Gauteng province including Midrand, Centurion, Pretoria, Ekurhuleni, Randburg, Roodepoort, Krugersdorp, and Vereeniging. Travel costs are included within 60km of our base." }
                },
                {
                  "@type": "Question",
                  "name": "Is Libmarc Projects insured?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. We carry full public liability insurance for all our operations. We provide proof of insurance with every quote. Our operators are trained and our machinery is serviced to manufacturer standards." }
                },
              ]
            })
          }}
        />
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 mb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                FAQ
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
              Common questions.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Does Libmarc Projects do demolition in Johannesburg?",
                a: "Yes. We handle structural demolition, wall removal, and small-scale site clearing across Johannesburg and Gauteng. Our crew has 8+ years of experience with rock breaking machines, pneumatic breakers, and controlled blasting for hard rock. We get a written go-ahead before we start — no verbal okays."
              },
              {
                q: "What plant machinery do you hire out?",
                a: "We hire TLB backhoes (3-ton and 8-ton), Bobcats with operator, padfoot and smooth drum rollers, motor graders, excavators with transport, 8-ton tipper trucks, compactor and plate tampers, and bakkies. Every machine is supplied with an experienced operator — you don't need a licence to hire from us."
              },
              {
                q: "Do you install CCTV cameras and security gates?",
                a: "Yes. We install wired and wireless CCTV systems (HD, IP, and PTZ cameras) for homes and businesses. We also supply and fit roller shutter doors and automatic gate motors from leading brands like Gemini, Centurion, and ET Nice. All work is done by our own team, not subbies."
              },
              {
                q: "How much does rubble removal cost in Gauteng?",
                a: "Rubble removal starts at R1,200 per load for a 8-ton tipper truck. The final price depends on volume, access, and distance to the dumping site. We give a fixed written quote — you won't get a surprise bill. We dump legally at registered sites and include the dumping fee in the quote."
              },
              {
                q: "How do I get a quote?",
                a: "Call us on 078 150 0069 or use the quote form on our contact page. We ask for the job location, scope, and photos if possible. We usually send a written quote within 2 hours on weekdays. Same-day quotes are standard for jobs in Johannesburg and Ekurhuleni."
              },
              {
                q: "Do you work outside Johannesburg?",
                a: "Yes, we serve the entire Gauteng province including Midrand, Centurion, Pretoria, Ekurhuleni, Randburg, Roodepoort, Krugersdorp, and Vereeniging. Travel costs are included in the quote if the job is within 60km of our base."
              },
              {
                q: "Are you insured?",
                a: "Yes. We carry full public liability insurance for all our operations — demolition, plant hire, and installations. We provide proof of insurance with every quote. Our operators are trained and our machinery is serviced to manufacturer standards."
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group border-l-2 border-primary/30 hover:border-primary transition-colors bg-background"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-bold font-display uppercase tracking-wide">
                  {faq.q}
                  <span className="text-primary text-lg leading-none group-open:rotate-180 transition-transform duration-200">
                    ▾
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                  {faq.a}
                </div>
              </details>
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
