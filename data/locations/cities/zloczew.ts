import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * ZŁOCZEW — gmina miejsko-wiejska w powiecie sieradzkim.
 * MIASTO 3 415, GMINA 6 773 (GUS 31.12.2024).
 * LICZBY SOŁECTW NIE PODAJĘ — źródła rozbieżne.
 *
 * PRAWA MIEJSKIE — bardzo dobrze udokumentowane:
 * 14 GRUDNIA 1605 r., ZYGMUNT III WAZA, przywilej wydany
 * w Krakowie, prawo magdeburskie. Założyciel: ANDRZEJ
 * RUSZKOWSKI herbu Pobóg. Rok 1600 to fundacja klasztoru,
 * NIE lokacja — częsty błąd.
 *
 * ⚠ NAJWAŻNIEJSZE OBALENIE: w klasztorze NIE MA bernardynów.
 * Bernardyni odeszli w 1864 r. OD 1949 r. MIESZKAJĄ TAM
 * MNISZKI KAMEDUŁKI — zakon kontemplacyjny, w Polsce
 * niezwykle rzadki. Bernardynki są w WARCIE, nie tutaj —
 * to klasyczne pomieszanie dwóch miast tego samego powiatu.
 *
 * ZABYTKI: zespół klasztorny 1600–1603, rozbudowa 1683–92;
 * kościół św. Andrzeja Apostoła 1611–1614, konsekrowany
 * dopiero w 1722 r.; pałac (dawny dwór obronny) Ruszkowskich
 * 1614–1617, przebudowany na przełomie XVIII i XIX w.
 *
 * ⚠ ZAKAZ: KOPALNIA ODKRYWKOWA. Złoże węgla brunatnego
 * „Złoczew", odmowa koncesji ze stycznia 2025 r., protesty,
 * plany wysiedleń — TEMAT POLITYCZNY, NIE UŻYWAM GO WCALE,
 * nawet jako ciekawostki. Żadnych nazw spółek.
 *
 * KĄT: MAŁO SKŁADNIKÓW — dania, w których im mniej, tym
 * lepiej. Kąt wprost z klasztoru kontemplacyjnego: miejsca,
 * którego cała reguła polega na odejmowaniu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie zachęca do dokładania, bo wszystko idzie do
 *   jednego naczynia i nic nie kosztuje wysiłku,
 * — że to jest realna pułapka: dania robią się przeładowane
 *   i przestają mieć smak wiodący,
 * — że im mniej składników, tym bardziej widać jakość każdego
 *   z nich — i że to działa w obie strony,
 * — które dania są z definicji krótkie: zupy jednoskładnikowe,
 *   pasty, purée, sosy, kompoty,
 * — że dokładanie „na wszelki wypadek" jest odruchem
 *   z niepewności, a nie z przepisu,
 * — że pierwsze tygodnie z urządzeniem to zwykle czas
 *   przeładowanych dań i że to mija,
 * — i ODMOWA: nie doradzę nic o dietach eliminacyjnych.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani porad o dietach
 *   eliminacyjnych i alergiach. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO tematu kopalni, złoża, koncesji i wysiedleń.
 * — NIE ROBIĘ TŁA z demografii, nawet korzystnej.
 * — O KAMEDUŁKACH piszę z szacunkiem i rzeczowo: fakt
 *   historyczny, bez folkloryzowania i bez wchodzenia
 *   w duchowość.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Zamienniki" dotyczą
 * braku składnika. „Składniki prosto z gospodarstwa" dotyczą
 * pochodzenia. „Przyprawy" dotyczą jednej grupy. „Sałatka
 * jarzynowa" (Krynica Morska) dotyczy dania z wielu
 * składników — tu jest jej odwrotność. Tutaj chodzi o LICZBĘ
 * składników jako decyzję kucharza.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że w klasztorze są bernardyni ani bernardynki.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PISZĘ o obecnej funkcji pałacu — nie potwierdzono.
 * — NIE PODAJĘ nazw imprez cyklicznych — brak potwierdzenia.
 * — NIE PRZYPISUJĘ Złoczewowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Złoczewa ze ZŁOCZOWEM na Ukrainie ani z Grójcem.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 3 415, gmina 6 773 mieszkańców,
 * — prawa miejskie 14 grudnia 1605 r. od Zygmunta III Wazy,
 *   przywilej wydany w Krakowie, prawo magdeburskie;
 *   założyciel Andrzej Ruszkowski,
 * — zespół klasztorny ufundowany w latach 1600–1603,
 *   rozbudowany w latach 1683–1692,
 * — bernardyni byli tu od 1608 do 1864 r.; od 1949 r.
 *   w klasztorze mieszkają mniszki kamedułki,
 * — kościół świętego Andrzeja Apostoła wzniesiony
 *   w latach 1611–1614, konsekrowany w 1722 r.,
 * — pałac Ruszkowskich z lat 1614–1617, przebudowany na
 *   przełomie XVIII i XIX w.,
 * — cmentarz parafialny założony w 1846 r.
 */
