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
 * SZLICHTYNGOWA — powiat wschowski, woj. lubuskie.
 * MIASTO 1 244 (GUS 31.12.2024), 1,6 km² — gęstość
 * 802,6 os./km², jedno z najgęściej zabudowanych
 * miasteczek regionu.
 * GMINA 4 802 (GUS 31.12.2024), 99,8 km².
 *
 * ⚠ HOMONIM: SZLICHTYNGOWA ≠ SZLACHTOWA (wieś w Małopolsce,
 *   Pieniny). FAQ to rozróżnia.
 * ⚠⚠ SZLICHTYNGOWA LEŻY W WOJ. LUBUSKIM, ALE HISTORYCZNIE
 *   BYŁA LOKOWANA W WIELKOPOLSCE — nie na Śląsku.
 *   Miasto założono dla osadników przybyłych ZE ŚLĄSKA,
 *   czyli kierunek jest odwrotny, niż podpowiada intuicja.
 *   ⚠ POWODU ICH PRZYBYCIA NIE OPISUJĘ — prowadziłby
 *     do tematu wyznaniowego. TWARDA GRANICA.
 *
 * HISTORIA — PODSTAWA KĄTA:
 * — 1634 — Jan Jerzy Szlichtyng, sędzia ziemski wschowski,
 *   nabywa wieś Górczyna,
 * — 20 lipca 1644 — PRZYWILEJ LOKACYJNY NA PRAWIE
 *   MAGDEBURSKIM OD WŁADYSŁAWA IV; miasto zakładano
 *   NA SUROWYM KORZENIU, na terenie leśnym,
 * — 11 lipca 1645 — przywilej uzupełniający: OSIEM LAT
 *   ZWOLNIENIA OD PODATKÓW dla osadników,
 * — 1653 — przywilej Jana Kazimierza ustanawiający w mieście
 *   SKŁAD PŁÓTNA NA EKSPORT. ⚠ NIE TWIERDZĘ, ŻE SKŁAD
 *   FAKTYCZNIE FUNKCJONOWAŁ — przywilej to nie to samo
 *   co działalność.
 * — struktura rzemiosła na pocz. XVIII w.: 20 szewców,
 *   19 młynarzy, 10 sukienników, 9 piekarzy, 8 krawców,
 *   5 kuśnierzy, 5 rzeźników, 5 kołodziejów, 5 stolarzy,
 *   5 garncarzy,
 * — ⚠⚠ 1737 — UKŁAD MIASTA: JEDENAŚCIE ULIC WYBIEGAJĄCYCH
 *   Z KWADRATOWEGO RYNKU. TO JEST KOTWICA: całe miasto
 *   mieści się w jednej figurze, a każdy element ma w niej
 *   swoje miejsce i swoją kolejność.
 *   ⚠ KĄTA „zaprojektowane naraz kontra dokładane po kolei"
 *     NIE POWTARZAM — jest ZAJĘTY (Zamość). Układ jest tu
 *     KOTWICĄ OBRAZOWĄ, nie tematem urbanistycznym.
 *     TWARDA GRANICA.
 * — miasto leży na szlaku Głogów–Wschowa, w pradolinie
 *   głogowskiej.
 *
 * ZABYTKI: DREWNIANA DZWONNICA z XVII–XVIII w. —
 * kwadratowa, z kratownicową częścią górną i dachem
 * piramidalnym; kamienice przyrynkowe z pocz. XIX w.;
 * w gminie: zespół pałacowo-folwarczny w Jędrzychowicach
 * (barok, pocz. XVIII w.), barokowy kościół św. Marii
 * Magdaleny w Zamysłowie z 1752 r., fundacja klarysek
 * głogowskich, dwór w Zamysłowie (2. poł. XVIII w.).
 * ⚠ WIATRAKA KOŹLAKA Z 1757 r. NIE WYMIENIAM — losu
 *   nie ustalono.
 * ⚠⚠ POŻARU KOŚCIOŁA W 1995 r. NIE OPISUJĘ — temat
 *   katastrofy. TWARDA GRANICA.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE MA NA LIŚCIE PRODUKTÓW
 * TRADYCYJNYCH. NIE WYMYŚLAM ŻADNEGO.
 * ⚠⚠ MŁYNARZY I PIEKARZY WYMIENIAM WYŁĄCZNIE JAKO LICZBY
 *   W BLOKU O MIEŚCIE — kąty „mąka i mielenie" oraz „chleb"
 *   SĄ ZAJĘTE.
 * ⚠⚠ KĄTA PŁÓCIENNEGO NIE UŻYWAM — „ODSĄCZANIE
 *   I ODCISKANIE" (Łapy) i „BLAT I ŚCIERECZKA" (Koluszki)
 *   SĄ ZAJĘTE. Skład płótna jest tu wyłącznie faktem
 *   historycznym w bloku o mieście. TWARDA GRANICA.
 *
 * KĄT: ZAPIEKANKA — jedno naczynie, cały obiad, i cztery
 * powody, dla których zwykle nie wychodzi.
 * Kąt od układu miasta z 1737 roku: jedenaście ulic
 * wybiegających z jednego kwadratowego rynku — całość
 * mieszcząca się w jednej figurze, w której każdy element
 * ma swoje miejsce i swoją kolejność.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że zapiekanka jest najbardziej wyrozumiałym daniem,
 *   jakie istnieje, a mimo to psuje się ją najczęściej —
 *   i zawsze na jeden z czterech sposobów,
 * — OBJAWY: wierzch spalony przy surowym spodzie; wodnisty
 *   spód; gumowaty ser; twarde ziemniaki,
 * — PRZYCZYNA PIERWSZA: SUROWE SKŁADNIKI O RÓŻNYCH CZASACH
 *   W JEDNYM NACZYNIU. Ziemniaki, marchew, kasza i suchy
 *   makaron potrzebują dużo więcej czasu niż reszta —
 *   podgotowuje się je wcześniej albo kroi wyraźnie
 *   drobniej,
 * — PRZYCZYNA DRUGA: WODA Z WARZYW. Cukinia, pieczarki
 *   i szpinak oddają jej dużo i robią z tego zalewę.
 *   ⚠ PISZĘ O TYM JEDNYM AKAPITEM, NIE ROZWIJAM —
 *     kąt „ODSĄCZANIE I ODCISKANIE" JEST ZAJĘTY.
 * — PRZYCZYNA TRZECIA, NAJWAŻNIEJSZA: BRAK PRZYKRYCIA
 *   NA POCZĄTKU. Pierwszą część pieczenia zapiekanka
 *   powinna spędzić przykryta, a dopiero potem odkryta —
 *   wtedy środek dochodzi, a wierzch rumieni się na końcu.
 *   To jest cała technika tego dania,
 * — PRZYCZYNA CZWARTA: SER DODANY OD POCZĄTKU. Zapiekany
 *   przez cały czas robi się twardy i ciągnący; dodaje się
 *   go po odkryciu,
 * — KOLEJNOŚĆ WARSTW: to, co mokre i z sosem, idzie na dół
 *   i do środka; to, co suche i tłuste — na wierzch,
 * — ŻE WYSOKOŚĆ NACZYNIA ZMIENIA WSZYSTKO: płaskie piecze
 *   się szybciej i daje więcej skórki, głębokie dłużej
 *   i daje więcej miękkiego środka; to wybór, a nie
 *   szczegół,
 * — ŻE ZAPIEKANKA JEST NAJLEPSZYM DANIEM NA RESZTKI,
 *   ale pod jednym warunkiem: resztki muszą być już
 *   ugotowane, bo inaczej wraca przyczyna pierwsza,
 * — ⚠⚠ UCZCIWIE: THERMOMIX NIE PIECZE. Zapiekankę i tak
 *   trzeba wstawić do piekarnika i to jest realne
 *   ograniczenie, którego nie ukrywam,
 * — ale robi całą bazę: sos beszamelowy bez grudek
 *   i bez pilnowania, podgotowanie twardych warzyw na parze
 *   zamiast w osobnym garnku, starcie sera, zmielenie mięsa
 *   — czyli wszystko to, co przy zapiekance zajmuje czas
 *   i brudzi naczynia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 *   „Pierwszą część", „na końcu" — TYLKO OPISOWO.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO tematu naczyń żaroodpornych jako materiału —
 *   kąt „NACZYNIA DO PIECZENIA — GLINA, SZKŁO, METAL"
 *   ZAJĘTY. Piszę wyłącznie o WYSOKOŚCI naczynia.
 *   TWARDA GRANICA.
 * — ⚠ ZERO tematu odpoczynku po upieczeniu — kąt ZAJĘTY.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ⚠⚠ ZERO TEMATU WYZNANIOWEGO — powodu przybycia
 *   osadników ze Śląska NIE OPISUJĘ. Piszę wyłącznie,
 *   że miasto zakładano dla osadników i że dostali osiem
 *   lat zwolnienia od podatków. TWARDA GRANICA.
 * — ZERO konfliktów narodowościowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠⚠ ZERO POŻARU KOŚCIOŁA Z 1995 r.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „NACZYNIA DO PIECZENIA" dotyczą MATERIAŁU FORMY.
 * — „ODSĄCZANIE I ODCISKANIE" (Łapy) dotyczy USUWANIA WODY
 *   ZE SKŁADNIKÓW.
 * — „FARSZ — jedno nadzienie, kilka dań" dotyczy NADZIENIA.
 * — „resztki" dotyczą TEGO, CO ZOSTAŁO PO OBIEDZIE.
 * — „SER, KTÓRY SIĘ TOPI" dotyczy SERA NA GORĄCO.
 * — „zaprojektowane naraz kontra dokładane po kolei"
 *   dotyczy URBANISTYKI I KUCHNI SKŁADANEJ.
 * TUTAJ chodzi WYŁĄCZNIE O JEDNO DANIE — o zapiekankę
 * i o cztery konkretne przyczyny, dla których nie wychodzi.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE TWIERDZĘ, że skład płótna faktycznie funkcjonował
 *   — piszę o PRZYWILEJU z 1653 r.
 * — NIE PODAJĘ losu wiatraka koźlaka z 1757 r.
 * — NIE OPISUJĘ pożaru kościoła ani powodów przybycia
 *   osadników.
 * — NIE WYMYŚLAM produktu lokalnego ani imprezy kulinarnej.
 * — NIE MYLĘ SZLICHTYNGOWEJ ze SZLACHTOWĄ.
 * — districts: brak osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — w 1634 r. Jan Jerzy Szlichtyng, sędzia ziemski wschowski,
 *   nabył wieś Górczyna, a 20 lipca 1644 r. Władysław IV
 *   wydał przywilej lokacyjny na prawie magdeburskim;
 *   miasto zakładano na surowym korzeniu, na terenie leśnym,
 * — 11 lipca 1645 r. osadnicy otrzymali przywilej uzupełniający
 *   z ośmioletnim zwolnieniem od podatków,
 * — w 1653 r. Jan Kazimierz ustanowił w Szlichtyngowej
 *   skład płótna na eksport,
 * — na początku XVIII w. pracowało tu m.in. dwudziestu
 *   szewców, dziewiętnastu młynarzy, dziesięciu sukienników
 *   i dziewięciu piekarzy,
 * — układ miasta z 1737 r. to jedenaście ulic wybiegających
 *   z kwadratowego rynku; miasto leżało na szlaku
 *   z Głogowa do Wschowy, w pradolinie głogowskiej,
 * — zachowała się drewniana dzwonnica z XVII–XVIII w.,
 *   kwadratowa, z kratownicową częścią górną i dachem
 *   piramidalnym, oraz kamienice przyrynkowe z początku
 *   XIX w.,
 * — w gminie stoją zespół pałacowo-folwarczny
 *   w Jędrzychowicach z początku XVIII w. i barokowy kościół
 *   św. Marii Magdaleny w Zamysłowie z 1752 r., ufundowany
 *   przez klaryski głogowskie.
 */
