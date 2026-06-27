import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Building2,
  Briefcase,
  Newspaper,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SectionHeading,
  PageHero,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { ContactForm } from "@/components/site/contact-form";
import { company, faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | BUILDCORE",
  description:
    "Get in touch with BUILDCORE — call, email, or send us a project brief. Oakland HQ serving the greater Bay Area. Response within one business day.",
};

const departments = [
  {
    name: "New Projects",
    email: "projects@buildcore.co",
    icon: Building2,
    detail: "Quotes, RFPs, and project inquiries",
  },
  {
    name: "Careers",
    email: "careers@buildcore.co",
    icon: Briefcase,
    detail: "Jobs, apprenticeships, and unions",
  },
  {
    name: "Media & Press",
    email: "press@buildcore.co",
    icon: Newspaper,
    detail: "Interviews, press kits, awards",
  },
  {
    name: "Subcontractor Bids",
    email: "bids@buildcore.co",
    icon: FileText,
    detail: "Prequalification and bid room access",
  },
];

const socials = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "YouTube", href: "#", icon: Youtube },
];

// Pick a few "Getting Started" FAQs for the contact page snippet.
const contactFaqs = faqs
  .filter((f) => f.category === "Getting Started")
  .slice(0, 4);

export default function ContactPage() {
  const telHref = `tel:${company.phone.replace(/[^+\d]/g, "")}`;
  const mailHref = `mailto:${company.email}`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    company.address
  )}&output=embed`;

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Together"
        description="Tell us about your project and a pre-construction lead will respond within one business day. Prefer to talk? Call the office — a real human picks up."
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
                    Talk to a{" "}
                    <span className="text-primary">builder</span>, not a bot.
                  </>
                }
                description="Our Oakland headquarters anchors our Bay Area operations. Stop by, call, or email — we keep an open door."
              />

              {/* Quick contact cards */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <a
                  href={telHref}
                  className="group flex items-start gap-3 border border-border p-4 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="inline-flex size-10 items-center justify-center bg-foreground text-primary shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Call
                    </div>
                    <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {company.phone}
                    </div>
                  </div>
                </a>
                <a
                  href={mailHref}
                  className="group flex items-start gap-3 border border-border p-4 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="inline-flex size-10 items-center justify-center bg-foreground text-primary shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Email
                    </div>
                    <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {company.email}
                    </div>
                  </div>
                </a>
              </div>

              {/* Address + hours */}
              <div className="mt-6 border border-border p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                      Headquarters
                    </div>
                    <div className="text-foreground leading-relaxed">
                      {company.address}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {company.license}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                      Office Hours
                    </div>
                    <div className="text-foreground">{company.hours}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Sat by appointment · Sun closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-6 relative aspect-[16/10] border border-border overflow-hidden bg-muted">
                <iframe
                  title="BUILDCORE headquarters map"
                  src={mapsEmbedUrl}
                  className="absolute inset-0 h-full w-full grayscale-[0.3]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Address pin overlay */}
                <div className="pointer-events-none absolute bottom-3 left-3 right-3 bg-background/95 backdrop-blur border border-border px-4 py-3 flex items-center gap-2.5">
                  <MapPin className="size-4.5 text-primary shrink-0" />
                  <span className="text-xs text-foreground font-medium truncate">
                    {company.address}
                  </span>
                </div>
              </div>

              {/* Departments */}
              <div className="mt-8">
                <h3 className="font-display text-lg font-bold mb-3">
                  Department Directory
                </h3>
                <div className="space-y-2.5">
                  {departments.map((d) => (
                    <a
                      key={d.name}
                      href={`mailto:${d.email}`}
                      className="group flex items-center gap-3 border border-border p-3.5 hover:border-primary hover:bg-accent/30 transition-all"
                    >
                      <div className="inline-flex size-9 items-center justify-center bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                        <d.icon className="size-4.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-foreground leading-tight">
                          {d.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {d.detail}
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-primary hidden sm:block truncate">
                        {d.email}
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8">
                <h3 className="font-display text-lg font-bold mb-3">Follow Us</h3>
                <div className="flex flex-wrap gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      aria-label={s.name}
                      className="inline-flex size-11 items-center justify-center border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                      <s.icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------- RIGHT: Form ---------- */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <div className="mb-6">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="h-0.5 w-8 bg-primary" />
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        Project Inquiry
                      </span>
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
                      Send us a{" "}
                      <span className="text-primary">project brief</span>
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                      The more detail you share — location, scope, budget, target
                      dates — the faster we can give you a useful answer.
                    </p>
                  </div>
                  <ContactForm />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ SNIPPET ===================== */}
      <section className="bg-secondary/60 border-y border-border py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Quick Answers"
                title={
                  <>
                    Frequently asked{" "}
                    <span className="text-primary">before</span> you call
                  </>
                }
                description="A few of the most common questions we get during that first conversation. For the full list, see our FAQ page."
              />
              <Button
                asChild
                variant="outline"
                className="mt-6 rounded-none font-bold uppercase tracking-wide"
              >
                <Link href="/faq">
                  View All FAQs
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:col-span-7">
              <Accordion type="single" collapsible className="w-full">
                {contactFaqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${i}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="text-left font-display text-base lg:text-lg font-bold hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand
        title="Prefer to talk it through?"
        description="Call the office during business hours or stop by our Oakland headquarters. We will make time for a real conversation about your project."
      />
    </>
  );
}
