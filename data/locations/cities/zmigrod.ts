import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * ŻMIGRÓD — powiat trzebnicki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 6 170 mieszkańców (GUS 31.12.2024), 9,5 km²,
 *   gęstość 650,2 os./km² [ZW, domyka się].
 * CAŁA GMINA: 14 128 osób, 291,8 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — 14 128 / 291,8 = 48,4,
 *   serwis podaje inną wartość. NIE DOMYKA SIĘ.
 *   ⚠ Miasto to 43,7 % ludności gminy — MNIEJ NIŻ POŁOWA.
 *   PODAJĘ JAKO FAKT.
 *   ⚠⚠⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — źródła podają
 *   różne wartości. PISZĘ „KILKADZIESIĄT MIEJSCOWOŚCI".
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Gmina Żmigród to jedna z największych powierzchniowo
 *   gmin w województwie — ALE NIE TWIERDZĘ, ŻE NAJWIĘKSZA.
 * ⚠ GEO: 51,4667 / 16,9.
 *
 * ⚠⚠⚠ ODMIANA — DOPEŁNIACZ Z KOŃCÓWKĄ -U, NIE -A:
 *   D. do ŻMIGRODU · Ms. w Żmigrodzie · B. Żmigród
 *   ⚠⚠⚠ BŁĄD: „do Żmigroda". SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: ŻMIGRODZKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — [NP].
 *
 * ⚠⚠ KOLIZJA: NOWY ŻMIGRÓD — wieś gminna w powiecie
 *   jasielskim, woj. podkarpackie. INNE WOJEWÓDZTWO,
 *   ok. 500 km. ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠⚠ „KARP MILICKI" TO GMINA MILICZ, NIE ŻMIGRÓD.
 *   Milicz ma własną stronę i własny kąt (powierzchnia
 *   a wydajność stawów). ⚠⚠ NIE DOTYKAM TEMATU STAWÓW
 *   I HODOWLI W OGÓLE — sąsiedztwo Doliny Baryczy
 *   nie czyni z tego faktu żmigrodzkiego.
 *
 * ⚠⚠ DATY USTROJOWE — RÓŻNICA 98 LAT:
 *   — PIERWSZA WZMIANKA: 1155 r., bulla papieża
 *     Hadriana IV, nazwa „Zunigrod" [ZW],
 *   — PRAWA MIEJSKIE: 1253 r., Henryk III Biały [ZW].
 *   ⚠⚠ RÓŻNICY 98 LAT NIE ROBIĘ KĄTEM — „nadanie
 *   a pierwsza wzmianka" to figura wielokrotnie użyta
 *   w cyklu. PODAJĘ OBIE DATY JAKO FAKTY.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ŁAŃCUCH WŁAŚCICIELI Z LUKĄ:
 *   — KURZBACHOWIE: 1492–1592 (sto lat),
 *   — SCHAFFGOTSCHOWIE: 1592–1635 (czterdzieści trzy lata),
 *   — HATZFELDTOWIE: od 1641.
 *   ⚠⚠⚠ MIĘDZY 1635 A 1641 LEŻY SZEŚĆ LAT, KTÓRYCH ZAPIS
 *   NIE OBSADZA. To jest cały kąt.
 *   ⚠⚠⚠ NIE TWIERDZĘ, ŻE MAJĄTEK „NIE NALEŻAŁ DO NIKOGO" —
 *   twierdzę WYŁĄCZNIE, że w zapisie jest luka.
 *   ⚠⚠⚠ PRZYCZYNY LUKI NIE PODAJĘ I NIE SPEKULUJĘ —
 *   lata 1635–1641 to okres wykluczony tematycznie.
 *   ANI SŁOWA O TYM, CO SIĘ WTEDY DZIAŁO.
 *   ⚠⚠ Przy dwóch pierwszych przejściach zapis jest
 *   ciągły: rok końca jednego jest rokiem początku
 *   drugiego. Przy trzecim — nie jest. TO JEST KONTRAST.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — PAŁAC: korpus 1706–1708, długość ok. 34 m; skrzydło
 *   dobudowane 1762–1765, długość 96 m; cały zespół
 *   ok. 130 m długości; park 15 ha; aleja dojazdowa
 *   ok. 1,5 km.
 *   ⚠⚠ SKRZYDŁO JEST PRAWIE TRZY RAZY DŁUŻSZE OD KORPUSU
 *   I POWSTAŁO PÓŁ WIEKU PÓŹNIEJ. ⚠⚠⚠ „DOŁOŻONE PO LATACH
 *   UŻYWANIA" — kąt zajęty (Syców). PODAJĘ WYMIARY I DATY
 *   JAKO SUCHE FAKTY, BEZ MORAŁU.
 * — BASZTA: 1560 (budowa), 1642 (podwyższenie),
 *   1837 (kolejna przebudowa).
 *   ⚠⚠ TO SAMO ZASTRZEŻENIE CO WYŻEJ — bez morału.
 *   ⚠ WYSOKOŚCI BASZTY NIE USTALONO — NIE PODAJĘ.
 * — KOLEJ: 1856, 1886, 1894 — trzy daty otwarcia połączeń.
 *   ⚠⚠ „ZAPASOWE POWINNO BYĆ INNE" — kąt zajęty
 *   (Chocianów). PODAJĘ DATY BEZ MORAŁU.
 * — REZERWATY: „Radziądz" 1 045,68 ha, „Jamnik" 356,21 ha
 *   — oba w gminie Żmigród [ZW].
 *   ⚠⚠ NIE ŁĄCZĘ ICH Z TEMATEM STAWÓW.
 * — ODLEGŁOŚCI [ZW]: Trzebnica 21 km, Wrocław 49 km.
 *   INNYCH NIE PODAJĘ.
 *
 * KĄT: MOMENT PRZEKAZANIA
 * — o tym, że w każdym łańcuchu przekazań jest chwila,
 * w której rzecz nie ma właściciela, i właśnie tam ginie.
 * Kąt od żmigrodzkiego łańcucha właścicieli: dwa przejścia
 * są ciągłe co do roku, trzecie ma sześcioletnią lukę —
 * i to ta luka jest najciekawsza.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że majątek żmigrodzki przechodził z rąk do rąk:
 *   Kurzbachowie 1492–1592, Schaffgotschowie 1592–1635,
 *   Hatzfeldtowie od 1641,
 * — ŻE DWA PIERWSZE PRZEJŚCIA SĄ CIĄGŁE CO DO ROKU,
 *   A PRZY TRZECIM ZAPIS MA SZEŚCIOLETNIĄ LUKĘ.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIELIMY PRACĘ ZAKRESAMI: „ty robisz
 *   zakupy, ja gotuję", „ty gotujesz, ja zmywam" —
 *   i to brzmi kompletnie,
 * — ⚠⚠ ŻE TO NIGDY NIE JEST KOMPLETNE, BO MIĘDZY ZAKRESAMI
 *   LEŻĄ MOMENTY PRZEKAZANIA, KTÓRYCH NIKT NIE OBSADZIŁ:
 *   kto rozpakowuje zakupy, kto sprawdza, czego brakuje,
 *   kto mówi, że czegoś brakuje, kto podejmuje decyzję,
 *   co jest na obiad,
 * — ⚠⚠ ŻE TO WŁAŚNIE TAM WSZYSTKO GINIE — nie w środku
 *   czyjegoś zakresu, tylko na styku dwóch,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: umawiając się na podział,
 *   nazwijcie nie tylko zakresy, ale i JEDEN MOMENT
 *   PRZEKAZANIA — punkt, w którym rzecz przechodzi
 *   z rąk do rąk i wiadomo, że przeszła,
 * — ⚠⚠ ŻE NAJPROSTSZYM TAKIM PUNKTEM JEST ZDANIE
 *   WYPOWIEDZIANE NA GŁOS. Nie system, nie tablica —
 *   zdanie,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: w domu, gdzie wszystko robi
 *   jedna osoba, nie ma żadnych momentów przekazania
 *   i ten cały akapit jej nie dotyczy. Wtedy problemem
 *   jest co innego i nie udaję, że mam na to odpowiedź,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie z przewodnikiem
 *   krok po kroku PRZESUWA GRANICĘ TEGO, CO DA SIĘ
 *   PRZEKAZAĆ — bo obiad może zacząć ktoś, kto nie umie
 *   gotować. MÓWIĘ WPROST, że to nie znosi problemu
 *   momentów przekazania, tylko zmienia to, kto może
 *   być po drugiej stronie.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ZAPASOWE POWINNO BYĆ INNE — kąt zajęty
 *   (Chocianów). ⚠⚠ TO NAJBLIŻSZY OBSZAR: tamten tekst
 *   mówi o TYM, ŻE REZERWA MA BYĆ NIEZALEŻNA; ten
 *   o TYM, ŻE MIĘDZY DWIEMA OSOBAMI JEST NIEOBSADZONA
 *   CHWILA. ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM.
 * — ⚠⚠⚠ ZERO DOŁOŻONEGO PO LATACH UŻYWANIA — kąt zajęty
 *   (Syców). Pałac i baszta się o to ocierają.
 * — ⚠⚠⚠ ZERO JEDNEJ PROCEDURY POWIELONEJ — kąt zajęty
 *   (Środa Śląska).
 * — ⚠⚠ ZERO KOLEJNOŚCI OPERACJI — kąt zajęty (Milicz,
 *   SĄSIEDNIA GMINA).
 * — ⚠⚠ ZERO DOPISZ, CZYM MIERZYŁAŚ — kąt zajęty
 *   (Twardogóra).
 * — ⚠⚠ ZERO ZAPISZ WARUNEK, NIE ZDARZENIE — kąt zajęty
 *   (Gryfów Śląski, ta sama partia).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO GRAFIKU OBOWIĄZKÓW — podaję
 *   WYŁĄCZNIE zasadę: nazwij moment przekazania.
 * — ŻADNYCH PORAD RELACYJNYCH I PSYCHOLOGICZNYCH —
 *   ⚠⚠⚠ piszę o podziale pracy w kuchni, NIE o podziale
 *   ról w związku. TO JEST TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WYJAŚNIANIA LUKI 1635–1641. Ani słowa
 *   o przyczynach. Podaję wyłącznie, że zapis jej
 *   nie obsadza.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO POŻARÓW JAKO ŻYWIOŁU.
 * — ⚠ ZERO DEMOGRAFII WSPÓŁCZESNEJ I BEZROBOCIA.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE PODAJĘ liczby miejscowości w gminie.
 * — NIE TWIERDZĘ, że gmina jest największa w województwie.
 * — NIE TWIERDZĘ, że majątek nie miał właściciela —
 *   twierdzę, że zapis ma lukę.
 * — NIE PODAJĘ przyczyn tej luki.
 * — NIE PRZYPISUJĘ Żmigrodowi karpia milickiego ani
 *   żadnego wątku hodowlanego.
 * — NIE PODAJĘ wysokości baszty.
 * — NIE PODAJĘ odległości innych niż Trzebnica i Wrocław.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Żmigród leży w powiecie trzebnickim; miasto liczy
 *   6 170 mieszkańców (GUS, 31.12.2024) na 9,5 km², czyli
 *   650,2 osoby na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 14 128 osób na 291,8 km², z kilkudzie-
 *   sięcioma miejscowościami; miasto to 43,7 % ludności
 *   gminy,
 * — pierwsza wzmianka pochodzi z 1155 r. — z bulli papieża
 *   Hadriana IV, gdzie miejscowość zapisano jako
 *   „Zunigrod"; prawa miejskie nadał w 1253 r. książę
 *   Henryk III Biały,
 * — majątek żmigrodzki należał do Kurzbachów w latach
 *   1492–1592, do Schaffgotschów w latach 1592–1635,
 *   a od 1641 r. do Hatzfeldtów,
 * — korpus pałacu wzniesiono w latach 1706–1708 i ma około
 *   34 m długości, skrzydło dobudowane w latach 1762–1765
 *   ma 96 m, a cały zespół około 130 m; park liczy 15 ha,
 *   a aleja dojazdowa około 1,5 km,
 * — basztę zbudowano w 1560 r., podwyższono w 1642,
 *   a przebudowano ponownie w 1837 r.,
 * — połączenia kolejowe otwierano w 1856, 1886 i 1894 r.,
 * — w gminie leżą rezerwaty „Radziądz" o powierzchni
 *   1 045,68 ha i „Jamnik" o powierzchni 356,21 ha,
 * — do Trzebnicy jest stąd 21 km, do Wrocławia 49 km.
 */
