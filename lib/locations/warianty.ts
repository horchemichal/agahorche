import type { Location, LocationResolution } from "@/types/location";
import type { FaqItem } from "@/types/seo";
import { miejscownik, dopelniacz } from "@/data/locations/odmiana";

/**
 * TREŚĆ SKŁADANA DLA STRON BEZ WŁASNEGO TEKSTU (wrzesień 2026).
 *
 * PO CO TO POWSTAŁO. Sześćset dwie lokalizacje nie mają jeszcze autorskiej
 * strony i dostają szablon generyczny. Do tej pory ten szablon dawał im
 * jeden wspólny akapit z podmienioną nazwą — tekst, który dla człowieka
 * nie wnosił nic, a dla wyszukiwarki wyglądał jak sześćset kopii tej samej
 * strony.
 *
 * DLACZEGO NIE „KILKA SZABLONÓW". Trzy albo pięć szablonów na sześćset
 * stron daje sto dwadzieścia identycznych stron na szablon — czyli ten sam
 * problem, tylko podzielony. Dlatego treść nie jest wybierana z listy
 * gotowych tekstów, tylko SKŁADANA z niezależnych osi. Liczba możliwych
 * stron to iloczyn tych osi, a nie ich suma:
 *
 *   oś 1 — sytuacja miejscowości (4 warianty, z danych),
 *   oś 2 — temat kuchenny (8 bloków, rotacja po slugu),
 *   oś 3 — uczciwe ograniczenie (6 bloków, inna rotacja),
 *   oś 4 — akapit o dojeździe (lista sąsiadów, w praktyce unikatowa),
 *   oś 5 — zdanie o regionie (16 wartości).
 *
 * To daje 4 × 8 × 6 = 192 kombinacje bazowe, a po doliczeniu list sąsiadów
 * — inny zestaw akapitów praktycznie dla każdej miejscowości.
 *
 * ROTACJA JEST DETERMINISTYCZNA. Wynika ze slugu, nie z losowania, więc ta
 * sama miejscowość zawsze dostaje ten sam tekst — przy każdym buildzie,
 * na każdym serwerze. Bez tego strona zmieniałaby treść przy restarcie
 * kontenera, co jest jedną z gorszych rzeczy, jakie można zrobić w SEO.
 *
 * CZEGO TO NADAL NIE ZAŁATWIA — I NIE WOLNO Z TEGO PLIKU WYCIĄGNĄĆ INNEGO
 * WNIOSKU. Składana treść nie jest treścią lokalną. Nie mówi o tej
 * miejscowości nic, czego nie ma w tabeli lokalizacji. Zasada z routingu
 * zostaje bez zmian: strona idzie do Google dopiero wtedy, gdy ktoś napisze
 * dla niej własny tekst. Ten plik poprawia stronę DLA CZŁOWIEKA, który
 * trafi na nią z linku albo z listy sąsiednich miejscowości.
 *
 * SKĄD BIORĄ SIĘ DANE. Wyłącznie z tabeli lokalizacji:
 * — `largerCitySlug` — czy obok jest większe miasto, do którego się jeździ,
 * — `population` — do WYBORU wariantu, nigdy do wydrukowania (przy liczbach
 *   stoi w danych „TODO: zweryfikować", więc podanie ich na stronie byłoby
 *   podaniem niesprawdzonej liczby jako faktu),
 * — `region` — nazwa krainy, realna,
 * — `neighbors` — realna lista sąsiadów, inna dla każdej miejscowości.
 *
 * CZEGO TU NIE MA I BYĆ NIE MOŻE: zmyślonych faktów o miejscowości, jej
 * historii, zabytkach, mieszkańcach ani gospodarce. Żadne zdanie w tym
 * pliku nie twierdzi niczego o konkretnym mieście poza tym, co wynika
 * z czterech pól powyżej. Wszystko inne jest albo o urządzeniu, albo o tym,
 * jak pracuje Aga.
 */

export type SytuacjaMiejscowosci = "satelita" | "duze" | "srednie" | "male";

const PROG_DUZE = 40_000;
const PROG_SREDNIE = 10_000;

/**
 * Stabilny, deterministyczny skrót slugu. Nie ma być kryptograficzny —
 * ma być ZAWSZE TAKI SAM dla tego samego tekstu, także po restarcie
 * procesu i po przeniesieniu na inny serwer.
 */
