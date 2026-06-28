import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  HardHat,
  BadgeDollarSign,
  CheckCircle2,
  ShieldCheck,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, company } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Libmarc Projects — Johannesburg Demolition & Plant Hire",
  description:
    "Five integrated service lines: demolition & rock blasting, rubble removal, plant hire, CCTV installation, and roller shutter doors & automatic gates — delivered across Gauteng.",
};

const serviceImages: Record<string, string> = {
  "demolition-rock-blasting": "/images/real/demolition.jpg",
  "rubble-removal": "/images/real/tipper-truck.jpg",
  "plant-hire": "/images/real/tlb-hire.jpg",
  "cctv-installation": "/images/real/cctv-install.jpg",
  "roller-shutter-gates": "/images/real/gate-motor.jpg",
};

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Full public liability, works insurance, and contractor all-risk cover.",
  },
  {
    icon: Clock,
    title: "Same-Day Quotes",
    description:
      "Call or WhatsApp and we'll have a written quote back to you within hours.",
  },
  {
    icon: MapPin,
    title: "Gauteng-Wide",
    description:
      "Johannesburg, Pretoria, Ekurhuleni, and surrounding areas.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Weekends, public holidays, and after-hours when your project needs it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/real/demolition.jpg"
            alt="Libmarc services"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              What we do
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Our services.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Five service lines. One crew. One phone call.
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

      {/* SERVICES GRID — real photos */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative aspect-[16/10] overflow-hidden bg-muted"
            >
              <Image
                src={serviceImages[service.slug] || "/images/real/demolition.jpg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 max-w-md">
                  {service.short}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary uppercase tracking-wide">
                  Learn more <ArrowRight className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              Why Libmarc
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold">
              Built different.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <item.icon className="size-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
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
              Ready to start?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-xl">
              Call or WhatsApp for a free, no-obligation quote.
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
