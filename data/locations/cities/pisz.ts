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
 * PISZ — gmina miejsko-wiejska w powiecie piskim.
 * MIASTO 17 531, GMINA 25 854 (GUS 31.12.2024). 43 SOŁECTWA
 * — potwierdzone dwoma źródłami urzędowymi (statut + lista
 * sołtysów kadencji 2024–2029).
 * GMINA 634,8 km² — DRUGA CO DO POWIERZCHNI GMINA W POLSCE.
 *
 * PRAWA MIEJSKIE 1645 r.; osada od 1367 r.
 * ⚠ WYSTAWCY NIE POTWIERDZONO — NIE PISZĘ, że nadał je zakon
 * krzyżacki ani kto konkretnie. Podaję sam rok.
 *
 * PRZYRODA: rzeka PISA. Puszcza Piska w granicach gminy
 * 47 335,4 ha. Rezerwat „Jezioro Nidzkie" — 2 934,71 ha,
 * utworzony 1972. Rezerwat „Jezioro Pogubie Wielkie" —
 * 691,73 ha, ptasi, utworzony 1971. Obszar Chronionego
 * Krajobrazu „Puszcza i Jeziora Piskie", Mazurski Park
 * Krajobrazowy. Jeziora z raportu gminy: Nidzkie, Pogubie
 * Wielkie, Seksty.
 * ⚠ JEZIORA ROŚ NIE WYMIENIAM — nie występuje w wykazie
 * z oficjalnego raportu gminy, do którego dotarł research.
 *
 * OBALONE: „Pisz ma 25 tys. mieszkańców" — to GMINA.
 * Miasto ma 17 531.
 * OBALONE: „stare miasto krzyżackie z prawami z XIV w." —
 * osada 1367, ale prawa miejskie dopiero 1645.
 *
 * KĄT: MARYNATY I ZALEWY. Największy kompleks leśny w gminie
 * to najwłaściwsze miejsce na jedyną stronę o marynowaniu
 * — technice zupełnie innej niż kiszenie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że marynowanie i kiszenie to DWIE RÓŻNE TECHNIKI i że
 *   mylenie ich jest najczęstszym nieporozumieniem,
 * — że marynata to zalewa z kwasem dodanym z zewnątrz,
 *   a kiszonka wytwarza kwas sama,
 * — co urządzenie realnie robi przy zalewie: podgrzewa
 *   i rozpuszcza równomiernie, bez stania nad garnkiem,
 * — że przy marynowaniu mięsa i warzyw przed pieczeniem chodzi
 *   o coś zupełnie innego niż przy przetworach — o smak
 *   i o strukturę, nie o trwałość,
 * — że najczęstszy błąd to zbyt mocna kwasowość, która
 *   zabija wszystko inne,
 * — że proporcja i czas zależą od produktu i że nie ma tu
 *   jednej reguły,
 * — i ODMOWA STANOWCZA: nie doradzam nic o trwałości,
 *   pasteryzacji ani bezpieczeństwie przetworów.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ZALEWY, żadnych przepisów.
 * — ŻADNYCH PORAD o pasteryzacji, trwałości, przechowywaniu
 *   ani o botulizmie. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH PORAD o surowym mięsie.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ wystawcy praw miejskich.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945, zniszczeń, ucieczki i wysiedleń ludności
 *   mazurskiej i niemieckiej.
 * — ZERO poligonu w Orzyszu, wojska i NATO.
 * — ZERO huraganu w Puszczy Piskiej z 4 lipca 2002 r. —
 *   to temat katastroficzny.
 * — NIE ROBIĘ TŁA z bezrobocia ani z wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Kiszonki i zakwas"
 * (Dzierzgon) dotyczą fermentacji — i w tekście wprost
 * odsyłam, zaznaczając różnicę. „Spiżarnia" (Brusy) dotyczy
 * zapasów. „Chrzan, musztarda, ocet" dotyczą gotowych
 * dodatków. „Gotowe danie ze słoika" dotyczy produktu
 * kupionego. Tutaj chodzi o ZALEWĘ jako technikę.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ wystawcy praw miejskich z 1645 r.
 * — NIE PISZĘ o jeziorze Roś.
 * — NIE PODAJĘ zabytków z numerami rejestru — nie dotarto.
 * — NIE PISZĘ o Muzeum Ziemi Piskiej — nie potwierdzono, czy
 *   działa w 2026 r.
 * — NIE PRZYPISUJĘ Piszowi produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ miasta Pisz z rzeką PISĄ ani z Puszczą Piską.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 17 531, gmina 25 854 mieszkańców, 43 sołectwa,
 * — gmina liczy 634,8 km² i jest drugą co do powierzchni
 *   gminą w Polsce,
 * — prawa miejskie z 1645 r., osada od 1367 r.,
 * — przez miasto płynie Pisa,
 * — Puszcza Piska zajmuje w granicach gminy 47 335,4 ha,
 * — rezerwat Jezioro Nidzkie — 2 934,71 ha, utworzony w 1972 r.,
 * — rezerwat ptasi Jezioro Pogubie Wielkie — 691,73 ha,
 *   utworzony w 1971 r.,
 * — część gminy leży w Mazurskim Parku Krajobrazowym.
 */
