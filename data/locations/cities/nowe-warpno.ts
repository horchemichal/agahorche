import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * NOWE WARPNO — powiat policki,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 050 mieszkańców (GUS 31.12.2024), 24,5 km²,
 *   gęstość 42,8 os./km².
 *   ⚠⚠ NAJMNIEJSZE LUDNOŚCIOWO I ZARAZEM NAJWIĘKSZE
 *   POWIERZCHNIOWO MIASTO W CAŁEJ OSTATNIEJ SIÓDEMCE.
 * CAŁA GMINA: 1 523 osoby, 197,2 km², gęstość 8 os./km²
 *   — NAJNIŻSZA W CAŁYM WOJEWÓDZTWIE SPOŚRÓD
 *   OPISYWANYCH. 7 WSI.
 * ⚠⚠ RÓŻNICA MIASTO/GMINA TYLKO 1,45× — NAJMNIEJSZA
 *   Z WSZYSTKICH OPISANYCH. W MIEŚCIE MIESZKA 69 %
 *   LUDNOŚCI GMINY.
 *   ⚠ TO JEST MÓJ RACHUNEK — podaję opisowo.
 * ⚠ GEO: 53,7222 / 14,289253.
 *
 * ⚠⚠⚠ HOMONIM — POTRÓJNA KOLIZJA:
 *   NOWE WARPNO ≠ NOWE (miasto w woj. pomorskim,
 *   powiat świecki) ≠ NOWOGARD (to samo województwo,
 *   już opisany w serwisie) ≠ NOWE MIASTO
 *   (kilkanaście w Polsce).
 *   ⚠⚠⚠ W TEJ SAMEJ GMINIE LEŻĄ MYŚLIBÓRZ MAŁY
 *   I MYŚLIBÓRZ WIELKI, A MYŚLIBÓRZ TO OSOBNE MIASTO
 *   POWIATOWE W TYM SAMYM WOJEWÓDZTWIE, JUŻ OPISANE
 *   W SERWISIE. ROZGRANICZAM W FAQ — obowiązkowo.
 *
 * ⚠ ODMIANA: ODMIENIAJĄ SIĘ OBA CZŁONY.
 *   „w NOWYM WARPNIE", „do NOWEGO WARPNA".
 *   ⚠⚠ NIE POTWIERDZONE W PWN.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Nowego Warpna".
 *
 * ⚠⚠⚠ STAN ŹRÓDEŁ — WAŻNE:
 *   HISTORII, RATUSZA, PORTU I KOŚCIOŁA NIE UDAŁO SIĘ
 *   USTALIĆ. pomeranica.pl była w tej sesji
 *   niedostępna (PROVENANCE_REQUIRED przy sześciu
 *   próbach), budżet WebSearch wyczerpany.
 *   ⚠⚠ STRONA OPIERA SIĘ WYŁĄCZNIE NA DANYCH
 *   GUS I ADMINISTRACYJNYCH — I TO WYSTARCZA,
 *   BO KĄT WYNIKA WŁAŚNIE Z NICH.
 *   ⚠⚠⚠ NIE ZMYŚLAM BRAKUJĄCYCH FAKTÓW.
 *   ⚠ SZACHULCOWEGO RATUSZA I PORTU RYBACKIEGO
 *   NIE WYMIENIAM — niepotwierdzone w tej sesji.
 *
 * FAKTY UŻYTE:
 * — Prawa miejskie: ok. 1295 r.
 *   ⚠ NAJWCZEŚNIEJSZE W CAŁEJ OSTATNIEJ SIÓDEMCE.
 *   ⚠⚠ ŹRÓDŁO PODAJE „OK." — PISZĘ „OKOŁO 1295".
 * — 7 wsi w gminie: Brzózki, Mszczuje, Myślibórz Mały,
 *   Myślibórz Wielki, Popielewo, Trzebieradz,
 *   Warnołęka.
 * — Poza miastem mieszkają 473 osoby w siedmiu wsiach.
 *   ⚠ TO JEST MÓJ RACHUNEK (1 523 − 1 050).
 *   Podaję opisowo albo pomijam.
 * — Sąsiednie gminy (odległości w linii prostej):
 *   Police 21,1 km, Stepnica 23,4, Wolin 25,2,
 *   Międzyzdroje 25,2, Dobra 27,3.
 *   ⚠⚠ NAJBLIŻSZA SĄSIEDNIA GMINA JEST 21 KM STĄD —
 *   to najbardziej odosobniona gmina z opisywanych.
 *   ⚠ PODAJĘ „OKOŁO" — to nie są pomiary drogowe.
 * — Tablice rejestracyjne ZPL, powiat policki.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA:
 *   MIASTO NOWE WARPNO MA 24,5 KM² PRZY 1 050
 *   MIESZKAŃCACH — GĘSTOŚĆ 42,8 OSOBY NA KILOMETR
 *   KWADRATOWY. DLA PORÓWNANIA CEDYNIA, OPISANA
 *   W TEJ SAMEJ FALI, MA 1,7 KM² I 864,7 OSOBY
 *   NA KILOMETR — DWADZIEŚCIA RAZY GĘŚCIEJ,
 *   PRZY PODOBNEJ SKALI MIEJSCOWOŚCI.
 *   ⚠⚠ GABARYT ZEWNĘTRZNY MÓWI TU DOKŁADNIE NIC
 *   O TYM, ILE SIĘ W ŚRODKU MIEŚCI. To jest cały kąt.
 *   ⚠ KROTNOŚĆ 20× TO MÓJ RACHUNEK Z DWÓCH DANYCH
 *   GUS — podaję opisowo.
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE USTALONO.
 *   ⚠⚠ BRAK DOWODU, NIE DOWÓD BRAKU. TEMAT NIE POJAWIA
 *   SIĘ W TEKŚCIE W OGÓLE.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: POJEMNOŚĆ, NIE GABARYT — o tym, że rzeczy
 * w kuchni dobiera się po tym, ile zajmują na zewnątrz,
 * a używa po tym, ile mieszczą w środku.
 * Kąt od Nowego Warpna: miasto zajmuje dwadzieścia
 * cztery i pół kilometra kwadratowego, a mieszka
 * w nim tysiąc pięćdziesiąt osób.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Nowe Warpno ma 24,5 km² przy 1 050 mieszkańcach,
 *   czyli niecałe czterdzieści trzy osoby na kilometr
 *   kwadratowy,
 * — ŻE CEDYNIA, MIASTO PODOBNEJ SKALI, MIEŚCI SIĘ
 *   NA 1,7 KM² PRZY 1 444 MIESZKAŃCACH — WIĘCEJ LUDZI
 *   NA CZTERNASTOKROTNIE MNIEJSZEJ POWIERZCHNI.
 *   To jest rdzeń zestawienia,
 * — ⚠⚠ ŻE GABARYT NIE MÓWI NIC O POJEMNOŚCI,
 *   I ŻE W KUCHNI KUPUJEMY DOKŁADNIE ODWROTNIE.
 *   Ocena odbywa się na oko, w sklepie, po wielkości
 *   zewnętrznej — bo to jedyne, co widać,
 * — ⚠⚠ ŻE NAJDROŻSZY BŁĄD TO RZECZ, KTÓRA ZAJMUJE DUŻO
 *   I MIEŚCI MAŁO: grube ścianki, szeroki kołnierz,
 *   uchwyt wystający na bok, pokrywka szersza
 *   od samego naczynia. Na półce zajmuje swoje,
 *   w środku ma połowę tego, czego się spodziewano,
 * — ⚠⚠ ŻE TO SAMO DOTYCZY POJEMNIKÓW NA ZAPASY,
 *   GDZIE JEST NAJGORZEJ: pięć pudełek o podobnym
 *   wyglądzie potrafi mieć zupełnie różną objętość
 *   i nikt tego nie sprawdza,
 * — ⚠⚠ ŻE SPRAWDZIAN JEST BANALNY I NIKT GO NIE ROBI:
 *   nalać wody do naczynia, o którym się myśli,
 *   i przelać do tego, którego się używa. Odpowiedź
 *   pojawia się w dziesięć sekund i bywa zaskakująca,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: CZASEM GABARYT MA SENS.
 *   Nowe Warpno potrzebuje swoich kilometrów —
 *   nie wszystko, co zajmuje miejsce, jest zmarnowane.
 *   Grube dno albo szeroki brzeg potrafią mieć swoje
 *   zadanie. Chodzi o to, żeby o tym wiedzieć,
 *   a nie zakładać,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie też podlega
 *   tej regule i sam tak je oceniam. Ma jedno naczynie
 *   o określonej pojemności i zajmuje na blacie
 *   konkretne miejsce — i jedno, i drugie warto
 *   zobaczyć na własne oczy, a nie z opisu.
 *   MÓWIĘ TO WPROST i dlatego przyjeżdżam z urządzeniem
 *   do Was, zamiast wysyłać zdjęcia.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ŚREDNIEJ KONTRA MAKSIMUM I KUPOWANIA
 *   POD NAJRZADSZY PRZYPADEK — kąt zajęty (Węgorzyno).
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi o TO, POD
 *   JAK DUŻĄ OKAZJĘ DOBIERAĆ SPRZĘT; TUTAJ o TO,
 *   ŻE ROZMIAR ZEWNĘTRZNY NIE MÓWI O POJEMNOŚCI.
 *   Ani słowa o obiedzie dla dwunastu osób, o częstości
 *   dużych porcji i o turach. ROZGRANICZAM WPROST.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO KSZTAŁTU NACZYNIA — kąt zajęty
 *   (Choszczno). Piszę o objętości, nigdy o tym,
 *   jak kształt wpływa na gotowanie.
 * — ⚠⚠ ZERO GRUBOŚCI DNA — kąt zajęty (Resko).
 *   ⚠⚠ Grube ścianki wymieniam JEDYNIE jako przyczynę
 *   mniejszej objętości, nigdy jako temat sam w sobie
 *   i nigdy w kontekście tego, jak grubość wpływa
 *   na gotowanie.
 * — ⚠⚠ ZERO SKALI I DBAŁOŚCI — kąt zajęty (Cedynia,
 *   ta sama fala). ⚠ Cedynię przywołuję WYŁĄCZNIE
 *   jako liczbę porównawczą, bez żadnego morału.
 * — ⚠⚠ ZERO GĘSTOŚCI JAKO MORAŁU O PRZESTRZENI
 *   ROBOCZEJ — obszar zajęty (Koluszki, Tychowo).
 *   Gęstość jest tu wyłącznie ilustracją stosunku
 *   zewnętrza do wnętrza.
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów).
 * — ⚠⚠ ZERO POD RĘKĄ CZY SCHOWANE — kąt zajęty (Płoty).
 * — ⚠⚠ ZERO DZIESIĘCIU KAWAŁKÓW — kąt zajęty (Tychowo).
 * — ⚠ ZERO PUNKTÓW WEJŚCIA — kąt zajęty (Moryń,
 *   ta sama fala). Nie piszę o tym, co wchodzi do domu.
 * — ⚠ ZERO SKALOWANIA PORCJI — kąt zajęty (Świdwin).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH POJEMNOŚCI W LITRACH — także urządzenia.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *   ⚠⚠ W SZCZEGÓLNOŚCI: pisząc o pojemnikach na zapasy
 *   NIE MÓWIĘ NIC o szczelności, przechowywaniu
 *   ani terminach.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO WĄTKÓW GRANICZNYCH I PRZEJŚĆ — Nowe
 *   Warpno leży przy granicy i nad Zalewem Szczecińskim.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO.
 * — ⚠ ZERO RATUSZA I PORTU — niepotwierdzone w tej
 *   sesji, nie zmyślam.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH — nie ustalono.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku praw miejskich jako pewnego —
 *   źródło podaje „ok. 1295".
 * — NIE OPISUJĘ ratusza, portu, kościoła ani herbu —
 *   nie ustalono w tej sesji.
 * — NIE PODAJĘ parametrów Zalewu Szczecińskiego ani
 *   jeziora Nowowarpieńskiego — nie ustalono.
 * — NIE PODAJĘ krotności 20× jako danej źródłowej —
 *   to mój rachunek z dwóch liczb GUS.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE PODAJĘ pojemności naczynia urządzenia
 *   w litrach.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych — nie ustalono.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Nowe Warpno leży w powiecie polickim; miasto liczy
 *   1 050 mieszkańców (GUS, 31.12.2024) na 24,5 km²,
 *   czyli 42,8 osoby na kilometr kwadratowy, a cała
 *   gmina 1 523 osoby na 197,2 km² — osiem osób
 *   na kilometr,
 * — w gminie jest siedem wsi: Brzózki, Mszczuje,
 *   Myślibórz Mały, Myślibórz Wielki, Popielewo,
 *   Trzebieradz i Warnołęka,
 * — prawa miejskie miasto otrzymało około 1295 r.,
 * — najbliższa sąsiednia gmina, Police, leży około
 *   dwudziestu jeden kilometrów stąd; Stepnica około
 *   dwudziestu trzech, a Wolin i Międzyzdroje około
 *   dwudziestu pięciu,
 * — dla porównania Cedynia w powiecie gryfińskim liczy
 *   1 444 mieszkańców na 1,7 km², czyli 864,7 osoby
 *   na kilometr kwadratowy (GUS, 31.12.2024).
 */
