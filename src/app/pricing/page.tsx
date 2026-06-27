import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Minus,
  CheckCircle2,
  HardHat,
  Gem,
  Clock,
  MapPin,
  FileText,
  Leaf,
  ShieldCheck,
  Lock,
  TrendingDown,
  FileSignature,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PageHero,
  SectionHeading,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { pricingPlans, faqs, company } from "@/lib/site-data";

/* Pricing-related FAQ subset */
const pricingFaqs = faqs.filter((f) => f.category === "Pricing & Contracts");

/* Feature comparison rows — curated for clarity */
const comparisonRows: {
  label: string;
  values: ("yes" | "no" | "custom")[]; // index 0=Starter, 1=Professional, 2=Enterprise
}[] = [
  { label: "Single-family home construction", values: ["yes", "no", "no"] },
  { label: "Custom residential & small commercial", values: ["no", "yes", "no"] },
  { label: "Large commercial, industrial & infrastructure", values: ["no", "no", "yes"] },
  { label: "Standard material specifications", values: ["yes", "no", "no"] },
  { label: "Premium material specifications", values: ["no", "yes", "no"] },
  { label: "Bespoke finish & systems package", values: ["no", "no", "yes"] },
  { label: "Fixed-price proposal", values: ["yes", "no", "no"] },
  { label: "Guaranteed Maximum Price (GMP)", values: ["no", "yes", "yes"] },
  { label: "Design-build integration", values: ["no", "yes", "yes"] },
  { label: "Smart-home rough-in included", values: ["no", "yes", "yes"] },
  { label: "Weekly progress reports", values: ["yes", "no", "no"] },
  { label: "Bi-weekly client walkthroughs", values: ["no", "yes", "no"] },
  { label: "Dedicated project dashboard", values: ["no", "no", "yes"] },
  { label: "1-year craftsmanship warranty", values: ["yes", "no", "no"] },
  { label: "5-year craftsmanship warranty", values: ["no", "yes", "no"] },
  { label: "10-year structural warranty", values: ["no", "no", "yes"] },
  { label: "LEED certification management", values: ["no", "no", "yes"] },
  { label: "24/7 priority support", values: ["no", "no", "yes"] },
];

const costFactors = [
  {
    icon: HardHat,
    title: "Site Conditions",
    desc: "Slope, soil bearing, environmental remediation, and existing-structure demolition all shape foundation and earthwork costs.",
  },
  {
    icon: Gem,
    title: "Scope & Finishes",
    desc: "Material selections, custom millwork, and premium systems — AV, smart-home, high-performance glazing — drive the finish package.",
  },
  {
    icon: Clock,
    title: "Schedule",
    desc: "Fast-track delivery compresses trade stacking and may add overtime; extended timelines carry carrying costs and inflation risk.",
  },
  {
    icon: MapPin,
    title: "Location / Market",
    desc: "Bay Area prevailing wages, traffic logistics, and trade availability all influence unit pricing and procurement strategy.",
  },
  {
    icon: FileText,
    title: "Permitting",
    desc: "Jurisdiction fees, impact fees, and entitlement timelines can add weeks and 5–15% in soft costs before a shovel hits dirt.",
  },
  {
    icon: Leaf,
    title: "Sustainability Goals",
    desc: "LEED, WELL, net-zero, and Passive House targets add design depth, renewable systems, and verification overhead.",
  },
];

