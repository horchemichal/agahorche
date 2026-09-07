import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * BIELAWA — dawne miasto włókiennicze u stóp Gór Sowich. Przez
 * pokolenia pracowano tu długie godziny przy cudzych krosnach.
 *
 * KĄT: poczucie, że to fanaberia. Wstyd przed wydaniem dużych pieniędzy
 * na własną wygodę — u osoby, która bez wahania wydałaby tyle samo
 * na dziecko, dom albo samochód.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — to nie jest wyrzut sumienia „o pieniądze", tylko o to, komu wolno
 *   je wydać na siebie — a to zupełnie inna sprawa,
 * — Aga nie jest tu bezstronna i mówi to od razu: zarabia na tej
 *   decyzji, więc nie jest właściwą osobą do rozstrzygania takich
 *   dylematów,
 * — czego NIE użyje: zdania „należy Ci się" i całej tej retoryki —
 *   to jest chwyt, a nie argument,
 * — co można zrobić uczciwie: przeliczyć to na własne godziny i tygodnie
 *   zamiast na uczucia, i podjąć decyzję na spokojnie.
 *
 * TWARDE GRANICE:
 * — ŻADNEJ RETORYKI „zasługujesz", „zrób coś dla siebie", „jesteś tego
 *   warta". To jest dokładnie ten chwyt, którego Aga nie używa.
 * — ŻADNYCH PORAD FINANSOWYCH ani oceniania, na co kogo stać.
 * — ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI w złotówkach (zasada z Jarocina).
 * — Nie moralizować i nie rozczulać się nad nikim.
 *
 * ROZGRANICZENIE. Bełchatów mówi o wysokości raty, Jarocin o chwytach
 * sprzedażowych, Żyrardów o tym, co zostaje po opadnięciu zapału.
 * Tutaj chodzi o WEWNĘTRZNĄ ZGODĘ na wydatek dla siebie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Bielawa leży u stóp Gór Sowich i była miastem włókienniczym.
 */
export const BIELAWA: CityContent = {
  slug: "bielawa",
  h1: "Thermomix Bielawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bielawa — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Bielawie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bielawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bielawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bielawy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Bielawa i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie powiem Wam, że Wam się należy. To chwyt, a nie argument.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bielawie – jak wygląda prezentacja?",
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
      id: "czy-to-nie-fanaberia",
      heading: "Miasto krosien pod Górami Sowimi — i pytanie, czy to nie fanaberia",
      paragraphs: [
        "Bielawa przez pokolenia żyła z włókiennictwa: pracowano tu długo i przy cudzych maszynach. Wykorzystam to do rzeczy, którą słyszę w wielu domach półgłosem, zwykle przy odprowadzaniu mnie do drzwi: przecież to fanaberia, przecież to tylko dla mnie.",
        "Warto zauważyć, że to nie jest wyrzut sumienia dotyczący pieniędzy jako takich. Te same osoby wydają podobne kwoty na dziecko, na dom, na samochód i nie zastanawiają się ani chwili. Wątpliwość pojawia się dopiero wtedy, gdy wydatek dotyczy własnej wygody, i to jest zupełnie inna sprawa niż budżet.",
        "Muszę tu jednak powiedzieć coś, co osłabia moją pozycję, a bez czego reszta byłaby nieuczciwa: ja nie jestem w tej sprawie bezstronna. Zarabiam wtedy, gdy podejmiecie decyzję na tak. Jestem więc ostatnią osobą, która powinna Wam rozstrzygać dylemat o tym, na co wolno Wam wydać własne pieniądze, i nie zamierzam tego robić.",
        "Nie usłyszycie też ode mnie zdania „należy Ci się” ani niczego z tej rodziny. To jest chwyt, a nie argument: brzmi ciepło, niczego nie tłumaczy i został wymyślony dokładnie po to, żeby zamknąć rozmowę wtedy, gdy klientka się waha. Nie używam go i nie zamierzam zacząć.",
        "Jedyne, co mogę zaproponować uczciwie, to przełożenie tego z uczuć na rzeczy policzalne — Waszą własną ręką, nie moją. Ile razy w tygodniu gotujecie. Ile z tego czasu schodzi na stanie i pilnowanie. Co robilibyście zamiast tego. To są konkretne liczby z Waszego tygodnia i one wystarczą, żeby podjąć decyzję bez żadnych wzruszeń. Nie będę Wam za to liczyć oszczędności na jedzeniu — to naciągane wyliczenia, których nie stosuję.",
        "Nie ocenię też żadnego wyniku takiego rachunku. Jeśli wyjdzie, że warto — dobrze. Jeśli wyjdzie, że nie — też dobrze, i nie będę wracać z telefonem za tydzień. Naprawdę wolę, żeby ta decyzja zapadła u Was w kuchni po moim wyjściu, na spokojnie, niż przy mnie pod wpływem miłej godziny.",
      ],
      links: [{ href: "/finansowanie", label: "Finansowanie i raty" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bielawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Nie musisz być zdecydowana, żeby się umówić — spotkanie jest bezpłatne i nie kończy się niczyim zobowiązaniem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bielawie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bielawskiej rodziny",
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

  districtsHeading: "Do których części Bielawy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Osiedle Włókniarzy",
    "Bielawa Dolna",
    "Bielawa Górna",
    "Osiedle Jana Pawła II",
    "Nowa Bielawa",
    "Osiedle Wysokie",
    "Sowia",
  ],

  nearbyHeading: "Poza Bielawę też przyjadę",
  nearbyParagraphs: [
    "Dzierżoniów, Pieszyce, Piława Górna i Nowa Ruda są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Dzierżoniów", "Pieszyce", "Piława Górna", "Nowa Ruda", "Ząbkowice Śląskie", "Świdnica"],

  about: blokOMnie("do Bielawy", "w Bielawie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bielawy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bielawie"),
    {
      question: "Czuję, że to fanaberia. Co byś powiedziała?",
      answer:
        "Przede wszystkim to, że nie jestem w tej sprawie bezstronna — zarabiam, gdy decyzja jest na tak, więc nie powinnam rozstrzygać, na co wolno Wam wydać własne pieniądze. Nie usłyszycie też ode mnie „należy Ci się”: to chwyt, a nie argument. Mogę zaproponować tylko przełożenie tego na liczby z Waszego tygodnia.",
    },
    {
      question: "Co konkretnie policzyć przed decyzją?",
      answer:
        "Ile razy w tygodniu naprawdę gotujecie, ile z tego czasu schodzi na stanie i pilnowanie oraz co robilibyście zamiast tego. To wystarczy, żeby zdecydować bez wzruszeń. Nie będę za to liczyć oszczędności na jedzeniu — takie wyliczenia zawsze wychodzą pod tezę.",
    },
  ],

  geo: { lat: 50.6906, lng: 16.6236 },
};
