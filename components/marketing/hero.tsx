import { Fragment } from "react";
import { ButtonLink } from "@/components/ui/button";
import { MessengerIcon, ChefHatIcon } from "@/components/marketing/icons";
import { SITE } from "@/lib/utils";
import { getHomepageContentRepository } from "@/lib/database/repositories/homepage-content-repository";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { TrackedPhoneLink } from "@/components/marketing/tracked-phone-link";

/**
 * Homepage hero (spec §3). Headline/description/photo are editable at
 * /admin/strona-glowna (lib/database/repositories/homepage-content-repository.ts);
 * with no photo picked yet, this falls back to the original placeholder
 * visual rather than a fake stock image (spec §31/§42).
 *
 * Mobile layout went through several iterations on 2026-08-16 before
 * settling: stacked photo-on-top/text-below → photo as a full-bleed
 * `absolute inset-0` background behind the text (per Aga's "zdjecie osoby
 * jest w tle a tekst jest obok postaci i przyciski", with the white
 * legibility scrim from that pass removed per her follow-up "bez bialej
 * poswiaty na zdjeciu") → briefly switched to stacked photo-on-top/text-below
 * again with an uncropped photo (see the now-superseded "Mobile photo
 * overlay retired" note that used to live here) → reverted back to the
 * `absolute inset-0` overlay per Aga's explicit follow-up the same day
 * ("na telefonie wroc do poprzedniej wersji z napisami i przyciskami na tle
 * zdjecia tylko zdjecie na full szerokosc") — she wanted the overlay layout
 * back, just with the photo full-width (the frame-removal fix below already
 * covers that; it was never tied to which photo layout is active). The old
 * floating "RATY 0%"
 * badge stays removed — the same installment terms are covered, prominently,
 * in the dedicated installment section further down the homepage (the
 * checklist that used to repeat them under the hero copy was removed
 * entirely per Aga's explicit request 2026-08-19). The CTA
 * buttons are sized down on mobile (`size="md"` with a smaller className
 * override, restored to the original `lg` size at `lg:`) and the row's
 * width cap was dropped so each label stays on one line ("mniejsze
 * przyciski tak zeby napisy na przyciskach byly w jednej linii" — same
 * feedback round). The inline phone/Messenger row stays desktop-only
 * (`lg:flex`): on mobile it would be a third copy of the same two actions,
 * since the header's top contact bar already covers desktop (Header,
 * `hidden md:block`) and StickyMobileCta already covers phone/tablet width
 * (`lg:hidden`) — see components/layout/sticky-cta.tsx; kept as approved
 * when this was last confirmed with Aga.
 * At `lg:` the photo reverts to a normal grid column (no overlay, own
 * rounded corners). It used to force a `aspect-[4/3]` box with
 * `object-cover`, which crops whatever doesn't fit that ratio — Aga flagged
 * the desktop photo was getting cut off (2026-08-16, "zdjecie glowne nie
 * bylo obciete... wersja na komputer"). Fixed by dropping the fixed aspect
 * box at `lg:` (`lg:h-auto`) and switching to `object-contain` there, so
 * the image renders at its own intrinsic aspect ratio inside the grid
 * column — whole photo always visible, never cropped.
 *
 * Mobile card frame removed (2026-08-16, annotated screenshot: "usuń ramkę
 * i rozciągnij zdjecie na full szerokosc") — the outer wrapper no longer
 * carries `rounded-2xl border bg-neutral-0 shadow`; instead it cancels
 * `container-page`'s own inline padding below `lg:` (`-mx-5 md:-mx-8
 * lg:mx-0`, matching that padding exactly at each breakpoint) so the
 * full-bleed photo reaches the true screen edges instead of stopping at a
 * card boundary. The text column's own padding is unchanged, so headline/
 * button alignment with the rest of the page is unaffected. The two CTA
 * buttons move from a stacked full-width column to one row on mobile too
 * (same annotated screenshot: "przyciski miejsze w jednym rzędzie") —
 * `flex-1` splits the row evenly and text is allowed to wrap to two lines
 * (`whitespace-normal`, `h-auto` replacing the fixed `h-11`) since neither
 * label reliably fits one line at roughly half the screen width; desktop
 * (`lg:`) keeps the original single-line pill sizing.
 *
 * Mobile photo briefly went uncropped (`object-contain`, normal flow,
 * stacked above the text) per "na telefonie zmien aby zdjecie nie bylo
 * uciete tylko cale", matching the desktop fix below — but Aga's next
 * message asked to go back to the overlay layout specifically, so mobile
 * went back to `absolute inset-0` + `object-cover` (cropped to whatever
 * height the text needs). Aga then confirmed she liked the overlay layout
 * itself ("na telefonie wyglada ekstra") but flagged the photo was still
 * getting cropped and asked for the full, uncropped frame while leaving the
 * text/buttons exactly as they are — so only the image's `object-fit`
 * changed, from `object-cover` to `object-contain` (matching what `lg:`
 * already used), with the mobile-only `object-[70%_center]` crop-focal-point
 * dropped since contain doesn't crop. The `absolute inset-0` overlay
 * mechanism, the full-bleed width, and the text/button layout are all
 * untouched. Net effect: the photo now always renders whole inside the
 * overlay box (letterboxing on the page's white background where its aspect
 * ratio doesn't fill the box exactly, rather than being cropped to fill it).
 *
 * Desktop typography enlarged (2026-08-16, annotated screenshot: "na
 * komputerze powiekasz napisy do formatu jak czerwona ramka") — headline,
 * description, checklist and the CTA row all step up one size at `lg:`
 * (e.g. `lg:text-5xl` → `lg:text-6xl`) so the text column reads as more
 * substantial next to the photo; mobile sizing is untouched.
 *
 * SIERPIEŃ 2026 — NAKŁADKA NA TELEFONIE WYCOFANA (znowu), i tym razem
 * z powodu, który wcześniej nie istniał: nowe zdjęcie ma napis „Przedstawiciel
 * Thermomix” WPISANY W GRAFIKĘ, u góry kadru. Nagłówek strony leżał dokładnie
 * na tym napisie — dwa różne teksty jeden na drugim, oba nieczytelne.
 * Nie da się tego rozwiązać samym przesuwaniem nagłówka, bo zdjęcie jest
 * kwadratowe i przy `object-contain` jego napis wędruje razem z kadrem.
 *
 * Dlatego na telefonie zdjęcie wraca do normalnego przepływu: całe, na pełną
 * szerokość, a tekst i przyciski POD nim. Nic się nie nakłada i nic nie jest
 * ucięte. `max-w-[13rem]` przy nagłówku i opisie zniknęło — ten limit istniał
 * tylko po to, żeby tekst nie wchodził na postać na zdjęciu, a przy układzie
 * pionowym niepotrzebnie zwężał kolumnę do jednej trzeciej ekranu.
 *
 * Gdyby Aga wolała wrócić do napisów na tle zdjęcia, trzeba do tego zdjęcia
 * BEZ wpisanego napisu — wtedy wystarczy przywrócić `absolute inset-0` na
 * kontenerze zdjęcia. Układ na komputerze (`lg:`) jest nietknięty.
 */
