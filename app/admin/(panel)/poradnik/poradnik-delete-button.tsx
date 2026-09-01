"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { deletePoradnikAction } from "./actions";

export function PoradnikDeleteButton({ id, tytul }: { id: string; tytul: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      title="Usunąć ten wpis?"
      description={`Wpis „${tytul}” zostanie trwale usunięty z poradnika.`}
      onConfirm={async () => {
        await deletePoradnikAction(id);
        showToast("Wpis usunięty.", "success");
        router.refresh();
      }}
    />
  );
}
