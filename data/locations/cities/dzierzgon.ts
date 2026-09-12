import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * DZIERZGOŃ — miasto w powiecie sztumskim, na Powiślu, 4 850
 * mieszkańców (31.12.2024, GUS); gmina 8 584. Brief mówił
 * 5 300 — zawyżone.
 *
 * PRAWA MIEJSKIE — DATA SPORNA: jedne źródła podają
 * 7 KWIETNIA 1288 r. (komtur Helwig von Goldbach), inne 1290 r.
 * W TEKŚCIE NIE PODAJĘ ŻADNEJ DATY JAKO PEWNEJ — piszę
 * „koniec XIII wieku". To jest świadoma decyzja.
 *
 * FAKT LICZBOWY, KTÓRY JEST OSIĄ STRONY: gmina ma 100%
 * podłączenia do wodociągu i 100% do kanalizacji w części
 * miejskiej — PIERWSZE MIEJSCE W POLSCE w obu kategoriach.
 * Na terenach wiejskich odpowiednio 79,4% i 69,0%.
 *
 * STRUKTURA: rolnictwo 24,1%, przemysł i budownictwo 32,9%.
 * Gmina rolnicza z dużym udziałem przemysłu.
 *
 * HOMONIM KRYTYCZNY: STARY DZIERZGOŃ to ODRĘBNA GMINA
 * w tym samym powiecie sztumskim, ok. 8 km dalej. Dodatkowo
 * DZIERŻONIÓW w dolnośląskim — zupełnie inne miasto.
 * OBA MUSZĄ BYĆ ROZRÓŻNIONE W FAQ.
 *
 * KĄT: KISZONKI I ZAKWAS. Kiszenie to jedyna technika
 * w polskiej kuchni, przy której CZŁOWIEK NIC NIE ROBI, a robi
 * wszystko czas i mikroby — czyli dokładne przeciwieństwo tego,
 * co sprzedaje sprzęt kuchenny. Kąt pasuje do gminy, w której
 * co czwarty pracujący jest w rolnictwie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie NIE KISI i nie ma jak kisić — to jest robota
 *   czasu i bakterii, nie silnika,
 * — że nie przyspieszy fermentacji ani o dzień,
 * — co realnie robi: szatkuje kapustę, kroi ogórki, miele
 *   przyprawy, rozpuszcza sól w wodzie na solankę, i to jest
 *   cała jego rola — ale przy dużej ilości kapusty to jest
 *   różnica między jednym popołudniem a trzema,
 * — co robi z GOTOWYMI kiszonkami: kapuśniak, żurek, sos,
 *   surówka, zupa ogórkowa, pasta,
 * — że ODMAWIAM jakichkolwiek porad o bezpieczeństwie
 *   kiszenia — solanka, temperatura, pleśń, botulizm — bo to
 *   jest realne ryzyko i osobna wiedza,
 * — i że ODMAWIAM twierdzeń zdrowotnych o kiszonkach, mimo
 *   że są dziś modne.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI SOLANKI, ŻADNYCH TEMPERATUR FERMENTACJI,
 *   ŻADNYCH PORAD O PLEŚNI. ODMOWA STOI W TEKŚCIE WYRAŹNIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — kiszonki, probiotyki,
 *   „mikrobiom", odporność. TO JEST NAJWIĘKSZA POKUSA NA TEJ
 *   STRONIE I MÓWIĘ NIE.
 * — ŻADNYCH PORAD O PASTERYZACJI I PRZETWORACH W SŁOIKACH.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEJ DATY PRAW MIEJSKICH.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Dżemy i konfitury"
 * (Paczków) dotyczą przetworów słodkich i gotowania.
 * „Kompoty i musy" (Biała) dotyczą owoców. „Chrzan, musztarda
 * i ocet" (Działoszyce) dotyczą ostrych dodatków robionych
 * od ręki. Tutaj chodzi o FERMENTACJĘ — o proces, którego
 * nie da się przyspieszyć i który nie należy do sprzętu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty praw miejskich. Źródła są sprzeczne.
 * — NIE PISZĘ o zamku krzyżackim jako o obiekcie do
 *   zwiedzania — nie potwierdziłam, co się z niego zachowało.
 * — NIE PODAJĘ nazwy żadnego pracodawcy — nie ustaliłam ani
 *   jednego.
 * — NIE PODAJĘ listy sołectw — nie ustaliłam jej.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych jako
 *   dzierzgońskim; wpisy powiślańskie są regionalne.
 * — NIE DOTYKAM traktatu dzierzgońskiego z 1249 r. Wiąże się
 *   z podbojem i zagładą Prusów jako narodu; to nie jest tło
 *   dla strony o sprzęcie kuchennym.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA, w tekście o osiedlach nie piszę.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 4 850 mieszkańców miasta, 8 584 gminy (31.12.2024, GUS),
 * — prawa miejskie pod koniec XIII w. (data sporna),
 * — 100% wodociągu i 100% kanalizacji w części miejskiej —
 *   pierwsze miejsce w Polsce w obu kategoriach; na wsi 79,4%
 *   i 69,0%,
 * — 24,1% pracujących w rolnictwie, 32,9% w przemyśle
 *   i budownictwie,
 * — miasto traci ludność: −15,5% w latach 2002–2024.
 */
