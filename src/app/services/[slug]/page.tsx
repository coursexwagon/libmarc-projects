import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, company } from "@/lib/site-data";
import type { Metadata } from "next";

const serviceImages: Record<string, string> = {
  "demolition-rock-blasting": "/images/real/demolition.jpg",
  "rubble-removal": "/images/real/tipper-truck.jpg",
  "plant-hire": "/images/real/tlb-hire.jpg",
  "cctv-installation": "/images/real/cctv-install.jpg",
  "roller-shutter-gates": "/images/real/gate-motor.jpg",
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Libmarc Projects`,
    description: service.short,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      {/* HERO */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={serviceImages[slug] || "/images/real/demolition.jpg"}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="size-4" />
              All services
            </Link>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              {service.description}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 px-8"
            >
              <Link href="/contact">
                Get a quote <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              What&apos;s included
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-8">
              Full service, start to finish.
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={serviceImages[slug] || "/images/real/demolition.jpg"}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-12">
            <ShieldCheck className="size-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl lg:text-5xl font-bold">
              Safety &amp; compliance
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-display font-bold mb-2">Insured</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full public liability and works insurance on every job.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display font-bold mb-2">Licensed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All permits and licences secured before work begins.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display font-bold mb-2">Trained crew</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Operators and installers with years of hands-on experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
              Need {service.title.toLowerCase()}?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-xl">
              Call or WhatsApp for a free, written quote.
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
                <Phone className="size-5" />
                {company.phone1}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
