import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * OZIMEK — miasto nad Małą Panwią, wyrosłe wokół dawnej huty. Stoi tu
 * żeliwny most wiszący z 1827 roku, uznawany za najstarszy tego typu
 * w Europie kontynentalnej. W gminie leży Krasiejów ze stanowiskiem
 * paleontologicznym i parkiem.
 *
 * KĄT: to, co się zużywa. Most, który stoi od dwustu lat, jest jedynym
 * właściwym punktem wyjścia do rozmowy, której nie prowadzi żaden
 * sprzedawca: CO W TYM URZĄDZENIU SIĘ ZUŻYWA I CO TRZEBA BĘDZIE WYMIENIĆ.
 * Uszczelki, noże, koszyk, miarka. Rzecz, którą można naprawić i w której
 * wymienia się części, jest czymś innym niż sprzęt do wyrzucenia — ale
 * tylko wtedy, gdy klientka wie o tym PRZED zakupem, a nie po trzech
 * latach, gdy coś zacznie przeciekać.
 *
 * ŚWIADOME ROZGRANICZENIE WOBEC PIŃCZOWA. Tam kąt „rzeczy kupowane raz"
 * dotyczył PIENIĘDZY — czy się opłaca przy Waszym sposobie gotowania.
 * Tutaj chodzi o SERWIS I CZĘŚCI, czyli o zupełnie inną obawę.
 *
 * CZEGO NIE PODAJĘ: żadnych cen części, żadnych okresów „co ile lat",
 * żadnych deklaracji o polityce serwisowej producenta. Mówię, że powiem
 * to na spotkaniu z aktualnych materiałów — bo to się zmienia, a strona
 * ma być prawdziwa także za dwa lata.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Ozimku stoi żeliwny most wiszący z 1827 roku, uznawany
 *   za najstarszy tego typu w Europie kontynentalnej,
 * — miasto rozwinęło się wokół dawnej huty nad Małą Panwią,
 * — w gminie leży Krasiejów ze stanowiskiem paleontologicznym.
 *
 * CZEGO NIE MA: cen części, częstotliwości wymian, szczegółów technicznych
 * mostu i stanowiska w Krasiejowie.
 */
export const OZIMEK: CityContent = {
  slug: "ozimek",
  h1: "Thermomix Ozimek – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Ozimek — prezentacja i cena",
  seoDescription:
    "Thermomix w Ozimku: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Cena, raty 0%, uczciwie o serwisie i częściach. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ozimek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ozimku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ozimka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Antoniowa, Krasiejowa, Schodni i pozostałych sołectw.",

  highlights: highlightyStandardowe("Ozimek i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ozimku – jak wygląda prezentacja?",
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
      id: "co-sie-zuzywa",
      heading: "Most z tysiąc osiemset dwudziestego siódmego — i pytanie, co się zużywa",
      paragraphs: [
        "W Ozimku stoi żeliwny most wiszący, uznawany za najstarszy tego typu w Europie kontynentalnej. Zbudowano go w tysiąc osiemset dwudziestym siódmym roku przy tutejszej hucie i stoi do dziś. Nie stoi jednak dlatego, że nic się w nim nie psuło — stoi dlatego, że przez dwieście lat ktoś go pilnował i naprawiał.",
        "To jest dobre wprowadzenie do rozmowy, której sprzedawcy zwykle unikają, a którą uważam za obowiązkową. W Thermomixie też są rzeczy, które się zużywają, i lepiej wiedzieć o nich przed zakupem niż po trzech latach.",
        "Zużywa się przede wszystkim uszczelka pod nożami — to najczęstsza wymiana i po jakimś czasie po prostu na nią przychodzi pora. Zużywają się noże, choć znacznie wolniej. Z czasem swoje odrabiają też koszyk, miarka i pokrywka, zwłaszcza jeśli ktoś gotuje codziennie i myje wszystko w zmywarce.",
        "Dobra wiadomość jest taka, że to są części wymienne, a nie powód do wyrzucenia całego urządzenia — i właśnie na tym polega różnica między sprzętem serwisowanym a jednorazowym. Świadomie nie wpisuję tu cen ani tego, co ile lat, bo to się zmienia i nie chcę, żeby ta strona kłamała za dwa lata. Powiem Wam konkretne liczby na spotkaniu, z aktualnych materiałów producenta.",
        "Zapytajcie mnie o to wprost. Klientka, która wie, co ją czeka za trzy lata, jest zadowolona dłużej niż ta, której obiecano, że nigdy nic.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ozimku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Ozimkiem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ozimku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ozimskiej rodziny",
      paragraphs: [
        "W wielu tutejszych domach ktoś pracuje w Opolu albo w zakładach w okolicy, więc dzień kończy się po dojeździe, a obiad powstaje później, niż by chciała osoba, która go robi.",
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
    "Ozimek",
    "Antoniów",
    "Schodnia",
    "Krasiejów",
    "Grodziec",
    "Dylaki",
    "Chobie",
    "Krzyżowa Dolina",
    "Pustków",
    "Szczedrzyk",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Opole, Kolonowskie, Dobrodzień, Zawadzkie i Strzelce Opolskie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Opole", "Kolonowskie", "Dobrodzień", "Zawadzkie", "Strzelce Opolskie"],

  about: blokOMnie("do Ozimka", "w gminie Ozimek i okolicy Opola", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ozimka bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ozimku"),
    {
      question: "Co w tym urządzeniu trzeba będzie wymieniać?",
      answer:
        "Przede wszystkim uszczelkę pod nożami — to najczęstsza wymiana. Wolniej zużywają się noże, a z czasem swoje odrabiają też koszyk, miarka i pokrywka. To są części wymienne, nie powód do wyrzucenia sprzętu. Konkretne ceny i terminy podam na spotkaniu, z aktualnych materiałów producenta.",
    },
    {
      question: "Czy da się to naprawić, czy tylko wymienić na nowe?",
      answer:
        "Da się serwisować i to jest realna różnica wobec sprzętu jednorazowego. Zgłoszenie do serwisu możesz zrobić przeze mnie, także po latach — dzwonisz pod ten sam numer co przy umawianiu prezentacji.",
    },
  ],

  geo: { lat: 50.6739, lng: 18.2183 },
};
