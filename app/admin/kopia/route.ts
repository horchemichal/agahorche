import { NextResponse, type NextRequest } from "next/server";
import { readFile, stat } from "node:fs/promises";
import { getCurrentAdmin } from "@/lib/auth/admin-auth";
import { sciezkaKopii } from "@/lib/admin/kopie";

/**
 * OŚ PLIKU
 * Pobranie archiwum kopii zapasowej — WYŁĄCZNIE dla zalogowanej Agi.
 *
 * W archiwum jest `.env` z sekretami i zrzut bazy z danymi klientek, więc
 * to jest najbardziej wrażliwy adres w całym serwisie. Stąd trzy rzeczy:
 *
 * 1. `getCurrentAdmin()` zamiast `requireAdmin()`. Ta druga robi
 *    `redirect()` na stronę logowania, co w trasie pobierania skończyłoby
 *    się ściągnięciem HTML-a logowania zapisanego jako .tar.gz. Tu ma
 *    polecieć czyste 404 — bez podpowiedzi, że plik w ogóle istnieje.
 * 2. Nazwa pliku jest sprawdzana wzorcem w lib/admin/kopie.ts, a potem
 *    jeszcze raz weryfikowana jako ścieżka. Bez tego `?plik=../../.env`
 *    oddałby dowolny plik z kontenera.
 * 3. `no-store` — kopia nie ma prawa wylądować w pamięci podręcznej
 *    przeglądarki ani żadnego pośrednika.
 */
export async function GET(request: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) return new NextResponse("Not found", { status: 404 });

  const nazwa = request.nextUrl.searchParams.get("plik") ?? "";
  const sciezka = sciezkaKopii(nazwa);
  if (!sciezka) return new NextResponse("Not found", { status: 404 });

  try {
    const info = await stat(sciezka);
    if (!info.isFile()) return new NextResponse("Not found", { status: 404 });

    const bajty = await readFile(sciezka);
    return new NextResponse(new Uint8Array(bajty), {
      status: 200,
      headers: {
        "Content-Type": "application/gzip",
        "Content-Length": String(info.size),
        "Content-Disposition": `attachment; filename="${nazwa}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
