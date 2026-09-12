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
 * PUCK — miasto powiatowe nad Zatoką Pucką, 10 419 mieszkańców
 * (31.12.2024, GUS). W briefie 11 000 — zawyżone.
 *
 * FAKT, KTÓRY JEST OSIĄ STRONY: na dnie Zatoki Puckiej leżą
 * pozostałości TRZECH ZATOPIONYCH PORTÓW z X–XIV wieku,
 * odkrytych przez archeologów podwodnych. Zespół z Uniwersytetu
 * Mikołaja Kopernika w Toruniu wykonał ich REKONSTRUKCJĘ 3D —
 * czyli odtworzył coś, czego nikt nigdy nie narysował, wyłącznie
 * z tego, co zostało na dnie.
 *
 * OBALONE: Puck NIE JEST najstarszym miastem polskiego wybrzeża.
 * Kołobrzeg ma prawa miejskie z 1255 r., Puck z 1348 r. Wiele
 * stron w sieci powtarza tę nieprawdę — na naszej stronie jej
 * nie będzie.
 *
 * GOSPODARKA: największym pracodawcą w mieście jest SZPITAL.
 * Nie przemysł, nie turystyka — szpital powiatowy.
 *
 * KĄT: ODTWARZANIE PRZEPISU, KTÓREGO NIKT NIE ZAPISAŁ. Babcine
 * danie „na oko", którego nie ma na papierze i którego nikt już
 * nie umie powtórzyć. Kąt wynika wprost z rekonstrukcji 3D
 * zatopionych portów: odtwarzanie czegoś, po czym zostały tylko
 * ślady.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie NIE odtworzy babcinego smaku i nie ma takiej
 *   funkcji,
 * — że to, co realnie robi, to POWTARZALNOŚĆ: kiedy raz uda się
 *   trafić, można to zapisać i odtworzyć identycznie następnym
 *   razem — a przy gotowaniu „na oko" nie można,
 * — że dochodzenie do przepisu to praca w kilku podejściach
 *   i notowanie po każdym,
 * — że część rzeczy nie da się odtworzyć nigdy, bo składniki są
 *   inne niż czterdzieści lat temu, i uczciwiej to powiedzieć,
 * — że najlepszym sposobem jest ZAPYTAĆ, DOPÓKI JEST KOGO —
 *   i to jest zdanie, które w tej sekcji musi paść.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O RYBACH — mimo że to miasto nad zatoką.
 *   Temat ryb ma w serwisie własną stronę.
 * — ŻADNYCH NAZW FIRM.
 * — NIE ROBIĘ ze szpitala tła sprzedażowego. Wspominam go raz,
 *   jako fakt o rynku pracy, i bez wchodzenia w temat zdrowia.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Danie robione raz w roku"
 * (Niemodlin) dotyczy potrawy świątecznej i tremy. „Przepis
 * rodzinny" — jeśli gdzieś padł — dotyczyłby przekazywania.
 * Tutaj chodzi o SYTUACJĘ, GDY PRZEPISU NIE MA: nikt go nie
 * zapisał, osoby, która gotowała, już nie ma albo nie umie
 * powiedzieć ile, i trzeba dojść do tego od zera.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Puck jest najstarszym miastem wybrzeża. NIE JEST.
 * — NIE PODAJĘ liczby ani dokładnej lokalizacji stanowisk
 *   podwodnych, ani nie zachęcam do nurkowania — to stanowiska
 *   archeologiczne pod ochroną.
 * — NIE PODAJĘ nazwy szpitala ani liczby zatrudnionych.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych — dla
 *   Pucka nie potwierdziłam.
 * — NIE OPOWIADAM Kaszubom o Kaszubach: zasada regionu mówi
 *   PYTAĆ, ZAMIAST ZAKŁADAĆ, i w tekście to widać.
 * — districts: miasto nie ma statutowych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 10 419 mieszkańców (31.12.2024, GUS),
 * — prawa miejskie 1348 r.,
 * — trzy zatopione porty z X–XIV w. na dnie Zatoki Puckiej,
 *   zrekonstruowane cyfrowo w 3D przez zespół z UMK w Toruniu,
 * — największym pracodawcą w mieście jest szpital powiatowy.
 */
