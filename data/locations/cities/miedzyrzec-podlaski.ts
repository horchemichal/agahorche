import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * MIĘDZYRZEC PODLASKI — 15 107 mieszkańców (31.12.2025), spadek
 * o blisko 5% w pięć lat. Największy pracodawca: zakład drobiarski
 * Wipasz, inwestycja za 250 mln zł, ok. 1 200 miejsc pracy.
 *
 * KĄT: „jedno urządzenie zamiast wielu" — obietnica, którą ta branża
 * powtarza najczęściej i najbardziej bezkarnie. Strona rozbiera ją
 * uczciwie: co realnie zastępuje, czego nie zastąpi i czego NIE
 * wyrzucać z szafki.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że lista „zastępuje dwanaście urządzeń" jest prawdziwa tylko
 *   częściowo i że wolę wymienić obie strony,
 * — co faktycznie przestaje być potrzebne: blender, mikser ręczny,
 *   malakser, waga kuchenna, młynek,
 * — czego NIE zastąpi: piekarnika, patelni, czajnika, mikrofalówki,
 *   dobrego noża i deski,
 * — i najważniejsze: NIE WYRZUCAJCIE niczego przez pierwsze
 *   miesiące, bo dopiero wtedy widać, czego naprawdę nie ruszacie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEGO WYLICZANIA, ile się oszczędza, nie kupując innych
 *   sprzętów (zasada z Jarocina). Sekcja mówi o tym, co zostaje
 *   na blacie, a nie o pieniądzach.
 * — ŻADNYCH PORÓWNAŃ z konkretnymi markami ani modelami innych
 *   urządzeń.
 *
 * ROZGRANICZENIE. Kąt „cmentarzysko sprzętów kuchennych" jest zajęty
 * przez inne miasto i tutaj się NIE pojawia — tam chodzi o sprzęty,
 * które już się kurzą, tu o decyzję, czego NIE wyrzucać PO nowym
 * zakupie. Zajęty jest też kąt „co się dzieje po zakupie" — ta strona
 * nie mówi o serwisie ani nauce obsługi.
 *
 * ŚWIADOME POMINIĘCIE — WAŻNE. Międzyrzec był udokumentowanym,
 * największym w kraju ośrodkiem szczeciniarstwa i wyrobu szczotek:
 * ok. 200 warsztatów w latach dwudziestych, eksport do ponad
 * dwudziestu krajów, potwierdzone w recenzowanym artykule (Mańko,
 * Radzyński Rocznik Humanistyczny 2005) — a więc z rzadkim tu
 * ŹRÓDŁEM PORÓWNAWCZYM, nie samą promocją gminy.
 *
 * NIE UŻYWAM TEGO KĄTA. Branża była niemal w całości prowadzona przez
 * tutejszą społeczność żydowską i skończyła się razem z jej zagładą.
 * Napisanie na stronie sprzedażowej „miasto rzemiosła, które
 * zniknęło" bez podania przyczyny byłoby wygładzoną półprawdą,
 * a podanie przyczyny obok oferty na sprzęt AGD — niestosowne.
 * To ta sama decyzja co przy obozie Soldau w Działdowie: fakt jest
 * prawdziwy, a miejsce na niego nie jest tutaj.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ma na Liście Produktów Tradycyjnych ani jednego produktu
 *   z miasta ani z gminy Międzyrzec Podlaski. Sękacz podlaski, który
 *   łatwo tu przypisać ze względu na festiwal odbywający się
 *   w mieście, pochodzi z HUSZCZY. Miasto jest gospodarzem imprezy,
 *   nie miejscem pochodzenia — i dlatego o sękaczu w tekście nie ma
 *   ani słowa,
 * — NIE podaję dokładnej liczby zatrudnionych w Wipaszu jako faktu
 *   z raportu firmy — „około tysiąca dwustu" pochodzi z doniesień
 *   prasowych o inwestycji,
 * — NIE podaję czasu przejazdu z Lublina; mam tylko orientacyjne
 *   ok. 95 km drogą, z jednego źródła, i tak to opisuję,
 * — NIE mieszam trzech różnych dat: nadania wsi przez Władysława
 *   Jagiełłę (1390), lokacji miejskiej (ok. 1434–1438, dokładna data
 *   nieznana) i przywileju jarmarcznego (1486). W tekście jest tylko
 *   ta ostatnia, bo tylko ona ma związek z treścią,
 * — uwaga: angielska Wikipedia podaje 17 102 mieszkańców z 2014 r.
 *   Aktualna liczba GUS to 15 107 (koniec 2025) i tej używam,
 * — miasto NIE publikuje wykazu osiedli — districts to PUSTA TABLICA.
 *
 * ODRZUCONE KĄTY:
 * — praca zmianowa i jedzenie do pracy przy Wipaszu — oba zajęte
 *   (Grajewo i inne miasto), a grafików i tak nikt nie potwierdził,
 * — targ i jarmark — przywilej z 1486 r. jest prawdziwy, ale
 *   dzisiejszej skali handlu NIE POTWIERDZIŁAM, a budowanie kąta
 *   na niesprawdzonym fakcie bieżącym to dokładnie ten błąd,
 *   który tępię w innych plikach.
 */
