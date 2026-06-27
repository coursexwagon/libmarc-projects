import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Info,
  Star,
  CheckCircle2,
  Truck,
  Construction,
  Camera,
  DoorClosed,
  Bomb,
  Recycle,
  Zap,
  ShieldCheck,
  MessageCircle,
  PhoneCall,
  Wrench,
  Clock,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  SectionHeading,
  PageHero,
  Counter,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { rates, rateNotes, company, type RateItem } from "@/lib/site-data";

/* ---------- Rate category groupings ---------- */
type RateGroup = {
  name: string;
  icon: typeof Bomb;
  match: (r: RateItem) => boolean;
};

const rateGroups: RateGroup[] = [
  {
    name: "Demolition & Rock Blasting",
    icon: Bomb,
    match: (r) =>
      r.service.toLowerCase().includes("demolition") ||
      r.service.toLowerCase().includes("blasting"),
  },
  {
    name: "Rubble Removal",
    icon: Recycle,
    match: (r) => r.service.toLowerCase().includes("rubble"),
  },
  {
    name: "Plant Hire",
    icon: Construction,
    match: (r) =>
      r.service.toLowerCase().includes("hire") ||
      r.service.toLowerCase().includes("tlb") ||
      r.service.toLowerCase().includes("excavator") ||
      r.service.toLowerCase().includes("tipper"),
  },
  {
    name: "CCTV Installation",
    icon: Camera,
    match: (r) => r.service.toLowerCase().includes("cctv"),
  },
  {
    name: "Roller Shutter, Gates & Electrical",
    icon: DoorClosed,
    match: (r) =>
      r.service.toLowerCase().includes("shutter") ||
      r.service.toLowerCase().includes("gate") ||
      r.service.toLowerCase().includes("electrical"),
  },
];

/* ---------- Availability demo data ---------- */
const fleet = [
  { name: "TLB (Tractor-Loader-Backhoe)", status: "available", note: "2 units · with operator" },
  { name: "20-Ton Excavator", status: "on-site", note: "Sandton basement · returns Fri" },
  { name: "Tipper Truck (10m³)", status: "available", note: "1 unit · fuelled & ready" },
  { name: "Mini Excavator (1.7T)", status: "available", note: "1 unit · tight-access jobs" },
  { name: "Bakkie (light load)", status: "booked", note: "Out until Mon — bookings open" },
  { name: "Tipper Truck (6m³)", status: "on-site", note: "Soweto clearance · returns Sat" },
] as const;

const statusStyles: Record<string, { label: string; className: string; dot: string }> = {
  available: {
    label: "Available Now",
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900",
    dot: "bg-emerald-500",
  },
  "on-site": {
    label: "On Site",
    className:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900",
    dot: "bg-amber-500",
  },
  booked: {
    label: "Booked",
    className:
      "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800",
    dot: "bg-zinc-400",
  },
};

/* ---------- Bundled packages ---------- */
const packages = [
  {
    name: "Demolition + Removal Bundle",
    save: "Save 10%",
    price: "from R1,250 / load",
    description:
      "Demolish and clear in one booking — structure break-up plus truck-load rubble removal on the same visit. No double mobilisation fees.",
    features: [
      "Structural demolition & break-up",
      "Same-day tipper truck removal",
      "Labour, loading & disposal included",
      "Disposal slips provided",
      "Free site visit in Greater JHB",
    ],
    popular: false,
  },
  {
    name: "Site Security Bundle",
    save: "Save 12%",
    price: "from R21,500",
    description:
      "Secure your site end-to-end — CCTV system plus an automated sliding gate and electrical wiring, all installed by one team.",
    features: [
      "8-camera HD CCTV + NVR",
      "Automated sliding gate + 2 remotes",
      "Certified electrical wiring (CoC)",
      "Mobile app remote viewing",
      "Single point of contact",
    ],
    popular: true,
  },
  {
    name: "Plant Hire Weekly",
    save: "Save 15%",
    price: "from R4,950 / week",
    description:
      "Lock in a TLB or mini-excavator for the full week and pay less per day. Includes operator, daily checks, and on-site support.",
    features: [
      "5 working days of machine hire",
      "Qualified operator included",
      "Daily machine checks",
      "On-site support & rapid swap-out",
      "Priority booking for follow-on weeks",
    ],
    popular: false,
  },
];

