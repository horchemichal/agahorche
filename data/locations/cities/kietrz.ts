import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * KIETRZ — miasto w powiecie głubczyckim, 5 400 mieszkańców
 * (31.12.2024, GUS); cała gmina 9 840. Prawa miejskie 1321 r.
 * od biskupa ołomunieckiego Konrada I — miasto należało
 * do MORAWSKICH ENKLAW NA ŚLĄSKU i obowiązywało w nim prawo
 * morawskie. Działa tu jedno z największych gospodarstw rolnych
 * w Polsce: ok. 8 500 ha, blisko 10 000 sztuk bydła, w tym
 * ok. 3 800 KRÓW MLECZNYCH dających ok. 130 tysięcy litrów
 * mleka dziennie.
 *
 * KĄT: bita śmietana — jedna czynność, jedna pułapka i dziesięć
 * sekund różnicy. Miasto, w którym codziennie doi się sto
 * trzydzieści tysięcy litrów mleka, jest właściwym miejscem
 * na stronę o tym, co się dzieje w naczyniu, gdy śmietana ubija
 * się o chwilę za długo.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to jedna z niewielu czynności, w których urządzenie
 *   jest szybsze od miksera i jednocześnie bardziej ryzykowne,
 * — że przebicie śmietany zamienia ją w masło i nie da się
 *   tego cofnąć,
 * — że decyduje TEMPERATURA — ciepła śmietana nie ubije się
 *   wcale, a naczynie po gorącej zupie jest ciepłe,
 * — że przy małej ilości ostrza nie chwytają,
 * — i że to jest czynność, przy której trzeba stać i patrzeć,
 *   choć całe urządzenie kupuje się po to, żeby nie stać.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW, PRĘDKOŚCI ANI TEMPERATUR.
 *   Piszę jakościowo: „zimna", „krótko", „patrzeć".
 * — ŻADNYCH PORAD O MLEKU PROSTO OD KROWY. Temat surowego
 *   mleka należy do Skalbmierza i tam odmówiłam doradzania;
 *   tutaj powtarzam odmowę jednym zdaniem.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o nabiale ani o tłuszczu.
 * — ŻADNYCH NAZW FIRM.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Mleko i nabiał" (inne
 * miasto) to strona OGÓLNA o całej kategorii — co urządzenie
 * robi z mlekiem, serami, jogurtem. „Masło" (jeszcze inne
 * miasto) dotyczy masła jako PRODUKTU i jego wyrobu. Tutaj
 * chodzi o JEDNĄ CZYNNOŚĆ trwającą pół minuty i o moment,
 * w którym trzeba ją przerwać — i dlatego strona świadomie
 * NIE rozwija ani tematu wyrobu masła, ani przeglądu nabiału,
 * tylko do nich odsyła.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że w Kietrzu działają zakłady dywanowe.
 *   NIE DZIAŁAJĄ: spółka została wykreślona z KRS 24 kwietnia
 *   2023 r., a wcześniejsze zakłady zatrudniające w szczycie
 *   ok. dwóch tysięcy osób już nie istnieją. Marka o tej nazwie
 *   funkcjonuje, ale produkcji w Kietrzu NIE POTWIERDZONO.
 * — NIE PODAJĘ NAZWY gospodarstwa rolnego ani jego wyników
 *   finansowych. Skalę podaję opisowo.
 * — NIE PODAJĘ daty dziennej praw miejskich (znany tylko rok).
 * — NIE PISZĘ o czarnoziemach Płaskowyżu Głubczyckiego —
 *   nie znalazłem źródła podającego to wprost dla tej gminy.
 * — NIE PISZĘ, że Kietrz ma dwujęzyczne tablice. NIE MA.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak
 *   wpisu dla Kietrza (w powiecie jest olej głubczycki, ale to
 *   nie ta gmina).
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * ŚWIADOMIE POMINIĘTE. W czasie wojny działały tu obozy jenieckie
 * i obóz pracy przymusowej dla Polaków, a w styczniu 1945 r.
 * przez miasto przeszedł marsz śmierci z Auschwitz. To jest prawda
 * o tym mieście, ale strona handlowa o sprzęcie kuchennym nie jest
 * miejscem, w którym wolno tego używać jako tła dla oferty.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1321 r., biskup ołomuniecki Konrad I;
 *   miasto należało do morawskich enklaw na Śląsku,
 * — działa tu jedno z największych gospodarstw rolnych w Polsce:
 *   ok. 8 500 ha, blisko 10 000 sztuk bydła, ok. 3 800 krów
 *   mlecznych, ok. 130 tys. litrów mleka dziennie, blisko
 *   300 pracowników; gospodarstwo powstało w 1961 r.,
 * — cmentarzysko kultury łużyckiej (stanowisko 1) z ponad
 *   4 000 zbadanych grobów, użytkowane od schyłku neolitu
 *   po V w. n.e. — jedna z największych nekropoli epoki brązu
 *   i wczesnej epoki żelaza w Europie Środkowej,
 * — 5 400 mieszkańców miasta, 9 840 gminy (31.12.2024).
 */
