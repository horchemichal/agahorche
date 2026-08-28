import type { SVGProps } from "react";

/**
 * Small hand-rolled icon set for Aga Admin — built from plain SVG
 * primitives (circles/lines/rects), not a path-icon library. Keeps the
 * admin bundle light (spec §29: minimize JS, don't install heavy
 * dependencies for things this small) and avoids guessing at exact path
 * data for a third-party icon set.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function DashboardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v8.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10" />
      <path d="M10 19.5V14h4v5.5" />
    </svg>
  );
}

export function OfferIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 12.5v-7A2 2 0 0 1 5.5 3.5h7l8 8-9 9-8-8Z" />
      <circle cx="8.5" cy="8.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PromotionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 15 15 9M9.5 10a.5.5 0 1 0 0-1M14.5 15a.5.5 0 1 0 0-1" />
    </svg>
  );
}

export function LocationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

export function BlogIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4.5h11a2 2 0 0 1 2 2V19H7a2 2 0 0 1-2-2Z" />
      <path d="M5 17.5V6.5A2 2 0 0 1 7 4.5" />
      <path d="M9 9h6M9 12.5h6" />
    </svg>
  );
}

export function FaqIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.8 9.3a2.2 2.2 0 1 1 3.3 1.9c-.8.5-1.1 1-1.1 1.9" />
      <circle cx="12" cy="16.3" r=".15" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function MediaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M4.5 17 9 12.5a1.7 1.7 0 0 1 2.4 0l1.1 1.1M14 12l2.1-2.1a1.7 1.7 0 0 1 2.4 0l1 1" />
    </svg>
  );
}

export function SeoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.3 15.3 20 20" />
    </svg>
  );
}

export function LeadsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
      <path d="m4.5 7 7 5.5 7-5.5" />
    </svg>
  );
}

export function ClubIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7-4.2-7-9.3A4.2 4.2 0 0 1 12 8a4.2 4.2 0 0 1 7 2.7C19 15.8 12 20 12 20Z" />
    </svg>
  );
}

export function AiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 13.4 8l4.6.6-3.4 3.2.9 4.6L12 14.2 8.5 16.4l.9-4.6L6 8.6 10.6 8Z" />
    </svg>
  );
}

export function AnalyticsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 19.5v-6M11 19.5v-11M17.5 19.5V9M4.5 19.5h15" />
    </svg>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1h-.2a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.6v-.2a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1h.2a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function LogoutIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4.5H6a1.5 1.5 0 0 0-1.5 1.5v12A1.5 1.5 0 0 0 6 19.5h3" />
      <path d="M14 15.5 19 12l-5-3.5M19 12H9" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.8 21 19.5H3Z" />
      <path d="M12 10v3.5M12 16.3v.1" />
    </svg>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.3M12 8v.1" />
    </svg>
  );
}
