/**
 * AI architecture layer (spec §34). Provides a single, provider-agnostic
 * entry point for every future AI feature (Aga AI chat, meal suggestions,
 * SEO recommendations, FAQ generation) so swapping or adding a model
 * provider later touches this file only.
 *
 * Nothing here calls a real model yet — `isAiConfigured()` gates every
 * caller so the app degrades to an honest "not available yet" state
 * instead of fabricating AI output (spec §34: "AI NIE może automatycznie
 * publikować... bez kontroli" — the stronger, more conservative reading of
 * that rule applied here is: don't fake it either).
 */

export interface AiCompletionRequest {
  system?: string;
  prompt: string;
  maxTokens?: number;
}

export interface AiCompletionResult {
  text: string;
  model: string;
}

export function isAiConfigured(): boolean {
  return Boolean(process.env.AI_API_KEY);
}

export async function requestAiCompletion(
  request: AiCompletionRequest,
): Promise<AiCompletionResult> {
  void request;
  if (!isAiConfigured()) {
    throw new Error(
      "AI provider not configured. Set AI_API_KEY (and AI_MODEL) before calling requestAiCompletion().",
    );
  }

  // TODO: wire the real provider call (Anthropic/OpenAI/etc.) once
  // AI_API_KEY is provisioned. Intentionally not implemented against a
  // specific vendor SDK yet so the choice isn't locked in prematurely.
  throw new Error("AI provider integration not implemented yet.");
}
