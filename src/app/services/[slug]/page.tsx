import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
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
import { services, company } from "@/lib/site-data";
import type { Metadata } from "next";

/* Per-service category eyebrow (derived from service category) */
const categoryEyebrow: Record<string, string> = {
  "demolition-rock-blasting": "Demolition & Blasting",
  "rubble-removal": "Waste Removal",
  "plant-hire": "Plant Hire",
  "cctv-installation": "Security",
  "roller-shutter-gates": "Access Control",
};

/* Per-service compliance / scope highlights — service-specific talking points */
const complianceHighlights: Record<
  string,
  { label: string; value: string }[]
> = {
  "demolition-rock-blasting": [
    {
      label: "Permits",
      value:
        "All City of Johannesburg demolition & blasting permits secured in full before work begins.",
    },
    {
      label: "Crew",
      value:
        "Supervised by certified shot-firers with valid blasting licences and blast plans.",
    },
    {
      label: "Cover",
      value:
        "R5 million public liability insurance protects every demolition and blasting project.",
    },
  ],
  "rubble-removal": [
    {
      label: "Load Sizes",
      value:
        "Bakkie loads (±1.5m³) for quick clears and truck loads (±6m³) for big building sites.",
    },
    {
      label: "Disposal",
      value:
        "All waste transported to licensed municipal landfill sites and recycling centres.",
    },
    {
      label: "Proof",
      value:
        "Disposal slips provided on every load — for your records and contractor compliance.",
    },
  ],
  "plant-hire": [
    {
      label: "Operator Option",
      value:
        "Hire any machine with or without a qualified operator — your call.",
    },
    {
      label: "Fleet",
      value:
        "40+ machines in fleet — every unit serviced, roadworthy, and ready to roll across Gauteng.",
    },
    {
      label: "Rates",
      value:
        "Transparent hourly, daily, and weekly rates with fuel options clearly itemised.",
    },
  ],
  "cctv-installation": [
    {
      label: "Scale",
      value:
        "From a 4-channel home setup to a 32-channel business solution with NVR backup.",
    },
    {
      label: "Mobile Viewing",
      value:
        "Mobile app remote viewing with night vision, motion alerts, and off-site backup.",
    },
    {
      label: "Compliance",
      value:
        "PSIRA-registered security installers and certified cabling on every CCTV project.",
    },
  ],
  "roller-shutter-gates": [
    {
      label: "Full Scope",
      value:
        "Roller shutters, sliding/swing gates, motors and remotes — supplied, fitted & wired by one team.",
    },
    {
      label: "Wiring",
      value:
        "Certified electrical wiring for gate motors, CCTV, and general installations.",
    },
    {
      label: "CoC Issued",
      value:
        "Electrical Certificate of Compliance issued on request for all wiring work.",
    },
  ],
};

/* Pre-render all 5 service slugs at build time */
export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

