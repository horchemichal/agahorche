import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getIndexableLocations, resolveLocation } from "@/lib/locations";
import { buildLocationIntro } from "@/lib/locations/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { LocationPageTemplate } from "@/components/location/location-page-template";
import { CityLandingTemplate } from "@/components/location/city-landing-template";
import { getCityContent } from "@/data/locations/city-content";
import { DistrictTemplate } from "@/components/location/district-template";
import { getDistrictByPath } from "@/data/locations/districts";

/**
 * Catch-all programmatic local-SEO route (spec §5/§7/§8). Resolves against
 * the location engine (/lib/locations), which now reads through
 * locations-repository.ts (Supabase-backed, editable from
 * /admin/lokalizacje) instead of a static import — flipping a location's
 * `indexable` flag in Aga Admin is what moves it from preview-only to
 * statically generated + sitemapped, with no code change.
 */

/**
 * Bez generateStaticParams — strony lokalizacji renderują się na żądanie z
 * bazy; patrz komentarz przy `force-dynamic` w app/(site)/layout.tsx.
 */
// Allow on-demand rendering for locations not yet in generateStaticParams
// (draft/preview locations) instead of hard 404s, so editors can review a
// page before flipping it to indexable.
export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string[] }>;
}

/**
 * Dzielnice nie mają wierszy w tabeli lokalizacji i mieć nie muszą.
 * Tabela `locations` opisuje jednostki administracyjne (gmina, powiat,
 * województwo) i tym żywi się silnik sąsiedztwa, breadcrumbs i sitemapa
 * miast. Dzielnica Krakowa nie jest gminą — wpisanie jej tam popsułoby
 * hierarchię (powiat? sąsiedzi? ludność?) po to tylko, żeby wyrenderować
 * stronę, która i tak nie korzysta z żadnego z tych pól.
 *
 * Dlatego rozpoznajemy je po ścieżce, PRZED odpytaniem repozytorium:
 * /thermomix/krakow/nowa-huta trafia do `DistrictTemplate`, a wszystko
 * inne idzie starą drogą przez `resolveLocation`.
 */
function districtForSegments(slug: string[]) {
  if (slug.length !== 2) return undefined;
  return getDistrictByPath(`/thermomix/${slug.join("/")}`);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const district = districtForSegments(slug);
  if (district) {
    return buildMetadata({
      title: district.seoTitle,
      description: district.seoDescription,
      path: district.urlPath,
      robots: "index,follow",
      keywords: [
        `thermomix ${district.nazwa.toLowerCase()}`,
        `prezentacja thermomix ${district.nazwa.toLowerCase()}`,
        `przedstawiciel thermomix ${district.nazwa.toLowerCase()}`,
        `thermomix ${district.miasto.nazwa.toLowerCase()} ${district.nazwa.toLowerCase()}`,
      ],
    });
  }

  const resolution = await resolveLocation(slug);
  if (!resolution) return {};

  const { location } = resolution;
  const robots = location.seo.robots ?? (location.seo.indexable ? "index,follow" : "noindex,follow");

  // Miasta z ręcznie napisaną treścią mają własny title/description —
  // generyczny wzorzec „Thermomix {miasto} – bezpłatna prezentacja z Agą”
  // jest w porządku dla dwudziestu podobnych stron, ale nie wygra frazy,
  // o którą naprawdę toczy się gra („przedstawiciel thermomix kraków”).
  const cityContent = getCityContent(location.slug);
  if (cityContent) {
    return buildMetadata({
      title: cityContent.seoTitle,
      description: cityContent.seoDescription,
      ogTitle: cityContent.ogTitle,
      ogDescription: cityContent.ogDescription,
      ogImage: cityContent.heroPhoto.src,
      path: location.urlPath,
      robots,
      keywords: [
        `przedstawiciel thermomix ${location.name.toLowerCase()}`,
        `thermomix ${location.name.toLowerCase()}`,
        `prezentacja thermomix ${location.name.toLowerCase()}`,
        `thermomix tm7 ${location.name.toLowerCase()} cena`,
      ],
    });
  }

  return buildMetadata({
    title: `Thermomix ${location.name} – bezpłatna prezentacja z Agą`,
    description: buildLocationIntro(resolution),
    path: location.urlPath,
    robots,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;

  const district = districtForSegments(slug);
  if (district) {
    return <DistrictTemplate content={district} />;
  }

  const resolution = await resolveLocation(slug);

  if (!resolution) notFound();

  // Sierpień 2026: miasto z własną treścią dostaje rozbudowany szablon
  // sprzedażowo-SEO (żywa oferta, kalkulator rat, dzielnice, formularz).
  // Reszta lokalizacji dalej korzysta z generycznego szablonu — i dalej
  // zostaje noindex, dopóki ktoś nie napisze dla niej realnej treści.
  const cityContent = getCityContent(resolution.location.slug);
  if (cityContent) {
    return <CityLandingTemplate resolution={resolution} content={cityContent} />;
  }

  return <LocationPageTemplate resolution={resolution} />;
}
