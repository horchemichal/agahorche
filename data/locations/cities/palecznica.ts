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
 * PAŁECZNICA — gmina wiejska, powiat proszowicki, Płaskowyż
 * Proszowicki / Wyżyna Miechowska. 3 436 mieszkańców (31.12.2024,
 * GUS) na 47,9 km², 73 os./km². CZTERNAŚCIE SOŁECTW.
 * NAJMNIEJSZA GMINA POWIATU PROSZOWICKIEGO (11,57% jego powierzchni).
 *
 * OŚ STRONY: GMINA NA TRZY I PÓŁ TYSIĄCA LUDZI, KTÓRA WYGRYWA
 * OGÓLNOPOLSKIE RANKINGI. 5. miejsce w Polsce w wykorzystaniu środków
 * UE (2014–2021), 4. miejsce w Polsce wśród gmin wiejskich —
 * liderzy inwestycji (2020–2022), 1. miejsce w województwie
 * w wydatkach inwestycyjnych na mieszkańca (2022 i 2023). Jest tu
 * własna SZKOŁA MUZYCZNA I STOPNIA im. Stanisława Moniuszki
 * (121 uczniów, 11 specjalności) — w gminie liczącej 3,4 tys. osób.
 *
 * DRUGA OŚ: ZIEMIA. Ponad 90% gruntów ornych w klasach I–IIIb,
 * czarnoziemy. Uprawy: zboża, okopowe, WARZYWA KORZENIOWE
 * (cebula, ziemniaki, buraki, pietruszka) i TYTOŃ.
 *
 * TRZECIA: MAŁOPOLSKA DROGA ŚW. JAKUBA przechodzi przez Pałecznicę;
 * tutejszy kościół św. Jakuba Apostoła Starszego jest stacją
 * pielgrzymkową. Etap 6 kończy się w Pałecznicy.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 3 436
 *   mieszkańców, 73 os./km², średni wiek 41,4 lat; SPADEK O 6,6%
 *   w latach 2002–2024; 45 urodzeń, 50 zgonów (−5); saldo migracji −2,
 * — POWIERZCHNIA: 47,9 km²; 11,57% powierzchni powiatu
 *   proszowickiego. NAJMNIEJSZA GMINA POWIATU (powiat ma 415 km²
 *   i 6 gmin). ⚠️ Rankingu „najmniejsza w Małopolsce" NIE POTWIERDZIŁAM
 *   — nie piszę tego,
 * — POŁOŻENIE (palecznica.pl): styk dwóch mezoregionów — Wyżyny
 *   Miechowskiej i Płaskowyżu Proszowickiego, w makroregionie Niecki
 *   Nidziańskiej; teren „rozcięty licznymi dolinami i wąwozami";
 *   najwyższy punkt 332,3 m n.p.m. w Pałecznicy-Organach; brak jezior
 *   i większych cieków,
 * — SOŁECTWA (14): Bolów, Czuszów, Gruszów, Ibramowice,
 *   Lelowice-Kolonia, Łaszów, Nadzów, Niezwojowice, Pałecznica,
 *   Pamięcice, Pieczonogi, Solcza, Sudołek, Winiary. Największe:
 *   Czuszów 611, Pałecznica 503, Nadzów 457; najmniejsze: Bolów 82,
 *   Solcza 99, Łaszów 100 (31.12.2022, dane UG),
 * — GLEBY (Strategia gminy): PONAD 90% GRUNTÓW ORNYCH W KLASACH
 *   I–IIIb; czarnoziemy właściwe i zdegradowane, gleby brunatne,
 *   mady, lessy,
 * — UPRAWY (palecznica.pl): zboża, rośliny okopowe, WARZYWA i TYTOŃ;
 *   współcześnie nacisk na warzywa korzeniowe — cebula, ziemniaki,
 *   buraki, pietruszka. Historycznie (za Długoszem) gmina znana
 *   z produkcji warzyw i mięsa. Działa Związek Producentów Trzody
 *   Chlewnej,
 * — GOSPODARKA: 369 podmiotów REGON (GUS 2024); bezrobocie 5,2%;
 *   SALDO DOJAZDÓW DO PRACY −30 (111 wyjeżdża, 81 przyjeżdża),
 * — RANKINGI („Do Celu" nr 21 i 22, za rankingami „Wspólnoty"):
 *   5. miejsce w Polsce — wykorzystanie środków UE (2014–2021);
 *   4. miejsce w Polsce wśród gmin wiejskich — liderzy inwestycji
 *   (2020–2022); 1. miejsce w województwie — wydatki majątkowe
 *   inwestycyjne na 1 mieszkańca (2022 i 2023); „Lider powiatu
 *   proszowickiego" w Rankingu Gmin Małopolski 2024,
 * — OZE: gmina jest LIDEREM partnerskiego projektu OZE obejmującego
 *   41 GMIN województwa małopolskiego (wartość 68 991 097,56 zł);
 *   Inteligentne Centrum Zarządzania Energią; elektryczny autobus
 *   szkolny; I miejsce w plebiscycie „Eko-Hero Małopolski 2024"
 *   w kategorii ochrony powietrza,
 * — KOŚCIÓŁ św. Jakuba Apostoła Starszego w Pałecznicy: pierwsza
 *   wzmianka 1325–1327; w XVI w. zamieniony na zbór kalwiński,
 *   zwrócony katolikom 1584, rekonsekracja 1695; przebudowa
 *   neogotycka na przełomie XIX/XX w.; ambona z początku XVIII w.,
 * — MAŁOPOLSKA DROGA ŚW. JAKUBA: Sandomierz → Rynek Główny
 *   w Krakowie, 192 km, pierwszy odcinek otwarty 25 października 2008;
 *   kościół w Pałecznicy jest stacją pielgrzymkową, etap 6 kończy się
 *   w Pałecznicy, etap 7 prowadzi do Niegardowa,
 * — SZKOŁA MUZYCZNA I STOPNIA im. Stanisława Moniuszki w Pałecznicy
 *   — 121 uczniów, 11 specjalności instrumentalnych (Raport 2025),
 * — HISTORIA: ślady osadnictwa sprzed ok. 6000 lat; wieś wzmiankowana
 *   1337 jako własność Mszczuja, wojewody sandomierskiego; w 1794 r.
 *   Kościuszko z oddziałami przebywał tu PRZED bitwą pod Racławicami;
 *   siedziba gminy od końca XIX w., status utracony w 1975, odzyskany
 *   w 1991,
 * — IV MAŁOPOLSKIE ŚWIĘTO BOBU: 21 lipca 2024, SUDOŁEK,
 * — DOŻYNKI GMINNE: 18 sierpnia 2024, Centrum Wsi Pałecznica;
 *   starostowie Monika Sosnowska z Sudołka i Piotr Płaszewski
 *   z Pałecznicy,
 * — KGW potwierdzone w 11 sołectwach: Bolów, Czuszów, Gruszów,
 *   Ibramowice, Nadzów, Niezwojowice, Pałecznica, Pamięcice,
 *   Pieczonogi, Solcza, Sudołek,
 * — SĄSIEDZI: Racławice (pow. miechowski), Radziemice i Proszowice
 *   (proszowicki) oraz Skalbmierz i Kazimierza Wielka (woj.
 *   świętokrzyskie) — gmina leży na granicy dwóch województw,
 * — TRANSPORT: „PRZEZ GMINĘ NIE PRZEBIEGA ŻADNA DROGA WOJEWÓDZKA"
 *   (Raport o stanie gminy za 2025, cytat wprost). Obsługa: drogi
 *   powiatowe (m.in. 1253K Skalbmierz–Nadzów–Czuszów) i gminne;
 *   w 2025 trzy linie autobusowe.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — RANKINGU „NAJMNIEJSZA GMINA MAŁOPOLSKI". Nie potwierdzony —
 *   piszę tylko o powiecie,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Baza niedostępna,
 * — DOŻYNEK 2025 I 2026. Nie potwierdzone — podaję rok 2024,
 * — LICZBY GOSPODARSTW I ŚREDNIEJ POWIERZCHNI. Nie potwierdzone,
 * — NAJBLIŻSZEJ STACJI KOLEJOWEJ. Nie potwierdzona,
 * — ODLEGŁOŚCI DO KRAKOWA. Źródła podają 34, 36 i 43 km — sprzeczność,
 *   więc piszę „kilkadziesiąt kilometrów", bez liczby,
 * — DWORÓW W GMINIE. Nie potwierdzone,
 * — OSÓB URODZONYCH W GMINIE. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — IBRAMOWICE (gm. Pałecznica) ≠ IMBRAMOWICE Z KLASZTOREM
 *   NORBERTANEK, które leżą w gminie Trzyciąż, powiat olkuski.
 *   To najczęstszy błąd przy tej gminie,
 * — BITWA POD RACŁAWICAMI NIE ODBYŁA SIĘ W TEJ GMINIE. Racławice
 *   to sąsiednia gmina w powiecie miechowskim. Potwierdzone jest
 *   tylko, że Kościuszko przebywał tu PRZED bitwą,
 * — NIE MA TU DRÓG WOJEWÓDZKICH. DW 783 kończy się relacją
 *   Racławice–Skalbmierz i kusi, by założyć, że przecina Pałecznicę,
 * — TRZY RÓŻNE LICZBY „PODMIOTÓW GOSPODARCZYCH" (369 REGON,
 *   ~191 gmina, ~183 Raport) — to różne definicje,
 * — JAKUB KUROŃ NIE JEST Z PAŁECZNICY — był gościem Święta Bobu.
 */

