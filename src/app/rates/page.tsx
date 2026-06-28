import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Truck,
  Camera,
  DoorClosed,
  Bomb,
  Recycle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rates & Availability | Libmarc Projects",
  description:
    "Starting rates for demolition, rubble removal, plant hire, CCTV, and gate installations in Johannesburg. Call for a written quote.",
};

const rateGroups = [
  {
    icon: Bomb,
    title: "Demolition & Rock Blasting",
    rates: [
      { item: "House demolition (single storey)", price: "From R15,000" },
      { item: "House demolition (double storey)", price: "From R28,000" },
      { item: "Rock blasting", price: "From R8,000/day" },
      { item: "Wall breaking", price: "From R1,500/day" },
    ],
  },
  {
    icon: Recycle,
    title: "Rubble Removal",
    rates: [
      { item: "Skip bin (4m³)", price: "From R2,500" },
      { item: "Skip bin (8m³)", price: "From R4,000" },
      { item: "Truck load (tipper)", price: "From R3,500" },
    ],
  },
  {
    icon: Truck,
    title: "Plant Hire",
    rates: [
      { item: "TLB (with operator)", price: "From R1,800/day" },
      { item: "Excavator 14-ton (with operator)", price: "From R3,500/day" },
      { item: "Bobcat (with operator)", price: "From R1,500/day" },
      { item: "Grader (with operator)", price: "From R4,500/day" },
      { item: "Roller / Compactor (with operator)", price: "From R2,500/day" },
    ],
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    rates: [
      { item: "4-camera system (supply + install)", price: "From R8,500" },
      { item: "8-camera system (supply + install)", price: "From R14,000" },
      { item: "Additional camera", price: "From R1,800" },
    ],
  },
  {
    icon: DoorClosed,
    title: "Roller Shutters & Gates",
    rates: [
      { item: "Roller shutter door (manual)", price: "From R6,500" },
      { item: "Roller shutter door (motorised)", price: "From R12,000" },
      { item: "Gate motor installation", price: "From R4,500" },
      { item: "Automatic gate (supply + install)", price: "From R18,000" },
    ],
  },
];

export default function RatesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/real/bobcat-hire.jpg"
            alt="Libmarc bobcat on site"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Pricing
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Starting rates.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Ballpark figures to help you budget. Every job gets a written
              quote before we start.
            </p>
          </div>
        </div>
      </section>

      {/* RATES GRID */}
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="space-y-12">
          {rateGroups.map((group) => (
            <div
              key={group.title}
              className="border border-border p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <group.icon className="size-6 text-primary" />
                <h2 className="font-display text-2xl font-bold">
                  {group.title}
                </h2>
              </div>
              <div className="space-y-3">
                {group.rates.map((rate) => (
                  <div
                    key={rate.item}
                    className="flex items-center justify-between gap-4 border-b border-border/50 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-muted-foreground">{rate.item}</span>
                    <span className="font-display font-bold text-primary whitespace-nowrap">
                      {rate.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-center">
          Prices are starting estimates and may vary based on site conditions,
          access, and job complexity. All quotes are written and confirmed
          before work begins.
        </p>
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
