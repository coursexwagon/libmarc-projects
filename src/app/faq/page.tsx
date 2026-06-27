import { PageHero, CTABand } from "@/components/site/sections";
import { FaqContent } from "./faq-content";

export const metadata = {
  title: "FAQ — Frequently Asked Questions | BUILDCORE",
  description:
    "Answers to common questions about BUILDCORE: service area, contract structures, project timelines, safety record, and sustainability certifications.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Straight answers on service area, pricing and contracts, process and timeline, safety and compliance, and sustainability — from the team that builds Bay Area landmarks."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
        image="/images/blog/blog-4.png"
      />

      <FaqContent />

      <CTABand
        title="Ready to break ground?"
        description="Get a transparent, no-obligation quote within one business day. Our pre-construction team will walk you through scope, schedule, and pricing."
      />
    </>
  );
}
