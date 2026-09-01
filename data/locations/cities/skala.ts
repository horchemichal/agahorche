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
 * SKAŁA — GMINA MIEJSKO-WIEJSKA w powiecie krakowskim.
 * 10 957 mieszkańców gminy (GUS, 31.12.2024), 74,8 km².
 * Miasto Skała: 3 872 mieszkańców (2024) — ok. 35% ludności gminy.
 * 17 SOŁECTW (uwaga: „Niebyła i Świńczów” to JEDNO wspólne sołectwo).
 *
 * OŚ STRONY: MIASTO, KTÓRE PRZEZ 117 LAT BYŁO WSIĄ — i miejskiej skali nie
 * odzyskało. Lokacja 10.11.1267, utrata praw 1870, przywrócenie 1986/87.
 * Domknięcie: w 1923 r. Skała miała 3 592 mieszkańców, dziś 3 872 — sto lat
 * niemal bez wzrostu; 72,6% powierzchni gminy to tereny rolnicze,
 * największym pracodawcą jest mleczarnia, a na rynku stoi cotygodniowy targ.
 * ⚠️ TO NIE JEST OŚ KRZESZOWIC. Krzeszowice = samodzielne miasteczko, które
 * NIE jest sypialnią. Skała = miasto, które PRZESTAŁO być miastem i wróciło
 * do nazwy, ale nie do skali.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — LOKACJA: 10.11.1267, ks. Bolesław Wstydliwy, NA PRAWIE ŚREDZKIM (nie
 *   magdeburskim!), fundatorka bł. Salomea. 1257 komora celna — skala.pl,
 * — UTRATA PRAW: ukaz do rządzącego senatu z 1 (13) czerwca 1869 r.,
 *   skutek 1870; łącznie pozbawiono praw 336 miast Królestwa Polskiego,
 * — PRZYWRÓCENIE: uchwała Rady Państwa z 15 grudnia 1986 r., skutek 1987,
 * — 1786 — Stanisław August Poniatowski potwierdza jarmarki i nadaje 5 nowych,
 * — LUDNOŚĆ HISTORYCZNA MIASTA: 1789 — 612; 1858 — 947; 1888 — 2 521;
 *   1923 — 3 592. Dziś 3 872. TO JEST DOMKNIĘCIE OSI,
 * — GOSPODARKA (Strategia Rozwoju Miasta i Gminy Skała 2025–2035):
 *   tereny rolnicze 72,6% powierzchni; pracujący: rolnictwo 14,3%,
 *   przemysł i budownictwo 34,9%, handel/transport/zakwaterowanie 29,1%;
 *   uprawy pszenica, ziemniaki, owoce miękkie (truskawka, malina,
 *   porzeczka, JAGODA KAMCZACKA); W 2024 R. 11 WINNIC;
 *   największy lokalny pracodawca: OKRĘGOWA SPÓŁDZIELNIA MLECZARSKA
 *   w Skale; średnia pensja w gminie 6 386 zł (wg strategii),
 * — 13 KÓŁ GOSPODYŃ WIEJSKICH wymienionych imiennie w strategii: Skała,
 *   Maszyce, Nowa Wieś, Szczodrkowice, Smardzowice, Cianowice, Rzeplin,
 *   Barbarka, Minoga, Gołyszyn, Sobiesęki, Przybysławice, Stoki,
 * — JARMARK SKALSKI — XIV edycja w 2025 r., w ramach Dni Gminy Skała
 *   (6–8 czerwca 2025); stoiska KGW i Klubu Seniora „Grota”,
 * — TARG cotygodniowy na Placu Konstytucji 3 Maja; strategia wskazuje
 *   „zwyczaj organizowania jarmarków w środy i soboty”,
 * — OPN: 1 222,56 ha = 56,98% powierzchni parku leży w gminie Skała —
 *   PONAD POŁOWA (opn.gov.pl). Wieś OJCÓW, siedziba dyrekcji OPN, jest
 *   sołectwem tej gminy. Park utworzono 14.01.1956 (Dz.U. 1956 nr 4 poz. 22),
 * — GRODZISKO: bł. Salomea przenosi tu klaryski w 1262; zespół pustelni
 *   1677–1691 (ks. Sebastian Piskorski); KAMIENNY SŁOŃ Z OBELISKIEM z 1686 r.
 *   upamiętniający Wiedeń 1683,
 * — DOJAZD: MPK linia 267 Krowodrza Górka P+R – Skała Rynek, przedłużona
 *   do Skały 7.10.2023, 9 nowych przystanków. DW 773 i DW 794. KOLEI BRAK,
 *   najbliższa stacja SKA to Słomniki, 18 km. Do Krakowa 21 km,
 * — DEMOGRAFIA: +15,2% ludności gminy od 2002, ale miasto tylko +4,9%;
 *   średni wiek 41,2; przyrost naturalny minus 3,83 na 1000,
 * — WSPÓŁRZĘDNE (UMiG, Rynek 29): 50,2302470 / 19,8528280.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WZROSTU LUDNOŚCI JAKO OSI. +15,2% to prawda, ale oś demograficzna
 *   należy do ZIELONEK. Użyte wyłącznie jako kontrast miasto/gmina,
 * — POWIERZCHNI MIASTA. GUS podaje 3,0 km², strategia gminy 11,46 km²
 *   (to obręb geodezyjny). NIE PODAWAĆ bez zastrzeżenia — pominięte,
 * — DANYCH O MLECZARNI poza faktem, że jest największym pracodawcą.
 *   Rok założenia, zatrudnienie, skup — niepotwierdzone, strona niedostępna,
 * — NAZW WINNIC. Niepotwierdzone,
 * — DNIA TYGODNIA TARGU. Przesłanki wskazują na sobotę, ale wprost
 *   niepotwierdzone. Użyta formuła ze strategii o środach i sobotach,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono żadnego,
 * — NUMERU STREFY TARYFOWEJ. Strategia mówi o II strefie aglomeracyjnej,
 *   krakow.pl o III strefie taryfowej — sprzeczność, pominięte,
 * — BEZROBOCIA Z polskawliczbach (4,3%) I WYNAGRODZENIA 8 110,12 zł.
 *   To dane POWIATOWE, identyczne dla wszystkich gmin powiatu. Użyta
 *   wyłącznie liczba 6 386 zł z własnej strategii gminy.
 *
 * PUŁAPKI:
 * — ZAMEK PIESKOWA SKAŁA NIE LEŻY W TEJ GMINIE, tylko w SUŁOSZOWEJ.
 *   Mimo nazwy. To najczęstszy błąd w tekstach o Skale,
 * — PRAWO ŚREDZKIE, nie magdeburskie,
 * — SZALOWA/GRODZISKO — nie mylić Grodziska w gminie Skała (pustelnia
 *   bł. Salomei) z Grodziskiem/Skałą 502 w Jerzmanowicach-Przegini,
 * — STRATEGIA GMINY BŁĘDNIE pisze o OPN „z siedmioma gminami”. Park leży
 *   w CZTERECH gminach, pięciu wraz z otuliną. Nie powtarzać liczby 7,
 * — ratusz.pl podaje nieaktualnego burmistrza. Aktualny: Piotr Trzcionka,
 * — POWIERZCHNIA GMINY występuje w trzech wersjach: 74,8 / 74,93 / 74,30 km².
 */

