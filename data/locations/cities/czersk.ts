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
 * CZERSK — miasto w powiecie chojnickim, 9 843 mieszkańców
 * (31.12.2024, GUS). W briefie 10 000 — nieznacznie zawyżone.
 *
 * JEDYNE ROSNĄCE MIASTO tej grupy: +4,4% ludności. Wszystkie
 * pozostałe w tej fali traciły.
 *
 * BORY TUCHOLSKIE: ok. 65% powierzchni gminy to lasy.
 *
 * PRODUKT Z LISTY PRODUKTÓW TRADYCYJNYCH: PRAWDZIWKI SUSZONE
 * Z BORÓW TUCHOLSKICH, wpis 17 czerwca 2011 r. WYMIENIAM
 * JEDNYM ZDANIEM, ALE NIE ROBIĘ Z NIEGO KĄTA — grzyby są
 * w serwisie ZAJĘTE (trzy strony) i tego nie powtarzam.
 *
 * PRZEMYSŁ: fabryka mebli, ponad 200 osób, ok. 85% produkcji
 * na eksport do Niemiec. NAZWY NIE PODAJĘ. To jest istotne dla
 * KĄTA: Czersk to miasto, w którym pracuje się przy DREWNIE.
 *
 * OBALONE: truskawka kaszubska (ChOG) NIE OBEJMUJE gminy Czersk
 * — obszar chroniony to inne powiaty. Nie piszę o niej tutaj.
 *
 * KĄT: DREWNO W KUCHNI — deska i drewniana łyżka. Co drewno
 * robi w kuchni dobrze, czego nie, i konkretna rzecz, o której
 * mało kto wie: drewnianej łyżki nie zostawia się w gorącym
 * naczyniu, a drewnianych narzędzi nie wkłada się do tego
 * urządzenia podczas pracy. Kąt jest naturalny dla miasta
 * w Borach Tucholskich, gdzie drewno jest zawodem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że do TEGO urządzenia w czasie pracy NIE WKŁADA SIĘ żadnych
 *   narzędzi — ani drewnianych, ani metalowych; jest do tego
 *   własna szpatułka i tylko jej się używa,
 * — dlaczego drewniana łyżka jest świetna do garnka: nie grzeje
 *   się, nie rysuje, nie reaguje z kwasem,
 * — dlaczego nie zostawia się jej w garnku i nie moczy: drewno
 *   chłonie wodę, pęka i sinieje,
 * — dlaczego deska drewniana i deska do surowego mięsa to dwie
 *   różne deski,
 * — że drewna nie myje się w zmywarce,
 * — i że to urządzenie sporo drewnianych sprzętów naprawdę
 *   zastępuje — tłuczek, wałek, tarkę — ale deski i łyżki nie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O DEZYNFEKCJI DESEK po surowym mięsie ani
 *   o bezpieczeństwie żywności. ODMOWA W TEKŚCIE.
 * — ŻADNYCH ŚRODKÓW CHEMICZNYCH ani olejów do konserwacji
 *   drewna z nazwy — nie wiem, co jest dopuszczone do kontaktu
 *   z żywnością, i tak piszę.
 * — ŻADNYCH INSTRUKCJI CZYSZCZENIA SAMEGO URZĄDZENIA — od tego
 *   jest instrukcja producenta.
 * — ŻADNYCH NAZW FIRM.
 * — GRZYBÓW NIE ROBIĘ TEMATEM. Jedno zdanie o wpisie na Listę
 *   i koniec.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Czyszczenie urządzenia"
 * (Krapkowice) dotyczy uszczelki i noża oraz odsyła do
 * instrukcji. Tutaj chodzi o INNE SPRZĘTY W KUCHNI — drewniane
 * — i o relację między nimi a tym urządzeniem. Grzyby, susz
 * i las mają swoje strony gdzie indziej.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ nazwy fabryki mebli ani dokładnej liczby
 *   zatrudnionych — piszę „ponad dwieście osób".
 * — NIE PISZĘ, że truskawka kaszubska obejmuje gminę Czersk.
 *   NIE OBEJMUJE.
 * — NIE ZACHĘCAM do zbierania grzybów i nie doradzam
 *   w rozpoznawaniu gatunków.
 * — NIE PODAJĘ nazw gatunków drewna dopuszczonych do kontaktu
 *   z żywnością.
 * — districts: miasto nie ma statutowych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 9 843 mieszkańców (31.12.2024, GUS), wzrost o 4,4%,
 * — ok. 65% powierzchni gminy to lasy Borów Tucholskich,
 * — prawdziwki suszone z Borów Tucholskich wpisane na Listę
 *   Produktów Tradycyjnych 17 czerwca 2011 r.,
 * — fabryka mebli zatrudniająca ponad 200 osób, ok. 85%
 *   produkcji na eksport.
 */