function ComparisonCell({ value }: { value: "yes" | "no" | "custom" }) {
  if (value === "yes") {
    return (
      <span className="inline-flex size-7 items-center justify-center bg-primary/15 text-primary">
        <Check className="size-4" strokeWidth={3} />
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="inline-flex size-7 items-center justify-center bg-muted text-muted-foreground">
        <X className="size-4" />
      </span>
    );
  }
  return (
    <span className="inline-flex size-7 items-center justify-center bg-muted text-muted-foreground">
      <Minus className="size-4" />
    </span>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Transparent Pricing for{" "}
            <span className="text-primary">Every Project</span>
          </>
        }
        description="Per-square-foot benchmarks for residential and commercial builds. Enterprise and infrastructure projects are quoted custom with a Guaranteed Maximum Price — no hidden costs, no surprises."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
        image="/images/projects/project-2.png"
      />

      {/* ===================== PRICING TIERS ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Pricing Tiers"
            title={
              <>
                Three packages, <span className="text-primary">one standard</span> of quality
              </>
            }
            description="Per-square-foot figures are planning benchmarks for typical builds. Actual pricing is finalized through a transparent pre-construction process."
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <Card
                  className={`relative h-full ${
                    plan.popular
                      ? "border-primary border-2 shadow-xl lg:scale-105 md:my-0"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap z-10">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-7 lg:p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                        {plan.name}
                      </div>
                      {plan.popular && (
                        <Badge className="bg-primary/10 text-primary border border-primary/30 font-bold uppercase tracking-wide">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="font-display text-5xl lg:text-6xl font-bold tracking-tight">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground font-medium">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed min-h-[3rem]">
                      {plan.description}
                    </p>

                    <div className="my-6 h-px bg-border" />

                    <ul className="space-y-3 flex-1">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`size-5 mt-0.5 shrink-0 ${
                              plan.popular ? "text-primary" : "text-foreground/70"
                            }`}
                            strokeWidth={2}
                          />
                          <span className="text-sm leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`mt-7 w-full font-bold uppercase tracking-wide h-12 ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link href="/contact">
                        {plan.cta}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            All packages include licensed, bonded, and insured crews. Need a
            tailored scope?{" "}
            <Link
              href="/contact"
              className="font-bold text-primary underline-offset-4 hover:underline"
            >
              Talk to our pre-construction team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ===================== COMPARISON TABLE ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="What's Included"
            title={
              <>
                Compare <span className="text-primary">tier features</span>
              </>
            }
            description="A side-by-side breakdown of what each pricing tier delivers."
            className="mb-12"
          />

          <Reveal>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse bg-background border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 lg:p-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Feature
                    </th>
                    {pricingPlans.map((plan) => (
                      <th
                        key={plan.name}
                        className={`p-4 lg:p-5 text-center min-w-[110px] ${
                          plan.popular ? "bg-primary/5" : ""
                        }`}
                      >
                        <div className="text-sm font-bold uppercase tracking-wide">
                          {plan.name}
                        </div>
                        <div className="mt-1 font-display text-xl font-bold">
                          {plan.price}
                        </div>
                        {plan.price !== "Custom" && (
                          <div className="text-[10px] text-muted-foreground font-medium">
                            {plan.period}
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-b-0 hover:bg-muted/40 transition-colors"
                    >
                      <td className="p-4 lg:p-5 text-sm font-medium">
                        {row.label}
                      </td>
                      {row.values.map((v, idx) => (
                        <td
                          key={idx}
                          className={`p-4 lg:p-5 text-center ${
                            pricingPlans[idx].popular ? "bg-primary/5" : ""
                          }`}
                        >
                          <div className="flex justify-center">
                            <ComparisonCell value={v} />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="size-4 text-primary" strokeWidth={3} /> Included
            </span>
            <span className="flex items-center gap-1.5">
              <X className="size-4 text-muted-foreground" /> Not included
            </span>
            <span className="flex items-center gap-1.5">
              <Minus className="size-4 text-muted-foreground" /> Custom scope
            </span>
          </div>
        </div>
      </section>

      {/* ===================== COST FACTORS ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Cost Drivers"
            title={
              <>
                What affects your <span className="text-primary">project cost</span>?
              </>
            }
            description="Six factors shape every quote we deliver. Understanding them up front keeps pricing transparent from day one."
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {costFactors.map((factor, i) => (
              <Reveal key={factor.title} delay={(i % 3) * 100}>
                <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex size-12 items-center justify-center bg-primary/10 border border-primary/30 shrink-0">
                        <factor.icon className="size-6 text-primary" strokeWidth={2} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-display text-xs font-bold text-muted-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                            {factor.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {factor.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ SNIPPET ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <SectionHeading
                eyebrow="Pricing FAQs"
                title={
                  <>
                    Pricing & <span className="text-primary">contracts</span>
                  </>
                }
                description="Common questions about how we price, contract, and bill for construction work."
                className="mb-6"
              />
              <Button
                asChild
                variant="link"
                className="font-bold uppercase tracking-wide text-primary px-0"
              >
                <Link href="/faq">
                  View All FAQs
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="lg:col-span-2">
              <Reveal>
                <Accordion type="single" collapsible className="bg-background border border-border px-6">
                  {pricingFaqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className={i === pricingFaqs.length - 1 ? "border-b-0" : ""}
                    >
                      <AccordionTrigger className="text-left font-display text-base lg:text-lg font-bold uppercase tracking-wide hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GMP / GUARANTEE BAND ===================== */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <div className="hazard-stripe h-1.5 w-full" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  GMP Transparency Pledge
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                We guarantee the{" "}
                <span className="text-primary">maximum price</span> — not just the minimum
              </h2>
              <p className="mt-5 text-background/70 text-base lg:text-lg leading-relaxed max-w-xl">
                Every Enterprise-tier project ships with a Guaranteed Maximum
                Price contract. If we deliver under GMP, you keep the savings.
                If we overrun, we absorb the cost — full stop. Open-book
                accounting, real-time cost tracking, and zero hidden change
                orders.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 text-base"
                >
                  <Link href="/contact">
                    Request a GMP Quote
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background font-bold uppercase tracking-wide h-14"
                >
                  <Link href="/faq">Read the FAQ</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Lock,
                    title: "Price Lock",
                    desc: "GMP locked before construction begins.",
                  },
                  {
                    icon: TrendingDown,
                    title: "Shared Savings",
                    desc: "Under-budget savings returned to you.",
                  },
                  {
                    icon: FileSignature,
                    title: "Open-Book",
                    desc: "Real-time access to every cost line item.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Bonded $25M",
                    desc: "Per-project bonding capacity on file.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border border-background/15 bg-background/5 p-5 hover:border-primary/40 hover:bg-background/10 transition-colors"
                  >
                    <item.icon className="size-7 text-primary mb-3" strokeWidth={2} />
                    <div className="font-display text-sm font-bold uppercase tracking-wide">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-background/70 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-background/50">
                License {company.license}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
