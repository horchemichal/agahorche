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
 * OSTROWIEC ŚWIĘTOKRZYSKI — drugie miasto województwa, ośrodek hutniczy
 * z ciągłą tradycją przemysłową od XIX wieku. Tuż obok, w Krzemionkach,
 * leżą neolityczne kopalnie krzemienia pasiastego wpisane w 2019 roku
 * na listę światowego dziedzictwa UNESCO.
 *
 * KĄT: nie zmianowość — bo o pracy na zmiany pisałam już przy Tarnowie,
 * Oświęcimiu i Dąbrowie Górniczej i powtórzenie byłoby widoczne. Kąt jest
 * inny i wynika z zestawienia dwóch faktów, które w żadnym innym mieście
 * nie stoją tak blisko siebie: pięć tysięcy lat temu wydobywano tu krzemień
 * na skalę przemysłową, a od dwustu lat pracuje huta. TO JEST MIASTO, KTÓRE
 * ROBI RZECZY. A w mieście, które robi rzeczy, ludzie oceniają narzędzia
 * inaczej — pytają, co to konkretnie robi, ile wytrzyma i czy da się to
 * naprawić. Więc strona ma odpowiedzieć na to pytanie, a nie zachwycać.
 * To jest jedyna strona w całym serwisie, której kąt dotyczy TONU
 * prezentacji, a nie rozkładu dnia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Krzemionki pod Ostrowcem to neolityczne kopalnie krzemienia pasiastego,
 *   wpisane na listę UNESCO w 2019 roku,
 * — w Ostrowcu od XIX wieku działa huta,
 * — Ostrowiec jest drugim co do wielkości miastem województwa
 *   świętokrzyskiego,
 * — dzielnice: Śródmieście, Częstocice, Piaski, Denków, Ludwików, Rosochy,
 *   Pułanki, Gutwin, Henryków, Stawki, Kolonia Robotnicza.
 *
 * CZEGO NIE MA: nazwy właściciela huty, liczby zatrudnionych, twierdzeń
 * o systemie zmianowym w konkretnym zakładzie.
 */
export const OSTROWIEC_SWIETOKRZYSKI: CityContent = {
  slug: "ostrowiec-swietokrzyski",
  h1: "Thermomix Ostrowiec Świętokrzyski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ostrowiec Świętokrzyski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Ostrowcu Świętokrzyskim: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ostrowiec Świętokrzyski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ostrowcu. Prezentacja bezpłatna, bez pokazu — po prostu widać, co urządzenie robi.",

  lead:
    "Przyjeżdżam do Ostrowca Świętokrzyskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic, od Śródmieścia po Denków i Rosochy.",

  highlights: highlightyStandardowe("Ostrowiec i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ostrowcu – jak wygląda prezentacja?",
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
      id: "miasto-ktore-robi-rzeczy",
      heading: "Pięć tysięcy lat robienia rzeczy — i co z tego wynika dla mojej wizyty",
      paragraphs: [
        "Pod Ostrowcem leżą Krzemionki: neolityczne kopalnie krzemienia pasiastego, wpisane w dwa tysiące dziewiętnastym roku na listę światowego dziedzictwa UNESCO. Pięć tysięcy lat temu wydobywano tu surowiec na skalę, którą dziś nazwalibyśmy przemysłową, i wywożono go w pół Europy. A od XIX wieku w mieście pracuje huta.",
        "Zestawienie tych dwóch faktów mówi o Ostrowcu więcej niż jakikolwiek folder. To jest miasto, które od zawsze coś wytwarzało — i to widać w rozmowie. Kiedy przyjeżdżam tu z urządzeniem, prawie nikt nie pyta, czy jest ładne. Pytania są inne: co to konkretnie robi, ile lat wytrzyma, czy da się to naprawić, co się dzieje, jak coś się zepsuje po gwarancji.",
        "To są dobre pytania i wolę je od zachwytów. Dlatego w Ostrowcu nie robię pokazu. Nie ma efektownych sztuczek ani opowieści o zmianie życia. Jest kuchnia, jest urządzenie, jest obiad, który powstaje na Waszych oczach — i są odpowiedzi na wszystkie pytania, łącznie z tymi niewygodnymi.",
        "Jedno powiem od razu, żeby nie tracić Waszego czasu: to nie jest tani sprzęt i nie będę udawać, że jest. Jeśli po godzinie uznacie, że przy Waszym sposobie gotowania to się nie broni, powiecie mi to wprost, a ja to przyjmę bez przekonywania. Wolę jedno uczciwe „nie” niż dziesięć wymuszonych „przemyślę”.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ostrowcu Świętokrzyskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli pracujecie w grafiku zmianowym, podajcie po prostu kilka terminów z różnych tygodni — dopasuję się, także rano i w środku dnia roboczego.",
        "Podaj dzielnicę. Denków, Rosochy i Częstocice to trzy różne kierunki, a od tego zależy tylko pora spotkania, nigdy jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ostrowcu Świętokrzyskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ostrowieckiej rodziny",
      paragraphs: [
        "Gdy w domu ktoś pracuje w grafiku, obiad rzadko jest wspólnym posiłkiem o jednej porze. Częściej jest czymś, co musi być gotowe wcześniej i doczekać do powrotu — a przygotowuje to zwykle ta sama osoba.",
        "Thermomix zdejmuje z tego pilnowanie. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać rano i poczekać, a odgrzewanie na parze sprawia, że nadal nadaje się do jedzenia.",
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

  districtsHeading: "Do których dzielnic Ostrowca dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Częstocice",
    "Piaski",
    "Denków",
    "Ludwików",
    "Rosochy",
    "Pułanki",
    "Gutwin",
    "Henryków",
    "Stawki",
    "Kolonia Robotnicza",
  ],

  nearbyHeading: "Okolica Ostrowca",
  nearbyParagraphs: [
    "Ćmielów, Kunów, Opatów, Ożarów i Starachowice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ćmielów", "Kunów", "Opatów", "Ożarów", "Starachowice", "Sandomierz"],

  about: blokOMnie("do Ostrowca", "w Ostrowcu i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ostrowca Świętokrzyskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do okolicznych gmin. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ostrowcu Świętokrzyskim"),
    {
      question: "Co się dzieje, jeśli urządzenie się zepsuje po gwarancji?",
      answer:
        "Zgłaszasz je do serwisu producenta — i możesz to zrobić przeze mnie, także po latach. Naprawa po gwarancji jest płatna i nie będę ukrywać, że potrafi kosztować. Powiem Ci na spotkaniu, jak to wygląda w praktyce u moich klientek, zamiast obiecywać, że nic się nigdy nie psuje.",
    },
    {
      question: "Nie chcę pokazu, chcę konkretów — da się tak?",
      answer:
        "Tak i wolę tak pracować. Umówmy się, że gotujemy jedno danie, a resztę czasu poświęcamy na Twoje pytania: co to robi, czego nie robi, ile kosztuje i co wchodzi w cenę. Jeśli po tym powiesz „nie”, to jest normalna odpowiedź, a nie porażka spotkania.",
    },
  ],

  geo: { lat: 50.9294, lng: 21.3856 },
};
