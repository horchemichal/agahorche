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
 * DRZEWICA — gmina miejsko-wiejska w powiecie opoczyńskim.
 * MIASTO 3 492 mieszkańców, GMINA 9 727; 18 sołectw.
 *
 * ZAMEK — UWAGA, POWSZECHNY BŁĄD W SIECI: zamek zbudował
 * ARCYBISKUP MACIEJ DRZEWICKI w latach 1527–1535, a NIE
 * Kurozwęccy. Spłonął w 1814 r. i od tego czasu jest trwałą
 * ruiną. To zamek nizinny, otoczony fosą.
 * KOŚCIÓŁ św. ŁUKASZA — 1315 r. / przebudowa 1462 r., w murach
 * SZEŚĆ OKRĄGŁYCH OTWORÓW STRZELNICZYCH — kościół obronny.
 * PRAWA MIEJSKIE 1429 r. od Władysława Jagiełły w Nieszawie,
 * UTRACONE 1869/1870, PRZYWRÓCONE 1 STYCZNIA 1987 r.
 * TOR KAJAKOWY slalomowy na Drzewiczce — ok. 200 m,
 * zmodernizowany w 2005 r.
 *
 * OBALONE: znana fabryka NIE PRODUKUJE w Drzewicy od
 * PAŹDZIERNIKA 2012 r. — w mieście pozostała tylko siedziba
 * marki. NAZWY NIE PODAJĘ i tak (zakaz nazw firm), ale nie wolno
 * mi też napisać, że „w mieście produkuje się garnki".
 *
 * KĄT: NOŻE I OSTRZENIE — czego nóż w tym urządzeniu nie robi
 * i dlaczego nie odkłada się własnego noża do szuflady.
 * Kąt wyrasta z miasta metalowego rzemiosła i z kościoła
 * o strzelnicach — ale metafor zbrojnych NIE UŻYWAM.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie ma nóż, ale nie jest to nóż kuchenny i robi
 *   inne rzeczy,
 * — że nóż w urządzeniu SIEKA UDERZENIAMI, a nóż kuchenny TNIE
 *   pociągnięciem — i stąd bierze się różnica w wyglądzie
 *   i strukturze,
 * — co zostaje przy desce: krojenie w plastry, w kostkę,
 *   filetowanie, wszystko, gdzie ma być RÓWNO,
 * — czego urządzenie nie zrobi: nie pokroi na plastry i nie
 *   utrzyma jednakowej kostki, bo nie kroi — rozdrabnia,
 * — że najczęstszy błąd to trzymanie za długo: sekunda za dużo
 *   zmienia posiekane w papkę i tego nie da się cofnąć,
 * — że tępy nóż domowy to najczęstsza przyczyna „nie chce mi
 *   się gotować" — i że to najtańsza rzecz do naprawienia,
 * — i ODMOWA: nie doradzę, jak ostrzyć nóż urządzenia ani jak
 *   go demontować.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH INSTRUKCJI demontażu, ostrzenia ani serwisowania
 *   noża urządzenia. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH NAZW FIRM ani stwierdzeń o produkcji w mieście.
 * — ŻADNYCH METAFOR ZBROJNYCH ani militarnych mimo strzelnic.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — NIE ROBIĘ TŁA z upadku zakładu ani z bezrobocia.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Maszynka do mięsa"
 * (Miastko) dotyczy zastąpienia osobnego sprzętu i różnicy
 * mielenie/siekanie w mięsie. „Farsz" (Działoszyn) dotyczy
 * nadzienia jako półproduktu. „Blat i ściereczka" (Koluszki)
 * dotyczą sprzątania. Tutaj chodzi o NÓŻ jako narzędzie:
 * co robi ostrze wirujące, a co ostrze w ręce.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że zamek zbudowali Kurozwęccy — to błąd
 *   powielany w sieci.
 * — NIE PISZĘ o produkcji w mieście w czasie teraźniejszym.
 * — NIE PODAJĘ liczby zawodników ani wyników klubu kajakowego.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla gminy Drzewica nie znalazłam żadnego.
 * — NIE MYLĘ Drzewicy z DRZEWCAMI ani z DRZEWICĄ w mazowieckiem.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 3 492, gmina 9 727 mieszkańców, 18 sołectw,
 * — zamek zbudował arcybiskup Maciej Drzewicki w latach
 *   1527–1535; zamek nizinny z fosą; spłonął w 1814 r.,
 * — kościół świętego Łukasza z 1315 r., przebudowany w 1462 r.,
 *   ma w murach sześć okrągłych otworów strzelniczych,
 * — prawa miejskie z 1429 r. od Władysława Jagiełły, wydane
 *   w Nieszawie; utracone w 1869 r., przywrócone 1 stycznia
 *   1987 r.,
 * — na Drzewiczce działa ok. dwustumetrowy tor kajakowy
 *   slalomowy, zmodernizowany w 2005 r.,
 * — miasto ma tradycję przemysłu metalowego.
 */