export const ZLOCZEW: CityContent = {
  slug: "zloczew",
  h1: "Thermomix Złoczew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Złoczew (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Złoczewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Złoczew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Złoczewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Złoczewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Złoczew i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najczęstszy błąd pierwszych tygodni: dokładanie, bo można.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Złoczewie – jak wygląda prezentacja?",
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
      id: "malo-skladnikow",
      heading: "Klasztor kamedułek — czyli o daniach, w których im mniej, tym lepiej",
      paragraphs: [
        "W Złoczewie stoi zespół klasztorny ufundowany w latach 1600–1603 przez Andrzeja Ruszkowskiego, tego samego, który pięć lat później wystarał się dla miasta o przywilej lokacyjny — Zygmunt III Waza wydał go 14 grudnia 1605 roku w Krakowie. Prostuję przy okazji błąd, który powtarza połowa przewodników: w tym klasztorze nie ma bernardynów. Odeszli w 1864 roku. Od 1949 mieszkają w nim mniszki kamedułki, zakon kontemplacyjny, w Polsce bardzo nieliczny. Bernardynki są w Warcie, dwadzieścia kilka kilometrów stąd, i stąd całe to pomieszanie.",
        "Piszę o tym, bo reguła kontemplacyjna jest zbudowana na odejmowaniu, a ja chcę napisać o daniach, które też są.",
        "Rzecz, której nikt nie mówi przy zakupie: to urządzenie zachęca do dokładania. Wszystko idzie do jednego naczynia, nic nie trzeba osobno podsmażać, żaden dodatkowy składnik nie kosztuje ani jednej dodatkowej miski. Więc się dokłada. Jeszcze pół cebuli, jeszcze łyżka koncentratu, jeszcze pietruszka, jeszcze czosnek, jeszcze śmietana. Bo można.",
        "I to jest realna pułapka pierwszych tygodni. Dania robią się przeładowane. Wszystko smakuje podobnie, bo w każdym daniu jest wszystko. Znika smak wiodący — a to on decyduje o tym, czy człowiek zapamięta zupę, czy tylko ją zje.",
        "Prawda jest odwrotna do odruchu: im mniej składników, tym więcej widać z każdego z nich. Krem z dyni z niczym poza solą i odrobiną tłuszczu smakuje dynią. Ten sam krem z pięcioma dodatkami smakuje pięcioma dodatkami. Zupa pomidorowa, pasta z fasoli, purée, sos czosnkowy, kompot z jednego owocu — to są dania z definicji krótkie i one się w tym urządzeniu bronią najlepiej.",
        "Ale to działa też w drugą stronę i trzeba to powiedzieć uczciwie: przy trzech składnikach nie ma się gdzie schować. Zwiędła marchewka w zupie z dziesięcioma dodatkami przejdzie niezauważona. W daniu z trzema — będzie ją czuć. Krótka lista wymaga lepszych rzeczy na tej liście.",
        "Skąd się w ogóle bierze dokładanie? Prawie zawsze z niepewności. Człowiek nie jest pewien, czy wyjdzie, więc dorzuca coś jeszcze „na wszelki wypadek”. To odruch, nie przepis. Warto go zauważyć u siebie, bo mija — po kilku miesiącach większość osób gotuje z krótszymi listami niż na początku.",
        "I granica: nie doradzę Wam nic o dietach eliminacyjnych, o tym, co wykluczyć przy alergii ani co czym zastąpić z powodów zdrowotnych. Krótka lista składników to u mnie kwestia smaku, nie zalecenia — a tamto jest sprawą lekarza albo dietetyka.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Złoczewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie zobaczyć coś prostego, a nie popisowego — powiedzcie przy umawianiu. Chętnie zrobię danie z trzech składników, bo ono więcej mówi o urządzeniu niż efektowna lista z ulotki.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Złoczewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla złoczewskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad trzy tysiące czterysta mieszkańców, a cała gmina blisko sześć tysięcy osiemset. Prawa miejskie Złoczew dostał 14 grudnia 1605 roku od Zygmunta III Wazy, na prawie magdeburskim, z inicjatywy Andrzeja Ruszkowskiego herbu Pobóg. Uwaga na częsty błąd: rok 1600 to fundacja klasztoru, a nie lokacja miasta. Z tamtej epoki zostały trzy rzeczy: zespół klasztorny z lat 1600–1603, rozbudowany pod koniec siedemnastego wieku, kościół świętego Andrzeja Apostoła wzniesiony w latach 1611–1614 i konsekrowany dopiero w 1722, oraz pałac Ruszkowskich z lat 1614–1617, uważany za jeden z ładniejszych w województwie.",
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

  districtsHeading: "Do których części gminy Złoczew dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Złoczew też przyjadę",
  nearbyParagraphs: [
    "Sieradz, Wieluń, Błaszki, Wieruszów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sieradz", "Wieluń", "Błaszki", "Wieruszów"],

  about: blokOMnie("do Złoczewa", "w Złoczewie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Złoczewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Złoczew w powiecie sieradzkim w województwie łódzkim — nie o Złoczów, który leży na Ukrainie.",
    },
    ...faqWspolne("w Złoczewie"),
    {
      question: "Czy w Thermomixie trzeba używać dużo składników?",
      answer:
        "Wręcz przeciwnie. Urządzenie kusi dokładaniem, bo każdy dodatkowy składnik nic nie kosztuje — nie ma dodatkowej miski ani patelni. Ale przeładowane danie traci smak wiodący. Krem z dyni z solą i odrobiną tłuszczu smakuje dynią; ten sam krem z pięcioma dodatkami smakuje dodatkami.",
    },
    {
      question: "Które dania wychodzą najlepiej przy krótkiej liście składników?",
      answer:
        "Zupy jednoskładnikowe, purée, pasty, sosy i kompoty z jednego owocu. Trzeba tylko pamiętać, że przy trzech składnikach nie ma się gdzie schować — zwiędłą marchewkę w zupie z dziesięcioma dodatkami się przeoczy, w daniu z trzema będzie ją czuć.",
    },
    {
      question: "Czy pomożesz dobrać dania przy diecie eliminacyjnej?",
      answer:
        "Nie i mówię to wprost. Krótka lista składników to u mnie kwestia smaku, a nie zalecenia. Co wykluczyć przy alergii albo z powodów zdrowotnych, rozstrzyga lekarz lub dietetyk — nie sprzedawczyni sprzętu kuchennego.",
    },
  ],

  geo: { lat: 51.4172, lng: 18.6036 },
};
