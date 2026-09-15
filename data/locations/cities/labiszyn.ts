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
 * ŁABISZYN — powiat żniński, woj. kujawsko-pomorskie,
 * PAŁUKI, nad Notecią.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 325 mieszkańców (GUS 31.12.2024),
 * ⚠ 2,9 KM² — NAJMNIEJSZE MIASTO Z TEJ FALI,
 *   za to o NAJWYŻSZEJ GĘSTOŚCI: 1 496,5 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 10 629 osób, 166,9 km²,
 * 28 wsi.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ ŁABISZYN.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ ODMIANA: D. ŁABISZYNA, Ms. W ŁABISZYNIE,
 *   przym. ŁABISZYŃSKI.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 *   ⚠⚠ NIE UŻYWAM NIEMIECKIEJ NAZWY MIASTA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1369 — prawa miejskie (rodzina Prawdziców).
 * — 1376 — budowa ZAMKU NA WYSPIE przez Andrzeja
 *   z Łabiszyna. ⚠ WYMIARÓW NIE USTALONO. Pozostałości
 *   odkryto w 1993 r.
 * — 1407 — miasto uzyskuje WŁASNĄ PIECZĘĆ LAKOWĄ.
 * — 2–3 listopada 1410 — pobyt króla Władysława Jagiełły.
 * — 11 CZERWCA 1678 — kasztelan Paweł Gembicki potwierdził
 *   prawa miejskie NA ZAMKU (data dzienna); w 1712 r.
 *   sporządzono uwierzytelnioną kopię.
 * — 1772 — lokacja nowego miasta.
 * — ⚠⚠⚠ RDZEŃ KĄTA — ROK 1458:
 *   MIASTO WYSTAWIŁO CZTERECH PIESZYCH ŻOŁNIERZY,
 *   A OD TEGO CZASU BYŁO ZWOLNIONE Z PODWÓD I PIESZYCH
 *   WYPRAW — ZAMIAST TYCH OBOWIĄZKÓW PŁACIŁO
 *   24 GROSZE ROCZNIE.
 *   ⚠⚠ W TEKŚCIE PISZĘ WYŁĄCZNIE: „wykupiło się
 *   z pewnych powinności, płacąc dwadzieścia cztery grosze
 *   rocznie". ZERO WOJSKA, ZERO ŻOŁNIERZY, ZERO KRZYŻAKÓW.
 *   TWARDA GRANICA BEZWZGLĘDNA — wątek militarny.
 * — CZYNSZE PŁACONO NA ŚW. MARCINA (11 LISTOPADA):
 *   jeden złoty i sześć groszy, 18 groszy, 12 groszy
 *   oraz WIERTEL CHMIELU.
 *   ⚠ ŹRÓDŁO MA WEWNĘTRZNĄ ROZBIEŻNOŚĆ (owies czy chmiel) —
 *   NIE ROZSTRZYGAM. ⚠⚠ ZERO PIWA I ZERO BROWARNICTWA —
 *   chmiel wyłącznie jako składnik czynszu.
 * — RZEMIEŚLNICY: szewcy, młynarze, piekarze, kuśnierze,
 *   zduni, bednarze, krawcy, kowale, kołodzieje, ślusarze —
 *   ⚠ A PIWOWARZY „POZOSTAWALI BEZ CECHU": jedyne
 *   rzemiosło w mieście, którego nie zorganizowano.
 *   ⚠⚠ UŻYWAM WYŁĄCZNIE JAKO FAKTU O BRAKU CECHU.
 *   ZERO ALKOHOLU. TWARDA GRANICA.
 *   ⚠ LICZB RZEMIEŚLNIKÓW I DOMÓW NIE USTALONO.
 * — „DĄB JAGIEŁŁY" — OBWÓD 5 M 35 CM.
 * — DROGA WODNA Gopło–Noteć–Kanał Bydgoski: 114,6 km,
 *   SZEŚĆ ŚLUZ pokonujących ok. 14 m różnicy poziomów;
 *   ŚLUZA NR 2 ZNAJDUJE SIĘ W ŁABISZYNIE.
 *   ⚠ WYMIARÓW KOMORY I ROKU BUDOWY NIE USTALONO.
 * — PAŁAC W LUBOSTRONIU (w gminie), 2. poł. XVIII w.,
 *   park krajobrazowy 28 ha.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Łabiszyn. Sprawdzono wszystkie dziesięć
 *   kategorii wojewódzkich; żadna karta nie wymienia
 *   Łabiszyna ani Lubostronia. NIE WYMYŚLAM ŻADNEGO.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: PŁACENIE ZA POMINIĘCIE KROKU — kiedy warto kupić
 * rzecz zrobioną za nas.
 * Kąt od 1458 r.: miasto wykupiło się z pewnych powinności,
 * płacąc od tego czasu dwadzieścia cztery grosze rocznie.
 * Robota zamieniona na stałą, przewidywalną stawkę.
 * W sklepie robimy to codziennie i prawie nigdy świadomie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1458 roku Łabiszyn wykupił się z pewnych
 *   powinności i od tego czasu płacił zamiast nich
 *   dwadzieścia cztery grosze rocznie — robotę zamieniono
 *   na stałą, przewidywalną stawkę,
 * — ŻE TO JEST DOKŁADNIE TA SAMA DECYZJA, KTÓRĄ
 *   PODEJMUJEMY W SKLEPIE, tylko podjęta raz i zapisana,
 * — ⚠⚠ ŻE PÓŁKA JEST PEŁNA RZECZY, ZA KTÓRE PŁACIMY
 *   WYŁĄCZNIE ZA POMINIĘTY KROK — TO JEST RDZEŃ:
 *   obrane warzywa, starty ser, pokrojona kapusta,
 *   gotowe ciasto, bulion w kostce, mielone mięso,
 * — ⚠⚠ ŻE NIE MA W TYM NIC ZŁEGO I ŻE NIE ZAMIERZAM
 *   NIKOGO Z TEGO ROZLICZAĆ. Pytanie brzmi tylko:
 *   ILE TEN KROK NAPRAWDĘ KOSZTUJE I ILE NAPRAWDĘ
 *   OSZCZĘDZA,
 * — KIEDY TO SIĘ OPŁACA, KONKRETNIE:
 *   — GDY KROK JEST DŁUGI, A RÓŻNICA W EFEKCIE MAŁA
 *     (ciasto francuskie),
 *   — GDY WYMAGA SPRZĘTU, KTÓREGO SIĘ NIE MA,
 *   — GDY ROBI SIĘ TO RAZ W ROKU,
 * — KIEDY SIĘ NIE OPŁACA:
 *   — GDY RÓŻNICA W EFEKCIE JEST DUŻA, a krok krótki
 *     (starty ser, świeżo zmielony pieprz),
 *   — GDY PŁACI SIĘ GŁÓWNIE ZA OPAKOWANIE I ZA WODĘ,
 *   — GDY I TAK TRZEBA POTEM POPRAWIAĆ,
 * — ⚠⚠ ŻE JEST TEŻ TRZECIA KATEGORIA, O KTÓREJ SIĘ
 *   NIE MYŚLI: RZECZY KUPOWANE GOTOWE NIE DLATEGO,
 *   ŻE SIĘ NIE UMIE, TYLKO ŻEBY W OGÓLE POWSTAŁY.
 *   Obiad zrobiony z gotowych elementów jest lepszy
 *   niż obiad, którego nie było,
 * — ⚠ UCZCIWIE O SPRZĘCIE — I TU JEST SEDNO: urządzenie
 *   przesuwa tę granicę, ale jej nie kasuje. Kroki,
 *   za których pominięcie dotąd się płaciło — ucieranie,
 *   siekanie, mielenie — stają się tanie w czasie,
 *   więc opłaca się je odzyskać. ALE ZAKUPY, OBIERANIE
 *   I MYCIE ZOSTAJĄ PO STARONEJ STRONIE I ZOSTANĄ TAM
 *   NA ZAWSZE.
 *   ⚠ ODSYŁAM DO STRONY O TYM, ILE CZASU ZAJMUJE
 *   JEDZENIE — ROZGRANICZENIE OBOWIĄZKOWE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO WOJSKA, ŻOŁNIERZY I KRZYŻAKÓW przy
 *   wykupie z 1458 r. Piszę „pewne powinności" i tyle.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO PIWA, BROWARNICTWA I ALKOHOLU. Piwowarzy
 *   WYŁĄCZNIE jako zawód bez cechu; chmiel WYŁĄCZNIE
 *   jako składnik czynszu. TWARDA GRANICA.
 * — ⚠⚠ ZERO PÓŁPRODUKTÓW JAKO TEMATU — kąt zajęty
 *   (Aleksandrów Kujawski). Tam chodzi o to, co ROBI SIĘ
 *   SAMEMU z wyprzedzeniem; TUTAJ o to, co SIĘ KUPUJE
 *   ZROBIONE. TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO ZAMIENNIKÓW — kąt zajęty (Kwidzyn).
 * — ⚠ ZERO ILE CZASU ZAJMUJE JEDZENIE — kąt zajęty
 *   (Gniewkowo). Odsyłam jednym zdaniem.
 * — ⚠ ZERO CENY I RACHUNKU ZA ZAKUPY jako tematu —
 *   piszę o KROKU, nie o budżecie domowym.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠ w szczególności
 *   ZERO oceniania produktów gotowych jako „gorszych
 *   dla zdrowia". TWARDA GRANICA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WYDARZEŃ Z 1939 R. Najwyżej pozycjonowane
 *   źródło encyklopedyczne o Łabiszynie zawiera zdanie
 *   o egzekucjach; obejmuje to także okupacyjną nazwę
 *   miasta. ŻADNYCH SŁÓW „egzekucja", „okupacja".
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠ ZERO WIELKIEGO POŻARU Z 10 MARCA 1687 R. —
 *   data dzienna jest kusząca, ale to katastrofa.
 * — ⚠⚠ ZERO KRYPT I GROBOWCÓW przy kościele — wątek
 *   śmierci, regionalny portal ma o tym osobny artykuł.
 * — ZERO zboru i zmiany wyznania (1594/1627) — wątek
 *   wyznaniowy. Kościół opisuję wyłącznie jako
 *   architekturę albo wcale.
 * — ZERO okupacji szwedzkiej 1655 i 1657.
 * — ZERO powstań (1794, 1806, 1848, 1918–1919).
 * — ZERO salda migracji, przyrostu naturalnego i płac.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „PÓŁPRODUKT" (Aleksandrów Kujawski) dotyczy RZECZY,
 *   KTÓRE ROBI SIĘ SAMEMU Z WYPRZEDZENIEM.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ chodzi o RZECZY
 *   KUPOWANE JUŻ ZROBIONE — czyli o pieniądze zamiast
 *   czasu, a nie o czas przesunięty w inne miejsce.
 *   Odsyłam tam wprost.
 * — „ZAMIENNIKI" (Kwidzyn) dotyczy BRAKUJĄCEGO SKŁADNIKA.
 * — „ILE CZASU ZAJMUJE JEDZENIE" (Gniewkowo) dotyczy
 *   RACHUNKU CAŁEGO TYGODNIA. Odsyłam tam wprost.
 * — „SZUFLADA" (Lipno) dotyczy NARZĘDZI.
 * TUTAJ chodzi o KUPOWANIE POMINIĘTEGO KROKU
 * I O TO, KIEDY TO SIĘ OPŁACA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PISZĘ, z jakich powinności miasto się wykupiło.
 * — NIE ROZSTRZYGAM, czy czynsz obejmował chmiel czy owies.
 * — NIE PISZĘ o piwie ani o browarnictwie.
 * — NIE OCENIAM produktów gotowych pod kątem zdrowia.
 * — NIE PODAJĘ liczb rzemieślników — nie ustalono.
 * — NIE PODAJĘ wymiarów zamku ani śluzy — nie ustalono.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Łabiszyn leży na Pałukach nad Notecią, w powiecie
 *   żnińskim, jest miastem w gminie miejsko-wiejskiej
 *   i liczy 4 325 mieszkańców (GUS, 31.12.2024) na 2,9 km²,
 *   czyli blisko tysiąc pięćset osób na kilometr
 *   kwadratowy; cała gmina ma 10 629 osób w dwudziestu
 *   ośmiu wsiach,
 * — prawa miejskie miasto dostało w 1369 roku, zamek
 *   na wyspie zbudowano w 1376, a własną pieczęć lakową
 *   miasto uzyskało w 1407; 2 i 3 listopada 1410 roku
 *   przebywał tu król Władysław Jagiełło, a 11 czerwca
 *   1678 kasztelan Paweł Gembicki potwierdził prawa
 *   miejskie na zamku,
 * — w 1458 roku miasto wykupiło się z pewnych powinności
 *   i od tego czasu płaciło zamiast nich dwadzieścia
 *   cztery grosze rocznie,
 * — czynsze płacono na świętego Marcina, 11 listopada:
 *   złoty i sześć groszy, osiemnaście groszy, dwanaście
 *   groszy oraz wiertel chmielu,
 * — wśród tutejszych rzemieślników wymienia się szewców,
 *   młynarzy, piekarzy, kuśnierzy, zdunów, bednarzy,
 *   krawców, kowali, kołodziejów i ślusarzy; piwowarzy
 *   jako jedyni pozostawali bez cechu,
 * — rosnący tu „Dąb Jagiełły" ma pięć metrów
 *   trzydzieści pięć centymetrów obwodu,
 * — droga wodna z Gopła przez Noteć do Kanału Bydgoskiego
 *   liczy 114,6 kilometra i sześć śluz pokonujących
 *   około czternastu metrów różnicy poziomów; śluza
 *   numer dwa znajduje się w Łabiszynie,
 * — w gminie stoi pałac w Lubostroniu z drugiej połowy
 *   XVIII wieku, otoczony parkiem krajobrazowym
 *   o powierzchni dwudziestu ośmiu hektarów.
 */
