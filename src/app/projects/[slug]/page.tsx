import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  Building2,
  HardHat,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  PageHero,
  CTABand,
  SectionHeading,
  Reveal,
} from "@/components/site/sections";
import { projects, company } from "@/lib/site-data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} — ${company.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${company.name}`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const metaItems = [
    { icon: Building2, label: "Client", value: project.client },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: DollarSign, label: "Value", value: project.value },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: HardHat, label: "Category", value: project.category },
  ];

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        image={project.image}
      />

      {/* ===================== META BAR ===================== */}
      <section className="border-b border-border bg-background sticky top-[var(--header-height,0)] z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-border">
            {metaItems.map((m, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 lg:p-5"
              >
                <m.icon className="size-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                <div className="min-w-0">
                  <div className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </div>
                  <div className="text-sm font-bold mt-0.5 truncate">
                    {m.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OVERVIEW ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Overview"
                title={
                  <>
                    About this{" "}
                    <span className="text-primary">project</span>
                  </>
                }
                className="mb-6"
              />
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Big impact stats inline */}
              <div className="mt-10 grid grid-cols-3 gap-4 lg:gap-6">
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                    {project.value}
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Project Value
                  </div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                    {project.duration}
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Build Duration
                  </div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                    {project.year}
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Year Completed
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-2 border-foreground/10 shadow-sm sticky top-24">
                <CardContent className="p-6 lg:p-7">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="h-0.5 w-6 bg-primary" />
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      Project Scope
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-4">
                    What We Delivered
                  </h3>
                  <ul className="space-y-3">
                    {project.scope.map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
                    >
                      <Link href="/contact">
                        Start a Similar Project
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GALLERY ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Gallery"
            title={
              <>
                Project <span className="text-primary">gallery</span>
              </>
            }
            description="A visual walkthrough of the build from groundbreaking to handover."
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {project.gallery.map((img, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className={
                  i === 0
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }
              >
                <div
                  className={`group relative overflow-hidden bg-muted ${
                    i === 0 ? "aspect-[4/3] md:aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} — gallery image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={
                      i === 0
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-background/90 text-foreground border-0 font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                      Image {i + 1} of {project.gallery.length}
                    </Badge>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== IMPACT / DARK BAND ===================== */}
      <section className="bg-foreground text-background">
        <div className="hazard-stripe h-1.5 w-full" />
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <SectionHeading
            light
            align="center"
            eyebrow="Impact"
            title={
              <>
                By the <span className="text-primary">numbers</span>
              </>
            }
            description="The metrics that define this project's success."
            className="mb-12"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: DollarSign,
                value: project.value,
                label: "Contract Value",
              },
              {
                icon: Clock,
                value: project.duration,
                label: "Total Build Time",
              },
              {
                icon: TrendingUp,
                value: "100%",
                label: "Schedule Milestones Hit",
              },
              {
                icon: ShieldCheck,
                value: "0",
                label: "Lost-Time Incidents",
              },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} className="text-center">
                <div className="inline-flex size-14 items-center justify-center bg-primary/10 border border-primary/30 mb-4">
                  <s.icon className="size-7 text-primary" strokeWidth={2} />
                </div>
                <div className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-background/70">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NEXT PROJECT ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <Link
              href={`/projects/${next.slug}`}
              className="group block relative overflow-hidden bg-foreground text-background"
            >
              <div className="absolute inset-0">
                <Image
                  src={next.image}
                  alt={next.title}
                  fill
                  className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/30" />
              <div className="relative p-8 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="h-0.5 w-8 bg-primary" />
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      Next Project
                    </span>
                  </div>
                  <Badge className="bg-primary text-primary-foreground border-0 font-bold uppercase tracking-wide mb-3">
                    {next.category}
                  </Badge>
                  <h3 className="font-display text-3xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                    {next.title}
                  </h3>
                  <p className="mt-3 text-background/70 text-base lg:text-lg max-w-xl">
                    {next.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs font-bold text-background/60 uppercase tracking-wide">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-primary" />
                      {next.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-primary" />
                      {next.year}
                    </span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 text-base shrink-0"
                >
                  View Project
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="hazard-stripe h-1.5 w-full" />
            </Link>
          </Reveal>

          <div className="mt-8 text-center">
            <Button
              asChild
              variant="link"
              className="font-bold uppercase tracking-wide text-primary"
            >
              <Link href="/projects">
                <ArrowLeft className="size-4" />
                Back to All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
