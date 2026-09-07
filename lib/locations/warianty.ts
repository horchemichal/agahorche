import type { Location, LocationResolution } from "@/types/location";
import type { FaqItem } from "@/types/seo";
import { miejscownik, dopelniacz } from "@/data/locations/odmiana";

/**
 * TREŚĆ SKŁADANA DLA STRON BEZ WŁASNEGO TEKSTU
 * (wrzesień 2026, wersja druga — rozbudowana).
 *
 * PO CO TO POWSTAŁO. Ponad pięćset lokalizacji nie ma jeszcze autorskiej
 * strony i dostaje szablon generyczny. Do tej pory ten szablon dawał im
 * jeden wspólny akapit z podmienioną nazwą — tekst, który dla człowieka
 * nie wnosił nic, a dla wyszukiwarki wyglądał jak pięćset kopii tej samej
 * strony.
 *
 * DLACZEGO NIE „KILKA SZABLONÓW". Trzy albo pięć szablonów na pięćset
 * stron daje sto identycznych stron na szablon — czyli ten sam problem,
 * tylko podzielony. Dlatego treść nie jest wybierana z listy gotowych
 * tekstów, tylko SKŁADANA z niezależnych osi. Liczba możliwych stron to
 * iloczyn tych osi, a nie ich suma:
 *
 *   oś 1 — sytuacja miejscowości (4 warianty z danych × 3 ujęcia = 12),
 *   oś 2 — temat kuchenny (14 bloków, rotacja po slugu),
 *   oś 3 — uczciwe ograniczenie (10 bloków, inna rotacja),
 *   oś 4 — rytm domu (8 bloków, jeszcze inna rotacja),
 *   oś 5 — jak pracuje Aga (8 bloków, kolejna rotacja),
 *   oś 6 — zdanie o regionie (3 ujęcia × 16 regionów),
 *   oś 7 — akapit o dojeździe (3 ujęcia × lista sąsiadów),
 *   oś 8 — kolejność akapitów (2 układy),
 *   oś 9 — nagłówek sekcji (3 na każdą sytuację).
 *
 * To daje 12 × 14 × 10 × 8 × 8 = 107 520 kombinacji bazowe, a po doliczeniu
 * kolejności, nagłówków i list sąsiadów — znacznie więcej niż lokalizacji.
 * Przy pięciuset stronach oznacza to, że pojedynczy blok powtarza się
 * u kilkudziesięciu, ale ZESTAW bloków nie powtarza się nigdzie.
 *
 * ROTACJA JEST DETERMINISTYCZNA. Wynika ze slugu, nie z losowania, więc ta
 * sama miejscowość zawsze dostaje ten sam tekst — przy każdym buildzie,
 * na każdym serwerze. Bez tego strona zmieniałaby treść przy restarcie
 * kontenera, co jest jedną z gorszych rzeczy, jakie można zrobić w SEO.
 * Dzielniki przy poszczególnych osiach są różnymi liczbami pierwszymi,
 * żeby osie nie były ze sobą skorelowane.
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
 *
 * TWARDE GRANICE OBOWIĄZUJĄCE W CAŁYM PLIKU — te same, co na stronach
 * autorskich:
 * — żadnych ustawień, temperatur, prędkości ani czasów,
 * — żadnych porad przy alergiach i dietach zaleconych przez lekarza,
 * — żadnych porad o bezpieczeństwie żywności i przechowywaniu,
 * — żadnych twierdzeń zdrowotnych,
 * — żadnych wyliczeń oszczędności w złotówkach,
 * — żadnych obietnic w imieniu firmy (serwis, gwarancja, terminy, zwroty),
 * — żadnych liczb o popularności, awaryjności ani zadowoleniu klientek.
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

/**
 * Trzy ujęcia na każdą sytuację. Każde mówi o tym samym układzie dnia,
 * ale z innej strony — i żadne nie twierdzi niczego o konkretnym mieście
 * poza tym, co wynika z `largerCitySlug` i przedziału ludności.
 */
