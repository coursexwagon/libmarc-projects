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
} from "lucide-react";
import { company, services, navItems } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const topServices = services.slice(0, 6);

  return (
    <footer className="mt-auto bg-foreground text-background">
      {/* Hazard stripe accent */}
      <div className="hazard-stripe h-2 w-full" />

      {/* CTA band */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl lg:text-4xl font-bold text-background">
                Ready to break ground on <br className="hidden lg:block" />
                <span className="text-primary">your next project?</span>
              </h2>
              <p className="mt-2 text-background/70 text-sm lg:text-base">
                Get a transparent, no-obligation quote from a Bay Area contractor
                that delivers on schedule and on budget.
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
                href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 border border-background/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-background hover:bg-background/10 transition-colors"
              >
                <Phone className="size-4" />
                Call Now
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
                <span className="font-display text-2xl font-bold">
                  BUILD<span className="text-primary">CORE</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-background/60 font-medium mt-1">
                  Construction & Engineering
                </span>
              </div>
            </Link>
            <p className="mt-5 text-sm text-background/70 max-w-sm leading-relaxed">
              A premier Bay Area construction firm delivering residential,
              commercial, and industrial projects with precision, safety, and
              unmatched craftsmanship since {company.founded}.
            </p>
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
              Company
            </h3>
            <ul className="space-y-2.5">
              {navItems.slice(0, 6).map((item) => (
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
              {topServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-background/70 hover:text-primary transition-colors line-clamp-1"
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
              Get in Touch
            </h3>
            <ul className="space-y-3.5">
              <li className="flex gap-3">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/70 leading-relaxed">
                  {company.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 text-primary shrink-0 mt-0.5" />
                <a
                  href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 text-primary shrink-0 mt-0.5" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
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
            © {year} {company.name}. All rights reserved. {company.license}
          </p>
          <div className="flex items-center gap-4 text-xs text-background/60">
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Support
            </Link>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
