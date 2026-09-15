import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * WIĘCBORK — powiat sępoleński, woj. kujawsko-pomorskie,
 * KRAJNA.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 5 590 mieszkańców (GUS 31.12.2024), 4,3 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 12 761 osób.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ WIĘCBORK.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ Rozbieżności ze stronami urzędowymi ŚLADOWE.
 * ⚠ ODMIANA: D. WIĘCBORKA, Ms. W WIĘCBORKU,
 *   przym. WIĘCBORSKI.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO SŁOWNIKOWO —
 *   NIE UŻYWAM ŻADNEJ.
 * ⚠ RYZYKO POMYLENIA: SĘPÓLNO KRAJEŃSKIE, KAMIEŃ
 *   KRAJEŃSKI, MIASTECZKO KRAJEŃSKIE, KRAJENKA —
 *   sąsiednie miasta z tym samym przymiotnikiem
 *   regionalnym.
 * ⚠⚠ ŹRÓDŁA DO ODRZUCENIA: serwisy lansujące tezę
 *   o „1400-letnim Więcborku". NIE KORZYSTAM.
 *   TWARDA GRANICA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1483 — W MIEŚCIE JEDEN MŁYN I JEDEN BROWAR.
 *   ⚠ ZERO PIWA JAKO TEMATU I ZERO ZACHĘTY DO ALKOHOLU —
 *   browar występuje WYŁĄCZNIE jako liczba.
 * — 1580 — 11 WARSZTATÓW.
 * — 1764 — TRZY CECHY oraz imiennie: 3 TKACZY,
 *   1 KOŁODZIEJ, 2 PIEKARZY, 2 KOWALI.
 *   ⚠ TO JEST SPIS NA CAŁE MIASTO — osiem osób
 *   w czterech fachach.
 * — LUDNOŚĆ HISTORYCZNA: 1805 — 640 osób;
 *   2019 — 5 965. ⚠ PEŁNY CIĄG JEST W ŹRÓDLE,
 *   PODAJĘ TYLKO DWA PUNKTY SKRAJNE.
 * — ⚠⚠ RDZEŃ KĄTA — JEZIORO WIĘCBORSKIE:
 *   POWIERZCHNIA 202 HA,
 *   GŁĘBOKOŚĆ MAKSYMALNA 18,5 M,
 *   GŁĘBOKOŚĆ ŚREDNIA 8,3 M.
 *   ⚠ RÓŻNICA MIĘDZY MAKSIMUM A ŚREDNIĄ JEST
 *   PONAD DWUKROTNA — TO JEST CAŁY FUNDAMENT KĄTA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Więcbork.
 *   ⚠⚠ PUŁAPKA ROZBROJONA: „JABŁKA KRAJEŃSKIE"
 *   (wpis 21.08.2025) obejmują POWIATY BYDGOSKI,
 *   NAKIELSKI I PILSKI — NIE POWIAT SĘPOLEŃSKI
 *   I NIE GMINĘ WIĘCBORK, mimo nazwy regionalnej,
 *   która sugeruje inaczej. NIE PRZYPISUJĘ.
 *   TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: ŚREDNIA KŁAMIE — dlaczego „ugotowane" nie znaczy
 * „ugotowane w środku".
 * Kąt od jeziora: 18,5 metra w najgłębszym miejscu,
 * 8,3 metra średnio. Ponad dwukrotna różnica. Ktoś, kto
 * zna tylko średnią, nie wie o tym jeziorze rzeczy
 * najważniejszej. W garnku i na blasze jest dokładnie
 * tak samo.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Jezioro Więcborskie ma 202 hektary powierzchni,
 *   18,5 metra w najgłębszym miejscu i 8,3 metra średnio —
 *   różnica ponad dwukrotna,
 * — ŻE ŚREDNIA JEST PRAWDZIWA I JEDNOCZEŚNIE BEZUŻYTECZNA:
 *   nie ma w tym jeziorze ani jednego miejsca, które
 *   miałoby dokładnie osiem metrów trzydzieści,
 * — ⚠⚠ ŻE W GARNKU I NA BLASZE JEST DOKŁADNIE TAK SAMO —
 *   TO JEST RDZEŃ TEKSTU. „Danie jest gorące" nie znaczy,
 *   że jest gorące wszędzie,
 * — GDZIE TO REALNIE BOLI:
 *   — MIĘSO Z PIEKARNIKA bywa gotowe na zewnątrz
 *     i zimne w środku; średnia temperatura kawałka
 *     nic o tym nie mówi,
 *   — ZAPIEKANKA jest wrząca na brzegach i letnia
 *     w środku — bo ciepło szło z zewnątrz do środka
 *     i nie zdążyło,
 *   — ODGRZEWANE DANIE ma te same dwie strefy,
 *     tylko jeszcze wyraźniej,
 *   — MROŻONA RZECZ WŁOŻONA DO GARNKA chłodzi punktowo,
 *     a nie równomiernie,
 * — ⚠⚠ ŻE Z TEGO WYNIKA JEDNA RZECZ PRAKTYCZNA:
 *   SPRAWDZAĆ TRZEBA W NAJGRUBSZYM MIEJSCU,
 *   A NIE W BYLE JAKIM. Widelec wbity z brzegu zawsze
 *   powie, że gotowe,
 * — ŻE DRUGIM WYJŚCIEM JEST DANIE CZASU NA WYRÓWNANIE:
 *   ciepło samo wędruje z miejsc gorętszych do chłodniejszych,
 *   więc kilka minut odstawienia robi więcej niż kolejne
 *   pięć minut grzania — i przy okazji nie wysusza,
 * — ⚠ UCZCIWIE O SPRZĘCIE — I TU JEST RZECZ ISTOTNA:
 *   Thermomix ma nad tym przewagę, ale z jednego
 *   konkretnego powodu: MIESZA. W mieszanej zawartości
 *   różnica między dnem a górą nie zdąży się zrobić,
 *   więc średnia zaczyna być prawdziwa. To jedyny powód
 *   i nie ma w tym magii.
 *   ⚠ ALE VAROMA I PIECZENIE TO JUŻ INNA HISTORIA:
 *   tam nic się nie miesza i wszystkie powyższe pułapki
 *   wracają. Mówię to wprost.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ŻADNYCH KONKRETNYCH TEMPERATUR, CZASÓW
 *   ANI PROGÓW „BEZPIECZNEGO WYPIECZENIA". To jest
 *   granica bezpieczeństwa żywności i NIE WCHODZĘ W NIĄ
 *   ani jednym zdaniem. Piszę o NIERÓWNOMIERNOŚCI
 *   I O TYM, GDZIE SPRAWDZAĆ — nigdy o tym, kiedy coś
 *   jest „bezpieczne". TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO PIWA I ZERO ZACHĘTY DO ALKOHOLU.
 * — ⚠ ZERO PIEKARNIKA JAKO TEMATU — kąt zajęty.
 *   Piekarnik występuje jako przykład.
 * — ⚠ ZERO ODGRZEWANIA JAKO TEMATU i ZERO STYGNIĘCIA
 *   MIĘDZY KUCHNIĄ A STOŁEM — kąt zajęty (Węgrów).
 * — ⚠ ZERO OSTRZENIA I NOŻY — kąt zajęty (Drzewica).
 * — ŻADNYCH USTAWIEŃ URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO KAROLEWA I ZERO WYDARZEŃ Z WRZEŚNIA
 *   1939 R. To temat obecny nawet w dziale „Ciekawostki"
 *   na oficjalnej stronie miasta i wypływa w pierwszych
 *   wynikach wyszukiwania. ZAKAZ BEZWZGLĘDNY —
 *   obejmuje także słownictwo, które mogłoby się z tym
 *   skojarzyć w metaforze: NIE UŻYWAM SŁÓW „SELEKCJA"
 *   ANI „TRANSPORT" W ŻADNYM KONTEKŚCIE NA TEJ STRONIE.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   W CAŁEJ TEJ FALI.
 * — ZERO wątków wojennych i okupacyjnych w ogóle.
 * — ZERO wątków wyznaniowych i narodowościowych.
 * — ZERO wyludniania i bezrobocia.
 * — ZERO niemieckiej nazwy miasta.
 * — ZERO tezy o „1400-letnim Więcborku".
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „CIEPŁE NA STÓŁ" (Węgrów) dotyczy STYGNIĘCIA DANIA
 *   MIĘDZY KUCHNIĄ A STOŁEM.
 * — „DRUGA PARTIA" (Barcin) dotyczy STYGNIĘCIA NACZYNIA
 *   MIĘDZY PARTIAMI.
 * — „POWIERZCHNIA STYKU" (Konstancin-Jeziorna) dotyczy
 *   CIENKIEJ WARSTWY.
 * — „ZA DUŻE NACZYNIE" (Żnin) dotyczy ROZMIARU NACZYNIA.
 * TUTAJ chodzi o RÓŻNICĘ MIĘDZY ŚRODKIEM A BRZEGIEM
 * JEDNEGO KAWAŁKA I O TO, GDZIE SIĘ SPRAWDZA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PRZYPISUJĘ gminie jabłek krajeńskich.
 * — NIE PODAJĘ żadnych temperatur ani czasów.
 * — NIE ORZEKAM, kiedy coś jest „gotowe" w sensie
 *   bezpieczeństwa.
 * — NIE KORZYSTAM ze źródeł lansujących tezę
 *   o 1400-letnim mieście.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Więcbork leży na Krajnie, w powiecie sępoleńskim,
 *   jest miastem w gminie miejsko-wiejskiej i liczy 5 590
 *   mieszkańców (GUS, 31.12.2024) na 4,3 km²; cała gmina
 *   ma 12 761 osób,
 * — w 1483 roku działał w mieście jeden młyn i jeden
 *   browar, w 1580 — jedenaście warsztatów, a w 1764 roku
 *   trzy cechy oraz, wymienieni imiennie, trzej tkacze,
 *   jeden kołodziej, dwóch piekarzy i dwóch kowali,
 * — w 1805 roku mieszkało tu sześćset czterdzieści osób,
 * — Jezioro Więcborskie ma 202 hektary powierzchni,
 *   18,5 metra głębokości w najgłębszym miejscu
 *   i 8,3 metra średnio.
 */
