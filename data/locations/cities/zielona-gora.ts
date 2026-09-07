import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * ZIELONA GÓRA — miasto, które dzieli funkcję stolicy województwa
 * z Gorzowem: sejmik jest tutaj, wojewoda tam. Jedno miejsce pełni
 * dwie role naraz i żadnej w całości.
 *
 * UWAGA NA HAK: Zielona Góra kojarzy się przede wszystkim z winoroślą,
 * ale TEN KĄT JEST JUŻ ZAJĘTY PRZEZ SULECHÓW — razem z żelazną zasadą
 * „ani słowa o alkoholu". Ta strona nie dotyka tematu w ogóle: ani
 * winnic, ani święta wina, ani niczego w tę stronę.
 *
 * KĄT: dom, w którym ktoś pracuje zdalnie. Sytuacja, która w ostatnich
 * latach stała się codziennością, a w serwisie nie ma jej nigdzie.
 *
 * CO SEKCJA MA POWIEDZIEĆ:
 * — co realnie się zmienia: kuchnia bywa miejscem pracy w środku dnia,
 *   obiad jest „w domu", ale czasu wcale nie ma więcej,
 * — gdzie urządzenie pomaga naprawdę: może pracować w trakcie rozmowy,
 *   bo nie wymaga obecności,
 * — gdzie NIE pomaga i trzeba to powiedzieć.
 *
 * TWARDE GRANICE:
 * — HAŁAS tylko w jednym zdaniu, na marginesie. Głośność jest kątem
 *   Pruszkowa i nie wolno go tu przejmować.
 * — ŻADNYCH PORAD ZDROWOTNYCH ANI DIETETYCZNYCH. Zdanie o podjadaniu
 *   dotyczy zachowania, nie zdrowia, i nie zawiera żadnej rady.
 * — ANI SŁOWA O ALKOHOLU (patrz wyżej).
 *
 * ROZGRANICZENIE. Knurów — jedzenie zabierane do pracy. Zabrze — obiad
 * o nietypowej porze. Tutaj chodzi o dom, który przez osiem godzin
 * dziennie jest jednocześnie biurem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Zielona Góra dzieli funkcje stolicy województwa lubuskiego z Gorzowem
 *   Wielkopolskim.
 */
export const ZIELONA_GORA: CityContent = {
  slug: "zielona-gora",
  h1: "Thermomix Zielona Góra – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zielona Góra — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Zielonej Górze: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zielona Góra — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zielonej Górze. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zielonej Góry z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw w jego granicach.",

  highlights: highlightyStandardowe("Zielona Góra i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zielonej Górze – jak wygląda prezentacja?",
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
      id: "praca-z-domu",
      heading: "Miasto, które pełni dwie role naraz — i kuchnia, która robi to samo",
      paragraphs: [
        "Zielona Góra dzieli funkcję stolicy województwa z Gorzowem: jedno miejsce pełni dwie role i żadnej w całości. Wykorzystam to do sytuacji, która w ostatnich latach stała się w wielu domach codziennością, a której nie opisuje żaden materiał o tym sprzęcie: ktoś pracuje zdalnie i ta sama kuchnia przez osiem godzin dziennie jest biurem.",
        "Zacznę od rzeczy, która zaskakuje najbardziej, bo jest odwrotna do oczekiwań. Praca z domu wcale nie daje więcej czasu na gotowanie. Daje bliskość kuchni, a to nie to samo. Przerwa trwa tyle, ile trwała w biurze, tylko teraz zamiast wyjścia po kanapkę trzeba w tym czasie ugotować, zjeść i posprzątać — i bardzo szybko kończy się to tym, że w kółko powstaje ta sama, najprostsza rzecz.",
        "I tu urządzenie robi dokładnie to, do czego się nadaje. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc nie wymaga stania nad garnkiem — może pracować w tle podczas rozmowy albo w trakcie czegoś, co i tak trzeba było zrobić. W praktyce najczęściej wygląda to tak, że coś wstawia się przed południem, a o wpół do drugiej jest po prostu gotowe i przerwa zostaje przerwą.",
        "Jedno zastrzeżenie od razu, żeby nie było przykrej niespodzianki: przy rozdrabnianiu urządzenie jest głośne. Krótko, ale wyraźnie — więc nie w trakcie spotkania z włączonym mikrofonem. Samo gotowanie jest ciche i to ono trwa najdłużej.",
        "Drugie zastrzeżenie, uczciwe do końca: żaden sprzęt nie zmieni tego, ile razy w ciągu dnia otwiera się lodówkę, kiedy stoi się cztery kroki od niej. To jest kwestia dnia pracy, a nie kuchni, i nie zamierzam sprzedawać Wam urządzenia jako rozwiązania czegoś, czego nie rozwiązuje.",
        "Rzecz praktyczna na koniec, wynikająca wprost z tego, że kuchnia jest biurem: blat jest u Was towarem deficytowym bardziej niż gdzie indziej. Warto pomyśleć o miejscu dla urządzenia zanim przyjedzie, a nie po — i to jest jedna z tych rzeczy, które najłatwiej obejrzeć na spotkaniu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zielonej Górze?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli pracujesz z domu, powiedz przy umawianiu, o której masz spokojne okno — dopasuję się do niego.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zielonej Górze"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zielonogórskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — czasem ta, która właśnie zamknęła laptopa przy tym samym stole.",
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

  districtsHeading: "Do których części Zielonej Góry dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw w jego granicach, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Jędrzychów",
    "Chynów",
    "Piastowskie",
    "Słoneczne",
    "Zastalowskie",
    "Racula",
    "Ochla",
    "Łężyca",
    "Zawada",
    "Jany",
    "Przylep",
  ],

  nearbyHeading: "Poza Zieloną Górę też przyjadę",
  nearbyParagraphs: [
    "Sulechów, Nowa Sól, Czerwieńsk i Świebodzin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sulechów", "Nowa Sól", "Czerwieńsk", "Świebodzin", "Krosno Odrzańskie", "Gubin"],

  about: blokOMnie("do Zielonej Góry", "w Zielonej Górze i okolicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zielonej Góry bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw w jego granicach. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zielonej Górze"),
    {
      question: "Pracuję z domu. Czy to się przy tym sprawdza?",
      answer:
        "Sprawdza się dobrze z jednego powodu: danie gotuje się bez pilnowania, więc może pracować w tle. Najczęściej wygląda to tak, że coś wstawia się przed południem i o wpół do drugiej jest gotowe, więc przerwa zostaje przerwą, a nie zamienia się w gotowanie i sprzątanie.",
    },
    {
      question: "Czy da się tego używać w trakcie spotkania online?",
      answer:
        "Samo gotowanie jest ciche i nie przeszkadza. Rozdrabnianie jest głośne — krótko, ale wyraźnie — więc tę część lepiej zrobić przed włączeniem mikrofonu.",
    },
  ],

  geo: { lat: 51.9356, lng: 15.5062 },
};
