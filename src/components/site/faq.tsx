"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading, Reveal } from "@/components/site/sections";
import { HelpCircle } from "lucide-react";

/**
 * FAQ — authentic questions a Johannesburg homeowner / contractor would
 * actually ask before booking. Answers are plain-spoken, mention specifics
 * (areas, timelines, payment), and where the answer is "it depends" we say so.
 */
const faqs: { q: string; a: string }[] = [
  {
    q: "Do you offer free site visits?",
    a: "Yes — for projects in Greater Johannesburg (Sandton, Randburg, Roodepoort, Soweto, Midrand, the CBD and surrounds). We'll come out, look at the job, and give you a written quote. For sites further out (Pretoria, the East Rand fringes) we may charge a small call-out fee, which we deduct from the final bill if you go ahead.",
  },
  {
    q: "How quickly can you start?",
    a: "For rubble removal and plant hire, usually within 24 – 48 hours of you confirming the quote — often same-day if you call before 10am. Demolition and rock blasting need permits, so allow 5 – 10 working days from sign-off. CCTV and gate installations typically book within a week. If you have an emergency (a collapsed wall, a burst pipe trench), call us — we'll do what we can to get a crew out the same day.",
  },
  {
    q: "Do you handle the permits?",
    a: "Yes. For demolition and rock blasting we secure all City of Johannesburg permits, prepare the method statement, and handle neighbour notifications within 50 metres. You don't have to go to the municipality yourself. Permit costs are included in the quote — no surprise add-ons later.",
  },
  {
    q: "What areas do you cover?",
    a: "All of greater Gauteng — Johannesburg CBD and inner city, northern suburbs (Sandton, Rosebank, Randburg, Fourways, Midrand), eastern suburbs (Bedfordview, Edenvale, Germiston, Boksburg, Kempton Park), western suburbs (Roodepoort, Honeydew), southern suburbs (Soweto, Lenasia, Ennerdale), and Alexandra. Our depot is in Yeoville so we're closest to the inner city and northern suburbs.",
  },
  {
    q: "Are you insured and registered?",
    a: "Yes. We carry R5 million public liability insurance, are registered with the Compensation Fund (COID) for on-site injury cover, and our security installers are PSIRA-registered. Our electricians issue Electrical Certificates of Compliance (CoC) on request. We're happy to send proof of any of this before you sign — just ask.",
  },
  {
    q: "What payment methods do you accept?",
    a: "EFT (bank transfer) is preferred and gets you the fastest invoice turnaround. We also accept cash for smaller jobs (rubble removal, quick plant hire). For larger contracts we agree a payment schedule — typically 50% on booking and 50% on completion, or stage payments for multi-week projects. Cheques and credit cards aren't accepted.",
  },
  {
    q: "Can you work after hours or on weekends?",
    a: "Yes, by arrangement. We work Saturdays as standard (7am – 6pm). Sundays and after-hours work (evenings, public holidays) can be scheduled for sites that can't shut down during the week — shops, schools, body corporates. After-hours work carries a 25 – 50% premium depending on the scope and the time. We'll put it in the quote.",
  },
  {
    q: "Do you provide disposal slips for rubble removal?",
    a: "Yes — for every load. We dispose at licensed municipal landfill sites and recycling centres, and we hand you the disposal slip for each load. Body corporates, developers, and contractors need these for their records and for environmental compliance. If you need them, tell us when you book and we'll make sure they're attached to the invoice.",
  },
];

export function FaqAccordion() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left column: heading + intro */}
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                eyebrow="Good Questions"
                title={
                  <>
                    Things people{" "}
                    <span className="text-primary">ask us</span> before
                    booking
                  </>
                }
                description="If your question isn't here, WhatsApp or call us — we'd rather you ask before you book than after."
              />
              <div className="mt-8 flex items-start gap-3 border-l-2 border-primary bg-background px-4 py-3">
                <HelpCircle className="size-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Can&apos;t find your answer?
                  </span>{" "}
                  Most enquiries are answered within {""}
                  <span className="font-semibold text-foreground">
                    2 hours
                  </span>{" "}
                  during business hours.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right column: accordion */}
          <div className="lg:col-span-8">
            <Reveal delay={150}>
              <Accordion
                type="single"
                collapsible
                defaultValue="faq-0"
                className="space-y-3"
              >
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-border bg-background data-[state=open]:border-primary data-[state=open]:shadow-md transition-all"
                  >
                    <AccordionTrigger className="px-5 py-5 text-left hover:no-underline group">
                      <span className="flex items-start gap-4">
                        <span className="font-display text-base lg:text-lg font-bold leading-snug group-data-[state=open]:text-primary transition-colors">
                          {faq.q}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pl-14 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
