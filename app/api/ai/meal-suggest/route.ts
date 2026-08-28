import { NextResponse } from "next/server";
import { isAiConfigured } from "@/lib/ai/client";

/**
 * "Co dziś ugotować?" / "Moja lodówka" endpoint (spec §17/§18). Architecture
 * only: validates input shape and returns 503 until both the AI provider
 * AND a real, rights-cleared recipe dataset exist — spec §17 explicitly
 * forbids linking to a recipe the user doesn't have legal access to, so
 * this cannot go live with a fabricated recipe index.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!Array.isArray(body?.ingredients)) {
    return NextResponse.json(
      { success: false, error: "Podaj listę składników (ingredients: string[])." },
      { status: 400 },
    );
  }

  if (!isAiConfigured()) {
    return NextResponse.json(
      { success: false, error: "Funkcja podpowiedzi posiłków nie jest jeszcze aktywna." },
      { status: 503 },
    );
  }

  // TODO: implement once (a) AI provider is configured and (b) a real,
  // rights-cleared recipe dataset exists to match suggestions against.
  return NextResponse.json(
    { success: false, error: "Funkcja w budowie." },
    { status: 501 },
  );
}
