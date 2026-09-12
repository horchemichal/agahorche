import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * CZYŻEW — gmina miejsko-wiejska w powiecie wysokomazowieckim.
 * GMINA 123,4 km², ok. 50 miejscowości.
 * ⚠⚠ LICZB MIESZKAŃCÓW NIE PODAJĘ. Najświeższe dostępne:
 * miasto 2 621 (31.12.2021), gmina 6 550 (2013) — ZA STARE.
 * Notatka projektowa podawała 2 700 — NIE UŻYWAM.
 * Piszę jakościowo: „niewielkie miasto".
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 *
 * ⚠⚠ PRAWA MIEJSKIE — TRZY DATY, PODSTAWA KĄTA:
 * LOKACJA 1713 r. → DEGRADACJA 1870 r. → ODZYSKANIE
 * 1 STYCZNIA 2011 r. PRZERWA 141 LAT.
 * ⚠ NIE PODAJĘ, kto nadał prawa ani na jakim prawie.
 * ⚠ DEGRADACJI NIE TŁUMACZĘ PRZYCZYNĄ — podaję jako fakt.
 * ⚠⚠ DO 2010 r. GMINA NAZYWAŁA SIĘ CZYŻEW-OSADA.
 *
 * ⚠⚠ CIEKAWOSTKA TOPONIMICZNA: dzisiejsze miasto powstało
 * ZE SCALENIA TRZECH WSI: CZYŻEW-OSADA, CZYŻEW-STACJA
 * I CZYŻEW-ZŁOTE JABŁKO. „Złote Jabłko" to autentyczna
 * historyczna nazwa części miejscowości.
 *
 * PRZYNALEŻNOŚĆ: osadnictwo od XI w., pierwsi osadnicy
 * z centralnego Mazowsza; najwcześniejsza wzmianka pisana
 * jako „CISÓW"/„CIZÓW".
 * ⚠ DATY 1187 NIE PODAJĘ — jedno źródło.
 * RZEKA BROK. Stacja na LINII KOLEJOWEJ NR 6
 * (Zielonka–Białystok–Kuźnica), droga krajowa nr 63.
 *
 * ZABYTKI:
 * KOŚCIÓŁ ŚŚ. APOSTOŁÓW PIOTRA I PAWŁA — wzniesiony
 * 1869–1874, konsekrowany 1883 r.
 * ⚠⚠ MUZEUM ZIEMI CZYŻEWSKIEJ — MIEŚCI SIĘ W ZABYTKOWYM
 * DWORCU KOLEJOWYM Z LAT 1859–1862.
 * SYNAGOGA — 4. ćwierć XIX w. ⚠ WYŁĄCZNIE JAKO OBIEKT
 * ARCHITEKTURY, bez kontekstu wojennego.
 * PARK DWORSKI — 2. poł. XIX w.
 * CMENTARZ 1860 r., KAPLICA CMENTARNA 1868 r.
 * DREWNIANA WILLA — przełom XIX i XX w.
 * ⚠ WĄTKU MLECZARSKIEGO NIE PODAJĘ — jedyne dostępne
 * wzmianki są firmowe, a nazw firm nie używam.
 * CZYŻEW NIE NALEŻY DO CITTASLOW (nie potwierdzono —
 * nie twierdzę, że należy).
 *
 * KĄT: DANIA, KTÓRE ZNIKNĘŁY Z DOMOWYCH STOŁÓW — i czy
 * warto je wracać.
 * Kąt od miasta, które przez 141 lat nie było miastem
 * i odzyskało ten status dopiero w 2011 roku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że z polskich domów w ciągu jednego pokolenia zniknęła
 *   cała grupa dań, i to nie dlatego, że były niedobre,
 * — CO ZNIKNĘŁO I DLACZEGO: dania długie (galarety, wywary
 *   na kościach, pieczenie duszone godzinami), dania
 *   wymagające etapów rozłożonych na dni, dania z podrobów,
 *   zupy owocowe i mleczne, kisiele i budynie robione od zera,
 * — że wspólnym mianownikiem NIE jest smak, tylko CZAS
 *   I OBECNOŚĆ — zniknęły dania wymagające stania przy garnku,
 * — że część zniknęła słusznie i nie ma sensu tego udawać:
 *   niektóre potrawy były rozwiązaniem problemu, którego
 *   już nie mamy,
 * — ALE część zniknęła niesłusznie i warto ją wrócić:
 *   wywar na kościach, kasze, warzywa korzeniowe, zupy
 *   owocowe, domowe pasty,
 * — że wracanie dania nie polega na odtwarzaniu go wiernie,
 *   tylko na wzięciu z niego tego, co dawało smak,
 * — że najlepszym źródłem takich przepisów są ludzie,
 *   nie internet — i że warto zapytać, dopóki jest kogo,
 * — UCZCIWIE: to urządzenie akurat tej kategorii dań pomaga
 *   najbardziej, bo one wszystkie wymagały OBECNOŚCI,
 *   a nie umiejętności,
 * — ALE: nie wróci dań wymagających pieca chlebowego,
 *   wędzarni ani zimnej spiżarni — tych nie odtworzy nic.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ANI PRZEPISÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — w szczególności
 *   NIC o wywarze na kościach jako o czymś zdrowym,
 *   NIC o kolagenie. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO nostalgii jako oceny: nie piszę, że „kiedyś było
 *   lepiej". Część dań zniknęła słusznie i mówię to wprost.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 *   SYNAGOGĘ wymieniam WYŁĄCZNIE jako obiekt architektury
 *   z końca XIX w.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO przyczyn degradacji miasta w 1870 r.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Powrót do gotowania
 * po latach przerwy" dotyczy OSOBY, która przestała gotować.
 * „Co wygląda na tradycję, a co nią jest" dotyczy autentyczności.
 * „Rodzinny przepis przeniesiony do urządzenia" dotyczy
 * jednego przepisu. „Tradycyjne gotowanie" jako wspólna
 * sekcja dotyczy porównania z garnkiem. Tutaj chodzi
 * o CAŁĄ KATEGORIĘ DAŃ, która wypadła z obiegu, i o to,
 * które z nich warto wrócić.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby mieszkańców ani sołectw.
 * — NIE PODAJĘ, kto nadał prawa miejskie w 1713 r.
 * — NIE PODAJĘ daty 1187.
 * — NIE PISZĘ o przemyśle mleczarskim Czyżewa.
 * — NIE PRZYPISUJĘ Czyżewowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE TWIERDZĘ, że należy do Cittaslow.
 * — NIE MYLĘ CZYŻEWA z CZYŻEWEM-OSADĄ (dawna nazwa gminy
 *   i jedna z trzech scalonych wsi) ani z CZYŻEWEM
 *   w kujawsko-pomorskiem. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina liczy 123,4 km² i około pięćdziesięciu miejscowości,
 * — Czyżew był miastem od 1713 r., stracił prawa w 1870
 *   i odzyskał je 1 stycznia 2011 — po stu czterdziestu
 *   jeden latach przerwy; do 2010 r. gmina nosiła nazwę
 *   Czyżew-Osada,
 * — dzisiejsze miasto powstało ze scalenia trzech wsi:
 *   Czyżewa-Osady, Czyżewa-Stacji i Czyżewa-Złotego Jabłka,
 * — osadnictwo sięga XI w., a pierwsi osadnicy przyszli
 *   z centralnego Mazowsza; najwcześniejsza wzmianka pisana
 *   ma postać „Cisów",
 * — miasto leży nad Brokiem, przy linii kolejowej numer 6
 *   i drodze krajowej numer 63,
 * — kościół świętych Apostołów Piotra i Pawła wzniesiono
 *   w latach 1869–1874 i konsekrowano w 1883 r.,
 * — Muzeum Ziemi Czyżewskiej mieści się w zabytkowym dworcu
 *   kolejowym z lat 1859–1862,
 * — park dworski z drugiej połowy XIX w., cmentarz z 1860 r.
 *   z kaplicą z 1868 oraz drewniana willa z przełomu
 *   XIX i XX w.
 */
