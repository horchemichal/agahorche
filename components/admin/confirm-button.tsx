"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Styled confirmation modal for destructive actions (spec §16: "delete
 * confirmations"). Deliberately not window.confirm — this keeps the same
 * visual language as the rest of the panel and lets us show a pending
 * state while the wrapped action (usually a Server Action) is in flight.
 */
export function ConfirmButton({
  label,
  confirmLabel = "Usuń",
  title,
  description,
  onConfirm,
  variant = "outline",
  className,
}: {
  label: ReactNode;
  confirmLabel?: string;
  title: string;
  description: string;
  onConfirm: () => Promise<void> | void;
  variant?: "outline" | "ghost";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const dialogId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector("button")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function handleConfirm() {
    setPending(true);
    try {
      await onConfirm();
      setOpen(false);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size="md"
        className={cn("h-9 px-3.5 text-sm text-danger hover:border-danger", className)}
        onClick={() => setOpen(true)}
      >
        {label}
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-neutral-900/40 px-4"
          role="presentation"
          onClick={() => !pending && setOpen(false)}
        >
          <div
            ref={dialogRef}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={`${dialogId}-title`}
            aria-describedby={`${dialogId}-desc`}
            className="w-full max-w-sm rounded-lg bg-neutral-0 p-6 shadow-[var(--shadow-card)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id={`${dialogId}-title`} className="mb-2 font-semibold text-neutral-900">
              {title}
            </h2>
            <p id={`${dialogId}-desc`} className="mb-6 text-sm text-muted">
              {description}
            </p>
            <div className="flex justify-end gap-2.5">
              <Button type="button" variant="ghost" onClick={() => setOpen(false)} disabled={pending}>
                Anuluj
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="bg-danger hover:bg-danger/90"
                onClick={handleConfirm}
                disabled={pending}
              >
                {pending ? "Usuwanie…" : confirmLabel}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