function akapitSytuacji(
  sytuacja: SytuacjaMiejscowosci,
  location: Location,
  wariant: number,
): string {
  const skad = location.largerCitySlug ? zForma(location.largerCitySlug) : null;
  const dokad = location.largerCitySlug ? doForma(location.largerCitySlug) : null;

  if (sytuacja === "satelita") {
    const zDojazdem = Boolean(skad && dokad);
    if (wariant === 0) {
      return zDojazdem
        ? `Sporo osób mieszkających tutaj pracuje albo uczy się gdzie indziej — najbliżej jest stąd ${dokad}. To ustawia cały wieczór: obiad powstaje po powrocie ${skad}, a nie w środku dnia, i robi go zwykle jedna osoba, która przed chwilą wysiadła z samochodu albo z autobusu.`
        : `Obiad powstaje tu zwykle wieczorem, po powrocie, i robi go jedna osoba — a nie w środku dnia, na spokojnie.`;
    }
    if (wariant === 1) {
      return zDojazdem
        ? `Dzień zaczyna się tu wcześnie, bo do pracy albo do szkoły jedzie się ${dokad}, a kończy późno, bo trzeba wrócić. Kuchnia dostaje z tego dnia wąskie okno między powrotem a wieczorem — i wszystko, co ma się w domu wydarzyć, musi się w nim zmieścić.`
        : `Kuchnia dostaje tu wąskie okno między powrotem a wieczorem i wszystko, co ma się w domu wydarzyć, musi się w nim zmieścić.`;
    }
    return zDojazdem
      ? `Mieszkanie tutaj i praca ${dokad} to układ, który wygląda dobrze na papierze, a w tygodniu kosztuje głównie czas wieczorem. Zakupy robi się po drodze albo w weekend, a obiad gotuje ktoś, kto właśnie wrócił i nie ma już siły na stanie przy garnku.`
      : `Zakupy robi się tu po drodze albo w weekend, a obiad gotuje ktoś, kto właśnie wrócił i nie ma już siły na stanie przy garnku.`;
  }

  if (sytuacja === "duze") {
    if (wariant === 0) {
      return `To jest miejsce, do którego przyjeżdża się z całej okolicy: do pracy, do szkoły, do lekarza, po zakupy. W takich miastach dzień kończy się późno i nierówno — jedna osoba wraca o piętnastej, druga o osiemnastej, a dziecko po zajęciach jeszcze później. Obiad musi to wytrzymać.`;
    }
    if (wariant === 1) {
      return `W mieście tej wielkości wszystko jest na miejscu i właśnie dlatego dnia zwykle brakuje: zajęcia dziecka, praca, sprawy do załatwienia i sklep otwarty do późna układają się w rozkład, w którym kolacja bywa pierwszym wspólnym posiłkiem. Kuchnia obsługuje tu raczej kilka pór niż jedną.`;
    }
    return `Miasto, w którym pracuje się i mieszka w tym samym miejscu, ma jedną kuchenną właściwość: nikt nie planuje obiadu z wyprzedzeniem, bo teoretycznie zawsze zdąży. W praktyce kończy się to gotowaniem o dziewiętnastej z tego, co jest, i to jest ta sytuacja, o której warto rozmawiać uczciwie.`;
  }

  if (sytuacja === "srednie") {
    if (wariant === 0) {
      return `Miasto tej wielkości ma swoje tempo: część spraw załatwia się na miejscu, po część jeździ się dalej. Kuchnia zwykle wygląda tu podobnie — gotuje się w tygodniu szybko i konkretnie, a większe rzeczy odkłada na weekend.`;
    }
    if (wariant === 1) {
      return `W mieście tej wielkości sklepy, szkoła i praca są na tyle blisko, że dzień da się poskładać bez pośpiechu — ale na tyle rozrzucone, że i tak schodzi na to popołudnie. Obiad wypada zwykle w jednym stałym momencie i to on organizuje resztę wieczoru.`;
    }
    return `Tu zwykle wiadomo, o której siada się do stołu, i właśnie dlatego kuchnia bywa najbardziej obciążona: gotuje się codziennie, w tygodniu, przy powtarzalnym zestawie dań. Rzadko chodzi o przepisy — częściej o to, żeby ta sama robota zajmowała mniej czasu.`;
  }

  if (wariant === 0) {
    return `W mniejszych miejscowościach zakupy robi się inaczej niż w mieście: rzadziej, większe i częściej z tego, co akurat jest w domu. To nie jest gorszy sposób gotowania — jest po prostu inny i inaczej obciąża kuchnię.`;
  }
  if (wariant === 1) {
    return `W mniejszej miejscowości do sklepu nie skoczy się na pięć minut, więc gotuje się z zapasu i z tego, co zostało. Kuchnia pracuje tu bardziej planowo niż w mieście, a improwizacja dotyczy nie zakupów, tylko tego, co da się złożyć z posiadanych składników.`;
  }
  return `Mniejsza miejscowość rządzi się prostą zasadą: gotuje się częściej i większymi porcjami, bo i tak trzeba. Nie ma tu odruchu zamówienia czegoś na wieczór, więc obiad powstaje w domu prawie zawsze — i to zmienia, co się w kuchni opłaca.`;
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
  {
    akapit:
      "Kasze, ryż i makarony to nudna część kuchni i właśnie dlatego warto o niej wspomnieć. Gotują się z ustawionym czasem i mieszaniem, więc odpada pilnowanie, żeby nie wykipiało i nie przywarło do dna. To nie jest efektowne, ale wraca kilka razy w tygodniu — a właśnie z takich rzeczy składa się prawdziwy zysk.",
    pytanie: "Czy kasza albo ryż nie przywierają do dna?",
    odpowiedz:
      "Mieszanie idzie przez cały czas gotowania, więc typowa przyczyna przywierania znika, a wykipienie nie grozi, bo naczynie jest zamknięte. To akurat mało efektowna zaleta, ale wraca kilka razy w tygodniu.",
  },
  {
    akapit:
      "Ciasta ucierane i biszkopty to druga po drożdżowym rzecz, którą robi się najczęściej. Ubijanie i ucieranie odbywa się w naczyniu, bez trzymania miksera i bez obsypanego blatu, a masa wychodzi równa. Pieczenie, jak przy każdym cieście, należy dalej do piekarnika i tego się nie obejdzie.",
    pytanie: "Czy zastąpi mikser do ciasta?",
    odpowiedz:
      "Do ubijania i ucierania w większości domowych ciast tak — dzieje się to w zamkniętym naczyniu, bez trzymania miksera i bez obsypanego blatu. Pieczenie należy dalej do piekarnika.",
  },
  {
    akapit:
      "Rozdrabnianie warzyw do surówek i sałatek bywa wygodne, ale mam tu jedno zastrzeżenie i wolę powiedzieć je od razu. Przy dużej ilości to oszczędza sporo czasu. Przy dwóch marchewkach szybciej jest wziąć tarkę albo nóż, niż złożyć urządzenie i potem je umyć — i tak właśnie robię u siebie.",
    pytanie: "Czy warto rozdrabniać w tym warzywa?",
    odpowiedz:
      "Przy większej ilości tak, i to jest wyraźna oszczędność czasu. Przy dwóch marchewkach szybciej jest wziąć nóż albo tarkę, niż złożyć urządzenie i potem je umyć. Sprzęt przejmuje część roboty, a nie każdą czynność po kolei.",
  },
  {
    akapit:
      "Wszystko, co powstaje na mleku, ma jedną wspólną cechę: przypala się w chwili nieuwagi. Kaszki, budynie, mleczne kremy i sosy na śmietanie gotują się tu z ustawionym mieszaniem i temperaturą, więc ta konkretna przyczyna nieudanego dania po prostu znika. To bardzo praktyczna rzecz, o której rzadko mówi się na pokazach.",
    pytanie: "Czy dania na mleku się nie przypalają?",
    odpowiedz:
      "Typowa przyczyna przypalenia — moment nieuwagi przy garnku — odpada, bo mieszanie i temperatura są ustawione i pilnowane przez cały czas. To jedna z tych rzeczy, które doceniają najbardziej osoby gotujące dla małych dzieci.",
  },
  {
    akapit:
      "Farsze i masy mielone to robota, której nikt nie lubi: rozdrabnianie mięsa, warzyw i pieczywa, a potem wymieszanie tego wszystkiego w misce. Tutaj dzieje się to w jednym naczyniu, więc znika i przekładanie, i mycie maszynki. Efekt jest ten sam co zawsze — mniejsza jest tylko liczba rzeczy stojących potem w zlewie.",
    pytanie: "Czy zrobię w tym farsz do pierogów albo masę na kotlety?",
    odpowiedz:
      "Tak, i to jest jedno z częstszych zastosowań. Rozdrabnianie i wymieszanie odbywa się w jednym naczyniu, więc odpada przekładanie i mycie maszynki. Smak zależy od Waszego przepisu, nie od urządzenia.",
  },
  {
    akapit:
      "Podgrzewanie i rozpuszczanie to najbardziej niedoceniana część tego sprzętu. Czekolada, masło, miód, żelatyna — wszystko to na palniku wymaga kąpieli wodnej albo bardzo małego ognia i uwagi, bo przypala się natychmiast. Tutaj ustawia się temperaturę i mieszanie i po prostu czeka, aż będzie gotowe.",
    pytanie: "Czy rozpuszczę w tym czekoladę albo masło?",
    odpowiedz:
      "Tak i jest to jedno z prostszych zastosowań: ustawiona temperatura i stałe mieszanie zastępują kąpiel wodną i pilnowanie małego ognia. Konkretnych ustawień nie podam z pamięci — są w materiałach, które przychodzą z urządzeniem.",
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
      "I rzecz, którą mówię każdemu: to urządzenie nie jest dietą. Nie odchudza, nie leczy i nie zmienia tego, co jecie — zmienia wyłącznie to, ile pracy kosztuje przygotowanie. Jeśli ktoś obiecuje Wam coś więcej, warto zapytać, na jakiej podstawie.",
    pytanie: "Czy dzięki temu będziemy jeść zdrowiej?",
    odpowiedz:
      "Samo urządzenie niczego nie zmienia w tym, co jecie — nie jest dietą, nie odchudza i nie leczy. Ułatwia gotowanie w domu i tyle mogę uczciwie obiecać.",
  },
  {
    akapit:
      "Trzeba też powiedzieć rzecz najbardziej przyziemną: to zajmuje miejsce na blacie i ma stać na wierzchu. Sprzęt chowany po każdym użyciu przestaje być używany, i to zwykle w ciągu kilku tygodni. Jeśli w Waszej kuchni nie ma wolnego kawałka blatu, warto rozstrzygnąć to przed zakupem, a nie po.",
    pytanie: "Czy muszę trzymać to na blacie?",
    odpowiedz:
      "Praktycznie tak. Sprzęt chowany po każdym użyciu przestaje być używany w ciągu kilku tygodni — to nie jest kwestia dobrych chęci, tylko progu wejścia. Warto sprawdzić przed zakupem, czy jest dla niego wolne miejsce.",
  },
  {
    akapit:
      "Kolejna rzecz z tej samej półki: to urządzenie waży swoje. Przestawianie go codziennie z szafki na blat i z powrotem nie ma sensu i szybko zniechęca. Nie podaję tu żadnych liczb, bo lepiej po prostu podnieść je na spotkaniu i samemu ocenić, niż uwierzyć mi na słowo.",
    pytanie: "Ile to waży i czy da się to przestawiać?",
    odpowiedz:
      "Nie podam liczby z pamięci — na spotkaniu po prostu je podnieście i sami ocenicie. Codzienne przestawianie z szafki na blat i z powrotem nie ma sensu i szybko zniechęca; to sprzęt do stania na wierzchu.",
  },
  {
    akapit:
      "O myciu też warto powiedzieć uczciwie. Mycie w samym naczyniu naprawdę działa i po zwykłej zupie czy sosie nie trzeba niczego szorować. Ale po czymś tłustym, po cieście albo po czymś przywartym myje się normalnie, a pokrywa i uszczelka zawsze wymagają osobnej uwagi. Zmywania jest mniej niż przy trzech garnkach — nie ma go zero.",
    pytanie: "Czy to naprawdę myje się samo?",
    odpowiedz:
      "Do połowy. Po zwykłej zupie czy sosie nie trzeba niczego szorować i różnica względem trzech garnków jest odczuwalna. Ale po czymś tłustym, po cieście albo po czymś przywartym myje się normalnie, a pokrywa i uszczelka zawsze wymagają uwagi.",
  },
  {
    akapit:
      "Ostatnia rzecz dotyczy nie sprzętu, tylko mnie. Nie podaję ustawień z pamięci — ani temperatur, ani czasów, ani prędkości — bo wymyślona liczba psuje danie i marnuje składniki. Nie doradzam też przy alergiach ani przy dietach zaleconych przez lekarza: to dziedzina, w której zła podpowiedź realnie szkodzi, a ja nie jestem ani lekarką, ani dietetyczką.",
    pytanie: "Czy podpowiesz mi ustawienia albo doradzisz przy diecie?",
    odpowiedz:
      "Ustawień nie podaję z pamięci — są w materiałach, które przychodzą z urządzeniem, i tam trzeba je sprawdzać. Przy alergiach i dietach zaleconych przez lekarza nie doradzam w ogóle: nie jestem lekarką ani dietetyczką, a zła podpowiedź w takiej sprawie komuś szkodzi.",
  },
];

