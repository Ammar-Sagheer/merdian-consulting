const ICONS = {
  code: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 8.25 6 12l3.75 3.75M14.25 8.25 18 12l-3.75 3.75"
    />
  ),
  cloud: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 15.75a3.75 3.75 0 0 1 0-7.5c.166 0 .33.01.489.03A5.25 5.25 0 0 1 17.25 10.5h.25a3 3 0 1 1 0 6H6.75Z"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3.75 5.25 6v5.25c0 4.28 2.94 7.72 6.75 9 3.81-1.28 6.75-4.72 6.75-9V6L12 3.75Z"
    />
  ),
  spark: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v3.75M12 17.25V21M4.5 12h3.75M15.75 12h3.75M6.34 6.34l2.65 2.65M15 15l2.66 2.66M17.66 6.34 15 9M9 15l-2.66 2.66"
    />
  ),
};

export default function ServiceIcon({ name, className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      {ICONS[name] ?? ICONS.spark}
    </svg>
  );
}
