"use client";

import * as React from "react";
import { Calculator, ArrowRight, RotateCcw, MessageCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services, company } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ServiceKey = string;
type SizeKey = "small" | "medium" | "large" | "xlarge";

const sizeLabels: Record<SizeKey, string> = {
  small: "Small",
  medium: "Medium",
  large: "Large",
  extra: "Extra Large",
};

// Base price ranges (ZAR) per service × size
const priceMatrix: Record<ServiceKey, Record<SizeKey, { min: number; max: number; unit: string }>> = {
  "demolition-rock-blasting": {
    small: { min: 15000, max: 40000, unit: "up to 50m²" },
    medium: { min: 40000, max: 120000, unit: "50–150m²" },
    large: { min: 120000, max: 350000, unit: "150–400m²" },
    xlarge: { min: 350000, max: 0, unit: "400m²+" },
  },
  "rubble-removal": {
    small: { min: 900, max: 2700, unit: "1–3 bakkie loads" },
    medium: { min: 3600, max: 9000, unit: "2–5 truck loads" },
    large: { min: 10800, max: 27000, unit: "6–15 truck loads" },
    xlarge: { min: 30000, max: 0, unit: "15+ truck loads" },
  },
  "plant-hire": {
    small: { min: 2600, max: 5200, unit: "TLB, 4–8 hours" },
    medium: { min: 5200, max: 18000, unit: "TLB/Excavator, 1–3 days" },
    large: { min: 20000, max: 60000, unit: "20T Excavator, 1 week" },
    xlarge: { min: 65000, max: 0, unit: "Monthly hire" },
  },
  "cctv-installation": {
    small: { min: 7500, max: 14500, unit: "4-camera system" },
    medium: { min: 14500, max: 22000, unit: "8-camera system" },
    large: { min: 22000, max: 45000, unit: "16-camera system" },
    xlarge: { min: 50000, max: 0, unit: "24–32 channel" },
  },
  "roller-shutter-gates": {
    small: { min: 6500, max: 15000, unit: "1 manual door/gate" },
    medium: { min: 15000, max: 30000, unit: "1 motorised unit" },
    large: { min: 30000, max: 60000, unit: "2+ motorised units" },
    xlarge: { min: 65000, max: 0, unit: "Commercial multi-door" },
  },
};

const sizeOptions: { key: SizeKey; label: string; desc: string }[] = [
  { key: "small", label: "Small", desc: "Quick job" },
  { key: "medium", label: "Medium", desc: "Standard" },
  { key: "large", label: "Large", desc: "Multi-day" },
  { key: "xlarge", label: "Extra Large", desc: "Major project" },
];

function formatZAR(n: number): string {
  if (n === 0) return "Custom";
  return "R" + n.toLocaleString("en-ZA");
}

