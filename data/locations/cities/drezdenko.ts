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
 * DREZDENKO — gmina miejsko-wiejska w powiecie
 * strzelecko-drezdeneckim.
 * MIASTO ponad 9 000 (10,7 km²), GMINA 16 246 (GUS 31.12.2024),
 * 399,9 km², 27 SOŁECTW (potwierdzone dwoma źródłami).
 * ⚠ LICZBY MIESZKAŃCÓW MIASTA NIE PODAJĘ DOKŁADNIE —
 *   źródło nie wskazało daty stanu. Piszę „ponad dziewięć
 *   tysięcy".
 * ⚠ LESISTOŚĆ 65,1% wg GUS (26 045 ha) — portal turystyczny
 *   podaje 75%. TRZYMAM SIĘ GUS.
 *
 * ⚠⚠ HOMONIM: DREZDENKO NIE MA NIC WSPÓLNEGO Z DREZNEM.
 * Historyczne formy nazwy: Drizina, Drecen, Driesen; badacze
 * wywodzą ją od słowa oznaczającego DRZEWO — „zalesiona
 * miejscowość z drewnianych domów". FAQ to rozróżnia.
 *
 * PRAWA MIEJSKIE 1317 r. (potwierdzone trzema źródłami),
 * po sprzedaży osady przez margrabiego Waldemara
 * brandenburskiego. Pierwsza pisemna wzmianka 1233 r.
 * ⚠ WERSJI „ok. 1092 u Galla Anonima" NIE UŻYWAM —
 *   sprzeczna, słabiej udokumentowana.
 * Za Bolesława Krzywoustego obszar był KASZTELANIĄ —
 * stąd nazwa Jarmarku Kasztelańskiego.
 *
 * ⚠⚠ GEOGRAFIA — PODSTAWA KĄTA:
 * TRZY RÓWNOLEGŁE PASY KRAJOBRAZOWE: na północy PUSZCZA
 * DRAWSKA, w środku NOTEĆ OTOCZONA ŁĄKAMI I POLAMI,
 * na południu PUSZCZA NOTECKA. Gmina leży w PRADOLINIE
 * NOTECKIEJ. TO JEST KOTWICA.
 * KANAŁ BYDGOSKI ukończony 1774 r. przekształcił Noteć
 * w szlak żeglugowy — w XVIII w. przepływało tędy ok. 2 000
 * barek rocznie.
 *
 * GOSPODARKA HISTORYCZNA: od XVIII w. węzeł handlowy,
 * gdzie wymieniano tkaniny jedwabne, POLSKIE WOŁY, WINO
 * WĘGIERSKIE i towary kolonialne.
 * ⚠ KĄTA WOŁOWEGO NIE UŻYWAM — „wołowina" właśnie zajęta
 *   (Szprotawa). ⚠ KĄTA PRZYPRAWOWEGO NIE UŻYWAM — ZAJĘTY.
 * W 1790 r. w przemyśle wełnianym pracowało 91 mistrzów
 * cechowych. W XIX w. MŁYNY PRZESTAWIONO NA NAPĘD PAROWY.
 * ⚠ KĄTA MŁYNARSKIEGO NIE UŻYWAM — „mąka i mielenie" ZAJĘTE.
 * MUZEUM PUSZCZY DRAWSKIEJ I NOTECKIEJ im. FRANCISZKA GRASIA
 * mieści się w XVII-WIECZNYM SPICHLERZU; trzy ekspozycje:
 * przyrodnicza, etnograficzna, historyczna.
 * ⚠ ROKU ZAŁOŻENIA MUZEUM NIE PODAJĘ.
 *
 * JARMARK KASZTELAŃSKI — organizator Centrum Promocji Kultury.
 * XI edycja w czerwcu 2016 r.
 * ⚠⚠ NUMERU EDYCJI NA DZIŚ NIE PODAJĘ i NIE LICZĘ WSTECZ.
 * ⚠ NIE PISZĘ, że są tam stoiska z produktami REGIONALNYMI
 *   — zapowiedzi mówią o gastronomii i rękodziele.
 * ⚠⚠ „ŚLIWA W OCCIE" ze ZDROISKA NIE NALEŻY DO GMINY
 *   DREZDENKO — Zdroiska nie ma w wykazie 27 sołectw.
 *   NIE PRZYPISUJĘ.
 * ⚠⚠ GRZYBOBRANIA W PUSZCZY NOTECKIEJ NIE PRZYPISUJĘ
 *   DREZDENKU — wszystkie źródła dotyczą części wielkopolskiej.
 *   ⚠ KĄT GRZYBOWY JEST ZRESZTĄ ZAJĘTY TRZYKROTNIE.
 * ⚠ RYBACTWA NIE OPISUJĘ — brak udokumentowanej tradycji.
 *
 * ZABYTKI: twierdza barokowa 1603–1605, pałac barokowy
 * ok. 1766 r., dworzec kolejowy 1857 r., ratusz neorenesansowy
 * 1884 r., KOŚCIÓŁ PRZEMIENIENIA PAŃSKIEGO 1898–1902
 * z WIEŻĄ 78 m — NAJWYŻSZY KOŚCIÓŁ W REGIONIE, kościół
 * Najświętszego Serca Pana Jezusa 1914 r., kamienica secesyjna
 * 1905 r., zespół wieży ciśnień 1906–1907.
 * ⚠ Średniowieczne budowle NIE PRZETRWAŁY.
 * KOPALNIA ROPY I GAZU LUBIATÓW (Lubiatów to sołectwo gminy).
 * ⚠ TEMATU KOPALNI NIE ROZWIJAM.
 *
 * KĄT: WARZYWA LIŚCIASTE — I DLACZEGO Z GÓRY LIŚCI
 * ZOSTAJE ŁYŻKA.
 * Kąt od gminy trzech pasów: las, łąki i pola nad Notecią,
 * znowu las.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że szpinak, botwina, jarmuż, boćwina i młoda kapusta
 *   to osobna kategoria warzyw, która rządzi się jedną
 *   zasadą: kurczy się drastycznie,
 * — ŻE TO JEST GŁÓWNY POWÓD, DLA KTÓREGO LUDZIE ICH NIE
 *   GOTUJĄ — kupują jedną torebkę i dostają dwie łyżki,
 *   po czym uznają, że to nieopłacalne,
 * — WNIOSEK PRAKTYCZNY: kupować dużo więcej, niż podpowiada
 *   rozsądek, i nie przejmować się widokiem góry liści,
 * — DLACZEGO SIĘ KURCZY: liść to w większości woda trzymana
 *   w strukturze, która pod wpływem ciepła puszcza —
 *   fakt fizyczny, nie wina przepisu,
 * — CO Z TĄ WODĄ ZROBIĆ: albo ją odparować, albo wykorzystać
 *   jako płyn w daniu; najgorsze jest zostawienie jej
 *   w połowie drogi, bo danie robi się wodniste,
 * — ŻE LIŚCIE DZIELĄ SIĘ NA MIĘKKIE I TWARDE: szpinak
 *   potrzebuje chwili, jarmuż i boćwina dużo dłużej,
 *   a wrzucenie ich razem kończy się źle,
 * — ŻE ŁODYGI GOTUJE SIĘ DŁUŻEJ NIŻ LIŚCIE i warto je
 *   po prostu dodać wcześniej, zamiast wyrzucać,
 * — ŻE TŁUSZCZ I KWAS SĄ TU OBOWIĄZKOWE, bo bez nich
 *   liście są nijakie — to nie jest kwestia gustu,
 *   tylko charakteru tych warzyw,
 * — CO ROBIĆ Z NADMIAREM: liście dobrze znoszą zblendowanie
 *   do zupy i do sosu, gdzie znikają, a zostaje kolor
 *   i smak,
 * — UCZCIWIE: urządzenie nie umyje liści ani nie oberwie
 *   ich z łodyg, a to jest przy nich najbardziej żmudne,
 * — ale robi dwie rzeczy: gotuje na parze, gdzie liście
 *   nie leżą w wodzie, i miksuje na gorąco, więc zupa
 *   z liści powstaje w jednym naczyniu, bez przelewania.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO witamin,
 *   ZERO żelaza, ZERO szczawianów, ZERO „zielone jest zdrowe".
 *   Piszę o SMAKU, WODZIE I OBJĘTOŚCI. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO moralizowania o jedzeniu warzyw.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych.
 * — ZERO bezrobocia i wyludniania.
 * — Twierdzę podaję WYŁĄCZNIE jako architekturę.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Szatkowanie warzyw
 * na surowo" dotyczy surówek i sałatek. „Kolor jedzenia"
 * dotyczy szarzenia warzyw. „Odsączanie i odciskanie"
 * dotyczą wyganiania wody jako techniki. „Zagęszczanie"
 * dotyczy nadmiaru płynu w daniu. „Obierki, skórki i łodygi"
 * dotyczą tego, co wyrzucamy. „Zioła świeże kontra suszone"
 * dotyczą ziół. Tutaj chodzi o WARZYWA LIŚCIASTE JAKO
 * KATEGORIĘ i o problem objętości.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dokładnej liczby mieszkańców miasta.
 * — NIE UŻYWAM datowania „ok. 1092".
 * — NIE PODAJĘ numeru edycji Jarmarku Kasztelańskiego.
 * — NIE PISZĘ o stoiskach z produktami regionalnymi.
 * — NIE PRZYPISUJĘ gminie „śliwy w occie" ze Zdroiska.
 * — NIE PISZĘ o grzybobraniu w Drezdenku.
 * — NIE OPISUJĘ rybactwa na Noteci.
 * — NIE PODAJĘ roku założenia muzeum.
 * — NIE MYLĘ DREZDENKA z DREZNEM.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad dziewięć tysięcy mieszkańców
 *   na 10,7 km², cała gmina ponad szesnaście tysięcy
 *   na 399,9 km², z dwudziestoma siedmioma sołectwami;
 *   lasy zajmują 65,1% powierzchni, czyli ponad dwadzieścia
 *   sześć tysięcy hektarów,
 * — prawa miejskie w 1317 r., po sprzedaży osady przez
 *   margrabiego Waldemara brandenburskiego; pierwsza pisemna
 *   wzmianka pochodzi z 1233 r., a za Bolesława Krzywoustego
 *   obszar był kasztelanią; nazwę wywodzi się od słowa
 *   oznaczającego drzewo,
 * — gmina leży w Pradolinie Noteckiej i dzieli się na trzy
 *   równoległe pasy: Puszczę Drawską na północy, Noteć
 *   otoczoną łąkami i polami pośrodku i Puszczę Notecką
 *   na południu,
 * — ukończony w 1774 r. Kanał Bydgoski przekształcił Noteć
 *   w szlak żeglugowy — w XVIII w. przepływało tędy około
 *   dwóch tysięcy barek rocznie, a miasto stało się węzłem
 *   handlowym, w którym wymieniano tkaniny jedwabne, polskie
 *   woły, wino węgierskie i towary kolonialne; w 1790 r.
 *   w przemyśle wełnianym pracowało dziewięćdziesięciu jeden
 *   mistrzów cechowych, a w XIX w. tutejsze młyny przestawiono
 *   na napęd parowy,
 * — Muzeum Puszczy Drawskiej i Noteckiej imienia Franciszka
 *   Grasia mieści się w siedemnastowiecznym spichlerzu i ma
 *   trzy ekspozycje: przyrodniczą, etnograficzną i historyczną,
 * — Centrum Promocji Kultury organizuje Jarmark Kasztelański
 *   — jedenasta edycja odbyła się w czerwcu 2016 r.,
 * — z zabytków: barokowa twierdza z lat 1603–1605, barokowy
 *   pałac z około 1766 r., dworzec z 1857, neorenesansowy
 *   ratusz z 1884, kościół Przemienienia Pańskiego z lat
 *   1898–1902 z wieżą wysoką na siedemdziesiąt osiem metrów
 *   — najwyższy kościół w regionie — kościół Najświętszego
 *   Serca Pana Jezusa z 1914, secesyjna kamienica z 1905
 *   i zespół wieży ciśnień z lat 1906–1907.
 */
