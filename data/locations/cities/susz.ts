import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * SUSZ — gmina miejsko-wiejska w powiecie iławskim.
 * MIASTO 5 217, GMINA 11 713 (GUS 31.12.2024).
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * ⚠⚠ NAJWIĘKSZA KOLIZJA SEO W CAŁYM SERWISIE: „susz" to
 * także rzeczownik pospolity — susz owocowy, warzywny,
 * grzybowy. Na stronie o gotowaniu to katastrofalne.
 * KONSEKWENTNIE piszę „Susz (miasto)", „w Suszu", „gmina
 * Susz" i NIGDY samego „susz" w mianowniku bez kontekstu.
 * FAQ MUSI to rozróżniać.
 *
 * PRAWA MIEJSKIE — ROZBIEŻNE: 19 października 1319 /
 * 1319 bez dnia / 20 grudnia 1314. PISZĘ „1319", bo dwa
 * niezależne źródła, w tym urzędowe, zgadzają się co do roku.
 * Osada pruska Susse zlokalizowana 1305; miasto wznoszone
 * 1305–1310 jako STOLICA KAPITUŁY POMEZAŃSKIEJ.
 * ⚠ WYSTAWCY IMIENNIE NIE PODAJĘ — nie potwierdzono.
 * 1454 — inkorporacja do Korony przez Kazimierza
 * Jagiellończyka, na prośbę Związku Pruskiego.
 * PRZYNALEŻNOŚĆ: POMEZANIA / POWIŚLE, dominium KAPITUŁY
 * POMEZAŃSKIEJ, potem Prusy Królewskie.
 * ⚠ OBALONE: „Susz to Warmia" i „Susz to Mazury" — obie
 * fałszywe. OBALONE też „Susz to Prusy Górne" — Prusy Górne
 * to Pasłęk i Morąg.
 *
 * MURY MIEJSKIE: pierwotnie mur, fosa i 17 WIEŻ; trzecia
 * brama, WODNA, prowadziła do jeziora miejskiego.
 * ⚠ ZACHOWANE TYLKO FRAGMENTY — NIE PISZĘ „miasto otoczone
 * murami" ani „najdłuższe mury w Polsce".
 * KOŚCIÓŁ ŚW. ANTONIEGO PADEWSKIEGO — XIV w. / 1315, dziś
 * sanktuarium, układ krzyżowy, zachowane freski.
 * KOŚCIÓŁ ŚW. ROZALII — 1905, neogotyk.
 * DWORZEC KOLEJOWY 1876, SZKOŁA 1881–1882, POCZTA 1901.
 * JEZIORO SUSKIE — miasto na jego północnym i zachodnim
 * brzegu.
 * REZERWAT „JEZIORO GAUDY" — zarządzenie z 23 STYCZNIA
 * 1957 r., 332,53 ha, ok. 85% tereny podmokłe, 124 gatunki
 * ptaków; bobry reintrodukowane w 1998 r. GMINA SUSZ.
 * PARK KRAJOBRAZOWY POJEZIERZA IŁAWSKIEGO — utworzony 1993,
 * 25 045 ha + otulina; obejmuje m.in. gminę Susz.
 * SUSZ TRIATHLON — pierwsza edycja 1991; XXV EDYCJA
 * 26–28 CZERWCA 2026 r.; ponad 1 000 zawodników; pływanie
 * w jeziorze Suskim; w 2026 gospodarz Mistrzostw Polski
 * w aquathlonie.
 * ⚠ OBALONE: „nieprzerwanie od 1991" — między 1991 a 2026
 * minęło 35 lat, a to dopiero 25. edycja. NIE PISZĘ
 * „co roku od 1991" ani „35. edycja".
 *
 * KĄT: CZY MYĆ NACZYNIE MIĘDZY ETAPAMI. Kąt od triathlonu:
 * zawodów, w których o wyniku decyduje strefa zmian.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy jednym naczyniu do wszystkiego pytanie „myć czy
 *   nie" pada przy każdym daniu wieloetapowym, a nikt na nie
 *   nie odpowiada,
 * — że reguła jest jedna i prosta: myć wtedy, gdy resztka
 *   POPRZEDNIEGO ETAPU zepsułaby następny,
 * — kiedy MUSICIE umyć: po czymkolwiek tłustym przed
 *   ubijaniem piany; po surowym mięsie; po ostrych i mocno
 *   aromatycznych rzeczach przed deserem; po barwiących,
 *   jak burak i kurkuma; przed czekoladą — bo woda,
 * — kiedy NIE MUSICIE: gdy następny etap i tak trafi do tego
 *   samego dania,
 * — że kolejność etapów da się zaplanować tak, żeby myć
 *   rzadziej: od suchego do mokrego, od jasnego do ciemnego,
 *   od łagodnego do ostrego,
 * — że przepłukanie to nie to samo co umycie, i kiedy
 *   wystarczy,
 * — i ODMOWA: nie doradzam sposobów mycia ani środków.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD o środkach czyszczących, zmywarce
 *   i sposobach mycia sprzętu. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH PORAD o surowym mięsie poza jedną: umyć.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PISZĘ „35. edycja" triathlonu.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945.
 * — ZERO wysiedleń i akcji „Wisła" — Powiśle było jednym
 *   z głównych obszarów osiedleńczych, więc tu szczególnie.
 * — ZERO wątku synagogi i społeczności żydowskiej.
 * — ZERO znaleziska archeologicznego z bronią.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Blat i ściereczka"
 * (Koluszki) dotyczą sprzątania stanowiska pracy. „Dno
 * naczynia" (Dobre Miasto) dotyczy przypalania. „Kolejność
 * dodawania składników" (Wolbórz) dotyczy porządku wkładania
 * w jednym daniu. Tutaj chodzi o PRZERWĘ MIĘDZY ETAPAMI
 * i o decyzję, czy naczynie musi być czyste.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dnia nadania praw miejskich ani wystawcy.
 * — NIE PISZĘ, że mury zachowały się w całości.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PISZĘ „nieprzerwanie od 1991 r." o triathlonie.
 * — NIE TWIERDZĘ, że jezioro Gaudy leży w Parku
 *   Krajobrazowym Pojezierza Iławskiego.
 * — NIE PRZYPISUJĘ Suszowi produktu z Listy Produktów
 *   Tradycyjnych — najbliższy pochodzi z Tynwałdu koło
 *   Iławy, czyli z innej gminy.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 5 217, gmina 11 713 mieszkańców,
 * — pruska osada Susse zlokalizowana w 1305 r., miasto
 *   wznoszone w latach 1305–1310 jako stolica kapituły
 *   pomezańskiej; prawa miejskie w 1319 r.,
 * — w 1454 r. Kazimierz Jagiellończyk włączył miasto
 *   do Korony,
 * — mury miejskie miały siedemnaście wież i trzy bramy,
 *   w tym Wodną prowadzącą do jeziora; zachowały się
 *   fragmenty,
 * — kościół świętego Antoniego Padewskiego z XIV w., dziś
 *   sanktuarium, z zachowanymi freskami,
 * — neogotycki kościół świętej Rozalii z 1905 r.,
 * — dworzec kolejowy z 1876 r., szkoła z lat 1881–1882,
 *   poczta z 1901 r.,
 * — rezerwat Jezioro Gaudy utworzono 23 stycznia 1957 r.
 *   na 332,53 ha; stwierdzono tam 124 gatunki ptaków,
 * — Park Krajobrazowy Pojezierza Iławskiego utworzono
 *   w 1993 r. na ponad dwudziestu pięciu tysiącach hektarów,
 * — Susz Triathlon zaczął się w 1991 r.; dwudziesta piąta
 *   edycja przypada na 26–28 czerwca 2026 r.; pływanie
 *   odbywa się w jeziorze Suskim.
 */
