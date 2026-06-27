import { PageHero, CTABand } from "@/components/site/sections";
import { BlogListClient } from "./blog-list-client";
import { BlogNewsletter } from "./blog-newsletter";

export const metadata = {
  title: "Blog — Insights from BUILDCORE",
  description:
    "Field-tested insights on construction delivery, technology, pre-construction, and safety from the BUILDCORE team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="The BUILDCORE Blog"
        description="Field-tested insights on project delivery, construction technology, pre-construction strategy, and the safety culture that defines a zero-incident builder."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        image="/images/blog/blog-1.png"
      />

      <BlogListClient />

      <BlogNewsletter />

      <CTABand />
    </>
  );
}
