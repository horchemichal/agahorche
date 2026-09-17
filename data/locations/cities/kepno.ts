import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * KĘPNO — powiat kępiński (siedziba),
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * NAJDALEJ NA POŁUDNIE WYSUNIĘTE MIASTO WIELKOPOLSKI.
 * MIASTO: 13 429 mieszkańców (GUS 31.12.2024), 7,8 km²,
 *   gęstość 1 723,9 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia powierzchni do 7,79].
 *   PODAJĘ.
 * CAŁA GMINA: 24 033 osoby, 123,9 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — NAJGORSZY ROZJAZD
 *   Z DOTYCHCZASOWYCH: 193,97 z dzielenia wobec 196
 *   w źródle (1,0 %).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI W GMINIE: 21 ⚠ [SP — en-wiki podaje 23].
 *   PISZĘ „ponad dwadzieścia miejscowości".
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 51,283 / 17,983. Wysoczyzna Wieruszowska.
 * ⚠⚠ RZEKA: NIESÓB, potocznie SAMICA — DWIE NAZWY
 *   JEDNEJ RZEKI. ⚠⚠⚠ TEGO NIE ROBIĘ KĄTEM — figura
 *   „siedem nazw na jeden przedmiot" zajęta (Szklarska
 *   Poręba). PODAJĘ OBIE NAZWY W JEDNYM ZDANIU I KONIEC.
 *
 * ⚠⚠⚠ ODMIANA — RODZAJ NIJAKI, NIEREGULARNY
 *   PRZYMIOTNIK:
 *   D. do KĘPNA · Ms. w KĘPNIE · N. Kępnem.
 *   ⚠⚠⚠ BŁĄD: „w Kępnem".
 *   ⚠⚠⚠ PRZYMIOTNIK: KĘPIŃSKI (n → ń + -iński).
 *   NIGDY „kępneński" ani „kępnowski". Powiat kępiński,
 *   układ kępiński, Muzeum Ziemi Kępińskiej.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — NAJSILNIEJSZE W FALI:
 *   KĘPNO w pow. szczecineckim (zachodniopomorskie) ·
 *   KĘPNO w woj. pomorskim · szeroka rodzina
 *   Kępa / Kępie / Kępno. ROZGRANICZAM W FAQ.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 15 lutego 1282 r., dokument
 *     o *Campno* — układ kępiński.
 *     ⚠⚠ TREŚCI UKŁADU NIE ROZWIJAM — wątek
 *     terytorialno-polityczny. PODAJĘ SAMĄ DATĘ
 *     I NAZWĘ.
 *   — PRAWA MIEJSKIE: ok. 1283 r. (w 1283 Kępno jest
 *     już wymieniane jako miasto) [SP].
 *   — UTRATA PRAW: koniec XIV w.
 *   — ODZYSKANIE: 1661 r. ⚠ [SP — en-wiki podaje 1660;
 *     miasto obchodziło 350-lecie w 2011 r., co wskazuje
 *     na 1661]. PISZĘ „1661 r., choć źródła nie są
 *     w pełni zgodne".
 *   ⚠⚠⚠ PRZERWY OK. 265 LAT NIE ROBIĘ KĄTEM — figura
 *   „x lat bez statusu miejskiego" zajęta (Szklarska
 *   Poręba). PODAJĘ JAKO GOŁY FAKT, BEZ MORAŁU.
 *   — 1365 r. — Kazimierz Wielki przekazał Kępno
 *     Wierzbięcie z Paniewic.
 *   — POWIAT KĘPIŃSKI PRZYWRÓCONY: 1 stycznia 1999 r.
 *   — RATUSZ: 1835 r., klasycystyczny.
 *   — WIEŻA CIŚNIEŃ: 1903–1904 r., 42,5 m.
 *     ⚠⚠ WYSOKOŚCI NIE ROBIĘ KĄTEM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NAJSTARSZE LEŻY NA OBRZEŻU:
 *   — MECHNICE, wieś w gminie Kępno: obozowisko łowców
 *     reniferów kultury hamburskiej, PÓŹNY PALEOLIT,
 *     OK. 14 000 LAT TEMU,
 *   — SAMO KĘPNO: pierwszy zapis nazwy — 1282 r.,
 *     czyli ok. 740 lat temu.
 *   ⚠⚠⚠ NAJSTARSZY ŚLAD CZŁOWIEKA W GMINIE NIE LEŻY
 *   W MIEŚCIE, TYLKO WE WSI, KTÓRĄ TO MIASTO DZIŚ
 *   ADMINISTRUJE.
 *   ⚠⚠ NIE PORÓWNUJĘ TYCH LICZB JAKO KROTNOŚCI —
 *   to porównanie śladu osadnictwa z zapisem nazwy,
 *   dwie różne rzeczy. PISZĘ TO WPROST.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE W MIEJSCU KĘPNA NIKOGO WTEDY
 *   NIE BYŁO — twierdzę tylko, że śladu stamtąd nie ma.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ⚠⚠ DWORCA DWUPOZIOMOWEGO NIE UŻYWAM — jedno
 *   źródło, niepotwierdzone.
 * — Muzeum Ziemi Kępińskiej: 1938 r.
 * — ⚠ ODLEGŁOŚCI [SP] — NIE PODAJĘ ŻADNEJ.
 *
 * KĄT: NAJSTARSZE LEŻY NA OBRZEŻU
 * — o tym, że najtrwalsze rzeczy w kuchni rzadko stoją
 * w centrum uwagi. Kąt z Mechnic: najstarszy ślad
 * człowieka w gminie Kępno jest we wsi, nie w mieście.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najstarszy ślad człowieka w gminie to obozowisko
 *   sprzed około czternastu tysięcy lat w Mechnicach,
 *   a nazwa samego Kępna pojawia się dopiero w 1282 r.,
 * — ŻE NAJSTARSZE NIE LEŻY W CENTRUM, TYLKO NA
 *   OBRZEŻU. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE NIE PORÓWNUJĘ TYCH DWÓCH LICZB WPROST, bo
 *   ślad osadnictwa i zapis nazwy to nie to samo,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: najtrwalsze rzeczy to nie
 *   dania popisowe, tylko drobiazgi na marginesie —
 *   sposób solenia, kolejność, w jakiej się kroi,
 *   garnek, po który sięga się bez patrzenia,
 * — ⚠⚠ ŻE TO WŁAŚNIE ONE PRZETRWAŁY WSZYSTKIE ZMIANY
 *   kuchni, mieszkań i mody,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zanim zaczniesz zmieniać
 *   kuchnię, wypisz trzy rzeczy, które robisz tak samo
 *   od lat i nigdy o nich nie myślisz. Tego nie ruszaj,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie wszystko stare jest
 *   dobre. Część tych drobiazgów to nawyki przejęte
 *   bezmyślnie i warto je raz przejrzeć — ale świadomie,
 *   a nie przy okazji,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie zmienia to,
 *   co widoczne. MÓWIĘ WPROST, że jeśli ma wyprzeć
 *   czynność, którą ktoś robi od trzydziestu lat,
 *   zwykle przegra — i że to nie jest wada urządzenia.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO TO, CO SIĘ ROZROSŁO, POKAZUJE, KTÓRĘDY
 *   CHODZONO — kąt zajęty (Radków). ⚠⚠⚠ TO NAJBLIŻSZY
 *   SĄSIAD I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło
 *   o to, co jest NAJCZĘŚCIEJ używane; tu o to, co jest
 *   NAJDŁUŻEJ obecne. Częste i trwałe to nie to samo.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO UŻYWANE OD DAWNA, ZAPISANE PÓŹNO — kąt
 *   zajęty (Zawidów).
 * — ⚠⚠ ZERO PRZERWA NIE KASUJE POCZĄTKU — kąt zajęty
 *   (Trzcianka).
 * — ⚠⚠ ZERO STAŻ NIE PRZEKŁADA SIĘ NA ROZMIAR — kąt
 *   zajęty (Nowogrodziec).
 * — ⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt
 *   zajęty (Szklarska Poręba). DLATEGO DWIE NAZWY RZEKI
 *   TO JEDNO ZDANIE FAKTOGRAFICZNE.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   HERBU · ZERO POLITYKI TERYTORIALNEJ.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ dokładnej liczby miejscowości.
 * — NIE TWIERDZĘ, że w miejscu dzisiejszego Kępna
 *   nikogo wtedy nie było.
 * — NIE PODAJĘ roku odzyskania praw jako pewnego.
 * — NIE OPISUJĘ treści układu kępińskiego.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kępno jest siedzibą powiatu kępińskiego i najdalej
 *   na południe wysuniętym miastem Wielkopolski; leży
 *   nad Niesobem, zwanym potocznie Samicą, na
 *   Wysoczyźnie Wieruszowskiej,
 * — miasto liczy 13 429 mieszkańców (GUS, 31.12.2024)
 *   na 7,8 km², czyli 1 723,9 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 24 033
 *   osoby na 123,9 km² i ponad dwadzieścia miejscowości,
 * — nazwa pojawia się po raz pierwszy 15 lutego 1282 r.
 *   w dokumencie znanym jako układ kępiński; około
 *   1283 r. Kępno jest już wymieniane jako miasto,
 *   prawa utraciło pod koniec XIV w. i odzyskało
 *   w 1661 r.,
 * — w 1365 r. Kazimierz Wielki przekazał Kępno
 *   Wierzbięcie z Paniewic; powiat kępiński przywrócono
 *   1 stycznia 1999 r.,
 * — ratusz pochodzi z 1835 r., wieża ciśnień z lat
 *   1903–1904 i ma 42,5 m, a Muzeum Ziemi Kępińskiej
 *   działa od 1938 r.,
 * — najstarszy ślad człowieka w gminie to obozowisko
 *   łowców reniferów kultury hamburskiej w Mechnicach,
 *   sprzed około 14 000 lat.
 */