/* ————————————————— OŚ 4: rytm domu ————————————————— */

/**
 * Akapit o tym, kto w domu gotuje i kiedy. Nie twierdzi niczego
 * o mieszkańcach konkretnej miejscowości — opisuje układ domowy, który
 * czytelniczka albo u siebie rozpozna, albo nie.
 */
const RYTM_DOMU: string[] = [
  "W większości domów, do których jeżdżę, gotuje jedna osoba i robi to codziennie, dla wszystkich. To ona odczuwa różnicę, a nie reszta rodziny — i dlatego przy takim zakupie warto pytać przede wszystkim ją, a nie tego, kto akurat ma ochotę o tym rozmawiać.",
  "Bywa, że w kuchni działają dwie osoby, każda po swojemu i każda przekonana, że jej sposób jest właściwy. Urządzenie niczego tu nie rozstrzyga — ale bywa pomocne, bo przepis prowadzony krok po kroku daje wspólny punkt odniesienia i wychodzi tak samo niezależnie od tego, kto go włączył.",
  "Jest też układ, w którym nikt nie je o tej samej porze: jedna osoba wraca wcześniej, druga później, dziecko po zajęciach. Wtedy najbardziej liczy się to, że danie może być gotowe wcześniej i poczekać, a nie to, ile trwa samo gotowanie.",
  "Część domów gotuje partiami: w weekend powstaje kilka rzeczy naraz, a tydzień z tego korzysta. Przy takim rytmie sprzęt pracuje intensywnie przez dwa dni i stoi przez pięć — i to też jest sensowny sposób używania, choć nie tak wygląda na pokazach.",
  "W domu dwuosobowym najczęściej wraca ten sam problem: przepisy są na cztery porcje, a jecie we dwoje. Część rzeczy da się po prostu zmniejszyć, część nie, a bardzo często wygodniej jest ugotować normalną porcję i podzielić ją na dwa razy.",
  "Bywają domy, w których liczba osób przy stole zmienia się z tygodnia na tydzień: przyjeżdżają dzieci, wpadają sąsiedzi, zostaje ktoś na noc. Wtedy najbardziej przydaje się to, że powtórzenie tego samego dania drugi raz nie kosztuje już żadnej dodatkowej nauki.",
  "W domach ze starszymi dziećmi zwykle przychodzi moment, w którym one same zaczynają coś sobie robić. Przepis prowadzony krok po kroku bywa przy tym pomocny, ale o tym, co dziecko może robić samo, a przy czym ma być dorosły, decydujecie Wy — ja nie ustalam takich zasad za rodziców.",
  "Trafiam też do domów, w których po prostu się nie gotuje i nie zapowiada się, żeby miało to zacząć. Wtedy mówię wprost, że ten zakup się nie obroni. Urządzenie skraca robotę komuś, kto już gotuje — nie tworzy nawyku od zera i nie zmienia trybu życia.",
];

