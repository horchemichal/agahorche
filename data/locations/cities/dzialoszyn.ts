import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * DZIAŁOSZYN — gmina miejsko-wiejska w powiecie pajęczańskim.
 * MIASTO 5 212 mieszkańców, GMINA 11 438 (31.12.2024, GUS).
 * Brief mówił 6 000 — zawyżone.
 *
 * PRAWA MIEJSKIE — DATA SPORNA: 1412 (wersja gminy) / „przed
 * 1412" / 1421. NIE PODAJĘ ROKU. Utrata 1870 ukazem carskim,
 * PRZYWRÓCENIE 1 STYCZNIA 1994 r. — to jedno z najpóźniejszych
 * odzyskań praw miejskich w regionie, po 124 latach przerwy.
 *
 * OBALONE: cementownia DZIAŁA w 2026 r. — strona firmowa
 * publikuje aktualności z 1 i 2 września 2026 r. To odwrotna
 * pułapka niż zwykle w tym regionie: łatwo błędnie założyć
 * upadek. NAZWY ZAKŁADU NIE PODAJĘ. Historycznie były dwa
 * zakłady, połączone w 1974 r. w kombinat.
 * OBALONE: stare serwisy gminy i powiatu podają dane z 2002
 * i 2008 r. — NIE KORZYSTAM Z NICH.
 *
 * PRZYRODA — OŚ NEUTRALNA: ZAŁĘCZAŃSKI PARK KRAJOBRAZOWY,
 * utworzony 5 STYCZNIA 1978 r., 14 485 ha plus otulina
 * 12 328 ha, zajmuje OK. 43% POWIERZCHNI GMINY; to najbardziej
 * na północ wysunięte ogniwo systemu jurajskich parków
 * krajobrazowych. Chroni ok. 40-kilometrowy odcinek WARTY —
 * WIELKI ŁUK WARTY, gdzie rzeka wcina się w podłoże wapienne.
 * Ponad 100 zbiorowisk roślinnych i ok. 1 200 gatunków roślin.
 * Użytkowanie gminy: 61% użytki rolne, 28% lasy.
 *
 * ZABYTKI: rokokowy kościół św. Marii Magdaleny z 1787 r.,
 * zespół pałacowo-parkowy Męcińskich z XVIII w., odrestaurowany
 * w latach 1957–1961.
 *
 * KĄT: FARSZ — jedno nadzienie, kilka dań. Kąt pasuje do gminy
 * rolniczej, w której gotuje się w domu i na większą liczbę
 * osób.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że farsz to najbardziej opłacalna rzecz, jaką można w tym
 *   urządzeniu zrobić, bo z jednego robi się kilka różnych dań,
 * — że urządzenie rozwiązuje przy farszu problem, którego nie
 *   widać: wszystkie składniki idą po kolei do JEDNEGO naczynia,
 *   bez tarki, bez trzech misek i bez patelni do podsmażenia
 *   cebuli,
 * — że farsz musi być ZWIĄZANY, a nie mokry — i że to jest
 *   miejsce, w którym najczęściej się myli,
 * — że urządzenie SIEKA, a nie mieli, więc farsz mięsny wyjdzie
 *   inny niż z maszynki — o tym pisałam osobno i tu tylko
 *   odsyłam,
 * — że najlepiej sprawdza się przy farszach warzywnych,
 *   grzybowych, kapuścianych, serowych i bułkowych,
 * — że jedna porcja obsługuje pierogi, gołąbki, naleśniki
 *   i faszerowane warzywa,
 * — i ODMOWA: nic o surowym mięsie i o przechowywaniu farszu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O SUROWYM MIĘSIE ANI O PRZECHOWYWANIU
 *   GOTOWEGO FARSZU. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH PROPORCJI ani przepisów.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM, w tym cementowni.
 * — ŻADNEGO ROKU PRAW MIEJSKICH.
 * — ŻADNEJ LICZBY SOŁECTW — źródła podają trzy różne zestawy.
 * — NIE ROBIĘ TŁA z bezrobocia (8,0%) ani z wynagrodzeń.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Maszynka do mięsa"
 * (Miastko) dotyczy różnicy między mieleniem a siekaniem
 * i pytania, czy urządzenie zastąpi maszynkę — tam farsz jest
 * jednym z przykładów, tutaj jest tematem. „Pasztet"
 * (Sztutowo) dotyczy masy pieczonej w formie. „Pierogi" mają
 * własną stronę i tu są jednym z zastosowań, nie tematem.
 * „Smalec i pasty" (Kolonowskie) dotyczą smarowideł. Tutaj
 * chodzi o NADZIENIE jako półprodukt: o to, że robi się je raz,
 * a używa do kilku różnych dań.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku nadania praw miejskich ani wystawcy aktu.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ nazwy cementowni ani liczby zatrudnionych.
 * — NIE PISZĘ o rezerwacie Węże ani o jaskiniach — nie
 *   znalazłam urzędowego źródła z datą.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla gminy Działoszyn nie znalazłam żadnego.
 * — NIE MYLĘ Działoszyna z DZIAŁOSZYCAMI w świętokrzyskim,
 *   o których pisałam osobno. FAQ to rozróżnia — domeny obu
 *   gmin są bliźniacze.
 * — districts: nie potwierdzono osiedli statutowych; wzmianki
 *   o „czterech obrębach" dotyczą obrębów ewidencyjnych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 5 212, gmina 11 438 mieszkańców (31.12.2024, GUS),
 * — prawa miejskie w XV w. (data sporna), utracone w 1870 r.,
 *   przywrócone 1 stycznia 1994 r. — po 124 latach,
 * — Załęczański Park Krajobrazowy utworzony 5 stycznia 1978 r.,
 *   14 485 ha plus otulina; zajmuje ok. 43% powierzchni gminy;
 *   najbardziej na północ wysunięte ogniwo jurajskich parków,
 * — Wielki Łuk Warty — rzeka wcina się łukiem w podłoże
 *   wapienne; chroniony ok. 40-kilometrowy odcinek,
 * — park liczy ponad 100 zbiorowisk roślinnych i ok. 1 200
 *   gatunków roślin,
 * — 61% powierzchni gminy to użytki rolne, 28% lasy,
 * — rokokowy kościół św. Marii Magdaleny z 1787 r. i zespół
 *   pałacowo-parkowy Męcińskich z XVIII w.,
 * — w mieście działa cementownia.
 */
