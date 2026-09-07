import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * PYRZYCE — miasto w środku Równiny Pyrzyckiej, na jednej z najlepszych
 * ziem uprawnych w tej części Polski; okolica gospodarstw i zwierząt.
 *
 * KĄT: gotowanie dla psa. To jest jedyne miejsce w serwisie na temat,
 * o który ludzie pytają zaskakująco często, a nie ma go w żadnym folderze:
 * PRZYGOTOWYWANIE JEDZENIA DLA ZWIERZĘCIA.
 *
 * ŻELAZNE GRANICE, BEZ KTÓRYCH TEJ SEKCJI NIE WOLNO PISAĆ:
 * — NIE JESTEM WETERYNARZEM ANI DIETETYKIEM ZWIERZĘCYM i muszę to napisać
 *   w sekcji, nie tylko w komentarzu,
 * — NIE PODAJĘ ŻADNYCH PROPORCJI, SKŁADÓW ANI PRZEPISÓW dla psa,
 * — NIE WYMIENIAM produktów szkodliwych ani dozwolonych; wskazuję,
 *   że listę tego, czego psu nie wolno, podaje weterynarz,
 * — NIE SUGERUJĘ, że jedzenie domowe jest lepsze od karmy.
 * Wolno mi napisać wyłącznie o STRONIE TECHNICZNEJ: co urządzenie
 * fizycznie robi z takim jedzeniem i o higienie wspólnego naczynia.
 *
 * DLACZEGO WARTO, ŻEBY TA SEKCJA ISTNIAŁA: bo ludzie i tak to robią,
 * a nikt im nie mówi o rzeczy praktycznej — o tym samym naczyniu
 * używanym potem do jedzenia dla ludzi.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Pyrzyce leżą na Równinie Pyrzyckiej, na bardzo dobrych glebach,
 *   w okolicy rolniczej.
 */
export const PYRZYCE: CityContent = {
  slug: "pyrzyce",
  h1: "Thermomix Pyrzyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Pyrzyce — prezentacja i cena",
  seoDescription:
    "Thermomix w Pyrzycach: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pyrzyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pyrzycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pyrzyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Pyrzyce i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pyrzycach – jak wygląda prezentacja?",
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
      id: "dla-psa",
      heading: "„A czy zrobię w tym jedzenie dla psa?” — pytanie, które słyszę częściej, niż myślicie",
      paragraphs: [
        "W okolicy Pyrzyc, gdzie prawie w każdym gospodarstwie jest pies, to pytanie pada regularnie — a w folderach nie ma o nim ani słowa. Odpowiem, ale najpierw powiem, czego nie zrobię.",
        "Nie jestem weterynarzem ani dietetykiem zwierzęcym i nie podam Wam żadnych proporcji, składów ani przepisów. Nie powiem też, czego psu nie wolno jeść, bo to jest lista, którą podaje lekarz weterynarii, a pomyłka w tej sprawie kosztuje zdrowie zwierzęcia, nie moje. I nie będę twierdzić, że jedzenie domowe jest lepsze od karmy — o tym również decyduje weterynarz, znający konkretnego psa.",
        "Zostaje strona techniczna i o niej mogę mówić z pełnym prawem.",
        "Fizycznie urządzenie robi z takim jedzeniem dokładnie to, czego zwykle się od niego oczekuje. Gotuje mięso i warzywa w jednym naczyniu, bez pilnowania. Rozdrabnia je do konsystencji, jakiej potrzebujecie — od grubych kawałków po jednolitą masę, co bywa istotne przy starszym psie. Miele kości? Nie i nie należy tego próbować. Gotuje kaszę i ryż, jeśli tak macie zalecone. Wszystko w jednym garnku i bez stania.",
        "A teraz rzecz najważniejsza z tych, o których nikt nie uprzedza: to jest to samo naczynie, w którym potem gotujecie dla siebie. Jeśli robicie psu jedzenie regularnie, warto z góry ustalić, jak to rozdzielacie — czy myjecie porządnie za każdym razem, czy trzymacie osobne naczynie na tę robotę. Przy okazjonalnym gotowaniu wystarcza zwykłe umycie; przy codziennym warto pomyśleć o tym wcześniej, a nie po fakcie.",
        "Podsumowując: technicznie tak, bez problemu, i wiele osób właśnie tak robi. Co dokładnie wkładacie do środka — to ustalcie z weterynarzem, nie ze mną.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pyrzycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pyrzycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pyrzyckiej rodziny",
      paragraphs: [
        "W gospodarstwie dzień zaczyna się wcześnie i kończy późno, a obiad przygotowuje zwykle jedna osoba, między jedną a drugą robotą.",
        "Thermomix pomaga tym, że nie wymaga obecności — nastawiasz i wracasz, gdy jest gotowe. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Pyrzyce",
    "Brzesko",
    "Mielęcin",
    "Nowielin",
    "Okunica",
    "Ryszewko",
    "Stróżewo",
    "Żabów",
    "Letnin",
    "Obromino",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Stargard, Gryfino i Lipiany są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Stargard", "Gryfino", "Lipiany", "Myślibórz", "Chociwel"],

  about: blokOMnie("do Pyrzyc", "w gminie Pyrzyce i okolicy", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pyrzyc bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pyrzycach"),
    {
      question: "Czy zrobię w tym jedzenie dla psa?",
      answer:
        "Technicznie tak — gotuje mięso i warzywa w jednym naczyniu bez pilnowania i rozdrabnia do potrzebnej konsystencji, co bywa istotne przy starszym psie. Kości nie mieli i nie należy tego próbować. Co dokładnie wkładać do środka, ustal z weterynarzem: nie jestem lekarzem weterynarii ani dietetykiem zwierzęcym i nie podam żadnych proporcji ani listy tego, czego psu nie wolno.",
    },
    {
      question: "Czy to nie problem, że to samo naczynie służy potem ludziom?",
      answer:
        "Przy okazjonalnym gotowaniu wystarcza zwykłe, porządne umycie. Jeśli robisz psu jedzenie codziennie, warto z góry ustalić, jak to rozdzielasz — na przykład trzymając osobne naczynie na tę robotę. Lepiej pomyśleć o tym przed zakupem niż po fakcie.",
    },
  ],

  geo: { lat: 53.1478, lng: 14.8931 },
};
