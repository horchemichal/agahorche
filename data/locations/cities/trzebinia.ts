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
 * TRZEBINIA — gmina, która jest w istocie konstelacją osad, spiętą
 * węzłem kolejowym. To jest oś tej strony.
 *
 * Dwadzieścia trzy jednostki pomocnicze (10 sołectw + 13 osiedli) to
 * najbardziej rozczłonkowana gmina w całym tym zestawie. Do tego dworzec,
 * na którym zbiegają się cztery kierunki, i trzy duże zakłady pracujące
 * w ruchu ciągłym. Tekst jest pisany dla kogoś, kto mieszka „w Trzebini”,
 * ale w praktyce mieszka w Myślachowicach albo na Sierszy — i dla kogo
 * słowo „centrum” znaczy co innego niż dla sąsiada z drugiego końca gminy.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 10 sołectw: Bolęcin, Czyżówka, Dulowa, Karniowice, Lgota, Młoszowa,
 *   Myślachowice, Piła Kościelecka, Płoki, Psary (trzebinia.pl, wykaz
 *   jednostek pomocniczych),
 * — 13 osiedli w mieście: Centrum, Energetyków, Gaj, Gaj Zacisze, Górka,
 *   Krakowska, Krze, Piaski, Salwator, Siersza, Trzebionka, Wodna,
 *   Widokowe (trzebinia.pl),
 * — 32 194 mieszkańców gminy, GUS, stan na 31.12.2024,
 * — węzeł kolejowy: linia 133 (E30) Kraków–Katowice oraz linie 93, 103,
 *   114 i 860; po modernizacji zakończonej w 2021 r. trzy zadaszone perony,
 *   tunel z windami (PKP PLK; Portal Pasażera),
 * — czas przejazdu do Krakowa Głównego 40–46 min, do Oświęcimia 24–25 min
 *   (rozkłady Kolei Małopolskich i Polregio),
 * — DK79 przechodzi przez miasto; obwodnica Chrzanowa i Trzebini jest na
 *   etapie studium, dokumentacja przewidziana na 2027 r. (GDDKiA),
 * — ORLEN Południe — zakład w Trzebini, historia od 1895 r., dziś
 *   biorafineria: glikol propylenowy z surowców odnawialnych (2021),
 *   UCO FAME z oleju posmażalniczego (2023), projekty wodorowe
 *   (orlen.pl, komunikaty spółki),
 * — Elektrownia Siersza — 306 MW mocy, wygrany aukcyjny rynek mocy
 *   na 2026 r. (Tauron Wytwarzanie),
 * — Górka Cement — jedyny w Polsce producent cementów glinowych,
 *   część grupy Mapei (gorka.com.pl),
 * — produkty z ministerialnej Listy Produktów Tradycyjnych, oba wpisane
 *   w 2016 r.: „hulajdy” (kluski ziemniaczane, KGW Dulowa) oraz
 *   „buchta bolęcińska” (Bolęcin).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — zapadlisk po zlikwidowanej KWK Siersza. To temat realny i dobrze
 *   udokumentowany (raport PIG-PIB z lipca 2023: 527 zapadlisk, 61
 *   istotnych; stabilizacja cmentarza zakończona w VIII.2024), ale dotyczy
 *   wartości domów i poczucia bezpieczeństwa ludzi, którzy tam mieszkają.
 *   Na stronie sprzedażowej AGD nie ma na to miejsca i każde zdanie
 *   brzmiałoby albo lekceważąco, albo jak straszenie,
 * — liczby „34 tys. mieszkańców” ze strony gminy — jest nieaktualna,
 * — „zjazdu z A4 w Trzebini” — taki węzeł NIE ISTNIEJE. Najbliższe to
 *   Chrzanów i Rudno,
 * — liczb zatrudnienia w ORLEN Południe i Górce Cement — brak wiarygodnego
 *   źródła podającego stan dla samej Trzebini.
 *
 * PUŁAPKA: „Siersza” to i osiedle w mieście, i nazwa elektrowni, i nazwa
 * dawnej kopalni. Na stronie występuje wyłącznie jako nazwa osiedla
 * i zakładu energetycznego.
 */