export const SKALA: CityContent = {
  slug: "skala",
  h1: "Thermomix Skała – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Skała — prezentacja i cena",
  seoDescription:
    "Thermomix w Skale i całej gminie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skała — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Skale i okolicy. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Skały, Ojcowa, Cianowic, Minogi i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

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
      heading: "Thermomix w Skale – jak wygląda prezentacja?",
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
      heading: "Sto siedemnaście lat bez praw miejskich",
      paragraphs: [
        "Skała dostała prawa miejskie dziesiątego listopada tysiąc dwieście sześćdziesiątego siódmego roku, od księcia Bolesława Wstydliwego, na prawie średzkim — nie magdeburskim, choć źródła to często upraszczają. Fundatorką była jego siostra, błogosławiona Salomea. Dziesięć lat wcześniej stała tu już komora celna.",
        "Straciła je w tysiąc osiemset siedemdziesiątym, na mocy carskiego ukazu z roku poprzedniego. Nie sama: w ramach represji po powstaniu styczniowym praw miejskich pozbawiono wtedy trzysta trzydzieści sześć miast Królestwa Polskiego. Wróciły dopiero uchwałą Rady Państwa z piętnastego grudnia tysiąc dziewięćset osiemdziesiątego szóstego roku, ze skutkiem od roku następnego.",
        "Sto siedemnaście lat jako wieś. I to jest ta część historii, która została do dziś — bo miasto z niej nie wyszło.",
        "Liczby są tu wymowniejsze niż opinie. W tysiąc dziewięćset dwudziestym trzecim roku Skała miała trzy tysiące pięćset dziewięćdziesiąt dwa mieszkańców. Dziś ma trzy tysiące osiemset siedemdziesiąt dwa. Sto lat i niecałe trzysta osób różnicy. Cała gmina w tym czasie urosła wyraźnie, ale samo miasto praktycznie stoi w miejscu.",
        "Reszta pasuje do tego obrazu. Prawie trzy czwarte powierzchni gminy to tereny rolnicze. Co siódmy pracujący pracuje w rolnictwie. Największym lokalnym pracodawcą jest okręgowa spółdzielnia mleczarska. A na placu Konstytucji Trzeciego Maja co tydzień stoi targ — w tradycji sięgającej przywileju Stanisława Augusta z tysiąc siedemset osiemdziesiątego szóstego roku, kiedy król potwierdził dotychczasowe jarmarki i nadał pięć nowych.",
        "Nie piszę tego jako zarzutu. Miasto, które przez sto siedemnaście lat było wsią i nie zaczęło udawać czegoś innego, ma swoją wartość — także dla kogoś, kto do niego przyjeżdża. Wiadomo, gdzie się kupuje warzywa i od kogo bierze się mleko.",
        "Do gminy należy jeszcze jedna rzecz, o której warto wiedzieć: prawie pięćdziesiąt siedem procent powierzchni Ojcowskiego Parku Narodowego, czyli ponad połowa najmniejszego parku narodowego w Polsce, leży właśnie tutaj. Wieś Ojców, w której mieści się dyrekcja parku, jest sołectwem gminy Skała.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Skała?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość. Gmina ma siedemnaście sołectw rozrzuconych na siedemdziesięciu pięciu kilometrach kwadratowych, od Ojcowa w dolinie po Minogę i Sobiesęki na północy — trasa do jednego i drugiego wygląda zupełnie inaczej, choć koszt jest ten sam, czyli żaden.",
        "Jeśli jesteś w kole gospodyń albo w klubie seniora i chodzi o pokaz dla kilku osób naraz, powiedz to od razu. Takie spotkanie planuję inaczej: więcej porcji, inny dobór przepisów i więcej czasu na pytania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Skała"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kuchnia, która zaczyna się na targu",
      paragraphs: [
        "W gminie z targiem na rynku i mleczarnią jako największym pracodawcą zakupy wyglądają inaczej niż w mieście z dyskontem na rogu. Kupuje się to, co akurat jest, w ilościach, jakie ktoś przywiózł, i myśli o obiedzie dopiero po powrocie do domu — a nie odwrotnie.",
        "To całkiem wygodny sposób gotowania, ale ma jedną wadę: bywa, że wraca się z kilogramem czegoś, czego nie było w planie. Trzy kilo porzeczek, bo były tanie. Worek ziemniaków. Kapusta, bo sąsiadka miała za dużo.",
        "Pierwsza rzecz, która się wtedy przydaje, to przerabianie bez pilnowania. Dżem, przecier, sok czy zupa krem gotują się bez stania nad garnkiem i bez mieszania, żeby nie przywarło. Nastawia się i wraca za pół godziny.",
        "Druga to nabiał. W gminie, gdzie mleko jest lokalne i dobre, warto wiedzieć, że jogurt, twarożek i masło robi się w domu z jednego składnika, bez sprzętu dodatkowego poza tym, co już stoi na blacie.",
        "Trzecia dotyczy owoców miękkich, których uprawia się tu sporo — truskawki, maliny, porzeczki, a od niedawna także jagoda kamczacka. Zmiksowane na mus i zamrożone zajmują w zamrażarce ułamek miejsca, a zimą wchodzą prosto do ciasta albo do jogurtu.",
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
    heading: "Skała i gotowanie — trzynaście kół gospodyń, targ i jedenaście winnic",
    paragraphs: [
      "Skała ma jedną z najgęstszych sieci kół gospodyń wiejskich, jakie widziałam w powiecie. Strategia rozwoju gminy wymienia z nazwy trzynaście: w samej Skale, w Maszycach, Nowej Wsi, Szczodrkowicach, Smardzowicach, Cianowicach, Rzeplinie, Barbarce, Minodze, Gołyszynie, Sobiesękach, Przybysławicach i Stokach.",
      "Raz w roku wszystkie spotykają się na Jarmarku Skalskim, organizowanym w ramach Dni Gminy Skała — w dwa tysiące dwudziestym piątym roku odbyła się już czternasta edycja. Obok kół stoisko ma tam także Klub Seniora Grota.",
      "Poza tym co tydzień jest targ na placu Konstytucji Trzeciego Maja. Strategia gminy opisuje zwyczaj jarmarków w środy i soboty jako jedną z rzeczy, które nadają rynkowi charakter — i to akurat jest tradycja z papierami, bo przywilej na jarmarki potwierdził tu Stanisław August w tysiąc siedemset osiemdziesiątym szóstym roku.",
      "Uprawia się tu pszenicę i ziemniaki, ale najciekawsza jest lista owoców miękkich: truskawka, malina, porzeczka i jagoda kamczacka. Do tego jedenaście winnic działających w gminie w dwa tysiące dwudziestym czwartym roku i szlak rowerowy prowadzący między nimi. Do tego mleczarnia, czyli lokalny nabiał z krótkiej drogi.",
      "Dla urządzenia najbardziej sensowne są tu trzy rzeczy: przetwory z owoców miękkich, domowy nabiał z dobrego mleka i gotowanie dla większej grupy, kiedy przychodzi kolej na spotkanie koła. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Skała dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedemnastu i do samego miasta, bez żadnej dopłaty za odległość. Gmina liczy blisko jedenaście tysięcy mieszkańców na około siedemdziesięciu pięciu kilometrach kwadratowych, z czego w mieście mieszka mniej więcej co trzeci.",
    "Sołectwa to: Nowa Wieś, Szczodrkowice, Smardzowice, Ojców, Niebyła i Świńczów, Maszyce, Cianowice, Skała, Stoki, Rzeplin, Zamłynie, Barbarka, Minoga, Gołyszyn, Przybysławice, Sobiesęki i Poręba Laskowska. Niebyła ze Świńczowem to jedno wspólne sołectwo, nie dwa.",
    "W Ojcowie mieści się dyrekcja Ojcowskiego Parku Narodowego, a w granicach gminy leży prawie pięćdziesiąt siedem procent jego powierzchni — więcej niż w pozostałych trzech gminach razem wziętych.",
    "W Grodzisku stoi barokowy zespół pustelni z lat tysiąc sześćset siedemdziesiątych i osiemdziesiątych, a przy nim kamienna figura słonia z obeliskiem z tysiąc sześćset osiemdziesiątego szóstego roku, upamiętniająca odsiecz wiedeńską. Rzecz, której nie da się pomylić z niczym innym.",
    "Dojazd: kolei w gminie nie ma, najbliższa stacja Szybkiej Kolei Aglomeracyjnej to Słomniki, osiemnaście kilometrów stąd. Od października dwa tysiące dwudziestego trzeciego roku do Skały dojeżdża krakowska linia dwieście sześćdziesiąt siedem. Samochodem do Krakowa dwadzieścia jeden kilometrów.",
  ],
  districts: [
    "Skała",
    "Ojców",
    "Cianowice",
    "Smardzowice",
    "Minoga",
    "Maszyce",
    "Nowa Wieś",
    "Szczodrkowice",
    "Rzeplin",
    "Barbarka",
    "Sobiesęki",
    "Przybysławice",
    "Stoki",
    "Gołyszyn",
    "Zamłynie",
    "Poręba Laskowska",
    "Niebyła i Świńczów",
  ],

  nearbyHeading: "Sułoszowa, Wielka Wieś i Iwanowice też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Sułoszową, Jerzmanowicami-Przeginią, Wielką Wsią, Zielonkami, Iwanowicami i Słomnikami. Dojeżdżam do wszystkich gmin powiatu krakowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo myli się nagminnie: zamek Pieskowa Skała nie leży w gminie Skała, tylko w sąsiedniej Sułoszowej. Nazwa pochodzi od skały, a nie od tego miasta.",
  ],
  nearbyTowns: [
    "Sułoszowa",
    "Jerzmanowice-Przeginia",
    "Wielka Wieś",
    "Zielonki",
    "Iwanowice",
    "Słomniki",
    "Kraków",
  ],

  about: blokOMnie("do gminy Skała", "w powiecie krakowskim"),

  faq: [
    {
      question: "Mieszkam w Ojcowie albo w Minodze. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie siedemnaście sołectw traktuję tak samo jak samo miasto. Przy umawianiu podaj nazwę miejscowości — jest potrzebna wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Skała"),
    {
      question: "Czy zrobisz pokaz dla koła gospodyń albo dla większej grupy?",
      answer:
        "Tak i robię to chętnie — w tej gminie działa trzynaście kół, więc pytanie pada często. Takie spotkanie planuję inaczej niż domowe: przywożę więcej składników, dobieram przepisy pod większą liczbę porcji i zostawiam więcej czasu na pytania. Warto uprzedzić o liczbie osób z kilkudniowym wyprzedzeniem, żebym zdążyła przygotować odpowiednią ilość produktów.",
    },
  ],

  geo: { lat: 50.230247, lng: 19.852828 },
};
