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
 * BARLINEK — powiat myśliborski, woj. zachodniopomorskie,
 * przy Puszczy Barlinecko-Gorzowskiej.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 12 878 mieszkańców (GUS 31.12.2024), 17,6 km²,
 * gęstość 733,8 os./km².
 * CAŁA GMINA: 18 247 osób, 258,7 km², 36 miejscowości.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 52,9944 / 15,2191.
 * ⚠ en.wikipedia podaje 13 491 za 31.12.2021 — różnica
 *   wynika z DATY, nie z metody. NIE PISZĘ o zawyżaniu.
 *
 * ⚠ ODMIANA: RODZAJ MĘSKI. D. BARLINKA,
 *   Ms. W BARLINKU, przym. BARLINECKI,
 *   mieszkaniec BARLINCZANIN/BARLINCZANKA.
 *   ⚠⚠ NIE „BARLINIANIN" — to forma błędna.
 * ⚠ HOMONIMU BRAK.
 * ⚠⚠ PUŁAPKA SKOJARZENIOWA: pierwotna nazwa osady
 *   brzmiała „Nowy Berlin" i była używana do 1499 r.
 *   To zbieżność nazewnicza z czasów kolonizacji,
 *   NIE związek z Berlinem. ⚠⚠ NIE UŻYWAM TEGO FAKTU
 *   WCALE — każde sformułowanie jest tu mylące,
 *   a wartości dla strony o gotowaniu nie ma żadnej.
 *
 * ⚠⚠⚠ HISTORIA WERSJI TEJ STRONY — WAŻNE:
 *   PIERWSZA WERSJA MIAŁA KĄT „PRZEPIS, W KTÓRYM CZEGOŚ
 *   BRAKUJE", oparty na dokumencie z 1278 r. i zaginionym
 *   drugim dokumencie dla mieszczan.
 *   ZOSTAŁ ODRZUCONY PO KONTROLI KOLIZJI: obszar
 *   „przepis rodzinny, którego nie da się odtworzyć"
 *   jest zajęty AŻ PIĘĆ RAZY — Golub-Dobrzyń (przepis,
 *   którego nikt nie zapisał; też od zaginionego
 *   dokumentu lokacyjnego), Kamień Krajeński (zapisz
 *   wersję, którą naprawdę wykonujesz), Puck (odtwarzanie
 *   przepisu na oko), Suraż („babcine" przepisy bywają
 *   młodsze), Radziejów (dawne miary).
 *   ⚠⚠ NIE WRACAĆ DO TEGO KĄTA W TYM MIEŚCIE.
 *   Wątek dokumentu z 1278 r. zostaje wyłącznie
 *   w bloku faktograficznym.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — DOKUMENT Z 25 STYCZNIA 1278 R., nazywany potocznie
 *   aktem lokacyjnym. Część historyków uważa go raczej
 *   za dokument sołtysi — brakuje w nim podziału na łany
 *   i standardowych przywilejów miejskich; drugi dokument,
 *   wystawiony dla mieszczan, prawdopodobnie zaginął.
 *   ⚠ REFERUJĘ SPÓR, NIE ROZSTRZYGAM GO.
 *   ⚠⚠ TYLKO W BLOKU FAKTOGRAFICZNYM — patrz wyżej.
 * — POŁOWA XIV W. — mury obronne z DWIEMA BRAMAMI:
 *   MYŚLIBORSKĄ I MŁYŃSKĄ.
 *   ⚠ WYMIARÓW MURÓW NIE USTALONO — nie podaję.
 * — ⚠⚠⚠ RDZEŃ KĄTA: 1852 — RATUSZ SPŁONĄŁ.
 *   NIE ODBUDOWANO GO. Sześćdziesiąt lat później,
 *   w 1912 R., na rynku odsłonięto FONTANNĘ Z FIGURĄ
 *   DZIEWCZYNKI, która stoi tam do dziś.
 *   ⚠ MOTYWU FIGURY NIE ROZSTRZYGAM (źródła podają
 *   różnie) — piszę „z figurą dziewczynki".
 *   ⚠⚠ NIE TWIERDZĘ, że fontannę postawiono dokładnie
 *   w miejscu ratusza — piszę „na rynku". Źródła nie
 *   podają lokalizacji co do metra.
 * — BARLINEK JAKO „EUROPEJSKA STOLICA NORDIC WALKING":
 *   7 oznakowanych tras o łącznej długości 54 km.
 *   ⚠ DATY PRZYJĘCIA TYTUŁU NIE USTALONO — nie podaję
 *   roku. ⚠⚠ NIE ROZWIJAM WĄTKU RUCHU I AKTYWNOŚCI —
 *   to prosta droga do twierdzeń zdrowotnych.
 *
 * ⚠⚠ JEZIORO BARLINECKIE: PARAMETRÓW NIE POTWIERDZONO.
 *   NIE PODAJĘ ŻADNEJ LICZBY.
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   wpisu. NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 * ⚠⚠ LISTY GMIN SĄSIEDNICH NIE ZWERYFIKOWANO
 *   KARTOGRAFICZNIE. W nearbyTowns podaję wyłącznie
 *   miasta, które mają własne strony w serwisie.
 *
 * KĄT: NIE WYSZŁO — co da się uratować, czego nie
 * i kiedy przestać ratować.
 * Kąt od 1852 r.: ratusz spłonął i nikt go nie odbudował.
 * Przez sześćdziesiąt lat na rynku było po prostu puste
 * miejsce, a potem stanęła tam fontanna — coś zupełnie
 * innego. Odbudowa nie jest jedyną odpowiedzią na to,
 * że coś przepadło.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ratusz spłonął w 1852 r. i nie został odbudowany,
 *   a w 1912 r. na rynku stanęła fontanna z figurą
 *   dziewczynki,
 * — ŻE W KUCHNI SĄ TRZY RÓŻNE SYTUACJE, A MYLI SIĘ
 *   JE ZE SOBĄ — to jest rdzeń:
 *   (1) danie jeszcze się robi i da się zmienić kierunek,
 *   (2) danie jest skończone i wyszło nie tak, ale nadaje
 *       się na coś innego niż planowano,
 *   (3) danie jest skończone i nie nadaje się na nic —
 *       i wtedy jedyną sensowną decyzją jest przestać,
 * — ⚠⚠ ŻE NAJDROŻSZY BŁĄD TO RATOWANIE NA SIŁĘ:
 *   dokładanie kolejnych składników do czegoś, co już
 *   poszło w złą stronę, kończy się zwykle tak, że traci
 *   się i danie, i to, co się do niego dołożyło,
 * — ⚠⚠ ŻE DECYZJA „ZMIENIAM PLAN" JEST LEPSZA NIŻ
 *   „RATUJĘ ZA WSZELKĄ CENĘ": sos, który się nie zagęścił,
 *   bywa dobrą zupą; ciasto, które nie wyrosło, bywa czymś
 *   innym niż miało być. To nie jest porażka, tylko
 *   zmiana przeznaczenia,
 * — ⚠⚠ ŻE WARTO ZAPISAĆ, CO SIĘ ZDARZYŁO, ZANIM SIĘ
 *   ZAPOMNI — jedno zdanie przy przepisie wystarczy.
 *   ⚠ TO JEDNO ZDANIE I NIE ROZWIJAM — zapisywanie
 *   własnej wersji przepisu to kąt zajęty
 *   (Kamień Krajeński),
 * — ⚠⚠ UCZCIWIE, NAJWAŻNIEJSZE ZDANIE SEKCJI:
 *   NIE MA NIC ZŁEGO W ZAMÓWIENIU JEDZENIA ALBO ZROBIENIU
 *   KANAPEK, KIEDY OBIAD PRZEPADŁ. Wieczór jest jeden,
 *   a danie da się zrobić w inny dzień,
 * — ⚠ UCZCIWIE O SPRZĘCIE: URZĄDZENIE NIE COFA BŁĘDU.
 *   Zmniejsza natomiast liczbę sytuacji, w których coś
 *   przepada bez ostrzeżenia — bo nie przypala się przy
 *   dnie i nie kipi, gdy nikt nie patrzy. To jest różnica
 *   w LICZBIE WPADEK, nie w tym, że wpadek nie ma.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ODTWARZANIA I ZAPISYWANIA PRZEPISÓW —
 *   kąty zajęte PIĘCIOKROTNIE (Golub-Dobrzyń, Kamień
 *   Krajeński, Puck, Suraż, Radziejów). Jedno zdanie
 *   o zanotowaniu, co się stało — i ani słowa więcej.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO ZAMIENNIKÓW SKŁADNIKÓW — kąt zajęty
 *   (Kwidzyn).
 * — ⚠⚠ ZERO PRZERWY W ŚRODKU GOTOWANIA — kąt zajęty
 *   (Pasłęk). Tam chodzi o WYJŚCIE Z DOMU w połowie;
 *   TUTAJ o DANIE, KTÓRE POSZŁO W ZŁĄ STRONĘ.
 * — ⚠⚠ ZERO PIERWSZEJ I DRUGIEJ PARTII — kąt zajęty
 *   (Barcin).
 * — ⚠ ZERO WŁASNEJ MIARY — kąt zajęty (Gryfice,
 *   ta sama fala).
 * — ⚠ ZERO UKŁADU KUCHNI I PRZESTAWIANIA — kąt zajęty
 *   (Myślibórz, ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠ przy wątku
 *   nordic walking szczególnie. NIE PISZĘ ANI SŁOWA
 *   O KORZYŚCIACH Z RUCHU.
 * — ⚠⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   przy kącie „co da się uratować" to NAJWIĘKSZE RYZYKO
 *   NA TEJ STRONIE. NIE PISZĘ, czy coś nadaje się
 *   do zjedzenia, czy nie; piszę wyłącznie o TYM, CZY
 *   DANIE WYSZŁO TAK, JAK MIAŁO. Ani jednego zdania
 *   o zepsuciu, przechowywaniu, odgrzewaniu czy surowości.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO PIERWOTNEJ NAZWY MIASTA — patrz pułapka
 *   skojarzeniowa wyżej.
 * — ⚠⚠ ZERO ROKU 1945, ZERO PRZESIEDLEŃ.
 * — ⚠ POŻAR RATUSZA Z 1852 R. wymieniam RAZ, jako fakt,
 *   bez opisywania zniszczeń i bez dramatyzowania.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI (−11,0 % w latach
 *   2002–2024) I JEGO PRZYCZYN.
 * — ⚠ ZERO NAGRÓD I RANKINGÓW TURYSTYCZNYCH.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE ROZSTRZYGAM sporu o charakter dokumentu z 1278 r.
 * — NIE TWIERDZĘ, że fontanna stanęła dokładnie w miejscu
 *   ratusza.
 * — NIE PODAJĘ parametrów jeziora Barlineckiego.
 * — NIE PODAJĘ roku przyjęcia tytułu związanego
 *   z nordic walkingiem.
 * — NIE PODAJĘ wymiarów murów miejskich.
 * — NIE PRZYPISUJĘ Barlinkowi żadnego produktu z Listy.
 * — NIE PODAJĘ nazw osiedli.
 * — ⚠⚠ NIE PISZĘ, CO NADAJE SIĘ DO ZJEDZENIA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Barlinek leży w powiecie myśliborskim, przy Puszczy
 *   Barlinecko-Gorzowskiej, jest miastem w gminie
 *   miejsko-wiejskiej i liczy 12 878 mieszkańców
 *   (GUS, 31.12.2024) na 17,6 km²; cała gmina ma
 *   18 247 osób na 258,7 km² i obejmuje 36 miejscowości,
 * — dokument z 25 stycznia 1278 r. bywa nazywany aktem
 *   lokacyjnym, ale część historyków uważa go raczej
 *   za dokument sołtysi; drugi dokument, wystawiony
 *   dla mieszczan, prawdopodobnie zaginął,
 * — mury obronne wzniesiono w połowie XIV w.; miały dwie
 *   bramy: Myśliborską i Młyńską,
 * — ratusz spłonął w 1852 r. i nie został odbudowany,
 *   a w 1912 na rynku odsłonięto fontannę z figurą
 *   dziewczynki,
 * — przez miasto i okolicę prowadzi siedem oznakowanych
 *   tras o łącznej długości 54 km.
 */
export const BARLINEK: CityContent = {
  slug: "barlinek",
  h1: "Thermomix Barlinek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Barlinek — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Barlinku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Barlinek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Barlinku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Barlinka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Barlinek"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Odbudowa nie jest jedyną odpowiedzią na to, że coś nie wyszło.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Barlinku – jak wygląda prezentacja?",
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
      id: "nie-wyszlo",
      heading: "Ratusz, którego nie odbudowano",
      paragraphs: [
        "Barlinecki ratusz spłonął w 1852 roku. I na tym koniec — nikt go nie odbudował. Przez sześćdziesiąt lat na rynku było po prostu puste miejsce, aż w 1912 roku stanęła tam fontanna z figurą dziewczynki. Coś zupełnie innego niż to, co spłonęło, i stoi tam do dziś.",
        "Zaczynam od tego, bo w kuchni odbudowa też nie jest jedyną odpowiedzią na to, że coś przepadło — a większość z nas zachowuje się, jakby była.",
        "Kiedy danie idzie nie tak, myli się ze sobą trzy zupełnie różne sytuacje. Warto je rozdzielić, bo w każdej sensowna jest inna decyzja.",
        "Pierwsza: danie jeszcze się robi. Wtedy naprawdę da się zmienić kierunek i to jest ten moment, w którym warto reagować — a nie pół godziny później, kiedy już nic nie da się zmienić.",
        "Druga: danie jest skończone i wyszło inaczej, niż miało, ale nadaje się na coś innego, niż było w planie. To jest sytuacja najczęściej przegapiana. Sos, który nie chciał zgęstnieć, bywa całkiem dobrą zupą. Ciasto, które nie wyrosło, bywa czymś innym, niż miało być — i to czymś zupełnie znośnym. To nie jest porażka, tylko zmiana przeznaczenia.",
        "Trzecia: danie jest skończone i nie nadaje się na nic z tego, co planowaliście. I tu jedyną rozsądną decyzją jest przestać.",
        "Najdroższy błąd ze wszystkich to ratowanie na siłę. Dokładanie kolejnych składników do czegoś, co już poszło w złą stronę, kończy się zwykle tak, że traci się i danie, i to wszystko, co się do niego dorzuciło, żeby je uratować. Godzinę później nie ma ani obiadu, ani składników na drugie podejście.",
        "Zanim się zapomni, warto zapisać przy przepisie jedno zdanie o tym, co się właściwie stało. Tyle wystarczy — za trzy miesiące i tak nikt nie będzie tego pamiętał.",
        "A teraz rzecz najważniejsza i nie powie jej żaden sprzedawca sprzętu do kuchni. Nie ma absolutnie nic złego w zamówieniu jedzenia albo zrobieniu kanapek, kiedy obiad przepadł. Wieczór jest jeden, jest jeszcze reszta dnia do przeżycia, a danie spokojnie da się zrobić w innym terminie. Upieranie się przy planie, który już się nie uda, kosztuje więcej niż sam nieudany obiad.",
        "O urządzeniu uczciwie: ono nie cofa błędu. Jeśli coś poszło nie tak, to poszło nie tak — i żaden sprzęt tego nie odkręci.",
        "Zmienia się co innego, i to naprawdę: liczba sytuacji, w których coś przepada bez ostrzeżenia. Nie przypala się przy dnie, bo jest mieszane; nie kipi, gdy nikt nie patrzy; nie przegrzewa się, bo temperatura jest trzymana, a nie zgadywana. To jest różnica w tym, jak często zdarzają się wpadki — nie w tym, że przestają się zdarzać.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Barlinku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co u Was najczęściej nie wychodzi — dobiorę dania tak, żeby akurat to zrobić razem i zobaczyć, gdzie leży problem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Barlinku"),
    sekcjaRaty("w Barlinku"),
    {
      id: "rodzina",
      heading: "Thermomix dla barlineckiej rodziny",
      paragraphs: [
        "Barlinek leży w powiecie myśliborskim, przy Puszczy Barlinecko-Gorzowskiej, i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko trzynaście tysięcy mieszkańców na siedemnastu i sześciu dziesiątych kilometra kwadratowego, a cała gmina ponad osiemnaście tysięcy osób na dwustu pięćdziesięciu ośmiu kilometrach kwadratowych, w trzydziestu sześciu miejscowościach. Najstarszy dokument miasta nosi datę dwudziestego piątego stycznia 1278 roku i bywa nazywany aktem lokacyjnym, choć część historyków uważa go raczej za dokument sołtysi — brakuje w nim podziału na łany i standardowych przywilejów miejskich, a drugi dokument, wystawiony osobno dla mieszczan, prawdopodobnie zaginął. Mury obronne wzniesiono w połowie czternastego wieku; miały dwie bramy — Myśliborską i Młyńską. Ratusz spłonął w 1852 roku i nie został odbudowany, a w 1912 na rynku odsłonięto fontannę z figurą dziewczynki, która stoi tam do dziś. Przez miasto i okolicę prowadzi siedem oznakowanych tras o łącznej długości pięćdziesięciu czterech kilometrów.",
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

  districtsHeading: "Do których części Barlinka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu sześciu miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Barlinek też przyjadę",
  nearbyParagraphs: [
    "Gorzów Wielkopolski jest niespełna czterdzieści kilometrów stąd, Choszczno jeszcze bliżej, a Stargard i Szczecin mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gorzów Wielkopolski", "Choszczno", "Stargard", "Szczecin"],

  about: blokOMnie("do Barlinka", "w Barlinku", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Barlinka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu sześciu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Barlinek w powiecie myśliborskim w województwie zachodniopomorskim.",
    },
    ...faqWspolne("w Barlinku"),
    {
      question: "Co zrobić, gdy danie nie wyszło?",
      answer:
        "Najpierw rozdzielić trzy sytuacje, bo w każdej sensowna jest inna decyzja. Jeśli danie jeszcze się robi — da się zmienić kierunek i to jest ten moment. Jeśli jest skończone i wyszło inaczej, niż miało, często nadaje się na coś innego, niż było w planie: sos, który nie zgęstniał, bywa dobrą zupą. A jeśli nie nadaje się na nic z tego, co planowaliście, jedyną rozsądną decyzją jest przestać. Najdroższy błąd to ratowanie na siłę — traci się wtedy i danie, i składniki dorzucone, żeby je uratować.",
    },
    {
      question: "Czy Thermomix sprawi, że dania przestaną się nie udawać?",
      answer:
        "Nie i nie będę tak twierdzić — żaden sprzęt nie cofa błędu. Zmienia się liczba sytuacji, w których coś przepada bez ostrzeżenia: nie przypala się przy dnie, bo jest mieszane, nie kipi, gdy nikt nie patrzy, i nie przegrzewa się, bo temperatura jest trzymana, a nie zgadywana. To różnica w tym, jak często zdarzają się wpadki — nie w tym, że przestają się zdarzać.",
    },
  ],

  geo: { lat: 52.9944, lng: 15.2191 },
};