export const DZIERZGON: CityContent = {
  slug: "dzierzgon",
  h1: "Thermomix Dzierzgoń – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dzierzgoń (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Dzierzgoniu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dzierzgoń — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dzierzgoniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dzierzgonia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Dzierzgoń i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kiszenia nie przyspieszy nic. I to jest w nim najlepsze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dzierzgoniu – jak wygląda prezentacja?",
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
      id: "kiszonki",
      heading: "Gmina rolnicza z wodociągiem na sto procent — czyli o kiszeniu",
      paragraphs: [
        "Dzierzgoń ma statystykę, którą warto znać: sto procent mieszkańców części miejskiej jest podłączonych do wodociągu i sto procent do kanalizacji — pierwsze miejsce w Polsce w obu kategoriach. Na wsi jest to odpowiednio blisko osiemdziesiąt i niecałe siedemdziesiąt procent. Jednocześnie co czwarty pracujący w gminie pracuje w rolnictwie. To jest miejsce, gdzie infrastruktura jest nowoczesna, a kalendarz kuchenny nadal chodzi za polem.",
        "A jesienią kalendarz kuchenny mówi: kapusta i ogórki. Więc napiszę o kiszeniu — i to jest jedyny temat na tej stronie, przy którym sprzedawca sprzętu ma najmniej do powiedzenia.",
        "Bo Thermomix nie kisi. Nie ma jak kisić i nigdy nie będzie miał. Kiszenie to nie jest czynność, tylko proces: robi go czas i bakterie mlekowe, a nie silnik. Nie da się go przyspieszyć ani o jeden dzień, tak samo jak nie da się przyspieszyć dojrzewania sera czy leżakowania piernika. Jeżeli ktoś Wam sprzedaje urządzenie hasłem, że „ukisi”, to sprzedaje coś, co nie istnieje.",
        "To, co robi, dotyczy wyłącznie przygotowania — ale przy kiszeniu przygotowanie to jest właśnie ta część, która boli.",
        "Szatkowanie kapusty. Kto szatkował trzy główki ręcznie, ten wie, ile to trwa i jak potem wyglądają kostki palców. Tutaj to jest kilka minut i różnica między jednym popołudniem a trzema. Do tego krojenie ogórków, siekanie kopru i czosnku, mielenie przypraw, rozpuszczenie soli w wodzie. I tyle. Reszta dzieje się bez Was, w kamionce, w spiżarni.",
        "Za to z gotowymi kiszonkami urządzenie pracuje już normalnie i dużo: kapuśniak, bigos, żurek na zakwasie, zupa ogórkowa, sos do mięsa, surówka z kiszonej kapusty z jabłkiem i marchewką, pasta na kanapki. Wszystko po kolei w jednym naczyniu.",
        "Teraz dwie odmowy i obie są poważne.",
        "Pierwsza: nie doradzę Wam nic o bezpieczeństwie kiszenia. Ile soli, w jakiej temperaturze, co robić, gdy pojawi się pleśń, kiedy słoik nadaje się do wyrzucenia. To jest wiedza z zupełnie innej dziedziny, a błąd w niej kończy się chorobą, nie nieudanym obiadem. Po tę wiedzę idźcie do kogoś, kto kisi od trzydziestu lat — w gminie rolniczej takich osób jest więcej niż w niejednym mieście.",
        "Druga: nie napiszę Wam, że kiszonki są zdrowe. Wiem, że to dziś modne i wiem, że mogłabym tym sprzedać więcej. Ale ja sprzedaję urządzenie kuchenne, a nie zdrowie, i nie będę powtarzać zdań, których nie mam prawa mówić.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dzierzgoniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Dla porządku przy umawianiu: chodzi o Dzierzgoń, a nie o Stary Dzierzgoń — to osobna gmina osiem kilometrów dalej. Do niej też przyjadę, tylko musimy się dobrze umówić.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dzierzgoniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dzierzgońskiej rodziny",
      paragraphs: [
        "Dzierzgoń liczy niecałe pięć tysięcy mieszkańców, a cała gmina ponad osiem i pół. Prawa miejskie otrzymał pod koniec trzynastego wieku — daty nie podaję, bo źródła podają dwie różne i wolę tego nie rozstrzygać za historyków. Gmina jest rolnicza: co czwarty pracujący pracuje na roli, a jedna trzecia w przemyśle i budownictwie. Ma za to statystykę, którą mało kto się chwali, a szkoda: w części miejskiej sto procent mieszkańców ma wodociąg i sto procent kanalizację, co daje pierwsze miejsce w Polsce w obu kategoriach.",
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

  districtsHeading: "Do których części Dzierzgonia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy Dzierzgoń — bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać ulicę albo miejscowość. Warto tylko zaznaczyć, czy chodzi o Dzierzgoń, czy o sąsiedni Stary Dzierzgoń — to dwie różne gminy.",
  ],
  districts: [],

  nearbyHeading: "Poza Dzierzgoń też przyjadę",
  nearbyParagraphs: [
    "Sztum, Malbork, Prabuty, Kwidzyn, Stary Dzierzgoń i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sztum", "Malbork", "Prabuty", "Kwidzyn", "Nowy Staw"],

  about: blokOMnie("do Dzierzgonia", "w Dzierzgoniu i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dzierzgonia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Dzierzgoń w powiecie sztumskim, nie o sąsiedni Stary Dzierzgoń, który jest osobną gminą, ani o Dzierżoniów na Dolnym Śląsku — choć do Starego Dzierzgonia też przyjadę.",
    },
    ...faqWspolne("w Dzierzgoniu"),
    {
      question: "Czy Thermomix ukisi kapustę albo ogórki?",
      answer:
        "Nie. Kiszenie robi czas i bakterie mlekowe, a nie silnik — i nie da się go przyspieszyć ani o dzień. Kto sprzedaje urządzenie hasłem „ukisi”, sprzedaje coś, co nie istnieje.",
    },
    {
      question: "To w czym pomaga przy kiszeniu?",
      answer:
        "Wyłącznie w przygotowaniu — ale to jest właśnie ta część, która boli. Szatkowanie kapusty, krojenie ogórków, siekanie kopru i czosnku, mielenie przypraw, rozpuszczenie soli. Przy trzech główkach kapusty to jest różnica między jednym popołudniem a trzema.",
    },
    {
      question: "Ile soli, w jakiej temperaturze, co z pleśnią?",
      answer:
        "Tego nie doradzę i nie będę udawać, że umiem. Błąd przy kiszeniu kończy się chorobą, nie nieudanym obiadem — to osobna wiedza. Nie napiszę też, że kiszonki są zdrowe: sprzedaję urządzenie kuchenne, nie zdrowie.",
    },
  ],

  geo: { lat: 53.9215, lng: 19.3472 },
};
