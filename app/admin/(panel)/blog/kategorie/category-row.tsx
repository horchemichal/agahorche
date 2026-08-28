"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/admin/toast";
import { saveCategoryLabelAction } from "../actions";
import type { BlogCategory } from "@/types/blog";

export function CategoryRow({ slug, label }: { slug: BlogCategory; label: string }) {
  const [value, setValue] = useState(label);
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const { showToast } = useToast();

  const dirty = value.trim() !== label && value.trim() !== "";

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-neutral-0 px-4 py-3">
      <code className="w-40 shrink-0 text-xs text-muted">{slug}</code>
      <Input value={value} onChange={(e) => setValue(e.target.value)} className="max-w-xs" />
      <Button
        type="button"
        variant="outline"
        size="md"
        className="h-9 shrink-0 px-3.5 text-sm"
        disabled={!dirty || pending}
        onClick={() =>
          startTransition(async () => {
            await saveCategoryLabelAction(slug, value);
            showToast("Etykieta zapisana.", "success");
            router.refresh();
          })
        }
      >
        {pending ? "Zapisywanie…" : "Zapisz"}
      </Button>
    </div>
  );
}
