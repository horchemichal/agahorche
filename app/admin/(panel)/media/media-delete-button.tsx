"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { deleteMediaAction } from "./actions";

export function MediaDeleteButton({ id, fileName }: { id: string; fileName: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      title="Usunąć ten plik?"
      description={`Plik „${fileName}” zostanie trwale usunięty z biblioteki mediów. Jeśli jest gdzieś użyty, to miejsce przestanie go wyświetlać.`}
      onConfirm={async () => {
        await deleteMediaAction(id);
        showToast("Plik usunięty.", "success");
        router.refresh();
      }}
    />
  );
}
