import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * PŁOCK — miasto nad Wisłą z wzgórzem katedralnym i największą polską
 * rafinerią. Miejsce, w którym o energii mówi się na co dzień i konkretnie.
 *
 * KĄT: ile to zżera prądu. Miasto żyjące z paliw jest jedynym właściwym
 * miejscem na pytanie, które pada na co drugim spotkaniu i na które
 * sprzedawcy odpowiadają mgliście: CZY TO PODNIESIE RACHUNEK ZA PRĄD.
 *
 * ŻELAZNA ZASADA TEJ SEKCJI: NIE PODAJEMY ŻADNYCH LICZB. Ani watów,
 * ani kilowatogodzin, ani złotówek. Powód jest podwójny: po pierwsze,
 * zużycie zależy od tego, co i jak długo się gotuje, po drugie — stawka
 * zależy od taryfy i zmienia się co roku. Każda liczba wpisana na stałe
 * na stronę byłaby albo zmyślona, albo nieaktualna za pół roku.
 * Piszemy PORÓWNANIAMI, które są prawdziwe niezależnie od cennika:
 * mniej niż piekarnik, podobnie do czajnika w czasie grzania, a potem
 * znacznie mniej, bo urządzenie tylko utrzymuje temperaturę.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Płocku działa duża rafineria,
 * — miasto leży nad Wisłą, na wysokiej skarpie, i ma wzgórze katedralne.
 *
 * CZEGO NIE MA: nazw firm, danych o produkcji, cen energii, mocy urządzenia.
 */
export const PLOCK: CityContent = {
  slug: "plock",
  h1: "Thermomix Płock – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Płock — prezentacja i cena",
  seoDescription:
    "Thermomix w Płocku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Płock — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Płocku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Płocka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Płock i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Płocku – jak wygląda prezentacja?",
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
      id: "ile-pradu",
      heading: "Miasto, które zna się na energii — więc pogadajmy o rachunku",
      paragraphs: [
        "W Płocku o energii mówi się konkretnie i bez owijania, bo połowa miasta zna się na tym zawodowo. To dobre miejsce na pytanie, które pada u mnie na co drugim spotkaniu, a odpowiedzi zwykle są mgliste: czy to urządzenie podniesie rachunek za prąd.",
        "Zacznę od tego, czego nie zrobię. Nie podam Wam żadnej liczby — ani watów, ani złotówek miesięcznie. Nie dlatego, że nie wiem, tylko dlatego, że taka liczba byłaby nieuczciwa: zużycie zależy od tego, co gotujecie i jak długo, a stawka od Waszej taryfy, która zmienia się co roku. Każdy, kto podaje Wam konkretną kwotę oszczędności miesięcznej, zmyśla albo przepisuje coś sprzed lat.",
        "Powiem natomiast to, co jest prawdą niezależnie od cennika, czyli porównania.",
        "Urządzenie pobiera najwięcej w tej fazie, w której podgrzewa — mniej więcej tak jak czajnik, gdy gotuje wodę. Potem, kiedy tylko utrzymuje ustawioną temperaturę i miesza, pobór spada wyraźnie, bo w zamkniętym naczyniu ciepło nie ucieka. To jest zupełnie inna sytuacja niż garnek na płycie, z którego para leci w powietrze przez pół godziny.",
        "Z piekarnikiem porównania nie ma w ogóle. Piekarnik nagrzewa dużą, otwieraną komorę i robi to długo. Jeśli coś, co dotąd robiliście w piekarniku, da się zrobić w tym urządzeniu, rachunek na tym zyskuje, a nie traci.",
        "Uczciwe podsumowanie brzmi tak: to nie jest sprzęt, który obniży Wam rachunek na tyle, żeby było to widać na wydruku, i nie będę tego sprzedawać jako zalety. Nie podniesie go też w sposób, który dałoby się zauważyć. Prąd jest tu po prostu nieistotny — a jeśli ktoś próbuje Was przekonać liczbami w którąkolwiek stronę, warto zapytać, skąd je wziął.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Płocku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Płocku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla płockiej rodziny",
      paragraphs: [
        "Gdy w domu pracuje się na zmiany, obiad rzadko powstaje o jednej porze, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Płocka i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Śródmieście",
    "Podolszyce Północ",
    "Podolszyce Południe",
    "Skarpa",
    "Dobrzyńska",
    "Międzytorze",
    "Radziwie",
    "Borowiczki",
    "Trzepowo",
  ],

  nearbyHeading: "Poza Płock też przyjadę",
  nearbyParagraphs: [
    "Gostynin, Sierpc, Płońsk i Wyszogród są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Gostynin", "Sierpc", "Płońsk", "Wyszogród", "Raciąż"],

  about: blokOMnie("do Płocka", "w Płocku i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Płocka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Płocku"),
    {
      question: "Czy to urządzenie podniesie mi rachunek za prąd?",
      answer:
        "Nie w sposób, który dałoby się zauważyć na wydruku — i w drugą stronę też nie obniży go zauważalnie. Najwięcej pobiera podczas podgrzewania, mniej więcej jak czajnik gotujący wodę; potem, gdy tylko utrzymuje temperaturę w zamkniętym naczyniu, wyraźnie mniej niż garnek na płycie. Z piekarnikiem porównania nie ma w ogóle.",
    },
    {
      question: "Dlaczego nie podajesz konkretnych liczb?",
      answer:
        "Bo byłyby nieuczciwe. Zużycie zależy od tego, co i jak długo gotujesz, a stawka od Twojej taryfy, która zmienia się co roku. Kto podaje konkretną kwotę oszczędności miesięcznej, zmyśla albo przepisuje coś sprzed lat — warto wtedy zapytać, skąd ją wziął.",
    },
  ],

  geo: { lat: 52.5463, lng: 19.7065 },
};
