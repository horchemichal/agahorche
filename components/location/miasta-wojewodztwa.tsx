import Link from "next/link";
import type { Location } from "@/types/location";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { miejscownikWojewodztwa } from "@/data/locations/odmiana";

/**
 * LISTA MIAST NA STRONIE WOJEWÓDZTWA (wrzesień 2026).
 *
 * PO CO TO POWSTAŁO — WYNIK AUDYTU LINKOWANIA WEWNĘTRZNEGO.
 * Strona województwa nie linkowała do ANI JEDNEGO ze swoich miast.
 * Strona małopolska, pod którą stoją 182 miasta z własną treścią,
 * prowadziła wyłącznie do stron produktowych i do dwóch sąsiednich
 * województw. Cała ścieżka do 424 indeksowanych stron lokalnych szła
 * więc przez jeden adres — `/miasta` — który ważył 962 kB i miał na sobie
 * 967 odnośników.
 *
 * Skutek policzony na żywym serwisie: 64 strony miały linkowanie
 * WYŁĄCZNIE z `/miasta` (w tym Wrocław, Poznań i Szczecin), a kolejne
 * 66 miało poza nim dokładnie jeden link. Razem 130 z 424, czyli
 * co trzecia strona wisiała na jednej wielkiej liście.
 *
 * Ten komponent domyka brakujący poziom hierarchii:
 *   strona główna → /wojewodztwa → województwo → miasto.
 *
 * DWIE GRUPY, ŚWIADOMIE ROZDZIELONE:
 * — miasta z WŁASNĄ treścią dostają wyraźne, opisane linki. To są strony,
 *   które są w indeksie i którym linkowanie realnie pomaga.
 * — pozostałe idą niżej, w zwartej liście. Są `noindex`, więc nie chodzi
 *   o SEO, tylko o to, żeby człowiek szukający swojej miejscowości ją
 *   znalazł. Rozkładamy je przy okazji na 16 stron zamiast trzymać
 *   wszystkie na jednej.
 */
export function MiastaWojewodztwa({
  wojewodztwo,
  miasta,
}: {
  wojewodztwo: Location;
  miasta: Location[];
}) {
  if (miasta.length === 0) return null;

  /*
    Województwa nie mają `nameLocative` w danych, a wstawienie mianownika
    po przyimku dałoby „w województwie Małopolskie”. Formę bierzemy więc
    z tabeli odmiany; gdyby jej zabrakło, zdanie przechodzi na wariant
    bez przyimka zamiast produkować błąd gramatyczny.
  */
  const msc = miejscownikWojewodztwa(wojewodztwo.slug);
  const naglowek = msc
    ? `Miasta i gminy w województwie ${msc}`
    : `Miasta i gminy — ${wojewodztwo.name}`;

  const zTrescia = miasta.filter((m) => m.seo.indexable);
  const pozostale = miasta.filter((m) => !m.seo.indexable);

  return (
    <Section tone="surface">
      <Heading as="h2" size="md" className="mb-2">
        {naglowek}
      </Heading>
      <p className="mb-6 max-w-2xl text-muted">
        Dojazd jest bezpłatny do każdej z tych miejscowości. Jeśli nie widzisz swojej —
        zadzwoń, bo lista rośnie szybciej niż strona.
      </p>

      {zTrescia.length > 0 && (
        <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {zTrescia.map((m) => (
            <li key={m.slug}>
              <Link
                href={m.urlPath}
                className="text-neutral-800 underline decoration-neutral-300 underline-offset-4 hover:text-brand-700 hover:decoration-brand-500"
              >
                Thermomix {m.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {pozostale.length > 0 && (
        <div className={zTrescia.length > 0 ? "mt-8" : ""}>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Pozostałe miejscowości, do których dojeżdżam
          </h3>
          <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm">
            {pozostale.map((m) => (
              <li key={m.slug}>
                <Link href={m.urlPath} className="text-neutral-600 hover:text-brand-700">
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
