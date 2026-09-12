import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * CZARNA BIAŁOSTOCKA — gmina miejsko-wiejska w powiecie
 * białostockim.
 * MIASTO 8 512, GMINA 10 562 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 14,3 km², GMINY 206,4 km².
 * ⚠ Notatka projektowa podawała 9 000 — ZAWYŻONE.
 * 17 SOŁECTW — POTWIERDZONE URZĘDOWO, z pełnym wykazem.
 * Brak osiedli jako jednostek pomocniczych.
 *
 * PRAWA MIEJSKIE 7 LIPCA 1962 r. — najmłodsze miasto
 * z tej dziesiątki. Powstało z osady przemysłowo-kolejowej.
 * Kolejne nazwy: Czarna Wieś Kolejowa → Czarna Wieś Stacja →
 * Czarna Wieś Osada → w 1962 r. CZARNA BIAŁOSTOCKA.
 * ⚠ AKTU PRAWNEGO NIE PODAJĘ — nie ustalono.
 *
 * OSADNICTWO od 1772 r. (leśniczówka w Puszczy Knyszyńskiej).
 * NAZWA „CZARNA" — wywodzona od SMOLARNI, wytwarzających
 * „gęsty, czarny dym", oraz od nazwiska Czarneckiego.
 * Gospodarka historyczna: SMOLARNIE (terpentyna i smary),
 * TARTAKI, później wytwórnia wyrobów precyzyjnych.
 * Rozwój dzięki stacji na linii kolejowej.
 *
 * PONAD 76% POWIERZCHNI GMINY to tereny leśne i zielone —
 * głównie PUSZCZA KNYSZYŃSKA.
 * PARK KRAJOBRAZOWY PUSZCZY KNYSZYŃSKIEJ im. Witolda
 * Sławińskiego — utworzony w 1988 r.
 * ZALEW CZAPIELÓWKA — oddany do użytku w 1981 r.
 * RZEKI: CZARNA i SOKOŁDA; dolina KRZEMIANKI.
 * ⚠ REZERWATU KRZEMIANKA NIE PRZYPISUJĘ TEJ GMINIE —
 * niepotwierdzone, stanowisko wiąże się z Rybnikami
 * i informuje o nim gmina Dobrzyniewo Duże.
 *
 * ⚠⚠ CZARNA WIEŚ KOŚCIELNA — SOŁECTWO TEJ GMINY
 * (potwierdzone urzędowym wykazem). OŚRODEK CERAMIKI LUDOWEJ.
 * Naturalne złoża gliny. CERAMIKA SIWA — czynna pracownia
 * garncarska; asortyment: garnki, dzbanki, buńki
 * ORAZ NACZYNIA DO PIECZENIA. TO JEST PODSTAWA KĄTA.
 * SZLAK RĘKODZIEŁA LUDOWEGO PODLASIA — utworzony w 1994 r.
 * dla ochrony kowalstwa, garncarstwa, łyżkarstwa i tkactwa;
 * przebieg: Czarna Białostocka – Czarna Wieś Kościelna –
 * Łapczyn – Zamczysk – Janów – Sokółka.
 * KOŚCIÓŁ MATKI BOŻEJ ANIELSKIEJ w Czarnej Wsi Kościelnej —
 * 1921 r.
 * ⚠ TECHNIKI WYPAŁU CERAMIKI SIWEJ NIE OPISUJĘ SZCZEGÓŁOWO —
 * nie potwierdzono. Wiem CO tam powstaje, nie mam pewnego
 * opisu JAK.
 * ⚠ NIE PODAJĘ, od kiedy istnieje tradycja garncarska
 * ani ilu jest dziś garncarzy.
 * CZARNA BIAŁOSTOCKA NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: NACZYNIA DO PIECZENIA — GLINA, SZKŁO, METAL
 * i dlaczego to samo ciasto wychodzi w każdym inaczej.
 * Kąt od wsi w tej gminie, w której do dziś wyrabia się
 * z miejscowej gliny naczynia do pieczenia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przepis podaje temperaturę i czas, ale nie podaje
 *   naczynia — a naczynie zmienia wynik bardziej niż
 *   dziesięć stopni różnicy,
 * — GLINA NIESZKLIWIONA: nagrzewa się wolno, oddaje ciepło
 *   łagodnie i równomiernie, trzyma wilgoć — stąd nadaje się
 *   do długiego duszenia,
 * — CERAMIKA I KAMIONKA SZKLIWIONA: podobnie, ale bez
 *   wchłaniania,
 * — SZKŁO ŻAROODPORNE: przewodzi inaczej niż metal, brzegi
 *   pieką się szybciej, spód wolniej; przez szkło widać
 *   i to jest jego największa zaleta,
 * — METAL JASNY kontra CIEMNY: ciemna forma pochłania więcej
 *   ciepła i skórka robi się ciemniejsza — to najczęstsza
 *   przyczyna „przypalonego spodu" mimo poprawnego przepisu,
 * — SILIKON: nie trzyma kształtu i nie daje brązowienia,
 * — że to samo ciasto w innej formie potrzebuje innego
 *   traktowania i że nie ma w tym Waszej winy,
 * — UCZCIWIE I WPROST: to urządzenie NIE PIECZE. Nie ma
 *   piekarnika i nie zastąpi żadnej z tych form. Przygotowuje
 *   ciasto — piecze piekarnik, w Waszym naczyniu,
 * — i że dlatego wybór formy zostaje w całości po Waszej
 *   stronie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR — także żadnych
 *   „obniż o dwadzieścia stopni". Piszę wyłącznie jakościowo.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — NIC o bezpieczeństwie
 *   materiałów, teflonie, aluminium ani „szkodliwości".
 * — ŻADNYCH NAZW FIRM ANI MAREK NACZYŃ.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO upadku zakładów przemysłowych jako dramatu
 *   społecznego, ZERO bezrobocia.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Garnki i naczynia
 * odziedziczone" (Krośniewice) dotyczą przedmiotów po kimś.
 * „Dno naczynia — przywieranie i przypalanie" (Dobre Miasto)
 * dotyczy mechanizmu przywierania. „Żeliwo" dotyczy patelni
 * i tego, czego urządzenie nie zastąpi. „Zmywanie" dotyczy
 * mycia. Tutaj chodzi o MATERIAŁ FORMY DO PIECZENIA i o to,
 * jak zmienia wynik tego samego przepisu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE OPISUJĘ techniki wypału ceramiki siwej.
 * — NIE PODAJĘ, od kiedy istnieje tradycja garncarska
 *   ani ilu jest garncarzy.
 * — NIE PRZYPISUJĘ gminie rezerwatu Krzemianka.
 * — NIE PODAJĘ powierzchni Parku Krajobrazowego.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Czarnej Białostockiej (powiat białostocki)
 *   z DĄBROWĄ BIAŁOSTOCKĄ (powiat sokólski) ani miasta
 *   z CZARNĄ WSIĄ KOŚCIELNĄ, która jest wsią w tej gminie.
 *   FAQ to rozróżnia.
 * — districts: brak osiedli jako jednostek pomocniczych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 8 512, gmina 10 562 mieszkańców, 17 sołectw,
 *   gmina 206,4 km²,
 * — prawa miejskie 7 lipca 1962 r.; miasto wyrosło z osady
 *   przemysłowo-kolejowej i nosiło wcześniej kolejno nazwy
 *   Czarna Wieś Kolejowa, Czarna Wieś Stacja i Czarna Wieś
 *   Osada,
 * — osadnictwo od 1772 r., gdy w Puszczy Knyszyńskiej
 *   zbudowano leśniczówkę; nazwa wywodzona od smolarni
 *   dających gęsty, czarny dym,
 * — ponad 76% powierzchni gminy to tereny leśne i zielone,
 *   głównie Puszcza Knyszyńska; gmina leży w Parku
 *   Krajobrazowym Puszczy Knyszyńskiej im. Witolda
 *   Sławińskiego, utworzonym w 1988 r.,
 * — zalew Czapielówka oddany do użytku w 1981 r.,
 * — rzeki Czarna i Sokołda,
 * — Czarna Wieś Kościelna, sołectwo tej gminy, jest ośrodkiem
 *   ceramiki ludowej opartej na miejscowych złożach gliny;
 *   działa tam pracownia garncarska wyrabiająca m.in. garnki,
 *   dzbanki i naczynia do pieczenia,
 * — Szlak Rękodzieła Ludowego Podlasia utworzono w 1994 r.
 *   dla ochrony kowalstwa, garncarstwa, łyżkarstwa i tkactwa,
 * — kościół Matki Bożej Anielskiej w Czarnej Wsi Kościelnej
 *   z 1921 r.
 */
