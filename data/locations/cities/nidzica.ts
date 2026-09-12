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
 * NIDZICA — gmina miejsko-wiejska w powiecie nidzickim.
 * MIASTO 12 532, GMINA 19 633 (GUS 31.12.2024). 34 SOŁECTWA
 * (wykaz gminy + portret gminy US Olsztyn).
 *
 * PRAWA MIEJSKIE 1381 r., wystawcą był ZAKON KRZYŻACKI.
 * ⚠ IMIENIA WYSTAWCY NIE PODAJĘ — nie potwierdzono.
 * PRZYNALEŻNOŚĆ: MAZURY (Prusy Zakonne, od 1525 Prusy
 * Książęce). NIE WARMIA.
 *
 * ZAMEK: obecna bryła 1359–1380; pierwszy dokument o zamku
 * 1376; wymiary 62 × 44 m. Dziś muzeum, biblioteka, hotel
 * i restauracja.
 * KOŚCIÓŁ ŚW. WOJCIECHA — XIV w., włączony w system obronny
 * miasta; pierwsza wzmianka 1381, konsekracja 1404.
 * KOŚCIÓŁ EWANGELICKO-AUGSBURSKI ŚW. KRZYŻA — 1858–1860,
 * wieża 1890.
 * RATUSZ — 1842 (źródło urzędowe; portal turystyczny podaje
 * 1733 — ROZBIEŻNE, biorę wersję urzędową).
 * KAMIEŃ TATARSKI — głaz narzutowy: obwód 19 m, długość
 * 6,5 m, szerokość 4 m, wysokość 1,8 m.
 * RZEKA NIDA (dopływ Orzyca).
 * CYKLICZNIE: Dni Nidzicy, Nidzickie Targi Rzemiosła,
 * Dożynki Gminne, Jarmark Bożonarodzeniowy. DAT NIE PODAJĘ.
 *
 * OBALONE: „Nidzica leży na Warmii" — to Mazury.
 * OBALONE: „Nidzica nad rzeką Nidzicą" — miasto leży nad NIDĄ;
 * rzeka Nidzica to inny ciek, w Małopolsce.
 * OBALONE: „Nidzica a Jezioro Nidzkie" — jezioro leży ok. 90 km
 * na wschód, w gminach Pisz i Ruciane-Nida. Zero związku.
 * OBALONE: „największy zamek krzyżacki na Mazowszu" — Nidzica
 * nie leży na Mazowszu.
 *
 * KĄT: TWARDE RZECZY — czego nie wolno wrzucać do urządzenia.
 * Kąt od Kamienia Tatarskiego: głazu, którego nikt nie rusza.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że nóż tego urządzenia jest mocny i właśnie dlatego ludzie
 *   wrzucają do niego rzeczy, których nie powinni,
 * — że są trzy różne kategorie problemu i mylenie ich szkodzi:
 *   rzeczy, które USZKODZĄ sprzęt, rzeczy, które go NIE
 *   uszkodzą, ale wyjdą źle, i rzeczy, które są po prostu
 *   marnowaniem możliwości,
 * — konkretnie: kości, pestki, twarde nasiona i zamrożone
 *   bryły to pierwsza kategoria,
 * — że urządzenie nie ostrzeże i nie odmówi — wykona polecenie,
 * — że najczęstszy błąd to wrzucenie czegoś dużego w całości
 *   zamiast podzielenia na kawałki,
 * — że przeciążenie objawia się dźwiękiem i że warto go słuchać,
 * — i ODMOWA: nie doradzam nic o naprawach, demontażu ani
 *   o tym, czy coś jest jeszcze na gwarancji.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH INSTRUKCJI naprawy, demontażu ani serwisowania.
 *   ODMOWA STOI W TEKŚCIE.
 * — NIE ROZSTRZYGAM kwestii gwarancyjnych.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ imienia wystawcy praw miejskich.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta ani jej etymologii.
 * — ZERO roku 1945 i spalenia zamku.
 * — ZERO zniszczeń z 1914 r.
 * — ZERO plebiscytu 1920 r.
 * — ZERO wysiedleń i akcji „Wisła".
 * — NIE ROBIĘ TŁA z wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Noże i ostrzenie"
 * (Drzewica) dotyczą różnicy między cięciem a siekaniem.
 * „Skala i pojemność" dotyczą ilości. „Waga urządzenia"
 * dotyczy przenoszenia. „Konsystencja" (Stryków) dotyczy
 * efektu. Tutaj chodzi o TWARDOŚĆ SUROWCA i o granicę
 * wytrzymałości.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ imienia wystawcy przywileju z 1381 r.
 * — NIE PODAJĘ daty ratusza jako pewnej (1842 wg urzędu,
 *   1733 wg portalu turystycznego) — piszę „z XIX wieku".
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PRZYPISUJĘ Nidzicy jezior Łańskiego, Kośna ani
 *   Omulewa — nie leżą w tej gminie.
 * — NIE PRZYPISUJĘ Nidzicy produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ Nidzicy z rzeką Nidzicą ani z Jeziorem Nidzkim.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 12 532, gmina 19 633 mieszkańców, 34 sołectwa,
 * — prawa miejskie z 1381 r. nadane przez zakon krzyżacki;
 *   Nidzica leży na Mazurach, nie na Warmii,
 * — zamek wzniesiony w latach 1359–1380, o wymiarach
 *   62 na 44 metry; mieści muzeum i bibliotekę,
 * — kościół świętego Wojciecha z XIV w., włączony w system
 *   obronny miasta, konsekrowany w 1404 r.,
 * — kościół ewangelicko-augsburski świętego Krzyża
 *   z lat 1858–1860,
 * — Kamień Tatarski — głaz narzutowy o obwodzie 19 metrów,
 * — miasto leży nad Nidą,
 * — cyklicznie odbywają się Dni Nidzicy i Nidzickie Targi
 *   Rzemiosła.
 */
