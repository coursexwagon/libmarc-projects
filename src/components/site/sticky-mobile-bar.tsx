"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { company } from "@/lib/site-data";

/**
 * StickyMobileBar — fixed bottom CTA bar, mobile only.
 *
 * Shows Call / WhatsApp / Quote buttons. Appears after the user scrolls
 * past ~500px (so it doesn't cover the hero CTAs). Respects iOS safe area.
 *
 * Desktop uses the floating WhatsApp widget instead (see WhatsAppFloat),
 * so this bar is `lg:hidden`.
 */
export function StickyMobileBar() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past ~60% of a typical mobile viewport
      setVisible(window.scrollY > 480);
    };
    onScroll(); // run once on mount in case page loads scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Spacer — not needed since bar is fixed, but we add bottom padding
          to the body via a global rule so content isn't hidden. See layout. */}
      <div
        aria-hidden="true"
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="hazard-stripe h-1 w-full" />
        <div className="grid grid-cols-3 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.15)]">
          {/* Call */}
          <a
            href={`tel:${company.phone1Intl}`}
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-foreground active:bg-muted transition-colors min-h-[52px]"
            aria-label={`Call ${company.phone1}`}
          >
            <Phone className="size-5 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Call
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${company.whatsapp1}?text=${encodeURIComponent(
              "Hi Libmarc Projects, I'd like a quote."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-foreground active:bg-muted transition-colors min-h-[52px] border-x border-border"
            aria-label="WhatsApp us"
          >
            <MessageCircle className="size-5 text-[#25D366]" />
            <span className="text-[10px] font-bold uppercase tracking-wider">
              WhatsApp
            </span>
          </a>

          {/* Quote */}
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center gap-1 py-2.5 bg-primary text-primary-foreground active:bg-primary/90 transition-colors min-h-[52px]"
            aria-label="Get a quote"
          >
            <FileText className="size-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Get Quote
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
