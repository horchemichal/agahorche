"use client";

import { useState } from "react";
import { getShoppingList } from "@/data/diets/shopping-lists";
import { CartIcon, CheckCircleIcon } from "@/components/marketing/icons";
import { cn } from "@/lib/utils";

/**
 * Categorized shopping list (spec §17). "Odznacz produkty", "Kopiuj" and
 * (ETAP 6) "Pobierz PDF" all work for real — the PDF is rendered
 * server-side by /api/diety/shopping-list-pdf (lib/diets/shopping-list-pdf.ts)
 * from the same data this component reads, with checked items carried
 * along as a query param so the download matches what's on screen.
 */
export function ShoppingList({ planId }: { planId: string }) {
  const groups = getShoppingList(planId);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  if (!groups) return null;
  const nonEmptyGroups = groups.filter((g) => g.items.length > 0);

  function toggle(item: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  }

  async function copyList() {
    const text = nonEmptyGroups.map((g) => `${g.category}:\n${g.items.map((i) => `- ${i}`).join("\n")}`).join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail (permissions/insecure context) — silently
      // no-op rather than throwing an unhandled error in the UI.
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-neutral-0 p-5 md:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CartIcon width={20} height={20} className="text-brand-600" />
          <h3 className="font-display text-lg text-neutral-900">Lista zakupów</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copyList}
            className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:border-brand-400"
          >
            {copied ? "Skopiowano ✓" : "Kopiuj"}
          </button>
          <a
            href={`/api/diety/shopping-list-pdf?planId=${encodeURIComponent(planId)}${
              checked.size > 0 ? `&checked=${encodeURIComponent(Array.from(checked).join(","))}` : ""
            }`}
            className="rounded-full border border-brand-300 px-3 py-1.5 text-xs font-medium text-brand-700 transition-colors hover:border-brand-500 hover:bg-brand-50"
          >
            Pobierz PDF
          </a>
        </div>
      </div>

      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {nonEmptyGroups.map((group) => (
          <div key={group.category}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">{group.category}</p>
            <ul className="flex flex-col gap-1.5">
              {group.items.map((item) => {
                const isChecked = checked.has(item);
                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => toggle(item)}
                      className={cn(
                        "flex w-full items-center gap-2 text-left text-sm transition-colors",
                        isChecked ? "text-neutral-400 line-through" : "text-neutral-700 hover:text-brand-700",
                      )}
                    >
                      <CheckCircleIcon
                        width={15}
                        height={15}
                        className={isChecked ? "text-brand-500" : "text-neutral-300"}
                      />
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
