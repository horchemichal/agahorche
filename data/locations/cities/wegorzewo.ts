import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * WĘGORZEWO — gmina miejsko-wiejska w powiecie węgorzewskim.
 * MIASTO 10 488, GMINA 15 213 (GUS 31.12.2024).
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * PRAWA MIEJSKIE 4 KWIETNIA 1571 r., nadał KSIĄŻĘ ALBRECHT
 * FRYDERYK HOHENZOLLERN.
 * OBALONE: „prawa miejskie od Krzyżaków" — 46 lat po
 * sekularyzacji zakonu. Krzyżacki jest tylko ZAMEK.
 * PRZYNALEŻNOŚĆ: MAZURY (Prusy Książęce). NIE WARMIA.
 * ZAMEK: pierwotnie drewniany, budowa 1335; przebudowa
 * murowana 1398.
 * KOŚCIÓŁ PARAFIALNY ukończony 1611 — ma NAJSTARSZE ORGANY
 * NA MAZURACH. To jest podstawa kąta.
 * RZEKA WĘGORAPA — wypływa z jeziora Mamry i płynie przez
 * miasto na północ.
 * JEZIORO MAMRY — miasto leży u jego północnego krańca.
 * ⚠ NIE PISZĘ „miasto nad Mamrami" jak o nadbrzeżnym kurorcie
 * — miasto leży nad WĘGORAPĄ. NIE PISZĘ też, że Mamry to
 * „drugie co do wielkości jezioro w Polsce" — niepotwierdzone.
 * MIĘDZYNARODOWY JARMARK FOLKLORU — organizowany
 * NIEPRZERWANIE OD 1978 r., pierwszy weekend sierpnia;
 * organizator: MUZEUM KULTURY LUDOWEJ W WĘGORZEWIE.
 * NUMERU EDYCJI NA 2026 NIE PODAJĘ.
 * JEZIORO ŚWIĘCAJTY w sąsiedztwie.
 *
 * KĄT: DOPRAWIANIE — próbować, korygować, wiedzieć, kiedy
 * przestać. Kąt od najstarszych organów na Mazurach:
 * instrumentu, który trzeba stroić, a nie nastawić raz.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że doprawianie to nie jedna czynność na końcu, tylko
 *   proces powtarzany w trakcie,
 * — że przy zamkniętym naczyniu ten nawyk trzeba zbudować
 *   świadomie, bo nic nie zaprasza do zaglądania,
 * — że doprawia się w trzech różnych momentach z trzech
 *   różnych powodów: na początku, żeby składniki oddały smak;
 *   w trakcie, żeby korygować; na końcu, bo smak zmienia się
 *   przy stygnięciu,
 * — że danie gorące i to samo danie ciepłe smakują inaczej,
 *   więc próbowanie wrzącego jest mylące,
 * — że najczęstszy błąd to doprawianie w jednym kroku, na
 *   samym końcu i od razu dużą ilością,
 * — że podniebienie się przyzwyczaja i po piątej próbie już
 *   nie jest wiarygodne,
 * — i ODMOWA: nie doradzam nic o ilości soli ze względów
 *   zdrowotnych.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD o ograniczaniu soli, cukru czy tłuszczu
 *   ze względów zdrowotnych. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ liczby sołectw ani numeru edycji jarmarku.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckich nazw miasta ani rzeki, ani
 *   przejściowej nazwy polskiej z lat 1945–1946.
 * — ZERO GRANICY z obwodem kaliningradzkim i odległości
 *   do niej.
 * — ZERO roku 1945.
 * — ZERO cmentarza wojennego jako atrakcji.
 * — ZERO obiektów i pozostałości militarnych w okolicy.
 * — ZERO wysiedleń i akcji „Wisła".
 * — O Jarmarku Folkloru i muzeum piszę rzeczowo, bez
 *   folkloryzowania mieszkańców.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Sól" ma własne miasto
 * i dotyczy jednego składnika. „Przyprawy" dotyczą grupy
 * składników. „Cukier i karmel" dotyczą przypalania.
 * „Zmysły — jak poznać, że gotowe" (Poddębice) dotyczą
 * rozpoznania gotowości. „Szczera ocena" (Lidzbark
 * Warmiński) dotyczy opinii innych ludzi. Tutaj chodzi
 * o DOPRAWIANIE JAKO CZYNNOŚĆ POWTARZANĄ i o moment,
 * w którym trzeba przestać.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw gminy.
 * — NIE PISZĘ o Kanale Węgorzewskim — brak źródła z datą.
 * — NIE PODAJĘ powierzchni ani głębokości Mamr.
 * — NIE PISZĘ, że Mamry są drugim co do wielkości jeziorem
 *   w Polsce.
 * — NIE PODAJĘ rezerwatów w gminie — nie potwierdzono.
 * — NIE PRZYPISUJĘ Węgorzewu produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ Węgorzewa z WĘGORZYNEM w zachodniopomorskim.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 10 488, gmina 15 213 mieszkańców,
 * — prawa miejskie 4 kwietnia 1571 r. od księcia Albrechta
 *   Fryderyka Hohenzollerna; Węgorzewo leży na Mazurach,
 * — zamek drewniany budowany od 1335 r., murowany od 1398 r.,
 * — kościół parafialny ukończony w 1611 r., z najstarszymi
 *   organami na Mazurach,
 * — przez miasto płynie Węgorapa, wypływająca z jeziora Mamry,
 * — Międzynarodowy Jarmark Folkloru odbywa się nieprzerwanie
 *   od 1978 r., w pierwszy weekend sierpnia; organizuje go
 *   Muzeum Kultury Ludowej w Węgorzewie,
 * — w sąsiedztwie leży jezioro Święcajty.
 */
