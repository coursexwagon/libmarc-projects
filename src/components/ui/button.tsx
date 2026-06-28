import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_4px_0_0_#a03a00] hover:shadow-[0_2px_0_0_#a03a00] hover:translate-y-[2px] active:shadow-[0_0px_0_0_#a03a00] active:translate-y-[4px]",
        destructive:
          "bg-destructive text-white shadow-[0_4px_0_0_#7f1d1d] hover:shadow-[0_2px_0_0_#7f1d1d] hover:translate-y-[2px]",
        outline:
          "border-2 border-foreground/20 bg-background text-foreground hover:bg-foreground hover:text-background shadow-[0_3px_0_0_#d4c8b0] hover:shadow-[0_1px_0_0_#d4c8b0] hover:translate-y-[2px]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_3px_0_0_#c8b898] hover:shadow-[0_1px_0_0_#c8b898] hover:translate-y-[2px]",
        ghost:
          "text-foreground/80 hover:text-foreground hover:bg-foreground/5",
        link: "text-primary underline-offset-4 hover:underline",
        // Special industrial metal button
        metal:
          "bg-gradient-to-b from-[#6b6b6b] to-[#4a4a4a] text-white shadow-[0_4px_0_0_#2d2d2d] hover:shadow-[0_2px_0_0_#2d2d2d] hover:translate-y-[2px] border-t border-white/10",
      },
      size: {
        default: "h-11 px-6 has-[>svg]:px-4",
        sm: "h-9 rounded-none gap-1.5 px-4 has-[>svg]:px-3 text-[10px]",
        lg: "h-14 px-10 has-[>svg]:px-6 text-sm",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
