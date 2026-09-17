import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * GRYFÓW ŚLĄSKI — powiat lwówecki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 6 066 mieszkańców (GUS 31.12.2024), 6,6 km²,
 *   gęstość 914,9 os./km² [ZW, domyka się].
 * CAŁA GMINA: 9 034 osoby, 66,7 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — 9 034 / 66,7 = 135,4,
 *   serwis podaje inną wartość. NIE DOMYKA SIĘ.
 *   ⚠ Miasto to 67,1 % ludności gminy — PODAJĘ JAKO FAKT.
 *   ⚠ SIEDEM WSI [ZW, wyliczone imiennie]: Krzewie Wielkie,
 *   Młyńsko, Proszówka, Rząsiny, Ubocze, Wieża, Wolbromów.
 *   TU MOGĘ PODAĆ LICZBĘ — inaczej niż w Twardogórze.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ GEO: 51,0281 / 15,4144.
 *
 * ⚠⚠ ODMIANA — OBA CZŁONY SIĘ ODMIENIAJĄ:
 *   D. do Gryfowa Śląskiego · Ms. w Gryfowie Śląskim ·
 *   B. Gryfów Śląski. Przymiotnik: GRYFOWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *
 * ⚠⚠⚠ POTRÓJNA KOLIZJA NAZEWNICZA:
 *   — GRYFICE (zachodniopomorskie) — JUŻ OPISANE,
 *   — GRYFINO (zachodniopomorskie) — JUŻ OPISANE,
 *   — rzeczownik pospolity „gryf" (zwierzę herbowe,
 *     ale też część gryfu gitary i sztangi).
 *   ⚠⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ HERBU NIE OPISUJĘ — nieustalony w szczegółach.
 *
 * ⚠⚠⚠ ZAPORA ZŁOTNICKA LEŻY W GMINIE LEŚNA, NIE W GMINIE
 *   GRYFÓW ŚLĄSKI. Piszę wyłącznie „poniżej Gryfowa",
 *   NIGDY „gryfowska zapora", NIGDY „w Gryfowie".
 *   ⚠⚠ LEŚNA MA WŁASNĄ STRONĘ I WŁASNY KĄT (turbiny) —
 *   NIE DOTYKAM TEMATU ELEKTROWNI W OGÓLE.
 *
 * ⚠⚠ PRAWA MIEJSKIE: 1242 r., nadał BOLESŁAW II ŁYSY
 *   (Rogatka) [ZW, dwa źródła].
 *   ⚠⚠⚠ DATĘ „1025" ODRZUCAM — pojawia się w jednym
 *   popularnym źródle bez podstawy. NIE UŻYWAM JEJ
 *   ANI JAKO FAKTU, ANI JAKO „WEDŁUG NIEKTÓRYCH".
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — KRONIKA, KTÓRA NOTOWAŁA OKOLICZNOŚĆ:
 *   — 1415 — zapisane zaćmienie Słońca,
 *   — 1472 — przy zdarzeniu dopisano, że trwała wtedy
 *     WIELKA SUSZA,
 *   — 1602 — przy zdarzeniu dopisano GODZINĘ.
 *   ⚠⚠⚠ W dwóch przypadkach chodzi o pożar. WYMIENIAM GO
 *   JEDNYM SŁOWEM, BEZ ŻADNEJ NARRACJI O SZKODACH,
 *   OFIARACH, ODBUDOWIE ANI O „ŻYWIOLE". Interesuje
 *   mnie WYŁĄCZNIE sposób notowania, nie zdarzenie.
 *   ⚠⚠ MAKSIMUM: po jednej klauzuli na każde. Sprawdzić
 *   osobnym przebiegiem, czy nie urosło.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — RATUSZ: 1524–1551 (budowa), 1581 (podwyższenie),
 *   21 kwietnia 1620 — położenie fundamentów pod wieżę,
 *   1624–1632 — budowa wieży.
 *   ⚠ Od fundamentów do gotowej wieży: dwanaście lat.
 *   ⚠ WYSOKOŚCI WIEŻY NIE USTALONO — NIE PODAJĘ.
 * — MURY MIEJSKIE: przełom XIII i XIV w., podwyższone
 *   w 1404 r., ostatnia odnotowana naprawa w 1757 r.,
 *   bramy rozebrane w 1837, 1839 i 1845 r.
 *   ⚠⚠ „CIENKIE, ALE PIERWSZE" — kąt zajęty (Kąty
 *   Wrocławskie). NIE ROBIĘ Z MURÓW KĄTA.
 *   ⚠⚠ „NAJSZYBCIEJ ZNIKA TO, CZEGO JEST PO JEDNYM" —
 *   kąt zajęty (Lwówek Śląski, SĄSIEDNIE MIASTO
 *   W TYM SAMYM POWIECIE). ⚠⚠⚠ TRZY BRAMY ROZEBRANE
 *   W OŚMIU LATACH TO DOKŁADNIE TAMTA FIGURA.
 *   PODAJĘ DATY WYŁĄCZNIE JAKO SUCHY CIĄG, BEZ MORAŁU.
 * — ⚠⚠ KOŚCIOŁA ŚW. JADWIGI NIE OPISUJĘ — wyznaniowe.
 * — ⚠⚠ EPITAFIUM Z 1585 R. NIE UŻYWAM — wątek pogrzebowy,
 *   mimo że dane (10 rzeźb na 4,7 m) są zweryfikowane.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO DLA ŻADNEGO
 *   KIERUNKU. NIE PODAJĘ ANI JEDNEJ LICZBY KILOMETRÓW
 *   W SEKCJI „POZA GRYFÓW".
 *
 * KĄT: ZAPISZ WARUNEK, NIE ZDARZENIE
 * — o tym, że w notatce o tym, co nie wyszło, wartość ma
 * okoliczność, a nie samo zdarzenie. Kąt od gryfowskiej
 * kroniki: przy zapisach z 1472 i 1602 roku dopisano
 * odpowiednio suszę i godzinę — i dopiero to czyni z nich
 * zapis użyteczny, a nie tylko datę.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kronika miejska notowała przy zdarzeniach nie tylko
 *   rok: przy 1415 — zaćmienie Słońca, przy 1472 — że
 *   trwała wielka susza, przy 1602 — godzinę,
 * — ŻE TO JEST RÓŻNICA MIĘDZY ZAPISEM A ZAPISEM
 *   UŻYTECZNYM. „Był pożar" nie mówi nic. „Był pożar,
 *   trwała susza" mówi, czego się bać następnym razem,
 * — ⚠⚠ ŻE W KUCHNI ZAPISUJEMY DOKŁADNIE ODWROTNIE:
 *   „ciasto nie wyrosło", „sos się zważył", „mięso twarde"
 *   — same zdarzenia, zero okoliczności,
 * — ⚠⚠ ŻE TAKA NOTATKA JEST BEZUŻYTECZNA, bo za miesiąc
 *   nie wiadomo, co było inne: drożdże, temperatura
 *   w kuchni, inna mąka, inny garnek, pośpiech,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: dopisz obok „nie wyszło" jedną
 *   rzecz, która tego dnia była inna niż zwykle. Jedną —
 *   nie listę,
 * — ⚠⚠ ŻE NAJCZĘŚCIEJ TĄ JEDNĄ RZECZĄ JEST COŚ BANALNEGO:
 *   otwarta wcześniej paczka, zimna kuchnia, inna partia
 *   produktu, gotowanie w pośpiechu,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to działa tylko przy
 *   powtarzalnych potrawach. Przy daniu robionym raz
 *   w roku notatka i tak nic nie da — i nie ma sensu
 *   jej prowadzić,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie z zaprogramowanym
 *   przebiegiem USUWA CZĘŚĆ OKOLICZNOŚCI (temperatura,
 *   czas, tempo mieszania przestają się wahać), więc gdy
 *   coś nie wyjdzie, lista podejrzanych jest krótsza.
 *   MÓWIĘ WPROST, że to NIE JEST to samo co gwarancja
 *   powtarzalności — składniki dalej się różnią.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAJSZYBCIEJ ZNIKA TO, CZEGO JEST PO JEDNYM —
 *   kąt zajęty (Lwówek Śląski, ten sam powiat).
 * — ⚠⚠⚠ ZERO CIENKIE, ALE PIERWSZE — kąt zajęty
 *   (Kąty Wrocławskie).
 * — ⚠⚠⚠ ZERO DOPISZ, CZYM MIERZYŁAŚ — kąt zajęty
 *   (Twardogóra). ⚠⚠ TO NAJBLIŻSZY OBSZAR: tamten tekst
 *   mówi o JEDNOSTCE POMIARU, ten o OKOLICZNOŚCI
 *   ZDARZENIA. ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM.
 * — ⚠⚠ ZERO PUNKTÓW, KTÓRYCH NIE PRZESUNIESZ — kąt zajęty
 *   (Kudowa-Zdrój).
 * — ⚠⚠ ZERO DOŁOŻONEGO PO LATACH UŻYWANIA — kąt zajęty
 *   (Syców). Ratusz podwyższony w 1581 r. ociera się
 *   o tamto. PODAJĘ DATĘ BEZ MORAŁU.
 * — ⚠⚠ ZERO ZAPASOWE POWINNO BYĆ INNE — kąt zajęty
 *   (Chocianów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO FORMULARZA NOTATKI — podaję
 *   WYŁĄCZNIE zasadę: jedna okoliczność obok zdarzenia.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO POŻARU JAKO ŻYWIOŁU, ZERO SZKÓD, ZERO OFIAR,
 *   ZERO ODBUDOWY. Pożar pojawia się jako JEDNO SŁOWO
 *   w zapisie kronikarskim i nic poza tym.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO I POGRZEBOWEGO.
 * — ⚠ ZERO DEMOGRAFII WSPÓŁCZESNEJ I BEZROBOCIA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ daty „1025" w żadnej postaci.
 * — NIE PRZYPISUJĘ Gryfowowi zapory ani elektrowni —
 *   leżą w gminie Leśna.
 * — NIE PODAJĘ wysokości wieży ratusza.
 * — NIE PODAJĘ odległości drogowych — nieustalone.
 * — NIE OPISUJĘ herbu.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Gryfów Śląski leży w powiecie lwóweckim; miasto liczy
 *   6 066 mieszkańców (GUS, 31.12.2024) na 6,6 km², czyli
 *   914,9 osoby na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 9 034 osoby na 66,7 km²; do gminy
 *   należy siedem wsi: Krzewie Wielkie, Młyńsko,
 *   Proszówka, Rząsiny, Ubocze, Wieża i Wolbromów,
 * — prawa miejskie nadał w 1242 r. Bolesław II Łysy,
 *   zwany Rogatką,
 * — kronika miejska zanotowała zaćmienie Słońca w 1415 r.,
 *   przy zapisie z 1472 r. dopisała, że trwała wielka
 *   susza, a przy zapisie z 1602 r. — godzinę,
 * — ratusz budowano w latach 1524–1551, podwyższono
 *   w 1581 r., fundamenty pod wieżę położono 21 kwietnia
 *   1620 r., a samą wieżę wznoszono w latach 1624–1632,
 * — mury miejskie powstały na przełomie XIII i XIV w.,
 *   podwyższono je w 1404 r., ostatnią naprawę odnotowano
 *   w 1757 r., a trzy bramy rozebrano kolejno w 1837,
 *   1839 i 1845 r.
 */
export const GRYFOW_SLASKI: CityContent = {
  slug: "gryfow-slaski",
  h1: "Thermomix Gryfów Śląski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Gryfów Śląski — prezentacja i cena",
  seoDescription:
    "Thermomix w Gryfowie Śląskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gryfów Śląski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gryfowie Śląskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Gryfowa Śląskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich siedmiu wsi w gminie.",

  highlights: highlightyStandardowe("Gryfów Śląski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kronikarz dopisał, że trwała susza. I dopiero to coś znaczy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gryfowie Śląskim – jak wygląda prezentacja?",
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
      id: "zapisz-warunek",
      heading: "Zapisz warunek, nie zdarzenie",
      paragraphs: [
        "Kronika Gryfowa Śląskiego notuje w 1415 roku zaćmienie Słońca. Przy zapisie z 1472 roku dopisuje, że trwała wtedy wielka susza. Przy zapisie z 1602 roku — godzinę.",
        "W obu tych wypadkach chodziło o pożar. Ale nie o to tutaj chodzi.",
        "Chodzi o to, że ktoś przed pięciuset laty rozumiał różnicę między zapisem a zapisem użytecznym. „Był pożar” nie mówi nikomu nic. „Był pożar, trwała wielka susza” mówi następnemu pokoleniu, czego się pilnować.",
        "W kuchni notujemy odwrotnie. Zawsze odwrotnie.",
        "„Ciasto nie wyrosło.” „Sos się zważył.” „Mięso wyszło twarde.” Samo zdarzenie, zero okoliczności. Za miesiąc taka notatka jest nic niewarta, bo nie wiadomo, co tego dnia było inne.",
        "A było coś inne — zawsze jest. Drożdże z paczki otwartej dwa tygodnie wcześniej. Kuchnia zimniejsza, bo okno stało otwarte. Mąka z innej partii. Inny garnek. Albo najczęstsze ze wszystkiego: pośpiech.",
        "Ruch jest jeden i mieści się w trzech słowach. Obok „nie wyszło” dopisz jedną rzecz, która tego dnia była inna niż zwykle.",
        "Jedną. Nie listę, nie dochodzenie, nie tabelkę. Pierwszą, która przyjdzie do głowy — bo zwykle właśnie ta jest prawdziwą przyczyną, tylko wydaje się zbyt banalna, żeby ją zapisać.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, czym mierzyłaś składniki. Chodzi o coś innego — o warunki, w jakich robiłaś. Jednostka i okoliczność to dwie różne rzeczy i obie się przydają.",
        "Uczciwie o drugiej stronie: to działa wyłącznie przy potrawach, które robisz regularnie. Przy cieście pieczonym raz w roku żadna notatka nie pomoże, bo nie ma czego z czym porównać. Tam po prostu odpuść.",
        "I uczciwie o sprzęcie. Thermomix nie sprawi, że wszystko zawsze wyjdzie — ale skraca listę podejrzanych. Temperatura, czas i tempo mieszania przestają się wahać między jednym a drugim razem, więc kiedy coś nie wychodzi, przyczyna leży po stronie składników albo kolejności, nie po stronie płyty i garnka. To nie to samo co gwarancja powtarzalności. To mniejsza liczba rzeczy do sprawdzenia.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gryfowie Śląskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy jest u Was danie, które raz wychodzi, a raz nie. Takie właśnie najlepiej ugotować na spotkaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gryfowie Śląskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Gryfowa Śląskiego",
      paragraphs: [
        "Gryfów Śląski leży w powiecie lwóweckim. Samo miasto liczy 6 066 mieszkańców (GUS, 31.12.2024) na sześciu i sześciu dziesiątych kilometra kwadratowego, czyli dziewięćset piętnaście osób na kilometr — jak na miasteczko tej wielkości bardzo gęsto. Cała gmina miejsko-wiejska ma 9 034 osoby na sześćdziesięciu sześciu i siedmiu dziesiątych kilometra kwadratowego, a należy do niej siedem wsi: Krzewie Wielkie, Młyńsko, Proszówka, Rząsiny, Ubocze, Wieża i Wolbromów. Miasto to zatem dwie trzecie ludności całej gminy. Prawa miejskie nadał w 1242 roku Bolesław II Łysy, zwany Rogatką. Ratusz budowano w latach 1524–1551, podwyższono w 1581, fundamenty pod jego wieżę położono 21 kwietnia 1620 roku, a samą wieżę wznoszono w latach 1624–1632 — od fundamentów do gotowej wieży minęło dwanaście lat. Mury miejskie powstały na przełomie trzynastego i czternastego wieku, podwyższono je w 1404 roku, ostatnią naprawę odnotowano w 1757, a trzy bramy rozebrano kolejno w 1837, 1839 i 1845 roku. Miejska kronika zanotowała zaćmienie Słońca w 1415 roku, a przy zapisach z 1472 i 1602 roku dopisała okoliczności: przy pierwszym wielką suszę, przy drugim godzinę.",
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

  districtsHeading: "Do których części Gryfowa Śląskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich siedmiu wsi w gminie: Krzewia Wielkiego, Młyńska, Proszówki, Rząsin, Ubocza, Wieży i Wolbromowa. Wszędzie bez dopłaty.",
    "Wieś Wieża bywa źródłem nieporozumień przez telefon — kiedy mówisz „mieszkam w Wieży”, dopytuję, czy chodzi o wieś w gminie, żeby nie pomylić jej z wieżą ratusza w centrum.",
  ],
  districts: [],

  nearbyHeading: "Poza Gryfów Śląski też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Lubania, Lwówka Śląskiego, Mirska, Leśnej i Jeleniej Góry — wszędzie bezpłatnie, tak samo jak w samym Gryfowie.",
  ],
  nearbyTowns: ["Lubań", "Lwówek Śląski", "Mirsk", "Leśna", "Jelenia Góra"],

  about: blokOMnie("do Gryfowa Śląskiego", "w Gryfowie Śląskim i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Gryfowa Śląskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedmiu wsi w gminie — Krzewia Wielkiego, Młyńska, Proszówki, Rząsin, Ubocza, Wieży i Wolbromowa. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga nazewnicza, bo bywa mylnie: Gryfów Śląski to powiat lwówecki na Dolnym Śląsku, a Gryfice i Gryfino leżą w województwie zachodniopomorskim, kilkaset kilometrów stąd. Do tamtych też jeżdżę, ale to zupełnie inne strony.",
    },
    ...faqWspolne("w Gryfowie Śląskim"),
    {
      question: "Zapisuję sobie, co nie wyszło, i nic mi to nie daje. Co robię źle?",
      answer:
        "Prawdopodobnie zapisujesz zdarzenie zamiast okoliczności. Kronika Gryfowa Śląskiego przy zapisie z 1472 roku dopisała, że trwała wtedy wielka susza, a przy zapisie z 1602 — godzinę, i dopiero przez to te notatki cokolwiek znaczą. „Ciasto nie wyrosło” nie mówi nic. „Ciasto nie wyrosło, drożdże z otwartej paczki” mówi wszystko. Dopisuj obok jedną rzecz, która tego dnia była inna niż zwykle — jedną, nie listę. Zastrzeżenie: to działa tylko przy potrawach, które robisz regularnie.",
    },
    {
      question: "Czy Thermomix sprawia, że dania zawsze wychodzą tak samo?",
      answer:
        "Nie i nie będę tego obiecywać. Sprawia natomiast, że kiedy coś nie wyjdzie, lista możliwych przyczyn jest krótsza: temperatura, czas i tempo mieszania nie wahają się między jednym a drugim razem, więc zostają składniki i kolejność. Mąka z innej partii albo zimne masło dalej potrafią zepsuć wypiek. Na prezentacji chętnie ugotuję z Wami akurat to danie, które u Was raz wychodzi, a raz nie — wtedy najlepiej widać, co właściwie się dzieje.",
    },
  ],

  geo: { lat: 51.0281, lng: 15.4144 },
};
