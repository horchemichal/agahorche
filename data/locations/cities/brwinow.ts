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
 * BRWINÓW — powiat pruszkowski, woj. mazowieckie.
 * MIASTO 14 589 (GUS 31.12.2024), 14,7 km², 993,8 os./km².
 * Gmina 6916 ha. PRAWA MIEJSKIE 1950.
 *
 * ⚠ HOMONIMY: BRWINÓW ≠ BRWILNO ≠ BRONOWICE.
 *   FAQ to rozróżnia.
 *
 * HISTORIA:
 * — ślady osadnictwa sprzed 8000 lat; pierwsza wzmianka
 *   pisana 1406,
 * — od II w. p.n.e. do IV–V w. n.e. okolica była jednym
 *   z największych ośrodków metalurgicznych ówczesnej Europy
 *   — odkryto ok. 4000 HAŁD ŻUŻLA; stanowiska obejmują
 *   Biskupice, Milanówek-Falęcin, Brwinów, Reguły i Grodzisk
 *   Mazowiecki; szacuje się 120–150 TYSIĘCY WYTOPÓW; ośrodek
 *   odkrył w latach 60. XX w. Stefan Woyda, a jego imię nosi
 *   Muzeum Starożytnego Hutnictwa Mazowieckiego w Pruszkowie,
 *   ⚠ KĄTU ŻELAZNEGO NIE UŻYWAM — „żeliwo — czyli czego to
 *     urządzenie nie zastąpi" (Stąporków) JEST ZAJĘTE.
 *     Hutnictwo wchodzi wyłącznie jako fakt w bloku o mieście.
 * — 14 CZERWCA 1845 — otwarcie Kolei Warszawsko-Wiedeńskiej
 *   przez Brwinów; 1927 — samodzielna gmina; 1950 — prawa
 *   miejskie.
 *
 * ⚠⚠ PSZCZELIN (gmina Brwinów) — PODSTAWA KĄTA:
 * — założony w SIERPNIU 1898 przez Warszawskie Towarzystwo
 *   Pszczelniczo-Ogrodnicze na ok. 11 morgach w dobrach
 *   Otrębusy — PIERWSZA W ZABORZE ROSYJSKIM SZKOŁA ROLNICZA
 *   DLA MŁODZIEŻY WIEJSKIEJ,
 * — ⚠⚠ KURS TRWAŁ JEDENAŚCIE MIESIĘCY i był zsynchronizowany
 *   Z ROKIEM GOSPODARCZYM — uczono się tego, co akurat
 *   wypadało robić. TO JEST KOTWICA.
 * — przyjmowano chłopców od 16 lat umiejących czytać, pisać
 *   i liczyć; do 1917 r. gospodarstwo urosło do 77 morgów:
 *   internat, warsztaty, obory, nowoczesna mleczarnia, sady
 *   i pasieka; elektryfikacja 1926–27; do 1925 zgłosiło się
 *   ok. 1155 kandydatów, pełny kurs ukończyło ok. 904;
 *   pierwsza kierowniczka: Jadwiga Dziubińska (1900–1903);
 *   1917 — zarząd przejmuje Centralne Towarzystwo Rolnicze;
 *   1929 — upaństwowienie,
 * — ⚠⚠ WŁADZE ROSYJSKIE POCZĄTKOWO ZAKAZAŁY WYKŁADÓW
 *   I ROBIENIA NOTATEK — wolno było uczyć wyłącznie przez
 *   praktykę. ⚠ TEGO FAKTU NIE ROBIĘ KĄTEM —
 *   „PRZEKAZYWANIE UMIEJĘTNOŚCI" (Sztabin) i „wprawa"
 *   (Janów Lubelski) SĄ ZAJĘTE. Podaję go jako fakt
 *   w bloku o mieście, bez rozwijania w stronę nauki gotowania.
 *   ⚠ ZERO TEMATU ZABORÓW JAKO TEMATU POLITYCZNEGO —
 *     piszę neutralnie „ówczesne władze". TWARDA GRANICA.
 * — ⚠ PASIEKI NIE ROBIĘ TEMATEM — kąty „miód" i „wosk"
 *   ZAJĘTE. Nazwa Pszczelin jest symboliczna (pszczoła jako
 *   wzór pracy zorganizowanej).
 * — ⚠ HISTORYCZNEGO OGRODNICTWA W SAMYM BRWINOWIE
 *   NIE POTWIERDZONO — NIE TWIERDZĘ, że miasto było
 *   ośrodkiem ogrodniczym. TWARDA GRANICA.
 *
 * GEOGRAFIA: wody gminy — Zimna Woda, Rokitnica Stara,
 * Rokitnica Nowa, Utrata; Las Młochowski; gmina leży
 * w korytarzu ekologicznym łączącym Kampinoski Park Narodowy
 * z Chojnowskim Parkiem Krajobrazowym.
 *
 * ZABYTKI: pałac z parkiem krajobrazowym, ul. Dworska 5 —
 * 1936, dla rodziny Wierusz-Kowalskich; Apteka Kuleszy —
 * 1911, dla aptekarza Feliksa Kuleszy; Willa Walickiej —
 * ok. 1908, proj. arch. Oskar Sosnowski; Willa Wernerów —
 * 1913–1914; Willa „Amerykanka" — 1925; Willa „Prudencja" —
 * 1927; Stasiówek — 1938; cmentarz parafialny założony
 * 1819, z kaplicą grobową rodziny Marylskich przeniesioną
 * w 1857.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE ZNALEZIONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH.
 * ⚠ KĄTU LETNISKOWEGO NIE UŻYWAM — „dom letniskowy, który
 *   stał się całoroczny" (Józefów) ZAJĘTY.
 *
 * KĄT: KALENDARZ KUCHENNY NA ROK — co się robi w lutym,
 * a czego nie ma sensu robić w lipcu.
 * Kąt od pszczelińskiej szkoły rolniczej, w której kurs
 * trwał jedenaście miesięcy i był rozpisany na rok
 * gospodarczy: uczono tego, co akurat wypadało robić.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kuchnia domowa ma swój rok, tak samo jak gospodarstwo
 *   — tylko że nikt go nie zapisuje, więc co roku wszystko
 *   robi się w pośpiechu i nie w porę,
 * — ŻE NIE CHODZI O JADŁOSPIS ANI O SEZONOWOŚĆ WARZYW,
 *   TYLKO O PRACE, KTÓRE ROBI SIĘ RAZ NA ROK ALBO DWA,
 * — CO KIEDY MA SENS:
 *   — STYCZEŃ I LUTY — przegląd szafek i zamrażarki; to jest
 *     najlepszy moment, bo nie ma nic świeżego do roboty,
 *     a zapasy są po świętach największe,
 *   — MARZEC I KWIECIEŃ — porządek w sprzęcie: co się nie
 *     przydało przez rok, tego się nie przyda;
 *     ⚠ ODSYŁAM DO STRONY O ZBĘDNYM SPRZĘCIE, JEDNYM ZDANIEM,
 *   — MAJ I CZERWIEC — początek sezonu na rzeczy świeże
 *     i najkrótsze; kto czeka do lipca, ten przegapia połowę,
 *   — LIPIEC I SIERPIEŃ — to jest miesiąc przetworów
 *     i mrożenia, i JEDYNY moment, w którym ma to sens;
 *     ⚠ BEZ WCHODZENIA W TECHNIKI — kąty przetworowe ZAJĘTE,
 *   — WRZESIEŃ I PAŹDZIERNIK — rzeczy, które się przechowuje:
 *     korzeniowe, dynie, jabłka; ustawienie miejsca na zapas,
 *   — LISTOPAD — przegląd naczyń i blach przed sezonem
 *     pieczenia,
 *   — GRUDZIEŃ — ⚠ ODSYŁAM DO STRONY ŚWIĄTECZNEJ,
 *     NIE ROZWIJAM,
 * — ŻE NAJWIĘKSZY BŁĄD TO ROBIĆ WSZYSTKO WTEDY, KIEDY
 *   PRZYPOMNI SIĘ SAMO — czyli zwykle najpóźniej, jak można,
 * — ŻE DRUGI BŁĄD TO PRZENOSIĆ ROBOTĘ NA „WOLNY WEEKEND",
 *   którego nie ma — lepiej przypiąć ją do stałego punktu
 *   w roku,
 * — ŻE WARTO ZAPISAĆ SWÓJ KALENDARZ RAZ, na kartce
 *   w szafce, i co roku tylko poprawiać,
 * — ŻE KAŻDY DOM MA SWÓJ WŁASNY ROK i cudzy się nie przyda:
 *   inaczej wygląda rok w domu z ogrodem, inaczej w bloku,
 * — UCZCIWIE: urządzenie nie planuje roku i nie przypomni
 *   o niczym,
 * — ale przesuwa granicę tego, co się opłaca zrobić naraz:
 *   prace, które kiedyś zajmowały całą sobotę — przeciery,
 *   pasty, masy do zamrożenia — mieszczą się w popołudniu,
 *   a to zmienia kalendarz bardziej niż jakakolwiek
 *   funkcja z nazwą.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO TECHNIK PRZETWÓRCZYCH (pasteryzacja, kiszenie,
 *   wekowanie) — kąty ZAJĘTE, wymieniam tylko miesiąc.
 * — ZERO tonu „powinnaś mieć to poukładane".
 *   TWARDA GRANICA TONU.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ⚠ ZERO ZABORÓW JAKO TEMATU POLITYCZNEGO — piszę
 *   „ówczesne władze", bez rozwijania. TWARDA GRANICA.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „planowanie tygodnia" (Ostrów Wielkopolski) dotyczy
 *   SKALI TYGODNIOWEJ I JADŁOSPISU.
 * — „STAŁE MENU" (Zabłudów) dotyczy POWTARZALNOŚCI DAŃ.
 * — „kilka tygodni w roku, kiedy dom działa inaczej"
 *   (Gostyń) dotyczy JEDNEGO OKRESU W ROKU.
 * — „danie, które robi się RAZ W ROKU" (Niemodlin) dotyczy
 *   JEDNEGO DANIA.
 * — „PRZEDNÓWEK" dotyczy LUTEGO I MARCA W KUCHNI.
 *   ⚠ DLATEGO O STYCZNIU I LUTYM PISZĘ WYŁĄCZNIE
 *     O PRZEGLĄDZIE ZAPASÓW, nie o tym, co się wtedy je.
 * — „pora roku" dotyczy SEZONOWOŚCI SKŁADNIKÓW.
 * TUTAJ chodzi o PRACE ROBIONE RAZ NA ROK i o przypisanie
 * ich do miesięcy — o kalendarz robót, nie jedzenia.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE TWIERDZĘ, że Brwinów był ośrodkiem ogrodniczym.
 * — NIE ROBIĘ TEMATU z pasieki ani z hutnictwa.
 * — NIE PISZĘ o zaborach jako o temacie politycznym.
 * — NIE WYMYŚLAM produktu lokalnego ani święta kulinarnego.
 * — NIE MYLĘ BRWINOWA z BRWILNEM ani BRONOWICAMI.
 * — districts: miasto zwarte, brak wykazu. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza pisana wzmianka o Brwinowie pochodzi z 1406 r.,
 *   a ślady osadnictwa w okolicy sięgają ośmiu tysięcy lat;
 *   od II w. p.n.e. do IV–V w. n.e. był to jeden z największych
 *   ośrodków metalurgicznych ówczesnej Europy, po którym
 *   odkryto około czterech tysięcy hałd żużla i który
 *   w latach sześćdziesiątych XX w. rozpoznał Stefan Woyda,
 * — 14 czerwca 1845 r. otwarto tędy Kolej
 *   Warszawsko-Wiedeńską, w 1927 r. powstała samodzielna
 *   gmina, a prawa miejskie Brwinów otrzymał w 1950 r.,
 * — w sierpniu 1898 r. Warszawskie Towarzystwo
 *   Pszczelniczo-Ogrodnicze założyło w Pszczelinie pierwszą
 *   w zaborze rosyjskim szkołę rolniczą dla młodzieży
 *   wiejskiej; kurs trwał jedenaście miesięcy i był
 *   zsynchronizowany z rokiem gospodarczym, a ówczesne władze
 *   początkowo zakazały wykładów i robienia notatek, więc
 *   uczono wyłącznie przez praktykę,
 * — do 1917 r. gospodarstwo urosło do siedemdziesięciu
 *   siedmiu morgów i obejmowało internat, warsztaty, obory,
 *   nowoczesną mleczarnię, sady i pasiekę; do 1925 r.
 *   zgłosiło się około tysiąca stu pięćdziesięciu pięciu
 *   kandydatów, a pełny kurs ukończyło około dziewięciuset
 *   czterech; pierwszą kierowniczką była Jadwiga Dziubińska,
 * — w gminie płyną Zimna Woda, Rokitnica Stara i Nowa oraz
 *   Utrata, leży tu Las Młochowski, a teren jest korytarzem
 *   ekologicznym łączącym Kampinoski Park Narodowy
 *   z Chojnowskim Parkiem Krajobrazowym,
 * — z zabytków zachowały się pałac z parkiem krajobrazowym
 *   przy ulicy Dworskiej z 1936 r., Apteka Kuleszy z 1911 r.,
 *   Willa Walickiej z około 1908 r. projektu Oskara
 *   Sosnowskiego, Willa Wernerów z lat 1913–1914,
 *   „Amerykanka" z 1925 r., „Prudencja" z 1927 r.
 *   i Stasiówek z 1938 r., a cmentarz parafialny założono
 *   w 1819 r.
 */