export const CZARNA_BIALOSTOCKA: CityContent = {
  slug: "czarna-bialostocka",
  h1: "Thermomix Czarna Białostocka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Czarna Białostocka — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Czarnej Białostockiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czarna Białostocka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czarnej Białostockiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Czarnej Białostockiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Czarna Białostocka i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepis podaje temperaturę i czas. Nie podaje naczynia — a ono zmienia więcej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czarnej Białostockiej – jak wygląda prezentacja?",
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
      id: "naczynia-do-pieczenia",
      heading: "Wieś, która robi naczynia do pieczenia — czyli z czego jest Wasza forma",
      paragraphs: [
        "W gminie Czarna Białostocka leży Czarna Wieś Kościelna — jedno z tych miejsc, gdzie garncarstwo jest wciąż zawodem, a nie wspomnieniem. Pracuje się tam na miejscowej glinie i wyrabia ceramikę siwą: garnki, dzbanki, buńki i, co dla mnie najciekawsze, naczynia do pieczenia. Od 1994 roku prowadzi tamtędy Szlak Rękodzieła Ludowego Podlasia, powołany po to, żeby chronić kowalstwo, garncarstwo, łyżkarstwo i tkactwo.",
        "Skoro więc jesteśmy w gminie, w której naczynia do pieczenia się robi, napiszę o czymś, czego nie podaje żaden przepis, a co zmienia wynik bardziej niż dziesięć stopni w piekarniku: o tym, z czego jest zrobiona Wasza forma.",
        "Glina nieszkliwiona nagrzewa się wolno i oddaje ciepło łagodnie, bez gwałtownych skoków. Trzyma też wilgoć. Dlatego naczynia gliniane od tysięcy lat służą do długiego duszenia i do wszystkiego, co ma zmięknąć, a nie przypiec się na wierzchu.",
        "Kamionka i ceramika szkliwiona zachowują się podobnie, jeśli chodzi o łagodność ciepła, ale nie wchłaniają — łatwiej je czyścić i nie przejmują zapachów.",
        "Szkło żaroodporne przewodzi ciepło zupełnie inaczej niż metal. Boki i brzegi pieką się w nim szybciej, a spód wolniej — dlatego ciasto ze szklanej formy często ma ciemniejsze obrzeże. Ma za to jedną zaletę, której nie ma nic innego: widać przez nie, co dzieje się na spodzie, a to jest naprawdę dużo.",
        "Metal grzeje najszybciej i tu jest rzecz, o której mało kto wie, a która wyjaśnia mnóstwo nieudanych wypieków: kolor formy ma znaczenie. Ciemna, czarna blacha pochłania więcej ciepła niż jasna, aluminiowa, i przy tym samym ustawieniu piekarnika da wyraźnie ciemniejszą skórkę. Jeśli spód regularnie Wam się przypieka, choć przepis wykonujecie dokładnie — sprawdźcie najpierw kolor formy, zanim zaczniecie obwiniać piekarnik.",
        "Silikon jest osobną kategorią. Nie trzyma kształtu bez podparcia i praktycznie nie daje brązowienia, bo nie przewodzi ciepła tak jak metal. Wyjmuje się z niego bez problemu i to jest jego cała zaleta.",
        "Wniosek jest jeden i chciałabym, żeby zabrzmiał wyraźnie: to samo ciasto w innym naczyniu wymaga innego traktowania. Jeśli sprawdzony przepis nagle przestaje wychodzić po zmianie formy, to nie jest Wasza wina i nie ma sensu szukać błędu w składnikach.",
        "I teraz uczciwie, bo to jest strona o urządzeniu, a urządzenie w tej sprawie milczy. Ono nie piecze. Nie ma piekarnika i nie zastąpi żadnej z tych form. Przygotowuje ciasto — miesza, ubija, zagniata, robi masę — ale potem przekładacie ją do własnego naczynia i wstawiacie do własnego piekarnika. Cała ta część zostaje po Waszej stronie i żaden sprzęt jej nie przejmie.",
        "Dlatego mówię czasem klientkom coś, co brzmi dziwnie od kogoś, kto sprzedaje: jeśli Wasze wypieki nie wychodzą, nowe urządzenie może tego nie naprawić. Naprawić to może zmiana formy — a to kosztuje ułamek tego.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czarnej Białostockiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie ciasto, które przestało wychodzić bez wyraźnego powodu, powiedzcie o tym przy umawianiu i wspomnijcie, w czym je pieczecie. Zaskakująco często odpowiedź jest właśnie tam.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czarnej Białostockiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Czarnej Białostockiej",
      paragraphs: [
        "Samo miasto liczy przeszło osiem i pół tysiąca mieszkańców, a cała gmina niecałe jedenaście tysięcy, w siedemnastu sołectwach, na ponad dwustu kilometrach kwadratowych. To młode miasto: prawa miejskie dostało 7 lipca 1962 roku, a wyrosło z osady przemysłowo-kolejowej, która nosiła kolejno nazwy Czarna Wieś Kolejowa, Czarna Wieś Stacja i Czarna Wieś Osada. Osadnictwo zaczęło się tu w 1772 roku od leśniczówki w Puszczy Knyszyńskiej, a samą nazwę wywodzi się od smolarni, dających gęsty, czarny dym. Ponad siedemdziesiąt sześć procent powierzchni gminy to lasy i tereny zielone — gmina leży w Parku Krajobrazowym Puszczy Knyszyńskiej imienia Witolda Sławińskiego, utworzonym w 1988 roku. Płyną tu Czarna i Sokołda, a zalew Czapielówka oddano do użytku w 1981 roku. W Czarnej Wsi Kościelnej działa pracownia garncarska, a kościół Matki Bożej Anielskiej pochodzi z 1921 roku.",
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

  districtsHeading: "Do których części gminy Czarna Białostocka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich siedemnastu sołectw gminy, w tym do Czarnej Wsi Kościelnej. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Czarną Białostocką też przyjadę",
  nearbyParagraphs: [
    "Wasilków, Supraśl, Sokółka, Mońki i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wasilków", "Supraśl", "Sokółka", "Mońki"],

  about: blokOMnie("do Czarnej Białostockiej", "w Czarnej Białostockiej i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czarnej Białostockiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedemnastu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo obie nazwy mają ten sam przymiotnik: Czarna Białostocka leży w powiecie białostockim, a Dąbrowa Białostocka w sokólskim — to dwa różne miasta oddalone o kilkadziesiąt kilometrów.",
    },
    ...faqWspolne("w Czarnej Białostockiej"),
    {
      question: "Czy naczynie do pieczenia naprawdę zmienia wynik?",
      answer:
        "Bardziej niż dziesięć stopni różnicy w piekarniku, a przepisy o nim milczą. Glina grzeje wolno i łagodnie oraz trzyma wilgoć, szkło pieką szybciej po bokach niż od spodu, metal grzeje najszybciej, a silikon prawie nie daje brązowienia. To samo ciasto w innej formie wymaga innego traktowania.",
    },
    {
      question: "Dlaczego spód ciasta mi się przypieka, choć robię wszystko jak w przepisie?",
      answer:
        "Sprawdźcie najpierw kolor formy. Ciemna, czarna blacha pochłania znacznie więcej ciepła niż jasna aluminiowa i przy tym samym ustawieniu piekarnika da wyraźnie ciemniejszą skórkę. To najczęstsza przyczyna tego problemu i najrzadziej wymieniana.",
    },
    {
      question: "Czy Thermomix piecze?",
      answer:
        "Nie. Nie ma piekarnika i nie zastąpi żadnej formy do pieczenia. Przygotowuje ciasto — miesza, ubija, zagniata — a potem przekładacie masę do własnego naczynia i wstawiacie do własnego piekarnika. Jeśli Wasze wypieki nie wychodzą, nowe urządzenie może tego nie naprawić; czasem naprawia to zmiana formy, która kosztuje ułamek tej ceny.",
    },
  ],

  geo: { lat: 53.3033, lng: 23.2856 },
};