export const ZMIGROD: CityContent = {
  slug: "zmigrod",
  h1: "Thermomix Żmigród – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żmigród — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Żmigrodzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żmigród — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żmigrodzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żmigrodu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Żmigród"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sześć lat, których zapis nie obsadza. Tam wszystko ginie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żmigrodzie – jak wygląda prezentacja?",
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
      id: "moment-przekazania",
      heading: "Moment przekazania",
      paragraphs: [
        "Majątek żmigrodzki przechodził z rąk do rąk trzy razy, a zapis tych przejść wygląda różnie.",
        "Kurzbachowie trzymali go od 1492 do 1592 roku. Schaffgotschowie od 1592 do 1635. Hatzfeldtowie — od 1641.",
        "Przy dwóch pierwszych przejściach rok jest jeden: ten sam, w którym jedni kończą, drudzy zaczynają. Przy trzecim między datami leży sześć lat, których zapis nie obsadza. Nie wiem, co się w nich działo, i nie będę zgadywać. Wiem tylko, że w spisie właścicieli jest dziura długa na sześć lat.",
        "I to jest ta część, która przydaje się w kuchni.",
        "Pracę w kuchni dzielimy zakresami. „Ty robisz zakupy, ja gotuję.” „Ty gotujesz, ja zmywam.” To brzmi kompletnie i wygląda na uczciwe.",
        "Tyle że nie jest kompletne. Między zakresami leżą momenty przekazania i nikt ich nie obsadził.",
        "Kto rozpakowuje siatki. Kto sprawdza, czy przyjechało to, co miało. Kto zauważa, że skończyła się mąka. Kto to mówi na głos i komu. Kto decyduje, co jest na obiad, jeśli akurat nie ma z czego.",
        "Nic z tego nie leży w środku czyjegokolwiek zakresu. Wszystko leży na styku dwóch. I właśnie tam ginie — nie dlatego, że ktoś się obija, tylko dlatego, że nikt nie został tam wpisany.",
        "Ruch jest jeden. Umawiając się na podział, nazwijcie nie tylko zakresy, ale jeden moment przekazania: punkt, w którym rzecz przechodzi z rąk do rąk i obie strony wiedzą, że przeszła.",
        "Najprostszym takim punktem jest zdanie powiedziane na głos. „Zakupy stoją, brakuje masła.” Tyle. Nie tablica, nie aplikacja, nie grafik — jedno zdanie w ustalonym miejscu dnia.",
        "Dopowiem, bo to leży blisko: nie chodzi o to, żeby mieć zapas na wypadek, gdyby ktoś czegoś nie zrobił. Chodzi o coś innego — o obsadzenie chwili między jednym a drugim, żeby w ogóle nie musiało dojść do awarii.",
        "Uczciwie o drugiej stronie: jeśli w domu wszystko robi jedna osoba, żadnych momentów przekazania nie ma i cały ten akapit jej nie dotyczy. Tam problem jest zupełnie inny i nie udaję, że mam na niego odpowiedź.",
        "I uczciwie o sprzęcie. Thermomix z przewodnikiem krok po kroku przesuwa granicę tego, co da się przekazać: obiad może zacząć ktoś, kto nie umie gotować, bo kolejność i tempo są na ekranie. To nie znosi problemu momentów przekazania — zmienia tylko to, kto może stanąć po drugiej stronie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żmigrodzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile osób u Was gotuje. Jeśli więcej niż jedna, dobiorę danie tak, żeby dało się je podzielić na dwie pary rąk.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żmigrodzie"),
    sekcjaRaty("w Żmigrodzie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Żmigrodu",
      paragraphs: [
        "Żmigród leży w powiecie trzebnickim. Samo miasto liczy 6 170 mieszkańców (GUS, 31.12.2024) na dziewięciu i pół kilometra kwadratowego, czyli sześćset pięćdziesiąt osób na kilometr, a cała gmina miejsko-wiejska 14 128 osób na prawie dwustu dziewięćdziesięciu dwóch kilometrach kwadratowych — to jedna z rozleglejszych gmin w województwie. Miasto to niecałe czterdzieści cztery procent ludności gminy, czyli mniej niż połowa; reszta mieszka w kilkudziesięciu miejscowościach, których liczby nie podaję, bo źródła podają różne. Pierwsza wzmianka pochodzi z 1155 roku — z bulli papieża Hadriana IV, gdzie miejscowość zapisano jako „Zunigrod”. Prawa miejskie nadał w 1253 roku książę Henryk III Biały. Majątek żmigrodzki należał do Kurzbachów w latach 1492–1592, do Schaffgotschów w latach 1592–1635, a od 1641 roku do Hatzfeldtów. Korpus pałacu wzniesiono w latach 1706–1708 i ma około trzydziestu czterech metrów długości; skrzydło dobudowane pół wieku później, w latach 1762–1765, ma dziewięćdziesiąt sześć metrów, a cały zespół około stu trzydziestu. Park liczy piętnaście hektarów, a aleja dojazdowa około półtora kilometra. Basztę zbudowano w 1560 roku, podwyższono w 1642, a przebudowano ponownie w 1837. Połączenia kolejowe otwierano tu w 1856, 1886 i 1894 roku. W gminie leżą dwa rezerwaty: „Radziądz” o powierzchni tysiąca czterdziestu pięciu hektarów z okładem i „Jamnik” liczący trzysta pięćdziesiąt sześć hektarów. Do Trzebnicy jest stąd dwadzieścia jeden kilometrów, do Wrocławia czterdzieści dziewięć.",
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

  districtsHeading: "Do których części Żmigrodu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie — a gmina ma blisko dwieście dziewięćdziesiąt dwa kilometry kwadratowe, czyli spory kawałek powiatu. Do najdalej położonych wsi też przyjadę i też bez dopłaty.",
    "Przy umawianiu podaj nazwę miejscowości, a nie tylko „gmina Żmigród” — przy tej powierzchni różnica między jednym a drugim krańcem to kilkadziesiąt minut jazdy i wolę to wiedzieć z góry.",
  ],
  districts: [],

  nearbyHeading: "Poza Żmigród też przyjadę",
  nearbyParagraphs: [
    "Do Trzebnicy jest stąd dwadzieścia jeden kilometrów, do Wrocławia czterdzieści dziewięć. Dojeżdżam też do Milicza, Wołowa i Rawicza — wszędzie bezpłatnie, tak samo jak w samym Żmigrodzie.",
  ],
  nearbyTowns: ["Trzebnica", "Milicz", "Wołów", "Rawicz", "Wrocław"],

  about: blokOMnie("do Żmigrodu", "w Żmigrodzie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żmigrodu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie — również tych położonych najdalej, bo gmina ma blisko dwieście dziewięćdziesiąt dwa kilometry kwadratowe. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi nazewnicze: mówi się „do Żmigrodu”, nie „do Żmigroda”. I uwaga na mylącą nazwę — Nowy Żmigród to wieś w województwie podkarpackim, kilkaset kilometrów stąd, zupełnie inna miejscowość.",
    },
    ...faqWspolne("w Żmigrodzie"),
    {
      question: "Podzieliliśmy się obowiązkami w kuchni, a i tak wszystko się sypie. Dlaczego?",
      answer:
        "Bo zakresy to nie wszystko. Właściciele Żmigrodu zmieniali się trzy razy: przy dwóch przejściach rok końca jednych jest rokiem początku drugich, a przy trzecim między datami leży sześć lat, których zapis nie obsadza. W kuchni dzieje się to samo — podzieliliście zakresy, ale nie momenty przekazania. Kto rozpakowuje zakupy, kto zauważa, że skończyła się mąka, kto to mówi na głos. Nazwijcie jeden taki moment i jedno zdanie, które go domyka. To zwykle wystarczy.",
    },
    {
      question: "Czy Thermomix pomaga, gdy w domu gotuje więcej niż jedna osoba?",
      answer:
        "Pomaga w konkretny sposób: przewodnik krok po kroku pokazuje kolejność i tempo na ekranie, więc obiad może zacząć ktoś, kto nie gotuje na co dzień. Dzięki temu da się przekazać więcej niż zwykle. Nie znosi to jednak problemu momentów przekazania — nadal trzeba się umówić, kto kiedy przejmuje. Na prezentacji chętnie pokażę to na daniu, które u Was robi więcej niż jedna osoba.",
    },
  ],

  geo: { lat: 51.4667, lng: 16.9 },
};