export const PALECZNICA: CityContent = {
  slug: "palecznica",
  h1: "Thermomix Pałecznica – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Pałecznica — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Pałecznica: bezpłatna prezentacja TM7 u Ciebie w kuchni — Pałecznica, Czuszów, Nadzów, Sudołek, Winiary. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pałecznica — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Pałecznica. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Pałecznica przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich czternastu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 14 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Pałecznica – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Pałecznicy, jak w Czuszowie, Nadzowie, Sudołku czy Winiarach.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
        "Sołectw jest tu czternaście, a niektóre bardzo małe — w Bolowie mieszkają osiemdziesiąt dwie osoby. Dojeżdżam do wszystkich tak samo i bez dopłat.",
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
      heading: "Trzy i pół tysiąca ludzi, a rankingi ogólnopolskie",
      paragraphs: [
        "Pałecznica jest najmniejszą gminą powiatu proszowickiego — trzy tysiące czterysta trzydzieści sześć osób na niecałych czterdziestu ośmiu kilometrach kwadratowych, siedemdziesiąt trzy osoby na kilometr. I jednocześnie gminą, która regularnie wygrywa rankingi ogólnopolskie.",
        "Piąte miejsce w Polsce w wykorzystaniu środków unijnych przez samorządy w latach dwa tysiące czternaście–dwadzieścia jeden. Czwarte miejsce w kraju wśród gmin wiejskich w zestawieniu liderów inwestycji. Pierwsze miejsce w województwie w wydatkach inwestycyjnych na mieszkańca, dwa lata z rzędu. To nie są liczby, których się spodziewasz po gminie tej wielkości.",
        "Jest tu też rzecz, która mnie zaskoczyła najbardziej: własna Szkoła Muzyczna pierwszego stopnia imienia Stanisława Moniuszki, sto dwudziestu jeden uczniów, jedenaście specjalności instrumentalnych. W gminie liczącej trzy i pół tysiąca mieszkańców.",
        "Do tego energetyka. Pałecznica jest liderem partnerskiego projektu odnawialnych źródeł energii obejmującego czterdzieści jeden gmin województwa małopolskiego — nie uczestnikiem, tylko liderem. Ma własne centrum zarządzania energią i elektryczny autobus szkolny, a w dwa tysiące dwudziestym czwartym roku wygrała plebiscyt „Eko-Hero Małopolski” w kategorii ochrony powietrza.",
        "Pod tym wszystkim jest ziemia i to ona jest tu najmocniejsza. Ponad dziewięćdziesiąt procent gruntów ornych mieści się w klasach od pierwszej do trzeciej bé — to są czarnoziemy, lessy i mady, czyli jedne z najlepszych gleb w Polsce. Uprawia się tu zboża, rośliny okopowe, warzywa korzeniowe — cebulę, ziemniaki, buraki, pietruszkę — i tytoń.",
        "A przez Pałecznicę przechodzi Małopolska Droga świętego Jakuba, prowadząca z Sandomierza na Rynek Główny w Krakowie. Tutejszy kościół świętego Jakuba Apostoła Starszego jest stacją pielgrzymkową i tu kończy się szósty etap trasy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Pałecznica?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo: Pałecznica, Czuszów, Nadzów, Sudołek, Winiary, Niezwojowice, Pamięcice, Pieczonogi, Ibramowice, Gruszów, Lelowice-Kolonia, Łaszów, Solcza albo Bolów. Dopłaty za odległość nie ma w żadnym z nich.",
        "Przez gminę nie przechodzi żadna droga wojewódzka — dojazd prowadzi drogami powiatowymi i gminnymi. Dla mnie to nie problem, ale przy umawianiu warto podać punkt orientacyjny, jeśli mieszkacie na uboczu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Pałecznica"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Warzywa korzeniowe, tytoń i kuchnia z własnego pola",
      paragraphs: [
        "W gminie, gdzie ponad dziewięćdziesiąt procent gruntów ornych mieści się w klasach od pierwszej do trzeciej bé, jedzenie zaczyna się na polu, a nie w sklepie. Cebula, ziemniaki, buraki, pietruszka — to są uprawy, na których stoi tutejsze rolnictwo, i to samo trafia potem do domowej kuchni.",
        "Warzywa korzeniowe mają jedną cechę: wymagają obróbki. Trzeba je obrać, pokroić, ugotować, zmiksować albo utrzeć. To jest robota, której nikt nie lubi, i to jest dokładnie ta część, którą urządzenie zabiera — rozdrabnianie, gotowanie w stałej temperaturze i mieszanie bez pilnowania.",
        "Konkretnie: krem z buraka, zupa z pietruszki, purée, sos, pasta warzywna, przecier do słoika. Wszystko to jest miksowanie plus podgrzewanie, a przy jednym naczyniu robi się to jedno po drugim, bez mycia trzech garnków.",
        "Czego nie zrobi: nie obierze. Kto ma swoje warzywa, ten wie, że obieranie jest tą godziną, która i tak zostanie, i nie będę obiecywać inaczej.",
        "Druga rzecz to bilans dojazdów — z gminy wyjeżdża do pracy tylko o trzydzieści osób więcej, niż przyjeżdża. To znaczy, że wielu ludzi pracuje na miejscu, w gospodarstwie albo blisko, a rytm dnia wyznacza sezon, nie godziny biurowe. Wtedy obiad, który gotuje się sam i czeka ciepły, ma sens zupełnie praktyczny.",
        "Trzecia to koła gospodyń — działają w jedenastu z czternastu sołectw. Kto piecze na dożynki albo na konkurs, ten wie, ile godzin idzie na samo wyrobienie ciasta. Urządzenie zabiera z tego wyrabianie i mielenie, czyli najbardziej męczącą część.",
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
    heading: "Pałecznica i gotowanie — gmina z własnym świętem bobu",
    paragraphs: [
      "Niewiele gmin w Polsce ma własne święto poświęcone jednemu warzywu. Pałecznica ma: Małopolskie Święto Bobu, którego czwarta edycja odbyła się dwudziestego pierwszego lipca dwa tysiące dwudziestego czwartego roku w Sudołku. Gmina promuje bób jako warzywo, które w tym regionie dopiero zyskuje popularność — czyli nie odcina kuponów od tradycji, tylko ją buduje.",
      "Podstawą jest jednak ziemia. Ponad dziewięćdziesiąt procent gruntów ornych w klasach od pierwszej do trzeciej bé, czarnoziemy i lessy. Uprawia się tu zboża, rośliny okopowe, warzywa korzeniowe i tytoń, a już Długosz odnotował te okolice jako znane z produkcji warzyw i mięsa.",
      "Powiem uczciwie, czego nie sprawdziłam. Nie potwierdziłam, czy z tej gminy pochodzi jakikolwiek wpis na ministerialną Listę Produktów Tradycyjnych — baza ministerialna była dla mnie niedostępna. Nie wymyślę więc żadnej „potrawy pałecznickiej”.",
      "To, co potwierdzone, to bardzo gęsta sieć kół gospodyń: działają w jedenastu z czternastu sołectw. Dożynki gminne osiemnastego sierpnia dwa tysiące dwudziestego czwartego roku odbyły się w Centrum Wsi Pałecznica, a starostowali im Monika Sosnowska z Sudołka i Piotr Płaszewski z Pałecznicy.",
      "Dla urządzenia najwięcej pracy jest przy warzywach i przy cieście. Kremy, zupy, purée, pasty, przeciery do słoików — rozdrabnianie plus podgrzewanie bez pilnowania. Ciasto drożdżowe i mielenie maku to druga rzecz, ta, przy której na dożynki boli ręka.",
      "Czego nie zrobi: nie obierze warzyw i nie upiecze. Zrobi ciasto, zrobi masę i zrobi zupę — obieranie i piekarnik zostają po Waszej stronie.",
    ],
  },

  districtsHeading: "Gdzie w gminie Pałecznica dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich czternastu sołectw: Pałecznicy, Czuszowa, Nadzowa, Sudołka, Winiar, Niezwojowic, Pamięcic, Pieczonóg, Ibramowic, Gruszowa, Lelowic-Kolonii, Łaszowa, Solczy i Bolowa. Dopłaty za odległość nie ma nigdzie.",
    "Sołectwa są tu bardzo różnej wielkości: Czuszów liczy sześćset jedenaście osób, sama Pałecznica pięćset trzy, a Bolów osiemdziesiąt dwie. Do najmniejszych dojeżdżam dokładnie tak samo jak do największych.",
    "Gmina leży na styku Wyżyny Miechowskiej i Płaskowyżu Proszowickiego, na terenie rozciętym dolinami i wąwozami; najwyższy punkt to trzysta trzydzieści dwa metry w Pałecznicy-Organach. To najmniejsza gmina powiatu proszowickiego — zajmuje niecałe dwanaście procent jego powierzchni.",
    "Przez gminę nie przechodzi żadna droga wojewódzka; dojazd prowadzi drogami powiatowymi i gminnymi, w tym trasą Skalbmierz–Nadzów–Czuszów. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Jedno rozstrzygnięcie, które robię celowo: Ibramowice w tej gminie to nie są Imbramowice z klasztorem norbertanek — tamte leżą w gminie Trzyciąż, w powiecie olkuskim. To najczęstsza pomyłka przy tej gminie, więc przy umawianiu i tak dopytam.",
  ],
  districts: [
    "Pałecznica",
    "Czuszów",
    "Nadzów",
    "Sudołek",
    "Winiary",
    "Niezwojowice",
    "Pamięcice",
    "Pieczonogi",
    "Ibramowice",
    "Gruszów",
    "Lelowice-Kolonia",
    "Łaszów",
    "Solcza",
    "Bolów",
  ],

  nearbyHeading: "Racławice, Radziemice i Proszowice też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Pałecznica graniczy z Racławicami w powiecie miechowskim, z Radziemicami i Proszowicami w proszowickim oraz ze Skalbmierzem i Kazimierzą Wielką już w województwie świętokrzyskim. Do żadnej z małopolskich gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy i nie masz pewności, czy to jeszcze Pałecznica, czy już Radziemice albo Racławice — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Racławice",
    "Radziemice",
    "Proszowice",
    "Miechów",
    "Słomniki",
    "Koszyce",
    "Kraków",
  ],

  about: blokOMnie("do gminy Pałecznica", "w powiecie proszowickim"),

  faq: [
    {
      question: "Uprawiamy warzywa korzeniowe. Czy to się przyda?",
      answer:
        "Bardzo, bo warzywa korzeniowe wymagają obróbki, a to jest właśnie ta część, którą urządzenie zabiera. Kremy z buraka, zupa z pietruszki, purée, pasty, przeciery do słoików — rozdrabnianie plus gotowanie w stałej temperaturze, bez stania przy garnku i bez mycia trzech naczyń. Obierania natomiast nie zabierze; ta godzina zostaje po Waszej stronie i nie będę obiecywać inaczej.",
    },
    ...faqWspolne("w gminie Pałecznica"),
    {
      question: "Mieszkam w Bolowie. To bardzo mała wieś — dojedziesz?",
      answer:
        "Dojadę bez dopłaty, tak samo jak do Pałecznicy czy Czuszowa. Obsługuję wszystkie czternaście sołectw, a to, że w Bolowie mieszkają osiemdziesiąt dwie osoby, nie zmienia dla mnie niczego poza tym, że wcześniej ułożę trasę. Napiszcie tylko punkt orientacyjny, bo dróg wojewódzkich tu nie ma i nawigacja czasem prowadzi dziwnie.",
    },
    {
      question: "Chodzi o Ibramowice z klasztorem?",
      answer:
        "Nie — i to jest najczęstsza pomyłka przy tej gminie. Ibramowice w gminie Pałecznica to jedno z czternastu tutejszych sołectw. Imbramowice z klasztorem norbertanek, pisane przez „m”, leżą w gminie Trzyciąż w powiecie olkuskim, po drugiej stronie Krakowa. Do obu dojeżdżam, ale to dwie różne trasy.",
    },
  ],

  geo: { lat: 50.3, lng: 20.3167 },
};
