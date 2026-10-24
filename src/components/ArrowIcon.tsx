type Props = { className?: string };

/** The diagonal "↗" arrow used across the Framer site. */
export function ArrowIcon({ className }: Props) {
  return (
    <svg className={className} viewBox="-1 -1 16 16" fill="none" aria-hidden="true">
      <path d="M0 14L14 0M14 0H0M14 0V14" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
