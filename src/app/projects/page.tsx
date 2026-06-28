"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  Hammer,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects, company } from "@/lib/site-data";

const categories = [
  { label: "All", icon: Building2 },
  { label: "Demolition", icon: Hammer },
  { label: "Plant Hire", icon: Truck },
  { label: "Security", icon: ShieldCheck },
] as const;

type Category = (typeof categories)[number]["label"];

const projectImages: Record<string, string> = {
  "yeoville-demolition": "/images/real/demolition.jpg",
  "rosebank-rock-blasting": "/images/real/rock-blasting.jpg",
  "sandton-rubble-removal": "/images/real/tipper-truck.jpg",
  "fourways-cctv": "/images/real/cctv-install.jpg",
  "randburg-gate-motor": "/images/real/gate-motor.jpg",
  "pretoria-plant-hire": "/images/real/tlb-hire.jpg",
};

export default function ProjectsPage() {
  const [active, setActive] = React.useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/real/demolition.jpg"
            alt="Libmarc demolition project"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Our work
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Projects &amp; gallery.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Browse our recent work across Johannesburg and Gauteng.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER + GALLERY */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                Portfolio
              </p>
              <h2 className="font-display text-3xl lg:text-5xl font-bold">
                Recent projects.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActive(cat.label)}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors",
                    active === cat.label
                      ? "bg-foreground text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  <cat.icon className="size-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project) => (
              <div
                key={project.slug}
                className="group relative aspect-[4/3] overflow-hidden bg-muted"
              >
                <Image
                  src={projectImages[project.slug] || "/images/real/demolition.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                    <MapPin className="size-3" />
                    {project.location} · {project.year}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2">
                    {project.summary}
                  </p>
                </div>
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
              Your project next?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-xl">
              Call or WhatsApp for a free quote.
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
