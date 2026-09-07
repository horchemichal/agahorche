import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * BOLESŁAWIEC — miasto znane w całej Polsce i poza nią z ceramiki:
 * naczyń z charakterystycznym wzorem stempelkowym, robionych tu od stuleci.
 * To naczynia, które stawia się na stole, a nie chowa do szafki.
 *
 * KĄT: zmywanie. Miasto, które robi naczynia, jest jedynym właściwym
 * miejscem na temat całkowicie przemilczany w tej branży: ILE NACZYŃ
 * REALNIE UBYWA, A CO DOCHODZI DO ZMYWANIA. Odpowiedź jest mieszana
 * i właśnie dlatego warto ją podać uczciwie: garnków ubywa dużo,
 * ale dochodzi mycie samego naczynia z nożem, a to nie jest to samo
 * co wyprzątnięcie kubka.
 *
 * ROZGRANICZENIE WOBEC ĆMIELOWA. Ćmielów dostał kąt „obiad, na który
 * wyjmuje się porcelanę" — czyli o okazji i o gościach. Tutaj chodzi
 * o rzecz kompletnie przyziemną: o zlew po obiedzie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Bolesławiec od stuleci produkuje ceramikę użytkową, rozpoznawalną
 *   po wzorze nanoszonym stempelkiem,
 * — są to naczynia przeznaczone do codziennego użytku.
 *
 * CZEGO NIE MA: nazw manufaktur, opisu technologii, cen naczyń.
 */
export const BOLESLAWIEC: CityContent = {
  slug: "boleslawiec",
  h1: "Thermomix Bolesławiec – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Bolesławiec — prezentacja i cena",
  seoDescription:
    "Thermomix w Bolesławcu: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bolesławiec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bolesławcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bolesławca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Bolesławiec i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bolesławcu – jak wygląda prezentacja?",
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
      id: "zmywanie",
      heading: "Miasto od naczyń — więc pogadajmy o zlewie po obiedzie",
      paragraphs: [
        "Bolesławiec robi naczynia od stuleci i robi takie, których się nie chowa — stawia się je na stole i myje po każdym obiedzie. W mieście, które o naczyniach wie wszystko, wypada wreszcie powiedzieć coś o rzeczy, którą sprzedawcy pomijają: o zmywaniu.",
        "Zacznę od tego, co jest prawdą. Garnków realnie ubywa i to jest odczuwalne. Zupa krem, która normalnie wymaga garnka, blendera i durszlaka, powstaje w jednym naczyniu — i nie ma potem rozbryzganego blendera. Ciasto nie oznacza miski, łopatki i miksera z dwoma trzepaczkami. Sos nie oznacza rondelka do domycia z przypalonego dna, bo nic się nie przypala. Jeśli w domu myje się ręcznie, ta różnica jest duża.",
        "A teraz to, czego nie usłyszycie na pokazie. Samo naczynie trzeba umyć, i nie jest to kubek. W środku siedzi nóż, pod nim uszczelka, do tego pokrywa i miarka. Urządzenie potrafi umyć się samo w kilkadziesiąt sekund — wlewa się wodę z kroplą płynu i uruchamia — i to wystarcza w dziewięciu przypadkach na dziesięć, zwłaszcza gdy robicie kilka dań pod rząd. Ale po surowym mięsie, po cieście drożdżowym albo po czymś naprawdę tłustym trzeba to zrobić porządnie, ręką albo w zmywarce.",
        "Uczciwy bilans wygląda więc tak: jeśli gotujecie jedno danie, zmywania jest podobnie. Jeśli gotujecie obiad z dwóch albo trzech elementów, ubywa go wyraźnie — bo wszystko robicie w jednym naczyniu, przepłukując je między daniami.",
        "Na spotkaniu pokażę to od razu po gotowaniu, a nie na koniec, jak się to zwykle robi. Wolę, żebyście zobaczyli zlew, a nie tylko talerz.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bolesławcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bolesławcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bolesławieckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — ta sama, która potem zmywa.",
        "Thermomix pomaga tym, że nie wymaga obecności i że wiele dań powstaje w jednym naczyniu. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla całego domu.",
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
    "Bolesławiec",
    "Kruszyn",
    "Łaziska",
    "Bożejowice",
    "Dąbrowa Bolesławiecka",
    "Kraśnik Dolny",
    "Ocice",
    "Trzebień",
    "Żeliszów",
    "Nowa Wieś",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Nowogrodziec, Chojnów, Złotoryja, Lubań i Pieńsk są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nowogrodziec", "Chojnów", "Złotoryja", "Lubań", "Pieńsk", "Węgliniec"],

  about: blokOMnie("do Bolesławca", "w gminie Bolesławiec i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bolesławca bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bolesławcu"),
    {
      question: "Czy naprawdę będzie mniej zmywania?",
      answer:
        "Przy obiedzie z jednego dania — podobnie. Przy obiedzie z dwóch czy trzech elementów wyraźnie mniej, bo wszystko powstaje w jednym naczyniu i przepłukuje się je między daniami. Znika za to blender, rondelek do sosu i mikser z trzepaczkami.",
    },
    {
      question: "Jak myje się samo urządzenie?",
      answer:
        "Najczęściej samo: wlewa się wodę z kroplą płynu i uruchamia na kilkadziesiąt sekund. Po surowym mięsie, cieście drożdżowym albo czymś bardzo tłustym trzeba jednak umyć porządnie — ręcznie albo w zmywarce, razem z nożem, uszczelką, pokrywą i miarką. Pokażę to na spotkaniu od razu po gotowaniu.",
    },
  ],

  geo: { lat: 51.2644, lng: 15.5694 },
};
