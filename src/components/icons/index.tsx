import type { Category } from "@/lib/types";

export function CricketBallIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
      <path d="M2 4 Q6 6 2 8" stroke="currentColor" strokeWidth="0.75" fill="none" />
    </svg>
  );
}

export function DiamondIcon({ className = "w-2 h-2" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 8 8" fill="currentColor" aria-hidden>
      <path d="M4 0 L8 4 L4 8 L0 4 Z" />
    </svg>
  );
}

export function HeartIcon({ filled, className = "w-4 h-4" }: { filled?: boolean; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

export function StarIcon({ filled, className = "w-3.5 h-3.5" }: { filled?: boolean; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
      <path d="M10 1.5l2.4 4.9 5.4.8-3.9 3.8.9 5.3L10 13.8l-4.8 2.5.9-5.3-3.9-3.8 5.4-.8L10 1.5z" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 3L6 7v8c0 6 4.5 11.5 10 13 5.5-1.5 10-7 10-13V7L16 3z" />
      <path d="M11 16l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LightningIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M18 2L8 18h8l-2 12 14-18h-8l2-10z" />
    </svg>
  );
}

export function ReturnIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 16a8 8 0 1 0 2.3-5.7" strokeLinecap="round" />
      <path d="M8 8v8h8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="14" width="16" height="14" rx="2" />
      <path d="M12 14V10a4 4 0 0 1 8 0v4" strokeLinecap="round" />
    </svg>
  );
}

export function FlameIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1c1 3 3 4 3 7a3 3 0 1 1-6 0c0-2 2-3 3-7z" />
    </svg>
  );
}

const CATEGORY_GRADIENTS: Record<Category, string> = {
  jerseys: "linear-gradient(145deg, #071B3F 0%, #0B2456 100%)",
  "steel-cards": "linear-gradient(145deg, #1A1420 0%, #241A2E 100%)",
  "fridge-magnets": "linear-gradient(145deg, #200A0A 0%, #2E1010 100%)",
  posters: "linear-gradient(145deg, #081820 0%, #0C2030 100%)",
  collectibles: "linear-gradient(145deg, #1A1006 0%, #261809 100%)",
  "signed-merch": "linear-gradient(145deg, #1A1006 0%, #261809 100%)",
};

export function CategoryVisualIcon({ category, className = "w-12 h-12 opacity-20" }: { category: Category; className?: string }) {
  if (category === "jerseys") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M12 8 L20 14 L28 14 L36 8 L40 16 L32 20 L32 40 L16 40 L16 20 L8 16 Z" />
      </svg>
    );
  }
  if (category === "steel-cards") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="10" y="6" width="28" height="36" rx="3" />
        <path d="M10 14h28" />
      </svg>
    );
  }
  if (category === "fridge-magnets") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="2">
        <path d="M14 28 C14 18 34 18 34 28" strokeLinecap="round" />
      </svg>
    );
  }
  if (category === "posters") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="12" y="8" width="24" height="32" rx="1" />
        <rect x="14" y="10" width="20" height="28" strokeOpacity="0.5" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.5">
      <path d="M24 6 L28 18 L40 18 L30 26 L34 38 L24 30 L14 38 L18 26 L8 18 L20 18 Z" />
    </svg>
  );
}

export function getCategoryGradient(category: Category) {
  return CATEGORY_GRADIENTS[category];
}

export function JerseySilhouette({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06] ${className ?? ""}`}>
      <div className="flex flex-col items-center">
        <div className="flex gap-8">
          <div className="h-16 w-6 rounded-sm bg-gold" />
          <div className="h-16 w-6 rounded-sm bg-gold" />
        </div>
        <div className="mt-1 h-32 w-28 rounded-sm bg-gold" />
      </div>
    </div>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12z" />
    </svg>
  );
}

export function IndiaFlagIcon({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 16" aria-hidden>
      <rect width="24" height="5.33" fill="#FF9933" />
      <rect y="5.33" width="24" height="5.34" fill="#FFFFFF" />
      <rect y="10.67" width="24" height="5.33" fill="#138808" />
      <circle cx="12" cy="8" r="2" fill="none" stroke="#000080" strokeWidth="0.5" />
    </svg>
  );
}