export const WEGORZEWO: CityContent = {
  slug: "wegorzewo",
  h1: "Thermomix Węgorzewo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Węgorzewo (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Węgorzewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Węgorzewo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Węgorzewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Węgorzewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Węgorzewo i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Doprawianie to nie jedna czynność na końcu. To strojenie w trakcie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Węgorzewie – jak wygląda prezentacja?",
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
      id: "doprawianie",
      heading: "Najstarsze organy na Mazurach — czyli o doprawianiu",
      paragraphs: [
        "W węgorzewskim kościele parafialnym, ukończonym w 1611 roku, stoją najstarsze organy na Mazurach. Instrument tego rodzaju ma jedną właściwość, która mnie w nim najbardziej interesuje: nie da się go nastawić raz. Trzeba go stroić, wracać do niego, sprawdzać. Samo miasto jest zresztą młodsze od tych organów tylko o czterdzieści lat — prawa miejskie dostało 4 kwietnia 1571 roku od księcia Albrechta Fryderyka, a nie od Krzyżaków, jak się często pisze; krzyżacki jest tu wyłącznie zamek, budowany od 1335 roku.",
        "Miasto z takim instrumentem jest właściwym miejscem na stronę o doprawianiu — czynności, którą prawie wszyscy traktują jako jeden krok na końcu, a która jest procesem.",
        "Bo doprawianie to nie jest „posolić przed podaniem”. To jest wracanie do dania kilka razy i za każdym razem z innego powodu. Na początku doprawia się po to, żeby składniki oddały smak — sól wyciąga wodę i to działa tylko wtedy, gdy jest tam od początku. W trakcie doprawia się, żeby korygować, bo warzywa bywają różne, a ta sama cebula raz jest słodka, raz nie. Na końcu doprawia się dlatego, że smak zmienia się przy stygnięciu.",
        "Przy zamkniętym naczyniu ten nawyk trzeba zbudować świadomie i to jest realna zmiana po przesiadce z garnka. Garnek stoi otwarty i sam zaprasza, żeby zamieszać i spróbować. Tutaj nic nie zaprasza — urządzenie pracuje, pokrywa jest na miejscu i najłatwiej jest po prostu poczekać do końca. Dlatego wiele osób w pierwszych miesiącach doprawia raz, na samym końcu, i dziwi się, że danie jest płaskie.",
        "Jest jeszcze pułapka, o której mówi się rzadko: gorące i ciepłe to nie to samo. Danie wrzące smakuje inaczej niż to samo danie na talerzu — sól wydaje się słabsza, słodycz mniej wyraźna, ostrość mocniejsza. Próbowanie prosto z naczynia zawsze trochę myli, więc lepiej ostudzić łyżkę przez chwilę, zanim się podejmie decyzję.",
        "Najczęstszy błąd wynika wprost z powyższego: doprawianie w jednym kroku, na końcu i od razu dużą ilością. To jest odwrotność strojenia. Lepiej pięć razy po trochu niż raz dużo — bo dodać zawsze można, a odjąć nie da się nigdy.",
        "I ostatnia rzecz, o której nie myśli prawie nikt: własne podniebienie się przyzwyczaja. Po piątej próbie tego samego dania nie czujecie już soli, którą czuje ktoś, kto siada do stołu pierwszy raz. Dlatego przy dłuższym gotowaniu warto zrobić przerwę między próbami albo poprosić kogoś innego o spróbowanie.",
        "I granica: nie doradzę Wam, ile soli, cukru czy tłuszczu powinno być w Waszym jedzeniu ze względów zdrowotnych. Mówię wyłącznie o smaku i o technice. Jeśli macie zalecenia dietetyczne, to one są ważniejsze od wszystkiego, co tu napisałam — i nie zamierzam się do nich odnosić.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Węgorzewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu próbujemy w trakcie, a nie dopiero na końcu — i chętnie pokażę, jak bardzo to samo danie zmienia się przez dwie minuty i szczyptę czegoś.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Węgorzewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla węgorzewskiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad dziesięć tysięcy mieszkańców, a cała gmina ponad piętnaście. Węgorzewo leży nad Węgorapą, która wypływa z jeziora Mamry i płynie stąd na północ — warto to uściślić, bo miasto bywa opisywane jako leżące nad samym jeziorem. Prawa miejskie dostało 4 kwietnia 1571 roku od księcia Albrechta Fryderyka Hohenzollerna. Zamek zaczęto budować w 1335 roku jako drewniany, murowany powstał w 1398. Kościół parafialny ukończono w 1611 i to w nim stoją najstarsze organy na Mazurach. Od 1978 roku odbywa się tu nieprzerwanie Międzynarodowy Jarmark Folkloru, organizowany w pierwszy weekend sierpnia przez Muzeum Kultury Ludowej.",
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

  districtsHeading: "Do których części gminy Węgorzewo dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Węgorzewo też przyjadę",
  nearbyParagraphs: [
    "Giżycko, Kętrzyn, Gołdap, Olecko i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Giżycko", "Kętrzyn", "Gołdap", "Olecko"],

  about: blokOMnie("do Węgorzewa", "w Węgorzewie i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Węgorzewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Węgorzewo na Mazurach, w województwie warmińsko-mazurskim — nie o Węgorzyno w zachodniopomorskim, z którym bywa mylone.",
    },
    ...faqWspolne("w Węgorzewie"),
    {
      question: "Kiedy doprawiać danie w Thermomixie?",
      answer:
        "W kilku momentach i z różnych powodów. Na początku, żeby składniki oddały smak. W trakcie, żeby korygować, bo warzywa bywają różne. Na końcu, bo smak zmienia się przy stygnięciu. Doprawianie raz, na samym końcu, to najczęstsza przyczyna płaskiego smaku.",
    },
    {
      question: "Dlaczego danie na talerzu smakuje inaczej niż z naczynia?",
      answer:
        "Bo gorące i ciepłe to nie to samo. We wrzącym daniu sól wydaje się słabsza, słodycz mniej wyraźna, a ostrość mocniejsza. Warto ostudzić łyżkę przez chwilę, zanim podejmie się decyzję o doprawieniu.",
    },
    {
      question: "Ile soli powinno być w moim jedzeniu?",
      answer:
        "Na to nie odpowiem. Mówię wyłącznie o smaku i o technice — o tym, że lepiej pięć razy po trochu niż raz dużo, bo dodać zawsze można, a odjąć nie. Jeśli macie zalecenia dietetyczne, one są ważniejsze od wszystkiego, co bym tu napisała.",
    },
  ],

  geo: { lat: 54.2136, lng: 21.7416 },
};
