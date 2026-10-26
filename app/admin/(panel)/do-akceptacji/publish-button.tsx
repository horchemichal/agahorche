"use client";

import { useState, useTransition } from "react";
import { publishPromotionAction } from "./actions";

export function PublishButton({ id, title }: { id: string; title: string }) {
  const [pending, start] = useTransition();
  const [potwierdza, setPotwierdza] = useState(false);

  if (!potwierdza) {
    return (
      <button
        type="button"
        onClick={() => setPotwierdza(true)}
        className="w-full rounded-xl bg-brand-600 px-5 py-4 text-base font-semibold text-neutral-0 hover:bg-brand-700"
      >
        Opublikuj na stronie
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
      <p className="text-sm text-neutral-800">
        Ta oferta pojawi się na stronie od razu. Na pewno?
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          disabled={pending}
          onClick={() => start(() => publishPromotionAction(id))}
          className="flex-1 rounded-xl bg-brand-600 px-5 py-4 text-base font-semibold text-neutral-0 hover:bg-brand-700 disabled:opacity-60"
        >
          {pending ? "Publikuję…" : `Tak, publikuj`}
        </button>
        <button
          type="button"
          disabled={pending}
          onClick={() => setPotwierdza(false)}
          className="flex-1 rounded-xl border border-border px-5 py-4 text-base font-medium text-neutral-700 hover:bg-surface"
        >
          Jeszcze nie
        </button>
      </div>
      <p className="mt-2 text-xs text-muted">{title}</p>
    </div>
  );
}
