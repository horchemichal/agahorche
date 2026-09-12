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
 * PASYM — gmina miejsko-wiejska w powiecie szczycieńskim.
 * MIASTO 2 390, GMINA 5 052 (GUS 31.12.2024).
 * ⚠ Notatka projektowa podawała 2 500 — ZAWYŻONE.
 * Miasto ma 15,2 km² przy 2,4 tys. mieszkańców — w granicach
 * administracyjnych mieszczą się jeziora i tereny zielone.
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 * NIE MA osobnej gminy wiejskiej.
 *
 * PRAWA MIEJSKIE 1386 r., prawo chełmińskie, nadał WIELKI
 * MISTRZ KONRAD ZÖLLNER.
 * UTRATA PRAW 1945, ODZYSKANIE 1997.
 * PRZYNALEŻNOŚĆ: MAZURY, teren dawnej GALINDII; pierwotna
 * osada przy galindyjskim grodzisku „Okrągła Góra".
 * ⚠ OBALONE: „najstarsze miasto na Mazurach" — to slogan.
 * Nidzica ma prawa z 1381 r., pięć lat wcześniej. Piszę
 * „jedno z najstarszych".
 *
 * TRZY JEZIORA: KALWA, LELESKIE i GROM — miasto leży między
 * nimi.
 * KOŚCIÓŁ EWANGELICKO-AUGSBURSKI — XV w., przebudowa po
 * pożarze w XVIII w. ⚠ DOKŁADNYCH LAT NIE PODAJĘ — źródła
 * rozbieżne (ok. 1475 vs I poł. XV w.).
 * KOŚCIÓŁ KATOLICKI — koniec XIX w. ⚠ ROK ROZBIEŻNY
 * (1876 vs 1897) — nie podaję.
 * RATUSZ KLASYCYSTYCZNY — 1854–1855.
 * WIEŻA CIŚNIEŃ — 1911 r.
 * ZESPÓŁ MŁYŃSKI Z DOMEM MŁYNARZA — 1903 r., rozbudowa 1921.
 * TO JEST PODSTAWA KĄTA.
 * FRAGMENTY MURÓW MIEJSKICH — XIV w.
 * PASYM NALEŻY DO SIECI CITTASLOW. ROKU NIE PODAJĘ.
 *
 * KĄT: DROŻDŻE ŚWIEŻE KONTRA SUSZONE. Kąt od zespołu
 * młyńskiego z 1903 r. — miejsca, w którym zboże stawało się
 * mąką, a mąka czekała na to, co ją ożywi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że drożdże to jedyny żywy składnik w większości domowych
 *   kuchni i że dlatego zachowują się inaczej niż wszystko
 *   inne,
 * — że świeże i suszone to ten sam organizm w dwóch stanach,
 *   ale NIE zamienia się ich jeden do jednego,
 * — że suszone dzielą się na dwa rodzaje i to jest źródło
 *   większości pomyłek: jedne trzeba rozpuścić w płynie,
 *   drugie wsypuje się prosto do mąki,
 * — że drożdże zabija za wysoka temperatura płynu i że to
 *   najczęstsza przyczyna ciasta, które „nie chce wyrosnąć",
 * — że sól położona bezpośrednio na drożdżach też im szkodzi,
 *   dlatego trzyma się je po dwóch stronach miski,
 * — że urządzenie pomaga przy podgrzewaniu płynu i wyrabianiu,
 *   ale wyrastanie musi się odbyć samo i nie da się go
 *   przyspieszyć,
 * — i ODMOWA: nie podaję temperatur ani proporcji.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR — także żadnej
 *   temperatury płynu do drożdży, choć to kuszące.
 * — ŻADNYCH PROPORCJI ani przeliczników świeże/suszone.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PISZĘ „najstarsze miasto na Mazurach".
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945; utratę praw podaję jako suchy fakt.
 * — ZERO plebiscytu 1920 — Pasym leżał w obszarze
 *   plebiscytowym.
 * — ZERO wysiedleń ludności mazurskiej.
 * — Kościół i cmentarz ewangelicki opisuję JAKO ARCHITEKTURĘ
 *   I DATY, nigdy jako „pamiątkę po dawnych mieszkańcach".
 * — Uniwersytet Ludowy w Rudziskach pomijam.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ciasto drożdżowe —
 * wyrabianie i rozczyn" dotyczy TECHNIKI: jak długo wyrabiać
 * i po co robi się rozczyn. Tutaj chodzi o SAM SKŁADNIK:
 * czym różnią się drożdże świeże od suszonych i co je zabija.
 * „Rodzaje mąki" (Korsze) dotyczą mąki. „Kruche ciasto"
 * (Braniewo) i „ciasto parzone" (Lubawa) dotyczą ciast bez
 * drożdży.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ dokładnych dat kościołów (źródła rozbieżne).
 * — NIE PODAJĘ roku przystąpienia do Cittaslow.
 * — NIE PISZĘ, czy wieża ciśnień jest udostępniona.
 * — NIE PODAJĘ wydarzeń cyklicznych — nie potwierdzono.
 * — NIE PRZYPISUJĘ Pasymiowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Pasymia z PASŁĘKIEM ani z Pasym-Koloniami.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 390, gmina 5 052 mieszkańców; miasto zajmuje
 *   15,2 km², bo w jego granicach są jeziora i tereny zielone,
 * — prawa miejskie z 1386 r. na prawie chełmińskim, nadane
 *   przez wielkiego mistrza Konrada Zöllnera; utracone
 *   w 1945 r., odzyskane w 1997 r.,
 * — miasto leży między jeziorami Kalwa, Leleskie i Grom,
 *   na terenie dawnej Galindii,
 * — kościół ewangelicko-augsburski z XV w., przebudowany
 *   po pożarze w XVIII w.,
 * — klasycystyczny ratusz z lat 1854–1855,
 * — wieża ciśnień z 1911 r.,
 * — zespół młyński z domem młynarza z 1903 r., rozbudowany
 *   w 1921 r.,
 * — zachowane fragmenty murów miejskich z XIV w.
 *   i średniowieczny układ urbanistyczny,
 * — Pasym należy do sieci Cittaslow.
 */
