import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * STAWISKI — gmina miejsko-wiejska w powiecie kolneńskim.
 * MIASTO 1 991, GMINA 5 512 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 13,2 km², GMINY 165,6 km².
 * ⚠⚠ 54,4% PRACUJĄCYCH W ROLNICTWIE — TO JEST PODSTAWA KĄTA.
 * ⚠ Notatka projektowa podawała 2 200 — ZAWYŻONE.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 *
 * PRAWA MIEJSKIE — ⚠ SPRZECZNOŚĆ ŹRÓDEŁ:
 * Wieś lokowana 1407 r. przez KSIĘCIA JANUSZA I MAZOWIECKIEGO
 * (nadanie 20 włók). PRAWA MIEJSKIE OK. 1688 r. od FORTUNATA
 * ZAMOYSKIEGO, łowczego ziemi łomżyńskiej, który przejściowo
 * próbował nazwać miasto „Fortunatowo" — nazwa się nie przyjęła.
 * UTRATA PRAW 1870 r., PRZYWRÓCENIE 1921 r.
 * ⚠ Część źródeł podaje 1407 jako rok praw miejskich —
 * to najpewniej lokacja WSI, nie miasta. Piszę o obu osobno.
 * ⚠ KRÓLA, KTÓRY WYDAŁ PRZYWILEJ, ANI RODZAJU PRAWA
 * NIE PODAJĘ.
 * ⚠ PRZYCZYNY UTRATY PRAW W 1870 NIE PODAJĘ.
 *
 * GEOGRAFIA: miasto leży NAD RZEKĄ DZIERZBIĄ, „na wzgórzach
 * nad strugą Dzierzbia, przy bitym trakcie z Łomży
 * do Szczuczyna". Ważny szlak handlowy do PRUS WSCHODNICH.
 * ⚠ Nadanie z 1407 dotyczyło ziem nad SKRODĄ — relacji
 * między obiema rzekami nie ustalono, więc wymieniam
 * tylko Dzierzbię.
 * PRZYNALEŻNOŚĆ: historycznie MAZOWSZE, ziemia łomżyńska.
 *
 * ⚠⚠ RZEMIOSŁO — DRUGA PODSTAWA KĄTA:
 * Stawiski słynęły z WYROBU KOŻUCHÓW, GARBARSTWA, WYROBU
 * SUKNA I KAPELUSZY. „Ośrodek handlowy znany z futer, tkanin
 * i kapeluszy". Upadek po pożarach, zwłaszcza po POŻARZE
 * 1813 r. W latach 90. XIX w. działał tu MŁYN WODNY.
 *
 * ZABYTKI: KOŚCIÓŁ ŚW. ANTONIEGO PADEWSKIEGO 1788–1822,
 * PÓŹNY BAROK. DAWNY KLASZTOR FRANCISZKANÓW (zakon sprowadzony
 * przez Zamoyskiego w 1688 r.), dziś plebania.
 * KOŚCIÓŁ NAWIEDZENIA NMP W ROMANACH 1858–1863, NEOGOTYK.
 * TRAPEZOWATY RYNEK — dawny plac targowy, dziś park miejski.
 * Parafia Stawiski erygowana 5 MAJA 1903 r.
 * Ludność historyczna: 1808 — ok. 1 547; 1857 — 2 570.
 * W 2016 r. obchodzono 590-lecie.
 * ⚠ JUBILEUSZU NIE UŻYWAM — liczony od 1426 r., co nie zgadza
 * się z żadną z pozostałych dat.
 * STAWISKI NIE NALEŻĄ DO CITTASLOW (nie potwierdzono).
 * ⚠ NIE PRZYPISUJĘ Stawiskom produktu z Listy Produktów
 * Tradycyjnych — nie ma takiego.
 *
 * KĄT: GOTOWANIE DLA KOGOŚ, KTO PRACUJE FIZYCZNIE.
 * Kąt od gminy, w której ponad połowa pracujących zajmuje się
 * rolnictwem, i od miasta, które przez wieki żyło z kożuchów.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że cała popularna wiedza o jedzeniu pisana jest dla ludzi
 *   pracujących przy biurku, a to jest inny tryb życia
 *   niż praca fizyczna,
 * — CZEGO POTRZEBUJE TAKI POSIŁEK: ma nasycić na długo,
 *   ma być gotowy o określonej porze, ma się dać odgrzać,
 *   i ma być łatwy do zjedzenia po zmęczeniu,
 * — że sałatka nie zaspokoi kogoś, kto przez sześć godzin
 *   pracował na zewnątrz — i to nie jest kwestia gustu,
 *   tylko realnego wydatku,
 * — CO SPRAWDZA SIĘ NAPRAWDĘ: dania z tłuszczem i skrobią
 *   razem, zupy gęste, wszystko z kaszą i ziemniakami,
 *   dania duszone,
 * — że drugi posiłek, zabierany ze sobą, rządzi się osobnymi
 *   zasadami: musi znieść leżenie i temperaturę otoczenia,
 * — że pora posiłku jest ważniejsza niż jego skład — obiad
 *   o siedemnastej dla kogoś, kto wstał o piątej, to nie jest
 *   obiad, tylko kolacja,
 * — ŻE OSOBA GOTUJĄCA TEŻ CZĘSTO JEST ZMĘCZONA, i to jest
 *   pomijane najczęściej,
 * — UCZCIWIE: to urządzenie nie skraca gotowania tak bardzo,
 *   jak się mówi, ale przesuwa je w czasie — można je nastawić
 *   wcześniej i wrócić do gotowego,
 * — i że dla domu, w którym ktoś wraca zmęczony o stałej porze,
 *   to jest ważniejsze niż wszystkie funkcje razem wzięte.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 *   ZERO kalorii, ZERO makroskładników, ZERO „zapotrzebowania
 *   energetycznego" w liczbach. Piszę o sytości i o smaku,
 *   nigdy o dietetyce. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO WARTOŚCIOWANIA PRACY. Nie piszę, że praca fizyczna
 *   jest cięższa ani lepsza — piszę, że jest INNA i wymaga
 *   innego jedzenia. Nigdy protekcjonalnie.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia, powstań.
 * — ZERO przyczyn utraty praw miejskich w 1870 r.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania — przy temacie pracy
 *   pilnuję tego szczególnie.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Jedzenie zabierane
 * ze sobą do pracy" dotyczy pakowania drugiego śniadania.
 * „Gotowanie dla ekipy" dotyczy liczby jedzących. „Obiad
 * zjadany PRZED wyjściem" dotyczy pory. „Zwykły wtorek"
 * (Miłakowo) dotyczy okazji. „Smalec i pasty do chleba"
 * dotyczą jednego produktu. Tutaj chodzi o TRYB ŻYCIA
 * DOMOWNIKÓW i o to, jak wyznacza on skład i porę posiłku.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM daty praw miejskich.
 * — NIE PODAJĘ króla, który wydał przywilej, ani rodzaju prawa.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE WYMIENIAM rzeki Skrody.
 * — NIE UŻYWAM daty jubileuszu 590-lecia.
 * — NIE PRZYPISUJĘ Stawiskom produktu z Listy Produktów
 *   Tradycyjnych.
 * — NIE MYLĘ STAWISK ze STAWISZYNEM (wielkopolskie)
 *   ani z BUDAMI STAWISKIMI (wieś w tej samej gminie).
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 991, gmina 5 512 mieszkańców na 165,6 km²;
 *   w rolnictwie pracuje tu 54,4% zatrudnionych,
 * — wieś lokował w 1407 r. książę Janusz I Mazowiecki,
 *   nadając dwadzieścia włók; prawa miejskie miasto otrzymało
 *   około 1688 r. od Fortunata Zamoyskiego, łowczego ziemi
 *   łomżyńskiej, który bezskutecznie próbował nazwać je
 *   Fortunatowem; prawa utracono w 1870 r. i przywrócono
 *   w 1921,
 * — miasto leży nad Dzierzbią, na wzgórzach przy dawnym
 *   trakcie z Łomży do Szczuczyna, prowadzącym do Prus
 *   Wschodnich; historycznie to Mazowsze, ziemia łomżyńska,
 * — Stawiski słynęły z wyrobu kożuchów, garbarstwa, sukna
 *   i kapeluszy; rzemiosło podupadło po pożarach, zwłaszcza
 *   po tym z 1813 r.; w latach dziewięćdziesiątych XIX w.
 *   działał tu młyn wodny,
 * — późnobarokowy kościół świętego Antoniego Padewskiego
 *   z lat 1788–1822 i dawny klasztor franciszkanów, których
 *   Zamoyski sprowadził w 1688 r.; neogotycki kościół
 *   Nawiedzenia NMP w Romanach z lat 1858–1863,
 * — trapezowaty rynek, dawny plac targowy, jest dziś parkiem
 *   miejskim; parafię erygowano 5 maja 1903 r.
 */
