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
 * DZIAŁDOWO — miasto, które znalazło się w granicach Polski dlatego,
 * że jest węzłem kolejowym. Trzy linie, sześćdziesiąt jeden odjazdów
 * w dzień roboczy, cztery pociągi przed piątą rano.
 *
 * KĄT: śniadanie. To jedyne miejsce w całym serwisie, w którym pierwszy
 * posiłek dnia jest tematem — i jest to strona w dużej części pisana
 * PRZECIWKO temu, co sprzedaję. Do śniadania to urządzenie jest słabe
 * i mówię to wprost.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — w mieście, z którego pierwszy pociąg do Warszawy odjeżdża o wpół
 *   do czwartej, a do Olsztyna po czwartej, śniadanie jest realnym
 *   problemem, a nie tematem z poradnika,
 * — CZEGO NIE ZROBI, i to ma być na początku: nie usmaży jajecznicy,
 *   nie zrobi tostów, nie usmaży naleśników. Trzy czwarte polskiego
 *   śniadania to patelnia i toster, a tego urządzenie nie zastępuje,
 * — co robi: owsianka i kasze na mleku lub wodzie, pasty kanapkowe,
 *   koktajle, masło orzechowe. Krótka i uczciwa lista,
 * — rzecz najważniejsza: przy takiej godzinie wyjazdu i tak nie gotuje
 *   się rano, tylko wieczorem — i to jest jedyne miejsce, w którym
 *   to urządzenie coś realnie zmienia,
 * — i granica: nie doradzam nic o przechowywaniu przygotowanego jedzenia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. Nie ma tu ani słowa o tym, że
 *   „śniadanie jest najważniejszym posiłkiem dnia" ani o wartości
 *   odżywczej czegokolwiek. To jest teza dietetyczna, nie moja.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU, TERMINACH I BEZPIECZEŃSTWIE
 *   ŻYWNOŚCI (zasada ze Skierniewic) — wieczorne przygotowanie opisuję
 *   jako czynność, nie doradzam, co i jak długo trzymać.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNEGO OCENIANIA, kto o której wstaje i co je rano.
 *
 * ROZGRANICZENIE. Kilka stron mówi o pracy zmianowej i o dniu, który
 * zaczyna się o czwartej; Lesko i Ustrzyki o sezonie. Tutaj chodzi
 * wyłącznie o PIERWSZY POSIŁEK DNIA i o to, czego urządzenie w nim
 * nie robi.
 *
 * OSTROŻNIE Z OBOZEM SOLDAU. Niemiecki obóz przy ul. Grunwaldzkiej to
 * fakt i jedno z najcięższych miejsc w tej części Polski. NIE ROBIĘ
 * z niego wątku na stronie sprzedażowej i nie wspominam o nim
 * w treści — zestawienie tego z kuchnią byłoby niestosowne.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy dwadzieścia tysięcy mieszkańców na 11,5 km²
 *   (GUS, 31.12.2024); saldo migracji 2024: minus 95,
 * — stacja leży na linii nr 9 Warszawa – Gdańsk; odchodzą stąd linie
 *   nr 208 i nr 216; w dzień roboczy 61 odjazdów w 11 kierunkach,
 * — najwcześniejsze odjazdy: 3:30 do Warszawy Zachodniej, 4:22
 *   do Olsztyna, 4:28 do Radomia, 4:42 do Iławy — cztery przed piątą,
 * — pociąg Kolei Mazowieckich w tej relacji nazywa się „Działdowiak",
 * — najszybszy przejazd do Olsztyna 55 minut, do Warszawy 1 godzina
 *   15 minut (pociągi IC/TLK),
 * — ruch pasażerski na linii 208 zawieszono 1 lutego 2007 r.,
 * — powiat działdowski NIE brał udziału w plebiscycie 1920 r. — został
 *   przyznany Polsce na mocy artykułu 28 traktatu wersalskiego,
 *   z uzasadnieniem, że linia z Warszawy nad Bałtyk ma biec przez
 *   terytorium Polski; hallerczycy wkroczyli 17 stycznia 1920 r.,
 * — prawa miejskie w sierpniu 1344 r. (źródła podają 13 albo 14 —
 *   dlatego w tekście jest sam miesiąc),
 * — miasto ma 13 osiedli jako jednostki pomocnicze; tylko jedno ma
 *   nazwę własną — Osiedle Nr 13 „Kolgartowo",
 * — bezrobocie 12,4% to wskaźnik POWIATU, nie miasta — GUS nie liczy go
 *   dla gmin, więc w tekście go nie ma,
 * — NIE ROZSTRZYGNIĘTE: czy z powiatu jest coś na ministerialnej Liście
 *   Produktów Tradycyjnych. Nie potwierdziłam ani że jest, ani że nie
 *   ma — i strona mówi dokładnie to.
 */
