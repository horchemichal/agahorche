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
 * BIELSK PODLASKI — miasto powiatowe w południowej części regionu,
 * ośrodek dla dużej okolicy.
 *
 * KĄT: o co pytam przed przyjazdem. To jest jedyne miejsce w serwisie,
 * w którym wypisuję WPROST LISTĘ PYTAŃ, które zadaję przy umawianiu,
 * i wyjaśniam, po co każde z nich jest.
 *
 * DLACZEGO AKURAT TUTAJ — i to jest jedyne zdanie o regionie, jakie sobie
 * pozwalam napisać: bo to okolica, w której nie da się niczego założyć
 * z góry. W jednym domu w piątek nie je się mięsa, w drugim post wypada
 * w innych terminach niż tam, gdzie mieszkam, w trzecim nie ma to żadnego
 * znaczenia. Nie moja sprawa, DLACZEGO tak jest — moja sprawa to zapytać
 * i nie przyjechać z niewłaściwym koszykiem.
 *
 * ŻELAZNE OGRANICZENIE, POWTÓRZONE ZA NAGŁÓWKIEM `podlaskie.ts`:
 * NIE PISZEMY O TOŻSAMOŚCI, WYZNANIU ANI HISTORII MIESZKAŃCÓW.
 * Ani jednego zdania wyjaśniającego, kto tu mieszka i w co wierzy.
 * Cała sekcja jest o MOIM przygotowaniu do wizyty, nie o nich.
 *
 * FAKTY UŻYTE W TEKŚCIE: żadnych faktów o regionie poza tym, że jest to
 * miasto powiatowe. Celowo.
 */
export const BIELSK_PODLASKI: CityContent = {
  slug: "bielsk-podlaski",
  h1: "Thermomix Bielsk Podlaski – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Bielsk Podlaski — prezentacja i cena",
  seoDescription:
    "Thermomix w Bielsku Podlaskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bielsk Podlaski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bielsku Podlaskim. Pytam wcześniej, żeby przyjechać z właściwymi składnikami.",

  lead:
    "Przyjeżdżam do Bielska Podlaskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Bielsk Podlaski i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "o-co-pytam",
      heading: "O co pytam, zanim do Was przyjadę — i po co",
      paragraphs: [
        "Przy umawianiu zadaję kilka pytań i wolę wypisać je tutaj, żeby nikogo nie zaskoczyły. Nie są to pytania kurtuazyjne ani sprzedażowe — każde z nich zmienia to, co wkładam do samochodu.",
        "Pierwsze: czego u Was się nie je. To jest pytanie najważniejsze i zadaję je zawsze, w każdym mieście. Nie pytam dlaczego i nie jest to moja sprawa — pytam po to, żeby nie przyjechać z niewłaściwym koszykiem i nie postawić nikogo w niezręcznej sytuacji przy własnym stole.",
        "Drugie: czy dzień, na który się umawiamy, jest u Was zwyczajny. W różnych domach różne dni bywają inne — i to również nie jest temat, w który zamierzam wchodzić. Wystarczy mi „w piątki jemy bez mięsa” albo „w tym tygodniu proszę bez”. Dobiorę dania i tyle. To jest okolica, w której niczego nie da się założyć z góry, więc pytam, zamiast zgadywać.",
        "Trzecie: ile osób siada do stołu. Od tego zależy, ile ugotujemy — bo wolę, żeby po spotkaniu został obiad, a nie żeby zabrakło.",
        "Czwarte: co u Was gotuje się najczęściej. Efektowne danie z folderu wyjdzie zawsze i niczego nie dowodzi. Wasze codzienne danie pokazuje, czy to urządzenie coś Wam realnie skróci — a tylko to ma znaczenie.",
        "Piąte, praktyczne: gdzie mam postawić urządzenie i czy jest wolne gniazdko. To brzmi trywialnie, ale zaoszczędza kwadransa przestawiania rzeczy na blacie.",
        "I rzecz, o którą nie zapytam: o Wasze sprawy prywatne, o rodzinę i o to, kto jeszcze mógłby chcieć taką prezentację. Przyjeżdżam ugotować obiad i pokazać sprzęt. To wszystko.",
      ],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Bielsku Podlaskim – jak wygląda prezentacja?",
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
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bielsku Podlaskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Możesz od razu odpowiedzieć na te pytania w wiadomości — wtedy nie będę o nic dopytywać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bielsku Podlaskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bielskiej rodziny",
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

  districtsHeading: "Do których części Bielska Podlaskiego i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Studziwody",
    "Hołowiesk",
    "Adama Mickiewicza",
    "Widowska",
    "Białowieska",
    "Brańska",
    "Rejentówka",
    "Augustowo",
    "Spicki",
  ],

  nearbyHeading: "Poza Bielsk Podlaski też przyjadę",
  nearbyParagraphs: [
    "Hajnówka, Brańsk, Siemiatycze i Orla są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Hajnówka", "Brańsk", "Siemiatycze", "Orla", "Kleszczele", "Michałowo"],

  about: blokOMnie("do Bielska Podlaskiego", "w Bielsku Podlaskim i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bielska Podlaskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bielsku Podlaskim"),
    {
      question: "O co pytasz przy umawianiu?",
      answer:
        "Czego u Was się nie je, czy umówiony dzień jest u Was zwyczajny, ile osób siada do stołu, co gotujecie najczęściej i gdzie postawić urządzenie. Nie pytam dlaczego — pytam po to, żeby przyjechać z właściwymi składnikami. Wystarczy „w piątki bez mięsa” albo „w tym tygodniu proszę bez”.",
    },
    {
      question: "Czy będziesz pytać o rodzinę albo o znajomych?",
      answer:
        "Nie. Przyjeżdżam ugotować obiad i pokazać sprzęt — to wszystko. O sprawy prywatne nie pytam i o kontakty do znajomych też nie.",
    },
  ],

  geo: { lat: 52.7686, lng: 23.1875 },
};
