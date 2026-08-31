/**
 * TREŚĆ STRON DZIELNIC — osobny typ, celowo UBOŻSZY niż `CityContent`.
 *
 * DLACZEGO OSOBNY, A NIE „miasto tylko mniejsze”.
 * Strona dzielnicy powstaje w jednym celu: złapać zapytanie „thermomix
 * nowa huta” i przekazać człowieka na stronę Krakowa, która ma ofertę,
 * kalkulator i formularz. Gdyby dzielnica dostała ten sam komplet sekcji
 * co miasto — kalkulator, karty oferty, pełne FAQ, cennik — powstałoby
 * osiemnaście kopii strony Krakowa różniących się nazwą. Google nazywa
 * takie strony `doorway pages` i traktuje je jako powód do obniżenia oceny
 * CAŁEJ domeny, nie tylko tych stron. To jest jedyny scenariusz w tym
 * projekcie, w którym da się zaszkodzić stronie Krakowa, która już działa.
 *
 * Dlatego tutaj NIE MA i mieć nie będzie: cen, kalkulatora rat, kart
 * oferty, sekcji o TM7, bloku „kto poprowadzi prezentację”. To wszystko
 * żyje na stronie miasta i strona dzielnicy do niego linkuje.
 *
 * CO MUSI BYĆ, żeby strona dzielnicy w ogóle miała prawo istnieć:
 * każda z poniższych sekcji musi zawierać coś, co jest prawdziwe TYLKO
 * dla tej dzielnicy. Jeśli dla którejś dzielnicy nie da się takiej treści
 * napisać — nie tworzymy dla niej strony. Lepiej mieć osiem stron, które
 * coś mówią, niż osiemnaście, które nie mówią nic.
 *
 * WYRÓŻNIK, KTÓREGO NIE MA KONKURENCJA: kuchnia i dojazd.
 * Aga przyjeżdża z urządzeniem i gotuje na blacie klientki. To znaczy, że
 * rok budowy bloku jest dla niej informacją operacyjną, a nie ciekawostką:
 * — zasób sprzed 1990 to kuchnia osobna, 3,5–6 m², blat krótki, instalacja
 *   aluminiowa na 16 A (Thermomix bierze 1500 W — przy czajniku i piekarniku
 *   na tym samym obwodzie to realny problem),
 * — zasób po 2000 to aneks otwarty na salon, nowa instalacja, miejsce jest,
 * — stara Nowa Huta z lat 50. to przypadek osobny: kuchnia osobna, ale
 *   JASNA, z oknem — i to jest fakt potwierdzony, w odróżnieniu od
 *   powtarzanych w sieci „wysokich sufitów”, których nie potwierdziłem
 *   i których dlatego nigdzie nie ma w treści.
 * Żadna konkurencyjna strona lokalna nie mówi o tym ani słowa.
 */

export interface DistrictSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface DistrictContent {
  /** Slug lokalizacji w bazie, np. `krakow-nowa-huta`. */
  slug: string;
  /** Adres: /thermomix/krakow/nowa-huta */
  urlPath: string;
  /** Nazwa dzielnicy w mianowniku, np. „Nowa Huta”. */
  nazwa: string;
  /** Miejscownik do zdań „w Nowej Hucie”. */
  miejscownik: string;
  /**
   * Przyimek przed miejscownikiem. Domyślnie „w” — i dla wszystkich
   * dzielnic Krakowa to wystarcza („w Nowej Hucie”, „w Swoszowicach”).
   *
   * W Bochni nie wystarcza. Osiedla o nazwach przymiotnikowych i te
   * leżące na wzniesieniach biorą po polsku „na”, nie „w”: mówi się
   * „na Słonecznym”, „na Uzborni”, „na Murowiance”, a nie „w Słonecznym”.
   * Wymuszanie wszędzie „w” dałoby na trzynastu stronach zdania, które
   * native speaker wyłapuje w pół sekundy — a to jest dokładnie ten
   * rodzaj drobiazgu, po którym widać, że tekst pisał ktoś z zewnątrz.
   */
  przyimek?: "w" | "na";
  /** Miasto nadrzędne — dokąd prowadzi link w górę. */
  miasto: { nazwa: string; slug: string; urlPath: string };

  h1: string;
  seoTitle: string;
  seoDescription: string;

  lead: string;

  /**
   * Osiedla i nazwy używane potocznie. To jest realna wartość dla
   * czytelnika („mieszkam na Kozłówku”), a przy okazji naturalne pokrycie
   * fraz, których nie da się wcisnąć w tekst bez naciągania.
   */
  osiedla: string[];

  /**
   * Dodatkowe nazwy, pod którymi ta strona ma być rozpoznawana przy
   * linkowaniu z listy dzielnic na stronie miasta — NIE renderowane nigdzie
   * na stronie.
   *
   * Powód istnienia tego pola: lista `districts[]` na stronie miasta trzyma
   * nazwy jednostek administracyjnych, a nagłówek strony bywa szerszy.
   * Strona „Dębniki i Ruczaj” obsługuje dwie pozycje z tej listy — „Ruczaj”
   * łapał się przez `osiedla`, ale samo „Dębniki” nie łapało się przez nic:
   * `nazwa` to „Dębniki i Ruczaj”, a w `osiedla` stoi „Stare Dębniki”.
   * Efekt: największa dzielnica Krakowa wisiała na stronie miasta jako
   * martwy tekst, bez linku do własnej strony.
   *
   * Wpisywanie „Dębniki” do `osiedla` załatwiłoby dopasowanie, ale zaśmieca
   * czytelnikowi listę osiedli nazwą dzielnicy stojącą obok „Starych
   * Dębnik”. Dlatego osobne pole: jedno zadanie, zero skutków ubocznych.
   */
  aliasy?: string[];

  /** 3–4 sekcje. Każda musi mieć treść prawdziwą tylko dla tej dzielnicy. */
  sections: DistrictSection[];

  /** 2–4 pytania ODMIENNE dla każdej dzielnicy. Wspólnych tu nie ma. */
  faq: { question: string; answer: string }[];

  geo: { lat: number; lng: number };
}
