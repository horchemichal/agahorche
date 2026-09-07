import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * TORUŃ — miasto Kopernika, czyli miejsce, którego najsłynniejszy
 * mieszkaniec zasłynął z uważnego patrzenia i sprawdzania.
 *
 * KĄT: błędy pierwszego tygodnia. Konkretna lista rzeczy, które robi
 * prawie każdy na początku — i których nikt nie wymienia przed zakupem,
 * bo nie brzmią sprzedażowo.
 *
 * PO CO TO JEST: bo pierwszy tydzień decyduje o tym, czy sprzęt zostanie
 * na blacie, czy pojedzie do szafki. Zniechęcenie bierze się prawie zawsze
 * z drobiazgów, a nie z urządzenia.
 *
 * TWARDA GRANICA — NAJWAŻNIEJSZA NA TEJ STRONIE: ŻADNYCH WYMYŚLONYCH
 * USTAWIEŃ. Ani jednej liczby: żadnych stopni, prędkości, minut ani
 * pojemności podanych z głowy. Lista opisuje ZACHOWANIA, nie parametry —
 * „zaczynać wolno", a nie „ustawić prędkość X".
 *
 * ROZGRANICZENIE. Konin opisuje trzeci tydzień, w którym nawyk się nie
 * wytworzył. Włocławek — naukę gotowania od zera. Świecie — czego
 * właściciele nie wiedzą po roku. Tutaj chodzi o SIEDEM PIERWSZYCH DNI
 * i o rzeczy, które psują się mechanicznie, a nie o motywację.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Toruń jest miastem Mikołaja Kopernika.
 */
export const TORUN: CityContent = {
  slug: "torun",
  h1: "Thermomix Toruń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Toruń — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Toruniu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Toruń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Toruniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Torunia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic i do miejscowości wokół miasta.",

  highlights: highlightyStandardowe("Toruń i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pierwsze danie robimy razem — właśnie po to, żeby pierwszy tydzień był łatwiejszy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Toruniu – jak wygląda prezentacja?",
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
      id: "pierwszy-tydzien",
      heading: "Miasto, które nauczyło się patrzeć uważnie — i lista błędów pierwszego tygodnia",
      paragraphs: [
        "Najsłynniejszy mieszkaniec Torunia zasłynął z tego, że patrzył uważnie i sprawdzał, zamiast powtarzać to, co wszyscy wiedzą. Wykorzystam to do listy, której nie znajdziecie w żadnym materiale sprzedażowym, bo nie brzmi zachęcająco: co ludzie robią źle w pierwszym tygodniu. Piszę o tym, bo właśnie ten tydzień decyduje, czy sprzęt zostanie na blacie, czy pojedzie do szafki — a zniechęcenie bierze się prawie zawsze z drobiazgów.",
        "Błąd pierwszy i najczęstszy: przepełnione naczynie. Naczynie ma oznaczenie maksymalnego poziomu i ono nie jest sugestią. Gorąca zupa nalana powyżej wykipi i będzie z tego więcej sprzątania niż gotowania. Przy pierwszej dużej porcji warto po prostu zrobić dwa razy mniej i zobaczyć, jak to wygląda.",
        "Błąd drugi, ten z gatunku niebezpiecznych: gwałtowne rozdrabnianie gorącego płynu. Gorące ciecze zachowują się inaczej niż zimne i potrafią chlapnąć. Zasada jest jedna i prosta: przy gorącym zaczynamy wolno i zwiększamy stopniowo, nigdy od razu na pełnych obrotach. Nie podam Wam tu żadnych liczb, bo ustawienia są w przepisie, a nie w mojej głowie.",
        "Błąd trzeci: wrzucanie wszystkiego naraz. Twarde rzeczy, które mają być rozdrobnione, idą pierwsze i same — dopiero potem dochodzi reszta. Wrzucone razem z płynem po prostu się nie rozdrobnią i wyjdzie z tego coś nierównego, po czym człowiek stwierdza, że „to nie działa”.",
        "Błąd czwarty, najbardziej ludzki: ustawianie czasu i odchodzenie bez patrzenia, co powstaje. Przepis jest punktem wyjścia, a nie wyrokiem — Wasze warzywa mogą być twardsze, a garnek startować z zimniejszego. Uważne zajrzenie w połowie oszczędza rozczarowania na końcu.",
        "Błąd piąty, przy którym najczęściej rodzi się niechęć: zostawianie naczynia na później. Zaschnięte ciasto albo zaschnięta zupa zmieniają dwuminutowe mycie w kwadrans szorowania — a po dwóch takich wieczorach człowiek zaczyna omijać ten sprzęt wzrokiem. Wystarczy zalać naczynie wodą od razu po przelaniu jedzenia.",
        "I błąd szósty, o którym mówię wszystkim: chowanie urządzenia do szafki po pierwszym tygodniu, „bo na razie nie ma miejsca”. To jest najczęstszy sposób, w jaki dobry sprzęt przestaje być używany. Ma stać na blacie i tam ma zostać.",
        "Żaden z tych błędów nie jest poważny i wszystkie przechodzą po kilku dniach. Wymieniam je tylko po to, żebyście wiedzieli, że to normalne — a nie że coś jest nie tak z urządzeniem albo z Wami.",
      ],
      links: [{ href: "/poradnik", label: "Poradnik kuchenny" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Toruniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Toruniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla toruńskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których dzielnic Torunia dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Starówka",
    "Bydgoskie Przedmieście",
    "Chełmińskie Przedmieście",
    "Jakubskie Przedmieście",
    "Mokre",
    "Rubinkowo",
    "Na Skarpie",
    "Bielawy",
    "Wrzosy",
    "Podgórz",
    "Stawki",
    "Kaszczorek",
  ],

  nearbyHeading: "Poza Toruń też przyjadę",
  nearbyParagraphs: [
    "Chełmża, Lubicz, Aleksandrów Kujawski i Golub-Dobrzyń są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Chełmża", "Lubicz", "Aleksandrów Kujawski", "Golub-Dobrzyń", "Bydgoszcz", "Włocławek"],

  about: blokOMnie("do Torunia", "w Toruniu i okolicy", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Torunia bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich dzielnic i do miejscowości wokół miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Toruniu"),
    {
      question: "Co najczęściej idzie nie tak w pierwszym tygodniu?",
      answer:
        "Przepełnione naczynie (oznaczenie maksymalnego poziomu nie jest sugestią), gwałtowne rozdrabnianie gorącego płynu zamiast zaczynania powoli, wrzucanie wszystkiego naraz zamiast rozdrobnienia twardych rzeczy na początku, oraz zostawianie naczynia do zaschnięcia. Żaden z tych błędów nie jest poważny i wszystkie przechodzą po kilku dniach.",
    },
    {
      question: "Czy to trudne w obsłudze na początku?",
      answer:
        "Nie trudniejsze niż nowy telefon, ale pierwszy tydzień wymaga uwagi. Dlatego pierwsze danie robimy razem na spotkaniu — nie po to, żeby zrobić wrażenie, tylko żeby te kilka pierwszych dni było łatwiejsze.",
    },
  ],

  geo: { lat: 53.0138, lng: 18.5984 },
};
