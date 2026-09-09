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
 * BYCHAWA — gmina ok. 10 800 mieszkańców, miasto ok. 4 800.
 * „Masło z Bychawy" jest na ministerialnej Liście Produktów
 * Tradycyjnych od 2 lipca 2013 r. — i co RZADKIE, gminą pochodzenia
 * jest sama Bychawa, a nie sąsiednia wieś.
 *
 * KĄT: masło. Jedyne miasto w serwisie, w którym mogę uczciwie
 * napisać, że TO AKURAT warto zrobić w domu — bo ubijanie masła
 * ze śmietany jest jedną z niewielu rzeczy, które w tym urządzeniu
 * wychodzą naprawdę i bez żadnego „ale".
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to działa: ze śmietany kremówki powstaje masło i maślanka,
 *   w kilka minut, bez żadnego dodatkowego sprzętu,
 * — że efektem ubocznym jest maślanka i to nie jest odpad,
 * — czego to NIE zastąpi: masła z zakładu, robionego w skali,
 *   której w domu nie ma — i tutejszy zakład jest tego dowodem,
 * — i granica: nic o przechowywaniu, o tym „jak długo wytrzyma"
 *   ani o mleku surowym.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O PRZECHOWYWANIU I O MLEKU SUROWYM. Ta sama
 *   rodzina odmów co Wieluń (nabiał), Hrubieszów (przetwory)
 *   i Zambrów (wędzenie).
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ani słowa o tłuszczach,
 *   cholesterolu czy „naturalności". To jest tłuszcz i tyle.
 * — ŻADNEJ KRYTYKI masła kupnego ani konkretnych marek. Zasada
 *   z Mrągowa, a tu tym ostrzejsza, bo zakład stoi w tym mieście
 *   i pracują w nim sąsiedzi.
 * — ŻADNEGO PODAWANIA RECEPTURY „Masła z Bychawy" — to konkretny
 *   wyrób z ministerialnej listy, nie mój.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH WYLICZEŃ, czy taniej wyjdzie zrobić czy kupić.
 *
 * ROZGRANICZENIE — ISTOTNE. Ryki mają kąt „czego NIE warto robić
 * w domu" (ser dojrzewający). Ta strona jest jego DOKŁADNYM
 * ODWRÓCENIEM i mówi to wprost: masło jest po drugiej stronie tej
 * samej granicy. Obie strony trzymają tę samą zasadę — nie udaję,
 * że domowe bije zakładowe — ale wnioski są różne i tak ma być.
 * Wieluń ma kąt „nabiał" jako kategorię; tutaj chodzi o JEDEN
 * konkretny produkt i jedną konkretną czynność.
 *
 * FAKT, KTÓRY BY SIĘ ZESTARZAŁ — I DLATEGO GO PILNUJĘ.
 * Okręgowa Spółdzielnia Mleczarska w Bychawie działała od ok. 1928 r.,
 * ale 1 lipca 2024 r. weszła w struktury SM Spomlek z Radzynia
 * Podlaskiego, a z KRS została wykreślona 26 listopada 2025 r.
 * (prawomocnie 8 stycznia 2026). Zakład w Bychawie FIZYCZNIE DZIAŁA
 * dalej, jako oddział Spomleku, pod marką „Lublanka". Napisanie
 * „działa tutejsza spółdzielnia mleczarska" byłoby więc dziś
 * nieaktualne — w tekście jest „zakład mleczarski", bez formy
 * prawnej, i to jest celowe.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — CHMIEL: hipoteza OBALONA. Bychawa nie jest zagłębiem
 *   chmielarskim. Prawdziwe to okolice Krasnegostawu (ok. 1,3 tys. ha,
 *   ~90% krajowej powierzchni) i historycznie gmina Wilków — INNE
 *   POWIATY. Myli dodatkowo to, że wsie Chmiel Pierwszy i Chmiel
 *   Drugi leżą w sąsiedniej gminie JABŁONNA i nie ma dowodu, że nazwa
 *   ma cokolwiek wspólnego z uprawą. W tekście nie ma o chmielu
 *   ani słowa,
 * — NIE podaję liczby mieszkańców samego miasta z 2024 r., bo jej
 *   nie znalazłam — mam 4 757 z końca 2021 i 10 819 dla CAŁEJ GMINY
 *   z 2024. W tekście jest liczba gminna z rokiem i „blisko pięć
 *   tysięcy" dla miasta,
 * — DATA UTRATY PRAW MIEJSKICH to 1869 r., nie 1863. Rok 1863
 *   to wybuch powstania styczniowego, a nie rok kary
 *   administracyjnej — angielska Wikipedia myli te dwie rzeczy.
 *   Pełna sekwencja: pierwsza wzmianka 1325, lokacja 1537 (Zygmunt
 *   Stary, dla Mikołaja Pileckiego), potwierdzenie przywilejów 1637
 *   (Władysław IV), utrata 1869, odzyskanie 1958,
 * — NIE robię wyróżnika z powiatu bychawskiego (1954–1975). Taki los
 *   spotkał setki małych miast przy reformie 1975 r.,
 * — miasto NIE publikuje wykazu osiedli, więc districts to PUSTA
 *   TABLICA. Gmina ma sołectwa, ale to co innego niż dzielnice
 *   miasta.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — „Masło z Bychawy" na Liście Produktów Tradycyjnych od 2 lipca
 *   2013 r., gmina pochodzenia: Bychawa; produkowane od ponad
 *   osiemdziesięciu lat, początek z inicjatywy mleczarni parafialnej,
 * — zakład mleczarski działa w mieście od ok. 1928 r. i produkuje
 *   dziś pod marką Lublanka,
 * — gmina liczyła 10 819 mieszkańców w 2024 r., spadek o 13,3%
 *   od 2002 r.,
 * — z Lublina 29 km, około 36 minut,
 * — sąsiednie gminy: Jabłonna, Krzczonów, Strzyżewice, Wysokie,
 *   Zakrzew, Zakrzówek. Krzczonów ma własne wpisy na Liście
 *   (kiełbasa i szynka wieprzowa) — ale to JEGO produkty, nie
 *   bychawskie, i tak są w tekście opisane.
 */
