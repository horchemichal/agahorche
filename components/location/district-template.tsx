import Link from "next/link";
import type { DistrictContent } from "@/data/locations/districts/typy";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLdScript } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { LeadForm } from "@/components/lead/lead-form";
import { TrackedPhoneLink } from "@/components/marketing/tracked-phone-link";
import { webPageSchema } from "@/lib/seo/schema";
import { getDistrictsForCity } from "@/data/locations/districts";
import { SITE } from "@/lib/utils";

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

      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Thermomix", path: "/thermomix" },
            { name: content.miasto.nazwa, path: content.miasto.urlPath },
            { name: content.nazwa, path: content.urlPath },
          ]}
        />
      </Section>

      <Section className="!pt-6">
        <div className="max-w-3xl">
          <Eyebrow>
            Thermomix {content.miasto.nazwa} — {content.nazwa}
          </Eyebrow>
          <Heading as="h1" size="xl" className="mt-3">
            {content.h1}
          </Heading>
          <Lead className="mt-5">{content.lead}</Lead>

          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="#umow" size="lg">
              Umów bezpłatną prezentację
            </ButtonLink>
            {/* Link w górę jest tu najważniejszym elementem strony: cena,
                aktualna promocja i kalkulator rat są na stronie miasta.
                Strona dzielnicy ma tam zaprowadzić, a nie udawać, że sama
                obsłuży całą decyzję zakupową. */}
            <ButtonLink href={content.miasto.urlPath} size="lg" variant="outline">
              Cena, raty i oferta — {content.miasto.nazwa}
            </ButtonLink>
          </div>

          <p className="mt-5 text-sm text-muted">
            Wolisz od razu zadzwonić?{" "}
            <TrackedPhoneLink
              placement="district-hero"
              className="font-medium text-brand-700 underline underline-offset-4"
              label={SITE.phone}
            />
          </p>
        </div>
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

      {/* Zamknięcie pętli: człowiek, który doczytał do końca, ma jedno
          oczywiste miejsce, w które idzie po konkrety — strona miasta. */}
      <Section tone="surface">
        <div className="max-w-3xl">
          <Heading as="h2" size="md">
            Cena, raty i aktualna promocja
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-neutral-700">
            Cenę Thermomixa ustala Vorwerk i jest identyczna w całej Polsce — {content.przyimek ?? "w"}{" "}
            {content.miejscownik} zapłacisz tyle
            samo, co w każdym innym miejscu. Aktualną kwotę, obowiązującą promocję i kalkulator rat trzymam w jednym
            miejscu, na stronie {content.miasto.nazwa}, żeby nigdzie nie było wersji nieaktualnej.
          </p>
          <div className="mt-6">
            <Link
              href={content.miasto.urlPath}
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              Sprawdź cenę i policz ratę — Thermomix {content.miasto.nazwa} →
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

      <FaqSection items={content.faq} title={`Thermomix ${content.nazwa} — pytania mieszkańców`} />

      <Section id="umow" className="scroll-mt-28">
        <div className="max-w-2xl">
          <Heading as="h2" size="md">
            Umów bezpłatną prezentację — {content.nazwa}
          </Heading>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            Zostaw kontakt, a oddzwonię o wskazanej porze. Prezentacja jest bezpłatna, trwa około dwóch godzin
            i do niczego nie zobowiązuje.
          </p>
          <div className="mt-7">
            <LeadForm source="district-page" cityLabel={`${content.miasto.nazwa} — ${content.nazwa}`} />
          </div>
        </div>
      </Section>
    </>
  );
}
