import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * SZTUTOWO — WIEŚ, siedziba gminy wiejskiej, powiat nowodworski
 * (pomorskie). NIE JEST MIASTEM i nigdy nie miało praw miejskich.
 * Gmina 3 405 mieszkańców (31.12.2024, GUS); sama wieś 1 906
 * (NSP 2021 — GUS nie publikuje ludności wsi rocznie, więc
 * NOWSZEJ LICZBY DLA WSI NIE MAM I JEJ NIE PODAJĘ).
 * Brief mówił 2 000 — to była liczba dla wsi, zbliżona.
 * Powierzchnia gminy: 111,5 km² albo 107,49 km² zależnie od
 * źródła — NIE PODAJĘ JEJ W TEKŚCIE.
 *
 * ⚠️ TEMAT BEZWZGLĘDNIE WYŁĄCZONY ⚠️
 * W Sztutowie znajduje się teren byłego niemieckiego
 * nazistowskiego obozu koncentracyjnego i siedziba państwowego
 * muzeum. TEN TEMAT NIE POJAWIA SIĘ NA TEJ STRONIE W ŻADNEJ
 * FORMIE: nie jako tło, nie jako kontekst historyczny, nie jako
 * „ciekawostka", nie jako aluzja. Konsekwencje praktyczne,
 * których pilnuję w całym pliku:
 *   1. NIE UŻYWAM NIEMIECKIEJ NAZWY HISTORYCZNEJ WSI — nigdzie,
 *      nawet omawiając wiek XV–XIX. Piszę wyłącznie „Sztutowo".
 *   2. NIE PISZĘ O „NAJWIĘKSZYM PRACODAWCY" gminy — to pytanie
 *      prowadzi wprost do tej instytucji. Piszę o STRUKTURZE
 *      ZATRUDNIENIA, która jest udokumentowana liczbowo
 *      i całkowicie neutralna.
 *
 * PRZEKOP MIERZEI WIŚLANEJ leży fizycznie w tej gminie
 * (Skowronki). TEMAT POLITYCZNIE SPORNY — koszt, sens
 * ekonomiczny, środowisko. NIE PISZĘ O NIM W OGÓLE. Nie ma
 * neutralnej wersji, która byłaby jednocześnie potrzebna
 * na stronie o sprzęcie kuchennym.
 *
 * NEUTRALNE PUNKTY ZACZEPIENIA (sprawdzone):
 * — CAŁA GMINA leży w Parku Krajobrazowym „Mierzeja Wiślana"
 *   (utworzony 26 kwietnia 1985 r.; park obejmuje tylko dwie
 *   gminy: Sztutowo i Krynicę Morską); lasy to ok. 80%
 *   powierzchni parku, dominuje nadmorski bór sosnowy,
 * — blisko 2/3 powierzchni gminy to WODY I LASY,
 * — REZERWAT „KĄTY RYBACKIE" — kolonia lęgowa kormorana
 *   i czapli siwej,
 * — PORT ŁODZIOWY W KĄTACH RYBACKICH, rybołówstwo na Zalewie
 *   Wiślanym: śledź od lutego do kwietnia, potem sandacz i leszcz;
 *   na całym południowym Zalewie pracuje ok. 30 załóg,
 * — DNI RYBAKA 27 czerwca 2026 r. w Kątach Rybackich,
 * — ŻUŁAWSKA KOLEJ DOJAZDOWA, sezon 2026: codziennie
 *   30 maja – 30 sierpnia plus weekendy września; łącznie 110 dni
 *   kursowania; właściciel: powiat nowodworski,
 * — 8 SOŁECTW: Grochowo Pierwsze, Grochowo Trzecie, Groszkowo,
 *   Kobyla Kępa, Kąty Rybackie, Płonina, Sztutowo, Łaszka,
 * — 664 podmioty REGON, z czego 654 to MIKROFIRMY do 9 osób;
 *   185 (33,4%) w zakwaterowaniu i gastronomii, 105 w budownictwie,
 *   32 w rolnictwie, leśnictwie i rybactwie,
 * — 1432 r. — pierwszy przywilej dla karczmy przy dworze;
 *   pod koniec XVIII w. największa wieś mierzejowa.
 *
 * OBALONE: gmina NIE jest rolnicza — rolnictwo to 32 z 664 firm.
 * Jest turystyczno-usługowa.
 * OBALONE: Kąty Rybackie NIE mają floty kutrów dalekomorskich —
 * to port łodziowy Zalewu.
 *
 * KĄT: PASZTET — czyli danie, które robi się raz, długo, i je
 * przez tydzień. Kąt jest kuchenny, sezonowy, całkowicie
 * neutralny i pasuje do gminy 664 mikrofirm i ośmiu sołectw,
 * gdzie kiermasz i wspólny stół są realnym elementem życia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pasztet to jedno z niewielu dań, przy których urządzenie
 *   robi PRAWIE CAŁĄ robotę: rozdrabnia ugotowane mięso i warzywa
 *   na gładko, miesza masę, miele przyprawy i bułkę,
 * — że NIE PIECZE — forma idzie do piekarnika i inaczej się nie da,
 * — że masa musi być naprawdę gładka i że to jest jedyna rzecz,
 *   której ręcznie nie da się osiągnąć w rozsądnym czasie,
 * — że pojemność naczynia jest twardą granicą i przy dużej
 *   ilości robi się w turach,
 * — że pasztet z wątróbką i pasztet warzywny to ta sama technika,
 * — i ODMOWA: nic o surowym mięsie, nic o przechowywaniu
 *   i pasteryzacji w słoikach, nic o wątróbce jako temacie
 *   żywieniowym.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O SUROWYM MIĘSIE I PODROBACH. ODMOWA W TEKŚCIE.
 * — ŻADNYCH PORAD O PRZETWORACH W SŁOIKACH, PASTERYZACJI
 *   I PRZECHOWYWANIU. ODMOWA W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI ŻYWIENIOWYCH
 *   (żelazo, wątróbka, tłuszcz).
 * — ŻADNYCH NAZW FIRM ANI INSTYTUCJI.
 * — ŻADNEJ NIEMIECKIEJ NAZWY MIEJSCOWOŚCI.
 * — ŻADNEJ WZMIANKI o obozie, o przekopie i o wysiedleniach.
 * — ŻADNEJ POJEMNOŚCI W LITRACH z pamięci.
 * — NIE PISZĘ „bezrobocie w Sztutowie" — dostępna liczba 10,7%
 *   jest POWIATOWA, nie gminna, i nie wolno jej tak nazywać.
 *   W tekście jej nie ma.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Smalec i pasty do chleba"
 * (Kolonowskie) dotyczą tłuszczu i smarowideł robionych na zimno.
 * „Maszynka do mięsa" (Miastko) dotyczy mielenia i różnicy między
 * siekaniem a przeciskaniem. „Danie robione raz w roku"
 * (Niemodlin) dotyczy tremy przed potrawą świąteczną. Tutaj chodzi
 * o KONKRETNY WYPIEK z formy: o masę, która musi być gładka,
 * i o piekarnik, bez którego się nie obejdzie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Sztutowo jest miastem. Jest wsią.
 * — NIE PODAJĘ liczby mieszkańców samej wsi na 2024 r. — GUS jej
 *   nie publikuje.
 * — NIE PODAJĘ powierzchni gminy — źródła się różnią.
 * — NIE PISZĘ, że gmina jest rolnicza.
 * — NIE PODAJĘ liczby łodzi w Kątach Rybackich — nie ustalono.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych — dla tej
 *   gminy nie ma żadnego; wpisy żuławskie i rybne są regionalne
 *   albo kaszubskie.
 * — districts: gmina wiejska. W districts wpisuję SOŁECTWA, bo są
 *   potwierdzone wykazem BIP.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 3 405 mieszkańców gminy (31.12.2024, GUS); Sztutowo jest wsią
 *   i nigdy nie miało praw miejskich,
 * — cała gmina leży w Parku Krajobrazowym „Mierzeja Wiślana"
 *   z 1985 r.; blisko 2/3 powierzchni to wody i lasy; dominuje
 *   nadmorski bór sosnowy,
 * — rezerwat „Kąty Rybackie" z kolonią kormorana i czapli siwej,
 * — port łodziowy w Kątach Rybackich; na Zalewie łowi się śledzia
 *   od lutego do kwietnia, potem sandacza i leszcza,
 * — Dni Rybaka 27 czerwca 2026 r.,
 * — Żuławska Kolej Dojazdowa: 110 dni kursowania w sezonie 2026,
 * — 8 sołectw,
 * — 664 podmioty gospodarcze, z czego 654 to mikrofirmy
 *   do dziewięciu osób; 33,4% to zakwaterowanie i gastronomia,
 * — przywilej dla karczmy z 1432 r.
 */
