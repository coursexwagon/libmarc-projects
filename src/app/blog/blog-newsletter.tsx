"use client";

import * as React from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/site/sections";

export function BlogNewsletter() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Visual-only subscribe (no backend in scope)
    setDone(true);
    setEmail("");
  }

  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="hazard-stripe h-1.5 w-full" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container relative mx-auto px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-5 inline-flex size-14 items-center justify-center bg-primary text-primary-foreground">
              <Mail className="size-7" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="h-0.5 w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Newsletter
              </span>
              <span className="h-0.5 w-8 bg-primary" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
              Subscribe to the BUILDCORE newsletter
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 text-base lg:text-lg text-background/70 leading-relaxed">
              Get our latest articles, project case studies, and industry
              insights delivered straight to your inbox. No spam — just
              build-tested thinking, once a month.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8">
              {done ? (
                <div className="inline-flex items-center gap-3 border border-primary/40 bg-primary/10 px-6 py-4 text-sm font-bold uppercase tracking-wide">
                  <CheckCircle2 className="size-5 text-primary" />
                  You&apos;re subscribed — welcome aboard.
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
                >
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="h-14 border-background/20 bg-background/5 text-background placeholder:text-background/50 focus-visible:border-primary focus-visible:ring-primary"
                  />
                  <Button
                    type="submit"
                    className="h-14 shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
                  >
                    Subscribe
                    <ArrowRight className="size-4" />
                  </Button>
                </form>
              )}
              <p className="mt-3 text-xs text-background/50">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
