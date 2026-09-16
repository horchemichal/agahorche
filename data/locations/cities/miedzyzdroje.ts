import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * MIĘDZYZDROJE — powiat kamieński,
 * woj. zachodniopomorskie, NA WYSPIE WOLIN.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 842 mieszkańców (GUS 31.12.2024), 5,2 km² —
 * NAJMNIEJSZE OBSZAROWO Z TEJ FALI, gęstość 938,4 os./km²
 * — NAJWYŻSZA.
 * CAŁA GMINA: 5 974 osoby, 116,2 km², TYLKO PIĘĆ WSI:
 * Biała Góra, Grodno, Lubin, Wapnica, Wicko — bo znaczną
 * część powierzchni zajmuje park narodowy.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,9283 / 14,4505.
 *   ⚠⚠ ŹRÓDŁO PODAŁO TE WSPÓŁRZĘDNE W NIETYPOWYM
 *   FORMACIE — wartości mieszczą się w granicach wyspy
 *   i zgadzają z położeniem miasta, ale NIE ZOSTAŁY
 *   POTWIERDZONE DRUGIM ŹRÓDŁEM.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — nie podaję.
 * ⚠ PRAWA MIEJSKIE: 1947 R. — jedne z najpóźniej nadanych.
 *   Wcześniej osada letniskowa.
 *   ⚠⚠ ROKU 1947 UŻYWAM WYŁĄCZNIE JAKO DATY NADANIA PRAW.
 *   Bez kontekstu powojennego. TWARDA GRANICA.
 *
 * ⚠⚠⚠ ODMIANA — PLURALE TANTUM I REALNA PUŁAPKA:
 *   D. MIĘDZYZDROJÓW (nie „Międzyzdroi" — ta forma jest
 *   BŁĘDNA, mimo że wygląda regularniej),
 *   Ms. W MIĘDZYZDROJACH, B. MIĘDZYZDROJE.
 *   ⭐ FORMA „MIĘDZYZDROJÓW" POTWIERDZONA W PORADNI PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — nie ustalono
 *   powszechnie przyjętej formy.
 *   ⚠ PRZYMIOTNIKA TEŻ NIE UŻYWAM — w sekcji rodzinnej
 *   piszę „dla rodziny z Międzyzdrojów".
 * ⚠⚠⚠ ROZRÓŻNIENIE OBOWIĄZKOWE: MIĘDZYZDROJE (miasto)
 *   ≠ WYSPA WOLIN (265 km²) ≠ WOLIŃSKI PARK NARODOWY
 *   ≠ MIASTO WOLIN (osobna gmina, MA WŁASNĄ STRONĘ
 *   W SERWISIE). Międzyzdroje leżą NA wyspie Wolin,
 *   ale to inna gmina niż gmina Wolin.
 *   ROZGRANICZAM W FAQ.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — MOLO:
 * — DŁUGOŚĆ 395 M — NAJDŁUŻSZE BETONOWE MOLO W POLSCE,
 * — pierwszy drewniany pomost od 1884 r.,
 * — 1906 — rozbudowa do PONAD 300 M, z dworcem pasażerskim
 *   i kawiarnią,
 * — ⚠ MOMENTU ZNISZCZENIA NIE USTALONO — nie podaję
 *   przyczyny ani daty,
 * — 23 PAŹDZIERNIKA 1993 — kamień węgielny pod odbudowę,
 * — 6 SIERPNIA 1994 — OTWARCIE PIERWSZEGO ODCINKA:
 *   TYLKO 120 METRÓW. TO JEST WŁAŚCIWY HAK KĄTA,
 * — 2004 — wydłużenie o 275 m,
 * — 19 MARCA 2005 — oficjalne otwarcie całości.
 *   Koncesja na czterdzieści lat.
 *
 * — PROMENADA GWIAZD: od 1996 r., OKOŁO DWUSTU PŁYT
 *   Z ODCISKAMI DŁONI. Festiwal co roku w lipcu.
 *   ⚠ NAZWISK NIE WYMIENIAM — zasada „żadnych realnych
 *   osób publicznych".
 * — WOLIŃSKI PARK NARODOWY: pierwszy polski park narodowy
 *   o charakterze morskim, zajmuje ponad 40 % powierzchni
 *   wyspy Wolin (265 km²). Wzgórze Gosań — 93,4 m n.p.m.
 *   ⚠⚠ WYSOKOŚCI GOSANIA NIE PODAJĘ — materiały turystyczne
 *   podają też 95–100 m, a różnica nie została rozstrzygnięta.
 *   Piszę o parku bez liczby.
 * ⚠ DŁUGOŚCI PLAŻY I WYSOKOŚCI WYDM NIE USTALONO —
 *   nie podaję.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE POTWIERDZONO
 *   wpisu dla gminy Międzyzdroje. NIE PRZYPISUJĘ PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: PIERWSZE STO DWADZIEŚCIA METRÓW — o zaczynaniu
 * od kawałka, który już działa, zamiast czekania,
 * aż całość będzie gotowa.
 * Kąt od mola: kamień węgielny w październiku 1993,
 * a w sierpniu 1994 otwarto pierwsze sto dwadzieścia
 * metrów — mniej niż połowę docelowej długości. Ludzie
 * chodzili tym molem przez dziesięć lat, zanim dobudowano
 * resztę. Dziś ma trzysta dziewięćdziesiąt pięć metrów.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pierwszy pomost stanął tu w 1884 r., w 1906 miał
 *   ponad trzysta metrów, że odbudowę zaczęto 23 października
 *   1993 r., pierwsze sto dwadzieścia metrów otwarto
 *   6 sierpnia 1994, resztę dobudowano w 2004,
 *   a całość otwarto 19 marca 2005 — dziś molo ma
 *   395 metrów i jest najdłuższym betonowym w Polsce,
 * — ŻE STO DWADZIEŚCIA METRÓW MOLA TO JUŻ BYŁO MOLO —
 *   to jest rdzeń. Nie makieta, nie etap. Działało
 *   przez dziesięć lat, zanim stało się tym, czym miało być,
 * — ⚠⚠ ŻE W KUCHNI CZEKA SIĘ NA CAŁOŚĆ ZASKAKUJĄCO
 *   CZĘSTO: na wolny weekend, na koniec remontu, na to,
 *   aż dzieci podrosną, aż kupi się właściwy sprzęt.
 *   A w tym czasie nie dzieje się nic,
 * — ⚠⚠ ŻE PYTANIE, KTÓRE TO ROZBRAJA, JEST JEDNO:
 *   JAKA JEST NAJMNIEJSZA WERSJA TEGO, KTÓRA JUŻ DZIAŁA.
 *   Nie „najlepsza" i nie „docelowa" — najmniejsza taka,
 *   z której już jest pożytek,
 * — ⚠⚠ ŻE TA WERSJA MA JEDNĄ CECHĘ, KTÓREJ PLAN NIE MA:
 *   ona już daje informację zwrotną. Po pierwszym
 *   wykonaniu wiadomo więcej niż po miesiącu planowania,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: CZĘŚĆ RZECZY NAPRAWDĘ
 *   NIE MA SENSOWNEJ MAŁEJ WERSJI i wtedy czekanie jest
 *   właściwą decyzją. Udawanie, że wszystko da się
 *   podzielić, jest równie kosztowne jak czekanie
 *   na wszystko,
 * — ⚠ UCZCIWIE O SPRZĘCIE: URZĄDZENIE NIE JEST MAŁĄ
 *   WERSJĄ NICZEGO — to jest zakup w całości i jedna
 *   decyzja. MÓWIĘ TO WPROST, bo to dokładnie ta rzecz,
 *   której podzielić się nie da. Podzielić da się za to
 *   PIERWSZY MIESIĄC PO ZAKUPIE i o tym rozmawiam
 *   na prezentacji.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LICZBY PODEJŚĆ I OKRESU PRÓBNEGO — kąt
 *   zajęty (Sławno, ta sama fala). ⚠⚠ NAJBLIŻSZY KĄT.
 *   Tam chodzi o WYZNACZENIE SOBIE CZASU NA OSWOJENIE;
 *   TUTAJ o ZMNIEJSZENIE ZAKRESU, ŻEBY ZACZĄĆ DZIŚ.
 *   Rozgraniczam wprost.
 * — ⚠⚠ ZERO PIERWSZEGO RAZU Z RZECZAMI NIEUŻYWANYMI —
 *   kąt zajęty (Nowogard).
 * — ⚠⚠ ZERO TRZECIEGO TYGODNIA I KOŃCA ZAPAŁU — kąty
 *   zajęte (Konin, Żyrardów).
 * — ⚠⚠ ZERO PRZYROSTU WPRAWY — kąt zajęty (Chojna).
 * — ⚠⚠ ZERO POGŁĘBIANIA JEDNEGO DANIA — kąt zajęty
 *   (Połczyn-Zdrój).
 * — ⚠ ZERO ETAPÓW WEWNĄTRZ JEDNEGO GOTOWANIA — kąt
 *   zajęty (Susz). Tam chodzi o etapy jednego dania;
 *   TUTAJ o etapy zamiaru.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO KONKRETNEGO DANIA Z NAZWY.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ⚠⚠ ŻADNYCH NAZWISK OSÓB PUBLICZNYCH — przy Promenadzie
 *   Gwiazd to pokusa oczywista. Podaję wyłącznie liczbę
 *   płyt i rok. TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO PRZYCZYNY ZNISZCZENIA PRZEDWOJENNEGO MOLA —
 *   nie ustalono jej, a najbardziej prawdopodobny kontekst
 *   jest wojenny. Piszę wyłącznie, że molo odbudowywano
 *   od nowa.
 * — ⚠⚠ ZERO KONTEKSTU ROKU 1947 I ZERO PRZESIEDLEŃ.
 * — ⚠ ZERO WYSOKOŚCI WZGÓRZA GOSAŃ — rozbieżność źródeł.
 * — ⚠ ZERO NAZWY FIRMY ZARZĄDZAJĄCEJ MOLEM.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ wysokości n.p.m. miasta ani Gosania.
 * — NIE PODAJĘ długości plaży ani wysokości wydm.
 * — NIE PODAJĘ, kiedy i dlaczego zniszczono dawne molo.
 * — NIE WYMIENIAM ŻADNEGO NAZWISKA.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE PRZYPISUJĘ Międzyzdrojom produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Międzyzdroje leżą na wyspie Wolin, w powiecie
 *   kamieńskim; są miastem w gminie miejsko-wiejskiej
 *   i liczą 4 842 mieszkańców (GUS, 31.12.2024) na 5,2 km²,
 *   przy gęstości blisko dziewięciuset czterdziestu osób
 *   na kilometr kwadratowy; cała gmina ma 5 974 osoby
 *   na 116,2 km², ale tylko pięć wsi — Białą Górę, Grodno,
 *   Lubin, Wapnicę i Wicko — bo znaczną część jej
 *   powierzchni zajmuje Woliński Park Narodowy, pierwszy
 *   polski park narodowy o charakterze morskim,
 *   obejmujący ponad czterdzieści procent wyspy,
 * — prawa miejskie Międzyzdroje otrzymały w 1947 r.,
 * — pierwszy drewniany pomost powstał tu w 1884 r.,
 *   a w 1906 miał już ponad 300 m, z dworcem pasażerskim
 *   i kawiarnią,
 * — odbudowę współczesnego mola zaczęto 23 października
 *   1993 r.; pierwszy odcinek o długości 120 m otwarto
 *   6 sierpnia 1994 r., w 2004 dobudowano 275 m,
 *   a całość otwarto 19 marca 2005 r. Molo ma 395 m
 *   i jest najdłuższym betonowym molem w Polsce,
 * — Promenada Gwiazd powstała w 1996 r. i liczy dziś
 *   około dwustu płyt z odciskami dłoni; festiwal, przy
 *   którym powstała, odbywa się co roku w lipcu.
 */
