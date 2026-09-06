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
 * KROSNO — miasto szkła. Krośnieńskie huty szkła są znane w całym kraju,
 * a Centrum Dziedzictwa Szkła jest jedną z głównych atrakcji miasta.
 * W okolicy (Bóbrka) narodził się światowy przemysł naftowy.
 *
 * KĄT: szkło. To jedyne miasto w obu falach, gdzie kątem jest przedmiot,
 * a nie rytm dnia — i akurat tutaj to działa, bo szkło łączy się
 * z kuchnią wprost: SŁOIKI I PRZETWORY. Krosno robi naczynia, w których
 * pół Polski zamyka na zimę to, co urosło latem. Punkt wyjścia jest więc
 * naturalny i miejscowy, a nie doklejony.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Krosno jest ośrodkiem przemysłu szklarskiego o wieloletniej tradycji;
 *   działa tu Centrum Dziedzictwa Szkła,
 * — w pobliskiej Bóbrce Ignacy Łukasiewicz uruchomił pierwszą na świecie
 *   kopalnię ropy naftowej; działa tam muzeum przemysłu naftowego,
 * — Krosno leży u podnóża Beskidu Niskiego, nad Wisłokiem,
 * — miasto ma zachowany rynek z podcieniowymi kamienicami,
 * — Krosno jest naturalnym ośrodkiem dla Jasła, Sanoka, Brzozowa,
 *   Rymanowa i Dukli.
 *
 * CZEGO NIE MA: danych o produkcji szkła, liczby zatrudnionych,
 * nazw firm ani przepisów podanych jako „jedyne właściwe".
 */
export const KROSNO: CityContent = {
  slug: "krosno",
  h1: "Thermomix Krosno – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Krosno — prezentacja i cena",
  seoDescription:
    "Thermomix w Krośnie: bezpłatna prezentacja TM7 u Ciebie w domu, cała okolica. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krosno — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krośnie i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Krosna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Traugutta, Turaszówce czy Białobrzegach. Prezentacja i dojazd są bezpłatne, także do okolicznych gmin.",

  highlights: highlightyStandardowe("Krosno i cała okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krośnie – jak wygląda prezentacja?",
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
      id: "sloiki",
      heading: "Miasto szkła — czyli rozmowa, która zaczyna się od słoika",
      paragraphs: [
        "Krosno robi szkło od pokoleń i wie o tym cała Polska. Naczynia, kieliszki, słoje — spora część tego, w czym w polskich domach podaje się i zamyka jedzenie, ma tutaj swój początek.",
        "To ładny zbieg okoliczności, bo rozmowa o Thermomiksie w Krośnie może zacząć się dokładnie od tego przedmiotu. Słoik jest końcem długiej roboty: całego popołudnia przy garnku, mieszania, żeby nie przywarło, i pilnowania, żeby nie wykipiało. Ta robota nie zmieniła się od dziesięcioleci i to ona najczęściej decyduje, czy w tym roku w ogóle robimy przetwory.",
        "Tu urządzenie ma bardzo konkretną rolę. Przecier, dżem, powidła czy mus jabłkowy gotują się z ustawioną temperaturą, czasem i mieszaniem — bez stania przy garnku i bez ryzyka, że dno się przypali, gdy ktoś odejdzie na dziesięć minut. Sam wsad i słoiki zostają po Waszej stronie, tak samo jak wyparzanie. Zmienia się to, że sierpniowe popołudnie przestaje być całe zajęte.",
        "Jeśli robicie przetwory, powiedzcie o tym przy umawianiu — zrobimy je na prezentacji z tego, co akurat macie, zamiast gotować coś z folderu.",
      ],
    },
    {
      id: "okolica",
      heading: "Krosno jako środek okolicy",
      paragraphs: [
        "Jasło, Sanok, Brzozów, Rymanów i Dukla ciążą do Krosna, a nie do Rzeszowa — i tak też układam trasy. Jeżdżę po całej tej okolicy na tych samych zasadach, a jedna trasa spokojnie obsługuje dwa spotkania w jeden dzień.",
        "To jest też okolica domów z ogrodami i podnóża Beskidu Niskiego, więc częściej niż w mieście gotuje się tu z własnych warzyw i owoców, a jesienią dochodzą grzyby. Przy umawianiu wystarczy podać miejscowość — dojazd jest wszędzie bezpłatny.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krośnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, żebyśmy zrobili coś konkretnego — przetwory, danie, które robisz co niedzielę, albo ciasto, które nie wychodzi — powiedz o tym wcześniej, a przywiozę pod to składniki.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krośnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla krośnieńskiej rodziny",
      paragraphs: [
        "W Krośnie i okolicy obiad częściej niż w dużym mieście jest wspólnym posiłkiem, a nie serią talerzy. Ktoś jednak musi go przygotować na konkretną godzinę — i zwykle jest to ta sama osoba.",
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

  districtsHeading: "Do których dzielnic Krosna dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Traugutta",
    "Turaszówka",
    "Białobrzegi",
    "Polanka",
    "Suchodół",
    "Zawodzie",
    "Krościenko Niżne",
    "Grodzka",
    "Tysiąclecia",
    "Guzikówka",
  ],

  nearbyHeading: "Cała okolica Krosna",
  nearbyParagraphs: [
    "Jasło, Sanok, Brzozów, Rymanów, Dukla, Iwonicz-Zdrój i Miejsce Piastowe są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Jasło",
    "Sanok",
    "Brzozów",
    "Rymanów",
    "Dukla",
    "Zagórz",
    "Strzyżów",
    "Gorlice",
  ],

  about: blokOMnie("do Krosna", "w Krośnie i całej okolicy", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krosna bez dodatkowej opłaty?",
      answer:
        "Tak, do Krosna i do okolicznych gmin. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Krośnie"),
    {
      question: "Czy Thermomix nadaje się do przetworów?",
      answer:
        "Tak i to jest tutaj jeden z najczęstszych powodów zakupu. Przeciery, dżemy, powidła i musy gotują się z ustawioną temperaturą, czasem i mieszaniem, które nie pozwala przywrzeć do dna — czyli bez tej części, przez którą przetwory zajmują całe popołudnie. Wyparzanie słoików i sam wsad zostają po Twojej stronie.",
    },
    {
      question: "Czy przyjedziesz do Rymanowa albo Dukli?",
      answer:
        "Tak, jeżdżę po całej okolicy Krosna. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 49.6886, lng: 21.7706 },
};
