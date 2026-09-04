"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { usunKontoAction } from "./actions";

export function MemberDeleteButton({ id, displayName }: { id: string; displayName: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      title="Usunąć to konto?"
      description={`Konto „${displayName}” zostanie trwale usunięte i ta osoba straci dostęp do Strefy Klienta.`}
      onConfirm={async () => {
        await usunKontoAction(id);
        showToast("Konto usunięte.", "success");
        router.refresh();
      }}
    />
  );
}