export const DRZEWICA: CityContent = {
  slug: "drzewica",
  h1: "Thermomix Drzewica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Drzewica (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Drzewicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Drzewica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Drzewicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Drzewicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Drzewica i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nóż w urządzeniu i nóż w ręce robią dwie różne rzeczy.",
  },

  sections: [
    {
      id: "noze",
      heading: "Miasto metalowego rzemiosła — czyli o nożach i o tym, czego ostrze nie zrobi",
      paragraphs: [
        "Drzewica ma z metalem do czynienia od dawna, a jej najbardziej rozpoznawalny zabytek jest starszy niż wszystko inne w okolicy: zamek, który w latach 1527–1535 wybudował arcybiskup Maciej Drzewicki. Piszę to z naciskiem, bo w sieci uparcie powtarza się, że postawili go Kurozwęccy — nie postawili. Zamek był nizinny, otoczony fosą, spłonął w 1814 roku i od tamtej pory jest ruiną. Starszy jest tylko kościół świętego Łukasza z 1315 roku, przebudowany w 1462, który ma w murach sześć okrągłych otworów — był budowlą obronną.",
        "Skoro więc jestem w mieście, które zna się na wyrobach z metalu, powiem rzecz, którą sprzedawcy zwykle omijają: to urządzenie ma nóż, ale to nie jest nóż kuchenny i nie robi tego, co on.",
        "Różnica jest prosta i mechaniczna. Nóż w urządzeniu siecze uderzeniami — obraca się i rozbija to, co napotka. Nóż kuchenny tnie pociągnięciem, jednym ruchem, po linii. Stąd bierze się wszystko, co potem widać na talerzu: rozdrobnione wygląda inaczej niż pokrojone, ma inną strukturę i inaczej puszcza sok.",
        "Co z tego wynika w praktyce. Deska i własny nóż zostają na stałe wszędzie tam, gdzie ma być równo: plastry, kostka, słupki, filetowanie, cokolwiek, co ma potem wyglądać. Urządzenie tego nie zrobi — nie dlatego, że jest gorsze, tylko dlatego, że nie kroi. Rozdrabnia. Jednakowej kostki z niego nie będzie nigdy.",
        "A robi za to bez porównania szybciej wszystko, gdzie równość nie ma znaczenia: cebulę do zasmażki, warzywa do zupy, którą i tak potem zmiksujecie, natkę, orzechy, twardy ser, bułkę na tartą, bazę do pasty.",
        "Najczęstszy błąd przy tym nożu jest jeden i kosztowny: trzymanie za długo. Sekunda za dużo zamienia posiekane w papkę i tego już nie da się cofnąć. Lepiej puścić krócej i zajrzeć, niż puścić raz a dobrze.",
        "I rzecz, która nie ma z moim urządzeniem nic wspólnego, ale powiem ją i tak, bo widzę ją w co drugiej kuchni: tępy nóż to najczęstsza przyczyna tego, że komuś „nie chce się gotować”. Krojenie tępym nożem jest męczące i człowiek nieświadomie unika dań, w których trzeba dużo kroić. To najtańsza rzecz do naprawienia w całej kuchni i warto ją naprawić niezależnie od tego, czy cokolwiek u mnie kupicie.",
        "Granica, przy której nie ustąpię: nie doradzę Wam, jak ostrzyć nóż urządzenia ani jak go rozkładać na części. To element, którego serwisowanie ma swoją procedurę, a moje domysły nie są tu nic warte.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "prezentacja",
      heading: "Thermomix w Drzewicy – jak wygląda prezentacja?",
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
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Drzewicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie zobaczyć na własne oczy, co urządzenie robi z warzywami, a czego nie zrobi — powiedzcie przy umawianiu. To pokazuję najchętniej, bo różnicę widać od razu i nie trzeba jej opowiadać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Drzewicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla drzewickiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko trzy i pół tysiąca mieszkańców, a cała gmina prawie dziesięć tysięcy, w osiemnastu sołectwach. Prawa miejskie Drzewica dostała w 1429 roku od Władysława Jagiełły, aktem wydanym w Nieszawie, straciła je w 1869 roku i odzyskała dopiero 1 stycznia 1987. Zostały po tamtych czasach ruiny zamku arcybiskupa Macieja Drzewickiego z lat 1527–1535 i kościół świętego Łukasza z 1315 roku ze strzelnicami w murach. Współczesna Drzewica jest za to znana z czegoś zupełnie innego: z toru kajakowego na Drzewiczce, około dwustumetrowej trasy slalomowej, zmodernizowanej w 2005 roku.",
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

  districtsHeading: "Do których części gminy Drzewica dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich osiemnastu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Drzewicę też przyjadę",
  nearbyParagraphs: [
    "Opoczno, Nowe Miasto nad Pilicą, Białaczów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Opoczno", "Sulejów", "Tomaszów Mazowiecki"],

  about: blokOMnie("do Drzewicy", "w Drzewicy i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Drzewicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich osiemnastu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Drzewicy"),
    {
      question: "Czy Thermomix zastąpi nóż i deskę?",
      answer:
        "Nie tam, gdzie ma być równo. Plastry, kostka, słupki i filetowanie zostają przy desce, bo urządzenie nie kroi — rozdrabnia uderzeniami noża. Zastępuje je za to wszędzie tam, gdzie równość nie ma znaczenia: cebula, warzywa do zupy, natka, orzechy, twardy ser, bułka tarta.",
    },
    {
      question: "Dlaczego z posiekanej cebuli robi mi się papka?",
      answer:
        "Bo pracowała o kilka sekund za długo. Nóż w urządzeniu siecze uderzeniami, więc różnica między posiekanym a rozbitym to dosłownie chwila — i tego nie da się cofnąć. Lepiej puścić krócej i zajrzeć niż raz a dobrze.",
    },
    {
      question: "Jak naostrzyć nóż w Thermomixie?",
      answer:
        "Tego Wam nie doradzę i nie będę zgadywać. To element, którego serwisowanie ma swoją procedurę — w tej sprawie kierujcie się instrukcją i serwisem, nie moim domysłem.",
    },
  ],

  geo: { lat: 51.4531, lng: 20.5308 },
};
