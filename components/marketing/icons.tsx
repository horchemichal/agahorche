import type { SVGProps } from "react";

/**
 * Hand-rolled icon set for the public marketing site — plain SVG
 * primitives, no icon library (spec §29: minimize JS, avoid heavy deps
 * for something this small). Mirrors the pattern already used for the
 * admin panel's icon set (components/admin/icons.tsx).
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

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.2l1.3 4-1.9 1.4a11.5 11.5 0 0 0 5 5l1.4-1.9 4 1.3V17a2 2 0 0 1-2 2C10 19 5 14 5 7.9V4Z" />
    </svg>
  );
}

export function MessengerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4C7.3 4 3.5 7.5 3.5 11.8c0 2.4 1.2 4.6 3.1 6v3.2l2.9-1.6c.8.2 1.6.4 2.5.4 4.7 0 8.5-3.5 8.5-7.8S16.7 4 12 4Z" />
      <path d="m7.8 12.9 3-3.2 2.4 1.9 2.9-3.2-3 3.2-2.4-1.9-2.9 3.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M13.5 20v-6.2h2l.3-2.5h-2.3V9.6c0-.7.2-1.2 1.2-1.2h1.3V6.1c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.9H9v2.5h1.9V20" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.2" cy="7.8" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4v9.3a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1" />
      <path d="M14 4c.3 1.8 1.6 3.2 3.4 3.5" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6.5" width="18" height="11" rx="3" />
      <path d="M10.5 9.8v4.4l4-2.2-4-2.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19 19l-4-4" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.3 2.3 2.3 4.7-5" />
    </svg>
  );
}

export function BadgeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9 13.5 7.5 20l4.5-2.5 4.5 2.5-1.5-6.5" />
    </svg>
  );
}

export function LaptopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="5" width="15" height="10" rx="1.5" />
      <path d="M3 19h18" />
    </svg>
  );
}

export function HeartHandsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-6.5-3.9-6.5-8.5A3.5 3.5 0 0 1 12 9a3.5 3.5 0 0 1 6.5 2.5C18.5 16.1 12 20 12 20Z" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M15.5 14.2c2.3.3 4 2 4 4.8" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LightningIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5L13 3Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16M8 3.5v3.5M16 3.5v3.5" />
    </svg>
  );
}

export function ChefHatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 11a3.5 3.5 0 0 1 1-6.6A3 3 0 0 1 12 3a3 3 0 0 1 4 1.4A3.5 3.5 0 0 1 17 11v5H7v-5Z" />
      <path d="M7 20.5h10M7.5 16h9" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 4h2l1.6 10.2A2 2 0 0 0 9.1 16h7.4a2 2 0 0 0 2-1.6L20 7H6" />
      <circle cx="9.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Diety Thermomix module (spec "DIETY NA THERMOMIX" §30) — category/UI icons below. */

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 19c-1.5-5.5 1-11 10.5-13.5C19 12 15 18 6 19Z" />
      <path d="M6 19c1-3 3-6 8-9.5" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5v16M7 5.5h10M4.5 9l3-3.5L10.5 9M13.5 9l3-3.5L19.5 9M4.5 9a3 3 0 0 0 6 0M13.5 9a3 3 0 0 0 6 0" />
      <path d="M8.5 19.5h7" />
    </svg>
  );
}

export function SwapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h13.5M14 4.5 17.5 8 14 11.5" />
      <path d="M20 16H6.5M10 12.5 6.5 16 10 19.5" />
    </svg>
  );
}

export function SproutIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20v-8.5" />
      <path d="M12 11.5C12 8 9.5 6 5.5 6c0 4 2.5 6 6.5 6Z" />
      <path d="M12 9.5C12 6.5 14 5 17.5 5c0 3.5-2 5.5-5.5 5.5Z" />
    </svg>
  );
}

/** Krzyżyk — używany m.in. do ukrywania kafelków diet w Aga Club. */
export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10 14a4 4 0 0 0 5.7.3l2.5-2.5a4 4 0 0 0-5.6-5.6L11 7.5" />
      <path d="M14 10a4 4 0 0 0-5.7-.3l-2.5 2.5a4 4 0 0 0 5.6 5.6L12.7 16.4" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5.5" y="11" width="13" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
