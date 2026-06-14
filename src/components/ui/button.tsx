import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-display text-sm font-bold uppercase tracking-wider transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-cream px-8 py-3 text-[#0A0700] hover:bg-gold",
        ghost: "border-2 border-cream px-8 py-3 text-cream hover:bg-cream hover:text-[#0A0700]",
        outline: "border border-cream/30 px-6 py-2.5 text-cream hover:border-cream hover:bg-cream/5",
        gold: "bg-cream px-8 py-3 text-[#0A0700] hover:bg-gold",
        danger: "bg-cricket-red px-6 py-2.5 text-cream hover:bg-cricket-red/90",
        link: "px-0 py-0 text-gold underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-2.5",
        lg: "px-8 py-3 text-base",
        icon: "p-2.5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";
