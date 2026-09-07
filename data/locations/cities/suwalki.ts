import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * SUWAŁKI — miasto na północnym skraju Podlasia, w miejscu, gdzie
 * notuje się najniższe temperatury w Polsce.
 *
 * KĄT: zupa. Najzimniejsze miasto w kraju jest jedynym właściwym miejscem
 * na danie, które w polskim domu jest najczęstsze, a któremu w całym
 * serwisie nie poświęcono osobnej strony: ZUPA — i to, co urządzenie
 * z nią robi naprawdę.
 *
 * SEKCJA MA BYĆ KONKRETNA I ROZSTRZYGNĄĆ TRZY RZECZY:
 * — dlaczego zupa jest tu najlepszym możliwym testem przed zakupem
 *   (bo to jedyne danie, które w tym urządzeniu robi się od początku
 *   do końca: podsmażenie, gotowanie i miksowanie w jednym naczyniu),
 * — czym różni się od zupy z garnka (nie odparowuje, więc płynu daje się
 *   mniej — to samo, o czym mówi strona Inowrocławia, ale tu podane
 *   od strony konsystencji, a nie soli),
 * — czego NIE zrobi: nie ugotuje dwudziestu litrów i nie zrobi rosołu
 *   lepszego niż garnek stojący pół dnia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w okolicy Suwałk notuje się najniższe temperatury w Polsce.
 */
export const SUWALKI: CityContent = {
  slug: "suwalki",
  h1: "Thermomix Suwałki – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Suwałki — prezentacja i cena",
  seoDescription:
    "Thermomix w Suwałkach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Suwałki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Suwałkach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Suwałk z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Suwałki i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Suwałkach – jak wygląda prezentacja?",
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
      id: "zupa",
      heading: "Najzimniejsze miasto w Polsce — więc porozmawiajmy o zupie",
      paragraphs: [
        "W okolicy Suwałk notuje się najniższe temperatury w kraju, a to sprawia, że zupa jest tu daniem podstawowym przez pół roku. Skoro tak, to właśnie tutaj wypada napisać osobno o rzeczy, którą to urządzenie robi najlepiej i którą warto sprawdzić przed zakupem.",
        "Zupa jest jedynym daniem, które powstaje w tym urządzeniu od początku do końca. Podsmażenie cebuli i włoszczyzny, dolanie wody, gotowanie z ustawioną temperaturą, a na końcu — jeśli ma być krem — zmiksowanie w tym samym naczyniu. Nie ma przekładania, nie ma blendera, nie ma sitka i nie ma garnka do domycia. Właśnie dlatego proszę na spotkaniu, żeby zrobić zupę, a nie coś efektownego: bo to jest jedyny test, w którym widać całą drogę od surowych warzyw do talerza.",
        "Jest jedna różnica wobec garnka, którą trzeba znać od pierwszego dnia. W zamkniętym naczyniu nic nie odparowuje, więc zupa nie gęstnieje w trakcie gotowania — wychodzi taka, jaką ją nastawicie. Przenosząc przepis z garnka, trzeba dać mniej wody, bo inaczej wyjdzie rzadsza niż zwykle. To brzmi jak drobiazg, dopóki nie zrobi się pierwszego krupniku.",
        "Dobrze wychodzą tu wszystkie zupy warzywne i kremy — pomidorowa, ogórkowa, dyniowa, brokułowa, grochówka, krupnik, żurek. Bardzo dobrze wychodzą też wywary, które potem stoją w lodówce jako baza na kilka dni.",
        "A teraz to, czego zupa w tym urządzeniu nie zrobi. Nie ugotujecie dwudziestu litrów — naczynie mieści około dwóch, więc na większą rodzinę robi się je dwa razy albo w garnku. I nie zrobi rosołu lepszego niż garnek, który stoi na małym ogniu pół dnia; rosół wyjdzie dobry, ale to jest akurat ta jedna zupa, w której czas robi więcej niż technika.",
        "Jeżeli macie swoją zupę, którą robicie od lat — powiedzcie mi przy umawianiu jaką. Zrobimy ją razem i porównacie sami, zamiast wierzyć mi na słowo.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Suwałkach?",
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
    sekcjaCena("w Suwałkach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla suwalskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności i że zupa powstaje w nim od początku do końca w jednym naczyniu. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem.",
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

  districtsHeading: "Do których części Suwałk i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Północ",
    "Hańcza",
    "Kamena",
    "Osiedle Piastowskie",
    "Zarzecze",
    "Papiernia",
    "Czarnoziem",
    "Krzywólka",
    "Nowa Wieś",
  ],

  nearbyHeading: "Poza Suwałki też przyjadę",
  nearbyParagraphs: [
    "Augustów, Sejny, Olecko i Rączki są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Augustów", "Sejny", "Olecko", "Rączki", "Gołdap"],

  about: blokOMnie("do Suwałk", "w Suwałkach i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Suwałk bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Suwałkach"),
    {
      question: "Dlaczego proponujesz na spotkaniu akurat zupę?",
      answer:
        "Bo to jedyne danie, które powstaje w tym urządzeniu od początku do końca: podsmażenie, gotowanie i zmiksowanie w jednym naczyniu, bez blendera, sitka i garnka do domycia. Widać całą drogę od surowych warzyw do talerza — a to jest lepszy test niż jakiekolwiek efektowne danie.",
    },
    {
      question: "Czy zupa wyjdzie taka sama jak z garnka?",
      answer:
        "Prawie, z jedną różnicą: w zamkniętym naczyniu nic nie odparowuje, więc zupa nie gęstnieje w trakcie. Przenosząc przepis z garnka, trzeba dać mniej wody. Nie ugotujesz też dwudziestu litrów — naczynie mieści około dwóch. I rosół z garnka stojącego pół dnia pozostaje nie do pobicia; to ta jedna zupa, w której czas robi więcej niż technika.",
    },
  ],

  geo: { lat: 54.1017, lng: 22.9289 },
};
