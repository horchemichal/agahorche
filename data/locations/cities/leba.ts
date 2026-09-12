import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * ŁEBA — gmina miejska w powiecie lęborskim, 3 029 mieszkańców
 * (31.12.2024, GUS). Brief mówił 3 500 — zawyżone.
 * Powierzchnia 16,6 km² (jedno źródło podaje 17 — nie rozstrzygam).
 *
 * PRAWA MIEJSKIE 8 LIPCA 1357 r. — nadał komtur gdański
 * WILHELM VON BALDERSHEIM, na prawie lubeckim, nazwa lokacyjna
 * LEBAMUNDE. UWAGA: to dotyczy STAREJ ŁEBY.
 *
 * PRZENIESIENIE MIASTA: to nie było jedno wydarzenie, tylko CIĄG
 * KATASTROF. Sztorm 15.09.1497 zamulił ujście; wielki sztorm
 * 11.01.1558 zniszczył zachodnią część i przesunął ujście o 1,5 km
 * na wschód; sztorm 03.03.1570 przesądził o translokacji na prawy
 * brzeg; ok. 1580 r. resztki Starej Łeby zasypał piasek.
 * W TEKŚCIE PISZĘ O PROCESIE 1558–1570, nie o jednym sztormie.
 * NIE TWIERDZĘ, że nowa lokacja dostała prawa miejskie osobno —
 * jedno źródło mówi o zmianie prawa lubeckiego na chełmińskie
 * 17.03.1575, ale nikt tego nie potwierdza.
 *
 * FAKT OSIOWY DLA KĄTA: 1 305 podmiotów REGON, z czego 635
 * W ZAKWATEROWANIU I GASTRONOMII — czyli około POŁOWY wszystkich
 * firm w mieście. Do tego 432 PODMIOTY NA 1000 MIESZKAŃCÓW —
 * TRZECIE MIEJSCE W POLSCE. Łeba jest też pierwsza w Polsce pod
 * względem dochodów budżetu na mieszkańca.
 *
 * SŁOWIŃSKI PARK NARODOWY: gmina Łeba LEŻY CZĘŚCIOWO W PARKU
 * (park obejmuje gminy Ustka, Smołdzino, Główczyce, Wicko i Łeba).
 * Park utworzony 1967, REZERWAT BIOSFERY UNESCO OD 1977 r.
 * OBALONE: ruchome wydmy i Wydma Łącka leżą w GMINIE SMOŁDZINO,
 * nie w Łebie — Łeba jest punktem startowym. Piszę „ruchome wydmy
 * pod Łebą", nigdy „w Łebie".
 * OBALONE: Wydma Łącka NIE jest najwyższą wydmą w Polsce — jest
 * DRUGA, po Wielbłądzim Garbie w Krynicy Morskiej.
 * RĄBKA jest częścią miasta Łeba (to potwierdzone).
 * OBALONE: latarnia Stilo leży w gminie CHOCZEWO, nie w Łebie.
 *
 * KĄT: JEDZENIE NA WYNOS — czyli co warto robić samemu w mieście,
 * w którym co druga firma sprzedaje jedzenie. Kąt bierze się wprost
 * z liczby 635 na 1 305.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w Łebie jedzenie kupione jest na wyciągnięcie ręki i że to
 *   nie jest wada, tylko fakt,
 * — że są rzeczy, których NIE OPŁACA SIĘ robić w domu, i że mówię
 *   to jako sprzedawczyni sprzętu do gotowania,
 * — co się natomiast opłaca: rzeczy tanie w składnikach a drogie
 *   na wynos (zupa, pasta, sos, ciasto, chleb, mus dla dziecka),
 * — że różnica nie polega na oszczędności, tylko na tym, że wiesz,
 *   co jest w środku,
 * — że sprzęt kupiony po to, żeby „już nigdy nic nie kupować
 *   gotowego", zostanie porzucony w trzy tygodnie,
 * — i ODMOWA: nic o bezpieczeństwie jedzenia kupionego na wynos.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU I ODGRZEWANIU jedzenia
 *   kupionego na wynos ani o tym, jak długo może stać.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — „domowe znaczy zdrowsze"
 *   to jest tu największa pokusa i mówię NIE.
 * — ŻADNYCH PORAD DLA OSÓB PROWADZĄCYCH GASTRONOMIĘ I KWATERY.
 *   To działalność gospodarcza z własnymi przepisami sanitarnymi.
 * — ŻADNYCH NAZW FIRM ani lokali.
 * — ŻADNYCH LICZB O TYM, ILE SIĘ OSZCZĘDZA. Nie liczyłam
 *   i nie będę zgadywać.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowe danie ze słoika" (inne
 * miasto) dotyczy produktów przemysłowych ze sklepu. „Poza sezonem"
 * (Ustka) dotyczy rytmu roku w miejscowości nadmorskiej i tego,
 * że sprzętu nie kupuje się na lipiec. „Praca przy jedzeniu"
 * (inne miasto) dotyczy osoby pracującej w gastronomii zawodowo.
 * Tutaj chodzi o CODZIENNY WYBÓR: ugotować czy kupić — i o uczciwą
 * listę rzeczy, których robić samemu nie warto.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że ruchome wydmy są w Łebie. Są w gminie Smołdzino.
 * — NIE PISZĘ, że Wydma Łącka to najwyższa wydma w Polsce.
 * — NIE PISZĘ, że nowa Łeba dostała osobne prawa miejskie.
 * — NIE PODAJĘ nazwy największego pracodawcy — nie ustalono.
 * — NIE PISZĘ o poligonie rakietowym w Rąbce. To obiekt niemieckiej
 *   broni V z lat 1940–1945 i nie jest to scenografia dla strony
 *   o sprzęcie kuchennym.
 * — NIE DOTYKAM sporu o zabudowę hotelową przy ul. Nadmorskiej.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych — dla Łeby
 *   nie znaleziono żadnego.
 * — districts: nie potwierdzono osiedli statutowych (statut miasta
 *   niedostępny). PUSTA TABLICA, o osiedlach nie piszę.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 3 029 mieszkańców (31.12.2024, GUS), gmina miejska,
 * — prawa miejskie 8 lipca 1357 r. od komtura gdańskiego
 *   Wilhelma von Baldersheim, na prawie lubeckim,
 * — miasto przeniesione na prawy brzeg po sztormach 1558 i 1570;
 *   resztki starej osady zasypał piasek ok. 1580 r.,
 * — 1 305 podmiotów REGON, w tym 635 w zakwaterowaniu
 *   i gastronomii; 432 podmioty na 1000 mieszkańców — trzecie
 *   miejsce w Polsce,
 * — gmina leży częściowo w Słowińskim Parku Narodowym; park
 *   od 1977 r. jest rezerwatem biosfery UNESCO,
 * — ruchome wydmy leżą w sąsiedniej gminie Smołdzino,
 * — Rąbka jest częścią miasta.
 */
