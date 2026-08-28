"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { deleteLeadAction } from "./actions";

/**
 * Przycisk usuwania zgłoszenia. Ten sam wzorzec co przy ofertach
 * (ConfirmButton + toast + refresh), bo to ma działać tak samo w całym
 * panelu i nie zaskakiwać.
 *
 * `afterDelete` jest po to, żeby ten sam przycisk działał w dwóch miejscach:
 * na liście odświeżamy widok w miejscu, a na stronie pojedynczego leadu
 * trzeba wrócić na listę — inaczej zostalibyśmy na adresie, pod którym
 * już nic nie ma.
 */
export function LeadDeleteButton({
  id,
  name,
  afterDelete = "refresh",
}: {
  id: string;
  name: string;
  afterDelete?: "refresh" | "list";
}) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń"
      variant="ghost"
      title="Usunąć to zgłoszenie?"
      description={`Zgłoszenie od „${name}” zostanie trwale usunięte razem z danymi kontaktowymi. Tej operacji nie da się cofnąć.`}
      onConfirm={async () => {
        await deleteLeadAction(id);
        showToast("Zgłoszenie usunięte.", "success");
        if (afterDelete === "list") {
          router.push("/admin/leady");
        } else {
          router.refresh();
        }
      }}
    />
  );
}
