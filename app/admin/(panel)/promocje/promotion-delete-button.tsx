"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { deletePromotionAction } from "./actions";

export function PromotionDeleteButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      title="Usunąć tę promocję?"
      description={`Promocja „${title}” zostanie trwale usunięta.`}
      onConfirm={async () => {
        await deletePromotionAction(id);
        showToast("Promocja usunięta.", "success");
        router.refresh();
      }}
    />
  );
}
