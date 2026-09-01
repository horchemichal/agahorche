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
 * KORZENNA — GMINA WIEJSKA w powiecie nowosądeckim.
 * 14 445 mieszkańców (31.12.2024), 106,9 km² (6,9% obszaru powiatu).
 * 16 SOŁECTW, ZERO MIAST. Pogórze Ciężkowickie.
 *
 * OŚ STRONY: CISY W MOGILNIE I DIABLE SKAŁY. Dwa rezerwaty plus
 * ciągłość rodowa szesnastu wsi bez ani jednego miasta.
 * ⚠️ NIE DAWAĆ OSI LEŚNO-ZAMKOWEJ jak w Rytrze (`rytro.ts`) —
 * tam Beskid Sądecki i las górski, tu Pogórze Ciężkowickie,
 * cisy, skały i dwory szlacheckie. Inny mezoregion, inny typ
 * dziedzictwa.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — REZERWAT „CISY W MOGILNIE” — ok. 36 HA; CIS O IMIENIU „BARTEK”,
 *   WIEK PRAWIE 600 LAT; ścieżka przyrodnicza. Określany przez gminę
 *   jako jej wizytówka turystyczna,
 * — REZERWAT „DIABLE SKAŁY” W BUKOWCU — formacje skalne
 *   o fantazyjnych nazwach; legenda o skałach przyniesionych przez
 *   diabła z Węgier. ⚠️ LEGENDA PODAWANA JAKO LEGENDA,
 * — 16 SOŁECTW = 16 MIEJSCOWOŚCI: Bukowiec, Janczowa, Jasienna,
 *   Koniuszowa, Korzenna, Lipnica Wielka, Łęka, Łyczana, Miłkowa,
 *   Mogilno, Niecew, Posadowa Mogilska, Siedlce, Słowikowa,
 *   Trzycierz, Wojnarowa,
 * — ⚠️⚠️ LIPNICA WIELKA W GMINIE KORZENNA TO NIE LIPNICA WIELKA
 *   NA ORAWIE (powiat nowotarski, plik `lipnica-wielka.ts`).
 *   To dwie zupełnie różne wsie. NIE MYLIĆ,
 * — GEOGRAFIA: Pogórze Ciężkowickie, 310–580 m n.p.m.; szczyty
 *   ROSOCHATKA (ok. 750 m) i JODŁOWA GÓRA (715 m). ⚠️ ŹRÓDŁA PODAJĄ
 *   750 ALBO 753 M — nie eksponować precyzji. Cieki: potok Spólnik
 *   i Jasienianka, zlewisko Białej Dunajcowej. LASY 21,5%,
 * — HISTORIA: ślady osadnictwa neolit, ceramika sznurowa, kultura
 *   łużycka; główna faza osadnicza XII–XIII w.
 *   1348 — LOKACJA WSI KORZENNA NA KARCZOWISKU; pierwsza wzmianka
 *   1350. NAZWA OD TERENU „WYKARCZOWANEGO”.
 *   1357 — ród STRZEMIEŃCZYKÓW (h. Strzemię), którzy przyjęli
 *   nazwisko KORZEŃSCY. 1412 Stanisław Korzeński; 1453 KLEMENS
 *   KORZEŃSKI, kasztelan czechowski i senator; 1470 jego synowie
 *   jako współwłaściciele. 1513 — budowa szkoły parafialnej.
 *   ok. 1570 — kościół św. Jana Chrzciciela ZAMIENIONY NA ZBÓR
 *   PROTESTANCKI; 1595 powrót do katolików; 1618 spalenie, odbudowa
 *   jako kościół św. Urszuli. ok. 1629 ród STROŃSKICH (h. Janina);
 *   1788 KOCZANOWICZE (h. Nałęcz); XIX w. DŹWIGNIEWSCY.
 *   1848 uwłaszczenie chłopów; 1966 elektryfikacja; 1973 Korzenna
 *   siedzibą gminy,
 * — ⚠️ MONOGRAFIA GMINY PISZE „1795 — I ROZBIÓR POLSKI”. TO BŁĄD
 *   ŹRÓDŁA: 1795 to III rozbiór, a Sądecczyzna trafiła do Austrii
 *   w I rozbiorze, w 1772 r. NIE POWTARZAĆ BŁĘDU,
 * — DWÓR W KORZENNEJ — wzniesiony PO 1864 R.; dziś wystawy
 *   dziedzictwa kulturowego plus WARSZTATY CERAMICZNE I WITRAŻU,
 * — DREWNIANE KOŚCIOŁY W MOGILNIE I BUKOWCU — Szlak Architektury
 *   Drewnianej,
 * — TEATR „DABAR” W MOGILNIE — zrzesza młodzież, studentów
 *   i seniorów; LĄDOWISKO AERO-LACH W JASIENNEJ,
 * — REGON: 1 197 podmiotów (31.12.2024). Struktura z 2019:
 *   BUDOWNICTWO 460 z 989 podmiotów — bardzo wysoki udział,
 * — ŚREDNI WIEK 37,1 lat; wzrost ludności +9,7% w latach 2002–2024,
 * — SĄSIEDZI: Zakliczyn (płn.), Gródek nad Dunajcem (płn.-zach.),
 *   Bobowa (wsch.), Grybów (płd.-wsch.), Chełmiec (płd.-zach.),
 * — 16 km od Nowego Sącza.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — TWIERDZENIA, ŻE KORZENNA JEST NAJWIĘKSZĄ POWIERZCHNIOWO GMINĄ
 *   POWIATU. ⚠️ NIE JEST — gmina wiejska Grybów ma 153,2 km²,
 *   Korzenna 106,9 km². NIE PISAĆ „największa”,
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — NAZW KÓŁ GOSPODYŃ I IMPREZ KULINARNYCH. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — KAZIMIERZA WĄTRÓBSKIEGO, dowódcy oddziału „Sępa”. ⚠️ Monografia
 *   gminy pisze, że pochodził z „pobliskiej wsi Wilczyska” —
 *   ale WILCZYSKA LEŻĄ W GMINIE ŁUŻNA, POWIAT GORLICKI.
 *   NIE PRZYPISYWAĆ GO KORZENNEJ,
 * — GRODZISKA NA GÓRZE TRZEBIN. Szczegóły nie potwierdzone,
 * — KOLEI. ⚠️ Prawdopodobnie brak linii w gminie, ale potwierdzenia
 *   negatywnego nie ma — sformułowane ostrożnie.
 */

