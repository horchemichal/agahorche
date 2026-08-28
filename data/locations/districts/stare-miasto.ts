import type { DistrictContent } from "./typy";

/**
 * STARE MIASTO (I) — jedyna dzielnica, w której dojazd jest realnym
 * problemem operacyjnym, i strona mówi o tym wprost zamiast obiecywać
 * „dojeżdżam wszędzie” i tłumaczyć się potem przez telefon.
 *
 * Fakty potwierdzone i użyte:
 * — dwie strefy ograniczonego ruchu: obszar wewnątrz I obwodnicy wraz
 *   z otoczeniem Wawelu oraz Kazimierz (plac Nowy i kilkanaście ulic),
 * — wjazd tylko dla uprawnionych: abonament w sektorze A1, właściciele
 *   nieruchomości i miejsc postojowych w strefie, dostawy w wyznaczonych
 *   oknach czasowych, taksówki, służby,
 * — poza strefą ograniczonego ruchu obowiązuje najdroższa w mieście
 *   strefa płatnego parkowania (podstrefy A),
 * — dominują przedwojenne kamienice; liczba mieszkańców spadła z ok. 48
 *   do niecałych 30 tysięcy, bo mieszkania idą pod najem krótkoterminowy,
 * — Stary Kleparz jako codzienny, nieturystyczny punkt orientacyjny.
 *
 * Kamienice = stare instalacje. To realne ryzyko przy 1500 W i dlatego
 * jest w treści — ale bez straszenia, bo w wyremontowanych mieszkaniach
 * problemu nie ma.
 */
export const KRAKOW_STARE_MIASTO: DistrictContent = {
  slug: "krakow-stare-miasto",
  urlPath: "/thermomix/krakow/stare-miasto",
  nazwa: "Stare Miasto",
  miejscownik: "Starym Mieście",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Stare Miasto i Kazimierz — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Stare Miasto — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix na Starym Mieście i Kazimierzu: bezpłatna prezentacja TM7 u Ciebie. Dojazd ustalamy z wyprzedzeniem ze względu na strefę. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na Stare Miasto, Kazimierz, Stradom, Kleparz i Piasek. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna — proszę tylko o jedną informację więcej niż gdzie indziej, bo dojazd w tej części miasta trzeba zaplanować.",

  osiedla: [
    "Stare Miasto (w obrębie Plant)",
    "Kazimierz",
    "Stradom",
    "Kleparz",
    "Piasek",
    "Nowy Świat",
    "Wesoła",
    "Okół",
  ],

  sections: [
    {
      id: "dojazd",
      heading: "Powiedz mi przy umawianiu, czy masz miejsce postojowe",
      paragraphs: [
        "To jedyna dzielnica Krakowa, w której o dojeździe trzeba rozmawiać wcześniej. W obrębie pierwszej obwodnicy i wokół Wawela obowiązuje strefa ograniczonego ruchu, a osobna strefa działa na Kazimierzu — obejmuje plac Nowy i kilkanaście okolicznych ulic. Wjechać mogą tam wyłącznie uprawnieni: między innymi właściciele nieruchomości i miejsc postojowych w strefie oraz dostawy w wyznaczonych godzinach.",
        "Poza strefą ograniczonego ruchu obowiązuje najdroższe w mieście płatne parkowanie. Dla Ciebie to bez znaczenia — za dojazd nie płacisz i nic Ci nie doliczam. Dla mnie oznacza to, że muszę wiedzieć wcześniej, gdzie zostawię auto z urządzeniem.",
        "Dlatego przy umawianiu pytam o dwie rzeczy: czy masz miejsce postojowe albo garaż pod adresem i czy w kamienicy jest winda. Z tymi dwiema informacjami umawiam się bez problemu i punktualnie. Bez nich zdarza się, że spotkanie zaczyna się z opóźnieniem — a szkoda, bo to jedyny powód, dla którego mogłoby się tak stać.",
      ],
    },
    {
      id: "kuchnia",
      heading: "Kuchnie w kamienicach: osobne, ale nieoczywiste",
      paragraphs: [
        "W przedwojennych kamienicach kuchnia jest zwykle osobnym pomieszczeniem i bywa naprawdę duża — ale bywa też przechodnia, wąska albo bez okna, zależnie od tego, jak dzielono mieszkania przez ostatnie sto lat. Dwa mieszkania w tej samej klatce potrafią mieć zupełnie inny układ.",
        "Druga rzecz to instalacja. W mieszkaniach po remoncie nie ma o czym mówić. W tych, gdzie instalacja jest starsza, warto pamiętać, że Thermomix pobiera około tysiąca pięciuset watów — więc nie uruchamiam go równocześnie z czajnikiem i piekarnikiem. To wystarcza.",
        "Jeśli wiesz, że u Ciebie z prądem bywa różnie, powiedz o tym wprost przy umawianiu. Nie zmieni to niczego w spotkaniu, ale będę wiedziała, czego nie robić naraz.",
      ],
    },
    {
      id: "kto",
      heading: "Kto tu jeszcze gotuje",
      paragraphs: [
        "Liczba mieszkańców Starego Miasta spadła w ostatnich dekadach z blisko czterdziestu ośmiu tysięcy do niecałych trzydziestu — mieszkania odchodzą pod najem krótkoterminowy. Ci, którzy zostali, to w dużej mierze osoby, dla których to jest dom, a nie adres inwestycyjny.",
        "I to jest cała różnica przy takim zakupie. Gotowanie w centrum bywa trudniejsze niż na osiedlu: do dużego sklepu jest dalej, kuchnia bywa dziwna, a pokusa, żeby po prostu zejść na dół i coś zjeść, jest tuż za drzwiami. Thermomix nie rozwiązuje tego magicznie — ale sprawia, że obiad w domu przestaje być projektem na wieczór.",
        "Na targ nie trzeba zresztą daleko: Stary Kleparz działa na co dzień i jest jednym z niewielu miejsc w tej okolicy, które nie zmieniły się w atrakcję dla zwiedzających.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy w ogóle dojedziesz pod adres w strefie ograniczonego ruchu?",
      answer:
        "Tak, ale ustalmy to przy umawianiu. Jeśli masz miejsce postojowe albo garaż pod adresem, sprawa jest prosta. Jeśli nie — zostawiam auto poza strefą i resztę drogi pokonuję pieszo, więc potrzebuję po prostu wiedzieć o tym wcześniej i wyjechać z zapasem.",
    },
    {
      question: "Mieszkam na Kazimierzu. Czy to zmienia cokolwiek?",
      answer:
        "Kazimierz ma własną strefę ograniczonego ruchu wokół placu Nowego, więc obowiązuje ta sama prośba: powiedz, czy jest gdzie zaparkować. Poza tym prezentacja wygląda identycznie jak wszędzie indziej.",
    },
    {
      question: "Czy jest jakaś dopłata za dojazd do centrum?",
      answer:
        "Nie, żadna. Parkowanie i strefy to mój koszt i mój problem organizacyjny, nie Twój. Prezentacja jest bezpłatna niezależnie od dzielnicy.",
    },
    {
      question: "Mam bardzo starą instalację elektryczną. Czy to przeszkoda?",
      answer:
        "Nie, o ile o tym wiem. Urządzenie pobiera około tysiąca pięciuset watów — wystarczy, że nie uruchamiamy go równocześnie z czajnikiem czy piekarnikiem na tym samym obwodzie.",
    },
  ],

  geo: { lat: 50.0614, lng: 19.9372 },
};
