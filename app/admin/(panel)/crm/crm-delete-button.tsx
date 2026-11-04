"use client";

import { useRouter } from "next/navigation";
import { ConfirmButton } from "@/components/admin/confirm-button";
import { useToast } from "@/components/admin/toast";
import { deleteCrmKlientAction } from "./actions";

export function CrmDeleteButton({ id, name }: { id: string; name: string }) {
  const router = useRouter();
  const { showToast } = useToast();

  return (
    <ConfirmButton
      label="Usuń klienta"
      title="Usunąć tego klienta?"
      description={`„${name}” zostanie trwale usunięty z CRM.`}
      onConfirm={async () => {
        await deleteCrmKlientAction(id);
        showToast("Klient usunięty.", "success");
        router.push("/admin/crm");
      }}
    />
  );
}
