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
 * NOWE BRZESKO — gmina miejsko-wiejska, powiat proszowicki, nad Wisłą.
 * 5 625 mieszkańców (31.12.2024, GUS) na 54,4 km², 104 os./km².
 * MIASTO NOWE BRZESKO: 1 603 osoby.
 *
 * OŚ STRONY: SZEŚĆSET SIEDEMDZIESIĄT LAT OPACTWA W HEBDOWIE.
 * Norbertanie (premonstratensi) sprowadzeni z czeskiego Strahowa
 * przez rycerzy Strzeżysława i Wrocisława; kościół wzniesiony
 * w 1149 r.; opat hebdowski miał pierwszeństwo wśród opatów z Polski,
 * Czech i Węgier. Klasztor władał przez ok. 670 lat (1149–1818/19)
 * DWIEMA TRZECIMI obszaru dzisiejszej gminy. Kasata przez władze
 * rosyjskie; od 1832 kościół parafialny, OD 1949 R. PIJARZY.
 *
 * DRUGA OŚ: MIASTO, KTÓRE WRÓCIŁO PO 141 LATACH. Lokacja 1279
 * (opat Florian), utrata praw 1870, ODZYSKANIE 1 STYCZNIA 2011.
 *
 * TRZECIA: CZARNOZIEM PROSZOWICKI — 86,5% powierzchni gminy
 * to użytki rolne.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 5 625
 *   mieszkańców, 104 os./km², średni wiek 42,7 lat; SPADEK O 2,4%
 *   w latach 2002–2024; 37 urodzeń, 69 zgonów (−32). Miasto Nowe
 *   Brzesko: 1 603 osoby, 220,8 os./km²,
 * — PRAWA MIEJSKIE (nowe-brzesko.pl): miasto od 1279 r. (lokacja
 *   przez opata Floriana), UTRATA 1870, ODZYSKANIE 1 STYCZNIA 2011
 *   (rozporządzenie RM z lipca 2010),
 * — NAZWA GMINY: do 1954 r. GMINA GRUSZÓW,
 * — HEBDÓW (pijarzy.pl, nowe-brzesko.pl): norbertanie sprowadzeni
 *   z czeskiego STRAHOWA przez rycerzy Strzeżysława i Wrocisława;
 *   KOŚCIÓŁ WZNIESIONY 1149; opat hebdowski miał pierwszeństwo wśród
 *   opatów z Polski, Czech i Węgier; klasztor władał ok. 670 lat
 *   (1149–1818/19) DWIEMA TRZECIMI obszaru dzisiejszej gminy;
 *   KASATA przez władze rosyjskie 1818/1819; OD 1832 kościół
 *   parafialny; OD 1949 R. PARAFIĘ PROWADZĄ PIJARZY. Obecny kościół
 *   XVII–XVIII w., krypty z pochówkami opatów; zespół (klasztor
 *   z poł. XIII w., kościół, SPICHLERZ Z 1760 R.) wpisany do rejestru
 *   zabytków 12 STYCZNIA 1972. Rzeźba Madonny z Dzieciątkiem
 *   z XIV–XV w. W zabudowaniach działa Dom Rekolekcyjny św. Norberta,
 * — NOWE BRZESKO: zachowany średniowieczny OWALNICOWY układ
 *   urbanistyczny, XVII-wieczny kościół parafialny z drewnianą
 *   dzwonnicą, XVIII-wieczna figura św. Floriana,
 * — „RZECZPOSPOLITA PARTYZANCKA" lipiec 1944: zasadzka pod Grębocinem
 *   23–24 lipca, ZAJĘCIE NOWEGO BRZESKA 25 LIPCA, walka 27 lipca,
 *   koncentracja sił w Hebdowie 30 lipca (3. kompania IV/120. pułku AK),
 * — PAŁACE: Pławowice (z parkiem) i Śmiłowice (dziś obiekt hotelowy),
 * — KS. INFUŁAT JERZY BRYŁA: ur. 24 maja 1928 w Nowym Brzesku,
 *   święcenia 29.06.1952, od 1975 proboszcz na Zwierzyńcu w Krakowie,
 *   protonotariusz apostolski 1997, duszpasterz głuchoniemych,
 * — ROLNICTWO: 86,5% powierzchni gminy to użytki rolne; CZARNOZIEMY
 *   PROSZOWICKIE, długi okres wegetacji; silne rozdrobnienie ziemi,
 * — GOSPODARKA: 579 podmiotów REGON; bezrobocie ok. 5,5%; SALDO
 *   DOJAZDÓW DO PRACY −269; „NOWOBRZESKI OBSZAR GOSPODARCZY" —
 *   ponad 30 ha przy ul. Przemysłowej,
 * — TRANSPORT: DROGA KRAJOWA NR 79 (Kraków–Sandomierz) przez gminę
 *   (potwierdzone w komunikatach o zimowym utrzymaniu dróg),
 * — KGW: „Lilia i Topór" Nowe Brzesko, KGW Szpitary („Tradycyjna
 *   kuchnia Pierwszych Piastów na Ziemi Nowobrzeskiej"), KGW Hebdów,
 *   KGW „Śmiłowiczanki",
 * — LKS „Nadwiślanka" Nowe Brzesko — jubileusz 105-lecia.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — PROMU ANI MOSTU PRZEZ WISŁĘ. NIE POTWIERDZONE. Wyszukiwanie
 *   w serwisie gminy nie dało żadnego wyniku o przeprawie. Nie piszę
 *   o niej ani słowa — wysłanie kogoś na nieistniejący prom nad Wisłę
 *   byłoby najgorszym możliwym błędem,
 * — NUMERÓW DRÓG WOJEWÓDZKICH. Nie potwierdzone,
 * — STACJI KOLEJOWEJ. Nie potwierdzona,
 * — ODLEGŁOŚCI DO KRAKOWA. Strona gminy podaje raz 36 km, raz 25 km
 *   — sprzeczność, więc nie podaję liczby,
 * — DOKŁADNEJ LICZBY SOŁECTW. Źródła podają 14, 15 albo 16 zależnie
 *   od tego, czy liczą miasto i czy dzielą Hebdów. Piszę opisowo,
 * — WEZWANIA KOŚCIOŁA PARAFIALNEGO W NOWYM BRZESKU. Nie potwierdzone,
 * — UPRAWY TYTONIU. Nie potwierdzona,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Baza niedostępna,
 * — DATY I MIEJSCA OSTATNICH DOŻYNEK GMINNYCH. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — NOWE BRZESKO ≠ BRZESKO. Brzesko to miasto powiatowe w powiecie
 *   brzeskim, ok. 60 km dalej, przy A4, znane z browaru Okocim.
 *   To jest główna pułapka tej strony,
 * — NORBERTANIE = PREMONSTRATENSI, ten sam zakon. Dziś w Hebdowie
 *   są PIJARZY, nie norbertanie,
 * — HEBDÓW STARY ≠ HEBDÓW KOLONIA — dwa sołectwa, jedna wieś,
 * — DATA KASATY: 1818 (gmina) vs 1819 (pijarzy) — piszę „1818/1819",
 * — DO 1954 GMINA NAZYWAŁA SIĘ GRUSZÓW,
 * — „NADWIŚLANKA" to nazwa klubu sportowego, nie dowód na przeprawę.
 */