export const STAWISKI: CityContent = {
  slug: "stawiski",
  h1: "Thermomix Stawiski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Stawiski — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Stawiskach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stawiski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Stawiskach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Stawisk z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Stawiski i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pora posiłku bywa ważniejsza niż jego skład.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Stawiskach – jak wygląda prezentacja?",
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
      id: "praca-fizyczna",
      heading: "Ponad połowa pracuje na roli — czyli o gotowaniu dla kogoś, kto wraca zmęczony",
      paragraphs: [
        "W gminie Stawiski pięćdziesiąt cztery procent pracujących zajmuje się rolnictwem. To ponad połowa i to jest liczba, która mówi o kuchni więcej niż jakikolwiek przepis. Samo miasteczko przez wieki żyło zresztą z pracy rąk: słynęło z wyrobu kożuchów, z garbarstwa, z sukna i kapeluszy, a nad Dzierzbią pracował młyn wodny.",
        "Chcę napisać o czymś, o czym nie pisze prawie żaden serwis kulinarny, bo prawie wszystkie pisane są przez ludzi pracujących przy biurku: jak gotować dla kogoś, kto pracuje fizycznie.",
        "To nie jest kwestia cięższej ani lepszej pracy. To jest inny tryb dnia i inne potrzeby, a wiedza o jedzeniu, którą znajdziecie w internecie, jest do niego po prostu nieprzystosowana.",
        "Taki posiłek musi spełnić cztery warunki naraz. Ma nasycić na długo, a nie na dwie godziny. Ma być gotowy o określonej porze, bo ktoś wraca wtedy, kiedy wraca. Ma się dać odgrzać, bo terminy się przesuwają. I ma być łatwy do zjedzenia po zmęczeniu — bo człowiek naprawdę zmęczony nie ma cierpliwości do dania, które trzeba składać na talerzu.",
        "Sałatka nie zaspokoi kogoś, kto przez sześć godzin pracował na dworze. To nie jest kwestia gustu ani przyzwyczajenia — to jest kwestia realnego wydatku, którego nie da się pokryć liśćmi. Ta sama sałatka jest doskonała dla kogoś, kto siedzi cały dzień, i to jest właśnie ta różnica.",
        "Sprawdza się natomiast, niezmiennie i we wszystkich kuchniach świata, jedno połączenie: tłuszcz razem ze skrobią. Ziemniaki ze skwarkami, kasza z sosem, gęsta zupa z chlebem, wszystko duszone, wszystko jednogarnkowe. Nie dlatego, że to „chłopskie jedzenie”, tylko dlatego, że działa i było wielokrotnie sprawdzone przez ludzi, którzy nie mieli marginesu błędu.",
        "Osobna sprawa to posiłek zabierany ze sobą — on rządzi się własnymi zasadami, bo musi znieść kilka godzin leżenia i temperaturę otoczenia. Zimą co innego, latem co innego, i to jest temat na osobną rozmowę.",
        "Rzecz, którą uważam za najważniejszą i najczęściej pomijaną: pora posiłku bywa ważniejsza niż jego skład. Obiad o siedemnastej dla kogoś, kto wstał o piątej, nie jest obiadem — jest kolacją, a przez cały dzień w środku była dziura. Dom, w którym ktoś pracuje fizycznie, potrzebuje raczej dwóch porządnych posiłków we właściwych momentach niż jednego wystawnego wieczorem.",
        "I rzecz druga, o której się nie mówi wcale: osoba gotująca też często jest zmęczona. Bardzo dużo porad kulinarnych zakłada kogoś wypoczętego, kto z przyjemnością spędzi wieczór przy garnkach. W wielu domach tak nie jest i wtedy prostota przepisu nie jest oznaką braku ambicji, tylko warunkiem, żeby obiad w ogóle powstał.",
        "Teraz uczciwie o sprzęcie. On nie skraca gotowania aż tak bardzo, jak mówią reklamy — zupa i tak musi się ugotować, a to trwa tyle, ile trwa.",
        "Robi natomiast coś innego i akurat w takim domu ważniejszego: przesuwa gotowanie w czasie. Można je nastawić rano albo w południe, wyjść, i wrócić do gotowego, bo urządzenie pilnuje się samo i nie wymaga, żeby ktoś stał obok. Dla domu, w którym ktoś wraca zmęczony o stałej porze, to jest, moim zdaniem, ważniejsze niż wszystkie funkcje razem wzięte — i o tym warto rozmawiać zamiast o liczbie programów.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Stawiskach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, o której u Was jada się obiad i kto wtedy jest w domu. Od tego zależy, co warto pokazać — inne dania mają sens przy stałej porze, a inne przy zmiennej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Stawiskach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla stawiskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko dwa tysiące mieszkańców, a cała gmina przeszło pięć i pół tysiąca na stu sześćdziesięciu pięciu kilometrach kwadratowych; w rolnictwie pracuje tu ponad połowa zatrudnionych. Wieś lokował w 1407 roku książę Janusz I Mazowiecki, nadając dwadzieścia włók, a prawa miejskie Stawiski otrzymały około 1688 roku od Fortunata Zamoyskiego, łowczego ziemi łomżyńskiej — próbował on wtedy przemianować miasto na Fortunatowo, ale nazwa się nie przyjęła. Prawa utracono w 1870 roku i przywrócono w 1921. Miasto leży nad Dzierzbią, na wzgórzach przy dawnym trakcie z Łomży do Szczuczyna, prowadzącym dalej do Prus Wschodnich; historycznie to Mazowsze, ziemia łomżyńska. Stawiski słynęły z wyrobu kożuchów, z garbarstwa, sukna i kapeluszy — rzemiosło podupadło po pożarach, zwłaszcza po tym z 1813 roku. Późnobarokowy kościół świętego Antoniego Padewskiego wznoszono w latach 1788–1822, a franciszkanów sprowadził tu Zamoyski w 1688; w Romanach stoi neogotycki kościół z lat 1858–1863. Trapezowaty rynek, dawny plac targowy, jest dziś parkiem miejskim.",
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

  districtsHeading: "Do których części gminy Stawiski dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Stawiski też przyjadę",
  nearbyParagraphs: [
    "Kolno, Szczuczyn, Jedwabne, Grajewo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kolno", "Szczuczyn", "Jedwabne", "Grajewo"],

  about: blokOMnie("do Stawisk", "w Stawiskach i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Stawisk bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Stawiski w powiecie kolneńskim to nie Stawiszyn w Wielkopolsce.",
    },
    ...faqWspolne("w Stawiskach"),
    {
      question: "Czym różni się gotowanie dla kogoś, kto pracuje fizycznie?",
      answer:
        "Taki posiłek musi spełnić cztery warunki naraz: nasycić na długo, być gotowy o określonej porze, dać się odgrzać i być łatwy do zjedzenia po zmęczeniu. Sprawdza się przede wszystkim tłuszcz razem ze skrobią — ziemniaki, kasze, gęste zupy, dania duszone. Sałatka nie zaspokoi kogoś, kto pracował sześć godzin na dworze, i to nie jest kwestia gustu.",
    },
    {
      question: "Co jest ważniejsze — skład posiłku czy jego pora?",
      answer:
        "Bardzo często pora. Obiad o siedemnastej dla kogoś, kto wstał o piątej, nie jest obiadem, tylko kolacją — a przez cały dzień w środku była dziura. Dom, w którym ktoś pracuje fizycznie, potrzebuje raczej dwóch porządnych posiłków we właściwych momentach niż jednego wystawnego wieczorem.",
    },
    {
      question: "Czy Thermomix skraca gotowanie?",
      answer:
        "Nie aż tak bardzo, jak mówią reklamy — zupa i tak musi się ugotować. Robi coś innego i w takim domu ważniejszego: przesuwa gotowanie w czasie. Można nastawić rano, wyjść i wrócić do gotowego, bo urządzenie nie wymaga, żeby ktoś stał obok.",
    },
  ],

  geo: { lat: 53.3767, lng: 22.1583 },
};