export const MIEDZYZDROJE: CityContent = {
  slug: "miedzyzdroje",
  h1: "Thermomix Międzyzdroje – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Międzyzdroje — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Międzyzdrojach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Międzyzdroje — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Międzyzdrojach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Międzyzdrojów z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Międzyzdroje"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sto dwadzieścia metrów mola to już było molo. Chodzono nim przez dziesięć lat.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Międzyzdrojach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "pierwsze-sto-dwadziescia",
      heading: "Pierwsze sto dwadzieścia metrów",
      paragraphs: [
        "Pierwszy pomost stanął w Międzyzdrojach w 1884 roku. W 1906 miał już ponad trzysta metrów, dworzec pasażerski i kawiarnię.",
        "Współczesne molo zaczęto budować od nowa: kamień węgielny położono dwudziestego trzeciego października 1993 roku. A szóstego sierpnia 1994 otwarto pierwszy odcinek — sto dwadzieścia metrów. Niecałą jedną trzecią tego, co jest dziś.",
        "Resztę dobudowano dopiero w 2004 roku, a całość otwarto dziewiętnastego marca 2005. Dziś molo ma trzysta dziewięćdziesiąt pięć metrów i jest najdłuższym betonowym molem w Polsce.",
        "Ale przez te dziesięć lat pomiędzy ludzie po prostu po nim chodzili. I to jest cała rzecz, o którą tu chodzi: sto dwadzieścia metrów mola to już było molo. Nie makieta, nie etap, nie zapowiedź — działający kawałek, z którego był pożytek od pierwszego dnia.",
        "W kuchni czeka się na całość zaskakująco często i prawie nigdy tego tak nie nazywamy.",
        "Czeka się na wolny weekend. Na koniec remontu. Aż dzieci trochę podrosną. Aż kupi się właściwy sprzęt, właściwe naczynie, aż przyjdzie właściwy moment. A w tym czasie nie dzieje się absolutnie nic i po roku jest się dokładnie tam, gdzie się było.",
        "Rozbraja to jedno pytanie i warto je sobie zadać przy każdym „kiedyś”: jaka jest najmniejsza wersja tego, która już działa. Nie najlepsza. Nie docelowa. Najmniejsza taka, z której już jest pożytek.",
        "Ta wersja ma przy tym jedną cechę, której żaden plan nie ma: ona natychmiast daje informację zwrotną. Po pierwszym wykonaniu czegokolwiek wiadomo więcej niż po miesiącu zastanawiania się nad tym — i zwykle okazuje się, że planowało się nie ten problem, który faktycznie jest.",
        "Uczciwie o drugiej stronie, bo to nie jest uniwersalna recepta. Część rzeczy naprawdę nie ma sensownej małej wersji — są nierozdzielne i wtedy czekanie na właściwy moment jest po prostu trafną decyzją. Udawanie, że wszystko da się pokroić na kawałki, kosztuje tyle samo co czekanie na wszystko, tylko wygląda mądrzej.",
        "I na koniec o tym urządzeniu, bo tu muszę powiedzieć rzecz niewygodną dla siebie. Ono nie jest małą wersją niczego. To zakup w całości i jedna decyzja — dokładnie ta rzecz, której podzielić się nie da.",
        "Podzielić da się natomiast pierwszy miesiąc po zakupie i o tym rozmawiam na prezentacjach chętniej niż o funkcjach. Bo „zrobię z tym wszystko” kończy się zwykle tak samo jak czekanie na wolny weekend — a jedno danie w tygodniu, wybrane z góry, nie kończy się nigdy.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Międzyzdrojach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, na co u Was w kuchni czeka się „aż będzie czas” — od tego zacznę, bo zwykle da się z tego wyjąć wersję, która działa już teraz.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Międzyzdrojach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Międzyzdrojów",
      paragraphs: [
        "Międzyzdroje leżą na wyspie Wolin, w powiecie kamieńskim, i są miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko pięć tysięcy mieszkańców na pięciu i dwóch dziesiątych kilometra kwadratowego — przy gęstości blisko dziewięciuset czterdziestu osób na kilometr kwadratowy, najwyższej w okolicy. Cała gmina ma niespełna sześć tysięcy osób na stu szesnastu kilometrach kwadratowych, ale tylko pięć wsi: Białą Górę, Grodno, Lubin, Wapnicę i Wicko. Powód jest prosty — znaczną część jej powierzchni zajmuje Woliński Park Narodowy, pierwszy polski park narodowy o charakterze morskim, obejmujący ponad czterdzieści procent wyspy. Prawa miejskie Międzyzdroje otrzymały dopiero w 1947 roku; wcześniej były osadą letniskową. Pierwszy drewniany pomost powstał tu w 1884, a w 1906 miał już ponad trzysta metrów, dworzec pasażerski i kawiarnię. Odbudowę współczesnego mola zaczęto dwudziestego trzeciego października 1993 roku: pierwszy odcinek o długości stu dwudziestu metrów otwarto szóstego sierpnia 1994, w 2004 dobudowano dwieście siedemdziesiąt pięć metrów, a całość otwarto dziewiętnastego marca 2005. Molo ma dziś trzysta dziewięćdziesiąt pięć metrów i jest najdłuższym betonowym molem w Polsce. Promenada Gwiazd powstała w 1996 roku i liczy około dwustu płyt z odciskami dłoni.",
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

  districtsHeading: "Do których części Międzyzdrojów dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich pięciu wsi w gminie: Białej Góry, Grodna, Lubina, Wapnicy i Wicka. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Międzyzdroje też przyjadę",
  nearbyParagraphs: [
    "Świnoujście jest osiemnaście kilometrów stąd, Wolin i Kamień Pomorski jeszcze bliżej, a Szczecin mieści się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świnoujście", "Wolin", "Kamień Pomorski", "Szczecin"],

  about: blokOMnie("do Międzyzdrojów", "w Międzyzdrojach", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Międzyzdrojów bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich pięciu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo te cztery rzeczy mylą się nagminnie: Międzyzdroje to miasto leżące na wyspie Wolin — a wyspa Wolin, Woliński Park Narodowy i miasto Wolin to trzy zupełnie inne rzeczy. Do miasta Wolin, które jest osobną gminą, też przyjeżdżam.",
    },
    ...faqWspolne("w Międzyzdrojach"),
    {
      question: "Od czego zacząć, jeśli ciągle czeka się na „właściwy moment”?",
      answer:
        "Od pytania: jaka jest najmniejsza wersja tego, która już działa. Nie najlepsza i nie docelowa — najmniejsza taka, z której już jest pożytek. Ma ona jedną cechę, której plan nie ma: natychmiast daje informację zwrotną, a po pierwszym wykonaniu czegokolwiek wie się więcej niż po miesiącu zastanawiania. Uczciwie: część rzeczy nie ma sensownej małej wersji i wtedy czekanie jest trafną decyzją.",
    },
    {
      question: "Czy da się „zacząć na małą skalę” z Thermomixem?",
      answer:
        "Sam zakup nie — to jedna decyzja w całości i nie będę udawać, że jest inaczej. Podzielić da się natomiast pierwszy miesiąc po zakupie i o tym rozmawiam chętniej niż o funkcjach. „Zrobię z tym wszystko” kończy się zwykle tak samo jak czekanie na wolny weekend, a jedno danie w tygodniu, wybrane z góry, nie kończy się nigdy.",
    },
  ],

  geo: { lat: 53.9283, lng: 14.4505 },
};