export async function Hero() {
  const content = await getHomepageContentRepository().get();
  const heroImage = content.heroImageMediaId ? await getMediaRepository().get(content.heroImageMediaId) : null;

  return (
    <section className="pt-8 md:pt-14">
      <div className="container-page">
        <div className="relative -mx-5 overflow-hidden md:-mx-8 lg:mx-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:overflow-visible">
          <div className="relative lg:order-2">
            <div className="relative h-full w-full overflow-hidden lg:h-auto lg:rounded-2xl">
              {heroImage ? (
                // eslint-disable-next-line @next/next/no-img-element -- media library asset, URL z własnego serwera (/media/...)
                <img
                  src={heroImage.url}
                  alt={heroImage.altText}
                  className="h-full w-full object-contain object-center lg:h-auto lg:w-full"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-50 via-neutral-50 to-brand-100 text-brand-700">
                  <ChefHatIcon width={56} height={56} strokeWidth={1.3} />
                  <p className="max-w-[14rem] text-center text-sm text-brand-800/70">
                    Miejsce na zdjęcie Agi z Thermomixem TM7 — dodaj w bibliotece Media i wybierz je w panelu
                    „Strona główna”.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="relative px-5 py-6 sm:px-6 sm:py-8 lg:order-1 lg:px-0 lg:py-0">
            <h1 className="text-balance font-display text-2xl leading-[1.1] text-neutral-900 sm:text-3xl lg:max-w-none lg:text-6xl lg:leading-[1.05]">
              {/* "|" in heroHeadline (edited at /admin/strona-glowna, a single-line
                  input) forces a manual line break here — e.g. "Przedstawiciel
                  Thermomix®|w Małopolsce" renders on two lines regardless of
                  viewport width, per Aga's explicit request 2026-08-19. Plain
                  headlines without "|" render exactly as before. */}
              {content.heroHeadline.split("|").map((line, index, lines) => (
                <Fragment key={index}>
                  {line.trim()}
                  {index < lines.length - 1 ? <br /> : null}
                </Fragment>
              ))}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:max-w-sm lg:mt-6 lg:max-w-lg lg:text-lg">
              {content.heroDescription}
            </p>

            <div className="mt-5 flex flex-row gap-2 lg:mt-8 lg:flex-wrap lg:gap-4">
              <ButtonLink
                href="/prezentacja"
                size="md"
                className="h-auto flex-1 whitespace-normal px-3 py-2.5 text-center text-xs leading-snug lg:h-[3.75rem] lg:flex-none lg:w-auto lg:whitespace-nowrap lg:px-9 lg:py-0 lg:text-lg"
              >
                Umów bezpłatną prezentację
              </ButtonLink>
              <ButtonLink
                href="/oferta"
                variant="outline"
                size="md"
                className="h-auto flex-1 whitespace-normal bg-neutral-0 px-3 py-2.5 text-center text-xs leading-snug lg:h-[3.75rem] lg:flex-none lg:w-auto lg:bg-transparent lg:whitespace-nowrap lg:px-9 lg:py-0 lg:text-lg"
              >
                Sprawdź ofertę
              </ButtonLink>
            </div>

            <div className="mt-6 hidden flex-wrap items-center gap-6 text-sm lg:flex lg:text-base">
              <TrackedPhoneLink
                placement="hero"
                className="flex items-center gap-2 font-medium text-neutral-800 hover:text-brand-700"
                label={`Zadzwoń: ${SITE.phone}`}
              />
              <a
                href={SITE.messengerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-600 hover:text-brand-700"
              >
                <MessengerIcon width={19} height={19} />
                Napisz do Agi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
