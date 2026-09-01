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
 * SPYTKOWICE (POWIAT NOWOTARSKI) — GMINA WIEJSKA.
 * 4 719 mieszkańców (31.12.2024), 32,2 km². Gmina JEDNOWIOSKOWA:
 * jeden obręb ewidencyjny, JEDNA miejscowość, 46 nazwanych części.
 * Najmniejsza ludnościowo gmina powiatu nowotarskiego (14. z 14).
 *
 * ⚠️⚠️ KOLIZJA NAZW — NAJWAŻNIEJSZA RZECZ NA TEJ STRONIE.
 * W Małopolsce są DWIE gminy Spytkowice:
 *   — WADOWICKA (ok. 10 tys., nad Wisłą, karp zatorski, cztery
 *     przystanki kolejowe) — plik `spytkowice.ts`, slug "spytkowice",
 *   — NOWOTARSKA (ta, ok. 4,7 tys., Podhale, przy zakopiance
 *     do Chyżnego) — slug "spytkowice-nowotarskie".
 * OBIE STRONY MUSZĄ SIĘ WZAJEMNIE ODSYŁAĆ.
 * Strony internetowe: spytkowice.pl to NOWOTARSKA,
 * spytkowice.net.pl to WADOWICKA.
 *
 * OŚ STRONY: PSZCZOŁY I MIÓD. Skansen Pszczelarski, Pasieka
 * „Pod Lasem”, Galeria św. Ambrożego. Oś nieużywana nigdzie indziej
 * w serwisie i wprost kulinarna.
 * ⚠️ ŹRÓDŁO BRANŻOWE POCHODZI Z 2007 R. — NIE PISAĆ, ŻE OBIEKT
 * NA PEWNO DZIAŁA DZIŚ. Formułować ostrożnie („warto zadzwonić
 * przed wizytą”), co też jest uczciwsze.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — PSZCZELARSTWO: Skansen Pszczelarski za budynkiem Urzędu Gminy —
 *   ule ponad 150-letnie, zabytkowe narzędzia bartnicze, figura
 *   św. Ambrożego; zbiory gromadzone od 1975 r. przez mistrza
 *   pszczelarskiego JÓZEFA RÓŻAŃSKIEGO. Pasieka „Pod Lasem” przy
 *   drodze na Chyżne: 50 uli produkcyjnych i 30 zabytkowych,
 *   Galeria św. Ambrożego z ponad 100 pracami,
 * — LOKACJA 1564 R. przez SPYTKA WAWRZYŃCA JORDANA, wojewodę
 *   krakowskiego, właściciela klucza 25 osad. NAZWA WSI POCHODZI
 *   OD IMIENIA ZAŁOŻYCIELA. Ten sam ród co w Jordanowie,
 * — WŁAŚCICIELE: 1650 Rafał Makowski (scalenie wsi); 1875 hr. Czesław
 *   Lasocki; 1891–1910 Löwy; od 1910 arcyksiążę Karol Stefan Habsburg
 *   (linia żywiecka),
 * — PARAFIA erygowana 1758; DREWNIANY KOŚCIÓŁ Niepokalanego Poczęcia
 *   NMP wzniesiony 1763–1765, konsekrowany 1766; drewniana dzwonnica
 *   z XVIII w. na kamiennej podmurówce,
 * — II WOJNA: por. TADEUSZ STEFANISZYN z 12 pułku piechoty poległ
 *   2 WRZEŚNIA 1939 R. w Spytkowicach. Pomnik na cmentarzu
 *   parafialnym odsłonięty 14 września 1958 r. Obelisk na Groniku —
 *   głaz z krzyżem Virtuti Militari, upamiętnia też 48 żołnierzy
 *   12 pp. Krzyż na „Zamarłówce” postawiony 1954 r., odnowiony 1999.
 *   Izba Pamięci Narodowej przy SP nr 1 — otwarta 1971 r.
 *   Szkoła nosi imię por. Stefaniszyna,
 * — KGW: korzenie w 1926 r., jako Stowarzyszenie Młodzieży Żeńskiej;
 *   założyciel Zygmunt Szybowski, opiekunka Aleksandra Murzańska.
 *   Kursy haftu, szycia, pieczenia, gotowania,
 * — KATARZYNA KRACIK — poetka ludowa, członkini KGW; jej imię nosi
 *   Przegląd Recytatorski przy SP nr 1, co najmniej XXII edycji,
 * — DEMOGRAFIA HISTORYCZNA: 1921 — 408 domów i 2 296 mieszkańców;
 *   1931 — 479 domów i 2 618 mieszkańców,
 * — GEOGRAFIA: najwyższy punkt LESZCZAK, 864 m n.p.m.; północne
 *   i zachodnie stoki Pasma Podhalańskiego,
 * — REGON: 470 podmiotów (2024), 454 mikro; wśród osób fizycznych
 *   budownictwo 37,1%; przemysł i budownictwo łącznie 48,5%.
 *   Lesistość 32,9%,
 * — DROGA: DK7, zakopianka, przebiega przez wieś — kierunek
 *   Rabka-Zdrój → Chyżne. Planowany nowy przebieg odcinka
 *   Rabka-Zdrój – Chyżne omija Spytkowice; badania od sierpnia 2025,
 * — SAMODZIELNA GMINA OD REFORMY 1972 R.; do 31.12.1998 woj.
 *   nowosądeckie, od 1.01.1999 powiat nowotarski.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — TWIERDZENIA, ŻE SKANSEN PSZCZELARSKI NA PEWNO DZIAŁA DZIŚ.
 *   Źródło z 2007 r. Sformułowane ostrożnie,
 * — FRAZY „NAJWIĘKSZA TAKA KOLEKCJA W POLSCE” o Galerii
 *   św. Ambrożego. To claim gminy, nieweryfikowalny,
 * — TEZY „TU ROZPOCZĘŁA SIĘ II WOJNA W MAŁOPOLSCE”. Teza blogowa,
 *   NIE FAKT. Dodatkowo autor związany z Wadowicami — mogła dotyczyć
 *   Spytkowic wadowickich,
 * — FUNDATORÓW KOŚCIOŁA. Strona gminy podaje hr. Romana
 *   Sierakowskiego, baza uczelniana zupełnie innych właścicieli.
 *   ROZBIEŻNOŚĆ — POMINIĘTE,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono.
 *
 * PUŁAPKI:
 * — ZAMEK, PARK ZAMKOWY, STAWY I REZERWAT WIŚLISKA TO SPYTKOWICE
 *   WADOWICKIE. Nowotarskie nie mają zamku,
 * — KOŚCIÓŁ ŚW. KATARZYNY ALEKSANDRYJSKIEJ (murowany, barokowy)
 *   JEST W SPYTKOWICACH WADOWICKICH,
 * — PRZEJŚCIE GRANICZNE CHYŻNE LEŻY W GMINIE JABŁONKA, nie tutaj.
 *   Ta gmina NIE GRANICZY ZE SŁOWACJĄ,
 * — OŚ NARCIARSKA JEST ZAJĘTA PRZEZ ZAKOPANE — nie budować strony
 *   na stacji Beskid Spytkowice.
 */

