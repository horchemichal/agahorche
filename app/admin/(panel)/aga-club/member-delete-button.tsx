"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { removeMemberAction } from "./actions";

export function MemberDeleteButton({ id, displayName }: { id: string; displayName: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      title="Usunąć tego członka?"
      description={`Członek „${displayName}” zostanie trwale usunięty z Aga Club.`}
      onConfirm={async () => {
        await removeMemberAction(id);
        showToast("Członek usunięty.", "success");
        router.refresh();
      }}
    />
  );
}