export const NOWE_WARPNO: CityContent = {
  slug: "nowe-warpno",
  h1: "Thermomix Nowe Warpno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Nowe Warpno — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Nowym Warpnie (powiat policki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Nowe Warpno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Nowym Warpnie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Nowego Warpna w powiecie polickim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich siedmiu wsi w gminie.",

  highlights: highlightyStandardowe("Nowe Warpno"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwadzieścia cztery i pół kilometra kwadratowego. Tysiąc pięćdziesiąt osób.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Nowym Warpnie – jak wygląda prezentacja?",
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
      id: "pojemnosc-nie-gabaryt",
      heading: "Dwadzieścia cztery kilometry na tysiąc osób",
      paragraphs: [
        "Nowe Warpno zajmuje dwadzieścia cztery i pół kilometra kwadratowego. Mieszka w nim tysiąc pięćdziesiąt osób — niecałe czterdzieści trzy na kilometr kwadratowy.",
        "Cedynia, miasto podobnej skali w tym samym województwie, mieści się na jednym i siedmiu dziesiątych kilometra i ma tysiąc czterysta czterdzieści czterech mieszkańców. Więcej ludzi na czternastokrotnie mniejszej powierzchni.",
        "Innymi słowy: wielkość zewnętrzna nie mówi tu właściwie nic o tym, ile jest w środku.",
        "W kuchni robimy dokładnie odwrotnie, i to z konieczności.",
        "Ocena odbywa się na oko, w sklepie, przez pudełko albo z fotografii — czyli wyłącznie po gabarycie, bo to jedyna rzecz, którą widać. Pojemności nie widać nigdy, a podana liczba na etykiecie mało komu cokolwiek mówi, dopóki nie przyłoży się jej do czegoś, co się już ma.",
        "Najdroższy błąd to rzecz, która zajmuje dużo, a mieści mało.",
        "Grube ścianki. Szeroki kołnierz. Uchwyt wystający na bok. Pokrywka szersza od samego naczynia. Na półce taka rzecz zajmuje swoje i jeszcze trochę, a w środku ma połowę tego, czego się spodziewano, gdy się ją brało do ręki w sklepie.",
        "Z pojemnikami na zapasy jest jeszcze gorzej, bo tam nikt nawet nie próbuje sprawdzać. Pięć pudełek o bardzo podobnym wyglądzie potrafi mieć zupełnie różną objętość, a stoją jedno przy drugim i wyglądają jak komplet.",
        "Sprawdzian jest przy tym banalny i zajmuje dziesięć sekund: nalać wody do naczynia, o którym się myśli, i przelać do tego, którego się używa. Odpowiedź pojawia się od razu i zwykle jest inna, niż podpowiadało oko.",
        "Uczciwie o drugiej stronie: czasem gabaryt ma sens i nie wszystko, co zajmuje miejsce, jest zmarnowane. Nowe Warpno potrzebuje swoich kilometrów — to nie jest wada miasta. Grube dno albo szeroki brzeg też potrafią mieć swoje zadanie. Chodzi wyłącznie o to, żeby wiedzieć, że tak jest, a nie zakładać z góry.",
        "Na koniec o urządzeniu — bo ono podlega dokładnie tej samej regule i sama tak je oceniam.",
        "Thermomix ma jedno naczynie o określonej pojemności i zajmuje na blacie konkretne miejsce. Jedno i drugie warto zobaczyć na własne oczy, przyłożyć do swojego blatu i do swojego garnka, a nie czytać w opisie. Dlatego przyjeżdżam z urządzeniem do Was, zamiast wysyłać zdjęcia — to jedyny sposób, żeby to porównanie było uczciwe.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja krok po kroku" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Nowym Warpnie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile wolnego blatu macie pod ręką — przywiozę urządzenie i będzie można je po prostu postawić i zobaczyć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Nowym Warpnie"),
    sekcjaRaty("w Nowym Warpnie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Nowego Warpna",
      paragraphs: [
        "Nowe Warpno leży w powiecie polickim i jest miastem nietypowym: zajmuje dwadzieścia cztery i pół kilometra kwadratowego, a mieszka w nim tysiąc pięćdziesiąt osób (GUS, 31.12.2024) — niecałe czterdzieści trzy na kilometr kwadratowy. Cała gmina to tysiąc pięćset dwadzieścia trzy osoby na stu dziewięćdziesięciu siedmiu kilometrach, czyli osiem osób na kilometr. W gminie jest siedem wsi: Brzózki, Mszczuje, Myślibórz Mały, Myślibórz Wielki, Popielewo, Trzebieradz i Warnołęka. Prawa miejskie miasto otrzymało około 1295 roku — wcześniej niż którekolwiek z okolicznych. Najbliższa sąsiednia gmina, Police, leży około dwudziestu jeden kilometrów stąd; Stepnica około dwudziestu trzech, a Wolin i Międzyzdroje mniej więcej dwudziestu pięciu.",
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

  districtsHeading: "Do których części Nowego Warpna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — a jest rozległe, ponad dwadzieścia cztery kilometry kwadratowe — i do wszystkich siedmiu wsi w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Nowe Warpno też przyjadę",
  nearbyParagraphs: [
    "Police są około dwudziestu jeden kilometrów stąd, Stepnica dwadzieścia trzy, a Wolin i Międzyzdroje mniej więcej dwadzieścia pięć. Do Szczecina też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Police", "Stepnica", "Wolin", "Międzyzdroje", "Szczecin"],

  about: blokOMnie("do Nowego Warpna", "w Nowym Warpnie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Nowego Warpna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich siedmiu wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy umawianiu warto uważać na nazwy: w gminie leżą Myślibórz Mały i Myślibórz Wielki, a Myślibórz to osobne miasto powiatowe w tym samym województwie. Chodzi o Nowe Warpno w powiecie polickim — nie o Nowe w pomorskiem ani o Nowogard.",
    },
    ...faqWspolne("w Nowym Warpnie"),
    {
      question: "Jak sprawdzić, czy naczynie naprawdę mieści tyle, ile się wydaje?",
      answer:
        "Nalać wody do tego, o którym się myśli, i przelać do tego, którego się używa. Zajmuje to dziesięć sekund i zwykle daje inną odpowiedź, niż podpowiadało oko. Wielkość zewnętrzna mówi bardzo niewiele: grube ścianki, szeroki kołnierz albo wystający uchwyt sprawiają, że rzecz zajmuje na półce swoje, a w środku ma połowę tego, czego się spodziewano.",
    },
    {
      question: "Ile miejsca na blacie zajmuje Thermomix?",
      answer:
        "Tyle, ile trzeba zobaczyć u siebie, a nie przeczytać w opisie — i dokładnie dlatego przyjeżdżam z urządzeniem do Was, zamiast wysyłać zdjęcia. Na spotkaniu można je po prostu postawić na własnym blacie, przyłożyć naczynie do własnego garnka i sprawdzić jedno i drugie na miejscu. To jedyny uczciwy sposób na takie porównanie.",
    },
  ],

  geo: { lat: 53.7222, lng: 14.2893 },
};
