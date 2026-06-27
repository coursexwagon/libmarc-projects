import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  HardHat,
  BadgeDollarSign,
  Clock,
  Users,
  Handshake,
  Heart,
  CheckCircle2,
  Calendar,
  Building2,
  Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SectionHeading,
  PageHero,
  Counter,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { company, stats, certifications, team } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Libmarc Projects — Johannesburg Demolition & Plant Hire",
  description:
    "Founded 2015 in Yeoville, Libmarc Projects has grown to a 40+ machine fleet serving all of Gauteng with demolition, rubble removal, plant hire, CCTV and gate installation.",
};

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To get the tough jobs done safely, on time, and at a fair price — whether that's demolishing a block of flats, blasting rock for a basement, or fitting a roller shutter door.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be Gauteng's most trusted name in demolition, plant hire, and security installations — known for showing up, telling the truth, and leaving a clean site behind.",
  },
  {
    icon: ShieldCheck,
    title: "Our Promise",
    desc: "Transparent written quotes. Certified crews. R5M public liability cover. And a site that's clean and level when we hand it back.",
  },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Every site starts with a documented HIRA. PPE on every crew member, every shift. Stop-work authority belongs to every worker.",
  },
  {
    icon: BadgeDollarSign,
    title: "Honest Pricing",
    desc: "Written, itemised quotes — same business day. No hidden fees, no surprises on site. The price we quote is the price you pay.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We schedule tight and mobilise fast. Most rubble removal jobs go out same-day; most quotes land the same business day.",
  },
  {
    icon: Users,
    title: "Skilled Crews",
    desc: "Certified shot-firers, qualified electricians, and operators with 10+ years on the tools. We don't send labourers to do a tradesman's job.",
  },
  {
    icon: HardHat,
    title: "Fully Insured",
    desc: "R5M public liability insurance, COID-registered, and PSIRA-registered for security work. Your site and your neighbours are covered.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    desc: "Born in Yeoville. We hire locally, support local suppliers, and treat every client — homeowner or developer — with the same respect.",
  },
];

