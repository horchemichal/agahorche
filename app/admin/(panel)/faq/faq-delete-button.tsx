"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { deleteFaqAction } from "./actions";

export function FaqDeleteButton({ id, question }: { id: string; question: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      title="Usunąć to pytanie?"
      description={`Pytanie „${question}” zostanie trwale usunięte.`}
      onConfirm={async () => {
        await deleteFaqAction(id);
        showToast("Pytanie usunięte.", "success");
        router.refresh();
      }}
    />
  );
}