export const SPYTKOWICE_NOWOTARSKIE: CityContent = {
  slug: "spytkowice-nowotarskie",
  h1: "Thermomix Spytkowice (powiat nowotarski) – prezentacja i zakup",
  seoTitle: "Przedstawiciel Thermomix Spytkowice k. Rabki — cena",
  seoDescription:
    "Thermomix w Spytkowicach w powiecie nowotarskim: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Spytkowice k. Rabki — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Spytkowicach w powiecie nowotarskim. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Spytkowic w powiecie nowotarskim — tych przy zakopiance, w stronę Chyżnego — przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni, na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała wieś, wszystkie przysiółki, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Spytkowicach – jak wygląda prezentacja?",
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
      heading: "Wieś, w której zbiera się ule od pięćdziesięciu lat",
      paragraphs: [
        "Za budynkiem urzędu gminy w Spytkowicach stoi coś, czego nie ma nigdzie indziej w powiecie: skansen pszczelarski. Zebrano tam ule liczące ponad sto pięćdziesiąt lat, zabytkowe narzędzia bartnicze i figurę świętego Ambrożego, patrona pszczelarzy.",
        "Zbiory zaczął gromadzić w tysiąc dziewięćset siedemdziesiątym piątym roku miejscowy mistrz pszczelarski Józef Różański. Przy drodze na Chyżne prowadził też pasiekę „Pod Lasem” — pięćdziesiąt uli produkcyjnych i trzydzieści zabytkowych — oraz galerię imienia świętego Ambrożego z ponad setką prac o tej tematyce.",
        "Muszę tu być uczciwa. Najlepszy opis tego miejsca, do jakiego dotarłam, pochodzi z prasy branżowej sprzed prawie dwudziestu lat. Nie wiem, w jakim stanie i w jakich godzinach obiekt działa dzisiaj, więc nie będę tego zmyślać. Jeśli planujecie tam zajrzeć, warto najpierw zadzwonić do urzędu gminy.",
        "Sama wieś jest starsza i nosi imię swojego założyciela. Spytek Wawrzyniec Jordan, wojewoda krakowski i właściciel klucza dwudziestu pięciu osad, lokował ją w tysiąc pięćset sześćdziesiątym czwartym roku — i od jego imienia wzięła się nazwa. Ten sam ród założył zresztą pobliski Jordanów.",
        "Potem właściciele się zmieniali: w siedemnastym wieku Makowscy, w dziewiętnastym hrabia Lasocki, na przełomie wieków rodzina Löwych, a od tysiąc dziewięćset dziesiątego arcyksiążę Karol Stefan Habsburg z linii żywieckiej. Z tamtych czasów został drewniany kościół Niepokalanego Poczęcia z lat tysiąc siedemset sześćdziesiątych i osiemnastowieczna drewniana dzwonnica na kamiennej podmurówce.",
        "Jest tu też historia z września trzydziestego dziewiątego. Drugiego września poległ w Spytkowicach porucznik Tadeusz Stefaniszyn z dwunastego pułku piechoty. Ma grób i pomnik na cmentarzu parafialnym, odsłonięty w tysiąc dziewięćset pięćdziesiątym ósmym, obelisk na Groniku upamiętniający także czterdziestu ośmiu żołnierzy jego pułku i krzyż na Zamarłówce z pięćdziesiątego czwartego. Miejscowa szkoła podstawowa nosi jego imię, a przy niej od siedemdziesiątego pierwszego roku działa izba pamięci.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Spytkowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz koniecznie, że chodzi o Spytkowice w powiecie nowotarskim, przy zakopiance do Chyżnego. W Małopolsce są dwie gminy o tej nazwie i druga leży pod Zatorem, ponad sto kilometrów stąd. Do obu dojeżdżam, ale wolę nie pomylić kierunku.",
        "Przydaje się też nazwa przysiółka. Wieś jest jedna, ale ma czterdzieści sześć nazwanych części, więc sam adres bez tej wskazówki bywa mylący.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
        {
          href: "/thermomix/spytkowice",
          label: "Szukasz Spytkowic pod Wadowicami? Tu jest ich strona",
        },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Spytkowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Najmniejsza gmina powiatu, w której buduje prawie połowa",
      paragraphs: [
        "Spytkowice to najmniejsza ludnościowo gmina powiatu nowotarskiego: cztery tysiące siedemset osób na trzydziestu dwóch kilometrach kwadratowych. Zarejestrowanych podmiotów jest czterysta siedemdziesiąt i prawie wszystkie to mikrofirmy.",
        "Struktura jest bardzo wyrazista. Blisko połowa tutejszych firm działa w przemyśle i budownictwie, a wśród działalności prowadzonych przez osoby fizyczne budownictwo to ponad jedna trzecia. To jest gmina, z której rano wyjeżdża się na budowę.",
        "Praktyczne przełożenie na kuchnię jest tu jedno i bardzo konkretne. Danie jednogarnkowe wstawia się przed wyjazdem i wychodzi z domu — gotuje się bez pilnowania, samo się wyłącza i czeka do wieczora. Nie przypala się i nikt nie musi wracać, żeby zamieszać.",
        "Druga rzecz to gotowanie z zapasem. Podwójna porcja zupy, sos na kilka dni, pasty do kanapek na drugie śniadanie na budowę, chleb — robione seriami w weekend, w jednym naczyniu. W tygodniu tylko się to odgrzewa.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może przygotować nastolatek albo ktokolwiek, kto jest w domu wcześniej. W rodzinie, w której ktoś wraca po dwunastu godzinach, to bywa realnym odciążeniem, a nie ciekawostką.",
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
    heading: "Spytkowice i gotowanie — miód i sto lat koła gospodyń",
    paragraphs: [
      "Miejscowe koło gospodyń wiejskich ma korzenie w tysiąc dziewięćset dwudziestym szóstym roku, kiedy powstało tu Stowarzyszenie Młodzieży Żeńskiej. Prowadzono w nim kursy haftu, szycia, pieczenia i gotowania — czyli dokładnie to, co dziś nazwalibyśmy edukacją kulinarną, tylko sto lat temu.",
      "Z tego środowiska wyszła między innymi Katarzyna Kracik, poetka ludowa, której imię nosi do dziś przegląd recytatorski przy tutejszej szkole podstawowej, organizowany od ponad dwudziestu lat. To mała wieś, ale z niemałą ciągłością.",
      "Drugim wątkiem jest miód. Pszczelarstwo ma tu własny skansen i pasiekę, a ule zbierane od lat siedemdziesiątych są dowodem, że nie jest to zainteresowanie nowe. Zaznaczę tylko jeszcze raz, że opis obiektu, do którego dotarłam, jest sprzed prawie dwudziestu lat, więc przed wizytą warto zadzwonić.",
      "Powiem też uczciwie, czego nie znalazłam: żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie. Nie będę dopisywać jej dorobku, którego nie umiem wskazać źródłem.",
      "Miód jest za to składnikiem wdzięcznym w kuchni i to warto powiedzieć konkretnie. Wchodzi do ciast, pierników, marynat do mięsa, dressingów i napojów. Urządzenie robi z nim wszystko, co wymaga równomiernego rozprowadzenia w cieple — a więc ciasta miodowe, kremy, sosy. Czego nie zrobi: nie odwiruje miodu z ramek i nie zastąpi pszczół. Zabiera tę część roboty, która jest wyłącznie czasem — ucieranie, wyrabianie i stanie przy garnku.",
    ],
  },

  districtsHeading: "Gdzie w gminie Spytkowice dojeżdżam?",
  districtsParagraphs: [
    "Do całej wsi i wszystkich przysiółków, bez żadnej dopłaty za odległość. To gmina jednowioskowa: jedna miejscowość, ale aż czterdzieści sześć nazwanych części, więc przy umawianiu przydaje się nazwa przysiółka.",
    "Gmina liczy około czterech tysięcy siedmiuset mieszkańców na trzydziestu dwóch kilometrach kwadratowych i jest najmniejsza ludnościowo w całym powiecie nowotarskim. Leży na północnych i zachodnich stokach Pasma Podhalańskiego; najwyższy punkt to Leszczak, osiemset sześćdziesiąt cztery metry nad poziomem morza. Lasy zajmują jedną trzecią powierzchni.",
    "Samodzielną gminą Spytkowice są od reformy z tysiąc dziewięćset siedemdziesiątego drugiego roku. Do końca dziewięćdziesiątego ósmego należały do województwa nowosądeckiego, a od dziewięćdziesiątego dziewiątego są w powiecie nowotarskim.",
    "Dojazd: przez wieś przebiega zakopianka w kierunku Rabki-Zdroju i dalej na Chyżne. Trwają prace nad nowym przebiegiem tego odcinka i wszystkie rozważane warianty omijają Spytkowice. Kolejowego ruchu pasażerskiego w gminie nie ma. Warto też wiedzieć, że przejście graniczne w Chyżnem leży już w gminie Jabłonka — Spytkowice ze Słowacją nie graniczą.",
  ],
  districts: [
    "Centrum wsi",
    "Okolice kościoła i urzędu gminy",
    "Przysiółki w stronę Jordanowa",
    "Przysiółki w stronę Rabki",
    "Zabudowa w stronę Leszczaka",
  ],

  nearbyHeading: "Rabka-Zdrój, Jordanów i Raba Wyżna też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Bystrą-Sidziną, Jabłonką, Jordanowem i Rabą Wyżną. Dojeżdżam do wszystkich, bez doliczania kosztu dojazdu. Niedaleko jest też Rabka-Zdrój.",
    "I jedno rozróżnienie, bo bywa mylące: to są Spytkowice podhalańskie, w powiecie nowotarskim. Drugie Spytkowice leżą w powiecie wadowickim, nad Wisłą, i mają zamek, stawy i cztery przystanki kolejowe. Dojeżdżam i tam, i tu, ale to dwie zupełnie różne gminy.",
  ],
  nearbyTowns: [
    "Rabka-Zdrój",
    "Jordanów",
    "Raba Wyżna",
    "Bystra-Sidzina",
    "Jabłonka",
    "Kraków",
  ],

  about: blokOMnie("do Spytkowic w powiecie nowotarskim", "na Podhalu"),

  faq: [
    {
      question: "Są dwie gminy Spytkowice. O które chodzi na tej stronie?",
      answer:
        "O te w powiecie nowotarskim, przy zakopiance w stronę Chyżnego, między Jordanowem a Rabą Wyżną. Drugie Spytkowice są w powiecie wadowickim, nad Wisłą — mają zamek, stawy hodowlane i kolej do Krakowa. Dojeżdżam do obu gmin, ale przy umawianiu powiedz proszę, o które chodzi.",
    },
    ...faqWspolne("w Spytkowicach"),
    {
      question: "Mieszkam na przysiółku, daleko od centrum. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wieś ma czterdzieści sześć nazwanych części, więc przy umawianiu podaj proszę nazwę przysiółka albo krótki opis dojazdu — to jedyne, do czego mi to potrzebne.",
    },
  ],

  geo: { lat: 49.5767, lng: 19.8231 },
};
