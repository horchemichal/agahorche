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
 * ZELÓW — gmina miejsko-wiejska w powiecie bełchatowskim.
 * MIASTO 6 983 mieszkańców, GMINA 14 307 (31.12.2024, GUS).
 * Brief mówił 7 500 — zawyżone. 35 sołectw, BRAK osiedli
 * statutowych (BIP wymienia wyłącznie sołectwa).
 * UWAGA: urząd podaje inne liczby niż GUS (6 830 w mieście)
 * — różnica z meldunków. PODAJĘ GUS.
 *
 * PRAWA MIEJSKIE 1957 r. (status osady 1954). NADAWCY NIE
 * PODAJĘ — nie ustalono aktu. To bardzo młode miasto.
 *
 * FAKT OSIOWY: dobra Zelów kupiono od Józefa Świdzińskiego
 * w 1802 r., a w 1803 r. przybyło tu 149 RODZIN CZESKICH
 * BRACI. Kościół ewangelicko-reformowany zbudowano
 * w latach 1821–1825 wg projektu architekta Zille, kosztem
 * ponad 30 000 zł polskich, ze środków rządu Królestwa
 * Polskiego i mieszkańców. We wnętrzu czeskie inskrypcje
 * i tablice ku czci Jana Husa i Jana Kalwina; przy kościele
 * cmentarz z czeskimi napisami. 200-LECIE PARAFII OBCHODZONO
 * 5 LIPCA 2025 r., z udziałem ambasadora Czech; gmina
 * podarowała „Ławeczkę Wspólnoty" z cytatem Jana Amosa
 * Komeńskiego: „Wszyscy stoimy na jednej scenie wielkiego
 * świata".
 *
 * OBALONE: w Zelowie NIE MIESZKA już duża społeczność czeska —
 * większość wyjechała. Zostały: parafia, kościół, cmentarz
 * i stowarzyszenie mniejszości czeskiej z muzeum. UWAGA:
 * ŹRÓDŁA SĄ SPRZECZNE, czy wyjazd nastąpił głównie po I, czy
 * po II wojnie — WIĘC NIE PODAJĘ OKRESU.
 * OBALONE: dawny zakład bawełniany upadł w latach 90., ale
 * branża włókiennicza w mieście trwa — działa tkalnia
 * należąca do dużej grupy. NAZW NIE PODAJĘ.
 * OBALONE: gmina wyludnia się wolniej, niż się sądzi —
 * miasto −14,6%, ale cała gmina tylko −6,6% od 2002 r.
 *
 * „ZELOWSKIE DZWONKI" — jedyny w Polsce zespół grający
 * na dzwonkach ręcznych, dwie grupy wiekowe, koncerty
 * w kościele ewangelicko-reformowanym.
 * „ZELOWSKIE SPLOTY" — festiwal nad zbiornikiem „Patyki",
 * 5–6 września 2026 r., połączony z dożynkami.
 *
 * KĄT: PRZEPISY, KTÓRE PRZYJECHAŁY Z LUDŹMI — czyli kuchnia,
 * która przenosi się razem z rodziną do nowego kraju albo
 * do nowego domu. Kąt bierze się wprost od 149 rodzin, które
 * przywiozły tu w 1803 r. wszystko, co miały.
 *
 * ⚠️ ZASADA, KTÓREJ PILNUJĘ: NIE OPOWIADAM CZECHOM
 * ANI POTOMKOM CZESKICH BRACI O ICH WŁASNEJ KUCHNI. Nie podaję
 * żadnych „czeskich potraw", nie opisuję, co się tu jada, nie
 * przypisuję nikomu tradycji. Fakt historyczny podaję krótko
 * i rzeczowo, a temat kuchenny prowadzę UNIWERSALNIE.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przepis przewożony między domami zmienia się zawsze
 *   i to nie jest zdrada tradycji,
 * — że zmienia się z powodów prozaicznych: innych składników,
 *   innej mąki, innej kuchenki, innej wody,
 * — że urządzenie NIE odtworzy smaku z innego miejsca — nie ma
 *   takiej funkcji,
 * — że robi jedną rzecz, która przy przenoszeniu przepisów
 *   naprawdę pomaga: pozwala ZAPISAĆ wersję, która się udała,
 *   i powtórzyć ją w nowym miejscu,
 * — że warto spisać przepis od osoby, która go pamięta, dopóki
 *   jest kogo pytać,
 * — i ODMOWA: nie doradzam zamienników składników
 *   w kontekście alergii ani nietolerancji.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD DOTYCZĄCYCH ALERGII, NIETOLERANCJI
 *   ANI DIET ELIMINACYJNYCH przy zamianie składników.
 *   ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEGO OPOWIADANIA O CZESKIEJ KUCHNI ani przypisywania
 *   komukolwiek tradycji kulinarnych.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEGO OKRESU wyjazdu społeczności czeskiej — źródła
 *   są sprzeczne.
 * — ŻADNEGO NADAWCY praw miejskich.
 * — NIE ROBIĘ TŁA z upadku dawnego zakładu bawełnianego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Odtwarzanie przepisu,
 * którego nikt nie zapisał" (Puck) dotyczy dania ZAGINIONEGO,
 * do którego dochodzi się metodą prób. „Nieprecyzyjny język
 * przepisów" (Pelplin) dotyczy zapisu i wagi. „Potrawa, która
 * ma dwie nazwy" dotyczy nazewnictwa. Tutaj chodzi o PRZEPIS,
 * KTÓRY ISTNIEJE I DZIAŁA, ale przenosi się z miejsca
 * na miejsce razem z ludźmi — i o to, dlaczego w nowym miejscu
 * wychodzi inaczej.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że w Zelowie mieszka duża społeczność czeska.
 * — NIE PODAJĘ, kiedy dokładnie wyjechała.
 * — NIE OPISUJĘ żadnej kuchni narodowej ani regionalnej.
 * — NIE PODAJĘ nadawcy praw miejskich z 1957 r.
 * — NIE PODAJĘ nazwy tkalni, jej właściciela ani zatrudnienia.
 * — NIE PODAJĘ liczby wiernych parafii ani roku założenia
 *   zespołu dzwonków — nie ustalono.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla gminy Zelów nie znalazłam żadnego.
 * — districts: BIP wymienia wyłącznie sołectwa. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 6 983, gmina 14 307 mieszkańców (31.12.2024, GUS),
 *   35 sołectw,
 * — status osady 1954 r., prawa miejskie 1957 r.,
 * — dobra Zelów kupione w 1802 r., 149 rodzin czeskich braci
 *   przybyło w 1803 r.,
 * — kościół ewangelicko-reformowany zbudowany 1821–1825
 *   wg projektu architekta Zille, kosztem ponad 30 000 zł
 *   polskich; przy nim cmentarz z czeskimi inskrypcjami,
 * — 200-lecie parafii obchodzono 5 lipca 2025 r.; gmina
 *   podarowała „Ławeczkę Wspólnoty" z cytatem Jana Amosa
 *   Komeńskiego,
 * — „Zelowskie Dzwonki" — jedyny w Polsce zespół grający
 *   na dzwonkach ręcznych,
 * — festiwal „Zelowskie Sploty" nad zbiornikiem „Patyki",
 *   5–6 września 2026 r., połączony z dożynkami,
 * — w mieście działa tkalnia; dawny zakład bawełniany upadł
 *   w latach 90.
 */
