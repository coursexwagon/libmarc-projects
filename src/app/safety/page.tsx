import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  HardHat,
  FileCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety & Compliance | Libmarc Projects",
  description:
    "Libmarc Projects is fully insured, licensed, and compliant with Gauteng safety regulations. Zero lost-time incidents.",
};

const practices = [
  {
    icon: HardHat,
    title: "PPE & Training",
    description:
      "Every crew member wears full PPE. Regular toolbox talks and safety training.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description:
      "Public liability, works insurance, and contractor all-risk cover on every job.",
  },
  {
    icon: FileCheck,
    title: "Permits & Licences",
    description:
      "All demolition and blasting permits secured before work begins. Valid blasting licences for rock work.",
  },
  {
    icon: CheckCircle2,
    title: "Zero Incidents",
    description:
      "Zero lost-time incidents. We don't cut corners on safety.",
  },
];

export default function SafetyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/real/rock-blasting.jpg"
            alt="Libmarc rock blasting safety"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Safety &amp; compliance
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Safety first.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Zero lost-time incidents. Fully insured. Licensed and compliant.
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICES */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            Our approach
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold">
            How we stay safe.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice) => (
            <div key={practice.title} className="text-center">
              <practice.icon className="size-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">
                {practice.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INSURANCE */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                Insurance &amp; compliance
              </p>
              <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-6">
                Covered on every job.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We carry full public liability insurance, works insurance, and
                  contractor all-risk cover. Certificates available on request.
                </p>
                <p>
                  All demolition and blasting permits are secured through the
                  City of Johannesburg before any work begins. Our shot-firers
                  hold valid blasting licences and prepare blast plans for every
                  rock blasting job.
                </p>
                <p>
                  We comply with OHS Act requirements and carry out documented
                  risk assessments (HIRA) and method statements for every site.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src="/images/real/demolition.jpg"
                alt="Libmarc demolition safety"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-4">
            Need insurance certificates?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Call us and we&apos;ll send them over.
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
