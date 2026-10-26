"use client";

import { useRef, useState, useTransition } from "react";
import { Label } from "@/components/ui/form-fields";
import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/types/media";
import { uploadImageInlineAction } from "@/lib/admin/upload-image-action";

/**
 * Wspólny wybór zdjęcia w formularzach panelu (strona główna, oferta, promocje).
 * 22.10.2026: zdjęcie można wgrać prosto z komputera/telefonu przyciskiem „Wgraj zdjęcie”
 * (także z okna biblioteki) — trafia do Mediów i od razu zostaje wybrane.
 * Siatka miniatur renderuje się dopiero po otwarciu okna, żeby nie ładować wszystkich zdjęć z góry.
 * Ukryte pole trzyma id zdjęcia, więc formularz wysyła name tak jak wcześniej.
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
  const [assets, setAssets] = useState<MediaAsset[]>(mediaAssets);
  const [selected, setSelected] = useState<string>(defaultValue ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const fileInDialogRef = useRef<HTMLInputElement>(null);
  const selectedAsset = assets.find((asset) => asset.id === selected) ?? null;

  function openPicker() {
    setIsOpen(true);
    requestAnimationFrame(() => dialogRef.current?.showModal());
  }
  function closePicker() {
    dialogRef.current?.close();
    setIsOpen(false);
  }
  function choose(assetId: string) {
    setSelected(assetId);
    closePicker();
  }
  function onFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setError(null);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("altText", label);
    startTransition(async () => {
      const res = await uploadImageInlineAction(fd);
      if (!res.asset) {
        setError(res.error ?? "Nie udało się wgrać zdjęcia.");
        return;
      }
      const nowe = res.asset;
      setAssets((prev) => [nowe, ...prev.filter((a) => a.id !== nowe.id)]);
      setSelected(nowe.id);
      closePicker();
    });
  }

  const przycisk =
    "inline-flex h-10 items-center justify-center rounded-lg border border-border bg-white px-4 text-sm font-medium text-neutral-800 hover:bg-surface disabled:opacity-60";

  return (
    <div>
      <Label htmlFor={id + "-wgraj"}>{label}</Label>
      <input type="hidden" id={id} name={name} value={selected} />
      <div className="mt-2 flex flex-wrap items-center gap-4">
        {selectedAsset ? (
          // eslint-disable-next-line @next/next/no-img-element -- miniatura z biblioteki mediów
          <img
            src={selectedAsset.url}
            alt={selectedAsset.altText}
            className="h-24 w-32 rounded-lg border border-border object-cover"
          />
        ) : (
          <div className="flex h-24 w-32 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted">
            brak zdjęcia
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            id={id + "-wgraj"}
            onClick={() => fileRef.current?.click()}
            disabled={pending}
            className={cn(przycisk, "border-brand-500 bg-brand-50 text-brand-700")}
          >
            {pending ? "Wgrywam…" : "Wgraj zdjęcie z komputera"}
          </button>
          <button type="button" onClick={openPicker} disabled={pending} className={przycisk}>
            Wybierz z biblioteki
          </button>
          {selected && (
            <button type="button" onClick={() => setSelected("")} disabled={pending} className={przycisk}>
              Usuń zdjęcie
            </button>
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {!selectedAsset && <p className="mt-2 text-xs text-muted">{fallbackNote}</p>}

      {isOpen && (
        <dialog
          ref={dialogRef}
          onClose={() => setIsOpen(false)}
          className="w-[min(92vw,52rem)] rounded-2xl p-0 backdrop:bg-black/40"
        >
          <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3">
            <p className="font-medium text-neutral-900">Wybierz zdjęcie</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => fileInDialogRef.current?.click()}
                disabled={pending}
                className={cn(przycisk, "border-brand-500 bg-brand-50 text-brand-700")}
              >
                {pending ? "Wgrywam…" : "+ Wgraj z komputera"}
              </button>
              <button type="button" onClick={closePicker} className={przycisk}>
                Zamknij
              </button>
            </div>
            <input ref={fileInDialogRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
          </div>
          <div className="max-h-[65vh] overflow-y-auto p-5">
            {error && <p className="mb-3 text-sm text-red-600">{error}</p>}
            {assets.length === 0 ? (
              <p className="text-sm text-muted">Biblioteka jest pusta — kliknij „Wgraj z komputera”.</p>
            ) : (
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {assets.map((asset) => (
                  <button
                    type="button"
                    key={asset.id}
                    onClick={() => choose(asset.id)}
                    className={cn(
                      "overflow-hidden rounded-lg border-2",
                      asset.id === selected ? "border-brand-500" : "border-transparent hover:border-border",
                    )}
                    title={asset.altText || asset.fileName}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- miniatura z biblioteki mediów */}
                    <img src={asset.url} alt={asset.altText} loading="lazy" className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </dialog>
      )}
    </div>
  );
}
