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
 * GOŁCZA — gmina wiejska, powiat miechowski. 22 sołectwa,
 * 5 907 mieszkańców na 90,27 km².
 *
 * OŚ STRONY: WIEŚ O NAZWIE WIELKANOC, w której w XVII wieku
 * działała DRUKARNIA. Ośrodek reformacji z murowanym zborem, szkołą,
 * szpitalem i młynem — w miejscu, które dziś liczy 215 mieszkańców
 * i ma przysiółek o nazwie KOREA. Tego się nie da pomylić z żadną
 * inną gminą w Polsce.
 *
 * Druga oś: ROMAŃSKI KOŚCIÓŁ ŚW. MIKOŁAJA W WYSOCICACH,
 * z tympanonem określanym jako jedno z najwspanialszych dzieł
 * rzeźby romańskiej w Polsce.
 *
 * Trzecia, przyziemna: SIEDZIBA GMINY NIE JEST JEJ NAJWIĘKSZĄ WSIĄ.
 * Czaple Wielkie mają 520 mieszkańców, Gołcza 471.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — WIELKANOC: pierwsza wzmianka 1382 r. (strona gminy) albo 1389 r.
 *   (prasa) — rozbieżność. W XVI–XVII w. ośrodek reformacji:
 *   murowany zbór z kryptą, szkoła, szpital, młyn i DRUKARNIA.
 *   Zbór wystawiony w 1616 r. przez Stanisława Wielowiejskiego,
 *   zniszczony w potopie 1655 r., zamknięty ok. 1848 r. Dziś jedyny
 *   ślad to przydrożny krzyż po cmentarzu luterańskim.
 *   Wieś ma przysiółek KOREA. 215 mieszkańców (NSP 2021),
 * — KOŚCIÓŁ ŚW. MIKOŁAJA W WYSOCICACH: romański, jednonawowy,
 *   wzniesiony w I poł. XIII w. (część źródeł: XII w.) z ciosów
 *   wapiennych, detal z piaskowca. Tympanon portalu określany jako
 *   „jedno z najwspanialszych dzieł rzeźby romańskiej w Polsce”;
 *   we wschodnim szczycie prawie pełnoplastyczna Madonna Tronująca
 *   wykuta z jednego bloku piaskowca. Kościół rodowy Odrowążów,
 * — ULINA PARK: centrum rekreacyjno-edukacyjne w NIECZYNNYM
 *   KAMIENIOŁOMIE WAPIENIA w Ulinie Wielkiej, otwarte 16 sierpnia
 *   2024 r. Zjazd tyrolski 180 m na wysokości 35 m, motylarnia,
 *   18 multimedialnych fontann, basen,
 * — SOŁECTWA (22): Adamowice, Buk, Chobędza, Cieplice, Czaple Małe,
 *   Czaple Wielkie, Gołcza, Kamienica, Krępa, Laski Dworskie, Maków,
 *   Mostek, Przybysławice, Rzeżuśnia, Szreniawa, Trzebienice,
 *   Ulina Mała, Ulina Wielka, Wielkanoc, Wysocice, Zawadka, Żarnowica,
 * — LUDNOŚĆ WSI (NSP 2021): Czaple Wielkie 520, Gołcza 471,
 *   Wysocice 391, Rzeżuśnia 351, Wielkanoc 215. SIEDZIBA NIE JEST
 *   NAJWIĘKSZA,
 * — POWIERZCHNIA 90,27 km²; ludność 5 907 (2024). Użytki rolne 86%,
 *   lasy 7%. Ok. 1 660 gospodarstw rolnych. 18 OSP, 9 KGW,
 * — DEMOGRAFIA (2024): 42 urodzenia, 73 zgony, przyrost naturalny
 *   −31. Średni wiek 42,1 lat. Spadek ludności o 8,0% w latach
 *   2002–2024. 2 121 mieszkań, 17 nowych w 2024 r., średnia
 *   powierzchnia 85,4 m². Wodociąg ok. 95%, kanalizacja ok. 20%,
 *   gaz sieciowy ok. 25%, bezrobocie 5,2%,
 * — DOJAZD: BRAK STACJI KOLEJOWEJ w gminie. Linia nr 8 przebiega
 *   na wschód od niej; najbliższe stacje Miechów, Smroków, Słomniki.
 *   Gołcza leży ok. 31 km na północ od Krakowa i ok. 8 km na zachód
 *   od Miechowa. Gmina graniczy z: Charsznicą, Iwanowicami,
 *   Miechowem, Skałą, Słomnikami, Trzyciążem i Wolbromiem,
 * — GOSPODARKA: 549 podmiotów REGON (2024), 93 podmioty na 1000
 *   mieszkańców. Rolnictwo daje 44,4% zatrudnienia,
 * — GMINA LEŻY CZĘŚCIOWO W DŁUBNIAŃSKIM PARKU KRAJOBRAZOWYM.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — TWIERDZENIA, ŻE ŹRÓDŁA DŁUBNI SĄ W TEJ GMINIE. Nie są —
 *   biją w Jangrocie, gmina Trzyciąż. Dłubnia jedynie tędy przepływa,
 * — NAZW PRACODAWCÓW. W gminie działa zakład utylizacyjny, wokół
 *   którego są lokalne spory. Świadomie nie wymieniam żadnej firmy —
 *   ani jego, ani innych,
 * — DAT ZAŁOŻENIA KÓŁ GOSPODYŃ. Wiadomo, że jest ich dziewięć;
 *   potwierdzone z nazwy jest KGW Wysocice,
 * — POTRAWY LOKALNEJ. Brak udokumentowanej,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Brak,
 * — TWIERDZENIA „WIELKANOC TO JEDNO Z TRZECH MIEJSC NA ŚWIECIE
 *   O TEJ NAZWIE”. To teza ze strony gminy, bez źródła. Nie powtarzam,
 * — WIDOKU NA TATRY Z BUKOWEJ GÓRY. Źródło prasowe, niezweryfikowane.
 *
 * PUŁAPKI:
 * — DATOWANIE KOŚCIOŁA W WYSOCICACH: XII w. vs I poł. XIII w.
 *   Piszę „XII lub XIII wiek”,
 * — ROK PIERWSZEJ WZMIANKI O WIELKANOCY: 1382 vs 1389. Piszę
 *   „koniec XIV wieku”,
 * — „SZRENIAWA” JAKO STACJA to Wielkopolska. „Szreniawa Miechowska”
 *   to przystanek zlikwidowanej wąskotorówki pod Proszowicami.
 *   W gminie Gołcza kolei nie ma,
 * — GMINA JEST W DŁUBNIAŃSKIM PARKU KRAJOBRAZOWYM, nie w Parku
 *   Krajobrazowym Dolinki Krakowskie.
 */

