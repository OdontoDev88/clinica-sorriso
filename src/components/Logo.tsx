export const TOOTH_PATH =
  "M50 20C42 12 30 6 20 10C8 15 4 30 8 46C11 58 16 64 18 78C20 92 22 110 30 112C38 114 40 98 42 86C44 76 46 70 50 70C54 70 56 76 58 86C60 98 62 114 70 112C78 110 80 92 82 78C84 64 89 58 92 46C96 30 92 15 80 10C70 6 58 12 50 20Z";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 100 120"
        className="h-8 w-auto text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        aria-hidden="true"
      >
        <path d={TOOTH_PATH} strokeLinejoin="round" />
      </svg>
      <span className="font-display text-[1.3125rem] leading-none">Clínica Sorriso</span>
    </span>
  );
}
