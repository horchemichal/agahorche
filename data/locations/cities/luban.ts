import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * LUBAŃ — miasto na Pogórzu Izerskim, zbudowane z bazaltu z jednej góry
 * stojącej w jego granicach. Co czwarty mieszkaniec ma sześćdziesiąt pięć
 * lat lub więcej.
 *
 * KĄT: gotowanie dla jednej osoby. Temat, którego nie ma nigdzie indziej
 * w serwisie i którego materiały sprzedażowe konsekwentnie omijają,
 * bo cała branża mówi wyłącznie o rodzinie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — w mieście, w którym 25,7% mieszkańców ma 65+, gotowanie dla siebie
 *   jednej osoby to nie margines, tylko normalna sytuacja,
 * — dlaczego przy jednej osobie gotowanie od zera zwykle przestaje się
 *   opłacać: nie z powodu składników, tylko z powodu zmywania i czasu,
 * — co realnie się zmienia: jedno naczynie zamiast trzech, brak stania
 *   przy garnku, mała porcja bez przeliczania,
 * — czego NIE zrobi: nie zastąpi towarzystwa przy stole i nie sprawi,
 *   że będzie się chciało gotować.
 *
 * TWARDE GRANICE — TU SZCZEGÓLNIE:
 * — ŻADNEGO WSPÓŁCZUCIA, ŻADNEGO SŁOWA „SAMOTNOŚĆ", żadnego mówienia
 *   komuś, jak ma żyć. Piszę o jednej porcji, nie o czyimś życiu.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — zwłaszcza o odżywianiu osób
 *   starszych. To jest dziedzina dietetyka i lekarza, nie sprzedawcy.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU ŻYWNOŚCI (zasada ze Skierniewic).
 *
 * ROZGRANICZENIE. Kilka stron mówi o domu, w którym jedna osoba chce,
 * a druga nie, i o gotowaniu mniejszych porcji. Tutaj chodzi o dom,
 * w którym przy stole jest JEDNA OSOBA.
 *
 * OSTROŻNIE Z POWOJENNYM OSADNICTWEM. Sprawdziłam to i wątek
 * „wielokulturowej kuchni przywiezionej w walizkach" NIE ma pokrycia
 * akurat dla Lubania: reemigrantów z Bośni osiedlano pod Bolesławcem,
 * a Łemków w innych miejscach Dolnego Śląska. W tekście tego nie ma.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy ok. dziewiętnastu i pół tysiąca mieszkańców
 *   (GUS, 31.12.2024), powierzchnia 16,1 km²,
 * — średni wiek 45,8 lat; 65+ stanowi 25,7% mieszkańców; w 2024 r.
 *   były 92 urodzenia i 243 zgony,
 * — mury obronne budowano od ok. 1318 r. z bazaltu wydobywanego
 *   z Kamiennej Góry — wzgórza w granicach miasta, dziś parku,
 * — Wieża Bracka z 1318 r. ma 45 m i jest jedyną pozostałością
 *   po czterech bramach miejskich,
 * — ratusz budowano w latach 1539–1541, wieżę dodano w 1544 r.;
 *   w 1945 r. została z niego sama ściana frontowa,
 * — data lokacji „około 1220" jest umowna — dyrektor tutejszego muzeum
 *   mówi wprost, że nie wiadomo, kto i kiedy nadał prawa miejskie,
 * — w bitwie o Lubań (17 lutego – 6 marca 1945) zniszczeniu uległo
 *   ok. dwóch trzecich zabudowy,
 * — Zgorzelec jest 22 km stąd, Jelenia Góra 42 km,
 * — NIE POTWIERDZIŁAM żadnego wpisu z miasta ani powiatu na
 *   ministerialnej Liście Produktów Tradycyjnych.
 */
