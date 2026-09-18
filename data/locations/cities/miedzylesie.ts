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
 * MIĘDZYLESIE — powiat kłodzki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 374 mieszkańców (GUS 31.12.2024), 14,4 km²,
 *   gęstość 165,2 os./km² [ZW, domyka się]. PODAJĘ.
 * CAŁA GMINA: 6 740 osób, 188,8 km², gęstość 36 os./km²
 *   [ZW — DOMYKA SIĘ. PODAJĘ].
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * WSIE W GMINIE: 22.
 * WYSOKOŚĆ: 435–470 m n.p.m.
 * ⚠ GEO: 50,1477 / 16,6672.
 *
 * ⚠⚠ ODMIANA — RODZAJ NIJAKI:
 *   M. MIĘDZYLESIE (to Międzylesie) · D. do MIĘDZYLESIA ·
 *   Ms. w MIĘDZYLESIU · N. Międzylesiem.
 *   ⚠⚠⚠ BŁĄD: „do Międzylesie". SPRAWDZIĆ OSOBNYM
 *   PRZEBIEGIEM.
 *   Przymiotnik: MIĘDZYLESKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — SPRAWDZONE:
 *   — MIĘDZYBÓRZ (pow. oleśnicki) — OPISANY W TEJ SAMEJ
 *     FALI. ⚠⚠ NIE MYLIĆ. Inne miasto, inny powiat,
 *     inny kąt.
 *   — MIĘDZYLESIE — także dzielnica Warszawy.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — ZAŁOŻENIE: XI w. ⚠ [SP — PISZĘ „sięga XI wieku",
 *     NIGDY konkretnego roku].
 *   — PRAWA MIEJSKIE: między 1249 a 1290 r. ⚠⚠⚠ ŹRÓDŁA
 *     PODAJĄ PRZEDZIAŁ. PISZĘ PRZEDZIAŁ.
 *   — ODNOWIENIE PRAW: 1551 r.
 *   ⚠⚠⚠ NADANIA Z 1294 R. NIE UŻYWAM — wątek
 *     wyznaniowy. ANI SŁOWA.
 *   — SZOSA: 1827–33 r. KOLEJ: 1875 r.
 *     ⚠⚠ WYŁĄCZNIE DATY W TLE — kąty drogowy i kolejowy
 *     zajęte (Pieńsk, Węgliniec).
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWIE BUDOWLE, DWIE OSIE:
 *   — WIEŻA: pięciobok z poł. XIV w., przebudowana
 *     w latach 1527–1534 (datowanie dendrologiczne),
 *     PIĘĆ KONDYGNACJI,
 *   — REZYDENCJA RENESANSOWA: 1580–1590, TRZY
 *     KONDYGNACJE, dom mieszkalny 10,8 × 16 m,
 *   — DWA SKRZYDŁA: 1684–1695.
 *   ⚠⚠⚠ RZECZ NOWSZA I OBSZERNIEJSZA MA MNIEJ
 *   KONDYGNACJI NIŻ STARSZA I WĘŻSZA.
 *   ARYTMETYKA SPRAWDZONA: 5 > 3; 1580 > 1534.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE JEDNA JEST LEPSZA — twierdzę,
 *   że porównanie zależy od wybranej osi.
 *   ⚠⚠ NIE SPEKULUJĘ O PRZYCZYNACH obronnych
 *   ani militarnych. ZERO WĄTKU MILITARNEGO.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ⚠⚠ KOŚCIOŁÓW I KLASZTORU NIE OPISUJĘ — wyznaniowe.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: NOWSZE I WIĘKSZE, A NIŻSZE
 * — o tym, że „lepsze" bez podanej osi jest pustym
 * słowem. Kąt z dwóch budowli Międzylesia: starsza wieża
 * ma pięć kondygnacji, nowsza i obszerniejsza rezydencja
 * — trzy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wieża po przebudowie z lat 1527–34 ma pięć
 *   kondygnacji, a rezydencja z lat 1580–90 — trzy,
 * — ŻE RZECZ NOWSZA I OBSZERNIEJSZA JEST NIŻSZA.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE TO NIE JEST POMYŁKA BUDOWNICZYCH, tylko
 *   skutek zmiany osi: w górę przestało być tym, na czym
 *   zależało,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: nowsze i większe zawsze coś
 *   zabiera. Większy garnek gorzej się myje. Nowszy
 *   sprzęt robi więcej i zajmuje więcej blatu,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: zanim powiesz „lepsze",
 *   nazwij oś. Potem powiedz, na której osi zejdziesz
 *   niżej — bo zawsze jest taka,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem to zejście
 *   naprawdę boli i wtedy nowsze jest dla Ciebie gorsze.
 *   To jest dopuszczalny wniosek, nie porażka,
 * — ⚠ UCZCIWIE O SPRZĘCIE: WYMIENIAM OSIE, NA KTÓRYCH
 *   URZĄDZENIE SCHODZI NIŻEJ — zajmuje blat na stałe
 *   i jest jednym naczyniem, więc dwie rzeczy naraz
 *   znaczy jedna po drugiej.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO STAŻ NIE PRZEKŁADA SIĘ NA ROZMIAR — kąt
 *   zajęty (Nowogrodziec). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam dwie miary
 *   okazały się niepowiązane; tu są powiązane, tylko
 *   idą w przeciwne strony naraz.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO SKOKU, KTÓRY NIE BYŁ WZROSTEM — kąt zajęty
 *   (Twardogóra).
 * — ⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka).
 * — ⚠⚠ ZERO SIEDMIU NAZW NA JEDEN PRZEDMIOT — kąt zajęty
 *   (Szklarska Poręba).
 * — ⚠⚠ ZERO DROŻSZE TAM, GDZIE KRAWĘDŹ — kąt zajęty
 *   (Świerzawa, ta sama fala).
 * — ⚠⚠ ZERO STABILNEJ SUMY — kąt zajęty (Wąsosz,
 *   ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU GRANICZNEGO · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO I OBRONNEGO ·
 *   ZERO POWODZI I POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku założenia — piszę „sięga XI wieku".
 * — NIE PODAJĘ roku nadania praw — podaję przedział
 *   1249–1290.
 * — NIE SPEKULUJĘ, dlaczego rezydencja jest niższa.
 * — NIE PISZĘ ANI SŁOWA o nadaniu z 1294 r.
 * — NIE PODAJĘ odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Międzylesie leży w powiecie kłodzkim, na wysokości
 *   435–470 m n.p.m.; miasto liczy 2 374 mieszkańców
 *   (GUS, 31.12.2024) na 14,4 km², czyli 165,2 osoby
 *   na kilometr kwadratowy, a cała gmina miejsko-wiejska
 *   6 740 osób na 188,8 km², czyli 36 osób na kilometr,
 * — gmina obejmuje dwadzieścia dwie wsie,
 * — historia miejscowości sięga XI w., prawa miejskie
 *   miasto otrzymało między 1249 a 1290 r., a odnowiono
 *   je w 1551 r.,
 * — wieża zamkowa z połowy XIV w. została przebudowana
 *   w latach 1527–1534 (datowanie dendrologiczne) i ma
 *   pięć kondygnacji; rezydencję renesansową wzniesiono
 *   w latach 1580–1590 jako trójkondygnacyjną, a dom
 *   mieszkalny mierzy 10,8 na 16 metrów; dwa skrzydła
 *   dobudowano w latach 1684–1695,
 * — szosę poprowadzono w latach 1827–1833, kolej dotarła
 *   w 1875 r.
 */
export const MIEDZYLESIE: CityContent = {
  slug: "miedzylesie",
  h1: "Thermomix Międzylesie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Międzylesie — prezentacja i cena",
  seoDescription:
    "Thermomix w Międzylesiu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Międzylesie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Międzylesiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Międzylesia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu dwóch wsi w gminie.",

  highlights: highlightyStandardowe("Międzylesie"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nowsze, obszerniejsze — i o dwie kondygnacje niższe.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Międzylesiu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "nowsze-a-nizsze",
      heading: "Nowsze i większe, a niższe",
      paragraphs: [
        "W Międzylesiu stoją obok siebie dwie budowle i porównanie ich jest zaskakująco pouczające.",
        "Wieża, pięciobok z połowy czternastego wieku, przebudowana w latach 1527–1534 — datowanie ustalono dendrologicznie, czyli z drewna — ma pięć kondygnacji. Rezydencja renesansowa z lat 1580–1590, o pół wieku młodsza i znacznie obszerniejsza, ma trzy. Dom mieszkalny mierzy w niej niecałe jedenaście na szesnaście metrów.",
        "Nowsze. Większe. I o dwie kondygnacje niższe.",
        "To nie jest pomyłka budowniczych. To skutek zmiany osi: w pewnym momencie „wysoko” przestało być tym, na czym komukolwiek zależało, a zaczęło zależeć na „szeroko i wygodnie”. Na jednej osi poszło w górę, na drugiej w dół — jednocześnie.",
        "W kuchni to samo dzieje się przy każdej wymianie czegokolwiek.",
        "Większy garnek mieści więcej i gorzej się myje. Nowsza lodówka trzyma równiejszą temperaturę i nie wchodzi we wnękę po starej. Sprzęt, który robi dziesięć rzeczy, zajmuje blat, na którym wcześniej się kroiło.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej, że staż nie przekłada się na rozmiar — tam chodziło o dwie miary, które po prostu ze sobą nie są związane. Tu jest inaczej. Te miary są związane i właśnie dlatego rozchodzą się w przeciwne strony: żeby na jednej osi pójść w górę, na drugiej trzeba było zejść.",
        "Ruch jest jeden i mieści się w dwóch zdaniach. Zanim powiesz „lepsze”, nazwij oś. Potem powiedz na głos, na której osi zejdziesz niżej — bo zawsze jakaś jest, a jeśli jej nie widzisz, to znaczy, że jeszcze jej nie poszukałaś.",
        "Uczciwie o drugiej stronie: czasem to zejście naprawdę boli. Kuchnia, w której brakuje pół metra blatu, jest gorszą kuchnią, choćby wszystko inne było lepsze. Wniosek „dla mnie nowsze jest gorsze” jest w pełni dopuszczalny i wolę go usłyszeć niż udawać, że wszystko idzie tylko w jedną stronę.",
        "I uczciwie o sprzęcie — wymienię osie, na których Thermomix schodzi niżej, żeby nie było niespodzianek. Zajmuje kawałek blatu na stałe, bo urządzenie chowane do szafki przestaje być używane. Jest jednym naczyniem, więc dwie rzeczy naraz oznaczają jedną po drugiej. Trzeba go umyć po każdym daniu, a nie raz na koniec gotowania. To są prawdziwe koszty i lepiej je znać przed zakupem.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Międzylesiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu. To jedno z ważniejszych pytań, a pada najrzadziej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Międzylesiu"),
    sekcjaRaty("w Międzylesiu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Międzylesia",
      paragraphs: [
        "Międzylesie leży w powiecie kłodzkim, na wysokości od czterystu trzydziestu pięciu do czterystu siedemdziesięciu metrów nad poziomem morza. Samo miasto liczy 2 374 mieszkańców (GUS, 31.12.2024) na 14,4 kilometra kwadratowego, czyli sto sześćdziesiąt pięć osób na kilometr, a cała gmina miejsko-wiejska 6 740 osób na 188,8 kilometra, czyli trzydzieści sześć osób na kilometr, i obejmuje dwadzieścia dwie wsie. Historia miejscowości sięga jedenastego wieku, prawa miejskie miasto otrzymało między 1249 a 1290 rokiem — źródła podają przedział, nie datę — a odnowiono je w 1551 roku. Wieża zamkowa pochodzi z połowy czternastego wieku i została przebudowana w latach 1527–1534, rezydencję renesansową wzniesiono w latach 1580–1590, a dwa skrzydła dobudowano w latach 1684–1695. Szosę poprowadzono tędy w latach 1827–1833, kolej dotarła w 1875.",
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

  districtsHeading: "Do których części Międzylesia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dwóch wsi w gminie. Wszędzie bez dopłaty.",
    "Gmina ma blisko sto dziewięćdziesiąt kilometrów kwadratowych i mieszka w niej trzydzieści sześć osób na kilometr, więc przy umawianiu warto podać nazwę miejscowości — i najlepiej dopisać „powiat kłodzki”.",
  ],
  districts: [],

  nearbyHeading: "Poza Międzylesie też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Bystrzycy Kłodzkiej, Kłodzka, Stronia Śląskiego, Lądka-Zdroju i Dusznik-Zdroju — wszędzie bezpłatnie, tak samo jak w samym Międzylesiu.",
  ],
  nearbyTowns: ["Bystrzyca Kłodzka", "Kłodzko", "Stronie Śląskie", "Lądek-Zdrój", "Duszniki-Zdrój"],

  about: blokOMnie("do Międzylesia", "w Międzylesiu i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Międzylesia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dwóch wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: mówi się „do Międzylesia” i „w Międzylesiu”, a nie „do Międzylesie”. I przy umawianiu warto dopisać powiat kłodzki — bo Międzylesie to także dzielnica Warszawy, a w tym samym województwie jest jeszcze Międzybórz, zupełnie inne miasto.",
    },
    ...faqWspolne("w Międzylesiu"),
    {
      question: "Nowy sprzęt ma być pod każdym względem lepszy od starego — prawda?",
      answer:
        "Prawie nigdy tak nie jest i lepiej to wiedzieć wcześniej. W Międzylesiu wieża przebudowana w latach 1527–1534 ma pięć kondygnacji, a rezydencja z lat 1580–1590 — nowsza i znacznie obszerniejsza — tylko trzy. Na jednej osi poszło w górę, na drugiej w dół. Przy każdej wymianie w kuchni jest podobnie, więc warto zadać sobie dwa pytania: na której osi mi zależy i gdzie zejdę niżej. Jeśli nie widać drugiej odpowiedzi, to znaczy, że jeszcze się jej nie poszukało.",
    },
    {
      question: "Jakie są wady Thermomixa, o których rzadko się mówi?",
      answer:
        "Trzy wymieniam zawsze na spotkaniu. Zajmuje kawałek blatu na stałe — chowany do szafki przestaje być używany, sprawdzone na wielu kuchniach. Jest jednym naczyniem, więc dwie rzeczy naraz oznaczają jedną po drugiej i trzeba to poukładać w głowie. I trzeba go umyć po każdym daniu, a nie raz na koniec gotowania. To są prawdziwe koszty, nie drobiazgi, i wolę je powiedzieć przed zakupem.",
    },
  ],

  geo: { lat: 50.1477, lng: 16.6672 },
};
