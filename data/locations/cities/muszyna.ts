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
 * MUSZYNA — GMINA MIEJSKO-WIEJSKA w powiecie nowosądeckim.
 * 11 103 mieszkańców (31.12.2024), 141,4 km², lesistość 66,5%.
 *
 * OŚ STRONY: PAŃSTWO MUSZYŃSKIE. Sześć wieków odrębnego organizmu
 * pod władzą biskupów krakowskich, z własnym wojskiem i sądem —
 * plus zamek odbudowany i otwarty 30 września 2023 r.
 * ⚠️ NIE DAWAĆ OSI „UZDROWISKO I WODY” (koliduje z Rabką i z całą
 * doliną Popradu) ANI OSI ŁEMKOWSKO-PASTERSKIEJ (należy do Szczawnicy).
 * Łemkowie wchodzą tu WYŁĄCZNIE jako budowniczowie cerkwi.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 1209 — pierwsza wzmianka: król Węgier Andrzej II zezwala
 *   miejscowemu plebanowi pobierać cło,
 * — 1288 — Wysz, scholastyk kapituły wawelskiej, zapisuje Muszynę
 *   biskupowi krakowskiemu,
 * — XIV w. — za Kazimierza Wielkiego murowany zamek na wzgórzu
 *   granicznym, pełniący funkcję komory celnej,
 * — 1356 — prawa miejskie magdeburskie,
 * — 1391 — WŁADYSŁAW JAGIEŁŁO NADAJE MUSZYNĘ BISKUPOM KRAKOWSKIM →
 *   początek „PAŃSTWA MUSZYŃSKIEGO” / kluczа muszyńskiego,
 * — 1391–1781 — ODRĘBNY ORGANIZM Z WŁASNYM WOJSKIEM („DRAGONIA
 *   BISKUPIA”), SĄDEM KRYMINALNYM I ADMINISTRACJĄ.
 *   1781 — PRZEJĘCIE PRZEZ AUSTRIACKI SKARB CESARSKI,
 * — 1455 — katastrofa budowlana (zawaliła się ok. ¼ zamku);
 *   1474 najazd węgierski; przełom XVI/XVII w. pożar; poł. XVII w.
 *   opuszczenie zamku,
 * — ZAMEK ODBUDOWANY: prace od X.2020, UDOSTĘPNIONY 30 WRZEŚNIA
 *   2023 R., koszt ok. 13,5 MLN ZŁ. Baszta, taras widokowy,
 *   dziedziniec, sala wystawiennicza, muzeum, kawiarnia,
 * — CERKIEW PW. ŚW. JAKUBA MŁODSZEGO APOSTOŁA W POWROŹNIKU,
 *   ZBUDOWANA 1600 R., WPISANA NA LISTĘ UNESCO W 2013 R. (Drewniane
 *   cerkwie polskiego i ukraińskiego regionu Karpat).
 *   NAJSTARSZA DREWNIANA CERKIEW W POLSKICH KARPATACH;
 *   od 1951 r. kościół rzymskokatolicki,
 * — 1930 — status uzdrowiska; 1934 — odzyskanie praw miejskich.
 *   ⚠️ ŹRÓDŁA PODAJĄ 1932 ALBO 1934 dla odkrycia źródeł „Antoni”
 *   i „Wanda” — rozbieżność, nie eksponować daty,
 * — OGRODY ZMYSŁÓW / SENSORYCZNE przy ul. Mściwujewskiego, 8 stref,
 *   wstęp bezpłatny, wieża widokowa. ⚠️ FRAZA „NAJWIĘKSZE W KRAJU”
 *   POCHODZI Z MATERIAŁÓW GMINY — NIE UŻYWAĆ,
 * — ⚠️ „OGRODY BIBLIJNE” — NIE POTWIERDZONO pod tą nazwą.
 *   Potwierdzone: Ogrody Zmysłów i park „Baszta” na Zapopradziu,
 * — MUSZYNIANKA: zakład produkcyjny w Muszynie, ul. Lipowa 5;
 *   podmiot to Spółdzielnia Pracy „POSTĘP”, zał. 23.06.1951.
 *   ⚠️ ZARZĄD SPÓŁDZIELNI MA ADRES W KRYNICY-ZDROJU — nie pisać
 *   jednoznacznie „muszyńska spółka” bez zastrzeżenia,
 * — 10 SOŁECTW: Andrzejówka, Dubne, Jastrzębik, Leluchów, Milik,
 *   Powroźnik, Szczawnik, Wojkowa, Złockie, Żegiestów,
 * — REGON: 1 317 podmiotów (2024); tylko 23 obiekty noclegowe —
 *   cztery razy mniej niż Krynica przy podobnej powierzchni,
 * — KOLEJ: linia 96 Tarnów–Leluchów; stacje w gminie — Żegiestów,
 *   Żegiestów-Zdrój, Andrzejówka, Milik, Muszyna, Muszyna Poprad,
 *   Leluchów. MUSZYNA TO WĘZEŁ: odgałęzienie linii 105 do Krynicy,
 * — PRZEJŚCIE GRANICZNE LELUCHÓW–ČIRČ w tej gminie.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — NAZW KÓŁ GOSPODYŃ I IMPREZ KULINARNYCH. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — STATUSU RUCHU PASAŻERSKIEGO NA PRZEJŚCIU KOLEJOWYM
 *   MUSZYNA–PLAVEČ. Nie potwierdzony,
 * — NAJSŁYNNIEJSZEGO STAROSTY (Stanisław Kępiński) — jedno źródło.
 *
 * PUŁAPKI:
 * — PRZEJŚCIE MUSZYNKA–KUROV LEŻY W GMINIE KRYNICA-ZDRÓJ, nie tutaj,
 *   mimo nazwy i mimo adresu placówki „33-370 Muszyna”,
 * — ŻEGIESTÓW-ZDRÓJ TO TA GMINA, mimo że spółka nazywa się
 *   „Uzdrowisko Krynica-Żegiestów”,
 * — PAŃSTWO MUSZYŃSKIE OBEJMOWAŁO TEŻ DZISIEJSZĄ GMINĘ KRYNICA
 *   (Tylicz był dobrem biskupim) — nie pisać, że Krynica nie miała
 *   z tym nic wspólnego.
 */