/* ————————————————— OŚ 5: jak pracuje Aga ————————————————— */

const JAK_PRACUJE: BlokKuchenny[] = [
  {
    akapit:
      "Jedna rzecz o tym, jak pracuję: nigdy nie mówię, że oferta jest ważna tylko dziś. Nie stawiam terminów, które mają popchnąć do podpisu na miejscu, i nie robię niczego, co miałoby przyspieszyć decyzję. Decyzja podjęta po tygodniu jest lepsza dla Was i uczciwie mówiąc także dla mnie — nie wraca potem jako żal.",
    pytanie: "Czy muszę zdecydować w dniu prezentacji?",
    odpowiedz:
      "Nie. Nigdy nie stawiam warunku, że oferta jest ważna tylko dziś, i nie robię niczego, co miałoby popchnąć do podpisu na miejscu. Decyzja podjęta na spokojnie jest lepsza dla obu stron.",
  },
  {
    akapit:
      "Nie dzwonię po kilka razy z pytaniem, czy już się zdecydowaliście, i po odmowie nie wracam z nowymi argumentami. Jeśli powiecie „nie”, to jest odpowiedź, a nie początek negocjacji. Uważam, że przy wydatku tej wielkości to jest minimum przyzwoitości, a nie żadna wielkoduszność.",
    pytanie: "Czy będziesz do mnie dzwonić po spotkaniu?",
    odpowiedz:
      "Nie dzwonię po kilka razy i po odmowie nie wracam z nowymi argumentami. Jeśli powiecie „nie”, to jest odpowiedź, a nie początek negocjacji. Odezwę się tylko wtedy, gdy sami o to poprosicie.",
  },
  {
    akapit:
      "Jeśli zapytacie mnie o coś, czego nie jestem pewna, powiem „nie wiem, sprawdzę” i sprawdzę. Nie odpowiadam z głowy, żeby brzmieć kompetentnie — przy sprzęcie za takie pieniądze wymyślona odpowiedź kosztuje potem Was, a nie mnie. Dotyczy to zwłaszcza umów, serwisu i wszystkiego, co jest zapisane w dokumentach.",
    pytanie: "A jeśli zapytam o coś, czego nie wiesz?",
    odpowiedz:
      "Powiem „nie wiem, sprawdzę” i sprawdzę. Nie odpowiadam z głowy, żeby brzmieć kompetentnie — zwłaszcza przy umowach, serwisie i wszystkim, co jest zapisane w dokumentach. Tam obowiązuje to, co na piśmie, a nie moje zapewnienia.",
  },
  {
    akapit:
      "Wady podaję bez proszenia i uważam to za najważniejszą część spotkania. Sprzedawca, który nie potrafi wymienić wad tego, co sprzedaje, nie mówi Wam, że wad nie ma — mówi tylko tyle, że nie zamierza o nich rozmawiać. Mnie możecie o nie dopytywać do skutku i nie potraktuję tego jako nieufności.",
    pytanie: "Powiesz mi też o wadach?",
    odpowiedz:
      "Podaję je bez proszenia i uważam to za najważniejszą część spotkania. Sprzedawca, który nie potrafi wymienić wad, nie dowodzi, że ich nie ma — dowodzi tylko, że nie zamierza o nich mówić.",
  },
  {
    akapit:
      "Powiem też rzecz, która osłabia moją pozycję: nie jestem tu bezstronna. Prezentacja jest dla Was bezpłatna, ale nie jest bezinteresowna — zarabiam wtedy, gdy dochodzi do zakupu. Warto słuchać mnie z tą wiedzą w tle, także wtedy, gdy coś chwalę.",
    pytanie: "Czy zarabiasz na tym, że kupię?",
    odpowiedz:
      "Tak. Prezentacja jest bezpłatna, ale nie jest bezinteresowna — zarabiam wtedy, gdy dochodzi do zakupu. Nie podam kwot, bo to nie moja sprawa do rozgłaszania, ale sam fakt powinniście znać.",
  },
  {
    akapit:
      "Spotkanie nie musi się odbyć u Was i nie musicie być na nim sami. Może być obecna druga osoba, może się odbyć u mamy, siostry albo znajomej — i nie trzeba tego w żaden sposób tłumaczyć. Dla mnie to nie robi różnicy, a bywa po prostu wygodniejsze.",
    pytanie: "Czy prezentacja musi być u mnie w domu?",
    odpowiedz:
      "Nie. Może się odbyć u kogoś z rodziny albo u znajomej i może być przy niej obecna druga osoba — bez tłumaczenia się. Ważny jest blat, gniazdko i godzina spokoju, a nie adres.",
  },
  {
    akapit:
      "Po zakupie numer telefonu zostaje ten sam i odbiera go ta sama osoba, która prowadziła spotkanie. Prawdziwe pytania nie pojawiają się na prezentacji, tylko w trzecią środę o dziewiętnastej, przy własnej kuchni — i wtedy warto zadzwonić, zamiast szukać po internecie.",
    pytanie: "Co się dzieje po zakupie?",
    odpowiedz:
      "Numer jest ten sam przed zakupem i po nim, a odbiera go ta sama osoba, która prowadziła prezentację. Na pierwsze dni umawiam się na pomoc przy konkretnym daniu. Nie prowadzę za to kursów gotowania i nie jestem serwisem technicznym.",
  },
  {
    akapit:
      "I rzecz, na której najbardziej mi zależy: jeśli po spotkaniu wyjdzie, że to nie jest sprzęt dla Was, powiem to wprost i nie będę namawiać. Wolę nie sprzedać, niż sprzedać coś, co za pół roku stoi w szafce — takie zakupy wracają potem jako żal, także do mnie.",
    pytanie: "A jeśli okaże się, że to nie dla nas?",
    odpowiedz:
      "Powiem to wprost i nie będę namawiać. Wolę nie sprzedać, niż sprzedać komuś sprzęt, który za pół roku stoi w szafce — takie zakupy wracają potem jako żal, także do mnie.",
  },
];

