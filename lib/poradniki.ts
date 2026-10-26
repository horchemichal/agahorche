import "server-only";
import dane from "@/data/poradniki.generated.json";
import type { Offer } from "@/types/offer";
import { formatPln } from "@/lib/format";
import { biezacyMiesiac, zdanieOCenie } from "@/lib/seo/lokalne";

/**
 * Poradniki produktowe (22.10.2026): cena TM7, Cookidoo, akcesoria, modele, używany, Lidlomix.
 * Treść: content/poradniki/*.md (nagłówek JSON + treść), skrypt scripts/poradniki.mjs
 * zamienia je przed buildem na data/poradniki.generated.json.
 * Znaczniki w treści: {{cena}} {{oferta}} {{miesiac}} — wypełniane z aktywnej oferty w panelu.
 */
export interface Poradnik {
  slug: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  skrot?: string[];
  published: string;
  updated: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs: [string, string][];
  faq?: [string, string][];
  related?: [string, string][];
  keywords?: string[];
  body: string;
}

const WSZYSTKIE = dane as unknown as Poradnik[];

export function getPoradnik(slug: string): Poradnik | null {
  return WSZYSTKIE.find((p) => p.slug === slug) ?? null;
}

export function poradnikiZPrefiksem(prefiks: string): Poradnik[] {
  return WSZYSTKIE.filter((p) => p.path.startsWith(prefiks));
}

export function wszystkiePoradniki(): Poradnik[] {
  return WSZYSTKIE;
}

export function wypelnij(tekst: string, offer: Offer | null): string {
  return tekst
    .replaceAll("{{miesiac}}", biezacyMiesiac())
    .replaceAll("{{cena}}", formatPln(offer?.priceCents) ?? "6 669 zł")
    .replaceAll("{{oferta}}", zdanieOCenie(offer) ?? "Aktualną ofertę podaję przez telefon: 517 185 691.");
}
