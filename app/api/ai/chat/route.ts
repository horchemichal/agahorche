import { NextResponse } from "next/server";
import { isAiConfigured, requestAiCompletion } from "@/lib/ai/client";

/**
 * Aga AI chat endpoint (spec §16/§34). Architecture only — returns 503
 * with a clear reason until AI_API_KEY is configured and the prompt/safety
 * layer for cooking questions is designed. Never falls back to canned or
 * fabricated answers.
 */
export async function POST(request: Request) {
  if (!isAiConfigured()) {
    return NextResponse.json(
      { success: false, error: "Aga AI nie jest jeszcze skonfigurowane." },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);
  if (!body?.prompt) {
    return NextResponse.json({ success: false, error: "Brak treści pytania." }, { status: 400 });
  }

  try {
    const result = await requestAiCompletion({ prompt: body.prompt });
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "AI error" },
      { status: 500 },
    );
  }
}
