import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * KŁODAWA — powiat kolski, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ KŁODAWA W TYM POWIECIE
 *   NIE MA — dublet dotyczy KOŁA. SPRAWDZONE.
 * MIASTO: 5 824 mieszkańców (GUS 31.12.2024), 4,3 km²,
 *   gęstość 1 351,3 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia do 4,31 km²]. PODAJĘ.
 *   ⚠⚠⚠ LICZB 6 699 I 6 874 NIE UŻYWAM — pochodzą
 *   z innych lat i niedatowanych źródeł. WYŁĄCZNIE GUS.
 *   ⚠⚠⚠ SZEREGU LUDNOŚCIOWEGO NIE BUDUJĘ — wątek
 *   wyludnienia wykluczony.
 * CAŁA GMINA: 11 752 osoby, 128,9 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   (92 w źródle, 91,17 z dzielenia).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: wykaz GUS podaje 41 jednostek —
 *   miasto i 40 wsi. ⚠ Wykaz gminny podaje 15.
 *   ⚠⚠⚠ RÓŻNICY NIE ROBIĘ KĄTEM — figury „lista
 *   kanoniczna" (Mosina) i „skrót zjada różnicę"
 *   (Kostrzyn) zajęte. PODAJĘ LICZBĘ GUS.
 * WYSOKOŚĆ: 114 m n.p.m. Rzeka: RGILEWKA, dopływ WARTY.
 * ⚠ GEO: 52,2543 / 18,9135.
 *
 * ⚠⚠⚠ KOPALNIA SOLI POMINIĘTA CAŁKOWICIE — ANI SŁOWA,
 *   ANI JAKO ZAKŁAD, ANI JAKO ATRAKCJA TURYSTYCZNA,
 *   ANI JAKO „najgłębsza trasa podziemna". WĄTEK
 *   WYDOBYWCZY WYKLUCZONY BEZWZGLĘDNIE. To najtrudniejsze
 *   wykluczenie w tym pliku — PILNOWAĆ KAŻDEGO ZDANIA.
 *
 * ⚠⚠ ODMIANA — RODZAJ ŻEŃSKI:
 *   D. do KŁODAWY · Ms. w KŁODAWIE · N. Kłodawą.
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: mieszanie dopełniacza
 *   z miejscownikiem — „do Kłodawie", „w Kłodawy".
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: KŁODAWSKI.
 *   ⚠ Nie mylić z KŁODZKIM (Kłodzko, dolnośląskie).
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJA NAZW — POTWIERDZONA I TWARDA:
 *   GMINA WIEJSKA KŁODAWA w woj. LUBUSKIM, powiat
 *   gorzowski: 9 430 mieszkańców, 234,7 km², siedziba
 *   we wsi Kłodawa, BEZ MIASTA o tej nazwie.
 *   ⚠⚠⚠ JEST 1,82 RAZA WIĘKSZA OBSZAROWO od gminy
 *   miejsko-wiejskiej Kłodawa w wielkopolskiem.
 *   PRZYMIOTNIK „KŁODAWSKI" JEST WSPÓLNY DLA OBU.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ KŁODAWA w woj. pomorskim [NP].
 *
 * ⚠⚠ DATY USTROJOWE — NAJBOGATSZY ZESTAW W CYKLU:
 *   — ŚLADY OSADNICTWA: sięgają 4000 lat p.n.e.
 *   — PIERWSZA WZMIANKA: dokument z 1193 r.
 *     ⚠ [SP — ten sam serwis urzędowy pisze w innym
 *     miejscu o XI w.]. PISZĘ „1193 r., choć urząd
 *     datuje początki na XI wiek".
 *   — PRAWA MIEJSKIE — DWA NADANIA:
 *     · 1383 r. — Bartosz z Wisemberga otrzymuje
 *       od księcia mazowieckiego SIEMOWITA nadanie
 *       dla Kłodawy jako „oppidum",
 *     · 9 SIERPNIA 1430 R. — w WOLBORZU przyznano
 *       miastu PRAWO MAGDEBURSKIE; nadawca:
 *       WŁADYSŁAW II JAGIEŁŁO.
 *     ⚠ Odstęp 47 lat. ⚠⚠ ODSTĘPU NIE ROBIĘ KĄTEM.
 *   — UTRATA PRAW: 1867 r. ⚠⚠⚠ PRZYCZYNY NIE PODAJĘ —
 *     były represjami po powstaniu. WĄTEK POWSTAŃCZY
 *     WYKLUCZONY. PISZĘ SAMĄ DATĘ.
 *   — ODZYSKANIE: 26 CZERWCA 1925 R.
 *     ⚠⚠ RÓŻNICY 58 LAT NIE ROBIĘ KĄTEM — figura
 *     zajęta (Szklarska Poręba).
 *   — 1455 r. — Kazimierz Jagiellończyk zwolnił miasto
 *     od ceł i opłat targowych; Kłodawa stała się drugim
 *     co do wielkości miastem województwa łęczyckiego.
 *   — 1902 r. — OSP · 1922 r. — linia kolejowa
 *     Kutno–Poznań i stacja · 1928 r. — elektryfikacja ·
 *     1932 r. — pierwsze przedszkole.
 *   — Miasto królewskie w STAROSTWIE PRZEDECKIM;
 *     PRZEDECZ jest dziś równorzędną gminą tego samego
 *     powiatu kolskiego.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — WSZYSTKO NAZWANE OD JEDNEJ RZECZY:
 *   Za etymologicznym wykazem gminnym:
 *     — KŁODAWA — od wyrazu „KŁODA" (pień ściętego
 *       drzewa); nazwa kulturowa, związana ze spławem
 *       drewna budulcowego,
 *     — BIERZWIENNA DŁUGA, BIERZWIENNA KRÓTKA,
 *       BIERZWIENNA DŁUGA KOLONIA — od staropolskiego
 *       „BIRWNO", czyli PIEŃ DRZEWA,
 *     — DĘBINA — od dębu.
 *   ⚠⚠⚠ CZTERY NAZWY ODNOSZĄ SIĘ DO KŁODY ALBO PNIA,
 *   W DWÓCH NIEZALEŻNYCH WARSTWACH JĘZYKOWYCH — jedna
 *   współczesna, druga staropolska. To jest cały kąt.
 *   ⚠⚠ UDZIAŁU PROCENTOWEGO W NAZEWNICTWIE NIE LICZĘ.
 *   ⚠⚠ NIEPEŁNEJ PARY „Długa / Krótka / Długa Kolonia"
 *   NIE ROBIĘ KĄTEM — figura zajęta (Prusice).
 *   ⚠ POZOSTAŁE ETYMOLOGIE (druga strona kąta):
 *     Korzecznik — od młyna wodnego · Kobylata —
 *     „stajnia dla kobył" · Zbójno — miejsce młócenia
 *     zboża · Puławy — od „ława" = bród · Okoleniec —
 *     od „okole" = pastwisko · Dzióbin — od przezwiska
 *     Dziób.
 *     ⚠⚠ RYSIN NIE UŻYWAM — dwa możliwe znaczenia
 *     naraz, a figura „dwie miary" zajęta.
 *
 * KĄT: WSZYSTKO NAZWANE OD JEDNEJ RZECZY
 * — o tym, że własne słownictwo o jedzeniu mówi, po co
 * jest ta kuchnia. Kąt z gminy Kłodawa: cztery nazwy
 * miejscowe odnoszą się do kłody albo pnia drzewa.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Kłodawa wzięła nazwę od „kłody", a trzy
 *   Bierzwienne od staropolskiego „birwna", czyli pnia,
 * — ŻE CZTERY NAZWY W JEDNEJ GMINIE MÓWIĄ O TYM SAMYM,
 *   W DWÓCH RÓŻNYCH WARSTWACH JĘZYKOWYCH. TO JEST
 *   RDZEŃ,
 * — ⚠⚠ ŻE MAPA TEJ GMINY CZYTA SIĘ JAK SPIS TEGO,
 *   CO SIĘ TU ROBIŁO: młyn, bród, pastwisko, młócenie,
 * — ⚠⚠ ŻE WŁASNE SŁOWNICTWO O JEDZENIU DZIAŁA TAK SAMO:
 *   „na szybko", „na zapas", „z resztek", „dla dzieci",
 *   „na niedzielę" — powtarza się jeden motyw,
 * — ⚠⚠ ŻE TEN MOTYW MÓWI, PO CO JEST TA KUCHNIA —
 *   i że mówi to dokładniej niż jakiekolwiek
 *   postanowienie,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wypisz pięć zwrotów,
 *   których naprawdę używasz o jedzeniu. Sprawdź,
 *   czy nie mówią o tym samym,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: jeden motyw to nie wada.
 *   W Kłodawie nazwy od drewna sąsiadują z nazwami
 *   od młyna, brodu i pastwiska — całość jest mieszana.
 *   Jeśli w Twoim słowniku jest tylko jeden motyw,
 *   warto sprawdzić, czy to wybór, czy przymus,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie zmieni
 *   motywu. MÓWIĘ WPROST, że jeśli wszystko w kuchni
 *   jest „na szybko", to po zakupie nadal będzie
 *   „na szybko" — tylko łatwiej.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt
 *   zajęty (Szklarska Poręba). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam jedna rzecz
 *   miała wiele nazw; tu wiele różnych rzeczy nosi nazwy
 *   od jednego motywu. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO MAŁE BEZ DUŻEGO — kąt zajęty (Prusice).
 * — ⚠⚠⚠ ZERO SKRÓT ZJADA RÓŻNICĘ — kąt zajęty
 *   (Kostrzyn).
 * — ⚠⚠ ZERO OBIETNICY W NAZWIE — kąt zajęty
 *   (Międzychód).
 * — ⚠⚠ ZERO LISTY KANONICZNEJ — kąt zajęty (Mosina).
 * — ⚠⚠ ZERO UŻYWANE OD DAWNA, ZAPISANE PÓŹNO — kąt
 *   zajęty (Zawidów).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA, ŻE CZYJEŚ GOTOWANIE „NA
 *   SZYBKO" JEST GORSZE. Opisuję słownik, nie wartość.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO I POWSTAŃCZEGO · ZERO WYDOBYCIA
 *   I KOPALNI · ZERO WYLUDNIENIA · ZERO POŻARÓW JAKO
 *   ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ ludności w wersjach innych niż GUS.
 * — NIE BUDUJĘ szeregu ludnościowego.
 * — NIE PODAJĘ przyczyny utraty praw miejskich.
 * — NIE PISZĘ ANI SŁOWA o kopalni.
 * — NIE LICZĘ udziału motywu w nazewnictwie.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kłodawa leży w powiecie kolskim, nad Rgilewką —
 *   dopływem Warty — na wysokości 114 m n.p.m.; miasto
 *   liczy 5 824 mieszkańców (GUS, 31.12.2024) na
 *   4,3 km², czyli 1 351,3 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 11 752
 *   osoby na 128,9 km² i obejmuje miasto oraz 40 wsi,
 * — ślady osadnictwa na tym terenie sięgają 4000 lat
 *   p.n.e., a pierwsza wzmianka pochodzi z dokumentu
 *   z 1193 r. — choć urząd datuje początki na XI w.,
 * — prawa miejskie nadano dwukrotnie: w 1383 r. książę
 *   mazowiecki Siemowit nadał Kłodawie status oppidum
 *   dla Bartosza z Wisemberga, a 9 sierpnia 1430 r.
 *   w Wolborzu Władysław II Jagiełło przyznał miastu
 *   prawo magdeburskie,
 * — w 1455 r. Kazimierz Jagiellończyk zwolnił miasto
 *   od ceł i opłat targowych, po czym Kłodawa stała się
 *   drugim co do wielkości miastem województwa
 *   łęczyckiego; była miastem królewskim w starostwie
 *   przedeckim, a Przedecz jest dziś równorzędną gminą
 *   tego samego powiatu,
 * — miasto utraciło prawa miejskie w 1867 r.
 *   i odzyskało je 26 czerwca 1925 r.,
 * — straż pożarna działa od 1902 r., linię kolejową
 *   Kutno–Poznań ze stacją w Kłodawie otwarto w 1922 r.,
 *   elektryfikację ukończono w 1928 r., a pierwsze
 *   przedszkole powstało w 1932 r.,
 * — nazwa Kłodawa pochodzi od wyrazu „kłoda", czyli
 *   pnia ściętego drzewa, i wiąże się ze spławem drewna
 *   budulcowego; nazwy Bierzwienna Długa, Bierzwienna
 *   Krótka i Bierzwienna Długa Kolonia pochodzą
 *   od staropolskiego „birwno", czyli pnia drzewa,
 *   a Dębina od dębu,
 * — inne nazwy w gminie: Korzecznik od młyna wodnego,
 *   Kobylata od stajni dla kobył, Zbójno od miejsca
 *   młócenia zboża, Puławy od „ławy", czyli brodu,
 *   Okoleniec od „okola", czyli pastwiska, a Dzióbin
 *   od przezwiska Dziób.
 */
