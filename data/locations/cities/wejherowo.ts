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
 * WEJHEROWO — miasto u wrót Kaszub, połączone z Trójmiastem szybką koleją
 * miejską; codziennie dojeżdża stąd do pracy bardzo wiele osób.
 *
 * KĄT: zakupy z dowozem. To jest jedyne miejsce w serwisie na zjawisko,
 * które zmieniło domowe gotowanie bardziej niż jakiekolwiek urządzenie,
 * a nie ma o nim ani słowa: ZAMAWIANIE JEDZENIA DO DOMU ZAMIAST CHODZENIA
 * PO SKLEPACH.
 *
 * SEKCJA MA POWIEDZIEĆ RZECZ NIEOCZYWISTĄ: dowóz zmienia nie tylko to,
 * GDZIE się kupuje, ale i CO. Znika kupowanie na oko i pod wpływem chwili,
 * a pojawia się lista układana z góry — czyli dokładnie ten warunek,
 * przy którym gotowanie w domu w ogóle się utrzymuje.
 *
 * I CZĘŚĆ UCZCIWA: dowóz ma wadę, o której się nie mówi — warzywa
 * i owoce przychodzą takie, jakie ktoś wybrał za Was.
 *
 * ROZGRANICZENIE. Czeladź ma „całe zakupy w jedną sobotę", Opole „małe
 * zakupy częściej", Pabianice „ile da się unieść". Wszystkie trzy mówią
 * o chodzeniu do sklepu. Tutaj chodzi o sytuację, w której do sklepu
 * nie idzie się wcale.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Wejherowo łączy z Trójmiastem szybka kolej miejska, a wiele osób
 *   stąd dojeżdża do pracy.
 */
export const WEJHEROWO: CityContent = {
  slug: "wejherowo",
  h1: "Thermomix Wejherowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Wejherowo — prezentacja i cena",
  seoDescription:
    "Thermomix w Wejherowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wejherowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wejherowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wejherowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Wejherowo i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wejherowie – jak wygląda prezentacja?",
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
      id: "zakupy-z-dowozem",
      heading: "Kiedy do sklepu nie idzie się wcale",
      paragraphs: [
        "Z Wejherowa codziennie dojeżdża do pracy tłum ludzi, a wieczorem wraca — i coraz więcej z nich nie zahacza już po drodze o żaden sklep, bo zakupy przyjeżdżają same. Ta zmiana wpłynęła na domowe gotowanie mocniej niż jakiekolwiek urządzenie i wypada ją opisać, bo nikt tego nie robi.",
        "Rzecz najważniejsza: dowóz zmienia nie tylko to, gdzie się kupuje, ale i co. Znika kupowanie na oko i pod wpływem chwili — te trzy rzeczy dorzucone przy kasie, bo akurat wpadły w oko. Zamiast tego jest lista układana z góry, w spokoju, zwykle raz w tygodniu.",
        "I to jest właśnie ten warunek, przy którym gotowanie w domu w ogóle się utrzymuje. Bo domowe obiady nie kończą się z braku chęci ani z braku sprzętu, tylko z powodu jednego brakującego składnika o dwudziestej. Kto ma listę, ten ma w szafce to, z czego zamierzał gotować, i wtedy urządzenie na blacie ma po co stać.",
        "Praktycznie działa to tak: jeśli macie w domu sprzęt, który dobrze robi rzeczy z produktów suchych i tanich — kasze, ryże, soczewicę, mąkę, mrożonki, puszkowane pomidory — to dokładnie te rzeczy zamawia się najwygodniej z dowozem, bo są ciężkie i niepsujące się. Cotygodniowa dostawa i tydzień obiadów układają się w jedną całość, którą planuje się raz.",
        "Jest natomiast wada, o której się nie mówi, i wolę ją nazwać: warzywa i owoce przychodzą takie, jakie ktoś wybrał za Was. Pomidor na sos i pomidor na kanapkę to nie jest ta sama rzecz, a przy dowozie nie macie na to wpływu. Stąd u wielu osób układ mieszany — ciężkie i suche z dowozem, świeże z targu albo z małego sklepu po drodze.",
        "Powiedzcie mi przy umawianiu, co macie w szafce po ostatniej dostawie. Ugotujemy z tego, zamiast z produktów, które przywiozłabym pod przepis.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz w lodówce" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wejherowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wejherowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wejherowskiej rodziny",
      paragraphs: [
        "Gdy dorośli dojeżdżają do pracy, dzień kończy się po powrocie, a obiad powstaje z tego, co jest w domu — i robi go zwykle jedna osoba.",
        "Thermomix pomaga tym, że z prostych, tanich produktów robi porządne danie i nie wymaga obecności. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których części Wejherowa i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Śmiechowo",
    "Nanice",
    "Cegielnia",
    "Fenikowo",
    "Osiedle Kaszubskie",
    "Bolszewo",
    "Gościcino",
    "Orle",
    "Gowino",
  ],

  nearbyHeading: "Poza Wejherowo też przyjadę",
  nearbyParagraphs: [
    "Reda, Rumia, Puck i Żukowo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Reda", "Rumia", "Puck", "Żukowo", "Lębork", "Kartuzy"],

  about: blokOMnie("do Wejherowa", "w Wejherowie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wejherowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Wejherowie"),
    {
      question: "Zamawiamy zakupy z dowozem. Czy to coś zmienia?",
      answer:
        "Zmienia na korzyść. Przy dowozie kupuje się z listy układanej w spokoju, a nie na oko przy kasie — a domowe obiady kończą się najczęściej przez jeden brakujący składnik o dwudziestej. Produkty suche i ciężkie, z których urządzenie robi najwięcej, zamawia się najwygodniej właśnie tak.",
    },
    {
      question: "Co ugotować na spotkaniu?",
      answer:
        "To, co macie w szafce po ostatniej dostawie — powiedz mi przy umawianiu, co to jest. Wolę ugotować z Waszych produktów niż przywieźć składniki pod wybrany przepis.",
    },
  ],

  geo: { lat: 54.6058, lng: 18.2364 },
};