const milestones = [
  {
    year: "2009–2015",
    title: "From One Machine to Libmarc Projects",
    detail:
      "Marc Ndlovu starts out as an independent contractor in 2009 running a single hired TLB. In 2015 he founds Libmarc Projects in Yeoville — one machine, one bakkie, and a promise to quote honestly.",
  },
  {
    year: "2018",
    title: "First Major Demolition Contract",
    detail:
      "We win our first multi-storey structural demolition — a condemned apartment block in the Johannesburg inner city. The job is delivered on schedule and leads to a string of referrals.",
  },
  {
    year: "2020",
    title: "Added CCTV & Gate Installations",
    detail:
      "Clients keep asking us to secure what we help them build. We add a dedicated CCTV and roller shutter / automatic gate installation team, led by a certified electrician.",
  },
  {
    year: "2022",
    title: "40+ Machine Fleet",
    detail:
      "Our plant hire fleet crosses 40 machines — TLBs, mini and heavy excavators, tipper trucks, and bakkies — all serviced in-house and ready to roll across Gauteng.",
  },
  {
    year: "2024",
    title: "850th Project Completed",
    detail:
      "We complete our 850th project across Gauteng — from Soweto rubble clearance to Rosebank rock blasting — with a 100% safety record and a 5-star average review.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Johannesburg&apos;s Demolition &amp;{" "}
            <span className="text-primary">Plant Hire Specialists</span>
          </>
        }
        description="Since 2015, Libmarc Projects has been getting the tough jobs done across Gauteng — from rock blasting in Rosebank to rubble removal in Soweto. One fleet, one crew, one point of contact."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        image="/images/about-site.png"
      />

      {/* ===================== MISSION / VISION / VALUES ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="What Drives Us"
            title={
              <>
                Mission, vision, and the{" "}
                <span className="text-primary">values we work by</span>
              </>
            }
            description="Three principles that shape every decision we make — from the jobs we take on to the crews we send out."
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {missionVision.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 size-32 bg-primary/5 rounded-full" />
                  <CardContent className="p-7 relative">
                    <div className="flex size-14 items-center justify-center bg-foreground text-primary mb-5">
                      <item.icon className="size-7" strokeWidth={2} />
                    </div>
                    <h3 className="font-display text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COMPANY STORY ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary z-0" />
                <div className="relative aspect-[4/3] overflow-hidden bg-muted z-10">
                  <Image
                    src="/images/cta-bg.png"
                    alt="Libmarc Projects crew on a Johannesburg site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 z-20 shadow-xl hidden sm:block">
                  <div className="font-display text-5xl font-bold leading-none">
                    <Counter value={9} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold mt-2 leading-tight">
                    Years Serving
                    <br />
                    Greater Gauteng
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <SectionHeading
                  eyebrow="The Libmarc Story"
                  title={
                    <>
                      From one TLB to a{" "}
                      <span className="text-primary">40+ machine fleet</span>
                    </>
                  }
                />
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    In <strong className="text-foreground">2015</strong>, Marc
                    Ndlovu formally registered Libmarc Projects in Yeoville,
                    Johannesburg — after six years of running hired TLBs on
                    other people&apos;s sites. He was tired of contractors who
                    showed up late, quoted one price and charged another, and
                    left sites in a mess. He started Libmarc to do the
                    opposite.
                  </p>
                  <p>
                    By <strong className="text-foreground">2018</strong> we won
                    our first major structural demolition contract in the
                    Johannesburg inner city. By{" "}
                    <strong className="text-foreground">2020</strong> clients
                    were asking us to secure what we&apos;d helped them build —
                    so we added a dedicated CCTV and roller shutter / gate
                    installation team led by a certified electrician.
                  </p>
                  <p>
                    Today we run a fleet of{" "}
                    <strong className="text-foreground">40+ machines</strong> —
                    TLBs, excavators, tipper trucks and bakkies — and have
                    completed over{" "}
                    <strong className="text-foreground">850 projects</strong>{" "}
                    across Gauteng, from Soweto to Sandton. The trucks are
                    newer now and the crews are larger, but the operating
                    system is the same one Marc wrote down on day one:{" "}
                    <span className="text-primary font-semibold">
                      show up, tell the truth, work safe, leave a clean site.
                    </span>
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
                  >
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="font-bold uppercase tracking-wide"
                  >
                    <Link href="/projects">See Our Work</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== ANIMATED STATS BAND ===================== */}
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => {
              const icons = [Calendar, Building2, HardHat, ShieldCheck];
              const Icon = icons[i];
              return (
                <Reveal key={stat.label} delay={i * 100}>
                  <div className="relative group">
                    {i > 0 && (
                      <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 h-16 w-px bg-background/15" />
                    )}
                    <div className="text-center lg:text-left lg:pl-4">
                      <Icon className="size-8 text-primary mx-auto lg:mx-0 mb-3" />
                      <div className="font-display text-5xl lg:text-6xl font-bold text-primary leading-none">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="mt-2 text-sm uppercase tracking-wider text-background/70 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className="hazard-stripe h-1.5 w-full" />
      </section>

      {/* ===================== CORE VALUES GRID ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="What We Stand For"
            title={
              <>
                Six values that shape{" "}
                <span className="text-primary">every job</span>
              </>
            }
            description="These aren't posters on the office wall. They're the principles that show up in daily decisions on every site we run."
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-7">
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 items-center justify-center bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <value.icon className="size-6" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                          {value.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CERTIFICATIONS ===================== */}
      <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 items-center">
            <div className="lg:col-span-1">
              <ShieldCheck className="size-12 text-primary mb-3" />
              <h2 className="font-display text-2xl font-bold">
                Certified &amp; Insured
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Every credential your site requires — and your body corporate
                will ask for.
              </p>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert} delay={i * 60}>
                  <div className="flex items-center gap-3 bg-background border border-border p-4 hover:border-primary transition-colors h-full">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TIMELINE / MILESTONES ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="Our Journey"
            title={
              <>
                From one TLB to{" "}
                <span className="text-primary">850+ projects</span>
              </>
            }
            description="The moments that shaped Libmarc Projects — from a single machine in Yeoville to a 40+ machine fleet serving all of Gauteng."
            className="mb-16"
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={m.year} delay={i * 80}>
                  <div
                    className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Marker */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 z-10">
                      <div className="flex size-8 items-center justify-center bg-primary text-primary-foreground font-display font-bold text-xs border-4 border-background">
                        <Flag className="size-3.5" />
                      </div>
                    </div>

                    <div
                      className={`pl-12 md:pl-0 md:w-1/2 ${
                        isLeft
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:text-left"
                      }`}
                    >
                      <Card className="border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div
                            className={`flex items-center gap-3 mb-3 ${
                              isLeft ? "md:justify-end" : ""
                            }`}
                          >
                            <Badge className="bg-primary text-primary-foreground border-0 font-display font-bold text-base px-3 py-1">
                              {m.year}
                            </Badge>
                          </div>
                          <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                            {m.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {m.detail}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== TEAM PREVIEW ===================== */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Leadership"
              title={
                <>
                  The people who{" "}
                  <span className="text-primary">run the firm</span>
                </>
              }
              description="The founder, the operations manager who keeps a dozen sites moving, and the certified shot-firer who runs our demolition crews."
            />
            <Button
              asChild
              variant="outline"
              className="font-bold uppercase tracking-wide shrink-0"
            >
              <Link href="/contact">
                Join the Team
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.slice(0, 3).map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <Card className="h-full overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-background">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-xl font-bold text-background">
                        {member.name}
                      </h3>
                      <p className="text-sm text-background/80 font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.expertise.map((e) => (
                        <Badge
                          key={e}
                          variant="outline"
                          className="text-[11px] font-semibold uppercase tracking-wide border-primary/30 text-primary"
                        >
                          {e}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 rounded-lg border border-dashed border-border bg-background p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-bold">
                  Looking for a career in demolition, plant, or installations?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We hire operators, electricians, and crew across Gauteng. Send
                  us your CV on WhatsApp.
                </p>
              </div>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide shrink-0"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand
        title="Got a job that needs doing? Let's talk."
        description="From a single bakkie load of rubble to a full basement excavation — tell us what you need and get a transparent, no-obligation quote within one business day."
      />
    </>
  );
}
