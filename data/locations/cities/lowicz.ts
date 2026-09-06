import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * ŁOWICZ — miasto nad Bzurą, stolica Księstwa Łowickiego, znane z bardzo
 * żywej kultury ludowej: pasiaków, wycinanek i procesji Bożego Ciała,
 * na którą przyjeżdżają ludzie z całej Polski. Okolica jest rejonem
 * mleczarskim, a nazwa miasta funkcjonuje w kraju jako marka nabiału.
 *
 * KĄT: mleko. Świadomie NIE piszę o strojach i procesji — o folklorze,
 * który się przeżywa, a nie pokazuje, napisałam już przy Bukowinie
 * Tatrzańskiej i drugi raz byłoby to powtórzeniem cudzą kosztem.
 * Zostaje temat, który jest tu równie miejscowy, a znacznie bardziej
 * kuchenny: NABIAŁ ROBIONY W DOMU. I jest to jeden z niewielu tematów,
 * w których muszę powiedzieć „to nie jest maszyna do sera" — bo
 * urządzenie utrzymuje temperaturę, ale nie zastępuje ani czasu,
 * ani kultur bakterii, ani prasy.
 *
 * WARUNEK UCZCIWOŚCI, KTÓREGO NIE WOLNO USUNĄĆ: zdanie o tym, że dobry
 * twaróg z tutejszej mleczarni bywa lepszy i tańszy niż robiony w domu,
 * i że nie ma sensu kupować urządzenia po to, żeby go zastąpić.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Łowicz jest znany z kultury ludowej: pasiaków, wycinanek i procesji
 *   Bożego Ciała,
 * — okolica jest rejonem mleczarskim, a nazwa miasta jest w Polsce
 *   rozpoznawalna jako marka nabiału,
 * — miasto leży nad Bzurą i było stolicą Księstwa Łowickiego.
 *
 * CZEGO NIE MA: przepisów na sery i jogurty z konkretnymi temperaturami
 * i czasami, twierdzeń zdrowotnych, opisu procesji.
 */
export const LOWICZ: CityContent = {
  slug: "lowicz",
  h1: "Thermomix Łowicz – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Łowicz — prezentacja i cena",
  seoDescription:
    "Thermomix w Łowiczu: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i okolica. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łowicz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łowiczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łowicza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Łowicz i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łowiczu – jak wygląda prezentacja?",
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
      id: "mleko-i-uczciwosc",
      heading: "Okolica mleczarska — i szczera rozmowa o robieniu nabiału w domu",
      paragraphs: [
        "Łowicz zna cała Polska z dwóch rzeczy: z pasiaków i procesji, o których nie będę pisać, bo tutejsi ludzie znają to lepiej ode mnie, oraz z nabiału — bo nazwa tego miasta stała się w kraju po prostu nazwą nabiału. Okolica jest mleczarska i to jest fakt, który widać na każdym kroku.",
        "Skoro więc piszę do miejsca, w którym mleko jest codziennością, muszę powiedzieć coś, czego sprzedawcy zwykle nie mówią. Na prezentacjach ludzie często pytają o domowy jogurt, twaróg i ser — i tak, da się je zrobić. Ale to nie jest maszyna do sera i nie zamierzam tego sugerować.",
        "Urządzenie robi jedną rzecz, która przy nabiale jest naprawdę pomocna: potrafi podgrzać mleko do zadanej temperatury i przy niej je utrzymać, zamiast zmuszać Was do stania z termometrem nad garnkiem. To wszystko. Nie zastąpi kultur bakterii, nie skróci czasu ukwaszania, nie odciśnie twarogu i nie zrobi dojrzewającego sera.",
        "A teraz zdanie, którego nie napisze żaden sprzedawca w mieście mleczarskim: w Łowiczu dobry twaróg kupicie tuż za rogiem, będzie świetny i najprawdopodobniej wyjdzie taniej, niż gdybyście robili go sami. Nie kupujcie tego urządzenia po to, żeby zastąpić tutejszą mleczarnię, bo to się nie broni ani smakiem, ani ceną.",
        "Ma za to sens tam, gdzie mleko jest składnikiem, a nie celem: budyń bez grudek i bez stania przy garnku, sos beszamelowy, który się nie przypala, masło ubite ze śmietanki, kremy do ciast. To są rzeczy, przy których pilnowanie garnka jest całą robotą — i to właśnie ono znika.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łowiczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym Łowiczem. Jeżdżę po okolicy, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łowiczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łowickiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często ta sama, która piecze na święta i na rodzinne okazje.",
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

  districtsHeading: "Do których części miasta i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Nowe Miasto",
    "Śródmieście",
    "Bratkowice",
    "Korabka",
    "Kostka",
    "Górki",
    "Zatorze",
    "Blich",
    "Przedmieście",
  ],

  nearbyHeading: "Poza Łowicz też przyjadę",
  nearbyParagraphs: [
    "Skierniewice, Głowno, Żychlin i Kutno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Skierniewice", "Głowno", "Żychlin", "Kutno", "Stryków"],

  about: blokOMnie("do Łowicza", "w Łowiczu i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łowicza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Łowiczu"),
    {
      question: "Czy zrobię w tym twaróg i jogurt?",
      answer:
        "Da się, ale powiem uczciwie: to nie jest maszyna do sera. Urządzenie podgrzeje mleko do zadanej temperatury i ją utrzyma — reszta to nadal kultury bakterii, czas i odciskanie. W Łowiczu dobry twaróg kupicie za rogiem i najpewniej taniej, więc nie kupujcie urządzenia po to, żeby go zastąpić.",
    },
    {
      question: "To do czego w takim razie przyda się przy nabiale?",
      answer:
        "Do rzeczy, w których mleko jest składnikiem: budyniu bez grudek, sosu beszamelowego, który się nie przypala, kremów do ciast, masła ubitego ze śmietanki. Wspólny mianownik jest jeden — nie trzeba stać przy garnku i mieszać.",
    },
  ],

  geo: { lat: 52.1064, lng: 19.945 },
};
