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
 * RADZYŃ PODLASKI — czternaście tysięcy mieszkańców, pałac Potockich
 * po zakończonym remoncie, spółdzielcza mleczarnia SPOMLEK.
 *
 * KĄT: przebudowa, nie budowa od zera. Prawie nikt nie wstawia sprzętu
 * do kuchni zaprojektowanej pod niego — wstawia się go do kuchni, która
 * już jest, ze swoim układem, gniazdkami i przyzwyczajeniami. Miasto,
 * którego najważniejszy budynek jest czwartą warstwą na tym samym
 * miejscu, jest właściwym miejscem na tę rozmowę.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pytanie „gdzie to postawić” jest ważniejsze, niż się wydaje,
 *   i że zadaje się je ZA PÓŹNO,
 * — trzy rzeczy fizyczne do sprawdzenia przed zakupem: miejsce
 *   na blacie, dostęp do gniazdka i przestrzeń nad urządzeniem,
 * — że sprzęt, który stoi w szafce, nie jest używany — i to jest
 *   najczęstszy sposób, w jaki taki zakup się marnuje,
 * — że nie trzeba przerabiać kuchni; trzeba tylko wiedzieć,
 *   co się zmieni.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD ELEKTRYCZNYCH. Nie mówię nic o obciążeniu obwodu,
 *   bezpiecznikach, przedłużaczach ani o tym, co można podłączyć
 *   razem. To jest praca elektryka i tak jest w tekście napisane.
 *   Zła rada tutaj kończy się pożarem.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEGO DORADZANIA W REMONCIE ani wymiarów mebli — nie jestem
 *   projektantką kuchni.
 * — ANI SŁOWA o cenach mieszkań i kosztach remontu.
 *
 * ROZGRANICZENIE. Kąt „a może poczekać na następny model?” i kąt
 * „kiedy Aga radzi POCZEKAĆ” są zajęte i tutaj się NIE pojawiają —
 * ta strona nie odradza zakupu ani nie każe czekać. Mówi o tym,
 * co sprawdzić w istniejącej kuchni. „Cmentarzysko sprzętów
 * kuchennych” też jest zajęte i nie ma tu listy niepotrzebnych
 * urządzeń.
 *
 * HIPOTEZA OBALONA — I DLATEGO TEN KĄT. Zakładałam „remont, który
 * trwa latami”. Research to ZABIŁ: pałac Potockich został otwarty
 * 17 marca 2024 r. po remoncie prowadzonym od około 2009 r.,
 * kosztem około 30 mln zł, i od tego czasu normalnie działa —
 * kawiarnia, wystawy, szkoła muzyczna, archiwum; w maju 2024 dostał
 * wojewódzką nagrodę konserwatorską. Pisanie o zaniedbanym pałacu
 * byłoby powtórzeniem nieaktualnych artykułów sprzed 2024 roku.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE piszę „jeden z najpiękniejszych pałaców rokokowych w Polsce”.
 *   To hasło przewodnikowe bez żadnego porównawczego źródła,
 * — NIE piszę, że pałac ZBUDOWALI Potoccy. Zbudowali go na cudzym:
 *   warownia Kazanowskich z XV w., faza Mniszchów, barokowa
 *   rezydencja Stanisława Antoniego Szczuki (1685–1709, arch. August
 *   Locci), a dopiero potem przebudowa rokokowa dla Eustachego
 *   i Marianny Potockich (od 1749/1750 do 1759, arch. Jakub Fontana).
 *   To rozróżnienie JEST kątem tej strony, nie ozdobnikiem,
 * — NIE mylę miasta z gminą wiejską Radzyń Podlaski, która ma
 *   własny, nieużytkowany pałac w Branicy Radzyńskiej dopiero
 *   przed remontem. To dwa różne obiekty i dwie różne jednostki,
 * — NIE podaję odległości do Nowego Wiśnicza — research nie znalazł
 *   policzonej trasy, a szacunku nie podaję,
 * — NIE piszę o zakładach mięsnych. Potwierdzonym dużym pracodawcą
 *   jest spółdzielcza MLECZARNIA Spomlek.
 *
 * ODRZUCONE KĄTY:
 * — ser i nabiał przy Spomleku — nabiał zajęty przez Wieluń, a spór
 *   „domowe kontra przemysłowe” przez Mrągowo. Dublowanie obu naraz,
 * — „Zawijaki wygnanowskie” z Listy Produktów Tradycyjnych —
 *   pochodzą z Wygnanki w gminie Kąkolewnica, nie z miasta;
 *   dodatkowo sam wpis na gov.pl podaje w jednym miejscu błędny
 *   powiat. W tekście nie ma o nich ani słowa.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — cztery warstwy budowlane na tym samym miejscu, z datami
 *   i nazwiskami architektów jak wyżej,
 * — pałac otwarty po remoncie 17 marca 2024 r. i dziś czynny,
 * — park przypałacowy (12 ha) to osobny, dopiero rozpoczynany etap —
 *   dlatego w tekście jest „część dalej trwa”, bez kwot,
 * — miasto liczyło 14 185 mieszkańców na 31 grudnia 2024 r.,
 *   i straciło 12,3% ludności w latach 2002–2024,
 * — z Lublina jest tu 76 km, około godziny i kwadransa,
 * — Spomlek nadal działa i rekrutuje,
 * — miasto NIE publikuje oficjalnego wykazu osiedli — dlatego
 *   districts jest PUSTĄ TABLICĄ, zamiast zgadywanych nazw.
 */
