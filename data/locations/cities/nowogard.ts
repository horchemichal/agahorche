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
 * NOWOGARD — powiat goleniowski, woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 15 634 mieszkańców (GUS 31.12.2024), 12,6 km²,
 * gęstość 1 243,8 os./km², 51 m n.p.m.
 * CAŁA GMINA: 23 322 osoby, 338,7 km².
 * Różnica miasto/gmina = 7 688 osób na wsi.
 * 37 SOŁECTW / 44 MIEJSCOWOŚCI (pomeranica.pl).
 * ⚠ NIE ISTNIEJE ODRĘBNA GMINA WIEJSKA NOWOGARD —
 *   jedna gmina miejsko-wiejska. Brak pułapki podwójnej
 *   jednostki (inaczej niż Świdwin w tej samej fali).
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,6742 / 15,1165.
 * ⚠ en.wikipedia podaje 16 745, ale to SPIS Z 2006 R.,
 *   czyli sprzed osiemnastu lat. To NIE JEST zawyżenie
 *   metodologiczne, tylko stara data — NIE PISZĘ
 *   o zawyżaniu przez źródła.
 *
 * ⚠ ODMIANA: D. NOWOGARDU, Ms. W NOWOGARDZIE,
 *   przym. NOWOGARDZKI, mieszkaniec NOWOGARDZIANIN —
 *   potwierdzone w PWN.
 * ⚠⚠ HOMONIMY: NOWOGRÓD (woj. podlaskie, nad Narwią)
 *   oraz NOWOGRÓDEK (dziś Białoruś). Nazwy brzmią
 *   podobnie, to zupełnie inne miejscowości.
 *   W FAQ rozgraniczam wprost.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1268 — pierwsza wzmianka o grodzie.
 * — 1309 — PRAWA MIEJSKIE NA PRAWIE LUBECKIM.
 * — XIV w. — mury obronne; DO DZIŚ ZACHOWANE
 *   420 M DŁUGOŚCI, 2,80–2,90 M WYSOKOŚCI.
 * — 1467 — rozszerzenie przywilejów mieszczańskich.
 * — ⚠⚠⚠ RDZEŃ KĄTA: 1836 — MIASTO STAJE SIĘ
 *   WŁAŚCICIELEM JEZIORA NOWOGARDZKIEGO.
 *   Jezioro leżało tam, gdzie leży, od zawsze; osadnictwo
 *   w tym miejscu sięga znacznie dalej wstecz. Zmieniło
 *   się nie jezioro, tylko to, kto nim dysponuje.
 * — 1882/1883 — połączenie kolejowe (linia nr 402
 *   Goleniów–Koszalin).
 * — 1911 — ratusz z wieżą zegarową.
 * JEZIORO NOWOGARDZKIE: 98,3 ha, głęb. maks. 10,9 m.
 * ⚠ GŁĘBOKOŚCI ŚREDNIEJ NIE PODAJĘ — kąt „głębokość
 *   maksymalna kontra średnia" jest zajęty (Więcbork).
 * ZESPÓŁ PRZYRODNICZO-KRAJOBRAZOWY „SARNI LAS"
 *   — utworzony w 1994 r., rosną w nim cisy o wieku
 *   szacowanym na około 700 lat.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK potwierdzonego
 *   wpisu dla Nowogardu i gminy Nowogard. NIE WYMYŚLAM
 *   ŻADNEGO I NIE PRZYPISUJĘ PRODUKTU REGIONALNEGO.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE, w tekście piszę opisowo.
 *
 * KĄT: TO, CO JUŻ MASZ, A CZEGO JESZCZE NIE UŻYWASZ.
 * Kąt od roku 1836: jezioro leżało przy mieście od zawsze,
 * ale miejskie stało się dopiero wtedy. Rzecz była na
 * miejscu przez cały czas — zmieniło się to, że zaczęto
 * jej używać jak swojej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1836 r. miasto stało się właścicielem jeziora,
 *   choć jezioro leżało tam od zawsze,
 * — ŻE W KAŻDEJ KUCHNI STOI COŚ TAKIEGO: naczynie,
 *   foremka, przyprawa, funkcja piekarnika, której nikt
 *   nigdy nie włączył. To jest rdzeń,
 * — ⚠⚠ ŻE TO NIE JEST ZARZUT ANI POWÓD DO WYRZUCANIA —
 *   rzeczy nieużywane zwykle nie są zbędne, tylko nigdy
 *   nie dostały pierwszego razu,
 * — ⚠⚠ ŻE PIERWSZY RAZ JEST TRUDNIEJSZY NIŻ DZIESIĄTY
 *   i dlatego warto go zaplanować, a nie czekać na okazję:
 *   jedna rzecz na tydzień, w dzień, w którym i tak
 *   się gotuje,
 * — ⚠⚠ UCZCIWIE I NIEWYGODNIE O SPRZĘCIE: TO SAMO
 *   DOTYCZY URZĄDZENIA PO ZAKUPIE. Znam kuchnie, w których
 *   przez pół roku robiło się nim trzy rzeczy. To nie jest
 *   wada urządzenia ani wina kupującego — to ten sam
 *   mechanizm. Mówię to przed zakupem, nie po,
 * — ŻE DLATEGO PROSZĘ, ŻEBY NA PREZENTACJI POWIEDZIEĆ,
 *   CO STOI NIEUŻYWANE — bo to jest lepszy materiał
 *   na rozmowę niż lista funkcji.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO PYTANIA „CZY KUPIĆ SPRZĘT JEDNOZADANIOWY" —
 *   kąt zajęty (Łasin). Tam rozstrzyga się, CZY KUPOWAĆ;
 *   TUTAJ chodzi o rzeczy JUŻ KUPIONE. Ani jednego zdania
 *   o decyzji zakupowej dotyczącej innych sprzętów.
 * — ⚠⚠ ZERO PRZERWY W UŻYWANIU — kąt zajęty (Międzyrzecz).
 *   Tam chodzi o POWRÓT PO PRZERWIE do czegoś, co się
 *   robiło; TUTAJ o PIERWSZY RAZ z czymś, czego się
 *   nie robiło nigdy. TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO ZNUDZENIA SIĘ SPRZĘTEM I ZAPAŁU PIERWSZEGO
 *   MIESIĄCA — kąt zajęty (Żyrardów).
 * — ⚠⚠ ZERO PROPORCJI ZAPASU W SZAFCE — kąt zajęty
 *   (Górzno). Nie piszę, czego mieć ile.
 * — ⚠ ZERO PRZECHOWYWANIA I SUCHEGO ZAPASU — kąt zajęty
 *   (Dobiegniew).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ZAMKU EBERSTEINÓW JAKO BUDYNKU DZISIEJSZEGO.
 *   W dawnym zamku mieści się czynny zakład karny. To jest
 *   najbardziej rzucający się w oczy fakt o Nowogardzie
 *   w wyszukiwarce. NIE WSPOMINAM ZAMKU WCALE — ani
 *   historycznie, ani współcześnie, bo każde zdanie
 *   o nim prowadzi o jedno kliknięcie dalej.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO ROKU 1945 I ZERO WĄTKU ZMIANY NAZWY
 *   PO WOJNIE. Podaję wyłącznie nazwę obecną.
 * — ⚠⚠ ZERO POŻARU MIASTA Z 1699 R.
 * — ⚠ ZERO SPADKU LICZBY LUDNOŚCI I JEGO PRZYCZYN.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 * — ⚠ NIE POTWIERDZONO ciepłowni geotermalnej w mieście —
 *   nie piszę o niej.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ nazw osiedli — nie ustalono.
 * — NIE PRZYPISUJĘ Nowogardowi żadnego produktu z Listy
 *   Produktów Tradycyjnych.
 * — NIE PODAJĘ głębokości średniej jeziora.
 * — NIE TWIERDZĘ, że cisy z Sarniego Lasu mają dokładnie
 *   700 lat — to wiek szacowany.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Nowogard leży w powiecie goleniowskim, jest miastem
 *   w gminie miejsko-wiejskiej, liczy 15 634 mieszkańców
 *   (GUS, 31.12.2024) na 12,6 km², 51 m n.p.m.; cała gmina
 *   ma 23 322 osoby na 338,7 km² i obejmuje 44 miejscowości
 *   w 37 sołectwach,
 * — pierwsza wzmianka pochodzi z 1268 r., prawa miejskie
 *   na prawie lubeckim miasto dostało w 1309 r.,
 *   a w 1467 r. rozszerzono przywileje mieszczańskie,
 * — z XIV-wiecznych murów zachowało się 420 m o wysokości
 *   od 2,80 do 2,90 m,
 * — w 1836 r. miasto stało się właścicielem Jeziora
 *   Nowogardzkiego, które ma 98,3 ha i 10,9 m głębokości
 *   maksymalnej,
 * — kolej dotarła tu w latach 1882–1883 (linia Goleniów
 *   –Koszalin), a ratusz z wieżą zegarową stanął w 1911 r.,
 * — w 1994 r. utworzono zespół przyrodniczo-krajobrazowy
 *   „Sarni Las" z cisami o szacowanym wieku około 700 lat.
 */
