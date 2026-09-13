import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * SURAŻ — gmina miejsko-wiejska w powiecie białostockim.
 * MIASTO 964, GMINA 1 904 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 33,9 km² (!), GMINY 76,6 km².
 * GĘSTOŚĆ MIASTA 28,5 os./km².
 * GMINA DZIELI SIĘ NA TRZY SOŁECTWA. Największe miejscowości
 * poza miastem: Zawyki, Doktorce, Średzińskie.
 * Blisko połowa powierzchni gminy to grunty miejskie nadane
 * w XV–XVI w.
 * ⚠ Notatka projektowa podawała 1 000 — blisko, ale używam GUS.
 *
 * ⚠⚠ „NAJMNIEJSZE MIASTO W POLSCE" — HIPOTEZA ZABITA.
 * Strona gminy twierdzi „przedostatnie miejsce w kraju" —
 * TO NIEAKTUALNE. Ranking z 30.12.2024 nie wymienia Suraża
 * w pierwszej dziesiątce; najmniejsze polskie miasto ma
 * ok. 307–308 mieszkańców (Opatowiec). Suraż z 964
 * mieszkańcami jest liczniejszy od co najmniej dziesięciu
 * polskich miast.
 * ⚠⚠ WOLNO NAPISAĆ WYŁĄCZNIE: „jedno z najmniejszych miast
 * w Polsce". NIGDY „najmniejsze" ani „drugie od końca".
 * ⚠ ZNACZNIE LEPSZY, W PEŁNI AKTUALNY FAKT: 33,9 km²
 * przy 964 mieszkańcach — gęstość 28,5 os./km², czyli taka
 * sama jak w całej wiejskiej gminie Tykocin.
 *
 * PRAWA MIEJSKIE — ⚠ SPRZECZNOŚĆ ŹRÓDEŁ:
 * Wersja A: 16 WRZEŚNIA 1445 r., prawo magdeburskie,
 * KAZIMIERZ JAGIELLOŃCZYK (serwis gminy + polskawliczbach).
 * Wersja B: 1390 r., WŁADYSŁAW JAGIEŁŁO.
 * ⚠ RAPORTUJĘ, NIE ROZSTRZYGAM. W treści piszę „w XV wieku,
 * choć część źródeł przesuwa tę datę o pół wieku wstecz".
 * ⚠ ROKU PRZYWRÓCENIA PRAW NIE PODAJĘ — nieustalony.
 * ⚠ PRZYCZYNY UTRATY NIE PODAJĘ — kontekst wyłączony etycznie.
 *
 * ⚠⚠ UKŁAD URBANISTYCZNY — PODSTAWA KĄTA:
 * Suraż zachował UKŁAD PRZESTRZENNY Z XV–XVI w. Z DWOMA
 * RYNKAMI — KATOLICKIM I PRAWOSŁAWNYM — NAJLEPIEJ ZACHOWANY
 * W CAŁYM DAWNYM WIELKIM KSIĘSTWIE LITEWSKIM.
 * ⚠ FAKT PODAJĘ JAKO URBANISTYCZNY. ZERO komentarza
 * o relacjach między wyznaniami.
 *
 * ⚠⚠ ARCHEOLOGIA — DRUGA PODSTAWA KĄTA:
 * OK. 200 STANOWISK ARCHEOLOGICZNYCH na terenie gminy,
 * od epoki kamienia przez brąz po żelazo. Najlepiej widoczne:
 * WCZESNOŚREDNIOWIECZNE KURHANY i DWA GRODZISKA —
 * w Surażu i w Zawykach. Warownia surażska istniała
 * już w XI w., nad Narwią.
 *
 * ZABYTKI: CERKIEW z XVI w.; drewniana CERKIEW ŚW. JANA
 * TEOLOGA z XIX w.; KOŚCIÓŁ BOŻEGO CIAŁA z 1878 r.,
 * klasycystyczny; DWIE XVIII-WIECZNE KAPLICE POUNICKIE
 * we wsi Zawyki; zabudowa zagrodowa z dachami krytymi strzechą.
 * ⚠ CERKWIE WYŁĄCZNIE JAKO ZABYTKI ARCHITEKTURY.
 *
 * PRZYRODA: przez teren przepływa NAREW; 30% POWIERZCHNI
 * GMINY leży w granicach NARWIAŃSKIEGO PARKU NARODOWEGO.
 * SURAŻ WYZNACZA POŁUDNIOWY KRANIEC PARKU — park obejmuje
 * dolinę Narwi „między Surażem a Rzędzianami".
 *
 * HISTORIA GOSPODARCZA: siedziba starostwa w XVI–XVIII w.
 * ⚠⚠ MIASTO PODUPADŁO, GDY KOLEJ WARSZAWSKO-PETERSBURSKA
 * OMINĘŁA JE NA RZECZ POBLISKICH ŁAP. To dobry, bezpieczny
 * fakt wyjaśniający dzisiejszą skalę.
 * ⚠ WZMIANKĘ o babce ziemniaczanej i rybach wędzonych
 * ze źródła turystycznego POMIJAM — to nie jest wpis na LPT
 * i nie chcę tego nazywać produktem tradycyjnym.
 * SURAŻ NIE NALEŻY DO CITTASLOW (nie potwierdzono).
 *
 * KĄT: SKĄD WIEMY, CO JEDZONO DAWNIEJ — i dlaczego „babcine"
 * przepisy bywają młodsze, niż się wydaje.
 * Kąt od dwustu stanowisk archeologicznych i od miasta,
 * którego układ z XV wieku jest czytelny do dziś.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że wiedza o dawnym jedzeniu pochodzi z czterech źródeł
 *   i każde ma inną wiarygodność,
 * — ARCHEOLOGIA: kości, pestki, ziarna, resztki w naczyniach,
 *   same naczynia — mówi CO jedzono, ale nie JAK to smakowało,
 * — DOKUMENTY: inwentarze, rachunki, przywileje targowe —
 *   mówią, co kupowano i czym handlowano,
 * — KSIĄŻKI KUCHARSKIE: pisane dla dworów i mieszczaństwa,
 *   więc opisują kuchnię zamożnych, nie codzienną,
 * — PRZEKAZ USTNY: najbogatszy i najmniej wiarygodny, bo sięga
 *   najwyżej trzech pokoleń wstecz,
 * — ŻE STĄD BIERZE SIĘ NAJWIĘKSZE NIEPOROZUMIENIE: „babciny
 *   przepis" to zwykle lata pięćdziesiąte albo sześćdziesiąte
 *   dwudziestego wieku, a nie „dawne czasy". To jest ok. 70 lat,
 *   nie 500,
 * — że kuchnia, którą uważamy za tradycyjną polską, jest
 *   w dużej mierze dwudziestowieczna — z produktami, których
 *   wcześniej nie było,
 * — że to nie odbiera jej wartości: przepis nie musi być stary,
 *   żeby był dobry,
 * — UCZCIWIE: dlatego ostrożnie podchodzę do haseł
 *   „tradycyjny smak" w reklamach sprzętu, także tego,
 *   który sprzedaję,
 * — bo urządzenie nie odtwarza żadnej dawnej kuchni — robi
 *   dania współczesne, tyle że wygodniej.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — w szczególności NIC
 *   o tym, że „kiedyś jedzono zdrowiej". TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO nostalgii jako oceny. Piszę, że dawniej było
 *   INACZEJ, nigdy że lepiej.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ⚠ ZERO roku 1863 i przyczyn utraty praw miejskich.
 * — ZERO granicy, wojska, podziemia, powstań.
 * — ZERO konfliktów wyznaniowych. Dwa rynki podaję jako fakt
 *   urbanistyczny; cerkwie i kaplice pounickie jako zabytki.
 * — ZERO biedy i wyludniania — przy mieście tej wielkości
 *   pilnuję tego szczególnie.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Co wygląda na tradycję,
 * a co nią jest" dotyczy autentyczności konkretnego zwyczaju.
 * „Dania, które zniknęły ze stołów" (Czyżew) dotyczą tego,
 * co wypadło z obiegu. „Jak przepis wędruje" (Tykocin) dotyczy
 * zapożyczeń. „Rodzinny przepis przeniesiony do urządzenia"
 * dotyczy jednego przepisu. Tutaj chodzi o ŹRÓDŁA WIEDZY:
 * skąd w ogóle wiemy cokolwiek o dawnym jedzeniu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — ⚠⚠ NIE PISZĘ, że Suraż jest najmniejszym miastem
 *   w Polsce ani drugim od końca.
 * — NIE ROZSTRZYGAM daty nadania praw miejskich.
 * — NIE PODAJĘ roku przywrócenia praw miejskich.
 * — NIE PODAJĘ przyczyny ich utraty.
 * — NIE DATUJĘ XVI-wiecznej cerkwi co do roku.
 * — NIE NAZYWAM babki ziemniaczanej produktem tradycyjnym
 *   Suraża.
 * — NIE PRZYPISUJĘ Surażowi wpisu na Listę Produktów
 *   Tradycyjnych.
 * — ⚠ NIE MYLĘ SURAŻA nad Narwią z SURAŻEM na Ukrainie,
 *   w Rosji ani na Białorusi. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 964 mieszkańców na 33,9 km² — gęstość 28,5 osoby
 *   na kilometr kwadratowy, taka jak w niejednej gminie
 *   wiejskiej; gmina 1 904 mieszkańców na 76,6 km²
 *   i dzieli się na trzy sołectwa,
 * — prawa miejskie w XV w. (16 września 1445 r. wg serwisu
 *   gminy), choć część źródeł przesuwa je na 1390 r.,
 * — Suraż zachował układ przestrzenny z XV–XVI w. z dwoma
 *   rynkami — to najlepiej zachowany taki układ w całym
 *   dawnym Wielkim Księstwie Litewskim,
 * — na terenie gminy jest około dwustu stanowisk
 *   archeologicznych, od epoki kamienia po żelazo; najlepiej
 *   widoczne są wczesnośredniowieczne kurhany i dwa grodziska,
 *   w Surażu i w Zawykach; warownia nad Narwią istniała
 *   już w XI w.,
 * — kościół Bożego Ciała z 1878 r., cerkiew z XVI w.,
 *   drewniana cerkiew świętego Jana Teologa z XIX w. oraz dwie
 *   XVIII-wieczne kaplice pounickie w Zawykach,
 * — trzydzieści procent powierzchni gminy leży w granicach
 *   Narwiańskiego Parku Narodowego, a Suraż wyznacza jego
 *   południowy kraniec,
 * — miasto było siedzibą starostwa w XVI–XVIII w. i podupadło,
 *   gdy kolej warszawsko-petersburska ominęła je na rzecz
 *   pobliskich Łap.
 */