export function CostEstimator() {
  const [selectedService, setSelectedService] = React.useState<string>("");
  const [selectedSize, setSelectedSize] = React.useState<SizeKey | "">("");
  const [urgency, setUrgency] = React.useState<"standard" | "rush">("standard");
  const [showResult, setShowResult] = React.useState(false);

  const canCalculate = selectedService && selectedSize;

  const handleCalculate = () => {
    if (canCalculate) setShowResult(true);
  };

  const handleReset = () => {
    setSelectedService("");
    setSelectedSize("");
    setUrgency("standard");
    setShowResult(false);
  };

  const result = React.useMemo(() => {
    if (!selectedService || !selectedSize || !showResult) return null;
    const base = priceMatrix[selectedService]?.[selectedSize];
    if (!base) return null;
    const rushMultiplier = urgency === "rush" ? 1.25 : 1;
    const min = Math.round(base.min * rushMultiplier);
    const max = base.max > 0 ? Math.round(base.max * rushMultiplier) : 0;
    return { ...base, min, max };
  }, [selectedService, selectedSize, urgency, showResult]);

  const selectedServiceData = services.find((s) => s.slug === selectedService);

  return (
    <div className="bg-background border border-border shadow-premium-lg overflow-hidden">
      {/* Header */}
      <div className="bg-foreground text-background p-6 lg:p-8 relative overflow-hidden grain">
        <div className="absolute inset-0 grid-pattern-light opacity-[0.06]" />
        <div className="relative flex items-center gap-3 mb-3">
          <div className="flex size-11 items-center justify-center bg-primary text-primary-foreground">
            <Calculator className="size-6" strokeWidth={2.2} />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Instant Estimate
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight">
              Project Cost Estimator
            </h3>
          </div>
        </div>
        <p className="relative text-sm text-background/70 max-w-lg leading-relaxed">
          Get a ballpark figure in seconds. Select your service, project size, and
          timeline — this is an estimate, not a final quote. For an exact price,
          request a free site visit.
        </p>
      </div>

      {/* Body */}
      <div className="p-6 lg:p-8">
        {!showResult ? (
          <div className="space-y-7">
            {/* Step 1: Service */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold mb-3">
                <span className="flex size-6 items-center justify-center bg-primary text-primary-foreground text-xs font-bold">
                  1
                </span>
                What service do you need?
              </label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {services.map((s) => {
                  const selected = selectedService === s.slug;
                  return (
                    <button
                      key={s.slug}
                      onClick={() => setSelectedService(s.slug)}
                      className={cn(
                        "flex items-start gap-3 p-3.5 border text-left transition-all",
                        selected
                          ? "border-primary bg-primary/5 shadow-premium-sm"
                          : "border-border hover:border-foreground/30 hover:bg-accent/50"
                      )}
                    >
                      <div
                        className={cn(
                          "flex size-9 items-center justify-center shrink-0 transition-colors",
                          selected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        )}
                      >
                        <s.icon className="size-4.5" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={cn("text-sm font-bold", selected && "text-primary")}>
                          {s.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                          {s.short}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Size */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold mb-3">
                <span className="flex size-6 items-center justify-center bg-primary text-primary-foreground text-xs font-bold">
                  2
                </span>
                How big is the job?
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                {sizeOptions.map((opt) => {
                  const selected = selectedSize === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => setSelectedSize(opt.key)}
                      disabled={!selectedService}
                      className={cn(
                        "p-3.5 border text-center transition-all disabled:opacity-40 disabled:cursor-not-allowed",
                        selected
                          ? "border-primary bg-primary/5 shadow-premium-sm"
                          : "border-border hover:border-foreground/30 hover:bg-accent/50"
                      )}
                    >
                      <div className={cn("text-sm font-bold", selected && "text-primary")}>
                        {opt.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {opt.desc}
                      </div>
                      {selectedService && (
                        <div className="text-[11px] text-foreground/60 mt-1.5 font-medium">
                          {priceMatrix[selectedService]?.[opt.key]?.unit}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgency */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold mb-3">
                <span className="flex size-6 items-center justify-center bg-primary text-primary-foreground text-xs font-bold">
                  3
                </span>
                Timeline
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => setUrgency("standard")}
                  className={cn(
                    "p-3.5 border text-left transition-all",
                    urgency === "standard"
                      ? "border-primary bg-primary/5 shadow-premium-sm"
                      : "border-border hover:border-foreground/30 hover:bg-accent/50"
                  )}
                >
                  <div className={cn("text-sm font-bold", urgency === "standard" && "text-primary")}>
                    Standard
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Within 1–2 weeks
                  </div>
                </button>
                <button
                  onClick={() => setUrgency("rush")}
                  className={cn(
                    "p-3.5 border text-left transition-all",
                    urgency === "rush"
                      ? "border-primary bg-primary/5 shadow-premium-sm"
                      : "border-border hover:border-foreground/30 hover:bg-accent/50"
                  )}
                >
                  <div className={cn("text-sm font-bold", urgency === "rush" && "text-primary")}>
                    Rush Job (+25%)
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Needed this week
                  </div>
                </button>
              </div>
            </div>

            {/* Calculate button */}
            <Button
              onClick={handleCalculate}
              disabled={!canCalculate}
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide disabled:opacity-40 disabled:cursor-not-allowed h-14 text-base shadow-primary-glow"
            >
              Estimate My Project
              <ArrowRight className="size-5" />
            </Button>
            {!canCalculate && (
              <p className="text-center text-xs text-muted-foreground">
                Select a service and project size to calculate
              </p>
            )}
          </div>
        ) : (
          /* Result view */
          <div className="animate-scale-in">
            {result && selectedServiceData && (
              <>
                <div className="bg-muted/50 border border-border p-6 lg:p-8 text-center">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                    Estimated Range
                  </div>
                  <div className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                    {formatZAR(result.min)}
                    {result.max > 0 && (
                      <span className="text-muted-foreground">
                        {" "}– {formatZAR(result.max)}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {selectedServiceData.title} · {result.unit}
                    {urgency === "rush" && " · Rush job"}
                  </div>

                  {/* Range bar */}
                  {result.max > 0 && (
                    <div className="mt-6 max-w-md mx-auto">
                      <div className="relative h-3 bg-border overflow-hidden">
                        <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-primary/40 to-primary" />
                      </div>
                      <div className="flex justify-between mt-1.5 text-xs text-muted-foreground">
                        <span>Low end: {formatZAR(result.min)}</span>
                        <span>High end: {formatZAR(result.max)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* What's included */}
                <div className="mt-6 space-y-2.5">
                  <div className="text-sm font-bold mb-2">This estimate includes:</div>
                  {[
                    "Labour, equipment & materials",
                    "Site setup & safety compliance",
                    "Waste disposal (where applicable)",
                    urgency === "rush" ? "Priority scheduling" : "Standard scheduling",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4.5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-900 leading-relaxed">
                    <strong>Disclaimer:</strong> This is a ballpark estimate based on
                    typical project sizes. Your final quote depends on site access,
                    exact scope, materials, and a free site visit. Request a formal
                    quote for an exact price.
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-12"
                  >
                    <Link href="/contact">
                      Get Exact Quote
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <a
                    href={`https://wa.me/${company.whatsapp1}?text=${encodeURIComponent(
                      `Hi Libmarc, I'd like a quote for ${selectedServiceData.title} (${result.unit}). My estimate range was ${formatZAR(result.min)}${result.max > 0 ? `–${formatZAR(result.max)}` : ""}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex h-12 items-center justify-center gap-2 border border-[#25D366]/30 bg-[#25D366]/5 text-[#1a8c44] font-bold uppercase tracking-wide text-sm hover:bg-[#25D366]/10 transition-colors"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp This
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-4 w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  <RotateCcw className="size-3.5" />
                  Start over
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
