import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * ALEKSANDRÓW KUJAWSKI — powiat aleksandrowski,
 * woj. kujawsko-pomorskie, KUJAWY.
 * GMINA MIEJSKA. 11 475 mieszkańców (GUS 31.12.2024),
 * 7,2 km².
 * ⚠⚠ OBOK ISTNIEJE ODRĘBNA GMINA WIEJSKA ALEKSANDRÓW
 *   KUJAWSKI (12 014 osób — WIĘCEJ NIŻ MIASTO!)
 *   Z SIEDZIBĄ W TYM SAMYM MIEŚCIE.
 *   NIE MIESZAM TYCH DANYCH. TWARDA GRANICA.
 * ⚠⚠ W SERWISIE ISTNIEJE JUŻ STRONA „ALEKSANDRÓW ŁÓDZKI"
 *   (kąt: weekend, którego nie ma w kuchni).
 *   TO INNE MIASTO I INNY KĄT — SPRAWDZONE.
 *   NIE POWIELAM TAMTEGO KĄTA ANI JEDNYM ZDANIEM.
 * ⚠ ODMIANA: D. ALEKSANDROWA KUJAWSKIEGO,
 *   Ms. W ALEKSANDROWIE KUJAWSKIM,
 *   przym. ALEKSANDROWSKI (powiat aleksandrowski).
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ RDZEŃ KĄTA: TO MIASTO NIE MA ŚREDNIOWIECZA.
 *   POWSTAŁO, BO POCIĄG MUSIAŁ SIĘ TU ZATRZYMAĆ.
 *   Linia kolejowa przecinała w tym miejscu granicę
 *   między zaborami, więc powstała tu KOMORA CELNA,
 *   a przy niej telegraf i poczta. Osada urosła wokół
 *   przystanku, a PRAWA MIEJSKIE OTRZYMAŁA DOPIERO
 *   W LISTOPADZIE 1916 R.
 * — DWORZEC KOLEJOWY MA 195,5 M DŁUGOŚCI — należy
 *   do najdłuższych budynków dworcowych w Polsce.
 *   ⚠ PODAJĘ WYMIAR JAKO FAKT, BEZ SUPERLATYWÓW
 *   TYPU „NAJDŁUŻSZY W EUROPIE" — nie ustalono.
 * — miejscowość uzdrowiskowa w okolicy: CIECHOCINEK
 *   ⚠ TYLKO JAKO SĄSIAD W nearbyTowns, ZERO ROZWIJANIA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: produkty „ciechocińska
 *   sól warzona" i masło z Wołuszewa pochodzą Z GMINY
 *   CIECHOCINEK, NIE Z ALEKSANDROWA. NIE UŻYWAM ICH.
 *   TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: PÓŁPRODUKT — rzeczy, które gotuje się nie po to,
 * żeby je zjeść, tylko po to, żeby z nich zrobić coś innego.
 * Kąt od genezy miasta: Aleksandrów Kujawski powstał jako
 * miejsce, w którym trzeba się było zatrzymać po drodze
 * gdzie indziej. Przystanek, nie cel. W kuchni istnieje
 * cała kategoria takich rzeczy i nikt ich tak nie nazywa.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to miasto nie ma średniowiecza: powstało dlatego,
 *   że w tym miejscu linia kolejowa przecinała granicę
 *   między zaborami i pociąg musiał się zatrzymać
 *   do odprawy; wokół komory celnej stanęły telegraf
 *   i poczta, a prawa miejskie przyszły dopiero
 *   w listopadzie 1916 roku — dworzec ma sto
 *   dziewięćdziesiąt pięć i pół metra długości,
 * — ŻE TO BYŁO MIEJSCE, KTÓRE ISTNIAŁO PO TO, ŻEBY
 *   SIĘ W NIM ZATRZYMAĆ W DRODZE GDZIE INDZIEJ,
 * — ⚠⚠ ŻE W KUCHNI ISTNIEJE DOKŁADNIE TAKA KATEGORIA
 *   I ŻE NIKT JEJ TAK NIE TRAKTUJE — TO JEST RDZEŃ,
 * — CO TO KONKRETNIE JEST:
 *   — UGOTOWANA KASZA albo ryż, które same w sobie
 *     nie są obiadem, ale są połową trzech obiadów,
 *   — UPIECZONE WARZYWA, które wchodzą do sałatki,
 *     do zupy i do past,
 *   — PODSMAŻONA BAZA — cebula z marchewką i selerem —
 *     od której zaczyna się większość dań jednogarnkowych,
 *   — ROZDROBNIONE ORZECHY, BUŁKA TARTA, STARTY SER:
 *     rzeczy, których nigdy nie brakuje w przepisie,
 *     tylko w lodówce,
 * — ⚠⚠ ŻE CAŁA RÓŻNICA POLEGA NA TYM, KIEDY SIĘ JE ROBI:
 *   półprodukt zrobiony W TRAKCIE gotowania obiadu jest
 *   przeszkodą, a zrobiony PRZY OKAZJI innego gotowania —
 *   nie kosztuje prawie nic, bo naczynie i tak jest brudne,
 *   a piekarnik i tak jest rozgrzany,
 * — ŻE TO NIE JEST TO SAMO CO GOTOWANIE NA ZAPAS:
 *   tam odkłada się GOTOWE DANIE, tutaj odkłada się
 *   POŁOWĘ ROBOTY, która sama daniem nie jest
 *   ⚠ ODSYŁAM TAM WPROST — ROZGRANICZENIE OBOWIĄZKOWE,
 * — ŻE NAJWIĘKSZY ZYSK DAJE ROBIENIE PÓŁPRODUKTU JAKO
 *   OSTATNIEJ CZYNNOŚCI, gdy główne danie już się gotuje
 *   samo — bo wtedy nie zabiera czasu, tylko go wypełnia,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to jest rzecz, w której
 *   urządzenie wielofunkcyjne naprawdę zmienia rachunek.
 *   Zmielenie orzechów albo bułki trwa chwilę, więc opłaca
 *   się zrobić to od razu; podsmażona baza powstaje
 *   w tym samym naczyniu, w którym potem gotuje się zupa.
 *   ⚠ ALE UCZCIWIE TEŻ: każdy półprodukt to jedno mycie
 *   więcej, a naczynie jest jedno — więc kolejność ma
 *   znaczenie i suche robi się przed mokrym
 *   ⚠ ODSYŁAM DO STRONY O MYCIU MIĘDZY ETAPAMI.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI: ile dni
 *   półprodukt się trzyma, w czym go przechowywać,
 *   czy mrozić. TWARDA GRANICA — TO JEST NAJWIĘKSZE
 *   RYZYKO TEJ STRONY I PILNUJĘ GO OSOBNO.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ZERO ROZWIJANIA WĄTKU UZDROWISKOWEGO.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO POLITYCZNEGO KONTEKSTU GRANICY ZABORÓW.
 *   Piszę WYŁĄCZNIE: „linia kolejowa przecinała tu granicę,
 *   więc powstała komora celna". Zero rozbiorów jako tematu,
 *   zero wątków narodowościowych. TWARDA GRANICA.
 * — ZERO wątków wojennych i okupacyjnych.
 * — ZERO wątków wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — ZERO superlatywów o dworcu poza podanym wymiarem.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „GOTOWANIE NA ZAPAS" (Stopnica) dotyczy ODKŁADANIA
 *   GOTOWYCH PORCJI DO ZAMRAŻARKI. ⚠ TO JEST NAJBLIŻSZY
 *   KĄT — tam odkłada się DANIE, tutaj POŁOWĘ ROBOTY,
 *   która daniem nie jest. Odsyłam tam wprost.
 * — „WEEKEND, KTÓREGO NIE MA W KUCHNI" (Aleksandrów
 *   Łódzki) dotyczy GOTOWANIA PRZED TRZEMA DNIAMI.
 *   ⚠⚠ TO INNE MIASTO O PODOBNEJ NAZWIE — PILNUJĘ,
 *   ŻEBY NIE POWTÓRZYĆ TAMTEGO KĄTA.
 * — „CIASTO, KTÓRE ZOSTAŁO" (Tuchola) dotyczy RESZTEK
 *   PO GOTOWANIU. ⚠ TUTAJ jest odwrotnie: robi się
 *   NADMIAR CELOWO I Z GÓRY.
 * — „CZY MYĆ NACZYNIE MIĘDZY ETAPAMI" (Susz) dotyczy
 *   MYCIA W TRAKCIE.
 * TUTAJ chodzi o RZECZY, KTÓRE SĄ ETAPEM, A NIE CELEM.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM danych gminy miejskiej i wiejskiej.
 * — NIE PISZĘ o Aleksandrowie Łódzkim.
 * — NIE PRZYPISUJĘ miastu produktów z gminy Ciechocinek.
 * — NIE ORZEKAM, jak długo półprodukt się trzyma.
 * — NIE NAZYWAM dworca najdłuższym w Europie.
 * — NIE ROZWIJAM politycznego kontekstu granicy.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Aleksandrów Kujawski jest gminą miejską na Kujawach
 *   i siedzibą powiatu aleksandrowskiego; liczy 11 475
 *   mieszkańców (GUS, 31.12.2024) na siedmiu i dwóch
 *   dziesiątych kilometra kwadratowego, a obok istnieje
 *   odrębna gmina wiejska o tej samej nazwie, licząca
 *   12 014 osób — czyli więcej niż samo miasto,
 * — miasto powstało wokół stacji kolejowej: linia przecinała
 *   w tym miejscu granicę, więc działała tu komora celna,
 *   a przy niej telegraf i poczta; prawa miejskie
 *   miejscowość otrzymała dopiero w listopadzie 1916 roku,
 * — budynek dworca ma 195,5 metra długości i należy
 *   do najdłuższych dworców w Polsce.
 */
