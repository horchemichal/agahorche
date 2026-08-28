import type { CityContent } from "../city-content";

import { ALWERNIA } from "./alwernia";
import { BOCHNIA } from "./bochnia";
import { BRZESKO } from "./brzesko";
import { CHELMEK } from "./chelmek";
import { CHRZANOW } from "./chrzanow";
import { DRWINIA } from "./drwinia";
import { LAPANOW } from "./lapanow";
import { LIBIAZ } from "./libiaz";
import { LIPNICA_MUROWANA } from "./lipnica-murowana";
import { OSWIECIM } from "./oswiecim";
import { RZEZAWA } from "./rzezawa";
import { TRZCIANA } from "./trzciana";
import { TRZEBINIA } from "./trzebinia";
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
  DRWINIA,
  LAPANOW,
  LIBIAZ,
  LIPNICA_MUROWANA,
  OSWIECIM,
  RZEZAWA,
  TRZCIANA,
  TRZEBINIA,
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
];
