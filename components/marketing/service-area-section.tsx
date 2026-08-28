import Link from "next/link";
import { getAllCities } from "@/lib/locations";
import { getHomepageContentRepository } from "@/lib/database/repositories/homepage-content-repository";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { PinIcon } from "@/components/marketing/icons";
import { ServiceAreaSearch } from "./service-area-search";

/**
 * "Gdzie pracuje Aga?" — intro text, served-city list and photo are
 * editable at /admin/strona-glowna (see homepage-content-repository.ts).
 * Only cities that already have a live /thermomix/[miasto] page render as
 * links — the rest render as plain, non-linked chips rather than dead
 * links (spec §42), regardless of what Aga types into the admin field.
 * With no photo picked, this falls back to the original decorative panel.
 */
export async function ServiceAreaSection() {
  const [cities, content] = await Promise.all([getAllCities(), getHomepageContentRepository().get()]);
  const cityOptions = cities.map((c) => ({ name: c.name, urlPath: c.urlPath }));
  const bySlugName = new Map(cities.map((c) => [c.name, c.urlPath]));
  const serviceAreaImage = content.serviceAreaImageMediaId
    ? await getMediaRepository().get(content.serviceAreaImageMediaId)
    : null;

  return (
    <Section tone="surface">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Heading as="h2" size="md" className="mb-3 text-brand-700">
            Gdzie pracuje Aga?
          </Heading>
          <Lead className="mb-6">{content.serviceAreaIntro}</Lead>

          <ServiceAreaSearch cities={cityOptions} />

          <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wide text-muted">
            Najczęściej obsługuję:
          </p>
          <div className="flex flex-wrap gap-2">
            {content.serviceAreaCities.map((name) => {
              const urlPath = bySlugName.get(name);
              return urlPath ? (
                <Link
                  key={name}
                  href={urlPath}
                  className="rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-100"
                >
                  {name}
                </Link>
              ) : (
                <span key={name} className="rounded-full border border-border bg-neutral-0 px-3.5 py-1.5 text-sm text-neutral-600">
                  {name}
                </span>
              );
            })}
          </div>
        </div>

        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-brand-800 text-neutral-0">
          {serviceAreaImage ? (
            // eslint-disable-next-line @next/next/no-img-element -- media library asset, URL z własnego serwera (/media/...)
            <img src={serviceAreaImage.url} alt={serviceAreaImage.altText} className="h-full w-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-3 text-center">
              <PinIcon width={40} height={40} />
              <p className="font-display text-lg">Małopolska i okolice</p>
              <p className="max-w-[16rem] text-sm text-neutral-0/70">
                Prezentacje stacjonarne w całej Polsce — najczęściej w regionie krakowsko-bocheńskim.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