export const CZYZEW: CityContent = {
  slug: "czyzew",
  h1: "Thermomix Czyżew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Czyżew — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Czyżewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czyżew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czyżewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Czyżewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Czyżew i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Te dania nie zniknęły dlatego, że były niedobre. Zniknęły, bo wymagały obecności.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czyżewie – jak wygląda prezentacja?",
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
      id: "dania-ktore-znikly",
      heading: "Sto czterdzieści jeden lat przerwy — czyli o daniach, które zniknęły ze stołów",
      paragraphs: [
        "Czyżew był miastem od 1713 roku. W 1870 stracił prawa miejskie i odzyskał je dopiero 1 stycznia 2011 — po stu czterdziestu jeden latach. Przez półtora wieku było to miejsce, które kiedyś czymś było, potem przestało, a potem znowu zaczęło. Ciekawe jest przy tym, że dzisiejsze miasto scalono z trzech wsi o nazwach Czyżew-Osada, Czyżew-Stacja i — to nie żart, tylko autentyczna dawna nazwa — Czyżew-Złote Jabłko.",
        "Sto czterdzieści jeden lat to mniej więcej cztery, pięć pokoleń. A w polskiej kuchni w ciągu jednego pokolenia zniknęła cała grupa dań i warto się zastanowić, które z nich warto by wrócić.",
        "Zniknęły przede wszystkim dania długie. Wywary gotowane na kościach przez pół dnia. Pieczenie duszone godzinami. Galarety. Wszystko, co trzeba było rozłożyć na dwa dni, bo jeden etap musiał ostygnąć, zanim zaczął się następny. Zniknęły dania z podrobów. Zupy owocowe i mleczne, kiedyś zwyczajne, dziś dla wielu egzotyczne. Kisiele i budynie robione od zera, a nie z torebki.",
        "I tu jest rzecz, którą uważam za najciekawszą: te dania nie mają wspólnego smaku ani wspólnych składników. Mają wspólny czas. Wszystkie wymagały obecności — kogoś, kto stoi przy kuchni, dogląda i miesza. Kiedy w domach zabrakło osoby, która może przez trzy godziny być w kuchni, dania te wypadły z obiegu automatycznie. Nikt ich nie odrzucił. Po prostu przestały być wykonalne.",
        "Powiem jednak od razu, żeby nie zabrzmieć nostalgicznie, bo nostalgii w kuchni nie znoszę: część z nich zniknęła słusznie. Wiele dawnych potraw było rozwiązaniem problemu, którego już nie mamy — problemu braku, problemu przechowywania, problemu tego, że nie było czego innego. Nie każde dawne danie było dobre. Niektóre były po prostu tanie.",
        "Ale część zniknęła niesłusznie i to jest lista warta uwagi. Porządny wywar na kościach, który zmienia każdą zupę. Kasze, które przez trzydzieści lat uchodziły za jedzenie z konieczności. Warzywa korzeniowe duszone długo, aż zrobią się słodkie. Zupy owocowe latem. Domowe pasty do chleba zamiast kupnych. Wszystkie te rzeczy są dobre, a nie wróciły dlatego, że są trudne — nie wróciły dlatego, że są długie.",
        "Kiedy wraca się do takiego dania, nie chodzi o wierne odtworzenie. Nikt nie potrzebuje robić dokładnie tego, co robiła babcia, w tych samych ilościach i w tej samej kolejności. Chodzi o wzięcie z niego tego jednego elementu, który dawał smak — i to zwykle jest jeden konkretny krok, a nie cały przepis.",
        "I rada, którą uważam za najważniejszą w tej całej sekcji: najlepszym źródłem takich przepisów są ludzie, a nie internet. Przepis znaleziony w sieci jest uśredniony i pozbawiony tego, co lokalne. Przepis, który ktoś Wam opowie, ma w sobie te wszystkie „u nas robiło się inaczej”. Warto pytać, dopóki jest kogo pytać — to jedyna rzecz w tym tekście, która ma termin ważności.",
        "Teraz o sprzęcie, uczciwie i w obie strony. Akurat tej kategorii dań urządzenie pomaga najbardziej ze wszystkich — i to jest jego najmocniejszy argument, jaki znam. Bo te dania nie wymagały umiejętności, tylko obecności. Wywar, długie duszenie, kisiel mieszany bez przerwy, budyń, który nie może się przypalić — wszystko to są czynności polegające na pilnowaniu. Urządzenie pilnuje. Danie, które kiedyś zajmowało pół dnia stania w kuchni, wraca do obiegu, bo przestaje wymagać stania.",
        "Ale nie wróci wszystkiego i trzeba to powiedzieć wprost. Dań pieczonych w piecu chlebowym nie odtworzy, bo nie ma pieca. Wędzenia nie zrobi. Rzeczy, które wymagały zimnej spiżarni albo piwnicy z określoną temperaturą, też nie. Część dawnej kuchni odeszła razem z budynkami, w których powstawała, i żadne urządzenie tego nie cofnie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czyżewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli jest danie, które pamiętacie z domu i którego już się u Was nie robi — powiedzcie o nim przy umawianiu. Chętnie sprawdzę z Wami, czy to akurat da się wrócić.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czyżewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla czyżewskiej rodziny",
      paragraphs: [
        "Czyżew jest niewielkim miastem w gminie liczącej ponad sto dwadzieścia trzy kilometry kwadratowe i około pięćdziesięciu miejscowości. Ma za sobą nietypową historię administracyjną: prawa miejskie od 1713 roku, ich utratę w 1870 i odzyskanie dopiero 1 stycznia 2011 — po stu czterdziestu jeden latach przerwy. Do 2010 roku gmina nosiła nazwę Czyżew-Osada, a samo miasto powstało ze scalenia trzech wsi: Czyżewa-Osady, Czyżewa-Stacji i Czyżewa-Złotego Jabłka. Osadnictwo sięga tu jedenastego wieku, a pierwsi osadnicy przyszli z centralnego Mazowsza; najwcześniejsza wzmianka pisana ma postać „Cisów”. Miasto leży nad Brokiem, przy linii kolejowej numer sześć. Kościół świętych Apostołów Piotra i Pawła wzniesiono w latach 1869–1874 i konsekrowano w 1883. Muzeum Ziemi Czyżewskiej mieści się w zabytkowym dworcu kolejowym z lat 1859–1862 — budynku starszym od kościoła.",
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

  districtsHeading: "Do których części gminy Czyżew dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Czyżew też przyjadę",
  nearbyParagraphs: [
    "Wysokie Mazowieckie, Szepietowo, Ciechanowiec, Zambrów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wysokie Mazowieckie", "Szepietowo", "Ciechanowiec", "Zambrów"],

  about: blokOMnie("do Czyżewa", "w Czyżewie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czyżewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: do 2010 roku gmina nosiła nazwę Czyżew-Osada i pod taką figuruje w starszych dokumentach — to ta sama gmina.",
    },
    ...faqWspolne("w Czyżewie"),
    {
      question: "Dlaczego z domowych stołów zniknęło tyle dawnych dań?",
      answer:
        "Nie dlatego, że były niedobre. Wywary na kościach, długie duszenie, galarety, kisiele i budynie robione od zera łączy jedno: wymagały obecności kogoś, kto stoi przy kuchni i miesza. Gdy w domach zabrakło takiej osoby, te dania wypadły z obiegu automatycznie.",
    },
    {
      question: "Które z dawnych dań warto wrócić?",
      answer:
        "Moim zdaniem porządny wywar na kościach, kasze, długo duszone warzywa korzeniowe, zupy owocowe latem i domowe pasty do chleba. Nie wszystkie — część dawnych potraw była rozwiązaniem problemu, którego już nie mamy, i zniknęła słusznie. Nostalgia nie jest dobrym kryterium.",
    },
    {
      question: "Czego Thermomix nie odtworzy?",
      answer:
        "Dań pieczonych w piecu chlebowym, wędzenia i wszystkiego, co wymagało zimnej spiżarni albo piwnicy. Część dawnej kuchni odeszła razem z budynkami, w których powstawała. Za to bardzo dobrze radzi sobie z daniami, które wymagały wyłącznie pilnowania — bo pilnowanie akurat przejmuje w całości.",
    },
  ],

  geo: { lat: 52.8, lng: 22.3167 },
};
