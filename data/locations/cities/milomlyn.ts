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
 * MIŁOMŁYN — gmina miejsko-wiejska w powiecie ostródzkim.
 * MIASTO 2 409, GMINA 4 742 (GUS 31.12.2024). 13 SOŁECTW.
 * ⚠ JEDYNE MIASTO Z TEJ DZIESIĄTKI, KTÓRE URODŁO — +7,5%.
 * Notatka projektowa podawała 2 300 — tu ZANIŻONE.
 *
 * PRAWA MIEJSKIE PRZED 1335 r., nadał KOMTUR
 * HARTUNG VON SONNENBORN.
 * PRAWA UTRACONE w 1945 r., PRZYWRÓCONE 1 STYCZNIA 1998 r.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH:
 * „KIEŁBASA POLSKA WĘDZONA Z MAZUR” — data wpisu
 * 30 LISTOPADA 2017 r. wg gov.pl.
 * ⚠ W BRIEFIE BYŁA BŁĘDNA DATA 18.12.2017 — NIE UŻYWAM JEJ.
 * Cechy: widoczna gorczyca, pęta 25–30 cm, wędzona na zimno
 * dymem dębowym, receptura z masarni GS.
 * TO JEST PODSTAWA KĄTA (wędzenie na zimno = różnica
 * temperatur jako narzędzie).
 *
 * OBSZAR OCHRONY UZDROWISKOWEJ — Dz.U. 2016 poz. 756,
 * w mocy od 16 CZERWCA 2016 r.
 * ⚠ WYŁĄCZNIE FAKT ADMINISTRACYJNY. ZERO twierdzeń
 * zdrowotnych, zero leczenia, zero „właściwości”.
 * „PUNKT ZEROWY” KANAŁU ELBLĄSKIEGO.
 * ŚLUZA — 1872–1876.
 * REZERWAT JEZIORO IŁGI — 1957 r., 74,93 ha.
 * KOŚCIÓŁ — 1898–1901; DZWONNICA 1341 r.
 * MIŁOMŁYN NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: RÓŻNICA TEMPERATUR — ZIMNE DO GORĄCEGO.
 * Kąt od wędzenia na zimno: techniki, w której cała sztuka
 * polega na tym, żeby dymu nie było za ciepło.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najczęstsze zwarzenie sosu nie bierze się z „złej
 *   śmietany”, tylko z różnicy temperatur,
 * — hartowanie: dolewa się gorące do zimnego, nie odwrotnie,
 *   i to jest jedna z najbardziej użytecznych rzeczy
 *   w domowej kuchni,
 * — że to samo dotyczy jajek w zupie, mąki w sosie
 *   i czekolady z płynem,
 * — że zimne masło do ciasta i zimna woda do kruchego to ta
 *   sama zasada z drugiej strony — różnica ma czasem POMAGAĆ,
 * — że naczynie z lodówki potrafi zatrzymać całe danie,
 * — UCZCIWIE: urządzenie z podgrzewaniem i mieszaniem
 *   ogranicza ten problem, ale go nie kasuje — bo składnik
 *   wrzucony prosto z lodówki nadal jest zimny,
 * — i rada: wyjąć nabiał wcześniej, to kosztuje zero.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR (także żadnych
 *   stopni przy hartowaniu i wędzeniu).
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — status uzdrowiskowy
 *   podaję WYŁĄCZNIE jako fakt prawny.
 * — ŻADNYCH NAZW FIRM — także żadnej konkretnej masarni.
 * — NIE PODAJĘ receptury kiełbasy ani parametrów wędzenia.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta (Liebemühl).
 * — ZERO roku 1945 i wysiedleń. Utratę praw miejskich podaję
 *   jako fakt administracyjny, bez przyczyny.
 * — ZERO wątków wojennych wokół Kanału Elbląskiego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ciepło, które zostaje”
 * (Błaszki) dotyczy stygnięcia po wyłączeniu. „Przenoszenie
 * gorącego” (Frombork) dotyczy ruchu. „Rozmrażanie” (Ruciane-
 * Nida) dotyczy mrożonek. „Wolno czy szybko” (Lidzbark)
 * dotyczy tempa. Tutaj chodzi o SPOTKANIE dwóch temperatur
 * w jednym naczyniu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dokładnego roku lokacji — źródła mówią
 *   „przed 1335”.
 * — NIE TWIERDZĘ, że pobyt w Miłomłynie na cokolwiek pomaga.
 * — NIE PODAJĘ, że Miłomłyn jest uzdrowiskiem — ma status
 *   OBSZARU OCHRONY UZDROWISKOWEJ, to nie to samo.
 * — NIE PODAJĘ nazwy producenta kiełbasy.
 * — NIE PODAJĘ długości ani przebiegu Kanału Elbląskiego.
 * — NIE MYLĘ Miłomłyna z MIŁAKOWEM. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 409, gmina 4 742 mieszkańców, 13 sołectw;
 *   miasto w ostatnich latach urosło,
 * — prawa miejskie nadane przed 1335 r. przez komtura
 *   Hartunga von Sonnenborna, przywrócone 1 stycznia 1998 r.,
 * — „Kiełbasa polska wędzona z Mazur” wpisana na Listę
 *   Produktów Tradycyjnych 30 listopada 2017 r.; wędzona
 *   na zimno dymem dębowym, z widoczną gorczycą,
 *   w pętach 25–30 cm,
 * — obszar ochrony uzdrowiskowej ustanowiony rozporządzeniem
 *   z Dz.U. 2016 poz. 756, obowiązującym od 16 czerwca 2016 r.,
 * — Miłomłyn to „punkt zerowy” Kanału Elbląskiego,
 *   ze śluzą z lat 1872–1876,
 * — rezerwat Jezioro Iłgi utworzony w 1957 r., 74,93 ha,
 * — kościół z lat 1898–1901 z dzwonnicą z 1341 r.
 */
