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
 * KWIDZYN — zamek z gdaniskiem: wieżą połączoną z zamkiem długim,
 * krytym gankiem wspartym na arkadach. Budowla, która istnieje dlatego,
 * że trzeba było obejść przeszkodę i doprowadzić do celu inną drogą.
 *
 * KĄT: zamienniki. Co zrobić, gdy w przepisie jest składnik, którego
 * nie ma w domu, nie ma w sklepie albo się go nie je.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — zamiana prawie zawsze zmienia wynik i uczciwie jest to zapowiedzieć,
 *   zamiast obiecywać, że „wyjdzie tak samo”,
 * — są zamiany bezpieczne dla efektu i takie, po których lepiej po prostu
 *   ugotować coś innego,
 * — czego Aga NIE zrobi: nie poda przeliczników z pamięci ani nie będzie
 *   doradzać przy alergiach i dietach zdrowotnych,
 * — i że to nie jest wada urządzenia: przy każdym gotowaniu jest tak samo.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PROPORCJI I PRZELICZNIKÓW Z GŁOWY („zamiast X dajesz tyle Y”).
 * — ŻADNYCH PORAD PRZY ALERGIACH, NIETOLERANCJACH I DIETACH LECZNICZYCH.
 *   To jest dziedzina, w której zła rada realnie szkodzi (zasada
 *   ze Skierniewic). Kierować do lekarza lub dietetyka, nie do siebie.
 * — ŻADNYCH USTAWIEŃ URZĄDZENIA z pamięci.
 *
 * ROZGRANICZENIE. Łomża mówi o rodzinnym przepisie bez miar, Wołomin
 * o gotowaniu z własnych przepisów zamiast prowadzonych. Tutaj chodzi
 * wyłącznie o BRAKUJĄCY SKŁADNIK.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — zamek w Kwidzynie ma charakterystyczne gdanisko połączone z zamkiem
 *   długim, krytym gankiem na arkadach.
 */
export const KWIDZYN: CityContent = {
  slug: "kwidzyn",
  h1: "Thermomix Kwidzyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kwidzyn — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kwidzynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kwidzyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kwidzynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kwidzyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Kwidzyn i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Danie przygotowane w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Brakującego składnika da się często obejść — ale nie zawsze bez śladu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kwidzynie – jak wygląda prezentacja?",
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
      id: "zamienniki",
      heading: "Miasto zamku z gdaniskiem — czyli jak obejść brakujący składnik",
      paragraphs: [
        "Kwidzyński zamek ma rzecz, jakiej nie ma prawie nigdzie indziej: wieżę połączoną z resztą długim, krytym gankiem na arkadach. Zbudowano ją tak, bo trzeba było obejść przeszkodę i doprowadzić do celu inną drogą. Wykorzystam to do sprawy, która w kuchni wraca co tydzień: w przepisie jest składnik, którego nie mam, nie ma go w sklepie albo się go u nas nie je.",
        "Zacznę od zdania, którego nie usłyszycie od sprzedawcy: zamiana prawie zawsze zmienia wynik. Czasem tylko trochę, czasem tak, że danie przestaje być tym samym daniem. Obiecywanie, że „wyjdzie dokładnie tak samo”, jest po prostu nieprawdą i lepiej wiedzieć o tym przed, niż być rozczarowanym po.",
        "Praktycznie warto rozdzielić dwie sytuacje. Bywają zamiany, które nie robią wielkiej różnicy — inne zioło, inny rodzaj kaszy, inne warzywo o podobnej twardości w zupie, która i tak będzie zmiksowana. I bywają takie, po których sensowniej jest zwyczajnie ugotować coś innego: gdy brakujący składnik odpowiada za konsystencję albo za to, że coś w ogóle się wiąże. Wtedy zamiana kończy się zmarnowaniem reszty produktów, a nie oszczędnością.",
        "Czego nie zrobię: nie podam Wam z pamięci przeliczników w stylu „zamiast tego dajesz tyle tamtego”. Takie liczby brzmią pomocnie, a wymyślone psują danie — i ja bym się o tym nawet nie dowiedziała. Jeśli macie konkretny przepis, wolę sprawdzić i odpowiedzieć rzetelnie, niż powiedzieć coś od ręki, żeby brzmieć kompetentnie.",
        "Osobna sprawa, przy której jestem stanowcza: alergie, nietolerancje i diety zalecone przez lekarza. Tu nie doradzam w ogóle, nawet gdy pytanie wydaje się drobne. To jest dziedzina, w której zła podpowiedź komuś realnie szkodzi, a ja nie jestem ani lekarką, ani dietetyczką. Z takim pytaniem trzeba iść do kogoś, kto zna Waszą sytuację, a nie do przedstawicielki handlowej.",
        "I rzecz uspokajająca na koniec: to nie jest wada urządzenia ani powód, żeby się do niego zniechęcać. Z brakującym składnikiem tak samo mierzy się każdy, kto gotuje w garnku od trzydziestu lat. Różnica jest jedynie taka, że nieudaną próbę robi się tu w jednym naczyniu i mniej się przy tym traci nerwów.",
      ],
      links: [
        { href: "/diety/zamienniki", label: "Zamienniki składników" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kwidzynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czego u Was nie jecie — dobiorę dania tak, żeby nic nie trzeba było obchodzić na siłę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kwidzynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kwidzyńskiej rodziny",
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

  districtsHeading: "Do których części Kwidzyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Osiedle Piastowskie",
    "Osiedle Bajkowe",
    "Miłosna",
    "Zatorze",
    "Górki",
    "Nowy Dwór",
  ],

  nearbyHeading: "Poza Kwidzyn też przyjadę",
  nearbyParagraphs: [
    "Sztum, Prabuty, Gniew i Ryjewo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sztum", "Prabuty", "Gniew", "Malbork", "Grudziądz", "Tczew"],

  about: blokOMnie("do Kwidzyna", "w Kwidzynie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kwidzyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kwidzynie"),
    {
      question: "Co zrobić, gdy brakuje jednego składnika z przepisu?",
      answer:
        "Zamiana prawie zawsze zmienia wynik — czasem nieznacznie, czasem tak, że danie przestaje być tym samym daniem. Zioło, rodzaj kaszy czy warzywo o podobnej twardości w zupie zwykle nie robią różnicy. Gorzej, gdy brakujący składnik odpowiada za konsystencję albo za to, że coś się wiąże — wtedy sensowniej ugotować coś innego niż zmarnować resztę produktów.",
    },
    {
      question: "Doradzisz zamienniki przy alergii albo diecie od lekarza?",
      answer:
        "Nie, i to jest świadoma odmowa. Nie jestem lekarką ani dietetyczką, a zła podpowiedź w takiej sprawie realnie komuś szkodzi. Z takim pytaniem trzeba iść do kogoś, kto zna Waszą sytuację, a nie do przedstawicielki handlowej.",
    },
  ],

  geo: { lat: 53.7311, lng: 18.9311 },
};
