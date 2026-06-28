import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Libmarc Projects",
  description:
    "Libmarc Projects serves Johannesburg, Pretoria, Ekurhuleni, and surrounding areas across Gauteng. Call 078 150 0069 for a free quote.",
};

const areas = [
  "Johannesburg CBD",
  "Sandton",
  "Rosebank",
  "Fourways",
  "Randburg",
  "Roodepoort",
  "Soweto",
  "Midrand",
  "Centurion",
  "Pretoria East",
  "Pretoria North",
  "Ekurhuleni",
  "Germiston",
  "Benoni",
  "Boksburg",
  "Kempton Park",
  "Alberton",
  "Vanderbijlpark",
  "Vereeniging",
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/real/excavator-transport.jpg"
            alt="Libmarc transport across Gauteng"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Where we work
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Service areas.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              We cover Johannesburg, Pretoria, Ekurhuleni, and surrounding
              Gauteng areas.
            </p>
          </div>
        </div>
      </section>

      {/* AREAS GRID */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              Gauteng-wide
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-6">
              We come to you.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Based in Yeoville, Johannesburg, we serve the entire Gauteng
              province. If your site is outside our listed areas, call us
              anyway — we&apos;ll make it work.
            </p>
            <div className="flex items-start gap-3 border-l-2 border-primary bg-muted/40 px-4 py-3 mb-8">
              <Clock className="size-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/90 leading-relaxed">
                <span className="font-semibold">Response time:</span>{" "}
                {company.responseWindow}
              </p>
            </div>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-12 px-6"
            >
              <Link href="/contact">
                Get a quote <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 border border-border px-3 py-2"
                >
                  <MapPin className="size-4 text-primary shrink-0" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-4">
            Not sure if we cover your area?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Call us. We&apos;ll let you know.
          </p>
          <a
            href={`tel:${company.phone1.replace(/\s/g, "")}`}
            className="inline-flex h-14 items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold uppercase tracking-wide px-8 transition-colors"
          >
            <Phone className="size-5" />
            {company.phone1}
          </a>
        </div>
      </section>
    </>
  );
}
