import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * PABIANICE — jedno z najstarszych miast regionu, z renesansowym dworem
 * kapituły krakowskiej w centrum; prawa miejskie miało na długo przed tym,
 * zanim Łódź stała się miastem przemysłowym. Dziś połączone z Łodzią linią
 * tramwajową i codziennym ruchem.
 *
 * KĄT: ile da się unieść. Codzienny dojazd tramwajem to zupełnie inna
 * sytuacja niż dojazd samochodem i nikt o tym nie pisze, bo wydaje się
 * zbyt banalne. A różnica jest twarda: SAMOCHODEM PRZYWOZI SIĘ TYLE,
 * ILE MIEŚCI BAGAŻNIK, A TRAMWAJEM TYLE, ILE SIĘ UNIESIE W DWÓCH RĘKACH.
 * To zmienia zakupy, a przez to zmienia gotowanie: kupuje się częściej,
 * mniej i lżej, a duże zakupy stają się osobną wyprawą raz na jakiś czas.
 *
 * ROZGRANICZENIE. Opole dostało kąt „małe zakupy częściej", ale tam
 * powodem jest wielkość miasta i to, że wszędzie jest blisko. Tu powodem
 * jest środek transportu i ciężar siatek — inna przyczyna, inne wnioski
 * (m.in. ten o produktach suchych i o tym, czego NIE trzeba dźwigać).
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Pabianice są jednym z najstarszych miast regionu i mają w centrum
 *   renesansowy dwór dawnej kapituły krakowskiej,
 * — miasto łączy z Łodzią linia tramwajowa,
 * — Pabianice były ośrodkiem przemysłu włókienniczego.
 *
 * CZEGO NIE MA: rozkładów jazdy, czasów przejazdu, danych o dojazdach
 * do pracy.
 */
export const PABIANICE: CityContent = {
  slug: "pabianice",
  h1: "Thermomix Pabianice – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Pabianice — prezentacja i cena",
  seoDescription:
    "Thermomix w Pabianicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pabianice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pabianicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pabianic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Pabianice i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pabianicach – jak wygląda prezentacja?",
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
      id: "ile-da-sie-uniesc",
      heading: "Tramwajem przywozi się tyle, ile się uniesie",
      paragraphs: [
        "Pabianice są starsze od przemysłowej Łodzi — w centrum stoi renesansowy dwór, który pamięta czasy, gdy Łódź była wsią. Dziś oba miasta łączy tramwaj i codzienny ruch w obie strony, i właśnie z tego bierze się rzecz, o której chcę napisać.",
        "Kto dojeżdża tramwajem, ten zna to na pamięć: wracając z pracy, przywozi się tyle, ile da się unieść w dwóch rękach przez przystanek, przejście i klatkę schodową. Nie ma bagażnika. Nie ma „dorzucę jeszcze wodę i pięć kilo ziemniaków”. Ciężar jest realnym ograniczeniem, a nie drobiazgiem.",
        "Kuchennie wynikają z tego dwie rzeczy. Pierwsza: kupuje się częściej i lżej, więc w lodówce rzadko jest wszystko naraz — obiad powstaje z tego, co akurat jest, a nie z listy. Druga: duże, ciężkie zakupy stają się osobną wyprawą raz na jakiś czas, samochodem albo z dowozem, i wtedy przywozi się głównie rzeczy suche i trwałe.",
        "To ustawia zupełnie inaczej, co w urządzeniu jest dla Was warte pieniędzy. Najbardziej przyda się to, co robi porządne danie z produktów lekkich i tanich, które i tak macie w szafce: z kaszy, ryżu, makaronu, soczewicy, mrożonek i jednego warzywa. Zupa krem, sos, danie jednogarnkowe, ciasto z mąki i tego, co zostało.",
        "Za to cała opowieść o gotowaniu na zapas w wielkich garnkach jest w takim domu mniej użyteczna, bo najpierw trzeba by ten zapas przydźwigać. Nie będę więc jej Wam sprzedawać jako głównej zalety — zamiast tego na prezentacji ugotujemy coś z Waszej szafki.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz w lodówce" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pabianicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro — przy starszej zabudowie brak windy zmienia tylko to, ile rzeczy wnoszę za jednym razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pabianicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pabianickiej rodziny",
      paragraphs: [
        "Gdy dorośli dojeżdżają do pracy, dzień kończy się po powrocie, a obiad powstaje z tego, co akurat jest w domu — i robi go zwykle jedna osoba.",
        "Thermomix pomaga tym, że z prostych, lekkich produktów robi porządne danie i nie wymaga obecności. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których części Pabianic i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Nowe Miasto",
    "Bugaj",
    "Piaski",
    "Dąbrowa",
    "Klimkowizna",
    "Jutrzkowice",
    "Karniszewice",
    "Wola Zaradzyńska",
  ],

  nearbyHeading: "Poza Pabianice też przyjadę",
  nearbyParagraphs: [
    "Łódź, Konstantynów Łódzki, Łask, Rzgów i Tuszyn są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łódź", "Konstantynów Łódzki", "Łask", "Rzgów", "Tuszyn", "Zduńska Wola"],

  about: blokOMnie("do Pabianic", "w Pabianicach i okolicy Łodzi", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pabianic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pabianicach"),
    {
      question: "Nie robimy dużych zakupów, bo nie mamy czym. Czy to urządzenie ma sens?",
      answer:
        "Ma, tylko z innego powodu, niż zwykle się mówi. Nie będę Wam sprzedawać gotowania na zapas w wielkich garnkach, bo najpierw trzeba by ten zapas przydźwigać. Liczy się to, żeby z kaszy, makaronu, mrożonek i jednego warzywa powstał porządny obiad bez stania przy garnku.",
    },
    {
      question: "Mieszkam na czwartym piętrze bez windy. To problem przy dostawie?",
      answer:
        "Nie, tylko dobrze uprzedzić przy umawianiu — wtedy planuję kilka minut więcej i wnoszę mniej rzeczy za jednym razem. Samo urządzenie waży tyle, że da się je wnieść jednorazowo.",
    },
  ],

  geo: { lat: 51.6644, lng: 19.3547 },
};