export const LEBA: CityContent = {
  slug: "leba",
  h1: "Thermomix Łeba – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łeba (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Łebie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łeba — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łebie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łeby z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Łeba i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Są rzeczy, których nie warto robić samemu. Mówię to jako sprzedawczyni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łebie – jak wygląda prezentacja?",
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
      id: "na-wynos",
      heading: "Miasto, w którym co druga firma sprzedaje jedzenie — czyli co warto gotować samemu",
      paragraphs: [
        "W Łebie zarejestrowanych jest tysiąc trzysta firm, z czego sześćset trzydzieści pięć to zakwaterowanie i gastronomia. Mniej więcej połowa. Na tysiąc mieszkańców przypada tu czterysta trzydzieści dwie firmy — trzeci wynik w całej Polsce. To jest miasto, w którym jedzenie kupione jest dosłownie za rogiem, przez pół roku o każdej porze.",
        "Więc napiszę tekst, którego sprzedawca sprzętu do gotowania pisać nie powinien: o tym, czego nie warto robić w domu.",
        "Bo najgorszy powód, żeby kupić to urządzenie, brzmi: „już nigdy nic nie kupię gotowego”. To postanowienie ma żywotność około trzech tygodni. Potem przychodzi lipiec, dwanaście godzin na nogach, i sprzęt idzie do szafki razem z poczuciem winy. Widziałam to wystarczająco często, żeby mówić o tym wprost.",
        "Rzeczy, których moim zdaniem nie warto robić samemu: pieczywo, jeśli obok jest dobra piekarnia. Frytki. Pierogi na dwadzieścia osób. Cokolwiek smażonego w głębokim tłuszczu — tego urządzenie i tak nie zrobi. I dowolne danie, którego robienie zajmuje trzy godziny, a zjada się je w dziesięć minut, jeśli akurat nie sprawia Wam to przyjemności.",
        "A teraz to, co naprawdę się opłaca — i tu jest reguła prosta: rzeczy tanie w składnikach, a drogie na wynos.",
        "Zupa. Kilogram warzyw kosztuje tyle, co jedna porcja na mieście, a wychodzi z niego pięć. Pasty i dipy na kanapki. Sosy. Ciasto na drożdżówki i placek. Mus owocowy dla małego dziecka. Hummus. Masa serowa. Koktajle. To wszystko powstaje w kilka minut i różnica w koszcie jest kilkukrotna, a nie kilkuprocentowa.",
        "Ale zaznaczę uczciwie: żadnych liczb Wam nie podam. Nie policzyłam tego i nie będę zgadywać, ile kto oszczędzi — zależy to od tego, co jecie i gdzie kupujecie.",
        "I jeszcze jedno, ważniejsze niż pieniądze: prawdziwa różnica nie polega na oszczędności, tylko na tym, że wiecie, co jest w środku. Ile cukru w musie dla dziecka, ile soli w zupie, jaki tłuszcz w cieście. To nie jest twierdzenie o zdrowiu — nie napiszę Wam, że domowe jest zdrowsze, bo to zależy od tego, co i jak zrobicie. To jest twierdzenie o wiedzy: sami decydujecie.",
        "Czego nie doradzę: niczego o tym, jak przechowywać albo odgrzewać jedzenie kupione na wynos i jak długo może stać. To jest bezpieczeństwo żywności, nie sprzęt kuchenny. I nie doradzę nic osobom, które prowadzą tu lokal albo kwaterę — gotowanie dla gości to działalność gospodarcza z własnymi przepisami sanitarnymi i sprzęt domowy nie jest tu odpowiedzią.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łebie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli pracujecie w sezonie — umówmy się poza nim. We wrześniu mamy o czym rozmawiać, w lipcu nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łebie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łebskiej rodziny",
      paragraphs: [
        "Łeba liczy nieco ponad trzy tysiące mieszkańców. Prawa miejskie otrzymała 8 lipca 1357 roku od komtura gdańskiego Wilhelma von Baldersheim, na prawie lubeckim — ale dotyczyło to starej osady, której dziś już nie ma: po sztormach z 1558 i 1570 roku miasto przeniesiono na prawy brzeg rzeki, a resztki poprzedniej Łeby zasypał piasek około 1580 roku. Gmina leży częściowo w Słowińskim Parku Narodowym, który od 1977 roku jest rezerwatem biosfery UNESCO. Dla porządku, bo w przewodnikach bywa inaczej: ruchome wydmy z Wydmą Łącką leżą w sąsiedniej gminie Smołdzino — Łeba jest punktem startowym, nie ich adresem.",
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

  districtsHeading: "Do których części Łeby dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do centrum, do zabudowy przy porcie i do Rąbki, która jest częścią Łeby — oraz do okolicznych miejscowości. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Łebę też przyjadę",
  nearbyParagraphs: [
    "Lębork, Wicko, Choczewo, Smołdzino, Słupsk i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Lębork", "Słupsk", "Ustka", "Wejherowo", "Kępice"],

  about: blokOMnie("do Łeby", "w Łebie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łeby bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta, w tym do Rąbki, a także do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Łebie"),
    {
      question: "Czego nie warto robić samemu?",
      answer:
        "Pieczywa, jeśli obok jest dobra piekarnia. Frytek i wszystkiego smażonego w głębokim tłuszczu — tego urządzenie i tak nie zrobi. Pierogów na dwadzieścia osób. I każdego dania, które robi się trzy godziny, a zjada w dziesięć minut, jeśli nie sprawia Wam to przyjemności.",
    },
    {
      question: "To co się opłaca?",
      answer:
        "Rzeczy tanie w składnikach, a drogie na wynos: zupy, pasty i dipy, sosy, ciasta, mus owocowy dla dziecka, hummus, masa serowa, koktajle. Kilogram warzyw kosztuje tyle, co jedna porcja zupy na mieście, a wychodzi z niego pięć. Liczb nie podam — nie liczyłam i nie będę zgadywać.",
    },
    {
      question: "Czy domowe jest zdrowsze?",
      answer:
        "Tego nie napiszę, bo to zależy od tego, co i jak zrobicie. Prawdziwa różnica jest inna: wiecie, co jest w środku — ile cukru w musie dla dziecka, ile soli w zupie, jaki tłuszcz w cieście. To jest kwestia wiedzy, nie zdrowia.",
    },
  ],

  geo: { lat: 54.7601, lng: 17.5545 },
};