export const RADZYN_PODLASKI: CityContent = {
  slug: "radzyn-podlaski",
  h1: "Thermomix Radzyń Podlaski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Radzyń Podlaski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Radzyniu Podlaskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radzyń Podlaski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Radzyniu Podlaskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Radzynia Podlaskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Radzyń Podlaski i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prawie nikt nie ma kuchni zaprojektowanej pod to urządzenie. I nie musi mieć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Radzyniu Podlaskim – jak wygląda prezentacja?",
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
      id: "przebudowa",
      heading: "Miasto, które nic nie zbudowało od zera — i kuchnia, która też nie",
      paragraphs: [
        "W środku Radzynia stoi pałac, o którym mówi się „pałac Potockich”, i to jest skrót, który przekręca całą historię. Potoccy go nie zbudowali. Zastali gotowy budynek i go przerobili. Wcześniej była tu piętnastowieczna warownia Kazanowskich, potem rezydencja Mniszchów, potem barokowy pałac wzniesiony dla Stanisława Antoniego Szczuki w latach 1685–1709 przez Augusta Locciego. Dopiero na tym wszystkim Jakub Fontana zrobił dla Eustachego i Marianny Potockich, od 1749 roku, rokokową przebudowę, którą dziś się ogląda. Cztery warstwy, jedno miejsce, żadnej pustej działki na początku.",
        "Piszę o tym, bo dokładnie tak samo wygląda sprawa z kuchnią, do której trafia takie urządzenie. Prawie nikt nie kupuje go do kuchni zaprojektowanej pod niego. Kupuje się go do kuchni, która już jest — ze swoim układem, swoimi szafkami, swoimi gniazdkami i swoimi przyzwyczajeniami, których nikt nie planował, tylko się narosły przez lata.",
        "I dlatego pytanie „gdzie to w ogóle postawić” jest ważniejsze, niż brzmi. Zwykle pada za późno — po zakupie, przy rozpakowywaniu, kiedy okazuje się, że jedyne wolne miejsce jest w rogu, gdzie nikt nie stoi. Wolę je zadać wcześniej, na prezentacji, i dlatego przywożę urządzenie do Was, a nie zapraszam Was do siebie.",
        "Trzy rzeczy warto sprawdzić, zanim cokolwiek podpiszecie. Pierwsza: czy jest na blacie miejsce, w którym urządzenie ma stać na stałe. Nie „gdzieś się zmieści”, tylko konkretny kawałek blatu. Druga: czy w tym miejscu jest dostęp do gniazdka bez ciągnięcia kabla przez pół kuchni. Trzecia: czy nad tym miejscem jest przestrzeń — bo pokrywę trzeba zdejmować, a wisząca nisko szafka potrafi to skutecznie utrudnić.",
        "Jednego natomiast nie powiem i nie będę udawać, że wiem: nie doradzam nic w sprawach elektrycznych. Ani co można podłączyć razem, ani na jakim obwodzie, ani czy przedłużacz wystarczy. To jest praca elektryka i jeśli macie w kuchni starą instalację, pytanie należy zadać jemu, nie mnie.",
        "Po co to wszystko? Bo sprzęt, który stoi w szafce, nie jest używany. To jest najczęstszy sposób, w jaki taki zakup się marnuje — nie przez to, że urządzenie okazało się złe, tylko przez to, że stanęło w miejscu, do którego się nie sięga. Nie trzeba przerabiać kuchni ani niczego kupować dodatkowo. Trzeba tylko przed zakupem wiedzieć, co się na blacie zmieni.",
        "Radzyński pałac zresztą nadal nie jest skończony: sam budynek otwarto po remoncie w marcu 2024 roku, ale otaczający go dwunastohektarowy park to osobna, dopiero rozpoczynana sprawa. Zwykle tak to wygląda również w kuchni — najpierw zmienia się jedno miejsce, a reszta układa się wokół niego przez następny rok.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Radzyniu Podlaskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie wątpliwość, czy to się u Was w ogóle zmieści, powiedzcie to przy umawianiu — postawimy urządzenie dokładnie tam, gdzie miałoby stać, i zobaczycie to na własnym blacie, zanim cokolwiek zdecydujecie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Radzyniu Podlaskim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla radzyńskiej rodziny",
      paragraphs: [
        "Radzyń Podlaski liczy nieco ponad czternaście tysięcy mieszkańców i od dwóch dekad ich ubywa. Największym zakładem w mieście jest spółdzielcza mleczarnia, a z Lublina jedzie się tu ponad godzinę — to nie jest miasto, z którego wyskakuje się na zakupy do galerii.",
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

  districtsHeading: "Do których części Radzynia Podlaskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie publikuje oficjalnego wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Radzyń Podlaski też przyjadę",
  nearbyParagraphs: [
    "Kąkolewnica, Borki, Czemierniki, Ulan-Majorat, Wohyń i Komarówka Podlaska są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kąkolewnica", "Borki", "Czemierniki", "Ulan-Majorat", "Wohyń", "Międzyrzec Podlaski"],

  about: blokOMnie("do Radzynia Podlaskiego", "w Radzyniu Podlaskim i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Radzynia Podlaskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Radzyniu Podlaskim"),
    {
      question: "Czy to się zmieści w mojej kuchni?",
      answer:
        "Najlepiej sprawdzić to na własnym blacie i dlatego przyjeżdżam z urządzeniem do Was. Warto zawczasu spojrzeć na trzy rzeczy: czy jest miejsce, w którym urządzenie stanie na stałe, czy jest tam gniazdko bez ciągnięcia kabla przez kuchnię i czy nad tym miejscem jest przestrzeń na zdejmowanie pokrywy. Sprzęt schowany do szafki przestaje być używany — to najczęstszy sposób, w jaki taki zakup się marnuje.",
    },
    {
      question: "Czy trzeba coś zmienić w instalacji elektrycznej?",
      answer:
        "Nie doradzam w sprawach elektrycznych i nie będę zgadywać — ani co można podłączyć na jednym obwodzie, ani czy wystarczy przedłużacz. To pytanie do elektryka, zwłaszcza przy starszej instalacji. Wolę powiedzieć wprost, że się na tym nie znam, niż podpowiedzieć coś, co komuś zaszkodzi.",
    },
  ],

  geo: { lat: 51.7833, lng: 22.6167 },
};
