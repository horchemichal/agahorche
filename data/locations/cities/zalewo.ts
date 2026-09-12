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
 * ZALEWO — gmina miejsko-wiejska w powiecie iławskim.
 * MIASTO 2 011, GMINA 6 096 (GUS 31.12.2024).
 * POWIERZCHNIA GMINY 253,8 km².
 * ⚠ Notatka projektowa podawała 2 100 — ZAWYŻONE.
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * PRAWA MIEJSKIE 1305 r., nadał SIEGHARDT VON SCHWARZBURG,
 * KOMTUR DZIERZGOŃSKI.
 * PRAWA UTRACONE, PRZYWRÓCONE 1 STYCZNIA 1987 r.
 *
 * ⚠⚠ ZALEWO LEŻY NAD JEZIOREM EWINGI, NIE NAD JEZIORAKIEM.
 * Jeziorak jest połączony kanałem, ale to inne jezioro.
 * MIASTO NIE LEŻY TEŻ NAD KANAŁEM ELBLĄSKIM.
 * TO SĄ DWIE POMYŁKI POWTARZANE W DZIESIĄTKACH OPISÓW
 * I TO JEST PODSTAWA KĄTA.
 *
 * KOŚCIÓŁ ŚW. JANA EWANGELISTY — gotycki, XIV w.
 * MURY OBRONNE Z WIEŻĄ.
 * ZALEWO NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: SKŁADNIKI, KTÓRE ŁATWO POMYLIĆ W SKLEPIE.
 * Kąt od miasta, które w połowie opisów stoi nad niewłaściwym
 * jeziorem. Rzeczy podobne z nazwy, a nie z funkcji.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najczęstsza przyczyna nieudanego dania nie jest
 *   techniką, tylko kupieniem czegoś obok,
 * — konkretne pary: mąka tortowa a chlebowa; proszek do
 *   pieczenia a soda; drożdże suszone a instant; śmietana
 *   do zup a do ubijania; masło a mix tłuszczowy;
 *   cukier puder a drobny; kakao naturalne a alkalizowane;
 *   ocet spirytusowy a winny,
 * — że etykieta mówi prawdę drobnym drukiem: przy śmietanie
 *   liczy się zawartość tłuszczu, przy maśle skład,
 * — że w przepisach zagranicznych nazwy nie mają
 *   odpowiedników jeden do jednego,
 * — UCZCIWIE: żadne urządzenie tego nie wykryje — wsad
 *   jest wsadem,
 * — a jedyne, co robi sprzęt, to skraca dystans między
 *   błędem a jego skutkiem,
 * — i rada: sprawdzać w sklepie, nie w kuchni.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH NAZW FIRM ANI MAREK PRODUKTÓW — piszę
 *   wyłącznie o KATEGORIACH.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — także żadnych sugestii,
 *   że coś jest „zdrowsze”.
 * — ŻADNYCH PROPORCJI ANI ZAMIENNIKÓW W LICZBACH.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta
 *   (Saalfeld in Ostpreußen).
 * — ZERO roku 1945 i wysiedleń. Utratę praw miejskich podaję
 *   jako fakt administracyjny, bez przyczyny i bez daty
 *   (data utraty niepotwierdzona).
 * — ZERO wątków granicznych i wojskowych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Rodzaje mąki” (Korsze)
 * dotyczą typów i liczb na opakowaniu. „Przepisy w cudzych
 * miarach” dotyczą jednostek. „Przyprawy całe kontra mielone”
 * (Pieniężno) dotyczą postaci przyprawy. „Drożdże świeże
 * kontra suszone” (Pasym) dotyczą jednej pary. Tutaj chodzi
 * o MOMENT ZAKUPU: o to, że w sklepie bierze się nie to,
 * co się myśli.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że Zalewo leży nad Jeziorakiem — nie leży.
 * — NIE PISZĘ, że leży nad Kanałem Elbląskim.
 * — NIE PODAJĘ liczby sołectw ani daty utraty praw miejskich.
 * — NIE PRZYPISUJĘ Zalewu produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PODAJĘ roku przystąpienia do Cittaslow — nie należy.
 * — NIE MYLĘ Zalewa z ZALEWEM WIŚLANYM ani z Zalesiem.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 011, gmina 6 096 mieszkańców na 253,8 km²,
 * — prawa miejskie nadane w 1305 r. przez Sieghardta von
 *   Schwarzburg, komtura dzierzgońskiego, przywrócone
 *   1 stycznia 1987 r.,
 * — miasto leży nad jeziorem Ewingi; Jeziorak jest z nim
 *   połączony kanałem, ale to inne jezioro,
 * — gotycki kościół świętego Jana Ewangelisty z XIV w.,
 * — zachowane mury obronne z wieżą.
 */
