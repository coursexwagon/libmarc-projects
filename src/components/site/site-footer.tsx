import Link from "next/link";
import {
  HardHat,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { company, services, navItems } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const topNav = navItems.filter((n) => n.href !== "/").slice(0, 8);

  return (
    <footer className="mt-auto bg-foreground text-background pb-14 lg:pb-0">
      {/* Hazard stripe accent */}
      <div className="hazard-stripe h-2 w-full" />

      {/* CTA band */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl lg:text-4xl font-bold text-background">
                Ready to start your <br className="hidden lg:block" />
                <span className="text-primary">next project?</span>
              </h2>
              <p className="mt-2 text-background/70 text-sm lg:text-base">
                Call or WhatsApp us for a free, no-obligation quote — usually
                issued the same business day across Gauteng.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get a Free Quote
                <ArrowUpRight className="size-4" />
              </Link>
              <a
                href={`https://wa.me/${company.whatsapp1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-background/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-background hover:bg-background/10 transition-colors"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex size-11 items-center justify-center bg-primary text-primary-foreground">
                <HardHat className="size-6" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl font-bold">LIBMARC</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-background/60 font-semibold mt-1">
                  Projects · Johannesburg
                </span>
              </div>
            </Link>
            <p className="mt-5 text-sm text-background/70 max-w-sm leading-relaxed">
              Johannesburg&rsquo;s trusted contractor for demolition, rock
              blasting, rubble removal, plant hire, CCTV, and gate installations
              since {company.founded}.
            </p>
            {/* Both phone numbers + WhatsApp */}
            <div className="mt-6 space-y-2">
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${company.phone1Intl}`}
                  className="inline-flex items-center gap-2 bg-background/5 border border-background/15 px-3 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone className="size-4 text-primary" />
                  {company.phone1}
                </a>
                <a
                  href={`tel:${company.phone2Intl}`}
                  className="inline-flex items-center gap-2 bg-background/5 border border-background/15 px-3 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone className="size-4 text-primary" />
                  {company.phone2}
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${company.whatsapp1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/25 transition-colors"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp {company.phone1}
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp2}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/25 transition-colors"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp {company.phone2}
                </a>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex size-9 items-center justify-center border border-background/15 text-background/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {topNav.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-background mb-4">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="flex gap-3">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/70 leading-relaxed">
                  {company.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 text-primary shrink-0 mt-0.5" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-background/70 hover:text-primary transition-colors break-all"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/60 text-center sm:text-left">
            © {year} {company.name}. All rights reserved. Serving Gauteng, South Africa.
          </p>
          <div className="flex items-center gap-4 text-xs text-background/60">
            <Link href="/service-areas" className="hover:text-primary transition-colors">
              Service Areas
            </Link>
            <Link href="/safety" className="hover:text-primary transition-colors">
              Safety
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
