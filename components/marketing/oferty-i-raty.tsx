import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { ChefHatIcon } from "@/components/marketing/icons";
import { InstallmentCalculator } from "@/components/marketing/installment-calculator";
import { formatPln } from "@/lib/format";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { getOffersRepository } from "@/lib/database/repositories/offers-repository";
import { pobierzUstawieniaFinansowania } from "@/lib/database/repositories/financing-settings-repository";
import { obrazResponsywny } from "@/lib/obrazy";
import { ofertaObowiazuje } from "@/lib/offers/window";
import { biezacyMiesiac } from "@/lib/seo/lokalne";
import { dataPl } from "@/lib/wymiana";
import type { Offer } from "@/types/offer";

/**
 * Moduł „Aktualne oferty + kalkulator rat” do wstawiania w treść poradników
 * (23.10.2026, prośba Michała: na /thermomix/wymiana zaraz po „W skrócie”).
 * Źródło prawdy: oferty z /admin/oferta (te same co na stronie głównej) i
 * ustawienia finansowania z /admin/ustawienia (raty 0%). Karty są poziome,
 * bo kolumna artykułu ma ~600 px — trzy karty obok siebie byłyby za wąskie.
 * bezWymiany: pomija ofertę wymiany (na stronie wymiany pokazuje ją już
 * karta statusu nad modułem).
 */
const NAZWA_WYMIANY = /wymie[nń]|wymian/i;

function cenaOferty(o: Offer): { glowna: string; dopisek: string | null } {
  const cena = formatPln(o.priceCents);
  const rata = o.installmentCents ? formatPln(o.installmentCents) : null;
  const ileRat = o.installmentMonths ? o.installmentMonths + " rat" : null;
  if (cena) return { glowna: cena, dopisek: rata ? "lub " + rata + "/mies." + (ileRat ? " · " + ileRat : "") : null };
  if (rata) return { glowna: rata + "/mies.", dopisek: ileRat };
  return { glowna: "Cena do ustalenia", dopisek: "zapytaj o szczegóły" };
}

export async function OfertyIRaty({ bezWymiany = false }: { bezWymiany?: boolean }) {
  const now = new Date();
  let wszystkie: Offer[] = [];
  try {
    wszystkie = await getOffersRepository().list();
  } catch {
    return null;
  }
  const oferty = wszystkie
    .filter((o) => o.isActive && ofertaObowiazuje(o.startsAt, o.endsAt, now))
    .filter((o) => !(bezWymiany && NAZWA_WYMIANY.test(o.productName)))
    .slice(0, 3);
  const media = getMediaRepository();
  const obrazy = await Promise.all(
    oferty.map((o) => (o.imageMediaId ? media.get(o.imageMediaId).catch(() => null) : Promise.resolve(null))),
  );
  const glowna = wszystkie.find((o) => o.isPrimary && o.isActive && o.priceCents) ?? wszystkie.find((o) => o.isActive && o.priceCents);
  const cenaKalkulatora = glowna?.priceCents ? Math.round(glowna.priceCents / 100) : null;
  const finansowanie = await pobierzUstawieniaFinansowania();

  if (oferty.length === 0 && !cenaKalkulatora) return null;

  return (
    <section id="aktualne-oferty" aria-labelledby="aktualne-oferty-tytul" className="mt-10 scroll-mt-28">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Aktualne oferty · {biezacyMiesiac()}</p>
          <h2 id="aktualne-oferty-tytul" className="mt-1 font-display text-2xl text-neutral-900">
            Thermomix TM7 — co mogę zaproponować teraz
          </h2>
        </div>
        {finansowanie.ratyZeroDostepne && (
          <a
            href="#kalkulator-rat"
            className="rounded-full bg-brand-700 px-3.5 py-1.5 text-xs font-semibold text-neutral-0 hover:bg-brand-500"
          >
            Raty 0% dostępne
          </a>
        )}
      </div>

      {oferty.length > 0 && (
        <ul className="mt-5 space-y-3">
          {oferty.map((o, i) => {
            const obraz = obrazy[i];
            const { glowna: cena, dopisek } = cenaOferty(o);
            const doKiedy = o.endsAt ? dataPl(o.endsAt) : null;
            return (
              <li
                key={o.id}
                className="rounded-2xl border border-border bg-neutral-0 p-3 shadow-[var(--shadow-card)] transition-colors hover:border-brand-500 sm:p-4"
              >
                <div className="flex gap-4">
                  <Link href={"/oferta/" + o.id} className="block w-24 flex-none sm:w-32" tabIndex={-1} aria-hidden="true">
                    {obraz ? (
                      <img
                        {...obrazResponsywny(obraz.url, "128px")}
                        alt=""
                        loading="lazy"
                        className="aspect-square w-full rounded-xl object-cover"
                      />
                    ) : (
                      <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        <ChefHatIcon width={32} height={32} strokeWidth={1.3} />
                      </div>
                    )}
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[0.95rem] font-semibold leading-snug text-neutral-900 sm:text-base">
                        <Link href={"/oferta/" + o.id} className="hover:text-brand-700">
                          {o.productName}
                        </Link>
                      </h3>
                      {(o.bonuses.length > 0 || doKiedy) && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {doKiedy && (
                            <span className="rounded-full bg-neutral-900 px-2.5 py-0.5 text-[0.7rem] font-medium text-neutral-0">
                              do {doKiedy}
                            </span>
                          )}
                          {o.bonuses.slice(0, 2).map((b) => (
                            <span key={b} className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[0.7rem] font-medium text-brand-700">
                              {b}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="mt-2 font-display text-xl text-neutral-900">
                        {cena}
                        {dopisek && <span className="ml-2 font-sans text-xs text-muted">{dopisek}</span>}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-3 sm:w-44 sm:flex-col sm:items-stretch sm:gap-1.5">
                      <ButtonLink href="/prezentacja" className="h-10 justify-center whitespace-nowrap px-3.5 text-sm sm:px-4">
                        Zapytaj o ofertę
                      </ButtonLink>
                      <Link
                        href={"/oferta/" + o.id}
                        className="text-center text-xs text-muted underline underline-offset-4 hover:text-brand-700"
                      >
                        Szczegóły
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {cenaKalkulatora && (
        <div id="kalkulator-rat" className="mt-6 scroll-mt-28">
          <InstallmentCalculator
            initialPriceZl={cenaKalkulatora}
            ratyZeroDostepne={finansowanie.ratyZeroDostepne}
            ratyZeroKomunikat={finansowanie.ratyZeroKomunikat}
          />
        </div>
      )}

      <p className="mt-3 text-xs text-muted">
        Ceny i promocje Vorwerk Polska, stan na {biezacyMiesiac()}. Wszystkie oferty i raty ustalisz ze mną przy
        prezentacji albo przez telefon:{" "}
        <a href="tel:+48517185691" className="font-medium text-brand-700 underline underline-offset-4">
          517 185 691
        </a>
        .
      </p>
    </section>
  );
}
