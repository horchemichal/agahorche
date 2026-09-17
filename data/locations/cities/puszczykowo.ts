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
 * PUSZCZYKOWO — powiat poznański, woj. wielkopolskie.
 * ⚠⚠⚠ GMINA MIEJSKA — miasto jest całą gminą, nie ma
 *   części wiejskiej. Jedna z tylko DWÓCH gmin miejskich
 *   powiatu poznańskiego (druga: Luboń).
 *   ODRĘBNEJ GMINY WIEJSKIEJ PUSZCZYKOWO NIE MA.
 * MIASTO: 9 257 mieszkańców (GUS 31.12.2024), 16,4 km²,
 *   gęstość 564,8 os./km² [ZW — domyka się po cofnięciu
 *   zaokrąglenia do 16,39 km², potwierdzone
 *   katastralnie]. PODAJĘ.
 * CZĘŚCI MIASTA: Niwka, Puszczykówko, Stare Puszczykowo.
 *   ⚠ W katastrze to 1 miejscowość i 3 obręby;
 *   w wykazie TERYT — miasto i trzy części.
 *   ⚠⚠⚠ RÓŻNICY LICZB (1 / 3 / 4) NIE ROBIĘ KĄTEM —
 *   figury „lista kanoniczna" (Mosina) i „spór o liczbę"
 *   (Szamotuły) są zajęte. WYMIENIAM CZĘŚCI I KONIEC.
 * ⚠ DWA KODY POCZTOWE: 62-040 i 62-041. PODAJĘ JAKO
 *   UWAGĘ PRAKTYCZNĄ.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,2817 / 16,8542. Rzeka WARTA.
 *   OD 1957 R. MIASTO LEŻY W GRANICACH WIELKOPOLSKIEGO
 *   PARKU NARODOWEGO.
 *
 * ⚠⚠ ODMIANA:
 *   D. do PUSZCZYKOWA · Ms. w PUSZCZYKOWIE ·
 *   N. Puszczykowem. Przymiotnik: PUSZCZYKOWSKI.
 *   ⚠ Puszczykówko: D. Puszczykówka,
 *     Ms. w PUSZCZYKÓWKU (nie „w Puszczykówkach").
 *   ⚠⚠⚠ NAZWA POCHODZI OD PUSZCZYKA (sowy), NIE OD
 *   PUSZCZY. NIE SUGERUJĘ ETYMOLOGII OD PUSZCZY,
 *   choć miasto leży w parku narodowym.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — PUSZCZYKÓWKO i STARE PUSZCZYKOWO to CZĘŚCI tego
 *     miasta,
 *   — ⚠⚠⚠ ISTNIEJE TEŻ ODRĘBNA WIEŚ PUSZCZYKOWO
 *     w wielkopolskiem oraz PUSZCZYKOWO-ZABORZE —
 *     ROZGRANICZAM W FAQ,
 *   — NIWKA to także dzielnica Sosnowca [SP].
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — NIWKA: 1302 r.
 *   — PIERWSZA WZMIANKA O PUSZCZYKOWIE: 5 listopada
 *     1387 r. (zapis „Posczucowo", spór graniczny
 *     z Wirami).
 *   — ŚCIEŻKA STATUSU: do 1935 r. wsie sołeckie →
 *     od 1936 r. gmina → od 1956 r. osada miejska →
 *     1962 r. MIASTO.
 *     ⚠⚠⚠ DWIE RÓŻNE DATY DZIENNE PRAW MIEJSKICH:
 *     7 albo 18 lipca 1962 r. [SP]. PODAJĘ TYLKO ROK
 *     I MÓWIĘ, ŻE ŹRÓDŁA RÓŻNIĄ SIĘ O DZIEŃ.
 *     ⚠⚠ TEJ ROZBIEŻNOŚCI NIE ROBIĘ KĄTEM.
 *   ⚠⚠⚠ RÓŻNICY 575 LAT (1387 → 1962) NIE ROBIĘ KĄTEM
 *     — figura „x lat bez statusu miejskiego" zajęta
 *     (Szklarska Poręba). PODAJĘ DATY, BEZ MORAŁU.
 *   — KOLEJ: linia z 1856 r., przystanek 1897 r.,
 *     drewniany dworzec 1905 r.
 *     ⚠⚠ ODSTĘPU 41 LAT NIE ROBIĘ KĄTEM — figury
 *     „najpierw droga, potem ruch" (Pieńsk) i „mały
 *     dystans, duży koszt" (Pleszew) zajęte.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TRZY WARSTWY WIEKU W ODWROTNEJ
 *   KOLEJNOŚCI DO WAŻNOŚCI:
 *   MUZEUM–PRACOWNIA LITERACKA ARKADEGO FIEDLERA:
 *     — WILLA: zbudowana 1926 r., kupiona przez Fiedlera
 *       w 1946 r.,
 *     — MUZEUM: otwarte 1974 r. — 48 LAT PO POWSTANIU
 *       BUDYNKU,
 *     — NAJSŁYNNIEJSZY EKSPONAT, replika „Santa Marii"
 *       w skali 1:1: odsłonięta 12 MAJA 2008 R. —
 *       34 LATA PO OTWARCIU MUZEUM I 82 LATA PO
 *       ZBUDOWANIU WILLI.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1974 − 1926 = 48;
 *   2008 − 1974 = 34; 2008 − 1926 = 82.
 *   ⚠⚠⚠ NAJSTARSZE SĄ ŚCIANY, MŁODSZA INSTYTUCJA,
 *   NAJMŁODSZE TO, PO CO SIĘ TU PRZYJEŻDŻA.
 *   ⚠ WYMIARY REPLIKI (26 × 7 m) [SP — jedno źródło].
 *     PODAJĘ Z ZASTRZEŻENIEM ALBO POMIJAM.
 *   ⚠⚠ LICZBY REPLIK W „OGRODZIE KULTUR" NIE PODAJĘ —
 *     żadne źródło jej nie podaje.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — Arkady Fiedler: 32 książki, przekłady na 23 języki,
 *   nakład ponad 10 mln egzemplarzy; muzeum odwiedza
 *   ok. 20 tys. osób rocznie.
 *   ⚠⚠ RELACJI 32 : 23 NIE ROBIĘ KĄTEM.
 * — ⚠ ODLEGŁOŚCI: jedno źródło podaje „ok. 12 km
 *   na południe od Poznania", bez wskazania konwencji.
 *   NIE PODAJĘ.
 *
 * KĄT: INSTYTUCJA MŁODSZA OD SWOICH ŚCIAN
 * — o tym, że sposób gotowania jest młodszy od kuchni
 * i dlatego można go zmienić dziś. Kąt z Puszczykowa:
 * willa z 1926 r., muzeum z 1974, najsłynniejszy
 * eksponat z 2008.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że willa powstała w 1926 r., muzeum otwarto
 *   w 1974 r., a jego najsłynniejszy eksponat odsłonięto
 *   w 2008 r.,
 * — ŻE NAJSTARSZE SĄ ŚCIANY, MŁODSZA JEST INSTYTUCJA,
 *   A NAJMŁODSZE TO, PO CO SIĘ TU PRZYJEŻDŻA. TO JEST
 *   RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI WARSTWY UKŁADAJĄ SIĘ IDENTYCZNIE:
 *   pomieszczenie jest najstarsze, sposób gotowania
 *   młodszy, a danie, z którego jesteś najbardziej
 *   zadowolona — najmłodsze ze wszystkiego,
 * — ⚠⚠ ŻE Z TEGO WYNIKA RZECZ PRAKTYCZNA: nie trzeba
 *   czekać na remont, żeby zmienić sposób gotowania.
 *   Ściany zostają, metoda jest młodsza i przenośna,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wypisz trzy rzeczy od
 *   najstarszej — pomieszczenie, sposób, ulubione danie.
 *   Zobacz, że najlepsze jest najmłodsze. To znaczy,
 *   że kolejne dobre może powstać szybko,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem to jednak
 *   pomieszczenie blokuje. Kuchnia bez sprawnego
 *   piekarnika naprawdę ogranicza, i wtedy ściany mają
 *   znaczenie. Rozróżnik: czy brakuje Ci sprzętu,
 *   czy tylko pomysłu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie należy do
 *   warstwy metody, nie ścian — wchodzi do starej
 *   kuchni bez remontu. MÓWIĘ WPROST, że niczego nie
 *   wyremontuje i nie naprawi kuchni, której problemem
 *   jest samo pomieszczenie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NOWE NA STARYM NOŚNYM — kąt zajęty
 *   (Czarnków). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam stara część NIOSŁA nowe;
 *   tu warstwy wieku po prostu układają się odwrotnie
 *   niż warstwy ważności, a jedna nie podtrzymuje
 *   drugiej. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZERWA NIE KASUJE POCZĄTKU — kąt zajęty
 *   (Trzcianka).
 * — ⚠⚠⚠ ZERO NOWSZE I WIĘKSZE, A NIŻSZE — kąt zajęty
 *   (Międzylesie).
 * — ⚠⚠ ZERO STAŻ NIE PRZEKŁADA SIĘ NA ROZMIAR — kąt
 *   zajęty (Nowogrodziec).
 * — ⚠⚠ ZERO UŻYWANE OD DAWNA, ZAPISANE PÓŹNO — kąt
 *   zajęty (Zawidów).
 * — ⚠⚠ ZERO NAJSTARSZE LEŻY NA OBRZEŻU — kąt zajęty
 *   (Kępno). ⚠⚠ TAM CHODZIŁO O MIEJSCE, TU O WARSTWY
 *   CZASU. PILNOWAĆ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO UZDROWISK I SANATORIÓW · ZERO
 *   POWODZI I POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dziennej daty praw miejskich.
 * — NIE ROBIĘ NIC z różnicy 575 lat.
 * — NIE PODAJĘ liczby replik w Ogrodzie Kultur.
 * — NIE SUGERUJĘ, że nazwa miasta pochodzi od puszczy.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Puszczykowo jest gminą miejską w powiecie
 *   poznańskim — miasto stanowi całą gminę; liczy 9 257
 *   mieszkańców (GUS, 31.12.2024) na 16,4 km², czyli
 *   564,8 osoby na kilometr kwadratowy,
 * — leży nad Wartą, a od 1957 r. w granicach
 *   Wielkopolskiego Parku Narodowego; jego części to
 *   Niwka, Puszczykówko i Stare Puszczykowo, a miasto
 *   ma dwa kody pocztowe,
 * — Niwka wzmiankowana jest w 1302 r., a Puszczykowo
 *   5 listopada 1387 r.; do 1935 r. były tu wsie
 *   sołeckie, od 1936 r. gmina, od 1956 r. osada
 *   miejska, a prawa miejskie miasto otrzymało w 1962 r.
 *   (źródła różnią się co do dnia),
 * — linię kolejową zbudowano w 1856 r., przystanek
 *   powstał w 1897 r., a drewniany dworzec w 1905 r.,
 * — Muzeum–Pracownia Literacka Arkadego Fiedlera działa
 *   od 1974 r. w willi z 1926 r., kupionej przez pisarza
 *   w 1946 r.; replikę „Santa Marii" w skali 1:1
 *   odsłonięto 12 maja 2008 r.,
 * — Arkady Fiedler napisał 32 książki, przetłumaczone
 *   na 23 języki, w nakładzie ponad 10 mln egzemplarzy;
 *   muzeum odwiedza około 20 tys. osób rocznie.
 */
export const PUSZCZYKOWO: CityContent = {
  slug: "puszczykowo",
  h1: "Thermomix Puszczykowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Puszczykowo — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Puszczykowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Puszczykowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Puszczykowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Puszczykowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, razem z Niwką, Puszczykówkiem i Starym Puszczykowem.",

  highlights: highlightyStandardowe("Puszczykowo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Willa z 1926. Muzeum z 1974. Eksponat z 2008.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Puszczykowie – jak wygląda prezentacja?",
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
      id: "mlodsza-od-scian",
      heading: "Instytucja młodsza od swoich ścian",
      paragraphs: [
        "Muzeum–Pracownia Literacka Arkadego Fiedlera w Puszczykowie mieści się w willi zbudowanej w 1926 roku. Pisarz kupił ją w 1946. Muzeum otwarto w 1974.",
        "A rzecz, po którą ludzie tu przyjeżdżają — replikę „Santa Marii” w skali jeden do jednego — odsłonięto 12 maja 2008 roku.",
        "Ułóżmy to od najstarszego: ściany 1926, instytucja 1974, atrakcja 2008. Czterdzieści osiem lat i jeszcze trzydzieści cztery. Najstarsze są mury, młodsza jest instytucja, a najmłodsze to, co ją rozsławiło.",
        "W kuchni warstwy układają się dokładnie tak samo i prawie nikt o tym nie myśli.",
        "Pomieszczenie jest najstarsze: te same ściany, ten sam układ, często te same szafki co dziesięć lat temu. Sposób gotowania jest młodszy — zmienił się, gdy urodziło się dziecko albo gdy ktoś zaczął pracować dalej od domu. A danie, z którego jesteś najbardziej zadowolona, jest prawie na pewno najmłodsze ze wszystkiego. Nauczyłaś się go dwa lata temu, nie dwadzieścia.",
        "Z tego wynika rzecz bardzo praktyczna, a zarazem trudna do przyjęcia: nie trzeba czekać na remont. Ściany zostaną takie, jakie są, a sposób gotowania jest od nich młodszy i przenośny. Można go zmienić w tym tygodniu, w tej samej kuchni, bez jednej wiertarki.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o moście, którego przęsło jest starsze od niego i przyjechało z innej rzeki. Tam stara część niosła nową. Tu jest inaczej — warstwy wieku po prostu układają się odwrotnie niż warstwy ważności, i jedna drugiej nie podtrzymuje.",
        "Ruch jest jeden i zajmuje dwie minuty. Wypisz trzy rzeczy w kolejności od najstarszej: pomieszczenie, sposób gotowania, ulubione danie. Zobacz, że najlepsze jest najmłodsze. To znaczy, że kolejne dobre też może powstać szybko.",
        "Uczciwie o drugiej stronie: czasem to jednak pomieszczenie blokuje. Kuchnia bez sprawnego piekarnika albo z jednym gniazdkiem naprawdę ogranicza i żadna metoda tego nie obejdzie. Rozróżnik jest jeden: czy brakuje Ci sprzętu, czy tylko pomysłu. Na to pierwsze remont pomaga. Na to drugie nie.",
        "I uczciwie o sprzęcie. Thermomix należy do warstwy metody, nie ścian — wchodzi do dwudziestoletniej kuchni bez remontu i to jest jego prawdziwa zaleta. Ale niczego nie wyremontuje. Jeśli problemem jest samo pomieszczenie — brak blatu, brak gniazdka, brak miejsca na naczynia — urządzenie tego nie naprawi i wolę powiedzieć to przed zakupem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Puszczykowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakiego dania nauczyliście się najpóźniej. To zwykle najlepszy punkt startu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Puszczykowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Puszczykowa",
      paragraphs: [
        "Puszczykowo jest gminą miejską w powiecie poznańskim — miasto stanowi całą gminę, bez części wiejskiej. Liczy 9 257 mieszkańców (GUS, 31.12.2024) na 16,4 kilometra kwadratowego, czyli pięćset sześćdziesiąt pięć osób na kilometr, co czyni je jednym z najluźniej zabudowanych miast, o jakich pisałam. Leży nad Wartą, a od 1957 roku w granicach Wielkopolskiego Parku Narodowego; jego części to Niwka, Puszczykówko i Stare Puszczykowo, a miasto ma dwa kody pocztowe. Niwkę wzmiankowano w 1302 roku, samo Puszczykowo 5 listopada 1387. Do 1935 były tu wsie sołeckie, od 1936 gmina, od 1956 osada miejska, a prawa miejskie miasto otrzymało w 1962 — źródła różnią się co do dnia. Linię kolejową zbudowano w 1856 roku, przystanek powstał w 1897, a drewniany dworzec w 1905. Muzeum–Pracownia Literacka Arkadego Fiedlera działa od 1974 roku w willi z 1926; pisarz napisał trzydzieści dwie książki, przetłumaczone na dwadzieścia trzy języki, w nakładzie ponad dziesięciu milionów egzemplarzy, a muzeum odwiedza około dwudziestu tysięcy osób rocznie.",
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

  districtsHeading: "Do których części Puszczykowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta: do Puszczykowa, Puszczykówka, Starego Puszczykowa i Niwki. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać, o którą część chodzi, i najlepiej dopisać kod pocztowy — miasto ma dwa. Uwaga też na nazwę: w wielkopolskiem jest jeszcze odrębna wieś Puszczykowo, niezwiązana z tym miastem.",
  ],
  districts: [],

  nearbyHeading: "Poza Puszczykowo też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Mosiny, Lubonia, Stęszewa, Kórnika i Poznania — wszędzie bezpłatnie, tak samo jak w samym Puszczykowie.",
  ],
  nearbyTowns: ["Mosina", "Luboń", "Stęszew", "Kórnik", "Poznań"],

  about: blokOMnie("do Puszczykowa", "w Puszczykowie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Puszczykowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — do Puszczykowa, Puszczykówka, Starego Puszczykowa i Niwki. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: miasto ma dwa kody pocztowe, więc warto podać ten właściwy. I w wielkopolskiem jest jeszcze odrębna wieś Puszczykowo, niezwiązana z tym miastem — przy szukaniu adresu łatwo je pomylić.",
    },
    ...faqWspolne("w Puszczykowie"),
    {
      question: "Chciałabym gotować inaczej, ale czekam na remont kuchni. Czy ma to sens?",
      answer:
        "Najczęściej nie ma. W Puszczykowie willa muzeum jest z 1926 roku, samo muzeum z 1974, a jego najsłynniejszy eksponat z 2008 — najstarsze są ściany, najmłodsze to, po co się tu przyjeżdża. W kuchni jest identycznie: pomieszczenie jest najstarsze, sposób gotowania młodszy, a danie, z którego jesteś najbardziej zadowolona, prawie na pewno najmłodsze. Metodę można zmienić w tym tygodniu, bez wiertarki. Wyjątek: jeśli brakuje Ci sprzętu, a nie pomysłu — wtedy remont faktycznie pomaga.",
    },
    {
      question: "Czy Thermomix wymaga przerobienia kuchni?",
      answer:
        "Nie. Wchodzi do dwudziestoletniej kuchni bez żadnego remontu i to jest jego prawdziwa zaleta — należy do warstwy metody, nie ścian. Potrzebuje tylko gniazdka i stałego miejsca na blacie. Ale powiem też drugą część: niczego nie wyremontuje. Jeśli problemem jest samo pomieszczenie — nie ma blatu, nie ma gdzie odstawić naczyń — urządzenie tego nie naprawi, a ja wolę o tym powiedzieć przed zakupem niż po.",
    },
  ],

  geo: { lat: 52.2817, lng: 16.8542 },
};