export const DREZDENKO: CityContent = {
  slug: "drezdenko",
  h1: "Thermomix Drezdenko – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Drezdenko — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Drezdenku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Drezdenko — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Drezdenku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Drezdenka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Drezdenko i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Z góry liści zostaje łyżka — i to jest normalne.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Drezdenku – jak wygląda prezentacja?",
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
      id: "warzywa-lisciaste",
      heading: "Trzy pasy: las, łąki nad Notecią, znów las — czyli o warzywach liściastych",
      paragraphs: [
        "Gmina Drezdenko układa się w trzy równoległe pasy: na północy Puszcza Drawska, pośrodku Noteć otoczona łąkami i polami, na południu Puszcza Notecka. Lasy zajmują tu sześćdziesiąt pięć procent powierzchni, a środkowy pas — ten zielony i płaski — jest tym, z którego pochodzi jedzenie. Napiszę więc o warzywach, które w kuchni sprawiają najwięcej kłopotu przez jedną jedyną rzecz.",
        "Szpinak, botwina, jarmuż, boćwina, młoda kapusta — to osobna kategoria i rządzi się osobną zasadą. One się kurczą. Drastycznie, natychmiast i zawsze.",
        "To jest, moim zdaniem, główny powód, dla którego wiele osób ich w ogóle nie gotuje. Kupuje się jedną torebkę szpinaku, wrzuca do garnka i po chwili patrzy na dwie łyżki zieleni na dnie. Wniosek nasuwa się sam: nieopłacalne, nie warto, nie dla mnie.",
        "Wniosek jest jednak błędny, a rozwiązanie banalne: kupować znacznie więcej, niż podpowiada rozsądek. Góra liści w koszyku wygląda absurdalnie i to jest właśnie prawidłowa ilość. Przy liściach trzeba się po prostu przestawić.",
        "Dlaczego tak się dzieje? Bo liść to głównie woda trzymana w strukturze, która pod wpływem ciepła puszcza. Nic się nie psuje i nikt niczego nie zrobił źle — to zwykła fizyka i żaden przepis tego nie zmieni.",
        "Ważniejsze jest, co zrobić z tą wodą, bo ona nie znika. Można ją odparować i zostawić same liście, można wykorzystać jako płyn w daniu. Najgorsza jest droga pośrednia: zatrzymanie się w połowie, po którym danie jest wodniste i rozmyte.",
        "Druga rzecz: liście dzielą się na miękkie i twarde, a różnica jest ogromna. Szpinak potrzebuje dosłownie chwili — dłużej gotowany rozpada się w nicość. Jarmuż i boćwina potrzebują dużo więcej czasu i są wtedy znakomite. Wrzucenie ich razem do jednego garnka kończy się źle dla obu.",
        "Łodygi to osobna sprawa i szkoda je wyrzucać. Gotują się dłużej niż liście, więc wystarczy dodać je wcześniej, a liście dorzucić na końcu — mają wtedy przyjemną, chrupiącą strukturę i całkiem inny smak niż liść.",
        "I rzecz, o której trzeba powiedzieć wprost: przy liściach tłuszcz i kwas nie są dodatkiem, tylko warunkiem. Bez masła albo oliwy i bez czegoś kwaśnego liście są po prostu nijakie. To nie jest kwestia gustu ani wprawy — taki jest charakter tych warzyw i tak przyrządza się je we wszystkich kuchniach świata.",
        "Jeśli zdarzy się nadmiar, bo akurat wszystko obrodziło, liście świetnie znoszą zblendowanie. W zupie i w sosie znikają zupełnie, a zostaje po nich kolor i smak — to najlepszy sposób na dużą ilość zieleni w domu, w którym nie wszyscy za nią przepadają.",
        "Teraz uczciwie o sprzęcie. Thermomix nie umyje liści i nie oberwie ich z łodyg, a przy tych warzywach to jest właśnie najbardziej żmudna część roboty. Miska zimnej wody i Twoje ręce — nic tego nie zastąpi.",
        "Robi natomiast dwie rzeczy, które przy liściach mają znaczenie. Gotuje na parze, więc liście nie leżą w wodzie i nie oddają jej wszystkiego. I miksuje na gorąco, w tym samym naczyniu, w którym gotowały — zupa z liści powstaje więc od początku do końca w jednym garnku, bez przelewania gorącej zieleni do blendera i z powrotem.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Drezdenku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy ktoś w domu nie przepada za warzywami. Wtedy pokażę zupy, w których warzywa są wyczuwalne smakiem, a nie widokiem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Drezdenku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla drezdeneckiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad dziewięć tysięcy mieszkańców na blisko jedenastu kilometrach kwadratowych, a cała gmina ponad szesnaście tysięcy na czterystu, z dwudziestoma siedmioma sołectwami; lasy zajmują sześćdziesiąt pięć procent powierzchni, czyli ponad dwadzieścia sześć tysięcy hektarów. Prawa miejskie Drezdenko otrzymało w 1317 roku, po sprzedaży osady przez margrabiego Waldemara brandenburskiego; pierwsza pisemna wzmianka pochodzi z 1233 roku, a za Bolesława Krzywoustego obszar był kasztelanią — stąd nazwa organizowanego tu Jarmarku Kasztelańskiego, którego jedenasta edycja odbyła się w czerwcu 2016 roku. Samą nazwę miasta wywodzi się od słowa oznaczającego drzewo i nie ma ona nic wspólnego z Dreznem. Gmina leży w Pradolinie Noteckiej i dzieli się na trzy równoległe pasy: Puszczę Drawską, dolinę Noteci z łąkami i polami oraz Puszczę Notecką. Ukończony w 1774 roku Kanał Bydgoski przekształcił Noteć w szlak żeglugowy — w XVIII wieku przepływało tędy około dwóch tysięcy barek rocznie, a miasto stało się węzłem handlowym, w którym wymieniano tkaniny jedwabne, polskie woły, wino węgierskie i towary kolonialne; w 1790 roku w przemyśle wełnianym pracowało dziewięćdziesięciu jeden mistrzów cechowych, a w XIX wieku tutejsze młyny przestawiono na napęd parowy. Muzeum Puszczy Drawskiej i Noteckiej imienia Franciszka Grasia mieści się w siedemnastowiecznym spichlerzu. Z zabytków zostały barokowa twierdza z lat 1603–1605, barokowy pałac z około 1766 roku, dworzec z 1857, neorenesansowy ratusz z 1884 oraz kościół Przemienienia Pańskiego z lat 1898–1902, którego wieża ma siedemdziesiąt osiem metrów i jest najwyższą kościelną wieżą w regionie.",
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

  districtsHeading: "Do których części gminy Drezdenko dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu siedmiu sołectw. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Drezdenko też przyjadę",
  nearbyParagraphs: [
    "Strzelce Krajeńskie, Skwierzyna, Dobiegniew, Międzychód i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Strzelce Krajeńskie", "Skwierzyna", "Dobiegniew", "Międzychód"],

  about: blokOMnie("do Drezdenka", "w Drezdenku i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Drezdenka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu siedmiu sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwa bywa myląca: Drezdenko nad Notecią nie ma nic wspólnego z Dreznem — jego nazwę wywodzi się od słowa oznaczającego drzewo.",
    },
    ...faqWspolne("w Drezdenku"),
    {
      question: "Dlaczego ze szpinaku zostaje tak mało?",
      answer:
        "Bo liść to głównie woda trzymana w strukturze, która pod wpływem ciepła puszcza — to zwykła fizyka, nie wina przepisu. Rozwiązanie jest banalne: kupować znacznie więcej, niż podpowiada rozsądek. Góra liści w koszyku wygląda absurdalnie i jest właśnie prawidłową ilością.",
    },
    {
      question: "Czy szpinak i jarmuż gotuje się tak samo?",
      answer:
        "Nie. Szpinak potrzebuje dosłownie chwili i dłużej gotowany rozpada się w nicość, a jarmuż i boćwina potrzebują dużo więcej czasu. Wrzucenie ich razem kończy się źle dla obu. Łodyg nie warto wyrzucać — wystarczy dodać je wcześniej niż liście.",
    },
    {
      question: "Dlaczego warzywa liściaste wychodzą nijakie?",
      answer:
        "Bo zabrakło tłuszczu albo kwasu, a przy liściach to nie jest dodatek, tylko warunek. Bez masła czy oliwy i bez czegoś kwaśnego liście naprawdę niczego nie dają — taki mają charakter i tak przyrządza się je we wszystkich kuchniach.",
    },
  ],

  geo: { lat: 52.8383, lng: 15.8306 },
};
