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
 * DZIERŻONIÓW — miasto, w którym przez dziesięciolecia produkowano
 * radioodbiorniki. Sprzęt elektroniczny trafiał stąd do domów, w których
 * wcześniej nie było żadnego.
 *
 * KĄT: „ja nie lubię takich elektronicznych rzeczy". Bariera ekranu
 * dotykowego i aplikacji u osoby, która nie czuje się swobodnie
 * z technologią i wstydzi się to powiedzieć.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — to nie jest wymówka ani „opór przed nowoczesnością", tylko zwykła
 *   różnica przyzwyczajeń i trzeba ją potraktować poważnie,
 * — ekran w tym urządzeniu jest prostszy niż telefon, bo robi jedną
 *   rzecz: prowadzi przez przepis — nie ma tu powiadomień ani wyboru,
 * — najlepszy test to nie opis, tylko dotknięcie tego na spotkaniu;
 *   dlatego oddaję urządzenie w ręce, zamiast pokazywać,
 * — i uczciwie: dla części osób ekran zostanie niewygodny na zawsze
 *   i lepiej to sprawdzić przed zakupem niż po.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO OPISYWANIA KONKRETNYCH FUNKCJI, MENU, EKRANÓW ani gestów,
 *   których nie jestem pewna. Nie zmyślam interfejsu.
 * — ŻADNYCH OBIETNIC O AKTUALIZACJACH, aplikacji, koncie, subskrypcji
 *   ani o tym, co się pojawi w przyszłości.
 * — ŻADNEGO ŁĄCZENIA TEGO Z WIEKIEM. To nie jest kwestia lat, tylko
 *   przyzwyczajeń, i tak ma zostać napisane.
 *
 * ROZGRANICZENIE. Mława mówi „a jak się zepsuje" (serwis), Staszów
 * o tym, kto w domu umie to obsłużyć (podział ról w rodzinie). Tutaj
 * chodzi o WŁASNY OPÓR jednej osoby wobec ekranu dotykowego.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Dzierżoniowie przez dziesięciolecia produkowano radioodbiorniki.
 */
export const DZIERZONIOW: CityContent = {
  slug: "dzierzoniow",
  h1: "Thermomix Dzierżoniów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Dzierżoniów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Dzierżoniowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dzierżoniów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dzierżoniowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dzierżoniowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Dzierżoniów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Danie przygotowane w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Na spotkaniu oddaję urządzenie w ręce — to jedyny uczciwy test.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dzierżoniowie – jak wygląda prezentacja?",
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
      id: "nie-lubie-elektroniki",
      heading: "Miasto radioodbiorników — i zdanie „ja nie lubię takich elektronicznych rzeczy”",
      paragraphs: [
        "W Dzierżoniowie przez dziesięciolecia składano radioodbiorniki, które trafiały do domów niemających wcześniej żadnego sprzętu tego rodzaju. Ktoś musiał się wtedy nauczyć nowego przedmiotu od zera. Wykorzystam to do zdania, które słyszę regularnie i które prawie zawsze pada z zażenowaniem: ja po prostu nie lubię tych wszystkich elektronicznych rzeczy.",
        "To nie jest wymówka ani opór przed nowoczesnością i nie ma nic wspólnego z wiekiem — spotykam to u osób w każdym. To jest zwykła różnica przyzwyczajeń: ktoś ma za sobą lata klikania w ekrany, a ktoś inny nie, i drugiej osobie każdy nowy ekran kosztuje więcej wysiłku. Traktuję to poważnie, bo dla części ludzi jest to prawdziwy powód rezygnacji z zakupu.",
        "Powiem, na czym polega tutaj różnica wobec telefonu. Ten ekran robi jedną rzecz: prowadzi przez przepis. Nie ma tu powiadomień, wiadomości ani dziesięciu aplikacji naraz, między którymi trzeba się orientować. To jest bliższe pilnowaniu jednej listy zakupów niż obsłudze smartfona — i tym właśnie odstaje od tego, co ludzie mają na myśli, mówiąc „elektronika”.",
        "Nie będę Wam natomiast opisywać, jak dokładnie wygląda menu, co jest pod którym przyciskiem ani jakie są gesty. Nie dlatego, że to sekret, tylko dlatego, że opis z pamięci potrafi się rozminąć z rzeczywistością, a Wy byście się oparli na moim zdaniu zamiast na tym, co widzicie. Tak samo nie obiecam nic o aktualizacjach ani o tym, co dojdzie w przyszłości.",
        "Zamiast tego robię coś prostszego. Na spotkaniu oddaję urządzenie w ręce osobie, która ma obawy, i to ona prowadzi całe danie — nie ja pokazuję, tylko ona robi. Godzina wystarcza, żeby wiedzieć, czy to jest dla Was do przejścia, czy nie. Żaden opis, mój ani niczyj, tego nie zastąpi.",
        "I rzecz najuczciwsza: bywa, że odpowiedź brzmi „nie”. Dla części osób taki ekran zostaje niewygodny i nie zmieni tego przyzwyczajenie się. Zdecydowanie lepiej dowiedzieć się tego na bezpłatnym spotkaniu niż po wydaniu pieniędzy — dlatego wolę, żebyście spróbowali sami, a nie uwierzyli mi na słowo.",
      ],
      links: [{ href: "/thermomix/tm7", label: "Thermomix TM7" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dzierżoniowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli ktoś u Was obawia się obsługi, powiedzcie mi o tym z góry — całe danie poprowadzi wtedy ta osoba, a ja się nie wtrącam.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dzierżoniowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dzierżoniowskiej rodziny",
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

  districtsHeading: "Do których części Dzierżoniowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Osiedle Błękitne",
    "Osiedle Złote",
    "Osiedle Tęczowe",
    "Zachód",
    "Piława",
    "Nowe Miasto",
  ],

  nearbyHeading: "Poza Dzierżoniów też przyjadę",
  nearbyParagraphs: [
    "Bielawa, Pieszyce, Piława Górna i Niemcza są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bielawa", "Pieszyce", "Piława Górna", "Niemcza", "Świdnica", "Ząbkowice Śląskie"],

  about: blokOMnie("do Dzierżoniowa", "w Dzierżoniowie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dzierżoniowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Dzierżoniowie"),
    {
      question: "Nie radzę sobie z ekranami dotykowymi. Czy to dla mnie?",
      answer:
        "Może być, ale sprawdźcie to sami, a nie na moje słowo. Ten ekran robi jedną rzecz — prowadzi przez przepis — więc jest bliżej pilnowania listy niż obsługi telefonu. Na spotkaniu oddaję urządzenie w ręce osobie, która ma obawy, i to ona prowadzi całe danie. Godzina wystarcza, żeby wiedzieć.",
    },
    {
      question: "A jeśli po spotkaniu okaże się, że jednak sobie nie radzę?",
      answer:
        "To jest uczciwa odpowiedź i lepiej ją dostać przed wydaniem pieniędzy. Dla części osób taki ekran zostaje niewygodny i przyzwyczajenie tego nie zmienia — nie będę wtedy namawiać.",
    },
  ],

  geo: { lat: 50.7275, lng: 16.6522 },
};