export const SURAZ: CityContent = {
  slug: "suraz",
  h1: "Thermomix Suraż – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Suraż nad Narwią — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Surażu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Suraż — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Surażu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Suraża z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Suraż i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„Babciny przepis” to zwykle lata pięćdziesiąte. Czyli siedemdziesiąt lat, nie pięćset.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Surażu – jak wygląda prezentacja?",
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
      id: "skad-wiemy",
      heading: "Dwieście stanowisk archeologicznych — czyli skąd wiemy, co jedzono dawniej",
      paragraphs: [
        "Suraż to jedno z najmniejszych miast w Polsce: dziewięćset sześćdziesiąt czworo mieszkańców na blisko trzydziestu czterech kilometrach kwadratowych, czyli niecałe dwadzieścia dziewięć osób na kilometr — dokładnie tyle, ile ma niejedna gmina wiejska. Zachował się tu układ przestrzenny z piętnastego i szesnastego wieku z dwoma rynkami, najlepiej zachowany w całym dawnym Wielkim Księstwie Litewskim. A na terenie gminy naliczono około dwustu stanowisk archeologicznych — od epoki kamienia, przez brąz, po żelazo — w tym wczesnośredniowieczne kurhany i dwa grodziska, w samym Surażu i w Zawykach. Warownia nad Narwią stała tu już w jedenastym wieku.",
        "Miejsce, w którym pod ziemią leży dwieście stanowisk, jest dobrym pretekstem do pytania, które w rozmowach o gotowaniu pada rzadko: skąd my właściwie wiemy, co ludzie jedli dawniej.",
        "Źródła są cztery i każde mówi co innego.",
        "Archeologia mówi najwięcej o surowcu. Z wykopalisk zostają kości zwierząt, pestki, ziarna, muszle, resztki przywarte do ścianek naczyń i same naczynia — ich kształt zdradza, czy gotowano, czy pieczono. To wiedza twarda, ale jednostronna: mówi, co jedzono, i prawie nic o tym, jak to smakowało i w jakich połączeniach.",
        "Dokumenty mówią o handlu. Inwentarze majątków, rachunki dworskie, przywileje targowe i jarmarczne — z nich wiadomo, co kupowano, czym handlowano i co się opłacało. Tykocin spławiał zboże do Gdańska, Drohiczyn miał siedemdziesiąt karczem; takie liczby pochodzą właśnie stąd.",
        "Książki kucharskie mówią o kuchni bogatych. To trzeba powiedzieć wyraźnie, bo bywa mylące: dawne książki pisano dla dworów i zamożnego mieszczaństwa. Opisują kuchnię, którą jadła może kilka procent ludzi. Codziennego jedzenia większości nikt nie zapisywał, bo nie było czego zapisywać — i to jest największa dziura w naszej wiedzy.",
        "Przekaz ustny jest najbogatszy i najmniej wiarygodny. Sięga najwyżej trzech pokoleń wstecz, a pamięć porządkuje i upiększa.",
        "I stąd bierze się nieporozumienie, które spotykam bardzo często. „Babciny przepis” albo „tak się robiło dawniej” oznacza w praktyce lata pięćdziesiąte albo sześćdziesiąte dwudziestego wieku. To jest siedemdziesiąt lat temu, nie pięćset. Kuchnia, którą uważamy za odwiecznie polską, jest w dużej mierze dwudziestowieczna — zbudowana na produktach, które wcześniej były rzadkie albo których w ogóle nie było, i na sprzęcie, który dopiero wtedy trafił pod strzechy.",
        "Nie piszę tego, żeby cokolwiek odbierać tym przepisom. Przepis nie musi być stary, żeby był dobry — i nie jest gorszy dlatego, że ma siedemdziesiąt lat zamiast pięciuset. Chodzi mi tylko o to, żeby nazywać rzeczy uczciwie.",
        "Dlatego ostrożnie podchodzę do hasła „tradycyjny smak” w reklamach sprzętu kuchennego, także tego, który sprzedaję. To urządzenie nie odtwarza żadnej dawnej kuchni i nie ma takiej ambicji. Robi dania współczesne — te same, które robicie dziś — tylko wygodniej i bez stania nad garnkiem. To wystarczający powód, żeby je kupić. Obiecywanie przy okazji podróży w czasie byłoby po prostu nieprawdą.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Surażu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w domu przepis przekazany w rodzinie, weźcie go na spotkanie. Nie po to, żeby go zmieniać — po to, żeby sprawdzić, co z niego da się przenieść bez straty.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Surażu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla surażskiej rodziny",
      paragraphs: [
        "Suraż jest jednym z najmniejszych miast w Polsce: dziewięćset sześćdziesiąt czworo mieszkańców, ale na blisko trzydziestu czterech kilometrach kwadratowych — to gęstość niecałych dwudziestu dziewięciu osób na kilometr, taka jak w gminie wiejskiej. Cała gmina liczy nieco ponad tysiąc dziewięćset osób i dzieli się na trzy sołectwa. Prawa miejskie nadano tu w piętnastym wieku, choć część źródeł przesuwa tę datę o pół wieku wstecz. Zachował się układ przestrzenny z piętnastego i szesnastego stulecia z dwoma rynkami — najlepiej zachowany w całym dawnym Wielkim Księstwie Litewskim. Na terenie gminy naliczono około dwustu stanowisk archeologicznych, w tym wczesnośredniowieczne kurhany i dwa grodziska, w Surażu i w Zawykach; warownia nad Narwią stała tu już w jedenastym wieku. Klasycystyczny kościół Bożego Ciała pochodzi z 1878 roku, cerkiew z szesnastego wieku, a w Zawykach zachowały się dwie osiemnastowieczne kaplice pounickie. Trzydzieści procent powierzchni gminy leży w Narwiańskim Parku Narodowym — Suraż wyznacza jego południowy kraniec. Miasto było siedzibą starostwa, a podupadło, gdy kolej warszawsko-petersburska ominęła je na rzecz pobliskich Łap.",
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

  districtsHeading: "Do których części gminy Suraż dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzech sołectw gminy, w tym do Zawyk i Doktorc. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Suraż też przyjadę",
  nearbyParagraphs: [
    "Łapy, Zabłudów, Choroszcz, Bielsk Podlaski i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Łapy", "Zabłudów", "Choroszcz", "Bielsk Podlaski"],

  about: blokOMnie("do Suraża", "w Surażu i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Suraża bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzech sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo tę nazwę nosi kilka miejscowości w regionie: chodzi o Suraż nad Narwią w powiecie białostockim.",
    },
    ...faqWspolne("w Surażu"),
    {
      question: "Skąd właściwie wiadomo, co jedzono dawniej?",
      answer:
        "Z czterech źródeł o bardzo różnej wiarygodności. Archeologia daje kości, pestki, ziarna i naczynia — mówi, co jedzono, ale nie jak smakowało. Dokumenty i inwentarze mówią o handlu. Dawne książki kucharskie opisują kuchnię dworów, nie codzienną. A przekaz ustny sięga najwyżej trzech pokoleń.",
    },
    {
      question: "Czy „babciny przepis” to naprawdę dawna kuchnia?",
      answer:
        "Zwykle oznacza lata pięćdziesiąte albo sześćdziesiąte dwudziestego wieku, czyli siedemdziesiąt lat temu, a nie pięćset. Kuchnia, którą uważamy za odwiecznie polską, jest w dużej mierze dwudziestowieczna. To niczego jej nie odbiera — przepis nie musi być stary, żeby był dobry.",
    },
    {
      question: "Czy Thermomix odtwarza tradycyjne smaki?",
      answer:
        "Nie i nie ma takiej ambicji, choć reklamy sprzętu kuchennego lubią to sugerować. Urządzenie robi dania współczesne — te same, które gotujecie dziś — tylko wygodniej i bez stania nad garnkiem. To wystarczający powód, żeby je rozważyć; obiecywanie przy okazji podróży w czasie byłoby nieprawdą.",
    },
  ],

  geo: { lat: 52.9506, lng: 22.9558 },
};
