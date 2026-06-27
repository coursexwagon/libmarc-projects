"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, HardHat, ChevronDown } from "lucide-react";
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
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="size-3.5 text-primary" />
              {company.phone}
            </span>
            <span className="text-background/70">{company.hours}</span>
            <span className="text-background/70">{company.license}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-background/70">Licensed • Bonded • Insured</span>
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-semibold">Now Hiring</span>
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
              <span className="font-display text-xl lg:text-2xl font-bold tracking-tight">
                BUILD<span className="text-primary">CORE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium hidden sm:block">
                Construction & Engineering
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
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
                    "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    active ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {item.title}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="lg"
              className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
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
              <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-border px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex size-9 items-center justify-center bg-primary text-primary-foreground">
                        <HardHat className="size-5" />
                      </div>
                      <span className="font-display text-lg font-bold">
                        BUILD<span className="text-primary">CORE</span>
                      </span>
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
                            "flex items-center justify-between rounded-md px-3 py-3 text-base font-medium transition-colors",
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
                    <a
                      href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                      className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary"
                    >
                      <Phone className="size-4" />
                      {company.phone}
                    </a>
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