export const DZIALOSZYN: CityContent = {
  slug: "dzialoszyn",
  h1: "Thermomix Działoszyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Działoszyn (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Działoszynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Działoszyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Działoszynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Działoszyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Działoszyn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jedno nadzienie, cztery różne dania. To się liczy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Działoszynie – jak wygląda prezentacja?",
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
      id: "farsz",
      heading: "Wielki Łuk Warty i czterdzieści trzy procent gminy w parku — czyli o farszu",
      paragraphs: [
        "Czterdzieści trzy procent gminy Działoszyn leży w Załęczańskim Parku Krajobrazowym, utworzonym w styczniu 1978 roku — najbardziej wysuniętym na północ ogniwie systemu jurajskich parków. Park chroni czterdziestokilometrowy odcinek Warty, która wcina się tu łukiem w wapienne podłoże, oraz ponad sto zbiorowisk roślinnych. Sześćdziesiąt jeden procent powierzchni gminy to użytki rolne. Samo miasto ma za sobą nietypową historię: prawa miejskie odebrano mu w 1870 roku, a wróciły dopiero 1 stycznia 1994 — po stu dwudziestu czterech latach.",
        "W gminie rolniczej, w której gotuje się w domu i zwykle na więcej niż dwie osoby, najbardziej opłacalną rzeczą, jaką da się zrobić w tym urządzeniu, jest farsz. I to jest temat, o którym w ulotkach nie ma nic, bo farsz nie wygląda efektownie na zdjęciu.",
        "Rzecz polega na tym, że farsz robi się raz, a używa do kilku różnych dań. Jedna porcja to pierogi na obiad, gołąbki na jutro i naleśniki na kolację — albo faszerowane papryki, cukinia, kapusta. Nakład pracy jest jeden, a wynik czterokrotny.",
        "Co urządzenie realnie rozwiązuje: całą tę robotę wokół, której nie widać w przepisie. Cebula posiekana bez łez i bez patelni. Marchewka i seler starte bez tarki. Kapusta poszatkowana. Grzyby i namoczona bułka rozdrobnione. Czosnek, natka, przyprawy zmielone razem. Wszystko po kolei, do jednego naczynia, bez wyjmowania trzech misek i bez zmywania między jednym a drugim. Kto kiedykolwiek robił farsz na sześćdziesiąt pierogów, wie, że gotowanie to jest w tym najkrótszy etap.",
        "Rzecz, w której najczęściej się myli, i mówię o niej wprost: farsz musi być związany, a nie mokry. Warzywa puszczają wodę, a nadmiar wody rozmiękcza ciasto i wypływa przy zawijaniu. Namoczona bułka, kasza albo bułka tarta wiążą tę wodę — i to jest w farszu ważniejsze niż jakikolwiek dodatek smakowy.",
        "Jedna uwaga techniczna, do której tylko odsyłam, bo pisałam o niej osobno: to urządzenie sieka nożem, a nie mieli przez sitko. Farsz mięsny wyjdzie z niego inny niż z maszynki — bardziej pastowaty, mniej włóknisty. Przy farszach warzywnych, grzybowych, kapuścianych, serowych i bułkowych to nie ma znaczenia i tam sprawdza się najlepiej.",
        "I granica, przy której nie ustąpię: nie doradzę Wam nic o surowym mięsie ani o tym, jak długo gotowy farsz może stać i czy wolno go zrobić dzień wcześniej. To jest bezpieczeństwo żywności, ryzyko jest realne, a ja sprzedaję sprzęt kuchenny.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Działoszynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli szykujecie pierogi albo gołąbki i chcecie zobaczyć, ile z tego robi urządzenie — powiedzcie przy umawianiu. Farsz to najlepsza rzecz do pokazania, bo widać różnicę w pracy, a nie w obietnicy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Działoszynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla działoszyńskiej rodziny",
      paragraphs: [
        "Samo miasto Działoszyn liczy nieco ponad pięć tysięcy mieszkańców, a cała gmina ponad jedenaście. Prawa miejskie miasto zdobyło w piętnastym wieku — dokładnej daty nie podaję, bo źródła podają trzy różne — straciło je ukazem carskim w 1870 roku i odzyskało dopiero 1 stycznia 1994, po stu dwudziestu czterech latach. Czterdzieści trzy procent powierzchni gminy leży w Załęczańskim Parku Krajobrazowym z 1978 roku, chroniącym Wielki Łuk Warty, gdzie rzeka wcina się w wapienne podłoże; rośnie tu około tysiąca dwustu gatunków roślin. Sześćdziesiąt jeden procent gminy to użytki rolne, dwadzieścia osiem procent lasy. Z zabytków zachowały się rokokowy kościół świętej Marii Magdaleny z 1787 roku i osiemnastowieczny zespół pałacowo-parkowy Męcińskich.",
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

  districtsHeading: "Do których części gminy Działoszyn dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy — także do tych leżących w granicach Załęczańskiego Parku Krajobrazowego. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Działoszyn też przyjadę",
  nearbyParagraphs: [
    "Pajęczno, Wieluń, Bełchatów, Kłobuck, Radomsko i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pajęczno", "Wieluń", "Bełchatów", "Radomsko", "Złoczew"],

  about: blokOMnie("do Działoszyna", "w Działoszynie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Działoszyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo pomyłka jest bardzo częsta: chodzi o Działoszyn w powiecie pajęczańskim w łódzkiem, a nie o Działoszyce w świętokrzyskim ani o wieś Działoszyn na Dolnym Śląsku.",
    },
    ...faqWspolne("w Działoszynie"),
    {
      question: "Co urządzenie robi przy farszu?",
      answer:
        "Całą robotę wokół, której nie widać w przepisie: cebulę bez łez i bez patelni, startą marchewkę i seler bez tarki, poszatkowaną kapustę, rozdrobnione grzyby i namoczoną bułkę, zmielone przyprawy. Wszystko po kolei do jednego naczynia, bez trzech misek i bez zmywania po drodze.",
    },
    {
      question: "Dlaczego mój farsz jest za mokry?",
      answer:
        "Bo warzywa puszczają wodę, a nic jej nie związało. Namoczona bułka, kasza albo bułka tarta wiążą tę wodę — i to jest w farszu ważniejsze niż jakikolwiek dodatek smakowy. Nadmiar wody rozmiękcza ciasto i wypływa przy zawijaniu.",
    },
    {
      question: "Czy farsz mięsny wyjdzie jak z maszynki?",
      answer:
        "Nie — urządzenie sieka nożem, a nie mieli przez sitko, więc farsz będzie bardziej pastowaty i mniej włóknisty. Najlepiej sprawdza się przy farszach warzywnych, grzybowych, kapuścianych i serowych. I nie doradzę nic o surowym mięsie ani o tym, jak długo gotowy farsz może stać: to bezpieczeństwo żywności.",
    },
  ],

  geo: { lat: 51.1178, lng: 18.87 },
};