export const PASYM: CityContent = {
  slug: "pasym",
  h1: "Thermomix Pasym – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pasym (Mazury, pow. szczycieński) — przedstawiciel",
  seoDescription:
    "Thermomix w Pasymiu na Mazurach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pasym — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pasymiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pasymia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Pasym i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Drożdże to jedyny żywy składnik w większości kuchni. I dlatego bywają kapryśne.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pasymiu – jak wygląda prezentacja?",
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
      id: "drozdze",
      heading: "Młyn z 1903 roku — czyli o drożdżach świeżych i suszonych",
      paragraphs: [
        "W Pasymiu zachował się zespół młyński z domem młynarza, zbudowany w 1903 roku i rozbudowany w 1921. Samo miasto leży między trzema jeziorami — Kalwą, Leleskim i Gromem — i ma prawa miejskie z 1386 roku, nadane przez wielkiego mistrza Konrada Zöllnera; utraciło je w 1945 i odzyskało dopiero w 1997. Bywa nazywane najstarszym miastem na Mazurach, ale to slogan: Nidzica dostała prawa pięć lat wcześniej. „Jedno z najstarszych” jest uczciwsze.",
        "Młyn robił z ziarna mąkę, a mąka czekała potem na to jedno, co ją ożywia. I o tym chcę napisać — o drożdżach, jedynym żywym składniku w większości domowych kuchni.",
        "To nie jest metafora, tylko sedno sprawy. Wszystko inne w Waszej szafce jest martwe: mąka, cukier, sól, tłuszcz. Drożdże są organizmem, który je, rośnie i który da się zabić. Dlatego zachowują się inaczej niż jakikolwiek inny składnik i dlatego tak często zawodzą.",
        "Świeże i suszone to ten sam organizm w dwóch stanach — jeden uśpiony przez odwodnienie. Ale nie zamienia się ich jeden do jednego i to jest pierwsza pułapka. Suszonych bierze się wyraźnie mniej, bo są skoncentrowane; ile dokładnie, mówi opakowanie i tam należy tego szukać.",
        "Druga pułapka jest gorsza, bo mało kto o niej wie: drożdże suszone dzielą się na dwa rodzaje. Jedne trzeba najpierw rozpuścić w letnim płynie i poczekać, aż się obudzą. Drugie, drobniejsze, wsypuje się prosto do mąki i rozpuszczanie im szkodzi. Wrzucenie tych pierwszych sucho do mąki albo tych drugich do wody to najczęstszy powód, dla którego „drożdże były złe”.",
        "A najczęstsza przyczyna ciasta, które nie chce wyrosnąć, jest jeszcze prostsza: za gorący płyn. Drożdże giną w wysokiej temperaturze i nie ma po tym odwrotu — nie da się ich reanimować dłuższym czekaniem. Płyn ma być letni, czyli taki, przy którym nic nie czujecie na wewnętrznej stronie nadgarstka. Konkretnych stopni nie podam, bo z zasady nie podaję liczb, a akurat tutaj termometr i tak jest mniej użyteczny niż ręka.",
        "Jest jeszcze jedna rzecz, którą warto wiedzieć, a która wygląda na przesąd i nim nie jest: sól położona bezpośrednio na drożdżach im szkodzi. Dlatego w przepisach każe się je sypać po dwóch stronach miski. Kiedy wszystko trafia do jednego naczynia, wystarczy nie kłaść jednego na drugim.",
        "Co robi urządzenie: podgrzeje płyn równomiernie, rozpuści drożdże i wyrobi ciasto — a wyrabianie drożdżowego to praca, przy której ręka naprawdę cierpi, o czym pisałam osobno. Czego nie zrobi: nie przyspieszy wyrastania. Ono musi się odbyć samo, w spokoju i w cieple, i to jest jedyny etap, na który nikt nie ma wpływu.",
        "I granica: nie podam Wam temperatur ani proporcji. Przy drożdżach liczby są na opakowaniu, a wyczucie w rękach — i wolę Was nauczyć drugiego niż przepisać pierwsze.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pasymiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli ciasto drożdżowe regularnie Wam nie wychodzi — powiedzcie przy umawianiu. To problem, który zwykle daje się rozwiązać w pięć minut i prawie nigdy nie leży tam, gdzie ludzie szukają.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pasymiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pasymskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko dwa i pół tysiąca mieszkańców, a cała gmina nieco ponad pięć tysięcy. Pasym ma nietypowo dużą powierzchnię jak na swoją wielkość — piętnaście kilometrów kwadratowych — bo w granicach administracyjnych mieszczą się jeziora i tereny zielone; miasto leży między Kalwą, Leleskim i Gromem, na terenie dawnej Galindii. Prawa miejskie dostało w 1386 roku od wielkiego mistrza Konrada Zöllnera, utraciło je w 1945 i odzyskało w 1997. Zachowały się fragmenty czternastowiecznych murów i średniowieczny układ ulic, kościół ewangelicko-augsburski z piętnastego wieku, klasycystyczny ratusz z lat 1854–1855, wieża ciśnień z 1911 roku i zespół młyński z domem młynarza z 1903. Pasym należy do sieci Cittaslow.",
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

  districtsHeading: "Do których części gminy Pasym dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Pasym też przyjadę",
  nearbyParagraphs: [
    "Szczytno, Olsztyn, Biskupiec, Nidzica i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Szczytno", "Biskupiec", "Nidzica", "Barczewo"],

  about: blokOMnie("do Pasymia", "w Pasymiu i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Pasymia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Pasym w powiecie szczycieńskim, na Mazurach — nie o Pasłęk, z którym bywa mylony, i nie o Pasym-Kolonie, osobną miejscowość w tej samej gminie.",
    },
    ...faqWspolne("w Pasymiu"),
    {
      question: "Czy drożdże świeże można zastąpić suszonymi?",
      answer:
        "Można, ale nie jeden do jednego — suszonych bierze się wyraźnie mniej, bo są skoncentrowane; dokładną ilość podaje opakowanie. Ważniejsze jest co innego: drożdże suszone są dwojakiego rodzaju. Jedne trzeba rozpuścić w letnim płynie, drugie wsypuje się prosto do mąki i rozpuszczanie im szkodzi.",
    },
    {
      question: "Dlaczego moje ciasto drożdżowe nie chce wyrosnąć?",
      answer:
        "Najczęściej dlatego, że płyn był za gorący i drożdże po prostu zginęły — tego nie da się już odwrócić dłuższym czekaniem. Płyn ma być letni, taki, przy którym nic nie czujecie na wewnętrznej stronie nadgarstka. Druga przyczyna to sól położona bezpośrednio na drożdżach.",
    },
    {
      question: "Czy Thermomix przyspieszy wyrastanie ciasta?",
      answer:
        "Nie i nikt tego nie zrobi. Podgrzeje płyn równomiernie, rozpuści drożdże i wyrobi ciasto — a wyrabianie drożdżowego to praca, przy której ręka cierpi. Ale wyrastanie musi się odbyć samo, w spokoju i w cieple. Temperatur ani proporcji nie podaję: przy drożdżach liczby są na opakowaniu.",
    },
  ],

  geo: { lat: 53.6507, lng: 20.7919 },
};
