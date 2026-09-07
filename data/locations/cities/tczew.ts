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
 * TCZEW — miasto nad Wisłą, znane z zabytkowego mostu przez rzekę,
 * jednej z ważniejszych konstrukcji inżynieryjnych dziewiętnastego wieku
 * w tej części Europy. Działa tu Muzeum Wisły.
 *
 * KĄT: waga urządzenia i kto je podniesie. Rzecz kompletnie pominięta
 * w materiałach sprzedażowych, a decydująca dla części kupujących —
 * zwłaszcza dla osób starszych i dla tych, którzy z jakiegoś powodu nie
 * mogą dźwigać.
 *
 * CO SEKCJA MA POWIEDZIEĆ:
 * — to nie jest sprzęt, który przenosi się jedną ręką, i trzeba to
 *   powiedzieć wprost,
 * — ale codziennie NIE TRZEBA go przenosić — on ma stać na blacie
 *   i zostaje tam; przenoszenie zdarza się przy myciu blatu i przy
 *   przeprowadzce,
 * — samo naczynie, wyjmowane do mycia, waży znacznie mniej niż całość
 *   i to ono jest ruszane naprawdę codziennie,
 * — i jedyny uczciwy test: PODNIEŚĆ TO SAMEMU NA SPOTKANIU. Zapraszam
 *   do tego wprost.
 *
 * TWARDA GRANICA: ŻADNYCH LICZB. Nie podaję wagi w kilogramach, bo nie
 * jestem pewna wartości dla konkretnego modelu, a podanie zmyślonej liczby
 * przy pytaniu, które dla kogoś jest realną barierą, byłoby szczególnie
 * podłe. Opisuję odczucie i proponuję sprawdzenie na żywo.
 *
 * DRUGA GRANICA: ŻADNYCH SUGESTII ZDROWOTNYCH. Nie pytam i nie zgaduję,
 * dlaczego ktoś nie może dźwigać.
 *
 * ROZGRANICZENIE. Gorzów mówi o przewożeniu sprzętu przy przeprowadzce,
 * Gdynia o tym, ile miejsca zajmuje zestaw, Będzin o małej kuchni.
 * Tutaj chodzi wyłącznie o CIĘŻAR i o ręce, które muszą go unieść.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Tczewie stoi zabytkowy most przez Wisłę, ceniony jako konstrukcja
 *   inżynieryjna,
 * — w mieście działa Muzeum Wisły.
 */
export const TCZEW: CityContent = {
  slug: "tczew",
  h1: "Thermomix Tczew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tczew — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Tczewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tczew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tczewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tczewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Tczew i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na spotkaniu można to po prostu podnieść i sprawdzić samemu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tczewie – jak wygląda prezentacja?",
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
      id: "ile-to-wazy",
      heading: "Miasto mostu — czyli o tym, ile to waży i kto to podniesie",
      paragraphs: [
        "W Tczewie stoi most przez Wisłę, który przez lata był jedną z ważniejszych konstrukcji inżynieryjnych w tej części Europy. Przy mostach wszystko sprowadza się do ciężaru i do tego, co go uniesie — więc wykorzystam to do pytania, którego nie ma w żadnym materiale sprzedażowym, a które dla części osób jest prawdziwą barierą: ile ten sprzęt waży i kto go podniesie.",
        "Zacznę uczciwie: to nie jest urządzenie, które bierze się jedną ręką i przenosi przez kuchnię. Jest solidne i to czuć. Nie podam Wam liczby w kilogramach, bo nie chcę podać zmyślonej — a przy pytaniu, które dla kogoś jest realną przeszkodą, wymyślona liczba byłaby szczególnie nie na miejscu.",
        "Ważniejsze jest jednak co innego i to zwykle rozwiązuje sprawę: tego sprzętu nie przenosi się codziennie. On ma stać na blacie i tam zostaje. Przenoszenie zdarza się przy gruntownym myciu blatu, przy przestawianiu kuchni i przy przeprowadzce — czyli kilka razy w roku, a nie kilka razy w tygodniu.",
        "Codziennie rusza się natomiast naczynie, bo ono wędruje do zlewu i z powrotem. I tu dobra wiadomość: samo naczynie waży wyraźnie mniej niż całe urządzenie, bo zostaje w nim tylko to, co trzeba umyć. Dla większości osób to jest ciężar porównywalny ze średnim garnkiem z wodą.",
        "Jest jeszcze jedna rzecz, o której warto pomyśleć przy wyborze miejsca. Jeśli sprzęt ma stać na blacie, to nie ma znaczenia, ile waży. Jeśli ktoś planuje trzymać go w dolnej szafce i wyciągać za każdym razem, to ma — i wtedy waga staje się powodem, dla którego po miesiącu przestaje się z niego korzystać. To argument za blatem, nie za szafką.",
        "A rozstrzygnięcie jest proste i nie wymaga wiary w nic, co tu napisałam: na spotkaniu można to po prostu podnieść. Zapraszam do tego wprost — proszę wziąć urządzenie w ręce, przenieść je z blatu na stół i z powrotem. Piętnaście sekund odpowiada na to pytanie lepiej niż każdy opis.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tczewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli waga jest dla Was istotna, powiedzcie o tym przy umawianiu — zacznę spotkanie od tego, żebyście mogli sprzęt podnieść.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tczewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tczewskiej rodziny",
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

  districtsHeading: "Do których części Tczewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Śródmieście",
    "Suchostrzygi",
    "Górki",
    "Bajkowe",
    "Czyżykowo",
    "Zatorze",
    "Prątnica",
    "Nowe Miasto",
    "Kolejarz",
  ],

  nearbyHeading: "Poza Tczew też przyjadę",
  nearbyParagraphs: [
    "Pruszcz Gdański, Starogard Gdański, Malbork i Gniew są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Pruszcz Gdański", "Starogard Gdański", "Malbork", "Gniew", "Gdańsk", "Skarszewy"],

  about: blokOMnie("do Tczewa", "w Tczewie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tczewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Tczewie"),
    {
      question: "Ile to waży? Czy podniosę to sama?",
      answer:
        "To nie jest sprzęt, który bierze się jedną ręką — jest solidny i to czuć. Nie podam liczby, bo nie chcę podać zmyślonej. Najważniejsze jest jednak to, że codziennie nie trzeba go przenosić: ma stać na blacie i tam zostaje. Codziennie rusza się tylko naczynie, a ono waży wyraźnie mniej. Na spotkaniu można to po prostu podnieść i sprawdzić samemu.",
    },
    {
      question: "Czy mogę trzymać go w dolnej szafce?",
      answer:
        "Można, ale odradzam właśnie ze względu na ciężar. Wyciąganie go za każdym razem z dolnej szafki to ta jedna czynność za dużo, po której po miesiącu przestaje się z niego korzystać. Jeśli stoi na blacie, waga przestaje mieć jakiekolwiek znaczenie.",
    },
  ],

  geo: { lat: 54.0921, lng: 18.7772 },
};