export const LABISZYN: CityContent = {
  slug: "labiszyn",
  h1: "Thermomix Łabiszyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łabiszyn — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Łabiszynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łabiszyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łabiszynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łabiszyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Łabiszyn"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Obiad z gotowych elementów jest lepszy niż obiad, którego nie było.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łabiszynie – jak wygląda prezentacja?",
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
      id: "pominiety-krok",
      heading: "Dwadzieścia cztery grosze rocznie",
      paragraphs: [
        "W 1458 roku Łabiszyn wykupił się z pewnych powinności i od tego czasu płacił zamiast nich dwadzieścia cztery grosze rocznie. Robota zamieniona na stałą, przewidywalną stawkę — raz policzoną i zapisaną.",
        "To jest dokładnie ta sama decyzja, którą podejmujemy w sklepie kilka razy w tygodniu. Tylko że tamtą podjęto raz i na piśmie, a nasze podejmujemy po kilka dziennie, nie zauważając ich w ogóle.",
        "Bo półka jest pełna rzeczy, za które płacimy wyłącznie za pominięty krok. Obrane warzywa. Starty ser. Poszatkowana kapusta. Gotowe ciasto. Bulion w kostce. Mielone mięso zamiast kawałka i maszynki.",
        "I powiem od razu: nie ma w tym nic złego i nie zamierzam nikogo z tego rozliczać. Pytanie brzmi wyłącznie, ile ten krok naprawdę kosztuje i ile naprawdę oszczędza — bo to są dwie różne liczby i rzadko się je zestawia.",
        "Opłaca się wtedy, gdy krok jest długi, a różnica w efekcie mała. Ciasto francuskie zrobione w domu zajmuje pół dnia i w większości zastosowań nie będzie wyraźnie lepsze od kupionego. Opłaca się też, gdy krok wymaga sprzętu, którego się nie ma, albo gdy robi się coś raz w roku.",
        "Nie opłaca się wtedy, gdy różnica w efekcie jest duża, a krok krótki. Ser starty na miejscu i ser z torebki to dwie różne rzeczy, a starcie zajmuje minutę. Świeżo zmielony pieprz też. Nie opłaca się również wtedy, gdy płaci się głównie za opakowanie i za wodę — albo gdy produkt i tak trzeba potem poprawiać, czyli robi się tę samą robotę dwa razy.",
        "Jest jeszcze trzecia kategoria i o niej mówi się najrzadziej: rzeczy kupowane gotowe nie dlatego, że się nie umie, tylko po to, żeby obiad w ogóle powstał.",
        "Obiad zrobiony z gotowych elementów jest lepszy niż obiad, którego nie było. To zdanie wydaje mi się na tyle ważne, że powtarzam je klientkom dość często — i zwykle przynosi ulgę.",
        "Uczciwie o sprzęcie, bo tu jest realna zmiana. Urządzenie przesuwa tę granicę, ale jej nie kasuje. Kroki, za których pominięcie dotąd się płaciło — ucieranie, siekanie, mielenie, rozdrabnianie — stają się tanie w czasie, więc nagle opłaca się je odzyskać. To jest prawdziwy zysk i nie muszę go wyolbrzymiać.",
        "Ale zakupy, obieranie i mycie zostają po starej stronie i zostaną tam na zawsze. Pisałam osobno o tym, z ilu części naprawdę składa się tygodniowa robota wokół jedzenia — warto to policzyć, zanim się cokolwiek kupi.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łabiszynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co zwykle kupujesz gotowe — sprawdzimy na spotkaniu, które z tych rzeczy realnie opłaca się odzyskać, a które spokojnie mogą zostać jak są.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łabiszynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łabiszyńskiej rodziny",
      paragraphs: [
        "Łabiszyn leży na Pałukach nad Notecią, w powiecie żnińskim, jest miastem w gminie miejsko-wiejskiej i liczy ponad cztery tysiące mieszkańców na zaledwie dwóch i dziewięciu dziesiątych kilometra kwadratowego — blisko tysiąc pięćset osób na kilometr, najgęściej w okolicy; cała gmina ma ponad dziesięć i pół tysiąca osób w dwudziestu ośmiu wsiach. Prawa miejskie miasto dostało w 1369 roku, zamek na wyspie zbudowano w 1376, a własną pieczęć lakową miasto uzyskało w 1407. W 1458 roku wykupiło się z pewnych powinności i od tego czasu płaciło zamiast nich dwadzieścia cztery grosze rocznie. Czynsze płacono na świętego Marcina, 11 listopada: złoty i sześć groszy, osiemnaście groszy, dwanaście groszy oraz wiertel chmielu. Wśród tutejszych rzemieślników wymienia się szewców, młynarzy, piekarzy, kuśnierzy, zdunów, bednarzy, krawców, kowali, kołodziejów i ślusarzy — a piwowarzy jako jedyni pozostawali bez cechu. Rosnący tu „Dąb Jagiełły” ma pięć metrów trzydzieści pięć centymetrów obwodu. Droga wodna z Gopła przez Noteć do Kanału Bydgoskiego liczy sto czternaście i pół kilometra oraz sześć śluz pokonujących około czternastu metrów różnicy poziomów — śluza numer dwa znajduje się w Łabiszynie. W gminie stoi pałac w Lubostroniu z drugiej połowy XVIII wieku, otoczony parkiem o powierzchni dwudziestu ośmiu hektarów.",
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

  districtsHeading: "Do których części Łabiszyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — jest bardzo zwarte, niecałe trzy kilometry kwadratowe, więc wszędzie jest blisko. Dojeżdżam też do wsi w gminie, w tym do Lubostronia.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Łabiszyn też przyjadę",
  nearbyParagraphs: [
    "Barcin, Szubin, Żnin, Kcynia, Nakło nad Notecią, Pakość i Bydgoszcz są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Barcin", "Szubin", "Żnin", "Kcynia"],

  about: blokOMnie("do Łabiszyna", "w Łabiszynie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łabiszyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie, w tym do Lubostronia. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Łabiszyn jest miastem w gminie miejsko-wiejskiej w powiecie żnińskim.",
    },
    ...faqWspolne("w Łabiszynie"),
    {
      question: "Czy warto kupować obrane warzywa i starty ser?",
      answer:
        "Zależy od jednego: czy krok jest długi, a różnica w efekcie mała. Ciasto francuskie zajmuje pół dnia i kupione zwykle wystarcza. Ser starty na miejscu i ser z torebki to dwie różne rzeczy, a starcie zajmuje minutę — tam się nie opłaca. I trzecia kategoria, o której mówi się najrzadziej: czasem kupuje się gotowe po to, żeby obiad w ogóle powstał, a obiad z gotowych elementów jest lepszy niż obiad, którego nie było.",
    },
    {
      question: "Które kroki Thermomix pozwala odzyskać?",
      answer:
        "Te, które sam wykonuje: ucieranie, siekanie, mielenie, rozdrabnianie. Stają się tanie w czasie, więc nagle opłaca się robić je samemu zamiast kupować gotowe. Ale zakupy, obieranie i mycie zostają po starej stronie i zostaną tam na zawsze — to warto wiedzieć przed zakupem.",
    },
  ],

  geo: { lat: 52.9521, lng: 17.9197 },
};
