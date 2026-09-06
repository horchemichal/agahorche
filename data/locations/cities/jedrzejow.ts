import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * JĘDRZEJÓW — miasto powiatowe w zachodniej części województwa. Dwie rzeczy
 * naprawdę je wyróżniają: opactwo cystersów, najstarsze w Polsce, oraz
 * Muzeum im. Przypkowskich z jedną z największych na świecie kolekcji
 * zegarów słonecznych.
 *
 * KĄT: czas. To jedyne miasto w serwisie, w którym można uczciwie napisać
 * najtrudniejszy akapit całej tej roboty — TEN O TYM, ŻE URZĄDZENIE NIE
 * GOTUJE SZYBCIEJ. Bo zwykle nie gotuje: zupa potrzebuje tyle samo minut
 * w garnku i w Thermomixie. Oszczędza się nie czas, tylko UWAGĘ — to, że
 * przez te minuty nie trzeba stać, mieszać i pilnować. W mieście, które
 * ma muzeum mierzenia czasu, ta różnica ma gdzie wybrzmieć, a strona
 * zyskuje na wiarygodności więcej, niż traci na obietnicy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Jędrzejowie działa Muzeum im. Przypkowskich z bardzo dużą kolekcją
 *   zegarów słonecznych, gromadzoną przez pokolenia jednej rodziny,
 * — opactwo cystersów w Jędrzejowie jest najstarszym klasztorem
 *   cysterskim w Polsce,
 * — miasto jest siedzibą powiatu jędrzejowskiego,
 * — przez okolicę biegnie droga krajowa w kierunku Krakowa i Kielc.
 *
 * CZEGO NIE MA: liczby eksponatów, dat fundacji podawanych z pamięci,
 * danych o ruchu na drodze.
 */
export const JEDRZEJOW: CityContent = {
  slug: "jedrzejow",
  h1: "Thermomix Jędrzejów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Jędrzejów — prezentacja i cena",
  seoDescription:
    "Thermomix w Jędrzejowie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jędrzejów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jędrzejowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jędrzejowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Skroniowa, Prząsławia, Mnichowa i pozostałych sołectw.",

  highlights: highlightyStandardowe("Jędrzejów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jędrzejowie – jak wygląda prezentacja?",
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
      id: "ile-to-naprawde-trwa",
      heading: "Miasto z muzeum zegarów — i uczciwy rachunek czasu",
      paragraphs: [
        "W Jędrzejowie stoi muzeum, w którym przez pokolenia jedna rodzina zbierała zegary słoneczne — kolekcja jest jedną z największych na świecie. Skoro więc piszę stronę do miasta, które od dawna zajmuje się mierzeniem czasu, wypada policzyć uczciwie.",
        "Zacznę od zdania, którego sprzedawcy zwykle nie mówią: Thermomix najczęściej NIE gotuje szybciej. Zupa, która potrzebuje dwudziestu minut, potrzebuje ich w garnku i potrzebuje ich w tym urządzeniu. Fizyki się nie oszuka i nie będę udawać, że jest inaczej.",
        "Różnica jest gdzie indziej i dotyczy nie minut, tylko uwagi. W garnku te dwadzieścia minut trzeba być w kuchni: zamieszać, przykręcić, sprawdzić, czy nie kipi, zetrzeć z płyty to, co wykipiało. Tutaj te same dwadzieścia minut mijają, gdy Ciebie w kuchni nie ma. To nie jest oszczędność czasu na zegarze. To jest oszczędność czasu, który był Twój, a nie garnka.",
        "Druga część rachunku dotyczy tego, co przed i po. Ważenie odbywa się w tym samym naczyniu, siekanie i miksowanie też, więc znika kilka misek, deska i sitko. Zmywanie po obiedzie z trzech naczyń schodzi do jednego. I to akurat jest realna oszczędność minut — tylko liczona po posiłku, a nie w jego trakcie.",
        "Jeśli ktoś Wam obieca, że dzięki temu obiad będzie gotowy w pięć minut, proszę, nie wierzcie. Obiad będzie gotowy wtedy, kiedy zwykle — ale nie będziecie musieli przy nim stać.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jędrzejowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Jędrzejowem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jędrzejowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla jędrzejowskiej rodziny",
      paragraphs: [
        "Wąskie gardło jest tu takie jak wszędzie: obiad musi powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — i to ona jest tą, której realnie brakuje czasu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Jędrzejów",
    "Skroniów",
    "Prząsław",
    "Mnichów",
    "Łysaków",
    "Potok Wielki",
    "Jasionna",
    "Raków",
    "Wolica",
    "Cierno",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Sędziszów, Małogoszcz, Włoszczowa, Chęciny i Pińczów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sędziszów", "Małogoszcz", "Włoszczowa", "Chęciny", "Pińczów", "Kielce"],

  about: blokOMnie("do Jędrzejowa", "w Jędrzejowie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jędrzejowa bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Jędrzejowie"),
    {
      question: "Czy dzięki Thermomixowi obiad będzie szybciej gotowy?",
      answer:
        "Zwykle nie — i wolę powiedzieć to od razu. Gotowanie trwa tyle, ile trwa. Zmienia się to, że przez ten czas nie musisz stać w kuchni i mieszać, a po obiedzie zmywasz jedno naczynie zamiast trzech. Na prezentacji zobaczysz to na zegarku, a nie w mojej opowieści.",
    },
    {
      question: "Mamy w domu duży garnek i dobrą kuchenkę — po co nam to?",
      answer:
        "Być może po nic i to jest uczciwa odpowiedź. Jeśli lubicie gotować, macie na to czas i stanie przy garnku Wam nie przeszkadza, to urządzenie niewiele Wam doda. Zobaczcie je i zdecydujcie sami — spotkanie nic nie kosztuje, a ja nie będę przekonywać kogoś, kto nie ma problemu do rozwiązania.",
    },
  ],

  geo: { lat: 50.6383, lng: 20.3047 },
};
