// Concentric rings from the logo, used as a quiet background ornament.
export function Rings({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 800"
      className={`pointer-events-none absolute size-[800px] fill-none stroke-champagne ${className ?? ""}`}
    >
      <circle cx="400" cy="400" r="390" />
      <circle cx="400" cy="400" r="310" />
      <circle cx="400" cy="400" r="230" />
      <circle cx="400" cy="400" r="150" />
    </svg>
  );
}