export const ZELOW: CityContent = {
  slug: "zelow",
  h1: "Thermomix Zelów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zelów (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Zelowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i sołectwa gminy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zelów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zelowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zelowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Zelów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ten sam przepis w nowym miejscu wychodzi inaczej. Zawsze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zelowie – jak wygląda prezentacja?",
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
      id: "przepisy-przywiezione",
      heading: "Sto czterdzieści dziewięć rodzin z 1803 roku — czyli o przepisach, które przyjeżdżają z ludźmi",
      paragraphs: [
        "W 1802 roku kupiono tutejsze dobra, a rok później przyjechało do Zelowa sto czterdzieści dziewięć rodzin czeskich braci. Zbudowali kościół ewangelicko-reformowany w latach 1821–1825, wspólnie ze środkami rządu Królestwa Polskiego; przy kościele jest cmentarz z czeskimi inskrypcjami, a w 2025 roku parafia obchodziła dwustulecie. Gmina podarowała jej wtedy ławeczkę z cytatem Jana Amosa Komeńskiego: „Wszyscy stoimy na jednej scenie wielkiego świata”.",
        "Nie będę opowiadać zelowianom o kuchni czeskiej — to nie moja rzecz i nie moja historia. Napiszę o czymś, co dotyczy każdej rodziny, która kiedykolwiek się przeprowadziła: o przepisach, które podróżują razem z ludźmi.",
        "Bo przepis przewieziony gdzie indziej zawsze wychodzi inaczej. I to nie jest niczyja wina ani zdrada tradycji — to są cztery bardzo prozaiczne powody.",
        "Inna mąka. Ta sama „pszenna” w dwóch miejscach ma inną zawartość białka i inaczej chłonie wodę, więc ciasto robi się gęstsze albo rzadsze przy dokładnie tych samych proporcjach.",
        "Inna woda. Twarda woda inaczej gotuje warzywa i strączki, inaczej zaparza herbatę i inaczej zachowuje się z drożdżami.",
        "Inne składniki. Śmietana o innej zawartości tłuszczu, ser o innej słoności, pomidory o innej kwasowości, mięso z innego chowu.",
        "I inna kuchnia. Inny piekarnik, inna kuchenka, inne garnki, inna wysokość nad poziomem morza. Wszystko to razem daje efekt, który każdy zna: „u babci to smakowało inaczej”.",
        "Czego to urządzenie nie zrobi: nie odtworzy smaku z innego miejsca. Nie ma takiej funkcji i nikt jej nie ma. Jeżeli ktoś Wam obiecuje smak dzieciństwa, sprzedaje wzruszenie.",
        "Co robi naprawdę: pozwala zapisać wersję, która się udała TUTAJ. Kiedy raz trafi się na proporcje działające z tutejszą mąką i tutejszą wodą, można je zapisać co do grama i powtórzyć za rok identycznie. Przy gotowaniu na oko to jest niemożliwe, bo nigdy nie wiadomo, czym poprzedni raz się różnił. I to jest, moim zdaniem, jedyna uczciwa odpowiedź na pytanie „czy pomoże mi z rodzinnym przepisem”: nie odtworzy starego, ale utrwali nowy.",
        "Rada, która nie ma nic wspólnego ze sprzętem, a którą powtarzam przy każdej okazji: spiszcie przepis od osoby, która go pamięta, dopóki jest kogo pytać. Nie przez telefon, tylko stojąc obok, z wagą i notesem. Potem będzie za późno i żadne urządzenie tego nie nadrobi.",
        "I granica: nie doradzę Wam zamienników składników, jeżeli chodzi o alergię albo nietolerancję. Zamiana mąki czy nabiału z powodów zdrowotnych to nie jest kwestia smaku i nie jest to moja dziedzina — po taką radę trzeba pójść do lekarza albo dietetyka.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zelowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie rodzinny przepis, który „u Was wychodzi inaczej niż u mamy” — weźcie go na spotkanie. Spróbujemy zapisać wersję, która działa w Waszej kuchni.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zelowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zelowskiej rodziny",
      paragraphs: [
        "Samo miasto Zelów liczy blisko siedem tysięcy mieszkańców, a cała gmina, razem z trzydziestoma pięcioma sołectwami, ponad czternaście. To bardzo młode miasto: status osady dostało w 1954 roku, a prawa miejskie dopiero w 1957. Jego historia zaczyna się jednak dużo wcześniej — w 1803 roku osiedliło się tu sto czterdzieści dziewięć rodzin czeskich braci, a zbudowany przez nich kościół ewangelicko-reformowany z lat 1821–1825 obchodził w 2025 roku dwustulecie. Przy kościele zachował się cmentarz z czeskimi inskrypcjami. Działa tu też jedyny w Polsce zespół grający na dzwonkach ręcznych, a we wrześniu nad zbiornikiem „Patyki” odbywa się festiwal połączony z dożynkami.",
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

  districtsHeading: "Do których części gminy Zelów dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu pięciu sołectw gminy — Łobudzic, Kociszewa, Wygiełzowa, Pożdżenic, Bujen, Walewic i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na osiedla statutowe, więc przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Zelów też przyjadę",
  nearbyParagraphs: [
    "Bełchatów, Łask, Pabianice, Szczerców, Sieradz i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bełchatów", "Łask", "Pabianice", "Sieradz", "Zduńska Wola"],

  about: blokOMnie("do Zelowa", "w Zelowie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do sołectw gminy Zelów?",
      answer:
        "Tak, do wszystkich trzydziestu pięciu — Łobudzic, Kociszewa, Wygiełzowa, Pożdżenic i pozostałych — oraz do całego miasta. Dojazd jest bezpłatny niezależnie od odległości.",
    },
    ...faqWspolne("w Zelowie"),
    {
      question: "Dlaczego rodzinny przepis wychodzi u mnie inaczej?",
      answer:
        "Z czterech prozaicznych powodów: inna mąka (inne białko, inne chłonięcie wody), inna woda, inne składniki — śmietana o innym tłuszczu, ser o innej słoności, pomidory o innej kwasowości — i inna kuchnia. To nie jest niczyja wina i nie da się tego obejść sprzętem.",
    },
    {
      question: "Czy urządzenie odtworzy smak, który pamiętam?",
      answer:
        "Nie. Nie ma takiej funkcji i nikt jej nie ma — kto obiecuje smak dzieciństwa, sprzedaje wzruszenie. Robi za to coś innego: pozwala zapisać co do grama wersję, która udała się w Twojej kuchni, i powtórzyć ją identycznie za rok.",
    },
    {
      question: "Czym zastąpić składnik, którego nie mogę jeść?",
      answer:
        "Tego nie doradzę. Zamiana mąki czy nabiału z powodu alergii albo nietolerancji to nie jest kwestia smaku i nie jest to moja dziedzina — po taką radę trzeba pójść do lekarza albo dietetyka.",
    },
  ],

  geo: { lat: 51.4643, lng: 19.2199 },
};