function skrot(tekst: string): number {
  let h = 0;
  for (let i = 0; i < tekst.length; i += 1) {
    h = (h * 31 + tekst.charCodeAt(i)) % 1_000_003;
  }
  return h;
}

export function wybierzSytuacje(location: Location): SytuacjaMiejscowosci | null {
  if (location.unitType === "wojewodztwo") return null;
  if (location.largerCitySlug) return "satelita";
  const ludnosc = location.population ?? 0;
  if (ludnosc >= PROG_DUZE) return "duze";
  if (ludnosc >= PROG_SREDNIE) return "srednie";
  return "male";
}

function wForma(location: Location): string {
  const forma = location.nameLocative ?? miejscownik(location.slug);
  return forma ? `w ${forma}` : `na terenie: ${location.name}`;
}

function doForma(slug: string): string | null {
  const dop = dopelniacz(slug);
  return dop ? `do ${dop}` : null;
}

function zForma(slug: string): string | null {
  const dop = dopelniacz(slug);
  return dop ? `z ${dop}` : null;
}

/** „do Bochni, Brzeska i Wieliczki” — lista sąsiadów w dopełniaczu. */
function sasiedziLista(neighbors: Location[]): string | null {
  const formy = neighbors
    .slice(0, 4)
    .map((n) => dopelniacz(n.slug) ?? n.name)
    .filter((f): f is string => Boolean(f));
  if (formy.length === 0) return null;
  if (formy.length === 1) return formy[0];
  return `${formy.slice(0, -1).join(", ")} i ${formy[formy.length - 1]}`;
}

/* ————————————————— OŚ 1: sytuacja miejscowości ————————————————— */

function akapitSytuacji(sytuacja: SytuacjaMiejscowosci, location: Location): string {
  const skad = location.largerCitySlug ? zForma(location.largerCitySlug) : null;
  const dokad = location.largerCitySlug ? doForma(location.largerCitySlug) : null;

  if (sytuacja === "satelita") {
    return skad && dokad
      ? `Sporo osób mieszkających tutaj pracuje albo uczy się gdzie indziej — najbliżej jest stąd ${dokad}. To ustawia cały wieczór: obiad powstaje po powrocie ${skad}, a nie w środku dnia, i robi go zwykle jedna osoba, która przed chwilą wysiadła z samochodu albo z autobusu.`
      : `Obiad powstaje tu zwykle wieczorem, po powrocie, i robi go jedna osoba — a nie w środku dnia, na spokojnie.`;
  }
  if (sytuacja === "duze") {
    return `To jest miejsce, do którego przyjeżdża się z całej okolicy: do pracy, do szkoły, do lekarza, po zakupy. W takich miastach dzień kończy się późno i nierówno — jedna osoba wraca o piętnastej, druga o osiemnastej, a dziecko po zajęciach jeszcze później. Obiad musi to wytrzymać.`;
  }
  if (sytuacja === "srednie") {
    return `Miasto tej wielkości ma swoje tempo: część spraw załatwia się na miejscu, po część jeździ się dalej. Kuchnia zwykle wygląda tu podobnie — gotuje się w tygodniu szybko i konkretnie, a większe rzeczy odkłada na weekend.`;
  }
  return `W mniejszych miejscowościach zakupy robi się inaczej niż w mieście: rzadziej, większe i częściej z tego, co akurat jest w domu. To nie jest gorszy sposób gotowania — jest po prostu inny i inaczej obciąża kuchnię.`;
}

/* ————————————————— OŚ 2: temat kuchenny ————————————————— */

interface BlokKuchenny {
  akapit: string;
  pytanie: string;
  odpowiedz: string;
}

