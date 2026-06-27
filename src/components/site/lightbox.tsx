"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type LightboxItem = {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  location?: string;
  year?: string;
  description?: string;
};

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}) {
  const current = items[index];

  // Keyboard navigation
  React.useEffect(() => {
    if (index < 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  if (index < 0 || !current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-sm animate-scale-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-5 right-5 z-10 flex size-12 items-center justify-center bg-background/10 text-background border border-background/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
      >
        <X className="size-6" />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10 text-background/70 text-sm font-bold uppercase tracking-wider">
        <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
        {" / "}
        {String(items.length).padStart(2, "0")}
      </div>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + items.length) % items.length);
          }}
          aria-label="Previous image"
          className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-10 flex size-12 lg:size-14 items-center justify-center bg-background/10 text-background border border-background/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
        >
          <ChevronLeft className="size-6 lg:size-7" />
        </button>
      )}

      {/* Next button */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % items.length);
          }}
          aria-label="Next image"
          className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-10 flex size-12 lg:size-14 items-center justify-center bg-background/10 text-background border border-background/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
        >
          <ChevronRight className="size-6 lg:size-7" />
        </button>
      )}

      {/* Content */}
      <div
        className="relative w-full max-w-5xl mx-4 lg:mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] bg-background/5 overflow-hidden">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        {/* Caption bar */}
        {(current.title || current.category || current.location) && (
          <div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex-1 min-w-0">
              {current.category && (
                <Badge className="bg-primary text-primary-foreground border-0 font-bold uppercase tracking-wide text-[10px] mb-2">
                  {current.category}
                </Badge>
              )}
              {current.title && (
                <h3 className="font-display text-xl lg:text-2xl font-bold text-background leading-tight">
                  {current.title}
                </h3>
              )}
              {current.description && (
                <p className="mt-1.5 text-sm text-background/70 leading-relaxed line-clamp-2">
                  {current.description}
                </p>
              )}
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-background/60">
                {current.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-primary" />
                    {current.location}
                  </span>
                )}
                {current.year && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-primary" />
                    {current.year}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnail strip (hidden on mobile) */}
      {items.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 max-w-[80vw] overflow-x-auto pb-2 px-4">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={cn(
                "relative size-14 shrink-0 overflow-hidden border-2 transition-all",
                i === index
                  ? "border-primary opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              )}
            >
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
