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
 * MRĄGOWO — miasto nad jeziorem Czos, siedziba powiatu, w którym mieści
 * się zakład mleczarski przerabiający miliony litrów mleka na dobę.
 * Miasto amfiteatru na pięć tysięcy widzów i Pikniku Country.
 *
 * KĄT: „domowe" kontra „przemysłowe" — i dlaczego nie twierdzę,
 * że domowe jest lepsze. W mieście, w którym największy pracodawca
 * przerabia mleko na skalę, jakiej żadna kuchnia nie dorówna, zdanie
 * „domowe jest zdrowsze" byłoby obrazą dla ludzi, którzy tam pracują —
 * a przy tym twierdzeniem, którego nie umiem udowodnić.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — zakład w tym mieście robi rzeczy, których w domu zrobić się nie da,
 *   i to nie jest wada domowej kuchni, tylko inna skala,
 * — czego NIE twierdzę: że domowe jest zdrowsze, smaczniejsze
 *   ani tańsze. Nie mam jak tego udowodnić,
 * — co naprawdę się zmienia, gdy się coś robi samemu: wiadomo, co jest
 *   w środku, i można to zmienić pod siebie. To wszystko,
 * — i granica: nie oceniam cudzych wyborów zakupowych.
 *
 * TWARDE GRANICE — TU SZCZEGÓLNIE:
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani porównań wartości odżywczej
 *   „domowe kontra sklepowe". To jest sedno tej strony.
 * — ŻADNEJ KRYTYKI PRODUKTÓW PRZEMYSŁOWYCH ani konkretnych firm.
 *   W tym mieście pracują przy nich ludzie.
 * — ŻADNYCH WYLICZEŃ OSZCZĘDNOŚCI w złotówkach (zasada z Jarocina).
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 *
 * ROZGRANICZENIE. Lesko mówi o ośmiu miesiącach poza sezonem, Ustrzyki
 * o sezonie, Wieluń o nabiale jako temacie kuchennym, Skawina o różnicy
 * między liczbą a obietnicą. Tutaj chodzi o COŚ INNEGO: o odmowę
 * wartościowania „domowe lepsze niż kupione".
 *
 * ŚWIADOMIE POMINIĘTE. Sezonowość jest tu wyraźna (w lutym 2024 r.
 * w powiecie było 1 467 zarejestrowanych bezrobotnych, w lipcu 988),
 * ale kąt „sezon i poza sezonem" jest już zajęty przez Lesko i Ustrzyki
 * Dolne. Wspominam o tym jednym zdaniem w sekcji o rodzinie i nie
 * rozwijam.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — GUS podaje 20 399 mieszkańców, a ewidencja meldunkowa urzędu
 *   18 923 na pobyt stały na koniec 2025 r. — podaję obie liczby
 *   z etykietą, bo różnią się metodologią,
 * — powierzchnia 14,8 km², cztery jeziora w granicach miasta:
 *   Czos, Juno, Magistrackie i Sołtyskie,
 * — do Olsztyna 65 km, do Giżycka 44 km,
 * — SM Mlekpol prowadzi tu zakład produkcji mleczarskiej; przy budowie
 *   proszkowni podawano przerób rzędu trzech milionów litrów mleka
 *   i serwatki na dobę oraz zatrudnienie 385 osób (dane z 2016 r.),
 * — Maślanka Mrągowska to marka handlowa tego zakładu, NIE produkt
 *   z ministerialnej Listy Produktów Tradycyjnych,
 * — Szlak Maślanki Mrągowskiej działa od 2022 r.; obecna edycja liczy
 *   28 punktów,
 * — amfiteatr nad Czosem mieści 5 280 widzów; Piknik Country odbywa się
 *   w Mrągowie od 1983 r., w 2026 r. czterdziesta piąta edycja,
 * — nazwa miasta pochodzi od Krzysztofa Celestyna Mrongowiusza,
 *   urodzonego w Olsztynku i zmarłego w Gdańsku — NIGDY tu nie mieszkał;
 *   miasto nazwano tak po wojnie, wcześniej Sensburg i Ządzbork,
 * — powiat mrągowski jest najczęściej odwiedzanym turystycznie powiatem
 *   województwa (20,5% turystów regionu w 2024 r. wg GUS) — ale to
 *   dane POWIATU, obejmujące też Mikołajki, nie samego miasta,
 * — NIE ZNALAZŁAM produktu z Mrągowa na ministerialnej Liście Produktów
 *   Tradycyjnych — i tak to w tekście napisane, bez twierdzenia,
 *   że go na pewno nie ma.
 */
