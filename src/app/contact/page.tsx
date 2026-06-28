import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ContactForm } from "@/components/site/contact-form";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Libmarc Projects",
  description:
    "Get a free quote from Libmarc Projects. Call 078 150 0069 or 070 359 9092, WhatsApp us, or send us a project enquiry. Based in Yeoville, Johannesburg — serving all of Gauteng.",
  alternates: {
    canonical: "https://libmarcprojects.co.za/contact",
  },
  openGraph: {
    title: "Contact | Libmarc Projects",
    description: "Get a free quote from Libmarc Projects. Call 078 150 0069 or WhatsApp. Based in Yeoville, Johannesburg.",
    url: "https://libmarcprojects.co.za/contact",
    siteName: "Libmarc Projects",
    type: "website",
  },
};

export default function ContactPage() {
  const tel1Href = `tel:${company.phone1Intl}`;
  const tel2Href = `tel:${company.phone2Intl}`;
  const wa1Href = `https://wa.me/${company.whatsapp1}`;
  const wa2Href = `https://wa.me/${company.whatsapp2}`;
  const mailHref = `mailto:${company.email}`;

  return (
    <>
      {/* HERO */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/real/excavator-transport.jpg"
            alt="Libmarc excavator transport"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Contact us
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Get a free quote.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Tell us about your project. Same business day response.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* LEFT: Contact info */}
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                Reach us
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Talk to the <span className="text-primary">Libmarc</span> team
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Two phone numbers, two WhatsApp lines, one email. We respond
                within 2 hours during business hours.
              </p>

              {/* Response time */}
              <div className="flex items-start gap-3 border-l-2 border-primary bg-muted/40 px-4 py-3 mb-8">
                <Icons.clock className="size-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/90 leading-relaxed">
                  <span className="font-semibold">Response time:</span>{" "}
                  {company.responseWindow}
                </p>
              </div>

              {/* Phone numbers */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <a
                  href={tel1Href}
                  className="group flex items-start gap-3 border border-border p-4 hover:border-primary transition-colors"
                >
                  <Icons.phone className="size-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Call — Primary
                    </div>
                    <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {company.phone1}
                    </div>
                  </div>
                </a>
                <a
                  href={tel2Href}
                  className="group flex items-start gap-3 border border-border p-4 hover:border-primary transition-colors"
                >
                  <Icons.phone className="size-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Call — Secondary
                    </div>
                    <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {company.phone2}
                    </div>
                  </div>
                </a>
              </div>

              {/* WhatsApp */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <a
                  href={wa1Href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 border border-border p-4 hover:border-green-600 transition-colors"
                >
                  <Icons.messageCircle className="size-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      WhatsApp
                    </div>
                    <div className="font-display font-bold text-foreground group-hover:text-green-600 transition-colors">
                      {company.phone1}
                    </div>
                  </div>
                </a>
                <a
                  href={wa2Href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 border border-border p-4 hover:border-green-600 transition-colors"
                >
                  <Icons.messageCircle className="size-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      WhatsApp
                    </div>
                    <div className="font-display font-bold text-foreground group-hover:text-green-600 transition-colors">
                      {company.phone2}
                    </div>
                  </div>
                </a>
              </div>

              {/* Email */}
              <a
                href={mailHref}
                className="group flex items-start gap-3 border border-border p-4 hover:border-primary transition-colors mb-6"
              >
                <Icons.mail className="size-5 text-primary mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </div>
                  <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors break-all">
                    {company.email}
                  </div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 border border-border p-4 mb-6">
                <Icons.mapPin className="size-5 text-primary mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Address
                  </div>
                  <div className="font-display font-bold text-foreground">
                    {company.address}
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3 mt-6">
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center border border-border hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Icons.facebook className="size-5" />
                </a>
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center border border-border hover:border-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
                >
                  <Icons.instagram className="size-5" />
                </a>
              </div>
            </div>

            {/* RIGHT: Form with man pointing — man is BIG and integrated */}
            <div className="lg:col-span-7 relative">
              {/* Big man pointing at the entire form card from the LEFT.
                  Since the source PNG already has a transparent bg, we let him bleed naturally
                  past the section edge — no fake crop mask, no white-box outline. */}
              <div
                aria-hidden
                className="pointer-events-none select-none hidden lg:block absolute z-20"
                style={{
                  // Sit just outside-left of the form card, full body height, slight rotation
                  left: "-120px",
                  top: "-40px",
                  bottom: "-80px",
                  width: "clamp(340px, 38vw, 520px)",
                  filter: "drop-shadow(0 24px 36px rgba(20,10,0,0.22))",
                }}
              >
                <div className="relative w-full h-full">
                  {/* Gentle ground shadow at his feet so he doesn't float */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[44%] h-5 bg-black/20 blur-lg rounded-full"
                    style={{ zIndex: 1 }}
                  />
                  <Image
                    src="/images/real/contact-man.png"
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 38vw, 0px"
                    className="object-contain object-bottom"
                    style={{
                      // Slight forward lean — reads as 'gesturing into the form'
                      transform: "rotate(2deg)",
                      transformOrigin: "50% 100%",
                    }}
                  />
                </div>
              </div>

              {/* Form card — sits on top, slightly offset right so the man doesn't overlap text */}
              <div className="relative z-10 lg:ml-[clamp(220px,26vw,320px)]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-4">
            Prefer to talk?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Call us now. A real person picks up.
          </p>
          <a
            href={tel1Href}
            className="inline-flex h-14 items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold uppercase tracking-wide px-8 transition-colors"
          >
            <Icons.phone className="size-5" />
            {company.phone1}
          </a>
        </div>
      </section>
    </>
  );
}