export const SZLICHTYNGOWA: CityContent = {
  slug: "szlichtyngowa",
  h1: "Thermomix Szlichtyngowa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Szlichtyngowa — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Szlichtyngowej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szlichtyngowa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Szlichtyngowej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Szlichtyngowej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Szlichtyngowa"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zapiekanka wybacza prawie wszystko — poza jednym: pieczeniem bez przykrycia.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Szlichtyngowej – jak wygląda prezentacja?",
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
      id: "zapiekanka",
      heading: "Jedenaście ulic z jednego rynku — czyli o zapiekance",
      paragraphs: [
        "Układ Szlichtyngowej opisany w 1737 roku to jedenaście ulic wybiegających z kwadratowego rynku. Miasto zakładano na surowym korzeniu, na terenie leśnym — przywilej lokacyjny Władysław IV wydał 20 lipca 1644 roku, a rok później osadnicy dostali osiem lat zwolnienia od podatków. Wszystko mieściło się w jednej figurze i każdy element miał w niej swoje miejsce i swoją kolejność.",
        "Dokładnie tak działa zapiekanka — jedyne danie, w którym cały obiad ląduje w jednym naczyniu, ułożony warstwami. Jest przy tym najbardziej wyrozumiałym daniem, jakie znam, a mimo to psuje się ją nagminnie. I zawsze na jeden z czterech sposobów.",
        "Objawy znacie: wierzch spalony przy surowym spodzie. Wodnista zalewa na dnie. Ser twardy i ciągnący się jak guma. Ziemniaki, które po godzinie wciąż stawiają opór.",
        "Przyczyna pierwsza to surowe składniki o zupełnie różnych czasach, wrzucone razem. Ziemniaki, marchew, kasza i suchy makaron potrzebują dużo więcej niż mięso mielone, cukinia czy pomidory. Albo się je wcześniej podgotowuje, albo kroi wyraźnie drobniej niż resztę. Trzeciej możliwości nie ma i to jest najczęstszy powód nieudanych zapiekanek.",
        "Przyczyna druga to woda. Cukinia, pieczarki i szpinak oddają jej naprawdę dużo i potrafią zrobić z zapiekanki zupę. Wystarczy je wcześniej podsmażyć albo osączyć — to jedno zdanie, ale ratuje pół dania.",
        "Przyczyna trzecia jest najważniejsza i zarazem najrzadziej stosowana: zapiekanka powinna spędzić pierwszą część pieczenia przykryta, a dopiero drugą odkryta. Pod przykryciem środek dochodzi i nic nie wysycha; po zdjęciu przykrycia wierzch rumieni się i robi skórkę. Odwrotna kolejność — czyli od razu odkryte — daje dokładnie ten obraz, o którym była mowa: ciemny wierzch i surowy spód. To jest właściwie cała technika tego dania i można ją streścić w jednym zdaniu.",
        "Przyczyna czwarta: ser dodany na samym początku. Zapiekany przez cały czas robi się twardy, tłusty i ciągnący. Ser sypie się po zdjęciu przykrycia, na ostatnią część pieczenia — wtedy jest dokładnie taki, jak na zdjęciach.",
        "Kolejność warstw też ma swoją logikę i jest prosta: to, co mokre i z sosem, idzie na dół i do środka; to, co suche i tłuste — na wierzch. Dlatego bułka tarta, ser i masło zawsze kończą na górze, a sos nigdy.",
        "Rzecz, o której mało kto myśli, a która zmienia wynik bardziej niż przepis: wysokość naczynia. Płaskie piecze się szybciej i daje dużo skórki. Głębokie potrzebuje więcej czasu i daje więcej miękkiego środka. To jest wybór, a nie szczegół — i warto go dokonać świadomie, zamiast brać to, co akurat stoi w szafce.",
        "Zapiekanka jest wreszcie najlepszym daniem na resztki, jakie istnieje — pod jednym warunkiem. Resztki muszą być już ugotowane. Wczorajszy makaron, wczorajsze ziemniaki, wczorajsze mięso: tak. Surowa marchewka dorzucona „bo leżała”: nie, bo wraca przyczyna pierwsza.",
        "Teraz uczciwie o sprzęcie, i będzie to uczciwość na jego niekorzyść. Thermomix nie piecze. Zapiekankę trzeba wstawić do piekarnika i żadna funkcja tego nie obejdzie. Kto szuka urządzenia, które zrobi zapiekankę w całości, ten go tu nie znajdzie.",
        "Robi natomiast całą bazę, czyli tę część, która przy zapiekance zajmuje czas i brudzi naczynia. Sos beszamelowy bez grudek i bez stania przy garnku — a to właśnie on odpowiada za większość nieudanych zapiekanek. Podgotowanie twardych warzyw na parze, zamiast wstawiania drugiego garnka. Starcie sera. Zmielenie mięsa. Zostaje przełożyć do naczynia i wstawić do piekarnika, i to jest naprawdę ta część, która zajmuje najmniej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Szlichtyngowej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć beszamel bez grudek — powiedzcie przy umawianiu. To jedna z tych rzeczy, które najlepiej widać na żywo.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Szlichtyngowej"),
    sekcjaRaty("w Szlichtyngowej"),
    {
      id: "rodzina",
      heading: "Thermomix dla szlichtyngowskiej rodziny",
      paragraphs: [
        "Szlichtyngowa liczy nieco ponad tysiąc dwustu mieszkańców na zaledwie półtora kilometra kwadratowego, co czyni ją jednym z najgęściej zabudowanych miasteczek w regionie; cała gmina to blisko pięć tysięcy osób na stu kilometrach kwadratowych. W 1634 roku Jan Jerzy Szlichtyng, sędzia ziemski wschowski, nabył wieś Górczyna, a 20 lipca 1644 Władysław IV wydał przywilej lokacyjny na prawie magdeburskim — miasto zakładano na surowym korzeniu, na terenie leśnym. 11 lipca 1645 osadnicy otrzymali przywilej uzupełniający z ośmioletnim zwolnieniem od podatków, a w 1653 Jan Kazimierz ustanowił tu skład płótna na eksport. Na początku XVIII wieku pracowało w mieście między innymi dwudziestu szewców, dziewiętnastu młynarzy, dziesięciu sukienników i dziewięciu piekarzy. Układ z 1737 roku to jedenaście ulic wybiegających z kwadratowego rynku; miasto leży w pradolinie głogowskiej, na dawnym szlaku z Głogowa do Wschowy. Zachowała się drewniana dzwonnica z XVII–XVIII wieku — kwadratowa, z kratownicową częścią górną i dachem piramidalnym — oraz kamienice przyrynkowe z początku XIX wieku. W gminie stoją zespół pałacowo-folwarczny w Jędrzychowicach z początku XVIII wieku i barokowy kościół świętej Marii Magdaleny w Zamysłowie z 1752 roku, ufundowany przez klaryski głogowskie.",
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

  districtsHeading: "Do których części Szlichtyngowej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi w gminie — Dryżyny, Goli, Górczyny, Jędrzychowic, Kowalewa, Małych i Nowych Drzewiec, Puszczy, Starych Drzewiec, Wyszanowa i Zamysłowa.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Szlichtyngową też przyjadę",
  nearbyParagraphs: [
    "Wschowa, Głogów, Sława i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wschowa", "Głogów", "Sława"],

  about: blokOMnie("do Szlichtyngowej", "w Szlichtyngowej", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Szlichtyngowej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie — Jędrzychowic, Zamysłowa, Starych Drzewiec i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Szlichtyngową w powiecie wschowskim, a nie o Szlachtową w Pieninach.",
    },
    ...faqWspolne("w Szlichtyngowej"),
    {
      question: "Dlaczego zapiekanka ma spalony wierzch i surowy spód?",
      answer:
        "Bo piekła się od początku odkryta. Pierwszą część pieczenia zapiekanka powinna spędzić przykryta — wtedy środek dochodzi i nic nie wysycha — a dopiero drugą odkryta, żeby wierzch się zrumienił. To właściwie cała technika tego dania.",
    },
    {
      question: "Dlaczego ziemniaki w zapiekance zostają twarde?",
      answer:
        "Bo trafiły surowe razem ze składnikami o dużo krótszym czasie. Ziemniaki, marchew, kaszę i suchy makaron albo się wcześniej podgotowuje, albo kroi wyraźnie drobniej niż resztę. Ta sama zasada dotyczy resztek: do zapiekanki nadają się tylko te już ugotowane.",
    },
    {
      question: "Kiedy dodawać ser do zapiekanki?",
      answer:
        "Po zdjęciu przykrycia, na ostatnią część pieczenia. Ser zapiekany od początku robi się twardy i ciągnący. Ogólna zasada układania warstw jest taka: to, co mokre i z sosem, idzie na dół i do środka, a to, co suche i tłuste — bułka tarta, ser, masło — na wierzch.",
    },
  ],

  geo: { lat: 51.712, lng: 16.2425 },
};
