"use client";

import { usePathname } from "next/navigation";
import { PhoneIcon, MessengerIcon } from "@/components/marketing/icons";
import { track } from "@/lib/analytics/track";
import { SITE } from "@/lib/utils";

/**
 * Persistent bottom CTA bar on mobile (spec §30: "sticky CTA"). Two direct
 * contact actions instead of a single "umów prezentację" button — tapping
 * dials Aga's real number / opens her real Messenger chat immediately.
 * Hidden on desktop where the header top bar already exposes both. Kept as
 * its own client component so it can own the analytics click handlers
 * without making the whole layout a client component.
 */
export function StickyMobileCta() {
  const pathname = usePathname();

  return (
    /* `data-chrome="marketing"` — znika w zainstalowanej aplikacji,
       patrz `.tryb-aplikacji` w app/globals.css. Przyklejone „Zadzwoń /
       Napisz" to element strony sprzedażowej: w aplikacji klubu zasłania
       treść i namawia na kontakt kogoś, kto już jest klientką. */
    <div
      data-chrome="marketing"
      className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-neutral-0/95 p-3 backdrop-blur lg:hidden"
    >
      <a
        href={SITE.phoneHref}
        onClick={() => track("click_phone", { path: pathname, placement: "sticky-mobile-call" })}
        className="flex h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 text-base font-medium text-neutral-0 shadow-[var(--shadow-cta)] transition-colors hover:bg-brand-700"
      >
        <PhoneIcon width={18} height={18} />
        Zadzwoń
      </a>
      <a
        href={SITE.messengerHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("click_phone", { path: pathname, placement: "sticky-mobile-messenger" })}
        className="flex h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-full border border-neutral-300 text-base font-medium text-neutral-900 transition-colors hover:border-brand-500 hover:text-brand-700"
      >
        <MessengerIcon width={18} height={18} />
        Napisz
      </a>
    </div>
  );
}