export const NOWOGARD: CityContent = {
  slug: "nowogard",
  h1: "Thermomix Nowogard – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowogard — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Nowogardzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowogard — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowogardzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowogardu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Nowogard"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najwięcej zmienia zwykle to, co stoi w kuchni od dawna i nigdy nie zostało użyte.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowogardzie – jak wygląda prezentacja?",
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
      id: "juz-to-masz",
      heading: "Rok 1836, czyli to, co już masz, a czego jeszcze nie używasz",
      paragraphs: [
        "W 1836 roku Nowogard stał się właścicielem Jeziora Nowogardzkiego — dziewięćdziesiąt osiem hektarów wody, niespełna jedenaście metrów w najgłębszym miejscu, tuż przy mieście.",
        "Jezioro leżało tam oczywiście dużo wcześniej. Nie zmieniło się w 1836 roku ani o metr. Zmieniło się wyłącznie to, kto nim dysponuje — i od kiedy można go używać jak swojego.",
        "Ta różnica między „jest” a „używam” jest w kuchni wszędzie i to jest cała rzecz, o którą tu chodzi.",
        "W każdej kuchni, do której przyjeżdżam, stoi coś, co zostało kupione i nigdy nie dostało pierwszego razu. Foremka na jedno konkretne ciasto. Naczynie, które jest za duże na codzienność i za małe na święta. Przyprawa otwarta raz. Funkcja piekarnika, której nikt nie włączył, bo nie wiadomo, co ona właściwie robi.",
        "To nie jest zarzut i nie namawiam nikogo do wyrzucania czegokolwiek. Te rzeczy zwykle nie są zbędne — po prostu nigdy nie trafiła się okazja, która byłaby na tyle spokojna, żeby spróbować czegoś nowego.",
        "I tu jest sedno: pierwszy raz zawsze kosztuje więcej niż dziesiąty. Trzeba przeczytać, sprawdzić, przestawić się, pogodzić z tym, że może wyjść średnio. Dziesiąty raz nie kosztuje już nic. Dlatego rzeczy nieużywane zostają nieużywane — nie dlatego, że są złe, tylko dlatego, że pierwszy raz wypada zawsze wtedy, kiedy nie ma na niego miejsca.",
        "Jedyne, co na to działa, to zaplanować pierwszy raz zamiast czekać na okazję. Jedna rzecz na tydzień, w dzień, w którym i tak gotujesz, przy daniu, które i tak znasz. Nie „w weekend spróbuję czegoś nowego”, tylko konkretna rzecz przy konkretnym obiedzie. Po dwóch miesiącach osiem rzeczy z tej kuchni przestaje być nieużywanych, a Ty nie zrobiłaś nic poza wpisaniem ich do dnia, który i tak był.",
        "Teraz część niewygodna, którą wolę powiedzieć przed zakupem niż po. Dokładnie to samo dotyczy tego urządzenia.",
        "Znam kuchnie, w których przez pierwsze pół roku robiło się na nim trzy rzeczy. Nie dlatego, że urządzenie jest złe, i nie dlatego, że ktoś zrobił coś nie tak — tylko dlatego, że działa ten sam mechanizm. Pierwszy raz z każdą nową funkcją kosztuje, a codzienność nie zostawia na to miejsca sama z siebie.",
        "Dlatego proszę, żeby na prezentacji powiedzieć mi wprost, co u Was stoi nieużywane. To jest znacznie lepszy materiał na rozmowę niż lista funkcji z ulotki — i zwykle od razu wiadomo, co warto zrobić razem, póki jestem na miejscu.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowogardzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co stoi u Was w kuchni nieużywane — dobiorę dania tak, żeby przy okazji weszło to do gry.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowogardzie"),
    sekcjaRaty("w Nowogardzie"),
    {
      id: "rodzina",
      heading: "Thermomix dla nowogardzkiej rodziny",
      paragraphs: [
        "Nowogard leży w powiecie goleniowskim i jest miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad piętnaście i pół tysiąca mieszkańców na dwunastu i sześciu dziesiątych kilometra kwadratowego, pięćdziesiąt jeden metrów nad poziomem morza, a cała gmina — ponad dwadzieścia trzy tysiące osób na trzystu trzydziestu ośmiu kilometrach kwadratowych, w czterdziestu czterech miejscowościach zebranych w trzydziestu siedmiu sołectwach. Pierwsza wzmianka o grodzie pochodzi z 1268 roku, prawa miejskie na prawie lubeckim miasto otrzymało w 1309, a w 1467 rozszerzono przywileje mieszczańskie. Z murów obronnych wzniesionych w XIV wieku zachowało się czterysta dwadzieścia metrów o wysokości od dwóch metrów osiemdziesięciu do dwóch dziewięćdziesięciu. W 1836 roku miasto stało się właścicielem Jeziora Nowogardzkiego, które ma dziewięćdziesiąt osiem i trzy dziesiąte hektara i sięga dziesięciu metrów dziewięćdziesięciu w najgłębszym miejscu. Kolej dotarła tu w latach 1882–1883 linią z Goleniowa do Koszalina, a ratusz z wieżą zegarową stanął w 1911. W 1994 roku utworzono zespół przyrodniczo-krajobrazowy „Sarni Las”, w którym rosną cisy o wieku szacowanym na około siedemset lat.",
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

  districtsHeading: "Do których części Nowogardu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie — jest ich czterdzieści cztery, zebrane w trzydziestu siedmiu sołectwach. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowogard też przyjadę",
  nearbyParagraphs: [
    "Goleniów jest kwadrans drogi, Szczecin niespełna godzinę, a Gryfice i Stargard mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Goleniów", "Szczecin", "Gryfice", "Stargard"],

  about: blokOMnie("do Nowogardu", "w Nowogardzie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowogardu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu czterech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Nowogard w powiecie goleniowskim w województwie zachodniopomorskim — to inne miasto niż Nowogród w podlaskiem.",
    },
    ...faqWspolne("w Nowogardzie"),
    {
      question: "Co zrobić z rzeczami, które stoją w kuchni nieużywane?",
      answer:
        "Zaplanować im pierwszy raz, zamiast czekać na okazję. Pierwszy raz z czymkolwiek kosztuje więcej niż dziesiąty — trzeba przeczytać, sprawdzić i pogodzić się z tym, że może wyjść średnio — więc sam z siebie nie wypadnie nigdy. Najprościej: jedna rzecz na tydzień, w dzień, w którym i tak gotujesz, przy daniu, które już znasz. Nic nie trzeba wyrzucać.",
    },
    {
      question: "Czy po zakupie Thermomixa też tak bywa, że stoi nieużywany?",
      answer:
        "Bywa i wolę to powiedzieć przed zakupem niż po. Znam kuchnie, w których przez pierwsze pół roku robiło się na nim trzy rzeczy — działa ten sam mechanizm, bo każda nowa funkcja to kolejny pierwszy raz. Dlatego na prezentacji pytam wprost, co u Was stoi nieużywane, i wolę zrobić jedną taką rzecz razem, póki jestem na miejscu.",
    },
  ],

  geo: { lat: 53.6742, lng: 15.1165 },
};
