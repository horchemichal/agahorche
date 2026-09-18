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
 * SŁUBICE — gmina miejsko-wiejska w powiecie słubickim.
 * MIASTO 16 169, GMINA 20 011 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 19,2 km², GMINY 185,6 km², 16 wsi i osad.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ — 16 wsi ≠ 16 sołectw,
 *   oficjalnego wykazu nie zdobyto.
 *
 * ⚠⚠ HOMONIM: SŁUBICE (lubuskie, miasto, gmina miejsko-wiejska)
 * ≠ SŁUBICE (mazowieckie, powiat płocki, GMINA WIEJSKA,
 * siedziba jest WSIĄ). FAQ to rozróżnia.
 * ⚠ „Gminna Spółdzielnia w Słubicach" — NIE USTALONO, których
 *   Słubic dotyczy. NIE WYKORZYSTUJĘ.
 *
 * ⚠⚠ PRAW MIEJSKICH NIE PODAJĘ — ROKU NIE USTALONO
 * z żadnego czytelnego źródła. NIE PISZĘ ŻADNEJ DATY.
 *
 * GEOGRAFIA: nad ODRĄ, naprzeciw Frankfurtu nad Odrą.
 * MOST o długości 250 m, podświetlany nocą. „Dwumiasto".
 *
 * ⚠⚠ SCHAB TRADYCYJNY SŁUBICKI — PUŁAPKA. Produkt jest
 * na Liście Produktów Tradycyjnych (wpis połowa kwietnia
 * 2012 r.), ALE POCHODZI Z LUBIECHNI WIELKIEJ, GMINA RZEPIN.
 * Przymiotnik „słubicki" odnosi się do POWIATU.
 * ⚠⚠ NIE PISZĘ, że to produkt Słubic. NIE UŻYWAM GO WCALE.
 * ⚠ Festiwal „Smaki i Smaczki Ziemi Lubuskiej" jest
 *   w STAROŚCINIE — NIE w gminie Słubice. NIE UŻYWAM.
 *
 * DOŻYNKI GMINNE W DRZECINIE (gmina Słubice): 8 września
 * 2018 r., charakter polsko-niemiecki, warsztaty wyplatania
 * wieńców, wystawa dawnej wiejskiej zagrody, a z kuchni
 * „domowy chleb z okładem i chłopskie jadło".
 * ⚠ NIE PISZĘ, że dożynki są coroczne — potwierdzona jedna
 *   edycja.
 * CYKL „TRANSGRANICZNE TRADYCJE KULINARNE DWUMIASTA" —
 * ⚠ projekt istniał, ale BRAK DAT, LICZBY WARSZTATÓW I POTRAW.
 *   Wspominam JEDNYM ZDANIEM, bez szczegółów.
 *
 * ⚠⚠ POMNIK WIKIPEDII — PIERWSZY NA ŚWIECIE. Odsłonięty
 * 22 PAŹDZIERNIKA 2014 r. na PLACU FRANKFURCKIM. Autor
 * MIHRAN HAKOBYAN. Ok. 170 cm, laminat imitujący mosiądz,
 * cztery postacie unoszące kulę-puzzle.
 * COLLEGIUM POLONICUM — wspólna jednostka UAM w Poznaniu
 * i Uniwersytetu Europejskiego Viadrina; taras na dachu.
 * ⚠ ROKU POWSTANIA COLLEGIUM NIE PODAJĘ (niepotwierdzony).
 * SMOK — Słubicki Miejski Ośrodek Kultury.
 * ⚠ KOŚCIOŁA NMP KRÓLOWEJ POLSKI NIE DATUJĘ — źródła
 *   sprzeczne (1775 kontra lata 20. XX w.).
 * ⚠ „SŁUBFURT" — NIEPOTWIERDZONE. NIE UŻYWAM.
 *
 * KĄT: POMIDORY — ŚWIEŻE, Z PUSZKI, PRZECIER I KONCENTRAT.
 * Kąt od gminy, w której miasto sąsiaduje z szesnastoma
 * wsiami, a dożynki w Drzecinie stawiają na stole to,
 * co wyrosło obok.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pomidor to nie jest jeden składnik, tylko cztery różne
 *   produkty pod jedną nazwą, i że mieszanie ich to najczęstsza
 *   przyczyna niewychodzących sosów,
 * — ŚWIEŻY POMIDOR jest przez większość roku wodnisty
 *   i bez smaku, i to nie jest wina kupującego,
 * — że latem świeży wygrywa ze wszystkim, a poza latem
 *   przegrywa nawet z tanią puszką,
 * — ŻE POMIDORY Z PUSZKI SĄ ZRYWANE DOJRZAŁE — i dlatego
 *   do gotowanego sosu są zwykle lepszym wyborem niż świeże
 *   kupione w lutym,
 * — PRZECIER, PASSATA: gładki, rzadki, do sosów, które mają
 *   być jednolite,
 * — KONCENTRAT: nie jest sosem, tylko przyprawą — jego rolą
 *   jest wzmocnić, nie wypełnić; wrzucony w dużej ilości
 *   daje kwaśny, metaliczny posmak,
 * — ŻE KONCENTRAT LUBI KRÓTKIE PODSMAŻENIE PRZED DODANIEM
 *   PŁYNU — jedna z niewielu rzeczy, które naprawdę zmieniają
 *   smak sosu,
 * — DLACZEGO SOS BYWA KWAŚNY i co z tym robić: szczypta
 *   cukru, marchewka albo dłuższe gotowanie,
 * — że skórki i pestki to kwestia gustu, nie zasady,
 * — UCZCIWIE: urządzenie nie sparzy i nie obierze pomidorów
 *   za Ciebie i nie zrobi z zimowego pomidora letniego,
 * — ale robi dwie rzeczy: rozdrabnia sos do dowolnej gładkości
 *   bez przelewania i gotuje go z mieszaniem, więc gęsty sos
 *   nie przywiera do dna.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I ŻADNYCH GRAMATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO likopenu, ZERO
 *   witamin, ZERO „konserwanty w puszce". Piszę o SMAKU
 *   i KONSYSTENCJI. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM ANI MAREK PRZECIERÓW.
 * — ZERO porównywania cen po dwóch stronach rzeki.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych.
 * — ZERO bezrobocia i wyludniania.
 * — Frankfurt i most podaję WYŁĄCZNIE jako fakt geograficzny
 *   i jako współpracę kulturalną.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Poza sezonem" dotyczy
 * dziewięciu miesięcy bez konkretnego owocu. „Sos na bazie
 * warzyw" dotyczy sosów bez śmietany i mąki jako techniki.
 * „Zagęszczanie" dotyczy nadmiaru płynu. „Marynaty i zalewy"
 * dotyczą konserwowania. „Gotowe danie ze słoika" dotyczy
 * dań gotowych. Tutaj chodzi o JEDEN SKŁADNIK W CZTERECH
 * POSTACIACH i o to, którą wybrać do czego.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PRZYPISUJĘ Słubicom schabu tradycyjnego słubickiego
 *   ani festiwalu ze Starościna.
 * — NIE PISZĘ, że dożynki w Drzecinie są coroczne.
 * — NIE DATUJĘ kościoła NMP Królowej Polski.
 * — NIE PODAJĘ roku powstania Collegium Polonicum.
 * — NIE UŻYWAM „Słubfurtu".
 * — NIE MYLĘ SŁUBIC LUBUSKICH ze SŁUBICAMI MAZOWIECKIMI.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad szesnaście tysięcy mieszkańców
 *   na 19,2 km², cała gmina dwadzieścia tysięcy na 185,6 km²,
 *   z szesnastoma wsiami i osadami,
 * — Słubice leżą nad Odrą, naprzeciw Frankfurtu nad Odrą;
 *   oba miasta łączy most długi na 250 metrów, podświetlany
 *   nocą, a współpracę prowadzą pod nazwą Dwumiasta,
 * — 22 października 2014 r. odsłonięto tu na Placu
 *   Frankfurckim pierwszy na świecie pomnik Wikipedii,
 *   autorstwa Mihrana Hakobyana: około stu siedemdziesięciu
 *   centymetrów, z laminatu imitującego mosiądz, cztery
 *   postacie unoszące kulę-puzzle,
 * — działa tu Collegium Polonicum, wspólna jednostka
 *   Uniwersytetu imienia Adama Mickiewicza w Poznaniu
 *   i Uniwersytetu Europejskiego Viadrina, z tarasem na dachu,
 *   oraz Słubicki Miejski Ośrodek Kultury,
 * — 8 września 2018 r. w Drzecinie odbyły się dożynki gminne
 *   o polsko-niemieckim charakterze, z warsztatami wyplatania
 *   wieńców, wystawą dawnej wiejskiej zagrody i domowym
 *   chlebem z okładem; gmina prowadziła też cykl
 *   transgranicznych warsztatów kulinarnych.
 */