/* Per-page metadata */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found | Libmarc Projects",
    };
  }
  return {
    title: `${service.title} | Libmarc Projects`,
    description: service.short,
    openGraph: {
      title: `${service.title} | Libmarc Projects`,
      description: service.short,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const eyebrow = categoryEyebrow[service.slug] ?? "Libmarc Services";
  const highlights = complianceHighlights[service.slug] ?? [];

  // Related services — exclude current, show the other 4
  const related = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow={eyebrow}
        title={service.title}
        description={service.short}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        image={service.image}
      />

      {/* ===================== OVERVIEW ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: description */}
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Service Overview"
                  title={
                    <>
                      What this service{" "}
                      <span className="text-primary">includes</span>
                    </>
                  }
                />
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-base lg:text-lg">
                  <p>{service.description}</p>
                  <p>
                    Every engagement starts with a site visit and a written,
                    no-obligation quote — and ends with a clean, compliant,
                    properly documented handover. We work across Greater
                    Johannesburg and surrounding Gauteng, with the crew,
                    machinery, and certifications to deliver{" "}
                    <span className="text-foreground font-semibold">
                      {service.title.toLowerCase()}
                    </span>{" "}
                    safely, on time, and at a transparent price.
                  </p>
                </div>

                {/* Service image with icon badge */}
                <div className="mt-8 relative aspect-[16/9] overflow-hidden bg-muted border border-border">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center bg-primary text-primary-foreground">
                    <Icon className="size-6" strokeWidth={2.2} />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: sticky Key Features card */}
            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <div className="lg:sticky lg:top-24">
                  <Card className="border-border shadow-lg overflow-hidden">
                    <div className="bg-foreground text-background p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center bg-primary text-primary-foreground">
                          <Icon className="size-5" strokeWidth={2.2} />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.18em] text-background/60 font-bold">
                            Key Features
                          </div>
                          <div className="font-display text-lg font-bold">
                            {service.title}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/90 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-6 border-t border-border space-y-3">
                        <Button
                          asChild
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-12"
                        >
                          <Link href="/contact">
                            Get a Quote
                            <ArrowRight className="size-4" />
                          </Link>
                        </Button>
                        <a
                          href={`https://wa.me/${company.whatsapp1}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full h-12 items-center justify-center gap-2 border border-border px-6 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
                        >
                          <MessageCircle className="size-4" />
                          WhatsApp Us
                        </a>
                      </div>

                      <div className="mt-5 pt-5 border-t border-border space-y-2">
                        <a
                          href={`tel:${company.phone1Intl}`}
                          className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="size-4 text-primary" />
                          <span className="font-semibold">{company.phone1}</span>
                        </a>
                        <a
                          href={`tel:${company.phone2Intl}`}
                          className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="size-4 text-primary" />
                          <span className="font-semibold">{company.phone2}</span>
                        </a>
                      </div>

                      <p className="mt-5 text-xs text-muted-foreground text-center">
                        Same-business-day quotes on most enquiries. No
                        obligation, no hidden fees.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== COMPLIANCE / SCOPE HIGHLIGHTS (dark band) ===================== */}
      {highlights.length > 0 && (
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
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <SectionHeading
                eyebrow="Compliance & Assurance"
                title={
                  <>
                    What you get{" "}
                    <span className="text-primary">as standard</span>
                  </>
                }
                light
              />
              <div className="flex items-center gap-2 text-sm text-background/70">
                <ShieldCheck className="size-5 text-primary" />
                <span className="font-semibold uppercase tracking-wide">
                  R5M Public Liability · COID Registered
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((h, i) => (
                <Reveal key={h.label} delay={i * 100}>
                  <div className="border border-background/15 bg-background/5 p-6 h-full">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
                      {h.label}
                    </div>
                    <p className="text-background/85 leading-relaxed">
                      {h.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== SUB-SERVICES (only if defined) ===================== */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="py-20 lg:py-28 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeading
              align="center"
              eyebrow="What We Offer"
              title={
                <>
                  {service.subServices.length} specialist services,{" "}
                  <span className="text-primary">one team</span>
                </>
              }
              description={`From ${service.title.toLowerCase()}, we cover every scope — bundled into a single quote and a single point of contact.`}
              className="mb-14"
            />

            <div
              className={`grid gap-6 ${
                service.subServices.length === 4
                  ? "md:grid-cols-2 lg:grid-cols-4"
                  : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {service.subServices.map((sub, i) => (
                <Reveal key={sub.name} delay={i * 100}>
                  <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all duration-300 bg-background">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex size-10 items-center justify-center bg-primary/10 text-primary font-display font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Badge
                          variant="outline"
                          className="border-primary/30 text-primary uppercase tracking-wide text-[10px]"
                        >
                          Sub-service
                        </Badge>
                      </div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide leading-tight">
                        {sub.name}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                        {sub.desc}
                      </p>
                      <div className="mt-5 pt-5 border-t border-border">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wide hover:gap-2.5 transition-all"
                        >
                          Enquire
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== PROCESS ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Our Process"
            title={
              <>
                Four steps from{" "}
                <span className="text-primary">enquiry to handover</span>
              </>
            }
            description={`How we deliver ${service.title.toLowerCase()} — disciplined, documented, and on schedule.`}
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all duration-300 bg-background">
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-5xl font-bold text-primary/20 leading-none">
                        {p.step}
                      </span>
                      <span className="flex size-9 items-center justify-center bg-primary text-primary-foreground font-display font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {p.detail}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="font-bold uppercase tracking-wide"
            >
              <Link href="/services">
                <ArrowLeft className="size-4" />
                All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== RELATED SERVICES ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Keep Exploring"
              title={
                <>
                  Other{" "}
                  <span className="text-primary">Libmarc services</span>
                </>
              }
              description="Often bundled into a single contract — one quote, one crew, one accountable team across Gauteng."
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((rel, i) => {
              const RelIcon = rel.icon;
              return (
                <Reveal key={rel.slug} delay={i * 100}>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="group block h-full"
                  >
                    <Card className="h-full overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-background">
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                        <div className="absolute top-3 left-3 flex size-9 items-center justify-center bg-primary text-primary-foreground">
                          <RelIcon className="size-4" strokeWidth={2.2} />
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-display text-base font-bold uppercase tracking-wide leading-tight group-hover:text-primary transition-colors">
                          {rel.title}
                        </h3>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {rel.short}
                        </p>
                        <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wide">
                          Learn More
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand
        title={`Ready to start your ${service.title.toLowerCase()} project?`}
        description={`Tell us about your site, scope, and timeline. A Libmarc Projects lead will respond within one business day with a transparent quote and recommended approach.`}
      />
    </>
  );
}
