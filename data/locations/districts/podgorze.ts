import type { DistrictContent } from "./typy";

/**
 * PODGÓRZE (XIII) — jedyna z dziewięciu południowo-wschodnich dzielnic
 * objęta strefą płatnego parkowania, i to tylko częściowo. Dlatego temat
 * strefy jest tu opisany rzetelnie, a nie przemilczany.
 *
 * Fakty potwierdzone i użyte:
 * — sektory SPP: C19 (Klimeckiego/Zabłocie), C21–C22 (rondo Matecznego,
 *   Lipska, Wielicka), a od 10 sierpnia 2026 także C23 i C24,
 * — Podgórze było samodzielnym miastem w latach 1784–1915,
 * — Zabłocie to teren poprzemysłowy zabudowany po 2005 — lofty i
 *   apartamenty, czyli najwyższy udział aneksów kuchennych w tej części
 *   miasta,
 * — Stare Podgórze to kamienice, Przewóz to nowe bloki, Rybitwy to
 *   w większości teren magazynowo-przemysłowy,
 * — Bagry Wielkie jako lokalne kąpielisko, Rynek Podgórski jako serce
 *   dzielnicy dla mieszkańców.
 *
 * Świadomie NIE podaję stawki za godzinę postoju: źródła podają dla nowych
 * sektorów rozbieżnie 7 i 9 zł, a stawki i tak się zmieniają. Zamiast tego
 * mówię, że to mój koszt, nie klientki — co jest prawdą niezależnie od
 * cennika.
 */
export const KRAKOW_PODGORZE: DistrictContent = {
  slug: "krakow-podgorze",
  urlPath: "/thermomix/krakow/podgorze",
  nazwa: "Podgórze",
  miejscownik: "Podgórzu",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Podgórze i Zabłocie — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Podgórze — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix na Podgórzu i Zabłociu: bezpłatna prezentacja TM7 u Ciebie w kuchni — Stare Podgórze, Zabłocie, Płaszów, Przewóz. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na Stare Podgórze, Zabłocie, Płaszów i Przewóz. Przywożę Thermomix TM7 i gotujemy razem u Ciebie. Prezentacja jest bezpłatna, a opłaty za parkowanie w strefie to mój koszt, nie Twój.",

  osiedla: [
    "Stare Podgórze",
    "Zabłocie",
    "Płaszów",
    "Przewóz",
    "Mateczny",
    "Bonarka",
    "Rybitwy",
    "Łutnia",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Loft na Zabłociu i kamienica przy Rynku Podgórskim to dwa różne spotkania",
      paragraphs: [
        "Zabłocie to dawny teren poprzemysłowy zabudowany po dwutysięcznym piątym roku — mieszkania z aneksem kuchennym otwartym na salon, często niewielkie, za to z nową instalacją i porządną wentylacją. Gotuje się tam na widoku, przy ciągłym blacie, i jest to najwygodniejszy układ, jaki może trafić się na prezentacji.",
        "Stare Podgórze to zupełnie inny świat: kamienice dawnego miasta, które było samodzielne aż do tysiąc dziewięćset piętnastego roku. Kuchnie są osobne, bywają duże, ale bywają też przechodnie albo bez okna — zależnie od tego, jak przez sto lat dzielono mieszkania. Instalacje też bywają w bardzo różnym stanie, więc w starszych mieszkaniach po prostu nie uruchamiam wszystkiego naraz.",
        "Przewóz i nowsze osiedla to znowu aneksy. Płaszów jest mieszany. Dlatego przy umawianiu pytam nie o dzielnicę, tylko o konkretne miejsce — bo Podgórze jest pod tym względem najbardziej niejednorodne w całym Krakowie.",
      ],
    },
    {
      id: "strefa",
      heading: "Strefa płatnego parkowania: uczciwie, jak jest",
      paragraphs: [
        "To jedyna dzielnica w tej części Krakowa, w której strefa płatnego parkowania realnie występuje — i warto wiedzieć, że obejmuje tylko część obszaru. W strefie są między innymi rejon Klimeckiego i Zabłocia oraz okolice ronda Matecznego, Lipskiej i Wielickiej; od sierpnia dwa tysiące dwudziestego szóstego doszły kolejne sektory w kierunku Turowicza i wokół Cmentarza Podgórskiego.",
        "Dla Ciebie nie zmienia to nic. Za dojazd nie płacisz, a opłata za postój jest po mojej stronie i nie doliczam jej do niczego. Zmienia natomiast to, ile czasu rezerwuję na dojazd — dlatego przy adresach w strefie umawiam się z nieco większym marginesem.",
        "Poza strefą, czyli na przykład w części Płaszowa i Przewozu, parkuje się normalnie i temat w ogóle nie istnieje.",
      ],
    },
    {
      id: "kto",
      heading: "Dzielnica, która nie jest sypialnią",
      paragraphs: [
        "Podgórze jest wyjątkiem wśród krakowskich dzielnic mieszkaniowych: ma własne życie, usługi i gastronomię, a nie tylko bloki, z których rano wszyscy wyjeżdżają. Mieszka tu dużo rodzin z dziećmi i sporo osób między trzydziestym piątym a sześćdziesiątym czwartym rokiem życia.",
        "W praktyce oznacza to dwie rzeczy. Po pierwsze, terminy wieczorne są tu równie realne co przedpołudniowe, bo część osób pracuje na miejscu. Po drugie, pokusa, żeby zejść na dół i coś zjeść, jest tu większa niż na Kurdwanowie — i to jest właśnie ten nawyk, który zmienia się najbardziej po zakupie takiego urządzenia.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy doliczasz opłatę za parkowanie w strefie?",
      answer:
        "Nie. Prezentacja jest bezpłatna, dojazd też, a postój w strefie to mój koszt organizacyjny. Nie płacisz za nic.",
    },
    {
      question: "Mieszkam w lofcie na Zabłociu z aneksem kuchennym. Czy to dobre miejsce?",
      answer:
        "Bardzo dobre — ciągły blat, nowa instalacja i miejsce, żeby stanąć obok siebie. To jeden z najwygodniejszych układów, jakie trafiają się na prezentacjach.",
    },
    {
      question: "Czy dojeżdżasz na Przewóz i do Płaszowa?",
      answer:
        "Tak, do wszystkich części dzielnicy. Poza ścisłą strefą parkowanie nie jest tam problemem, więc umówienie się jest jeszcze prostsze.",
    },
  ],

  geo: { lat: 50.0397, lng: 19.9569 },
};