export const MIEDZYRZEC_PODLASKI: CityContent = {
  slug: "miedzyrzec-podlaski",
  h1: "Thermomix Międzyrzec Podlaski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Międzyrzec Podlaski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Międzyrzecu Podlaskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Międzyrzec Podlaski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Międzyrzecu Podlaskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Międzyrzeca Podlaskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Międzyrzec Podlaski i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie wyrzucajcie niczego przez pierwsze miesiące. Serio.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Międzyrzecu Podlaskim – jak wygląda prezentacja?",
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
      id: "zamiast-wielu",
      heading: "„Zastępuje dwanaście urządzeń” — rozbierzmy to zdanie na części",
      paragraphs: [
        "To jest zdanie, które w mojej branży pada najczęściej i najbardziej bezkarnie. Usłyszycie je na każdym pokazie i w każdej reklamie. Jest prawdziwe mniej więcej w połowie, więc wolę wymienić obie połowy, zamiast powtarzać hasło i liczyć, że nikt nie sprawdzi.",
        "Co faktycznie przestaje być potrzebne. Blender kielichowy — bo miksowanie odbywa się w tym samym naczyniu, w którym się gotowało. Mikser ręczny do ucierania i ubijania. Malakser do siekania i ścierania. Waga kuchenna, bo jest wbudowana i waży bezpośrednio w misie. Młynek do kawy, przypraw czy maku. To jest ta część listy, za którą ręczę — u większości osób te sprzęty faktycznie przestają wychodzić z szafki.",
        "Czego nie zastąpi, i nie będę udawać, że jest inaczej. Piekarnika — nie upiecze blachy ciasta ani kurczaka. Patelni — nie zrobi kotleta ani niczego, co ma być przysmażone i chrupiące. Czajnika, jeśli lubicie mieć wrzątek natychmiast. Mikrofalówki do odgrzewania pojedynczego talerza. I przede wszystkim nie zastąpi dobrego noża i deski, bo do pokrojenia dwóch pomidorów do kanapki nikt nie będzie rozstawiał urządzenia.",
        "Najważniejsza rada w tej całej sekcji jest jednak inna i mówię ją każdemu: nie wyrzucajcie niczego przez pierwsze miesiące. Nic. Zostawcie stare sprzęty tam, gdzie stoją, i po prostu obserwujcie, po które przestajecie sięgać. Po dwóch, trzech miesiącach będziecie to wiedzieć sami, bez niczyjej listy — i wtedy dopiero róbcie porządek w szafce. Widziałam ludzi, którzy oddali mikser w tygodniu zakupu i potem go odkupili, bo akurat u nich do jednej rzeczy był wygodniejszy.",
        "Bo tak naprawdę ta obietnica nie jest o liczbie urządzeń. Jest o blacie i o zmywaniu. Jedno naczynie zamiast trzech misek, jednej deski i dwóch garnków — to jest to, co realnie odczuwacie w czwartek wieczorem. Reszta to arytmetyka z reklamy.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Międzyrzecu Podlaskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie sprawdzić właśnie tę rzecz — co u Was w kuchni przestanie być potrzebne — powiedzcie przy umawianiu, z czego korzystacie najczęściej. Przejdziemy to punkt po punkcie przy Waszym blacie, a nie na ogólnej liście.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Międzyrzecu Podlaskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla międzyrzeckiej rodziny",
      paragraphs: [
        "Międzyrzec Podlaski liczy nieco ponad piętnaście tysięcy mieszkańców i w ciągu pięciu lat stracił blisko pięć procent ludności. Największym pracodawcą jest zakład drobiarski Wipasz, największa inwestycja w tej części województwa. Do Lublina jest stąd blisko sto kilometrów, więc na zakupy do dużego miasta jeździ się z planem, a nie z doskoku.",
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

  districtsHeading: "Do których części Międzyrzeca Podlaskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie publikuje oficjalnego wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Międzyrzec Podlaski też przyjadę",
  nearbyParagraphs: [
    "Biała Podlaska, Radzyń Podlaski, Łuków i okoliczne gminy są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Biała Podlaska", "Radzyń Podlaski", "Łuków", "Terespol", "Parczew", "Kąkolewnica"],

  about: blokOMnie("do Międzyrzeca Podlaskiego", "w Międzyrzecu Podlaskim i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Międzyrzeca Podlaskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Międzyrzecu Podlaskim"),
    {
      question: "Czy to naprawdę zastępuje kilkanaście urządzeń?",
      answer:
        "Mniej więcej w połowie. Realnie przestają być potrzebne blender, mikser ręczny, malakser, waga kuchenna i młynek. Nie zastąpi natomiast piekarnika, patelni, czajnika, mikrofalówki ani dobrego noża z deską. Największa różnica nie jest zresztą w liczbie sprzętów, tylko w tym, że gotuje się w jednym naczyniu — czyli mniej zmywania.",
    },
    {
      question: "Mogę pozbyć się starych sprzętów po zakupie?",
      answer:
        "Radzę nie robić tego przez pierwsze miesiące. Zostawcie wszystko tam, gdzie stoi, i sprawdźcie, po co przestajecie sięgać — po dwóch, trzech miesiącach będziecie to wiedzieć sami. Zdarzało się, że ktoś oddał mikser w tygodniu zakupu i potem go odkupił, bo akurat u niego do jednej rzeczy był wygodniejszy.",
    },
  ],

  geo: { lat: 51.9856, lng: 22.7833 },
};
