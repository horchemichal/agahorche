import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * PIŃCZÓW — miasto nad Nidą, stolica Ponidzia. Od wieków wydobywa się tu
 * wapień zwany kamieniem pińczowskim; miękki w obróbce, twardniejący
 * z czasem, używany przy budowie i zdobieniu budowli w Krakowie i w całej
 * Polsce. W XVI wieku Pińczów był ważnym ośrodkiem reformacji, z drukarnią
 * i szkołą, nazywanym Atenami Sarmackimi.
 *
 * KĄT: rzecz kupowana raz. Kamień, który obrabia się miękko, a z czasem
 * twardnieje i stoi przez pięćset lat, jest najlepszym możliwym punktem
 * wyjścia do JEDYNEJ NAPRAWDĘ TRUDNEJ ROZMOWY na tych stronach — o tym,
 * że to jest drogi sprzęt. Sekcja ma policzyć to uczciwie i skończyć się
 * zdaniem, którego nie powie żaden sprzedawca: JEŚLI GOTUJESZ DWA RAZY
 * W MIESIĄCU, NIE KUPUJ TEGO.
 *
 * ŻADNYCH LICZB FINANSOWYCH. Nie podaję kwot, rat ani RRSO — te są
 * w osobnej sekcji i pochodzą z oficjalnych materiałów. Tutaj jest wyłącznie
 * sposób myślenia o wydatku, a nie wyliczenia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — kamień pińczowski to wapień wydobywany w okolicy Pińczowa, miękki
 *   w obróbce i twardniejący z upływem czasu,
 * — był używany przy budowlach i detalu architektonicznym w Krakowie
 *   i w innych miastach,
 * — Pińczów leży nad Nidą, na Ponidziu, w otoczeniu parku krajobrazowego,
 * — w XVI wieku działały tu drukarnia i szkoła związane z reformacją.
 *
 * CZEGO NIE MA: dat, nazw konkretnych budowli, wielkości wydobycia, cen.
 */
export const PINCZOW: CityContent = {
  slug: "pinczow",
  h1: "Thermomix Pińczów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Pińczów — prezentacja i cena",
  seoDescription:
    "Thermomix w Pińczowie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i całe Ponidzie. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pińczów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pińczowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pińczowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Gacek, Bogucic, Włoch i pozostałych sołectw gminy.",

  highlights: highlightyStandardowe("Pińczów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pińczowie – jak wygląda prezentacja?",
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
      id: "kupowane-raz",
      heading: "Kamień, który twardnieje z czasem — i rzeczy kupowane raz",
      paragraphs: [
        "Kamień pińczowski ma cechę, która wygląda jak przenośnia, a jest zwykłą właściwością fizyczną: świeżo wydobyty jest na tyle miękki, że daje się rzeźbić, a z upływem lat twardnieje. Dlatego robiono z niego detale, które miały przetrwać stulecia — i przetrwały, w Krakowie i nie tylko.",
        "Piszę o tym, bo w Pińczowie mogę od tego przejść do jedynej naprawdę niewygodnej rozmowy na tej stronie. Thermomix jest drogi. Nie „inwestycją”, nie „wydatkiem na zdrowie” — po prostu drogi, i każdy, kto pierwszy raz widzi cenę, ma prawo się cofnąć.",
        "Uczciwy sposób liczenia jest tylko jeden i nie ma w nim nic z magii. Nie „ile to kosztuje”, tylko „ile to kosztuje na rok, przy tym, jak naprawdę gotujecie”. Urządzenie kupowane raz i używane codziennie przez kilkanaście lat wygląda w tym rachunku zupełnie inaczej niż to samo urządzenie stojące w szafce. Cały ciężar spoczywa więc nie na cenie, tylko na słowie CODZIENNIE.",
        "I dlatego powiem rzecz, której sprzedawca mówić nie powinien, a ja mówię: jeśli gotujecie dwa razy w miesiącu, nie kupujcie tego. Naprawdę. Nie dlatego, że urządzenie jest złe — dlatego, że przy takim użyciu nie ma szans się obronić, a ja nie chcę, żeby stało u Was jako wyrzut sumienia.",
        "Jeśli natomiast gotujecie codziennie, dla kilku osób, i wieczorami brakuje Wam nie pomysłów, tylko sił — wtedy warto to policzyć na spokojnie. Na prezentacji podam liczby wprost, bez zaokrąglania w swoją stronę, i zostawię Was z nimi.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pińczowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Pińczowem. Ponidzie jest rozłożone i wsie leżą daleko od siebie, więc trasę planuję z góry — ale dojazd jest wszędzie bezpłatny.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pińczowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pińczowskiej rodziny",
      paragraphs: [
        "Na Ponidziu obiad bywa jednym wspólnym posiłkiem dnia, gotowanym z zapasu i z własnych produktów — a przygotowuje go ta sama osoba, przez cały rok.",
        "Thermomix zdejmuje z tego stanie przy garnku i mycie trzech naczyń po jednej zupie. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Pińczów",
    "Gacki",
    "Bogucice",
    "Włochy",
    "Brzeście",
    "Krzyżanowice",
    "Zagość",
    "Kowala",
    "Szarbków",
    "Podłęże",
  ],

  nearbyHeading: "Całe Ponidzie",
  nearbyParagraphs: [
    "Busko-Zdrój, Wiślica, Kazimierza Wielka, Jędrzejów i Chmielnik są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Busko-Zdrój", "Wiślica", "Kazimierza Wielka", "Jędrzejów", "Chmielnik", "Skalbmierz"],

  about: blokOMnie("do Pińczowa", "w Pińczowie i na Ponidziu", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pińczowa bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pińczowie"),
    {
      question: "Szczerze — czy to się opłaca?",
      answer:
        "Zależy, jak często gotujecie, i to jest jedyna uczciwa odpowiedź. Przy codziennym gotowaniu dla kilku osób rachunek wygląda zupełnie inaczej niż przy gotowaniu od święta. Na spotkaniu policzymy to na Waszym przykładzie, a jeśli wyjdzie, że się nie broni, powiem to wprost.",
    },
    {
      question: "Czy w mniejszej miejscowości warunki zakupu są inne?",
      answer:
        "Nie. Cena i promocje są ogólnopolskie i ustala je producent — w Pińczowie, w Krakowie i w Warszawie są takie same. Dojazd też nic nie kosztuje, niezależnie od tego, jak daleko od miasta mieszkasz.",
    },
  ],

  geo: { lat: 50.5217, lng: 20.5292 },
};