export const KLODAWA: CityContent = {
  slug: "klodawa",
  h1: "Thermomix Kłodawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kłodawa — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kłodawie w powiecie kolskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kłodawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kłodawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kłodawy w powiecie kolskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czterdziestu wsi w gminie.",

  highlights: highlightyStandardowe("Kłodawa"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Cztery nazwy, jeden motyw: kłoda drewna.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kłodawie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "jeden-motyw",
      heading: "Wszystko nazwane od jednej rzeczy",
      paragraphs: [
        "Kłodawa wzięła nazwę od „kłody” — pnia ściętego drzewa. Nazwa jest kulturowa i wiąże się ze spławem drewna budulcowego.",
        "W tej samej gminie leżą Bierzwienna Długa, Bierzwienna Krótka i Bierzwienna Długa Kolonia. Wszystkie trzy pochodzą od staropolskiego słowa „birwno”, które znaczy — pień drzewa. Dochodzi jeszcze Dębina, od dębu.",
        "Cztery nazwy w jednej gminie mówią o tym samym, w dwóch niezależnych warstwach języka: jednej dzisiejszej i jednej staropolskiej, która dawno wyszła z użycia.",
        "Dopowiem, bo to leży blisko: pisałam gdzie indziej o rzeczy, która ma siedem różnych nazw. Tam wiele słów opisywało jeden przedmiot. Tu jest odwrotnie — wiele różnych miejsc nosi nazwy od jednego motywu.",
        "Reszta tej mapy czyta się zresztą jak spis czynności. Korzecznik — od młyna wodnego. Puławy — od „ławy”, czyli brodu. Okoleniec — od „okola”, czyli pastwiska. Zbójno — od miejsca, w którym młócono zboże. Nazwy nie opisują wyglądu okolicy, tylko to, co się w niej robiło.",
        "I dokładnie tak działa nasze własne słownictwo o jedzeniu.",
        "„Na szybko”. „Na zapas”. „Z resztek”. „Dla dzieci”. „Na niedzielę”. „Coś ciepłego”. „Byle zjadły”. Każdy dom ma pięć, może sześć takich zwrotów i używa ich codziennie, nie zauważając, że wszystkie mówią o tym samym.",
        "A mówią o tym, po co jest ta kuchnia. Dokładniej niż jakiekolwiek postanowienie, bo postanowienia formułuje się raz w styczniu, a tych zwrotów używa się przy każdym obiedzie. Jeśli wszystkie są o czasie, kuchnia jest o przetrwaniu tygodnia. Jeśli wszystkie są o dzieciach, jest o karmieniu. Jeśli wszystkie są o gościach, jest o pokazywaniu.",
        "Ruch jest jeden i zajmuje pięć minut. Wypisz pięć zwrotów, których naprawdę używasz o jedzeniu — nie tych, które brzmią dobrze. Sprawdź, czy nie mówią o tym samym.",
        "Uczciwie o drugiej stronie: jeden motyw to nie wada. W Kłodawie nazwy od drewna sąsiadują z nazwami od młyna, brodu i pastwiska — całość jest mieszana i dzięki temu opowiada więcej. Jeśli w Twoim słowniku jest tylko jeden motyw, warto sprawdzić jedną rzecz: czy to wybór, czy przymus. Bo „na szybko” bywa świadomą decyzją i bywa sytuacją, z której nie da się wyjść.",
        "I uczciwie o sprzęcie. Thermomix nie zmieni tego motywu. Jeśli wszystko w Waszej kuchni jest „na szybko”, to po zakupie nadal będzie „na szybko” — tylko łatwiej i bez stania nad garnkiem. To jest realna zmiana i warto po nią sięgnąć, ale nie jest to zmiana słownika.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kłodawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu jednym zwrotem, jak nazywacie w domu codzienne gotowanie. To zaskakująco dobra wskazówka, co pokazać na spotkaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kłodawie"),
    sekcjaRaty("w Kłodawie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kłodawy",
      paragraphs: [
        "Kłodawa leży w powiecie kolskim, nad Rgilewką — dopływem Warty — na wysokości stu czternastu metrów nad poziomem morza. Samo miasto liczy 5 824 mieszkańców (GUS, 31.12.2024) na 4,3 kilometra kwadratowego, czyli tysiąc trzysta pięćdziesiąt jedna osób na kilometr, a cała gmina miejsko-wiejska 11 752 osoby na 128,9 kilometra i obejmuje miasto oraz czterdzieści wsi. Gęstości dla gminy nie podaję, bo liczba ze źródła się nie domyka. Ślady osadnictwa na tym terenie sięgają czterech tysięcy lat przed naszą erą, a pierwsza wzmianka pochodzi z dokumentu z 1193 roku — choć urząd datuje początki na jedenasty wiek. Prawa miejskie nadano tu dwukrotnie: w 1383 roku książę mazowiecki Siemowit nadał Kłodawie status oppidum dla Bartosza z Wisemberga, a 9 sierpnia 1430 w Wolborzu Władysław II Jagiełło przyznał miastu prawo magdeburskie. W 1455 Kazimierz Jagiellończyk zwolnił je od ceł i opłat targowych, po czym Kłodawa stała się drugim co do wielkości miastem województwa łęczyckiego; była miastem królewskim w starostwie przedeckim, a Przedecz jest dziś równorzędną gminą tego samego powiatu. Praw miejskich miasto zostało pozbawione w 1867 roku i odzyskało je 26 czerwca 1925. Straż pożarna działa od 1902, linię kolejową Kutno–Poznań ze stacją w Kłodawie otwarto w 1922, elektryfikację ukończono w 1928, a pierwsze przedszkole powstało w 1932.",
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

  districtsHeading: "Do których części Kłodawy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu wsi w gminie: Bierzwiennej Długiej i Krótkiej, Bierzwiennej Długiej Kolonii, Dębiny, Korzecznika, Kobylaty, Zbójna, Puław, Okoleńca, Dzióbina, Leszcz i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu koniecznie dopisz powiat kolski albo województwo wielkopolskie. W lubuskiem, w powiecie gorzowskim, jest osobna gmina wiejska Kłodawa — większa obszarowo od tej — a przymiotnik „kłodawski” pasuje do obu.",
  ],
  districts: [],

  nearbyHeading: "Poza Kłodawę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Koła, Przedcza, Dąbia, Izbicy Kujawskiej i Sompolna — wszędzie bezpłatnie, tak samo jak w samej Kłodawie.",
  ],
  nearbyTowns: ["Koło", "Przedecz", "Dąbie", "Izbica Kujawska", "Sompolno"],

  about: blokOMnie("do Kłodawy", "w Kłodawie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kłodawy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: „do Kłodawy” w dopełniaczu, ale „w Kłodawie” w miejscowniku — te formy najczęściej się mieszają. I praktyczna: chodzi o Kłodawę w powiecie kolskim, bo w lubuskiem jest osobna gmina wiejska o tej samej nazwie, a przymiotnik „kłodawski” pasuje do obu.",
    },
    ...faqWspolne("w Kłodawie"),
    {
      question: "Jak sprawdzić, po co właściwie jest moja kuchnia?",
      answer:
        "Po własnym słownictwie. W gminie Kłodawa cztery nazwy miejscowe odnoszą się do kłody albo pnia drzewa — sama Kłodawa i trzy Bierzwienne, w dwóch różnych warstwach języka; reszta mapy mówi o młynie, brodzie i pastwisku, czyli o tym, co się tu robiło. W domu jest tak samo: wypisz pięć zwrotów, których naprawdę używasz o jedzeniu — „na szybko”, „z resztek”, „dla dzieci”. Jeśli wszystkie mówią o tym samym, to właśnie masz odpowiedź.",
    },
    {
      question: "Czy Thermomix zmieni sposób, w jaki myślimy o jedzeniu w domu?",
      answer:
        "Nie sądzę i nie będę tego obiecywać. Jeśli w Waszej kuchni wszystko jest „na szybko”, to po zakupie nadal będzie „na szybko” — tylko łatwiej, bez stania nad garnkiem i z mniejszą liczbą naczyń. To jest realna zmiana i warto po nią sięgnąć. Ale nie jest to zmiana sposobu myślenia, a ta bierze się z innych rzeczy niż sprzęt.",
    },
  ],

  geo: { lat: 52.2543, lng: 18.9135 },
};
