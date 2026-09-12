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
 * TUŁOWICE — miasto w powiecie opolskim, 3 630 mieszkańców
 * (31.12.2024, GUS); cała gmina 4 921. NAJMŁODSZE MIASTO
 * W WOJEWÓDZTWIE: status od 1 STYCZNIA 2018 r., na mocy
 * rozporządzenia Rady Ministrów z 24 lipca 2017 r.
 * (Dz.U. 2017 poz. 1427) — to NADANIE, nie odzyskanie.
 * Działa tu ZESPÓŁ SZKÓŁ Z TECHNIKUM LEŚNYM, w którego programie
 * są hodowla lasu i łowiectwo.
 *
 * UWAGA — HOMONIM: istnieją też Tułowice w woj. mazowieckim
 * (gmina Wiskitki). Chodzi o Tułowice w powiecie opolskim.
 *
 * KĄT: dziczyzna — mięso, którego prawie nikt nie umie ugotować.
 * Miasto z technikum leśnym, w którego programie jest łowiectwo,
 * jest jedynym właściwym miejscem w serwisie na ten temat.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dziczyzna jest chuda i twarda, więc szybkie metody
 *   ją niszczą, a długie duszenie ratuje,
 * — że urządzenie trafia w to dobrze, bo trzyma niską temperaturę
 *   godzinami i miesza samo,
 * — że NIE przysmaży i nie zrobi skórki — to zostaje przy patelni,
 * — i że o samym pozyskaniu, obróbce i badaniu mięsa NIE PISZĘ,
 *   bo to jest dziedzina weterynarii i przepisów, nie sprzętu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O POZYSKANIU, PATROSZENIU, SKRUSZANIU ANI
 *   BADANIU MIĘSA (w tym o włośniu). To są przepisy prawa
 *   i weterynaria — odmowa stoi w tekście wprost i jest
 *   najważniejszym zdaniem tej strony.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o dziczyźnie („chudsza",
 *   „zdrowsza") — nie wchodzę w to.
 * — ŻADNEGO ZAJMOWANIA STANOWISKA W SPRAWIE ŁOWIECTWA. To temat
 *   sporny i strona handlowa o sprzęcie kuchennym nie jest
 *   miejscem na moje zdanie.
 * — ŻADNYCH PORAD O MROŻENIU I PRZECHOWYWANIU dziczyzny.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Duszenie" (Łagów) to strona
 * o TECHNICE w ogóle — tutaj technika jest tylko narzędziem,
 * a tematem jest konkretny, trudny surowiec. „Mielenie mięsa"
 * (Modliborzyce) dotyczy maszynki i mięsa mielonego. „Ryba"
 * i „wędzenie i peklowanie" mają własne miasta.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że w Tułowicach jest szkoła ceramiczna. NIE MA —
 *   jest TECHNIKUM LEŚNE. To częsty błąd, biorący się z ceramicznej
 *   historii miejscowości.
 * — NIE PISZĘ, że działa tu dawna fabryka porcelany. Zakłady
 *   Porcelany przeszły w likwidację od 2001 r.; w zabytkowych
 *   budynkach działają dziś manufaktury ceramiczne i muzeum.
 * — NIE PODAJĘ NAZW FIRM ani liczby zatrudnionych.
 * — NIE ROZSTRZYGAM roku założenia manufaktury fajansu
 *   (1811 czy 1813) ani daty otwarcia mniejszego z muzeów.
 * — NIE PISZĘ, że Tułowice mają dwujęzyczne tablice. NIE MAJĄ.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak.
 * — NIE wymyślam osiedli. Brak aktualnego wykazu. districts
 *   to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — status miasta od 1 stycznia 2018 r. (Dz.U. 2017 poz. 1427);
 *   nadanie, nie odzyskanie,
 * — manufaktura fajansu założona przez hrabiego Praschmę
 *   na początku XIX w.; od 1889 r. porcelana rodziny
 *   Schlegelmilch sygnowana „R.S. Prussia", eksportowana
 *   do obu Ameryk; w 1910 r. zakład zatrudniał 800 osób;
 *   likwidacja zakładów od 2001 r.,
 * — w odrestaurowanej dawnej fabryce działa od 2024 r. muzeum
 *   porcelany śląskiej; drugie, mniejsze muzeum ceramiki
 *   mieści się w dawnym dworcu,
 * — działa tu Zespół Szkół z Technikum Leśnym; w programie
 *   m.in. hodowla lasu i łowiectwo,
 * — miasto leży przy linii kolejowej Opole–Nysa,
 * — 3 630 mieszkańców miasta, 4 921 gminy (31.12.2024).
 */
export const TULOWICE: CityContent = {
  slug: "tulowice",
  h1: "Thermomix Tułowice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tułowice — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Tułowicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tułowice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tułowicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tułowic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Tułowice i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dziczyzna wybacza tylko jedno: czas w niskiej temperaturze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tułowicach – jak wygląda prezentacja?",
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
      id: "dziczyzna",
      heading: "Miasto technikum leśnego — czyli o mięsie, którego prawie nikt nie umie ugotować",
      paragraphs: [
        "W Tułowicach działa Zespół Szkół z technikum leśnym — z hodowlą lasu, maszynoznawstwem leśnym i łowiectwem w programie. Nigdzie indziej w tym serwisie nie mam równie dobrego powodu, żeby napisać o dziczyźnie. A jest o czym, bo to jest surowiec, przy którym ludzie mylą się najczęściej i najbardziej.",
        "Najpierw jedno zdanie, przy którym nie ustąpię, i stawiam je na początku, nie na końcu: nie doradzę Wam niczego, co dotyczy pozyskania, patroszenia, skruszania ani badania mięsa. To jest dziedzina przepisów prawa i weterynarii — przy dziczyźnie akurat wcale nie formalna — a ja jestem przedstawicielką handlową sprzętu kuchennego. Zaczynam tam, gdzie mięso jest już legalnie w Waszej kuchni i sprawdzone.",
        "Nie zajmuję też stanowiska w sprawie samego łowiectwa. To spór, w którym strona handlowa o garnkach nie ma nic do powiedzenia.",
        "Teraz kuchnia. Dziczyzna zachowuje się inaczej niż mięso hodowlane z jednego powodu: zwierzę żyło i się ruszało. Mięso jest chudsze, mięśnie bardziej zwarte, tkanka łączna twardsza. Konsekwencja jest bezlitosna — wszystko, co szybkie i gorące, wychodzi na sucho i twardo. Smażenie tak samo jak przy schabie kończy się podeszwą.",
        "Ratunkiem jest czas w niskiej temperaturze. Dzik, sarna czy jeleń duszone długo i spokojnie robią się miękkie, bo tkanka łączna ma czas się rozejść. I to jest dokładnie ten rodzaj gotowania, w którym urządzenie wypada najlepiej: trzyma ustawioną temperaturę godzinami i miesza samo, więc nic nie przywiera i nic nie wymaga stania przy garnku. Nastawiacie po południu, wracacie wieczorem.",
        "Dwie rzeczy, których nie zrobi, i lepiej wiedzieć to wcześniej.",
        "Nie przysmaży mięsa na początku. A przy dziczyźnie ten krok znaczy dużo — mocno rozgrzana patelnia i skórka na kawałkach zmieniają smak gotowego dania bardziej niż cokolwiek innego. Robicie to osobno i przekładacie.",
        "Nie odparuje sosu. Pod zamkniętą pokrywą prawie nic nie ucieka, więc płynu wlewa się wyraźnie mniej niż do garnka — inaczej z gulaszu wyjdzie zupa.",
        "Pomaga za to w rzeczach obok: zmieli jałowiec i pieprz, zrobi marynatę, przetrze warzywa na gęsty sos, przygotuje dodatek z owoców leśnych. To jest robota, przy której przy dziczyźnie schodzi pół popołudnia.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tułowicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu bywa dziczyzna, powiedzcie to przy umawianiu — pokażę, jak wygląda długie duszenie bez pilnowania i ile płynu realnie trzeba dolać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tułowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tułowickiej rodziny",
      paragraphs: [
        "Tułowice liczą nieco ponad trzy i pół tysiąca mieszkańców i są najmłodszym miastem w województwie — status dostały dopiero 1 stycznia 2018 roku i nigdy wcześniej miastem nie były. Przez dwa stulecia miejscowość żyła z ceramiki: manufakturę fajansu założył tu na początku XIX wieku hrabia Praschma, a od 1889 roku rodzina Schlegelmilch produkowała porcelanę sygnowaną „R.S. Prussia”, eksportowaną do obu Ameryk. W 1910 roku zakład zatrudniał osiemset osób — więcej, niż dziś jakikolwiek pracodawca w całej gminie. Zakłady poszły w likwidację po 2001 roku, ale w odrestaurowanych budynkach dawnej fabryki działa od 2024 roku muzeum porcelany śląskiej, a w dawnym dworcu drugie, mniejsze muzeum ceramiki. Wbrew temu, czego można by się spodziewać, tutejsza szkoła nie jest ceramiczna, tylko leśna.",
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

  districtsHeading: "Do których części Tułowic dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy — Szydłowa, Ligoty Tułowickiej, Skarbiszowic i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje aktualnego wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Tułowice też przyjadę",
  nearbyParagraphs: [
    "Niemodlin, Opole, Prószków, Grodków, Nysa i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Niemodlin", "Opole", "Prószków", "Grodków", "Nysa", "Korfantów"],

  about: blokOMnie("do Tułowic", "w Tułowicach i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tułowic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Tułowice w powiecie opolskim, nie o Tułowice na Mazowszu.",
    },
    ...faqWspolne("w Tułowicach"),
    {
      question: "Czy Thermomix poradzi sobie z dziczyzną?",
      answer:
        "Z tą częścią, która polega na długim duszeniu w niskiej temperaturze — tak, i to bardzo dobrze, bo trzyma temperaturę godzinami i miesza sam. Dziczyzna jest chuda i zwarta, więc szybkie i gorące metody ją niszczą, a czas ją ratuje.",
    },
    {
      question: "Czego nie zrobi przy dziczyźnie?",
      answer:
        "Nie przysmaży mięsa na początku — a przy dziczyźnie ten krok naprawdę zmienia smak, więc robi się go na patelni i przekłada. Nie odparuje też sosu: pod zamkniętą pokrywą nic nie ucieka, więc płynu wlewa się wyraźnie mniej niż do garnka.",
    },
    {
      question: "Doradzisz coś w sprawie obróbki upolowanego zwierzęcia?",
      answer:
        "Nie i przy tym nie ustąpię. Pozyskanie, patroszenie, skruszanie i badanie mięsa to dziedzina przepisów prawa i weterynarii, nie sprzętu kuchennego. Zaczynam tam, gdzie mięso jest już legalnie w Waszej kuchni i sprawdzone.",
    },
  ],

  geo: { lat: 50.5933, lng: 17.655 },
};
