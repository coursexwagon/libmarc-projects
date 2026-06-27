import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ClipboardCheck,
  Bomb,
  HardHat,
  ShieldCheck,
  FileCheck,
  Stamp,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  FileText,
  AlertTriangle,
  ClipboardList,
  HardHat as HardHatIcon,
  Hammer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  SectionHeading,
  PageHero,
  Counter,
  CTABand,
  Reveal,
} from "@/components/site/sections";
import { certifications, safetyPractices, company } from "@/lib/site-data";

/* ---------- Safety practices -> icon mapping (in order) ---------- */
const practiceIcons = [ClipboardCheck, Bomb, HardHat, ShieldCheck, FileCheck, Stamp];

/* ---------- Safety process steps ---------- */
const safetyProcess = [
  {
    step: "01",
    title: "Risk Assessment",
    detail:
      "Before any tool hits the ground, our supervisor completes a documented Hazard Identification & Risk Assessment (HIRA) for the site, signs it off, and briefs the crew.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Method Statement",
    detail:
      "We prepare a written method statement covering sequencing, equipment, exclusion zones, dust/noise/vibration controls, and emergency response — shared with the client.",
    icon: FileText,
  },
  {
    step: "03",
    title: "PPE & Signage",
    detail:
      "Every crew member is issued full PPE — hard hat, safety boots, high-viz, eye and ear protection. Site is cordoned off and signage is erected before work begins.",
    icon: HardHatIcon,
  },
  {
    step: "04",
    title: "Execution & Cleanup",
    detail:
      "Work proceeds under continuous supervision. On completion, the site is cleared, made safe, and all rubble, debris, and equipment are removed leaving a clean footprint.",
    icon: Hammer,
  },
];

/* ---------- Compliance documents ---------- */
const complianceDocs = [
  { name: "HIRA (Hazard Identification & Risk Assessment)", note: "Issued for every site, signed by the supervisor" },
  { name: "Method Statements", note: "Step-by-step safe-work procedures for the scope" },
  { name: "Blast Plans", note: "For rock blasting — submitted to neighbours & authorities" },
  { name: "Certificate of Compliance (CoC)", note: "Issued for all electrical installations on request" },
  { name: "Disposal Slips", note: "Provided for every rubble removal — proof of legal disposal" },
  { name: "Insurance Certificates", note: "R5M public liability & COID registration letters" },
];

