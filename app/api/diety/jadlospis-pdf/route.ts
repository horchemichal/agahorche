import { NextResponse, type NextRequest } from "next/server";
import { renderJadlospisPdf } from "@/lib/diets/jadlospis-pdf";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";

/**
 * `GET /api/diety/jadlospis-pdf?dieta=<slug>` — bezpłatny jadłospis na
 * jeden dzień dla wybranej diety (sierpień 2026). GET z query stringiem, bo
 * to wyłącznie odczyt publicznych danych renderowany po stronie serwera —
 * dzięki temu zwykły `<a download>` wystarczy, bez JS-owego POST-a
 * (identycznie jak /api/diety/shopping-list-pdf).
 *
 * Slug jest jedynym wejściem i zawsze rozwiązywany po stronie serwera na
 * kategorię z data/diets/categories.ts, więc odpowiedź nie może zawierać
 * niczego spoza treści już opublikowanych na stronie.
 */
export async function GET(request: NextRequest) {
  const clientKey = getClientKey(request.headers);
  const { allowed } = checkRateLimit(`diety-jadlospis:${clientKey}`, { limit: 30, windowMs: 10 * 60 * 1000 });
  if (!allowed) {
    return NextResponse.json({ success: false, error: "Zbyt wiele prób. Spróbuj ponownie za chwilę." }, { status: 429 });
  }

  const slug = request.nextUrl.searchParams.get("dieta");
  if (!slug) {
    return NextResponse.json({ success: false, error: "Brak parametru dieta." }, { status: 400 });
  }

  const result = await renderJadlospisPdf(slug);
  if (!result) {
    return NextResponse.json(
      { success: false, error: "Dla tej diety nie ma jeszcze gotowego jadłospisu do pobrania." },
      { status: 404 },
    );
  }

  return new NextResponse(Buffer.from(result.bytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${result.fileName}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
