import type { CityContent } from "../city-content";
import {
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
 * CHEŁMIEC — GMINA WIEJSKA w powiecie nowosądeckim.
 * 29 811 mieszkańców (31.12.2024), 111,9 km², 27 SOŁECTW.
 * Otacza Nowy Sącz z trzech stron „w kształcie podkowy”, ma enklawę
 * Kunów.
 *
 * OŚ STRONY: WARSZTAT, NIE SYPIALNIA. Gmina wytwórcza — od jednego
 * z pierwszych szybów naftowych w Europie (Klęczany 1858) po bramy
 * eksportowane na cały świat.
 *
 * ⚠️ NIE DAWAĆ OSI „OBWARZANEK” — należy do gminy wiejskiej Nowy Targ
 * (`nowy-targ-gmina.ts`). Zresztą obwarzanek jest tu najsłabszym
 * atutem, a przemysł najmocniejszym.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KLĘCZANY: WYDOBYCIE ROPY NAFTOWEJ OD 1858 R., jeden z pierwszych
 *   w Europie szybów naftowych; eksploatacją kierował BARON MAURYCY
 *   BRUNICKI. Pierwsza wzmianka o Klęczanach 1280, w rejestrze dóbr
 *   klarysek. Wydobycie piaskowca od 1912 r.,
 * — KOPALNIA SUROWCÓW SKALNYCH W KLĘCZANACH Sp. z o.o. — SPÓŁKA
 *   WŁASNA GMINY, dochód ponad 6 MLN ZŁ ROCZNIE,
 * — WIŚNIOWSKI Sp. z o.o. S.K.A. — ✅ SIEDZIBA WG KRS: WIELOGŁOWY 153,
 *   33-311 WIELOGŁOWY, czyli W TEJ GMINIE. Założona 1 SIERPNIA 1989 R.
 *   przez ANDRZEJA WIŚNIOWSKIEGO (pierwsza brama w garażu);
 *   ok. 2 000 PRACOWNIKÓW, 27 HA powierzchni produkcyjnej. Bramy,
 *   drzwi, okna, ogrodzenia; eksport,
 * — ZAKŁADY MIĘSNE „SZUBRYT” Sp. z o.o. — Węgrzynek 50, 33-395 Chełmiec,
 * — ⚠️ DAKO MA SIEDZIBĘ REJESTROWĄ W NOWYM SĄCZU, mimo że gmina
 *   wymienia ją wśród swoich firm. NIE PISAĆ „firma z gminy Chełmiec”,
 * — WIELOGŁOWY: pierwsza wzmianka 1273 — Otto Toporczyk otrzymuje
 *   osadę od Bolesława Wstydliwego. Kamienny kościół Wniebowzięcia
 *   NMP z 1318 r.; XVI-wieczny modrzewiowy dwór,
 * — BITWA POD MARCINKOWICAMI — 6 GRUDNIA 1914 R., z udziałem
 *   Legionów Polskich. ⚠️ SZCZEGÓŁÓW PRZEBIEGU NIE ZWERYFIKOWANO —
 *   podawać wyłącznie datę i fakt,
 * — MUZEUM SZTUKI LUDOWEJ IM. KS. EDWARDA NITKI W PASZYNIE.
 *   Budowę rozpoczęto 1982, otwarte 1993, poświęcone 10 września 1994.
 *   Zbiory: OK. 3 000 RZEŹB I OBRAZÓW NA SZKLE, z czego 1 025
 *   z prywatnych zbiorów ks. Nitki. „FENOMEN PASZYŃSKI” — ks. Edward
 *   Nitka organizował warsztaty dla lokalnych twórców, w tym osób
 *   z niepełnosprawnościami; ok. 20 twórców ludowych,
 * — PRZEGLĄD DOROBKU KULTURALNEGO I KULINARNEGO KGW GMINY CHEŁMIEC —
 *   XX JUBILEUSZOWA EDYCJA 12 LIPCA 2026 R. Trzy kategorie: pieśń
 *   ludowa, rękodzieło, POTRAWY REGIONALNE. Zwycięzcy ostatniej
 *   edycji: KGW Rdziostów, KGW „Pod Skałą” w Klęczanach,
 *   Stowarzyszenie KGW Marcinkowice, KGW Krasne Potockie,
 * — REGON: 3 292 PODMIOTY (31.12.2024), 2 796 osób fizycznych —
 *   najwięcej w okolicy,
 * — WZROST LUDNOŚCI O 28,2% OD 2002 R.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — FRAZY „NAJLUDNIEJSZA GMINA WIEJSKA W POLSCE”. Gmina tak o sobie
 *   pisze, ale dane pochodzą z lat 2015–2018 i dla 2024/2025
 *   NIE POTWIERDZONO. Jeśli w ogóle — z zastrzeżeniem czasu,
 * — JABŁEK ŁĄCKICH. GMINA CHEŁMIEC JEST POZA OBSZAREM ChOG
 *   (obszar: Łącko, Podegrodzie, Stary Sącz, Łukowica). NIE UŻYWAĆ,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — LICZB Z PREZENTACJI GMINY (27 960 mieszkańców itd.) — pochodzą
 *   z ok. 2015 r. Używać tylko nazw firm, nie liczb stamtąd.
 *
 * PUŁAPKI:
 * — SIEDZIBA WIŚNIOWSKIEGO TO WIELOGŁOWY, GMINA CHEŁMIEC — strona
 *   Nowego Sącza (`nowy-sacz.ts`) ma o tym notatkę i pisze
 *   „z okolic Nowego Sącza”,
 * — CHOMRANICE jako sołectwo odtworzone pośrednio — nie eksponować.
 */

export const CHELMIEC: CityContent = {
  slug: "chelmiec",
  h1: "Thermomix Chełmiec – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Chełmiec — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Chełmiec: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chełmiec — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Chełmiec. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Chełmca i wszystkich dwudziestu siedmiu sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Chełmcu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Nie sypialnia Sącza, tylko jego warsztat",
      paragraphs: [
        "Chełmiec otacza Nowy Sącz z trzech stron i łatwo o niego oprzeć wygodną, ale fałszywą tezę: że to sypialnia miasta. Liczby mówią coś innego. W gminie zarejestrowanych jest ponad trzy tysiące dwieście podmiotów gospodarczych — więcej niż w Starym Sączu i Podegrodziu razem wziętych.",
        "Historia wytwarzania jest tu przy tym starsza, niż większość ludzi przypuszcza. W Klęczanach ropę naftową wydobywano od tysiąc osiemset pięćdziesiątego ósmego roku, a eksploatacją kierował baron Maurycy Brunicki. To jeden z pierwszych szybów naftowych w Europie — kilka lat po Bóbrce, w tym samym pionierskim okresie.",
        "Ropa się skończyła, kamień nie. Od tysiąc dziewięćset dwunastego roku w Klęczanach wydobywa się piaskowiec, a dzisiejsza kopalnia surowców skalnych jest spółką należącą do gminy i przynosi jej ponad sześć milionów złotych rocznie. To rzadka sytuacja: samorząd, który sam prowadzi zakład wydobywczy.",
        "Najbardziej znana firma zaczęła się natomiast w garażu. Pierwszego sierpnia tysiąc dziewięćset osiemdziesiątego dziewiątego roku Andrzej Wiśniowski zrobił pierwszą bramę; dziś zakład w Wielogłowach zajmuje dwadzieścia siedem hektarów i zatrudnia około dwóch tysięcy osób, a bramy, drzwi i ogrodzenia stąd idą na eksport. Siedziba jest w tej gminie, nie w mieście — choć często pisze się inaczej.",
        "Do tego dochodzą zakłady mięsne w Węgrzynku i kilkanaście mniejszych firm produkcyjnych. Dodam uczciwie jedno zastrzeżenie: znana fabryka okien, którą gmina wymienia wśród swoich, ma siedzibę rejestrową w Nowym Sączu — więc nie będę jej przypisywać Chełmcowi.",
        "Jest jeszcze druga strona tej gminy i ona ratuje całą opowieść przed suchością. W Paszynie stoi Muzeum Sztuki Ludowej imienia księdza Edwarda Nitki, z około trzema tysiącami rzeźb i obrazów na szkle. Ksiądz Nitka organizował warsztaty dla miejscowych twórców, w tym dla osób z niepełnosprawnościami, i wyrosło z tego coś, co nazywa się dziś fenomenem paszyńskim. Ta sama gmina wydobywa kamień i rzeźbi w drewnie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Chełmiec?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Koniecznie podaj sołectwo. Gmina ma ich dwadzieścia siedem i rozciąga się wokół Nowego Sącza podkową — od Chomranic i Klęczan po Paszyn i Kunów, który jest w dodatku enklawą. Na cenę to nie wpływa, ale na planowanie dnia bardzo.",
        "Jeśli pracujesz na zmiany w którymś z tutejszych zakładów, powiedz to od razu. Umawiam się wieczorami i w weekendy — dopasowuję się do grafiku, nie odwrotnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Chełmiec"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, która przez dwadzieścia lat urosła o prawie jedną trzecią",
      paragraphs: [
        "Od dwa tysiące drugiego roku liczba mieszkańców gminy wzrosła o ponad dwadzieścia osiem procent. To bardzo dużo i widać to na drogach, w szkołach i w liczbie nowych domów. Mieszka tu dziś blisko trzydzieści tysięcy osób.",
        "Taki wzrost oznacza jedno: mnóstwo młodych rodzin, które przyszły tu z miasta albo zostały na miejscu, budując obok rodziców. W wielu domach oboje dorośli pracują na etacie albo na zmiany, a dzieci wracają ze szkoły wcześniej niż ktokolwiek inny.",
        "Najbardziej praktyczna rzecz jest tu prosta. Danie jednogarnkowe wstawia się rano i wychodzi z domu. Gotuje się bez pilnowania, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie przypala się i nikt nie musi wracać, żeby zamieszać.",
        "Druga to gotowanie z zapasem, sensowne przy pracy zmianowej. Podwójna porcja zupy, sos na kilka dni, pasty do kanapek na drugie śniadanie, ciasto — robione seriami w weekend, w jednym naczyniu.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek albo ktokolwiek, kto jest w domu wcześniej. Przy dwóch pracujących dorosłych i zmianach to bywa realnym odciążeniem, a nie ciekawostką.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Chełmiec i gotowanie — dwadzieścia lat przeglądu kół gospodyń",
    paragraphs: [
      "Ta gmina ma coś, czego nie ma prawie żadna inna, o której pisałam: własny konkurs kulinarny z dwudziestoletnią historią. Przegląd Dorobku Kulturalnego i Kulinarnego kół gospodyń gminy Chełmiec ma w dwa tysiące dwudziestym szóstym roku jubileuszową, dwudziestą edycję, dwunastego lipca.",
      "Ocenia się w nim trzy kategorie: pieśń ludową, rękodzieło i potrawy regionalne. W ostatniej edycji na podium stanęły koła z Rdziostowa, Klęczan, Marcinkowic i Krasnego Potockiego. To znaczy, że kuchnia jest tu żywa i konkurencyjna — nie muzealna.",
      "Powiem uczciwie, czego nie znalazłam: żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie. Nie będę też przypisywać jej jabłek łąckich, bo unijne oznaczenie obejmuje cztery inne gminy i Chełmiec do nich nie należy. Nie warto brać cudzego.",
      "Kuchnia jest tu sądecka i domowa: ziemniaki, kapusta, fasola, zupy na kościach, wędliny, ciasto drożdżowe. W gminie, w której działa dużych kilka zakładów mięsnych i dwadzieścia siedem wsi z własnymi gospodarstwami, mięso i przetwory z niego są po prostu podstawą.",
      "Dla urządzenia najciekawsze jest to, co powtarzalne: farsze, pasztety, pasty, ciasto na pierogi, zupy na zapas, przetwory. Czyli rozdrabnianie, mielenie, wyrabianie i mieszanie. Czego nie zrobi, powiem wprost: nie uwędzi kiełbasy i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Chełmiec dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu siedmiu, bez żadnej dopłaty za odległość. Gmina liczy blisko trzydzieści tysięcy mieszkańców na stu dwunastu kilometrach kwadratowych i jest jedną z ludniejszych gmin wiejskich w kraju.",
    "Kształt ma nietypowy: otacza Nowy Sącz z trzech stron, podkową, a do tego ma enklawę — Kunów, oderwany od reszty. Sołectwa to między innymi Biczyce Dolne i Górne, Chełmiec, Chomranice, Klęczany, Klimkówka, Kurów, Librantowa, Marcinkowice, Paszyn, Piątkowa, Rdziostów, Świniarsko, Trzetrzewina, Wielogłowy i Wola Kurowska.",
    "Kilka miejsc warto znać. W Klęczanach od tysiąc osiemset pięćdziesiątego ósmego roku wydobywano ropę, a dziś działa kopalnia piaskowca będąca spółką gminy. W Wielogłowach stoi kamienny kościół z tysiąc trzysta osiemnastego roku i szesnastowieczny modrzewiowy dwór, a obok — największy zakład w gminie. W Paszynie jest muzeum sztuki ludowej z około trzema tysiącami rzeźb i obrazów na szkle. W Marcinkowicach szóstego grudnia tysiąc dziewięćset czternastego roku stoczono bitwę z udziałem Legionów Polskich.",
    "Dojazd: przez gminę biegnie linia kolejowa z Tarnowa do Leluchowa oraz dwie drogi krajowe — od Brzeska i od Krynicy. Do centrum Nowego Sącza jest z większości sołectw kilkanaście minut.",
  ],
  districts: [
    "Chełmiec",
    "Wielogłowy",
    "Klęczany",
    "Marcinkowice",
    "Paszyn",
    "Świniarsko",
    "Librantowa i Piątkowa",
    "Trzetrzewina i Rdziostów",
  ],

  nearbyHeading: "Nowy Sącz, Stary Sącz i Kamionka Wielka też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina otacza Nowy Sącz, więc do miasta jest stąd wszędzie blisko. Dojeżdżam też do Starego Sącza, Podegrodzia, Kamionki Wielkiej, Korzennej i Nawojowej — bez doliczania kosztu dojazdu.",
    "Przy umawianiu wystarczy, że podasz sołectwo. Resztę zaplanuję sama.",
  ],
  nearbyTowns: [
    "Nowy Sącz",
    "Stary Sącz",
    "Podegrodzie",
    "Kamionka Wielka",
    "Korzenna",
    "Kraków",
  ],

  about: blokOMnie("do gminy Chełmiec", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Wielogłowach albo Paszynie. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dwadzieścia siedem sołectw traktuję tak samo, łącznie z Kunowem, który jest enklawą oderwaną od reszty gminy. Przy umawianiu podaj nazwę wsi — to potrzebne wyłącznie do trasy.",
    },
    ...faqWspolne("w gminie Chełmiec"),
    {
      question: "Pracuję na zmiany. Da się umówić wieczorem?",
      answer:
        "Da się. Umawiam się wieczorami i w weekendy, bo w gminie z kilkoma dużymi zakładami to najczęstsza sytuacja. Powiedz po prostu, kiedy masz dwie spokojne godziny — dopasowuję się do Waszego grafiku, nie odwrotnie.",
    },
  ],

  geo: { lat: 49.6292, lng: 20.6672 },
};