export const KORZENNA: CityContent = {
  slug: "korzenna",
  h1: "Thermomix Korzenna – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Korzenna — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Korzenna: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich szesnastu wsi bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Korzenna — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Korzenna. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Korzennej i wszystkich szesnastu wsi gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Korzennej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
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
      heading: "Najstarszy mieszkaniec gminy ma sześćset lat i jest cisem",
      paragraphs: [
        "W Mogilnie, jednej z szesnastu wsi tej gminy, rośnie cis, któremu miejscowi nadali imię Bartek. Ma prawie sześćset lat, czyli był już sporym drzewem, kiedy Kolumb wypływał na zachód. Wokół niego chroniony jest rezerwat o powierzchni około trzydziestu sześciu hektarów, z własną ścieżką przyrodniczą.",
        "Drugi rezerwat leży w Bukowcu i nazywa się Diable Skały. To formacje skalne Pogórza Ciężkowickiego, każda z własną fantazyjną nazwą, i jak to bywa z takimi miejscami, ma swoją legendę: że kamienie przyniósł tu diabeł z Węgier. Podaję to jako legendę, bo tym właśnie jest.",
        "Sama gmina jest osobliwa administracyjnie: szesnaście wsi, szesnaście sołectw i ani jednego miasta. Rozciąga się na stu siedmiu kilometrach kwadratowych Pogórza, między trzystoma dziesięcioma a pięciuset osiemdziesięcioma metrami nad poziomem morza. To nie są góry, tylko fałdy — łagodne, ale ciągnące się bez końca.",
        "Nazwa mówi, skąd się to wzięło. Korzenną lokowano w tysiąc trzysta czterdziestym ósmym roku na karczowisku, a nazwa pochodzi wprost od terenu wykarczowanego pod uprawę. Pierwsza wzmianka pisemna jest z tysiąc trzysta pięćdziesiątego.",
        "Potem przez sześćset lat zmieniali się właściciele i to jest właściwie historia całej gminy. Od tysiąc trzysta pięćdziesiątego siódmego siedział tu ród Strzemieńczyków, który przyjął nazwisko Korzeńskich; w tysiąc czterysta pięćdziesiątym trzecim Klemens Korzeński był kasztelanem i senatorem. Po nich, około tysiąc sześćset dwudziestego dziewiątego, przyszli Strońscy, w tysiąc siedemset osiemdziesiątym ósmym Koczanowicze, a w dziewiętnastym wieku Dźwigniewscy.",
        "Był tu nawet epizod reformacyjny. Około tysiąc pięćset siedemdziesiątego roku miejscowy kościół zamieniono na zbór protestancki; wrócił do katolików dwadzieścia pięć lat później, spłonął w tysiąc sześćset osiemnastym i odbudowano go pod nowym wezwaniem.",
        "Po dworach coś zostało. Ten w Korzennej, wzniesiony po tysiąc osiemset sześćdziesiątym czwartym roku, mieści dziś wystawy dziedzictwa kulturowego oraz warsztaty ceramiczne i witrażowe. W Mogilnie działa teatr skupiający młodzież, studentów i seniorów, a w Jasiennej — lądowisko dla małych samolotów.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Korzenna?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Gmina ma szesnaście wsi rozrzuconych po Pogórzu Ciężkowickim i jazda do Bukowca to co innego niż do Wojnarowej. Na cenę to nie wpływa.",
        "Jedno doprecyzowanie, bo bywa mylące: jeśli mieszkasz w Lipnicy Wielkiej w tej gminie, to nie ta sama Lipnica Wielka co na Orawie, pod Babią Górą. To dwie różne wsie i obie obsługuję.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Korzenna"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Szesnaście wsi i trzy różne kierunki do pracy",
      paragraphs: [
        "Korzenna leży na styku trzech kierunków i to widać w tym, jak ludzie stąd dojeżdżają. Jedni jadą na południe do Nowego Sącza, drudzy na północ w stronę Zakliczyna i Tarnowa, trzeci na wschód, do Bobowej i Gorlic. Nie ma tu jednego miasta, które ściąga wszystkich.",
        "Do tego dochodzi rozproszenie. Szesnaście wsi na stu siedmiu kilometrach Pogórza, każda w swoim zagłębieniu, między trzystoma dziesięcioma a pięciuset osiemdziesięcioma metrami nad poziomem morza. Sąsiad mieszka czasem dwa kilometry dalej, a sklep jeszcze dalej.",
        "Kuchnia dostosowuje się do tego w jeden sposób: kupuje się rzadziej i większymi partiami, a gotuje na kilka dni naprzód. To nie jest moda na meal prep, tylko arytmetyka odległości, znana tu od pokoleń.",
        "Najbardziej opłaca się w takim układzie jedno duże danie. Garnek zupy albo duszonego mięsa gotuje się bez człowieka, sam się wyłącza i czeka, a podzielony na pojemniki obsługuje pół tygodnia bez dodatkowej pracy.",
        "Druga rzecz to zamrażarka i przedwiośnie. Zupy, sosy, pasty, ciasto na pierogi, chleb — robione seriami zimą, kiedy jest spokój, i odbierane wtedy, gdy w polu i w ogrodzie zaczyna się robota.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek albo ktokolwiek, kto wraca wcześniej. Przy dojazdach liczonych w kilkudziesięciu minutach w jedną stronę to bywa realnym odciążeniem.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Korzenna i gotowanie — kuchnia pogórzańska bez rejestru",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazwy działającego koła gospodyń. Nie będę więc dopisywać Korzennej dorobku, którego nie umiem wskazać źródłem.",
      "To, co jest tu pewne, wynika z krajobrazu i historii. Pogórze Ciężkowickie to ziemia rolnicza od średniowiecza — samą Korzenną lokowano na karczowisku, a nazwa oznacza po prostu teren wykarczowany pod uprawę. Lasy zajmują dziś nieco ponad jedną piątą powierzchni; reszta to pola, sady i pastwiska.",
      "Kuchnia jest tu pogórzańska, czyli w praktyce: ziemniaki, kapusta, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe, przetwory z tego, co rośnie w ogrodzie. Rzecz robiona sezonami i w większych partiach, bo w gospodarstwie inaczej się nie da.",
      "Jest tu jedna rzecz, która wpływa na kuchnię bardziej, niż się wydaje: w gminie nie ma miasta. Do większego sklepu jedzie się kilkanaście kilometrów, więc kupuje się rzadziej i większymi partiami — a wtedy gotowanie musi być planowane, nie improwizowane.",
      "Dla urządzenia najciekawsze są w takim rytmie dwie rzeczy: serie i dania długie. Dwie zupy, sos, ciasto na pierogi i pasta zrobione jednego popołudnia w jednym naczyniu, a obok gulasz duszony dwie godziny bez pilnowania. Czego nie zrobi, powiem wprost: nie ulepi pierogów, nie uwędzi kiełbasy i nie zastąpi wprawy. Zabiera tę część, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Korzenna dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich szesnastu, bez żadnej dopłaty za odległość. Gmina liczy ponad czternaście tysięcy mieszkańców na stu siedmiu kilometrach kwadratowych — to niecałe siedem procent powierzchni powiatu nowosądeckiego.",
    "Sołectwa to: Bukowiec, Janczowa, Jasienna, Koniuszowa, Korzenna, Lipnica Wielka, Łęka, Łyczana, Miłkowa, Mogilno, Niecew, Posadowa Mogilska, Siedlce, Słowikowa, Trzycierz i Wojnarowa. Każda z tych szesnastu miejscowości jest osobnym sołectwem, a miasta w gminie nie ma wcale.",
    "Najciekawsze przyrodniczo są dwa rezerwaty. Cisy w Mogilnie — około trzydziestu sześciu hektarów, z cisem „Bartkiem” liczącym prawie sześćset lat i ścieżką przyrodniczą. Oraz Diable Skały w Bukowcu, z formacjami skalnymi Pogórza. W Mogilnie i Bukowcu stoją też drewniane kościoły należące do Szlaku Architektury Drewnianej.",
    "Teren jest pofałdowany: od trzystu dziesięciu do pięciuset osiemdziesięciu metrów nad poziomem morza; najwyższe wzniesienia to Rosochatka i Jodłowa Góra. Dojazd: kolei w gminie najprawdopodobniej nie ma — najbliższe stacje leżą w sąsiednich gminach, przy linii biegnącej doliną Białej. Do Nowego Sącza jest stąd szesnaście kilometrów.",
  ],
  districts: [
    "Korzenna",
    "Mogilno",
    "Bukowiec",
    "Wojnarowa",
    "Jasienna",
    "Siedlce i Koniuszowa",
    "Lipnica Wielka i Łęka",
    "Miłkowa, Niecew, Trzycierz",
  ],

  nearbyHeading: "Chełmiec, gmina Grybów i Gródek też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Chełmcem, gminą wiejską Grybów, Gródkiem nad Dunajcem, Zakliczynem i Bobową. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu, a do Nowego Sącza jest stąd szesnaście kilometrów.",
    "Jedno rozróżnienie, bo bywa mylące: Lipnica Wielka w tej gminie to nie ta sama wieś co Lipnica Wielka na Orawie, pod Babią Górą. Obie mają u mnie osobne strony i do obu dojeżdżam.",
  ],
  nearbyTowns: [
    "Chełmiec",
    "Grybów",
    "Gródek nad Dunajcem",
    "Kamionka Wielka",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do gminy Korzenna", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Lipnicy Wielkiej. To ta na Orawie?",
      answer:
        "Jeśli to Lipnica Wielka w gminie Korzenna, na Pogórzu Ciężkowickim — to inna wieś niż Lipnica Wielka pod Babią Górą, w powiecie nowotarskim. Dzieli je ponad sto kilometrów. Dojeżdżam do obu, ale przy umawianiu powiedz proszę, o którą chodzi.",
    },
    ...faqWspolne("w gminie Korzenna"),
    {
      question: "Mieszkam w Bukowcu, daleko od Korzennej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie szesnaście sołectw traktuję tak samo, niezależnie od tego, jak daleko od siedziby gminy leżą. Przy umawianiu podaj tylko nazwę wsi, żebym dobrze rozplanowała trasę.",
    },
  ],

  geo: { lat: 49.6857, lng: 20.8423 },
};