export const metadata = {
  title: "Safety & Compliance | Libmarc Projects",
  description:
    "Zero-incident culture since 2015. Libmarc Projects maintains full safety compliance across demolition, rock blasting, plant hire, CCTV and gate installation in Johannesburg — HIRA, method statements, certified shot-firers, R5M public liability and COID registration.",
};

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety"
        title={
          <>
            Safety & <span className="text-primary">Compliance</span>
          </>
        }
        description="A zero-incident culture built into every shift since 2015. From daily risk assessments to certified shot-firers and R5 million public liability cover — compliance is not a checkbox, it's how we work."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Safety & Compliance" },
        ]}
        image="/images/services/rock-blasting.png"
      />

      {/* ===================== SAFETY INTRO ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Safety First"
                title={
                  <>
                    Safety isn't a slide — it's{" "}
                    <span className="text-primary">every shift, every site</span>
                  </>
                }
                description="Libmarc Projects has operated a zero-incident safety culture since 2015. Whether we're taking down a condemned Yeoville apartment block or blasting dolomite rock for a Rosebank basement, our crews follow the same disciplined process — assess, document, brief, execute, clean up."
                className="mb-6"
              />
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                We are registered with the Compensation Fund (COID), carry R5 million public
                liability insurance, and our shot-firers hold valid blasting licences. Every
                demolition and blast is fully permitted with the City of Johannesburg, and every
                site is supervised by a competent person from start to finish.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 text-base"
                >
                  <Link href="/contact">
                    Request Safety Pack
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
                <a
                  href={`tel:${company.phone1Intl.replace(/[^+\d]/g, "")}`}
                  className="inline-flex h-14 items-center justify-center gap-2 border border-border px-6 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
                >
                  <PhoneCall className="size-4" />
                  {company.phone1}
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative aspect-[5/4] overflow-hidden bg-muted">
                <Image
                  src="/images/cta-bg.png"
                  alt="Libmarc Projects crew in PPE on a Johannesburg site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/15 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-primary text-primary-foreground border-0 font-bold uppercase tracking-wide">
                    Zero Incidents
                  </Badge>
                  <div className="mt-3 font-display text-2xl font-bold text-background leading-tight">
                    9 years of disciplined delivery across Gauteng
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== SAFETY PRACTICES GRID ===================== */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="How We Work"
            title={
              <>
                Six safety practices on{" "}
                <span className="text-primary">every site</span>
              </>
            }
            description="Non-negotiable. Every Libmarc site — large or small — follows these six practices before, during, and after the job."
            align="center"
            className="mb-12"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {safetyPractices.map((p, i) => {
              const Icon = practiceIcons[i] ?? ClipboardCheck;
              return (
                <Reveal key={p.title} delay={(i % 3) * 100}>
                  <div className="group h-full bg-card border border-border p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex size-12 items-center justify-center bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="size-6" />
                      </span>
                      <span className="font-display text-3xl font-bold text-muted-foreground/40 group-hover:text-primary/30 transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== STATS BAND ===================== */}
      <section className="relative bg-foreground text-background">
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
          <SectionHeading
            light
            align="center"
            eyebrow="By the Numbers"
            title={
              <>
                A safety record that{" "}
                <span className="text-primary">speaks for itself</span>
              </>
            }
            description="Audited, documented, and verifiable — every figure below is backed by records we can share on request."
            className="mb-12"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              {
                icon: ShieldCheck,
                value: 100,
                suffix: "%",
                label: "Safety Compliance",
                prefix: "",
              },
              {
                icon: HardHat,
                value: 0,
                suffix: "",
                label: "Lost-Time Incidents (12 mo)",
                prefix: "",
              },
              {
                icon: FileCheck,
                value: 5,
                suffix: "M",
                label: "Public Liability Cover",
                prefix: "R",
              },
              {
                icon: ClipboardCheck,
                value: 40,
                suffix: "+",
                label: "Certified Crew Members",
                prefix: "",
              },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} className="text-center">
                <s.icon className="size-8 text-primary mx-auto mb-3" />
                <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-primary">
                  {s.prefix && <span className="text-primary">{s.prefix}</span>}
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs lg:text-sm font-bold uppercase tracking-wider text-background/70">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="hazard-stripe h-1.5 w-full" />
      </section>

      {/* ===================== CERTIFICATIONS ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Accredited & Insured"
                title={
                  <>
                    Certified, registered, and{" "}
                    <span className="text-primary">fully covered</span>
                  </>
                }
                description="Our certifications and registrations protect our clients, our crew, and the public on every job we take on. Documentation is available on request — usually within one business day."
              />
              <div className="mt-6 flex items-start gap-3 border-l-2 border-primary pl-4">
                <AlertTriangle className="size-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Working with an unregistered contractor puts you, your neighbours, and your
                  insurance at risk. Always ask for proof of COID registration and public
                  liability cover before work begins.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((c, i) => (
                  <div
                    key={c}
                    className="flex items-start gap-3 border border-border bg-card p-5 hover:border-primary/50 transition-colors"
                  >
                    <CheckCircle2 className="size-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground leading-snug">{c}</div>
                      <div className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Verified &amp; current
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== SAFETY PROCESS ===================== */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Process"
            title={
              <>
                From risk assessment to{" "}
                <span className="text-primary">clean handover</span>
              </>
            }
            description="The same four-step safety process runs on every Libmarc site — from a single bakkie load of rubble to a multi-week basement rock blast."
            align="center"
            className="mb-12"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {safetyProcess.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div className="relative h-full bg-card border border-border p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex size-12 items-center justify-center bg-foreground text-background">
                      <s.icon className="size-6 text-primary" />
                    </span>
                    <span className="font-display text-4xl font-bold text-primary/20">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COMPLIANCE DOCUMENTS ===================== */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Paperwork, Sorted"
                title={
                  <>
                    Compliance documents we{" "}
                    <span className="text-primary">provide</span>
                  </>
                }
                description="No chasing, no surprises. We hand over the documentation you need for your records, your insurer, and the municipality — usually on the day work completes."
                className="mb-8"
              />
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide h-14 text-base"
              >
                <Link href="/contact">
                  Request a Document
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-7">
              <div className="border border-border bg-card divide-y divide-border">
                {complianceDocs.map((d, i) => (
                  <div
                    key={d.name}
                    className="flex items-start gap-4 p-5 hover:bg-muted/40 transition-colors"
                  >
                    <span className="flex size-10 items-center justify-center bg-foreground text-background shrink-0">
                      <FileText className="size-5 text-primary" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground leading-snug">
                        {d.name}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">{d.note}</div>
                    </div>
                    <span className="font-display text-2xl font-bold text-muted-foreground/30 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Safety questions before you book?"
        description="Ask us for our safety pack, insurance certificates, or a copy of our HIRA template — we're happy to share before any contract is signed."
      />
    </>
  );
}