export const MRAGOWO: CityContent = {
  slug: "mragowo",
  h1: "Thermomix Mrągowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Mrągowo — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Mrągowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mrągowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mrągowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mrągowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Mrągowo i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie powiem, że domowe jest lepsze. Powiem, co się realnie zmienia.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mrągowie – jak wygląda prezentacja?",
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
      id: "domowe",
      heading: "Miasto, w którym „domowe kontra sklepowe” brzmi inaczej",
      paragraphs: [
        "W Mrągowie działa zakład mleczarski, który przerabia mleko w skali, jakiej żadna kuchnia nie dorówna — przy budowie tutejszej proszkowni mówiono o milionach litrów mleka i serwatki na dobę i o kilkuset osobach zatrudnionych na miejscu. Maślanka Mrągowska stąd trafiła do sklepów w całej Polsce, a od dwa tysiące dwudziestego drugiego roku wokół niej działa nawet szlak kulinarny po tutejszych lokalach.",
        "Piszę o tym, bo w tej branży istnieje jedno zdanie, które padłoby tu wyjątkowo głupio. Brzmi ono: „domowe jest zdrowsze niż kupne”. W mieście, w którym kilkaset rodzin utrzymuje się z robienia jedzenia na skalę przemysłową, to nie jest tylko slogan — to jest komentarz do czyjejś pracy.",
        "Więc powiem wprost, czego na tej stronie nie znajdziecie. Nie napiszę, że domowe jest zdrowsze. Nie napiszę, że jest smaczniejsze, bo to zależy od tego, kto gotuje. I nie napiszę, że jest tańsze, bo takich wyliczeń w ogóle nie robię — zawsze wychodzą pod tezę tego, kto je liczy.",
        "Zostaje więc pytanie, co właściwie zmienia się, kiedy coś robi się samemu. Odpowiedź jest krótsza, niż by chciała moja branża: wiadomo, co jest w środku, i można to zmienić pod siebie. Mniej cukru, bo ktoś w domu go nie chce. Bez orzechów, bo dziecko ma uczulenie. Ostrzej, bo tak lubicie. To wszystko.",
        "Do tego dochodzi rzecz czysto praktyczna, o której mogę mówić bez żadnych zastrzeżeń, bo da się ją zobaczyć: ile pracy zabiera zrobienie czegoś od zera. Zupa krem, sos, pasta kanapkowa, masa do ciasta — cała robota polega tam na rozdrobnieniu i mieszaniu, a to akurat urządzenie robi za Was, w jednym naczyniu i bez stania obok. Właśnie to pokazuję na prezentacji, bo to jedyna część tej rozmowy, którą można sprawdzić na własnym blacie.",
        "I ostatnia rzecz, przy której jestem stanowcza. Nie oceniam tego, co ktoś kupuje w sklepie, i nie mam takiego zamiaru. Jeżeli w Waszym domu jogurt przyjeżdża z zakładu za rogiem i wszyscy są z tego zadowoleni, to jest w porządku. Sprzedaję urządzenie, a nie światopogląd na temat cudzej lodówki.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mrągowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Latem miasto żyje festiwalami i o termin bywa trudniej, więc jeśli planujecie spotkanie na lipiec albo sierpień, odezwijcie się wcześniej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mrągowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla mrągowskiej rodziny",
      paragraphs: [
        "W mieście, do którego latem zjeżdżają tłumy, a zimą jest o połowę ciszej, praca bardzo wielu osób ma dwa różne tempa w ciągu roku. W sezonie obiad powstaje w biegu i o dziwnych porach, poza sezonem jest go kto ugotować, ale rachunek za zakupy liczy się dokładniej.",
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

  districtsHeading: "Do których części Mrągowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Nazwy osiedli są tu zwyczajowe, a nie urzędowe — Metalowców wzięło swoją od nieistniejącej już fabryki, w której pracowali jego pierwsi mieszkańcy. Przy umawianiu wystarczy podać osiedle albo ulicę.",
  ],
  districts: ["Metalowców", "Mazurskie", "Grunwaldzkie", "Parkowe", "Brzozowe"],

  nearbyHeading: "Poza Mrągowo też przyjadę",
  nearbyParagraphs: [
    "Mikołajki, Piecki, Sorkwity i Ryn są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Mikołajki", "Piecki", "Sorkwity", "Ryn", "Biskupiec", "Kętrzyn"],

  about: blokOMnie("do Mrągowa", "w Mrągowie i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Mrągowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Mrągowie"),
    {
      question: "Czy jedzenie zrobione samemu jest zdrowsze niż kupione?",
      answer:
        "Nie odpowiem na to twierdząco, bo nie mam jak tego udowodnić — i wolę nie oceniać pracy ludzi, którzy w tym mieście robią jedzenie na skalę przemysłową. Kiedy robicie coś sami, zmienia się co innego: wiecie, co jest w środku, i możecie to dopasować pod siebie. To jest cała różnica, o której umiem mówić uczciwie.",
    },
    {
      question: "Czy z Mrągowa jest coś na ministerialnej Liście Produktów Tradycyjnych?",
      answer:
        "Nie znalazłam takiego wpisu i wolę to powiedzieć wprost, niż podpiąć się pod coś regionalnego. Maślanka Mrągowska, o której często się tu słyszy, jest marką tutejszego zakładu mleczarskiego, a nie produktem z tej listy — to dwie różne rzeczy i warto ich nie mylić.",
    },
  ],

  geo: { lat: 53.8672, lng: 21.3053 },
};
