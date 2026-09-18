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
 * ZBĄSZYNEK — gmina miejsko-wiejska w powiecie świebodzińskim.
 * GMINA 8 040 (GUS 31.12.2024), 94,1 km².
 * ⚠⚠ LUDNOŚCI MIASTA NIE PODAJĘ DOKŁADNIE — ŹRÓDŁA SPRZECZNE
 * PRZY TEJ SAMEJ DACIE: 4 861 (portal statystyczny) kontra
 * 4 665 (oficjalna strona gminy), oba na 31.12.2024.
 * Piszę „blisko pięć tysięcy".
 * ⚠ LICZBY WSI NIE PODAJĘ — sprzeczność (pięć kontra dwanaście).
 *
 * ⚠⚠ HOMONIM KRYTYCZNY: ZBĄSZYNEK (lubuskie, powiat
 * świebodziński) ≠ ZBĄSZYŃ (wielkopolskie, powiat
 * nowotomyski). TO DWA RÓŻNE, SĄSIADUJĄCE MIASTA.
 * ZBĄSZYŃ: wzmianka 1231, prawa miejskie przed 1311,
 * Jezioro Zbąszyńskie, twierdza Ciświckich od 1613.
 * ZBĄSZYNEK: osada kolejowa z lat 20. XX w., prawa miejskie
 * 1945, nazwa niemiecka Neu Bentschen („Nowy Zbąszyń").
 * ⚠⚠ NICZEGO ZE ZBĄSZYNIA NIE PRZYPISUJĘ ZBĄSZYNKOWI.
 * Dziś są miastami partnerskimi i oba należą do Regionu Kozła.
 * FAQ to rozróżnia.
 *
 * ⚠⚠ GENEZA MIASTA — PODSTAWA KĄTA:
 * ZBĄSZYNEK ZBUDOWANO OD ZERA, NA POLACH WSI KOSIECZYN,
 * jako zastępczy węzeł i stację kolejową.
 * Inwestycja z 1922 r., pozwolenie na budowę 27 lipca 1923 r.,
 * budowa stacji i osiedla dla kolejarzy 1923–1930.
 * OFICJALNA DATA LOKACJI OSIEDLA: 15 LUTEGO 1924 r.
 * ⚠ RÓŻNE DATY (1922/1923/1924) TO RÓŻNE ETAPY — podaję je
 *   jako etapy, nie jako sprzeczność.
 * ⚠⚠ PRZYCZYNY POWSTANIA (traktat, granica, strona niemiecka)
 * NIE OPISUJĘ — to temat graniczny, wykluczony w całym
 * serwisie. Piszę WYŁĄCZNIE, że miasto zbudowano od zera
 * jako osadę kolejową na polach wsi Kosieczyn.
 * Nazwa urzędowa „Nowy Zbąszyń" obowiązywała do 1949 r.
 * PRAWA MIEJSKIE 1945 r. ⚠ Nie ma tu utraty ani przywrócenia
 *   — przed 1924 r. miasto w ogóle nie istniało.
 * ZBĄSZYNEK LEŻY NA OBSZARZE HISTORYCZNEJ WIELKOPOLSKI,
 * mimo przynależności do województwa lubuskiego.
 *
 * ⚠⚠ URBANISTYKA — KOTWICA KĄTA:
 * Osiedle kolejarskie zaprojektował FRIEDRICH VEIL według
 * zasad MIASTA-OGRODU; dworzec, dom kultury i oba kościoły
 * zaprojektował WILHELM BERINGER. Zabudowa SZEREGOWA, NISKA,
 * Z DUŻYMI OGRODAMI, komponowana wokół dzisiejszego PLACU
 * WOLNOŚCI. ⚠⚠ DOMY OD POCZĄTKU MIAŁY WODOCIĄG, KANALIZACJĘ
 * I ELEKTRYCZNOŚĆ — jak na międzywojnie wyjątkowe.
 * TO JEST KOTWICA.
 *
 * ZABYTKI: DWORZEC KOLEJOWY z 1923 r. i HISTORYCZNY UKŁAD
 * URBANISTYCZNY wpisane jako zabytki; wieża ciśnień; parowóz
 * Tp3-36; modernistyczny dom kultury; DWA KOŚCIOŁY z lat
 * 1928–1929.
 * KOŚCIÓŁ DREWNIANY W KOSIECZYNIE — badania dendrochronologiczne
 * z 2006 r.: najstarsza próbka drewna z 1345 r., nawa
 * i prezbiterium z 1389, wieża z 1431; konstrukcja zrębowa
 * z sosny.
 * ⚠⚠ OKREŚLENIA „NAJSTARSZY DREWNIANY KOŚCIÓŁ W EUROPIE"
 * NIE UŻYWAM — jedno źródło prasowe. Piszę „jeden
 * z najstarszych drewnianych kościołów w Polsce".
 * Drugi drewniany kościół — w Chlastawie. Barokowy dwór
 * z XVIII w. w Kosieczynie; neorenesansowy pałac w Dąbrówce
 * Wielkopolskiej.
 *
 * REGION KOZŁA — stowarzyszenie zawiązane jesienią 1995 r.;
 * trzy gminy w wielkopolskim, cztery w lubuskim, w tym
 * Zbąszynek. Nazwa od kozła — dud regionalnych. Zespół Pieśni
 * i Tańca gminy występuje za granicą.
 * „JARMARK Z JAJEM" w KOSIECZYNIE — XII edycja 19 marca
 * 2017 r., z konkursem na najlepszą potrawę z jaja i konkursem
 * na koszyczek wielkanocny; uczestniczą koła gospodyń
 * wiejskich z kilku gmin.
 * ⚠ KĄTA JAJECZNEGO NIE UŻYWAM — „jajka" ZAJĘTE.
 * ⚠ NIE TWIERDZĘ, że jarmark odbywa się nadal.
 * DNI ZBĄSZYNKA — impreza cykliczna Zbąszyneckiego Ośrodka
 * Kultury. ⚠ NUMERU EDYCJI ANI TERMINU NIE PODAJĘ.
 * ⚠ ZAKŁADU MEBLARSKIEGO I JEGO WŁAŚCICIELA NIE WYMIENIAM
 *   — ŻADNYCH NAZW FIRM.
 *
 * KĄT: ŚWIATŁO PRZY BLACIE — CZY W OGÓLE WIDZISZ, CO ROBISZ.
 * Kąt od miasta zaprojektowanego od zera, w którym domy
 * od pierwszego dnia miały wodociąg, kanalizację
 * i elektryczność — czyli od miejsca, gdzie wygodę
 * zaplanowano, zamiast ją odziedziczyć.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że oświetlenie kuchni to jedyny element wyposażenia,
 *   o którym nie myśli prawie nikt, a używa się go
 *   przy każdej czynności,
 * — ŻE GŁÓWNA LAMPA POD SUFITEM JEST ZA PLECAMI OSOBY
 *   STOJĄCEJ PRZY BLACIE — i dlatego pracuje się we własnym
 *   cieniu, dokładnie tam, gdzie leży deska i nóż,
 * — ŻE TO NIE JEST KWESTIA ESTETYKI, tylko bezpieczeństwa
 *   i jakości: w cieniu kroi się gorzej i mniej równo,
 * — ROZWIĄZANIE, KTÓRE KOSZTUJE NIEWIELE: osobne światło
 *   pod górnymi szafkami, skierowane na blat,
 * — ŻE BARWA ŚWIATŁA ZMIENIA WYGLĄD JEDZENIA: w ciepłym,
 *   żółtym świetle wszystko wygląda bardziej rumiane,
 *   więc mięso wydaje się gotowe wcześniej, niż jest,
 *   a ciasto bardziej upieczone,
 * — ŻE W TAKIM ŚWIETLE NIE DA SIĘ OCENIĆ KOLORU SOSU
 *   ANI STOPNIA ZRUMIENIENIA — a to są sygnały, po których
 *   gotujemy,
 * — PRAKTYCZNY NAWYK: rzeczy, których kolor ma znaczenie,
 *   wynosi się na chwilę pod inne światło albo do okna,
 * — ŻE ŚWIATŁO DZIENNE JEST NAJUCZCIWSZE i dlatego blat
 *   przy oknie jest wart więcej niż jakikolwiek gadżet,
 * — ŻE TO SAMO DOTYCZY FOTOGRAFOWANIA JEDZENIA — ale
 *   wspominam o tym jednym zdaniem,
 * — UCZCIWIE: urządzenie nie ma z tym nic wspólnego i żadna
 *   jego funkcja światła nie zastąpi,
 * — ale jedną rzecz warto sprawdzić przed zakupem: gdzie
 *   dokładnie stanie i czy w tym miejscu w ogóle widać,
 *   co się robi — bo najczęściej ustawia się je tam, gdzie
 *   jest wolne gniazdko, a nie tam, gdzie jest światło.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PARAMETRÓW TECHNICZNYCH OŚWIETLENIA: zero lumenów,
 *   zero kelwinów, zero watów. Piszę „ciepłe", „zimne",
 *   „jasne". TWARDA GRANICA.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH (wzrok, zmęczenie oczu —
 *   POMIJAM CAŁKOWICIE).
 * — ⚠ ŻADNYCH PORAD ELEKTRYCZNYCH I MONTAŻOWYCH. Nie mówię,
 *   jak podłączyć oświetlenie.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO ZACHĘTY DO ALKOHOLU.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych. ⚠⚠ PRZY TYM MIEŚCIE
 *   SZCZEGÓLNIE: geneza Zbąszynka jest ściśle graniczna
 *   i NIE OPISUJĘ JEJ. Piszę tylko, że zbudowano go od zera
 *   jako osadę kolejową.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Układ kuchni — co gdzie
 * stoi" dotyczy rozmieszczenia sprzętów i ciągów roboczych.
 * „Mała kuchnia i blat" dotyczy braku miejsca. „Kuchnia
 * na wymiar" i „kuchnia, której się nie wybierało" dotyczą
 * zabudowy. „Zaprojektowane naraz kontra dokładane po kolei"
 * dotyczy kolejności wyposażania. „Kolor jedzenia" dotyczy
 * tego, co dzieje się z warzywami przy gotowaniu. Tutaj chodzi
 * wyłącznie o ŚWIATŁO: o cień na desce i o to, że przy ciepłym
 * świetle nie widać, czy coś jest już zrumienione.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dokładnej liczby mieszkańców miasta.
 * — NIE PODAJĘ liczby wsi gminy.
 * — NIE OPISUJĘ przyczyn powstania miasta.
 * — NIE NAZYWAM kościoła w Kosieczynie najstarszym w Europie.
 * — NIE PRZYPISUJĘ Zbąszynkowi historii Zbąszynia.
 * — NIE TWIERDZĘ, że „Jarmark z jajem" odbywa się nadal.
 * — NIE PODAJĘ numeru edycji Dni Zbąszynka.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina liczy ponad osiem tysięcy mieszkańców na 94,1 km²,
 *   a samo miasto blisko pięć tysięcy,
 * — Zbąszynek zbudowano od zera na polach wsi Kosieczyn jako
 *   osadę kolejową: inwestycja z 1922 r., pozwolenie
 *   na budowę z 27 lipca 1923 r., budowa stacji i osiedla
 *   dla kolejarzy w latach 1923–1930, a oficjalna data lokacji
 *   osiedla to 15 lutego 1924 r.; prawa miejskie otrzymał
 *   w 1945, a nazwa urzędowa „Nowy Zbąszyń” obowiązywała
 *   do 1949 r. Miasto leży na obszarze historycznej
 *   Wielkopolski, mimo przynależności do województwa
 *   lubuskiego,
 * — osiedle kolejarskie zaprojektował Friedrich Veil według
 *   zasad miasta-ogrodu, a dworzec, dom kultury i oba
 *   kościoły — Wilhelm Beringer; zabudowa jest szeregowa
 *   i niska, z dużymi ogrodami, skomponowana wokół
 *   dzisiejszego Placu Wolności, a domy od początku miały
 *   wodociąg, kanalizację i elektryczność,
 * — dworzec z 1923 r. i historyczny układ urbanistyczny są
 *   wpisane do rejestru zabytków; stoją tu także wieża
 *   ciśnień, parowóz Tp3-36, modernistyczny dom kultury
 *   i dwa kościoły z lat 1928–1929,
 * — drewniany kościół w Kosieczynie należy do najstarszych
 *   w Polsce: badania dendrochronologiczne z 2006 r. wykazały,
 *   że najstarsza próbka drewna pochodzi z 1345 r., nawa
 *   i prezbiterium z 1389, a wieża z 1431; drugi drewniany
 *   kościół stoi w Chlastawie, w Kosieczynie jest też barokowy
 *   dwór z XVIII w., a w Dąbrówce Wielkopolskiej neorenesansowy
 *   pałac,
 * — gmina należy do zawiązanego jesienią 1995 r. Regionu
 *   Kozła, którego nazwa pochodzi od regionalnych dud;
 *   działa tu Zespół Pieśni i Tańca występujący za granicą,
 *   a w Kosieczynie organizowano „Jarmark z jajem” z konkursem
 *   na najlepszą potrawę z jaja — dwunasta edycja odbyła się
 *   19 marca 2017 r.; Zbąszynecki Ośrodek Kultury organizuje
 *   też Dni Zbąszynka.
 */