export const TRZEBINIA: CityContent = {
  slug: "trzebinia",
  h1: "Thermomix Trzebinia – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Trzebinia — prezentacja i cena",
  seoDescription:
    "Thermomix w Trzebini: bezpłatna prezentacja TM7 u Ciebie w kuchni — Centrum, Siersza, Gaj, Młoszowa, Dulowa, Psary i pozostałe osiedla oraz sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Trzebinia — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Trzebini i w całej gminie. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Trzebini przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich osiedli w mieście i do wszystkich dziesięciu sołectw.",

  highlights: highlightyStandardowe(
    "całe miasto i wszystkie sołectwa, bez dopłat",
  ),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Trzebini – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w bloku przy Rynku, jak w domu w Myślachowicach.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading: "Miasto, w którym schodzą się cztery kierunki",
      paragraphs: [
        "Trzebinia jest węzłem kolejowym i to jest jej najważniejsza cecha. Na tutejszej stacji schodzi się kilka linii, w tym magistralna trasa Kraków–Katowice. Do Krakowa Głównego jedzie się stąd czterdzieści kilka minut, do Oświęcimia niecałe pół godziny. Po modernizacji zakończonej kilka lat temu perony są zadaszone, a między nimi jest tunel z windami — co dla kogoś z wózkiem albo z zakupami robi realną różnicę.",
        "Skutek jest taki, że bardzo dużo osób pracuje gdzie indziej, niż mieszka. Rano pociąg albo samochód w stronę Krakowa lub Śląska, wieczorem powrót. Do tego dochodzi druga grupa, liczna i zupełnie inaczej ułożona w czasie: ludzie pracujący w zakładach, które nie zatrzymują się na noc — rafineryjnym, energetycznym, cementowym. Tam obowiązują zmiany, a zmiany rządzą całym domem, nie tylko jedną osobą.",
        "Trzecia rzecz, o której trzeba wiedzieć, żeby się tu w ogóle umówić: Trzebinia to nie jest jedno miejsce. Samo miasto ma kilkanaście osiedli, a gmina dziesięć sołectw. Od Psar czy Płok do centrum jedzie się kwadrans, a Dulowa leży już przy zupełnie innej drodze niż Bolęcin. „Mieszkam w Trzebini” potrafi znaczyć siedem różnych tras.",
        "Dla kuchni najistotniejsze jest jednak to pierwsze: obiad w tym mieście rzadko powstaje o klasycznej porze. Powstaje przed wyjściem na popołudniówkę albo po jej zakończeniu, w kuchni, w której ktoś inny właśnie idzie spać. Nie chodzi o to, żeby gotować szybciej. Chodzi o to, żeby dało się gotować, nie stojąc obok garnka.",
        "I to jest jedyna rzecz, którą Thermomix tu naprawdę zmienia. Zupa może się gotować, kiedy Ty się przebierasz po zmianie albo szykujesz drugie śniadanie dla dziecka, i sama się wyłączy. Urządzenie nie ugotuje za Ciebie i nie zastąpi wprawy — zabiera tylko konieczność stania i pilnowania. W domu, gdzie ktoś wychodzi o szóstej, a ktoś inny wraca o dwudziestej trzeciej, to jest różnica między obiadem a odgrzewaniem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Trzebini?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, na którym osiedlu albo w którym sołectwie mieszkasz. W tej gminie to nie jest formalność: trasa do Płok i trasa do Młoszowej to dwa różne wyjazdy, a ja układam dzień z kilku spotkań.",
        "Jeśli pracujesz na zmiany, powiedz, na której jesteś w tym tygodniu. Umawiam się i na przedpołudnia po nocce, i na późne wieczory po popołudniówce — byle nie na godzinę, o której powinnaś spać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Trzebini"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix w domu, w którym ktoś zawsze jest na zmianie",
      paragraphs: [
        "W rodzinie, gdzie jedna osoba pracuje w ruchu ciągłym, obiad nigdy nie jest jeden. Jest obiad dla dzieci po szkole, coś dla wracającego z popołudniówki i śniadanie, które trzeba zrobić o piątej rano, zanim ktokolwiek zdąży pomyśleć. Najczęściej kończy się tym, że ta sama osoba trzy razy odgrzewa to samo, a czwarty raz robi kanapki.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe albo zupa mogą się ugotować wcześniej i po prostu poczekać. Każdy nakłada sobie porcję, kiedy wchodzi. Nie trzeba stać obok, nie trzeba mieszać, urządzenie samo wyłącza się w odpowiednim momencie i nie robi hałasu, który obudziłby śpiącego po nocce.",
        "Drugą rzeczą jest przygotowanie na zapas. Zamiast gotować codziennie w domu, w którym codzienność ma cztery różne wersje, dużo osób gotuje raz na dwa dni większy garnek i dzieli. Tu akurat pomaga to, że wszystko dzieje się w jednym naczyniu i sprzątanie po tym trwa moment.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — a w domu, gdzie rodzic wraca o dwudziestej trzeciej, to bywa realną pomocą, nie ciekawostką.",
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

  districtsHeading: "Gdzie w gminie Trzebinia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziesięciu sołectw, bez żadnej dopłaty za odległość. W mieście to kilkanaście osiedli — od Centrum i Krakowskiej, przez Gaj, Górkę, Krze, Piaski, Salwator i Wodną, po Sierszę, Trzebionkę i Energetyków. Na wsi: Bolęcin, Czyżówka, Dulowa, Karniowice, Lgota, Młoszowa, Myślachowice, Piła Kościelecka, Płoki i Psary.",
    "To jedna z najbardziej rozczłonkowanych gmin w tej okolicy — jednostek pomocniczych jest tu ponad dwadzieścia. Dlatego przy umawianiu proszę o nazwę osiedla albo sołectwa, a nie o samą „Trzebinię”. Od tego zależy, ile czasu rezerwuję na dojazd i o której realnie u Ciebie jestem.",
    "Sołectwa północne i wschodnie — Psary, Płoki, Lgota, Myślachowice — leżą wyraźnie na uboczu głównych dróg, z rzadszą zabudową i dłuższymi podjazdami. Południe gminy, czyli Dulowa, Karniowice i Piła Kościelecka, ciąży już w stronę Krzeszowic i trasy krakowskiej. Do jednych i drugich jadę tak samo chętnie, tylko innym dniem tygodnia.",
    "Przez samo miasto przechodzi droga krajowa i to bywa kłopotliwe o siedemnastej. Obwodnica jest dopiero na etapie dokumentów, więc jeśli umawiamy się w godzinach szczytu, wolę mieć w zapasie kwadrans niż spóźnić się i zacząć spotkanie od tłumaczenia.",
  ],
  districts: [
    "Centrum",
    "Krakowska",
    "Gaj",
    "Gaj Zacisze",
    "Górka",
    "Krze",
    "Piaski",
    "Salwator",
    "Siersza",
    "Trzebionka",
    "Wodna",
    "Energetyków",
    "Widokowe",
    "Bolęcin",
    "Czyżówka",
    "Dulowa",
    "Karniowice",
    "Lgota",
    "Młoszowa",
    "Myślachowice",
    "Piła Kościelecka",
    "Płoki",
    "Psary",
  ],

  nearbyHeading: "Chrzanów, Libiąż i reszta powiatu też są na mojej trasie",
  nearbyParagraphs: [
    "Trzebinia jest dla mnie częścią zachodniej pętli: Chrzanów, Libiąż, Alwernia, Krzeszowice. Do żadnej z tych gmin nie doliczam dojazdu i granica powiatu nie zmienia niczego w warunkach.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim.",
  ],
  nearbyTowns: [
    "Chrzanów",
    "Libiąż",
    "Alwernia",
    "Krzeszowice",
    "Zabierzów",
    "Chełmek",
    "Oświęcim",
    "Kraków",
  ],

  about: blokOMnie("do Trzebini", "w powiecie chrzanowskim"),

  faq: [
    {
      question: "Czy dojeżdżasz do sołectw, czy tylko do samego miasta?",
      answer:
        "Do wszystkich dziesięciu sołectw — Bolęcina, Czyżówki, Dulowej, Karniowic, Lgoty, Młoszowej, Myślachowic, Piły Kościeleckiej, Płok i Psar — dokładnie na tych samych warunkach co do centrum. Dojazd jest bezpłatny niezależnie od odległości.",
    },
    ...faqWspolne("w Trzebini"),
    {
      question: "Pracuję na zmiany. Czy da się umówić na przedpołudnie?",
      answer:
        "Tak. W Trzebini układam trasę tak, żeby w jednym dniu zmieścić kilka adresów z tej samej części gminy, więc godzina jest u mnie elastyczna — nie musisz się dopasowywać do popołudnia. Powiedz, na którą zmianę chodzisz w tym tygodniu, i którą część dnia wolisz zostawić na sen.",
    },
    {
      question: "Czy urządzenie jest głośne? W domu ktoś śpi po nocce.",
      answer:
        "TM7 pracuje ciszej niż poprzednie modele, a większość czasu i tak zajmuje samo gotowanie, przy którym nie ma prawie żadnego dźwięku. Głośne są tylko krótkie momenty miksowania na wysokich obrotach — kilkanaście sekund, nie kwadrans.",
    },
    {
      question: "Czy mogę zaprosić na prezentację koleżanki z osiedla?",
      answer:
        "Jak najbardziej i w Trzebini często tak to wygląda. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników.",
    },
  ],

  geo: { lat: 50.1667, lng: 19.4833 },
};