/* ————————————————— OŚ 6 i 7: region i dojazd ————————————————— */

function akapitRegionu(region: string | null | undefined, wariant: number): string {
  if (region) {
    if (wariant === 0) {
      return `${region} — to duży kawałek kraju i każda miejscowość wygląda w nim inaczej. Nie będę więc opowiadać Wam o Waszej okolicy ani udawać, że znam ją lepiej niż Wy. Przyjeżdżam z urządzeniem, gotujemy razem u Was w kuchni i to Wy oceniacie, czy to ma sens.`;
    }
    if (wariant === 1) {
      return `Jeżdżę po całym regionie — ${region} — i widzę, że dwie sąsiadujące ze sobą miejscowości potrafią mieć zupełnie inne kuchnie. Dlatego nie przywożę tu gotowej opowieści o Waszej okolicy. Przywożę urządzenie i składniki, a resztę oceniacie sami.`;
    }
    return `${region} to obszar, o którym łatwo napisać coś ogólnego i nietrafionego. Nie zamierzam tego robić. To Wy wiecie, jak wygląda u Was tydzień i co się w Waszej kuchni sprawdza — moja rola na spotkaniu polega na pokazaniu urządzenia w tych warunkach, a nie na opowiadaniu Wam o Was.`;
  }
  if (wariant === 0) {
    return `Nie będę opowiadać Wam o Waszej okolicy ani udawać, że znam ją lepiej niż Wy. Przyjeżdżam z urządzeniem, gotujemy razem u Was w kuchni i to Wy oceniacie, czy to ma sens.`;
  }
  if (wariant === 1) {
    return `Nie przywożę tu gotowej opowieści o Waszej okolicy — przywożę urządzenie i składniki. To Wy wiecie, jak wygląda u Was tydzień, i to Wy oceniacie, czy taki sprzęt ma u Was sens.`;
  }
  return `Łatwo napisać o cudzej okolicy coś ogólnego i nietrafionego, więc tego nie robię. Moja rola na spotkaniu polega na pokazaniu urządzenia w Waszych warunkach, a nie na opowiadaniu Wam o Was.`;
}

