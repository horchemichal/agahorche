import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, resolving Tailwind conflicts sanely. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Site-wide constants that don't belong to any single domain module. */
export const SITE = {
  name: "Aga Horche",
  legalName: "TODO: pełna nazwa działalności Agnieszki Horche",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://agahorche.pl",
  defaultLocale: "pl_PL",
  phone: "517 185 691",
  phoneHref: "tel:+48517185691",
  // m.me deep link uses the same profile name as the confirmed Facebook
  // page below (spec §42: never invent a link — this reuses one we already have).
  messengerHref: "https://m.me/agulabuu",
  // null = no confirmed public inbox (spec §42: never invent contact
  // details). Previously held a made-up address; Aga confirmed she has no
  // public email, so components must not render a mailto link here.
  email: null as string | null,
  // null = not confirmed yet (spec §42: never invent a link). Components
  // should only render an icon when the value is set — see components
  // that map over Object.entries(SITE.social).
  social: {
    facebook: "https://www.facebook.com/agulabuu" as string | null,
    instagram: "https://www.instagram.com/agahorche_thermomix" as string | null,
    tiktok: "https://www.tiktok.com/@agahorche_thermomix" as string | null,
    youtube: "https://www.youtube.com/@agahorche" as string | null,
  },
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}
