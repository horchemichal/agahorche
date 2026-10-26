import { SITE, absoluteUrl, doIso8601 } from "@/lib/utils";
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

// Profile Agi w sieci — ta sama lista dla Person, Organization i ProfessionalService (spójna encja dla Google i modeli AI).
const SAME_AS = [
  "https://www.instagram.com/agahorche_thermomix/",
  "https://www.tiktok.com/@agahorche_thermomix",
  "https://www.facebook.com/agulabuu",
];

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE.name,
    url: SITE.url,
    description: "Aga Horche — oficjalny przedstawiciel Thermomix® (Vorwerk Polska) z Bochni. Bezpłatne prezentacje Thermomix TM7 w domu klienta w Małopolsce i w całej Polsce.",
    sameAs: SAME_AS,
    // TODO: dodać logo, gdy będzie finalny plik graficzny.
  };
}

export function personSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/o-mnie/#person"),
    name: "Agnieszka Horche",
    alternateName: "Aga Horche",
    sameAs: SAME_AS,
    knowsAbout: ["Thermomix", "Thermomix TM7", "Cookidoo", "roboty kuchenne z funkcją gotowania"],
    jobTitle: "Oficjalny Przedstawiciel Thermomix",
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
  datePublished?: string;
  dateModified?: string;
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
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
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
    // niego jako śmieć — patrz lib/utils.ts.
    ...(doIso8601(opts.publishedAt) ? { datePublished: doIso8601(opts.publishedAt) } : {}),
    ...(doIso8601(opts.updatedAt) ? { dateModified: doIso8601(opts.updatedAt) } : {}),
    author: { "@id": absoluteUrl("/o-mnie/#person") },
    publisher: { "@id": absoluteUrl("/#organization") },
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
  };
}

export const LOCAL_BUSINESS_ID = absoluteUrl("/#firma");

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": LOCAL_BUSINESS_ID,
    name: "Aga Horche Przedstawiciel Thermomix",
    url: absoluteUrl("/"),
    telephone: "+48517185691",
    address: { "@type": "PostalAddress", addressLocality: "Bochnia", addressRegion: "malopolskie", postalCode: "32-700", addressCountry: "PL" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "07:00", closes: "22:00" }],
    areaServed: ["Bochnia","Brzesko","Gdow","Wieliczka","Niepolomice","Krakow","Tarnow","Limanowa","Chrzanow"].map((n) => ({ "@type": "City", name: n })),
    sameAs: SAME_AS,
    description: "Oficjalny przedstawiciel Thermomix® (Vorwerk Polska) z Bochni — bezpłatne prezentacje Thermomix TM7 w domu, sprzedaż, raty i pomoc po zakupie.",
    brand: { "@type": "Brand", name: "Thermomix" },
    founder: { "@id": absoluteUrl("/o-mnie/#person") },
    knowsAbout: ["Thermomix TM7", "Cookidoo", "prezentacja Thermomix"],
  };
}
