import { LinkIcon } from "@/components/marketing/icons";
import { cn } from "@/lib/utils";

/**
 * Spec §12: "Nie kopiuj pełnych przepisów Cookidoo. Nie twórz fikcyjnych
 * linków. Jeżeli URL nie jest znany: [COOKIDOO_URL]." — still true, and
 * still respected: no recipe here has a confirmed *direct* Cookidoo URL,
 * so we never fabricate one.
 *
 * ETAP 5 (2026-08-19): rather than leaving the button permanently disabled
 * until Aga confirms individual links one by one, it now falls back to
 * Cookidoo's own real, public search page —
 * https://cookidoo.pl/search/pl — verified to exist (see deployment
 * notes). This is a genuine, working destination, not a claim about *this*
 * specific recipe's presence on Cookidoo, so it doesn't violate the
 * "nie wymyślaj" rule the way a guessed deep-link would. We deliberately do
 * NOT append an unverified query-string parameter (e.g. `?q=...`) to
 * pre-fill the search — Cookidoo's search-URL query syntax isn't confirmed,
 * and a wrong parameter could silently produce broken/irrelevant results
 * that look like a real match. The visible label makes the distinction
 * honest: "Szukaj w Cookidoo" (search), never "Zobacz ten przepis" (view
 * this exact recipe), for the fallback case.
 */
const COOKIDOO_SEARCH_URL = "https://cookidoo.pl/search/pl";

export function CookidooButton({ url, className }: { url: string | null; className?: string }) {
  if (!url) {
    return (
      <a
        href={COOKIDOO_SEARCH_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-brand-400 hover:text-brand-700",
          className,
        )}
        title="Bezpośredni link do tego przepisu nie został jeszcze potwierdzony — otwiera wyszukiwarkę Cookidoo"
      >
        <LinkIcon width={14} height={14} />
        Szukaj w Cookidoo →
      </a>
    );
  }

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
