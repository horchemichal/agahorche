import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * WARTA — gmina miejsko-wiejska w powiecie sieradzkim.
 * MIASTO 2 923, GMINA 11 776 (GUS 31.12.2024). 48 SOŁECTW
 * (urzędowy wykaz sołtysów).
 * Wikipedia podaje 3 242 — to dana z 31.12.2019, NIEAKTUALNA.
 *
 * PRAWA MIEJSKIE 1255 r., książę KAZIMIERZ KONRADOWIC.
 * To najstarsza lokacja w całej fali łódzkiej.
 * UTRATY/PRZYWRÓCENIA NIE POTWIERDZONO — nie piszę o ukazie.
 *
 * ZABYTKI: gotycki kościół św. Mikołaja z poł. XIV w.
 * (nr rej. 295 z 28.12.1967); klasztor i kościół Ojców
 * Bernardynów — XV w., przebudowa barokowa 1696–1708;
 * klasztor Sióstr Bernardynek z XVIII w.; kościół św. Józefa
 * z XVII w.; ratusz z 1842 r. Muzeum Miasta i Rzeki Warty PTTK.
 * REZERWAT JEZIORSKO — ornitologiczny, w płd. części
 * Zbiornika Jeziorsko. DATY UTWORZENIA I POWIERZCHNI
 * NIE PODAJĘ — nie potwierdzono.
 * 28,7% pracujących w rolnictwie — najwyższy udział w fali.
 *
 * ⚠ HOMONIMY — NAJWIĘKSZE RYZYKO W CAŁEJ FALI. „Warta" to
 * przede wszystkim RZEKA, potem Warta Bolesławiecka
 * (dolnośląskie), kluby sportowe i ubezpieczyciel. FAQ MUSI
 * to rozróżniać.
 *
 * KĄT: ILE WODY NAPRAWDĘ POTRZEBA. Miasto o nazwie rzeki jest
 * właściwym miejscem na jedyną stronę o wodzie jako składniku
 * mierzonym, a nie dolewanym „na oko".
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w garnku odparowuje, a w zamkniętym naczyniu prawie nie
 *   — i że stąd bierze się najczęstsza pomyłka przy
 *   przenoszeniu przepisów,
 * — że przepis napisany na garnek ma w sobie zapas wody na
 *   parowanie, którego tu nie trzeba,
 * — że zbyt dużo wody to nie tylko rzadka zupa: to rozcieńczony
 *   smak, którego nie da się naprawić solą,
 * — że warzywa same wnoszą wodę i że to jest liczba, o której
 *   się zapomina,
 * — że za mało wody to też problem, tylko innego rodzaju —
 *   i że rozpoznaje się go po dźwięku i po tym, co zostaje
 *   na dnie,
 * — i ODMOWA: nie podaję ilości ani proporcji, bo zależą od
 *   przepisu i od tego, co dokładnie wkładacie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW, TEMPERATUR ANI PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ powierzchni ani daty utworzenia rezerwatu.
 * — NIE ROBIĘ TŁA ze spadku liczby mieszkańców.
 * — NIE WSPOMINAM o szpitalu ani o Centrum Psychiatrycznym.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Twarda woda" dotyczy
 * SKŁADU wody i osadu. „Skropliny i wykipienie" (Skarszewy)
 * dotyczą wody, która zbiera się pod pokrywką i wylewa.
 * „Herbaty i napary" dotyczą temperatury wody. Tutaj chodzi
 * o ILOŚĆ wody jako składnika przepisu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ o utracie i odzyskaniu praw miejskich.
 * — NIE PODAJĘ powierzchni ani roku utworzenia rezerwatu
 *   Jeziorsko.
 * — NIE PODAJĘ nazw imprez cyklicznych — brak potwierdzenia.
 * — NIE PRZYPISUJĘ Warcie żadnego produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Warty z RZEKĄ WARTĄ, z Wartą Bolesławiecką
 *   ani z Nowym Miastem nad Wartą.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 923, gmina 11 776 mieszkańców, 48 sołectw,
 * — prawa miejskie z 1255 r. od księcia Kazimierza Konradowica,
 * — gotycki kościół świętego Mikołaja z połowy XIV w.,
 * — klasztor i kościół Ojców Bernardynów z XV w., przebudowany
 *   w latach 1696–1708,
 * — klasztor Sióstr Bernardynek z XVIII w.,
 * — ratusz z 1842 r.,
 * — Muzeum Miasta i Rzeki Warty prowadzone przez PTTK,
 * — rezerwat ornitologiczny Jeziorsko w południowej części
 *   Zbiornika Jeziorsko,
 * — 28,7% pracujących w gminie zajmuje się rolnictwem.
 */
