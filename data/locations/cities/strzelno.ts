import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * STRZELNO — powiat mogileński, woj. kujawsko-pomorskie,
 * KUJAWY.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 5 198 mieszkańców (GUS 31.12.2024), 4,5 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 10 814 osób.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ STRZELNO.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ ODMIANA: D. STRZELNA, Ms. W STRZELNIE,
 *   przym. STRZELEŃSKI (nie „strzelnowski").
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO SŁOWNIKOWO —
 *   NIE UŻYWAM ŻADNEJ.
 *   ⚠ NIEMIECKIEJ NAZWY MIASTA NIE USTALONO I NIE UŻYWAM.
 * ⚠ RYZYKO POMYLENIA: STRZELCE OPOLSKIE, STRZELCE
 *   KRAJEŃSKIE, STRZELIN, STRZELCE — zawsze dopisuję
 *   „powiat mogileński".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ RDZEŃ KĄTA — DWIE DATY ODDALONE O 144 LATA:
 *   1212 R. — PRZYWILEJ TARGU TYGODNIOWEGO,
 *   1356 R. — PEŁNE PRAWA MIEJSKIE.
 *   Sto czterdzieści cztery lata targowania, zanim
 *   pojawił się tytuł.
 * — ALBERT MICHELSON, urodzony 19 GRUDNIA 1852 R.
 *   PRZY RYNKU 15; laureat Nagrody Nobla z 1907 r.
 *   Wzorzec metra wyznaczył jako 1 553 164,13 długości
 *   fali czerwonej linii kadmu.
 *   ⚠⚠ UŻYWAM WYŁĄCZNIE JAKO FAKTU W RYSIE HISTORYCZNYM:
 *   noblista urodzony przy Rynku 15 i liczba z pomiaru.
 *   ⚠⚠ ZERO POCHODZENIA I ZERO BIOGRAFII POZA TYM —
 *   patrz sekcja etyczna. TWARDA GRANICA.
 *   ⚠⚠ ZERO PRECYZJI JAKO KĄTA — temat zajęty
 *   (Tomaszów Lubelski). ZERO MIAR OBJĘTOŚCI I MASY —
 *   kąt zajęty (Chełmno). TWARDA GRANICA.
 * — KOLUMNY ROMAŃSKIE z wyobrażeniami 36 POSTACI.
 *   ⚠⚠ NIE UŻYWAM — obiekt i jego treść należą
 *   do warstwy wyznaniowej, która przy tym mieście
 *   dominuje wyniki wyszukiwania. TWARDA GRANICA.
 * ⚠ WYMIARÓW KOLUMN, DATY ICH ODKRYCIA, SPISÓW
 *   RZEMIEŚLNIKÓW, LICZBY DOMÓW ANI DNIA TYGODNIA
 *   TARGU NIE USTALONO — NIE ZGADUJĘ.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Strzelno.
 *   ⚠⚠⚠ PUŁAPKA ROZBROJONA — DWA BRONISŁAWY:
 *   w gminie Strzelno istnieje wieś BRONISŁAW, ale
 *   WSZYSTKIE produkty „bronisławskie" na liście MRiRW
 *   (marmolada z buraków cukrowych, mniszek bronisławski
 *   z wpisem 18.01.2010, dziady, chruściki, zupa fasolowa,
 *   ryba w zalewie) pochodzą od koła gospodyń wiejskich
 *   BRONISŁAW PRZY GMINIE DOBRE w powiecie radziejowskim —
 *   to inna miejscowość o tej samej nazwie.
 *   ⚠ Karta mniszka nie podaje gminy, więc o przynależności
 *   rozstrzyga koło gospodyń.
 *   NIE PRZYPISUJĘ STRZELNU ŻADNEGO Z NICH.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: NAJPIERW ZWYCZAJ, POTEM NAZWA.
 * Kąt od dwóch dat: Strzelno dostało przywilej targu
 * tygodniowego w 1212 r., a pełne prawa miejskie dopiero
 * w 1356 — sto czterdzieści cztery lata później. Przez
 * półtora wieku robiło to, czym jest miasto, nie będąc
 * jeszcze miastem z nazwy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Strzelno dostało przywilej targu tygodniowego
 *   w 1212 roku, a pełne prawa miejskie dopiero w 1356 —
 *   sto czterdzieści cztery lata później,
 * — ŻE PRZEZ PÓŁTORA WIEKU ROBIŁO TO, CZYM JEST MIASTO:
 *   ludzie przyjeżdżali, handlowali, wracali. Zmienił się
 *   dokument, nie zwyczaj,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TA SAMA KOLEJNOŚĆ I ŻE MYLIMY
 *   JĄ NOTORYCZNIE — TO JEST RDZEŃ TEKSTU:
 *   najpierw powstaje zwyczaj, potem dopiero nazwa,
 *   sprzęt i „metoda",
 * — CO Z TEGO WYNIKA, KONKRETNIE:
 *   — TECHNIKA, KTÓREJ NAZWY NIE ZNASZ, I TAK JEST
 *     TECHNIKĄ. Odstawianie mięsa, hartowanie jajek,
 *     podgrzewanie miski przed ubijaniem — ludzie robili
 *     to całe pokolenia, zanim ktokolwiek nadał temu nazwę
 *     w książce,
 *   — ZNAJOMOŚĆ NAZWY NIE JEST UMIEJĘTNOŚCIĄ. Można znać
 *     dziesięć terminów i nie umieć zrobić rosołu,
 *     i odwrotnie,
 *   — ⚠⚠ A SPRZĘT KUPUJE SIĘ DO ZWYCZAJU, KTÓRY JUŻ JEST,
 *     A NIE DO TEGO, KTÓRY MA DOPIERO POWSTAĆ.
 *     To jest najważniejsze zdanie tej strony,
 * — ŻE DLATEGO PIERWSZE PYTANIE NA SPOTKANIU NIE BRZMI
 *   „co chciałabyś gotować", tylko „CO GOTUJESZ TERAZ,
 *   W ZWYKŁY WTOREK" — bo urządzenie wejdzie w istniejący
 *   rytm albo nie wejdzie wcale,
 * — ŻE NAJCZĘSTSZY BŁĄD PRZY TAKIM ZAKUPIE TO KUPOWANIE
 *   POD WYOBRAŻENIE O SOBIE: pod osobę, która zacznie
 *   piec chleb co drugi dzień, chociaż nigdy dotąd
 *   nie upiekła,
 * — ⚠ UCZCIWIE O SPRZĘCIE: Thermomix skraca czynności,
 *   ale nie tworzy nawyków. Jeśli w domu gotuje się dwa
 *   razy w tygodniu, po zakupie nadal będą to dwa razy —
 *   tylko szybciej i z mniejszą liczbą naczyń.
 *   TO JEST REALNA KORZYŚĆ I TAK JĄ NAZYWAM,
 *   ale nazywam ją uczciwie.
 *   ⚠ ODSYŁAM DO STRONY O NAWYKU, NIE ROZWIJAM.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO PRECYZJI JAKO TEMATU — kąt zajęty
 *   (Tomaszów Lubelski).
 * — ⚠⚠ ZERO SZKLANKI, WAGI I MIAR — kąt zajęty (Chełmno).
 * — ⚠⚠ ZERO NAWYKU JAKO TEMATU — kąt zajęty (Żukowo).
 *   Odsyłam jednym zdaniem. TWARDA GRANICA.
 * — ⚠ ZERO KUPOWANIA NA WYROST — kąt zajęty (Kobyłka).
 *   Tam chodzi o SPRZĘT LEPSZY NIŻ POTRZEBY; tutaj
 *   o SPRZĘT DO NIEISTNIEJĄCEGO ZWYCZAJU.
 * — ⚠ ZERO PLANOWANIA TYGODNIA — kąt zajęty.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKU WYZNANIOWEGO. Przy Strzelnie
 *   dominuje on praktycznie wszystkie wyniki
 *   wyszukiwania: rotunda, zgromadzenie zakonne, kasata
 *   z 1837 r., kolumny z wyobrażeniami postaci.
 *   CAŁA TA WARSTWA WYŁĄCZONA — stąd tekst oparty
 *   na dwóch datach prawnych i na niczym więcej.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO POCHODZENIA I BIOGRAFII ALBERTA MICHELSONA
 *   poza faktem, że urodził się przy Rynku 15 i dostał
 *   Nobla w 1907 r. TWARDA GRANICA.
 * — ZERO wątków wojennych i okupacyjnych.
 * — ZERO wątków narodowościowych.
 * — ZERO wyludniania i bezrobocia.
 * — ZERO niemieckiej nazwy miasta.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „NAWYK" (Żukowo) dotyczy TEGO, JAK POWSTAJE NAWYK
 *   GOTOWANIA. ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi
 *   o KOLEJNOŚĆ: że zwyczaj jest PRZED nazwą i przed
 *   sprzętem. Odsyłam tam wprost.
 * — „KUPNO NA WYROST" (Kobyłka) dotyczy SPRZĘTU LEPSZEGO
 *   NIŻ DZISIEJSZE POTRZEBY.
 * — „PRECYZJA" (Tomaszów Lubelski) dotyczy TEGO, GDZIE
 *   DOKŁADNOŚĆ NIE JEST POTRZEBNA.
 * — „SZKLANKA CZY WAGA" (Chełmno) dotyczy MIAR.
 * — „PRZEPIS, KTÓREGO NIKT NIE ZAPISAŁ" (Golub-Dobrzyń)
 *   dotyczy SPISYWANIA.
 * TUTAJ chodzi o TO, ŻE ZWYCZAJ JEST PIERWSZY,
 * A NAZWA I SPRZĘT PRZYCHODZĄ PO NIM.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PRZYPISUJĘ Strzelnu produktów „bronisławskich" —
 *   pochodzą z innej miejscowości o tej samej nazwie.
 * — NIE ROZWIJAM biografii Michelsona.
 * — NIE OPISUJĘ kolumn ani ich treści.
 * — NIE PODAJĘ dnia tygodnia targu — nie ustalono.
 * — NIE PODAJĘ spisów rzemieślników — nie ustalono.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Strzelno leży na Kujawach, w powiecie mogileńskim,
 *   jest miastem w gminie miejsko-wiejskiej i liczy 5 198
 *   mieszkańców (GUS, 31.12.2024) na 4,5 km²; cała gmina
 *   ma 10 814 osób,
 * — przywilej targu tygodniowego miasto otrzymało w 1212
 *   roku, a pełne prawa miejskie dopiero w 1356 — sto
 *   czterdzieści cztery lata później,
 * — 19 grudnia 1852 roku urodził się tu, przy Rynku 15,
 *   Albert Michelson, laureat Nagrody Nobla z 1907 roku,
 *   który wyznaczył wzorzec metra jako 1 553 164,13
 *   długości fali czerwonej linii kadmu.
 */
export const STRZELNO: CityContent = {
  slug: "strzelno",
  h1: "Thermomix Strzelno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Strzelno — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Strzelnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Strzelno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Strzelnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Strzelna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Strzelno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sprzęt kupuje się do zwyczaju, który już jest.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Strzelnie – jak wygląda prezentacja?",
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
      id: "najpierw-zwyczaj",
      heading: "Sto czterdzieści cztery lata targu bez tytułu",
      paragraphs: [
        "Strzelno dostało przywilej targu tygodniowego w 1212 roku. Pełne prawa miejskie — dopiero w 1356. Sto czterdzieści cztery lata różnicy.",
        "Przez półtora wieku robiło więc dokładnie to, czym jest miasto: ludzie zjeżdżali w umówiony dzień, handlowali, wracali do siebie. Zmienił się dokument, nie zwyczaj. Zwyczaj był pierwszy i był jedyną rzeczą, która naprawdę działała.",
        "W kuchni jest tak samo i mylimy tę kolejność notorycznie.",
        "Najpierw powstaje zwyczaj. Dopiero potem przychodzi nazwa, metoda i sprzęt. Nigdy odwrotnie.",
        "Technika, której nazwy nie znasz, i tak jest techniką. Odstawianie mięsa po upieczeniu, hartowanie jajek, podgrzewanie miski przed ubijaniem — ludzie robili to przez pokolenia, zanim ktokolwiek nadał temu nazwę w książce kucharskiej. Nazwa niczego nie dodała; opisała to, co już się działo.",
        "Z czego wynika rzecz dla mnie oczywista, a dla wielu osób nie: znajomość nazwy nie jest umiejętnością. Można znać dziesięć terminów i nie umieć zrobić rosołu. Można też odwrotnie — i to jest częstsze.",
        "A skoro tak, to sprzęt kupuje się do zwyczaju, który już jest. Nie do tego, który ma dopiero powstać.",
        "Dlatego pierwsze pytanie, które zadaję na spotkaniu, nie brzmi „co chciałabyś gotować”. Brzmi: co gotujesz teraz, w zwykły wtorek. Bo urządzenie wejdzie w istniejący rytm albo nie wejdzie w ogóle — i to widać po kilku tygodniach, nie po roku.",
        "Najczęstszy błąd przy takim zakupie to kupowanie pod wyobrażenie o sobie. Pod osobę, która zacznie piec chleb co drugi dzień, chociaż nigdy dotąd nie upiekła ani jednego. Ta osoba zwykle nie przychodzi, a urządzenie zostaje.",
        "I uczciwie o sprzęcie, bo to jest wniosek z całej tej historii. Thermomix skraca czynności, ale nie tworzy nawyków. Jeśli w domu gotuje się dwa razy w tygodniu, po zakupie nadal będą to dwa razy — tylko szybciej i z mniejszą liczbą naczyń do umycia.",
        "To jest realna korzyść i tak ją nazywam. Ale nazywam ją uczciwie, bo różnica między „będę gotować częściej” a „to samo zajmie mi mniej czasu” jest zasadnicza, a tylko o tej drugiej mogę coś obiecać. O samym powstawaniu nawyku gotowania pisałam osobno przy innym mieście.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Strzelnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co gotujesz w zwykły wtorek — nie co chciałabyś gotować. To zupełnie zmienia, co warto pokazać, i czasem kończy się tym, że odradzam zakup.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Strzelnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla strzeleńskiej rodziny",
      paragraphs: [
        "Strzelno leży na Kujawach, w powiecie mogileńskim, jest miastem w gminie miejsko-wiejskiej i liczy ponad pięć tysięcy mieszkańców na czterech i pół kilometra kwadratowego; cała gmina ma blisko jedenaście tysięcy osób. Przywilej targu tygodniowego miasto otrzymało w 1212 roku, a pełne prawa miejskie dopiero w 1356 — sto czterdzieści cztery lata później. 19 grudnia 1852 roku urodził się tu, przy Rynku 15, Albert Michelson, laureat Nagrody Nobla z 1907 roku, który wyznaczył wzorzec metra jako milion pięćset pięćdziesiąt trzy tysiące sto sześćdziesiąt cztery i trzynaście setnych długości fali czerwonej linii kadmu.",
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

  districtsHeading: "Do których części Strzelna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i starego centrum po osiedla przy wylotach dróg. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Strzelno też przyjadę",
  nearbyParagraphs: [
    "Mogilno, Kruszwica, Janikowo, Inowrocław, Radziejów, Piotrków Kujawski i Pakość są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Mogilno", "Kruszwica", "Janikowo", "Radziejów"],

  about: blokOMnie("do Strzelna", "w Strzelnie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Strzelna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Strzelno w powiecie mogileńskim — nie mylić ze Strzelcami Opolskimi ani Krajeńskimi.",
    },
    ...faqWspolne("w Strzelnie"),
    {
      question: "Czy Thermomix sprawi, że będę gotować częściej?",
      answer:
        "Nie obiecam tego, bo nie byłoby to uczciwe. Urządzenie skraca czynności, ale nie tworzy nawyków. Jeśli w domu gotuje się dwa razy w tygodniu, po zakupie nadal będą to dwa razy — tylko szybciej i z mniejszą liczbą naczyń. To jest realna korzyść, tylko inna niż ta, którą się zwykle obiecuje.",
    },
    {
      question: "O co pytasz na początku spotkania?",
      answer:
        "Nie o to, co chciałabyś gotować, tylko co gotujesz teraz, w zwykły wtorek. Sprzęt wchodzi w istniejący rytm albo nie wchodzi wcale, a najczęstszy błąd przy takim zakupie to kupowanie pod wyobrażenie o sobie — pod osobę, która zacznie piec chleb co drugi dzień, chociaż nigdy dotąd nie upiekła.",
    },
  ],

  geo: { lat: 52.6277, lng: 18.1727 },
};
