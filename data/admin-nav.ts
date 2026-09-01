import type { ComponentType, SVGProps } from "react";
import {
  DashboardIcon,
  HomeIcon,
  OfferIcon,
  PromotionIcon,
  LocationIcon,
  BlogIcon,
  FaqIcon,
  MediaIcon,
  SeoIcon,
  LeadsIcon,
  ClubIcon,
  AiIcon,
  AnalyticsIcon,
  SettingsIcon,
} from "@/components/admin/icons";

export interface AdminNavItem {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Exact match required (only Dashboard needs this — every other href is a distinct prefix). */
  exact?: boolean;
}

/** Sidebar structure per spec §16 (Aga Admin panel sections). */
export const ADMIN_NAV: AdminNavItem[] = [
  { label: "Dashboard", href: "/admin", icon: DashboardIcon, exact: true },
  { label: "Strona główna", href: "/admin/strona-glowna", icon: HomeIcon },
  { label: "Oferta", href: "/admin/oferta", icon: OfferIcon },
  { label: "Promocje", href: "/admin/promocje", icon: PromotionIcon },
  { label: "Lokalizacje", href: "/admin/lokalizacje", icon: LocationIcon },
  { label: "Strony", href: "/admin/strony", icon: BlogIcon },
  { label: "Blog", href: "/admin/blog", icon: BlogIcon },
  { label: "FAQ", href: "/admin/faq", icon: FaqIcon },
  // Poradnik (1.09.2026) — osiem działów wiedzy kuchennej w jednym module.
  { label: "Poradnik", href: "/admin/poradnik", icon: BlogIcon },
  { label: "Media", href: "/admin/media", icon: MediaIcon },
  { label: "SEO", href: "/admin/seo", icon: SeoIcon },
  { label: "Leady", href: "/admin/leady", icon: LeadsIcon },
  { label: "Aga Club", href: "/admin/aga-club", icon: ClubIcon },
  { label: "AI", href: "/admin/ai", icon: AiIcon },
  { label: "Analityka", href: "/admin/analityka", icon: AnalyticsIcon },
  { label: "Ustawienia", href: "/admin/ustawienia", icon: SettingsIcon },
];
