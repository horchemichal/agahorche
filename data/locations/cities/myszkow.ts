import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * MYSZKÓW — niewielkie miasto nad Wartą, u bram Jury, między Zawierciem
 * a Częstochową. Bez wielkiego przemysłu, bez metropolitalnego zgiełku,
 * z bardzo stabilnym rytmem życia.
 *
 * KĄT: to jedyne miasto tej fali, gdzie problemem nie jest ani czas,
 * ani miejsce, ani pieniądze — tylko RUTYNA. W małym mieście gotuje się
 * to samo, bo kupuje się w tych samych trzech sklepach, u tych samych
 * ludzi, od lat. Dziesięć dań w rotacji i pytanie „co na obiad", na które
 * odpowiedź jest znana z góry. To bardzo częsty, a prawie nigdy nie
 * nazwany powód, dla którego ludzie kupują to urządzenie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Myszków leży nad Wartą, w powiecie myszkowskim, na skraju Jury
 *   Krakowsko-Częstochowskiej,
 * — miasto jest siedzibą powiatu myszkowskiego (m.in. Koziegłowy,
 *   Żarki, Poraj, Niegowa, Zawiercie sąsiaduje od południa),
 * — Mirów i Bobolice z ruinami zamków leżą w pobliżu, na Szlaku Orlich
 *   Gniazd,
 * — dzielnice: Mrzygłód, Będusz, Nowa Wieś, Mijaczów, Ciszówka.
 *
 * CZEGO NIE MA: danych o handlu, liczbie sklepów ani o dochodach.
 */
export const MYSZKOW: CityContent = {
  slug: "myszkow",
  h1: "Thermomix Myszków – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Myszków — prezentacja i cena",
  seoDescription:
    "Thermomix w Myszkowie: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat myszkowski. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Myszków — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Myszkowie i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Myszkowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Mijaczowie, w Mrzygłodzie czy Będuszu. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Myszków i cały powiat myszkowski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Myszkowie – jak wygląda prezentacja?",
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
      id: "dziesiec-dan",
      heading: "Dziesięć dań w kółko — najczęstszy powód, o którym się nie mówi",
      paragraphs: [
        "W Myszkowie nie brakuje ani czasu na gotowanie, ani miejsca w kuchni. Jest za to coś innego, o czym prawie nikt nie mówi na głos, bo brzmi jak narzekanie na nic: znudzenie. W niewielkim mieście kupuje się w tych samych paru sklepach, u tych samych ludzi, od lat — i gotuje się mniej więcej to samo. Dziesięć dań w rotacji, każde zrobione setki razy, a odpowiedź na pytanie „co na obiad” znana wcześniej niż samo pytanie.",
        "To zaskakująco częsty powód, dla którego ludzie kupują to urządzenie. Nie oszczędność czasu i nie funkcje z folderu, tylko to, że dzięki niemu znowu opłaca się spróbować czegoś nowego. Bo bariera przy nieznanym przepisie rzadko jest w składnikach — jest w tym, że trzeba się nauczyć nowej techniki, przypilnować, a potem umyć trzy naczynia po czymś, co może się nie udać.",
        "Kiedy przepis prowadzi krok po kroku, a temperatura i mieszanie są ustawione, ta bariera znika. Nieudany eksperyment kosztuje pół godziny i jedno mycie, a nie zepsuty wieczór. Po kilku tygodniach do rotacji wchodzi zwykle kilka nowych rzeczy — i to jest cała zmiana, o którą tu chodzi.",
        "Nie obiecuję, że zaczniesz gotować inaczej, bo tego nie wiem. Na prezentacji zrobimy coś, czego nigdy nie robiłaś, i sama zobaczysz, czy to jest ta różnica.",
      ],
      links: [
        { href: "/przepisy", label: "Zobacz, co można ugotować" },
        { href: "/przepisy/co-mam-w-lodowce", label: "Sprawdź, co zrobisz z tego, co masz" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Myszkowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość — Mrzygłód i Będusz to inny kierunek niż centrum, a od tego zależy tylko godzina spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Myszkowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla myszkowskiej rodziny",
      paragraphs: [
        "W wielu domach w powiecie ktoś dojeżdża do pracy do Zawiercia, Częstochowy albo dalej, więc obiad częściej powstaje z wyprzedzeniem niż na bieżąco.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
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

  districtsHeading: "Do których dzielnic Myszkowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Mijaczów",
    "Mrzygłód",
    "Będusz",
    "Nowa Wieś",
    "Ciszówka",
    "Pohulanka",
    "Światowit",
    "Papiernia",
  ],

  nearbyHeading: "Cały powiat myszkowski i Jura",
  nearbyParagraphs: [
    "Koziegłowy, Żarki, Poraj, Niegowa i okoliczne wsie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też w stronę Zawiercia i Częstochowy.",
  ],
  nearbyTowns: [
    "Koziegłowy",
    "Żarki",
    "Poraj",
    "Niegowa",
    "Zawiercie",
    "Częstochowa",
    "Ogrodzieniec",
  ],

  about: blokOMnie("do Myszkowa", "w Myszkowie i całym powiecie myszkowskim", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Myszkowa bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do całego powiatu myszkowskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Myszkowie"),
    {
      question: "Gotuję od lat to samo i trochę mnie to męczy — czy to dobry powód?",
      answer:
        "To jeden z najczęstszych powodów, jakie słyszę, i wcale nie jest gorszy od oszczędności czasu. Rzecz w tym, że przy prowadzonym przepisie i ustawionej temperaturze próbowanie nowych rzeczy przestaje kosztować zepsuty wieczór. Na prezentacji ugotujemy coś, czego nigdy nie robiłaś — to najlepszy sposób, żeby sprawdzić, czy to Cię przekonuje.",
    },
    {
      question: "Czy przyjedziesz do Żarek albo Koziegłów?",
      answer:
        "Tak, jeżdżę po całym powiecie. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 50.5756, lng: 19.3222 },
};
