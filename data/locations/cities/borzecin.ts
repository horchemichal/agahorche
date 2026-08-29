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
 * BORZĘCIN — gmina wiejska, powiat brzeski, północno-wschodni skraj
 * powiatu, Kotlina Sandomierska, na północ od autostrady A4.
 * 8 117 mieszkańców (31.12.2024) na 102,8 km², gęstość 79 os./km² —
 * jedna z najrzadziej zaludnionych gmin powiatu. Siedem sołectw.
 *
 * OŚ STRONY: GRZYBY I LAS. Borzęcin organizuje Borzęckie Święto
 * Grzyba (XIX edycja 8–9 sierpnia 2026) z konkursem kulinarnym potraw
 * z grzybów; wójt mówi wprost, że gmina „w dużej części składa się
 * z lasów", a zbieranie grzybów jest tu praktyką pokoleniową.
 * To jedyny udokumentowany motyw kulinarny tej gminy i strona
 * stoi właśnie na nim — bez wymyślania „tradycji regionalnej".
 *
 * DRUGA OŚ: sam Borzęcin to NAJWIĘKSZA WIEŚ W POWIECIE BRZESKIM
 * (ok. 3 700 mieszkańców), podzielona na dwa sołectwa — Górny i Dolny.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 8 117
 *   mieszkańców, 102,8 km², 79 os./km², wiek średni 41,1 lat.
 *   W 2024: 49 urodzeń, 80 zgonów (−31), saldo migracji +21.
 *   Ludność spadła z 8 373 (2006) — ok. 3% w 18 lat,
 * — SOŁECTWA (7): Borzęcin Górny, Borzęcin Dolny, Bielcza, Przyborów,
 *   Łęki, Jagniówka, Waryś. Waryś uzyskał status sołectwa dopiero
 *   w 1975 r.; Łęki i Przyborów przyłączono do Borzęcina w 1976 r.,
 * — GOSPODARKA (2024): 691 podmiotów REGON, 587 osób fizycznych;
 *   68 nowych wpisów, 33 wykreślenia. Bezrobocie 5,0%.
 *   Wynagrodzenie 6 953,88 zł brutto. Pracujących 82 na 1000
 *   mieszkańców (2021) — bardzo niski wskaźnik,
 * — ŻWIROWNIE I KRUSZYWA to realna gałąź: CEMEX prowadzi Żwirownię
 *   Borzęcin (Borzęcin 308); działają też kopalnie kruszywa
 *   Łęki-Ropek i Borzęcin-Łazy (spór sądowy o drogi dojazdowe
 *   od maja 2022). Firmy budowlane potwierdzone z nazwy w Kurierze
 *   Borzęckim 2(95)2024: BUD-DRÓG, KLEC-BUD, EL-BUD, PPHU Dam-Dam,
 *   FHU „Wiking",
 * — STREFA AKTYWNOŚCI GOSPODARCZEJ BORZĘCIN-BOREK: umowa 30.09.2020,
 *   koszt 4 902 547 zł brutto, dofinansowanie RPO WM; wszystkie
 *   działki inwestycyjne sprzedane (stan 22.10.2020). ⚠️ Kurier
 *   gminny podaje inną kwotę dofinansowania — nie podaję kwot,
 * — SŁAWOMIR MROŻEK urodził się w Borzęcinie 29 czerwca 1930 r.
 *   (zm. 15.08.2013 w Nicei). Ojciec Antoni pracował na miejscowej
 *   poczcie, matka była córką właściciela wiejskiej mleczarni.
 *   Rodzina wyjechała do Krakowa, gdy miał trzy lata. W dokumentach
 *   urzędowych figuruje błędna data 26 czerwca — skutek pomyłki
 *   na poczcie w Borzęcinie. W Zespole Szkół urządzono salę
 *   „Mrożkolandia" z dwiema oryginalnymi ławkami z czasów Mrożka,
 * — ZAGŁADA ROMÓW: w czasie okupacji niemieckiej Niemcy rozstrzelali
 *   w borzęcińskim lesie 29 Romów z grupy Polska Roma — rodziny
 *   Majewskich, Kwiatkowskich, Chmielewskich i Cioroniów; trzech
 *   mężczyzn, pięć kobiet i dwadzieścioro jeden dzieci. Szczątki
 *   ekshumowano w 1959 i ponownie w 2017 r. Obelisk w lesie odsłonięto
 *   23.07.2011 (autorka Małgorzata Mirga-Tas, z wersem Papuszy);
 *   Pomnik Pamięci o Zagładzie Romów na cmentarzu w Borzęcinie Dolnym
 *   odsłonięto 28.07.2017 (rzeźba w piaskowcu, Andras Kallai).
 *   ⚠️ ŹRÓDŁA PODAJĄ ROK 1942 ALBO 1943 — na stronie piszę
 *   „w czasie okupacji niemieckiej", bez daty rocznej,
 * — METRYKA: wieś lokował biskup krakowski Bodzanta Jankowski
 *   w 1364 r. na karczowisku leśnym, pierwotna nazwa Bodzantin;
 *   w tym samym roku erygowano parafię. Pierwsza wzmianka źródłowa:
 *   Liber Beneficiorum Długosza, 1475 r. Własność biskupów
 *   krakowskich (klucz radłowski) do 1782 r.,
 * — ZABYTKI: kościół Narodzenia NMP w Borzęcinie (1680–1720),
 *   neogotycki kościół w Bielczy (1906–1908), dwór w Przyborowie
 *   (przed 1847), kapliczka św. Floriana w Łękach (1760).
 *   Pięć cmentarzy wojennych z I wojny światowej: nr 266 Borzęcin
 *   (481 żołnierzy), nr 267 Waryś, nr 272 i 274 Przyborów,
 *   nr 279 Bielcza. Ok. 200 zabytkowych chałup drewnianych,
 * — ŚWIĘTO GRZYBA: XIX edycja 8–9 sierpnia 2026; konkurs grzybowy
 *   i degustacja potraw w niedzielę na stadionie w Borzęcinie-Borku.
 *   Odbywa się razem z Dniami Gminy Borzęcin. ⚠️ NUMERACJA EDYCJI
 *   JEST NIESPÓJNA między źródłami — nie podaję numeru,
 * — WODA I PRZYRODA: łowiska „Aktywny Wypoczynek" i „Zbyszko"
 *   w Przyborowie; stawy hodowlane na pograniczu Przyborowa
 *   i Rudy-Rysie (ok. 40 ha); obszary chronionego krajobrazu
 *   Bratucki i Radłowsko-Wierzchosławicki. Rzeka gminy: USZWICA,
 * — TRANSPORT: A4 przebiega NA POŁUDNIE od gminy, węzła w gminie
 *   nie ma. Gminne Przewozy Autobusowe od 1 sierpnia 2023
 *   (operator JANPOL), dwie linie; gmina dołożyła do trasy
 *   Waryś–Bielcza–Brzesko. Linia A5 Kolei Małopolskich:
 *   Wierzchosławice–Radłów–Borzęcin–Przyborów–Brzesko.
 *   Najbliższa stacja kolejowa: Biadoliny (gmina Dębno), linia 91,
 * — KGW potwierdzone: „Dworzanki" z Przyborowa (prezes Barbara
 *   Potaczek). Pełnej listy KGW nie potwierdzono,
 * — SĄSIEDZI (6): Brzesko, Dębno, Szczurowa (powiat brzeski) oraz
 *   Radłów, Wierzchosławice i Wojnicz (powiat tarnowski).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DATY ROCZNEJ MORDU ROMÓW. Źródła podają 1942 i 1943.
 *   Piszę „w czasie okupacji niemieckiej",
 * — NUMERU EDYCJI ŚWIĘTA GRZYBA. Numeracja w źródłach jest
 *   niespójna (XV w 2024 i XIX w 2026 nie składają się),
 * — WPISU NA MINISTERIALNĄ LISTĘ PRODUKTÓW TRADYCYJNYCH.
 *   Nie potwierdzono żadnego z tej gminy,
 * — NAZW PRODUCENTÓW ŻYWNOŚCI. Nie potwierdzono ani piekarni,
 *   ani masarni, ani mleczarni. Mleczarnia w Borzęcinie istniała
 *   przed 1930 r. (dziadek Mrożka był jej właścicielem) — dziś
 *   nie potwierdzona,
 * — STRUKTURY UPRAW. Brak danych. Nie piszę o sadach ani
 *   o specjalizacji warzywniczej,
 * — ODLEGŁOŚCI I CZASÓW DO BRZESKA, TARNOWA, BOCHNI I KRAKOWA
 *   oraz do stacji Biadoliny. Nie potwierdzone liczbowo,
 * — KIERUNKÓW DOJAZDÓW DO PRACY. Znane są tylko linie autobusowe,
 * — AKTUALNEGO STATUSU ŻWIROWNI CEMEX,
 * — PEŁNEJ LISTY KÓŁ GOSPODYŃ.
 *
 * PUŁAPKI:
 * — MASAKRA ROMÓW W SZCZUROWEJ TO NIE BORZĘCIN. 3 lipca 1943 r.
 *   zamordowano w Szczurowej 93 Romów; kamień z 1956 r. uznaje się
 *   za pierwszy pomnik zagłady Romów. To sąsiednia gmina,
 * — WISŁA NIE PŁYNIE PRZEZ GMINĘ BORZĘCIN. Rzeka gminy to Uszwica.
 *   Wały nad Wisłą to gmina Szczurowa,
 * — PUSZCZA RADŁOWSKA bierze nazwę od Radłowa (powiat tarnowski).
 *   Gmina leży na jej skraju, puszcza nie „leży w gminie",
 * — OBSZARY CHRONIONEGO KRAJOBRAZU ≠ REZERWATY. Rezerwatu
 *   w gminie nie potwierdzono,
 * — INNE BORZĘCINY: w mazowieckim oraz Borzęcin Duży i Mały
 *   w gminie Stare Babice pod Warszawą,
 * — „BORZĘCIN REMED" TO PRZYSTANEK PRZY PRZYCHODNI, nie zakład,
 * — MROŻEK NIE MIESZKAŁ W BORZĘCINIE — wyjechał w wieku trzech lat.
 *   „Rodzinna wieś" jest poprawne, „miasteczko dzieciństwa" nie.
 */