export const BYCHAWA: CityContent = {
  slug: "bychawa",
  h1: "Thermomix Bychawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bychawa — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Bychawie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bychawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bychawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bychawy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości gminy.",

  highlights: highlightyStandardowe("Bychawa i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Masło ze śmietany w kilka minut. To akurat wychodzi bez żadnego „ale”.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bychawie – jak wygląda prezentacja?",
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
      id: "maslo",
      heading: "Miasto, które ma własne masło na ministerialnej liście",
      paragraphs: [
        "„Masło z Bychawy” jest wpisane na ministerialną Listę Produktów Tradycyjnych od lipca 2013 roku. Piszę o tym z przyjemnością, bo przy tych stronach mam z takimi wpisami stały kłopot: nazwa mówi „z Bychawy”, „z Hrubieszowa”, „z Rawicza”, a produkt okazuje się pochodzić z sąsiedniej wsi albo z całkiem innej gminy. Tutaj nie — gminą pochodzenia jest sama Bychawa. Masło robi się tu od ponad osiemdziesięciu lat, a zaczęło się od mleczarni parafialnej.",
        "Zakład mleczarski działa w mieście od około 1928 roku i pracuje do dziś, produkując pod marką Lublanka. Napiszę to ostrożnie i celowo bez formy prawnej, bo tutejsza spółdzielnia weszła w 2024 roku w struktury większej mleczarni i formalnie już nie istnieje jako osobny podmiot — ale zakład, ludzie i produkcja są na miejscu.",
        "A skoro jesteśmy w mieście masła, to powiem rzecz, której na tych stronach mówię rzadko: masło to jedna z niewielu rzeczy, które w tym urządzeniu wychodzą naprawdę dobrze i bez żadnego „ale”. Wlewacie śmietanę kremówkę, włączacie i po kilku minutach macie masło. Dosłownie — tłuszcz się zbija, oddziela od reszty i zostaje bryłka. Bez maszynki, bez ubijaka, bez niczego dodatkowego.",
        "Przy okazji zostaje Wam maślanka i to nie jest odpad, tylko drugi produkt: do picia, do naleśników, do ciasta. Ludzie zwykle są tym bardziej zaskoczeni niż samym masłem.",
        "Teraz uczciwie o granicy, bo mam na tych stronach zasadę, żeby nie obiecywać za dużo. To nie zastąpi masła z zakładu i nie będę udawać, że zastąpi. Zakład robi je w skali i w warunkach, których w domowej kuchni nie ma, i akurat w Bychawie byłoby wyjątkowo nie na miejscu twierdzić inaczej — tam pracują Wasi sąsiedzi. Nie powiem też, że domowe jest zdrowsze, bo nie jestem dietetykiem i nie mam na to żadnego dowodu.",
        "To, co mogę powiedzieć uczciwie, jest prostsze: robicie to sami, wiecie, co jest w środku, i możecie zdecydować, czy ma być solone, czy nie. Tyle. To wystarczy, żeby raz na jakiś czas zrobić własne — a nie żeby przestać kupować.",
        "I dwie granice, przy których nie ustąpię. Nie doradzam nic o przechowywaniu — ani jak długo, ani w czym. I nie doradzam nic o mleku surowym. To są dziedziny, w których zła podpowiedź komuś realnie szkodzi, a ja jestem przedstawicielką handlową, nie technologiem żywności. Receptury „Masła z Bychawy” też nie podam — to konkretny wyrób z listy ministerialnej, nie moja własność.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bychawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć akurat masło — powiedzcie przy umawianiu, a przywiozę śmietanę i zrobimy je przy Was. To trwa kilka minut i jest jedną z tych rzeczy, które lepiej raz zobaczyć, niż przeczytać o nich zdanie w ulotce.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bychawie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bychawskiej rodziny",
      paragraphs: [
        "Gmina Bychawa liczyła w 2024 roku niecałe jedenaście tysięcy mieszkańców, a samo miasto blisko pięć — i od dwóch dekad ludzi tu ubywa. Do Lublina jest niecałe trzydzieści kilometrów, czyli około pół godziny; blisko, ale nie na tyle, żeby jeździć tam po bułki.",
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

  districtsHeading: "Do których części Bychawy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Bychawę też przyjadę",
  nearbyParagraphs: [
    "Jabłonna, Krzczonów, Strzyżewice, Wysokie, Zakrzew i Zakrzówek są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Krzczonów", "Strzyżewice", "Jabłonna", "Zakrzówek", "Lublin", "Kraśnik"],

  about: blokOMnie("do Bychawy", "w Bychawie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Bychawy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bychawie"),
    {
      question: "Naprawdę zrobię w tym masło?",
      answer:
        "Tak, i to jest jedna z niewielu rzeczy, które wychodzą bez żadnego „ale”. Wlewacie śmietanę kremówkę, włączacie i po kilku minutach tłuszcz się zbija w bryłkę. Przy okazji zostaje maślanka — do picia, do naleśników, do ciasta. Chętnie pokażę to na prezentacji, wystarczy powiedzieć przy umawianiu.",
    },
    {
      question: "Czy domowe masło jest lepsze od kupnego?",
      answer:
        "Nie będę tego twierdzić — zwłaszcza w Bychawie, gdzie masło robi się od kilkudziesięciu lat i pracują przy tym Wasi sąsiedzi. Zakład robi je w skali i w warunkach, których w domu nie ma. Uczciwie mogę powiedzieć tylko tyle: robiąc sami, wiecie, co jest w środku, i decydujecie, czy ma być solone. O przechowywaniu i o mleku surowym nie doradzam.",
    },
  ],

  geo: { lat: 51.0167, lng: 22.5333 },
};
