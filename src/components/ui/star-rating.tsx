import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: number;
  showValue?: boolean;
  reviewCount?: number;
  className?: string;
}

export function StarRating({
  rating,
  size = 14,
  showValue,
  reviewCount,
  className,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            i < Math.floor(rating)
              ? "fill-gold text-gold"
              : i < rating
                ? "fill-gold/50 text-gold"
                : "fill-none text-cream/20"
          )}
        />
      ))}
      {showValue && (
        <span className="ml-1 font-mono text-sm text-cream">
          {rating.toFixed(1)}
          {reviewCount !== undefined && (
            <span className="text-cream/50"> ({reviewCount})</span>
          )}
        </span>
      )}
    </div>
  );
}