export const DZIALDOWO: CityContent = {
  slug: "dzialdowo",
  h1: "Thermomix Działdowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Działdowo — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Działdowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Działdowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Działdowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Działdowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Działdowo i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Do śniadania ten sprzęt jest słaby. Piszę to na stronie, którą sama prowadzę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Działdowie – jak wygląda prezentacja?",
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
      id: "sniadanie",
      heading: "Miasto, z którego pierwszy pociąg odjeżdża o wpół do czwartej",
      paragraphs: [
        "Działdowo jest w Polsce dlatego, że jest węzłem kolejowym. To nie jest przenośnia: powiat działdowski jako jedyny w okolicy nie brał udziału w plebiscycie w dwudziestym roku — przyznano go wprost, artykułem dwudziestym ósmym traktatu wersalskiego, z uzasadnieniem, że linia z Warszawy nad Bałtyk ma w całości biec przez terytorium Polski. Hallerczycy weszli tu siedemnastego stycznia tysiąc dziewięćset dwudziestego.",
        "Sto lat później widać to w rozkładzie. Sześćdziesiąt jeden odjazdów w dzień roboczy, jedenaście kierunków, a przed piątą rano cztery pociągi: o wpół do czwartej do Warszawy Zachodniej, dwadzieścia dwie po czwartej do Olsztyna, dwadzieścia osiem po czwartej do Radomia i czterdzieści dwie po czwartej do Iławy. Koleje Mazowieckie nazwały nawet swój pociąg w tej relacji „Działdowiak”.",
        "Napiszę więc o czymś, o czym nie piszę nigdzie indziej w tym serwisie: o śniadaniu. I zacznę od tego, że do śniadania to urządzenie jest słabe. Wolę powiedzieć to sama, niż żebyście się przekonali po zakupie.",
        "Czego nie zrobi. Nie usmaży jajecznicy ani jajka sadzonego. Nie zrobi tostów. Nie usmaży naleśników ani placków. To jest patelnia i toster, i tak zostanie. A skoro trzy czwarte polskiego śniadania to właśnie patelnia i chleb, uczciwa odpowiedź na pytanie „czy to zrobi mi śniadanie” brzmi: w większości przypadków nie.",
        "Lista tego, co robi, jest krótka i taką ją podam. Owsianka i kasze gotowane na mleku albo na wodzie — wstawia się i nie trzeba mieszać, więc nie przywiera. Pasty kanapkowe: z jajek, z ryby, z warzyw, z fasoli — cała robota polega tam na rozdrobnieniu, więc urządzenie robi ją w minutę. Koktajle. Masło orzechowe z samych orzechów. To wszystko.",
        "Jest natomiast rzecz, która przy takim rozkładzie znaczy więcej niż cała powyższa lista. Kto wychodzi z domu o trzeciej albo czwartej, ten rano nie gotuje. Nie ma na to czasu i nie ma na to ochoty. Wszystko, co ma być zjedzone o tej godzinie albo zabrane do pociągu, powstaje poprzedniego wieczoru. I to jest jedyne miejsce, w którym ten sprzęt naprawdę coś zmienia: wieczorem, gdy robi się jedną rzecz więcej przy okazji kolacji, bo nie trzeba przy niej stać.",
        "Dwie granice na koniec. Nie doradzam, co i jak długo można trzymać przygotowane z wieczora — to jest dziedzina, w której zła podpowiedź komuś realnie szkodzi, a ja nie jestem od tego. I nie będę pisać, że śniadanie jest najważniejszym posiłkiem dnia. To jest teza dietetyczna, nie moja, a sprzedaję urządzenia, nie zalecenia żywieniowe.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Działdowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli ktoś u Was wstaje przed czwartą, powiedzcie to przy umawianiu. Wtedy nie proponuję wieczornych godzin i szukam terminu, który nikomu nie zabiera snu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Działdowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla działdowskiej rodziny",
      paragraphs: [
        "Do Olsztyna jedzie się stąd najszybciej pięćdziesiąt pięć minut, do Warszawy godzinę i kwadrans. W domu, z którego ktoś dojeżdża tak daleko, obiad rzadko powstaje o jednej porze — i rzadko robi go ta sama osoba, która wróci najpóźniej.",
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

  districtsHeading: "Do których części Działdowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto dzieli się na trzynaście osiedli, ale dwanaście z nich ma tylko numery — jedyne z nazwą własną to Kolgartowo. Przy umawianiu najprościej podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Działdowo też przyjadę",
  nearbyParagraphs: [
    "Lidzbark, Iłowo-Osada, Płośnica i Rybno są w zasięgu jednej trasy, podobnie Mława i Nidzica — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lidzbark", "Iłowo-Osada", "Płośnica", "Rybno", "Mława", "Nidzica"],

  about: blokOMnie("do Działdowa", "w Działdowie i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Działdowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Działdowie"),
    {
      question: "Czy zrobię w tym śniadanie?",
      answer:
        "W większości przypadków nie i wolę powiedzieć to od razu. Nie usmaży jajecznicy, nie zrobi tostów, nie usmaży naleśników — to jest patelnia i toster. Robi za to owsiankę i kasze bez mieszania, pasty kanapkowe, koktajle i masło orzechowe. Krótka lista, ale prawdziwa.",
    },
    {
      question: "Wyjeżdżam z domu przed czwartą. Co mi to daje?",
      answer:
        "Wieczór, nie poranek. Kto wychodzi o tej godzinie, ten rano nie gotuje — wszystko, co ma być zabrane, powstaje dzień wcześniej. Zaletą jest to, że przy kolacji da się zrobić jedną rzecz więcej, bo nie trzeba przy niej stać. Nie doradzam natomiast, co i jak długo można przechowywać.",
    },
    {
      question: "Czy z Działdowa jest coś na ministerialnej Liście Produktów Tradycyjnych?",
      answer:
        "Nie udało mi się tego rozstrzygnąć — nie potwierdziłam ani że jest, ani że nie ma. Wolę to napisać wprost, niż zgadywać w którąkolwiek stronę. Jeśli coś takiego z powiatu znam, dopiszę to tutaj po sprawdzeniu u źródła.",
    },
  ],

  geo: { lat: 53.2372, lng: 20.1806 },
};
