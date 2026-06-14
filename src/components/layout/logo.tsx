export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CricketVerse Logo"
    >
      <circle cx="24" cy="24" r="22" stroke="#FFD700" strokeWidth="2" fill="#080C14" />
      <path
        d="M24 6 C24 6 38 14 38 24 C38 34 24 42 24 42"
        stroke="#FFD700"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        fill="none"
      />
      <path
        d="M24 6 C24 6 10 14 10 24 C10 34 24 42 24 42"
        stroke="#FFD700"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fill="#00AEEF"
        fontSize="18"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        C
      </text>
    </svg>
  );
}
