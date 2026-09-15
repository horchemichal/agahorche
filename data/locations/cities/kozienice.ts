import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * KOZIENICE — powiat kozienicki, woj. mazowieckie.
 * MIASTO 15 387 (GUS 31.12.2024), 10,5 km², 1472,4 os./km²
 * — jedno z najgęściej zabudowanych miast w serwisie.
 * ⚠ BRIEF PODAWAŁ ~17 tys. — GUS mówi 15 387. UŻYWAM GUS.
 *
 * ⚠ HOMONIMY: KOZIENICE ≠ KOZY (małopolskie)
 *   ≠ KOZIEGŁOWY ≠ KOSIENICE (podkarpackie). FAQ to rozróżnia.
 * ⚠⚠ RZEKA TO ZAGOŻDŻONKA, NIE „ZAGOŻDŻON". Zagożdżon
 *   to dawna nazwa osady, dziś PIONKI. TWARDA GRANICA.
 * ⚠ ŚCIEŻKA „KRÓLEWSKIE ŹRÓDŁA" W KOZIENICACH ≠ REZERWAT
 *   „ŹRÓDŁO KRÓLEWSKIE" POD PIONKAMI. Oba w Puszczy
 *   Kozienickiej. ⚠ ŹRÓDEŁ NIE ROBIĘ TEMATEM — kąt wodny
 *   przypisano Pionkom.
 *
 * ⚠⚠ PRODUKT Z LISTY PRODUKTÓW TRADYCYJNYCH — POTWIERDZONY:
 * „RAZÓWKA Z KOZIENIC", chleb razowy, wpisana na LPT MRiRW
 * 30 LISTOPADA 2017 r. Wytwarzana przez piekarnię działającą
 * w Kozienicach co najmniej od 1937 r. (założyciel Stefan
 * Szeliga); recepturę wprowadzono w 1989 r. Składniki:
 * zakwas żytni, mąka żytnia typ 2000, mąka pszenna typ 750,
 * drożdże, sól, woda.
 * ⚠⚠ WYMIENIAM TEN FAKT W BLOKU O MIEŚCIE, ALE NIE ROBIĘ
 *   Z NIEGO KĄTA — „chleb", „czerstwy chleb", „KISZONKI
 *   I ZAKWAS", „MĄKA I MIELENIE" SĄ ZAJĘTE. TWARDA GRANICA.
 *   ⚠ NAZWY PIEKARNI NIE PODAJĘ (zasada: zero nazw firm);
 *     nazwisko założyciela z 1937 r. podaję, bo jest częścią
 *     opisu produktu na LPT.
 *
 * ⚠⚠ POPIELARNIE I POTAŻARNIE — PODSTAWA KĄTA:
 * W XIX w. w regionie działały „SMOLARNIE, POPIELARNIE
 * I POTAŻARNIE" produkujące smołę, terpentynę I POPIÓŁ;
 * drewno spławiano Wisłą do Warszawy.
 * ⚠ W połowie XVI w. ok. 15% ludności STAROSTWA RADOMSKIEGO
 *   zajmowało się bartnictwem — ⚠ TO STAROSTWO RADOMSKIE,
 *   NIE GMINA KOZIENICE. NIE PRZYPISUJĘ TEGO KOZIENICOM.
 * ⚠ „Zapisy u prawa obelnego w Jedlni" (1572–1835) dotyczą
 *   STAROSTWA RADOMSKIEGO — Jedlnia leży w powiecie radomskim.
 *   NIE PRZYPISUJĘ.
 * — rozwinięte było BEDNARSTWO I CIESIELSTWO, szczególnie
 *   w XVIII w.; ziemie nadwiślańskie żyzne dzięki naniesieniom
 *   powodziowym.
 *
 * DALSZE FAKTY:
 * — Przegląd KGW Ziemi Kozienickiej „SMAKI ZIEMI KOZIENICKIEJ"
 *   — VI edycja 13 września 2025 nad Jeziorem Kozienickim,
 *   16 kół ze wszystkich siedmiu gmin powiatu, hasło
 *   „Z ogrodu i pola na stół"; degustacje chleba, zup
 *   regionalnych, kiszonek i wypieków; organizator LGD
 *   „Puszcza Kozienicka",
 *   ⚠ KĄTU KONKURSOWEGO NIE UŻYWAM — „DANIE NA KONKURS
 *     KONTRA DANIE NA CO DZIEŃ" (Wschowa) ZAJĘTE.
 * — KOZIENICKI PARK KRAJOBRAZOWY: 26 000 ha + otulina
 *   36 600 ha; ponad 200 gatunków ptaków; sosny i dęby
 *   w wieku 200–300 lat; rezerwat Jedlnia przy zalewie Siczki,
 * — kościół św. Krzyża — fundacja Władysława Jagiełły
 *   z 1394 r., obecny budynek 1868–1869 (piąta świątynia
 *   w tym miejscu); przy nim XVI-wieczna kolumna
 *   (odbudowana 1702) poświęcona Zygmuntowi I,
 * — MUZEUM REGIONALNE przechowuje kolekcję uli pokazującą
 *   rozwój od kłód bartnych po ule ramowe, w tym „ule
 *   włościańskie" wg projektów Kazimierza Lewickiego,
 *   oraz miodarki i podkurzacze.
 *   ⚠ KĄT „MIÓD" ZAJĘTY — muzeum wymieniam jako fakt.
 * — ⚠⚠ PAŁAC: 1776–1778 (proj. Francesco Placidi), park
 *   1786–1791 (proj. Jan Kanty Fontana), przebudowa
 *   1896–1904. ⚠ PAŁAC SPŁONĄŁ W 1939 r., OBECNY BUDYNEK
 *   POCHODZI Z 1962 r. — piszę o tym NEUTRALNIE, bez
 *   podawania przyczyny. TWARDA GRANICA.
 * — kramy z poł. XIX w.; willa notariusza Bezego (1923).
 *
 * KĄT: POPIÓŁ — najstarszy surowiec kuchni, o którym
 * wszyscy zapomnieli.
 * Kąt od tego, że w XIX-wiecznej Puszczy Kozienickiej
 * działały popielarnie i potażarnie — całe zakłady, których
 * produktem był popiół.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dziś popiół to dla nas odpad, a przez większość
 *   historii był surowcem tak wartościowym, że produkowały
 *   go osobne zakłady i spławiano go rzeką,
 * — ŻE W KUCHNI POPIÓŁ MIAŁ TRZY ROLE:
 *   — ŹRÓDŁO ŁAGODNEGO, RÓWNOMIERNEGO CIEPŁA,
 *   — ŚRODEK DO SZOROWANIA NACZYŃ (ług z popiołu),
 *   — SKŁADNIK SPULCHNIAJĄCY w dawnych wypiekach (potaż),
 *     ⚠ WYMIENIAM TO JAKO FAKT HISTORYCZNY, NIE JAKO
 *       INSTRUKCJĘ. ZERO ZACHĘTY DO UŻYWANIA POTAŻU.
 *       TWARDA GRANICA.
 * — ⚠⚠ RZECZ NAJWAŻNIEJSZA I PRAKTYCZNA: PIECZENIE
 *   W POPIELE to nie ciekawostka, tylko technika, która
 *   wciąż działa i której nikt nie zastąpił — ziemniak,
 *   burak, cebula, czosnek i pieczarka włożone w żar
 *   ogniska albo grilla dochodzą powoli, we własnej skórze,
 *   bez wody i bez tłuszczu,
 * — ŻE ZASADA JEST PROSTA: POPIÓŁ NIE PARZY TAK JAK PŁOMIEŃ,
 *   tylko oddaje ciepło powoli i równo — dlatego warzywo
 *   nie przypala się z wierzchu, zanim dojdzie w środku,
 * — ŻE SKÓRA JEST TU OPAKOWANIEM, które się zdejmuje
 *   po upieczeniu i wyrzuca — więc pytanie o czystość
 *   popiołu w ogóle nie powstaje,
 * — CO SIĘ DO TEGO NADAJE, A CO NIE: warzywa korzeniowe
 *   i cebulowe — tak; rzeczy delikatne i bez skóry — nie,
 * — ŻE TEN SAM EFEKT — łagodne ciepło ze wszystkich stron —
 *   odtwarza się dziś w piekarniku, zawijając warzywo
 *   w folię albo papier i piekąc je nisko,
 * — ŻE PIECZENIE W SKÓRZE ZMIENIA SMAK BARDZIEJ NIŻ
 *   GOTOWANIE: nic nie ucieka do wody, więc smak się
 *   zagęszcza zamiast rozcieńczać,
 * — ŻE STĄD BIERZE SIĘ RÓŻNICA MIĘDZY PIECZONYM A GOTOWANYM
 *   BURAKIEM, którą czuje każdy, kto raz spróbował
 *   ⚠ ODSYŁAM DO STRONY O BURAKACH, NIE ROZWIJAM,
 * — ⚠⚠ CZEGO NIE ROBIĆ: nie używać popiołu z węgla,
 *   brykietu, drewna malowanego, lakierowanego ani z płyt
 *   meblowych. Tylko czyste drewno.
 *   ⚠ JEDNYM ZDANIEM, BEZ TEZ TOKSYKOLOGICZNYCH.
 *     TWARDA GRANICA.
 * — UCZCIWIE: urządzenie nie ma z ogniem nic wspólnego
 *   i popiołu nie zastąpi,
 * — ale robi jedną rzecz w tej samej logice: gotuje na parze,
 *   czyli też bez zanurzania w wodzie — a to jest ta sama
 *   zasada, dla której warzywa pieczone w skórze mają
 *   więcej smaku niż gotowane.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I TOKSYKOLOGICZNYCH.
 *   ZERO tez o dymie, akrylamidzie, WWA i rakotwórczości.
 *   ZERO tez o popiele jako nawozie czy lekarstwie.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO INSTRUKCJI ROBIENIA ŁUGU I UŻYWANIA POTAŻU
 *   W KUCHNI — wyłącznie wzmianka historyczna.
 * — ŻADNYCH NAZW FIRM (piekarni również).
 * — ZERO porad dotyczących rozpalania ognia i bezpieczeństwa
 *   ogniska.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ⚠ PRZYCZYNY ZNISZCZENIA PAŁACU W 1939 r. NIE PODAJĘ.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO tematu elektrowni i przemysłu energetycznego.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ogień" (Bystrzyca Kłodzka) dotyczy OGNIA I ZAPAŁEK.
 * — „PIEC I OGIEŃ" (Łęczyca) dotyczy PIECA JAKO ŹRÓDŁA
 *   CIEPŁA I TEGO, CZEGO URZĄDZENIE NIE MA.
 * — „WĘDZENIE I PEKLOWANIE" dotyczy DYMU I KONSERWACJI.
 * — „BURAKI" dotyczą JEDNEGO WARZYWA.
 * — „GOTOWANIE NA PARZE" dotyczy JEDNEJ TECHNIKI
 *   W URZĄDZENIU.
 * — „NIERÓWNE PIECZENIE" (Zielonka) dotyczy PIEKARNIKA.
 * TUTAJ chodzi o POPIÓŁ I ŻAR — o pieczenie w skórze,
 * bez wody i bez tłuszczu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PRZYPISUJĘ Kozienicom bartnictwa starostwa radomskiego
 *   ani „prawa obelnego w Jedlni".
 * — NIE PISZĘ „Zagożdżon" o rzece — to ZAGOŻDŻONKA.
 * — NIE MYLĘ „Królewskich Źródeł" w Kozienicach z rezerwatem
 *   „Źródło Królewskie" pod Pionkami.
 * — NIE PODAJĘ przyczyny zniszczenia pałacu.
 * — NIE PODAJĘ nazwy piekarni.
 * — NIE PODAJĘ instrukcji użycia potażu ani ługu.
 * — NIE MYLĘ KOZIENIC z KOZAMI, KOZIEGŁOWAMI ani KOSIENICAMI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — na Liście Produktów Tradycyjnych figuruje „Razówka
 *   z Kozienic", chleb razowy wpisany 30 listopada 2017 r.,
 *   wytwarzany przez piekarnię działającą w mieście
 *   co najmniej od 1937 r., którą założył Stefan Szeliga;
 *   obecną recepturę wprowadzono w 1989 r., a składniki
 *   to zakwas żytni, mąka żytnia typ 2000, mąka pszenna
 *   typ 750, drożdże, sól i woda,
 * — w XIX w. w Puszczy Kozienickiej działały smolarnie,
 *   popielarnie i potażarnie produkujące smołę, terpentynę
 *   i popiół, a drewno spławiano Wisłą do Warszawy;
 *   rozwinięte było też bednarstwo i ciesielstwo, szczególnie
 *   w XVIII w., a ziemie nadwiślańskie były żyzne dzięki
 *   naniesieniom powodziowym,
 * — Kozienicki Park Krajobrazowy liczy 26 000 ha i ma otulinę
 *   o powierzchni 36 600 ha; stwierdzono tu ponad dwieście
 *   gatunków ptaków, a sosny i dęby osiągają wiek dwustu
 *   i trzystu lat; przy zalewie Siczki leży rezerwat Jedlnia,
 * — kościół św. Krzyża jest fundacją Władysława Jagiełły
 *   z 1394 r., a obecny budynek z lat 1868–1869 jest piątą
 *   świątynią w tym miejscu; obok stoi XVI-wieczna kolumna,
 *   odbudowana w 1702 r., poświęcona Zygmuntowi I,
 * — zespół pałacowo-parkowy przy ulicy Parkowej powstał
 *   w latach 1776–1778 według projektu Francesca Placidiego,
 *   park w latach 1786–1791 według projektu Jana Kantego
 *   Fontany, a rezydencję przebudowano w latach 1896–1904;
 *   obecny budynek pałacu pochodzi z 1962 r.,
 * — zachowały się kramy z połowy XIX w. i willa notariusza
 *   Bezego z 1923 r.,
 * — Muzeum Regionalne przechowuje kolekcję uli pokazującą
 *   rozwój od kłód bartnych po ule ramowe, w tym „ule
 *   włościańskie" według projektów Kazimierza Lewickiego,
 *   oraz miodarki i podkurzacze,
 * — nad Jeziorem Kozienickim odbywa się Przegląd Kół
 *   Gospodyń Wiejskich Ziemi Kozienickiej „Smaki Ziemi
 *   Kozienickiej", w którym bierze udział szesnaście kół
 *   ze wszystkich siedmiu gmin powiatu.
 */