export const KIETRZ: CityContent = {
  slug: "kietrz",
  h1: "Thermomix Kietrz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kietrz — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kietrzu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kietrz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kietrzu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kietrza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Kietrz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dziesięć sekund za długo i zamiast śmietany masz masło.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kietrzu – jak wygląda prezentacja?",
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
      id: "bita-smietana",
      heading: "Sto trzydzieści tysięcy litrów mleka dziennie — czyli o pół minucie, którą trzeba przypilnować",
      paragraphs: [
        "W gminie Kietrz działa jedno z największych gospodarstw rolnych w Polsce: około ośmiu i pół tysiąca hektarów, blisko dziesięć tysięcy sztuk bydła, w tym prawie trzy tysiące osiemset krów mlecznych. Codziennie schodzi z nich około stu trzydziestu tysięcy litrów mleka. To jest miasto, w którym o nabiale nikomu nie trzeba opowiadać — więc opowiem o czymś węższym i konkretniejszym.",
        "O ubijaniu śmietany. Bo to jest jedna z bardzo niewielu czynności, w których to urządzenie jest jednocześnie szybsze od miksera i bardziej ryzykowne.",
        "Szybsze — bo śmietana ubija się w kilkadziesiąt sekund, w naczyniu, które i tak macie na blacie, bez wyciągania końcówek i bez chlapania po ścianach.",
        "Ryzykowne — bo o kilkanaście sekund za długo i zamiast bitej śmietany macie masło. Tłuszcz się wytrąca, masa rozdziela się na grudki i maślankę, i tego się nie cofa. Nie da się tego uratować dosypaniem cukru ani dolaniem świeżej śmietany. Cała porcja idzie na inny użytek.",
        "Dlatego przy tej jednej czynności trzeba zrobić coś, czego całe to urządzenie ma nie wymagać: stanąć i patrzeć. Nie odchodzić do telefonu, nie wychodzić do drugiego pokoju. Pół minuty uwagi.",
        "Trzy rzeczy decydują o tym, czy w ogóle się uda.",
        "Temperatura. Śmietana musi być naprawdę zimna, prosto z lodówki. Ciepła nie ubije się wcale, choćbyście mieszali kwadrans. I uwaga na pułapkę, w którą wpada mnóstwo osób: naczynie po gorącej zupie jest ciepłe, nawet jeśli wygląda na umyte i suche. Trzeba je wcześniej wystudzić albo schłodzić.",
        "Ilość. Przy zbyt małej porcji ostrza po prostu nie sięgają śmietany — rozjeżdża się po ściankach i nic się nie dzieje. Do jednej kawy nie warto tego uruchamiać.",
        "Zawartość tłuszczu. Śmietana o niskiej zawartości tłuszczu nie ubije się w żadnym urządzeniu na świecie, bo nie ma z czego zbudować piany. To nie jest wina sprzętu.",
        "I jedno zdanie, którego nie ominę: jeżeli macie mleko albo śmietanę prosto od krowy, nie doradzę Wam, co wolno z nimi zrobić, a czego nie. To jest bezpieczeństwo żywności, a nie sprzęt kuchenny — piszę o tym szerzej przy innym mieście i tam też odmawiam.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kietrzu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu pokażę ubijanie od początku do końca i wyraźnie powiem, w którym momencie trzeba przerwać. To jest cała nauka i zajmuje pół minuty.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kietrzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kietrzańskiej rodziny",
      paragraphs: [
        "Kietrz liczy pięć tysięcy czterysta mieszkańców, a cała gmina blisko dziesięć tysięcy. Prawa miejskie dostał w 1321 roku od biskupa ołomunieckiego Konrada I — i to nie jest szczegół bez znaczenia, bo Kietrz należał do morawskich enklaw na Śląsku i obowiązywało w nim prawo morawskie, a podatki szły do skarbu Moraw. Jest tu też rzecz, o której mało kto poza archeologami wie: miejscowe cmentarzysko kultury łużyckiej, z ponad czterema tysiącami zbadanych grobów, użytkowane od schyłku neolitu aż po V wiek naszej ery, uchodzi za jedną z największych nekropoli epoki brązu i wczesnej epoki żelaza w Europie Środkowej.",
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

  districtsHeading: "Do których części Kietrza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Kietrz też przyjadę",
  nearbyParagraphs: [
    "Głubczyce, Baborów, Racibórz, Kędzierzyn-Koźle i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Głubczyce", "Baborów", "Racibórz", "Kędzierzyn-Koźle", "Prudnik", "Opole"],

  about: blokOMnie("do Kietrza", "w Kietrzu i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kietrza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kietrzu"),
    {
      question: "Czy Thermomix ubije śmietanę?",
      answer:
        "Tak, w kilkadziesiąt sekund i bez chlapania po ścianach. Ale to jedna z niewielu czynności, przy których trzeba stanąć i patrzeć — kilkanaście sekund za długo i zamiast bitej śmietany masz masło, czego nie da się cofnąć.",
    },
    {
      question: "Dlaczego moja śmietana się nie ubija?",
      answer:
        "Najczęściej z trzech powodów: jest za ciepła (a naczynie po gorącej zupie bywa ciepłe, choć wygląda na umyte), jest jej za mało i ostrza jej nie sięgają, albo ma za niską zawartość tłuszczu — wtedy nie ubije się w żadnym urządzeniu na świecie.",
    },
    {
      question: "Mam śmietanę prosto od krowy — co mogę z nią zrobić?",
      answer:
        "Tego nie doradzę. Surowe mleko i śmietana to dziedzina bezpieczeństwa żywności, a nie sprzętu kuchennego — po tę wiedzę trzeba pójść do rzetelnego źródła, nie do osoby, która sprzedaje urządzenia.",
    },
  ],

  geo: { lat: 50.08, lng: 18.0041 },
};