export const WARTA: CityContent = {
  slug: "warta",
  h1: "Thermomix Warta – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Warta (łódzkie, pow. sieradzki) — przedstawiciel",
  seoDescription:
    "Thermomix w Warcie koło Sieradza: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Warta — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Warcie. Prezentacja i dojazd bezpłatne.",

  lead: "Przyjeżdżam do Warty w powiecie sieradzkim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Warta i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W garnku woda odparowuje. W zamkniętym naczyniu prawie nie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Warcie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
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
      id: "ile-wody",
      heading:
        "Miasto, które nazywa się jak rzeka — czyli ile wody naprawdę potrzeba",
      paragraphs: [
        "Warta w powiecie sieradzkim to jedno z najstarszych miast tej części Polski: prawa miejskie dostała w 1255 roku od księcia Kazimierza Konradowica, ma gotycki kościół świętego Mikołaja z połowy czternastego wieku, klasztor bernardynów z piętnastego i drugi, bernardynek, z osiemnastego. Mieszka tu niecałe trzy tysiące osób, a w całej gminie prawie dwanaście tysięcy, w czterdziestu ośmiu sołectwach.",
        "Miasto, które nazywa się tak samo jak rzeka, jest w moim serwisie jedynym właściwym miejscem na stronę o wodzie — i to nie o tym, jaka jest, tylko ile jej wlać.",
        "Rzecz, której nikt nie tłumaczy przy zakupie, jest taka: w garnku woda odparowuje, a w zamkniętym naczyniu prawie nie. To jedno zdanie stoi za większością nieudanych pierwszych tygodni z tym urządzeniem.",
        "Bo każdy przepis napisany na garnek ma w sobie ukryty zapas — kucharz, który go pisał, wiedział, że przez trzydzieści minut część wody ucieknie z parą, i dlatego dolał więcej. Kiedy ten sam przepis wykonacie w naczyniu zamkniętym, ten zapas nigdzie nie idzie. Zostaje w zupie. I zupa jest rzadka, chociaż zrobiliście wszystko zgodnie z zapisem.",
        "Nadmiar wody to zresztą nie tylko rzadka konsystencja, i to jest ważniejsze. To rozcieńczony smak. Danie z za dużą ilością wody nie robi się „lżejsze” — robi się nijakie, a nijakości nie naprawia się solą. Solenie rozwadnianego dania to najczęstsza próba ratunku i najczęstszy sposób, żeby zrobić drugi problem obok pierwszego.",
        "Dochodzi do tego liczba, o której prawie wszyscy zapominają: warzywa same wnoszą wodę. Cukinia, pomidory, kapusta, cebula, dynia, ogórki — one nie tylko nie potrzebują dolewania, one dolewają za Was. W przepisach na garnek ta woda też odparowywała. Tutaj nie odparuje.",
        "Za mało wody to oczywiście też problem, tylko innego rodzaju i łatwiejszy do zauważenia. Poznaje się go po dźwięku pracy, po tym, że coś zaczyna się przyklejać do dna, i po tym, co zostaje na dnie po wylaniu. Dolać zawsze można — i to jest kierunek bezpieczniejszy niż odwrotny, bo nadmiaru wody nie da się już usunąć z gotowego dania.",
        "I granica: nie podam Wam, ile dokładnie wody wlać, bo to zależy od przepisu, od tego, co konkretnie wkładacie, i od tego, jaki ma być efekt. Każda liczba, którą bym tu napisała, byłaby zgadywaniem udającym poradę.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        {
          href: "/thermomix/wady-i-zalety",
          label: "Wady i zalety — bez ściemy",
        },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Warcie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli gotujecie z własnych warzyw — powiedzcie przy umawianiu. Na warzywach z ogrodu różnicę w ilości wody widać najlepiej i najłatwiej to pokazać na czymś, co znacie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Warcie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla warckiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe trzy tysiące mieszkańców, a cała gmina prawie dwanaście, w czterdziestu ośmiu sołectwach. Rolnictwem zajmuje się tu blisko trzydzieści procent pracujących — najwięcej z całej okolicy. Warta ma prawa miejskie od 1255 roku, gotycki kościół świętego Mikołaja z połowy czternastego wieku, dwa zespoły klasztorne — bernardynów z piętnastego wieku, przebudowany barokowo na przełomie siedemnastego i osiemnastego, oraz bernardynek z osiemnastego — kościół świętego Józefa z siedemnastego wieku i ratusz z 1842 roku. W mieście działa Muzeum Miasta i Rzeki Warty, a w południowej części Zbiornika Jeziorsko utworzono rezerwat ornitologiczny.",
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

  districtsHeading: "Do których części gminy Warta dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czterdziestu ośmiu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Wartę też przyjadę",
  nearbyParagraphs: [
    "Sieradz, Zduńska Wola, Poddębice, Uniejów, Turek i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sieradz", "Zduńska Wola", "Poddębice", "Uniejów", "Szadek"],

  about: blokOMnie("do Warty", "w Warcie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Warty bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czterdziestu ośmiu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo tu pomyłka jest wyjątkowo częsta: chodzi o miasto Warta koło Sieradza w województwie łódzkim — nie o rzekę Wartę, nie o Wartę Bolesławiecką na Dolnym Śląsku i nie o Nowe Miasto nad Wartą w wielkopolskim.",
    },
    ...faqWspolne("w Warcie"),
    {
      question: "Dlaczego zupa z Thermomixa wychodzi mi za rzadka?",
      answer:
        "Najczęściej dlatego, że przepis był pisany na garnek. W garnku część wody odparowuje przez pół godziny gotowania i kucharz z góry dolał na to zapas. W zamkniętym naczyniu ten zapas nigdzie nie idzie i zostaje w zupie.",
    },
    {
      question: "Czy warzywa trzeba zalewać wodą?",
      answer:
        "Zwykle znacznie mniej, niż podpowiada odruch. Cukinia, pomidory, kapusta, cebula czy dynia same wnoszą sporo wody i w zamkniętym naczyniu ta woda nie odparowuje. Dolać zawsze można — nadmiaru z gotowego dania już nie usuniecie.",
    },
    {
      question: "Czy da się uratować rozwodnione danie soleniem?",
      answer:
        "Nie i to jest najczęstszy błąd ratunkowy. Za dużo wody rozcieńcza smak, a sól tego nie odbuduje — zrobi tylko drugi problem obok pierwszego. Lepiej odparować przy otwartym naczyniu albo dołożyć składników, niż dosalać.",
    },
  ],

  geo: { lat: 51.7103, lng: 18.6251 },
};
