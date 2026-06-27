"use client";

import * as React from "react";
import Link from "next/link";
import { Search, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/site/sections";
import { faqs, company } from "@/lib/site-data";

const categoryOrder = [
  "Getting Started",
  "Pricing & Contracts",
  "Process & Timeline",
  "Safety & Compliance",
  "Sustainability",
];

export function FaqContent() {
  const [query, setQuery] = React.useState("");

  const grouped = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return categoryOrder
      .map((cat) => {
        const items = faqs.filter((f) => {
          if (f.category !== cat) return false;
          if (!q) return true;
          return (
            f.question.toLowerCase().includes(q) ||
            f.answer.toLowerCase().includes(q)
          );
        });
        return { category: cat, items };
      })
      .filter((g) => g.items.length > 0);
  }, [query]);

  const totalShown = grouped.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      {/* Search */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions... (e.g. warranty, safety, LEED)"
                  className="h-14 border-border bg-background pl-12 pr-12 text-base focus-visible:border-primary focus-visible:ring-primary"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {query
                  ? `Showing ${totalShown} ${
                      totalShown === 1 ? "result" : "results"
                    } for "${query}"`
                  : `Browse ${faqs.length} frequently asked questions across ${
                      categoryOrder.length
                    } categories`}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="bg-muted/30 pb-20 lg:pb-28">
        <div className="container mx-auto px-4">
          {grouped.length > 0 ? (
            <div className="mx-auto max-w-4xl space-y-12 lg:space-y-16">
              {grouped.map((group, gi) => (
                <Reveal key={group.category} delay={gi * 60}>
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                        {group.category}
                      </h2>
                      <span className="ml-auto text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        {group.items.length}{" "}
                        {group.items.length === 1 ? "question" : "questions"}
                      </span>
                    </div>
                    <Card className="overflow-hidden border-border bg-card p-0">
                      <CardContent className="p-0">
                        <Accordion type="single" collapsible className="px-6">
                          {group.items.map((f) => (
                            <AccordionItem
                              key={f.question}
                              value={f.question}
                              className="border-border"
                            >
                              <AccordionTrigger className="py-5 text-left font-display text-base font-bold tracking-tight hover:no-underline">
                                {f.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-sm md:text-base text-foreground/70 leading-relaxed">
                                {f.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl border border-dashed border-border bg-background p-12 text-center">
              <p className="font-display text-xl font-bold tracking-tight">
                No matching questions.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a different search term, or reach out to our team directly —
                we&apos;re happy to help.
              </p>
              <Button
                onClick={() => setQuery("")}
                variant="outline"
                className="mt-5 border-foreground/20 font-bold uppercase tracking-wide hover:border-primary hover:text-primary"
              >
                Clear search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Still have questions band */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="hazard-stripe h-1.5 w-full" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container relative mx-auto px-4 py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-2.5 mb-4">
                <span className="h-0.5 w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  We&apos;re Here to Help
                </span>
                <span className="h-0.5 w-8 bg-primary" />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                Still have questions?
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-base lg:text-lg text-background/70 leading-relaxed">
                Our team is ready to talk through your project, walk you through
                our process, and answer anything this page didn&apos;t cover.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
                <a
                  href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex h-14 items-center justify-center gap-2 border border-background/20 px-6 text-sm font-bold uppercase tracking-wide text-background transition-colors hover:bg-background/10"
                >
                  <Phone className="size-4 text-primary" />
                  {company.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quick contact options */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="mb-10 text-center">
              <div className="flex items-center justify-center gap-2.5 mb-3">
                <span className="h-0.5 w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Quick Contact
                </span>
                <span className="h-0.5 w-8 bg-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                Three Ways to Reach Us
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Call Us",
                lines: [company.phone, company.hours],
                href: `tel:${company.phone.replace(/[^+\d]/g, "")}`,
                cta: "Call now",
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: [company.email, "Replies within 1 business day"],
                href: `mailto:${company.email}`,
                cta: "Send email",
              },
              {
                icon: MapPin,
                title: "Visit Office",
                lines: [
                  "1840 Industrial Parkway",
                  "Suite 200, Oakland, CA 94621",
                ],
                href: "/contact",
                cta: "Get directions",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Card className="group h-full border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl">
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="mb-5 inline-flex size-14 items-center justify-center bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="size-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <div className="mt-2 space-y-0.5">
                      {item.lines.map((l) => (
                        <p
                          key={l}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {l}
                        </p>
                      ))}
                    </div>
                    <a
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:text-primary"
                    >
                      {item.cta}
                      <ArrowRight className="size-4" />
                    </a>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
