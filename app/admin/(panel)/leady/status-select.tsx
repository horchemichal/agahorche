"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateLeadStatusAction } from "./actions";
import { useToast } from "@/components/admin/toast";
import { cn } from "@/lib/utils";
import type { LeadStatus } from "@/types/lead";

export const LEAD_STATUS_LABEL: Record<LeadStatus, string> = {
  NEW: "Nowy",
  CONTACTED: "Skontaktowano",
  PRESENTATION_BOOKED: "Prezentacja umówiona",
  SOLD: "Sprzedano",
  LOST: "Utracony",
};

const STATUS_TONE: Record<LeadStatus, string> = {
  NEW: "bg-brand-50 text-brand-700",
  CONTACTED: "bg-amber-50 text-amber-700",
  PRESENTATION_BOOKED: "bg-blue-50 text-blue-700",
  SOLD: "bg-green-50 text-green-700",
  LOST: "bg-neutral-100 text-neutral-500",
};

export function StatusSelect({ id, status }: { id: string; status: LeadStatus }) {
  const [current, setCurrent] = useState(status);
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const { showToast } = useToast();

  function onChange(next: string) {
    const previous = current;
    setCurrent(next as LeadStatus);
    startTransition(async () => {
      const result = await updateLeadStatusAction(id, next);
      if (result.error) {
        setCurrent(previous);
        showToast(result.error, "error");
        return;
      }
      showToast("Status zaktualizowany.", "success");
      router.refresh();
    });
  }

  return (
    <select
      value={current}
      disabled={pending}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "rounded-full border-0 px-3 py-1.5 text-xs font-medium focus-visible:outline-2",
        STATUS_TONE[current],
      )}
    >
      {(Object.keys(LEAD_STATUS_LABEL) as LeadStatus[]).map((s) => (
        <option key={s} value={s}>
          {LEAD_STATUS_LABEL[s]}
        </option>
      ))}
    </select>
  );
}
