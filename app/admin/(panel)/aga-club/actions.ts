"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getAgaClubMembersRepository } from "@/lib/database/repositories/aga-club-members-repository";
import { agaClubMemberFormSchema } from "@/lib/validation/aga-club";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { FormActionState } from "@/lib/admin/actions-helpers";

export async function addMemberAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const parsed = agaClubMemberFormSchema.safeParse({
    displayName: formData.get("displayName"),
    email: formData.get("email"),
    tier: formData.get("tier") || undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  try {
    const member = await getAgaClubMembersRepository().create(parsed.data);
    await recordAuditEvent({
      actorEmail: admin.email,
      entityType: "aga-club-member",
      entityId: member.id,
      action: "create",
      summary: `Dodano członka Aga Club „${member.displayName}”`,
    });
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się dodać członka." };
  }

  revalidatePath("/admin/aga-club");
  return { error: null };
}

export async function removeMemberAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const repo = getAgaClubMembersRepository();
  const member = (await repo.list()).find((m) => m.id === id);
  await repo.remove(id);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "aga-club-member",
    entityId: id,
    action: "delete",
    summary: `Usunięto członka Aga Club „${member?.displayName ?? id}”`,
  });
  revalidatePath("/admin/aga-club");
}
