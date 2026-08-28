import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";

/**
 * PWA manifest (spec §1/§16: "przygotowanie pod PWA"). Aga Club is the
 * eventual installable surface. Icons are intentionally omitted rather
 * than pointing at placeholder art — add real icon files under /public
 * and reference them here before shipping installability.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Aga Club`,
    short_name: "Aga Club",
    description: "Gotowanie z Thermomixem, prościej — plan posiłków, przepisy i wsparcie AI.",
    start_url: "/aga-club",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2e6544",
    // TODO: dodać icons (192x192, 512x512) gdy powstanie finalne logo/ikona.
    icons: [],
  };
}
