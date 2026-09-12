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
 * KAMIEŃSK — gmina miejsko-wiejska w powiecie radomszczańskim.
 * MIASTO 2 599, GMINA 5 527 (GUS 31.12.2024).
 * Strona gminy podaje 2 843 — NIEAKTUALNE.
 * LICZBY SOŁECTW NIE PODAJĘ — brak urzędowego wykazu;
 * potwierdzone tylko 36 miejscowości.
 *
 * PRAWA MIEJSKIE 1374 r., KRÓLOWA ELŻBIETA (Łokietkówna).
 * UTRATA 1870, PRZYWRÓCENIE 1 STYCZNIA 1994 r. — ta sama
 * tura co Działoszyn, o którym pisałam osobno.
 * NUMERU DZ.U. NIE PODAJĘ — nie potwierdzono.
 * PIERWSZA WZMIANKA 1291 r. (budowa drewnianego kościoła).
 * DO 1918 r. MIEJSCOWOŚĆ NAZYWAŁA SIĘ „KAMIŃSK".
 * Kościół murowany 1540 r., przebudowa 1899–1904.
 * Pomnik Tadeusza Kościuszki 1917–1923. Szkoła 1910 r.
 * Rzeka KAMIONKA; gmina w dolinach dopływów Widawki.
 *
 * GÓRA KAMIEŃSK — ok. 350 m, ośrodek rekreacyjny DZIAŁA
 * SEZONOWO (stan zimowy 2025/26 potwierdzony; komunikat
 * „nieczynny od 1 marca 2026" oznacza przerwę po sezonie
 * zimowym, NIE zamknięcie). Piszę o niej WYŁĄCZNIE jako
 * o wzniesieniu i miejscu rekreacji.
 *
 * ⚠ ZAKAZ BEZWZGLĘDNY: kopalnia, elektrownia, zwałowisko,
 * hałda, rekultywacja, odkrywka, farma wiatrowa, nazwy spółek
 * energetycznych, Bełchatów w kontekście przemysłowym.
 * NIGDY nie nazywam Góry Kamieńsk zwałowiskiem.
 *
 * KĄT: DANIE, KTÓRE MOŻE POCZEKAĆ. Co znosi czekanie, a co
 * nie — w mieście, do którego wraca się o nieprzewidywalnej
 * porze.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w większości domów problemem nie jest ugotowanie,
 *   tylko trafienie w godzinę, o której ktoś wróci,
 * — że dania dzielą się na te, które czekaniem nic nie tracą,
 *   i te, które tracą wszystko — i że to jest lista, którą
 *   warto mieć w głowie przy planowaniu tygodnia,
 * — co znosi czekanie: gulasze, sosy, dania duszone, zupy
 *   poza kremami z zielonych warzyw, kasze, farsze, leczo,
 * — co nie znosi: kluski, makarony, panierowane, chrupiące,
 *   purée, sałatki z surowych warzyw, ubite masy,
 * — że najczęstszy błąd to ugotowanie CAŁEGO dania z góry,
 *   zamiast ugotowania bazy i dokończenia na miejscu,
 * — że urządzenie pomaga tu przez podział na dwa etapy,
 *   a nie przez „szybkość",
 * — i ODMOWA: nie doradzę, jak długo gotowe danie może stać
 *   ani jak je przechowywać.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD o czasie i warunkach przechowywania
 *   gotowych potraw. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO energetyki i górnictwa. Patrz zakaz wyżej.
 * — NIE ROBIĘ TŁA z pracy zmianowej ani z dojazdów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Odgrzewanie" (Człuchów)
 * dotyczy dania, które już wystygło i wraca na ogień.
 * „Gotowanie na zapas i mrożenie" dotyczy porcji na później.
 * „Wszystko przygotowane przed startem" (Sulejów) dotyczy
 * organizacji przed gotowaniem. Tutaj chodzi o CZEKANIE:
 * o to, co się z daniem dzieje między gotowe a zjedzone.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ numeru Dz.U. rozporządzenia z 1993 r.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PRZYPISUJĘ Kamieńskowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PISZĘ o rezerwatach — nie znalazłam potwierdzenia.
 * — NIE MYLĘ Kamieńska z KAMIENIEM POMORSKIM, gminą Kamień,
 *   gminą Kamieniec ani z Kamieniem Krajeńskim.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 599, gmina 5 527 mieszkańców (GUS 31.12.2024),
 * — pierwsza wzmianka z 1291 r., dotyczy budowy drewnianego
 *   kościoła,
 * — prawa miejskie z 1374 r. od królowej Elżbiety, utracone
 *   w 1870 r., przywrócone 1 stycznia 1994 r.,
 * — do 1918 r. miejscowość nazywała się Kamińsk,
 * — kościół murowany z 1540 r., przebudowany w latach
 *   1899–1904,
 * — pomnik Tadeusza Kościuszki z lat 1917–1923,
 * — budynek szkoły z 1910 r., rozbudowany w latach 1932–1938,
 * — Góra Kamieńsk ma około 350 m i jest dominantą krajobrazową
 *   okolicy; działa tu sezonowy ośrodek rekreacyjny,
 * — miasto powstało u przeprawy przez dolinę Kamionki.
 */
