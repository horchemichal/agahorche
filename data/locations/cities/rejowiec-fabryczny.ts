import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * REJOWIEC FABRYCZNY — 3 984 mieszkańców (GUS, 31.12.2024). Miasto,
 * które powstało wokół cementowni: osada robotnicza „Morawinek"
 * od lat dwudziestych, osiedla zakładowe, prawa miejskie dopiero
 * 22 lipca 1962 r. Cementownia NIE DZIAŁA — patrz niżej.
 *
 * KĄT: pierwsze własne mieszkanie i kuchnia urządzana od podstaw.
 * Miasto zbudowane z mieszkań, które ludzie dostawali razem z pracą,
 * jest właściwym miejscem na jedyną w serwisie rozmowę o tym, co
 * kupić do kuchni NAJPIERW — i dlaczego to urządzenie nie jest
 * pierwszą rzeczą na tej liście.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy urządzaniu pierwszej kuchni ten sprzęt NIE jest zakupem
 *   pierwszym ani drugim, i mówię to jako osoba, która go sprzedaje,
 * — co jest ważniejsze: dobry nóż, deska, kilka garnków, piekarnik,
 *   lodówka. Bez tego urządzenie nie ma czego uzupełniać,
 * — kiedy natomiast ma sens: gdy podstawy już są, a wieczory i tak
 *   uciekają,
 * — i że lepiej kupić później niż na kredyt do pustej kuchni.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH KWOT ani porównań cenowych z innym sprzętem
 *   (zasada z Jarocina: nie wyliczam, ile się oszczędza).
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD FINANSOWYCH, nic o zdolności kredytowej ani
 *   o tym, na co kogo stać. Mówię tylko o KOLEJNOŚCI zakupów,
 *   nie o czyichś pieniądzach.
 * — ŻADNEJ HISTORII WOJENNEJ.
 *
 * ROZGRANICZENIE. Kąt „a może poczekać na następny model?" i kąt
 * „kiedy Aga radzi POCZEKAĆ" są ZAJĘTE przez inne miasta. Ta strona
 * nie odradza zakupu w ogóle ani nie każe czekać na nowszy sprzęt —
 * mówi o KOLEJNOŚCI wyposażania kuchni od zera. Zajęte są też
 * „nauka gotowania od zera" (tam chodzi o umiejętność, nie o sprzęt)
 * i „cmentarzysko sprzętów kuchennych".
 *
 * FAKT, KTÓRY SIĘ ZESTARZAŁ W INNYCH TEKSTACH — I DLATEGO GO PILNUJĘ.
 * Cementownia Rejowiec NIE PRODUKUJE. Decyzja o likwidacji linii
 * klinkierowej zapadła w 2019 r. (metoda mokra, koszty CO2,
 * zwolnienia ok. połowy załogi), a w lipcu 2022 r. wyburzono kominy;
 * teren jest dziś opuszczony. Wiele stron w sieci wciąż opisuje
 * zakład w czasie teraźniejszym. W tekście jest to napisane wprost
 * i w czasie przeszłym.
 *
 * PUŁAPKA NAZEWNICZA — TU POTRÓJNA:
 * — MIASTO Rejowiec Fabryczny (kod 22-170, urząd na rejowiec.pl),
 * — GMINA WIEJSKA Rejowiec Fabryczny — OSOBNA jednostka z siedzibą
 *   w mieście, ale miasto do niej NIE należy,
 * — REJOWIEC — osobne miasto i gmina, ok. 4 km dalej.
 * Wszystkie trzy ze sobą sąsiadują. Każda liczba mieszkańców wymaga
 * sprawdzenia, której jednostki dotyczy. Dodatkowo STACJA KOLEJOWA
 * w tym mieście nazywa się „Rejowiec" — od tamtej, innej
 * miejscowości. W tekście nie ma nazwy stacji, żeby tego nie mnożyć.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE podaję liczby pociągów ani kierunków. Linia Warszawa –
 *   Lublin – Chełm – Dorohusk przez miasto biegnie i tyle mówię;
 *   rozkładu nie potwierdziłam, a kąt kolejowy jest i tak zajęty
 *   przez inne miasto,
 * — NIE podaję liczby mieszkańców bez roku. Urząd podaje 4 115
 *   (koniec 2023), GUS 3 984 (koniec 2024) — to nie sprzeczność,
 *   tylko dwa różne lata,
 * — NIE wymieniam nazw dzielnic. Morawinek, Stajne, Kadzinek i inne
 *   to HISTORYCZNE miejscowości włączone do miasta w 1962 r.,
 *   a nie dzisiejszy podział administracyjny. districts to PUSTA
 *   TABLICA,
 * — produktów z Listy Produktów Tradycyjnych dla powiatu chełmskiego
 *   NIE POTWIERDZIŁAM — więc nie ma o nich ani słowa.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — cementownię budowano w latach 1914–1924, rozbudowano
 *   w latach 1951–1955, produkcja klinkieru zlikwidowana od 2019 r.,
 *   kominy wyburzone w lipcu 2022 r.,
 * — miasto wyrosło z osiedla robotniczego przy zakładzie; kolejne
 *   osiedla budowano dla załogi, m.in. osiedle Wschód od 1977 r.
 *   (pierwsi mieszkańcy w 1978),
 * — prawa miejskie 22 lipca 1962 r.,
 * — do Lublina 57 km, do Chełma 20 km.
 */
