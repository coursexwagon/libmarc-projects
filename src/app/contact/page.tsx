import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook,
  Clock3,
  ShieldCheck,
  BadgeCheck,
  MapPinned,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SectionHeading,
  PageHero,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { ContactForm } from "@/components/site/contact-form";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Libmarc Projects",
  description:
    "Get a free quote from Libmarc Projects. Call 078 150 0069 or 070 359 9092, WhatsApp us, or send us a project enquiry. Based in Yeoville, Johannesburg — serving all of Gauteng.",
};

// Google Maps embed centred on the depot address (no API key required).
const depotMapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  company.address
)}&output=embed`;

const socials = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

// Trust badges under the form.
const trustBadges = [
  {
    title: "Same-Day Quotes",
    detail: "Most enquiries quoted same business day.",
    icon: Clock3,
  },
  {
    title: "Free Site Visit",
    detail: "On-site assessment in Greater JHB.",
    icon: MapPinned,
  },
  {
    title: "Fully Insured",
    detail: "R5M public liability on every job.",
    icon: ShieldCheck,
  },
  {
    title: "All of Gauteng",
    detail: "CBD to Sandton to Soweto.",
    icon: BadgeCheck,
  },
];

export default function ContactPage() {
  const tel1Href = `tel:${company.phone1Intl}`;
  const tel2Href = `tel:${company.phone2Intl}`;
  const wa1Href = `https://wa.me/${company.whatsapp1}`;
  const wa2Href = `https://wa.me/${company.whatsapp2}`;
  const mailHref = `mailto:${company.email}`;

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow="Contact"
        title="Get a Free Quote Today"
        description="Tell us about your project and we'll come back to you with a quote the same business day. Prefer to talk? Call or WhatsApp — a real person picks up."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image="/images/cta-bg.png"
      />

      {/* ===================== CONTACT GRID ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* ---------- LEFT: Contact info ---------- */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Reach Us"
                title={
                  <>
                    Talk to the{" "}
                    <span className="text-primary">Libmarc</span> team
                  </>
                }
                description="Two phone numbers, two WhatsApp lines, one email. However you prefer to reach out — we respond to enquiries usually within 2 hours during business hours."
              />

              {/* Response-time notice — honest small-business touch */}
              <div className="mt-6 flex items-start gap-3 border-l-2 border-primary bg-muted/40 px-4 py-3">
                <Clock3 className="size-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/90 leading-relaxed">
                  <span className="font-semibold">Response time:</span>{" "}
                  {company.responseWindow}. Outside business hours we reply the
                  next morning.
                </p>
              </div>

              {/* Phone numbers — clickable tel: cards */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <a
                  href={tel1Href}
                  className="group flex items-start gap-3 border border-border p-4 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="inline-flex size-10 items-center justify-center bg-foreground text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Call — Primary
                    </div>
                    <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {company.phone1}
                    </div>
                  </div>
                </a>
                <a
                  href={tel2Href}
                  className="group flex items-start gap-3 border border-border p-4 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="inline-flex size-10 items-center justify-center bg-foreground text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Call — Secondary
                    </div>
                    <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {company.phone2}
                    </div>
                  </div>
                </a>
              </div>

              {/* WhatsApp numbers — green-bordered cards */}
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <a
                  href={wa1Href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 border-2 border-green-600 p-4 hover:bg-green-50 transition-all"
                >
                  <div className="inline-flex size-10 items-center justify-center bg-green-600 text-white shrink-0">
                    <MessageCircle className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-green-700">
                      WhatsApp 1
                    </div>
                    <div className="font-display font-bold text-foreground group-hover:text-green-700 transition-colors truncate">
                      {company.phone1}
                    </div>
                  </div>
                </a>
                <a
                  href={wa2Href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 border-2 border-green-600 p-4 hover:bg-green-50 transition-all"
                >
                  <div className="inline-flex size-10 items-center justify-center bg-green-600 text-white shrink-0">
                    <MessageCircle className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-green-700">
                      WhatsApp 2
                    </div>
                    <div className="font-display font-bold text-foreground group-hover:text-green-700 transition-colors truncate">
                      {company.phone2}
                    </div>
                  </div>
                </a>
              </div>

              {/* Email card */}
              <a
                href={mailHref}
                className="mt-4 group flex items-start gap-3 border border-border p-4 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="inline-flex size-10 items-center justify-center bg-foreground text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </div>
                  <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors break-all">
                    {company.email}
                  </div>
                </div>
              </a>

              {/* Address card */}
              <div className="mt-4 border border-border p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                      Depot Address
                    </div>
                    <div className="text-foreground leading-relaxed">
                      {company.address}
                    </div>
                  </div>
                </div>
                {/* Map embed */}
                <div className="mt-4 relative h-48 border border-border overflow-hidden bg-muted">
                  <iframe
                    title="Libmarc Projects depot — Yeoville, Johannesburg"
                    src={depotMapEmbed}
                    className="absolute inset-0 h-full w-full grayscale"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Office hours */}
              <div className="mt-4 border border-border p-6">
                <div className="flex items-start gap-3">
                  <Clock className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                      Office Hours
                    </div>
                    <div className="text-foreground">{company.hours}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Sun closed · Emergency call-outs by arrangement
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="inline-flex size-11 items-center justify-center border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                      <s.icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------- RIGHT: Quote form ---------- */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <div className="mb-6">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="h-0.5 w-8 bg-primary" />
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        Quote Request
                      </span>
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
                      Send us a{" "}
                      <span className="text-primary">quote request</span>
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                      Share a few details about your project and site. The more
                      you tell us, the faster we can give you a useful quote —
                      usually same business day.
                    </p>
                  </div>

                  <ContactForm />

                  {/* Trust badges */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    {trustBadges.map((b) => (
                      <div
                        key={b.title}
                        className="flex items-start gap-3 border border-border p-4 hover:border-primary transition-colors"
                      >
                        <div className="inline-flex size-9 items-center justify-center bg-foreground text-primary shrink-0">
                          <b.icon className="size-4.5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-foreground leading-tight">
                            {b.title}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {b.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand
        title="Prefer to talk it through?"
        description="Call or WhatsApp us directly — both lines are open during business hours. For urgent jobs across Gauteng we'll do our best to come out the same day."
      />
    </>
  );
}
