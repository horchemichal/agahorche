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
 * ZABŁUDÓW — gmina miejsko-wiejska w powiecie białostockim.
 * GMINA ok. 340 km², 47 SOŁECTW plus miasto.
 * POWIERZCHNIA MIASTA 14,30 km².
 * ⚠⚠ LICZB MIESZKAŃCÓW NIE PODAJĘ. Najświeższe dostępne:
 * gmina 9 737 (31.12.2020) — ZA STARE; dane dla miasta
 * niedatowane. Notatka projektowa podawała 2 400 — NIE UŻYWAM.
 * Piszę jakościowo.
 * ⚠ Ciekawostka historyczna, którą MOGĘ podać, bo jest
 * datowana: SZCZYT ZALUDNIENIA 3 772 MIESZKAŃCÓW W 1897 r.
 *
 * ⚠⚠ PRAWA MIEJSKIE 1553 r., NA PRAWIE MAGDEBURSKIM.
 * ⚠ NADAWCA — SPRZECZNOŚĆ: część źródeł podaje króla
 * ZYGMUNTA II AUGUSTA, jedno GRZEGORZA CHODKIEWICZA.
 * PISZĘ: „prawa magdeburskie w 1553 r., a twórcą miasta
 * był Grzegorz Chodkiewicz" — bez rozstrzygania, kto formalnie
 * wystawił dokument.
 * ⚠⚠ PRAWA MIEJSKIE NIEPRZERWANE OD 1553 r. — miasto
 * uniknęło degradacji w 1950 r. TO JEST PODSTAWA KĄTA.
 *
 * CHODKIEWICZOWIE: przed 1483 r. król Kazimierz Jagiellończyk
 * nadał te ziemie IWANOWI CHODKIEWICZOWI. GRZEGORZ CHODKIEWICZ
 * był twórcą miasta i jego układu: ZAPLANOWAŁ RYNEK ZBLIŻONY
 * DO KWADRATU, Z ULICAMI WYCHODZĄCYMI Z KAŻDEGO ROGU.
 * W 1567 r. ufundował cerkiew, założył szpital dla ubogich
 * i szkołę. Po śmierci Aleksandra Chodkiewicza w 1578 r.
 * majątek przypadł trzem siostrom.
 * ⚠⚠ UKŁAD Z XVI w. ZACHOWANY DO DZIŚ.
 *
 * REZYDENCJA: powstała w XVI w. jako założenie
 * ozdobno-użytkowe; w XVIII w. przekształcona w barokowy
 * zespół z murowanym pałacem, stawami i tarasowymi ogrodami;
 * po wojnie teren zaadaptowano na park miejski.
 *
 * ZABYTKI:
 * ⚠ KOŚCIOŁA ŚW. PIOTRA I PAWŁA NIE DATUJĘ — TRZY WERSJE
 * (1800–1850 / 1805–1840 / „połowa XIX w."). Piszę:
 * „klasycystyczny, z pierwszej połowy XIX wieku, wzorowany
 * na katedrze wileńskiej".
 * ⚠ CERKWI ZAŚNIĘCIA NMP NIE DATUJĘ CO DO ROKU —
 * sprzeczność (1854 kontra 1847–1855). Piszę „z połowy
 * XIX wieku". Zbudowana NA PLANIE KRZYŻA GRECKIEGO.
 * ⚠ CERKIEW WYŁĄCZNIE JAKO ZABYTEK ARCHITEKTURY.
 * KOŚCIÓŁ I CERKIEW STOJĄ OBA PRZY RYNKU.
 * Kaplica cmentarna św. Rocha (1854), kaplica św. Marii
 * Magdaleny (XIX w.).
 *
 * WODY: miasto leży MIĘDZY NARWIĄ A SUPRAŚLĄ, w pobliżu rzek
 * CZARNEJ, MŁYNKI i PŁOSKIEJ.
 *
 * ⚠⚠ GOSPODARKA — PODSTAWA KĄTA:
 * HANDEL ZBOŻEM, DREWNEM I MIODEM; później włókiennictwo,
 * GARBARSTWO SKÓR i stolarstwo.
 * ⚠⚠ TARGI COTYGODNIOWE W PONIEDZIAŁKI I PIĄTKI,
 * USTANOWIONE W XVI w., oraz JARMARK W ŚWIĘTO WNIEBOWZIĘCIA
 * NMP. Rytm dwóch targów w tygodniu utrzymuje się od XVI w.
 * GMINNE DOŻYNKI W RYBOŁACH.
 * ⚠ ROKU PIERWSZEJ EDYCJI NIE PODAJĘ.
 * ⚠ WĄTKU DREWNIANEJ ARCHITEKTURY ZABŁUDOWA NIE ROZWIJAM —
 * najsłynniejszy tutejszy obiekt drewniany należy do kategorii
 * wyłączonej etycznie, a innych konkretów źródła nie podają.
 * ZABŁUDÓW NIE NALEŻY DO CITTASLOW (nie potwierdzono —
 * nie twierdzę, że należy).
 * ⚠ NIE PRZYPISUJĘ Zabłudowowi produktów z Listy Produktów
 * Tradycyjnych — potrawy wymieniane w opracowaniach dotyczą
 * CAŁEGO obszaru dziewięciu gmin, nie tego miasta.
 *
 * KĄT: STAŁE MENU — czyli o tym, że większość rodzin gotuje
 * w kółko te same kilkanaście dań, i czy to źle.
 * Kąt od miasta, którego plan z XVI wieku jest czytelny
 * do dziś i które nieprzerwanie od 1553 roku jest miastem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przeciętna rodzina obraca kilkunastoma daniami
 *   i wraca do nich w kółko — i że wszyscy się tego wstydzą
 *   niepotrzebnie,
 * — że to nie jest lenistwo, tylko sensowna ekonomia:
 *   znane danie nie wymaga decyzji, zakupów pod przepis
 *   ani ryzyka,
 * — CO NAPRAWDĘ JEST PROBLEMEM: nie liczba dań, tylko to,
 *   czy zestaw jest ZRÓWNOWAŻONY — czy nie składa się
 *   z dwunastu wariantów tego samego,
 * — PROSTY TEST: wypisać na kartce, co się jadło przez
 *   dwa tygodnie. Zwykle wychodzi jedenaście do piętnastu dań,
 * — że sensowne poszerzanie repertuaru polega na dodawaniu
 *   JEDNEGO dania na raz i powtórzeniu go, aż wejdzie
 *   do stałego zestawu — a nie na gotowaniu za każdym razem
 *   czegoś nowego,
 * — że danie wchodzi do repertuaru dopiero wtedy, gdy da się
 *   je zrobić bez zaglądania do przepisu,
 * — UCZCIWIE I MOCNO: to jest największe rozczarowanie
 *   po zakupie takiego sprzętu. Ludzie kupują go po to,
 *   żeby gotować RÓŻNORODNIEJ, a po pół roku robią na nim
 *   te same pięć rzeczy,
 * — i że to nie jest wada urządzenia — nawyk jest silniejszy
 *   niż sprzęt i nikt nie zmieni repertuaru dlatego,
 *   że kupił maszynę.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — w szczególności NIC
 *   o „zbilansowanej diecie" i „urozmaiceniu dla zdrowia".
 *   Piszę wyłącznie o smaku i o znudzeniu. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO oceniania czyjegoś jadłospisu. Nigdy protekcjonalnie.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ⚠⚠ ZERO wątku drewnianej synagogi zabłudowskiej —
 *   to najsłynniejszy tutejszy obiekt, ale wiąże się
 *   bezpośrednio ze zniszczeniem wojennym. POMIJAM CAŁKOWICIE.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów wyznaniowych. Kościół i cerkiew
 *   wymieniam obok siebie jako dwa zabytki przy rynku,
 *   bez żadnego komentarza o relacjach między wyznaniami.
 * — ZERO biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Planowanie tygodnia"
 * dotyczy układania jadłospisu z wyprzedzeniem. „Zwykły
 * wtorek" (Miłakowo) dotyczy okazji i częstotliwości.
 * „Powrót do gotowania po latach przerwy" dotyczy osoby.
 * „Czy mi się to nie znudzi" dotyczy zapału po zakupie.
 * Tutaj chodzi o REPERTUAR: o skończoną listę dań, którą
 * każdy dom ma, i o to, jak ją sensownie zmieniać.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby mieszkańców.
 * — NIE ROZSTRZYGAM, kto nadał prawa miejskie w 1553 r.
 * — NIE DATUJĘ kościoła ani cerkwi co do roku.
 * — NIE PODAJĘ roku pierwszych Dożynek w Rybołach.
 * — NIE PRZYPISUJĘ Zabłudowowi produktu z Listy Produktów
 *   Tradycyjnych.
 * — NIE TWIERDZĘ, że należy do Cittaslow.
 * — NIE MYLĘ ZABŁUDOWA z ZABŁOCIEM. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — gmina liczy około 340 km² i 47 sołectw, a samo miasto
 *   14,3 km²,
 * — prawa magdeburskie z 1553 r.; twórcą miasta i jego układu
 *   był Grzegorz Chodkiewicz, który zaplanował rynek zbliżony
 *   do kwadratu, z ulicami wychodzącymi z każdego rogu —
 *   układ czytelny do dziś. W 1567 r. ufundował cerkiew,
 *   szpital dla ubogich i szkołę,
 * — Zabłudów jest miastem nieprzerwanie od 1553 r. i uniknął
 *   degradacji w 1950 r.,
 * — w 1897 r. mieszkało tu 3 772 osoby — najwięcej w historii,
 * — rezydencja powstała w XVI w., a w XVIII przekształcono ją
 *   w barokowy zespół z murowanym pałacem, stawami
 *   i tarasowymi ogrodami; dziś na tym terenie jest park
 *   miejski,
 * — przy rynku stoją obok siebie klasycystyczny kościół
 *   świętych Piotra i Pawła z pierwszej połowy XIX w.,
 *   wzorowany na katedrze wileńskiej, oraz cerkiew Zaśnięcia
 *   Najświętszej Maryi Panny z połowy XIX w., wzniesiona
 *   na planie krzyża greckiego,
 * — miasto leży między Narwią a Supraślą, w pobliżu rzek
 *   Czarnej, Młynki i Płoskiej,
 * — gospodarka opierała się historycznie na handlu zbożem,
 *   drewnem i miodem, a później na włókiennictwie,
 *   garbarstwie i stolarstwie,
 * — targi odbywają się w poniedziałki i piątki, a zwyczaj
 *   dwóch targów w tygodniu ustanowiono w XVI w.; jarmark
 *   przypada w święto Wniebowzięcia NMP.
 */
export const ZABLUDOW: CityContent = {
  slug: "zabludow",
  h1: "Thermomix Zabłudów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zabłudów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Zabłudowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zabłudów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zabłudowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zabłudowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Zabłudów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Każdy dom obraca kilkunastoma daniami. To nie lenistwo, tylko ekonomia.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zabłudowie – jak wygląda prezentacja?",
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
      id: "stale-menu",
      heading: "Rynek, który nie zmienił kształtu od 1553 roku — czyli o stałym repertuarze",
      paragraphs: [
        "Zabłudów jest miastem nieprzerwanie od 1553 roku. Nie stracił praw miejskich nawet w 1950, gdy tracili je wszyscy dookoła. Jego twórca, Grzegorz Chodkiewicz, zaplanował rynek zbliżony do kwadratu, z ulicami wychodzącymi z każdego rogu — i ten układ jest czytelny do dziś, po blisko pięciuset latach. Targi odbywają się tu w poniedziałki i piątki, a zwyczaj dwóch targów w tygodniu ustanowiono w szesnastym wieku.",
        "Miasto, które nie zmieniło planu przez pół tysiąca lat, jest dobrym miejscem, żeby powiedzieć coś, czego ludzie w kuchni się wstydzą: prawie każda rodzina gotuje w kółko te same kilkanaście dań.",
        "I nie ma w tym absolutnie nic złego. To nie jest lenistwo ani brak wyobraźni, tylko całkiem sensowna ekonomia. Znane danie nie wymaga podejmowania decyzji, nie wymaga zakupów robionych pod konkretny przepis, nie wymaga czytania i nie niesie ryzyka, że wyjdzie źle w środę o osiemnastej, gdy wszyscy są głodni. Dom, który ma pewny repertuar, po prostu je co dzień, i to jest osiągnięcie, a nie powód do wstydu.",
        "Problemem nie jest więc liczba dań. Problemem bywa co innego: czy ten zestaw jest zrównoważony. Zdarzają się repertuary złożone z dwunastu wariantów tej samej rzeczy — dwanaście dań mięsno-ziemniaczanych albo dwanaście makaronów w innym sosie. Wtedy nie chodzi o to, żeby ich było więcej, tylko o to, żeby były różne.",
        "Test jest prosty i zajmuje dwa tygodnie: wypisujcie na kartce, co jedliście na obiad. Po czternastu dniach będziecie mieli swoją listę. U większości ludzi wychodzi od jedenastu do piętnastu dań i to jest zupełnie normalne. Dopiero patrząc na tę listę, widać, czego w niej brakuje — zwykle warzyw jako dania głównego, kasz albo czegokolwiek z rybą.",
        "Poszerzanie repertuaru też ma swoją mechanikę, której prawie nikt nie stosuje. Nie polega ono na gotowaniu za każdym razem czegoś nowego — to daje wrażenie ruchu, ale nic nie zostaje. Polega na dodaniu jednego dania i powtórzeniu go kilka razy w krótkim odstępie, aż przestanie wymagać przepisu. Bo danie wchodzi do repertuaru dopiero wtedy, gdy da się je zrobić bez zaglądania do kartki. Do tego momentu jest eksperymentem, a nie pozycją w jadłospisie.",
        "Trzy nowe dania rocznie, dodane w ten sposób, po pięciu latach zmieniają całą kuchnię. Trzydzieści dań ugotowanych raz nie zmienia nic.",
        "Teraz muszę powiedzieć rzecz, która jest największym rozczarowaniem po zakupie takiego sprzętu i o której wolę uprzedzić, niż potem tłumaczyć. Ludzie kupują to urządzenie z myślą, że będą gotować różnorodniej. A po pół roku robią na nim te same pięć rzeczy — zwykle zupę, jakiś sos, coś dla dziecka i dwa desery.",
        "Nie uważam tego za wadę urządzenia. Uważam, że tak po prostu działa nawyk: jest silniejszy niż sprzęt i nikt nie zmieni swojego repertuaru dlatego, że kupił maszynę. Zmiana repertuaru to osobna decyzja i osobna praca, całkiem niezależna od tego, co stoi na blacie.",
        "Co urządzenie faktycznie zmienia, to skład tych pięciu rzeczy. Jeśli wcześniej jednym z nich był gotowy sos ze słoika, a teraz jest sos robiony od zera, bo to zajmuje tyle samo — to jest realna zmiana. Tylko mniejsza i mniej efektowna, niż obiecują reklamy.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zabłudowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie już swoją listę stałych dań, powiedzcie mi kilka z nich przy umawianiu. Pokażę wtedy coś, co do niej pasuje, a nie coś efektownego, czego i tak nikt nie powtórzy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zabłudowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zabłudowskiej rodziny",
      paragraphs: [
        "Gmina Zabłudów liczy około trzystu czterdziestu kilometrów kwadratowych i czterdzieści siedem sołectw, a samo miasto ponad czternaście kilometrów kwadratowych. Prawa magdeburskie Zabłudów otrzymał w 1553 roku i jest miastem nieprzerwanie od tamtej pory — uniknął nawet degradacji w 1950 roku. Twórcą miasta był Grzegorz Chodkiewicz, który zaplanował rynek zbliżony do kwadratu, z ulicami wychodzącymi z każdego rogu; ten układ jest czytelny do dziś. W 1567 roku ufundował tu cerkiew, szpital dla ubogich i szkołę. W 1897 roku Zabłudów miał trzy tysiące siedemset siedemdziesięciu dwóch mieszkańców — najwięcej w swojej historii. Rezydencja Chodkiewiczów powstała w szesnastym wieku, a w osiemnastym przekształcono ją w barokowy zespół z murowanym pałacem, stawami i tarasowymi ogrodami; dziś jest tam park miejski. Przy rynku stoją obok siebie klasycystyczny kościół świętych Piotra i Pawła z pierwszej połowy dziewiętnastego wieku, wzorowany na katedrze wileńskiej, oraz cerkiew Zaśnięcia Najświętszej Maryi Panny z połowy tego samego stulecia, wzniesiona na planie krzyża greckiego. Miasto leży między Narwią a Supraślą. Historycznie żyło z handlu zbożem, drewnem i miodem, a targi odbywają się tu w poniedziałki i piątki — zwyczaj ustanowiony w szesnastym wieku.",
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

  districtsHeading: "Do których części gminy Zabłudów dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu siedmiu sołectw gminy, w tym do Rybołów. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Zabłudów też przyjadę",
  nearbyParagraphs: [
    "Białystok, Michałowo, Suraż, Bielsk Podlaski i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Białystok", "Michałowo", "Suraż", "Bielsk Podlaski"],

  about: blokOMnie("do Zabłudowa", "w Zabłudowie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zabłudowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu siedmiu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Zabłudów w powiecie białostockim to nie Zabłocie — pod tą nazwą istnieje kilkanaście różnych miejscowości w Polsce.",
    },
    ...faqWspolne("w Zabłudowie"),
    {
      question: "Czy to źle, że gotuję w kółko te same dania?",
      answer:
        "Nie. Prawie każda rodzina obraca kilkunastoma daniami i to jest sensowna ekonomia, nie lenistwo — znane danie nie wymaga decyzji, zakupów pod przepis ani ryzyka, że wyjdzie źle w środę wieczorem. Problemem bywa co innego: czy zestaw jest różnorodny, czy to dwanaście wariantów tej samej rzeczy.",
    },
    {
      question: "Jak sensownie poszerzyć repertuar?",
      answer:
        "Dodając jedno danie i powtarzając je kilka razy w krótkim odstępie, aż przestanie wymagać przepisu — bo danie wchodzi do repertuaru dopiero wtedy, gdy da się je zrobić bez zaglądania do kartki. Trzy nowe dania rocznie dodane w ten sposób zmieniają po pięciu latach całą kuchnię; trzydzieści ugotowanych raz nie zmienia nic.",
    },
    {
      question: "Czy po zakupie Thermomixa zacznę gotować różnorodniej?",
      answer:
        "Zwykle nie i wolę uprzedzić. Po pół roku większość osób robi na nim te same pięć rzeczy. To nie jest wada urządzenia — nawyk jest silniejszy niż sprzęt, a zmiana repertuaru to osobna decyzja. Realnie zmienia się skład tych pięciu rzeczy: jeśli sos ze słoika zastąpi sos robiony od zera, bo zajmuje tyle samo, to już jest zmiana.",
    },
  ],

  geo: { lat: 53.0128, lng: 23.3392 },
};
