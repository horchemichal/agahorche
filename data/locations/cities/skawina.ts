import type { CityContent } from "../city-content";
import {
  REGION_MALOPOLSKA,
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
 * SKAWINA — miasto, które w 1981 r. zamknęło własny wydział elektrolizy
 * huty aluminium po badaniach lekarskich, a od 2019 r. samo finansuje
 * pomiary powietrza obok stacji państwowej. Miasto, które woli liczbę
 * od wrażenia.
 *
 * KĄT: co da się zmierzyć, a co jest tylko obietnicą. To jedyne miejsce
 * w serwisie, w którym rozdzielam obietnice handlowe na dwie kolumny:
 * te, które mają liczbę i da się je sprawdzić, i te, których sprawdzić
 * się nie da — więc ich nie używam.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — co jest mierzalne: cena, długość gwarancji, pojemność naczynia,
 *   waga urządzenia, liczba lat serwisu, wysokość raty,
 * — co NIE jest mierzalne i czego dlatego nie obiecuję: „zaoszczędzisz
 *   godzinę dziennie", „będziecie jeść zdrowiej", „zwróci się po roku",
 * — dlaczego to ma znaczenie akurat tutaj,
 * — i zaproszenie: pytaj o liczby, a jak ich nie mam, powiem, że nie mam.
 *
 * TWARDE GRANICE — TU SZCZEGÓLNIE:
 * — ŻADNYCH KONKRETNYCH LICZB, KTÓRYCH NIE POTWIERDZIŁAM. W tekście
 *   wymieniam KATEGORIE mierzalne, nie podaję wartości — cena
 *   i warunki są na osobnych stronach i mogą się zmieniać.
 * — ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI w złotówkach (zasada z Jarocina).
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O SMOGU, filtrach ani wpływie powietrza na zdrowie.
 *   Podaję wyłącznie to, co gmina sama opublikowała, i nie wyciągam
 *   z tego wniosków zdrowotnych — nie jestem od tego.
 *
 * ROZGRANICZENIE. Jarocin mówi o wyliczeniach oszczędności, Bytom
 * o zapachu i parze w bloku, Ozimek o tym, co się zużywa. Tutaj chodzi
 * o RÓŻNICĘ MIĘDZY LICZBĄ A HASŁEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy blisko dwadzieścia cztery tysiące mieszkańców, gmina
 *   blisko czterdzieści cztery tysiące (GUS, 31.12.2024),
 * — gmina ma 16 sołectw i 9 osiedli miejskich; jedno z nich nazywa się
 *   Przemysłowe,
 * — huta aluminium ruszyła w 1954 r.; wydział elektrolizy zamknięto
 *   7 stycznia 1981 r. po żądaniach „Solidarności" i badaniach Akademii
 *   Medycznej; gmina co roku obchodzi rocznicę tego zamknięcia,
 * — elektrownia z 1961 r. działa nadal, od stycznia 2025 r. pod nowym
 *   właścicielem; jest drugim co do wielkości dostawcą ciepła dla Krakowa,
 * — od 2019 r. gmina prowadzi z IPIŚ PAN własną kampanię pomiarową,
 *   niezależną od stacji GIOŚ działającej od 2014 r.,
 * — w 2025 r. średnioroczny pył PM10 wyniósł 29,87 µg/m³ przy normie 40,
 *   a benzo(a)piren 2,62 ng/m³ przy poziomie docelowym 1 ng/m³,
 * — w gminie działają zakłady spożywcze, m.in. Bahlsen Polska
 *   i Lajkonik Snacks,
 * — lokacja miasta 22 maja 1364 r., Kazimierz Wielki, prawo magdeburskie,
 * — NIE POTWIERDZIŁAM żadnego wpisu z tej gminy na ministerialnej
 *   Liście Produktów Tradycyjnych — i tak to w tekście napisane.
 */
export const SKAWINA: CityContent = {
  slug: "skawina",
  h1: "Thermomix Skawina – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Skawina — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Skawinie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i sołectwa. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Skawina — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Skawinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Skawiny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich szesnastu sołectw gminy.",

  highlights: highlightyStandardowe("Skawina i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pytaj o liczby. Tam, gdzie ich nie mam, powiem, że ich nie mam.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Skawinie – jak wygląda prezentacja?",
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
      id: "liczby",
      heading: "Miasto, które samo się mierzy — i co z tego wynika dla mojej rozmowy",
      paragraphs: [
        "Skawina ma z liczbami swoją historię. Siódmego stycznia tysiąc dziewięćset osiemdziesiątego pierwszego roku zamknięto tu wydział elektrolizy huty aluminium — nie dlatego, że ktoś tak poczuł, tylko dlatego, że badania Akademii Medycznej pokazały, co dzieje się z ludźmi. Miasto obchodzi rocznicę tego zamknięcia do dziś. A od dwa tysiące dziewiętnastego roku gmina finansuje własną kampanię pomiarową powietrza z Instytutem Podstaw Inżynierii Środowiska PAN, obok państwowej stacji, która stoi tu od dwa tysiące czternastego.",
        "Dwa przykłady z ostatniego raportu, żeby było widać, o czym mówię: średnioroczny pył PM dziesięć wyniósł niecałe trzydzieści mikrogramów przy normie czterdzieści, a benzo-a-piren dwa i sześć dziesiątych nanograma przy poziomie docelowym jeden. Jedna liczba mieści się w normie, druga jest ponad dwa i pół raza powyżej. Gmina publikuje obie. Nie komentuję tych liczb i nie wyciągam z nich żadnych wniosków zdrowotnych — nie mam do tego kompetencji. Podaję je jako przykład pewnego nawyku.",
        "Skoro to jest miasto, które woli policzyć niż poczuć, powiem wprost, jak wygląda ta sama różnica w mojej branży. Bo w sprzedaży sprzętu domowego są dwie zupełnie różne kategorie zdań i warto je od siebie oddzielić.",
        "Pierwsza kategoria: rzeczy mierzalne. Cena. Wysokość raty i liczba rat. Długość gwarancji. Pojemność naczynia. Waga urządzenia i jego wymiary. To wszystko ma konkretną wartość, można ją zapisać, porównać i sprawdzić u kogoś innego. O te rzeczy warto pytać i na każde takie pytanie dostaniecie ode mnie odpowiedź albo uczciwe „sprawdzę i oddzwonię”.",
        "Druga kategoria: hasła. „Zaoszczędzisz godzinę dziennie”. „Będziecie jeść zdrowiej”. „Zwróci się w rok”. Tych zdań nie używam i chcę wyjaśnić dlaczego. Nie dlatego, że są na pewno nieprawdziwe — tylko dlatego, że nie da się ich sprawdzić. Godzina dziennie zależy od tego, co i jak gotujecie teraz. Zdrowiej zależy od tego, co włożycie do naczynia, a nie od naczynia. A „zwróci się” to działanie na liczbach, których nie znam i których nikt uczciwie nie policzy za Was przy stole w ciągu dwóch godzin.",
        "Jest jeszcze trzecia kategoria, najbardziej podstępna: rzeczy prawdziwe, ale opowiedziane tak, żeby brzmiały jak więcej, niż są. „Wszystko w jednym naczyniu” jest prawdą — i naprawdę oznacza mniej mycia. Nie oznacza jednak, że urządzenie się samo myje, bo nie myje. Staram się takich zdań nie skracać do wersji efektownej.",
        "Praktyczny wniosek dla Was jest prosty. Na spotkaniu pytajcie o liczby, a nie o wrażenia. Jeśli czegoś nie wiem, powiem, że nie wiem — to znacznie tańsze dla nas obu niż odpowiedź, którą trzeba by potem odkręcać.",
      ],
      links: [{ href: "/cena", label: "Cena i warunki" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Skawinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie listę pytań, przyślijcie ją wcześniej. Wtedy na te, na które nie znam odpowiedzi z głowy, zdążę sprawdzić odpowiedź przed spotkaniem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Skawinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla skawińskiej rodziny",
      paragraphs: [
        "Skawina leży dwanaście kilometrów od Krakowa, a przez gminę biegną dwie linie kolejowe z trzynastoma stacjami i przystankami. Sporo osób dojeżdża stąd do pracy, więc obiad powstaje w oknie między powrotem a wieczorem i przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Skawiny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich szesnastu sołectw, bez dopłaty za dojazd.",
    "Osiedla w Skawinie mają numery i nazwy — jedno nazywa się po prostu Przemysłowe, co dobrze mówi o tym, czym miasto było przez pół wieku. Przy umawianiu wystarczy podać nazwę osiedla albo wsi.",
  ],
  districts: ["Stare Miasto", "Przemysłowe", "Ogrody", "Korabniki", "Samborek"],

  nearbyHeading: "Poza Skawinę też przyjadę",
  nearbyParagraphs: [
    "Radziszów, Wola Radziszowska, Mogilany i Brzeźnica są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Mogilany", "Brzeźnica", "Czernichów", "Liszki", "Sułkowice", "Kraków"],

  about: blokOMnie("do Skawiny", "w Skawinie i okolicy", REGION_MALOPOLSKA),

  faq: [
    {
      question: "Czy dojeżdżasz do Skawiny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich szesnastu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Skawinie"),
    {
      question: "Ile na tym zaoszczędzę miesięcznie?",
      answer:
        "Nie policzę tego i nie będę udawać, że umiem. Takie wyliczenia zawsze wychodzą pod tezę, bo zależą od tego, co i jak gotujecie teraz, a tego nie wiem. Powiem za to dokładnie, ile kosztuje urządzenie, jaka jest rata przy różnych okresach i co dokładnie obejmuje gwarancja.",
    },
    {
      question: "Czy dzięki temu będziemy jeść zdrowiej?",
      answer:
        "Nie odpowiem na to twierdząco, bo to zależy od tego, co włożycie do naczynia, a nie od naczynia. Urządzenie nie zmienia składników. Zmienia tylko to, ile pracy trzeba włożyć, żeby coś ugotować od początku, i to jest jedyna obietnica, jakiej się trzymam.",
    },
  ],

  geo: { lat: 49.9754, lng: 19.8281 },
};