export const PISZ: CityContent = {
  slug: "pisz",
  h1: "Thermomix Pisz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pisz (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Piszu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pisz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Piszu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pisza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Pisz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Marynowanie i kiszenie to dwie różne rzeczy. Mylą się notorycznie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Piszu – jak wygląda prezentacja?",
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
      id: "marynaty",
      heading: "Czterdzieści siedem tysięcy hektarów puszczy — czyli o marynatach i zalewach",
      paragraphs: [
        "Gmina Pisz ma sześćset trzydzieści pięć kilometrów kwadratowych i jest drugą co do powierzchni gminą w Polsce. Sama Puszcza Piska zajmuje w jej granicach ponad czterdzieści siedem tysięcy hektarów, a w środku leżą dwa rezerwaty: Jezioro Nidzkie, utworzone w 1972 roku na blisko trzech tysiącach hektarów, i ptasie Jezioro Pogubie Wielkie z 1971. Przez miasto płynie Pisa. Prawa miejskie Pisz dostał dopiero w 1645 roku, choć osada stała tu od 1367 — kto nazywa go starym miastem krzyżackim, myli osadę z miastem.",
        "W gminie, w której las jest większy od wszystkiego innego razem wziętego, chcę napisać o zalewie — bo marynowane grzyby to najbardziej puszczańska rzecz, jaka stoi w polskiej spiżarni, a o samej technice mówi się zaskakująco mało.",
        "Zacznę od nieporozumienia, które słyszę stale: marynowanie to nie jest kiszenie. To są dwie zupełnie różne techniki i różnica nie polega na smaku, tylko na tym, skąd się bierze kwas. W marynacie kwas dodajecie z zewnątrz — to ocet albo sok z cytryny w zalewie. W kiszonce nic nie dolewacie: kwas wytwarza się sam, przez fermentację, i dlatego kiszenie potrzebuje czasu i temperatury, a marynowanie nie. O kiszeniu pisałam osobno i tam odsyłam, bo to temat na własną stronę.",
        "Co przy zalewie realnie robi urządzenie. Zalewa to woda, ocet, sól, cukier i przyprawy, które trzeba rozpuścić równomiernie i zwykle podgrzać. W garnku wymaga to stania i mieszania, żeby nic nie osiadło na dnie i nie przypaliło się przy brzegu. Tutaj wszystko idzie do jednego naczynia i grzeje się z mieszaniem, bez nadzoru. Przyprawy można w tym samym naczyniu wcześniej rozdrobnić. To nie jest rewolucja, ale to dokładnie ten etap, którego ludzie nie lubią.",
        "Warto rozdzielić dwie rzeczy, które nazywamy tym samym słowem. Marynowanie przetworów — grzybów, ogórków, papryki, dyni — służy zalewie i długiemu staniu. A marynowanie przed pieczeniem czy grillem, w oleju z ziołami i czosnkiem, nie ma z trwałością nic wspólnego: chodzi w nim wyłącznie o smak i o strukturę. Urządzenie sprawdza się przy obu, ale w drugim przypadku po prostu miesza i rozdrabnia — i to wystarcza.",
        "Najczęstszy błąd przy zalewach jest jeden i bardzo wyraźny: za dużo kwasu. Ocet ma to do siebie, że zjada wszystko inne — po tygodniu w mocnej zalewie grzyb smakuje octem i niczym więcej, a przyprawy, które tam wrzuciliście, równie dobrze mogły tam nie trafić. Łagodniejsza zalewa i więcej cierpliwości dają zwykle lepszy efekt niż mocniejsza i krótsza.",
        "Nie podam Wam proporcji ani czasu, bo zależą od produktu i od tego, jaki efekt chcecie, a każda liczba, którą bym tu wpisała, byłaby zgadywaniem udającym przepis.",
        "I granica, przy której nie ustąpię, bo to nie jest kwestia smaku: nie doradzę Wam niczego w sprawie trwałości przetworów. Ani ile mogą stać, ani jak je pasteryzować, ani po czym poznać, że coś jest jeszcze dobre. To jest bezpieczeństwo żywności i przy zamykanych słoikach ryzyko bywa poważne. W tej sprawie kierujcie się sprawdzonymi źródłami o przetwórstwie domowym, nie opinią osoby, która sprzedaje sprzęt kuchenny.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Piszu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Gmina jest ogromna, więc przy umawianiu podaj miejscowość — ułożę trasę tak, żeby przyjechać o porze, która Wam pasuje, a nie takiej, która wychodzi mi z mapy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Piszu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla piskiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad siedemnaście i pół tysiąca mieszkańców, a cała gmina blisko dwadzieścia sześć tysięcy, w czterdziestu trzech sołectwach — warto o tym pamiętać, bo liczba dwadzieścia pięć tysięcy, którą często przypisuje się miastu, dotyczy właśnie całej gminy. Gmina Pisz zajmuje sześćset trzydzieści pięć kilometrów kwadratowych i jest drugą co do wielkości w Polsce. Miasto leży nad Pisą, prawa miejskie ma od 1645 roku, a osada istniała tu od 1367. Ponad czterdzieści siedem tysięcy hektarów gminy zajmuje Puszcza Piska z rezerwatami Jezioro Nidzkie i Jezioro Pogubie Wielkie.",
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

  districtsHeading: "Do których części gminy Pisz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu trzech sołectw gminy — także tych leżących w głębi Puszczy Piskiej. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Pisz też przyjadę",
  nearbyParagraphs: [
    "Orzysz, Biała Piska, Ruciane-Nida, Mrągowo, Ełk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Orzysz", "Biała Piska", "Ruciane-Nida", "Ełk", "Mrągowo"],

  about: blokOMnie("do Pisza", "w Piszu i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Pisza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu trzech sołectw gminy — a gmina Pisz jest drugą co do powierzchni w Polsce, więc to naprawdę spory obszar. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o miasto Pisz, nie o rzekę Pisę ani o Puszczę Piską jako obszar.",
    },
    ...faqWspolne("w Piszu"),
    {
      question: "Czym marynowanie różni się od kiszenia?",
      answer:
        "Źródłem kwasu. W marynacie dodajecie go z zewnątrz — to ocet albo cytryna w zalewie. W kiszonce kwas powstaje sam, przez fermentację, i dlatego kiszenie potrzebuje czasu i odpowiedniej temperatury, a marynowanie nie. To dwie różne techniki, choć nazywane bywają zamiennie.",
    },
    {
      question: "Co Thermomix robi przy zalewie?",
      answer:
        "Rozpuszcza i podgrzewa równomiernie, z mieszaniem, bez stania nad garnkiem — a w tym samym naczyniu można wcześniej rozdrobnić przyprawy. To nie jest rewolucja, ale dokładnie ten etap, którego nikt nie lubi. Najczęstszy błąd przy zalewach to zresztą nie technika, tylko zbyt mocny ocet, który zjada wszystkie inne smaki.",
    },
    {
      question: "Jak długo przetwory w zalewie są dobre?",
      answer:
        "Tego Wam nie powiem i nie będę zgadywać. Trwałość, pasteryzacja i ocena, czy słoik jest jeszcze dobry, to bezpieczeństwo żywności, a przy zamykanych przetworach ryzyko bywa poważne. Kierujcie się sprawdzonymi źródłami o przetwórstwie domowym, nie opinią sprzedawczyni sprzętu.",
    },
  ],

  geo: { lat: 53.6289, lng: 21.8124 },
};
