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
 * PRUDNIK — miasto u stóp Gór Opawskich, przy granicy z Czechami,
 * od XIX wieku związane z przemysłem włókienniczym; tutejsze tkaniny
 * domowe — ręczniki, obrusy, pościel — były znane w całym kraju.
 *
 * KĄT: bałagan. Miasto, które robiło ścierki i obrusy, jest jedynym
 * miejscem, gdzie mogę policzyć uczciwie rzecz, o której nikt nie mówi
 * konkretnie: ILE ROBOTY ZOSTAJE PO GOTOWANIU. Nie „mniej zmywania"
 * w reklamowym sensie, tylko wyliczone: co naprawdę znika, a co zostaje
 * dokładnie tak samo jak było.
 *
 * WARUNEK UCZCIWOŚCI: sekcja musi wymienić także to, czego nie ubywa —
 * deska i nóż przy krojeniu mięsa, mąka na blacie przy pieczeniu,
 * patelnia. I musi powiedzieć, że samo naczynie urządzenia też trzeba
 * umyć, i że nie zawsze wystarczy jego własny program.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Prudnik jest od XIX wieku ośrodkiem przemysłu włókienniczego,
 *   znanym z tkanin domowych,
 * — miasto leży u stóp Gór Opawskich, przy granicy z Czechami.
 *
 * CZEGO NIE MA: nazw zakładów, danych o zatrudnieniu, historii branży.
 */
export const PRUDNIK: CityContent = {
  slug: "prudnik",
  h1: "Thermomix Prudnik – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Prudnik — prezentacja i cena",
  seoDescription:
    "Thermomix w Prudniku: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Prudnik — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Prudniku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Prudnika z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Szybowic, Moszczanki, Rudziczki i pozostałych sołectw.",

  highlights: highlightyStandardowe("Prudnik i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Prudniku – jak wygląda prezentacja?",
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
      id: "co-zostaje-po-gotowaniu",
      heading: "Miasto od ścierek i obrusów — policzmy więc bałagan",
      paragraphs: [
        "Prudnik od dziewiętnastego wieku żyje z włókiennictwa i przez dekady robił to, czego w każdej kuchni jest najwięcej: ręczniki, ścierki, obrusy. Skoro więc piszę do miasta, które zna się na tym, co potem trzeba wyprać, wypada policzyć uczciwie, ile roboty zostaje po gotowaniu.",
        "Bo „mniej zmywania” to najczęściej powtarzane zdanie w tej branży i najrzadziej rozpisane na konkret. Rozpiszę.",
        "Co naprawdę znika. Przy zupie czy sosie: garnek, blender albo sitko, deska i nóż do warzyw, miska do wymieszania, waga i jej miseczka. To wszystko dzieje się w jednym naczyniu, więc po obiedzie zostaje ono, chochla i talerze. Przy cieście znika najbardziej upierdliwa część, czyli mąka na rękach i na blacie — bo wyrabianie odbywa się w zamkniętym naczyniu.",
        "Czego nie ubywa — i tego nie przemilczę. Mięso nadal trzeba pokroić na desce i tę deskę umyć. Patelnia zostaje patelnią. Przy pieczeniu blat i tak będzie w mące, kiedy przyjdzie formować bułki. Talerzy nie ubywa ani o jeden. A samo naczynie urządzenia też trzeba umyć — jego własny program pomaga i najczęściej wystarcza, ale po cieście albo po czymś tłustym i tak sięga się po gąbkę.",
        "Uczciwy bilans wygląda więc tak: zmywania jest wyraźnie mniej, ale nie ma go zero, i nikt, kto Wam obiecuje zero, nie mówi prawdy. Największa różnica nie jest zresztą w liczbie naczyń, tylko w tym, że nie trzeba ich myć w trakcie gotowania, gdy się śpieszy — wszystko zostaje na koniec i schodzi za jednym razem.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Prudniku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Prudnikiem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Prudniku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla prudnickiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — ta sama, która potem sprząta kuchnię.",
        "Thermomix pomaga na dwa sposoby: nie wymaga obecności podczas gotowania i skupia większość roboty w jednym naczyniu, więc sprzątanie schodzi na koniec zamiast trwać przez cały czas.",
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
    "Prudnik",
    "Łąka Prudnicka",
    "Moszczanka",
    "Niemysłowice",
    "Szybowice",
    "Rudziczka",
    "Mieszkowice",
    "Dębowiec",
    "Chocim",
    "Wierzbiec",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Głogówek, Biała, Korfantów, Głuchołazy i Głubczyce są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Głogówek", "Biała", "Korfantów", "Głuchołazy", "Głubczyce", "Nysa"],

  about: blokOMnie("do Prudnika", "w gminie Prudnik i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Prudnika bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Prudniku"),
    {
      question: "Czy naprawdę jest po tym mniej zmywania?",
      answer:
        "Wyraźnie mniej, ale nie zero — i nikt, kto obiecuje zero, nie mówi prawdy. Znika garnek, blender, sitko, miska i waga, bo wszystko dzieje się w jednym naczyniu. Zostaje deska do mięsa, patelnia, talerze i samo naczynie urządzenia, które też trzeba umyć.",
    },
    {
      question: "Czy naczynie myje się samo?",
      answer:
        "Ma własny program mycia i najczęściej wystarcza — ale po cieście albo po czymś tłustym i tak sięga się po gąbkę. Pokażę Ci to na spotkaniu na tym, co ugotujemy, żebyś zobaczyła realny efekt, a nie ten z reklamy.",
    },
  ],

  geo: { lat: 50.3206, lng: 17.58 },
};
