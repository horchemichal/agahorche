import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * ŻYWIEC — miasto w kotlinie, otoczone Beskidem Żywieckim i Małym,
 * z Jeziorem Żywieckim i wsiami rozciągniętymi po dolinach. Stolica
 * Żywiecczyzny: regionu z własną kuchnią, własnym strojem i bardzo
 * mocnym poczuciem odrębności od reszty województwa.
 *
 * KĄT: to jedyne miasto tej fali, w którym o kuchni decyduje PORA ROKU,
 * a nie godzina powrotu z pracy. Lato to nadmiar i goście, jesień to
 * przetwory, zima to zupy i długie gotowanie. Żywiecczyzna żyje też
 * z turystyki — bardzo wiele domów przyjmuje gości, więc gotowanie
 * bywa tu częścią pracy, a nie tylko domowym obowiązkiem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Żywiec leży w Kotlinie Żywieckiej, między Beskidem Żywieckim,
 *   Małym i Śląskim,
 * — Jezioro Żywieckie to zbiornik zaporowy na Sole,
 * — miasto jest siedzibą powiatu żywieckiego, obejmującego m.in. Węgierską
 *   Górkę, Milówkę, Rajczę, Ujsoły, Jeleśnię i Korbielów,
 * — kwaśnica to zupa uznawana za tradycyjną potrawę Żywiecczyzny,
 * — region ma silne tradycje pasterskie i własny strój ludowy,
 * — Korbielów i okolice to ośrodki narciarskie, a powiat żyje z turystyki
 *   przez cały rok.
 *
 * CZEGO NIE MA: przepisów podanych jako „jedyne słuszne", danych o liczbie
 * turystów, twierdzeń o tym, co „każdy tu gotuje".
 */
export const ZYWIEC: CityContent = {
  slug: "zywiec",
  h1: "Thermomix Żywiec – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Żywiec — prezentacja i cena",
  seoDescription:
    "Thermomix w Żywcu: bezpłatna prezentacja TM7 u Ciebie w domu, cały powiat żywiecki. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żywiec — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żywcu i w całym powiecie, także w górskich wsiach. Prezentacja bezpłatna.",

  lead:
    "Przyjeżdżam do Żywca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Zabłociu, Sporyszu czy Koleby. Prezentacja i dojazd są bezpłatne, także do górskich wsi powiatu.",

  highlights: highlightyStandardowe("Żywiec i cały powiat żywiecki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żywcu – jak wygląda prezentacja?",
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
      id: "pora-roku",
      heading: "Tu o kuchni decyduje pora roku, nie godzina powrotu",
      paragraphs: [
        "W większości miast tego województwa o gotowaniu decyduje zegar: kto o której wraca, kiedy dzieci są ze szkoły, kto ma nockę. Na Żywiecczyźnie działa to inaczej — tutaj rytm wyznacza kalendarz.",
        "Lato to nadmiar i goście. Jesień to przetwory: śliwki, jabłka, grzyby, wszystko naraz i wszystko do przerobienia w kilka dni. Zima to zupy i długie gotowanie, bo w kotlinie jest po prostu zimniej niż na dole. Każdy z tych trzech trybów wymaga czego innego od kuchni.",
        "Thermomix wchodzi tu najmocniej jesienią, przy przetworach. Przecier, dżem czy powidła gotują się z ustawioną temperaturą i mieszaniem — nie trzeba przy tym stać i nie przywrze do dna, bo ktoś odszedł na dziesięć minut. Zimą przydaje się to samo przy zupach: nastawiasz i wracasz do gotowego, a nie do pilnowania.",
      ],
    },
    {
      id: "goscie-w-domu",
      heading: "Kiedy gotowanie jest częścią pracy",
      paragraphs: [
        "W powiecie żywieckim bardzo wiele domów przyjmuje gości — pokoje, agroturystyka, kwatery przy stokach. Gotowanie przestaje wtedy być prywatną sprawą i staje się częścią pracy, a liczy się co innego niż w rodzinnej kuchni: powtarzalność, przygotowanie z wyprzedzeniem i to, żeby śniadanie dla ośmiu osób nie zjadało całego poranka.",
        "Jeżeli tak u Was jest, powiedz o tym przy umawianiu — prezentacja wygląda wtedy inaczej. Rozmawiamy o tym, co da się zrobić wieczorem i podać rano, o większych porcjach bez większego pilnowania i o tym, czego urządzenie nie zrobi, bo takie rzeczy też są.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żywcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość. Ujsoły czy Rajcza to zupełnie inny kierunek niż Węgierska Górka, a zimą dochodzi jeszcze pogoda — dlatego w górskich wsiach umawiam się z zapasem czasu. Na cenę nie wpływa to nigdy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żywcu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla żywieckiej rodziny",
      paragraphs: [
        "W dolinach powiatu rodziny bywają większe, a obiad wciąż jest jednym wspólnym posiłkiem, nie serią talerzy. Ktoś jednak musi go przygotować na konkretną godzinę — i zwykle jest to ta sama osoba.",
        "Thermomix zdejmuje z tego stanie przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym. Większa porcja nie oznacza większego pilnowania, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których dzielnic Żywca dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Zabłocie",
    "Sporysz",
    "Koleby",
    "Moszczanica",
    "Oczków",
    "Zadziele",
    "Kocurów",
    "Rudza",
    "Podlesie",
  ],

  nearbyHeading: "Cały powiat żywiecki",
  nearbyParagraphs: [
    "Węgierska Górka, Milówka, Rajcza, Ujsoły, Jeleśnia, Koszarawa, Świnna, Łodygowice, Czernichów i Gilowice — jeżdżę wszędzie na tych samych zasadach, także zimą.",
  ],
  nearbyTowns: [
    "Węgierska Górka",
    "Milówka",
    "Rajcza",
    "Jeleśnia",
    "Ujsoły",
    "Łodygowice",
    "Świnna",
    "Gilowice",
    "Bielsko-Biała",
  ],

  about: blokOMnie("do Żywca", "w Żywcu i całym powiecie żywieckim", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żywca bez dodatkowej opłaty?",
      answer:
        "Tak, do Żywca i do całego powiatu żywieckiego, łącznie z górskimi wsiami. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Żywcu"),
    {
      question: "Czy Thermomix nadaje się do przetworów?",
      answer:
        "Tak i to jest tutaj jeden z najczęstszych powodów zakupu. Przeciery, dżemy i powidła gotują się z ustawioną temperaturą, czasem i mieszaniem, które nie pozwala przywrzeć do dna — czyli bez tej części, przez którą przetwory zajmują całą sobotę. Chętnie pokażę to na tym, co akurat masz.",
    },
    {
      question: "Mieszkam w górskiej wsi, daleko od Żywca — czy przyjedziesz?",
      answer:
        "Przyjadę i nie doliczam za to ani złotówki. Proszę tylko o zapas czasu przy umawianiu, zwłaszcza zimą — wolę uczciwie powiedzieć „będę między siedemnastą a osiemnastą” niż obiecać godzinę, której nie dotrzymam.",
    },
  ],

  geo: { lat: 49.6853, lng: 19.1925 },
};
