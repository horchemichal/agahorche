"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPoradnikRepository } from "@/lib/database/repositories/poradnik-repository";
import { poradnikFormSchema, slugZTytulu } from "@/lib/validation/poradnik";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { PoradnikWpisInput } from "@/types/poradnik";
import type { FormActionState } from "@/lib/admin/actions-helpers";

function odswiezPoradnik(dzial: string, slug: string) {
  revalidatePath("/admin/poradnik");
  revalidatePath("/poradnik");
  revalidatePath(`/poradnik/${dzial}`);
  revalidatePath(`/poradnik/${dzial}/${slug}`);
}

export async function savePoradnikAction(
  _prevState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const admin = await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const parsed = poradnikFormSchema.safeParse({
    dzial: formData.get("dzial"),
    slug: formData.get("slug"),
    tytul: formData.get("tytul"),
    lead: formData.get("lead"),
    tresc: formData.get("tresc"),
    przepisId: formData.get("przepisId"),
    wlasne: formData.get("wlasne") ?? undefined,
    opublikowany: formData.get("opublikowany") ?? undefined,
    kolejnosc: formData.get("kolejnosc"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  const d = parsed.data;
  /**
   * Pusty adres wyliczamy z tytułu — Aga nie musi wiedzieć, czym jest slug.
   * Prefiks działu trzyma adresy rozdzielone między działami: dwa wpisy
   * „Jajka" w mrożeniu i w domowych sposobach nie wejdą sobie w drogę.
   */
  const slug = d.slug || `${d.dzial}-${slugZTytulu(d.tytul)}`;

  const input: PoradnikWpisInput = {
    dzial: d.dzial,
    slug,
    tytul: d.tytul,
    lead: d.lead,
    tresc: d.tresc,
    przepisId: d.przepisId,
    wlasne: d.wlasne,
    opublikowany: d.opublikowany,
    kolejnosc: d.kolejnosc,
  };

  const repo = getPoradnikRepository();

  try {
    const kolizja = await repo.getBySlug(slug);
    if (kolizja && kolizja.id !== id) {
      return { error: `Adres „${slug}” jest już zajęty przez wpis „${kolizja.tytul}”.` };
    }

    if (id) {
      await repo.update(id, input);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "poradnik",
        entityId: id,
        action: "update",
        summary: `Zaktualizowano wpis poradnika „${input.tytul}”`,
      });
    } else {
      const created = await repo.create(input);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "poradnik",
        entityId: created.id,
        action: "create",
        summary: `Utworzono wpis poradnika „${input.tytul}”`,
      });
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać wpisu." };
  }

  odswiezPoradnik(input.dzial, slug);
  redirect("/admin/poradnik");
}

export async function deletePoradnikAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const repo = getPoradnikRepository();
  const wpis = await repo.get(id);
  await repo.remove(id);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "poradnik",
    entityId: id,
    action: "delete",
    summary: `Usunięto wpis poradnika „${wpis?.tytul ?? id}”`,
  });
  odswiezPoradnik(wpis?.dzial ?? "", wpis?.slug ?? "");
}
