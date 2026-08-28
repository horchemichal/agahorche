"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getLocationsRepository, type LocationInput } from "@/lib/database/repositories/locations-repository";
import { locationFormSchema, computeUrlPath } from "@/lib/validation/location";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { FormActionState } from "@/lib/admin/actions-helpers";

function revalidateLocationSurfaces(urlPath: string, previousUrlPath?: string) {
  revalidatePath("/admin/lokalizacje");
  revalidatePath("/miasta");
  revalidatePath("/wojewodztwa");
  revalidatePath("/thermomix");
  revalidatePath(urlPath);
  if (previousUrlPath && previousUrlPath !== urlPath) revalidatePath(previousUrlPath);
}

export async function saveLocationAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const locationId = String(formData.get("locationId") ?? "");
  const previousUrlPath = String(formData.get("previousUrlPath") ?? "");

  const parsed = locationFormSchema.safeParse({
    name: formData.get("name"),
    nameLocative: formData.get("nameLocative"),
    slug: formData.get("slug"),
    unitType: formData.get("unitType"),
    wojewodztwoSlug: formData.get("wojewodztwoSlug"),
    powiatSlug: formData.get("powiatSlug"),
    gminaSlug: formData.get("gminaSlug"),
    region: formData.get("region"),
    population: formData.get("population"),
    populationSource: formData.get("populationSource"),
    neighborSlugs: formData.get("neighborSlugs"),
    largerCitySlug: formData.get("largerCitySlug"),
    agaServesLocation: formData.get("agaServesLocation") ?? undefined,
    seoPriority: formData.get("seoPriority"),
    tier: formData.get("tier"),
    indexable: formData.get("indexable") ?? undefined,
    robots: formData.get("robots") ?? "",
    inSitemap: formData.get("inSitemap") ?? undefined,
    contentStatus: formData.get("contentStatus"),
    localFacts: formData.get("localFacts"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  const d = parsed.data;
  const urlPath = computeUrlPath({
    unitType: d.unitType,
    slug: d.slug,
    wojewodztwoSlug: d.wojewodztwoSlug,
    powiatSlug: d.powiatSlug,
  });

  const input: LocationInput = {
    name: d.name,
    nameLocative: d.nameLocative ?? undefined,
    slug: d.slug,
    unitType: d.unitType,
    wojewodztwoSlug: d.wojewodztwoSlug,
    powiatSlug: d.powiatSlug,
    gminaSlug: d.gminaSlug,
    region: d.region,
    population: d.population,
    populationSource: d.populationSource,
    neighborSlugs: d.neighborSlugs,
    largerCitySlug: d.largerCitySlug,
    agaServesLocation: d.agaServesLocation,
    seoPriority: d.seoPriority,
    tier: d.tier,
    seo: {
      indexable: d.indexable,
      robots: d.robots,
      inSitemap: d.inSitemap,
      contentStatus: d.contentStatus,
    },
    urlPath,
    localFacts: d.localFacts.length > 0 ? d.localFacts : undefined,
  };

  const repo = getLocationsRepository();

  try {
    if (locationId) {
      await repo.update(locationId, input, admin.email);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "location",
        entityId: locationId,
        action: "update",
        summary: `Zaktualizowano lokalizację „${input.name}” (${urlPath})`,
      });
    } else {
      const created = await repo.create(input, admin.email);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "location",
        entityId: created.locationId,
        action: "create",
        summary: `Utworzono lokalizację „${input.name}” (${urlPath})`,
      });
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać lokalizacji." };
  }

  revalidateLocationSurfaces(urlPath, previousUrlPath);
  redirect("/admin/lokalizacje");
}

export async function deleteLocationAction(locationId: string): Promise<void> {
  const admin = await requireAdmin();
  const location = await getLocationsRepository().get(locationId);
  await getLocationsRepository().remove(locationId);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "location",
    entityId: locationId,
    action: "delete",
    summary: `Usunięto lokalizację „${location?.name ?? locationId}”`,
  });
  if (location) revalidateLocationSurfaces(location.urlPath);
}
