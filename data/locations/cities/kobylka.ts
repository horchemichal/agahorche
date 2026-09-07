import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * KOBYŁKA — niewielkie miasto z barokowym kościołem o rozmachu
 * nieproporcjonalnym do wielkości miejscowości. Zbudowano tu coś
 * większego, niż wymagała codzienność.
 *
 * KĄT: kupno „na wyrost". Sprzęt lepszy, niż wynikałoby z dzisiejszych
 * potrzeb — kiedy to jest rozsądne przewidywanie, a kiedy zwykłe
 * przepłacenie.
 *
 * SEKCJA MA ROZRÓŻNIĆ:
 * — kiedy ma to sens: gdy zmiana jest przewidywalna i bliska
 *   (rodzina się powiększa, ktoś wraca do domu, zmienia się tryb pracy),
 * — kiedy nie ma: gdy „kiedyś może się przyda" jest jedynym argumentem,
 *   bo to zdanie da się dopisać do dowolnego zakupu,
 * — że Aga nie jest tu bezstronna i mówi to wprost,
 * — i że nie zna przyszłości nikogo — także własnej.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORÓWNAŃ MODELI ANI SUGEROWANIA, że „warto dopłacić do
 *   wyższego". Nie wchodzę w konfigurowanie zakupu na stronie.
 * — ŻADNYCH PORAD FINANSOWYCH ani oceniania, na co kogo stać.
 * — ŻADNYCH OBIETNIC, że sprzęt „starczy na lata" — to twierdzenie
 *   o trwałości, którego nie wolno mi składać.
 *
 * ROZGRANICZENIE. Oleśnica mówi o czekaniu na nowszy model, Bolesławiec
 * o wymianie starszego sprzętu, Gniezno o pojemności przy dużych
 * uroczystościach. Tutaj chodzi o KUPOWANIE PONAD DZISIEJSZĄ POTRZEBĘ.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Kobyłce stoi barokowy kościół o rozmachu większym, niż wskazywałaby
 *   wielkość miejscowości.
 */
export const KOBYLKA: CityContent = {
  slug: "kobylka",
  h1: "Thermomix Kobyłka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kobyłka — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kobyłce: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kobyłka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kobyłce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kobyłki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sąsiednich.",

  highlights: highlightyStandardowe("Kobyłka i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„Kiedyś może się przyda” da się dopisać do każdego zakupu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kobyłce – jak wygląda prezentacja?",
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
      id: "kupno-na-wyrost",
      heading: "Kościół większy niż miasteczko — i zakup zrobiony na wyrost",
      paragraphs: [
        "W Kobyłce stoi barokowy kościół o rozmachu, jakiego nikt nie spodziewałby się po miejscowości tej wielkości. Ktoś zbudował coś większego, niż wymagała ówczesna codzienność. Wykorzystam to do decyzji, którą wiele osób podejmuje przy takim zakupie: brać coś, co dziś jest ponad naszą potrzebę, licząc na to, co dopiero będzie?",
        "Bywa, że to jest rozsądne, i wtedy warto to zrobić spokojnie. Jeśli zmiana jest przewidywalna i bliska — powiększa się rodzina, ktoś wraca do domu, zmienia się tryb pracy i obiady przenoszą się z pracy do kuchni — to kupowanie pod tę nową sytuację ma sens. Nie kupujecie wtedy pod fantazję, tylko pod coś, co już wiadomo.",
        "Znacznie częściej jednak jedynym argumentem jest zdanie „kiedyś może się przyda”. To zdanie da się dopisać do dowolnego zakupu na świecie i właśnie dlatego niczego nie rozstrzyga. Jeśli nie potraficie powiedzieć, co konkretnie ma się zmienić i mniej więcej kiedy, to prawdopodobnie mówicie o zachciance ubranej w rozsądek — a wtedy lepiej wrócić do tematu, gdy zmiana rzeczywiście nadejdzie.",
        "Nie będę Wam przy tym doradzać, że „warto dopłacić”, ani porównywać wariantów zakupu, żeby wyszło drożej. To jest klasyczny sposób, w jaki podnosi się wartość koszyka, i nie chcę tak pracować. Na spotkaniu odpowiem na pytania o różnice, ale nie zbuduję Wam z tego argumentu za wydaniem więcej.",
        "Muszę też przyznać rzecz oczywistą: nie jestem tu bezstronna. Każde „na wyrost” jest dla mnie korzystne, więc moje entuzjazmy w tej sprawie traktujcie z rezerwą. I nie obiecam Wam, że sprzęt „starczy na lata” — to twierdzenie o trwałości, którego nie mam prawa składać, a które pada w takich rozmowach zdecydowanie za często.",
        "Prawda jest prostsza, niż brzmią zwykle takie rozmowy: nie znam przyszłości nikogo, także własnej. Dlatego jedyne, co mogę uczciwie zaproponować, to decydowanie na podstawie tego, co wiecie dziś, plus tych zmian, które są już umówione. Reszta to zgadywanie, a za zgadywanie płacilibyście Wy, nie ja.",
      ],
      links: [{ href: "/thermomix/tm7", label: "Thermomix TM7" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kobyłce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy coś się u Was niedługo zmienia — to jedyna rzecz, która sensownie wpływa na tę decyzję.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kobyłce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kobyłkowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po powrocie z Warszawy.",
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

  districtsHeading: "Do których części Kobyłki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sąsiednich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Maciołki",
    "Nadarzyn",
    "Stefanówka",
    "Osiedle Leśne",
    "Turów",
    "Zacisze",
    "Sosnówka",
  ],

  nearbyHeading: "Poza Kobyłkę też przyjadę",
  nearbyParagraphs: [
    "Wołomin, Marki, Ząbki i Zielonka są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Wołomin", "Marki", "Ząbki", "Zielonka", "Radzymin", "Warszawa"],

  about: blokOMnie("do Kobyłki", "w Kobyłce i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kobyłki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sąsiednich. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kobyłce"),
    {
      question: "Czy warto kupić na wyrost, licząc na przyszłe potrzeby?",
      answer:
        "Ma to sens, gdy zmiana jest przewidywalna i bliska: powiększa się rodzina, ktoś wraca do domu, zmienia się tryb pracy. Nie ma, gdy jedynym argumentem jest „kiedyś może się przyda” — to zdanie da się dopisać do dowolnego zakupu i niczego nie rozstrzyga.",
    },
    {
      question: "Czy warto dopłacić do czegoś lepszego?",
      answer:
        "Nie zbuduję Wam z tego argumentu. Podnoszenie wartości koszyka przez „warto dopłacić” to klasyczny chwyt i nie chcę tak pracować. Odpowiem na pytania o różnice, ale przy tej sprawie nie jestem bezstronna i warto o tym pamiętać.",
    },
  ],

  geo: { lat: 52.3406, lng: 21.2039 },
};
