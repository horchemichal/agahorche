import type { DistrictContent } from "./typy";

/**
 * NOWA HUTA (dzielnica XVIII) — najmocniejsza z osiemnastu stron dzielnic,
 * bo ma najwięcej rzeczy prawdziwych tylko o niej.
 *
 * Fakty użyte w tekście i sprawdzone:
 * — adresowanie osiedlowe („os. Teatralne 12/34”, nie ulica) — znak
 *   rozpoznawczy dzielnicy; kto go używa poprawnie, ten jest stąd,
 * — mieszkania z lat 50. mają układ „dwa pokoje z jasną kuchnią”, czyli
 *   kuchnię OSOBNĄ i Z OKNEM. To jest potwierdzone i jest realnym
 *   wyróżnikiem wobec ciasnych, ciemnych kuchni w wielkiej płycie z lat 70.,
 * — układ urbanistyczny w rejestrze zabytków od 2004, Pomnik Historii
 *   od 2023,
 * — Plac Centralny z pięcioma promienistymi alejami,
 * — brak strefy płatnego parkowania w całej dzielnicy — mimo że część
 *   poradników w sieci twierdzi inaczej.
 *
 * CZEGO ŚWIADOMIE NIE MA, mimo że krąży po sieci:
 * — „wysokie sufity w starej Nowej Hucie” — nie udało się tego potwierdzić
 *   w żadnym źródle, więc nie ma tego w treści,
 * — metrażu kuchni w m² dla mieszkań z lat 50. — też niepotwierdzony,
 * — informacji o windach — niepotwierdzona, a to akurat rzecz, którą
 *   przy noszeniu urządzenia lepiej ustalić z klientką niż zgadywać.
 */
