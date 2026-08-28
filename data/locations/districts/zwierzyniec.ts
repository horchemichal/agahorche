import type { DistrictContent } from "./typy";

/**
 * ZWIERZYNIEC (VII) — dzielnica willowa i najbardziej zielona część
 * lewobrzeżnego Krakowa.
 *
 * Fakty potwierdzone i użyte:
 * — obszary: Salwator, Wola Justowska, Półwsie Zwierzynieckie,
 *   Przegorzały, Bielany, Olszanica, Chełm, Zwierzyniec (dawna wieś),
 * — Wola Justowska to zabudowa willowa — jedna z najdroższych okolic
 *   mieszkaniowych w Krakowie,
 * — Las Wolski, kopiec Kościuszki, klasztor na Bielanach, Błonia
 *   jako punkty orientacyjne,
 * — rejon Salwatora objęty strefą płatnego parkowania; dalsze części
 *   dzielnicy nie,
 * — Przegorzały i Bielany: wąskie, strome, kręte ulice po zboczach,
 * — dojazd: ul. Królowej Jadwigi, ks. Józefa, most Zwierzyniecki.
 *
 * Nie podaję numerów podstref parkingowych — zmieniają się i nie mam
 * ich potwierdzonych dla tej dzielnicy.
 */
export const KRAKOW_ZWIERZYNIEC: DistrictContent = {
  slug: "krakow-zwierzyniec",
  urlPath: "/thermomix/krakow/zwierzyniec",
  nazwa: "Zwierzyniec",
  miejscownik: "Zwierzyńcu",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Zwierzyniec — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Zwierzyniec — przedstawiciel w Krakowie",
  seoDescription:
    "Thermomix na Zwierzyńcu: bezpłatna prezentacja TM7 u Ciebie w kuchni — Salwator, Wola Justowska, Przegorzały, Bielany. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam na Salwator, Wolę Justowską, Półwsie Zwierzynieckie, do Przegorzał i na Bielany. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna.",

  osiedla: [
    "Salwator",
    "Wola Justowska",
    "Półwsie Zwierzynieckie",
    "Przegorzały",
    "Bielany",
    "Olszanica",
    "Chełm",
    "Zwierzyniec",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Duże kuchnie — i inne pytania niż w bloku",
      paragraphs: [
        "Wola Justowska to zabudowa willowa, a Przegorzały, Bielany i Olszanica to w większości domy. Kuchnie są tu przestronne, często z wyspą albo półwyspem, i miejsce na blacie nie jest tematem rozmowy. Wyjątkiem jest Salwator i część Półwsia, gdzie stoją kamienice i mniejsze bloki.",
        "Ta różnica przekłada się wprost na to, o czym rozmawiamy. W bloku pierwsze pytanie brzmi zwykle „gdzie to postawię”. Tutaj pytanie brzmi „po co mi to, skoro mam wszystko”. Bo w takiej kuchni zwykle stoi już robot planetarny, blender kielichowy i porządny mikser.",
        "Odpowiedź jest uczciwa: nie po to, żeby dołożyć czwarte urządzenie, tylko żeby część z tych trzech przestała być potrzebna — a przede wszystkim, żeby gotowanie przestało wymagać stania przy garnku. Sprzęt, który tylko miksuje, nie pilnuje temperatury i nie miesza przez czterdzieści minut. To jest cała różnica i pokazuję ją na konkretnym daniu, nie na slajdzie.",
      ],
    },
    {
      id: "dojazd",
      heading: "Wąsko, stromo i nie zawsze da się podjechać pod dom",
      paragraphs: [
        "Przegorzały i Bielany leżą na zboczach, a ulice są tam wąskie, kręte i miejscami strome. Zimą albo po deszczu podjechanie pod sam adres bywa niemożliwe i część drogi robi się pieszo. Dla mnie to znaczy tylko tyle, że przy takich adresach rezerwuję więcej czasu i biorę urządzenie w jednym kursie.",
        "Rejon Salwatora jest objęty strefą płatnego parkowania — dalej już nie. Dla Ciebie to bez znaczenia: prezentacja i dojazd są bezpłatne, a postój to mój koszt.",
        "Jedyne, co realnie pomaga, to informacja przy umawianiu: czy da się wjechać na posesję albo czy jest miejsce przed bramą. Jeśli nie ma, po prostu wyjeżdżam wcześniej.",
      ],
    },
    {
      id: "goscie",
      heading: "Dom to zwykle więcej osób przy stole",
      paragraphs: [
        "W tej części Krakowa spotkania częściej niż gdzie indziej odbywają się przy większym stole i z kimś jeszcze — sąsiadką, siostrą, koleżanką. To dobry układ, bo pytania padają różne i rozmowa jest ciekawsza.",
        "Gotujemy wtedy zwykle coś, co realnie ląduje u kogoś na stole w weekend, a nie efektowny popis. Zupa, danie główne, coś słodkiego, jeśli starczy czasu — i przy okazji widać, jak urządzenie zachowuje się przy większych porcjach.",
        "Jeśli chcesz zaprosić kogoś na prezentację, powiedz przy umawianiu, ile osób będzie. Wtedy dobiorę przepisy pod tę liczbę i wezmę więcej składników.",
      ],
    },
  ],

  faq: [
    {
      question: "Mam już robot planetarny i blender. Czy prezentacja ma sens?",
      answer:
        "Tym bardziej. Zobaczysz konkretnie, co z tych sprzętów Thermomix zastępuje, a czego nie — i sama ocenisz, czy to dla Ciebie zmiana warta pieniędzy. Nie namawiam do dokładania czwartego urządzenia do szafki.",
    },
    {
      question: "Czy dojeżdżasz do Przegorzał i na Bielany?",
      answer:
        "Tak, do wszystkich części dzielnicy. Przy adresach na zboczach warto tylko powiedzieć, czy da się podjechać pod dom — resztę ogarniam sama.",
    },
    {
      question: "Czy mogę zaprosić na prezentację znajome?",
      answer:
        "Jak najbardziej i często tak to wygląda. Powiedz tylko przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła odpowiednio więcej składników.",
    },
  ],

  geo: { lat: 50.0553, lng: 19.8894 },
};
