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
 * ROPCZYCE — miasto dokładnie w połowie drogi między Dębicą a Rzeszowem,
 * przy autostradzie i magistrali kolejowej. Siedziba powiatu
 * ropczycko-sędziszowskiego.
 *
 * KĄT: to jest pas dojazdowy — miasto, z którego jedni jadą do pracy
 * na wschód, drudzy na zachód, a część zostaje na miejscu. Wszyscy jednak
 * wracają o innej porze, a to daje kuchenną sytuację, którą znam z całego
 * regionu, ale tutaj jest wzorcowa: OBIAD JAKO SERIA TALERZY. Ten temat
 * pojawia się na wielu stronach jako wątek poboczny — na tej jest
 * głównym, i dlatego mówimy o nim konkretniej: co to naprawdę znaczy dla
 * jakości jedzenia, a nie tylko dla kalendarza.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Ropczyce leżą między Dębicą a Rzeszowem, przy autostradzie A4
 *   i magistrali kolejowej,
 * — miasto jest siedzibą powiatu ropczycko-sędziszowskiego (Sędziszów
 *   Małopolski, Iwierzyce, Ostrów, Wielopole Skrzyńskie),
 * — w Ropczycach działają zakłady materiałów ogniotrwałych o wieloletniej
 *   tradycji,
 * — dzielnice: Śródmieście, Chechły, Witkowice, Granice, Pietrzejowa,
 *   Brzyzna, Czekaj.
 *
 * CZEGO NIE MA: czasów dojazdu w minutach, danych o zatrudnieniu,
 * statystyk dojazdów do pracy.
 */
export const ROPCZYCE: CityContent = {
  slug: "ropczyce",
  h1: "Thermomix Ropczyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Ropczyce — prezentacja i cena",
  seoDescription:
    "Thermomix w Ropczycach: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ropczyce — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ropczycach i w okolicy. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Ropczyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Chechłach, Witkowicach czy Granicach. Prezentacja i dojazd są bezpłatne, także do gmin powiatu.",

  highlights: highlightyStandardowe("Ropczyce i cały powiat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ropczycach – jak wygląda prezentacja?",
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
      id: "seria-talerzy",
      heading: "Obiad, który nikt nie je razem — i co to robi z jedzeniem",
      paragraphs: [
        "Ropczyce leżą dokładnie w połowie drogi między Dębicą a Rzeszowem, przy autostradzie i przy torach. Jedni jadą stąd do pracy na wschód, drudzy na zachód, część pracuje na miejscu — i prawie nikt nie wraca o tej samej godzinie.",
        "Efekt zna każdy dom w tym pasie: obiad przestaje być posiłkiem, a staje się serią talerzy rozłożoną na kilka godzin. Zwykle nikt tego nie kwestionuje, bo tak wyszło. Warto jednak nazwać, co to naprawdę robi z jedzeniem, bo to jest sedno sprawy.",
        "Danie ugotowane o czternastej i zjedzone o dwudziestej przechodzi trzy odgrzania. Za pierwszym razem jest dobre. Za drugim mięso robi się suche, ziemniaki gumowate, a sos się rozwarstwia. Za trzecim to już nie jest to danie — i wtedy ktoś sięga po coś z lodówki albo zamawia.",
        "Tu jest realna wartość tego urządzenia, i nie ma nic wspólnego z liczbą funkcji. Po pierwsze, danie może powstać później, bo nie wymaga stania przy garnku — więc nie musi czekać sześciu godzin. Po drugie, odgrzewanie na parze jest zupełnie inne niż w mikrofalówce: nie wysusza, tylko podgrzewa wilgotnym ciepłem. Trzeci talerz smakuje wtedy jak pierwszy, a to jest cała różnica między „coś odgrzeję” a „usiądę i zjem”.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ropczycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość — jeżdżę też do Sędziszowa, Ostrowa, Iwierzyc i Wielopola Skrzyńskiego, a od kierunku zależy tylko godzina spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ropczycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ropczyckiej rodziny",
      paragraphs: [
        "Gdy każdy wraca o innej porze, gotuje zwykle jedna osoba — i robi to o godzinie, która nie jest wygodna dla nikogo, łącznie z nią samą.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu — po zupie nie zostaje garnek, blender i sitko.",
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

  districtsHeading: "Do których części Ropczyc dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Chechły",
    "Witkowice",
    "Granice",
    "Pietrzejowa",
    "Brzyzna",
    "Czekaj",
    "Osiedle Św. Barbary",
  ],

  nearbyHeading: "Cały powiat i okolice",
  nearbyParagraphs: [
    "Sędziszów Małopolski, Ostrów, Iwierzyce i Wielopole Skrzyńskie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też do Dębicy i Rzeszowa.",
  ],
  nearbyTowns: [
    "Sędziszów Małopolski",
    "Dębica",
    "Rzeszów",
    "Mielec",
    "Strzyżów",
    "Kolbuszowa",
  ],

  about: blokOMnie("do Ropczyc", "w Ropczycach i całym powiecie", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ropczyc bez dodatkowej opłaty?",
      answer:
        "Tak, do Ropczyc i do całego powiatu ropczycko-sędziszowskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ropczycach"),
    {
      question: "U nas każdy je o innej porze — czy odgrzewanie w Thermomiksie coś zmienia?",
      answer:
        "Zmienia i to jest chyba najbardziej niedoceniana rzecz w tym urządzeniu. Odgrzewanie na parze podgrzewa wilgotnym ciepłem, więc mięso nie wysycha, a ziemniaki nie robią się gumowate — inaczej niż w mikrofalówce. Przy trzech turach obiadu to jest różnica między „coś odgrzeję” a normalnym posiłkiem. Na prezentacji chętnie pokażę to na czymś, co u Was zostaje z obiadu.",
    },
    {
      question: "Czy przyjedziesz do Sędziszowa albo Wielopola?",
      answer:
        "Tak, jeżdżę po całym powiecie. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 50.0522, lng: 21.6111 },
};
