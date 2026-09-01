import { LinkIcon } from "@/components/marketing/icons";
import { cn } from "@/lib/utils";

/**
 * Link do konkretnego przepisu na Cookidoo.
 *
 * 31.08.2026: przycisk zapasowy „Szukaj w Cookidoo" USUNIĘTY. Prowadził do
 * ogólnej wyszukiwarki i miał sens dopóki żaden przepis nie miał
 * potwierdzonego adresu — dziś każda pozycja w rejestrze wskazuje konkretne
 * danie, więc dodatkowy link do całej platformy niczego nie wnosi, a pod
 * jadłospisem wygląda jak druga, gorsza wersja tego samego.
 *
 * Przy `url === null` komponent nie renderuje nic. To celowe: lepiej brak
 * przycisku niż przycisk prowadzący donikąd konkretnie.
 */
export function CookidooButton({ url, className }: { url: string | null; className?: string }) {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-brand-300 px-3 py-1.5 text-xs font-medium text-brand-700 transition-colors hover:border-brand-500 hover:bg-brand-50",
        className,
      )}
    >
      <LinkIcon width={14} height={14} />
      Zobacz przepis w Cookidoo →
    </a>
  );
}