export const BRWINOW: CityContent = {
  slug: "brwinow",
  h1: "Thermomix Brwinów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Brwinów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Brwinowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brwinów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brwinowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Brwinowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Brwinów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kuchnia ma swój rok. Tylko że nikt go nie zapisuje.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brwinowie – jak wygląda prezentacja?",
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
      id: "kalendarz",
      heading: "Jedenastomiesięczny kurs w Pszczelinie — czyli o kuchennym roku",
      paragraphs: [
        "W sierpniu 1898 roku Warszawskie Towarzystwo Pszczelniczo-Ogrodnicze założyło w Pszczelinie pod Brwinowem pierwszą w tej części kraju szkołę rolniczą dla młodzieży wiejskiej. Kurs trwał jedenaście miesięcy i to nie był przypadek ani zaokrąglenie: szkoła była rozpisana na rok gospodarczy. Uczono tego, co akurat wypadało robić — bo inaczej się nie da. Nie ma sensu tłumaczyć sianokosów w styczniu.",
        "Kuchnia domowa też ma swój rok. Tylko że nikt go nie zapisuje, więc co roku te same prace robi się w pośpiechu i nie w porę: przetwory w ostatnim tygodniu sierpnia, przegląd zamrażarki dopiero wtedy, gdy nie mieści się kolejne pudełko, porządek w szafkach nigdy.",
        "Uwaga: nie chodzi o jadłospis ani o to, co jest w sezonie. Chodzi o prace, które robi się raz na rok albo dwa — a które właśnie dlatego umykają.",
        "Styczeń i luty to najlepszy moment na przegląd szafek i zamrażarki. Powód jest prosty: nie ma wtedy nic świeżego do roboty, a zapasy po grudniu są największe w całym roku. To jest jedyny miesiąc, w którym taki przegląd nie konkuruje z niczym innym.",
        "Marzec i kwiecień nadają się na porządek w sprzęcie. Zasada jest brutalna i skuteczna: co się nie przydało przez cały rok, tego się nie przyda. O sprzęcie, który stoi i zajmuje miejsce, pisałam osobno.",
        "Maj i czerwiec to początek rzeczy najkrótszych. Kto czeka do lipca, ten przegapia połowę sezonu na to, co jest tylko przez trzy tygodnie.",
        "Lipiec i sierpień to miesiące przetworów i mrożenia — i to jest jedyny moment, w którym ma to sens. Robienie zapasów we wrześniu, z tego, co zostało, jest zwykle stratą czasu i pieniędzy.",
        "Wrzesień i październik to rzeczy, które się przechowuje: warzywa korzeniowe, dynie, jabłka. Wtedy warto też przygotować im miejsce — chłodne, ciemne i przewiewne — zamiast szukać go w listopadzie.",
        "Listopad to dobry moment na przegląd naczyń i blach, zanim zacznie się sezon pieczenia. A o grudniu pisałam osobno, bo zasługuje na własne miejsce.",
        "Największy błąd w całej tej sprawie polega na tym, żeby robić każdą z tych rzeczy wtedy, kiedy przypomni się sama — czyli w praktyce najpóźniej, jak się da. Drugi to przekładanie roboty na „wolny weekend”, który w żadnym domu nie nadchodzi. Znacznie lepiej przypiąć ją do stałego punktu w roku: do pierwszego tygodnia po feriach, do weekendu zmiany czasu, do czegokolwiek, co i tak wraca.",
        "Warto zapisać swój kalendarz raz — na kartce w szafce, nie w telefonie — i co roku tylko go poprawiać. I trzeba od razu powiedzieć, że każdy dom ma swój własny rok, więc cudzy się nie przyda. Inaczej wygląda on w domu z ogrodem, inaczej w mieszkaniu w bloku, inaczej tam, gdzie są małe dzieci. To, co napisałam wyżej, jest szkicem, a nie instrukcją.",
        "Teraz uczciwie o sprzęcie. Thermomix nie planuje roku i o niczym nie przypomni. Nie ma kalendarza i nie powie, że to już sierpień.",
        "Przesuwa natomiast granicę tego, co w ogóle opłaca się zrobić naraz — a to zmienia kuchenny rok bardziej niż jakakolwiek funkcja z nazwą. Prace, które kiedyś zajmowały całą sobotę: przeciery, pasty, masy do zamrożenia, zupy na zapas — mieszczą się w popołudniu i w jednym naczyniu. A rzeczy, które trwają popołudnie, robi się. Rzeczy, które trwają sobotę, przekłada się na następny rok.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brwinowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, jaka praca w kuchni najbardziej Was zniechęca — pokażę, ile z niej realnie zostaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brwinowie"),
    sekcjaRaty("w Brwinowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla brwinowskiej rodziny",
      paragraphs: [
        "Brwinów liczy blisko czternaście i pół tysiąca mieszkańców na niespełna piętnastu kilometrach kwadratowych. Pierwsza pisana wzmianka pochodzi z 1406 roku, ale ślady osadnictwa w okolicy sięgają ośmiu tysięcy lat: od II wieku przed naszą erą do IV–V wieku naszej ery był to jeden z największych ośrodków metalurgicznych ówczesnej Europy, po którym odkryto około czterech tysięcy hałd żużla, a rozpoznał go w latach sześćdziesiątych XX wieku Stefan Woyda. 14 czerwca 1845 roku otwarto tędy Kolej Warszawsko-Wiedeńską, w 1927 powstała samodzielna gmina, a prawa miejskie miasto otrzymało w 1950 roku. W sierpniu 1898 roku Warszawskie Towarzystwo Pszczelniczo-Ogrodnicze założyło w pobliskim Pszczelinie pierwszą w tej części kraju szkołę rolniczą dla młodzieży wiejskiej; kurs trwał jedenaście miesięcy i był zsynchronizowany z rokiem gospodarczym, a ówczesne władze początkowo zakazały wykładów i robienia notatek, więc uczono wyłącznie przez praktykę. Do 1917 roku gospodarstwo urosło do siedemdziesięciu siedmiu morgów i obejmowało internat, warsztaty, obory, nowoczesną mleczarnię, sady i pasiekę; do 1925 zgłosiło się około tysiąca stu pięćdziesięciu pięciu kandydatów, a pełny kurs ukończyło blisko dziewięciuset. W gminie płyną Zimna Woda, Rokitnica Stara i Nowa oraz Utrata, leży tu Las Młochowski, a teren jest korytarzem ekologicznym łączącym Kampinoski Park Narodowy z Chojnowskim Parkiem Krajobrazowym. Z zabytków zachowały się pałac z parkiem krajobrazowym przy ulicy Dworskiej z 1936 roku, Apteka Kuleszy z 1911, Willa Walickiej z około 1908 projektu Oskara Sosnowskiego, Willa Wernerów z lat 1913–1914, „Amerykanka” z 1925, „Prudencja” z 1927 i Stasiówek z 1938, a cmentarz parafialny założono w 1819 roku.",
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

  districtsHeading: "Do których części Brwinowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic stacji po zabudowę willową. Dojeżdżam też do miejscowości w gminie: Otrębus, Owczarni, Żółwina, Kań, Parzniewa, Tereni i Pszczelina.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Brwinów też przyjadę",
  nearbyParagraphs: [
    "Pruszków, Milanówek, Podkowa Leśna, Grodzisk Mazowiecki, Michałowice i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pruszków", "Milanówek", "Podkowa Leśna", "Grodzisk Mazowiecki"],

  about: blokOMnie("do Brwinowa", "w Brwinowie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Brwinowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości w gminie — Otrębus, Owczarni, Żółwina, Kań, Parzniewa i Pszczelina. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Brwinów w powiecie pruszkowskim, a nie o Brwilno czy Bronowice.",
    },
    ...faqWspolne("w Brwinowie"),
    {
      question: "Kiedy najlepiej zrobić przegląd zapasów?",
      answer:
        "W styczniu albo lutym. To jedyny moment w roku, w którym taki przegląd z niczym nie konkuruje: nie ma nic świeżego do roboty, a zapasy po grudniu są największe. Marzec i kwiecień nadają się z kolei na porządek w sprzęcie — co się nie przydało przez rok, tego się nie przyda.",
    },
    {
      question: "Kiedy robić przetwory i mrożenie?",
      answer:
        "W lipcu i sierpniu — i to jest jedyny moment, w którym ma to sens. Robienie zapasów we wrześniu, z tego, co zostało, jest zwykle stratą czasu i pieniędzy. Wrzesień i październik to już rzeczy, które się przechowuje: korzeniowe, dynie, jabłka, oraz przygotowanie dla nich miejsca.",
    },
    {
      question: "Jak zaplanować kuchenny rok?",
      answer:
        "Zapisać go raz, na kartce w szafce, i co roku tylko poprawiać — oraz przypiąć każdą pracę do stałego punktu w roku zamiast do „wolnego weekendu”, który nie nadchodzi. Każdy dom ma przy tym własny rok: inaczej wygląda w domu z ogrodem, inaczej w bloku, inaczej z małymi dziećmi.",
    },
  ],

  geo: { lat: 52.1426, lng: 20.7175 },
};
