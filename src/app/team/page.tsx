import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  HardHat,
  ShieldCheck,
  Hammer,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Users,
  CalendarClock,
  BadgeCheck,
  Award,
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
import { team } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Team | BUILDCORE",
  description:
    "Meet the builders behind BUILDCORE — seasoned architects, engineers, superintendents, and craftspeople delivering landmark projects across the Bay Area.",
};

const cultureValues = [
  {
    icon: ShieldCheck,
    title: "Safety Culture",
    description:
      "Zero lost-time incidents for 38+ months. Every worker has unconditional stop-work authority and every shift starts with a job hazard analysis.",
  },
  {
    icon: Hammer,
    title: "Craftsmanship",
    description:
      "We build like our name is on the wall — because it is. Trades are led by journeymen who take pride in work that stands for generations.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Every full-time employee receives 40+ hours of paid training a year — from BIM to seismic detailing to leadership development.",
  },
  {
    icon: HeartHandshake,
    title: "Community",
    description:
      "We donate 1% of profits to Bay Area housing nonprofits and our crews log 2,000+ volunteer hours a year building for those who need it most.",
  },
];

const openRoles = [
  {
    title: "Project Engineer",
    type: "Full-time",
    location: "Oakland HQ",
    detail: "3–6 yrs commercial GC experience, BIM fluent.",
  },
  {
    title: "Superintendent",
    type: "Full-time",
    location: "Field — Bay Area",
    detail: "10+ yrs running $20M+ urban builds.",
  },
  {
    title: "Estimator",
    type: "Full-time",
    location: "Oakland HQ",
    detail: "Heavy civil or commercial, GMP expertise.",
  },
  {
    title: "Carpenter (Journeyman)",
    type: "Union • Full-time",
    location: "Multiple Sites",
    detail: "Carpenters Local 713, OSHA 30 preferred.",
  },
];

const benefits = [
  "Competitive pay above market",
  "Medical, dental & vision",
  "401(k) with 5% match",
  "Paid training & certifications",
  "Safety-first culture",
  "Career advancement paths",
];

const teamStats = [
  { value: 750, suffix: "+", label: "Skilled Workers", icon: Users },
  { value: 35, suffix: "", label: "Avg Yrs Leadership Experience", icon: Award },
  { value: 100, suffix: "%", label: "OSHA 30 Certified Workforce", icon: BadgeCheck },
  { value: 15, suffix: "+", label: "Years Building the Bay", icon: CalendarClock },
];

export default function TeamPage() {
  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <PageHero
        eyebrow="Our People"
        title="The Builders Behind BUILDCORE"
        description="A multidisciplinary team of architects, engineers, superintendents, and craftspeople — united by a zero-incident pledge and a craftsman's pride."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
        image="/images/cta-bg.png"
      />

      {/* ===================== TEAM GRID ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                Meet the team that{" "}
                <span className="text-primary">runs the show</span>
              </>
            }
            description="From the founder's pickup truck to a 750-strong organization, every leader still walks the job site weekly. The names below are the people you'll actually talk to — not a sales front."
            align="center"
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <Card className="group h-full overflow-hidden border-border hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-none">
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent" />
                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      className="absolute top-4 right-4 inline-flex size-10 items-center justify-center bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/90"
                    >
                      <Linkedin className="size-4.5" />
                    </a>
                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-background">
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-1">
                        {member.role}
                      </div>
                      <h3 className="font-display text-2xl font-bold leading-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[4.5rem]">
                      {member.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {member.expertise.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-accent/60 text-foreground text-[10px] uppercase tracking-wide font-bold rounded-none"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CULTURE / VALUES ===================== */}
      <section className="bg-secondary/60 border-y border-border py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Culture & Values"
            title={
              <>
                How we{" "}
                <span className="text-primary">build the team</span> that builds
                your project
              </>
            }
            description="A zero-incident record, top-tier craftsmanship, and a culture that retains talent — the four pillars below are not posters in the trailer, they are how we operate every shift."
            align="center"
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <Card className="h-full border-border bg-background hover:border-primary hover:shadow-lg transition-all duration-300 rounded-none">
                  <CardContent className="p-7">
                    <div className="inline-flex size-14 items-center justify-center bg-foreground text-primary mb-5">
                      <value.icon className="size-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CAREERS / NOW HIRING (DARK) ===================== */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="hazard-stripe h-1.5 w-full" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container relative mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Pitch + benefits */}
            <div>
              <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-2 mb-6">
                <span className="flex size-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Now Hiring
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
                Build a career that{" "}
                <span className="text-primary">stands the test of time.</span>
              </h2>
              <p className="mt-5 text-background/70 text-base lg:text-lg leading-relaxed max-w-xl">
                We are growing across residential, commercial, and infrastructure
                divisions. If you take pride in your trade and want to work on
                projects that define the Bay Area skyline, we want to meet you.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2.5 text-sm text-background/85"
                  >
                    <CheckCircle2 className="size-4.5 text-primary shrink-0" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 px-8 text-base"
                >
                  <Link href="/contact">
                    View Open Roles
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Roles preview */}
            <div className="space-y-3">
              {openRoles.map((role, i) => (
                <Reveal key={role.title} delay={i * 80}>
                  <div className="group flex items-center gap-4 border border-background/15 bg-background/5 hover:border-primary hover:bg-background/10 transition-all p-5">
                    <div className="inline-flex size-12 items-center justify-center bg-background/10 text-primary shrink-0">
                      <HardHat className="size-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-display text-lg font-bold text-background">
                          {role.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/40 px-1.5 py-0.5">
                          {role.type}
                        </span>
                      </div>
                      <div className="text-xs text-background/60 mt-0.5">
                        {role.location} · {role.detail}
                      </div>
                    </div>
                    <ArrowRight className="size-5 text-background/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Reveal>
              ))}
              <p className="text-xs text-background/50 pt-2">
                Don&apos;t see your role?{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:underline font-semibold"
                >
                  Send us your resume
                </Link>{" "}
                — we are always looking for great people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="By the Numbers"
            title={
              <>
                A workforce{" "}
                <span className="text-primary">built to scale</span>
              </>
            }
            description="The depth of our bench is what lets us run a dozen active job sites without ever dropping the ball on safety or schedule."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <stat.icon className="size-9 text-primary mx-auto mb-3" />
                  <div className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-none">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTABand
        title="Want to join the crew?"
        description="We are hiring across every division. Send us your resume or browse open roles — a real human will respond within one business day."
      />
    </>
  );
}