const TEMATY_KUCHENNE: BlokKuchenny[] = [
  {
    akapit:
      "Najczęściej powstają w nim zupy i to jest chyba najuczciwszy przykład tego, co ten sprzęt zmienia. Warzywa rozdrabniają się w tym samym naczyniu, w którym potem się gotują, a zupa krem nie wymaga przelewania gorącego płynu do blendera i z powrotem. Zmienia się nie smak, tylko liczba rzeczy do umycia i to, że nie trzeba przy tym stać.",
    pytanie: "Czy zupa wychodzi w tym lepiej niż w garnku?",
    odpowiedz:
      "Smakuje tak samo — to ten sam produkt i te same składniki. Różnica jest w robocie: rozdrabnianie i gotowanie dzieje się w jednym naczyniu, nie trzeba przelewać gorącego płynu do blendera i nie trzeba stać nad garnkiem.",
  },
  {
    akapit:
      "Dobrze wychodzą w nim dania jednogarnkowe — takie, w których wszystko ląduje w jednym naczyniu i ma się dusić przez pół godziny. Ustawia się temperaturę i mieszanie, zamyka i odchodzi. To jest ta część gotowania, przy której normalnie trzeba pilnować, żeby nie przywarło.",
    pytanie: "Czy mogę zostawić to bez pilnowania?",
    odpowiedz:
      "Na tym polega największa część zysku: gotowanie z ustawioną temperaturą i mieszaniem nie wymaga obecności w kuchni. Urządzenie sygnalizuje koniec, a do tego czasu możecie robić coś innego.",
  },
  {
    akapit:
      "Sosy to jedna z tych rzeczy, przy których różnica jest natychmiast widoczna. Sos, który normalnie trzeba mieszać bez przerwy, żeby nie zrobiły się grudki, powstaje tu przy ustawionym mieszaniu i temperaturze. Nie trzeba nad nim stać i nie trzeba go ratować.",
    pytanie: "Czy sosy nie robią się grudkowate?",
    odpowiedz:
      "Mieszanie idzie równo przez cały czas gotowania, więc typowa przyczyna grudek znika. To nie jest magia — po prostu urządzenie miesza dokładniej i cierpliwiej, niż da się mieszać ręką przez piętnaście minut.",
  },
  {
    akapit:
      "Ciasto drożdżowe jest tym, co przekonuje najwięcej osób, i to niezależnie od wieku. Wyrabianie trwa kilka minut, dzieje się w zamkniętym naczyniu i nie zostawia mąki na całym blacie. Samo pieczenie odbywa się dalej w piekarniku — tego urządzenie nie robi i o tym piszę niżej.",
    pytanie: "Czy wyrabia ciasto drożdżowe?",
    odpowiedz:
      "Tak, i to jest jedna z jego najmocniejszych stron: wyrabianie trwa kilka minut, dzieje się w zamkniętym naczyniu i nie zostawia mąki na blacie. Pieczenie odbywa się dalej w piekarniku.",
  },
  {
    akapit:
      "Varoma, czyli gotowanie na parze, pozwala zrobić dwie rzeczy naraz: w naczyniu gotuje się jedno danie, a nad nim, na parze, drugie. W praktyce najczęściej wykorzystuje się to tak, że obiad dla dorosłych i porcja dla dziecka albo warzywa na parze powstają w tym samym czasie i w tym samym urządzeniu.",
    pytanie: "Czy da się zrobić dwie rzeczy naraz?",
    odpowiedz:
      "Tak — w naczyniu gotuje się jedno danie, a nad nim na parze drugie. Najczęściej wychodzi z tego obiad dla dorosłych i osobna porcja dla dziecka albo warzywa na parze, w tym samym czasie.",
  },
  {
    akapit:
      "Przeciery i musy to rzecz sezonowa, ale kiedy przychodzi jej pora, robi największą różnicę. Owoce rozdrabniają się razem ze skórką i podgrzewają w tym samym naczyniu, bez stania nad garnkiem i bez przecierania przez sitko. Zaznaczam od razu: to nie jest sokowirówka i nie oddziela miąższu.",
    pytanie: "Czy zrobię w tym sok z owoców?",
    odpowiedz:
      "Raczej gęsty przecier albo mus niż klarowny sok — to nie jest sokowirówka i nie oddziela miąższu. Musy i przeciery wychodzą za to bardzo dobrze: owoce rozdrabniają się ze skórką i podgrzewają w tym samym naczyniu.",
  },
  {
    akapit:
      "Przy małym dziecku najczęściej wykorzystywana jest najprostsza możliwość: ugotować i zmiksować w jednym naczyniu, w małej porcji, bez przekładania gorącego jedzenia z garnka do miski. Nie doradzam, co i kiedy podawać — to nie moja dziedzina — mówię wyłącznie o tym, co robi sprzęt.",
    pytanie: "Czy nadaje się do jedzenia dla małego dziecka?",
    odpowiedz:
      "Pod względem technicznym tak: ugotowanie i zmiksowanie małej porcji odbywa się w jednym naczyniu, bez przekładania gorącego jedzenia. O tym, co i kiedy podawać dziecku, nie doradzam — to pytanie do lekarza albo dietetyka, nie do sprzedawcy.",
  },
  {
    akapit:
      "Rzeczy najprostsze robi się w nim najczęściej i to zwykle zaskakuje kupujących. Pasty do chleba, hummus, twarożki, masło orzechowe, otarta bułka, cukier puder z cukru, który stoi w szafce — to są czynności na dwie minuty, do których normalnie nie chce się wyciągać żadnego sprzętu.",
    pytanie: "Czy używa się tego codziennie, czy tylko od święta?",
    odpowiedz:
      "U osób, u których to się przyjmuje, najczęściej do rzeczy najprostszych: past do chleba, twarożków, otartej bułki, cukru pudru. Duże dania są od święta — codzienność robią drobiazgi, do których normalnie nie chce się wyciągać sprzętu.",
  },
];

