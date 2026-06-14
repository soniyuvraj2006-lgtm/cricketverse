import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "trending" | "sale" | "new" | "stock";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "border-cream/20 bg-cream/5 text-cream",
    trending: "border-gold/40 bg-gold/10 text-gold",
    sale: "border-cricket-red/40 bg-cricket-red/10 text-cricket-red",
    new: "border-field-green/40 bg-field-green/10 text-field-green",
    stock: "border-gold/40 bg-gold/10 text-gold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-0.5 font-mono text-xs font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
