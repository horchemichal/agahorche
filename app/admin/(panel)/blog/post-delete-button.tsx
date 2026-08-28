"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { deletePostAction } from "./actions";

export function PostDeleteButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      title="Usunąć ten artykuł?"
      description={`Artykuł „${title}” zostanie trwale usunięty.`}
      onConfirm={async () => {
        await deletePostAction(id);
        showToast("Artykuł usunięty.", "success");
        router.refresh();
      }}
    />
  );
}
