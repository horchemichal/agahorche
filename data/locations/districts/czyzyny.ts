import type { DistrictContent } from "./typy";

/**
 * CZYŻYNY (XIV) — dzielnica dwóch światów stojących obok siebie:
 * wielka płyta z lat 70. (os. Dywizjonu 303, os. 2 Pułku Lotniczego)
 * i osiedla deweloperskie po 2010 na terenie dawnego lotniska
 * (Avia, Botanika, Centralna Park). To jest temat tej strony.
 *
 * Fakty potwierdzone i użyte:
 * — populacja wzrosła z ok. 23 tys. (2004) do ok. 33,5 tys. (2023) —
 *   najszybszy wzrost z tej grupy dzielnic, efekt nowych inwestycji,
 * — kontrast opisany w prasie lokalnej: nowe osiedla mają uporządkowane
 *   miejsca postojowe i strefy, ale mało sklepów; stare mają gęstą sieć
 *   usług na parterach,
 * — AWF i Politechnika Krakowska na miejscu, ok. 9% mieszkańców to studenci,
 * — dawne lotnisko Rakowice-Czyżyny i pas startowy jako wspólny punkt
 *   odniesienia obu światów,
 * — brak strefy płatnego parkowania,
 * — najkrótszy dojazd do centrum z tej grupy dzielnic (10–15 min autem).
 */
export const KRAKOW_CZYZYNY: DistrictContent = {
  slug: "krakow-czyzyny",
  urlPath: "/thermomix/krakow/czyzyny",
  nazwa: "Czyżyny",
  miejscownik: "Czyżynach",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Czyżyny — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Czyżyny — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix w Czyżynach: bezpłatna prezentacja TM7 u Ciebie w kuchni — Avia, Botanika, os. Dywizjonu 303, 2 Pułku Lotniczego. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam i na nowe osiedla przy dawnym lotnisku, i na te z lat siedemdziesiątych. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  osiedla: [
    "os. Avia",
    "os. Botanika",
    "os. Centralna Park",
    "os. Dywizjonu 303",
    "os. 2 Pułku Lotniczego",
    "os. Akademickie",
    "Czyżyny (dawna wieś)",
    "Łęg",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Dwa światy po dwóch stronach pasa startowego",
      paragraphs: [
        "Trudno o dzielnicę, w której różnica między starym a nowym byłaby tak dosłowna. Na osiedlach Dywizjonu 303 i 2 Pułku Lotniczego, budowanych w latach siedemdziesiątych, kuchnia to osobne, wąskie pomieszczenie z krótkim blatem i instalacją, która nie była projektowana pod trzy urządzenia naraz. Na Awii i Botanice, powstałych po dwa tysiące dziesiątym roku na terenie dawnego lotniska, jest aneks otwarty na salon, nowa instalacja i wydajna wentylacja.",
        "Z mojego punktu widzenia to najlepsze i najtrudniejsze warunki w jednej dzielnicy. Na nowych osiedlach gotuje się komfortowo, przy ciągłym blacie. Na starych część spotkania przenosi się do pokoju — co nie jest żadnym problemem, bo urządzenie potrzebuje tylko gniazdka.",
        "Ciekawe jest to, że mieszkańcy obu tych światów mówią o dokładnie tym samym problemie: obiad po pracy, na który nie ma siły. Sprzęt kuchenny wygląda inaczej, kalendarz wygląda tak samo.",
      ],
      bullets: [
        "os. Dywizjonu 303, os. 2 Pułku Lotniczego — kuchnia osobna, ciasna, obwód 16 A",
        "Avia, Botanika, Centralna Park — aneks kuchenny, nowa instalacja",
        "Łęg — domy, duże kuchnie",
      ],
    },
    {
      id: "dojazd",
      heading: "Najkrótszy dojazd z całej wschodniej części Krakowa",
      paragraphs: [
        "Do centrum jest stąd dziesięć, może piętnaście minut autem poza szczytem — bliżej niż z większości dzielnic. Strefy płatnego parkowania nie ma w ogóle.",
        "Nowe osiedla mają wyraźnie oznakowane miejsca postojowe oddzielone od stref rekreacyjnych i garaże podziemne, więc podjazd i wniesienie urządzenia to kwestia minut. Na starszych osiedlach jest jak w całej wielkiej płycie: miejsc jest mniej, niż aut, zwłaszcza po południu.",
        "Realne wąskie gardło to korki na Nowohuckiej, Stella-Sawickiego i Dąbrowskiej w godzinach szczytu, a także ruch wokół centrów handlowych. Dlatego przy terminach między szesnastą a osiemnastą wyjeżdżam z zapasem.",
      ],
    },
  ],

  faq: [
    {
      question: "Mieszkam na Awii. Czy dojedziesz i gdzie zaparkujesz?",
      answer:
        "Tak, dojeżdżam na wszystkie nowe osiedla przy dawnym lotnisku. Mają zorganizowane miejsca postojowe, więc dojazd i wniesienie urządzenia są tam wyjątkowo proste.",
    },
    {
      question: "A na os. Dywizjonu 303 albo 2 Pułku Lotniczego?",
      answer:
        "Oczywiście. To starsze bloki z ciaśniejszymi kuchniami, więc czasem gotujemy przy stole zamiast przy blacie — poza tym spotkanie wygląda identycznie.",
    },
    {
      question: "Czy jestem w stanie umówić się po pracy?",
      answer:
        "Tak, wieczorne terminy są tu najczęściej wybierane. Podaj godzinę, o której realnie jesteś w domu — przy korkach na Nowohuckiej wolę wyjechać wcześniej i poczekać, niż się spóźnić.",
    },
  ],

  geo: { lat: 50.0703, lng: 19.9997 },
};
