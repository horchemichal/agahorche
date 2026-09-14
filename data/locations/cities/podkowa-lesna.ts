import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * PODKOWA LEŚNA — powiat grodziski, woj. mazowieckie.
 * GMINA MIEJSKA JEDNOSTKOWA — miasto i gmina to jedno.
 * 3 777 mieszkańców (GUS 31.12.2024), 10,1 km²,
 * 372,9 os./km². Kontrola drugim źródłem: 3 741 os., 10 km².
 * ⚠ LUDNOŚĆ PRAKTYCZNIE STAŁA: +0,4% w latach 2002–2024 —
 *   jedyne takie miasto w całej serii. DOBRY FAKT.
 *
 * ⚠⚠ TRZY REKORDY KRAJOWE — SPRAWDZONE:
 * — LESISTOŚĆ 77,2%, 13. miejsce w Polsce,
 * — ŚREDNIA POWIERZCHNIA MIESZKANIA 146,5 m² —
 *   1. MIEJSCE W POLSCE,
 *   ⚠⚠ TEJ DRUGIEJ LICZBY NIE UŻYWAM NA STRONIE.
 *   Sugerowałaby, że piszę do ludzi zamożnych, i brzmiałaby
 *   jak dobieranie klienta po majątku. TWARDA GRANICA.
 * — 233 podmioty gospodarcze na 1000 mieszkańców,
 *   23. miejsce w kraju. ⚠ TEŻ POMIJAM.
 *
 * ⚠ ODMIANA: nazwa DWUCZŁONOWA, oba człony się odmieniają —
 *   „do Podkowy Leśnej", „w Podkowie Leśnej",
 *   „podkowiański" (potwierdzone tytułem lokalnego pisma
 *   „Podkowiański Magazyn"). ⚠ NIGDY „w Podkowa Leśna".
 *
 * HISTORIA — MIASTO-OGRÓD ZAPROJEKTOWANE OD ZERA:
 * — 1861 Stanisław Lilpop kupuje dobra brwinowskie,
 * — 1909 nazwa „Podkowa Leśna" pojawia się po raz pierwszy
 *   w dokumentach,
 * — 1911 „Plan zbiorowy dóbr Podkowa Leśna",
 * — 1913 Tadeusz Tołwiński wykonuje pierwszy plan miasta,
 * — 9 KWIETNIA 1925 powstaje spółka „Miasto-Ogród Podkowa
 *   Leśna", nabywa 522 morgi gruntu — symboliczna data
 *   założenia,
 * — 1925 ANTONI JAWORNICKI (1886–1950) wykonuje plan
 *   urbanistyczny: układ koncentryczny, ulice rozchodzą się
 *   promieniście od stacji kolejki, półkolisty układ ulic
 *   w części północnej, ⚠⚠ 12-HEKTAROWY LAS ZACHOWANY
 *   W ŚRODKU MIASTA JAKO PARK, pasy zieleni wzdłuż linii
 *   kolejowej i cieków wodnych. Plan wykorzystywał istniejące
 *   drogi polne i leśne, cieki wodne i zalesione wydmy,
 *   ⚠ ORYGINAŁ PLANU SIĘ NIE ZACHOWAŁ, a realizacja
 *   odbiegała od projektu — NIE PISZĘ, że miasto wygląda
 *   dokładnie jak plan,
 * — maj 1925 początek budowy kolejki; koniec 1926 sprzedaż
 *   pierwszych parcel,
 * — 1927 uruchomienie EKD na odcinku Warszawa–Grodzisk
 *   Mazowiecki; dojazd do Warszawy w 41 minut, w szczycie
 *   co 10 minut; twórcy miasta przyjęli standard 30–45 minut
 *   dojazdu do pracy,
 * — 1930 — 98 domów,
 * — 1932–1933 budowa kościoła św. Krzysztofa,
 * — ALEJA LIPOWA z blisko setką starych lip,
 * — festiwal „OTWARTE OGRODY" od 2005 r.
 *
 * DZIŚ: usługi i mikroprzedsiębiorczość, BRAK PRZEMYSŁU.
 * Miasto nie ma terenów inwestycyjnych, 99,8% powierzchni
 * objęte miejscowymi planami zagospodarowania — ochrona
 * charakteru jest tu świadomą polityką. 32,22 ha terenów
 * zieleni w zarządzie miasta. Trzy przystanki kolejki
 * w granicach miasta. Rolnictwa praktycznie nie ma.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: nie potwierdzono wpisu.
 *   NIE WYMIENIAM ŻADNEGO.
 * ⚠ JEDNOSTEK POMOCNICZYCH NIE USTALONO (BIP zablokowany;
 *   prawdopodobnie ich nie ma) — districts PUSTE.
 *
 * KĄT: KWIAT — część rośliny, o której w kuchni prawie
 * się nie myśli, choć jemy ją codziennie.
 * Kąt od miasta, które zaprojektowano wokół zieleni:
 * dwanaście hektarów lasu zostawiono nietknięte w środku,
 * a jedna z głównych ulic to aleja blisko stu lip.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Podkowę narysowano, zanim ją zbudowano, i że plan
 *   Jawornickiego z 1925 r. zostawił dwanaście hektarów lasu
 *   w samym środku miasta oraz wykorzystał istniejące drogi,
 *   cieki i zalesione wydmy zamiast je zaorać,
 * — ŻE MIASTO MA ALEJĘ LIPOWĄ Z BLISKO SETKĄ STARYCH LIP,
 * — ⚠⚠ ŻE W KUCHNI KWIAT JEST CZĘŚCIĄ ROŚLINY, O KTÓREJ
 *   NIE MYŚLIMY — a jemy go stale, tylko pod innymi nazwami.
 *   TO JEST RDZEŃ TEKSTU,
 * — ⚠⚠ KONKRETY, KTÓRE ZASKAKUJĄ:
 *   — KALAFIOR I BROKUŁ TO NIEROZWINIĘTE KWIATOSTANY.
 *     Kupujemy je jako warzywo, a to jest kwiat przed
 *     otwarciem. Dlatego żółknący, „puszący się" kalafior
 *     to po prostu kwiatostan, który zaczął się rozwijać,
 *   — KARCZOCH to niedojrzały kwiatostan,
 *   — KAPARY to PĄKI KWIATOWE,
 *   — GOŹDZIKI to wysuszone PĄKI KWIATOWE drzewa,
 *   — SZAFRAN to ZNAMIONA SŁUPKA, czyli część kwiatu,
 *   TO JEST NAJUŻYTECZNIEJSZA CZĘŚĆ STRONY — pięć rzeczy,
 *   które każdy ma w kuchni i nikt nie wie, że to kwiaty,
 * — ŻE SĄ TEŻ KWIATY UŻYWANE WPROST JAKO KWIATY: kwiat lipy,
 *   czarny bez, nasturcja, kwiat cukinii,
 * — ŻE KWIATY MAJĄ WSPÓLNĄ CECHĘ PRAKTYCZNĄ: są delikatne
 *   i krótko trwałe; to, co z nich robimy, polega na
 *   ZATRZYMANIU ich stanu, a nie na obróbce,
 * — ŻE SEZON KWIATU JEST KRÓTKI — u lipy to kwestia dwóch
 *   tygodni w roku — i dlatego prawie wszystko, co z kwiatów,
 *   jest suszone albo zalane,
 * — ⚠ ETYKA ZBIERANIA: nie zbiera się w rezerwatach ani
 *   z zabytkowych alei, a przy drogach nie zbiera się
 *   w ogóle. MÓWIĘ TO WPROST I KRÓTKO,
 * — ⚠⚠ UCZCIWIE O SPRZĘCIE — DWIE GRANICE NARAZ:
 *   — THERMOMIX NICZEGO NIE SUSZY. Nie ma takiej funkcji,
 *     a suszenie kwiatów to powietrze, cień i czas,
 *   — KWIATY SĄ OSTATNIĄ RZECZĄ, KTÓRĄ WARTO MIKSOWAĆ.
 *     Noże zniszczą to, po co się je zbiera. Przy kwiatach
 *     urządzenie może najwyżej podgrzać płyn albo zrobić
 *     syrop; sam kwiat zostaje poza nim.
 *   TO JEST STRONA, NA KTÓREJ SPRZĘT MA NAJMNIEJ DO ROBOTY
 *   I MÓWIĘ TO OTWARCIE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ZIOŁOLECZNICZYCH.
 *   Lipa i czarny bez są obrosłe „domowymi lekami" —
 *   ZERO słowa o tym, na co pomagają, ZERO o napotności,
 *   przeziębieniu, odporności. TWARDA GRANICA —
 *   NAJWAŻNIEJSZA NA TEJ STRONIE.
 * — ⚠⚠ ŻADNYCH PORAD, KTÓRE KWIATY SĄ JADALNE, A KTÓRE NIE,
 *   I ŻADNEGO ZACHĘCANIA DO ZBIERANIA NIEZNANYCH ROŚLIN.
 *   Wymieniam wyłącznie te, które kupuje się w sklepie
 *   albo które są powszechnie znane. TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PRZEPISÓW I PROPORCJI NA SYROPY.
 * — ⚠ ZERO TEMATU NALEWEK I ALKOHOLU. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ŻADNYCH LICZB O ZAMOŻNOŚCI MIASTA.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych i wyznaniowych.
 * — ZERO sugestii, że to miasto bogatych — piszę o zieleni
 *   i o planie, nie o domach i nie o dochodach.
 * — ZERO zachęcania do zbierania w rezerwacie i w alei.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ZIOŁA ŚWIEŻE KONTRA SUSZONE" (Ciechanowiec, Skórcz)
 *   i „ZIOŁA I WŁASNE UPRAWY" (Mikołów) dotyczą LIŚCI
 *   I ZIÓŁ. TUTAJ chodzi o KWIAT jako część rośliny —
 *   w tym o kwiaty, których nikt za kwiaty nie uważa.
 * — „HERBATY, NAPARY I GORĄCE NAPOJE" (Głuchołazy)
 *   dotyczy TEMPERATURY WODY DO ZALANIA.
 * — „SUSZARNIE I SUSZONE OWOCE" (Szydłów) dotyczą OWOCÓW.
 * — „MIÓD" (Kluczbork) dotyczy MIODU.
 * — „OWOCE LEŚNE" (Czarna Woda) dotyczą JAGÓD.
 * — „SUROWE KONTRA GOTOWANE" (Biała Rawska) dotyczy
 *   OBRÓBKI CIEPLNEJ.
 * TUTAJ chodzi o JEDNĄ CZĘŚĆ ROŚLINY i o to, że jemy
 * ją codziennie, nie wiedząc o tym.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, na co pomagają lipa i czarny bez.
 * — NIE DORADZAM, które kwiaty są jadalne.
 * — NIE ZACHĘCAM do zbierania w rezerwacie ani w alei.
 * — NIE PODAJĘ liczb o zamożności miasta.
 * — NIE TWIERDZĘ, że miasto wygląda dokładnie jak plan
 *   Jawornickiego — oryginał się nie zachował,
 *   a realizacja od niego odbiegała.
 * — NIE PISZĘ o nalewkach.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Podkowa Leśna liczy 3 777 mieszkańców (GUS,
 *   31.12.2024) na 10,1 km², jest gminą miejską
 *   jednostkową, a jej liczba ludności od 2002 roku
 *   praktycznie się nie zmieniła; lesistość wynosi tu
 *   77,2 procent, co daje trzynaste miejsce w Polsce,
 * — nazwa „Podkowa Leśna" pojawiła się w dokumentach
 *   w 1909 roku, pierwszy plan miasta wykonał w 1913 roku
 *   Tadeusz Tołwiński, a 9 kwietnia 1925 roku powstała
 *   spółka „Miasto-Ogród Podkowa Leśna", która nabyła
 *   pięćset dwadzieścia dwie morgi gruntu,
 * — plan urbanistyczny wykonał w 1925 roku Antoni
 *   Jawornicki: ulice rozchodzą się promieniście od stacji
 *   kolejki, w części północnej biegną półkoliście,
 *   a w samym środku miasta zachowano dwanaście hektarów
 *   lasu jako park; pasy zieleni poprowadzono wzdłuż linii
 *   kolejowej i cieków wodnych, a plan wykorzystywał
 *   istniejące drogi polne i leśne, cieki i zalesione wydmy,
 * — budowę kolejki zaczęto w maju 1925 roku, pierwsze
 *   parcele sprzedano pod koniec 1926, a w 1927 uruchomiono
 *   Elektryczne Koleje Dojazdowe na odcinku Warszawa–Grodzisk
 *   Mazowiecki; dojazd do Warszawy trwał czterdzieści jeden
 *   minut, a twórcy miasta przyjęli założenie, że praca
 *   ma być oddalona o trzydzieści do czterdziestu pięciu
 *   minut; w 1930 roku stało tu dziewięćdziesiąt osiem
 *   domów,
 * — w mieście jest Aleja Lipowa z blisko setką starych lip,
 *   miasto zarządza ponad trzydziestoma dwoma hektarami
 *   terenów zieleni, a od 2005 roku odbywa się tu festiwal
 *   „Otwarte Ogrody", podczas którego mieszkańcy otwierają
 *   swoje ogrody dla przyjezdnych.
 */
