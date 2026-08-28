import type { DistrictContent } from "./typy";

/**
 * WZGÓRZA KRZESŁAWICKIE (XVII) — dzielnica o układzie archipelagu:
 * niewielkie osiedla i dawne wsie rozdzielone polami i terenami zielonymi.
 *
 * Fakty potwierdzone i użyte:
 * — obszary: os. Na Stoku, os. Na Wzgórzach, os. Zielone, os. Kombatantów
 *   (część), Krzesławice, Grębałów, Lubocza, Wadów, Węgrzynowice,
 *   Kantorowice, Dłubnia, Łuczanowice,
 * — os. Na Stoku i Na Wzgórzach — zabudowa niska i średniowysoka,
 *   luźniejsza niż w sąsiednich Bieńczycach czy Mistrzejowicach,
 * — Krzesławice, Lubocza, Wadów, Łuczanowice, Kantorowice, Węgrzynowice
 *   to dawne wsie o zabudowie jednorodzinnej, włączone do Krakowa,
 * — fort Krzesławice i dworek Jana Matejki jako punkty orientacyjne,
 * — brak strefy płatnego parkowania,
 * — dojazd autobusami; tramwaj kończy bieg w sąsiedniej Nowej Hucie.
 */
export const KRAKOW_WZGORZA_KRZESLAWICKIE: DistrictContent = {
  slug: "krakow-wzgorza-krzeslawickie",
  urlPath: "/thermomix/krakow/wzgorza-krzeslawickie",
  nazwa: "Wzgórza Krzesławickie",
  miejscownik: "Wzgórzach Krzesławickich",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Wzgórza Krzesławickie — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Wzgórza Krzesławickie — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix na Wzgórzach Krzesławickich: bezpłatna prezentacja TM7 u Ciebie w kuchni — os. Na Stoku, Na Wzgórzach, Grębałów, Lubocza. Tel. 517 185 691.",

  lead:
    "Dojeżdżam na osiedla Na Stoku, Na Wzgórzach i Zielone oraz do Krzesławic, Grębałowa, Luboczy, Wadowa i Łuczanowic. Przywożę Thermomix TM7 i gotujemy razem u Ciebie. Prezentacja jest bezpłatna.",

  osiedla: [
    "os. Na Stoku",
    "os. Na Wzgórzach",
    "os. Zielone",
    "Krzesławice",
    "Grębałów",
    "Lubocza",
    "Wadów",
    "Łuczanowice",
    "Kantorowice",
    "Węgrzynowice",
    "Dłubnia",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Osiedle albo dawna wieś — dwa różne spotkania",
      paragraphs: [
        "Ta dzielnica wygląda jak archipelag: kilka niewielkich osiedli i kilka dawnych wsi, rozdzielonych polami i zielenią. Na Stoku, Na Wzgórzach i Zielone to zabudowa blokowa, ale luźniejsza i niższa niż w sąsiednich Bieńczycach — z osobną, zwykle wąską kuchnią. Krzesławice, Grębałów, Lubocza, Wadów, Łuczanowice i Kantorowice to domy jednorodzinne z dużymi kuchniami.",
        "W bloku spotkanie kręci się wokół miejsca na blacie i liczby naczyń do umycia. W domu — wokół gotowania dla większej liczby osób, przetworów i tego, co robić z warzywami, kiedy przychodzi ich naraz za dużo. Oba są sensowne, tylko przygotowuję się do nich inaczej.",
        "W starszych blokach warto pamiętać o jednym: urządzenie pobiera około tysiąca pięciuset watów, a obwód kuchenny bywa zabezpieczony na szesnaście amperów. Nie uruchamiam go wtedy razem z czajnikiem i piekarnikiem — i to cała rzecz, którą trzeba wiedzieć.",
      ],
    },
    {
      id: "dojazd",
      heading: "Najłatwiejsze parkowanie w całym Krakowie",
      paragraphs: [
        "Powiem to bez owijania: to prawdopodobnie najprostsza dzielnica Krakowa, jeśli chodzi o dojazd pod adres. Strefy płatnego parkowania nie ma, osiedla mają luźny układ, a w dawnych wsiach po prostu podjeżdża się pod dom. Nie pamiętam tu spotkania, przed którym musiałabym krążyć w poszukiwaniu miejsca.",
        "Ceną za to jest odległość i komunikacja. Tramwaj kończy bieg w Nowej Hucie, więc dojazd komunikacją miejską opiera się na autobusach i trwa. Mnie to nie dotyczy — przyjeżdżam autem z urządzeniem i składnikami, a za dojazd nic nie doliczam, bez względu na to, jak daleko od centrum mieszkasz.",
        "Przy umawianiu wystarczy nazwa osiedla i numer bloku albo adres domu. W blokach przyda się jeszcze piętro i informacja o windzie.",
      ],
    },
    {
      id: "sasiedzi",
      heading: "Tutaj wszystko idzie przez sąsiadów",
      paragraphs: [
        "W małych osiedlach i dawnych wsiach ludzie się znają, a najlepszą rekomendacją nie jest reklama, tylko czyjeś zdanie zza płotu albo z klatki. Widzę to po tym, jak wyglądają zgłoszenia z tej części Krakowa: rzadko przychodzą pojedynczo.",
        "Dlatego dwie rzeczy, które robię tu chętniej niż gdzie indziej. Po pierwsze, spotkanie może być dla większej grupy — sąsiadka, siostra, koleżanka. Wtedy gotujemy więcej i dobieram przepisy tak, żeby starczyło dla wszystkich. Po drugie, nie próbuję niczego domykać na siłę, bo w takim miejscu jedno niezręczne spotkanie zamyka drogę do całej ulicy.",
        "Jeśli chcesz zaprosić kogoś jeszcze, powiedz przy umawianiu, ile osób będzie. Wezmę więcej składników i dobiorę dania pod tę liczbę.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy dojeżdżasz do Luboczy, Wadowa i Łuczanowic?",
      answer:
        "Tak, do wszystkich części dzielnicy, także tych najdalszych. Dojazd jest bezpłatny i nie zależy od odległości.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki?",
      answer:
        "Jak najbardziej i tutaj często tak to wygląda. Powiedz tylko, ile osób będzie, żebym wzięła więcej składników i dobrała przepisy pod większą grupę.",
    },
    {
      question: "Czy trzeba się gdzieś dojechać, żeby zobaczyć urządzenie?",
      answer:
        "Nie. Przyjeżdżam z Thermomixem i składnikami do Ciebie, gotujemy w Twojej kuchni i na Twoim blacie. To zresztą jedyny sposób, żeby sprawdzić, czy realnie się u Ciebie mieści.",
    },
  ],

  geo: { lat: 50.0906, lng: 20.0644 },
};
