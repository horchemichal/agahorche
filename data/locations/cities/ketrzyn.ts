import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
  blokOMnie,
  faqWspolne,
  highlightyStandardowe,
  sekcjaCena,
  sekcjaCoUgotujesz,
  sekcjaRaty,
  sekcjaTm7,
  sekcjaTradycyjneGotowanie,
} from "./wspolne";

/**
 * KĘTRZYN — miasto z zamkiem krzyżackim i warownym kościołem
 * św. Jerzego, który budowano tak, żeby dało się w nim przetrwać.
 * Wszystko tu było przemyślane, zanim powstało.
 *
 * KĄT: co przemyśleć PRZED umówieniem prezentacji. Trzy pytania,
 * na które warto odpowiedzieć sobie wcześniej, żeby nie stracić
 * wieczoru — łącznie z tym, że czasem odpowiedź brzmi „nie umawiajmy
 * się wcale".
 *
 * SEKCJA MA PODAĆ TRZY PYTANIA:
 * — ile razy w tygodniu w Waszej kuchni naprawdę powstaje obiad,
 * — kto będzie tego używał i czy ta osoba w ogóle chce,
 * — czy jest w domu miejsce na blacie i gniazdko w zasięgu.
 * PLUS uczciwe: jeśli odpowiedzi wypadają źle, wolę nie przyjeżdżać
 * niż zabierać komuś wieczór.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PYTAŃ O FINANSE ani sugerowania, że trzeba coś policzyć
 *   w budżecie przed spotkaniem. To nie moja dziedzina.
 * — ŻADNYCH WYMIARÓW ANI PARAMETRÓW („potrzeba tyle centymetrów").
 * — Nie robić z tej listy testu, który klientka ma „zdać".
 *
 * ROZGRANICZENIE. Reda wymienia sytuacje życiowe, w których lepiej
 * poczekać, Oława mówi o domu, w którym się nie gotuje, Radom
 * o zakupie bez prezentacji. Tutaj chodzi o PRZYGOTOWANIE SIĘ
 * do samego spotkania.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Kętrzynie stoi zamek krzyżacki i warowny kościół św. Jerzego.
 */
export const KETRZYN: CityContent = {
  slug: "ketrzyn",
  h1: "Thermomix Kętrzyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kętrzyn — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kętrzynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kętrzyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kętrzynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kętrzyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Kętrzyn i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy pytania przed spotkaniem — żeby nikt nie stracił wieczoru.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kętrzynie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "przed-spotkaniem",
      heading: "Miasto warownego kościoła — i trzy pytania przed umówieniem spotkania",
      paragraphs: [
        "Kętrzyński kościół świętego Jerzego zbudowano tak, żeby dało się w nim przetrwać — to była budowla przemyślana, zanim powstała, a nie poprawiana potem. Wykorzystam to do czegoś, czego nie robi żaden sprzedawca, bo działa przeciwko liczbie spotkań: do trzech pytań, na które warto odpowiedzieć sobie przed umówieniem prezentacji.",
        "Pierwsze: ile razy w tygodniu w Waszej kuchni naprawdę powstaje obiad. Nie ile chcielibyście, tylko ile faktycznie było w minionym miesiącu. To jedna liczba i wiecie ją lepiej ode mnie. Jeżeli jest bardzo mała i nie zapowiada się, żeby miała urosnąć, to godzina prezentacji niczego nie zmieni — ani u Was, ani u mnie.",
        "Drugie: kto będzie tego używał i czy ta osoba w ogóle chce. Bardzo często zainteresowana jest jedna osoba, a gotuje inna — i wtedy warto zapytać tę drugą, zanim ktokolwiek gdziekolwiek zadzwoni. Sprzęt kupiony dla kogoś, kto nie prosił, kończy w szafce, choćby był świetny.",
        "Trzecie, najprostsze: czy jest w domu miejsce na blacie i gniazdko w zasięgu. Nie podam Wam centymetrów ani parametrów — chodzi tylko o to, żebyście rzucili okiem, czy w Waszej kuchni jest wolny kawałek, na którym coś takiego mogłoby stać na stałe. Nie w szafce, tylko na wierzchu.",
        "Nie zapytam Was za to o pieniądze i nie proszę, żebyście cokolwiek liczyli w budżecie przed spotkaniem. To nie jest moja dziedzina i nie zamierzam się w nią wtrącać. Cena i rata są częścią rozmowy na spotkaniu, a nie warunkiem wstępnym.",
        "I rzecz najważniejsza: to nie jest test do zdania. Jeśli odpowiedzi wypadają kiepsko, powiedzcie mi to przez telefon — wolę nie przyjeżdżać, niż zabrać komuś wieczór i wyjść z niczym. Nie obrażę się i nie będę przekonywać. A jeśli wypadają dobrze, spotkanie będzie krótsze i konkretniejsze, bo od razu zaczniemy od Waszej sytuacji zamiast od ogólników.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kętrzynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przy umawianiu odpowiedz na te trzy pytania — spotkanie będzie wtedy krótsze i konkretniejsze.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kętrzynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kętrzyńskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Kętrzyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Osiedle Sikorskiego",
    "Osiedle Piastowskie",
    "Kętrzyn Zachód",
    "Osiedle Moniuszki",
    "Nowa Wieś",
    "Osiedle Wschód",
  ],

  nearbyHeading: "Poza Kętrzyn też przyjadę",
  nearbyParagraphs: [
    "Giżycko, Reszel, Korsze i Barciany są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Giżycko", "Reszel", "Korsze", "Barciany", "Mrągowo", "Bartoszyce"],

  about: blokOMnie("do Kętrzyna", "w Kętrzynie i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Kętrzyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kętrzynie"),
    {
      question: "Co przemyśleć przed umówieniem prezentacji?",
      answer:
        "Trzy rzeczy. Ile razy w tygodniu w Waszej kuchni naprawdę powstaje obiad — nie ile chcielibyście, tylko ile było. Kto będzie tego używał i czy ta osoba w ogóle chce. I czy jest wolny kawałek blatu z gniazdkiem w zasięgu, żeby to mogło stać na wierzchu, a nie w szafce.",
    },
    {
      question: "A jeśli odpowiedzi wypadają kiepsko?",
      answer:
        "Powiedzcie mi to przez telefon — wolę nie przyjeżdżać, niż zabrać komuś wieczór i wyjść z niczym. Nie obrażę się i nie będę przekonywać. To nie jest test do zdania.",
    },
  ],

  geo: { lat: 54.0764, lng: 21.3764 },
};
