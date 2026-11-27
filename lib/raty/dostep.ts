import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * OŚ PLIKU
 * Hasło do ukrytej strony /ratyagnieszka.
 *
 * Hasło sprawdza WYŁĄCZNIE serwer — w kodzie przeglądarki go nie ma, więc
 * „Pokaż źródło” go nie zdradzi. Po poprawnym haśle przeglądarka dostaje
 * ciasteczko httpOnly (2 h) z podpisem HMAC; bez niego API zapisu odmawia.
 *
 * Zmiana hasła: zmienna RATY_HASLO w .env (wtedy wszystkie stare ciasteczka
 * przestają działać, bo podpis zależy od hasła).
 */

const HASLO = process.env.RATY_HASLO || "ratyagnieszka";

export const CIASTKO_RATY = "raty_dostep";
export const CIASTKO_RATY_WIEK_S = 60 * 60 * 2;

function rowne(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function hasloRatPoprawne(podane: unknown): boolean {
  return typeof podane === "string" && rowne(podane.trim(), HASLO);
}

export function tokenDostepuRat(): string {
  return createHmac("sha256", HASLO).update("raty-dostep-v1").digest("hex");
}

export function maDostepDoRat(wartoscCiastka: string | undefined): boolean {
  return !!wartoscCiastka && rowne(wartoscCiastka, tokenDostepuRat());
}
