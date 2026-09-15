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
 * MILANÓWEK — powiat grodziski, woj. mazowieckie.
 * MIASTO 16 411 (GUS 31.12.2024), 13,4 km², 1221,1 os./km².
 *
 * ⚠ HOMONIMY: MILANÓWEK ≠ MILANÓW (lubelskie i mazowieckie)
 *   ≠ MIŁAKOWO. FAQ to rozróżnia.
 *
 * HISTORIA:
 * — 1899 — spółka „Kozłowski-Lasocki i spółka" Michała
 *   Lasockiego parceluje grunty, tworząc LETNISKO MILANÓWEK;
 *   1901 — stacja Kolei Warszawsko-Wiedeńskiej; 1919 —
 *   samodzielna „Gmina Letnisko Milanówek"; 1925 —
 *   elektryfikacja; 1936 — linia EKD z Warszawy; 1951 —
 *   PRAWA MIEJSKIE; 1989 — zespół urbanistyczno-krajobrazowy
 *   miasta wpisany do rejestru zabytków,
 *   ⚠ KĄTU LETNISKOWEGO NIE UŻYWAM — „dom letniskowy, który
 *     stał się całoroczny" (Józefów) ZAJĘTY.
 * — Milanówek-Falęcin figuruje wśród stanowisk mazowieckiego
 *   centrum hutniczego (II w. p.n.e. – V w. n.e.).
 *
 * ⚠⚠ JEDWABNICTWO — PODSTAWA KĄTA:
 * — 1924 — Henryk Witaczek (uczył się jedwabnictwa w Gruzji)
 *   wraz z siostrą Stanisławą zakłada CENTRALNĄ DOŚWIADCZALNĄ
 *   STACJĘ JEDWABNICZĄ w willi przy ul. Piasta 13,
 * — 1926 — Towarzystwo Popierania Jedwabnictwa w Warszawie;
 *   1930 — otwarcia zakładu dokonuje prezydent Ignacy
 *   Mościcki; 1935 — tkanina spadochronowa na Targach
 *   Poznańskich; 1946 — 8000 metrów tkanin jedwabnych
 *   i 3000 hodowców,
 * — ⚠⚠ SKALA PASZY — TO JEST KOTWICA:
 *   — z 20 g greny (jaj) wykluwa się hodowla mieszcząca się
 *     W JEDNYM POKOJU, która przez ok. 5 TYGODNI w czerwcu
 *     i lipcu ZJADA OK. 600 KG LIŚCI MORWY,
 *   — źródło rządowe (poradnik MODR, gov.pl): na wykarmienie
 *     osobników z 25 g greny potrzeba OK. 1000 KG ŚWIEŻYCH
 *     LIŚCI MORWY.
 *   ⚠ PODAJĘ OBIE LICZBY JAKO RZĄD WIELKOŚCI, wskazując
 *     źródła opisowo. NIE PODAJĘ liczby „60 kg na larwę"
 *     — to zniekształcony przekaz.
 * — morwę sadzono W MILANÓWKU WYŁĄCZNIE DLA LIŚCI; owoc
 *   nie miał znaczenia gospodarczego. „Gorączka jedwabna":
 *   rząd promował sadzenie morwy m.in. przy stacjach
 *   kolejowych,
 * — firma jedwabnicza działa przy ul. Brzozowej 1;
 *   we wrześniu 2024 miasto obchodziło 100-lecie jedwabnictwa
 *   festiwalem „Sploty Historii" (20–22.09.2024).
 *   ⚠ NAZWY FIRMY NIE PODAJĘ. TWARDA GRANICA.
 * — ⚠ NIE USTALONO, ILE MORW ROŚNIE DZIŚ W MIEŚCIE —
 *   NIE TWIERDZĘ NIC NA TEN TEMAT. TWARDA GRANICA.
 *
 * ZABYTKI: Willa Waleria, ul. Spacerowa 20 — 1910, inwestor
 * Rufin Morozowicz dla żony Walerii; po pożarze 1915
 * odbudowana w 1920 jako parterowa; wpis do rejestru 1982;
 * od 1931 dom Marii Morozowicz-Szczepkowskiej i rzeźbiarza
 * Jana Szczepkowskiego, dziś centrum kultury. Willa Józefina,
 * ul. Piasta 13 — siedziba CDSJ od 1924. Dworzec Kolei
 * Warszawsko-Wiedeńskiej, ul. Warszawska 32 (stacja od 1901).
 * Kościół pw. św. Jadwigi Śląskiej (parafia erygowana 1928).
 * Zespół willowo-parkowy Turczynek. Szlak „Wille Milanowskie"
 * liczy 31 obiektów, większość z lat 20. i 30. XX w.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE ZNALEZIONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH.
 *
 * KĄT: UBYTEK PRZY OBRÓBCE — ile z kilograma naprawdę
 * zostaje na talerzu.
 * Kąt od proporcji, na której stało całe milanowskie
 * jedwabnictwo: żeby dostać garść jedwabiu, trzeba było
 * wykarmić gąsienice setkami kilogramów liści morwy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy zakupach myślimy o wadze surowca, a jemy wagę
 *   po obróbce — i że różnica bywa kilkukrotna,
 * — ŻE TO NAJCZĘSTSZA PRZYCZYNA DWÓCH SYTUACJI: „kupiłam
 *   za mało" i „po co ja wzięłam tyle",
 * — GDZIE UBYTEK JEST NAJWIĘKSZY:
 *   — WARZYWA LIŚCIASTE — szpinak, jarmuż, botwina: z pełnej
 *     torby zostaje kilka łyżek, bo to głównie woda,
 *   — PIECZARKI I GRZYBY — kurczą się na patelni o ponad
 *     połowę,
 *   — CEBULA duszona długo — z kilku sztuk zostaje pół
 *     szklanki,
 *   — MIĘSO — traci przy obróbce znaczną część wagi,
 *     a im dłużej i mocniej, tym więcej,
 * — GDZIE JEST ODWROTNIE — SKŁADNIK ROŚNIE:
 *   — kasze, ryż i makaron po ugotowaniu ważą wielokrotnie
 *     więcej niż suche,
 *   — strączki namoczone i ugotowane też,
 *   ⚠ BEZ PODAWANIA PRZELICZNIKÓW LICZBOWYCH. TWARDA GRANICA.
 * — ŻE DLATEGO PRZEPISY BYWAJĄ MYLĄCE: jedne podają wagę
 *   surową, inne ugotowaną, a rzadko która mówi którą,
 * — ŻE PRAKTYCZNY WNIOSEK JEST PROSTY: przy liściastych
 *   i grzybach kupować z dużym zapasem, przy kaszach
 *   i makaronach — znacznie mniej, niż podpowiada instynkt,
 * — ŻE OBIERANIE TEŻ JEST UBYTKIEM i przy niektórych
 *   warzywach zabiera sporo ⚠ ODSYŁAM DO STRONY O OBIERKACH,
 *   NIE ROZWIJAM,
 * — ŻE WARTO RAZ ZWAŻYĆ SWOJE STAŁE DANIE i zapisać wynik,
 *   bo pamięć w tej sprawie jest wyjątkowo zawodna,
 * — UCZCIWIE: urządzenie nie zmniejszy ubytku — woda
 *   odparuje tyle samo,
 * — ale ma wbudowaną wagę, co przy tym temacie jest
 *   praktyczne: można zważyć surowiec i gotowe danie bez
 *   wyjmowania czegokolwiek, a przy porcjowaniu i mrożeniu
 *   to jest właśnie ta informacja, której zwykle brakuje.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ⚠⚠ ŻADNYCH PRZELICZNIKÓW I PROPORCJI LICZBOWYCH
 *   („z kilograma zostaje X") — piszę OPISOWO: „kilkukrotnie",
 *   „ponad połowa", „kilka łyżek". TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I KALORYCZNYCH.
 *   ZERO tez o dietach i liczeniu kalorii. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO TEMATU HODOWLI OWADÓW JAKO JEDZENIA.
 *   Jedwabniki to tu wyłącznie fakt gospodarczy z historii
 *   miasta. TWARDA GRANICA.
 * — ZERO tematu morwy jako owocu — sadzono ją dla liści.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO tematu zamożności miasta.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „miary" dotyczą ODMIERZANIA SKŁADNIKÓW.
 * — „NADMIAR JEDNEGO SKŁADNIKA" (Wysokie Mazowieckie)
 *   dotyczy TEGO, CO ZOSTAŁO W DOMU.
 * — „kilogramy zamiast porcji" dotyczy SKALOWANIA PRZEPISU
 *   W GÓRĘ.
 * — „gotowanie mniejszych porcji, niż podaje przepis"
 *   dotyczy SKALOWANIA W DÓŁ.
 * — „ODSĄCZANIE I ODCISKANIE" (Łapy) dotyczy USUWANIA WODY
 *   ZE SKŁADNIKA PRZED GOTOWANIEM.
 * — „ILE NAPRAWDĘ KOSZTUJE DOMOWY OBIAD" dotyczy PIENIĘDZY.
 * TUTAJ chodzi o RÓŻNICĘ MIĘDZY WAGĄ SUROWCA A WAGĄ
 * GOTOWEGO DANIA — o to, ile ubywa albo przybywa w trakcie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE TWIERDZĘ, ile morw rośnie dziś w Milanówku.
 * — NIE PODAJĘ nazwy firmy jedwabniczej.
 * — NIE PODAJĘ przeliczników wagowych.
 * — NIE WYMYŚLAM produktu lokalnego ani święta kulinarnego.
 * — NIE MYLĘ MILANÓWKA z MILANOWEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Letnisko Milanówek powstało w 1899 r. z parcelacji
 *   gruntów przez spółkę Michała Lasockiego; stację Kolei
 *   Warszawsko-Wiedeńskiej otwarto w 1901 r., samodzielną
 *   gminę utworzono w 1919 r., elektryfikację przeprowadzono
 *   w 1925, linię EKD z Warszawy uruchomiono w 1936,
 *   prawa miejskie miejscowość otrzymała w 1951 r.,
 *   a w 1989 r. zespół urbanistyczno-krajobrazowy miasta
 *   wpisano do rejestru zabytków,
 * — w 1924 r. Henryk Witaczek, który uczył się jedwabnictwa
 *   w Gruzji, wraz z siostrą Stanisławą założył w willi przy
 *   ulicy Piasta 13 Centralną Doświadczalną Stację
 *   Jedwabniczą; w 1926 r. powstało Towarzystwo Popierania
 *   Jedwabnictwa, w 1930 r. zakład otwierał prezydent Ignacy
 *   Mościcki, w 1935 r. pokazano tkaninę spadochronową
 *   na Targach Poznańskich, a w 1946 r. wyprodukowano osiem
 *   tysięcy metrów tkanin jedwabnych przy trzech tysiącach
 *   hodowców,
 * — hodowla z dwudziestu gramów greny mieściła się w jednym
 *   pokoju i przez około pięć tygodni w czerwcu i lipcu
 *   zjadała około sześciuset kilogramów liści morwy;
 *   poradnik ośrodka doradztwa rolniczego podaje, że
 *   na wykarmienie osobników z dwudziestu pięciu gramów
 *   greny potrzeba około tysiąca kilogramów świeżych liści,
 * — morwę sadzono tu wyłącznie dla liści, a rząd promował
 *   jej sadzenie między innymi przy stacjach kolejowych,
 * — we wrześniu 2024 r. miasto obchodziło stulecie
 *   jedwabnictwa festiwalem „Sploty Historii",
 * — Willa Waleria przy ulicy Spacerowej 20 powstała w 1910 r.
 *   dla żony Rufina Morozowicza, po pożarze odbudowano ją
 *   w 1920 r. jako parterową, a do rejestru zabytków wpisano
 *   w 1982 r.; od 1931 r. mieszkali w niej Maria
 *   Morozowicz-Szczepkowska i rzeźbiarz Jan Szczepkowski,
 *   a dziś mieści się tam centrum kultury,
 * — szlak „Wille Milanowskie" liczy trzydzieści jeden
 *   obiektów, w większości z lat dwudziestych
 *   i trzydziestych XX w.
 */
export const MILANOWEK: CityContent = {
  slug: "milanowek",
  h1: "Thermomix Milanówek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Milanówek — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Milanówku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Milanówek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Milanówku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Milanówka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Milanówek"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kupujemy wagę surowca, a jemy wagę po obróbce. Różnica bywa kilkukrotna.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Milanówku – jak wygląda prezentacja?",
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
      id: "ubytek",
      heading: "Tysiąc kilogramów liści na garść jedwabiu — czyli o tym, ile z czego zostaje",
      paragraphs: [
        "W 1924 roku Henryk Witaczek wraz z siostrą Stanisławą założył w Milanówku Centralną Doświadczalną Stację Jedwabniczą. Miasto żyło z jedwabiu przez kolejne dziesięciolecia — w 1946 roku wyprodukowano tu osiem tysięcy metrów tkanin, a w hodowlę zaangażowane były trzy tysiące osób.",
        "Najbardziej uderzająca w tej historii jest jednak proporcja. Hodowla z dwudziestu gramów greny, czyli jaj jedwabnika, mieściła się w jednym zwykłym pokoju. I przez pięć tygodni zjadała około sześciuset kilogramów liści morwy. Poradnik ośrodka doradztwa rolniczego podaje jeszcze wyraźniejszą liczbę: przy dwudziestu pięciu gramach greny to już około tysiąca kilogramów. Tonę liści trzeba było zerwać i wnieść po schodach, żeby na końcu dostać garść nici.",
        "Ta proporcja — dużo na wejściu, mało na wyjściu — rządzi też kuchnią, tylko że w kuchni nikt o niej nie myśli. Kupujemy wagę surowca, a jemy wagę po obróbce. Różnica bywa kilkukrotna i odpowiada za dwie najczęstsze sytuacje przy garnku: „kupiłam za mało” i „po co ja wzięłam tyle”.",
        "Największy ubytek dają warzywa liściaste. Szpinak, jarmuż, botwina, boćwina — z wielkiej, nieporęcznej torby zostaje kilka łyżek, bo to w ogromnej większości woda. Kto raz zrobił szpinak na pełny obiad, ten kupuje potem ilości, które w sklepie wyglądają absurdalnie, i ma rację.",
        "Podobnie zachowują się grzyby i pieczarki — na patelni kurczą się o ponad połowę. I cebula duszona długo, na złoto: z kilku dużych sztuk zostaje pół szklanki. Mięso też traci przy obróbce sporo wagi, a im dłużej i mocniej się je piecze, tym więcej.",
        "Jest jednak druga grupa, w której dzieje się dokładnie odwrotnie — i to ona odpowiada za garnki, których nikt nie zdoła zjeść. Kasze, ryż i makaron po ugotowaniu ważą wielokrotnie więcej niż suche. To samo dotyczy strączków: fasola namoczona i ugotowana to zupełnie inna objętość niż fasola z torebki. Przy tych produktach instynkt myli się w drugą stronę, i dlatego tak często kończy się garnkiem kaszy na trzy dni.",
        "Stąd bierze się też rzecz, która potrafi popsuć przepis: jedne przepisy podają wagę surową, inne ugotowaną, a rzadko która mówi, którą ma na myśli. Przy makaronie i kaszy to jest różnica, która decyduje o całej porcji.",
        "Praktyczny wniosek jest krótki. Przy liściastych, grzybach i cebuli kupować z dużym zapasem. Przy kaszach, ryżu, makaronie i strączkach — znacznie mniej, niż podpowiada ręka.",
        "Warto pamiętać, że obieranie też jest ubytkiem, i przy niektórych warzywach zabiera go sporo — ale o tym, co wyrzucamy przed gotowaniem, pisałam osobno.",
        "Najlepsza rzecz, jaką można w tej sprawie zrobić, zajmuje jedno popołudnie: raz zważyć swoje stałe danie — to, które robicie co tydzień — i zapisać, ile surowca weszło i ile wyszło. Pamięć jest w tej sprawie wyjątkowo zawodna, a jedna zapisana liczba kończy temat na lata.",
        "Teraz uczciwie o sprzęcie. Thermomix ubytku nie zmniejszy. Woda odparuje tyle samo, szpinak skurczy się tak samo, mięso straci tyle samo. To fizyka, nie funkcja.",
        "Ma natomiast wbudowaną wagę i akurat przy tym temacie jest to bardziej praktyczne, niż brzmi. Można zważyć surowiec, a potem gotowe danie, nie przekładając niczego do osobnej miski — a przy porcjowaniu i mrożeniu to jest dokładnie ta informacja, której zwykle nie ma. Dzięki niej „jedna porcja” przestaje być zgadywaniem.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Milanówku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, ile osób siada u Was do stołu — pokażę, jak dobrać ilości tak, żeby nie zostawało pół garnka.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Milanówku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla milanowskiej rodziny",
      paragraphs: [
        "Milanówek liczy ponad szesnaście tysięcy mieszkańców na trzynastu i pół kilometra kwadratowego. Powstał w 1899 roku jako Letnisko Milanówek, z parcelacji gruntów przez spółkę Michała Lasockiego; stację Kolei Warszawsko-Wiedeńskiej otwarto w 1901, samodzielną gminę utworzono w 1919, elektryfikację przeprowadzono w 1925, linię podmiejskiej kolei z Warszawy uruchomiono w 1936, prawa miejskie miasto otrzymało w 1951, a w 1989 roku jego zespół urbanistyczno-krajobrazowy wpisano do rejestru zabytków. Najbardziej osobliwą kartą Milanówka jest jednak jedwabnictwo: w 1924 roku Henryk Witaczek, który uczył się fachu w Gruzji, wraz z siostrą Stanisławą założył w willi przy ulicy Piasta 13 Centralną Doświadczalną Stację Jedwabniczą. W 1926 powstało Towarzystwo Popierania Jedwabnictwa, w 1930 zakład otwierał prezydent Ignacy Mościcki, w 1935 pokazano tkaninę spadochronową na Targach Poznańskich, a w 1946 wyprodukowano osiem tysięcy metrów tkanin przy trzech tysiącach hodowców. Hodowla z dwudziestu gramów greny mieściła się w jednym pokoju i przez pięć tygodni zjadała około sześciuset kilogramów liści morwy — sadzonej tutaj wyłącznie dla liści, między innymi przy stacjach kolejowych. We wrześniu 2024 roku miasto obchodziło stulecie jedwabnictwa festiwalem „Sploty Historii”. Willa Waleria przy ulicy Spacerowej 20 powstała w 1910 roku, po pożarze odbudowano ją w 1920 jako parterową, a do rejestru zabytków wpisano w 1982; od 1931 mieszkali w niej Maria Morozowicz-Szczepkowska i rzeźbiarz Jan Szczepkowski, dziś mieści się tam centrum kultury. Szlak „Wille Milanowskie” liczy trzydzieści jeden obiektów, w większości z lat dwudziestych i trzydziestych XX wieku.",
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

  districtsHeading: "Do których części Milanówka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — na Grudów, Polesie, Turczynek, Kazimierówkę, Chrzanów, Nową Wieś i do zabudowy willowej wokół stacji.",
    "Przy umawianiu wystarczy podać ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Grudów", "Polesie", "Turczynek", "Kazimierówka"],

  nearbyHeading: "Poza Milanówek też przyjadę",
  nearbyParagraphs: [
    "Grodzisk Mazowiecki, Brwinów, Podkowa Leśna, Żabia Wola i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Grodzisk Mazowiecki", "Brwinów", "Podkowa Leśna", "Pruszków"],

  about: blokOMnie("do Milanówka", "w Milanówku", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Milanówka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — na Grudów, Polesie, Turczynek, Kazimierówkę i do zabudowy willowej wokół stacji. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Milanówek w powiecie grodziskim, a nie o Milanów.",
    },
    ...faqWspolne("w Milanówku"),
    {
      question: "Ile szpinaku kupić na obiad?",
      answer:
        "Znacznie więcej, niż podpowiada instynkt. Warzywa liściaste — szpinak, jarmuż, botwina — to w ogromnej większości woda, więc z wielkiej torby zostaje kilka łyżek. Podobnie kurczą się grzyby i pieczarki, o ponad połowę, oraz cebula duszona długo na złoto.",
    },
    {
      question: "Dlaczego zawsze wychodzi za dużo kaszy?",
      answer:
        "Bo kasze, ryż, makaron i strączki po ugotowaniu ważą wielokrotnie więcej niż suche — przy nich instynkt myli się w drugą stronę niż przy warzywach. Kłopotu dokłada to, że jedne przepisy podają wagę surową, inne ugotowaną, a rzadko która mówi, którą ma na myśli.",
    },
    {
      question: "Jak ustalić właściwe ilości dla swojej rodziny?",
      answer:
        "Raz zważyć swoje stałe danie — to, które robicie co tydzień — i zapisać, ile surowca weszło i ile wyszło gotowego. Pamięć jest w tej sprawie wyjątkowo zawodna, a jedna zapisana liczba kończy temat na lata.",
    },
  ],

  geo: { lat: 52.1185, lng: 20.6717 },
};
