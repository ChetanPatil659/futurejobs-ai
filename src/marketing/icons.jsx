/**
 * Inline single-stroke icon set for the marketing site.
 * 24px grid, 1.5 stroke, currentColor — no external dependencies, no emoji.
 */
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const Icon = ({ name, className = "", size }) => {
  const props = size ? { ...base, width: size, height: size } : base;
  return (
    <svg {...props} className={className} aria-hidden="true">
      {PATHS[name] ?? null}
    </svg>
  );
};

const PATHS = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  unlock: (
    <>
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 7.5-2" />
    </>
  ),
  send: (
    <>
      <path d="M21 4 3 11l6 2 2 6 10-15Z" />
      <path d="m11 13 4-4" />
    </>
  ),
  chat: (
    <>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" />
      <path d="M9 11h6M9 14h3" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  play: <path d="M7 5v14l11-7-11-7Z" />,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  star: (
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9L12 3Z" />
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6 18 18M18 6 6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5l1.25-4.3A8 8 0 1 1 8.1 19.2L3.5 20.5Z" />
      <path d="M9.3 8.6c.25 0 .45.16.55.4l.55 1.3c.08.2.03.42-.12.57l-.5.5c.5.95 1.25 1.7 2.2 2.2l.5-.5c.15-.15.37-.2.57-.12l1.3.55c.24.1.4.3.4.55 0 1.05-.95 1.8-1.95 1.6-2.7-.55-4.75-2.6-5.3-5.3-.2-1 .55-1.95 1.6-1.95Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </>
  ),
  drive: <path d="M4 16h16M4 16l4-9h8l4 9M4 16l3 4h10l3-4M9 7l-4 9M15 7l4 9" />,
  spark: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  trend: <path d="M3 17l6-6 4 4 8-8M21 7v5M21 7h-5" />,
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.3-9.4-8.8A4.6 4.6 0 0 1 12 5.8a4.6 4.6 0 0 1 9.4 5.4C19 15.7 12 20 12 20Z" />
  ),
  shield: (
    <path d="M12 3 5 6v5c0 4.4 3 7.5 7 9 4-1.5 7-4.6 7-9V6l-7-3Zm-2 9 1.6 1.6L15 10" />
  ),
  building: (
    <>
      <path d="M3 21h18" />
      <rect x="4" y="3" width="10" height="18" rx="1" />
      <path d="M14 8h6v13" />
      <path d="M7.5 7h3M7.5 11h3M7.5 15h3M17 12h1.5M17 16h1.5" />
    </>
  ),
};

export default Icon;
