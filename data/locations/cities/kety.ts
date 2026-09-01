import type { CityContent } from "../city-content";
import {
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
 * KĘTY — GMINA MIEJSKO-WIEJSKA w powiecie oświęcimskim.
 * Gmina: 33 240 mieszkańców (GUS, 31.12.2024), 76,4 km², 437 os./km²,
 * −0,4% od 2002 (praktycznie stabilna), średni wiek 42,2,
 * saldo migracji +43, REGON 3 926, lesistość 12,9%.
 * Miasto Kęty: 18 306 (31.12.2021) = 54–55% gminy, 23 km².
 * 6 SOŁECTW + miasto.
 *
 * OŚ STRONY: JEDNA GMINA, DWIE GOSPODARKI. Struktura zatrudnienia
 * wg gminy: PRZEMYSŁ I BUDOWNICTWO 37,4%, ROLNICTWO 16,8% —
 * najwyższy udział rolnictwa w tej czwórce. Osiemnaście tysięcy ludzi
 * w mieście, które od 1953 r. żyje z aluminium, i piętnaście tysięcy
 * w sześciu wsiach, gdzie rolnictwo wciąż daje co szóste miejsce pracy.
 * ⚠️ TO NIE JEST OŚ „JEDEN WIELKI PRACODAWCA” (Sucha Beskidzka —
 * Fideltronik) ANI „MIASTO ZBUDOWANE WOKÓŁ FABRYKI” (Chełmek — Bata).
 * Grupa Kęty jest DOWODEM jednego z dwóch biegunów, nie tezą.
 * Kęty mają prawa miejskie z 1277/1391 — są o 676 lat starsze
 * od swojej fabryki. Odwrotna kolejność niż w Chełmku.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — STRUKTURA ZATRUDNIENIA (kety.pl, dane sprzed 2021): rolnictwo
 *   16,8%, przemysł i budownictwo 37,4%, usługi 16,0%, finanse 1,4%.
 *   Pracuje 298 osób na 1000 mieszkańców. 20,5% mieszkańców
 *   z wyższym wykształceniem. ⚠️ TO SĄ DANE GMINNE ze strony gminy,
 *   nie powiatowe z polskawliczbach,
 * — 6 SOŁECTW: Bielany, Bulowice, Łęki, Malec, Nowa Wieś, Witkowice,
 * — PRAWA MIEJSKIE: 1277 akt sprzedaży wójtostwa, pierwsze użycie
 *   określenia „civitas”; 1391 PRAWO MAGDEBURSKIE, jako drugi ośrodek
 *   w księstwie oświęcimskim; przywileje potwierdzane w 1454, 1519
 *   i 1565. KĘT NIE MA na liście nadań praw miejskich po 1900 r. —
 *   czyli praw NIE TRACIŁY. ⚠️ Rozbieżność: kety.pl pisze „prawa
 *   miejskie w 1277”, perlypolski rozdziela 1277 od 1391. Użyte
 *   OBIE daty z rozróżnieniem,
 * — GRUPA KĘTY S.A. (dawn. Zakłady Metali Lekkich Kęty): decyzja
 *   Ministerstwa Hutnictwa 1949, budowa od wiosny 1950,
 *   21 LIPCA 1953 uruchomienie Wydziału Odlewni — oficjalna data
 *   powstania; styczeń 1996 prywatyzacja i debiut na GPW; 2000 zmiana
 *   nazwy; 11 lipca 2023 jubileusz 70-lecia. Przychody 2025:
 *   5,49 mld zł, zysk netto 568 mln zł. Segment wyrobów wyciskanych:
 *   120 TYS. TON PROFILI ROCZNIE, top 10 w Europie. 49% sprzedaży
 *   poza Polską. ⚠️⚠️ ZATRUDNIENIE 5–5,5 TYS. DOTYCZY CAŁEJ GRUPY
 *   (24 spółki, w tym 15 zagranicznych). ILE OSÓB PRACUJE W SAMYCH
 *   KĘTACH — NIEPOTWIERDZONE. NIE PISAĆ „pięć tysięcy osób pracuje
 *   w Kętach”,
 * — ALUMETAL / HYDRO: drugi zakład w Kętach, recykling aluminium
 *   i odlewnicze stopy aluminium; przejęty przez norweskie Hydro
 *   w 2023; cztery zakłady grupy mają łącznie 280 tys. ton mocy
 *   rocznie; nowa linia odlewnicza i farma fotowoltaiczna uruchomione
 *   w czerwcu 2025; zmiana nazwy na „Hydro Kęty” na początku 2026 r.,
 * — ŚW. JAN KANTY: ur. 1390 w Kętach, zm. 1473, kanonizowany 1767.
 *   Kaplica św. Jana Kantego 1648, rozbudowana 1715; pomnik 1851,
 * — ZABYTKI: kościół św. Małgorzaty i św. Katarzyny przebudowany 1685,
 *   wnętrze barokowe; klasztor i kościół Reformatów 1705–1712;
 *   ratusz 1800; Muzeum im. A. Kłosińskiego, ok. 4 000 eksponatów.
 *   WIELKI POŻAR 1797 zniszczył drewnianą zabudowę, miasto odbudowano
 *   w nowym stuleciu w cegle; wcześniejsze pożary 1652, 1653, 1656,
 *   1657, 1761. Nazwa miasta zmieniała się trzykrotnie: Kęty,
 *   Libenwerde, Miłocin. 1867 pierwsza polska fabryka wyrobów
 *   wełnianych,
 * — KOLEJ: linia nr 117 Kalwaria Zebrzydowska Lanckorona –
 *   Bielsko-Biała Główna, ok. 59 km, jednotorowa, zelektryfikowana;
 *   zbudowana 1885–1888 przez Kaiser-Ferdinands-Nordbahn, cała trasa
 *   otwarta 1 czerwca 1888; elektryfikacja 1989–1990. Stacja Kęty
 *   jest jedną z głównych. Most w Kętach zamknięty po powodzi
 *   6 sierpnia 2001, otwarty 27 stycznia 2003.
 *   ⚠️ CZĘSTOTLIWOŚĆ („ok. 7 par dziennie”) TO DANE Z 2016 R. —
 *   NIE PODAWAĆ LICZBY,
 * — DROGI: DK 52, DW 948,
 * — KGW POTWIERDZONE: Kęty, Bulowice, Nowa Wieś, Witkowice
 *   (jubileusz 65-lecia KGW w Witkowicach przy Gminnym Święcie
 *   Plonów). Dożynki wiejskie osobno w Nowej Wsi i Witkowicach.
 *   Gmina należy do LGD „Dolina Soły”,
 * — WSPÓŁRZĘDNE (UG, Rynek 7): 49,8840010 / 19,2217520.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — TWIERDZENIA, ŻE KĘTY SĄ NAJWIĘKSZĄ GMINĄ POWIATU. Pod względem
 *   ludności są DRUGIE — miasto Oświęcim ma 35 420. Pod względem
 *   powierzchni prawdopodobnie pierwsze (76,4 km²), ale ⚠️ ranking
 *   powierzchni WYLICZONY, nie odczytany ze źródła. Użyta bezpieczna
 *   formuła: „najludniejsza gmina powiatu poza samym Oświęcimiem”,
 * — ZATRUDNIENIA GRUPY KĘTY W SAMYCH KĘTACH ani zatrudnienia
 *   Alumetalu/Hydro. Niepotwierdzone,
 * — LICZBY PAR POCIĄGÓW na linii 117. Dane z 2016 r.,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego
 *   z gminy Kęty. Napisane wprost,
 * — ŚW. JANA KANTEGO JAKO OSI. Wyrazista i bezkolizyjna, ale wymaga
 *   ostrożnego tonu na stronie sprzedażowej. Użyty jako element,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 7 492,22 zł
 *   i 4,7% IDENTYCZNIE dla wszystkich gmin powiatu oświęcimskiego
 *   i dla samego powiatu. To dane POWIATOWE,
 * — CEN NIERUCHOMOŚCI. geoportal podaje 5 957 i 7 896 zł/m²
 *   identycznie dla Zatora, Brzeszcz i Kęt — też powiatowe.
 *
 * PUŁAPKI:
 * — GRUPA KĘTY to spółka z 24 podmiotami, w tym 15 zagranicznymi.
 *   Nie mylić skali grupy ze skalą zakładu w Kętach,
 * — ALUMETAL od 2026 r. nazywa się HYDRO KĘTY,
 * — KĘTY MAJĄ TYLKO 6 SOŁECTW przy 33 tys. mieszkańców — to bardzo
 *   mało jak na tę wielkość; ponad połowa ludności mieszka w mieście.
 */

export const KETY: CityContent = {
  slug: "kety",
  h1: "Thermomix Kęty – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Kęty — prezentacja i cena",
  seoDescription:
    "Thermomix w Kętach i całej gminie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Kęty — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Kętach i okolicy. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Kęt, Bulowic, Nowej Wsi, Witkowic i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie sześć sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kętach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Jedna gmina, dwie gospodarki",
      paragraphs: [
        "Kęty mają trzydzieści trzy tysiące mieszkańców, z czego mniej więcej połowa mieszka w mieście, a połowa w sześciu wsiach. I te dwie połowy żyją z zupełnie różnych rzeczy.",
        "Statystyka gminy mówi to wprost: przemysł i budownictwo dają tu trzydzieści siedem procent zatrudnienia, ale rolnictwo nadal szesnaście i osiem dziesiątych. To najwyższy udział rolnictwa w całym powiecie oświęcimskim. W jednym budżecie gminnym mieszczą się huta aluminium i sześcioro dożynek.",
        "Przemysłowy biegun ma konkretną datę urodzin: dwudziesty pierwszy lipca tysiąc dziewięćset pięćdziesiątego trzeciego roku, kiedy uruchomiono Wydział Odlewni ówczesnych Zakładów Metali Lekkich. Dziś to Grupa Kęty, spółka notowana na giełdzie od tysiąc dziewięćset dziewięćdziesiątego szóstego, o przychodach przekraczających pięć miliardów złotych, z segmentem profili aluminiowych o mocy stu dwudziestu tysięcy ton rocznie — jednym z dziesięciu największych w Europie.",
        "Od razu zaznaczę uczciwie: pięć tysięcy osób, o których czasem się czyta, pracuje w całej grupie liczącej dwadzieścia cztery spółki, w tym piętnaście zagranicznych. Ilu z nich pracuje w samych Kętach, nie udało mi się ustalić i nie będę zgadywać.",
        "W mieście działa też drugi zakład aluminiowy — dawny Alumetal, zajmujący się recyklingiem i odlewniczymi stopami aluminium, przejęty w dwa tysiące dwudziestym trzecim roku przez norweskie Hydro i od początku dwa tysiące dwudziestego szóstego noszący nazwę Hydro Kęty.",
        "Ale jest tu jeden szczegół, który odwraca zwykłą kolejność. W Chełmku, dwadzieścia kilometrów stąd, najpierw powstała fabryka, a potem wokół niej miasto. W Kętach było odwrotnie: określenia miasto użyto wobec nich już w tysiąc dwieście siedemdziesiątym siódmym roku, prawo magdeburskie dostały w tysiąc trzysta dziewięćdziesiątym pierwszym, a przywileje potwierdzali im kolejni królowie w tysiąc czterysta pięćdziesiątym czwartym, tysiąc pięćset dziewiętnastym i tysiąc pięćset sześćdziesiątym piątym. Fabryka przyszła do gotowego miasta sześćset siedemdziesiąt sześć lat później.",
        "Miasto przetrwało zresztą sporo. W tysiąc siedemset dziewięćdziesiątym siódmym wielki pożar zniszczył drewnianą zabudowę — a był to już szósty duży pożar w ciągu stu pięćdziesięciu lat. Odbudowano je wtedy w cegle i taki układ przetrwał. Stoi w nim ratusz z tysiąc osiemsetnego roku, kościół świętej Małgorzaty i świętej Katarzyny przebudowany w tysiąc sześćset osiemdziesiątym piątym oraz klasztor Reformatów z początku osiemnastego wieku.",
        "W tysiąc trzysta dziewięćdziesiątym roku urodził się tu Jan Kanty — profesor Akademii Krakowskiej, kanonizowany w tysiąc siedemset sześćdziesiątym siódmym. Jego kaplica stoi od tysiąc sześćset czterdziestego ósmego roku, pomnik od tysiąc osiemset pięćdziesiątego pierwszego.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Kęty?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość: samo miasto czy jedno z sześciu sołectw — Bielany, Bulowice, Łęki, Malec, Nowa Wieś albo Witkowice. Trasa wygląda inaczej, koszt jest ten sam, czyli żaden.",
        "Jeśli pracujecie na zmiany, powiedzcie to od razu i podajcie, która zmiana Wam wypada. Wieczorne i przedpołudniowe terminy są u mnie równie normalne — dopasuję się do grafiku, a nie odwrotnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kętach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kuchnia dwóch prędkości",
      paragraphs: [
        "W gminie, w której jedni pracują w hali, a drudzy w polu, tydzień i weekend to dwa różne sposoby gotowania — i oba mają swoje wymagania.",
        "Tydzień jest szybki i nieregularny. Ktoś wraca o czternastej, ktoś o dwudziestej drugiej, ktoś je przed wyjściem o piątej rano. Obiad musi więc być czymś, co czeka i nie traci na odgrzaniu: gulasz, fasolka, zupa, sos do makaronu. Urządzenie gotuje takie rzeczy bez pilnowania i samo się wyłącza, więc da się nastawić przed wyjściem i wrócić do gotowego. Każdy nakłada sobie, kiedy wraca.",
        "Weekend jest wolny i zbiorowy. Wtedy siada się razem i wtedy powstają rzeczy, których w tygodniu nikt by nie zaczął: rosół, pieczeń, ciasto. I tu zysk jest zupełnie inny — nie chodzi o to, żeby było szybciej, tylko żeby wyszło pewnie. Ciasto drożdżowe wyrabia się w kilka minut zamiast kwadransa ręcznie, a krem czy sos, który trzeba pilnować, żeby się nie zwarzył, robi się przy ustawionej temperaturze i można od niego odejść.",
        "Trzecia rzecz dotyczy tej rolniczej połowy gminy. Szesnaście procent zatrudnienia w rolnictwie znaczy, że w wielu domach warzywa i owoce nie są kupowane, tylko przynoszone z pola — czasem w ilościach, których nie da się zjeść na świeżo. Przecier, krem, mus i mrożone porcje robią się wtedy bez stania nad garnkiem.",
        "Czwarta jest o miejscu. W mieszkaniu w mieście blat bywa krótki, a urządzenie zajmuje mniej więcej tyle co czajnik z podstawką, zastępując przy tym blender, malakser i mikser. Przy urządzaniu kuchni to konkretna decyzja o tym, ile sprzętów w ogóle trzeba kupić.",
        "Rodzicom najmłodszych dzieci przydaje się przy tym to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Kęty i gotowanie — cztery koła gospodyń i dwie dożynki",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z gminy Kęty na ministerialnej Liście Produktów Tradycyjnych. Nie ma tu produktu z rejestrem i nie będę udawać, że jest.",
      "Potwierdzone są za to koła gospodyń: w samych Kętach oraz w Bulowicach, Nowej Wsi i Witkowicach. To ostatnie obchodziło niedawno sześćdziesięciopięciolecie, przy okazji Gminnego Święta Plonów — a więc działa nieprzerwanie od końca lat pięćdziesiątych.",
      "Dożynki wiejskie odbywają się tu osobno, między innymi w Nowej Wsi i w Witkowicach. To zresztą pasuje do struktury gminy: sołectw jest tylko sześć, ale są duże i mają własne kalendarze.",
      "Gmina należy do Lokalnej Grupy Działania Dolina Soły, obejmującej pięć gmin powiatu — z siedzibą w Rajsku, już w gminie wiejskiej Oświęcim.",
      "Kuchnia jest tu taka, jak w całej zachodniej Małopolsce: rosół, ziemniaki, kapusta, kluski, kotlety, ciasto drożdżowe na niedzielę, przetwory z ogrodu. Z tą różnicą, że w połowie domów gotuje się wokół grafiku zmianowego, a w drugiej połowie wokół sezonu w polu.",
      "Dla urządzenia najsensowniejsze są tu dania jednogarnkowe czekające na wracających o różnych porach, ciasto wyrabiane w kilka minut i przetwory z własnych warzyw. Czego nie zrobi, mówię wprost: nie usmaży kotleta i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których miejscowości gminy Kęty dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez żadnej dopłaty za odległość. Gmina liczy ponad trzydzieści trzy tysiące mieszkańców na siedemdziesięciu sześciu kilometrach kwadratowych, z czego w mieście mieszka nieco ponad połowa.",
    "Sołectwa to: Bielany, Bulowice, Łęki, Malec, Nowa Wieś i Witkowice. Sześć sołectw przy trzydziestu trzech tysiącach mieszkańców to bardzo mało — dla porównania sąsiednia gmina wiejska Oświęcim ma ich czternaście przy mniejszej ludności.",
    "W mieście warto zobaczyć rynek z ratuszem z tysiąc osiemsetnego roku, kościół świętej Małgorzaty i świętej Katarzyny przebudowany w tysiąc sześćset osiemdziesiątym piątym, klasztor Reformatów z początku osiemnastego wieku oraz kaplicę świętego Jana Kantego z tysiąc sześćset czterdziestego ósmego. Działa tu też muzeum imienia Aleksandra Kłosińskiego z około czterema tysiącami eksponatów.",
    "W Kętach mają swoje zakłady dwie firmy aluminiowe: Grupa Kęty, działająca od tysiąc dziewięćset pięćdziesiątego trzeciego roku, oraz dawny Alumetal, od dwa tysiące dwudziestego szóstego noszący nazwę Hydro Kęty.",
    "Dojazd: przez gminę biegnie droga krajowa pięćdziesiąt dwa i droga wojewódzka dziewięćset czterdzieści osiem. Stacja Kęty leży na linii kolejowej numer sto siedemnaście z Kalwarii Zebrzydowskiej do Bielska-Białej, otwartej w całości pierwszego czerwca tysiąc osiemset osiemdziesiątego ósmego roku i zelektryfikowanej na przełomie lat osiemdziesiątych i dziewięćdziesiątych.",
  ],
  districts: [
    "Kęty",
    "Bulowice",
    "Nowa Wieś",
    "Witkowice",
    "Bielany",
    "Łęki",
    "Malec",
  ],

  nearbyHeading: "Oświęcim, Brzeszcze i Andrychów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z gminą wiejską Oświęcim, Brzeszczami, Osiekiem, Wieprzem i Andrychowem. Dojeżdżam do wszystkich gmin powiatu oświęcimskiego bez doliczania kosztu dojazdu; blisko jest też do Bielska-Białej.",
    "Warto jedno rozróżnienie: Grupa Kęty to spółka giełdowa z dwudziestoma czterema podmiotami, w tym piętnastoma zagranicznymi. Liczby o zatrudnieniu, które krążą w internecie, dotyczą całej grupy, a nie samego zakładu w mieście.",
  ],
  nearbyTowns: [
    "Oświęcim gmina",
    "Brzeszcze",
    "Osiek",
    "Wieprz",
    "Andrychów",
    "Oświęcim",
  ],

  about: blokOMnie("do gminy Kęty", "w powiecie oświęcimskim"),

  faq: [
    {
      question: "Mieszkam w Bulowicach albo w Witkowicach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie sześć sołectw traktuję tak samo jak samo miasto. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w Kętach"),
    {
      question: "Pracujemy na zmiany. Da się umówić poza standardowymi godzinami?",
      answer:
        "Da się i tak wygląda spora część moich spotkań w tej gminie. Prezentacja trwa około dwóch godzin i może wypaść równie dobrze o dziewiątej rano, jak o dziewiętnastej — dopasowuję się do Waszego grafiku, nie odwrotnie. Jeśli w domu jedna osoba pracuje na zmiany, a druga w polu, warto od razu powiedzieć, kiedy realnie da się usiąść razem, bo to jest jedyny warunek, jaki ma znaczenie.",
    },
  ],

  geo: { lat: 49.884001, lng: 19.221752 },
};
