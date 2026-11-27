import { NextResponse } from "next/server";
import { CIASTKO_RATY, CIASTKO_RATY_WIEK_S, hasloRatPoprawne, tokenDostepuRat } from "@/lib/raty/dostep";
import { ipZadania, przekroczonyLimit } from "@/lib/raty/limit";

/** POST { haslo } — poprawne hasło ustawia ciasteczko dostępu do /ratyagnieszka. */
export async function POST(request: Request) {
  if (przekroczonyLimit(`haslo:${ipZadania(request)}`, 10, 15 * 60 * 1000)) {
    return NextResponse.json({ ok: false, blad: "Za dużo prób. Spróbuj za kilkanaście minut." }, { status: 429 });
  }

  const body = (await request.json().catch(() => null)) as { haslo?: unknown } | null;
  if (!hasloRatPoprawne(body?.haslo)) {
    return NextResponse.json({ ok: false, blad: "Nieprawidłowe hasło." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(CIASTKO_RATY, tokenDostepuRat(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: CIASTKO_RATY_WIEK_S,
  });
  return res;
}
