import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";

/**
 * robots.txt (spec §28). Explicitly allows CSS/JS/image asset paths that
 * Next.js serves under /_next/ — a common accidental-block mistake — and
 * only disallows genuinely private/system routes (API, and — since ETAP 7 —
 * the real, login-gated /strefa-klienta account area).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image"],
        disallow: ["/api/", "/strefa-klienta/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
