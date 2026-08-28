"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { deleteOfferAction } from "./actions";

export function OfferDeleteButton({ id, productName }: { id: string; productName: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      title="Usunąć tę ofertę?"
      description={`Oferta „${productName}” zostanie trwale usunięta. Jeśli była ofertą główną, strona główna przestanie ją pokazywać.`}
      onConfirm={async () => {
        await deleteOfferAction(id);
        showToast("Oferta usunięta.", "success");
        router.refresh();
      }}
    />
  );
}