export const NOWE_BRZESKO: CityContent = {
  slug: "nowe-brzesko",
  h1: "Thermomix Nowe Brzesko – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Nowe Brzesko — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Nowe Brzesko (pow. proszowicki): bezpłatna prezentacja TM7 u Ciebie w kuchni — Nowe Brzesko, Hebdów, Gruszów, Pławowice. Tel. 517 185 691.",
  ogTitle: "Thermomix Nowe Brzesko — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Nowe Brzesko. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Nowe Brzesko w powiecie proszowickim przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do miasta i do wszystkich sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("miasto i wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Nowe Brzesko – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Nowym Brzesku, jak w Hebdowie, Gruszowie, Pławowicach czy Śmiłowicach.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
        "Jedna rzecz, którą wyjaśniam przy każdym telefonie: to jest Nowe Brzesko w powiecie proszowickim, a nie Brzesko przy autostradzie. Do obu dojeżdżam, ale to dwie zupełnie różne trasy i dwa różne dni.",
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
      heading: "Opactwo, które przez sześćset siedemdziesiąt lat rządziło tą ziemią",
      paragraphs: [
        "W Hebdowie, we wsi tej gminy, stoi zespół klasztorny, którego historia zaczyna się w tysiąc sto czterdziestym dziewiątym roku. Wtedy wzniesiono tu kościół dla norbertanów — zwanych też premonstratensami — sprowadzonych z czeskiego Strahowa przez rycerzy Strzeżysława i Wrocisława. Opat hebdowski miał pierwszeństwo wśród opatów z Polski, Czech i Węgier.",
        "I teraz liczba, która robi wrażenie: przez około sześćset siedemdziesiąt lat, do kasaty na przełomie tysiąc osiemset osiemnastego i dziewiętnastego roku, ten klasztor władał dwiema trzecimi obszaru dzisiejszej gminy. Nie fragmentem — dwiema trzecimi.",
        "Po kasacie, od tysiąc osiemset trzydziestego drugiego roku, kościół pełni funkcję parafialnego, a od tysiąc dziewięćset czterdziestego dziewiątego prowadzą go pijarzy — czyli już nie norbertanie. Obecny kościół pochodzi z siedemnastego i osiemnastego wieku, pod nim są krypty z pochówkami opatów, a cały zespół z klasztorem z połowy trzynastego wieku i spichlerzem z tysiąc siedemset sześćdziesiątego roku trafił do rejestru zabytków dwunastego stycznia tysiąc dziewięćset siedemdziesiątego drugiego.",
        "Samo Nowe Brzesko też ma swoją datę powrotu. Miastem było od tysiąc dwieście siedemdziesiątego dziewiątego roku, z lokacji opata Floriana, prawa straciło w tysiąc osiemset siedemdziesiątym, a odzyskało pierwszego stycznia dwa tysiące jedenastego. Sto czterdzieści jeden lat przerwy. Zachował się średniowieczny owalnicowy układ urbanistyczny, siedemnastowieczny kościół z drewnianą dzwonnicą i osiemnastowieczna figura świętego Floriana.",
        "Latem tysiąc dziewięćset czterdziestego czwartego roku okolica była areną „Rzeczypospolitej Partyzanckiej”. Dwudziestego trzeciego i czwartego lipca zasadzka pod Grębocinem, dwudziestego piątego zajęcie Nowego Brzeska, trzydziestego koncentracja sił partyzanckich w Hebdowie.",
        "A pod tym wszystkim leży ziemia, która jest tu głównym bogactwem: czarnoziem proszowicki. Osiemdziesiąt sześć i pół procent powierzchni gminy to użytki rolne. Gospodarstwa są przy tym mocno rozdrobnione — to nie są wielkie farmy, tylko wiele małych pól.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Nowe Brzesko?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość: Nowe Brzesko, Hebdów, Gruszów, Pławowice, Śmiłowice, Sierosławice, Mniszów, Przybysławice, Rudno Dolne, Kuchary, Majkowice, Grębocin, Szpitary. Dopłaty za odległość nie ma w żadnej z nich.",
        "Jeśli mieszkacie w Hebdowie, warto dopisać, czy chodzi o Stary, czy o Kolonię — to dwa osobne sołectwa, choć jedna wieś.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Nowe Brzesko"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Czarnoziem, drobne pola i kuchnia z własnego ogrodu",
      paragraphs: [
        "Osiemdziesiąt sześć i pół procent powierzchni tej gminy to użytki rolne, a ziemia to czarnoziem proszowicki — jedna z lepszych gleb w Polsce, z długim okresem wegetacji. Gospodarstwa są przy tym drobne i rozdrobnione, więc to jest rolnictwo, w którym warzywa i owoce w dużej mierze trafiają na własny stół.",
        "Kuchnia w takim domu robi wszystko od podstaw. Nie otwiera się słoika kupionego w sklepie — robi się własny. I to jest dokładnie ta robota, którą urządzenie zabiera w całości: rozdrabnianie, gotowanie w stałej temperaturze i mieszanie, którego trzeba pilnować godzinami, żeby nie przywarło do dna.",
        "Konkretnie: przecier pomidorowy, sos, powidła, dżemy, mus, prażone warzywa do słoików, pasty. Wszystko to jest miksowanie plus podgrzewanie. Przy jednym naczyniu robi się to seryjnie, jedno po drugim, bez stania przy garnku.",
        "Czego nie zrobi: nie obierze i nie wydryluje. Kto ma warzywnik albo kilka drzew, ten wie, że to jest ta godzina, która i tak zostanie. Nie ma sensu obiecywać inaczej.",
        "Druga rzecz to dojazdy. Z gminy wyjeżdża do pracy o dwieście sześćdziesiąt dziewięć osób więcej, niż przyjeżdża — przez gminę biegnie droga krajowa siedemdziesiąt dziewięć z Krakowa do Sandomierza i to nią wielu ludzi rano wyjeżdża. W takim domu obiad wstawiony rano i gotowy po powrocie rozwiązuje konkretny wieczór.",
        "Trzecia to zapasy. W gminie, gdzie średni wiek to prawie czterdzieści trzy lata i gdzie mieszka się w domach, a nie w blokach, gotuje się większymi garnkami i na kilka dni. Zupa albo danie jednogarnkowe na trzy dni robi się bez pilnowania — wstawia się i wraca po godzinie.",
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
    heading: "Nowe Brzesko i gotowanie — koła gospodyń, które robią to na poważnie",
    paragraphs: [
      "W tej gminie kuchnia jest sprawą publiczną i bardzo dobrze udokumentowaną. Działa tu co najmniej kilka kół gospodyń wiejskich, a każde z własną tożsamością: „Lilia i Topór” w Nowym Brzesku — nazwa od herbów — „Śmiłowiczanki” ze Śmiłowic, koło z Hebdowa, które reprezentowało gminę na dożynkach wojewódzkich, i koło ze Szpitarów.",
      "To ostatnie zorganizowało wydarzenie pod nazwą „Tradycyjna kuchnia Pierwszych Piastów na Ziemi Nowobrzeskiej”. Trudno o lepszy dowód na to, że kuchnia jest tu traktowana jako część historii miejsca, a nie jako dodatek do festynu.",
      "Podstawą jest ziemia: czarnoziem proszowicki i osiemdziesiąt sześć i pół procent powierzchni gminy pod uprawą. Gmina sama zachwala inwestorom „tanie i zdrowe owoce i warzywa”, więc warzywnik i sad są tu normą, a nie hobby.",
      "Powiem uczciwie, czego nie sprawdziłam. Nie potwierdziłam, czy z tej gminy pochodzi jakikolwiek wpis na ministerialną Listę Produktów Tradycyjnych — baza ministerialna była dla mnie niedostępna. Nie znam też konkretnych nazw tutejszych potraw i nie wymyślę żadnej.",
      "Dla urządzenia najwięcej pracy jest przy przetworach i przy cieście. Przetwory to rozdrabnianie plus gotowanie w stałej temperaturze bez pilnowania. Ciasto drożdżowe, mielenie maku i wyrabianie to druga rzecz — ta, przy której na przygotowaniach do konkursu czy dożynek najbardziej boli ręka.",
      "Czego nie zrobi: nie upiecze, nie usmaży i nie ulepi pierogów. Ciasto zrobi, farsz zmieli — piekarnik, patelnia i stół zostają po Waszej stronie.",
    ],
  },

  districtsHeading: "Gdzie w gminie Nowe Brzesko dojeżdżam?",
  districtsParagraphs: [
    "Do miasta Nowe Brzesko i do wszystkich sołectw gminy: Hebdowa Starego i Hebdowa Kolonii, Gruszowa, Pławowic, Śmiłowic, Sierosławic, Mniszowa i Mniszowa Kolonii, Przybysławic, Rudna Dolnego, Kuchar, Majkowic, Grębocina i Szpitarów. Dopłaty za odległość nie ma nigdzie.",
    "Gmina liczy pięć tysięcy sześćset dwadzieścia pięć osób na pięćdziesięciu czterech kilometrach kwadratowych; w samym mieście mieszka tysiąc sześćset trzy osoby. Miastem Nowe Brzesko jest od tysiąc dwieście siedemdziesiątego dziewiątego roku, z przerwą od tysiąc osiemset siedemdziesiątego do dwa tysiące jedenastego.",
    "Przez gminę biegnie droga krajowa numer siedemdziesiąt dziewięć z Krakowa do Sandomierza — to nią najczęściej tu dojeżdżam. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Warto wiedzieć, że liczba sołectw bywa podawana różnie — od czternastu do szesnastu — w zależności od tego, czy liczy się miasto i czy Hebdów traktuje jako jedno, czy dwa sołectwa. Dla mnie to bez znaczenia: dojeżdżam wszędzie.",
    "I rzecz, którą powtarzam przy każdym telefonie: to jest Nowe Brzesko w powiecie proszowickim, a nie Brzesko przy autostradzie w powiecie brzeskim. Do obu dojeżdżam, ale dzieli je około sześćdziesięciu kilometrów.",
  ],
  districts: [
    "Nowe Brzesko",
    "Hebdów",
    "Gruszów",
    "Pławowice",
    "Śmiłowice",
    "Sierosławice",
    "Mniszów",
    "Przybysławice",
    "Rudno Dolne",
    "Kuchary",
    "Majkowice",
    "Grębocin",
    "Szpitary",
  ],

  nearbyHeading: "Proszowice, Koszyce i Drwinia też są na mojej trasie",
  nearbyParagraphs: [
    "Najbliżej stąd do Igołomi-Wawrzeńczyc, Proszowic, Drwini i Koszyc. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy i nie masz pewności, czy to jeszcze Nowe Brzesko, czy już Proszowice albo Koszyce — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Proszowice",
    "Koszyce",
    "Drwinia",
    "Niepołomice",
    "Radziemice",
    "Pałecznica",
    "Kraków",
  ],

  about: blokOMnie("do gminy Nowe Brzesko", "w powiecie proszowickim"),

  faq: [
    {
      question: "Chodzi o Nowe Brzesko czy o Brzesko?",
      answer:
        "O Nowe Brzesko — gminę miejsko-wiejską w powiecie proszowickim, nad Wisłą, przy drodze krajowej siedemdziesiąt dziewięć. Brzesko to zupełnie inne miasto: powiatowe, w powiecie brzeskim, przy autostradzie, około sześćdziesięciu kilometrów stąd. Do obu dojeżdżam bez dopłat, ale to dwie różne trasy, więc przy umawianiu zawsze dopytuję.",
    },
    ...faqWspolne("w gminie Nowe Brzesko"),
    {
      question: "Mamy warzywnik i robimy przetwory. Czy to się przyda?",
      answer:
        "Właśnie przy przetworach najbardziej, i w tej gminie to pytanie pada często — osiemdziesiąt sześć i pół procent jej powierzchni to użytki rolne. Przecier, sos, powidła, dżem, mus, prażone warzywa do słoików: to rozdrabnianie plus podgrzewanie w stałej temperaturze z ciągłym mieszaniem, czyli dokładnie ta część, przy której trzeba stać przy garnku. Obierania i drylowania nie zabierze.",
    },
    {
      question: "Mieszkam w Hebdowie. Dojedziesz?",
      answer:
        "Dojadę bez dopłaty. Przy umawianiu poproszę tylko o doprecyzowanie, czy to Hebdów Stary, czy Hebdów Kolonia — to dwa osobne sołectwa, choć jedna wieś, i mają dwóch sołtysów. Do obu jadę tak samo.",
    },
  ],

  geo: { lat: 50.1372, lng: 20.3847 },
};