export const KRAKOW_NOWA_HUTA: DistrictContent = {
  slug: "krakow-nowa-huta",
  urlPath: "/thermomix/krakow/nowa-huta",
  nazwa: "Nowa Huta",
  miejscownik: "Nowej Hucie",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Nowa Huta — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Nowa Huta — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix w Nowej Hucie: bezpłatna prezentacja TM7 u Ciebie w kuchni, na każdym osiedlu — od Wandy po Centrum E. Bez dopłaty za dojazd. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na wszystkie nowohuckie osiedla — od Wandy i Teatralnego po Centrum E i Szklane Domy. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  osiedla: [
    "os. Wandy",
    "os. Teatralne",
    "os. Na Skarpie",
    "os. Krakowiaków",
    "os. Górali",
    "os. Sportowe",
    "os. Zielone",
    "os. Willowe",
    "os. Szklane Domy",
    "os. Centrum A",
    "os. Centrum B",
    "os. Centrum C",
    "os. Centrum D",
    "os. Centrum E",
    "os. Handlowe",
    "os. Hutnicze",
    "os. Szkolne",
    "os. Urocze",
    "os. Stalowe",
    "Mogiła",
    "Pleszów",
    "Branice",
    "Ruszcza",
    "Kościelniki",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Nowohucka kuchnia jest osobna — i to działa na Twoją korzyść",
      paragraphs: [
        "Mieszkania z pierwszej fazy budowy, czyli z lat pięćdziesiątych, mają układ, który wtedy nazywano „dwa pokoje z jasną kuchnią”. Jasna znaczy: z oknem. To brzmi jak drobiazg, a przy gotowaniu jest różnicą między pomieszczeniem, w którym da się spędzić dwie godziny, a wnęką bez powietrza.",
        "Dla mnie to ma bardzo praktyczne znaczenie. W wielkiej płycie z lat siedemdziesiątych kuchnia bywa ciasnym prostokątem, w którym dwie osoby nie zmieszczą się przy blacie — i wtedy część spotkania i tak przenosi się do pokoju. W starej Nowej Hucie zwykle da się stanąć obok siebie przy blacie i po prostu gotować.",
        "Jest jednak druga strona tego samego medalu: to są instalacje z lat pięćdziesiątych, często później modernizowane w różnym zakresie. Thermomix pobiera około 1500 watów. Jeśli w tym samym momencie chodzi czajnik i piekarnik na tym samym obwodzie, w starszym budownictwie potrafi wybić bezpiecznik. Nie jest to problem, tylko rzecz, o której wiem i którą uwzględniam — po prostu nie włączam wszystkiego naraz.",
      ],
      bullets: [
        "osiedla z lat 50. (Wandy, Teatralne, Na Skarpie, Krakowiaków) — kuchnia osobna, z oknem",
        "zabudowa z lat 70. przy granicy z Mistrzejowicami — kuchnia osobna, ale ciasna",
        "Centrum E i nowsze inwestycje — aneks kuchenny otwarty na salon",
        "Mogiła, Pleszów, Branice, Ruszcza — domy, w kuchni miejsca pod dostatkiem",
      ],
    },
    {
      id: "dojazd",
      heading: "Dojazd i parkowanie: tu akurat jest łatwo",
      paragraphs: [
        "W całej dzielnicy nie ma strefy płatnego parkowania — mimo że część poradników w internecie twierdzi inaczej. Nie płacisz za postój i ja też nie, więc nie ma tematu doliczania czegokolwiek do wizyty.",
        "Drugą rzeczą jest sam układ osiedli. Socrealistyczna Nowa Huta była projektowana z dużymi dziedzińcami i wewnętrznymi drogami dojazdowymi, więc zwykle da się podjechać stosunkowo blisko klatki. Przy urządzeniu, które trzeba wnieść, to realna różnica wobec ciasnych osiedli z lat siedemdziesiątych.",
        "Jedna prośba: jeśli mieszkasz wyżej niż na parterze, powiedz przy umawianiu, czy w budynku jest winda. W starszych blokach bywa różnie i wolę to wiedzieć wcześniej, niż sprawdzać na miejscu.",
      ],
    },
    {
      id: "adres",
      heading: "Podaj adres po nowohucku",
      paragraphs: [
        "Przy umawianiu wystarczy „os. Teatralne 12, mieszkanie 34”. Wiem, jak działa adresowanie osiedlowe, i nie będę dopytywać o ulicę, której nie ma. To brzmi banalnie, ale każdy, kto tu mieszka, zna telefony, w których trzeba to tłumaczyć od początku.",
        "Nowa Huta jest największą dzielnicą Krakowa i rozciąga się daleko na wschód — Mogiła, Pleszów czy Branice to zupełnie inny dojazd niż Plac Centralny. Dlatego przy dalszych adresach układam trasę z wyprzedzeniem i czasem proponuję termin dzień czy dwa później, ale za to pewny.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy dojeżdżasz na wszystkie nowohuckie osiedla?",
      answer:
        "Tak, na wszystkie — od os. Wandy i Teatralnego, przez Centrum A–E, po Szklane Domy, Urocze i Stalowe. Dojeżdżam też do dawnych wsi w granicach dzielnicy: Mogiły, Pleszowa, Branic, Ruszczy i Kościelnik. Dojazd jest bezpłatny.",
    },
    {
      question: "Mam małą kuchnię w bloku z lat 50. Czy jest gdzie gotować?",
      answer:
        "Zwykle tak. Mieszkania z tego okresu mają kuchnię osobną i z oknem, więc jest światło i powietrze, a przy blacie najczęściej da się stanąć we dwie osoby. Jeśli miejsca jest naprawdę mało, część spotkania przenosimy do pokoju — urządzenie waży swoje, ale jest przenośne i nie potrzebuje nic poza gniazdkiem.",
    },
    {
      question: "Czy w Nowej Hucie trzeba płacić za parkowanie?",
      answer:
        "Nie. W całej dzielnicy nie ma strefy płatnego parkowania. Dla Ciebie to bez znaczenia, bo za dojazd i tak nie płacisz — ale to jeden z powodów, dla których umawianie się tutaj jest po prostu prostsze niż w centrum.",
    },
    {
      question: "Jak podać adres przy umawianiu?",
      answer:
        "Tak, jak go używasz na co dzień — „os. Zielone 7/21” jest dla mnie kompletną informacją. Przyda mi się jeszcze piętro i to, czy w budynku jest winda.",
    },
  ],

  geo: { lat: 50.0722, lng: 20.0339 },
};