export const WIECBORK: CityContent = {
  slug: "wiecbork",
  h1: "Thermomix Więcbork – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Więcbork — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Więcborku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Więcbork — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Więcborku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Więcborka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Więcbork"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„Gorące” nie znaczy „gorące wszędzie”.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Więcborku – jak wygląda prezentacja?",
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
      id: "srednia-klamie",
      heading: "Osiem i trzy dziesiąte metra, których nigdzie nie ma",
      paragraphs: [
        "Jezioro Więcborskie ma dwieście dwa hektary powierzchni. W najgłębszym miejscu osiemnaście i pół metra, a średnio — osiem i trzy dziesiąte. Różnica ponad dwukrotna.",
        "Ta średnia jest zupełnie prawdziwa i zupełnie bezużyteczna. W całym jeziorze nie ma ani jednego miejsca, które miałoby dokładnie osiem metrów trzydzieści. Kto zna tylko średnią, nie wie o tym akwenie rzeczy najważniejszej.",
        "W garnku i na blasze jest dokładnie tak samo.",
        "„Danie jest gorące” nie znaczy, że jest gorące wszędzie. Znaczy tylko, że gdzieś zmierzyliśmy — zwykle tam, gdzie akurat było wygodnie.",
        "Mięso wyjęte z piekarnika bywa gotowe na zewnątrz i chłodne w środku, a średnia temperatura kawałka nie mówi o tym nic. Zapiekanka potrafi być wrząca na brzegach i letnia w środku, bo ciepło szło z zewnątrz i po prostu nie zdążyło dojść. Odgrzewane danie ma te same dwie strefy, tylko jeszcze wyraźniej zaznaczone. A mrożona rzecz włożona do garnka chłodzi punktowo — nie całą zawartość równomiernie, tylko to, co ma wokół siebie.",
        "Wynika z tego jedna rzecz, bardzo prosta i bardzo rzadko stosowana: sprawdzać trzeba w najgrubszym miejscu, a nie w byle jakim. Widelec wbity z brzegu zawsze powie, że gotowe — bo brzeg naprawdę jest gotowy.",
        "Drugie wyjście jest jeszcze prostsze: dać czas na wyrównanie. Ciepło samo wędruje z miejsc gorętszych do chłodniejszych, więc kilka minut odstawienia robi więcej niż kolejne pięć minut grzania — i przy okazji niczego nie wysusza. To jest ten moment, który wszyscy pomijamy, bo wygląda na nicnierobienie.",
        "Uczciwie o sprzęcie, bo tu jest rzecz warta wyjaśnienia. Thermomix ma nad tym przewagę, ale z jednego konkretnego powodu: on miesza. W mieszanej zawartości różnica między dnem a górą nie zdąży się wytworzyć, więc średnia zaczyna wreszcie coś znaczyć. Tyle. Nie ma w tym żadnej magii ani specjalnej technologii — jest ruch.",
        "Ale Varoma i wszystko, co się piecze, to już inna historia. Tam nic się nie miesza i wszystkie powyższe pułapki wracają w komplecie. Mówię to wprost, bo różnica między „urządzenie to załatwia” a „urządzenie załatwia to tam, gdzie miesza” jest całkiem duża.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje Thermomixa" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Więcborku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was coś regularnie wychodzi gotowe z wierzchu, a chłodne w środku — powiedz to przy umawianiu. To zwykle kwestia miejsca sprawdzania, nie przepisu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Więcborku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla więcborskiej rodziny",
      paragraphs: [
        "Więcbork leży na Krajnie, w powiecie sępoleńskim, jest miastem w gminie miejsko-wiejskiej i liczy blisko pięć i pół tysiąca mieszkańców na czterech i trzech dziesiątych kilometra kwadratowego; cała gmina ma ponad dwanaście i pół tysiąca osób. W 1483 roku działał w mieście jeden młyn i jeden browar, w 1580 — jedenaście warsztatów, a w 1764 roku trzy cechy oraz, wymienieni imiennie, trzej tkacze, jeden kołodziej, dwóch piekarzy i dwóch kowali. Cały fach kowalski w mieście to były wtedy dwie osoby. W 1805 roku mieszkało tu sześćset czterdzieści osób. Jezioro Więcborskie ma dwieście dwa hektary powierzchni, osiemnaście i pół metra głębokości w najgłębszym miejscu i osiem i trzy dziesiąte metra średnio.",
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

  districtsHeading: "Do których części Więcborka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i zabudowy nad jeziorem po osiedla przy wylotach dróg. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Więcbork też przyjadę",
  nearbyParagraphs: [
    "Sępólno Krajeńskie, Kamień Krajeński, Mrocza, Nakło nad Notecią, Tuchola, Sadki i Łobżenica są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sępólno Krajeńskie", "Kamień Krajeński", "Mrocza", "Nakło nad Notecią"],

  about: blokOMnie("do Więcborka", "w Więcborku", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Więcborka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Więcbork jest miastem w gminie miejsko-wiejskiej w powiecie sępoleńskim — nie mylić z Sępólnem Krajeńskim ani z Kamieniem Krajeńskim.",
    },
    ...faqWspolne("w Więcborku"),
    {
      question: "Dlaczego danie bywa gorące z wierzchu, a chłodne w środku?",
      answer:
        "Bo ciepło szło z zewnątrz do środka i nie zdążyło dojść. Średnia temperatura kawałka nie mówi o tym nic — tak jak średnia głębokość jeziora nie mówi, gdzie jest najgłębiej. Stąd praktyczny wniosek: sprawdzać trzeba w najgrubszym miejscu, bo widelec wbity z brzegu zawsze powie, że gotowe.",
    },
    {
      question: "Czy Thermomix gotuje równomierniej niż garnek?",
      answer:
        "Tam, gdzie miesza — tak, i to z tego jednego powodu: w mieszanej zawartości różnica między dnem a górą nie zdąży się wytworzyć. Żadnej magii w tym nie ma, jest ruch. Ale Varoma i wszystko, co się piecze, to inna historia — tam nic się nie miesza i te same pułapki wracają.",
    },
  ],

  geo: { lat: 53.3537, lng: 17.4906 },
};
