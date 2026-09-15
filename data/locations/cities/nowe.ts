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
 * NOWE — powiat świecki, woj. kujawsko-pomorskie,
 * KOCIEWIE, nad Wisłą.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 5 372 mieszkańców (GUS 31.12.2024), 3,6 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 9 605 osób.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ NOWE.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ Rozbieżności ze stronami urzędowymi ŚLADOWE —
 *   to rzadki przypadek w tym województwie.
 * ⚠⚠ ODMIANA — TRUDNA, PILNUJĘ JEJ:
 *   D. NOWEGO, Ms. W NOWEM (nie „w Nowym"!),
 *   C. NOWEMU, N. NOWEM.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO SŁOWNIKOWO —
 *   NIE UŻYWAM ŻADNEJ.
 *   ⚠ PRZYMIOTNIKA OD NAZWY MIASTA NIE UŻYWAM —
 *   piszę „w Nowem" albo „tutejszy".
 * ⚠⚠ NAZWA MIASTA TO DOSŁOWNIE „NOWE" — bardzo trudna
 *   do wyszukania i łatwa do pomylenia. Zawsze dopisuję
 *   „nad Wisłą" albo „powiat świecki".
 *   ⚠ NIE MYLIĆ z Nowem nad Wisłą jako częścią innych
 *   miejscowości ani z NOWYM MIASTEM (kilka w Polsce).
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ PRZYWILEJ LOKACYJNY Z 2 STYCZNIA 1350 R.
 *   (data dzienna) ROZPISYWAŁ PARCELE:
 *   32 PLACE PRZY RYNKU, 98 PRZY ULICACH,
 *   5 PLACÓW PUBLICZNYCH.
 *   ⚠ TO NIEZWYKŁY DOKUMENT — nie nadaje tylko praw,
 *   ale wylicza, ile czego ma być.
 * — ZAMEK: budynek główny 38,9 × 12,2 M, trójkondygnacyjny.
 * — ⚠⚠ RDZEŃ KĄTA — MONOGRAFIA UMK WYKAZUJE
 *   W LATACH 1572–1614 WARSZTATY: GARBARSKIE,
 *   GARNCARSKIE I POWROŹNICZE.
 *   ⚠⚠ ZERO GARBARSTWA (kąt zajęty — Kałuszyn)
 *   I ZERO GARNCARSTWA (kąt zajęty — Kruszwica, szkliwo).
 *   UŻYWAM WYŁĄCZNIE POWROŹNIKÓW. TWARDA GRANICA.
 * — MIĘDZYWOJNIE: ok. 50 zakładów meblarskich,
 *   ok. 1000 osób przy 3000 mieszkańców.
 *   ⚠⚠⚠ MEBLARSTWO WYŁĄCZNIE W CZASIE PRZESZŁYM
 *   I WYŁĄCZNIE JAKO LICZBA Z MIĘDZYWOJNIA —
 *   patrz sekcja etyczna. TWARDA GRANICA.
 * — położenie NAD WISŁĄ, na KOCIEWIU.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Nowe.
 *   ⚠⚠ PUŁAPKA ROZBROJONA: „powidła śliwkowe z Doliny
 *   Dolnej Wisły" (wpis 24.04.2007) NIE WYMIENIAJĄ
 *   gminy Nowe — jedyne odniesienie w karcie to garncarze
 *   z Gruczna, czyli GMINA ŚWIECIE. NIE PRZYPISUJĘ.
 *   TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: SZNUREK — wiązanie w kuchni.
 * Kąt od powroźników działających tu w latach 1572–1614:
 * przez czterdzieści lat w małym mieście nad Wisłą
 * ktoś na stałe robił sznurek. Dziś sznurek w kuchni
 * ma dokładnie jedno zastosowanie i większość ludzi
 * nie wie, że w ogóle go potrzebuje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że monografia naukowa miasta wykazuje tu w latach
 *   1572–1614 działające warsztaty powroźnicze — obok
 *   innych rzemiosł; przez czterdzieści lat w miasteczku
 *   nad Wisłą ktoś na stałe wyrabiał sznur,
 * — ŻE MIAŁO TO SENS PRZY RZECE: sznur był narzędziem
 *   pracy, nie dodatkiem ⚠ BEZ ROZWIJANIA WĄTKU
 *   ŻEGLUGI, KTÓREGO NIE MAM POTWIERDZONEGO,
 * — ⚠⚠ ŻE W KUCHNI SZNUREK MA KONKRETNE ZADANIE,
 *   O KTÓRYM SIĘ NIE MÓWI — TO JEST RDZEŃ:
 *   TRZYMA KSZTAŁT TEGO, CO INACZEJ SIĘ ROZPADNIE,
 * — GDZIE TO REALNIE DZIAŁA:
 *   — ZWIJANY KAWAŁEK MIĘSA (rolada, pieczeń z nadzieniem)
 *     rozwija się w cieple, jeśli nie jest związany —
 *     i wtedy nadzienie wypływa,
 *   — MIĘSO O NIERÓWNEJ GRUBOŚCI związane w równy wałek
 *     robi się równo na całej długości; niezwiązane ma
 *     cienki koniec gotowy dużo wcześniej niż gruby,
 *   — ZIOŁA ZWIĄZANE W PĘCZEK wyjmuje się z garnka
 *     jednym ruchem, zamiast wyławiać listki po jednym,
 *   — WORECZEK Z PŁÓTNA albo gazy zawiązany na przyprawy
 *     działa tak samo ⚠ ODSYŁAM DO STRONY O PŁÓTNIE,
 *     NIE ROZWIJAM,
 * — ⚠⚠ JAKI SZNUREK: WYŁĄCZNIE BAWEŁNIANY, NIEBARWIONY,
 *   BEZ POŁYSKU. Syntetyk topi się w cieple i to jest
 *   jedyna rzecz, którą naprawdę trzeba tu wiedzieć.
 *   ⚠ TO NIE JEST PORADA O BEZPIECZEŃSTWIE ŻYWNOŚCI,
 *   tylko fakt o materiale — i tak to formułuję,
 * — ŻE WIĄZAĆ TRZEBA LUŹNIEJ, NIŻ SIĘ WYDAJE: mięso
 *   w cieple pracuje, a za ciasny sznurek wrzyna się
 *   i przecina to, co miał utrzymać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to jest obszar, w którym
 *   urządzenie nie pomaga w ogóle. Wiązanie jest robotą
 *   ręki i pozostanie robotą ręki. Wymieniam to wprost,
 *   bo lista rzeczy, których Thermomix nie robi, jest
 *   krótsza niż lista tych, które robi — ale istnieje
 *   i warto ją znać.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO GARBARSTWA — kąt zajęty (Kałuszyn).
 * — ⚠⚠ ZERO GARNCARSTWA I SZKLIWA — kąt zajęty
 *   (Kruszwica).
 * — ⚠⚠ ZERO PŁÓTNA JAKO TEMATU — kąt zajęty (Raciąż).
 *   Odsyłam jednym zdaniem.
 * — ⚠ ZERO MIĘSA JAKO TEMATU SAMEGO W SOBIE — mięso
 *   występuje jako przykład, nie jako przedmiot.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO DZISIEJSZEGO MEBLARSTWA I ZERO UPADKU
 *   FABRYKI MEBLI. Produkcja została wstrzymana
 *   w połowie 2023 r., dotknęło to około tysiąca osób,
 *   były zaległe wypłaty, a obroty tutejszych
 *   handlowców spadły o jedną trzecią. To PIERWSZY
 *   WYNIK przy haśle łączącym Nowe z meblami.
 *   KONSEKWENCJA: o meblarstwie piszę WYŁĄCZNIE
 *   w czasie przeszłym i wyłącznie o międzywojniu,
 *   albo wcale. TWARDA GRANICA BEZWZGLĘDNA.
 * — ZERO wątków wojennych i okupacyjnych.
 * — ZERO wątków wyznaniowych i narodowościowych.
 * — ZERO wyludniania i bezrobocia.
 * — ZERO niemieckiej nazwy miasta.
 * — ZERO oblężeń i genezy zamku.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „PŁÓTNO W KUCHNI" (Raciąż) dotyczy TKANINY JAKO
 *   NARZĘDZIA. ⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi
 *   o SZNUR, czyli o trzymanie kształtu, nie o cedzenie
 *   i odciskanie. Odsyłam tam wprost.
 * — „SZUFLADA" (Lipno) dotyczy LICZBY NARZĘDZI.
 * — „DŁUGOŚĆ TRZONKA" (Ciechocinek) dotyczy DYSTANSU
 *   OD GORĄCA.
 * — „TKANKA ŁĄCZNA" (Kałuszyn) dotyczy BUDOWY MIĘSA.
 * TUTAJ chodzi o TRZYMANIE KSZTAŁTU SZNURKIEM.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PISZĘ „w Nowym" — poprawnie „w Nowem".
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE PRZYPISUJĘ gminie powideł z Doliny Dolnej Wisły.
 * — NIE PISZĘ o dzisiejszym meblarstwie.
 * — NIE ROZWIJAM wątku żeglugi — nie mam go
 *   potwierdzonego.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Nowe leży na Kociewiu nad Wisłą, w powiecie świeckim,
 *   jest miastem w gminie miejsko-wiejskiej i liczy 5 372
 *   mieszkańców (GUS, 31.12.2024) na 3,6 km²; cała gmina
 *   ma 9 605 osób,
 * — przywilej lokacyjny z 2 stycznia 1350 roku rozpisywał
 *   parcele co do sztuki: trzydzieści dwa place przy rynku,
 *   dziewięćdziesiąt osiem przy ulicach i pięć placów
 *   publicznych,
 * — główny budynek tutejszego zamku ma 38,9 na 12,2 metra
 *   i trzy kondygnacje,
 * — monografia naukowa miasta wykazuje w latach 1572–1614
 *   działające tu warsztaty powroźnicze,
 * — w dwudziestoleciu międzywojennym pracowało w Nowem
 *   około pięćdziesięciu zakładów meblarskich, a przy
 *   trzech tysiącach mieszkańców zatrudniały około tysiąca
 *   osób.
 */
export const NOWE: CityContent = {
  slug: "nowe",
  h1: "Thermomix Nowe – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowe nad Wisłą — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nowem nad Wisłą: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowe — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Nowe"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sznurek trzyma kształt tego, co inaczej by się rozpadło.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowem – jak wygląda prezentacja?",
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
      id: "sznurek",
      heading: "Czterdzieści lat wyrabiania sznura",
      paragraphs: [
        "Monografia naukowa miasta wykazuje, że w latach 1572–1614 działały w Nowem warsztaty powroźnicze. Przez czterdzieści lat, w miasteczku nad Wisłą, ktoś tu na stałe wyrabiał sznur — i było to rzemiosło jak każde inne, z własnym warsztatem i własnym fachem.",
        "Sznur był wtedy narzędziem pracy, a nie dodatkiem. Dziś w kuchni ma dokładnie jedno zadanie i większość ludzi nie wie, że w ogóle go potrzebuje.",
        "To zadanie brzmi tak: trzymać kształt tego, co inaczej by się rozpadło.",
        "Zwijany kawałek mięsa — rolada, pieczeń z nadzieniem — rozwija się w cieple, jeśli nie jest związany. Nadzienie wtedy wypływa i zostaje na blasze zamiast w środku. To nie jest kwestia zręczności zwijania; to po prostu fizyka mięsa, które się kurczy nierównomiernie.",
        "Druga rzecz jest mniej oczywista. Kawałek mięsa o nierównej grubości, związany w równy wałek, robi się równo na całej długości. Niezwiązany ma cienki koniec gotowy dużo wcześniej niż gruby — i albo jeden jest suchy, albo drugi surowy. Sznurek nie jest tu dekoracją, tylko sposobem na wyrównanie grubości.",
        "Trzecia jest banalna i codzienna: zioła związane w pęczek wyjmuje się z garnka jednym ruchem, zamiast wyławiać listki po jednym łyżką cedzakową. Woreczek z płótna albo gazy zawiązany na przyprawy robi dokładnie to samo — o samym płótnie jako narzędziu pisałam osobno przy innym mieście.",
        "Teraz jedna rzecz, którą naprawdę trzeba wiedzieć, i tylko ta jedna: sznurek ma być bawełniany, niebarwiony i bez połysku. Połysk zwykle oznacza syntetyk, a syntetyk topi się w cieple. To jest fakt o materiale, nie porada — ale akurat ten fakt warto mieć w głowie przed pierwszym wiązaniem.",
        "I druga, o której dowiadujemy się zwykle za późno: wiązać trzeba luźniej, niż się wydaje. Mięso w cieple pracuje i pęcznieje, a za ciasny sznurek wrzyna się w nie i przecina dokładnie to, co miał utrzymać.",
        "Uczciwie o sprzęcie, choć tym razem krótko. To jest obszar, w którym urządzenie nie pomaga w ogóle. Wiązanie było i zostanie robotą ręki, i nic tego nie zmieni.",
        "Wymieniam to wprost, bo lista rzeczy, których Thermomix nie robi, jest krótsza niż lista tych, które robi — ale istnieje i wolę, żebyś znała ją ode mnie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowem?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, żebyśmy przeszły przez to, co urządzenie zrobi, i przez to, co i tak zostanie w Twoich rękach — powiedz to przy umawianiu. To zwykle najbardziej praktyczna część spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowem"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Nowego",
      paragraphs: [
        "Nowe leży na Kociewiu nad Wisłą, w powiecie świeckim, jest miastem w gminie miejsko-wiejskiej i liczy ponad pięć tysięcy mieszkańców na trzech i sześciu dziesiątych kilometra kwadratowego; cała gmina ma ponad dziewięć i pół tysiąca osób. Przywilej lokacyjny z 2 stycznia 1350 roku rozpisywał parcele co do sztuki: trzydzieści dwa place przy rynku, dziewięćdziesiąt osiem przy ulicach i pięć placów publicznych — dokument nie tylko nadawał prawa, ale wyliczał, ile czego ma być. Główny budynek tutejszego zamku ma trzydzieści osiem dziewięć na dwanaście dwa metra i trzy kondygnacje. Monografia naukowa miasta wykazuje w latach 1572–1614 działające tu warsztaty powroźnicze. W dwudziestoleciu międzywojennym pracowało w Nowem około pięćdziesięciu zakładów meblarskich, które przy trzech tysiącach mieszkańców zatrudniały około tysiąca osób.",
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

  districtsHeading: "Do których części Nowego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — jest niewielkie, niecałe cztery kilometry kwadratowe, od rynku po zabudowę bliżej Wisły. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowe też przyjadę",
  nearbyParagraphs: [
    "Świecie, Gniew, Warlubie, Smętowo Graniczne, Skórcz, Pelplin i Grudziądz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świecie", "Gniew", "Skórcz", "Pelplin"],

  about: blokOMnie("do Nowego", "w Nowem", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Nowe nad Wisłą w powiecie świeckim, bo sama nazwa bywa myląca w wyszukiwarce.",
    },
    ...faqWspolne("w Nowem"),
    {
      question: "Po co w kuchni sznurek?",
      answer:
        "Żeby trzymać kształt tego, co inaczej by się rozpadło. Rolada bez związania rozwija się w cieple i nadzienie wypływa. Kawałek mięsa o nierównej grubości, związany w równy wałek, robi się równo na całej długości. A zioła związane w pęczek wyjmuje się z garnka jednym ruchem. Ważne: sznurek ma być bawełniany, niebarwiony i bez połysku — połysk zwykle oznacza syntetyk, a ten topi się w cieple.",
    },
    {
      question: "Czy Thermomix zwiąże mi pieczeń?",
      answer:
        "Nie i nie będzie udawał, że umie. Wiązanie było i zostanie robotą ręki. Mówię to wprost, bo lista rzeczy, których to urządzenie nie robi, jest krótsza niż lista tych, które robi — ale istnieje i lepiej ją znać przed zakupem.",
    },
  ],

  geo: { lat: 53.649, lng: 18.7271 },
};
