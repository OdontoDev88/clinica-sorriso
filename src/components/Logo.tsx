/** Logotipo tipográfico: um sorriso desenhado em linha sobre o monograma. */
export function LogoMark({ className = "size-10", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const bg = tone === "dark" ? "var(--color-navy)" : "var(--color-white)";
  const fg = tone === "dark" ? "var(--color-white)" : "var(--color-navy)";
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="12" fill={bg} />
      <path
        d="M11 18.5c2.2 5.6 6 8.3 9 8.3s6.8-2.7 9-8.3"
        fill="none"
        stroke={fg}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="29.5" cy="12.5" r="2.3" fill="var(--color-accent)" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark tone={tone} />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[0.625rem] font-bold uppercase tracking-[0.32em] ${
            tone === "dark" ? "text-slate" : "text-sky"
          }`}
        >
          Clínica
        </span>
        <span
          className={`mt-1 font-display text-[1.625rem] italic leading-none ${
            tone === "dark" ? "text-navy" : "text-white"
          }`}
        >
          Sorriso
        </span>
      </span>
    </span>
  );
}
