import { SITE, absoluteUrl } from "@/lib/utils";
import { doIso8601 } from "@/lib/seo/daty";
import type { BreadcrumbItem, FaqItem } from "@/types/seo";

/**
 * Pure JSON-LD builder functions — no React here so they're trivially unit
 * testable and reusable from route handlers (e.g. an /api endpoint that
 * needs the same Organization object). Rendering happens in
 * /components/seo/json-ld.tsx.
 *
 * Hard rule from spec §11/§42: every field here is either a stable brand
 * fact or explicitly derived from real page data. Nothing is invented —
 * fields we don't have real data for (address, phone, review ratings) are
 * simply omitted, never filled with placeholders.
 */

export type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE.name,
    url: SITE.url,
    // TODO: dodać logo, gdy będzie finalny plik graficzny.
  };
}

export function personSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/o-mnie/#person"),
    name: "Agnieszka Horche",
    jobTitle: "Oficjalna Przedstawicielka Thermomix",
    url: absoluteUrl("/o-mnie"),
    worksFor: { "@id": absoluteUrl("/#organization") },
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE.name,
    url: SITE.url,
    inLanguage: "pl-PL",
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  breadcrumbId?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(`${opts.path}/#webpage`),
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": absoluteUrl("/#website") },
    ...(opts.breadcrumbId ? { breadcrumb: { "@id": opts.breadcrumbId } } : {}),
    inLanguage: "pl-PL",
  };
}

export function serviceSchema(opts: {
  path: string;
  name: string;
  description: string;
  areaServed?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": absoluteUrl("/#organization") },
    ...(opts.areaServed ? { areaServed: { "@type": "City", name: opts.areaServed } } : {}),
  };
}

export function faqPageSchema(items: FaqItem[]): JsonLd | null {
  if (items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbListSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(opts: {
  path: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  image?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.path),
    // Daty przechodzą przez normalizację, bo repozytoria oddają surowy
    // string z Postgresa ("2026-08-25 15:51:41.548993+00"), który nie jest
    // ISO 8601. Pole nieparsowalne znika ze schematu zamiast trafić do
    // niego jako śmieć — patrz lib/seo/daty.ts.
    ...(doIso8601(opts.publishedAt) ? { datePublished: doIso8601(opts.publishedAt) } : {}),
    ...(doIso8601(opts.updatedAt) ? { dateModified: doIso8601(opts.updatedAt) } : {}),
    author: { "@id": absoluteUrl("/o-mnie/#person") },
    publisher: { "@id": absoluteUrl("/#organization") },
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
  };
}

/**
 * LocalBusiness is intentionally NOT wired up anywhere yet. Spec §11 requires
 * real address/contact data to justify it, and §42 forbids inventing that
 * data. Enable this only once Aga confirms a real, publishable business
 * address and phone number.
 */
export function localBusinessSchemaTodo(): null {
  return null;
}
