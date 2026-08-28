import type { Metadata } from "next";
import type { SeoInput } from "@/types/seo";
import { SITE, absoluteUrl } from "@/lib/utils";
import { getSeoSettingsRepository } from "@/lib/database/repositories/seo-settings-repository";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import type { SeoSettings } from "@/types/seo-settings";

const TITLE_SUFFIX = ` | ${SITE.name}`;
const MAX_TITLE_LENGTH = 60;

/**
 * Single source of truth for `generateMetadata()` across every route
 * (spec §10). Every page builds a `SeoInput` from its own data (static copy
 * or the location/blog engines) and hands it to this function instead of
 * writing next/metadata objects by hand.
 *
 * `robots` is deliberately OMITTED from the returned object when the page
 * doesn't pass one explicitly — Next.js metadata fields not set at a route
 * segment inherit from the nearest parent (see "Inheriting fields" in the
 * generateMetadata docs), so an unset robots here falls through to the
 * root layout's `buildRootMetadata()` output. That's what makes the
 * sitewide "Domyślne indeksowanie" kill switch in /admin/seo actually
 * work without touching every page that calls buildMetadata().
 */
export function buildMetadata(input: SeoInput): Metadata {
  const canonicalPath = input.canonicalPath ?? input.path;
  const canonicalUrl = absoluteUrl(canonicalPath);

  const fullTitle = input.title.length + TITLE_SUFFIX.length <= MAX_TITLE_LENGTH
    ? `${input.title}${TITLE_SUFFIX}`
    : input.title;

  return {
    // `absolute` bypasses the root layout's title.template — buildMetadata
    // already appends the site suffix itself (with the length-aware
    // truncation above), so letting the template run too would double it
    // (e.g. "Strona | Aga Horche | Aga Horche").
    title: { absolute: fullTitle },
    description: input.description,
    keywords: input.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    ...(input.robots
      ? {
          robots: {
            index: input.robots.startsWith("index"),
            follow: input.robots.endsWith("follow"),
          },
        }
      : {}),
    openGraph: {
      title: input.ogTitle ?? input.title,
      description: input.ogDescription ?? input.description,
      url: canonicalUrl,
      siteName: SITE.name,
      locale: SITE.defaultLocale,
      type: input.ogType ?? "website",
      images: input.ogImage ? [{ url: absoluteUrl(input.ogImage) }] : undefined,
      ...(input.ogType === "article"
        ? {
            publishedTime: input.publishedAt,
            modifiedTime: input.updatedAt,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.ogTitle ?? input.title,
      description: input.ogDescription ?? input.description,
      images: input.ogImage ? [absoluteUrl(input.ogImage)] : undefined,
    },
  };
}

const FALLBACK_TITLE = `${SITE.name} — Przedstawicielka Thermomix`;
const FALLBACK_DESCRIPTION =
  "Bezpłatne prezentacje Thermomix z Agą Horche. Umów spotkanie u siebie w domu i poznaj TM7.";

/**
 * Root-layout metadata (spec §10, Aga Admin §12). Sources the site title,
 * description, robots default and favicon from the global SEO settings
 * singleton (/admin/seo) with hardcoded fallbacks so the site still works
 * before an admin ever saves that form. Every route inherits these fields
 * unless it sets its own (see buildMetadata's robots comment above) — this
 * is genuinely the single source of truth, not a duplicate of it.
 */
export async function buildRootMetadata(): Promise<Metadata> {
  let settings: SeoSettings | null = null;
  try {
    settings = await getSeoSettingsRepository().get();
  } catch (error) {
    console.error("[seo] failed to load global SEO settings, using fallback defaults", error);
  }

  let iconUrl: string | undefined;
  if (settings?.faviconMediaId) {
    try {
      const asset = await getMediaRepository().get(settings.faviconMediaId);
      iconUrl = asset?.url;
    } catch (error) {
      console.error("[seo] failed to resolve favicon media asset", error);
    }
  }

  let ogImageUrl: string | undefined;
  if (settings?.ogImageMediaId) {
    try {
      const asset = await getMediaRepository().get(settings.ogImageMediaId);
      ogImageUrl = asset?.url ? absoluteUrl(asset.url) : undefined;
    } catch (error) {
      console.error("[seo] failed to resolve OG image media asset", error);
    }
  }

  const robots = settings?.robotsDefault ?? "index,follow";

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: settings?.siteTitle ?? FALLBACK_TITLE,
      template: `%s${TITLE_SUFFIX}`,
    },
    description: settings?.siteDescription ?? FALLBACK_DESCRIPTION,
    robots: {
      index: robots.startsWith("index"),
      follow: robots.endsWith("follow"),
    },
    icons: iconUrl ? { icon: iconUrl } : undefined,
    openGraph: ogImageUrl
      ? {
          images: [{ url: ogImageUrl }],
        }
      : undefined,
  };
}
