import type { Metadata } from "next";
import { PageHero, CTABand } from "@/components/site/sections";
import { CostEstimator } from "@/components/site/cost-estimator";
import { ShieldCheck, Clock, FileText, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Cost Estimator | Libmarc Projects",
  description:
    "Get an instant ballpark estimate for your demolition, rubble removal, plant hire, CCTV, or gate installation project in Johannesburg. Free, no obligation.",
};

const trustPoints = [
  { icon: Clock, title: "Instant Result", desc: "Get a ballpark range in under 30 seconds — no waiting." },
  { icon: ShieldCheck, title: "No Obligation", desc: "The estimate is free. You decide if you want a formal quote." },
  { icon: FileText, title: "Transparent Pricing", desc: "Based on our published ZAR rates — no hidden fees." },
  { icon: MapPin, title: "Built for Gauteng", desc: "Pricing tuned for Johannesburg site conditions and travel." },
];

export default function EstimatePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Tool"
        title={
          <>
            Instant Project <span className="text-primary">Cost Estimator</span>
          </>
        }
        description="Select your service, project size, and timeline to get a ballpark price range in seconds. For an exact quote, request a free site visit."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cost Estimator" },
        ]}
        image="/images/services/plant-hire.png"
      />

      {/* Estimator */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <CostEstimator />
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map((t) => (
              <div key={t.title} className="text-center">
                <div className="inline-flex size-12 items-center justify-center bg-primary/10 text-primary mb-3">
                  <t.icon className="size-6" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-wide">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Want an exact price?"
        description="Request a free site visit and get a formal, itemised quote — usually issued the same business day across Gauteng."
      />
    </>
  );
}
