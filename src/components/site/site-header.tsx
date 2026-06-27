"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, HardHat, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navItems, company } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm border-b border-border"
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
              <Phone className="size-3.5 text-primary" />
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
              <MessageCircle className="size-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex size-10 lg:size-11 items-center justify-center bg-primary text-primary-foreground">
              <HardHat className="size-6" strokeWidth={2.2} />
              <span className="absolute -bottom-0.5 -right-0.5 size-2 bg-foreground" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg lg:text-xl font-bold tracking-tight">
                LIBMARC
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                Projects · Johannesburg
              </span>
            </div>
          </Link>

          {/* Desktop nav — compact for 13 items */}
          <nav className="hidden xl:flex items-center gap-0">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-2.5 py-2 text-[13px] font-medium transition-colors hover:text-primary whitespace-nowrap",
                    active ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {item.title}
                  {active && (
                    <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="lg"
              className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide text-sm"
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
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[360px] p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-border px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex size-9 items-center justify-center bg-primary text-primary-foreground">
                        <HardHat className="size-5" />
                      </div>
                      <div className="flex flex-col leading-none">
                        <span className="font-display text-lg font-bold">LIBMARC</span>
                        <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                          Projects · JHB
                        </span>
                      </div>
                    </div>
                  </div>
                  <nav className="flex-1 overflow-y-auto px-3 py-4">
                    {navItems.map((item) => {
                      const active =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2.5 text-[15px] font-medium transition-colors",
                            active
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-accent"
                          )}
                        >
                          {item.title}
                          <ChevronDown className="size-4 -rotate-90 opacity-50" />
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
                        <Phone className="size-3.5" />
                        {company.phone1}
                      </a>
                      <a
                        href={`https://wa.me/${company.whatsapp1}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-1.5 border border-border px-3 py-2.5 text-xs font-semibold hover:border-primary hover:text-primary"
                      >
                        <MessageCircle className="size-3.5" />
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
