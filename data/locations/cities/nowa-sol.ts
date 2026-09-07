import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * NOWA SÓL — dawny port rzeczny nad Odrą. Miasto przez dziesięciolecia
 * odwrócone od rzeki plecami, które w ostatnich latach do niej wróciło:
 * bulwar, marina, nabrzeże urządzone od nowa.
 *
 * KĄT: powrót do gotowania po latach przerwy. Osoba, która kiedyś
 * gotowała, potem przestała — zamawianie, gotowce, jedzenie poza domem —
 * i chce wrócić, ale nie bardzo wie, od czego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — powrót jest trudny nie z powodu braku umiejętności, tylko z powodu
 *   decyzji: o osiemnastej najtrudniej jest USTALIĆ, co zrobić,
 * — urządzenie zdejmuje stanie nad garnkiem, ale NIE zdejmuje
 *   decydowania ani zakupów — i trzeba to powiedzieć uczciwie,
 * — co realnie pomaga: zacząć od trzech dań, nie od dwudziestu,
 * — i że przerwa w gotowaniu nie jest niczyją porażką.
 *
 * TWARDE GRANICE:
 * — ŻADNEJ OCENY LUDZI, którzy zamawiają albo jedzą gotowce. To nie jest
 *   strona o tym, kto żyje właściwie.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH: że domowe jest zdrowsze, że gotowce
 *   szkodzą, że coś na coś wpływa. Busko-Zdrój ma osobną zasadę o słowie
 *   „zdrowo” i tutaj obowiązuje tak samo.
 * — ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI w złotówkach (zasada z Jarocina).
 *
 * ROZGRANICZENIE. Toruń mówi o błędach pierwszego tygodnia po zakupie,
 * Bydgoszcz o dziecku przy urządzeniu, Stargard o gotowaniu dla dwóch
 * domów. Tutaj chodzi o POWRÓT po dłuższej przerwie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Nowa Sól była portem nad Odrą, a nabrzeże z bulwarem urządzono
 *   na nowo w ostatnich latach.
 */
export const NOWA_SOL: CityContent = {
  slug: "nowa-sol",
  h1: "Thermomix Nowa Sól – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowa Sól — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Nowej Soli: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowa Sól — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowej Soli. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowej Soli z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Nowa Sól i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zaczyna się od trzech dań, nie od dwudziestu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowej Soli – jak wygląda prezentacja?",
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
      id: "powrot-do-gotowania",
      heading: "Miasto, które wróciło nad własną rzekę — i powrót do gotowania",
      paragraphs: [
        "Nowa Sól była portem nad Odrą, a potem przez długie lata stała do rzeki plecami: nabrzeże zarosło, port ucichł i mało kto tam chodził. Dopiero w ostatnich latach miasto wróciło nad wodę i urządziło to miejsce od nowa. Wykorzystam to do sytuacji, o której nie pisze się na stronach ze sprzętem: ktoś kiedyś gotował, potem przestał, a teraz chciałby wrócić.",
        "Przerwa w gotowaniu zdarza się z bardzo różnych powodów i nie jest niczyją porażką. Nie zamierzam nikogo oceniać za zamawianie, za gotowce ani za jedzenie poza domem — to nie jest strona o tym, kto żyje właściwie, a każdy dorosły człowiek sam decyduje, co je.",
        "Powiem natomiast, co w takim powrocie jest naprawdę trudne, bo zwykle mówi się o niewłaściwej rzeczy. Nie chodzi o umiejętności — one wracają po dwóch tygodniach i nikt ich do końca nie zapomina. Chodzi o decyzję. O osiemnastej najtrudniejsze jest USTALENIE, co dziś zrobić, przy pustej głowie i po całym dniu. Samo gotowanie jest przy tym drobiazgiem.",
        "I teraz rzecz, którą muszę powiedzieć uczciwie, bo inaczej sprzedałabym Wam złudzenie. Urządzenie zdejmuje z Was stanie nad garnkiem, pilnowanie i mycie trzech naczyń. Nie zdejmuje decydowania i nie robi zakupów. Jeśli problemem jest wyłącznie „nie wiem, co ugotować”, to sam sprzęt tego nie rozwiąże i szkoda pieniędzy, jeśli kupujecie go w tym celu.",
        "Co pomaga naprawdę: zacząć od trzech dań, nie od dwudziestu. Wybrać trzy rzeczy, które lubicie jeść, zrobić je kilka razy, aż wejdą w rękę, i dopiero potem dokładać. Powrót rozłożony na trzy pozycje udaje się prawie zawsze, a powrót zaczęty od przeglądania tysiąca przepisów kończy się po tygodniu zniechęceniem.",
        "Jeśli jesteście w takim momencie, powiedzcie mi o tym przy umawianiu. Zrobimy na spotkaniu coś prostego i codziennego zamiast dania efektownego — to jest uczciwszy test tego, czy to Wam pomoże wrócić.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowej Soli?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co lubicie jeść — dobiorę dania proste i codzienne, a nie takie, które ładnie wyglądają na pokazie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowej Soli"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla nowosolskiej rodziny",
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

  districtsHeading: "Do których części Nowej Soli dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Zatorze",
    "Pleszówek",
    "Osiedle Konstytucji 3 Maja",
    "Osiedle Kwiatowe",
    "Piaski",
    "Nowe Miasto",
  ],

  nearbyHeading: "Poza Nową Sól też przyjadę",
  nearbyParagraphs: [
    "Kożuchów, Bytom Odrzański, Sulechów i Otyń są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kożuchów", "Bytom Odrzański", "Sulechów", "Szprotawa", "Zielona Góra", "Głogów"],

  about: blokOMnie("do Nowej Soli", "w Nowej Soli i okolicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowej Soli bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Nowej Soli"),
    {
      question: "Od lat prawie nie gotuję. Czy to ma sens?",
      answer:
        "Może mieć, ale powiem uczciwie, na co to nie pomoże. Urządzenie zdejmuje stanie nad garnkiem, pilnowanie i mycie kilku naczyń — nie zdejmuje decydowania, co zrobić, ani zakupów. Jeśli problemem jest wyłącznie „nie wiem, co ugotować”, sam sprzęt tego nie rozwiąże.",
    },
    {
      question: "Od czego zacząć po dłuższej przerwie?",
      answer:
        "Od trzech dań, nie od dwudziestu. Wybierzcie trzy rzeczy, które lubicie jeść, i zróbcie je kilka razy, aż wejdą w rękę — dopiero potem dokładajcie kolejne. Powrót zaczęty od przeglądania tysiąca przepisów kończy się zwykle zniechęceniem po tygodniu.",
    },
  ],

  geo: { lat: 51.8027, lng: 15.7168 },
};
