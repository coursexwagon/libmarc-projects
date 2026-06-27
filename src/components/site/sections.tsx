"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2.5 mb-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-0.5 w-8 bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight",
          light ? "text-background" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base lg:text-lg leading-relaxed",
            light ? "text-background/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------- Breadcrumb ---------- */
export function Breadcrumbs({
  items,
  light = false,
}: {
  items: { label: string; href?: string }[];
  light?: boolean;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm",
        light ? "text-background/70" : "text-muted-foreground"
      )}
    >
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "hover:text-primary transition-colors",
                light && "text-background/80"
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span className={cn(light ? "text-background" : "text-foreground", "font-medium")}>
              {item.label}
            </span>
          )}
          {i < items.length - 1 && (
            <ChevronRight className="size-3.5 opacity-60" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

/* ---------- Inner page hero ---------- */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/85 to-foreground/60" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} light />
          </div>
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-0.5 w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </span>
            </div>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.02] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-background/75 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom hazard stripe */}
      <div className="hazard-stripe h-1.5 w-full" />
    </section>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * value));
              if (progress < 1) requestAnimationFrame(animate);
              else setCount(value);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------- CTA band ---------- */
export function CTABand({
  title = "Let's build something that lasts.",
  description = "Tell us about your project and receive a transparent, no-obligation quote within one business day.",
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-foreground text-background", className)}>
      <div className="hazard-stripe h-1.5 w-full" />
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-0.5 w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Start Your Project
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
              {title}
            </h2>
            <p className="mt-4 text-background/70 text-base lg:text-lg max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 text-base"
            >
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <a
              href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex h-14 items-center justify-center border border-background/20 px-6 text-sm font-bold uppercase tracking-wide text-background hover:bg-background/10 transition-colors"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reveal animation wrapper ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