export const PUCK: CityContent = {
  slug: "puck",
  h1: "Thermomix Puck – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Puck (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Pucku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i powiat pucki. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Puck — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pucku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pucka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Puck i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie odtworzy babcinego smaku. Ale kiedy raz trafisz — powtórzy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pucku – jak wygląda prezentacja?",
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
      id: "odtwarzanie",
      heading: "Trzy porty na dnie zatoki — czyli o odtwarzaniu przepisu, którego nikt nie zapisał",
      paragraphs: [
        "Na dnie Zatoki Puckiej leżą pozostałości trzech portów z czasów od dziesiątego do czternastego wieku. Nikt ich nigdy nie narysował — nie było takiego zwyczaju. Zespół archeologów z Uniwersytetu Mikołaja Kopernika w Toruniu odtworzył je cyfrowo, w trzech wymiarach, wyłącznie na podstawie tego, co zostało na dnie: pali, belek, śladów po konstrukcjach. Zrekonstruowali coś, po czym zostały tylko ślady.",
        "I to jest sytuacja, którą zna prawie każda rodzina — tylko w kuchni. Jest danie, które robiła babcia. Nie ma go na papierze. Nikt nie zapisał, ile czego szło, bo szło „na oko” i „do smaku”. A teraz nikt nie umie tego powtórzyć.",
        "Zacznę więc od tego, czego to urządzenie nie zrobi, bo to ważniejsze. Nie odtworzy tamtego smaku. Nie ma takiej funkcji i nikt jej nie ma. Jeżeli ktoś Wam mówi, że sprzęt „wydobędzie smak dzieciństwa”, to sprzedaje wzruszenie, nie urządzenie.",
        "A teraz to, co robi naprawdę — i co przy tym konkretnym problemie jest kluczowe. Robi POWTARZALNOŚĆ. Kiedy gotujesz na oko, każde podejście jest inne: raz gęściej, raz dłużej, raz mocniejszy ogień. Nie dowiesz się nigdy, które podejście było tym dobrym, bo nie wiesz, czym się różniło. Kiedy gotujesz z odmierzaniem i z zapisanym przebiegiem, różnica między jednym a drugim razem jest znana. I dopiero wtedy da się dochodzić.",
        "W praktyce wygląda to tak: robisz to danie, notujesz wszystko, próbujesz i zapisujesz, co było nie tak. Za drugim razem zmieniasz JEDNĄ rzecz, nie trzy. Za trzecim, czwartym — trafiasz. I od tego momentu masz to zapisane i możesz powtórzyć identycznie za rok. To nie jest magia, tylko metoda, i dokładnie tak samo pracowali ci archeolodzy.",
        "Powiem też rzecz, której się nie mówi. Części dań nie odtworzycie nigdy i nie jest to Wasza wina. Mąka jest inna niż czterdzieści lat temu. Mięso jest z innego chowu. Śmietana ma inną zawartość tłuszczu, drożdże inną siłę, pomidory inny smak. Można podejść bardzo blisko, ale nie ma po co gonić czegoś, czego już nie ma w sklepie.",
        "I najważniejsze zdanie na tej stronie, które nie ma nic wspólnego ze sprzedażą: jeżeli osoba, która to gotowała, jeszcze żyje — idźcie i ugotujcie to razem z nią. Nie pytajcie o przepis przez telefon, bo powie „no, tyle mąki, ile weźmie”. Stańcie obok z wagą i notesem i zapiszcie to, co ona robi rękami. Potem będzie za późno i żaden sprzęt tego nie nadrobi.",
        "Dodam jeszcze jedno, bo jesteśmy na Kaszubach: nie będę Wam opowiadać, jak się tu gotuje. Wy wiecie lepiej. Ja pytam i notuję.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pucku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie takie rodzinne danie bez przepisu — powiedzcie przy umawianiu, co to jest. Spróbujemy podejść do niego razem na spotkaniu, bez obiecywania, że wyjdzie za pierwszym razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pucku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla puckiej rodziny",
      paragraphs: [
        "Puck liczy nieco ponad dziesięć tysięcy mieszkańców i jest miastem powiatowym nad Zatoką Pucką; prawa miejskie ma od 1348 roku. Dla porządku, bo w sieci powtarza się to bardzo często: Puck nie jest najstarszym miastem polskiego wybrzeża — Kołobrzeg dostał prawa miejskie prawie sto lat wcześniej. Największym pracodawcą w mieście nie jest ani przemysł, ani turystyka, tylko szpital powiatowy, co dużo mówi o tym, jak wygląda tutejszy tydzień pracy i o której się z niej wraca.",
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

  districtsHeading: "Do których części Pucka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do starówki, do osiedli przy porcie i do zabudowy od strony Swarzewa — oraz do miejscowości gminy wiejskiej Puck. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na statutowe osiedla, więc przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Puck też przyjadę",
  nearbyParagraphs: [
    "Władysławowo, Reda, Rumia, Wejherowo, Jastarnia, Hel i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Władysławowo", "Reda", "Rumia", "Wejherowo", "Jastarnia", "Hel"],

  about: blokOMnie("do Pucka", "w Pucku i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pucka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy wiejskiej Puck. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pucku"),
    {
      question: "Odtworzy mi babciny przepis?",
      answer:
        "Nie. Nie ma takiej funkcji i nikt jej nie ma. To, co robi naprawdę, to powtarzalność: kiedy raz uda się trafić, masz to zapisane i odtworzysz identycznie za rok. Przy gotowaniu na oko nie odtworzysz, bo nie wiesz, czym poprzedni raz się różnił.",
    },
    {
      question: "Jak w praktyce dojść do takiego przepisu?",
      answer:
        "W kilku podejściach, notując po każdym i zmieniając za każdym razem jedną rzecz, a nie trzy. Zwykle trafia się za trzecim albo czwartym. I najlepsza rada, jaką mam: jeśli osoba, która to gotowała, jeszcze żyje — ugotujcie to razem z nią, z wagą i notesem w ręku.",
    },
    {
      question: "Czy zawsze się uda?",
      answer:
        "Nie. Część dań nie wyjdzie nigdy tak samo, bo składniki są dziś inne — inna mąka, inna śmietana, inne mięso, inne pomidory. Można podejść bardzo blisko, ale wolę to powiedzieć wprost, niż obiecywać smak dzieciństwa.",
    },
  ],

  geo: { lat: 54.7178, lng: 18.4103 },
};