/* ————————————————— OŚ 3: uczciwe ograniczenie ————————————————— */

const OGRANICZENIA: BlokKuchenny[] = [
  {
    akapit:
      "Powiem od razu, czego w nim nie ma, żeby nie było rozczarowania po zakupie: nie smaży i nie piecze. Nie zastąpi patelni ani piekarnika i jeśli u Was kuchnia opiera się głównie na tych dwóch rzeczach, ten sprzęt nie jest dla Was. Wolę powiedzieć to teraz.",
    pytanie: "Czy w tym urządzeniu da się usmażyć albo upiec?",
    odpowiedz:
      "Nie. Nie smaży i nie piecze — nie zastąpi patelni ani piekarnika. Jeśli Wasza kuchnia opiera się głównie na smażeniu, powiem wprost, że ten sprzęt nie jest dla Was.",
  },
  {
    akapit:
      "Druga rzecz, którą warto wiedzieć przed zakupem, a nie po: naczynie mieści około dwóch litrów. Przy dużej rodzinie albo przy gotowaniu na zapas robi się to partiami — i to nie jest wada do ukrycia, tylko liczba do policzenia przed decyzją.",
    pytanie: "Czy ugotuję w tym dla dużej rodziny?",
    odpowiedz:
      "Naczynie mieści około dwóch litrów, więc przy większej rodzinie albo przy gotowaniu na zapas robi się to partiami. Warto policzyć to przed zakupem, a nie po.",
  },
  {
    akapit:
      "Trzecia rzecz, o której sprzedawcy zwykle milczą: przy rozdrabnianiu to urządzenie jest głośne. Krótko, ale wyraźnie. W mieszkaniu z małym dzieckiem, które śpi za ścianą, ma to znaczenie i lepiej wiedzieć o tym wcześniej.",
    pytanie: "Czy to głośno pracuje?",
    odpowiedz:
      "Przy rozdrabnianiu tak — krótko, ale wyraźnie. Samo gotowanie jest ciche. W mieszkaniu, w którym ktoś śpi za ścianą, warto to wziąć pod uwagę.",
  },
  {
    akapit:
      "Jest też zasada, którą sama stosuję i którą warto znać: jeśli mycie naczynia trwa dłużej niż sama czynność, nie warto go do niej używać. Posiekanie natki nożem zajmuje piętnaście sekund, a umycie naczynia po zieleninie — trzy minuty. To urządzenie przejmuje część roboty, a nie całą kuchnię.",
    pytanie: "Czy po zakupie robi się już wszystko w urządzeniu?",
    odpowiedz:
      "Nie i nie warto do tego dążyć. Zasada jest prosta: jeśli mycie naczynia trwa dłużej niż sama czynność, lepiej zrobić ją ręcznie. Sprzęt przejmuje tę część gotowania, przy której trzeba stać i pilnować.",
  },
  {
    akapit:
      "Warto też wiedzieć, czym to urządzenie nie jest: nie gotuje samo. Składniki trzeba przygotować i włożyć, a program wybrać. Ono odbiera pilnowanie i mieszanie, a nie decyzję o tym, co ma być na obiad — i po pierwszym tygodniu widać to bardzo wyraźnie.",
    pytanie: "Czy ono gotuje samo?",
    odpowiedz:
      "Nie. Składniki trzeba przygotować i włożyć, a program wybrać. Urządzenie odbiera pilnowanie, mieszanie i stanie nad garnkiem — nie odbiera decyzji, co ma być na obiad.",
  },
  {
    akapit:
      "I rzecz ostatnia, którą mówię każdemu: to urządzenie nie jest dietą. Nie odchudza, nie leczy i nie zmienia tego, co jecie — zmienia wyłącznie to, ile pracy kosztuje przygotowanie. Jeśli ktoś obiecuje Wam coś więcej, warto zapytać, na jakiej podstawie.",
    pytanie: "Czy dzięki temu będziemy jeść zdrowiej?",
    odpowiedz:
      "Samo urządzenie niczego nie zmienia w tym, co jecie — nie jest dietą, nie odchudza i nie leczy. Ułatwia gotowanie w domu i tyle mogę uczciwie obiecać.",
  },
];

