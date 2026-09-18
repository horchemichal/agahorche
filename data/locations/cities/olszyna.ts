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
 * OLSZYNA — powiat lubański, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * ⚠⚠⚠ POTWIERDZONE: dane dotyczą MIASTA OLSZYNA
 *   W POWIECIE LUBAŃSKIM — nie wsi Olszyna w gminie
 *   LUBAWKA (opisanej w tym cyklu!) ani Olszyny
 *   przy dawnym przejściu granicznym w lubuskiem.
 * MIASTO: 4 280 mieszkańców (GUS 31.12.2024), 20,3 km²,
 *   gęstość ok. 211 os./km² [4 280 / 20,3 = 210,8,
 *   serwis podaje 211,3 — mieści się w zaokrągleniu].
 *   PODAJĘ ZAOKRĄGLONE SŁOWNIE.
 * CAŁA GMINA: 6 257 osób, 47,1 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ: 6 257 / 47,1 = 132,8,
 *   a serwis podaje 134. NIE DOMYKA SIĘ.
 *   ⚠ DZIEWIĘĆ SOŁECTW [ZW — urząd i GUS zgodne co do
 *   liczby I nazw]: Biedrzychowice, Bożkowice, Grodnica,
 *   Kałużna, Karłowice, Krzewie Małe, Nowa Świdnica,
 *   Olszyna Dolna, Zapusta. MOGĘ PODAĆ LICZBĘ JAKO PEWNĄ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ GEO: 51,0668 / 15,3722. Rzeki: Kwisa, Olszówka, Wilka.
 *
 * ⚠ ODMIANA — REGULARNA:
 *   D. do Olszyny · Ms. w Olszynie · B. Olszynę.
 *   Przymiotnik: OLSZYŃSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJE NAZEWNICZE — WYJĄTKOWO GĘSTE:
 *   — ⚠⚠⚠ OLSZYNA — WIEŚ W GMINIE LUBAWKA, TO SAMO
 *     WOJEWÓDZTWO. Gmina Lubawka ma własną stronę
 *     w tym cyklu. Miejscownik „w Olszynie" jest
 *     IDENTYCZNY dla obu.
 *   — ⚠⚠ OLSZYNA w gminie Trzebiel, woj. lubuskie —
 *     dawne przejście graniczne przy autostradzie,
 *     najbardziej rozpoznawalna „Olszyna" w Polsce.
 *   — OLSZYNA — wieś w woj. śląskim.
 *   — ⚠⚠ OLSZYNA DOLNA — SOŁECTWO W TEJ SAMEJ GMINIE,
 *     osobna miejscowość. KOLIZJA WEWNĘTRZNA.
 *   — ⚠⚠ „olszyna" TO RZECZOWNIK POSPOLITY: las olchowy,
 *     zarośla olchowe, drewno olchy.
 *   — Mylące: Olszanka, Olszanica, Olsztyn.
 *   ⚠⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE — OBIE DZIENNE:
 *   — PIERWSZA WZMIANKA: 6 LISTOPADA 1254 r., nazwa
 *     OLSNA [ZW dla roku; data dzienna z jednego źródła
 *     — PODAJĘ Z TYM ZASTRZEŻENIEM],
 *   — PRAWA MIEJSKIE: 1 STYCZNIA 2005 r. [ZW, dwa
 *     źródła zgodne]. ⚠ To NAJMŁODSZE MIASTO tego cyklu.
 *   ⚠⚠ RÓŻNICY 751 LAT NIE ROBIĘ KĄTEM — figura zajęta
 *   (Szklarska Poręba). PODAJĘ OBIE DATY JAKO FAKTY.
 *   ⚠⚠ DATY POWSTANIA GMINY NIE PODAJĘ: ten sam serwis
 *   urzędu podaje w jednym miejscu 1963, w drugim
 *   1 czerwca 1975. NIE WYBIERAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DWA SPISY, RÓŻNICA PO JEDNEJ STRONIE:
 *   — URZĄD MIEJSKI: gmina 6 311 osób (miasto 4 289,
 *     wieś 2 022), powierzchnia 47,2 km²,
 *   — GUS 31.12.2024: gmina 6 257 osób (miasto 4 280,
 *     wieś 1 977), powierzchnia 47,1 km².
 *   ⚠⚠⚠ RÓŻNICA ŁĄCZNA: 54 OSOBY. Z tego 9 w mieście
 *   i 45 NA WSI. Osiemdziesiąt trzy procent rozbieżności
 *   siedzi po stronie wiejskiej, w której mieszka
 *   niecała jedna trzecia ludzi. To jest cały kąt.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 4 289−4 280 = 9;
 *   2 022−1 977 = 45; 9+45 = 54; 45/54 = 83,3 %.
 *   ⚠⚠ NIE TWIERDZĘ, KTÓRA LICZBA JEST POPRAWNA ani
 *   z czego bierze się różnica. Twierdzę WYŁĄCZNIE,
 *   gdzie ta różnica siedzi.
 *   ⚠⚠ „DWIE LICZBY MIERZĄCE CO INNEGO" — kąt ZAJĘTY
 *   (Twardogóra). ⚠⚠⚠ TU OBIE LICZBY MIERZĄ TO SAMO —
 *   i o to właśnie chodzi. ROZGRANICZAM JAWNIE.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — PROPORCJE: miasto zajmuje 20,3 z 47,1 km² gminy
 *   (43 %) i mieszka w nim 4 280 z 6 257 osób (68 %).
 *   ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM — figura „mało ziemi,
 *   dużo ludzi" wypadła już w Pieńsku, Głuszycy
 *   i Lubawce. PODAJĘ JAKO FAKT.
 * — WYSOKOŚCI: gmina leży na 240–400 m n.p.m., ale
 *   Złotnicka Czuba ma 436 m, Długa Kałużnianka 426 m,
 *   a Husycka Górka 330 m — DWA Z TRZECH SZCZYTÓW
 *   WYSTAJĄ PONAD PODANY PRZEDZIAŁ.
 *   ⚠⚠ „PRZEDZIAŁ, KTÓRY NIE OBEJMUJE SWOICH SKRAJNOŚCI"
 *   JAKO KĄT — NIE UŻYWAM: ociera się o „średnia kontra
 *   maksimum" (Węgorzyno). PODAJĘ JAKO FAKT, z jawnym
 *   zaznaczeniem rozbieżności.
 * — UŻYTKI ROLNE: ok. 68 % powierzchni gminy.
 * — ⚠⚠ KOŚCIOŁÓW I DOMU MODLITWY NIE OPISUJĘ —
 *   wyznaniowe, mimo pewnych dat (1314, 1744, 1897).
 * — ⚠⚠ SZKÓŁ NIE WYLICZAM — systematyka sprzed 1945 r.
 *   prowadzi w wątki wykluczone.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO DLA ŻADNEGO
 *   KIERUNKU. ANI JEDNEJ LICZBY KILOMETRÓW.
 *
 * KĄT: RÓŻNICA SIEDZI PO JEDNEJ STRONIE
 * — o tym, że gdy dwa rachunki tej samej całości się nie
 * zgadzają, luka prawie nigdy nie rozkłada się równo.
 * Kąt od dwóch spisów gminy Olszyna: pięćdziesiąt cztery
 * osoby różnicy, z czego czterdzieści pięć po stronie
 * wiejskiej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dwa spisy tej samej gminy podają różne liczby:
 *   urząd 6 311, GUS 6 257,
 * — ŻE RÓŻNICA PIĘĆDZIESIĘCIU CZTERECH OSÓB NIE ROZKŁADA
 *   SIĘ RÓWNO: dziewięć osób w mieście, czterdzieści
 *   pięć na wsi — czyli ponad osiemdziesiąt procent luki
 *   w części, w której mieszka niecała jedna trzecia
 *   ludzi. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE NIE WIADOMO, KTÓRA LICZBA JEST POPRAWNA —
 *   i że to nie jest tu ważne. Ważne jest, GDZIE luka
 *   siedzi,
 * — ⚠⚠ ŻE W KUCHNI MAMY TAK ZA KAŻDYM RAZEM, GDY RACHUNEK
 *   ZA ZAKUPY SKACZE: pierwszy odruch to przejrzeć
 *   wszystko od nowa,
 * — ⚠⚠ ŻE TO JEST NAJDROŻSZY MOŻLIWY SPOSÓB. Tańszy
 *   jest jeden ruch: podziel paragon na pół i porównaj
 *   każdą połowę osobno z poprzednim miesiącem,
 * — ⚠⚠ ŻE SKOK PRAWIE ZAWSZE SIEDZI W JEDNYM MIEJSCU,
 *   a zwykle w jednej pozycji — i że znajduje się ją
 *   dwoma, trzema podziałami, a nie przeglądaniem
 *   wszystkiego,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem różnica naprawdę
 *   rozkłada się równo, bo wszystko podrożało po trochu.
 *   Podział pokazuje wtedy dokładnie to — i to też
 *   jest odpowiedź, tylko mniej przyjemna,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to samo dotyczy pytania,
 *   czy urządzenie coś skraca. MÓWIĘ WPROST, że nie
 *   mierzy się całego wieczoru — dzieli się go i patrzy,
 *   która połowa się ruszyła.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DWÓCH LICZB MIERZĄCYCH CO INNEGO — kąt
 *   zajęty (Twardogóra). ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam dwie liczby
 *   mierzyły RÓŻNE rzeczy; tu obie mierzą TO SAMO
 *   i chodzi o to, GDZIE luka siedzi.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt
 *   zajęty (Bierutów).
 * — ⚠⚠⚠ ZERO PODZIEL PRZEZ TEMPO — kąt zajęty (Stronie
 *   Śląskie).
 * — ⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM — kąt zajęty
 *   (Węgorzyno). Dlatego rozbieżność wysokości zostaje
 *   faktem bez morału.
 * — ⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt zajęty
 *   (Piława Górna).
 * — ⚠⚠ ZERO NIE KAŻDE PRZĘSŁO — kąt zajęty (Ścinawa).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠ ŻADNYCH KONKRETNYCH KWOT ANI CEN PRODUKTÓW —
 *   piszę o „skoku na rachunku", bez ani jednej złotówki.
 * — ŻADNEGO GOTOWEGO SYSTEMU BUDŻETOWANIA — podaję
 *   WYŁĄCZNIE zasadę: dziel na pół, aż znajdziesz.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKICH NAZW.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠⚠ ZERO WĄTKU GRANICZNEGO.
 * — ⚠⚠ ZERO POŻARÓW I POWODZI JAKO ŻYWIOŁU.
 * — ⚠ ZERO BEZROBOCIA I DEMOGRAFII WSPÓŁCZESNEJ.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy — nie domyka się.
 * — NIE TWIERDZĘ, która z dwóch liczb ludności jest
 *   poprawna ani skąd bierze się różnica.
 * — NIE PODAJĘ daty powstania gminy — dwie sprzeczne
 *   wersje w jednym serwisie.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Olszyna leży w powiecie lubańskim; miasto liczy
 *   4 280 mieszkańców (GUS, 31.12.2024) na 20,3 km²,
 *   czyli około 211 osób na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 6 257 osób na 47,1 km²,
 *   z dziewięcioma sołectwami,
 * — Urząd Miejski podaje inne liczby: 6 311 osób w gminie
 *   (4 289 w mieście, 2 022 na wsi) i 47,2 km²,
 * — pierwsza wzmianka pochodzi z 6 listopada 1254 r.,
 *   pod nazwą OLSNA, a prawa miejskie miasto otrzymało
 *   1 stycznia 2005 r.,
 * — gmina leży na wysokości 240–400 m n.p.m., ale
 *   Złotnicka Czuba ma 436 m, Długa Kałużnianka 426 m,
 *   a Husycka Górka 330 m,
 * — użytki rolne zajmują około 68 % powierzchni gminy,
 *   przez którą płyną Kwisa, Olszówka i Wilka.
 */