export const LUBAN: CityContent = {
  slug: "luban",
  h1: "Thermomix Lubań – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lubań — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Lubaniu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubań — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lubaniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lubania z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Lubań i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jedna porcja to też porcja. Cała branża udaje, że nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lubaniu – jak wygląda prezentacja?",
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
      id: "jedna-porcja",
      heading: "Miasto, w którym co czwarty mieszkaniec ma ponad sześćdziesiąt pięć lat",
      paragraphs: [
        "W Lubaniu mieszka dziś około dziewiętnastu i pół tysiąca osób, a jedna czwarta z nich ma sześćdziesiąt pięć lat lub więcej. Średni wiek to niecałe czterdzieści sześć lat. W dwa tysiące dwudziestym czwartym roku urodziło się tu dziewięćdziesięcioro dwoje dzieci i zmarły dwieście czterdzieści trzy osoby. To są dane, nie ocena.",
        "Wynika z nich coś, o czym cała moja branża milczy. Wszystkie foldery, wszystkie pokazy i wszystkie zdjęcia w tym zawodzie pokazują rodzinę przy stole: czworo, pięcioro, obiad w niedzielę. A w takim mieście jak to bardzo wielu ludzi gotuje dla siebie. Jednej osoby.",
        "Napiszę więc o tym wprost, bo to jedyne miejsce w tym serwisie, gdzie ten temat w ogóle jest. I zacznę od tego, co przy jednej osobie zwykle się psuje.",
        "Nie chodzi o składniki — te da się kupić w mniejszych ilościach albo wykorzystać przez kilka dni. Chodzi o dwie inne rzeczy. Pierwsza: zmywanie. Zrobienie zupy od zera to garnek, deska, nóż, sitko i blender, a potem umycie tego wszystkiego — dla jednej miski. Przy czterech osobach ten rachunek jeszcze się jakoś broni, przy jednej przestaje. Druga: stanie. Trudno przekonać samego siebie do dwudziestu minut mieszania w garnku, kiedy nikt na to nie czeka.",
        "Co się w tym zmienia i mówię to bez przesady. Wszystko dzieje się w jednym naczyniu — po zupie nie zostaje garnek, deska i blender, tylko jedno naczynie do umycia. Rozdrabnianie i mieszanie robi urządzenie, więc nie trzeba stać. A przepis prowadzi krok po kroku, więc małą porcję da się ugotować bez liczenia w głowie, ile to będzie jedna czwarta z czterech.",
        "Praktyczna uwaga, która wraca u mnie najczęściej przy takich rozmowach: dobrze wychodzą tu rzeczy, które i tak robi się raz na kilka dni. Zupa, sos, pasta kanapkowa. Robi się porcję, je przez kilka dni, a potem robi coś innego. To nie jest gotowanie „na zapas na miesiąc”, tylko normalne gospodarowanie.",
        "Teraz rzeczy, których nie zrobi, i to jest ważniejsze niż lista zalet. Nie sprawi, że będzie się chciało gotować — chęć to zupełnie inna sprawa i nie sprzedaje się jej razem z urządzeniem. Nie zastąpi kogoś, kto siedzi po drugiej stronie stołu. I nie powiem ani słowa o tym, jak powinien odżywiać się ktoś po sześćdziesiątce, bo to jest dziedzina dietetyka i lekarza, a nie przedstawicielki handlowej.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lubaniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli gotujecie dla jednej osoby, powiedzcie to przy umawianiu. Ugotujemy jedną porcję, a nie pokazową miskę na sześć — inaczej cała prezentacja mija się z celem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lubaniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lubańskiej rodziny",
      paragraphs: [
        "Tam, gdzie w domu jest kilka osób, obiad zwykle powstaje w oknie między pracą a wieczorem i przygotowuje go jedna osoba dla wszystkich.",
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

  districtsHeading: "Do których części Lubania dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie publikuje urzędowego wykazu osiedli, więc przy umawianiu najprościej podać ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [],

  nearbyHeading: "Poza Lubań też przyjadę",
  nearbyParagraphs: [
    "Olszyna, Leśna, Siekierczyn i wsie gminy wiejskiej są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Olszyna", "Leśna", "Siekierczyn", "Gryfów Śląski", "Zgorzelec", "Nowogrodziec"],

  about: blokOMnie("do Lubania", "w Lubaniu i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubania bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Lubaniu"),
    {
      question: "Czy to ma sens dla jednej osoby?",
      answer:
        "Przy jednej osobie problemem zwykle nie są składniki, tylko zmywanie i stanie przy garnku. Tu wszystko dzieje się w jednym naczyniu, rozdrabnianie robi urządzenie, a przepis prowadzi krok po kroku, więc małą porcję da się ugotować bez przeliczania. Nie obiecam natomiast, że dzięki temu będzie się chciało gotować — to zupełnie inna sprawa.",
    },
    {
      question: "Czy dostanę porady, jak powinnam się odżywiać?",
      answer:
        "Nie. Nie doradzam w sprawach żywienia ani zdrowia i nie mam do tego żadnych kwalifikacji. Mówię wyłącznie o tym, co urządzenie robi z produktami, które sami wybraliście. O diecie warto rozmawiać z lekarzem albo dietetykiem.",
    },
  ],

  geo: { lat: 51.1206, lng: 15.2872 },
};