export const metadata = {
  title: "Rates & Availability | Libmarc Projects",
  description:
    "Transparent ZAR rates for demolition, rock blasting, rubble removal, plant hire, CCTV installation, roller shutter doors and automatic gates in Johannesburg. Check machine availability and bundled packages.",
};

export default function RatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Rates & <span className="text-primary">Availability</span>
          </>
        }
        description="Transparent ZAR rates across every Libmarc service — demolition, rock blasting, rubble removal, plant hire, CCTV and gate installation. No hidden fees, same-business-day quotes, and live machine availability for the plant hire fleet."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rates & Availability" },
        ]}
        image="/images/services/plant-hire.png"
      />

      {/* ===================== RATES BY CATEGORY ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Rate Card"
            title={
              <>
                Transparent pricing in <span className="text-primary">Rand</span>
              </>
            }
            description="All prices are starting rates in South African Rand. Site-specific quotes are issued after a free site visit. Popular services are marked with a star."
            className="mb-12"
          />

          <div className="space-y-12">
            {rateGroups.map((group, gi) => {
              const items = rates.filter(group.match);
              if (items.length === 0) return null;
              return (
                <Reveal key={group.name} delay={gi * 80}>
                  <div className="border border-border bg-card">
                    {/* Group header */}
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-foreground text-background">
                      <span className="flex size-9 items-center justify-center bg-primary text-primary-foreground">
                        <group.icon className="size-5" />
                      </span>
                      <h3 className="font-display text-lg lg:text-xl font-bold uppercase tracking-wide">
                        {group.name}
                      </h3>
                      <span className="ml-auto text-xs font-bold uppercase tracking-wider text-background/60">
                        {items.length} {items.length === 1 ? "rate" : "rates"}
                      </span>
                    </div>

                    {/* Desktop table */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                            <th className="px-5 py-3 font-bold">Service</th>
                            <th className="px-5 py-3 font-bold">Unit</th>
                            <th className="px-5 py-3 font-bold">Price (ZAR)</th>
                            <th className="px-5 py-3 font-bold">Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {items.map((r) => (
                            <tr
                              key={r.service}
                              className="border-b border-border last:border-0 hover:bg-muted/40 transition-colors"
                            >
                              <td className="px-5 py-4 font-semibold text-foreground">
                                <div className="flex items-center gap-2">
                                  {r.service}
                                  {r.popular && (
                                    <Badge className="bg-primary text-primary-foreground border-0 text-[10px] gap-1">
                                      <Star className="size-3 fill-current" />
                                      Popular
                                    </Badge>
                                  )}
                                </div>
                              </td>
                              <td className="px-5 py-4 text-muted-foreground">{r.unit}</td>
                              <td className="px-5 py-4">
                                <span className="font-display text-lg font-bold text-primary">
                                  {r.price}
                                </span>
                              </td>
                              <td className="px-5 py-4 text-muted-foreground text-xs">
                                {r.note}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile cards */}
                    <div className="md:hidden divide-y divide-border">
                      {items.map((r) => (
                        <div key={r.service} className="p-5">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div>
                              <div className="font-semibold text-foreground flex items-center gap-2">
                                {r.service}
                                {r.popular && (
                                  <Star className="size-3.5 text-primary fill-primary" />
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {r.unit}
                              </div>
                            </div>
                            <span className="font-display text-base font-bold text-primary whitespace-nowrap">
                              {r.price}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {r.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Rate notes */}
          <Reveal delay={150}>
            <div className="mt-12 border-2 border-primary/30 bg-primary/5 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex size-10 items-center justify-center bg-primary text-primary-foreground">
                  <Info className="size-5" />
                </span>
                <h3 className="font-display text-xl lg:text-2xl font-bold">Good to know</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {rateNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== AVAILABILITY ===================== */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Live Fleet Status"
            title={
              <>
                Check machine <span className="text-primary">availability</span>
              </>
            }
            description="Demo availability for our plant hire fleet across Gauteng. For real-time bookings, call or WhatsApp us — most machines can be on your site within 24 hours."
            align="center"
            className="mb-12"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fleet.map((m, i) => {
              const s = statusStyles[m.status];
              return (
                <Reveal key={m.name} delay={(i % 3) * 100}>
                  <div className="h-full bg-card border border-border p-5 hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="flex size-10 items-center justify-center bg-foreground text-background">
                        <Wrench className="size-5 text-primary" />
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider border",
                          s.className
                        )}
                      >
                        <span className={cn("size-1.5 rounded-full", s.dot)} />
                        {s.label}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold leading-tight">{m.name}</h4>
                    <p className="mt-1.5 text-xs text-muted-foreground">{m.note}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 text-base"
              >
                <Link href="/contact">
                  Book a Machine
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <a
                href={`tel:${company.phone1Intl.replace(/[^+\d]/g, "")}`}
                className="inline-flex h-14 items-center justify-center gap-2 border border-border px-6 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                <PhoneCall className="size-4" />
                {company.phone1}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== BUNDLED PACKAGES ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Bundled Packages"
            title={
              <>
                Save more when you <span className="text-primary">bundle</span>
              </>
            }
            description="Combine services and pay less. Our most popular bundles combine demolition with removal, security installs, and weekly plant hire."
            align="center"
            className="mb-12"
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 100}>
                <div
                  className={cn(
                    "relative h-full bg-card border p-6 lg:p-7 flex flex-col",
                    pkg.popular
                      ? "border-primary border-2 shadow-xl lg:scale-[1.03]"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground border-0 px-4 py-1 font-bold uppercase tracking-wider gap-1">
                        <Star className="size-3.5 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <span className="flex size-10 items-center justify-center bg-foreground text-background">
                      <Package className="size-5 text-primary" />
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">
                      {pkg.save}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold leading-tight">{pkg.name}</h3>
                  <div className="mt-3 font-display text-3xl font-bold text-foreground">
                    {pkg.price}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={cn(
                      "mt-6 font-bold uppercase tracking-wide h-12",
                      pkg.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    )}
                  >
                    <Link href="/contact">
                      Get Quote
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quick reassurance row */}
          <Reveal delay={200}>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Clock, label: "Same-day quotes" },
                { icon: ShieldCheck, label: "R5M public liability" },
                { icon: CheckCircle2, label: "COID registered" },
                { icon: Zap, label: "Free JHB site visit" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 border border-border bg-card px-4 py-3"
                >
                  <item.icon className="size-5 text-primary shrink-0" />
                  <span className="text-sm font-bold uppercase tracking-wide text-foreground/90">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== STATS BAND ===================== */}
      <section className="relative bg-foreground text-background">
        <div className="hazard-stripe h-1.5 w-full" />
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <SectionHeading
            light
            align="center"
            eyebrow="Why Libmarc"
            title={
              <>
                Pricing you can <span className="text-primary">trust</span>
              </>
            }
            description="Same rate on the quote, on the invoice, and on the final bill — every time."
            className="mb-12"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              { icon: Truck, value: 40, suffix: "+", label: "Machines in Fleet", prefix: "" },
              { icon: Clock, value: 24, suffix: "h", label: "Quote Turnaround", prefix: "" },
              {
                icon: ShieldCheck,
                value: 5,
                suffix: "M",
                label: "Liability Cover",
                prefix: "R",
              },
              { icon: CheckCircle2, value: 850, suffix: "+", label: "Projects Billed", prefix: "" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} className="text-center">
                <s.icon className="size-8 text-primary mx-auto mb-3" />
                <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-primary">
                  {s.prefix && <span className="text-primary">{s.prefix}</span>}
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs lg:text-sm font-bold uppercase tracking-wider text-background/70">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="hazard-stripe h-1.5 w-full" />
      </section>

      <CTABand
        title="Need a custom rate?"
        description="Tell us about your scope and we'll send a transparent, itemised quote in ZAR — usually the same business day."
      />
    </>
  );
}