export const REJOWIEC_FABRYCZNY: CityContent = {
  slug: "rejowiec-fabryczny",
  h1: "Thermomix Rejowiec Fabryczny – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rejowiec Fabryczny — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Rejowcu Fabrycznym: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rejowiec Fabryczny — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rejowcu Fabrycznym. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rejowca Fabrycznego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Rejowiec Fabryczny i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W pierwszej własnej kuchni to nie jest pierwszy zakup. I mówię to jako sprzedawca.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rejowcu Fabrycznym – jak wygląda prezentacja?",
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
      id: "pierwsza-kuchnia",
      heading: "Miasto mieszkań przy fabryce — i pytanie, co kupić do kuchni najpierw",
      paragraphs: [
        "Rejowiec Fabryczny jest miastem, które wyrosło z mieszkań. Najpierw była cementownia, budowana od 1914 i uruchomiona w 1924 roku, a przy niej osiedle robotnicze. Potem, przy rozbudowie w latach pięćdziesiątych, przybyło kolejnych bloków; osiedle Wschód zaczęto stawiać w 1977, a pierwsi ludzie wprowadzili się rok później. Prawa miejskie przyszły dopiero w lipcu 1962 roku — prawie czterdzieści lat po fabryce. Tutaj mieszkanie dostawało się razem z pracą i to jest historia większości domów w tym mieście.",
        "Samej cementowni już nie ma i piszę to wprost, bo połowa internetu wciąż opisuje ją w czasie teraźniejszym: produkcję klinkieru zlikwidowano od 2019 roku, a w lipcu 2022 wyburzono kominy. Zostało miasto i zostały mieszkania.",
        "A skoro o mieszkaniach — chcę tu powiedzieć rzecz, której sprzedawcy zwykle nie mówią. Jeśli urządzacie pierwszą własną kuchnię, ten sprzęt NIE jest zakupem pierwszym. Ani drugim.",
        "Pierwsze są rzeczy nudne: dobry nóż i deska, dwa albo trzy porządne garnki, patelnia, piekarnik, lodówka. Bez tego to urządzenie nie ma czego uzupełniać — bo ono nie zastępuje kuchni, tylko dokłada się do tego, co już działa. Kupione do pustego mieszkania stanie w kartonie do czasu, aż dokupicie resztę.",
        "Kiedy więc ma sens? Wtedy, gdy podstawy już są, a mimo to wieczory uciekają. Kiedy wiecie już, co gotujecie najczęściej, ile osób siada do stołu i o której realnie zaczynacie obiad. To wiedza, której w pierwszym miesiącu w nowym mieszkaniu jeszcze nie ma — pojawia się po pół roku.",
        "I dlatego, jeśli miałabym doradzić komuś, kto właśnie się wprowadził: lepiej kupić to za rok, ze spokojną głową, niż teraz, dokładając kolejną ratę do wszystkich pozostałych. Nie stracicie na tym nic — a ja wolę sprzedać komuś sprzęt, który będzie używany, niż taki, który stanie się kolejnym powodem do zmartwień.",
        "Jeśli natomiast podstawy macie i chodzi Wam tylko o to, czy to się u Was sprawdzi — przyjadę i sprawdzimy. Bez opłat i bez zobowiązania, na Waszym blacie.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rejowcu Fabrycznym?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, od jak dawna mieszkacie w tym mieszkaniu i co już macie w kuchni. Jeśli uznam, że to jeszcze nie ten moment, powiem Wam to na spotkaniu — i tak nic za nie nie płacicie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rejowcu Fabrycznym"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rejowieckiej rodziny",
      paragraphs: [
        "Rejowiec Fabryczny liczył blisko cztery tysiące mieszkańców na koniec 2024 roku i od dwóch dekad ich ubywa. Do Chełma jest stąd dwadzieścia kilometrów, do Lublina blisko sześćdziesiąt — więc praca bywa poza miastem, a obiad powstaje po powrocie.",
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

  districtsHeading: "Do których części Rejowca Fabrycznego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, a nazwy takie jak Morawinek czy Stajne to dawne miejscowości włączone do miasta w 1962 roku, nie dzisiejsze dzielnice — nie będę więc ich zgadywać. Przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Rejowiec Fabryczny też przyjadę",
  nearbyParagraphs: [
    "Rejowiec, Siedliszcze, Trawniki, Łopiennik Górny i Chełm są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Rejowiec", "Siedliszcze", "Trawniki", "Chełm", "Krasnystaw", "Świdnik"],

  about: blokOMnie("do Rejowca Fabrycznego", "w Rejowcu Fabrycznym i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Rejowca Fabrycznego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Rejowcu Fabrycznym"),
    {
      question: "Właśnie urządzam pierwszą kuchnię. Czy to dobry moment na taki zakup?",
      answer:
        "Zwykle nie i mówię to jako osoba, która ten sprzęt sprzedaje. Najpierw dobry nóż i deska, kilka porządnych garnków, patelnia, piekarnik i lodówka — urządzenie nie zastępuje kuchni, tylko dokłada się do tego, co już działa. Sens pojawia się wtedy, gdy podstawy są, a wieczory i tak uciekają. Lepiej kupić za rok ze spokojną głową niż teraz, dokładając kolejną ratę.",
    },
    {
      question: "Czy przyjedziesz, jeśli i tak jeszcze nie kupię?",
      answer:
        "Tak. Prezentacja i dojazd są bezpłatne, nie ma zobowiązania i nie trzeba decydować tego samego dnia. Jeśli uznam, że to u Was jeszcze nie ten moment, powiem to wprost na spotkaniu.",
    },
  ],

  geo: { lat: 51.1194, lng: 23.235 },
};
