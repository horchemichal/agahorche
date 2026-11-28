import Link from "next/link";
import type { DistrictContent } from "@/data/locations/districts/typy";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLdScript } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { LokalnaGora } from "./lokalna-gora";
import { ButtonLink } from "@/components/ui/button";
import { webPageSchema } from "@/lib/seo/schema";
import { getDistrictsForCity } from "@/data/locations/districts";
import { naglowekPrzedstawiciela } from "@/lib/seo/naglowek-przedstawiciela";
import { pytanieKtoPrzedstawicielem } from "@/lib/seo/lokalne";

/**
 * Strona dzielnicy. Świadomie KRÓTSZA i uboższa od strony miasta.
 *
 * Czego tu NIE MA i dlaczego:
 * — kart oferty i kalkulatora rat: te żyją na stronie miasta. Powielenie ich
 *   na osiemnastu dzielnicach zrobiłoby z nich osiemnaście kopii Krakowa,
 *   czyli `doorway pages`. Zamiast tego jest jeden wyraźny przycisk w górę.
 * — sekcji o TM7, o cenie, o tym „kto poprowadzi prezentację”: to samo.
 * — zdjęć: strona dzielnicy nie udaje, że mamy zdjęcia z każdej dzielnicy.
 *   Gdy Aga przyśle zdjęcia z realnych prezentacji z konkretnych dzielnic,
 *   wtedy — i tylko wtedy — będzie sens je tu wstawić.
 *
 * Co tu JEST i czego nie ma nikt inny: kuchnia i dojazd opisane pod kątem
 * kogoś, kto przyjeżdża z urządzeniem i gotuje na cudzym blacie. Rok budowy
 * bloku decyduje, czy kuchnia ma 4 m² i instalację aluminiową, czy aneks
 * z wyspą — i to jest informacja, po którą człowiek z tej dzielnicy wraca.
 *
 * Formularz zostaje, bo bez niego strona nie ma po co istnieć w lejku —
 * ale jest jeden, na dole, a nie trzy jak na stronie miasta.
 */
export function DistrictTemplate({ content }: { content: DistrictContent }) {
  /**
   * Sąsiednie dzielnice tego samego miasta.
   *
   * Do audytu z 31 sierpnia 2026 każda strona dzielnicy była liściem: jedyne
   * wyjście prowadziło w górę, na stronę miasta, a jedyne wejście szło z tej
   * samej strony miasta. Trzydzieści jeden stron nie przekazywało sobie nic
   * i każda wisiała na jednym linku przychodzącym.
   *
   * Ten blok robi z nich siatkę. Nie jest to wypełniacz: człowiek, który
   * trafił na Prądnik Biały, a mieszka na Azorach przy granicy z Krowodrzą,
   * ma jedno kliknięcie do właściwej strony zamiast powrotu do spisu.
   *
   * Świadomie BEZ opisów przy linkach — to ma być spis, a nie druga treść
   * do napisania w osiemnastu wariantach.
   */
  const sasiednie = getDistrictsForCity(content.miasto.slug).filter(
    (d) => d.slug !== content.slug,
  );

  return (
    <>
      <JsonLdScript
        data={webPageSchema({
          name: content.seoTitle,
          description: content.seoDescription,
          path: content.urlPath,
        })}
      />

      {/* Góra strony do formularza włącznie — wspólna dla wszystkich stron lokalnych (28.11.2026). */}
      <LokalnaGora
        okruszki={[
          { name: "Thermomix", path: "/thermomix" },
          { name: content.miasto.nazwa, path: content.miasto.urlPath },
          { name: content.nazwa, path: content.urlPath },
        ]}
        eyebrow={`Thermomix ${content.miasto.nazwa} — ${content.nazwa}`}
        h1={naglowekPrzedstawiciela(content.h1)}
        gdzie={`${content.przyimek ?? "w"} ${content.miejscownik}`}
        nazwa={`${content.miasto.nazwa} ${content.nazwa}`}
        miastoOpinii={content.miasto.nazwa}
        zrodlo="district-page"
        etykietaFormularza={`${content.miasto.nazwa} — ${content.nazwa}`}
        miejsce="district"
      />

      {/* Własny wstęp dzielnicy — dawniej w nagłówku, teraz pod formularzem. */}
      <Section className="!py-8">
        <p className="max-w-3xl text-lg leading-relaxed text-neutral-700">{content.lead}</p>
      </Section>

      {content.sections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          tone={index % 2 === 0 ? "surface" : undefined}
          className="scroll-mt-28"
        >
          <div className="max-w-3xl">
            <Heading as="h2" size="md">
              {section.heading}
            </Heading>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-700">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-5 space-y-2 text-base text-neutral-700">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Section>
      ))}

      <Section>
        <div className="max-w-3xl">
          <Heading as="h2" size="md">
            Gdzie {content.przyimek ?? "w"} {content.miejscownik} dojeżdżam
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-neutral-700">
            Do wszystkich osiedli i wszystkich adresów w dzielnicy — bez dopłaty za dojazd. Poniżej nazwy, których
            używa się tu na co dzień; przy umawianiu wystarczy podać którąkolwiek z nich.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {content.osiedla.map((o) => (
              <li
                key={o}
                className="rounded-full border border-neutral-200 bg-neutral-0 px-3.5 py-1.5 text-sm text-neutral-700"
              >
                {o}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <div className="max-w-3xl">
          <Heading as="h2" size="md">
            Cena Thermomixa {content.przyimek ?? "w"} {content.miejscownik}
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-neutral-700">
            Cenę Thermomixa ustala Vorwerk i jest identyczna w całej Polsce — {content.przyimek ?? "w"}{" "}
            {content.miejscownik} zapłacisz tyle samo, co w każdym innym miejscu. Aktualna oferta i kalkulator rat
            są wyżej na tej stronie.
          </p>
          <div className="mt-6">
            <Link
              href={content.miasto.urlPath}
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              Thermomix {content.miasto.nazwa} — cała strona miasta →
            </Link>
          </div>
        </div>
      </Section>

      {sasiednie.length > 0 && (
        <Section>
          <div className="max-w-3xl">
            <Heading as="h2" size="md">
              Pozostałe dzielnice — {content.miasto.nazwa}
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-neutral-700">
              Dojeżdżam do każdej z nich na tych samych zasadach. Jeśli mieszkasz
              na granicy dwóch dzielnic, wybierz tę, w której faktycznie jest
              Twój adres — opis kuchni i dojazdu będzie wtedy trafniejszy.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {sasiednie.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={d.urlPath}
                    className="inline-block rounded-full border border-neutral-300 bg-neutral-0 px-3.5 py-1.5 text-sm text-brand-700 transition-colors hover:border-brand-500 hover:text-brand-800"
                  >
                    {d.nazwa}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <FaqSection
        items={[
          pytanieKtoPrzedstawicielem(content.nazwa, `${content.przyimek ?? "w"} ${content.miejscownik}`),
          ...content.faq.filter((f) => !/^Kto jest przedstawicielem/i.test(f.question)),
        ]}
        title={`Thermomix ${content.nazwa} — pytania mieszkańców`}
      />

      <Section>
        <div className="flex flex-col items-center gap-4 text-center">
          <Heading as="h2" size="md" align="center">
            Umów bezpłatną prezentację — {content.nazwa}
          </Heading>
          <ButtonLink href="#umow" size="lg">
            Przejdź do formularza
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