export const GOLCZA: CityContent = {
  slug: "golcza",
  h1: "Thermomix Gołcza – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Gołcza — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Gołcza: bezpłatna prezentacja TM7 u Ciebie w kuchni — Gołcza, Czaple Wielkie, Wysocice, Rzeżuśnia. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gołcza — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Gołcza. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Gołcza przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich dwudziestu dwóch sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie dwadzieścia dwa sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Gołcza – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Gołczy, jak w Czaplach Wielkich, Wysocicach czy Wielkanocy.",
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
      heading: "Wieś Wielkanoc, przysiółek Korea i drukarnia w siedemnastym wieku",
      paragraphs: [
        "W tej gminie leży wieś o nazwie Wielkanoc. Ma dwieście piętnaście mieszkańców i przysiółek o nazwie Korea. Już samo to wystarczyłoby za ciekawostkę, ale prawdziwa historia jest znacznie lepsza.",
        "W szesnastym i siedemnastym wieku Wielkanoc była ośrodkiem reformacji. Stał tu murowany zbór z kryptą, wystawiony w tysiąc sześćset szesnastym roku przez Stanisława Wielowiejskiego. Była szkoła, szpital, młyn — i drukarnia. Drukarnia, w wiosce, na lessowych wzgórzach między Krakowem a Miechowem.",
        "Skończyło się to potopem szwedzkim: zbór zniszczono w tysiąc sześćset pięćdziesiątym piątym roku, zbór ostatecznie zamknięto około połowy dziewiętnastego wieku. Dziś nie ma po tym nic poza przydrożnym krzyżem stojącym w miejscu dawnego cmentarza luterańskiego. Wieś istnieje od końca czternastego wieku i przez ten czas była już wszystkim: ośrodkiem drukarskim, potem zwykłą wsią, a dziś jednym z dwudziestu dwóch sołectw.",
        "Druga rzecz, którą ta gmina ma, a której nikt się po niej nie spodziewa, stoi w Wysocicach. To romański kościół świętego Mikołaja z dwunastego albo trzynastego wieku, wykuty z ciosów wapiennych. Tympanon nad portalem bywa nazywany jednym z najwspanialszych dzieł rzeźby romańskiej w Polsce, a we wschodnim szczycie stoi Madonna Tronująca wykuta z jednego bloku piaskowca. To był kościół rodowy Odrowążów, którzy władali tu osadami od połowy dwunastego wieku.",
        "Najświeższa rzecz jest z sierpnia dwa tysiące dwudziestego czwartego roku: w nieczynnym kamieniołomie wapienia w Ulinie Wielkiej otwarto park rekreacyjny ze zjazdem tyrolskim, motylarnią i basenem. Kamieniołom, w którym urządzono motylarnię — to jest, moim zdaniem, dobra metafora tej gminy.",
        "A rzecz najbardziej przyziemna i dla mnie najważniejsza: siedziba gminy nie jest jej największą wsią. Czaple Wielkie mają pięćset dwadzieścia mieszkańców, Gołcza czterysta siedemdziesiąt jeden. Ta gmina nie ma jednego środka i przy umawianiu prezentacji ma to konkretne znaczenie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Gołcza?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa, bo jest ich dwadzieścia dwa i żadne nie dominuje. Uważaj przy tym na nazwy podwójne: są tu Czaple Małe i Czaple Wielkie oraz Ulina Mała i Ulina Wielka. To cztery różne wsie. Dopłaty nie ma nigdzie.",
        "Jeśli masz gospodarstwo, powiedz po prostu, o której masz spokojną godzinę. Dopasowuję się do obrządku i prac polowych, nie odwrotnie. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Gołcza"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina bez środka, dom z ogrodem",
      paragraphs: [
        "Osiemdziesiąt sześć procent powierzchni tej gminy to użytki rolne, lasy zajmują siedem. Gospodarstw jest tu około tysiąca sześciuset sześćdziesięciu, a w rolnictwie pracuje czterdzieści cztery procent zatrudnionych. To wciąż gmina rolnicza, choć leży trzydzieści jeden kilometrów od Krakowa.",
        "Domy są tu duże, ale nie największe w okolicy — przeciętne mieszkanie ma osiemdziesiąt pięć metrów. W dwa tysiące dwudziestym czwartym roku oddano siedemnaście nowych, co przy gminie liczącej niecałe sześć tysięcy mieszkańców oznacza, że ktoś się jednak buduje. Średni wiek to czterdzieści dwa lata.",
        "Gotowanie ma tu skalę domową, ale wielopokoleniową: dom jednorodzinny z ogrodem, często z rodzicami, i obiad, do którego siada więcej osób, niż wynikałoby ze statystyki. I to jest właśnie ta sytuacja, w której najbardziej przeszkadza konieczność stania w kuchni.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe gotuje się, kiedy Ty jesteś w ogrodzie, przy zwierzętach albo z dziećmi, i samo się wyłącza. Nie trzeba wracać co dziesięć minut zamieszać. Rozdrabnianie, ucieranie i mieszanie, żeby nie przywarło, dzieją się bez Twojej obecności.",
        "Druga rzecz to przetwory z własnego ogrodu. Powidła, przeciery, zupy do zamrożenia, sosy, kiszonki do słoików, ciasto na pierogi robione seriami. W domu z ogrodem to i tak się dzieje każdej jesieni — chodzi tylko o to, żeby zajmowało pół dnia zamiast całego.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku — a przy rozproszonej zabudowie i dojazdach do szkoły to bywa realnie potrzebne.",
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
    heading: "Gołcza i gotowanie — dziewięć kół i żadnego wpisu",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu z gminy Gołcza na ministerialnej Liście Produktów Tradycyjnych ani udokumentowanej potrawy, którą można by nazwać wyłącznie tutejszą. Mogłabym wpisać w to miejsce coś ogólnie małopolskiego i pewnie nikt by nie sprawdził. Nie zrobię tego.",
      "Jest za to dziewięć kół gospodyń wiejskich — na dwadzieścia dwa sołectwa i niecałe sześć tysięcy mieszkańców. To dużo. Do tego osiemnaście jednostek ochotniczej straży pożarnej. W gminie bez jednego centrum, w której największa wieś liczy pięćset dwadzieścia osób, takie organizacje są tym, co realnie spina ludzi razem — i gotuje się przy każdej okazji, którą one tworzą.",
      "Kuchnia jest tu taka, jaka wychodzi z tej ziemi: lessowa, mączna, ziemniaczana, z warzywami z własnego ogrodu i mięsem raczej od święta. Osiemdziesiąt sześć procent gminy to pole. To nie jest kuchnia efektowna i nikt jej nie skodyfikował, ale jest konkretna: kluski, pierogi, placki, zupy, kiszonki, ciasto drożdżowe na niedzielę.",
      "I dokładnie w tym miejscu urządzenie coś wnosi. Ciasto na kluski i pierogi wyrabia się samo. Zupa gotuje się bez pilnowania. Farsz miele się bez maszynki, a masa serowa powstaje bez ucierania. Przy porcji na czworo różnica jest niewielka. Przy gotowaniu na dożynki albo na strażackie święto — ogromna.",
    ],
  },

  districtsHeading: "Gdzie w gminie Gołcza dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu dwóch sołectw, bez żadnej dopłaty za odległość: Gołczy, Czapel Wielkich, Czapel Małych, Wysocic, Rzeżuśni, Wielkanocy, Uliny Wielkiej, Uliny Małej, Adamowic, Buku, Chobędzy, Cieplic, Kamienicy, Krępy, Lasek Dworskich, Makowa, Mostka, Przybysławic, Szreniawy, Trzebienic, Zawadki i Żarnowicy.",
    "Warto wiedzieć jedno: siedziba gminy nie jest jej największą wsią. Według spisu z dwa tysiące dwudziestego pierwszego roku Czaple Wielkie mają pięćset dwadzieścia mieszkańców, a Gołcza czterysta siedemdziesiąt jeden. Dalej są Wysocice i Rzeżuśnia. Ta gmina po prostu nie ma jednego środka i lepiej to wiedzieć, niż zakładać inaczej.",
    "Kilka rzeczy wartych zobaczenia. W Wysocicach stoi romański kościół świętego Mikołaja z dwunastego albo trzynastego wieku, z tympanonem uważanym za jedno z najlepszych dzieł rzeźby romańskiej w Polsce. W Wielkanocy działała w siedemnastym wieku drukarnia przy tamtejszym zborze. W Ulinie Wielkiej, w nieczynnym kamieniołomie wapienia, otwarto w sierpniu dwa tysiące dwudziestego czwartego roku park rekreacyjny. Część gminy leży w Dłubniańskim Parku Krajobrazowym.",
    "O dojeździe uczciwie: w gminie Gołcza nie ma stacji ani przystanku kolejowego — linia z Krakowa do Miechowa przebiega na wschód od niej. Najbliższe stacje to Miechów, Smroków i Słomniki. Sama Gołcza leży około trzydziestu jeden kilometrów na północ od Krakowa i ośmiu kilometrów na zachód od Miechowa, więc samochodem jest tu z Krakowa niedaleko.",
  ],
  districts: [
    "Gołcza",
    "Czaple Wielkie",
    "Czaple Małe",
    "Wysocice",
    "Rzeżuśnia",
    "Wielkanoc",
    "Ulina Wielka",
    "Ulina Mała",
    "Adamowice",
    "Buk",
    "Chobędza",
    "Cieplice",
    "Kamienica",
    "Krępa",
    "Laski Dworskie",
    "Maków",
    "Mostek",
    "Przybysławice",
    "Szreniawa",
    "Trzebienice",
    "Zawadka",
    "Żarnowica",
  ],

  nearbyHeading: "Miechów, Słomniki i Skała też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Gołcza graniczy aż z siedmioma innymi: Charsznicą, Iwanowicami, Miechowem, Skałą, Słomnikami, Trzyciążem i Wolbromiem. Do wszystkich dojeżdżam i do żadnej nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz w południowej części gminy, bliżej Ci do Krakowa niż do Miechowa — Gołcza leży zaledwie trzydzieści jeden kilometrów od miasta. Dla umówienia terminu to bez znaczenia, ale dla Twojego dojazdu do pracy bywa istotne.",
  ],
  nearbyTowns: [
    "Miechów",
    "Słomniki",
    "Skała",
    "Charsznica",
    "Trzyciąż",
    "Wolbrom",
    "Kraków",
  ],

  about: blokOMnie("do gminy Gołcza", "w powiecie miechowskim"),

  faq: [
    {
      question: "Mieszkam w Czaplach Wielkich, nie w Gołczy. Dojedziesz?",
      answer:
        "Dojadę i bez dopłaty — a przy okazji, Czaple Wielkie są większe od samej Gołczy: pięćset dwadzieścia mieszkańców wobec czterystu siedemdziesięciu jeden. Ta gmina nie ma jednego centrum i jeżdżę po niej równomiernie. Uważaj tylko przy podawaniu nazwy, bo są też Czaple Małe — to osobna wieś.",
    },
    ...faqWspolne("w gminie Gołcza"),
    {
      question: "Czy do Gołczy dojadę pociągiem?",
      answer:
        "Nie, w gminie nie ma stacji ani przystanku kolejowego — linia z Krakowa do Miechowa przebiega na wschód od niej. Najbliższe stacje to Miechów, Słomniki i Smroków. Samochodem z Krakowa jest tu jednak blisko, około trzydziestu jeden kilometrów na północ.",
    },
    {
      question: "Naprawdę jest tu wieś o nazwie Wielkanoc?",
      answer:
        "Naprawdę, i to jedno z sołectw tej gminy — dwieście piętnaście mieszkańców, z przysiółkiem o nazwie Korea. W szesnastym i siedemnastym wieku był tam ośrodek reformacji z murowanym zborem, szkołą, szpitalem, młynem i drukarnią. Zbór zniszczono w potopie szwedzkim; dziś został po nim tylko przydrożny krzyż w miejscu dawnego cmentarza.",
    },
  ],

  geo: { lat: 50.2842, lng: 19.9339 },
};
