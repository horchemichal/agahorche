import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * SZCZYTNO — miasto nad jeziorem, z ruinami zamku krzyżackiego
 * w centrum. Z okazałej budowli zostało to, co przetrwało — a nie to,
 * jak wyglądała w dniu, w którym zrobiła największe wrażenie.
 *
 * KĄT: prezentacja wypadła świetnie i właśnie dlatego trzeba być
 * ostrożnym. Rozdźwięk między udanym pokazem a decyzją na lata —
 * temat, którego z definicji nie porusza nikt, kto ten pokaz prowadzi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — prezentacja jest ustawiona tak, żeby wypadła dobrze: wybrane dania,
 *   przygotowane składniki, osoba, która robi to setny raz. To nie jest
 *   oszustwo, ale też nie jest test,
 * — dobre wrażenie z godziny nie mówi nic o trzeciej środzie listopada,
 * — co jest lepszym testem: ugotować SWOJE zwykłe danie, samodzielnie,
 *   i przespać się z decyzją,
 * — i że dobre wrażenie u klientki jest korzystne dla Agi — więc to
 *   ostrzeżenie idzie wprost przeciwko jej interesowi.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO UDAWANIA SKROMNOŚCI JAKO CHWYTU. Sekcja ma być rzeczowa,
 *   nie kokieteryjna („jestem taka szczera, więc kupujcie").
 * — ŻADNYCH OBIETNIC O OKRESIE PRÓBNYM ANI ZWROTACH (zasada ze Śremu).
 * — ŻADNYCH TERMINÓW ODSTĄPIENIA (zasada z Sieradza).
 *
 * ROZGRANICZENIE. Śrem mówi o prośbie o wypożyczenie przed decyzją,
 * Jarocin o chwytach sprzedażowych, Sieradz o wycofaniu się po podpisie,
 * Żyrardów o zapale, który opada po zakupie. Tutaj chodzi o TO, ŻE SAMA
 * PREZENTACJA NIE JEST DOWODEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Szczytnie, nad jeziorem, znajdują się ruiny zamku krzyżackiego.
 */
export const SZCZYTNO: CityContent = {
  slug: "szczytno",
  h1: "Thermomix Szczytno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szczytno — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Szczytnie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szczytno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szczytnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szczytna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Szczytno i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Udany pokaz nie jest dowodem. Dowodem jest zwykła środa.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szczytnie – jak wygląda prezentacja?",
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
      id: "udany-pokaz-to-nie-dowod",
      heading: "Zamek, z którego zostały ruiny — i prezentacja, która wypadła świetnie",
      paragraphs: [
        "W centrum Szczytna, nad jeziorem, stoją ruiny zamku. Została z niego nie ta wersja, która robiła największe wrażenie, tylko ta, która przetrwała — i to jest rozróżnienie warte zapamiętania także przy zakupie sprzętu. Napiszę więc o czymś, o czym z definicji nie mówi nikt, kto prowadzi pokazy: o tym, że udana prezentacja nie jest dowodem.",
        "Zacznę od rzeczy, którą powinnam powiedzieć jako pierwsza, choć nie brzmi korzystnie. Prezentacja jest ustawiona tak, żeby wypadła dobrze. Dania są sprawdzone, składniki przygotowane, a prowadzi ją osoba, która robi to samo setny raz i wie, gdzie nie należy improwizować. To nie jest oszustwo — ale to również nie jest test. To pokaz i tak trzeba go nazywać.",
        "Dobre wrażenie z tej godziny nie mówi nic o trzeciej środzie listopada, kiedy w kuchni jesteście sami, składniki są takie, jakie akurat są, a czasu jest mniej, niż potrzeba. Tam rozstrzyga się, czy zakup miał sens — nie na spotkaniu, przy mnie i przy dobranym przeze mnie daniu.",
        "Dlatego proponuję coś, co jest lepszym sprawdzianem, i robię to na własnych spotkaniach. Po pierwsze: gotujmy Wasze zwykłe danie, nie moje efektowne. Po drugie: niech urządzenie prowadzi ta osoba, która będzie z niego korzystać, a ja się nie wtrącam i nie poprawiam. Po trzecie: prześpijcie się z decyzją. Jeśli następnego ranka nadal ma to sens, to jest sygnał wart znacznie więcej niż wieczorny entuzjazm.",
        "Zdaję sobie sprawę, jak to brzmi z ust osoby, która na tej decyzji zarabia. Dobre wrażenie jest dla mnie korzystne, a ta sekcja idzie wprost przeciwko mojemu interesowi. Piszę ją mimo to, bo zakupy podjęte pod wrażeniem chwili wracają — najpierw jako żal, a potem jako sprzęt stojący w szafce, o którym ktoś opowiada znajomym, że się nie sprawdził.",
        "Czego natomiast nie zrobię: nie obiecam Wam okresu próbnego, zwrotu ani żadnych terminów na rozmyślenie się. Nie ustalam takich zasad i nie będę składać obietnic w cudzym imieniu. To, co obowiązuje w Waszej sytuacji, jest w dokumentach do podpisu i warto je przeczytać przed, a nie po. Ja mogę zaoferować tylko to, co jest w mojej mocy: brak pośpiechu i drugie spotkanie, jeśli będzie potrzebne.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szczytnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie, co jecie w zwykłą środę — zrobimy to na spotkaniu, i niech prowadzi ta osoba, która będzie z tego korzystać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szczytnie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla szczycieńskiej rodziny",
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

  districtsHeading: "Do których części Szczytna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Osiedle Tysiąclecia",
    "Osiedle Curie-Skłodowskiej",
    "Nad Jeziorem",
    "Osiedle Wielbark",
    "Lipowa Góra",
    "Osiedle Piłsudskiego",
  ],

  nearbyHeading: "Poza Szczytno też przyjadę",
  nearbyParagraphs: [
    "Pasym, Wielbark, Jedwabno i Dźwierzuty są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pasym", "Wielbark", "Jedwabno", "Olsztyn", "Mrągowo", "Nidzica"],

  about: blokOMnie("do Szczytna", "w Szczytnie i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Szczytna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Szczytnie"),
    {
      question: "Prezentacja wypadła świetnie. Czy to znaczy, że warto kupić?",
      answer:
        "Niekoniecznie i wolę to powiedzieć wprost. Prezentacja jest ustawiona tak, żeby wypadła dobrze: sprawdzone dania, przygotowane składniki, osoba robiąca to setny raz. To nie oszustwo, ale też nie test. Rozstrzyga trzecia środa listopada, kiedy jesteście w kuchni sami.",
      },
    {
      question: "Co byłoby lepszym sprawdzianem?",
      answer:
        "Ugotować na spotkaniu Wasze zwykłe danie zamiast mojego efektownego, oddać urządzenie w ręce osoby, która będzie z niego korzystać, i przespać się z decyzją. Jeśli następnego ranka nadal ma to sens, to sygnał wart więcej niż wieczorny entuzjazm.",
    },
  ],

  geo: { lat: 53.5628, lng: 20.9856 },
};
