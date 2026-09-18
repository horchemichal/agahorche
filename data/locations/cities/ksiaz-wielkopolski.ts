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
 * KSIĄŻ WIELKOPOLSKI — powiat śremski, woj. wielkopolskie.
 * ⚠⚠⚠ NIE MYLIĆ Z KSIĄŻEM NA DOLNYM ŚLĄSKU (zamek,
 *   dzielnica Wałbrzycha) ANI Z KSIĄŻEM WIELKIM
 *   (gmina w małopolskiem, powiat miechowski).
 *   ⚠⚠⚠ „WIELKOPOLSKI" I „WIELKI" TO NIE WARIANTY
 *   TEGO SAMEGO CZŁONU: pierwszy odsyła do REGIONU,
 *   drugi do WIELKOŚCI. WSPOMINAM.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA.
 * MIASTO: 2 943 mieszkańców (GUS 31.12.2024),
 *   2,0 km², 88 m n.p.m.
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 501,5 os./km², iloraz z 2,0 km² daje 1 471,5.
 *   ROZBIEŻNOŚĆ 30,0 — NAJWIĘKSZA W CAŁEJ SERII.
 *   ⚠⚠⚠ POWIERZCHNI ODTWORZONEJ (1,96 km²) TEŻ
 *   NIE PODAJĘ — to rekonstrukcja, nie cytat.
 *   ⚠⚠ ANI POWIERZCHNI 2,26 km² Z ANGIELSKIEJ
 *   WIKIPEDII — sprzeczna z pozostałymi o 15 %.
 *   PODAJĘ TYLKO 2,0 km².
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 * CAŁA GMINA: 8 012 osób, 148,0 km², gęstość
 *   55 os./km².
 *   ⚠ [ZW — 8 012 / 148,0 = 54,1. Różnica 0,9.
 *   DOMYKA SIĘ, ale blisko progu. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 21 SOŁECTW (BIP gminy) i 31 MIEJSCOWOŚCI
 *   (TERYT).
 *   ⚠⚠⚠ OBRĘBÓW EWIDENCYJNYCH (19) NIE PODAJĘ —
 *   kąt „samorząd dzieli drobniej niż kataster"
 *   ZAJĘTY (Lwówek).
 *   MIEJSCOWOŚCI (część): Radoszkowo, Radoszkowo
 *   Drugie, Chwałkowo Kościelne, Mchy, Gogolewo,
 *   Gogolewko, Kiełczyn, Kiełczynek, Włościejewice,
 *   Włościejewki, Konarskie, Konarzyce, Świączyń,
 *   Sroczewo, Zaborowo, Zakrzewice.
 *   ⚠⚠ PAR ZDROBNIENIOWYCH NIE ROBIĘ FIGURĄ —
 *   kąt „trzy pary, trzy kryteria" ZAJĘTY (Kobylin).
 *   WYMIENIAM JE JAKO PUŁAPKI ADRESOWE.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 23,0 %. PODAJĘ.
 * ⚠ GEO: 52,0609 / 17,2393 (punkt miasta).
 *   ⚠⚠ PUNKT GMINY LEŻY OK. 4 KM DALEJ — RÓŻNICY
 *   TEJ NIE OPISUJĘ, to artefakt rejestru.
 *
 * ⚠⚠ ODMIANA — ODMIENIAJĄ SIĘ OBA CZŁONY:
 *   D. do KSIĄŻA WIELKOPOLSKIEGO ·
 *   Ms. w KSIĄŻU WIELKOPOLSKIM ·
 *   N. Książem Wielkopolskim · C. Książowi
 *   Wielkopolskiemu.
 *   ⚠⚠⚠ NAJCZĘSTSZY BŁĄD: MYLENIE DOPEŁNIACZA
 *   „Książa" Z MIEJSCOWNIKIEM „Książu".
 *   SPRAWDZIAN: po „do/z" → -A, po „w/o" → -U.
 *   Formy „do Książu" i „w Książa" SĄ BŁĘDNE.
 *   WSPOMINAM OBOWIĄZKOWO.
 *   ⚠⚠ BŁĄD DRUGI: nieodmienianie członu —
 *   „w Książ Wielkopolskim".
 *   ⚠ SKRÓT URZĘDOWY: „Książ Wlkp.".
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — forma
 *   niepotwierdzona [NP], a „książański" należy
 *   do zamku na Dolnym Śląsku i NIE ROZRÓŻNIA
 *   OBU KSIĄŻÓW. UŻYWAM FORM OPISOWYCH.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1193 R. PODAJĘ.
 *     ⚠⚠⚠ ŹRÓDŁA RÓŻNIĄ SIĘ CO DO TEGO, W JAKIM
 *     DOKUMENCIE — jedno mówi o dokumencie
 *     książęcym, drugie o bulli papieskiej.
 *     ⚠⚠⚠ ROZBIEŻNOŚCI TEJ NIE OPISUJĘ — druga
 *     wersja prowadzi w wątek wyznaniowy.
 *     PODAJĘ SAM ROK.
 *   — KASZTELANIA: OD 1273 R. PODAJĘ.
 *   — PRAWA MIEJSKIE: POCZĄTEK XV W.
 *     ⚠⚠⚠ ŹRÓDŁA PODAJĄ 1407, „przed 1416",
 *     „między 1398 a 1416". NIE WYBIERAM.
 *     ⚠⚠⚠ FIGURY Z TEGO NIE ROBIĘ — kąt „data
 *     przyjęta, nie znaleziona" ZAJĘTY (Krobia).
 *     MÓWIĘ JEDNYM ZDANIEM, ŻE NIE ROZSTRZYGAM.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *     ⚠ Chwałkowo Kościelne WYMIENIAM WYŁĄCZNIE
 *     JAKO NAZWĘ WSI W WYLICZENIU.
 *   ⚠ RZEKI I RATUSZA NIE USTALONO [NP].
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NUMERACJA ZACZYNA SIĘ OD DRUGIEGO:
 *   W GMINIE LEŻĄ RADOSZKOWO I RADOSZKOWO DRUGIE.
 *   RADOSZKOWA PIERWSZEGO NIE MA W ŻADNYM Z WYKAZÓW.
 *   Numer porządkowy nosi tylko jedna z dwóch
 *   miejscowości, a numeracja zaczyna się od dwójki —
 *   bo „pierwszym" jest po prostu Radoszkowo, tyle że
 *   nikt tego nie zapisał w nazwie.
 *   NAZWA DZIAŁA WYŁĄCZNIE DLA TEGO, KTO ZNA UKŁAD.
 *   ⚠⚠ NIE TWIERDZĘ, KIEDY I DLACZEGO TAK SIĘ STAŁO —
 *   nie ustalono [NP].
 *
 * KĄT: NAZWY, KTÓRE DZIAŁAJĄ TYLKO DLA WTAJEMNICZONYCH
 * — o tym, że w każdej kuchni połowa rzeczy nazywa się
 * względem czegoś, czego już nie ma albo czego nie
 * widać. Kąt z Książa: Radoszkowo Drugie bez Pierwszego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w gminie są Radoszkowo i Radoszkowo Drugie,
 *   a Radoszkowa Pierwszego nie ma w wykazach.
 *   TO JEST RDZEŃ,
 * — że taka nazwa działa tylko dla kogoś, kto zna układ,
 * — ⚠⚠ ŻE W KUCHNI JEST TAK SAMO: „ta druga szuflada",
 *   „duży garnek" (choć jest jeden), „nowa deska"
 *   (od pięciu lat), „ta od ciasta",
 * — ⚠⚠ ŻE TO NIE PRZESZKADZA, DOPÓKI GOTUJE JEDNA
 *   OSOBA — a zaczyna przeszkadzać dokładnie wtedy,
 *   gdy ktoś ma pomóc,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nazwy, które mają działać
 *   dla innych, muszą opisywać rzecz, a nie jej
 *   historię. „Szuflada z nożami" zamiast „ta druga",
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: domowych nazw nie trzeba
 *   kasować i nie ma w nich nic złego — wystarczy raz
 *   je komuś wytłumaczyć albo podpisać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie przychodzi
 *   z własnym słownikiem — nazwy trybów i akcesoriów
 *   trzeba na początku poznać i to jest realny koszt
 *   pierwszych tygodni. MÓWIĘ TO WPROST.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DOWÓD LEŻY W SĄSIEDNIEJ NAZWIE — kąt
 *   zajęty (Skoki). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam sąsiednia nazwa
 *   CZEGOŚ DOWODZIŁA; tu nazwa ODSYŁA DO CZEGOŚ,
 *   CZEGO W REJESTRZE NIE MA. JEDNO ZDANIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO OBJAŚNIENIE DOPISANE PÓŹNIEJ — kąt
 *   zajęty (Tuliszków).
 * — ⚠⚠⚠ ZERO NAZWA NADANA PRZEGRAŁA Z UŻYWANĄ — kąt
 *   zajęty (Sompolno). ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠ ZERO TRZY PARY, TRZY KRYTERIA — kąt zajęty
 *   (Kobylin). DLATEGO PAR ZDROBNIENIOWYCH NIE ROBIĘ
 *   FIGURĄ.
 * — ⚠⚠ ZERO DATA PRZYJĘTA, NIE ZNALEZIONA — kąt zajęty
 *   (Krobia).
 * — ⚠⚠ ZERO CZTERY REJESTRY, CZTERY LICZBY — kąt zajęty
 *   (Kleczew).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   NAMAWIANIA NA REMONT.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE PODAJĘ powierzchni 1,96 ani 2,26 km².
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE WYBIERAM daty praw miejskich.
 * — NIE OPISUJĘ, w jakim dokumencie jest wzmianka
 *   z 1193 r.
 * — NIE TWIERDZĘ, skąd wzięła się nazwa Radoszkowo
 *   Drugie.
 * — NIE UŻYWAM przymiotnika od nazwy miasta.
 * — NIE PODAJĘ największej wsi ani rzeki.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Książ Wielkopolski leży w powiecie śremskim,
 *   liczy 2 943 mieszkańców (GUS, 31.12.2024)
 *   na 2,0 km² i leży 88 m n.p.m.,
 * — cała gmina miejsko-wiejska to 8 012 osób
 *   na 148 km², czyli 55 osób na kilometr kwadratowy,
 *   przy lesistości 23 %,
 * — gmina ma 21 sołectw i 31 miejscowości,
 * — w gminie leżą Radoszkowo i Radoszkowo Drugie,
 *   a Radoszkowa Pierwszego nie ma w wykazach,
 * — pierwsza wzmianka pochodzi z 1193 r., od 1273 r.
 *   była tu siedziba kasztelanii, a prawa miejskie
 *   miasto uzyskało na początku XV w. — źródła podają
 *   różne daty,
 * — w gminie leżą też m.in. Kiełczyn i Kiełczynek,
 *   Gogolewo i Gogolewko, Włościejewice
 *   i Włościejewki, Konarskie i Konarzyce,
 * — odrębny Książ leży na Dolnym Śląsku, a Książ
 *   Wielki w województwie małopolskim.
 */
export const KSIAZ_WIELKOPOLSKI: CityContent = {
  slug: "ksiaz-wielkopolski",
  h1: "Thermomix Książ Wielkopolski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Książ Wielkopolski — cena i prezentacja",
  seoDescription:
    "Thermomix w Książu Wielkopolskim w powiecie śremskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Książ Wielkopolski — prezentacja u Ciebie",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Książu Wielkopolskim pod Śremem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Książa Wielkopolskiego w powiecie śremskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu jeden sołectw w gminie.",

  highlights: highlightyStandardowe("Książ Wielkopolski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Radoszkowo Drugie jest. Radoszkowa Pierwszego nie ma.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Książu Wielkopolskim – jak wygląda prezentacja?",
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
      id: "nazwy-dla-wtajemniczonych",
      heading: "Nazwy, które działają tylko dla wtajemniczonych",
      paragraphs: [
        "W gminie Książ Wielkopolski leżą dwie miejscowości o tym samym rdzeniu: Radoszkowo i Radoszkowo Drugie. Radoszkowa Pierwszego nie ma — ani w wykazie miejscowości, ani nigdzie indziej.",
        "Numer nosi więc tylko jedna z dwóch, a numeracja zaczyna się od dwójki. Domyślnie „pierwszym” jest po prostu Radoszkowo, tylko że nikt tego w nazwie nie zapisał. Skąd to się wzięło i kiedy, nie ustaliłam i nie będę zgadywać.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, któremu nazwa sąsiedniej wsi czegoś dowodziła — tam sąsiednia nazwa była dowodem. Tutaj jest odwrotnie: nazwa odsyła do czegoś, czego w rejestrze w ogóle nie ma. I jeszcze jedno rozróżnienie: pisałam też o mieście, w którym nazwa nadana urzędowo przegrała z nazwą używaną — tutaj obie nazwy są urzędowe i obie obowiązują, brakuje tylko trzeciej.",
        "Piszę o tym, bo połowa rzeczy w każdej kuchni nazywa się dokładnie tak samo.",
        "„Ta druga szuflada.” „Duży garnek” — choć duży jest tylko jeden i nie ma z czym go porównać. „Nowa deska”, kupiona pięć lat temu. „Ta od ciasta”, choć ciasto piekło się w niej ostatnio przed świętami dwa lata temu. „Górna półka”, czyli ta, na którą trzeba wejść na taboret, a nie ta najwyższa.",
        "Każda z tych nazw jest zrozumiała i wygodna — dla osoby, która pamięta, skąd się wzięła. Dla wszystkich innych to szyfr. I dopóki gotuje jedna osoba, nie ma z tym najmniejszego problemu.",
        "Problem pojawia się dokładnie w momencie, w którym ktoś ma pomóc. Mąż nie wie, która jest „ta druga”. Dziecko nie znajdzie „tej od ciasta”. Babcia pyta o wszystko trzy razy i po dwóch pytaniach przestaje pytać, a zaczyna szukać po omacku. Wtedy pomoc kosztuje więcej czasu, niż daje, i łatwo wyciągnąć wniosek, że szybciej zrobić samej. To nie jest prawda o innych ludziach — to prawda o nazwach.",
        "Ruch jest jeden: nazwy, które mają działać dla kogoś poza Wami, muszą opisywać rzecz, a nie jej historię. „Szuflada z nożami” zamiast „ta druga”. „Półka z przyprawami” zamiast „na górze”. Nie trzeba niczego przestawiać — wystarczy raz powiedzieć na głos, co gdzie jest, albo nakleić cztery karteczki.",
        "Uczciwie o drugiej stronie, bo domowych nazw nie trzeba kasować. One są wygodne, są własne i często zabawne, a kuchnia bez nich brzmi jak katalog. Wystarczy, że raz ktoś je przetłumaczy komuś z zewnątrz — i tyle. Rzecz nie w tym, żeby mówić poprawnie, tylko żeby druga osoba wiedziała, po co sięga.",
        "I uczciwie o sprzęcie, bo Thermomix przychodzi z własnym słownikiem. Ma nazwy trybów, nazwy akcesoriów i nazwy czynności, których na początku się nie zna. To realny koszt pierwszych tygodni i nie udaję, że go nie ma — po prostu przechodzi się przez to raz. Na prezentacji nazywam rzeczy po kolei, a nie zakładam, że coś jest oczywiste.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Książu Wielkopolskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Książu Wielkopolskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Książa Wielkopolskiego",
      paragraphs: [
        "Książ Wielkopolski leży w powiecie śremskim, liczy 2 943 mieszkańców (GUS, 31.12.2024) na dwóch kilometrach kwadratowych i leży osiemdziesiąt osiem metrów nad poziomem morza; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem, i to rozbieżnością największą, na jaką trafiłam. Cała gmina miejsko-wiejska to 8 012 osób na stu czterdziestu ośmiu kilometrach kwadratowych, czyli pięćdziesiąt pięć osób na kilometr, przy lesistości dwudziestu trzech procent. Ma dwadzieścia jeden sołectw i trzydzieści jeden miejscowości. Pierwsza wzmianka pochodzi z 1193 roku, od 1273 była tu siedziba kasztelanii, a prawa miejskie miasto uzyskało na początku XV wieku — źródła podają trzy różne daty i nie rozstrzygam, która jest właściwa.",
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

  districtsHeading: "Do których części Książa Wielkopolskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu jeden sołectw w gminie. Nazywają się między innymi: Radoszkowo, Radoszkowo Drugie, Mchy, Sroczewo, Zaborowo, Zakrzewice, Konarskie, Konarzyce, Kiełczyn, Kiełczynek, Gogolewo, Gogolewko, Włościejewice, Włościejewki i Świączyń. Wszędzie bez dopłaty.",
    "Trzy uwagi, bo ta nazwa myli na kilka sposobów naraz. Pierwsza: odrębny Książ leży na Dolnym Śląsku, a Książ Wielki w województwie małopolskim — i uwaga, „Wielkopolski” i „Wielki” to nie są warianty tego samego członu, bo pierwszy odsyła do regionu, a drugi do wielkości. Przy umawianiu warto powiedzieć „Książ Wielkopolski w powiecie śremskim”. Druga, językowa: odmieniają się oba człony, a najczęstszy błąd to pomylenie „do Książa Wielkopolskiego” z „w Książu Wielkopolskim” — po „do” jest „a”, po „w” jest „u”. Trzecia, adresowa: w gminie leżą osobno Kiełczyn i Kiełczynek, Gogolewo i Gogolewko, Włościejewice i Włościejewki oraz Konarskie i Konarzyce, więc pełna nazwa wsi bardzo pomaga.",
  ],
  districts: [],

  nearbyHeading: "Poza Książ Wielkopolski też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Śremu, Jarocina, Miłosławia, Środy Wielkopolskiej, Pyzdr i Krobi — wszędzie bezpłatnie, tak samo jak w samym Książu Wielkopolskim.",
  ],
  nearbyTowns: ["Śrem", "Jarocin", "Miłosław", "Środa Wielkopolska", "Pyzdry", "Krobia"],

  about: blokOMnie("do Książa Wielkopolskiego", "w Książu Wielkopolskim i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Książa Wielkopolskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu jeden sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi przy umawianiu. Pierwsza: odrębny Książ leży na Dolnym Śląsku, a Książ Wielki w małopolskiem, więc warto powiedzieć „Książ Wielkopolski w powiecie śremskim”. Druga, adresowa: w gminie są osobno Kiełczyn i Kiełczynek, Gogolewo i Gogolewko oraz Włościejewice i Włościejewki — pełna nazwa wsi bardzo pomaga.",
    },
    ...faqWspolne("w Książu Wielkopolskim"),
    {
      question: "Chcę, żeby ktoś w domu mi pomagał w kuchni, ale ciągle muszę wszystko tłumaczyć. Co robię źle?",
      answer:
        "Prawdopodobnie nic — poza tym, że Wasza kuchnia jest opisana nazwami, które działają tylko dla Was. Książ Wielkopolski jest tu dobrym obrazem: w gminie są Radoszkowo i Radoszkowo Drugie, a Radoszkowa Pierwszego nie ma nigdzie. Nazwa odsyła do czegoś, czego w rejestrze nie ma, i działa wyłącznie dla kogoś, kto zna układ. W kuchni to samo robią „ta druga szuflada”, „duży garnek” i „ta od ciasta”. Dopóki gotujecie sami, nie przeszkadza to wcale; przeszkadza dokładnie wtedy, gdy ktoś ma pomóc. Ruch jest jeden: nazwy, które mają działać dla innych, muszą opisywać rzecz, a nie jej historię — „szuflada z nożami” zamiast „ta druga”. Nie trzeba niczego przestawiać, wystarczy raz powiedzieć na głos, co gdzie jest.",
    },
    {
      question: "Nie znam się na takim sprzęcie. Czy nie będzie to dla mnie za trudne?",
      answer:
        "Na początku dochodzi nowe słownictwo i to jest jedyna realna trudność — nazwy trybów, akcesoriów i czynności, których się wcześniej nie znało. Nie udaję, że tego kosztu nie ma; po prostu przechodzi się przez niego raz, zwykle w ciągu kilku pierwszych tygodni. Dlatego na prezentacji nazywam rzeczy po kolei i nie zakładam, że cokolwiek jest oczywiste. Po zakupie też nie znikam: odbieram telefon i można do mnie zadzwonić z pytaniem, które wydaje się głupie — takich pytań nie ma.",
    },
  ],

  geo: { lat: 52.0609, lng: 17.2393 },
};
