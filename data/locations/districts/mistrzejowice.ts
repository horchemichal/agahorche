import type { DistrictContent } from "./typy";

/**
 * MISTRZEJOWICE (XV) — druga najgęściej zaludniona dzielnica Krakowa
 * (ok. 9 700 os./km²), zbudowana 1963–1983 według projektu konkursowego
 * Witolda Cęckiewicza, zrealizowanego przez zespół Marii i Jerzego
 * Chronowskich.
 *
 * Fakty potwierdzone i użyte:
 * — cztery główne osiedla pierwotnie nosiły nazwy pór roku: Wiosenne →
 *   Tysiąclecia, Letnie → Złotego Wieku, Jesienne → Bohaterów Września,
 *   Zimowe → Piastów; plan całości miał układ drzewa z czterema gałęziami,
 * — zabudowa: podłużne bloki czteropiętrowe wzdłuż warstwic, niskie
 *   punktowce nazywane potocznie „puchatkami” (nagroda Mister Krakowa)
 *   i wyższe wieżowce na stoku,
 * — nowa linia tramwajowa Mogilska–Mistrzejowice: zakończenie robót
 *   planowane na 31 sierpnia 2026, uruchomienie na początek roku
 *   szkolnego 2026/2027, skrócenie dojazdu do centrum o ok. 12 minut,
 * — dwa targowiska miejskie: Złoty Wiek i na os. Piastów,
 * — brak strefy płatnego parkowania.
 */
export const KRAKOW_MISTRZEJOWICE: DistrictContent = {
  slug: "krakow-mistrzejowice",
  urlPath: "/thermomix/krakow/mistrzejowice",
  nazwa: "Mistrzejowice",
  miejscownik: "Mistrzejowicach",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Mistrzejowice — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Mistrzejowice — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix w Mistrzejowicach: bezpłatna prezentacja TM7 u Ciebie w kuchni — os. Tysiąclecia, Złotego Wieku, Piastów, Bohaterów Września. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na wszystkie mistrzejowickie osiedla — Tysiąclecia, Złotego Wieku, Bohaterów Września, Piastów i pozostałe. Przywożę Thermomix TM7 i gotujemy u Ciebie. Prezentacja jest bezpłatna.",

  osiedla: [
    "os. Tysiąclecia",
    "os. Złotego Wieku",
    "os. Bohaterów Września",
    "os. Piastów",
    "os. Oświecenia",
    "os. Kombatantów",
    "os. Srebrnych Orłów",
    "os. Mistrzejowice Nowe",
    "Mistrzejowice (dawna wieś)",
    "Batowice",
    "Dziekanowice",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Cztery pory roku i jeden typ kuchni",
      paragraphs: [
        "Cztery główne osiedla miały pierwotnie nosić nazwy pór roku — Wiosenne, Letnie, Jesienne i Zimowe. Zostały z tego Tysiąclecia, Złotego Wieku, Bohaterów Września i Piastów, a cały plan miał układ drzewa z czterema gałęziami. Warto o tym wiedzieć, bo to tłumaczy, dlaczego te osiedla są do siebie tak podobne: powstawały jako jedna całość między tysiąc dziewięćset sześćdziesiątym trzecim a osiemdziesiątym trzecim rokiem.",
        "Dla mnie oznacza to jedno: kuchnia będzie osobna, wąska i z krótkim blatem. To standard całego zasobu z tego okresu — z grzejnikiem pod oknem, jednym pionem przy ścianie kominowej i instalacją zabezpieczoną zwykle na szesnaście amperów.",
        "Nie jest to przeszkoda, tylko informacja, którą warto mieć wcześniej. Jeśli przy blacie nie zmieścimy się we dwie, przenosimy się do stołu w pokoju. Nie uruchamiam też urządzenia razem z czajnikiem i piekarnikiem na jednym obwodzie — i tyle wystarczy, żeby spotkanie przebiegło bez niespodzianek.",
      ],
    },
    {
      id: "dojazd",
      heading: "Dojazd, który właśnie się skraca",
      paragraphs: [
        "Nowa linia tramwajowa z Mogilskiej do Mistrzejowic ma skrócić dojazd do centrum o około dwanaście minut, a jej uruchomienie planowano na początek roku szkolnego dwa tysiące dwudziestego szóstego. Dla mieszkańców to zmiana codzienności; dla mnie to głównie tyle, że w rejonie budowy przez ostatnie miesiące zmieniała się organizacja ruchu i parkowania.",
        "Strefy płatnego parkowania w Mistrzejowicach nie ma. Osiedla Cęckiewicza mają luźniejszy układ i więcej zieleni między blokami niż sąsiednie Bieńczyce, więc z podjechaniem pod klatkę zwykle nie ma problemu — choć po południu, jak wszędzie w wielkiej płycie, miejsc jest mniej niż aut.",
        "Przy umawianiu wystarczy nazwa osiedla i numer bloku. Przyda się jeszcze piętro i informacja o windzie.",
      ],
    },
    {
      id: "targ",
      heading: "Dwa targowiska to nie przypadek",
      paragraphs: [
        "W dzielnicy działają dwa targowiska miejskie — na Złotym Wieku i na osiedlu Piastów. To rzadkość w skali Krakowa i mówi coś o tym, jak się tu robi zakupy: warzywa i owoce częściej z targu niż z dyskontu, w ilościach większych, niż wynika z listy zakupów.",
        "Przy takich zakupach urządzenie zarabia na siebie najszybciej — nie na efektownych deserach, tylko na zupach, przecierach i tym, co trzeba przerobić, zanim się zepsuje. Jeśli robisz zakupy na targu, powiedz o tym przy umawianiu; chętnie ugotuję coś z tego, co faktycznie masz w domu.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy dojeżdżasz na wszystkie osiedla w Mistrzejowicach?",
      answer:
        "Tak — Tysiąclecia, Złotego Wieku, Bohaterów Września, Piastów, Oświecenia, Kombatantów, Srebrnych Orłów i Mistrzejowice Nowe, a także do Batowic i Dziekanowic. Dojazd jest bezpłatny.",
    },
    {
      question: "Mam typową kuchnię w bloku. Czy jest gdzie postawić urządzenie?",
      answer:
        "Tak. Zajmuje mniej więcej tyle miejsca, co większy czajnik, a zastępuje kilka sprzętów naraz. Na prezentacji zobaczysz je dokładnie na swoim blacie, więc od razu ocenisz, ile realnie zabiera.",
    },
    {
      question: "Czy w związku z budową tramwaju są utrudnienia w dojeździe?",
      answer:
        "W rejonie trasy zmieniała się organizacja ruchu i parkowania. Dla nas to znaczy tylko tyle, że wyjeżdżam z większym zapasem czasu — na termin spotkania to nie wpływa.",
    },
  ],

  geo: { lat: 50.0917, lng: 20.0158 },
};
