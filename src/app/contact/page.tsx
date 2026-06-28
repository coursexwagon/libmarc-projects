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

            {/* RIGHT: Form with man pointing */}
            <div className="lg:col-span-7 relative">
              {/* Man pointing into the form — sits at the form's edge, naturally blended.
                  Background hue match + soft top/bottom fade + ground shadow so he looks like part of the page. */}
              <div className="hidden lg:block absolute left-2 top-4 bottom-4 w-[150px] xl:w-[190px] pointer-events-none z-10 select-none">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/real/contact-man.png"
                    alt=""
                    fill
                    priority
                    className="object-contain object-bottom drop-shadow-[0_18px_22px_rgba(0,0,0,0.22)]"
                    style={{
                      // Fade bottom so feet ground into the form
                      maskImage:
                        'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
                      WebkitMaskImage:
                        'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
                    }}
                  />
                  {/* Ground contact shadow — sells him as "standing on the page" */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[55%] h-3 bg-black/15 rounded-full blur-md" />
                  {/* Soft ambient that hugs the form background to kill sticker white-frame look */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-background/0 to-background/5" />
                </div>
              </div>
              <div className="pl-0 lg:pl-[130px] xl:pl-[170px]">
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
