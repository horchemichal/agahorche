/**
 * REJESTR STRON DZIELNIC.
 *
 * Kolejność w tablicy nie ma znaczenia dla routingu (szukamy po slugu),
 * ale trzymam ją mniej więcej według wielkości i wagi SEO — od Nowej Huty
 * i Bieżanowa po dzielnice peryferyjne. Ułatwia to przegląd, gdy trzeba
 * zdecydować, którą stronę pogłębić jako następną.
 *
 * Zasada dopisywania nowej dzielnicy: patrz komentarz w `typy.ts`.
 * Krótko: jeżeli nie da się napisać trzech sekcji prawdziwych TYLKO dla
 * tej dzielnicy, nie dopisujemy jej tutaj.
 */

import type { DistrictContent } from "./typy";

import { KRAKOW_NOWA_HUTA } from "./nowa-huta";
import { KRAKOW_BIEZANOW_PROKOCIM } from "./biezanow-prokocim";
import { KRAKOW_DEBNIKI } from "./debniki";
import { KRAKOW_PRADNIK_BIALY } from "./pradnik-bialy";
import { KRAKOW_PODGORZE_DUCHACKIE } from "./podgorze-duchackie";
import { KRAKOW_PODGORZE } from "./podgorze";
import { KRAKOW_BIENCZYCE } from "./bienczyce";
import { KRAKOW_MISTRZEJOWICE } from "./mistrzejowice";
import { KRAKOW_CZYZYNY } from "./czyzyny";
import { KRAKOW_STARE_MIASTO } from "./stare-miasto";
import { KRAKOW_KROWODRZA } from "./krowodrza";
import { KRAKOW_GRZEGORZKI } from "./grzegorzki";
import { KRAKOW_PRADNIK_CZERWONY } from "./pradnik-czerwony";
import { KRAKOW_BRONOWICE } from "./bronowice";
import { KRAKOW_ZWIERZYNIEC } from "./zwierzyniec";
import { KRAKOW_LAGIEWNIKI_BOREK_FALECKI } from "./lagiewniki-borek-falecki";
import { KRAKOW_SWOSZOWICE } from "./swoszowice";
import { KRAKOW_WZGORZA_KRZESLAWICKIE } from "./wzgorza-krzeslawickie";

export type { DistrictContent, DistrictSection } from "./typy";

const DISTRICT_CONTENT: DistrictContent[] = [
  KRAKOW_NOWA_HUTA,
  KRAKOW_BIEZANOW_PROKOCIM,
  KRAKOW_DEBNIKI,
  KRAKOW_PRADNIK_BIALY,
  KRAKOW_PODGORZE_DUCHACKIE,
  KRAKOW_PODGORZE,
  KRAKOW_BIENCZYCE,
  KRAKOW_MISTRZEJOWICE,
  KRAKOW_CZYZYNY,
  KRAKOW_STARE_MIASTO,
  KRAKOW_KROWODRZA,
  KRAKOW_GRZEGORZKI,
  KRAKOW_PRADNIK_CZERWONY,
  KRAKOW_BRONOWICE,
  KRAKOW_ZWIERZYNIEC,
  KRAKOW_LAGIEWNIKI_BOREK_FALECKI,
  KRAKOW_SWOSZOWICE,
  KRAKOW_WZGORZA_KRZESLAWICKIE,
];

/** Treść dzielnicy po slugu (`krakow-nowa-huta`) albo `undefined`. */
export function getDistrictContent(slug: string): DistrictContent | undefined {
  return DISTRICT_CONTENT.find((d) => d.slug === slug);
}

/** Treść dzielnicy po ścieżce URL (`/thermomix/krakow/nowa-huta`). */
export function getDistrictByPath(urlPath: string): DistrictContent | undefined {
  return DISTRICT_CONTENT.find((d) => d.urlPath === urlPath);
}

/** Wszystkie dzielnice danego miasta — do bloku linków na stronie miasta. */
export function getDistrictsForCity(citySlug: string): DistrictContent[] {
  return DISTRICT_CONTENT.filter((d) => d.miasto.slug === citySlug);
}

/** Slugi dzielnic z własną treścią — m.in. przy decyzji o indeksowaniu. */
export const DISTRICTS_WITH_CONTENT = DISTRICT_CONTENT.map((d) => d.slug);

export { DISTRICT_CONTENT };
