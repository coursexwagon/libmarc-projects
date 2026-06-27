"use client";

import * as React from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  alt = "Before and after comparison",
  className,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  className?: string;
}) {
  const [position, setPosition] = React.useState(50);
  const [containerWidth, setContainerWidth] = React.useState(1000);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  };

  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  React.useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const onUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[16/10] overflow-hidden bg-muted select-none cursor-ew-resize group",
        className
      )}
      onMouseDown={(e) => {
        isDragging.current = true;
        updatePosition(e.clientX);
      }}
      onTouchStart={(e) => {
        isDragging.current = true;
        updatePosition(e.touches[0].clientX);
      }}
    >
      {/* After image (bottom layer, full) */}
      <Image
        src={afterSrc}
        alt={`${alt} — after`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* After label */}
      <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5">
        {afterLabel}
      </div>

      {/* Before image (top layer, clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="relative h-full w-full" style={{ width: `${containerWidth}px` }}>
          <Image
            src={beforeSrc}
            alt={`${alt} — before`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Before label */}
        <div className="absolute top-4 left-4 bg-foreground text-background text-xs font-bold uppercase tracking-wider px-3 py-1.5">
          {beforeLabel}
        </div>
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-0.5 bg-background shadow-[0_0_12px_rgba(0,0,0,0.4)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-12 items-center justify-center bg-background text-foreground border-2 border-primary rounded-full shadow-premium-lg group-hover:scale-110 transition-transform">
          <MoveHorizontal className="size-5 text-primary" strokeWidth={2.5} />
        </div>
      </div>

      {/* Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-background/80 text-[11px] font-semibold uppercase tracking-wider bg-foreground/60 backdrop-blur-sm px-3 py-1.5 pointer-events-none group-hover:opacity-0 transition-opacity">
        Drag to compare
      </div>
    </div>
  );
}
