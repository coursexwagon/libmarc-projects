import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  SectionHeading,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { CostEstimator } from "@/components/site/cost-estimator";
import {
  ShieldCheck,
  Clock,
  FileText,
  MapPin,
  Calculator,
  ListChecks,
  TrendingUp,
  ArrowRight,
  Ruler,
  Truck,
  CalendarClock,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

/* ---------- How the estimate works ---------- */
const howItWorks = [
  {
    step: "01",
    title: "Pick your service",
    detail: "Choose from demolition, rubble removal, plant hire, CCTV, or gates. Each service has its own pricing structure — per m², per load, per hour, or per install.",
    icon: ListChecks,
  },
  {
    step: "02",
    title: "Set the size & timeline",
    detail: "Tell us how big the job is (Small to Extra Large) and whether it's standard or rush. The tool applies the right rate band and a 25% rush multiplier if you need it this week.",
    icon: Ruler,
  },
  {
    step: "03",
    title: "Get your range",
    detail: "You'll see a low-to-high ZAR range based on our published rates. It's a ballpark, not a quote — but it's honest, and you can WhatsApp it to us to start the conversation.",
    icon: Calculator,
  },
];

/* ---------- What affects the final price ---------- */
const priceFactors = [
  {
    title: "Site access",
    detail: "A tight Yeoville street with no truck turning space costs more than an open Sandton site. We assess this on the free site visit.",
    icon: MapPin,
  },
  {
    title: "Scope & materials",
    detail: "Reinforced concrete costs more to break than brick. HD cameras cost more than standard. Material choices shift the final number.",
    icon: Wrench,
  },
  {
    title: "Timeline",
    detail: "Standard scheduling (1–2 weeks) is the baseline rate. Rush jobs, after-hours, and weekends carry a 25–50% premium — we put it in the quote.",
    icon: CalendarClock,
  },
  {
    title: "Disposal & haulage",
    detail: "For demolition and rubble removal, the distance to the licensed landfill and the number of loads affects the final bill. Disposal slips always included.",
    icon: Truck,
  },
];

/* ---------- Sample pricing scenarios ---------- */
const sampleScenarios = [
  {
    tag: "Demolition",
    title: "Strip out a 3-bed house interior",
    size: "Small · up to 50m²",
    range: "R15,000 – R40,000",
    note: "Ceilings, partitions, floors, fittings — out and rubble hauled. Single day on site.",
  },
  {
    tag: "Plant Hire",
    title: "TLB with operator, 1 week",
    size: "Medium · 5 working days",
    range: "R26,000 – R30,000",
    note: "Operator + daily checks + on-site support. Fuel extra. Best for trenching and loading.",
  },
  {
    tag: "CCTV",
    title: "8-camera HD system for a complex",
    size: "Medium · 8 cameras + NVR",
    range: "R14,500 – R22,000",
    note: "Night vision, mobile app, 30-day backup. Installed in a day. PSIRA-registered.",
  },
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

      {/* ===================== ESTIMATOR ===================== */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <CostEstimator />
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="How It Works"
            number="01"
            title={
              <>
                Three steps to a{" "}
                <span className="text-primary">ballpark price</span>
              </>
            }
            description="No email required, no signup, no call-backs. You pick three things and the tool does the maths against our published ZAR rate card."
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-border" />
            {howItWorks.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div className="relative text-center">
                  <div className="relative inline-flex size-24 items-center justify-center bg-background border-2 border-primary mx-auto mb-5">
                    <s.icon className="size-9 text-primary" strokeWidth={2} />
                    <span className="absolute -top-3 -right-3 flex size-8 items-center justify-center bg-primary text-primary-foreground font-display font-bold text-sm">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {s.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHAT AFFECTS THE PRICE ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  eyebrow="The Fine Print"
                  number="02"
                  title={
                    <>
                      What moves the{" "}
                      <span className="text-primary">final number</span>
                    </>
                  }
                  description="The estimator gives you a range. The final quote narrows it down. These are the four factors that pull the price up or down — we check all of them on the free site visit."
                />
                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
                  >
                    <Link href="/rates">
                      See Full Rate Card
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-5">
                {priceFactors.map((f, i) => (
                  <Reveal key={f.title} delay={i * 80}>
                    <div className="group h-full bg-background border border-border p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="flex size-11 items-center justify-center bg-foreground text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <f.icon className="size-5" strokeWidth={2.2} />
                        </span>
                        <span className="font-display text-3xl font-bold text-muted-foreground/30 group-hover:text-primary/30 transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-2">
                        {f.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SAMPLE SCENARIOS ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Real Examples"
            number="03"
            title={
              <>
                What others{" "}
                <span className="text-primary">typically pay</span>
              </>
            }
            description="Three common jobs from recent quotes — so you can sanity-check your estimate against real numbers. Your final quote may differ based on the factors above."
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {sampleScenarios.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="h-full bg-background border border-border hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="p-6 border-b border-border bg-muted/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                        <TrendingUp className="size-3" />
                        {s.tag}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        {s.size}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold leading-tight">
                      {s.title}
                    </h3>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-1">
                      Typical Range
                    </div>
                    <div className="font-display text-2xl lg:text-3xl font-bold text-primary">
                      {s.range}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                      {s.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" />
            <span>
              All estimates in South African Rand. Final quotes are itemised in writing — same business day.
            </span>
          </div>
        </div>
      </section>

      {/* ===================== TRUST POINTS ===================== */}
      <section className="py-16 lg:py-20 bg-muted/40 border-t border-border">
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
