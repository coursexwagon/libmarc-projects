import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, CTABand, Reveal } from "@/components/site/sections";
import { blogPosts } from "@/lib/site-data";

type Params = Promise<{ slug: string }>;

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Find a role for an author based on team data; fall back to a sensible default.
function authorRole(author: string): string {
  const map: Record<string, string> = {
    "David Chen": "Director of Pre-Construction",
    "Elena Vasquez": "Principal Architect",
    "Raymond Castillo": "Director of Field Operations",
    "Marcus Holloway": "Founder & CEO",
    "Dr. Aisha Bello": "VP, Civil Engineering",
    "Tommy Rourke": "Senior Superintendent",
  };
  return map[author] ?? "Contributing Writer";
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article not found — BUILDCORE" };
  }
  return {
    title: `${post.title} — BUILDCORE Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const role = authorRole(post.author);

  // Parse markdown-ish content: split on \n\n, render ## as h2, else p.
  const blocks = post.content.split("\n\n");

  const shareUrl = `https://buildcore.co/blog/${post.slug}`;

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* Article meta bar */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {getInitials(post.author)}
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-bold">{post.author}</p>
                  <p className="text-xs text-muted-foreground">{role}</p>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-border md:block" />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-3.5 text-primary" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5 text-primary" />
                  {post.readTime} read
                </span>
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary"
                >
                  {post.category}
                </Badge>
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Share
              </span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="flex size-9 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="flex size-9 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="flex size-9 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={shareUrl}
                aria-label="Copy link"
                className="flex size-9 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <LinkIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-background py-10">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden border border-border bg-muted">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-background pb-20 lg:pb-28">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <Reveal>
              <div>
                {blocks.map((block, i) =>
                  block.startsWith("## ") ? (
                    <h2
                      key={i}
                      className="font-display text-2xl md:text-3xl font-bold mt-10 mb-4 tracking-tight"
                    >
                      <span className="mr-2 text-primary">#</span>
                      {block.slice(3)}
                    </h2>
                  ) : (
                    <p
                      key={i}
                      className="text-base md:text-lg text-foreground/80 leading-relaxed mb-5"
                    >
                      {block}
                    </p>
                  )
                )}
              </div>
            </Reveal>

            {/* Back to blog */}
            <div className="mt-12 border-t border-border pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="size-4" />
                Back to all articles
              </Link>
            </div>
          </article>

          {/* Author box */}
          <Reveal>
            <div className="mx-auto mt-12 max-w-3xl">
              <Card className="border-border bg-muted/40 p-6 md:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {getInitials(post.author)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="h-0.5 w-6 bg-primary" />
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        Written By
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {post.author}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {role} · BUILDCORE
                    </p>
                    <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                      {post.author} leads {role.toLowerCase()} at BUILDCORE and
                      has spent over a decade delivering complex construction
                      projects across the Bay Area. Their work focuses on
                      schedule certainty, transparent pricing, and a zero-incident
                      safety culture.
                    </p>
                    <Link
                      href="/team"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:text-primary"
                    >
                      More articles by this author
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="h-0.5 w-8 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Keep Reading
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                  Related Articles
                </h2>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-foreground/20 font-bold uppercase tracking-wide hover:border-primary hover:text-primary"
              >
                <Link href="/blog">
                  View All
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Card className="group flex h-full flex-col overflow-hidden border-border bg-card p-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl">
                  <Link href={`/blog/${p.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute left-4 top-4">
                        <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:bg-primary">
                          {p.category}
                        </Badge>
                      </div>
                    </div>
                  </Link>
                  <CardContent className="flex flex-1 flex-col gap-3 p-6">
                    <Link href={`/blog/${p.slug}`} className="block">
                      <h3 className="font-display text-lg font-bold leading-snug tracking-tight line-clamp-2 transition-colors group-hover:text-primary">
                        {p.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {p.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <User className="size-3.5 text-primary" />
                        {p.author}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5 text-primary" />
                        {p.readTime} read
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