export const KAMIENSK: CityContent = {
  slug: "kamiensk",
  h1: "Thermomix Kamieńsk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kamieńsk (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kamieńsku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kamieńsk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kamieńsku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kamieńska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Kamieńsk i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trudność nie polega na ugotowaniu, tylko na trafieniu w godzinę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kamieńsku – jak wygląda prezentacja?",
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
      id: "danie-ktore-czeka",
      heading: "Miasto pod górą, do której się wraca — czyli o daniach, które znoszą czekanie",
      paragraphs: [
        "Nad Kamieńskiem góruje wzniesienie mające około trzystu pięćdziesięciu metrów, z sezonowym ośrodkiem rekreacyjnym i trasami, po których biega się także poza sezonem — samo miasteczko liczy dwa i pół tysiąca mieszkańców, a cała gmina niewiele ponad pięć i pół. Prawa miejskie dostało w 1374 roku od królowej Elżbiety, straciło je w 1870 i odzyskało 1 stycznia 1994, po stu dwudziestu czterech latach. Ciekawostka, o której mało kto pamięta: do 1918 roku miejscowość nazywała się Kamińsk.",
        "W miejscu, do którego ludzie wracają o różnych porach — bo pojechali gdzieś na cały dzień, bo skończyli później, bo dziecko miało trening — obiad ma jeden konkretny problem. Nie taki, że nie ma go jak ugotować. Taki, że nie wiadomo, na którą godzinę.",
        "I dlatego chcę napisać o rzeczy, o której nie mówi żadna ulotka: dania dzielą się na takie, które czekaniem nic nie tracą, i takie, które tracą wszystko. To jest lista warta trzymania w głowie przy planowaniu tygodnia, bo ona decyduje więcej niż jakikolwiek przepis.",
        "Czekanie znoszą dobrze, a czasem wręcz na nim zyskują: gulasze, dania duszone, sosy, leczo, fasolka, bigos, kasze, farsze, większość zup. To są potrawy, w których smaki potrzebują czasu, żeby się połączyć — godzina stania robi im dobrze.",
        "Czekania nie znoszą w ogóle: kluski i makarony, wszystko panierowane i chrupiące, purée, sałatki z surowych warzyw, ubite masy, naleśniki, kopytka. Tu każda kolejna minuta odbiera coś, czego już się nie odzyska — makaron się rozmiękcza, panierka mięknie, purée gęstnieje i zbija.",
        "Najczęstszy błąd, jaki widzę, jest za to bardzo prosty: ludzie gotują całe danie z góry, a potem wszystko czeka razem. Znacznie lepiej działa podział. Baza — sos, gulasz, wywar, farsz — powstaje wcześniej i spokojnie stoi. To, co się psuje od stania, dochodzi dopiero wtedy, kiedy ktoś wchodzi do domu. Makaron ugotowany na miejscu to kwestia kilku minut, jeśli sos już jest.",
        "I tu urządzenie faktycznie pomaga, tylko nie tym, czym się zwykle chwali. Nie „szybkością” — bazę i tak trzeba ugotować. Pomaga tym, że można ją zrobić w jednym naczyniu wtedy, kiedy macie chwilę, a nie wtedy, kiedy jest głodna rodzina, i tym, że nie trzeba nad nią stać, bo gotuje się z ustawioną temperaturą i mieszaniem.",
        "Granica, przy której nie ustąpię: nie powiem Wam, jak długo gotowe danie może stać poza lodówką ani jak je przechowywać. To jest bezpieczeństwo żywności, ryzyko jest realne, a moje zgadywanie nie jest tu nic warte.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kamieńsku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli u Was w domu nikt nie je o tej samej godzinie — powiedzcie przy umawianiu. Pokażę wtedy podział na bazę i dokończenie, bo to jest ta część, która realnie zmienia tydzień.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kamieńsku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kamieńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy dwa i pół tysiąca mieszkańców, a cała gmina nieco ponad pięć i pół tysiąca — dane ze strony gminy są starsze, więc podaję te z GUS-u za koniec 2024 roku. Pierwsza wzmianka o Kamieńsku pochodzi z 1291 roku i dotyczy budowy drewnianego kościoła; murowany stanął w 1540, a przebudowano go na przełomie dziewiętnastego i dwudziestego wieku. Prawa miejskie nadała miastu w 1374 roku królowa Elżbieta, odebrano je w 1870 i przywrócono 1 stycznia 1994. Miasto powstało przy przeprawie przez dolinę Kamionki, a nad okolicą góruje wzniesienie zwane Górą Kamieńsk.",
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

  districtsHeading: "Do których części gminy Kamieńsk dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Kamieńsk też przyjadę",
  nearbyParagraphs: [
    "Radomsko, Bełchatów, Piotrków Trybunalski, Przedbórz i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Radomsko", "Bełchatów", "Przedbórz", "Wolbórz"],

  about: blokOMnie("do Kamieńska", "w Kamieńsku i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kamieńska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Kamieńsk w powiecie radomszczańskim — nie o Kamień Pomorski, gminę Kamień, gminę Kamieniec ani Kamień Krajeński.",
    },
    ...faqWspolne("w Kamieńsku"),
    {
      question: "Które dania najlepiej znoszą czekanie?",
      answer:
        "Gulasze, dania duszone, sosy, leczo, fasolka, bigos, kasze, farsze i większość zup — im godzina stania zwykle robi dobrze, bo smaki mają czas się połączyć. Nie znoszą czekania kluski, makarony, wszystko panierowane i chrupiące, purée, naleśniki i sałatki z surowych warzyw.",
    },
    {
      question: "Co zrobić, gdy nie wiadomo, o której ktoś wróci na obiad?",
      answer:
        "Podzielić danie na dwa etapy. Bazę — sos, gulasz, wywar, farsz — zrobić wcześniej, bo ona spokojnie stoi. To, co psuje się od czekania, dorobić dopiero wtedy, gdy ktoś wchodzi do domu; makaron przy gotowym sosie to kilka minut.",
    },
    {
      question: "Jak długo gotowe danie może stać?",
      answer:
        "Tego Wam nie powiem i nie będę zgadywać. To jest bezpieczeństwo żywności, a ja zajmuję się sprzętem kuchennym — w tej sprawie kierujcie się zasadami przechowywania żywności, nie moją opinią.",
    },
  ],

  geo: { lat: 51.2049, lng: 19.4989 },
};