export const PODKOWA_LESNA: CityContent = {
  slug: "podkowa-lesna",
  h1: "Thermomix Podkowa Leśna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Podkowa Leśna — przedstawiciel i prezentacja",
  seoDescription:
    "Thermomix w Podkowie Leśnej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Podkowa Leśna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Podkowie Leśnej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Podkowy Leśnej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Podkowa Leśna"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kalafior i brokuł to kwiatostany. Kupujemy kwiat, zanim zdąży się otworzyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Podkowie Leśnej – jak wygląda prezentacja?",
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
      id: "kwiat",
      heading: "Kwiat — część rośliny, o której nie myślimy, a jemy ją codziennie",
      paragraphs: [
        "Podkowę Leśną narysowano, zanim ją zbudowano. Plan urbanistyczny wykonał w 1925 roku Antoni Jawornicki: ulice rozchodzą się promieniście od stacji kolejki, w części północnej biegną półkoliście, a w samym środku miasta zostawiono dwanaście hektarów lasu jako park. Plan wykorzystywał istniejące drogi polne i leśne, cieki wodne i zalesione wydmy — zamiast je zaorać i zacząć od czystej kartki. Do dziś lesistość wynosi tu ponad trzy czwarte powierzchni, a jedna z ulic to Aleja Lipowa z blisko setką starych lip.",
        "Miasto zbudowane wokół drzew jest dobrym miejscem, żeby powiedzieć rzecz, która w kuchni umyka wszystkim. Kwiat jest tą częścią rośliny, o której nie myślimy — a jemy go stale, tylko pod innymi nazwami.",
        "Kalafior i brokuł to nierozwinięte kwiatostany. Kupujemy je jako warzywo i traktujemy jak warzywo, a to jest kwiat, złapany tuż przed otwarciem. Kiedy kalafior zaczyna się „puszyć”, robi się luźny i żółknie, nie psuje się w potocznym sensie — on po prostu zaczyna kwitnąć, czyli robi to, do czego był stworzony. Ta jedna informacja tłumaczy całe jego zachowanie w kuchni i w lodówce.",
        "Karczoch to również niedojrzały kwiatostan, tylko zbierany jeszcze wcześniej. Kapary to pąki kwiatowe. Goździki — te z piernika i z kompotu — to wysuszone pąki kwiatowe drzewa. A szafran to znamiona słupka, czyli fragment wnętrza kwiatu; stąd jego cena, bo zbiera się go pęsetą.",
        "Pięć rzeczy, które ma w kuchni prawie każdy, i wszystkie są kwiatami. Sama uważam to za jedną z ciekawszych rzeczy, jakich się nauczyłam przy gotowaniu.",
        "Są oczywiście i takie kwiaty, które występują jako kwiaty: kwiat lipy, czarny bez, nasturcja, kwiat cukinii.",
        "Wszystkie mają jedną wspólną cechę praktyczną, o której warto wiedzieć, zanim się do nich zabierze. Kwiat jest delikatny i krótko trwały — i to, co się z nim robi, polega prawie zawsze na zatrzymaniu jego stanu, a nie na obróbce. Suszy się go albo zalewa. Nie dusi, nie smaży długo, nie gotuje godzinami, bo z tego, po co się go zbierało, nic wtedy nie zostaje.",
        "Sezon też jest krótki. U lipy to kwestia mniej więcej dwóch tygodni w roku. Dlatego praktycznie wszystko, co robimy z kwiatów, jest robione po to, żeby przetrwały poza swoje dwa tygodnie.",
        "Jedna uwaga, którą uważam za obowiązkową: w rezerwatach się nie zbiera, z zabytkowych alei też nie, a przy ruchliwych drogach nie zbiera się w ogóle. To nie jest kwestia przepisów, tylko przyzwoitości i zdrowego rozsądku.",
        "Teraz uczciwie o sprzęcie i jest to strona, na której ma on najmniej do roboty w całym serwisie.",
        "Po pierwsze: Thermomix niczego nie suszy. Nie ma takiej funkcji i nie będzie miał. Suszenie kwiatów to powietrze, cień, przewiew i czas — czyli dokładnie to, czego w zamkniętym naczyniu nie ma.",
        "Po drugie, i ważniejsze: kwiaty są ostatnią rzeczą, którą warto miksować. Noże rozbiją dokładnie to, po co się je w ogóle zbiera. Przy kwiatach urządzenie może najwyżej podgrzać płyn albo rozpuścić cukier na syrop — a sam kwiat i tak zostaje poza nim, w słoiku albo na sicie. I to jest w porządku. Nie każde dobre jedzenie musi przechodzić przez sprzęt.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Podkowie Leśnej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, żebyśmy zrobiły coś z warzyw, które akurat masz — powiedz przy umawianiu. Kalafior i brokuł są przy tym urządzeniu wdzięczne i pokazują je od dobrej strony.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Podkowie Leśnej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla podkowiańskiej rodziny",
      paragraphs: [
        "Podkowa Leśna liczy blisko trzy tysiące osiemset mieszkańców na dziesięciu kilometrach kwadratowych, jest gminą miejską jednostkową, a jej liczba ludności od 2002 roku praktycznie się nie zmieniła — co w tej części Mazowsza jest rzadkością. Lesistość wynosi tu ponad siedemdziesiąt siedem procent, czyli trzynaste miejsce w Polsce. Nazwa „Podkowa Leśna” pojawiła się w dokumentach w 1909 roku, pierwszy plan miasta wykonał w 1913 roku Tadeusz Tołwiński, a 9 kwietnia 1925 roku powstała spółka „Miasto-Ogród Podkowa Leśna”, która nabyła pięćset dwadzieścia dwie morgi gruntu. Plan urbanistyczny wykonał w 1925 roku Antoni Jawornicki: ulice rozchodzą się promieniście od stacji kolejki, w części północnej biegną półkoliście, a w samym środku miasta zachowano dwanaście hektarów lasu jako park; pasy zieleni poprowadzono wzdłuż linii kolejowej i cieków wodnych. Budowę kolejki zaczęto w maju 1925 roku, pierwsze parcele sprzedano pod koniec 1926, a w 1927 uruchomiono Elektryczne Koleje Dojazdowe na odcinku Warszawa–Grodzisk Mazowiecki; dojazd do Warszawy trwał czterdzieści jeden minut, bo twórcy miasta przyjęli założenie, że praca ma być oddalona o trzydzieści do czterdziestu pięciu minut. W 1930 roku stało tu dziewięćdziesiąt osiem domów. Dziś miasto zarządza ponad trzydziestoma dwoma hektarami terenów zieleni, ma Aleję Lipową z blisko setką starych lip, a od 2005 roku odbywa się tu festiwal „Otwarte Ogrody”, podczas którego mieszkańcy otwierają swoje ogrody dla przyjezdnych.",
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

  districtsHeading: "Do których części Podkowy Leśnej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do wszystkich trzech okolic przystanków kolejki, do ulic rozchodzących się promieniście od stacji i do części północnej z półkolistym układem ulic.",
    "Przy umawianiu wystarczy podać ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Podkowę Leśną też przyjadę",
  nearbyParagraphs: [
    "Brwinów, Milanówek, Grodzisk Mazowiecki, Nadarzyn, Pruszków i Żabia Wola są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Brwinów", "Milanówek", "Grodzisk Mazowiecki", "Pruszków"],

  about: blokOMnie("do Podkowy Leśnej", "w Podkowie Leśnej", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Podkowy Leśnej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — Podkowa Leśna jest gminą miejską jednostkową, więc chodzi po prostu o wszystkie jej ulice. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Podkowie Leśnej"),
    {
      question: "Dlaczego kalafior się „puszy” i żółknie?",
      answer:
        "Bo kalafior i brokuł to nierozwinięte kwiatostany — kupujemy kwiat złapany tuż przed otwarciem. Kiedy róża kalafiora robi się luźna i żółknie, roślina po prostu zaczyna kwitnąć. Ta jedna informacja tłumaczy właściwie całe jego zachowanie w kuchni i w lodówce.",
    },
    {
      question: "Czy Thermomix wysuszy kwiaty albo zioła?",
      answer:
        "Nie — nie ma takiej funkcji i mieć nie będzie. Suszenie to powietrze, cień, przewiew i czas, czyli dokładnie to, czego w zamkniętym naczyniu brakuje. Kwiatów nie warto też miksować, bo noże rozbijają to, po co się je zbiera. Przy nich urządzenie może najwyżej podgrzać płyn albo rozpuścić cukier na syrop.",
    },
  ],

  geo: { lat: 52.12, lng: 20.7266 },
};