function akapitDojazdu(sasiedzi: string | null, wariant: number): string {
  if (sasiedzi) {
    if (wariant === 0) {
      return `Dojazd jest bezpłatny i nie zależy od odległości — jeżdżę też ${sasiedzi}. Odległość wpływa wyłącznie na porę spotkania, nigdy na jego koszt.`;
    }
    if (wariant === 1) {
      return `W tę stronę jeżdżę regularnie: w zasięgu tej samej trasy są ${sasiedzi}. Dojazd jest wszędzie bezpłatny, a odległość wpływa tylko na to, o której się umówimy.`;
    }
    return `Nie doliczam nic za dojazd, niezależnie od tego, jak daleko trzeba jechać — trafiam też ${sasiedzi}. Odległość jest kwestią godziny spotkania, a nie jego kosztu.`;
  }
  if (wariant === 0) {
    return `Dojazd jest bezpłatny i nie zależy od odległości — wpływa ona wyłącznie na porę spotkania, nigdy na koszt.`;
  }
  if (wariant === 1) {
    return `Za dojazd nic nie doliczam, niezależnie od odległości. Wpływa ona tylko na to, o której uda nam się umówić.`;
  }
  return `Odległość nie zmienia ceny spotkania — dojazd jest bezpłatny wszędzie, a wpływa jedynie na godzinę, którą uda się ustalić.`;
}

