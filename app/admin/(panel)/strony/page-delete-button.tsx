"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { deletePageAction } from "./actions";

export function PageDeleteButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      title="Usunąć tę stronę?"
      description={`Strona „${title}” zostanie trwale usunięta i jej publiczny adres przestanie działać.`}
      onConfirm={async () => {
        await deletePageAction(id);
        showToast("Strona usunięta.", "success");
        router.refresh();
      }}
    />
  );
}
