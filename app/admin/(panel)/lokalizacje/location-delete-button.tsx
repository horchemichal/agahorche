"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { deleteLocationAction } from "./actions";

export function LocationDeleteButton({ id, name }: { id: string; name: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      title="Usunąć tę lokalizację?"
      description={`Lokalizacja „${name}” zostanie trwale usunięta razem z jej publiczną stroną.`}
      onConfirm={async () => {
        await deleteLocationAction(id);
        showToast("Lokalizacja usunięta.", "success");
        router.refresh();
      }}
    />
  );
}
