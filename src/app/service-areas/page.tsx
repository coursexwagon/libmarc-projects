import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  Truck,
  Building2,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SectionHeading,
  PageHero,
  Counter,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { company, serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Service Areas | Libmarc Projects",
  description:
    "Libmarc Projects is based in Yeoville, Johannesburg and serves all of Greater Johannesburg within a ~50km radius. Same-day quotes in most areas across Gauteng.",
};

// Google Maps embed centred on Yeoville, Johannesburg (no API key required).
const coverageMapEmbed =
  "https://www.google.com/maps?q=Yeoville,Johannesburg,South+Africa&output=embed";

// Response time per region.
const responseTimes = [
  {
    region: "Johannesburg CBD & Inner City",
    time: "Same day",
    detail: "Yeoville, Hillbrow, Berea, Joubert Park, Doornfontein",
    icon: Zap,
  },
  {
    region: "Northern Suburbs",
    time: "Same day",
    detail: "Sandton, Rosebank, Randburg, Fourways, Midrand",
    icon: Building2,
  },
  {
    region: "Eastern Suburbs",
    time: "Next day",
    detail: "Bedfordview, Edenvale, Germiston, Boksburg, Kempton Park",
    icon: Truck,
  },
  {
    region: "Western Suburbs",
    time: "Next day",
    detail: "Roodepoort, Honeydew, Constantia Kloof, Weltevreden Park",
    icon: Truck,
  },
  {
    region: "Southern Suburbs",
    time: "Next day",
    detail: "Soweto, Lenasia, Ennerdale, Orange Farm, Kibler Park",
    icon: Truck,
  },
  {
    region: "Greater Gauteng",
    time: "24–48 hrs",
    detail: "Pretoria, East Rand, West Rand & surrounding areas",
    icon: Navigation,
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow="Coverage"
        title="Areas We Serve Across Gauteng"
        description="Based in Yeoville, we serve all of Greater Johannesburg and the wider Gauteng region — from the CBD to Sandton, Soweto to the East Rand. Same-day quotes in most areas."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
        image="/images/about-site.png"
      />

      {/* ===================== INTRO ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Coverage"
                title={
                  <>
                    Based in Yeoville, working across{" "}
                    <span className="text-primary">all of Johannesburg</span>
                  </>
                }
                description="Libmarc Projects has been serving Greater Johannesburg since 2015. From our Yeoville base we mobilise demolition crews, plant hire, rubble removal and installation teams within a roughly 50km radius — and further across Gauteng by arrangement. Most enquiries receive a written quote on the same business day."
              />

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="border border-border p-4">
                  <MapPin className="size-6 text-primary mb-2" />
                  <div className="font-display text-lg font-bold">
                    Yeoville Base
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    32 Page Street — central to all of Johannesburg
                  </div>
                </div>
                <div className="border border-border p-4">
                  <Navigation className="size-6 text-primary mb-2" />
                  <div className="font-display text-lg font-bold">
                    ~50km Radius
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Covering every major JHB region from one depot
                  </div>
                </div>
                <div className="border border-border p-4">
                  <Clock className="size-6 text-primary mb-2" />
                  <div className="font-display text-lg font-bold">
                    Same-Day Quotes
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Most enquiries quoted within hours, not days
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-border bg-secondary/40 p-6 lg:p-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="h-0.5 w-8 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Quick Enquiry
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight">
                  Not sure if we cover your suburb?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  If your area isn&apos;t listed below, give us a call or send a
                  WhatsApp — we cover most of Gauteng and can usually mobilise
                  within 24–48 hours for jobs further afield.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={`tel:${company.phone1Intl}`}
                    className="inline-flex h-12 items-center justify-center gap-2 bg-primary text-primary-foreground px-6 text-sm font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="size-4" />
                    Call {company.phone1}
                  </a>
                  <a
                    href={`https://wa.me/${company.whatsapp1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 border-2 border-green-600 text-green-700 px-6 text-sm font-bold uppercase tracking-wide hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICE AREAS GRID ===================== */}
      <section className="bg-secondary/40 border-y border-border py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Regions We Serve"
            title={
              <>
                Six regions across{" "}
                <span className="text-primary">Greater Johannesburg</span>
              </>
            }
            description="From the inner city to the northern suburbs, here are the main regions we cover with our demolition, plant hire, rubble removal, and installation services."
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceAreas.map((area, i) => (
              <Reveal key={area.name} delay={i * 80}>
                <div className="group h-full border border-border bg-background p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="inline-flex size-11 items-center justify-center bg-foreground text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MapPin className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-bold leading-tight">
                        {area.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="border-t border-border pt-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground mb-1">
                      Postcodes
                    </div>
                    <div className="font-mono text-sm text-foreground">
                      {area.postcodes}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COVERAGE MAP ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Coverage Map"
            title={
              <>
                Centred on <span className="text-primary">Yeoville</span>,
                Johannesburg
              </>
            }
            description="Our central Yeoville depot keeps us close to the CBD, Sandton, Soweto, and the East Rand — meaning short drive times and fast mobilisation to your site."
            className="mb-10"
          />

          <Reveal>
            <div className="relative h-96 border border-border overflow-hidden bg-muted">
              <iframe
                title="Libmarc Projects service area — Yeoville, Johannesburg"
                src={coverageMapEmbed}
                className="absolute inset-0 h-full w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Address pin overlay */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:right-auto bg-background/95 backdrop-blur border border-border px-4 py-3 flex items-center gap-2.5 max-w-sm">
                <MapPin className="size-5 text-primary shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Our Depot
                  </div>
                  <div className="text-sm text-foreground font-medium truncate">
                    {company.address}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== RESPONSE TIMES ===================== */}
      <section className="bg-secondary/40 border-y border-border py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Response Times"
            title={
              <>
                How fast can we{" "}
                <span className="text-primary">get to you?</span>
              </>
            }
            description="Typical mobilisation and quote response times per region. Same-day service is available across most of Johannesburg for demolition, rubble removal, and plant hire."
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {responseTimes.map((rt, i) => (
              <Reveal key={rt.region} delay={i * 70}>
                <div className="h-full border border-border bg-background p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex size-10 items-center justify-center bg-foreground text-primary">
                      <rt.icon className="size-5" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      <Clock className="size-3.5" />
                      {rt.time}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-tight mb-1.5">
                    {rt.region}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {rt.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
            Response times are estimates for typical business-day enquiries.
            Urgent jobs and weekends are handled case-by-case — call us for
            same-day or emergency mobilisation.
          </p>
        </div>
      </section>

      {/* ===================== STATS BAND ===================== */}
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
        <div className="container relative mx-auto px-4 py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center gap-2.5 mb-4 justify-center">
              <span className="h-0.5 w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Coverage At A Glance
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
              Built for Gauteng, ready for your site
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                <Counter value={6} />
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-background/70">
                Regions Covered
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                <Counter value={50} suffix="km" />
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-background/70">
                Service Radius
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                <Counter value={850} suffix="+" />
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-background/70">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Same-Day
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-background/70">
                Quotes Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== NOT SURE SECTION ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="border-2 border-primary bg-primary/5 p-8 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="h-0.5 w-8 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Not Sure?
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                  Not sure if we cover your area?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We cover all of Greater Johannesburg and most of Gauteng. If
                  your suburb isn&apos;t listed, reach out — we&apos;ll confirm
                  quickly and arrange a site visit or quote. Urgent job? Call us
                  directly and we&apos;ll do our best to mobilise the same day.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="size-5 text-primary" />
                  Fully insured · COID registered · PSIRA registered
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${company.whatsapp1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 border-2 border-green-600 text-green-700 px-6 text-sm font-bold uppercase tracking-wide hover:bg-green-600 hover:text-white transition-colors"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp {company.phone1}
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp2}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 border-2 border-green-600 text-green-700 px-6 text-sm font-bold uppercase tracking-wide hover:bg-green-600 hover:text-white transition-colors"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp {company.phone2}
                </a>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 text-base"
                >
                  <a href={`tel:${company.phone1Intl}`}>
                    <Phone className="size-5" />
                    Call {company.phone1}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand
        title="Ready to start your project?"
        description="Get a transparent, no-obligation quote within one business day. Demolition, rubble removal, plant hire, CCTV, and gate installations across Gauteng."
      />
    </>
  );
}