export const SZTUTOWO: CityContent = {
  slug: "sztutowo",
  h1: "Thermomix Sztutowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sztutowo (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sztutowie: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina i Kąty Rybackie. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sztutowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sztutowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sztutowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich sołectw gminy, także do Kątów Rybackich.",

  highlights: highlightyStandardowe("Sztutowo i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Masę zrobi gładką w minutę. Upiec musi piekarnik.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sztutowie – jak wygląda prezentacja?",
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
      id: "pasztet",
      heading: "Osiem sołectw i sześćset mikrofirm — czyli o pasztecie",
      paragraphs: [
        "Gmina Sztutowo to osiem sołectw i trochę ponad trzy tysiące czterysta osób. Sześćset sześćdziesiąt cztery zarejestrowane firmy, z czego sześćset pięćdziesiąt cztery to mikrofirmy do dziewięciu osób — czyli gmina bez ani jednego dużego zakładu, złożona z rodzinnych działalności. Cała leży w Parku Krajobrazowym „Mierzeja Wiślana”, a blisko dwie trzecie jej powierzchni to woda i las. W Kątach Rybackich jest port łodziowy i rezerwat, w którym gnieżdżą się kormorany i czaple.",
        "Napiszę o pasztecie. To jest jedno z tych dań, które w takich okolicach wciąż robi się w domu — na święta, na chrzciny, na kiermasz, na Dni Rybaka — i jednocześnie jedno z niewielu, przy których to urządzenie wykonuje prawie całą pracę.",
        "Bo pasztet ma jeden problem i jest nim gładkość. Masa musi być jednolita, bez włókien i bez grudek, i ręcznie nie da się tego osiągnąć w rozsądnym czasie — maszynka daje włókna, widelec daje grudki, a przez sito nikt tego nie przeciśnie. Tutaj ugotowane mięso, warzywa z wywaru, namoczona bułka i jajka trafiają razem do naczynia i po kilkudziesięciu sekundach masa jest gładka. To nie jest ułatwienie, to jest różnica między pasztetem a czymś innym.",
        "Do tego dochodzi cała drobnica, którą i tak trzeba zrobić: zmielone przyprawy — ziele angielskie, pieprz, gałka, majeranek — bułka tarta do wyłożenia formy, posiekana cebula, zmielone orzechy, jeśli je dodajecie.",
        "Czego nie zrobi: nie upiecze. Masa idzie do formy, forma do piekarnika i inaczej się nie da. Nie ma tu żadnej funkcji, która by to obeszła.",
        "Druga granica jest twarda i praktyczna: pojemność naczynia. Przy pasztecie na kilka blaszek robi się w turach — dwa, trzy razy. Nie podam Wam liczby litrów z pamięci; pokażę naczynie na spotkaniu i sami ocenicie, ile tur wyjdzie przy Waszej ilości.",
        "I to samo, dosłownie ta sama technika, działa przy pasztecie warzywnym — z soczewicy, fasoli, kaszy i warzyw korzeniowych. Kto nie jada mięsa albo szykuje wigilijny stół, dostaje dokładnie to samo narzędzie.",
        "Na koniec dwie rzeczy, których nie zrobię, i obie są poważne. Nie doradzę Wam nic o surowym mięsie i podrobach — ile mogą leżeć, w jakiej temperaturze, co z deską po nich. I nie doradzę nic o zamykaniu pasztetu w słoikach, o pasteryzacji ani o tym, jak długo się przechowuje. To jest bezpieczeństwo żywności, ryzyko jest realne, a ja sprzedaję sprzęt kuchenny. Po tę wiedzę trzeba pójść gdzie indziej — a w gminie, gdzie od pokoleń robi się to samemu, jest do kogo.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sztutowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Dojeżdżam do wszystkich ośmiu sołectw — Kątów Rybackich, Kobylej Kępy, Grochowa, Groszkowa, Płoniny i Łaszki tak samo jak do samego Sztutowa. Poza sezonem umawiamy się swobodniej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sztutowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sztutowskiej rodziny",
      paragraphs: [
        "Gmina Sztutowo liczy nieco ponad trzy tysiące czterysta mieszkańców. Samo Sztutowo jest wsią i nigdy nie miało praw miejskich; pierwszy przywilej dla tutejszej karczmy pochodzi z 1432 roku, a pod koniec osiemnastego wieku była to największa wieś na całej mierzei. Cała gmina leży w Parku Krajobrazowym „Mierzeja Wiślana”, utworzonym w 1985 roku, a blisko dwie trzecie jej powierzchni zajmują wody i lasy — głównie nadmorski bór sosnowy. W Kątach Rybackich działa port łodziowy i leży rezerwat z kolonią lęgową kormorana i czapli siwej; na Zalewie łowi się śledzia od lutego do kwietnia, a potem sandacza i leszcza. Latem przez gminę kursuje Żuławska Kolej Dojazdowa — w sezonie 2026 przez sto dziesięć dni — a 27 czerwca odbyły się w Kątach Rybackich Dni Rybaka.",
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

  districtsHeading: "Do których sołectw gminy Sztutowo dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich ośmiu sołectw gminy oraz do pozostałych miejscowości, w tym Skowronek i Grochowa Drugiego. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [
    "Sztutowo",
    "Kąty Rybackie",
    "Kobyla Kępa",
    "Grochowo Pierwsze",
    "Grochowo Trzecie",
    "Groszkowo",
    "Płonina",
    "Łaszka",
  ],

  nearbyHeading: "Poza Sztutowo też przyjadę",
  nearbyParagraphs: [
    "Krynica Morska, Stegna, Nowy Dwór Gdański, Nowy Staw, Malbork i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Krynica Morska", "Nowy Dwór Gdański", "Nowy Staw", "Malbork", "Elbląg"],

  about: blokOMnie("do Sztutowa", "w Sztutowie i całej gminie", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich sołectw gminy Sztutowo?",
      answer:
        "Tak — do Kątów Rybackich, Kobylej Kępy, Grochowa, Groszkowa, Płoniny i Łaszki tak samo jak do samego Sztutowa. Dojazd jest bezpłatny niezależnie od odległości. Dla porządku: chodzi o gminę w powiecie nowodworskim w województwie pomorskim, a nie o powiat nowodworski na Mazowszu.",
    },
    ...faqWspolne("w Sztutowie"),
    {
      question: "Czy Thermomix zrobi pasztet?",
      answer:
        "Zrobi masę, i to jest przy pasztecie sedno. Ugotowane mięso, warzywa z wywaru, namoczona bułka i jajka trafiają razem do naczynia i po kilkudziesięciu sekundach masa jest gładka — czego ręcznie nie da się osiągnąć w rozsądnym czasie. Nie upiecze: forma idzie do piekarnika i inaczej się nie da.",
    },
    {
      question: "Ile pasztetu zrobię za jednym razem?",
      answer:
        "Pojemność naczynia jest twardą granicą i przy kilku blaszkach robi się w turach. Nie podam liczby litrów z pamięci — pokażę naczynie na spotkaniu i sami ocenicie, ile tur wyjdzie. Ta sama technika działa przy pasztecie warzywnym, z soczewicy, fasoli i kaszy.",
    },
    {
      question: "Doradzisz, jak przechowywać pasztet albo zamknąć go w słoikach?",
      answer:
        "Nie. Pasteryzacja i przechowywanie to bezpieczeństwo żywności, nie obsługa sprzętu — tak samo jak wszystko, co dotyczy surowego mięsa i podrobów. Nie mam do tego kompetencji i nie będę udawać, że mam.",
    },
  ],

  geo: { lat: 54.326, lng: 19.179 },
};