export const SLUBICE: CityContent = {
  slug: "slubice",
  h1: "Thermomix Słubice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Słubice — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Słubicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Słubice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Słubicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Słubic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Słubice i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pomidor to cztery różne produkty pod jedną nazwą.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Słubicach – jak wygląda prezentacja?",
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
      id: "pomidory",
      heading: "Dożynki w Drzecinie i chłopskie jadło — czyli o pomidorach w czterech postaciach",
      paragraphs: [
        "We wrześniu 2018 roku dożynki gminne odbyły się w Drzecinie: wieńce, wystawa dawnej wiejskiej zagrody i, jak zapowiadano wprost, domowy chleb z okładem i chłopskie jadło. Gmina prowadziła też cykl transgranicznych warsztatów kulinarnych. To dobry pretekst, żeby napisać o składniku, który wygląda na najprostszy z możliwych, a jest źródłem większej liczby nieudanych obiadów niż jakikolwiek inny.",
        "Bo pomidor to nie jest jeden składnik. To są cztery różne produkty pod jedną nazwą: świeży, z puszki, przecier i koncentrat. Mieszanie ich ról to najczęstsza przyczyna sosów, które „jakoś nie wyszły”.",
        "Zacznijmy od najbardziej niewygodnej prawdy. Świeży pomidor przez większość roku jest wodnisty i prawie bez smaku, i to nie jest wina kupującego ani sklepu. Owoc zrywany twardy, żeby przetrwał transport, po prostu nie zdąży nabrać smaku.",
        "Latem jest odwrotnie i świeży pomidor wygrywa ze wszystkim — do sałatki, do kanapki, do surowego sosu. Ale poza latem przegrywa nawet z tanią puszką i warto to sobie powiedzieć bez sentymentu.",
        "Pomidory z puszki mają bowiem jedną przewagę, o której się nie pamięta: zrywa się je dojrzałe, bo i tak jadą do przetwórni, a nie na półkę. Dlatego do sosu, który i tak będzie gotowany, puszka w lutym jest zwykle lepszym wyborem niż świeże pomidory z tego samego sklepu.",
        "Przecier i passata to ten sam pomysł, tylko już zmiksowany i przecedzony: rzadki, gładki, bez skórek. Bierze się go tam, gdzie sos ma być jednolity i gdzie nie chcemy kawałków — do zup, do sosów na makaron, do wszystkiego, co ma być aksamitne.",
        "A koncentrat to zupełnie inna historia i tu popełnia się najwięcej błędów. Koncentrat nie jest sosem — jest przyprawą. Jego rolą jest wzmocnić smak, a nie wypełnić garnek. Wrzucony w dużej ilości nie robi sosu bardziej pomidorowym, tylko kwaśnym i lekko metalicznym.",
        "Jest przy nim jedna rzecz, która naprawdę zmienia smak: krótkie podsmażenie na tłuszczu, zanim doleje się płyn. Koncentrat traci wtedy ostrą kwasowość i robi się głębszy, prawie słodki. To jedna z niewielu drobnych czynności, które w kuchni zwracają się natychmiast.",
        "Skoro o kwasowości: sos pomidorowy bywa kwaśny i to normalne. Pomaga szczypta cukru, pomaga starta marchewka, pomaga dłuższe gotowanie. Nie pomaga dokładanie koncentratu, choć odruch podpowiada właśnie to.",
        "Skórki i pestki to na koniec kwestia gustu, nie zasady. Jednym przeszkadzają, innym w ogóle. Nie ma tu poprawnej odpowiedzi i nie warto się nią przejmować.",
        "Teraz uczciwie o sprzęcie. Thermomix nie sparzy i nie obierze pomidorów za Ciebie, i z pomidora kupionego w lutym nie zrobi pomidora sierpniowego. Tego nie potrafi żadne urządzenie.",
        "Robi natomiast dwie rzeczy, które przy sosach mają znaczenie. Rozdrabnia do dowolnej gładkości w tym samym naczyniu, w którym gotujesz — bez przelewania gorącego sosu do blendera i z powrotem. I gotuje z mieszaniem, więc gęsty sos pomidorowy, który na patelni przywiera do dna i przypala się w ciągu chwili nieuwagi, tutaj po prostu tego nie robi.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Słubicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy w domu jada się dużo sosów i makaronów. Wtedy pokażę sos robiony od początku do końca w jednym naczyniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Słubicach"),
    sekcjaRaty("w Słubicach"),
    {
      id: "rodzina",
      heading: "Thermomix dla słubickiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad szesnaście tysięcy mieszkańców na dziewiętnastu kilometrach kwadratowych, a cała gmina dwadzieścia tysięcy na stu osiemdziesięciu pięciu, z szesnastoma wsiami i osadami. Słubice leżą nad Odrą, naprzeciw Frankfurtu nad Odrą; oba miasta łączy most długi na dwieście pięćdziesiąt metrów, nocą podświetlany, a współpracę prowadzą pod nazwą Dwumiasta. To tutaj 22 października 2014 roku stanął na Placu Frankfurckim pierwszy na świecie pomnik Wikipedii — dzieło Mihrana Hakobyana, około stu siedemdziesięciu centymetrów wysokości, z laminatu imitującego mosiądz, przedstawiające cztery postacie unoszące kulę ułożoną z puzzli. Działa tu Collegium Polonicum, wspólna jednostka Uniwersytetu imienia Adama Mickiewicza w Poznaniu i Uniwersytetu Europejskiego Viadrina, z tarasem widokowym na dachu, oraz Słubicki Miejski Ośrodek Kultury. We wrześniu 2018 roku dożynki gminne odbyły się w Drzecinie, z warsztatami wyplatania wieńców, wystawą dawnej wiejskiej zagrody i domowym chlebem.",
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

  districtsHeading: "Do których części gminy Słubice dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Słubice też przyjadę",
  nearbyParagraphs: [
    "Rzepin, Cybinka, Ośno Lubuskie, Górzyca i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Rzepin", "Cybinka", "Ośno Lubuskie", "Górzyca"],

  about: blokOMnie("do Słubic", "w Słubicach i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Słubic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Słubice nad Odrą w lubuskiem, a nie o Słubice w powiecie płockim na Mazowszu.",
    },
    ...faqWspolne("w Słubicach"),
    {
      question: "Świeże pomidory czy z puszki do sosu?",
      answer:
        "Latem świeże wygrywają ze wszystkim. Poza latem zwykle lepsza jest puszka — pomidory do przetwórni zrywa się dojrzałe, a te na półkę twarde, żeby przetrwały transport. Do sosu, który i tak będzie gotowany, puszka w lutym daje więcej smaku niż świeży pomidor z tego samego sklepu.",
    },
    {
      question: "Do czego jest koncentrat pomidorowy?",
      answer:
        "Do wzmocnienia smaku, nie do wypełnienia garnka — to przyprawa, nie sos. W dużej ilości daje kwaśny, lekko metaliczny posmak. Warto go krótko podsmażyć na tłuszczu, zanim doleje się płyn: traci wtedy ostrą kwasowość i robi się głębszy.",
    },
    {
      question: "Co zrobić, gdy sos pomidorowy jest za kwaśny?",
      answer:
        "Pomaga szczypta cukru, starta marchewka albo po prostu dłuższe gotowanie. Nie pomaga dokładanie koncentratu, choć odruch podpowiada właśnie to.",
    },
  ],

  geo: { lat: 52.3506, lng: 14.5606 },
};