export const ZBASZYNEK: CityContent = {
  slug: "zbaszynek",
  h1: "Thermomix Zbąszynek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zbąszynek — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Zbąszynku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zbąszynek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zbąszynku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zbąszynka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Zbąszynek i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Główna lampa świeci Ci w plecy — a deska leży w cieniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zbąszynku – jak wygląda prezentacja?",
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
      id: "swiatlo",
      heading: "Miasto zaprojektowane od zera — czyli o świetle przy kuchennym blacie",
      paragraphs: [
        "Zbąszynek jest miastem rzadkiego rodzaju: zbudowano go od zera, na polach wsi Kosieczyn, jako osadę kolejową. Lokację osiedla datuje się na 15 lutego 1924 roku, a stację i domy dla kolejarzy stawiano przez kolejne lata. Osiedle zaprojektował Friedrich Veil według zasad miasta-ogrodu — niska zabudowa szeregowa z dużymi ogrodami wokół dzisiejszego Placu Wolności. I rzecz na tamte czasy wyjątkowa: domy od pierwszego dnia miały wodociąg, kanalizację i elektryczność.",
        "Wygodę można więc zaplanować albo odziedziczyć. W kuchniach zwykle dziedziczymy, i najlepiej widać to po jednym elemencie, o którym nie myśli prawie nikt, a używa się go przy każdej czynności: po świetle.",
        "Zacznijmy od rzeczy, którą łatwo sprawdzić dziś wieczorem. Główna lampa wisi pod sufitem, mniej więcej na środku kuchni. Kiedy stoisz przy blacie, masz ją za plecami — i pracujesz we własnym cieniu, dokładnie w tym miejscu, gdzie leży deska i nóż.",
        "To nie jest kwestia estetyki ani wygody. W cieniu kroi się gorzej i mniej równo, a nierówne kawałki gotują się nierówno — o czym pisałam już przy innych okazjach. Do tego nóż i cień to połączenie, którego nikt nie chce.",
        "Rozwiązanie kosztuje niewiele i jest zawsze to samo: osobne światło pod górnymi szafkami, skierowane wprost na blat. To najtańsza zmiana w kuchni, jaką znam, i jedna z niewielu, które czuć od pierwszego dnia.",
        "Druga sprawa jest subtelniejsza i dotyczy już samego gotowania: barwa światła zmienia wygląd jedzenia. W ciepłym, żółtym świetle wszystko wygląda bardziej rumiane, niż jest. Mięso wydaje się gotowe wcześniej, ciasto bardziej upieczone, sos ciemniejszy.",
        "A przecież właśnie po kolorze oceniamy bardzo wiele: czy zasmażka jest już złota, czy cebula się nie przypaliła, czy ciasto jest gotowe. W ciepłym świetle tych sygnałów po prostu nie da się odczytać uczciwie.",
        "Stąd nawyk, który polecam: rzeczy, których kolor ma znaczenie, wynieś na chwilę pod inne światło albo do okna. Dwie sekundy, a czasem ratuje danie — zwłaszcza przy pieczeniu, gdzie różnica między złotym a brązowym jest różnicą między udanym a nie.",
        "Światło dzienne jest w tym wszystkim najuczciwsze i dlatego blat przy oknie wart jest więcej niż niejeden gadżet kuchenny. Jeśli masz wybór, gdzie kroić — kroj tam. To samo zresztą dotyczy fotografowania jedzenia, o czym wie każdy, kto próbował zrobić zdjęcie obiadu o dwudziestej.",
        "Teraz uczciwie o sprzęcie. Thermomix nie ma z tym wszystkim nic wspólnego i żadna jego funkcja nie zastąpi światła nad blatem.",
        "Jedną rzecz warto jednak sprawdzić, zanim się go kupi, i mało kto o tym myśli: gdzie dokładnie stanie i czy w tym miejscu w ogóle widać, co się robi. Urządzenia ustawia się zwykle tam, gdzie jest wolne gniazdko — a nie tam, gdzie jest światło. Potem przez lata zagląda się do naczynia w półmroku i zastanawia, czemu nic nie widać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zbąszynku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, gdzie w kuchni jest wolne gniazdko i czy pada tam światło. Od tego zależy, gdzie ustawimy urządzenie na czas spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zbąszynku"),
    sekcjaRaty("w Zbąszynku"),
    {
      id: "rodzina",
      heading: "Thermomix dla zbąszyneckiej rodziny",
      paragraphs: [
        "Gmina liczy ponad osiem tysięcy mieszkańców na dziewięćdziesięciu czterech kilometrach kwadratowych, a samo miasto blisko pięć tysięcy. Zbąszynek zbudowano od zera, na polach wsi Kosieczyn, jako osadę kolejową: inwestycję podjęto w 1922 roku, pozwolenie na budowę wydano 27 lipca 1923, stację i osiedle dla kolejarzy stawiano w latach 1923–1930, a oficjalna data lokacji osiedla to 15 lutego 1924. Prawa miejskie otrzymał w 1945 roku, a urzędowa nazwa „Nowy Zbąszyń” obowiązywała do 1949; miasto leży na obszarze historycznej Wielkopolski, mimo przynależności do województwa lubuskiego. Osiedle zaprojektował Friedrich Veil według zasad miasta-ogrodu, a dworzec, dom kultury i oba kościoły — Wilhelm Beringer; zabudowa jest szeregowa i niska, z dużymi ogrodami, skomponowana wokół dzisiejszego Placu Wolności, a domy od początku miały wodociąg, kanalizację i elektryczność. Dworzec z 1923 roku i historyczny układ urbanistyczny wpisano do rejestru zabytków; stoją tu też wieża ciśnień, parowóz Tp3-36, modernistyczny dom kultury i dwa kościoły z lat 1928–1929. Drewniany kościół w Kosieczynie należy do najstarszych w Polsce — badania z 2006 roku wykazały, że najstarsza próbka drewna pochodzi z 1345 roku, nawa i prezbiterium z 1389, a wieża z 1431; drugi drewniany kościół stoi w Chlastawie, w Kosieczynie jest barokowy dwór z XVIII wieku, a w Dąbrówce Wielkopolskiej neorenesansowy pałac. Gmina należy do zawiązanego jesienią 1995 roku Regionu Kozła, którego nazwa pochodzi od regionalnych dud; działa tu Zespół Pieśni i Tańca występujący za granicą, a w Kosieczynie organizowano „Jarmark z jajem” z konkursem na najlepszą potrawę z jaja — dwunasta edycja odbyła się w marcu 2017 roku.",
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

  districtsHeading: "Do których części gminy Zbąszynek dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy, w tym do Kosieczyna, Chlastawy i Dąbrówki Wielkopolskiej. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Zbąszynek też przyjadę",
  nearbyParagraphs: [
    "Babimost, Świebodzin, Trzciel, Zbąszyń i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Babimost", "Świebodzin", "Trzciel", "Zbąszyń"],

  about: blokOMnie("do Zbąszynka", "w Zbąszynku i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zbąszynka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo te dwie nazwy mylą się nagminnie: Zbąszynek w powiecie świebodzińskim to nie Zbąszyń w Wielkopolsce — to dwa różne, sąsiadujące miasta. Do obu przyjadę.",
    },
    ...faqWspolne("w Zbąszynku"),
    {
      question: "Dlaczego przy krojeniu widać gorzej, niż się wydaje?",
      answer:
        "Bo główna lampa wisi na środku sufitu i stojąc przy blacie, masz ją za plecami — pracujesz więc we własnym cieniu, dokładnie tam, gdzie leży deska. Najtańsza poprawka w kuchni to osobne światło pod górnymi szafkami, skierowane wprost na blat.",
    },
    {
      question: "Czy barwa światła ma znaczenie przy gotowaniu?",
      answer:
        "Ma, i większe, niż się wydaje. W ciepłym, żółtym świetle wszystko wygląda bardziej rumiane: mięso wydaje się gotowe wcześniej, ciasto bardziej upieczone, sos ciemniejszy. A przecież po kolorze oceniamy zasmażkę, cebulę i wypieki. Warto wynieść takie rzeczy na chwilę do okna.",
    },
    {
      question: "Gdzie ustawić urządzenie w kuchni?",
      answer:
        "Tam, gdzie widać, co się robi — a nie tam, gdzie akurat jest wolne gniazdko. To najczęściej popełniany błąd przy ustawianiu sprzętu i potem przez lata zagląda się do naczynia w półmroku.",
    },
  ],

  geo: { lat: 52.2483, lng: 15.8175 },
};
