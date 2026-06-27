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
  Users,
  BadgeDollarSign,
  MapPin,
  Calendar,
  FileText,
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
  title: "Our Services | Libmarc Projects — Johannesburg Demolition & Plant Hire",
  description:
    "Five integrated service lines: demolition & rock blasting, rubble removal, plant hire, CCTV installation, and roller shutter doors & automatic gates — delivered across Gauteng.",
};

const whyChooseUs = [
  {
    icon: BadgeDollarSign,
    title: "Honest Pricing",
    desc: "Written, itemised quotes — same business day. The price we quote is the price you pay. No hidden fees, no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    desc: "R5M public liability cover, COID-registered, PSIRA-registered for security work. Your site and your neighbours are covered.",
  },
  {
    icon: HardHat,
    title: "Certified Crews",
    desc: "Certified shot-firers for blasting, qualified electricians for gates and CCTV, and 10-year operators on every machine we hire out.",
  },
  {
    icon: Clock,
    title: "Same-Day Quotes",
    desc: "Call before lunch and most quotes land the same business day. We mobilise fast — many rubble removals go out same-day.",
  },
  {
    icon: MapPin,
    title: "All of Gauteng",
    desc: "From Soweto to Sandton, Roodepoort to Kempton Park — we cover every suburb of greater Johannesburg with our own fleet.",
  },
  {
    icon: Calendar,
    title: "9+ Years in Gauteng",
    desc: "Founded 2015 in Yeoville. 850+ projects completed. We're not going anywhere — ask around.",
  },
];

const serviceProcess = [
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

export default function ServicesPage() {
  // Only services with subServices defined get a breakdown block
  const servicesWithSubs = services.filter((s) => s.subServices && s.subServices.length > 0);

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Complete site &amp;{" "}
            <span className="text-primary">security solutions</span>
          </>
        }
        description="Five integrated service lines under one roof — demolition & rock blasting, rubble removal, plant hire, CCTV installation, and roller shutter doors & automatic gates. One team, one point of contact, across all of Gauteng."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        image="/images/services/plant-hire.png"
      />

      {/* ===================== INTRO ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Full-Service Contractor"
                title={
                  <>
                    Every discipline your site demands,{" "}
                    <span className="text-primary">one phone call</span>
                  </>
                }
                description="Most contractors coordinate a web of subcontractors. We staff the disciplines ourselves — demolition crews, plant operators, certified electricians, and CCTV installers — so when something changes on your site, the decision is made by people who share a fleet, not by separate companies reading separate contracts."
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

      {/* ===================== SERVICES GRID (rich cards) ===================== */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 2) * 100}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <Card className="h-full overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-background flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                      <div className="absolute top-4 left-4 flex size-12 items-center justify-center bg-primary text-primary-foreground">
                        <service.icon className="size-6" strokeWidth={2.2} />
                      </div>
                      <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border-0 backdrop-blur font-display font-bold text-base px-3 py-1">
                        {String(i + 1).padStart(2, "0")}
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display text-2xl lg:text-3xl font-bold text-background group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-7 flex-1 flex flex-col">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {service.short}
                      </p>
                      <ul className="mt-5 grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                        {service.features.slice(0, 4).map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-foreground/90"
                          >
                            <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                        <span className="text-sm font-bold text-primary uppercase tracking-wide flex items-center gap-1.5">
                          Learn More
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                          View Details &amp; Rates
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SUB-SERVICES BREAKDOWN ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Breakdown"
            title={
              <>
                What falls under{" "}
                <span className="text-primary">each service line</span>
              </>
            }
            description="A closer look at the sub-services within our demolition, plant hire, and roller shutter & gate divisions."
            className="mb-14"
          />

          <div className="space-y-8">
            {servicesWithSubs.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 80}>
                <div className="bg-background border border-border rounded-sm overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left: service summary */}
                    <div className="lg:w-1/3 bg-foreground text-background p-7 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex size-11 items-center justify-center bg-primary text-primary-foreground">
                            <service.icon className="size-5" strokeWidth={2.2} />
                          </div>
                          <span className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                            Service {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-sm text-background/70 leading-relaxed">
                          {service.short}
                        </p>
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary uppercase tracking-wide hover:opacity-80"
                      >
                        Full Service Page
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>

                    {/* Right: sub-services grid */}
                    <div className="lg:w-2/3 p-7 lg:p-8">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {service.subServices!.map((sub) => (
                          <div
                            key={sub.name}
                            className="border border-border p-5 hover:border-primary hover:bg-primary/5 transition-colors"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle2 className="size-4 text-primary" />
                              <h4 className="font-display text-base font-bold uppercase tracking-wide">
                                {sub.name}
                              </h4>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {sub.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="How We Work"
            title={
              <>
                A proven process from{" "}
                <span className="text-primary">enquiry to handover</span>
              </>
            }
            description="Four disciplined phases that turn your call into a delivered, clean site — on schedule and on budget."
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            {serviceProcess.map((p, i) => (
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
      <section className="py-20 lg:py-28 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Why Libmarc"
            title={
              <>
                Reasons clients keep{" "}
                <span className="text-primary">coming back</span>
              </>
            }
            description="Six concrete advantages that show up in every project we deliver — and in the 5-star reviews our Gauteng clients have written."
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
        description="Tell us about your site and what you need done. We'll recommend the right service line — or bundle a few together — and send a transparent quote within one business day."
      />
    </>
  );
}
