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
 * DOBRODZIEŃ — małe miasto na północy województwa, od pokoleń związane
 * z produkcją mebli; działa tu wiele rodzinnych zakładów stolarskich
 * i meblowych, a miasto bywa nazywane meblową stolicą Opolszczyzny.
 *
 * KĄT: kuchnia na wymiar — czyli jedyne miejsce, gdzie mogę napisać
 * KONKRETNĄ INSTRUKCJĘ DLA OSOBY, KTÓRA WŁAŚNIE ZAMAWIA ZABUDOWĘ.
 * Cztery rzeczy, o których trzeba pomyśleć przed montażem, a o których
 * nikt nie myśli: gniazdko we właściwym miejscu, wolna wysokość pod górną
 * szafką, głębokość i nośność blatu oraz miejsce, gdzie para ma uciekać.
 * Po montażu żadnej z nich nie da się już łatwo poprawić.
 *
 * ROZGRANICZENIE. Będzin dostał „mała kuchnia w bloku — gdzie to
 * postawić", Tarnowskie Góry „nowa kuchnia i co w niej naprawdę
 * postawić". Tutaj chodzi o coś węższego i technicznego: o rozmowę
 * ze stolarzem PRZED wykonaniem zabudowy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Dobrodzień jest znanym ośrodkiem produkcji mebli, z wieloma
 *   rodzinnymi zakładami stolarskimi,
 * — miasto leży na północy województwa opolskiego, między Ozimkiem,
 *   Zawadzkiem i Olesnem.
 *
 * CZEGO NIE MA: wymiarów urządzenia w centymetrach (różnią się między
 * wersjami — podaję je na spotkaniu z aktualnych materiałów), nazw
 * zakładów meblowych, danych o branży.
 */
export const DOBRODZIEN: CityContent = {
  slug: "dobrodzien",
  h1: "Thermomix Dobrodzień – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Dobrodzień — prezentacja i cena",
  seoDescription:
    "Thermomix w Dobrodzieniu: bezpłatna prezentacja TM7 u Ciebie w domu. Cena, raty 0% i porada, co uwzględnić w zabudowie kuchni. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dobrodzień — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Dobrodzieniu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Dobrodzienia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Pluder, Szemrowic, Myśliny i pozostałych sołectw.",

  highlights: highlightyStandardowe("Dobrodzień i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Dobrodzieniu – jak wygląda prezentacja?",
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
      id: "powiedz-to-stolarzowi",
      heading: "Miasto meblarzy — czyli cztery rzeczy do powiedzenia przed montażem",
      paragraphs: [
        "W Dobrodzieniu meble robi się od pokoleń i mało kto w Polsce wie o kuchennej zabudowie tyle, co tutejsi stolarze. Napiszę więc rzecz, która akurat tu ma największy sens: co warto uwzględnić w projekcie kuchni, jeśli planujecie kiedykolwiek postawić w niej takie urządzenie. Po montażu żadnej z tych rzeczy nie da się już łatwo poprawić.",
        "Pierwsza: gniazdko. Urządzenie potrzebuje własnego gniazdka dokładnie tam, gdzie ma stać — nie za lodówką i nie w rogu, do którego trzeba ciągnąć przedłużacz przez cały blat. To jest jedna dodatkowa puszka na etapie elektryki i kosztuje grosze; potem jest kuciem w gotowej ścianie.",
        "Druga: wolna wysokość pod górną szafką. To najczęstszy błąd, jaki widzę. Urządzenie stoi, wygląda dobrze — a potem okazuje się, że nie da się zdjąć pokrywki albo wyjąć koszyka, bo szafka wisi za nisko. Ta wysokość musi być zmierzona z zapasem na otwieranie, a nie na samą obudowę.",
        "Trzecia: blat. Potrzebuje swojego miejsca o odpowiedniej głębokości, a nie kawałka przy zlewie, na którym już stoi czajnik i suszarka. Warto też, żeby to nie była półka wysuwana ani cienki blat na wsporniku — urządzenie swoje waży i przy pracy się nie przesuwa, ale też nie lubi ugięcia.",
        "Czwarta, najczęściej pomijana: para. Podczas gotowania para wychodzi górą i jeśli nad urządzeniem wisi szafka z drewnianym frontem albo forniru na styk, po roku widać to na spodzie. Wystarczy przewidzieć miejsce z boku albo pod okapem.",
        "To wszystko. Cztery zdania, które warto powiedzieć stolarzowi przy zamawianiu — dużo tańsze niż poprawianie gotowej kuchni. A jeśli chcecie wiedzieć, ile dokładnie centymetrów trzeba zostawić, powiem to na spotkaniu z aktualnych wymiarów, a nie z pamięci.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Dobrodzieniu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli akurat planujecie kuchnię, powiedzcie o tym — przyjadę z wymiarami i przymierzymy urządzenie do projektu, zanim cokolwiek pojedzie do montażu.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Dobrodzieniem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dobrodzieniu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla dobrodzieńskiej rodziny",
      paragraphs: [
        "W domu, w którym ktoś pracuje w warsztacie albo w zakładzie, obiad rzadko powstaje w jednym spokojnym ciągu — częściej trzeba go wcisnąć między inne rzeczy.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
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
    "Dobrodzień",
    "Pludry",
    "Szemrowice",
    "Rzędowice",
    "Myślina",
    "Bzinica Stara",
    "Główczyce",
    "Warłów",
    "Gosławice",
    "Klekotna",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Ozimek, Zawadzkie, Kolonowskie i Strzelce Opolskie są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ozimek", "Zawadzkie", "Kolonowskie", "Strzelce Opolskie", "Opole"],

  about: blokOMnie("do Dobrodzienia", "w gminie Dobrodzień i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Dobrodzienia bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Dobrodzieniu"),
    {
      question: "Planujemy nową kuchnię. Co uwzględnić, żeby urządzenie się zmieściło?",
      answer:
        "Cztery rzeczy: własne gniazdko dokładnie w miejscu, gdzie ma stać; wolną wysokość pod górną szafką liczoną z zapasem na otwieranie pokrywki; stabilny blat o odpowiedniej głębokości; i miejsce, którędy ucieknie para. Podam dokładne wymiary na spotkaniu — najlepiej zanim zabudowa pojedzie do montażu.",
    },
    {
      question: "Czy urządzenie da się wbudować na stałe w zabudowę?",
      answer:
        "Nie i nie polecam takich rozwiązań. Stoi na blacie i musi być swobodnie dostępne z góry — trzeba zdejmować pokrywkę, wyjmować naczynie i myć je przy zlewie. Zabudowanie go na sztywno kończy się tym, że korzysta się z niego rzadziej.",
    },
  ],

  geo: { lat: 50.7256, lng: 18.4436 },
};