export const BORZECIN: CityContent = {
  slug: "borzecin",
  h1: "Thermomix Borzęcin – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Borzęcin — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Borzęcin: bezpłatna prezentacja TM7 u Ciebie w kuchni — Borzęcin Górny i Dolny, Bielcza, Przyborów, Łęki. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Borzęcin — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Borzęcin. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Borzęcin przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich siedmiu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie siedem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Borzęcin – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Borzęcinie Górnym, jak w Dolnym, w Bielczy, Przyborowie czy Łękach.",
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
      heading: "Największa wieś w powiecie, siedemdziesiąt dziewięć osób na kilometr",
      paragraphs: [
        "Borzęcin jest największą wsią w powiecie brzeskim — mieszka w nim około trzech tysięcy siedmiuset osób — i jednocześnie jest podzielony na dwa sołectwa, Górny i Dolny. To nie są dwie osobne miejscowości, tylko jedna wieś z dwoma sołtysami, i warto to wiedzieć, zanim się zacznie szukać adresu.",
        "Cała gmina zajmuje sto trzy kilometry kwadratowe przy ośmiu tysiącach mieszkańców, czyli siedemdziesiąt dziewięć osób na kilometr kwadratowy. To bardzo rzadko jak na powiat brzeski, w którym samo Brzesko ma trzysta czterdzieści siedem. Powodem jest las: gmina leży na skraju kompleksu Puszczy Radłowskiej, w Kotlinie Sandomierskiej, w krajobrazie łąk, pól, moczarów i torfowisk.",
        "Z lasu bierze się też jedyna rzecz, którą tę gminę da się opisać kulinarnie bez zmyślania. Borzęcin organizuje Borzęckie Święto Grzyba — w dwa tysiące dwudziestym szóstym roku ósmego i dziewiątego sierpnia, razem z Dniami Gminy — a w programie jest konkurs grzybowy i degustacja potraw z grzybów. Wójt mówi o tym wprost: zbieranie grzybów jest tu praktyką pokoleniową, a nie atrakcją turystyczną.",
        "Wieś jest stara. Lokował ją biskup krakowski Bodzanta Jankowski w tysiąc trzysta sześćdziesiątym czwartym roku, na karczowisku wyciętym w lesie, i wtedy nazywała się Bodzantin. Do tysiąc siedemset osiemdziesiątego drugiego roku należała do biskupów krakowskich. Kościół Narodzenia Najświętszej Marii Panny budowano na przełomie siedemnastego i osiemnastego wieku, a w Bielczy stoi neogotycki z lat tysiąc dziewięćset sześć–osiem.",
        "Tu urodził się Sławomir Mrożek — dwudziestego dziewiątego czerwca tysiąc dziewięćset trzydziestego roku. Jego ojciec pracował na miejscowej poczcie, matka była córką właściciela wiejskiej mleczarni. Rodzina wyjechała do Krakowa, gdy chłopiec miał trzy lata, więc „rodzinna wieś” jest tu określeniem poprawnym, a „miasteczko dzieciństwa” już nie. W tutejszej szkole urządzono salę pamięci z dwiema oryginalnymi ławkami z jego czasów. Ciekawostka, która brzmi jak jego opowiadanie: w dokumentach urzędowych figuruje błędna data urodzenia, bo pomylono się na borzęcińskiej poczcie.",
        "Jest też w tej gminie miejsce, o którym trzeba wspomnieć, choć to nie jest treść na stronę o gotowaniu. W czasie okupacji niemieckiej Niemcy rozstrzelali w borzęcińskim lesie dwadzieścioro dziewięcioro Romów — trzech mężczyzn, pięć kobiet i dwadzieścioro jeden dzieci. Od dwa tysiące jedenastego roku stoi tam obelisk, a od dwa tysiące siedemnastego pomnik na cmentarzu w Borzęcinie Dolnym. Piszę o tym, bo to część tej gminy, a nie dlatego, żeby coś tym sprzedać.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Borzęcin?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa: Borzęcin Górny, Borzęcin Dolny, Bielcza, Przyborów, Łęki, Jagniówka albo Waryś. Gmina jest rozległa — ponad sto kilometrów kwadratowych — więc nazwa miejscowości naprawdę pomaga mi ułożyć trasę. Dopłaty za odległość i tak nie ma nigdzie.",
        "Jeśli macie gospodarstwo, powiedzcie po prostu, o której macie spokojną godzinę. Dopasowuję się do obrządku i do prac polowych, nie odwrotnie. Weekendy są równie normalnym terminem jak wieczory w tygodniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Borzęcin"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której miejsc pracy jest mniej niż ludzi chętnych",
      paragraphs: [
        "W gminie Borzęcin na tysiąc mieszkańców przypada osiemdziesięciu dwóch pracujących. To jeden z najniższych wskaźników w powiecie i znaczy dokładnie tyle, że pracy na miejscu jest mało, a większość dorosłych codziennie stąd wyjeżdża albo prowadzi własną, najczęściej jednoosobową działalność. Sześćset dziewięćdziesiąt jeden zarejestrowanych podmiotów, z czego pięćset osiemdziesiąt siedem to osoby fizyczne.",
        "To, co w gminie faktycznie daje pracę, to kruszywo i budowlanka. Działa tu żwirownia dużego koncernu i dwie kopalnie kruszywa, a lista firm budowlanych z gminnego kuriera jest dłuższa niż lista wszystkiego innego razem wziętego. Do tego strefa aktywności gospodarczej w Borzęcinie-Borku, której wszystkie działki inwestycyjne sprzedano.",
        "Dla domu oznacza to dzień, który zaczyna się wcześnie i kończy późno, a obiad wypada gdzieś pomiędzy — albo nie wypada wcale. I tu praktyczna korzyść jest bardzo prosta, bez żadnego folderu. Wstawiasz danie jednogarnkowe i wychodzisz. Gotuje się bez nikogo, samo się wyłącza, nie przypala i czeka. Wracasz o dowolnej porze i jest ciepły obiad.",
        "Druga rzecz to grzyby, bo w tej gminie to nie jest hobby, tylko sierpień i wrzesień. Kto zbiera, ten wie, że problemem nie jest znalezienie, tylko przerobienie: czyszczenie, krojenie, duszenie, mrożenie, marynowanie. Urządzenie kroi i dusi, i robi to w stałej temperaturze, więc nie trzeba stać. Nie posprząta natomiast grzybów i nie odróżni gatunków — tego nie obiecuję.",
        "Trzecia rzecz to gotowanie z zapasem, które w rozległej gminie ma dodatkowy sens. Do sklepu nie skoczy się tu na dół, więc zupa na kilka dni, sos, pasty kanapkowe i mrożonki robione seriami w jednym naczyniu oszczędzają nie tylko czas przy garnku, ale i kursy samochodem.",
        "I rzecz, którą mówię wprost, bo gmina się starzeje — średni wiek to czterdzieści jeden lat, a zgonów jest więcej niż urodzeń. Przy gotowaniu dla dwóch osób nie zaoszczędzicie godziny dziennie, bo tej godziny tam nie ma. Zmienia się co innego: łatwiej ugotować porządnie przy mniejszym wysiłku, a na niedzielę, kiedy zjeżdżają dzieci i wnuki, da się zrobić duży obiad bez spędzania przy nim całego przedpołudnia.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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
    heading: "Borzęcin i gotowanie — gmina, która ma własne święto grzyba",
    paragraphs: [
      "Nie znalazłam żadnego wpisu z gminy Borzęcin na ministerialnej Liście Produktów Tradycyjnych. Nie potwierdziłam też ani jednej działającej tu piekarni, masarni czy mleczarni z nazwy. Mogłabym w to miejsce wstawić coś ogólnie małopolskiego i pewnie nikt by nie sprawdził — nie zrobię tego.",
      "Jest za to coś lepszego, bo prawdziwego: grzyby. Borzęcin od lat organizuje Borzęckie Święto Grzyba, w dwa tysiące dwudziestym szóstym roku ósmego i dziewiątego sierpnia, z konkursem grzybowym i degustacją potraw na stadionie w Borzęcinie-Borku. Wójt tłumaczy to zwyczajnie: gmina w dużej części składa się z lasów, a zbieranie grzybów jest tu przekazywane z pokolenia na pokolenie.",
      "To jest, moim zdaniem, uczciwszy opis tutejszej kuchni niż jakikolwiek wymyślony „przysmak regionalny”. W gminie o gęstości siedemdziesięciu dziewięciu osób na kilometr kwadratowy, na skraju Puszczy Radłowskiej, las jest po prostu częścią spiżarni.",
      "Historyczna ciekawostka na marginesie: mleczarnia w Borzęcinie istniała jeszcze przed tysiąc dziewięćset trzydziestym rokiem — jej właścicielem był dziadek Sławomira Mrożka. Dziś nie potwierdziłam, żeby działała, więc mówię o tym w czasie przeszłym.",
      "Co z tego wynika dla urządzenia? Przy grzybach — konkretna rzecz. Duszenie, sos grzybowy, farsz do pierogów i krokietów, zupa, pasta — to jest rozdrabnianie i podgrzewanie w stałej temperaturze, czyli dokładnie to, do czego naczynie służy, a przy czym najłatwiej coś przypalić na patelni. Czyszczenia grzybów natomiast nie zabierze i nie powie Wam, co zebraliście. To zostaje po Waszej stronie.",
    ],
  },

  districtsHeading: "Gdzie w gminie Borzęcin dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu sołectw, bez żadnej dopłaty za odległość: Borzęcina Górnego, Borzęcina Dolnego, Bielczy, Przyborowa, Łęk, Jagniówki i Warysia.",
    "Gmina zajmuje sto trzy kilometry kwadratowe i liczy osiem tysięcy sto siedemnaście osób, czyli siedemdziesiąt dziewięć na kilometr kwadratowy. Sam Borzęcin, z około trzema tysiącami siedmiuset mieszkańcami, jest największą wsią w powiecie brzeskim — i jednocześnie jedną wsią podzieloną na dwa sołectwa. Jagniówka i Waryś funkcjonują zaś jednocześnie jako sołectwa i jako przysiółki, co bywa mylące.",
    "Leżymy w Kotlinie Sandomierskiej, na północ od autostrady A4, na skraju kompleksu Puszczy Radłowskiej. Rzeką gminy jest Uszwica — nie Wisła, wbrew temu, co czasem się pisze; wały wiślane to już gmina Szczurowa. W Przyborowie są łowiska, a na pograniczu z Rudami-Rysiem stawy hodowlane o powierzchni około czterdziestu hektarów.",
    "O dojeździe uczciwie: autostrada przebiega na południe od gminy, ale węzła w gminie nie ma. Od sierpnia dwa tysiące dwudziestego trzeciego roku działają gminne przewozy autobusowe na dwóch liniach, a gmina dołożyła też do trasy Waryś–Bielcza–Brzesko. Kolei w gminie nie ma — najbliższa stacja to Biadoliny w gminie Dębno. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Jedno rozstrzygnięcie, o które warto zadbać: Borzęcinów w Polsce jest kilka, między innymi pod Warszawą. Ten jest w powiecie brzeskim, kod pocztowy trzydzieści dwa myślnik osiemset dwadzieścia pięć.",
  ],
  districts: [
    "Borzęcin Górny",
    "Borzęcin Dolny",
    "Bielcza",
    "Przyborów",
    "Łęki",
    "Jagniówka",
    "Waryś",
  ],

  nearbyHeading: "Brzesko, Szczurowa, Dębno i Radłów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Borzęcin graniczy z sześcioma gminami: Brzeskiem, Dębnem i Szczurową z powiatu brzeskiego oraz Radłowem, Wierzchosławicami i Wojniczem z powiatu tarnowskiego. Do każdej z nich dojeżdżam i do żadnej nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na skraju gminy i nie masz pewności, czy to jeszcze Borzęcin, czy już Szczurowa albo Radłów — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Brzesko",
    "Szczurowa",
    "Dębno",
    "Wojnicz",
    "Bochnia",
    "Rzezawa",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Borzęcin", "w powiecie brzeskim"),

  faq: [
    {
      question: "Zbieramy grzyby. Czy to się przyda przy przerabianiu?",
      answer:
        "Przyda się przy tym, co po zbiorze. Duszenie, sos grzybowy, farsz do pierogów i krokietów, zupa i pasta to rozdrabnianie plus podgrzewanie w stałej temperaturze, czyli dokładnie to, do czego naczynie służy — i przy czym na patelni najłatwiej coś przypalić. Grzybów natomiast nie oczyści i nie rozpozna, więc tej części roboty nikt Wam nie zabierze.",
    },
    ...faqWspolne("w gminie Borzęcin"),
    {
      question: "Mieszkam w Jagniówce. To mały przysiółek — dojedziesz?",
      answer:
        "Dojadę, bez dopłaty, tak samo jak do Borzęcina. Obsługuję wszystkie siedem sołectw: Borzęcin Górny i Dolny, Bielczę, Przyborów, Łęki, Jagniówkę i Waryś. Gmina jest rozległa, ponad sto kilometrów kwadratowych, więc przy umawianiu proszę o nazwę miejscowości i punkt orientacyjny — ale odległość na cenę nie wpływa w żaden sposób.",
    },
    {
      question: "Gotujemy we dwoje, dzieci przyjeżdżają na weekend. Ma to sens?",
      answer:
        "Ma, ale argument jest inny niż przy domu pełnym dzieci i wolę to powiedzieć wprost. Przy dwóch porcjach nie zaoszczędzisz godziny dziennie, bo tej godziny tam nie ma. Zmienia się co innego: łatwiej ugotować porządnie, kiedy nie chce się stać w kuchni, a na niedzielę da się zrobić duży obiad dla całej rodziny bez spędzenia przy nim całego przedpołudnia.",
    },
  ],

  geo: { lat: 50.0605, lng: 20.7099 },
};
