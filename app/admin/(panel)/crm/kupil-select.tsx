"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { setCrmKupilAction } from "./actions";
import { useToast } from "@/components/admin/toast";
import { cn } from "@/lib/utils";

/** Zmiana statusu prosto z listy — bez wchodzenia w edycję. */
export function KupilSelect({ id, kupil }: { id: string; kupil: boolean }) {
  const [current, setCurrent] = useState(kupil);
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const { showToast } = useToast();

  function onChange(next: boolean) {
    const previous = current;
    setCurrent(next);
    startTransition(async () => {
      const result = await setCrmKupilAction(id, next);
      if (result.error) {
        setCurrent(previous);
        showToast(result.error, "error");
        return;
      }
      showToast("Status zapisany.", "success");
      router.refresh();
    });
  }

  return (
    <select
      value={current ? "tak" : "nie"}
      disabled={pending}
      onChange={(e) => onChange(e.target.value === "tak")}
      aria-label="Status klienta"
      className={cn(
        "rounded-full border-0 px-3 py-1.5 text-sm font-medium focus-visible:outline-2",
        current ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700",
      )}
    >
      <option value="tak">Kupił</option>
      <option value="nie">Nie kupił</option>
    </select>
  );
}
