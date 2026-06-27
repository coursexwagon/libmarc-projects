"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Phone,
  X,
  HardHat,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";

/* ============ SCROLL PROGRESS BAR ============ */
export function ScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 pointer-events-none">
      <div
        className="scroll-progress h-full transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ============ FLOATING WHATSAPP WIDGET ============ */
export function WhatsAppFloat() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded panel */}
      {open && (
        <div className="w-72 bg-background border border-border shadow-premium-xl overflow-hidden animate-scale-in origin-bottom-right">
          {/* Header */}
          <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center bg-white/20 rounded-full">
                <MessageCircle className="size-5" />
              </div>
              <div>
                <div className="font-bold text-sm">Chat with Libmarc</div>
                <div className="text-xs text-white/80 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-white animate-pulse-slow" />
                  Online now
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-white/80 hover:text-white"
            >
              <X className="size-5" />
            </button>
          </div>
          {/* Body */}
          <div className="p-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              Hi there 👋 Choose a number to chat with us on WhatsApp:
            </p>
            <a
              href={`https://wa.me/${company.whatsapp1}?text=${encodeURIComponent(
                "Hi Libmarc Projects, I'd like a quote."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border p-3 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors group"
            >
              <div className="flex size-10 items-center justify-center bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle className="size-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold">{company.phone1}</div>
                <div className="text-xs text-muted-foreground">Primary number</div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
            </a>
            <a
              href={`https://wa.me/${company.whatsapp2}?text=${encodeURIComponent(
                "Hi Libmarc Projects, I'd like a quote."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border p-3 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors group"
            >
              <div className="flex size-10 items-center justify-center bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle className="size-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold">{company.phone2}</div>
                <div className="text-xs text-muted-foreground">Alternate number</div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
            </a>
            <a
              href={`tel:${company.phone1Intl}`}
              className="flex items-center justify-center gap-2 w-full bg-foreground text-background py-2.5 text-xs font-bold uppercase tracking-wide hover:bg-foreground/90 transition-colors"
            >
              <Phone className="size-3.5" />
              Or Call {company.phone1}
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="flex size-14 items-center justify-center bg-[#25D366] text-white rounded-full shadow-premium-xl hover:scale-110 transition-transform duration-300"
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <>
            <MessageCircle className="size-7" />
            <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground border-2 border-background">
              2
            </span>
          </>
        )}
      </button>
    </div>
  );
}

/* ============ MARQUEE (client logos / scrolling text) ============ */
export function Marquee({
  children,
  className,
  speed = "normal",
}: {
  children: React.ReactNode;
  className?: string;
  speed?: "normal" | "slow";
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex w-max">
        <div className={cn("flex", speed === "slow" ? "animate-marquee-slow" : "animate-marquee")}>
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

/* ============ SECTION HEADING (refined) ============ */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
  number,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
  number?: string;
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
            "flex items-center gap-3 mb-5",
            align === "center" && "justify-center"
          )}
        >
          {number && (
            <span className="font-display text-xs font-bold text-primary/60 tabular-nums">
              {number}
            </span>
          )}
          <span className="h-px w-10 bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.04] tracking-tight",
          light ? "text-background" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base lg:text-lg leading-relaxed text-pretty",
            light ? "text-background/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ============ BREADCRUMBS ============ */
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

/* ============ PAGE HERO (refined with decorative accents) ============ */
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
    <section className="relative overflow-hidden bg-foreground text-background grain">
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
        </div>
      )}
      {/* Layered gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/30" />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern-light opacity-[0.08]" />
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-40 h-40 hazard-stripe opacity-20 [clip-path:polygon(100%_0,0_0,100%_100%)]" />

      <div className="container relative mx-auto px-4 py-20 lg:py-28">
        {breadcrumbs && (
          <div className="mb-8 animate-fade-up">
            <Breadcrumbs items={breadcrumbs} light />
          </div>
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="flex items-center gap-3 mb-5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="h-px w-10 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </span>
            </div>
          )}
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.0] tracking-tight animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="mt-6 text-lg lg:text-xl text-background/75 leading-relaxed max-w-2xl text-pretty animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
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

/* ============ ANIMATED COUNTER ============ */
export function Counter({
  value,
  suffix = "",
  duration = 2000,
  prefix = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  prefix?: string;
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
              // easeOutExpo for premium feel
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
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
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

/* ============ CTA BAND (refined) ============ */
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
    <section className={cn("relative overflow-hidden bg-foreground text-background grain", className)}>
      <div className="hazard-stripe h-1.5 w-full" />
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-pattern-light opacity-[0.06]" />
      <div className="container relative mx-auto px-4 py-20 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Start Your Project
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.04] tracking-tight">
              {title}
            </h2>
            <p className="mt-5 text-background/70 text-base lg:text-lg max-w-2xl leading-relaxed text-pretty">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 text-base shadow-primary-glow hover:scale-[1.02] transition-transform"
            >
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <a
              href={`https://wa.me/${company.whatsapp1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 border border-background/20 px-6 text-sm font-bold uppercase tracking-wide text-background hover:bg-background/10 hover:border-primary/50 transition-all"
            >
              <MessageCircle className="size-5 text-primary" />
              WhatsApp {company.phone1}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ REVEAL (refined with better easing) ============ */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = React.useRef<HTMLElement>(null);
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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "var(--ease-out-expo)",
      }}
    >
      {children}
    </Tag>
  );
}