const AKAPIT_SPOTKANIA = [
  `Na spotkaniu gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Na koniec podaję cenę, aktualną promocję i wysokość raty przy kilku okresach spłaty. Nie trzeba decydować tego samego dnia i nic za spotkanie nie płacicie.`,
  `Spotkanie wygląda tak: przyjeżdżam ze sprzętem i ze składnikami, gotujemy razem kilka rzeczy — chętnie takich, które i tak jecie — a na koniec rozmawiamy o liczbach: cena, promocja i rata przy kilku okresach spłaty. Nic za to nie płacicie i nic nie trzeba decydować od razu.`,
  `Godzina spotkania to przede wszystkim gotowanie, a nie pokaz slajdów: robimy obiad, coś słodkiego i to, na co macie ochotę. Liczby — cena, aktualna promocja i rata — są na końcu, żeby było wiadomo, o czym w ogóle mowa. Spotkanie jest bezpłatne i niczego nie przesądza.`,
];

/* ————————————————— OŚ 9: nagłówki ————————————————— */

const NAGLOWKI: Record<SytuacjaMiejscowosci, (gdzie: string) => string[]> = {
  satelita: (gdzie) => [
    `Wieczór ${gdzie} — i po co Wam do tego urządzenie`,
    `Kuchnia ${gdzie} między powrotem a wieczorem`,
    `Dzień poza domem, obiad ${gdzie}`,
  ],
  duze: () => [
    "Miasto, do którego zjeżdża się okolica — i obiad, który musi to wytrzymać",
    "Kilka pór posiłku zamiast jednej — i co z tego wynika w kuchni",
    "Dużo spraw na miejscu, mało czasu w kuchni",
  ],
  srednie: (gdzie) => [
    `Tydzień ${gdzie} — szybko w tygodniu, spokojniej w weekend`,
    `Kuchnia ${gdzie} — codziennie, powtarzalnie, bez fajerwerków`,
    `Stała pora obiadu ${gdzie} — i robota, która się przy niej powtarza`,
  ],
  male: (gdzie) => [
    `Gotowanie ${gdzie} — z tego, co jest w domu`,
    `Zakupy rzadziej, gotowanie częściej — kuchnia ${gdzie}`,
    `Kuchnia ${gdzie} — planowo, z zapasu, większymi porcjami`,
  ],
};

