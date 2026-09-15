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
 * ŻNIN — powiat żniński, woj. kujawsko-pomorskie, PAŁUKI.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 12 944 mieszkańców (GUS 31.12.2024), 8,4 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 22 726 osób.
 * ⚠ NIE MIESZAM TYCH DWÓCH LICZB. TWARDA GRANICA.
 * ⚠ ODMIANA: D. ŻNINA, Ms. W ŻNINIE, przym. ŻNIŃSKI.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — miasto na Pałukach, siedziba powiatu żnińskiego,
 * — ⚠⚠ RDZEŃ KĄTA — ŻNIŃSKA KOLEJ WĄSKOTOROWA:
 *   uruchomiona w 1894 r., ROZSTAW SZYN 600 MM.
 *   Normalny tor w Polsce ma 1435 mm — ten jest
 *   MNIEJ WIĘCEJ DWA I PÓŁ RAZA WĘŻSZY.
 *   Zbudowano ją WĄSKĄ CELOWO: wąski tor jest tańszy
 *   w budowie i pozwala na CIAŚNIEJSZE ŁUKI, więc kolej
 *   mogła wjechać tam, gdzie normalna by się nie zmieściła.
 *   Wożono nią buraki cukrowe i płody rolne; dziś kursuje
 *   jako kolej turystyczna.
 *   ⚠ TO JEST CAŁY FUNDAMENT KĄTA: NARZĘDZIE DOBRANE
 *   DO ROZMIARU ZADANIA, A NIE DO WYOBRAŻENIA O NIM.
 * — w mieście działała cukrownia uruchomiona w sezonie
 *   1893/94 ⚠⚠ ZERO JEJ LOSÓW I ZERO DATY ZAMKNIĘCIA —
 *   patrz sekcja etyczna. TWARDA GRANICA.
 *   ⚠⚠ ZERO KRYSTALIZACJI I ZERO TECHNOLOGII CUKRU —
 *   TEN KĄT JEST ZAJĘTY (Chełmża). TWARDA GRANICA.
 * — od 1951 r. działa w mieście zakład produkujący maszyny
 *   dla piekarnictwa ⚠⚠ BEZ NAZWY FIRMY, JEDNO ZDANIE.
 *
 * ⚠⚠ ETYMOLOGIA NAZWY: wywodzona od „żnieja/żniejka",
 *   czyli żniwiarki. ⚠ NIE UŻYWAM — kąt „ŻNIWA" jest
 *   zajęty (Mordy), a rozwijanie etymologii poszłoby
 *   dokładnie w tamtą stronę. TWARDA GRANICA.
 *
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: ZA DUŻE NACZYNIE DO MAŁEJ PORCJI.
 * Kąt od rozstawu 600 mm: kolej zbudowano wąską nie dlatego,
 * że nie było stać na szerszą, tylko dlatego, że wąska
 * była właściwa do tego, co miała robić. W kuchni robimy
 * odwrotnie — gotujemy pół porcji w największym garnku,
 * jaki mamy, i potem dziwimy się efektowi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kolej żnińska ma rozstaw szyn 600 mm, czyli ponad
 *   dwa razy węższy niż normalny tor; że zrobiono to
 *   celowo, bo wąski tor jest tańszy i wchodzi w ciaśniejsze
 *   łuki — narzędzie dobrano do zadania,
 * — ŻE W KUCHNI ROBIMY ODWROTNIE: mamy jeden duży garnek
 *   i jedną dużą patelnię, i używamy ich do wszystkiego,
 *   niezależnie od ilości,
 * — ⚠⚠ CO SIĘ REALNIE DZIEJE, GDY NACZYNIE JEST ZA DUŻE —
 *   TO JEST RDZEŃ TEKSTU:
 *   — SOS W SZEROKIM GARNKU ODPAROWUJE ZA SZYBKO, bo ma
 *     dużą powierzchnię; ten sam sos w wąskim naczyniu
 *     gotuje się dłużej i nie znika,
 *   — MAŁA ILOŚĆ NA DUŻEJ PATELNI NIE PRZYKRYWA DNA, więc
 *     tłuszcz w pustych miejscach przypala się, zanim
 *     jedzenie zdąży się zrobić,
 *   — ZA TO ZBYT DUŻO NA ZA MAŁEJ PATELNI DAJE EFEKT
 *     ODWROTNY: produkt puszcza wodę, woda nie ma gdzie
 *     odparować i zamiast smażenia wychodzi duszenie
 *     ⚠ TO SAMO ZJAWISKO Z DRUGIEJ STRONY,
 * — ŻE W KAŻDYM NACZYNIU I W KAŻDYM URZĄDZENIU ISTNIEJE
 *   ILOŚĆ MINIMALNA, PONIŻEJ KTÓREJ ONO PO PROSTU
 *   NIE PRACUJE — i o tym prawie nikt nie mówi,
 * — ⚠ UCZCIWIE O SPRZĘCIE — TO MUSI PAŚĆ WPROST:
 *   THERMOMIX MA DOLNĄ GRANICĘ. Poniżej pewnej ilości
 *   ostrza kręcą się w powietrzu, bo produkt rozjeżdża się
 *   po ściankach i nie wraca na dół. Bardzo małej ilości
 *   nie zmiksuje dobrze i to jest fizyka, nie wada
 *   egzemplarza. Mówię to na prezentacji, zanim ktoś
 *   sprawdzi to sam w domu.
 *   ⚠ CO Z TYM ZROBIĆ: robić większą porcję i odłożyć,
 *   albo użyć mniejszego narzędzia — i jedno, i drugie
 *   jest normalne,
 * — ŻE TO NIE JEST ARGUMENT PRZECIWKO URZĄDZENIU, TYLKO
 *   ZA ZNAJOMOŚCIĄ JEGO ZAKRESU. Wąski tor też nie wozi
 *   węgla ciężarami — i nikt nie ma o to do niego
 *   pretensji.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO KRYSTALIZACJI, ZERO CUKROWNICTWA JAKO TEMATU —
 *   kąt zajęty (Chełmża). Cukrownia pojawia się WYŁĄCZNIE
 *   jako data w rysie historycznym. TWARDA GRANICA.
 * — ⚠⚠ ZERO ŻNIW I ZERO ETYMOLOGII NAZWY — kąt zajęty
 *   (Mordy). TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO ZAMKNIĘCIA CUKROWNI I ZERO JEJ LOSÓW.
 *   Cukrownia działała od sezonu 1893/94 i była przez sto lat
 *   głównym pracodawcą — jej koniec to dla miasta temat
 *   ciężki i świeży. Podaję WYŁĄCZNIE datę uruchomienia,
 *   bez jednego słowa o tym, co było dalej.
 *   TWARDA GRANICA — NAJWAŻNIEJSZA NA TEJ STRONIE.
 * — ZERO wątków wojennych i okupacyjnych.
 * — ZERO wątków wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 * — ZERO nazw firm.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „SKALA I POJEMNOŚĆ" (Gniezno) dotyczy GOTOWANIA
 *   DUŻYCH ILOŚCI — górnej granicy. ⚠ TUTAJ chodzi
 *   o DOLNĄ GRANICĘ. To są dwa końce tej samej osi
 *   i tak to rozgraniczam. Odsyłam tam wprost.
 * — „GOTOWANIE DLA JEDNEJ OSOBY" (Lubań) dotyczy SYTUACJI
 *   ŻYCIOWEJ — kto gotuje sam i jak sobie z tym radzi.
 *   ⚠ TUTAJ chodzi o FIZYKĘ NACZYNIA, nie o sytuację.
 * — „GOTOWANIE NA ZAPAS" (Stopnica) dotyczy ODKŁADANIA
 *   PORCJI DO ZAMRAŻARKI.
 * — „SZUFLADA" (Lipno) dotyczy LICZBY NARZĘDZI.
 * TUTAJ chodzi o ROZMIAR NACZYNIA WZGLĘDEM ILOŚCI JEDZENIA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczby mieszkańców miasta i całej gminy.
 * — NIE PISZĘ, co stało się z cukrownią.
 * — NIE PODAJĘ nazwy zakładu maszyn piekarskich.
 * — NIE ROZWIJAM etymologii nazwy miasta.
 * — NIE PODAJĘ żadnej konkretnej minimalnej ilości
 *   w gramach ani mililitrach — mówię, że granica istnieje.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Żnin leży na Pałukach, jest siedzibą powiatu żnińskiego
 *   i liczy 12 944 mieszkańców (GUS, 31.12.2024) na ośmiu
 *   i czterech dziesiątych kilometra kwadratowego; cała
 *   gmina miejsko-wiejska ma 22 726 osób,
 * — Żnińska Kolej Powiatowa ruszyła w 1894 roku i ma
 *   rozstaw szyn 600 milimetrów, przy normalnym torze
 *   o rozstawie 1435 milimetrów; wąski tor był tańszy
 *   w budowie i pozwalał na ciaśniejsze łuki, a wożono nią
 *   buraki cukrowe i płody rolne — dziś kursuje jako kolej
 *   turystyczna,
 * — w sezonie 1893/94 uruchomiono w mieście cukrownię,
 * — od 1951 roku działa tu zakład produkujący maszyny
 *   dla piekarnictwa.
 */
