"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { navItems, company, services } from "@/lib/site-data";
import Image from "next/image";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-premium-sm border-b border-border"
          : "bg-background border-b border-transparent"
      )}
    >
      {/* Top utility bar */}
      <div className="hidden lg:block bg-foreground text-background">
        <div className="container mx-auto flex h-9 items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${company.phone1Intl}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Icons.phone className="size-3.5 text-primary" />
              {company.phone1}
            </a>
            <span className="text-background/40">/</span>
            <a
              href={`tel:${company.phone2Intl}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              {company.phone2}
            </a>
            <span className="text-background/40">|</span>
            <span className="text-background/70">{company.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-background/70">{company.addressShort}</span>
            <a
              href={`https://wa.me/${company.whatsapp1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary font-semibold hover:opacity-80"
            >
              <Icons.messageCircle className="size-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 lg:h-11 w-auto transition-all duration-300 group-hover:scale-[1.03]">
              <Image
                src="/images/real/libmarc-logo.png"
                alt="Libmarc Projects"
                width={200}
                height={112}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav — clean 8 items + Services dropdown */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : item.href === "/services"
                  ? pathname.startsWith("/services")
                  : pathname.startsWith(item.href);

              // Services dropdown
              if (item.children) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                        active ? "text-primary" : "text-foreground/80"
                      )}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-300",
                          servicesOpen && "rotate-180"
                        )}
                      />
                      {active && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary" />
                      )}
                    </Link>

                    {/* Mega dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[460px] animate-scale-in origin-top">
                        <div className="bg-background border border-border shadow-premium-xl overflow-hidden">
                          {/* Header strip */}
                          <div className="bg-foreground text-background px-5 py-3 flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                              Our Services
                            </span>
                            <Link
                              href="/services"
                              className="text-xs font-semibold text-background/70 hover:text-primary flex items-center gap-1"
                            >
                              View all
                              <ArrowRight className="size-3" />
                            </Link>
                          </div>
                          {/* Service items */}
                          <div className="p-2">
                            {item.children.map((child) => {
                              const childService = services.find(
                                (s) => s.slug === child.href.split("/").pop()
                              );
                              const Icon = childService?.icon;
                              const childActive = pathname === child.href;
                              if (Icon && typeof Icon === "function") {
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={cn(
                                      "flex items-start gap-3 p-3 rounded-md transition-colors group",
                                      childActive
                                        ? "bg-primary/10"
                                        : "hover:bg-accent"
                                    )}
                                  >
                                    <span
                                      className={cn(
                                        "flex size-9 items-center justify-center shrink-0 transition-colors rounded-sm",
                                        childActive
                                          ? "bg-primary text-primary-foreground"
                                          : "bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                                      )}
                                    >
                                      <Icon size={16} strokeWidth={2} />
                                    </span>
                                    <div className="flex-1 min-w-0">
                                      <div
                                        className={cn(
                                          "text-sm font-bold",
                                          childActive ? "text-primary" : "text-foreground"
                                        )}
                                      >
                                        {child.title}
                                      </div>
                                      {child.short && (
                                        <div className="text-xs text-muted-foreground mt-0.5">
                                          {child.short}
                                        </div>
                                      )}
                                    </div>
                                    <ArrowRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                                  </Link>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Regular nav item
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap group",
                    active ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {item.title}
                  <span className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary transition-all duration-300",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )} />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="lg"
              className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide text-sm shadow-primary-glow"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="xl:hidden"
                  aria-label="Open menu"
                >
                  <Icons.menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[360px] p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-border px-5 py-4">
                    <Link href="/" className="flex items-center gap-2">
                      <Image
                        src="/images/real/libmarc-logo.png"
                        alt="Libmarc Projects"
                        width={180}
                        height={60}
                        className="h-10 w-auto object-contain"
                      />
                    </Link>
                  </div>
                  <nav className="flex-1 overflow-y-auto px-3 py-4">
                    {navItems.map((item) => {
                      const active =
                        item.href === "/"
                          ? pathname === "/"
                          : item.href === "/services"
                          ? pathname.startsWith("/services")
                          : pathname.startsWith(item.href);

                      // Collapsible Services section
                      if (item.children) {
                        return (
                          <Collapsible
                            key={item.href}
                            open={mobileServicesOpen}
                            onOpenChange={setMobileServicesOpen}
                          >
                            <CollapsibleTrigger
                              className={cn(
                                "w-full flex items-center justify-between rounded-md px-3 py-2.5 text-[15px] font-medium transition-colors",
                                active
                                  ? "bg-primary/10 text-primary"
                                  : "hover:bg-accent"
                              )}
                            >
                              <span className="flex items-center gap-2">
                                {item.title}
                              </span>
                              <ChevronDown
                                className={cn(
                                  "size-4 transition-transform duration-300",
                                  mobileServicesOpen && "rotate-180"
                                )}
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <div className="ml-3 mt-1 border-l border-border pl-3 space-y-0.5">
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                                    pathname === item.href
                                      ? "bg-primary/10 text-primary font-semibold"
                                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                  )}
                                >
                                  All Services
                                  <ArrowRight className="size-3.5" />
                                </Link>
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={cn(
                                      "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                                      pathname === child.href
                                        ? "bg-primary/10 text-primary font-semibold"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                    )}
                                  >
                                    {child.title}
                                    <ArrowRight className="size-3.5 opacity-50" />
                                  </Link>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        );
                      }

                      // Regular mobile nav item
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2.5 text-[15px] font-medium transition-colors",
                            active ? "bg-primary/10 text-primary" : "hover:bg-accent"
                          )}
                        >
                          {item.title}
                          <ArrowRight className="size-4 opacity-40" />
                        </Link>
                      );
                    })}
                  </nav>
                  <div className="border-t border-border p-5 space-y-3">
                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/contact">Get a Free Quote</Link>
                    </Button>
                    <div className="flex gap-2">
                      <a
                        href={`tel:${company.phone1Intl}`}
                        className="flex flex-1 items-center justify-center gap-1.5 border border-border px-3 py-2.5 text-xs font-semibold hover:border-primary hover:text-primary"
                      >
                        <Icons.phone className="size-3.5" />
                        {company.phone1}
                      </a>
                      <a
                        href={`https://wa.me/${company.whatsapp1}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-1.5 border border-border px-3 py-2.5 text-xs font-semibold hover:border-primary hover:text-primary"
                      >
                        <Icons.messageCircle className="size-3.5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
