import type { CityContent } from "../city-content";

import { ALWERNIA } from "./alwernia";
import { BOCHNIA } from "./bochnia";
import { BRZESKO } from "./brzesko";
import { CHELMEK } from "./chelmek";
import { CHRZANOW } from "./chrzanow";
import { DOBRA } from "./dobra";
import { DRWINIA } from "./drwinia";
import { JODLOWNIK } from "./jodlownik";
import { KAMIENICA } from "./kamienica";
import { LAPANOW } from "./lapanow";
import { LASKOWA } from "./laskowa";
import { LIBIAZ } from "./libiaz";
import { LIPNICA_MUROWANA } from "./lipnica-murowana";
import { LUKOWICA } from "./lukowica";
import { MSZANA_DOLNA } from "./mszana-dolna";
import { OSWIECIM } from "./oswiecim";
import { RZEZAWA } from "./rzezawa";
import { SLOPNICE } from "./slopnice";
import { TRZCIANA } from "./trzciana";
import { TRZEBINIA } from "./trzebinia";
import { TYMBARK } from "./tymbark";
import { ZEGOCINA } from "./zegocina";
import { KRZESZOWICE } from "./krzeszowice";
import { MICHALOWICE } from "./michalowice";
import { MOGILANY } from "./mogilany";
import { SWIATNIKI_GORNE } from "./swiatniki-gorne";
import { ZABIERZOW } from "./zabierzow";
import { ZIELONKI } from "./zielonki";
import { DOBCZYCE } from "./dobczyce";
import { GDOW } from "./gdow";
import { LIMANOWA } from "./limanowa";
import { MYSLENICE } from "./myslenice";
import { NOWY_SACZ } from "./nowy-sacz";
import { NOWY_WISNICZ } from "./nowy-wisnicz";
import { PROSZOWICE } from "./proszowice";
import { TARNOW } from "./tarnow";
import { WOJNICZ } from "./wojnicz";
import { ZAKLICZYN } from "./zakliczyn";
import { OLKUSZ } from "./olkusz";
import { WOLBROM } from "./wolbrom";
import { KLUCZE } from "./klucze";
import { BUKOWNO } from "./bukowno";
import { BOLESLAW } from "./boleslaw";
import { TRZYCIAZ } from "./trzyciaz";

/**
 * Miasta, których treść powstała po pierwszej trójce satelitów Krakowa.
 * Każde ma własny plik, bo `city-content.ts` przy dwunastu kolejnych
 * miastach urósłby do kilku tysięcy linii i przestał być czytelny.
 *
 * Kolejność alfabetyczna, nie „ważnościowa” — o kolejności wyświetlania
 * decydują dane lokalizacji (`seoPriority`), a nie ta tablica.
 */
export const MIASTA_DOPISANE: CityContent[] = [
  ALWERNIA,
  BOCHNIA,
  BRZESKO,
  CHELMEK,
  CHRZANOW,
  DOBRA,
  DRWINIA,
  JODLOWNIK,
  KAMIENICA,
  LAPANOW,
  LASKOWA,
  LIBIAZ,
  LIPNICA_MUROWANA,
  LUKOWICA,
  MSZANA_DOLNA,
  OSWIECIM,
  RZEZAWA,
  SLOPNICE,
  TRZCIANA,
  TRZEBINIA,
  TYMBARK,
  ZEGOCINA,
  KRZESZOWICE,
  MICHALOWICE,
  MOGILANY,
  SWIATNIKI_GORNE,
  ZABIERZOW,
  ZIELONKI,
  DOBCZYCE,
  GDOW,
  LIMANOWA,
  MYSLENICE,
  NOWY_SACZ,
  NOWY_WISNICZ,
  PROSZOWICE,
  TARNOW,
  WOJNICZ,
  ZAKLICZYN,
  OLKUSZ,
  WOLBROM,
  KLUCZE,
  BUKOWNO,
  BOLESLAW,
  TRZYCIAZ,
];
