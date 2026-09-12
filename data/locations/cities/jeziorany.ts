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
 * JEZIORANY — gmina miejsko-wiejska w powiecie olsztyńskim.
 * MIASTO 2 914, GMINA 6 887 (GUS 31.12.2024). 22 SOŁECTWA
 * (urzędowy wykaz sołtysów, kadencja 2023–2028).
 * ⚠ Wcześniejsza notatka projektowa podawała 3 100 dla
 * miasta — ZAWYŻONE.
 *
 * LOKACJA 5 LUTEGO 1338 r., na PRAWIE CHEŁMIŃSKIM. Wystawca:
 * BISKUP WARMIŃSKI HERMAN Z PRAGI, reprezentowany przez
 * prepozyta braniewskiego Mikołaja i wójta Henryka Lutera;
 * zasadźcą był Henryk Wandepfaffe.
 * PRZYNALEŻNOŚĆ: WARMIA, dominium biskupów warmińskich.
 * ⚠ OBALONE: „prawa miejskie 1345" — 1345 to fundacja
 * kościoła, nie lokacja.
 *
 * KOŚCIÓŁ ŚW. BARTŁOMIEJA — fundacja 1345 r., budowa wznowiona
 * 1360, ukończona 1370–1390; w XVI w. sklepienia gwiaździste;
 * przebudowa 1912. Gotycka hala sześcioprzęsłowa, szczyt
 * schodkowy ze sterczynami, ośmioboczne filary. Ołtarz
 * późnorenesansowy ok. 1600 r. i ołtarz główny z 1734 r.
 * KAPLICA ŚW. KRZYŻA — 1580 r., fundacja Krzysztofa Troszki,
 * konsekrowana przez biskupa MARCINA KROMERA; rozbudowa
 * i ponowna konsekracja 1766 r.
 * ZAMEK BISKUPÓW WARMIŃSKICH — budowa od ok. 1350 r. za
 * biskupa Jana z Miśni, ukończony ok. 1400 r.
 * ⚠ ZNISZCZONY W 1783 r. PO UDERZENIU PIORUNA — nie przez
 * wojnę. To ważne sprostowanie. Dziś tylko pozostałości.
 * MURY MIEJSKIE Z TRZEMA BRAMAMI: Mostową, Młyńską
 * i Reszelską, z fosą.
 * RATUSZ — pierwotny spłonął w 1656 r., odbudowany 1790 r.
 * RZEKA SYMSARNA.
 * ZNANE OSOBY: Jan Leo (1572–1635), kronikarz Warmii;
 * biskup Józef Ambroży Geritz.
 * JEZIORANY NALEŻĄ DO SIECI CITTASLOW.
 *
 * ⚠⚠ NAJMOCNIEJSZE OBALENIE: „W Jezioranach" — powieść
 * radiowa Polskiego Radia — NIE DZIEJE SIĘ TUTAJ. Fikcyjna
 * wieś z audycji leży w okolicach Puław na Lubelszczyźnie.
 * Warmińskie Jeziorany nie mają z nią nic wspólnego poza
 * nazwą. To jest oś strony.
 *
 * KĄT: PRZEPIS PODANY PRZEZ TELEFON — co ginie, gdy przepis
 * się słyszy, a nie czyta. Kąt od najsłynniejszego polskiego
 * słuchowiska radiowego, które nosi nazwę tego miasta,
 * choć dzieje się gdzie indziej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że większość domowych przepisów wciąż przekazuje się
 *   ustnie: przez telefon, przy stole, w drzwiach,
 * — że ginie przy tym zawsze to samo i da się to wyliczyć:
 *   ilości, kolejność, temperatura i „to, co oczywiste",
 * — że najgroźniejsze jest właśnie to ostatnie — rzeczy,
 *   których nadawca nie mówi, bo dla niego są oczywiste,
 * — że przy zamkniętym naczyniu braki bolą bardziej, bo nie
 *   da się skorygować w trakcie,
 * — trzy pytania, które warto zadać, gdy ktoś dyktuje
 *   przepis: ile tego jest, co idzie pierwsze, po czym
 *   poznasz, że gotowe,
 * — że warto zapisać od razu, a nie „zapamiętać" — i że
 *   najlepszy zapis to ten zrobiony w trakcie rozmowy,
 * — i ODMOWA: nie poprawiam cudzych rodzinnych przepisów.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PODAJĘ ludności miasta jako „ok. 3 100".
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta ani dawnej nazwy
 *   polskiej, bo ta druga tylko myli.
 * — ZERO roku 1945 i wysiedleń.
 * — Pożar ratusza w 1656 r. podaję jako suchą datę, bez
 *   kontekstu wojennego.
 * — Wątek biskupów i kontrreformacji prowadzę neutralnie.
 * — ZERO historii społeczności żydowskiej.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Odtwarzanie przepisu,
 * którego nikt nie zapisał" (Puck) dotyczy przepisu
 * UTRACONEGO, po kimś, kogo już nie ma. „Zapisywanie"
 * (Chmielnik) dotyczy budowania własnego archiwum.
 * „Nieprecyzyjny język przepisów" (Pelplin) dotyczy
 * sformułowań w tekście drukowanym. „Przepis, który sam
 * sobie przeczy" (Morąg) dotyczy sprzeczności w zapisie.
 * Tutaj chodzi o MOMENT PRZEKAZU USTNEGO: o rozmowę,
 * w której przepis przechodzi z głowy do głowy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że akcja słuchowiska dzieje się w Jezioranach.
 * — NIE PISZĘ, że miasto leży nad jeziorem — potwierdzoną
 *   wodą jest rzeka Symsarna.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PODAJĘ wydarzeń cyklicznych — nie potwierdzono.
 * — NIE PRZYPISUJĘ Jezioranom produktu z Listy Produktów
 *   Tradycyjnych; „kluchy warmińskie" mają zasięg regionalny.
 * — NIE MYLĘ Jezioran z Jezioranami-Koloniami (sołectwo
 *   w tej gminie), z Jeziorkiem w gminie Ryn ani
 *   z Jezierzanami. FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 914, gmina 6 887 mieszkańców, 22 sołectwa,
 * — lokacja 5 lutego 1338 r. na prawie chełmińskim, wystawiona
 *   przez biskupa warmińskiego Hermana z Pragi; zasadźcą był
 *   Henryk Wandepfaffe,
 * — kościół świętego Bartłomieja: fundacja 1345 r., ukończony
 *   w latach 1370–1390, ze sklepieniami gwiaździstymi
 *   z XVI w., ołtarzem późnorenesansowym z około 1600 r.
 *   i ołtarzem głównym z 1734 r.,
 * — kaplica świętego Krzyża z 1580 r., konsekrowana przez
 *   biskupa Marcina Kromera,
 * — zamek biskupów warmińskich budowany od około 1350 r.,
 *   zniszczony w 1783 r. po uderzeniu pioruna,
 * — mury miejskie miały trzy bramy: Mostową, Młyńską
 *   i Reszelską,
 * — ratusz odbudowano w 1790 r.,
 * — przez miasto płynie Symsarna,
 * — Jeziorany należą do sieci Cittaslow,
 * — radiowa powieść „W Jezioranach” nie dotyczy tego miasta:
 *   fikcyjna wieś z audycji leży na Lubelszczyźnie.
 */
