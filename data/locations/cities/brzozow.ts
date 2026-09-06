import type { CityContent } from "../city-content";
import {
  REGION_PODKARPACIE,
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
 * BRZOZÓW — niewielkie miasto na Pogórzu Dynowskim, siedziba powiatu
 * brzozowskiego. Otoczone wsiami rozłożonymi na wzgórzach, z dala
 * od głównych tras.
 *
 * KĄT: niedzielny obiad jako instytucja. W okolicach takich jak ta
 * wciąż działa układ, który w miastach zanikł: dorosłe dzieci wracają
 * w niedzielę do rodziców, czasem z wnukami, i przy stole siada
 * kilkanaście osób. Nie na święta, nie od czasu do czasu — co tydzień.
 * To odróżnia Brzozów od Siemianowic (rodzina blisko, ale gotowanie
 * rozłożone na kilka mieszkań) i od Piekar (dwie stałe daty w roku):
 * tutaj to jest CO NIEDZIELĘ i zawsze u tej samej osoby.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Brzozów leży na Pogórzu Dynowskim i jest siedzibą powiatu
 *   brzozowskiego (m.in. Haczów, Domaradz, Dydnia, Jasienica Rosielna,
 *   Nozdrzec),
 * — kościół w Haczowie, w tym powiecie, jest jednym z najstarszych
 *   drewnianych kościołów gotyckich w Europie i figuruje na liście
 *   UNESCO,
 * — okolica ma charakter rolniczy, z zabudową rozłożoną wzdłuż dolin
 *   i na wzgórzach,
 * — do Krosna, Sanoka i Rzeszowa jest stąd podobnie daleko.
 *
 * CZEGO NIE MA: twierdzeń o religijności mieszkańców, danych o strukturze
 * rodzin, przepisów podanych jako miejscowe.
 */
export const BRZOZOW: CityContent = {
  slug: "brzozow",
  h1: "Thermomix Brzozów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Brzozów — prezentacja i cena",
  seoDescription:
    "Thermomix w Brzozowie: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat brzozowski. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brzozów — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brzozowie i w okolicznych gminach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Brzozowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Haczowa, Domaradza, Dydni, Jasienicy Rosielnej i Nozdrzca.",

  highlights: highlightyStandardowe("Brzozów i cały powiat brzozowski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brzozowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś, co u Was w domu robi się od lat. Powiedz wcześniej, ile osób siada do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "niedzielny-obiad",
      heading: "Niedzielny obiad jako instytucja",
      paragraphs: [
        "W okolicach takich jak brzozowska wciąż działa układ, który w większych miastach w dużej mierze zanikł: dorosłe dzieci wracają w niedzielę do rodziców. Czasem z wnukami, czasem z całą swoją rodziną — i przy stole siada dziesięć albo dwanaście osób. Nie na święta i nie od czasu do czasu, tylko co tydzień.",
        "Rzadko się o tym mówi wprost, ale ten obiad ma swoją cenę i płaci ją zwykle jedna osoba. Sobota schodzi na zakupy i ciasto, niedziela zaczyna się o siódmej rano, a kiedy wszyscy siadają do stołu, ta jedna osoba jest już zmęczona i przez pół obiadu chodzi między kuchnią a pokojem.",
        "Tu urządzenie ma sens bardzo praktyczny. Ciasto drożdżowe wyrabia się samo, więc sobota nie musi być cała zajęta. Rosół i sos gotują się z ustawioną temperaturą i mieszaniem, bez stania przy garnku, i mogą powstać dzień wcześniej. Większa porcja nie kosztuje więcej pilnowania, a po zupie nie zostaje garnek, blender i sitko — tylko jedno naczynie.",
        "Nie chodzi o to, żeby ten obiad był szybszy. Chodzi o to, żeby osoba, która go robi, mogła przy nim usiąść.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brzozowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz, żebyśmy zrobili coś, co gotujesz w niedzielę, powiedz o tym wcześniej — przywiozę pod to składniki i policzymy razem, ile z tego zostaje pracy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brzozowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla brzozowskiej rodziny",
      paragraphs: [
        "W tygodniu wygląda to spokojniej: obiad dla swoich, o mniej więcej stałej porze, często z własnych warzyw i z zapasu. Ale gotuje wciąż ta sama osoba i wciąż codziennie.",
        "Thermomix zdejmuje z tego stanie przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a większa porcja nie oznacza większego pilnowania.",
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

  districtsHeading: "Do których części Brzozowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych wsi, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Zabudowa jest tu rozłożona na wzgórzach, więc od kierunku zależy pora spotkania — nigdy jego cena.",
  ],
  districts: [
    "Centrum",
    "Zdrojowa",
    "Borkówka",
    "Bór",
    "Przysietnica",
    "Humniska",
    "Turze Pole",
    "Grabownica Starzeńska",
    "Zmiennica",
  ],

  nearbyHeading: "Cały powiat brzozowski i okolice",
  nearbyParagraphs: [
    "Haczów, Domaradz, Dydnia, Jasienica Rosielna i Nozdrzec są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny. Jadę też do Krosna, Sanoka, Strzyżowa i Dynowa.",
  ],
  nearbyTowns: [
    "Krosno",
    "Sanok",
    "Strzyżów",
    "Dynów",
    "Rymanów",
    "Zagórz",
  ],

  about: blokOMnie("do Brzozowa", "w Brzozowie i całym powiecie", REGION_PODKARPACIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Brzozowa bez dodatkowej opłaty?",
      answer:
        "Tak, do Brzozowa i do całego powiatu brzozowskiego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Brzozowie"),
    {
      question: "Gotuję co niedzielę dla kilkunastu osób — czy Thermomix da radę?",
      answer:
        "Da, choć przy naprawdę dużych ilościach część rzeczy robi się na dwa razy — misa ma swoją pojemność i nie będę tego ukrywać. Ale druga tura kosztuje tylko czas urządzenia, a nie Twój, bo nie trzeba przy niej stać. Na prezentacji policzymy to na Twoim niedzielnym menu, danie po daniu.",
    },
    {
      question: "Czy przyjedziesz do Haczowa albo Domaradza?",
      answer:
        "Tak, jeżdżę po całym powiecie brzozowskim. Wystarczy powiedzieć przy umawianiu, gdzie dokładnie mieszkasz — dojazd nic nie kosztuje.",
    },
  ],

  geo: { lat: 49.6944, lng: 22.0186 },
};
