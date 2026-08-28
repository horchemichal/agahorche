"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateAltTextAction } from "./actions";
import { useToast } from "@/components/admin/toast";
import { Card, Badge } from "@/components/ui/card";
import { MediaDeleteButton } from "./media-delete-button";
import { formatBytes } from "@/lib/format";
import type { MediaAsset } from "@/types/media";

const IMAGE_MIME_PREFIX = "image/";

export function AssetCard({ asset }: { asset: MediaAsset }) {
  const [altText, setAltText] = useState(asset.altText);
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const { showToast } = useToast();

  function saveIfChanged() {
    if (altText === asset.altText) return;
    startTransition(async () => {
      await updateAltTextAction(asset.id, altText);
      showToast("Opis alternatywny zapisany.", "success");
      router.refresh();
    });
  }

  const isPreviewable = asset.mimeType.startsWith(IMAGE_MIME_PREFIX) && asset.mimeType !== "image/svg+xml";

  return (
    <Card className="!p-3">
      <div className="relative mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-md bg-neutral-100">
        {isPreviewable || asset.mimeType === "image/svg+xml" ? (
          // eslint-disable-next-line @next/next/no-img-element -- external/local upload path, dimensions unknown ahead of time
          <img src={asset.url} alt={asset.altText} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <span className="text-xs text-muted">{asset.mimeType}</span>
        )}
      </div>

      <p className="mb-1 truncate text-sm font-medium text-neutral-900" title={asset.fileName}>
        {asset.fileName}
      </p>
      <div className="mb-2 flex items-center gap-1.5">
        <Badge tone="neutral">{formatBytes(asset.sizeBytes)}</Badge>
        <Badge tone="neutral">lokalnie</Badge>
      </div>

      <label className="mb-1 block text-xs font-medium text-neutral-600" htmlFor={`alt-${asset.id}`}>
        Opis alternatywny (alt)
      </label>
      <input
        id={`alt-${asset.id}`}
        value={altText}
        onChange={(e) => setAltText(e.target.value)}
        onBlur={saveIfChanged}
        disabled={pending}
        placeholder="Opisz obraz…"
        className="mb-3 w-full rounded-md border border-neutral-300 bg-neutral-0 px-2.5 py-1.5 text-xs text-neutral-900"
      />

      <div className="flex items-center justify-between gap-2">
        <a href={asset.url} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-700 hover:underline">
          Otwórz plik
        </a>
        <MediaDeleteButton id={asset.id} fileName={asset.fileName} />
      </div>
    </Card>
  );
}