export const MILOMLYN: CityContent = {
  slug: "milomlyn",
  h1: "Thermomix Miłomłyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Miłomłyn — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Miłomłynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Miłomłyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Miłomłynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Miłomłyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Miłomłyn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sos rzadko warzy się od śmietany. Warzy się od różnicy temperatur.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Miłomłynie – jak wygląda prezentacja?",
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
      id: "roznica-temperatur",
      heading: "Wędzenie, w którym chodzi o chłód — czyli o różnicy temperatur",
      paragraphs: [
        "Na Liście Produktów Tradycyjnych figuruje od 30 listopada 2017 roku „Kiełbasa polska wędzona z Mazur”, wpisana właśnie stąd. Poznaje się ją po widocznej gorczycy i po pętach długości dwudziestu pięciu do trzydziestu centymetrów, a receptura pochodzi z dawnej gminnej masarni. Ale najciekawsze jest to, że wędzi się ją na zimno, dymem dębowym. Cała sztuka wędzenia na zimno polega na tym, żeby dym był dymem, a nie ciepłem — żeby różnica temperatur była pilnowana.",
        "W domowej kuchni ta sama różnica robi więcej szkód niż jakikolwiek zły składnik.",
        "Zacznę od najczęstszej porażki, jaką znam: zwarzony sos. Prawie zawsze słyszę wtedy „bo śmietana była kiepska”. Nie była. Zimna śmietana trafiła prosto z lodówki do gorącego sosu i białko się ścięło. To nie jest wada produktu, to jest fizyka.",
        "Sposób nazywa się hartowanie i jest jedną z najbardziej użytecznych rzeczy, jakich można się w kuchni nauczyć. Zasada brzmi odwrotnie, niż podpowiada odruch: to gorące dolewa się do zimnego, a nie zimne do gorącego. Do miseczki ze śmietaną dolewa się po trochu gorącego sosu, mieszając, aż śmietana przestanie być zimna — i dopiero taką całość wlewa się do garnka. Nic się wtedy nie ścina.",
        "To samo dotyczy jajka zaciąganego w zupie, mąki rozprowadzanej w sosie i czekolady, do której dolewa się płyn. Wszędzie tam problemem nie jest składnik, tylko szok termiczny.",
        "Ale różnica temperatur potrafi też pracować na Waszą korzyść i wtedy trzeba jej pilnować z drugiej strony. Kruche ciasto wymaga zimnego masła i zimnej wody właśnie po to, żeby tłuszcz nie zdążył się połączyć z mąką. Ciasto francuskie tym bardziej. Tam ciepłe ręce są wadą, a lodówka narzędziem.",
        "Jest jeszcze rzecz, o której się nie mówi wcale: temperatura naczynia. Zimna miska prosto z zimnej spiżarni potrafi zatrzymać rosnące ciasto albo ściąć krem, choć wszystkie składniki były w porządku. Naczynie też ma swoją temperaturę i też się liczy.",
        "Powiem uczciwie, jak to wygląda przy tym urządzeniu. Podgrzewanie i ciągłe mieszanie bardzo ten problem ograniczają, bo nic nie stoi nieruchomo nad gorącym dnem i nie ma miejsc cieplejszych niż reszta. Ale nie kasują go całkowicie. Jeżeli wrzucicie zimną kostkę masła albo zimną śmietanę prosto z lodówki do gorącej zawartości, urządzenie nie zrobi z tego cudu — zimne nadal jest zimne.",
        "Dlatego rada, która nic nie kosztuje i najczęściej ratuje sytuację: wyjmijcie nabiał i jajka z lodówki, kiedy zaczynacie gotować. Do momentu, w którym będą potrzebne, przestaną być zimne, a Wy nie będziecie musieli niczego hartować.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Miłomłynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli sosy warzą Wam się regularnie, powiedzcie o tym przy umawianiu. To jedna z tych rzeczy, które pokazuje się raz i potem już się nie zdarzają.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Miłomłynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla miłomłyńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad dwa tysiące czterysta mieszkańców, a cała gmina blisko cztery tysiące siedemset, w trzynastu sołectwach — i jest to jedno z niewielu miasteczek w regionie, które w ostatnich latach urosło. Prawa miejskie nadał Miłomłynowi przed 1335 rokiem komtur Hartung von Sonnenborn, a po przerwie miasto odzyskało je 1 stycznia 1998 roku. Miłomłyn jest „punktem zerowym” Kanału Elbląskiego i ma śluzę z lat 1872–1876; kościół pochodzi z lat 1898–1901, ale dzwonnica jest znacznie starsza, z 1341 roku. W gminie leży rezerwat Jezioro Iłgi, utworzony w 1957 roku, o powierzchni niespełna siedemdziesięciu pięciu hektarów. Formalnie Miłomłyn ma też status obszaru ochrony uzdrowiskowej, nadany rozporządzeniem obowiązującym od 16 czerwca 2016 roku.",
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

  districtsHeading: "Do których części gminy Miłomłyn dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzynastu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Miłomłyn też przyjadę",
  nearbyParagraphs: [
    "Ostróda, Morąg, Zalewo, Miłakowo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ostróda", "Morąg", "Zalewo", "Miłakowo"],

  about: blokOMnie("do Miłomłyna", "w Miłomłynie i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Miłomłyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzynastu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Miłomłyn to nie Miłakowo — to dwie różne gminy, obie w powiecie ostródzkim.",
    },
    ...faqWspolne("w Miłomłynie"),
    {
      question: "Dlaczego warzy mi się śmietana w sosie?",
      answer:
        "Prawie zawsze nie z winy śmietany, tylko przez różnicę temperatur — zimna trafia prosto z lodówki do gorącego i białko się ścina. Pomaga hartowanie: do miseczki ze śmietaną dolewa się po trochu gorącego sosu, miesza, i dopiero taką całość wlewa się do garnka. Gorące do zimnego, nie odwrotnie.",
    },
    {
      question: "Czy w Thermomixie sos może się zwarzyć?",
      answer:
        "Może, choć rzadziej. Ciągłe mieszanie i równomierne grzanie bardzo ten problem ograniczają, ale go nie kasują — składnik wrzucony prosto z lodówki nadal jest zimny. Najprostsze rozwiązanie kosztuje zero: wyjmijcie nabiał i jajka z lodówki, kiedy zaczynacie gotować.",
    },
    {
      question: "Czy Miłomłyn jest uzdrowiskiem?",
      answer:
        "Ma status obszaru ochrony uzdrowiskowej, nadany rozporządzeniem obowiązującym od 16 czerwca 2016 roku. To kategoria prawna, nie to samo co uzdrowisko, i nie mówi nic o działaniu na zdrowie.",
    },
  ],

  geo: { lat: 53.7458, lng: 19.8331 },
};
