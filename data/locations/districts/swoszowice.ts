import type { DistrictContent } from "./typy";

/**
 * SWOSZOWICE (X) — największa powierzchniowo dzielnica Krakowa
 * i jednocześnie jedna z najsłabiej zaludnionych.
 *
 * Fakty potwierdzone i użyte:
 * — obszary: Swoszowice, Kliny (Kliny Zacisze, Kliny Borkowskie),
 *   Opatkowice, Kosocice, Rajsko, Soboniowice, Wróblowice, Zbydniowice,
 *   Jugowice, Lusina (część), Sidzina, Skotniki,
 * — Swoszowice to jedyne uzdrowisko w granicach Krakowa — wody siarczkowe,
 *   park zdrojowy, zabytkowa infrastruktura uzdrowiskowa,
 * — Kliny to obszar intensywnej zabudowy deweloperskiej po 2000 roku,
 * — w pozostałych częściach dominuje zabudowa jednorodzinna o wiejskim
 *   rodowodzie,
 * — brak strefy płatnego parkowania,
 * — brak tramwaju; dojazd autobusami i koleją aglomeracyjną (przystanek
 *   Kraków Swoszowice),
 * — dzielnica graniczy z gminami Świątniki Górne, Mogilany i Wieliczka.
 */
export const KRAKOW_SWOSZOWICE: DistrictContent = {
  slug: "krakow-swoszowice",
  urlPath: "/thermomix/krakow/swoszowice",
  nazwa: "Swoszowice",
  miejscownik: "Swoszowicach",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Swoszowice i Kliny — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Swoszowice — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix w Swoszowicach i na Klinach: bezpłatna prezentacja TM7 u Ciebie w kuchni — Opatkowice, Sidzina, Skotniki, Rajsko. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam do Swoszowic, na Kliny, do Opatkowic, Sidziny, Skotnik i dalszych sołectw dzielnicy. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna.",

  osiedla: [
    "Kliny",
    "Kliny Zacisze",
    "Kliny Borkowskie",
    "Swoszowice",
    "Opatkowice",
    "Sidzina",
    "Skotniki",
    "Rajsko",
    "Kosocice",
    "Soboniowice",
    "Wróblowice",
    "Zbydniowice",
    "Jugowice",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Kliny to jedno, a Kosocice zupełnie co innego",
      paragraphs: [
        "To największa powierzchniowo dzielnica Krakowa i najbardziej rozstrzelona. Kliny — Zacisze i Borkowskie — to zabudowa deweloperska stawiana po dwutysięcznym roku: aneks kuchenny otwarty na salon, nowa instalacja, często wyspa albo półwysep. Kosocice, Soboniowice, Wróblowice czy Zbydniowice to dawne wsie i domy jednorodzinne, gdzie kuchnia bywa większa niż niejeden salon w bloku.",
        "W nowym mieszkaniu na Klinach spotkanie wygląda jak w każdym nowym budownictwie: ciągły blat, miejsce, żeby stanąć obok siebie, żadnego tematu z obwodem. W domu w Rajsku czy Wróblowicach rozmowa idzie o zupełnie innych rzeczach — o gotowaniu dla większej liczby osób, o przetworach, o tym, co się robi z warzywami z własnego ogrodu.",
        "Dlatego przy umawianiu pytam o konkretną miejscowość i adres, nie o dzielnicę. Od tego zależy, jakie przepisy biorę.",
      ],
      bullets: [
        "Kliny Zacisze i Borkowskie — nowe budownictwo, aneks kuchenny",
        "Swoszowice, Opatkowice, Sidzina, Skotniki — mieszanie: domy i starsza zabudowa",
        "Kosocice, Soboniowice, Wróblowice, Zbydniowice, Rajsko — domy, duże kuchnie",
      ],
    },
    {
      id: "dojazd",
      heading: "Bez tramwaju, ale i bez szukania miejsca",
      paragraphs: [
        "Tramwaju tu nie ma i to jest realna niedogodność dla mieszkańców — dojazd do centrum opiera się na autobusach, kolei aglomeracyjnej i przede wszystkim na samochodzie. Dla mnie jest to akurat najprostsza dzielnica w całym Krakowie: strefy płatnego parkowania nie ma, a pod większością adresów po prostu się podjeżdża.",
        "Wąskim gardłem bywa Zakopianka w piątkowe popołudnia i w sezonie, więc przy terminach na koniec tygodnia wyjeżdżam wcześniej. Poza tym dojazd jest przewidywalny.",
        "Ta dzielnica graniczy ze Świątnikami Górnymi, Mogilanami i Wieliczką — jeśli mieszkasz tuż za granicą Krakowa, to nic nie zmienia. Dojeżdżam po całej Małopolsce i nigdzie nie doliczam opłaty za dojazd.",
      ],
    },
    {
      id: "uzdrowisko",
      heading: "Jedyne uzdrowisko w granicach Krakowa",
      paragraphs: [
        "Swoszowice są jedynym uzdrowiskiem w granicach miasta — wody siarczkowe, park zdrojowy, zabytkowa zabudowa uzdrowiskowa. To rzadka sytuacja: mieszka się w Krakowie i jednocześnie w miejscu, które ma zupełnie inny rytm niż reszta miasta.",
        "Dla prezentacji ma to jedną konsekwencję, i to przyjemną. Spotkania w tej części dzielnicy idą wolniej i spokojniej niż w blokowiskach po drugiej stronie miasta. Rzadko ktoś tu patrzy na zegarek, a rozmowa częściej schodzi na to, co się realnie gotuje w domu.",
        "Gotujemy więc bez pośpiechu i to, co ma szansę wrócić na stół w przyszłym tygodniu — a nie efektowny popis. Jeśli chcesz ugotować coś konkretnego z własnych składników, powiedz przy umawianiu.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy dojeżdżasz do Kosocic, Soboniowic i Wróblowic?",
      answer:
        "Tak, do wszystkich części dzielnicy — także do Zbydniowic, Rajska, Jugowic i Sidziny. Dojazd jest bezpłatny, mimo że to najdalsze adresy w Krakowie.",
    },
    {
      question: "Mieszkam na Klinach w nowym budownictwie. Czy to dobre warunki?",
      answer:
        "Najlepsze, jakie się w Krakowie trafiają. Otwarty aneks znaczy, że gotujemy i rozmawiamy w jednym miejscu, a nie stojąc do siebie plecami w wąskiej kuchni. Instalacja jest nowa, więc nie musimy pilnować, co jeszcze jest włączone.",
    },
    {
      question: "Mieszkam tuż za granicą Krakowa, w gminie Mogilany. Przyjedziesz?",
      answer:
        "Oczywiście. Obsługuję całą Małopolskę i granica miasta nic tu nie zmienia — dojazd jest bezpłatny.",
    },
  ],

  geo: { lat: 49.9789, lng: 19.9269 },
};
