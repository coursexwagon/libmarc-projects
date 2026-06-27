import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
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

/* Pre-render all 12 service slugs at build time */
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
      title: "Service Not Found | BUILDCORE",
    };
  }
  return {
    title: `${service.title} | BUILDCORE Construction Services`,
    description: service.short,
    openGraph: {
      title: `${service.title} | BUILDCORE`,
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

  // Related services — exclude current, take next 3 (wrapping)
  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow="BUILDCORE Services"
        title={
          <>
            {service.title}
          </>
        }
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
                    Every engagement begins with a discovery call to align on
                    scope, schedule, and budget — and ends with a final
                    walkthrough, warranty documentation, and a building you will
                    be proud to own for decades. Single-point accountability
                    from{" "}
                    <span className="text-foreground font-semibold">
                      BUILDCORE
                    </span>{" "}
    means the team that designs your project is the team that builds it.
                  </p>
                </div>

                {/* Image */}
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

            {/* Right: key features card */}
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
                        <Button
                          asChild
                          variant="outline"
                          className="w-full font-bold uppercase tracking-wide h-12"
                        >
                          <Link href="/projects">View Related Projects</Link>
                        </Button>
                      </div>

                      <p className="mt-5 text-xs text-muted-foreground text-center">
                        Typical response within 1 business day. No obligation,
                        no pressure — just a transparent scope and budget.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Our Process"
            title={
              <>
                Four steps from{" "}
                <span className="text-primary">scope to handover</span>
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
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Keep Exploring"
              title={
                <>
                  Related{" "}
                  <span className="text-primary">services</span>
                </>
              }
              description="Other disciplines our teams deliver — often combined into a single integrated contract."
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

          <div className="grid md:grid-cols-3 gap-5">
            {related.map((rel, i) => (
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
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                      <div className="absolute top-4 left-4 flex size-11 items-center justify-center bg-primary text-primary-foreground">
                        <rel.icon className="size-5" strokeWidth={2.2} />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                        {rel.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {rel.short}
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

      {/* ===================== CTA ===================== */}
      <CTABand
        title={`Ready to start your ${service.title.toLowerCase()} project?`}
        description="Tell us about your site, scope, and timeline. A pre-construction lead will respond within one business day with a transparent quote and recommended delivery method."
      />
    </>
  );
}