export const ALEKSANDROW_KUJAWSKI: CityContent = {
  slug: "aleksandrow-kujawski",
  h1: "Thermomix Aleksandrów Kujawski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Aleksandrów Kujawski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Aleksandrowie Kujawskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Aleksandrów Kujawski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Aleksandrowie Kujawskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Aleksandrowa Kujawskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Aleksandrów Kujawski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Są rzeczy, które gotuje się nie po to, żeby je zjeść.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Aleksandrowie Kujawskim – jak wygląda prezentacja?",
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
      id: "polprodukt",
      heading: "Miasto, które powstało z przystanku",
      paragraphs: [
        "Aleksandrów Kujawski nie ma średniowiecza. Nie ma przywileju lokacyjnego z czternastego wieku, nie ma rynku wytyczonego przez zasadźcę, nie ma murów. Powstał dlatego, że pociąg musiał się tu zatrzymać.",
        "Linia kolejowa przecinała w tym miejscu granicę, więc stanęła komora celna, a przy niej telegraf i poczta. Wokół przystanku zaczęli się osiedlać ludzie, którzy mieli tam co robić, i tak zrobiło się miasto — prawa miejskie przyszły dopiero w listopadzie 1916 roku. Dworzec ma sto dziewięćdziesiąt pięć i pół metra długości i należy do najdłuższych w Polsce.",
        "Miejsce, które istniało po to, żeby się w nim zatrzymać w drodze gdzie indziej.",
        "W kuchni jest cała kategoria takich rzeczy i praktycznie nikt jej tak nie nazywa. Rzeczy, które gotuje się nie po to, żeby je zjeść, tylko po to, żeby z nich zrobić coś innego.",
        "Ugotowana kasza albo ryż — same w sobie nie są obiadem, ale są połową trzech obiadów. Upieczone warzywa, które wchodzą do sałatki, do zupy i do pasty na kanapki. Podsmażona baza z cebuli, marchewki i selera, od której zaczyna się większość dań jednogarnkowych. Zmielone orzechy, bułka tarta, starty ser — rzeczy, których nigdy nie brakuje w przepisie, tylko w lodówce.",
        "Cała różnica polega na tym, kiedy się je robi.",
        "Półprodukt zrobiony w trakcie gotowania obiadu jest przeszkodą — wchodzi w środek, wydłuża i irytuje. Ten sam półprodukt zrobiony przy okazji innego gotowania nie kosztuje prawie nic, bo naczynie i tak jest brudne, a piekarnik i tak jest rozgrzany. To jest dokładnie ta sama robota, tylko przesunięta w inne miejsce.",
        "I od razu rozgraniczenie, bo to nie jest to samo co gotowanie na zapas — o tym pisałam osobno przy innym mieście. Tam odkłada się gotowe danie, żeby je później odgrzać. Tutaj odkłada się połowę roboty, która daniem nie jest i nigdy nie będzie. To przystanek, nie cel.",
        "Największy zysk daje robienie półproduktu jako ostatniej czynności, kiedy główne danie już się gotuje samo. Wtedy to nie zabiera czasu — tylko go wypełnia. Blacha warzyw wjeżdża do piekarnika, z którego właśnie wyjechała zapiekanka; garść orzechów miele się, gdy zupa dochodzi.",
        "Tu akurat urządzenie wielofunkcyjne naprawdę zmienia rachunek i powiem to bez owijania. Zmielenie orzechów albo bułki trwa chwilę, więc przestaje być osobnym przedsięwzięciem i zaczyna się opłacać robić od razu. Podsmażona baza powstaje w tym samym naczyniu, w którym potem gotuje się zupa, więc nie ma przekładania.",
        "Ale uczciwie do końca: każdy półprodukt to jedno mycie więcej, a naczynie jest jedno. Dlatego kolejność ma znaczenie i suche robi się przed mokrym — o myciu między etapami pisałam osobno, bo to jest realny koszt, którego nikt nie pokazuje na prezentacjach. Ja pokazuję.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Aleksandrowie Kujawskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz zobaczyć, co da się zrobić „przy okazji”, gdy główne danie już pracuje samo — powiedz to przy umawianiu i ustawimy spotkanie właśnie tak.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Aleksandrowie Kujawskim"),
    sekcjaRaty("w Aleksandrowie Kujawskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla aleksandrowskiej rodziny",
      paragraphs: [
        "Aleksandrów Kujawski jest gminą miejską na Kujawach i siedzibą powiatu aleksandrowskiego; liczy ponad jedenaście tysięcy mieszkańców na siedmiu i dwóch dziesiątych kilometra kwadratowego, a obok istnieje odrębna gmina wiejska o tej samej nazwie, licząca ponad dwanaście tysięcy osób — czyli więcej niż samo miasto. Miejscowość powstała wokół stacji kolejowej: linia przecinała tu granicę, więc działała komora celna, a przy niej telegraf i poczta; prawa miejskie przyszły dopiero w listopadzie 1916 roku. Budynek dworca ma sto dziewięćdziesiąt pięć i pół metra długości i należy do najdłuższych w Polsce.",
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

  districtsHeading: "Do których części Aleksandrowa Kujawskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od okolic dworca i centrum po osiedla przy wylotach dróg. Dojeżdżam też do wsi w okolicznej gminie wiejskiej.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Aleksandrów Kujawski też przyjadę",
  nearbyParagraphs: [
    "Ciechocinek, Nieszawa, Toruń, Włocławek, Radziejów, Brześć Kujawski i Gniewkowo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ciechocinek", "Nieszawa", "Toruń", "Radziejów"],

  about: blokOMnie("do Aleksandrowa Kujawskiego", "w Aleksandrowie Kujawskim", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Aleksandrowa Kujawskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicznej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Aleksandrów Kujawski to gmina miejska i siedziba powiatu, a obok istnieje odrębna gmina wiejska o tej samej nazwie, liczniejsza od samego miasta — do obu przyjeżdżam tak samo.",
    },
    ...faqWspolne("w Aleksandrowie Kujawskim"),
    {
      question: "Czym półprodukt różni się od gotowania na zapas?",
      answer:
        "Na zapas odkłada się gotowe danie, żeby je później odgrzać. Półprodukt daniem nie jest i nigdy nie będzie — to ugotowana kasza, upieczone warzywa, podsmażona baza z cebuli i marchewki, zmielone orzechy. Odkłada się połowę roboty, a nie efekt. To przystanek, nie cel.",
    },
    {
      question: "Kiedy najlepiej robić półprodukty?",
      answer:
        "Jako ostatnią czynność, kiedy główne danie już gotuje się samo — wtedy to nie zabiera czasu, tylko go wypełnia. Blacha warzyw wjeżdża do piekarnika, z którego właśnie wyjechała zapiekanka. Ten sam półprodukt zrobiony w środku gotowania obiadu jest po prostu przeszkodą.",
    },
  ],

  geo: { lat: 52.8766, lng: 18.6935 },
};
