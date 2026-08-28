"use client";

import { useRef, useState } from "react";
import { Label } from "@/components/ui/form-fields";
import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/types/media";

/**
 * Shared "pick a photo from the Media library" control, used by every admin
 * form that has an optional image field (strona główna, oferta, …) so the
 * picker behaves identically everywhere instead of being reimplemented per
 * form. Shows only the current selection as a small preview plus a
 * "Wybierz zdjęcie" button — the full thumbnail grid lives in a <dialog>
 * that isn't rendered (so no image requests fire) until the button is
 * clicked, instead of eagerly loading every media asset on page load.
 * Keeps a hidden input so the surrounding form still submits `name` the
 * same way a <select> would.
 */
export function ImagePicker({
  id,
  name,
  label,
  defaultValue,
  mediaAssets,
  fallbackNote,
}: {
  id: string;
  name: string;
  label: string;
  defaultValue: string | null;
  mediaAssets: MediaAsset[];
  fallbackNote: string;
}) {
  const [selected, setSelected] = useState<string>(defaultValue ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selectedAsset = mediaAssets.find((asset) => asset.id === selected) ?? null;

  function openPicker() {
    setIsOpen(true);
    dialogRef.current?.showModal();
  }

  function closePicker() {
    dialogRef.current?.close();
    setIsOpen(false);
  }

  function choose(assetId: string) {
    setSelected(assetId);
    closePicker();
  }

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input type="hidden" id={id} name={name} value={selected} />

      <div className="mt-1 flex items-center gap-4">
        <div className="flex aspect-square w-20 flex-none items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
          {selectedAsset ? (
            // eslint-disable-next-line @next/next/no-img-element -- media library asset, URL z własnego serwera (/media/...)
            <img
              src={selectedAsset.url}
              alt={selectedAsset.altText || selectedAsset.fileName}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="px-1.5 text-center text-[0.65rem] leading-tight text-muted">brak zdjęcia</span>
          )}
        </div>

        <div>
          <button
            type="button"
            onClick={openPicker}
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:border-brand-500 hover:text-brand-700"
          >
            {selectedAsset ? "Zmień zdjęcie" : "Wybierz zdjęcie"}
          </button>
          {selectedAsset && (
            <button
              type="button"
              onClick={() => setSelected("")}
              className="ml-3 text-sm text-muted underline decoration-neutral-300 underline-offset-2 hover:text-neutral-700"
            >
              Usuń
            </button>
          )}
          {selectedAsset && <p className="mt-1 max-w-[16rem] truncate text-xs text-muted">{selectedAsset.fileName}</p>}
        </div>
      </div>

      <p className="mt-2 text-xs text-muted">{fallbackNote}</p>

      <dialog
        ref={dialogRef}
        onClose={() => setIsOpen(false)}
        className="w-[calc(100%-2rem)] max-w-2xl rounded-lg border border-neutral-200 p-0 shadow-lg backdrop:bg-neutral-900/50"
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <h3 className="font-semibold text-neutral-900">Wybierz zdjęcie</h3>
          <button
            type="button"
            onClick={closePicker}
            aria-label="Zamknij"
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16} aria-hidden>
              <path d="M4.3 4.3a1 1 0 0 1 1.4 0L10 8.6l4.3-4.3a1 1 0 1 1 1.4 1.4L11.4 10l4.3 4.3a1 1 0 0 1-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 0 1-1.4-1.4L8.6 10 4.3 5.7a1 1 0 0 1 0-1.4Z" />
            </svg>
          </button>
        </div>

        {/* Only mounted while the dialog is open, so thumbnails aren't fetched until requested. */}
        {isOpen && (
          <div className="max-h-[60vh] overflow-y-auto p-4">
            {mediaAssets.length === 0 ? (
              <p className="p-4 text-center text-sm text-muted">
                Biblioteka mediów jest pusta — prześlij zdjęcia w sekcji „Media”.
              </p>
            ) : (
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                <button
                  type="button"
                  onClick={() => choose("")}
                  className={cn(
                    "flex aspect-square flex-col items-center justify-center gap-1 rounded-md border-2 bg-neutral-50 px-2 text-center text-xs text-muted transition-colors",
                    selected === "" ? "border-brand-600 bg-brand-50 text-brand-700" : "border-neutral-200 hover:border-neutral-300",
                  )}
                >
                  <span>brak</span>
                  <span>(placeholder)</span>
                </button>

                {mediaAssets.map((asset) => {
                  const isSelected = selected === asset.id;
                  return (
                    <button
                      type="button"
                      key={asset.id}
                      onClick={() => choose(asset.id)}
                      className={cn(
                        "group flex flex-col overflow-hidden rounded-md border-2 transition-colors",
                        isSelected ? "border-brand-600" : "border-neutral-200 hover:border-neutral-300",
                      )}
                      aria-pressed={isSelected}
                      title={asset.fileName}
                    >
                      <span className="relative block aspect-square w-full overflow-hidden bg-neutral-100">
                        {/* eslint-disable-next-line @next/next/no-img-element -- media library asset, URL z własnego serwera (/media/...), arbitrary count in a picker grid */}
                        <img src={asset.url} alt={asset.altText || asset.fileName} className="h-full w-full object-cover" />
                        {isSelected && (
                          <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-neutral-0">
                            <svg viewBox="0 0 20 20" fill="currentColor" width={12} height={12} aria-hidden>
                              <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" />
                            </svg>
                          </span>
                        )}
                      </span>
                      <span className="truncate px-1.5 py-1 text-[0.7rem] text-neutral-600">{asset.fileName}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </dialog>
    </div>
  );
}
