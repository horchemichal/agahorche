/** Formats a price stored in cents (spec §5) as Polish złoty. */
export function formatPln(cents: number | null | undefined): string | null {
  if (cents == null) return null;
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

/** Renders cents as a plain decimal string for pre-filling a form input, e.g. 599900 -> "5999" or "5999.5" -> handled at 2dp max. */
export function centsToInputValue(cents: number | null | undefined): string {
  if (cents == null) return "";
  return (cents / 100).toString();
}

/**
 * Parses an admin form's free-text price input ("5999", "5999,99", "5999.99")
 * into integer cents. Returns null for blank input, NaN-marker `undefined`
 * for genuinely unparsable input so the caller can reject it explicitly
 * rather than silently storing 0 (spec §42: never invent/guess data).
 */
export function parsePlnToCents(raw: string): number | null | undefined {
  const trimmed = raw.trim();
  if (trimmed === "") return null;
  const normalized = trimmed.replace(",", ".").replace(/\s/g, "");
  const value = Number(normalized);
  if (!Number.isFinite(value) || value < 0) return undefined;
  return Math.round(value * 100);
}

/** Human-readable file size for the media library ("482 KB", "1.4 MB"). */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(value < 10 ? 1 : 0)} ${units[unitIndex]}`;
}