export const OLSZYNA: CityContent = {
  slug: "olszyna",
  h1: "Thermomix Olszyna – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Olszyna — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Olszynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Olszyna — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Olszynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Olszyny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dziewięciu sołectw.",

  highlights: highlightyStandardowe("Olszyna"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pięćdziesiąt cztery osoby różnicy. Czterdzieści pięć po jednej stronie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Olszynie – jak wygląda prezentacja?",
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
      id: "roznica-po-jednej-stronie",
      heading: "Różnica siedzi po jednej stronie",
      paragraphs: [
        "Gmina Olszyna ma dwa spisy swoich mieszkańców i nie zgadzają się ze sobą. Urząd Miejski podaje 6 311 osób. GUS na koniec 2024 roku — 6 257.",
        "Pięćdziesiąt cztery osoby różnicy. Niedużo, jak na sześć tysięcy.",
        "Ciekawe jest co innego. Ta różnica nie rozkłada się równo. W samym mieście obie liczby dzieli dziewięć osób. Na wsi — czterdzieści pięć.",
        "Czyli ponad osiemdziesiąt procent całej rozbieżności siedzi w tej części gminy, w której mieszka niecała jedna trzecia ludzi.",
        "Nie wiem, która liczba jest poprawna, i nie będę zgadywać. Ale wiem, gdzie luka siedzi — i to jest zwykle cenniejsze niż wiedza, która strona ma rację.",
        "W kuchni mamy dokładnie tę samą sytuację za każdym razem, gdy rachunek za zakupy nagle skacze.",
        "Pierwszy odruch jest zawsze ten sam: przejrzeć wszystko od nowa. Cały paragon, pozycja po pozycji, z poczuciem, że gdzieś się rozpuściło.",
        "To najdroższy możliwy sposób i prawie nigdy nie kończy się odpowiedzią. Tańszy ruch jest jeden: podziel paragon na pół — na przykład na to, co świeże, i to, co trwałe — i porównaj każdą połowę osobno z poprzednim miesiącem. Potem podziel tę połowę, która się ruszyła.",
        "Dwa, trzy podziały wystarczają. Skok prawie zawsze siedzi w jednym miejscu, a bardzo często w jednej pozycji.",
        "Dopowiem, bo to leży blisko: to nie jest ten przypadek, w którym dwie liczby mierzą co innego. Tutaj obie liczą dokładnie to samo — i właśnie dlatego szukanie polega na dzieleniu, a nie na sprawdzaniu definicji.",
        "Uczciwie o drugiej stronie: czasem różnica naprawdę rozkłada się równo, bo wszystko podrożało po trochu. Podział pokazuje wtedy dokładnie to. Odpowiedź jest mniej przyjemna, ale nadal jest odpowiedzią — i nadal kosztuje trzy minuty zamiast wieczoru.",
        "I uczciwie o sprzęcie: ta sama zasada dotyczy pytania, czy urządzenie cokolwiek skraca. Nie mierzy się całego wieczoru, bo z tego nic nie wynika. Dzieli się go na przygotowanie, gotowanie i sprzątanie, i patrzy, która część się ruszyła. Zwykle rusza się jedna — i warto wiedzieć która, zanim się zapłaci.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Olszynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy chodzi o miasto, czy o któreś sołectwo — i podaj jego nazwę. Przy tej nazwie miasta naprawdę warto.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Olszynie"),
    sekcjaRaty("w Olszynie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Olszyny",
      paragraphs: [
        "Olszyna leży w powiecie lubańskim. Samo miasto liczy 4 280 mieszkańców (GUS, 31.12.2024) na dwudziestu kilometrach kwadratowych z okładem, czyli około dwustu jedenastu osób na kilometr, a cała gmina miejsko-wiejska 6 257 osób na czterdziestu siedmiu. Do gminy należy dziewięć sołectw: Biedrzychowice, Bożkowice, Grodnica, Kałużna, Karłowice, Krzewie Małe, Nowa Świdnica, Olszyna Dolna i Zapusta — to jedna z nielicznych gmin, dla których urząd i GUS podają identyczną listę. Liczby mieszkańców już identyczne nie są: Urząd Miejski podaje 6 311 osób w gminie, w tym 4 289 w mieście i 2 022 na wsi. Miasto zajmuje czterdzieści trzy procent powierzchni gminy, a mieszka w nim sześćdziesiąt osiem procent jej ludności. Pierwsza wzmianka pochodzi z 6 listopada 1254 roku, pod nazwą OLSNA, a prawa miejskie Olszyna otrzymała 1 stycznia 2005 — to najmłodsze miasto, o jakim pisałam na tych stronach. Daty powstania gminy nie podaję, bo ten sam serwis urzędu wymienia w dwóch miejscach dwie różne. Gmina leży na wysokości od dwustu czterdziestu do czterystu metrów nad poziomem morza, choć Złotnicka Czuba ma czterysta trzydzieści sześć metrów, a Długa Kałużnianka czterysta dwadzieścia sześć — dwa z trzech wymienianych szczytów wystają ponad ten przedział. Użytki rolne zajmują około sześćdziesięciu ośmiu procent powierzchni gminy, przez którą płyną Kwisa, Olszówka i Wilka.",
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

  districtsHeading: "Do których części Olszyny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziewięciu sołectw: Biedrzychowic, Bożkowic, Grodnicy, Kałużnej, Karłowic, Krzewia Małego, Nowej Świdnicy, Olszyny Dolnej i Zapusty. Wszędzie bez dopłaty.",
    "Warto powiedzieć wyraźnie, czy chodzi o Olszynę, czy o Olszynę Dolną — to dwie różne miejscowości w jednej gminie.",
  ],
  districts: [],

  nearbyHeading: "Poza Olszynę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Lubania, Gryfowa Śląskiego, Leśnej, Świeradowa-Zdroju i Bolesławca — wszędzie bezpłatnie, tak samo jak w samej Olszynie.",
  ],
  nearbyTowns: ["Lubań", "Gryfów Śląski", "Leśna", "Świeradów-Zdrój", "Bolesławiec"],

  about: blokOMnie("do Olszyny", "w Olszynie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Olszyny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziewięciu sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Ta nazwa myli się wyjątkowo często, więc doprecyzuję: chodzi o miasto Olszyna w powiecie lubańskim. Olszyna to także wieś w gminie Lubawka, w tym samym województwie; osobna Olszyna leży w lubuskiem przy dawnym przejściu granicznym; a Olszyna Dolna to sołectwo w tej właśnie gminie. Do tego „olszyna” jest zwykłym rzeczownikiem i oznacza las olchowy.",
    },
    ...faqWspolne("w Olszynie"),
    {
      question: "Rachunek za zakupy nagle skoczył i nie wiem gdzie. Jak to znaleźć?",
      answer:
        "Dzieląc, a nie przeglądając. Gmina Olszyna ma dwa spisy mieszkańców, które różnią się o pięćdziesiąt cztery osoby — ale nie po równo: dziewięć osób w mieście i czterdzieści pięć na wsi, czyli ponad osiemdziesiąt procent luki w części, gdzie mieszka jedna trzecia ludzi. Rachunek zachowuje się tak samo. Podziel paragon na pół — świeże i trwałe — porównaj każdą połowę z poprzednim miesiącem, a potem podziel tę połowę, która się ruszyła. Dwa, trzy podziały zwykle wystarczają. Przeglądanie wszystkiego od nowa prawie nigdy nie kończy się odpowiedzią.",
    },
    {
      question: "Jak sprawdzić, czy Thermomix faktycznie skraca gotowanie u mnie?",
      answer:
        "Tak samo — dzieląc. Mierzenie całego wieczoru nic nie daje, bo wynik zależy od dania, od dnia i od tego, ile osób przeszkadzało. Podzielcie wieczór na trzy części: przygotowanie, gotowanie i sprzątanie, i zobaczcie, która się ruszyła. Zwykle rusza się jedna, i warto wiedzieć która, zanim się zapłaci — bo jeśli u Was czas idzie głównie na zakupy i planowanie, różnica będzie mniejsza, niż obiecuje większość opisów.",
    },
  ],

  geo: { lat: 51.0668, lng: 15.3722 },
};