export const MUSZYNA: CityContent = {
  slug: "muszyna",
  h1: "Thermomix Muszyna – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Muszyna — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Muszyna: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do miasta i wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Muszyna — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Muszyna. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Muszyny, Żegiestowa, Powroźnika i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

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
      heading: "Thermomix w Muszynie – jak wygląda prezentacja?",
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
      heading: "Państwo, które miało własne wojsko przez czterysta lat",
      paragraphs: [
        "W tysiąc trzysta dziewięćdziesiątym pierwszym roku Władysław Jagiełło nadał Muszynę biskupom krakowskim i tak zaczęło się coś, co historycy nazywają państwem muszyńskim albo kluczem muszyńskim. Nie jest to przenośnia.",
        "Ten organizm miał własną administrację, własny sąd kryminalny i własne wojsko — formację nazywaną dragonią biskupią. Rozciągał się na kilkanaście wsi po obu stronach Popradu i przetrwał w tej formie prawie czterysta lat, do tysiąc siedemset osiemdziesiątego pierwszego roku, kiedy przejął go austriacki skarb cesarski.",
        "Powód tej odrębności był bardzo praktyczny: granica. Już w tysiąc dwieście dziewiątym roku król Węgier Andrzej II pozwolił tutejszemu plebanowi pobierać cło, a w czternastym wieku, za Kazimierza Wielkiego, stanął tu murowany zamek pełniący funkcję komory celnej. Prawa miejskie Muszyna dostała w tysiąc trzysta pięćdziesiątym szóstym.",
        "Zamek miał pecha. W tysiąc czterysta pięćdziesiątym piątym zawaliła się jego czwarta część, w siedemdziesiątym czwartym najechali Węgrzy, na przełomie szesnastego i siedemnastego wieku strawił go pożar, a w połowie siedemnastego został opuszczony. Przez trzysta lat stały tam ruiny.",
        "I tu jest najświeższa część tej historii. Odbudowę zaczęto w październiku dwa tysiące dwudziestego roku, a trzydziestego września dwa tysiące dwudziestego trzeciego zamek udostępniono zwiedzającym. Kosztowało to około trzynastu i pół miliona złotych. Jest baszta, taras widokowy, dziedziniec, sala wystawiennicza i kawiarnia.",
        "Druga rzecz, którą warto tu zobaczyć, stoi w Powroźniku. Drewniana cerkiew świętego Jakuba Młodszego Apostoła zbudowana w tysiąc sześćsetnym roku jest najstarszą drewnianą cerkwią w polskich Karpatach, a od dwa tysiące trzynastego roku figuruje na liście światowego dziedzictwa UNESCO. Od tysiąc dziewięćset pięćdziesiątego pierwszego roku służy jako kościół rzymskokatolicki.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Muszyna?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o miasto, czy o sołectwo — jest ich dziesięć, rozciągniętych wzdłuż doliny Popradu od Żegiestowa po Leluchów. Na cenę to nie wpływa, ale trasa wygląda inaczej.",
        "Jeśli pracujesz w rozlewni, w uzdrowisku albo prowadzisz kwatery, wspomnij o tym od razu — dopasuję się do zmiany albo do sezonu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Muszynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której mieszka się przy jednej dolinie",
      paragraphs: [
        "Muszyna liczy nieco ponad jedenaście tysięcy mieszkańców rozłożonych na stu czterdziestu jeden kilometrach kwadratowych, z czego dwie trzecie to lasy. Wsie ciągną się wzdłuż doliny Popradu i bocznych potoków, jedna za drugą, przy jednej linii kolejowej i jednej drodze.",
        "Zarejestrowanych podmiotów gospodarczych jest tu ponad tysiąc trzysta, ale obiektów noclegowych tylko dwadzieścia kilka — cztery razy mniej niż w sąsiedniej Krynicy przy podobnej powierzchni. To znaczy, że Muszyna jest znacznie bardziej gminą do mieszkania niż do przyjeżdżania.",
        "Praktyczne przełożenie na kuchnię jest tu proste. Do większego sklepu jedzie się kilkanaście kilometrów, więc kupuje się rzadziej i większymi partiami, a gotuje z zapasem. Ten rytm jest tu naturalny od pokoleń.",
        "Najbardziej opłaca się w takim układzie gotowanie jednogarnkowe i seriami. Zupa albo duszone mięso gotuje się bez pilnowania, samo się wyłącza i czeka. Jedna duża porcja podzielona na pojemniki obsługuje kilka dni.",
        "Trzecia rzecz dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek albo ktokolwiek, kto jest w domu wcześniej. W rodzinie, w której ktoś dojeżdża do pracy w Krynicy albo Nowym Sączu, to bywa realnym odciążeniem.",
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
    heading: "Muszyna i gotowanie — kuchnia pogranicza",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie ani nazwy żadnego działającego koła gospodyń. Nie będę więc dopisywać Muszynie kulinarnego dorobku, którego nie umiem wskazać źródłem.",
      "To, co jest tu pewne, wynika z historii. Przez sześćset lat była to ziemia graniczna, po której chodzili ludzie z obu stron Karpat — najpierw w państwie biskupim, potem w Galicji, a przez większość tego czasu mieszkali tu Łemkowie, po których zostały cerkwie, w tym ta najstarsza w polskich Karpatach, w Powroźniku.",
      "Kuchnia jest więc tutaj kuchnią pogranicza: ziemniaki w kilkunastu postaciach, kapusta, fasola, kwaśne zupy na zakwasie i mące, sery, mięso duszone długo i powoli. Nie ma jednej listy „naszych dań”, którą można by zamknąć w rejestrze — jest natomiast kuchnia domowa robiona tak, jak w konkretnym domu.",
      "Dla urządzenia najciekawsze są dania długie. Kwaśnica, żur, gulasz, duszone mięso — wszystko to potrzebuje godziny albo dwóch w niskiej temperaturze i regularnego mieszania. Akurat to prowadzi bez człowieka i samo się wyłącza.",
      "Czego nie zrobi, powiem wprost: nie zastąpi wprawy i nie doprawi zupy tak, jak Wy ją doprawiacie. Nie ulepi pierogów i nie ukisi kapusty. Zabiera tę część roboty, która jest wyłącznie czasem — rozdrabnianie, wyrabianie, mieszanie i stanie przy garnku.",
    ],
  },

  districtsHeading: "Gdzie w gminie Muszyna dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich dziesięciu sołectw, bez żadnej dopłaty za odległość. Gmina liczy ponad jedenaście tysięcy mieszkańców na stu czterdziestu jeden kilometrach kwadratowych, z czego dwie trzecie to lasy.",
    "Sołectwa to: Andrzejówka, Dubne, Jastrzębik, Leluchów, Milik, Powroźnik, Szczawnik, Wojkowa, Złockie i Żegiestów. Warto wiedzieć, że Żegiestów-Zdrój leży w tej gminie, mimo że spółka uzdrowiskowa nosi nazwę łączącą go z Krynicą.",
    "Najciekawsze miejsca to zamek na wzgórzu nad miastem — odbudowany i udostępniony we wrześniu dwa tysiące dwudziestego trzeciego roku — oraz cerkiew w Powroźniku z tysiąc sześćsetnego roku, wpisana na listę UNESCO. W samym mieście działają też ogrody sensoryczne z ośmioma strefami i wieżą widokową; wstęp jest bezpłatny.",
    "Dojazd: Muszyna jest węzłem kolejowym. Przez gminę biegnie linia z Tarnowa do Leluchowa ze stacjami w Żegiestowie, Andrzejówce, Miliku, Muszynie i Leluchowie, a w samej Muszynie odchodzi od niej odgałęzienie do Krynicy-Zdroju. W Leluchowie jest przejście graniczne na Słowację.",
  ],
  districts: [
    "Muszyna — centrum i Zapopradzie",
    "Żegiestów i Żegiestów-Zdrój",
    "Powroźnik",
    "Złockie i Szczawnik",
    "Milik i Andrzejówka",
    "Leluchów, Dubne, Wojkowa, Jastrzębik",
  ],

  nearbyHeading: "Krynica, Piwniczna i Rytro też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Krynicą-Zdrojem, Piwniczną-Zdrojem i Łabową, a od południa ze Słowacją. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo bywa mylące: przejście graniczne w Muszynce leży w gminie Krynica-Zdrój, nie w Muszynie — Muszynka jest sołectwem Krynicy. Muszyna ma własne przejście, w Leluchowie.",
  ],
  nearbyTowns: [
    "Krynica-Zdrój",
    "Piwniczna-Zdrój",
    "Łabowa",
    "Rytro",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do Muszyny", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Żegiestowie albo Powroźniku. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dziesięć sołectw gminy traktuję dokładnie tak samo jak samo miasto. Przy umawianiu podaj nazwę miejscowości, bo dolina jest długa i chodzi wyłącznie o zaplanowanie trasy.",
    },
    ...faqWspolne("w Muszynie"),
    {
      question: "Do sklepu mam kilkanaście kilometrów. Czy to coś zmienia?",
      answer:
        "Zmienia i akurat na korzyść. Kiedy kupuje się rzadziej i większymi partiami, opłaca się gotować z zapasem — a to jest właśnie ten tryb, w którym urządzenie daje najwięcej. Jedna duża porcja zupy, sos na kilka dni, pasty i ciasto zrobione jednego popołudnia w jednym naczyniu. Na prezentacji chętnie pokażę to na Waszych produktach.",
    },
  ],

  geo: { lat: 49.3583, lng: 20.9 },
};
