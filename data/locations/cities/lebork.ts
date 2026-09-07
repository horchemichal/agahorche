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
 * LĘBORK — miasto krzyżackiego rodowodu nad Łebą, gdzie mury, kościół
 * i późniejsza zabudowa pochodzą z różnych epok i różnych rządów.
 * To samo miejsce wygląda inaczej zależnie od tego, kto o nim opowiada.
 *
 * KĄT: ktoś bliski to ma i mówi, że się zawiódł. Negatywna opinia
 * z rodziny albo od znajomej — sytuacja, której żaden materiał
 * sprzedażowy nie dotyka, bo wygodniej jest udawać, że nie istnieje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — nie podważam cudzego zdania i nie tłumaczę, że ktoś „źle używał”,
 * — warto dopytać, CO konkretnie zawiodło, bo za jednym słowem
 *   „rozczarowanie” kryją się bardzo różne rzeczy,
 * — trzy sytuacje, które widzę najczęściej i które są prawdziwe:
 *   kupno pod cudzy zapał, oczekiwanie, że urządzenie zacznie gotować
 *   za kogoś, i sprzęt kupiony do domu, w którym nikt nie gotuje,
 * — i uczciwie: czasem wniosek brzmi „to nie jest dla Was” i to też
 *   jest dobra odpowiedź.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO PODWAŻANIA CUDZYCH DOŚWIADCZEŃ ani sugerowania, że osoba
 *   niezadowolona jest niekompetentna. To byłoby podłe i nieprawdziwe.
 * — ŻADNYCH TWIERDZEŃ O AWARYJNOŚCI, statystykach zwrotów ani o tym,
 *   ile osób jest zadowolonych. Nie mam takich danych.
 * — ŻADNEGO OBGADYWANIA konkretnych osób ani innych przedstawicieli.
 *
 * ROZGRANICZENIE. Rumia mówi o poleceniu POZYTYWNYM („u koleżanki
 * działa"), Żyrardów o zapale, który opada u samej klientki, Starogard
 * Gdański o szafce z nieużywanym sprzętem. Tutaj chodzi o CUDZĄ
 * NEGATYWNĄ OPINIĘ jako przeszkodę w decyzji.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Lębork ma krzyżacki rodowód i zabudowę z różnych epok, leży nad Łebą.
 */
export const LEBORK: CityContent = {
  slug: "lebork",
  h1: "Thermomix Lębork – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lębork — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Lęborku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lębork — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lęborku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lęborka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Lębork i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Cudze rozczarowanie warto potraktować poważnie, a nie odkręcać.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lęborku – jak wygląda prezentacja?",
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
      id: "znajoma-sie-zawiodla",
      heading: "Miasto opowiadane na kilka sposobów — i znajoma, która się zawiodła",
      paragraphs: [
        "Lębork ma mury z czasów krzyżackich, kościół z innej epoki i zabudowę z jeszcze innej — zależnie od tego, kto oprowadza, wychodzi z tego zupełnie inne miasto. Wykorzystam to do sytuacji, której nie dotyka żaden materiał sprzedażowy, bo wygodniej udawać, że nie istnieje: ktoś bliski to ma i mówi, że się zawiódł.",
        "Zacznę od rzeczy najważniejszej. Nie zamierzam podważać jej zdania ani tłumaczyć, że pewnie źle używała. Byłoby to podłe wobec osoby, której tu nie ma i która nie może się odezwać, a przy tym najczęściej po prostu nieprawdziwe. Jeśli ktoś wydał duże pieniądze i uważa, że nie było warto, to jest jego doświadczenie i ma do niego pełne prawo.",
        "Warto natomiast dopytać o jedną rzecz: co konkretnie zawiodło. Pod słowem „rozczarowanie” kryją się bardzo różne historie, a od tego, która to jest, zależy, czy u Was byłoby tak samo. To pytanie należy zadać jej, nie mnie — ja mogę tylko powiedzieć, co widuję najczęściej.",
        "Pierwsza sytuacja: kupno pod cudzy zapał. Ktoś kupił, bo siostra albo koleżanka była zachwycona, a sam nigdy tego nie chciał. Wtedy sprzęt jest w porządku, tylko decyzja nie była jego. Druga: oczekiwanie, że urządzenie zacznie gotować za kogoś. Ono zdejmuje pilnowanie i mieszanie, ale nie decyduje, co dziś na obiad, i nie robi zakupów — jeśli obiecano coś więcej, rozczarowanie było wpisane w zakup od początku. Trzecia jest najprostsza: dom, w którym po prostu się nie gotuje i nie miało się to zmienić.",
        "Żadna z tych trzech nie jest zarzutem wobec kogokolwiek. To są zwyczajne pomyłki w decyzji, zdarzają się przy każdym większym zakupie i mnie też się zdarzyło kupić coś, co okazało się nietrafione.",
        "Dlatego u Was chcę zrobić inaczej. Na spotkaniu ugotujemy Wasze zwykłe danie, nie efektowny popis, i powiem uczciwie, czego to nie zrobi. Jeśli po tym wyjdzie, że u Was byłoby podobnie jak u Waszej znajomej — powiem to wprost i nie będę namawiać. Wolę nie sprzedać niż sprzedać komuś sprzęt, który za pół roku stoi w szafce.",
      ],
      links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety — uczciwie" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lęborku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli ktoś w rodzinie odradza Wam ten zakup, powiedzcie mi to przy umawianiu — chętnie zajmę się właśnie tym, zamiast to pomijać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lęborku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lęborskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Lęborka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Lubowidz",
    "Osiedle Sportowe",
    "Osiedle Wschód",
    "Nowy Świat",
    "Krzywoustego",
    "Mostnika",
  ],

  nearbyHeading: "Poza Lębork też przyjadę",
  nearbyParagraphs: [
    "Łeba, Bytów, Wejherowo i Nowa Wieś Lęborska są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łeba", "Bytów", "Wejherowo", "Słupsk", "Gdynia", "Kartuzy"],

  about: blokOMnie("do Lęborka", "w Lęborku i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Lęborka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Lęborku"),
    {
      question: "Znajoma to ma i mówi, że się zawiodła. Co na to powiesz?",
      answer:
        "Nie będę podważać jej zdania ani tłumaczyć, że źle używała — to jej doświadczenie i ma do niego prawo. Warto tylko dopytać ją, co konkretnie zawiodło, bo pod jednym słowem kryją się bardzo różne historie. Najczęściej widuję trzy: kupno pod cudzy zapał, oczekiwanie, że urządzenie zacznie gotować za kogoś, i dom, w którym po prostu się nie gotuje.",
    },
    {
      question: "A jeśli po spotkaniu wyjdzie, że to nie dla nas?",
      answer:
        "To powiem wprost i nie będę namawiać. Wolę nie sprzedać niż sprzedać komuś sprzęt, który za pół roku stoi w szafce — takie zakupy wracają potem jako żal, także do mnie.",
    },
  ],

  geo: { lat: 54.5389, lng: 17.7500 },
};
