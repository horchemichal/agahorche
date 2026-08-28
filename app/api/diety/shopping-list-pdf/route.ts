import { NextResponse, type NextRequest } from "next/server";
import { renderShoppingListPdf } from "@/lib/diets/shopping-list-pdf";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";

/**
 * `GET /api/diety/shopping-list-pdf?planId=...&checked=a,b,c` (spec §17,
 * ETAP 6). Query-string GET rather than POST — this only ever reads
 * already-public plan data server-side and renders it; nothing is written,
 * so a plain link/`<a download>` works without JS having to POST first.
 * `checked` is optional and purely cosmetic (strikethrough markers in the
 * PDF) — never trusted for anything beyond that.
 */
export async function GET(request: NextRequest) {
  const clientKey = getClientKey(request.headers);
  const { allowed } = checkRateLimit(`diety-pdf:${clientKey}`, { limit: 20, windowMs: 10 * 60 * 1000 });
  if (!allowed) {
    return NextResponse.json({ success: false, error: "Zbyt wiele prób. Spróbuj ponownie za chwilę." }, { status: 429 });
  }

  const planId = request.nextUrl.searchParams.get("planId");
  if (!planId) {
    return NextResponse.json({ success: false, error: "Brak parametru planId." }, { status: 400 });
  }
  const checkedItems = (request.nextUrl.searchParams.get("checked") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const pdfBytes = await renderShoppingListPdf(planId, checkedItems);
  if (!pdfBytes) {
    return NextResponse.json({ success: false, error: "Nie znaleziono listy zakupów dla podanego planu." }, { status: 404 });
  }

  return new NextResponse(Buffer.from(pdfBytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="lista-zakupow-${planId}.pdf"`,
      "Cache-Control": "private, max-age=0, must-revalidate",
    },
  });
}
