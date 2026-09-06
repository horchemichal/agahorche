import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * JASŁO — miasto w widłach Wisłoki i Ropy, na styku Pogórza i Beskidu
 * Niskiego. Znane z winnic — Podkarpacki Szlak Winnic zaczyna się właśnie
 * w tej okolicy, a Jasło organizuje Dni Wina.
 *
 * KĄT: winiarski. Ale nie o wino tu chodzi — chodzi o to, co z tym idzie
 * w parze: OWOCE. Ta okolica ma sady, winnice i pogórze pełne drzew,
 * a wrzesień oznacza tu nadmiar owoców, nie warzyw. To odróżnia Jasło
 * od Rybnika (ogród przy domu) i Lublińca (grzyby z lasu): tu chodzi
 * o skalę zbiorów i o to, że owoce psują się szybciej niż cokolwiek innego.
 *
 * Uwaga na uczciwość: NIE piszemy nic o robieniu wina w Thermomiksie —
 * to nie ma z tym urządzeniem nic wspólnego i brzmiałoby fałszywie.
 * Piszemy o tym, co robi naprawdę: soki, przeciery, powidła, musy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Jasło leży w widłach Wisłoki i Ropy, na pograniczu Pogórza
 *   i Beskidu Niskiego,
 * — okolice Jasła są ośrodkiem współczesnego polskiego winiarstwa;
 *   miasto organizuje Dni Wina,
 * — Jasło zostało niemal całkowicie zniszczone pod koniec II wojny
 *   światowej i odbudowane po wojnie,
 * — miasto jest siedzibą powiatu jasielskiego (m.in. Kołaczyce, Nowy
 *   Żmigród, Dębowiec, Osiek Jasielski, Skołyszyn),
 * — do Gorlic, gdzie Aga ma już napisane strony, jest stąd blisko.
 *
 * CZEGO NIE MA: liczby winnic, danych o produkcji, dat i liczb dotyczących
 * zniszczenia miasta, przepisów podanych jako „tradycyjne".
 */
export const JASLO: CityContent = {
  slug: "jaslo",
  h1: "Thermomix Jasło – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Jasło — prezentacja i cena",
  seoDescription:
    "Thermomix w Jaśle: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat jasielski. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jasło — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jaśle i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Jasła z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Gamracie, Ulaszowicach czy Sobniowie. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Jasło i cały powiat jasielski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jaśle – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu albo w ogrodzie. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "owoce",
      heading: "Okolica sadów i winnic — czyli wrzesień, który nie czeka",
      paragraphs: [
        "Wokół Jasła jest inaczej niż w większości Polski: to okolica sadów i winnic, jedno z centrów współczesnego polskiego winiarstwa. Pogórze sprzyja owocom i widać to w każdym ogrodzie — śliwki, jabłka, gruszki, winogrona, orzechy.",
        "Od razu uczciwie: wina w Thermomiksie się nie robi i nie będę udawać, że to ma cokolwiek wspólnego z tym urządzeniem. Ale owoce to nie tylko wino — i to jest właśnie ta część, w której urządzenie zmienia bardzo dużo.",
        "Owoce mają jedną nieprzyjemną cechę: psują się szybciej niż warzywa. Skrzynka śliwek zebranych w sobotę nie doczeka przyszłego weekendu, a przerobienie jej w garnku oznacza popołudnie mieszania, żeby nie przywarło. Dlatego co roku część zbiorów idzie na kompost, choć nikt tego nie planował.",
        "Powidła, przecier, mus jabłkowy czy sok gotują się z ustawioną temperaturą, czasem i mieszaniem — bez stania przy garnku i bez ryzyka przypalenia dna. Można wstawić po kolacji i wrócić do gotowego. Wyparzanie słoików i sam wsad zostają po Waszej stronie; zmienia się to, że wrześniowy wieczór przestaje być całkiem zajęty.",
        "Na prezentacji chętnie zrobię to na tym, co akurat macie — powiedzcie przy umawianiu, co dojrzewa.",
      ],
    },
    {
      id: "blisko-gorlic",
      heading: "Blisko Gorlic, blisko Krosna",
      paragraphs: [
        "Jasło leży między Gorlicami a Krosnem — a do powiatu gorlickiego jeżdżę od dawna i mam tam napisane strony dla całej okolicy. W praktyce oznacza to, że Jasło leży na trasie, którą i tak pokonuję, więc terminy bywają tu krótsze niż w dalszych częściach Podkarpacia.",
        "Jeżdżę też po całym powiecie jasielskim: do Kołaczyc, Nowego Żmigrodu, Dębowca, Osieka Jasielskiego i Skołyszyna. Dojazd jest wszędzie bezpłatny i wpływa tylko na godzinę, którą mogę zaproponować.",
      ],
      links: [{ href: "/thermomix/gorlice", label: "Thermomix Gorlice" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jaśle?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, żebyśmy zrobili przetwory albo konkretne danie, powiedz o tym wcześniej — przywiozę pod to składniki albo przyjadę wtedy, gdy owoce będą gotowe.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jaśle"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla jasielskiej rodziny",
      paragraphs: [
        "W Jaśle i okolicy obiad częściej niż w dużym mieście jest wspólnym posiłkiem, a domy z ogrodem oznaczają większe porcje i więcej gotowania z własnych produktów.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie trzech naczyń po jednej zupie. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których dzielnic Jasła dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Gamrat",
    "Ulaszowice",
    "Sobniów",
    "Brzyszczki",
    "Gądki",
    "Hankówka",
    "Kaczorowy",
    "Krajowice",
    "Niegłowice",
    "Żółków",
  ],

  nearbyHeading: "Cały powiat jasielski i okolice",
  nearbyParagraphs: [
    "Kołaczyce, Nowy Żmigród, Dębowiec, Osiek Jasielski, Skołyszyn i Tarnowiec są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też do Gorlic i Krosna.",
  ],
  nearbyTowns: [
    "Krosno",
    "Gorlice",
    "Dukla",
    "Pilzno",
    "Dębica",
    "Biecz",
    "Brzozów",
  ],

  about: blokOMnie("do Jasła", "w Jaśle i całym powiecie jasielskim", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jasła bez dodatkowej opłaty?",
      answer:
        "Tak, do Jasła i do całego powiatu jasielskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Jaśle"),
    {
      question: "Czy Thermomix nadaje się do przetworów z owoców?",
      answer:
        "Tak i to jest tutaj jeden z najczęstszych powodów zakupu. Powidła, przeciery, musy i soki gotują się z ustawioną temperaturą, czasem i mieszaniem, które nie pozwala przywrzeć do dna — czyli bez tej części, przez którą przetwory zajmują całe popołudnie. Wyparzanie słoików i sam wsad zostają po Twojej stronie.",
    },
    {
      question: "Mamy winnicę — czy urządzenie się do czegoś przyda?",
      answer:
        "Do robienia wina nie i nie będę udawać inaczej. Przyda się do wszystkiego, co dzieje się obok: soków, musów, powideł z owoców z sadu, a także do jedzenia dla gości, jeśli winnica przyjmuje odwiedzających. Powiedz przy umawianiu, jak to u Was wygląda, a dobiorę pod to prezentację.",
    },
  ],

  geo: { lat: 49.7450, lng: 21.4719 },
};