export const NIDZICA: CityContent = {
  slug: "nidzica",
  h1: "Thermomix Nidzica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nidzica (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Nidzicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nidzica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nidzicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nidzicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Nidzica i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Urządzenie nie odmówi. Wykona polecenie — także złe.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nidzicy – jak wygląda prezentacja?",
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
      id: "twarde-rzeczy",
      heading: "Kamień Tatarski — czyli o rzeczach, których nie wolno wrzucać",
      paragraphs: [
        "Pod Nidzicą leży głaz narzutowy zwany Kamieniem Tatarskim: dziewiętnaście metrów w obwodzie, sześć i pół metra długości, prawie dwa metry wysokości. Leży tam od tysięcy lat, przywleczony przez lodowiec, i nikt go nigdy nie ruszył, bo się nie da. Samo miasto ma prawa miejskie od 1381 roku — nadane przez zakon krzyżacki, bo to Mazury, a nie Warmia, i warto to rozróżniać — oraz zamek o wymiarach sześćdziesiąt dwa na czterdzieści cztery metry, wzniesiony w latach 1359–1380.",
        "Miasto, którego symbolem jest kamień nie do ruszenia, jest właściwym miejscem na stronę o rzeczach, których do tego urządzenia wrzucać nie należy.",
        "Zacznę od przyczyny, bo ona jest ciekawa. Nóż w tym sprzęcie jest naprawdę mocny i ludzie szybko się o tym przekonują — a potem, właśnie dlatego, wrzucają do niego rzeczy, których nigdy nie wrzuciliby do blendera. Zaufanie do maszyny rośnie szybciej niż wiedza o jej granicach.",
        "Warto rozdzielić trzy kategorie, bo notorycznie się je myli. Pierwsza: rzeczy, które mogą uszkodzić sprzęt. Druga: rzeczy, które sprzętu nie uszkodzą, ale wyjdą źle. Trzecia: rzeczy, które po prostu szkoda tam wkładać, bo szybciej jest inaczej. Tylko pierwsza kategoria jest kosztowna.",
        "Do pierwszej należą przede wszystkim: kości, pestki, twarde nasiona i wszystko, co jest zamrożone w jednej bryle. Bryła lodu albo zamrożony blok warzyw to nie jest to samo co kostki lodu wrzucone luzem — masa uderza w nóż całym ciężarem naraz. Podobnie duże, twarde korzenie w całości i zbite grudy cukru albo soli.",
        "Najważniejsze zdanie tej strony brzmi tak: urządzenie nie ostrzeże i nie odmówi. Nie jest inteligentne w tym sensie, w jakim ludzie czasem zakładają. Dostaje polecenie i je wykonuje, także wtedy, gdy polecenie jest złe. Cała ta ocena została po Waszej stronie.",
        "Najczęstszy błąd nie jest zresztą dramatyczny, tylko banalny: wrzucenie czegoś dużego w całości zamiast podzielenia na kawałki. Duży kawałek nie tyle się rozdrabnia, co obija o ścianki i podskakuje nad nożem, a przy okazji obciąża wszystko dookoła. Cztery mniejsze kawałki idą łatwiej niż jeden duży i to jest cała filozofia.",
        "Ostatnia rzecz praktyczna: przeciążenie słychać. Praca robi się nierówna, dźwięk niższy, coś stuka. To jest moment na przerwanie, a nie na dodanie mocy — bo wtedy zwykle robi się szkoda.",
        "I granica, przy której nie ustąpię: nie doradzę Wam nic w sprawie napraw, rozkręcania sprzętu ani tego, czy konkretne uszkodzenie jest objęte gwarancją. To rozstrzyga serwis i dokumentacja, a nie moja opinia — a udawanie, że wiem, mogłoby Was realnie kosztować.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nidzicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie konkretne pytanie „czy to da radę” o jakiś produkt, którego dużo używacie — zadajcie je przy spotkaniu. Odpowiem uczciwie, łącznie z odpowiedzią „nie warto”.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nidzicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nidzickiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad dwanaście i pół tysiąca mieszkańców, a cała gmina blisko dwadzieścia tysięcy, w trzydziestu czterech sołectwach. Nidzica leży nad Nidą — nie nad żadną Nidzicą, bo rzeka o tej nazwie płynie w Małopolsce. Prawa miejskie miasto dostało w 1381 roku od zakonu krzyżackiego. Najważniejszy zabytek to zamek z lat 1359–1380, o wymiarach sześćdziesiąt dwa na czterdzieści cztery metry, w którym mieszczą się dziś muzeum i biblioteka. Obok stoją kościół świętego Wojciecha z czternastego wieku, konsekrowany w 1404 roku i włączony kiedyś w system obronny miasta, neogotycki kościół ewangelicko-augsburski z lat 1858–1860 oraz dziewiętnastowieczny ratusz. Cyklicznie odbywają się tu Dni Nidzicy i Nidzickie Targi Rzemiosła.",
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

  districtsHeading: "Do których części gminy Nidzica dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu czterech sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Nidzicę też przyjadę",
  nearbyParagraphs: [
    "Olsztynek, Działdowo, Szczytno, Mława i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Olsztynek", "Działdowo", "Szczytno", "Lidzbark"],

  about: blokOMnie("do Nidzicy", "w Nidzicy i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Nidzicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu czterech sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo pomyłki są tu częste: miasto leży nad Nidą, a nie nad rzeką Nidzicą, która płynie w Małopolsce; nie ma też nic wspólnego z Jeziorem Nidzkim, leżącym dziewięćdziesiąt kilometrów stąd, koło Pisza.",
    },
    ...faqWspolne("w Nidzicy"),
    {
      question: "Czego nie wolno wrzucać do Thermomixa?",
      answer:
        "Przede wszystkim kości, pestek, twardych nasion i zamrożonych brył. Bryła to nie to samo co kostki lodu wrzucone luzem — cała masa uderza w nóż naraz. Ryzykowne są też duże twarde korzenie w całości oraz zbite grudy cukru albo soli.",
    },
    {
      question: "Czy urządzenie samo się zatrzyma, jeśli wrzucę coś złego?",
      answer:
        "Nie liczcie na to. Ono nie ostrzeże i nie odmówi — dostaje polecenie i je wykonuje, także złe. Ocena, co wrzucić, zostaje po Waszej stronie. Przeciążenie zwykle słychać: praca robi się nierówna, dźwięk niższy, coś stuka. To moment na przerwanie, a nie na dodanie mocy.",
    },
    {
      question: "Czy naprawisz mi urządzenie albo powiesz, czy to gwarancja?",
      answer:
        "Nie i nie będę zgadywać. Naprawy, rozkręcanie i kwestie gwarancyjne rozstrzyga serwis oraz dokumentacja. Udawanie, że wiem, mogłoby Was realnie kosztować — wolę powiedzieć wprost, że to nie moja działka.",
    },
  ],

  geo: { lat: 53.3608, lng: 20.4275 },
};
