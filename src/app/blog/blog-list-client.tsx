"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/site/sections";
import { blogPosts, type BlogPost } from "@/lib/site-data";

const categories = [
  "All",
  "Project Delivery",
  "Technology",
  "Pre-Construction",
  "Safety",
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function PostCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Card className="group h-full overflow-hidden border-border bg-card p-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute left-4 top-4">
              <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:bg-primary">
                {post.category}
              </Badge>
            </div>
          </div>
        </Link>
        <CardContent className="flex flex-col gap-3 p-6">
          <Link href={`/blog/${post.slug}`} className="block">
            <h3 className="font-display text-xl font-bold leading-snug tracking-tight line-clamp-2 transition-colors group-hover:text-primary">
              {post.title}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <User className="size-3.5 text-primary" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5 text-primary" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-primary" />
              {post.readTime} read
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:text-primary"
          >
            Read Article
            <ArrowRight className="size-4" />
          </Link>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export function BlogListClient() {
  const [active, setActive] = React.useState<string>("All");

  const filtered = React.useMemo(() => {
    if (active === "All") return blogPosts;
    return blogPosts.filter((p) => p.category === active);
  }, [active]);

  const featured = blogPosts[0];

  return (
    <>
      {/* Featured post */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="h-0.5 w-8 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Featured Article
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                  Editor&apos;s Pick
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Card className="group grid overflow-hidden border-border bg-card p-0 transition-all duration-300 hover:border-primary hover:shadow-xl md:grid-cols-2">
              <Link
                href={`/blog/${featured.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-muted md:aspect-auto md:min-h-[420px]"
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute left-5 top-5">
                  <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:bg-primary">
                    {featured.category}
                  </Badge>
                </div>
              </Link>
              <CardContent className="flex flex-col justify-center gap-4 p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="size-3.5 text-primary" />
                    {featured.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-primary" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-primary" />
                    {featured.readTime} read
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tight">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {featured.title}
                  </Link>
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-2">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
                  >
                    <Link href={`/blog/${featured.slug}`}>
                      Read Article
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* All articles + filter */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="mb-8 flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="h-0.5 w-8 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    All Articles
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                  Browse the Library
                </h2>
              </div>
            </div>
          </Reveal>

          {/* Category tabs */}
          <Reveal delay={100}>
            <div className="mb-10 flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={
                      "border px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-all " +
                      (isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary hover:text-primary")
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Posts grid */}
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <PostCard key={post.slug} post={post} delay={i * 60} />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-border bg-background p-12 text-center">
              <p className="text-muted-foreground">
                No articles in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
