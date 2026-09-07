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
 * OLSZTYNEK — miasteczko na południe od Olsztyna, z jednym z najstarszych
 * skansenów w Polsce: Muzeum Budownictwa Ludowego, gdzie stoją chałupy
 * z czarnymi kuchniami i piecami chlebowymi.
 *
 * KĄT: czy dawniej gotowało się lepiej. Miasto skansenu jest jedynym
 * właściwym miejscem na rozmowę o nostalgii — bo to ona, a nie cena,
 * jest najczęstszym cichym argumentem przeciwko takim urządzeniom.
 *
 * SEKCJA MA BYĆ WYWAŻONA I NIE MOŻE BYĆ ANI DRWINĄ Z DAWNEJ KUCHNI,
 * ANI JEJ WYŚMIANIEM „POSTĘPEM". Uczciwa odpowiedź ma trzy części:
 * — co dawniej faktycznie było lepsze: produkt był bliżej, sezonowość
 *   była naturalna, a jedzenia się nie marnowało,
 * — co jest mitem: „prostsze" jedzenie znaczyło też ubogie i monotonne,
 *   a smak zależał od tego samego co dziś — od produktu i od wprawy,
 * — czego się nie mówi wcale: TAMTA KUCHNIA KOSZTOWAŁA CZAS I ZDROWIE
 *   KONKRETNEJ KOBIETY, i to jest jedyna rzecz, o którą naprawdę chodzi
 *   w porównaniu.
 *
 * TON: bez ideologii, bez wywyższania się nad przeszłość, bez sentymentu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Olsztynku działa skansen — Muzeum Budownictwa Ludowego,
 * — w dawnych chałupach gotowano przy piecu i w kuchni opalanej drewnem.
 */
export const OLSZTYNEK: CityContent = {
  slug: "olsztynek",
  h1: "Thermomix Olsztynek – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Olsztynek — prezentacja i cena",
  seoDescription:
    "Thermomix w Olsztynku: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Olsztynek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Olsztynku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Olsztynka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Olsztynek i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Drożdżowa plecionka z kruszonką przygotowana z ciasta wyrobionego w Thermomixie",
    caption: "Ciasto drożdżowe wyrabia się samo — to jedna z rzeczy, które najłatwiej sprawdzić na miejscu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Olsztynku – jak wygląda prezentacja?",
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
      id: "czy-dawniej-lepiej",
      heading: "Skansen za miastem — i pytanie, czy dawniej gotowało się lepiej",
      paragraphs: [
        "W Olsztynku stoi skansen z chałupami, w których gotowano przy piecu i przy kuchni opalanej drewnem. Chodząc po nim, trudno nie pomyśleć tego, co i tak myśli większość ludzi rozmawiających o nowym sprzęcie w kuchni: że kiedyś jedzenie było lepsze. To jest najczęstszy cichy argument przeciwko takim urządzeniom — częstszy nawet niż cena — więc odpowiem na niego uczciwie i w trzech częściach.",
        "Po pierwsze, co naprawdę było lepsze i nie ma co udawać, że nie. Produkt był bliżej: jajko od sąsiada, mleko od swojej krowy, warzywo z ogródka. Sezonowość nie była wyborem, tylko faktem, więc pomidor jadło się wtedy, gdy pomidor był pomidorem. I nie marnowało się nic — nie z powodów światopoglądowych, tylko dlatego, że nie było z czego marnować.",
        "Po drugie, co jest mitem. Że kuchnia była wtedy „prostsza i zdrowsza”. Była przede wszystkim uboga i monotonna: te same kilka potraw przez cały rok, dużo mąki i tłuszczu, mało warzyw zimą, mięso od święta. A smak zależał od dokładnie tego samego co dziś — od produktu i od tego, czy ktoś umiał gotować. Zły barszcz gotowano też sto lat temu, po prostu nikt tego nie nazywał w komentarzu w internecie.",
        "Po trzecie, i o tym mówi się najrzadziej, choć to jest właściwa odpowiedź. Tamta kuchnia kosztowała czas i zdrowie konkretnej osoby — zwykle kobiety. Rozpalanie o piątej rano, noszenie wody, dźwiganie garnków, ręczne ubijanie, kilka godzin dziennie przy palenisku, i tak przez całe życie. Kiedy ktoś tęskni za dawnym jedzeniem, prawie nigdy nie tęskni za tym rachunkiem — a to on był w tym najdroższy.",
        "I na tym polega cała rzecz. To urządzenie nie jest lepsze od babcinej kuchni pod względem smaku i nie zamierzam tak twierdzić. Jest natomiast sposobem, żeby robić w domu rzeczy od zera — sos zamiast gotowego, chleb zamiast kupionego, zupę zamiast proszku — nie płacąc za to czterema godzinami dziennie. To jest jedyne uczciwe porównanie tych dwóch kuchni, jakie znam.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Olsztynku?",
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
    sekcjaCena("w Olsztynku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla olsztyneckiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności ani siły — to jest ta część roboty, która dawniej kosztowała najwięcej. Gotowanie odbywa się w jednym naczyniu, z ustawioną temperaturą.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Olsztynek",
    "Waplewo",
    "Mierki",
    "Królikowo",
    "Ameryka",
    "Sudwa",
    "Elgnówko",
    "Świerkocin",
    "Mańki",
    "Witramowo",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Ostróda, Nidzica i Pasym są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ostróda", "Nidzica", "Pasym", "Szczytno", "Barczewo"],

  about: blokOMnie("do Olsztynka", "w gminie Olsztynek i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Olsztynka bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Olsztynku"),
    {
      question: "Kiedyś jedzenie było lepsze. Po co mi takie urządzenie?",
      answer:
        "Część tej tęsknoty jest uzasadniona: produkt był bliżej, sezonowość była faktem i nie marnowało się nic. Reszta jest mitem — tamta kuchnia była uboga i monotonna, a smak zależał dokładnie od tego samego co dziś: od produktu i wprawy. Najrzadziej mówi się o tym, że kosztowała kilka godzin dziennie przy palenisku, zwykle jednej kobiecie.",
    },
    {
      question: "Czy to urządzenie gotuje lepiej niż babcia?",
      answer:
        "Nie i nie będę tak twierdzić. Jest sposobem, żeby robić rzeczy od zera — sos zamiast gotowego, chleb zamiast kupionego, zupę zamiast proszku — nie płacąc za to czterema godzinami dziennie. To jedyne uczciwe porównanie tych dwóch kuchni, jakie znam.",
    },
  ],

  geo: { lat: 53.5872, lng: 20.2864 },
};
