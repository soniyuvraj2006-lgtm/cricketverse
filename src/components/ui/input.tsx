import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block font-display text-xs font-bold uppercase tracking-wider text-cream/70">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn("input-field", error && "border-error", className)}
        {...props}
      />
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  )
);
Input.displayName = "Input";