export const SUSZ: CityContent = {
  slug: "susz",
  h1: "Thermomix Susz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Susz (miasto, pow. iławski) — przedstawiciel",
  seoDescription:
    "Thermomix w mieście Susz w powiecie iławskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Susz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Suszu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Susza w powiecie iławskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Susz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jedno naczynie do wszystkiego znaczy: trzeba wiedzieć, kiedy je umyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Suszu – jak wygląda prezentacja?",
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
      id: "mycie-miedzy-etapami",
      heading: "Strefa zmian w triathlonie — czyli czy myć naczynie między etapami",
      paragraphs: [
        "Susz od 1991 roku organizuje triathlon; dwudziesta piąta edycja przypada na koniec czerwca 2026 roku, a pływa się w jeziorze Suskim, nad którym leży miasto. W triathlonie jest coś, o czym kibice często zapominają, a zawodnicy nie: o wyniku decyduje nie tylko bieg i rower, ale strefa zmian — to, co dzieje się między jedną konkurencją a drugą.",
        "W kuchni z jednym naczyniem do wszystkiego jest identycznie. Pytanie „myć czy nie myć między etapami” pada przy każdym daniu składającym się z więcej niż jednej czynności — i nikt na nie porządnie nie odpowiada, bo w przepisach tego etapu po prostu nie ma.",
        "Reguła jest jedna i naprawdę prosta: myjcie wtedy, gdy resztka poprzedniego etapu zepsułaby następny. Cała reszta to szczegóły.",
        "Są sytuacje, w których trzeba umyć bezwzględnie. Po czymkolwiek tłustym, jeśli następne będzie ubijanie piany — odrobina tłuszczu skutecznie uniemożliwia jej powstanie i to jest fizyka, nie przesąd. Po surowym mięsie, zawsze i bez dyskusji. Po rzeczach mocno aromatycznych — czosnku, cebuli, ostrych przyprawach — jeśli następny jest deser. Po barwiących, jak burak czy kurkuma, bo zostawiają ślad na wszystkim, co przyjdzie potem. I przed czekoladą, bo tam nawet kropla wody psuje robotę, o czym pisałam osobno.",
        "A są sytuacje, w których mycie to strata czasu — i to jest znacznie częstszy przypadek. Jeśli następny etap i tak wyląduje w tym samym daniu, resztki z poprzedniego niczemu nie przeszkodzą. Posiekaliście cebulę, teraz robicie na niej sos? Nie ma czego myć. To jest właśnie sens jednego naczynia.",
        "Najwięcej daje jednak coś innego: zaplanowanie kolejności tak, żeby myć rzadziej. Trzy zasady wystarczą. Od suchego do mokrego — najpierw zmielcie orzechy, ser czy bułkę, dopiero potem róbcie cokolwiek z płynem. Od jasnego do ciemnego. Od łagodnego do ostrego. Przy takiej kolejności całe wieloetapowe danie da się często zrobić bez ani jednego mycia po drodze.",
        "Warto też odróżnić dwie rzeczy: przepłukanie to nie to samo co umycie. Przy większości przejść między etapami wystarczy wypłukać, a nie szorować — i to jest różnica między dwudziestoma sekundami a pięcioma minutami.",
        "I granica: nie doradzę Wam, czym i jak myć samo urządzenie. Środki, temperatura wody, zmywarka i to, co wolno, a czego nie — o tym mówi instrukcja i tylko ona. Domowe sposoby z internetu bywają dla sprzętu szkodliwe i nie zamierzam ich powtarzać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Suszu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu chętnie zrobię całe wieloetapowe danie z jednego naczynia, żeby było widać, ile razy trzeba je faktycznie umyć. Zwykle mniej, niż ludzie zakładają.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Suszu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla suskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad pięć tysięcy dwustu mieszkańców, a cała gmina blisko dwanaście tysięcy. Historycznie to ani Warmia, ani Mazury, tylko Pomezania i Powiśle — miasto wznoszono w latach 1305–1310 jako stolicę kapituły pomezańskiej, a prawa miejskie ma od 1319 roku; w 1454 Kazimierz Jagiellończyk włączył je do Korony. Z dawnych fortyfikacji, w których było siedemnaście wież i trzy bramy, w tym Wodna prowadząca nad jezioro, zachowały się fragmenty murów. Stoi tu też czternastowieczny kościół świętego Antoniego Padewskiego, dziś sanktuarium, z zachowanymi freskami, oraz neogotycki kościół świętej Rozalii z 1905 roku. W gminie leży rezerwat Jezioro Gaudy, utworzony w 1957 roku, gdzie stwierdzono sto dwadzieścia cztery gatunki ptaków, a część terenu należy do Parku Krajobrazowego Pojezierza Iławskiego z 1993 roku.",
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

  districtsHeading: "Do których części gminy Susz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Susz też przyjadę",
  nearbyParagraphs: [
    "Iława, Zalewo, Prabuty, Kisielice i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Iława", "Zalewo", "Prabuty", "Lubawa"],

  about: blokOMnie("do Susza", "w Suszu i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Susza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwa bywa myląca w wyszukiwarce: chodzi o miasto Susz w powiecie iławskim, a nie o susz owocowy, warzywny czy grzybowy ani o Suszec w śląskiem.",
    },
    ...faqWspolne("w Suszu"),
    {
      question: "Czy trzeba myć naczynie między etapami gotowania?",
      answer:
        "Tylko wtedy, gdy resztka poprzedniego etapu zepsułaby następny. Umyć trzeba po tłuszczu przed ubijaniem piany, po surowym mięsie, po czosnku i ostrych przyprawach przed deserem, po burakach i kurkumie oraz przed czekoladą. W pozostałych przypadkach zwykle nie ma czego myć — i to jest właśnie sens jednego naczynia.",
    },
    {
      question: "Jak zaplanować danie, żeby myć jak najrzadziej?",
      answer:
        "Trzema zasadami: od suchego do mokrego, od jasnego do ciemnego, od łagodnego do ostrego. Najpierw zmielcie orzechy, ser czy bułkę, a dopiero potem róbcie cokolwiek z płynem. Przy takiej kolejności całe wieloetapowe danie często powstaje bez ani jednego mycia po drodze.",
    },
    {
      question: "Czym najlepiej myć Thermomix?",
      answer:
        "Tego nie doradzę. Środki, temperatura wody i to, co wolno włożyć do zmywarki, są opisane w instrukcji i tam należy tego szukać. Domowe sposoby z internetu bywają dla sprzętu szkodliwe, więc ich nie powtarzam.",
    },
  ],

  geo: { lat: 53.72, lng: 19.3372 },
};