export const CZERSK: CityContent = {
  slug: "czersk",
  h1: "Thermomix Czersk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Czersk (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Czersku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czersk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czersku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Czerska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Czersk i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Do środka nie wkłada się nic — ani drewnianego, ani metalowego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czersku – jak wygląda prezentacja?",
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
      id: "drewno",
      heading: "Miasto, które żyje z drewna — czyli o desce i drewnianej łyżce",
      paragraphs: [
        "Dwie trzecie gminy Czersk to las. W mieście działa fabryka mebli zatrudniająca ponad dwieście osób, z produkcją głównie na eksport, a Czersk jako jedyne miasto w tej okolicy przez ostatnie lata nie tracił mieszkańców, tylko ich przybywało. Tutaj drewno nie jest dekoracją, tylko zawodem. Więc napiszę o drewnie w kuchni — bo o desce i łyżce nikt nie pisze, a każdy ich używa.",
        "Zacznę od jedynej rzeczy w tym tekście, która jest twardą zasadą obsługi: do pracującego Thermomiksa nie wkłada się żadnego narzędzia. Ani drewnianej łyżki, ani metalowej, ani niczego innego. W środku obraca się nóż, do zgarniania jest własna szpatułka i używa się wyłącznie jej. To nie jest ostrożnościowa uwaga na wszelki wypadek — drewniana łyżka wsadzona do pracującego naczynia po prostu się rozpada, a odłamki trafiają do jedzenia.",
        "Poza tym drewno w kuchni jest świetne i ja z niego nie rezygnuję. Drewniana łyżka nie nagrzewa się od zupy, nie rysuje powłok w garnku i nie reaguje z kwasem — przy sosie pomidorowym czy kapuście to ma znaczenie.",
        "Ale są trzy rzeczy, których się z drewnem nie robi, a które widuję w co drugiej kuchni. Nie zostawia się łyżki w gorącym garnku na pół godziny: drewno wtedy chłonie parę, puchnie, a potem pęka wzdłuż włókien. Nie moczy się jej w zlewie razem z naczyniami — to samo, tylko szybciej. I nie wkłada się drewna do zmywarki, nigdy; ze zmywarki wychodzi szare, chropowate i po dwóch–trzech cyklach nadaje się do wyrzucenia.",
        "Deski. Deska drewniana jest dobra do chleba, do warzyw i do serów. Do surowego mięsa i drobiu trzyma się osobną deskę i to nie jest przesada, tylko elementarz. Natomiast tego, JAK ją potem myć i czym dezynfekować, nie napiszę — bo to jest bezpieczeństwo żywności i nie mam do tego kompetencji. Nie podam też nazwy żadnego oleju do konserwacji drewna, bo nie wiem, który jest dopuszczony do kontaktu z żywnością, a zgadywać w tej sprawie nie będę.",
        "Na koniec rzecz, która dotyczy zakupu. To urządzenie faktycznie zastępuje sporo drewnianych sprzętów: tłuczek do ziemniaków, wałek, tarkę, moździerz, czasem stolnicę, bo ciasto wyrabia się w naczyniu. Ale deski i łyżki nie zastąpi i nie ma takiego zamiaru. Jeżeli ktoś Wam mówi, że po zakupie opróżnicie połowę szuflady — to nie jest prawda i przekonacie się o tym w pierwszym tygodniu.",
        "Aha, i skoro Bory: prawdziwki suszone z Borów Tucholskich są od czerwca 2011 roku na Liście Produktów Tradycyjnych. Wspominam, bo się należy — ale o grzybach i ich rozpoznawaniu nie doradzam.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czersku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcesz sprawdzić, które ze sprzętów w Twojej szufladzie ten sprzęt faktycznie zastąpi, a które nie — wyłóż je na blat przed moim przyjazdem. Przejdziemy je po kolei.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czersku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla czerskiej rodziny",
      paragraphs: [
        "Czersk liczy niecałe dziesięć tysięcy mieszkańców i jest tutaj wyjątkiem: podczas gdy sąsiednie miasta traciły ludzi, w Czersku przez ostatnie lata mieszkańców przybyło. Gmina leży w Borach Tucholskich i w około dwóch trzecich jest zalesiona; w mieście działa fabryka mebli zatrudniająca ponad dwieście osób i produkująca głównie na eksport. Prawdziwki suszone z Borów Tucholskich są wpisane na Listę Produktów Tradycyjnych od 17 czerwca 2011 roku.",
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

  districtsHeading: "Do których części Czerska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Rytla, Łęgu, Odrów, Malachina, Zapędowa, Gotelpia i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na statutowe osiedla, więc przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Czersk też przyjadę",
  nearbyParagraphs: [
    "Chojnice, Brusy, Czarna Woda, Starogard Gdański, Skórcz i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Chojnice", "Brusy", "Czarna Woda", "Starogard Gdański", "Skórcz"],

  about: blokOMnie("do Czerska", "w Czersku i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czerska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy, w tym do Rytla i Łęgu. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Czersku"),
    {
      question: "Czy mogę mieszać drewnianą łyżką w Thermomixie?",
      answer:
        "Nie — do pracującego urządzenia nie wkłada się żadnego narzędzia, ani drewnianego, ani metalowego. Do zgarniania jest własna szpatułka i używa się wyłącznie jej. Drewniana łyżka w pracującym naczyniu po prostu się rozpada.",
    },
    {
      question: "Jak dbać o drewnianą łyżkę i deskę?",
      answer:
        "Nie zostawiać łyżki w gorącym garnku, nie moczyć w zlewie i nie wkładać drewna do zmywarki — po kilku cyklach jest szare i chropowate. Do surowego mięsa trzymać osobną deskę. Czym myć i dezynfekować, nie doradzę: to bezpieczeństwo żywności, nie sprzęt.",
    },
    {
      question: "Które sprzęty z kuchni faktycznie zastąpi?",
      answer:
        "Realnie: tłuczek, wałek, tarkę, moździerz, często stolnicę. Deski i drewnianej łyżki nie zastąpi. Jeśli ktoś Wam obiecuje opróżnienie połowy szuflady, przekonacie się w pierwszym tygodniu, że tak nie jest.",
    },
  ],

  geo: { lat: 53.7972, lng: 17.9789 },
};