export interface TrescWariantu {
  heading: string;
  paragraphs: string[];
  faq: FaqItem[];
}

/**
 * Zwraca złożoną treść albo `null` dla lokalizacji, które jej nie
 * dostają (województwa). Wywołujący zachowuje wtedy dotychczasowy tekst.
 */
export function buildWariantTresci(resolution: LocationResolution): TrescWariantu | null {
  const { location, neighbors } = resolution;
  const sytuacja = wybierzSytuacje(location);
  if (!sytuacja) return null;

  const h = skrot(location.slug);
  const temat = TEMATY_KUCHENNE[h % TEMATY_KUCHENNE.length];
  // Inny mnożnik, żeby temat i ograniczenie nie były ze sobą skorelowane.
  const ograniczenie = OGRANICZENIA[Math.floor(h / 7) % OGRANICZENIA.length];

  const gdzie = wForma(location);
  const sasiedzi = sasiedziLista(neighbors);

  const paragraphs = [
    akapitSytuacji(sytuacja, location),
    temat.akapit,
    ograniczenie.akapit,
    location.region
      ? `${location.region} — to duży kawałek kraju i każda miejscowość wygląda w nim inaczej. Nie będę więc opowiadać Wam o Waszej okolicy ani udawać, że znam ją lepiej niż Wy. Przyjeżdżam z urządzeniem, gotujemy razem u Was w kuchni i to Wy oceniacie, czy to ma sens.`
      : `Nie będę opowiadać Wam o Waszej okolicy ani udawać, że znam ją lepiej niż Wy. Przyjeżdżam z urządzeniem, gotujemy razem u Was w kuchni i to Wy oceniacie, czy to ma sens.`,
    sasiedzi
      ? `Dojazd jest bezpłatny i nie zależy od odległości — jeżdżę też ${sasiedzi}. Odległość wpływa wyłącznie na porę spotkania, nigdy na jego koszt.`
      : `Dojazd jest bezpłatny i nie zależy od odległości — wpływa ona wyłącznie na porę spotkania, nigdy na koszt.`,
    `Na spotkaniu gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Na koniec podaję cenę, aktualną promocję i wysokość raty przy kilku okresach spłaty. Nie trzeba decydować tego samego dnia i nic za spotkanie nie płacicie.`,
  ];

  const naglowki: Record<SytuacjaMiejscowosci, string> = {
    satelita: `Wieczór ${gdzie} — i po co Wam do tego urządzenie`,
    duze: "Miasto, do którego zjeżdża się okolica — i obiad, który musi to wytrzymać",
    srednie: `Tydzień ${gdzie} — szybko w tygodniu, spokojniej w weekend`,
    male: `Gotowanie ${gdzie} — z tego, co jest w domu`,
  };

  return {
    heading: naglowki[sytuacja],
    paragraphs,
    faq: [
      { question: temat.pytanie, answer: temat.odpowiedz },
      { question: ograniczenie.pytanie, answer: ograniczenie.odpowiedz },
    ],
  };
}
