import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Clock,
  FileText,
  MapPin,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CostEstimator } from "@/components/site/cost-estimator";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Cost Estimator | Libmarc Projects",
  description:
    "Get an instant ballpark estimate for your demolition, rubble removal, plant hire, CCTV, or gate installation project in Johannesburg. Free, no obligation.",
};

const benefits = [
  {
    icon: Calculator,
    title: "Instant ballpark",
    description: "Get a rough estimate in seconds, no waiting.",
  },
  {
    icon: FileText,
    title: "Written quote follows",
    description: "We'll follow up with a proper written quote same day.",
  },
  {
    icon: ShieldCheck,
    title: "No obligation",
    description: "Free estimate. No commitment required.",
  },
  {
    icon: MapPin,
    title: "Gauteng-wide",
    description: "Covers Johannesburg, Pretoria, Ekurhuleni and surrounds.",
  },
];

export default function EstimatePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/real/grader-hire.jpg"
            alt="Libmarc grader on site"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Free tool
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Cost estimator.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Get a ballpark figure for your project in seconds. No commitment.
            </p>
          </div>
        </div>
      </section>

      {/* ESTIMATOR + BENEFITS */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT: Benefits */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              How it works
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight mb-8">
              Quick estimate, real numbers.
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <benefit.icon className="size-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Estimator form */}
          <div className="lg:col-span-8">
            <div className="border border-border p-6 lg:p-8">
              <CostEstimator />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
              Want a proper quote?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-xl">
              Call or WhatsApp for a written quote same business day.
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