export const ZALEWO: CityContent = {
  slug: "zalewo",
  h1: "Thermomix Zalewo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zalewo — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Zalewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zalewo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zalewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zalewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Zalewo i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Większość nieudanych ciast przegrywa w sklepie, nie w kuchni.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zalewie – jak wygląda prezentacja?",
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
      id: "pomylone-skladniki",
      heading: "Miasto nad niewłaściwym jeziorem — czyli o składnikach, które łatwo pomylić",
      paragraphs: [
        "Zalewo leży nad jeziorem Ewingi. Nie nad Jeziorakiem — Jeziorak jest z nim połączony kanałem, ale to inne jezioro, o innym kształcie i innej nazwie. Mimo to w co drugim opisie Zalewo stoi nad Jeziorakiem, a w co trzecim nad Kanałem Elbląskim, nad którym też nie leży. Nikt nie kłamie. Po prostu dwie rzeczy leżą blisko siebie, brzmią podobnie znajomo i jedna wchodzi na miejsce drugiej.",
        "Dokładnie to samo dzieje się w sklepie i jest to, moim zdaniem, najczęstsza przyczyna nieudanych dań w polskich domach. Nie technika. Nie brak talentu. Kupienie czegoś obok.",
        "Mąka tortowa i chlebowa stoją na jednej półce w takich samych torbach. Różnią się zawartością białka, czyli tym, ile glutenu się z nich zrobi — i to jest różnica między puszystym biszkoptem a gumowatym plackiem. Kto raz upiecze ciasto na mące chlebowej, będzie potem winił przepis.",
        "Proszek do pieczenia i soda wyglądają identycznie i nie są zamienne. Soda potrzebuje czegoś kwaśnego, żeby w ogóle zadziałać; sam proszek działa bez tego. Wsypana zamiast proszku soda daje charakterystyczny mydlany posmak, którego nikt potem nie umie nazwać.",
        "Drożdże suszone i instant to nie to samo — jedne trzeba rozczynić, drugie dodaje się prosto do mąki. Śmietana do zup i śmietana do ubijania różnią się zawartością tłuszczu i ta druga nie zwaruje się w sosie, a ta pierwsza się nie ubije. Masło i mix tłuszczowy w kostce leżą obok siebie, a w kruchym cieście zachowują się zupełnie inaczej. Cukier puder i drobny to inna rozpuszczalność, więc do lukru i do bezy nie są wymienne. Kakao naturalne i alkalizowane inaczej reagują z sodą. Ocet spirytusowy i winny mają zupełnie inny smak.",
        "Wspólny mianownik jest jeden: prawda stoi na etykiecie drobnym drukiem. Przy śmietanie decyduje procent tłuszczu, przy maśle skład, przy mące liczba, przy drożdżach jedno słowo. Wielki napis z przodu opakowania mówi znacznie mniej niż mała tabelka z tyłu.",
        "Osobna pułapka to przepisy zagraniczne. Nazwy mąk, śmietan i tłuszczów nie mają odpowiedników jeden do jednego, a tłumaczenia w internecie zwykle wybierają to, co brzmi podobnie, a nie to, co robi to samo.",
        "Powiem uczciwie, bo to ważne: żadne urządzenie tego nie wychwyci. Sprzęt nie wie, co wsypaliście — miesza to, co dostał, i grzeje tak, jak mu kazano. Jeśli w torebce była zła mąka, wynik będzie zły, tylko szybciej i równiej.",
        "Jedyne, co gotowanie w zamkniętym naczyniu naprawdę zmienia, to długość drogi między błędem a jego skutkiem. W garnku widzicie po drodze, że coś jest nie tak, i macie szansę ratować. Tutaj często dowiadujecie się na końcu. Dlatego u mnie zasada jest prosta i banalna: składniki sprawdza się w sklepie, przy półce, a nie w kuchni z torebką w ręku.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zalewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w domu przepis, który uparcie nie wychodzi, weźcie go na spotkanie razem z opakowaniami tego, czego używacie. Bardzo często odpowiedź jest na etykiecie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zalewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zalewskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad dwa tysiące mieszkańców, a cała gmina przeszło sześć tysięcy, na ponad dwustu pięćdziesięciu kilometrach kwadratowych — to jedna z rozleglejszych gmin w okolicy. Prawa miejskie nadał Zalewu w 1305 roku Sieghardt von Schwarzburg, komtur dzierzgoński; po przerwie miasto odzyskało je 1 stycznia 1987 roku. Stoi tu gotycki kościół świętego Jana Ewangelisty z czternastego wieku i zachowany fragment murów obronnych z wieżą. Miasto leży nad jeziorem Ewingi.",
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

  districtsHeading: "Do których części gminy Zalewo dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy — a jest ona rozległa. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Zalewo też przyjadę",
  nearbyParagraphs: [
    "Iława, Miłomłyn, Morąg, Susz i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Iława", "Miłomłyn", "Morąg", "Susz"],

  about: blokOMnie("do Zalewa", "w Zalewie i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Zalewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy — także tych położonych daleko od centrum. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Zalewo w powiecie iławskim, nie o Zalew Wiślany po drugiej stronie województwa.",
    },
    ...faqWspolne("w Zalewie"),
    {
      question: "Jakie składniki najłatwiej pomylić w sklepie?",
      answer:
        "Mąkę tortową z chlebową, sodę z proszkiem do pieczenia, drożdże suszone z instant, śmietanę do zup z tą do ubijania, masło z miksem tłuszczowym, cukier puder z drobnym i ocet spirytusowy z winnym. Prawda jest zawsze na etykiecie drobnym drukiem, nie w wielkim napisie z przodu.",
    },
    {
      question: "Czy Thermomix wykryje, że użyłam złego składnika?",
      answer:
        "Nie i nie ma sensu twierdzić inaczej. Urządzenie miesza i grzeje to, co dostało. Zła mąka da zły wynik, tylko szybciej i równiej. Różnica jest taka, że w garnku widzi się problem po drodze, a w zamkniętym naczyniu zwykle dopiero na końcu.",
    },
    {
      question: "Czy Zalewo leży nad Jeziorakiem?",
      answer:
        "Nie, choć bardzo często tak się pisze. Zalewo leży nad jeziorem Ewingi; Jeziorak jest z nim połączony kanałem, ale to osobne jezioro. Samo miasto nie leży też nad Kanałem Elbląskim.",
    },
  ],

  geo: { lat: 53.8422, lng: 19.6086 },
};