export const JEZIORANY: CityContent = {
  slug: "jeziorany",
  h1: "Thermomix Jeziorany – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jeziorany na Warmii — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Jezioranach na Warmii: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jeziorany — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jezioranach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jezioran z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Jeziorany i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepis podany przez telefon gubi zawsze to samo. Da się to wyliczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jezioranach – jak wygląda prezentacja?",
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
      id: "przepis-przez-telefon",
      heading: "Miasto, które zna cała Polska ze słuchu — czyli o przepisie podanym przez telefon",
      paragraphs: [
        "Nazwę Jezioran zna w Polsce niemal każdy, kto kiedykolwiek słuchał radia — i prawie nikt nie wie, że to nie o te Jeziorany chodzi. Radiowa powieść „W Jezioranach” dzieje się w fikcyjnej wsi w okolicach Puław, na Lubelszczyźnie. Warmińskie Jeziorany nie mają z nią wspólnego nic poza nazwą. Same są za to miastem starym i konkretnym: lokację wystawił 5 lutego 1338 roku biskup warmiński Herman z Pragi, na prawie chełmińskim. Stoi tu gotycki kościół świętego Bartłomieja ufundowany w 1345 roku, kaplica świętego Krzyża z 1580, konsekrowana przez biskupa Marcina Kromera, i resztki zamku biskupów warmińskich — zniszczonego nie przez wojnę, tylko przez uderzenie pioruna w 1783 roku.",
        "Miasto, które cała Polska zna wyłącznie ze słuchu i myli z zupełnie innym miejscem, jest właściwym adresem dla przepisu podanego przez telefon.",
        "Bo mimo internetu, aplikacji i tysięcy blogów większość domowych przepisów wciąż przekazuje się ustnie. Przez telefon, przy stole, w drzwiach, przy okazji. Ktoś mówi, jak to robi, druga osoba słucha i kiwa głową. A potem staje w kuchni i okazuje się, że wie mniej, niż jej się wydawało.",
        "Ginie przy tym zawsze to samo i da się to wyliczyć. Po pierwsze ilości — bo nadawca zwykle nie mierzy, tylko sypie. Po drugie kolejność, bo opowiada się o daniu, a nie o krokach. Po trzecie temperatura, o której prawie nikt nie mówi. I po czwarte to, co dla nadawcy oczywiste.",
        "Ta czwarta rzecz jest najgroźniejsza. Osoba, która robi coś od trzydziestu lat, nie powie, że mąkę przesiewa, że mięso wyjmuje z lodówki godzinę wcześniej albo że ciasto musi odpocząć — bo dla niej to nie jest część przepisu, tylko część rzeczywistości. Nie ukrywa tego; ona po prostu tego nie widzi.",
        "Przy zamkniętym naczyniu takie braki bolą mocniej niż przy garnku i mówię to bez owijania. Gotując w garnku, widzicie, że coś jest nie tak, i reagujecie w trakcie. Tutaj wszystko rozstrzyga się na wejściu, a wynik poznajecie na końcu.",
        "Dlatego, gdy ktoś dyktuje Wam przepis, warto zadać trzy pytania, które wyciągają dokładnie to, co ginie. Ile tego jest — najlepiej „ile mniej więcej, w szklankach albo łyżkach”. Co idzie pierwsze do garnka. I po czym poznajesz, że gotowe — bo odpowiedź na to ostatnie jest zwykle najcenniejsza i brzmi w rodzaju „jak zacznie odchodzić od ścianek”.",
        "I rzecz najprostsza, a najczęściej pomijana: zapisać od razu, w trakcie rozmowy. Nie po. Nie „zapamiętam”. Zapis zrobiony w trakcie zawiera te dziwne zdania, które nadawca powiedział mimochodem — i to właśnie one okazują się potem najważniejsze.",
        "I granica: nie poprawiam cudzych rodzinnych przepisów. Jeśli przy spotkaniu okaże się, że w Waszym domu coś robi się inaczej, niż ja bym zrobiła, to nie znaczy, że robi się źle. Przyjeżdżam z urządzeniem, a nie z korektą tego, co przekazano Wam w rodzinie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jezioranach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli macie rodzinny przepis, który znacie tylko ze słyszenia — weźcie go na spotkanie. Przejdziemy go razem i spiszemy tak, żeby dało się go powtórzyć.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jezioranach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla jezierańskiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe trzy tysiące mieszkańców, a cała gmina blisko siedem tysięcy, w dwudziestu dwóch sołectwach. Jeziorany leżą na Warmii i były miastem biskupim: lokację wystawił 5 lutego 1338 roku biskup Herman z Pragi, na prawie chełmińskim. Najważniejszy zabytek to gotycki kościół świętego Bartłomieja, ufundowany w 1345 roku i ukończony pod koniec czternastego wieku, ze sklepieniami gwiaździstymi, ołtarzem późnorenesansowym z około 1600 roku i ołtarzem głównym z 1734. Obok stoi kaplica świętego Krzyża z 1580 roku, a z murów miejskich, które miały trzy bramy, i z zamku biskupów warmińskich zostały pozostałości — zamek zniszczyło uderzenie pioruna w 1783 roku. Ratusz odbudowano w 1790. Przez miasto płynie Symsarna, a Jeziorany należą do sieci Cittaslow.",
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

  districtsHeading: "Do których części gminy Jeziorany dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dwóch sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Jeziorany też przyjadę",
  nearbyParagraphs: [
    "Biskupiec, Dobre Miasto, Barczewo, Reszel, Olsztyn i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Biskupiec", "Dobre Miasto", "Barczewo", "Reszel", "Bisztynek"],

  about: blokOMnie("do Jezioran", "w Jezioranach i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Jezioran bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dwóch sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Jeziorany na Warmii, w powiecie olsztyńskim — nie o Jeziorany-Kolonie, które są osobnym sołectwem w tej samej gminie, i nie o Jeziorko w gminie Ryn.",
    },
    {
      question: "Czy to te Jeziorany z radiowej powieści?",
      answer:
        "Nie i to jest chyba najczęstsze pytanie o to miasto. Radiowa powieść „W Jezioranach” dzieje się w fikcyjnej wsi w okolicach Puław, na Lubelszczyźnie. Warmińskie Jeziorany nie mają z nią nic wspólnego poza nazwą — za to mają kościół z 1345 roku i lokację z 1338.",
    },
    ...faqWspolne("w Jezioranach"),
    {
      question: "Co ginie, gdy ktoś dyktuje przepis przez telefon?",
      answer:
        "Zawsze to samo: ilości, kolejność, temperatura i to, co dla nadawcy oczywiste. To ostatnie jest najgroźniejsze — osoba robiąca coś od trzydziestu lat nie powie, że mąkę przesiewa albo że ciasto musi odpocząć, bo dla niej to nie jest część przepisu, tylko część rzeczywistości.",
    },
    {
      question: "O co pytać, gdy ktoś podaje przepis z pamięci?",
      answer:
        "O trzy rzeczy: ile tego mniej więcej jest, co idzie pierwsze i po czym poznajesz, że gotowe. Odpowiedź na ostatnie pytanie bywa najcenniejsza. I zapisujcie w trakcie rozmowy, nie po — bo to te zdania rzucone mimochodem okazują się potem najważniejsze.",
    },
  ],

  geo: { lat: 53.9755, lng: 20.7462 },
};