export const ZNIN: CityContent = {
  slug: "znin",
  h1: "Thermomix Żnin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żnin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Żninie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żnin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żninie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żnina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Żnin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Każde naczynie ma ilość, poniżej której przestaje pracować.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żninie – jak wygląda prezentacja?",
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
      id: "rozmiar-naczynia",
      heading: "Sześćset milimetrów, czyli dobrany rozmiar",
      paragraphs: [
        "Żnińska kolej wąskotorowa ruszyła w 1894 roku i ma rozstaw szyn sześćset milimetrów. Normalny tor w Polsce ma tysiąc czterysta trzydzieści pięć — ten jest ponad dwa razy węższy. I nie zrobiono tego z biedy. Wąski tor był tańszy w budowie i, co ważniejsze, pozwalał na ciaśniejsze łuki, więc kolej mogła wjechać tam, gdzie normalna by się nie zmieściła. Woziła buraki i płody rolne, dziś wozi turystów.",
        "Narzędzie dobrano do rozmiaru zadania. W kuchni robimy dokładnie odwrotnie.",
        "Mamy jeden duży garnek, jedną dużą patelnię i używamy ich do wszystkiego, niezależnie od tego, czy gotujemy dla sześciu osób, czy podgrzewamy resztkę dla siebie. A naczynie nie jest neutralne — ono uczestniczy w gotowaniu.",
        "Sos w szerokim garnku odparowuje za szybko, bo ma dużą powierzchnię styku z powietrzem. Ten sam sos w wąskim, wysokim naczyniu będzie się gotował dłużej i nie zniknie. Jeśli kiedyś z pół litra sosu zostały cztery łyżki, a przecież „wcale długo nie stał” — to nie był błąd czasu, tylko błąd naczynia.",
        "Mała ilość na dużej patelni nie przykrywa dna. Tłuszcz w pustych miejscach zostaje bez niczego i przypala się, zanim jedzenie zdąży się zrobić. Dlatego dwa kotleciki na patelni do naleśników wychodzą gorzej niż sześć.",
        "I ta sama rzecz z drugiej strony: zbyt dużo na zbyt małej patelni daje efekt odwrotny. Produkt puszcza wodę, woda nie ma gdzie odparować i zamiast smażenia dostajemy duszenie. Ten sam kotlet, ta sama temperatura, inny efekt — bo zmieniła się powierzchnia.",
        "Z tego wynika rzecz, o której prawie nikt nie mówi: każde naczynie i każde urządzenie ma ilość minimalną, poniżej której po prostu nie pracuje.",
        "Dotyczy to też Thermomixa i mówię to na prezentacji, zanim ktoś sprawdzi sam w domu. Poniżej pewnej ilości ostrza kręcą się właściwie w powietrzu — produkt rozjeżdża się po ściankach naczynia i nie wraca na dół. Bardzo małej porcji nie zmiksuje dobrze i to jest fizyka wirującego noża, a nie wada konkretnego egzemplarza.",
        "Co z tym zrobić? Albo zrobić większą porcję i część odłożyć, albo sięgnąć po mniejsze narzędzie. Jedno i drugie jest normalne i obie odpowiedzi są uczciwe.",
        "To nie jest argument przeciwko urządzeniu, tylko za znajomością jego zakresu — o górnej granicy, czyli o gotowaniu naprawdę dużych ilości, pisałam osobno przy innym mieście. Wąski tor pod Żninem też nie wozi węgla całymi składami i nikt nie ma o to do niego pretensji. Wie, do czego został zbudowany.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żninie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, dla ilu osób zwykle gotujesz — to realnie zmienia to, co warto pokazać, i pozwala uczciwie omówić obie granice: dolną i górną.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żninie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla żnińskiej rodziny",
      paragraphs: [
        "Żnin leży na Pałukach, jest siedzibą powiatu żnińskiego i liczy blisko trzynaście tysięcy mieszkańców na niecałych ośmiu i pół kilometra kwadratowego; cała gmina miejsko-wiejska ma ponad dwadzieścia dwa tysiące osób. W 1894 roku ruszyła tu kolej wąskotorowa o rozstawie szyn sześciuset milimetrów, przy normalnym torze o rozstawie tysiąca czterystu trzydziestu pięciu — wąski tor był tańszy w budowie i pozwalał na ciaśniejsze łuki, a woził buraki cukrowe i płody rolne; dziś kursuje jako kolej turystyczna. W sezonie 1893/94 uruchomiono w mieście cukrownię, a od 1951 roku działa tu zakład produkujący maszyny dla piekarnictwa.",
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

  districtsHeading: "Do których części Żnina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i okolic jezior po osiedla przy wylotach dróg. Dojeżdżam też do wsi w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Żnin też przyjadę",
  nearbyParagraphs: [
    "Barcin, Łabiszyn, Kcynia, Szubin, Mogilno, Janikowo i Gniezno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Barcin", "Łabiszyn", "Kcynia", "Szubin"],

  about: blokOMnie("do Żnina", "w Żninie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żnina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Żnin jest miastem w gminie miejsko-wiejskiej i siedzibą powiatu — przyjeżdżam wszędzie na tych samych zasadach.",
    },
    ...faqWspolne("w Żninie"),
    {
      question: "Czy Thermomix poradzi sobie z bardzo małą porcją?",
      answer:
        "Poniżej pewnej ilości nie. Ostrza kręcą się wtedy właściwie w powietrzu, bo produkt rozjeżdża się po ściankach i nie wraca na dół — to fizyka wirującego noża, a nie wada egzemplarza. Mówię to wprost, zanim ktoś sprawdzi sam w domu. Wyjście jest proste: zrobić większą porcję i część odłożyć albo sięgnąć po mniejsze narzędzie.",
    },
    {
      question: "Czy rozmiar garnka naprawdę zmienia efekt?",
      answer:
        "Zmienia i to bardzo. Sos w szerokim garnku odparowuje szybciej, bo ma większą powierzchnię — ten sam sos w wąskim, wysokim naczyniu nie zniknie. Mała ilość na dużej patelni nie przykrywa dna, więc tłuszcz w pustych miejscach się przypala. A za dużo na za małej patelni daje odwrotnie: produkt puszcza wodę, woda nie ma gdzie odparować i zamiast smażenia wychodzi duszenie.",
    },
  ],

  geo: { lat: 52.8494, lng: 17.7196 },
};