export const KOZIENICE: CityContent = {
  slug: "kozienice",
  h1: "Thermomix Kozienice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kozienice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kozienicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kozienice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kozienicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kozienic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Kozienice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Popiół nie parzy jak płomień — oddaje ciepło powoli i równo.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kozienicach – jak wygląda prezentacja?",
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
      id: "popiol",
      heading: "Popielarnie w Puszczy Kozienickiej — czyli o pieczeniu w popiele",
      paragraphs: [
        "W dziewiętnastowiecznej Puszczy Kozienickiej działały smolarnie, popielarnie i potażarnie. Produkowały smołę, terpentynę i popiół, a drewno spławiano stąd Wisłą do Warszawy. Zwróćcie uwagę na to słowo: popielarnia. Cały zakład, którego produktem był popiół — dziś dla nas odpad, który się wymiata, a przez większość historii surowiec tak wartościowy, że opłacało się go wytwarzać i wozić rzeką.",
        "Popiół miał w gospodarstwie trzy role i wszystkie trzy dotyczyły kuchni. Był źródłem łagodnego, równomiernego ciepła. Był środkiem do szorowania naczyń — z popiołu robiło się ług. I był składnikiem spulchniającym dawne wypieki, pod nazwą potażu. Dwie ostatnie rzeczy odeszły i dobrze; pierwsza została i nikt jej nie zastąpił.",
        "Bo pieczenie w popiele to nie jest ciekawostka historyczna, tylko technika, która nadal działa i której nic nie podrabia. Ziemniak, burak, cebula, główka czosnku albo duża pieczarka włożone w żar ogniska czy wystygającego grilla dochodzą powoli, we własnej skórze, bez wody i bez kropli tłuszczu.",
        "Zasada jest prosta i warto ją rozumieć, bo tłumaczy, dlaczego to działa. Popiół nie parzy tak jak płomień — oddaje ciepło powoli i ze wszystkich stron naraz. Dlatego warzywo nie przypala się z wierzchu, zanim dojdzie w środku, co jest dokładnie tym, co zwykle psuje pieczenie nad ogniem.",
        "Skóra pełni tu funkcję opakowania: chroni miąższ, a po upieczeniu zdejmuje się ją i wyrzuca. Dzięki temu pytanie, czy popiół jest czysty, w ogóle nie powstaje — jedzenie nie ma z nim bezpośredniego kontaktu.",
        "Nadają się do tego warzywa korzeniowe i cebulowe: ziemniaki, bataty, buraki, marchew, seler, cebula, czosnek. Nie nadają się rzeczy delikatne i pozbawione skóry — te trzeba by zawinąć, a wtedy to już inna technika.",
        "Jedno zdanie o tym, czego nie robić: używa się wyłącznie popiołu z czystego drewna. Nie z węgla, nie z brykietu, nie z desek malowanych, lakierowanych ani z płyt meblowych.",
        "Ten sam efekt — łagodne ciepło ze wszystkich stron, bez wody — da się całkiem dobrze odtworzyć w piekarniku. Warzywo zawija się w folię albo papier i piecze nisko, dłużej niż zwykle. To nie jest to samo, bo nie ma zapachu ogniska, ale mechanizm jest identyczny.",
        "I rzecz, dla której ten temat w ogóle wart jest uwagi: pieczenie w skórze zmienia smak znacznie bardziej niż gotowanie. Kiedy warzywo gotuje się w wodzie, część smaku i cukrów przechodzi do wywaru — rozcieńcza się. Kiedy piecze się we własnej skórze, nic nie ucieka i smak się zagęszcza. Kto raz porównał buraka pieczonego z gotowanym, ten wie, o czym mówię; o samym buraku pisałam zresztą osobno.",
        "Teraz uczciwie o sprzęcie. Thermomix nie ma z ogniem nic wspólnego. Nie upiecze ziemniaka w popiele, nie zrobi zapachu ogniska i nie zastąpi żaru — to zostaje na zewnątrz, przy ognisku albo w piekarniku.",
        "Robi natomiast jedną rzecz w dokładnie tej samej logice: gotuje na parze, czyli również bez zanurzania w wodzie. To jest ta sama zasada, dla której warzywa pieczone w skórze mają więcej smaku niż gotowane — nic nie wypływa do garnka. Nie jest to popiół i nie udaję, że jest; jest to natomiast najbliższa rzecz, jaką da się zrobić w kuchni w środku zimy.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kozienicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie porównać warzywa gotowane i te na parze — powiedzcie przy umawianiu. Różnica jest wyraźniejsza, niż większość osób się spodziewa.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kozienicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kozienickiej rodziny",
      paragraphs: [
        "Kozienice liczą ponad piętnaście tysięcy mieszkańców na zaledwie dziesięciu i pół kilometra kwadratowego, co czyni je jednym z najgęściej zabudowanych miast w okolicy. Na Liście Produktów Tradycyjnych figuruje stąd „Razówka z Kozienic” — chleb razowy wpisany 30 listopada 2017 roku, wytwarzany przez piekarnię działającą w mieście co najmniej od 1937 roku, którą założył Stefan Szeliga; obecną recepturę wprowadzono w 1989 roku, a składniki to zakwas żytni, mąka żytnia, mąka pszenna, drożdże, sól i woda. W XIX wieku w Puszczy Kozienickiej działały smolarnie, popielarnie i potażarnie produkujące smołę, terpentynę i popiół, a drewno spławiano Wisłą do Warszawy; rozwinięte było też bednarstwo i ciesielstwo, szczególnie w XVIII stuleciu, a ziemie nadwiślańskie były żyzne dzięki naniesieniom powodziowym. Kozienicki Park Krajobrazowy liczy dwadzieścia sześć tysięcy hektarów i ma otulinę o powierzchni ponad trzydziestu sześciu tysięcy; stwierdzono tu ponad dwieście gatunków ptaków, a sosny i dęby osiągają wiek dwustu i trzystu lat. Kościół Świętego Krzyża jest fundacją Władysława Jagiełły z 1394 roku, a obecny budynek z lat 1868–1869 to piąta świątynia w tym miejscu; obok stoi szesnastowieczna kolumna, odbudowana w 1702 roku, poświęcona Zygmuntowi I. Zespół pałacowo-parkowy przy ulicy Parkowej powstał w latach 1776–1778 według projektu Francesca Placidiego, park w latach 1786–1791 według projektu Jana Kantego Fontany, a obecny budynek pałacu pochodzi z 1962 roku. Zachowały się też kramy z połowy XIX wieku i willa notariusza Bezego z 1923. Muzeum Regionalne przechowuje kolekcję uli pokazującą rozwój od kłód bartnych po ule ramowe, a nad Jeziorem Kozienickim odbywa się Przegląd Kół Gospodyń Wiejskich Ziemi Kozienickiej „Smaki Ziemi Kozienickiej”, w którym bierze udział szesnaście kół ze wszystkich siedmiu gmin powiatu.",
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

  districtsHeading: "Do których części Kozienic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — okolic zespołu parkowego przy ulicy Parkowej, Starej Wsi, Janikowa i zabudowy nad Jeziorem Kozienickim. Dojeżdżam też do miejscowości w gminie: Stanisławic, Ryczywołu, Brzeźnicy, Świerży i Bąkowca.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Stara Wieś", "Janików"],

  nearbyHeading: "Poza Kozienice też przyjadę",
  nearbyParagraphs: [
    "Pionki, Garbatka-Letnisko, Zwoleń, Magnuszew, Radom i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pionki", "Zwoleń", "Radom", "Magnuszew"],

  about: blokOMnie("do Kozienic", "w Kozienicach", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kozienic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości w gminie — Stanisławic, Ryczywołu, Brzeźnicy i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Kozienice nad Zagożdżonką, a nie o Kozy, Koziegłowy czy Kosienice.",
    },
    ...faqWspolne("w Kozienicach"),
    {
      question: "Co można upiec w popiele?",
      answer:
        "Warzywa korzeniowe i cebulowe: ziemniaki, bataty, buraki, marchew, seler, cebulę i całe główki czosnku, a także duże pieczarki. Dochodzą powoli we własnej skórze, bez wody i bez tłuszczu. Używa się wyłącznie popiołu z czystego drewna — nie z węgla, brykietu ani desek malowanych czy lakierowanych.",
    },
    {
      question: "Dlaczego pieczenie w popiele nie przypala warzyw?",
      answer:
        "Bo popiół nie parzy tak jak płomień — oddaje ciepło powoli i ze wszystkich stron naraz. Dzięki temu warzywo nie przypala się z wierzchu, zanim dojdzie w środku. Skóra pełni funkcję opakowania i po upieczeniu się ją zdejmuje.",
    },
    {
      question: "Dlaczego warzywa pieczone smakują inaczej niż gotowane?",
      answer:
        "Bo przy gotowaniu część smaku i cukrów przechodzi do wody i rozcieńcza się, a przy pieczeniu w skórze nic nie ucieka i smak się zagęszcza. Ta sama zasada działa przy gotowaniu na parze — również bez zanurzania w wodzie.",
    },
  ],

  geo: { lat: 51.5855, lng: 21.5512 },
};