export interface TrescWariantu {
  heading: string;
  paragraphs: string[];
  faq: FaqItem[];
}

/**
 * Zwraca złożoną treść albo `null` dla lokalizacji, które jej nie
 * dostają (województwa). Wywołujący zachowuje wtedy dotychczasowy tekst.
 *
 * Dzielniki przy poszczególnych osiach (7, 53, 211, 1009, 3, 5, 11) to
 * różne liczby pierwsze — dzięki temu osie nie są ze sobą skorelowane
 * i dwie miejscowości o zbliżonych slugach nie dostają tego samego
 * zestawu bloków.
 */
export function buildWariantTresci(resolution: LocationResolution): TrescWariantu | null {
  const { location, neighbors } = resolution;
  const sytuacja = wybierzSytuacje(location);
  if (!sytuacja) return null;

  const h = skrot(location.slug);

  const temat = TEMATY_KUCHENNE[h % TEMATY_KUCHENNE.length];
  const ograniczenie = OGRANICZENIA[Math.floor(h / 7) % OGRANICZENIA.length];
  const rytm = RYTM_DOMU[Math.floor(h / 53) % RYTM_DOMU.length];
  const jakPracuje = JAK_PRACUJE[Math.floor(h / 211) % JAK_PRACUJE.length];
  const wariantSytuacji = Math.floor(h / 1009) % 3;
  const wariantRegionu = Math.floor(h / 3) % 3;
  const wariantDojazdu = Math.floor(h / 5) % 3;
  const wariantSpotkania = Math.floor(h / 11) % AKAPIT_SPOTKANIA.length;
  const wariantNaglowka = Math.floor(h / 101) % 3;
  const ukladAkapitow = Math.floor(h / 17) % 2;

  const gdzie = wForma(location);
  const sasiedzi = sasiedziLista(neighbors);

  // Dwa układy środkowych akapitów, żeby strony nie miały identycznej
  // budowy nawet przy zbliżonym zestawie bloków.
  const srodek =
    ukladAkapitow === 0
      ? [temat.akapit, rytm, ograniczenie.akapit, jakPracuje.akapit]
      : [rytm, temat.akapit, jakPracuje.akapit, ograniczenie.akapit];

  const paragraphs = [
    akapitSytuacji(sytuacja, location, wariantSytuacji),
    ...srodek,
    akapitRegionu(location.region, wariantRegionu),
    akapitDojazdu(sasiedzi, wariantDojazdu),
    AKAPIT_SPOTKANIA[wariantSpotkania],
  ];

  return {
    heading: NAGLOWKI[sytuacja](gdzie)[wariantNaglowka],
    paragraphs,
    faq: [
      { question: temat.pytanie, answer: temat.odpowiedz },
      { question: ograniczenie.pytanie, answer: ograniczenie.odpowiedz },
      { question: jakPracuje.pytanie, answer: jakPracuje.odpowiedz },
    ],
  };
}