export const KEPNO: CityContent = {
  slug: "kepno",
  h1: "Thermomix Kępno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kępno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kępnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kępno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kępnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kępna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Kępno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najstarszy ślad w gminie nie leży w mieście.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kępnie – jak wygląda prezentacja?",
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
      id: "najstarsze-na-obrzezu",
      heading: "Najstarsze leży na obrzeżu",
      paragraphs: [
        "Najstarszy ślad człowieka w gminie Kępno nie jest w Kępnie.",
        "Jest w Mechnicach — obozowisko łowców reniferów sprzed około czternastu tysięcy lat. Nazwa samego miasta pojawia się w dokumentach dopiero 15 lutego 1282 roku.",
        "Tych dwóch liczb nie porównuję wprost, bo to nie są rzeczy tego samego rodzaju: jedna to ślad po ludziach, druga to zapis nazwy. Nie twierdzę też, że w miejscu dzisiejszego Kępna nikogo wtedy nie było — twierdzę tylko, że śladu stamtąd nie ma. Zostaje jednak prosty fakt: najstarsze, czym gmina dysponuje, leży na jej obrzeżu, we wsi, którą miasto dziś administruje.",
        "W kuchni działa to tak samo i to jest jedna z niewielu rzeczy, o których mówię ludziom z przekonaniem.",
        "Najtrwalsze nie są dania popisowe. Najtrwalsze są drobiazgi, o których nikt nie myśli. Sposób, w jaki solisz — szczyptą z dłoni, a nie z solniczki. Kolejność, w której kroisz warzywa, bo tak robiła się u Was zupa. Jeden garnek, po który sięgasz bez patrzenia. To wszystko przetrwało przeprowadzki, remonty, zmiany mody i trzy pokolenia sprzętu.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej, że prawdziwą trasę w kuchni widać po tym, co najbardziej zużyte. Tam chodziło o to, co używane najczęściej. Tu o coś innego — o to, co obecne najdłużej. Częste i trwałe to nie to samo, choć czasem się pokrywają.",
        "Ruch jest jeden i jest ochronny, nie naprawczy. Zanim zaczniesz cokolwiek w kuchni zmieniać, wypisz trzy rzeczy, które robisz tak samo od lat i o których nigdy nie myślisz. Tych nie ruszaj. To jest fundament, a nie przyzwyczajenie do wyplenienia.",
        "Uczciwie o drugiej stronie: nie wszystko stare jest dobre. Część takich drobiazgów to nawyki przejęte bezrefleksyjnie i warto je raz przejrzeć. Ale świadomie i pojedynczo, a nie przy okazji wielkiego porządkowania — bo wtedy wylatuje wszystko naraz i zostaje kuchnia, w której nic nie jest oczywiste.",
        "I uczciwie o sprzęcie. Thermomix zmienia to, co widoczne — sposób gotowania konkretnych dań. Jeśli ma wyprzeć czynność, którą ktoś robi od trzydziestu lat i lubi robić, zwykle przegra. To nie jest wada urządzenia, tylko normalna kolej rzeczy, i wolę to powiedzieć na spotkaniu, niż udawać, że tak nie jest.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kępnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co w Waszej kuchni robi się od pokoleń tak samo. Postaram się tego nie ruszać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kępnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kępna",
      paragraphs: [
        "Kępno jest siedzibą powiatu kępińskiego i najdalej na południe wysuniętym miastem Wielkopolski; leży nad Niesobem, zwanym potocznie Samicą, na Wysoczyźnie Wieruszowskiej. Samo miasto liczy 13 429 mieszkańców (GUS, 31.12.2024) na 7,8 kilometra kwadratowego, czyli tysiąc siedemset dwadzieścia cztery osoby na kilometr, a cała gmina miejsko-wiejska 24 033 osoby na 123,9 kilometra i ponad dwadzieścia miejscowości. Gęstości dla całej gminy nie podaję, bo liczby ze źródeł się nie domykają. Nazwa miasta pojawia się po raz pierwszy 15 lutego 1282 roku, w dokumencie znanym jako układ kępiński; około 1283 Kępno jest już wymieniane jako miasto, prawa utraciło pod koniec czternastego wieku, a odzyskało w 1661 — choć i tu źródła nie są w pełni zgodne. W 1365 roku Kazimierz Wielki przekazał Kępno Wierzbięcie z Paniewic. Powiat kępiński przywrócono 1 stycznia 1999. Ratusz pochodzi z 1835 roku, wieża ciśnień z lat 1903–1904 i ma czterdzieści dwa i pół metra, a Muzeum Ziemi Kępińskiej działa od 1938.",
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

  districtsHeading: "Do których części Kępna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie, łącznie z Mechnicami. Wszędzie bez dopłaty.",
    "Przy umawianiu warto dopisać województwo wielkopolskie albo powiat kępiński — w Polsce są jeszcze dwa Kępna, w zachodniopomorskim i w pomorskim.",
  ],
  districts: [],

  nearbyHeading: "Poza Kępno też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Ostrzeszowa, Sycowa, Wieruszowa, Grabowa nad Prosną i Mikstatu — wszędzie bezpłatnie, tak samo jak w samym Kępnie.",
  ],
  nearbyTowns: ["Ostrzeszów", "Syców", "Wieruszów", "Grabów nad Prosną", "Mikstat"],

  about: blokOMnie("do Kępna", "w Kępnie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kępna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi: mówi się „w Kępnie”, a nie „w Kępnem”, a przymiotnik brzmi „kępiński” — stąd powiat kępiński i układ kępiński. I warto dopisać województwo, bo Kępno to także nazwa dwóch innych miejscowości w Polsce.",
    },
    ...faqWspolne("w Kępnie"),
    {
      question: "Chcę przewrócić swoją kuchnię do góry nogami. Od czego zacząć?",
      answer:
        "Od spisania tego, czego nie ruszać. Najstarszy ślad człowieka w gminie Kępno jest nie w mieście, tylko w Mechnicach — najtrwalsze rzeczy rzadko leżą w centrum uwagi. W kuchni tym najtrwalszym są drobiazgi, o których się nie myśli: sposób solenia, kolejność krojenia, garnek, po który sięgasz bez patrzenia. Wypisz trzy takie rzeczy i zostaw je w spokoju. Wielkie porządkowanie zwykle wymiata je razem z resztą, a potem nic nie jest oczywiste.",
    },
    {
      question: "Mama gotuje po swojemu od pięćdziesięciu lat. Czy przekona się do Thermomixa?",
      answer:
        "Czasem tak, czasem nie i nie obiecuję cudów. Urządzenie łatwo wchodzi tam, gdzie zdejmuje robotę uciążliwą — mieszanie, pilnowanie, tarcie, mycie kilku garnków. Trudno wchodzi tam, gdzie miałoby wyprzeć czynność, którą ktoś lubi robić ręcznie od pół wieku. To nie jest wada urządzenia. Na prezentacji zwykle proponuję, żeby zacząć od jednej rzeczy męczącej, a resztę zostawić tak, jak jest.",
    },
  ],

  geo: { lat: 51.283, lng: 17.983 },
};
