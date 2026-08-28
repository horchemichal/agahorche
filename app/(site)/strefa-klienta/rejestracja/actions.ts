"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { clientRegisterSchema } from "@/lib/validation/client-auth";
import { registerClient } from "@/lib/auth/client-auth";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";

export type ClientRegisterState = { error: string | null };

export async function clientRegisterAction(
  _prevState: ClientRegisterState,
  formData: FormData,
): Promise<ClientRegisterState> {
  const headerList = await headers();
  const clientKey = getClientKey(headerList);
  const { allowed } = checkRateLimit(`client-register:${clientKey}`, { limit: 5, windowMs: 10 * 60 * 1000 });
  if (!allowed) {
    return { error: "Zbyt wiele prób. Spróbuj ponownie za kilka minut." };
  }

  const parsed = clientRegisterSchema.safeParse({
    displayName: formData.get("displayName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    consentProcessing: formData.get("consentProcessing") === "on",
    consentMarketing: formData.get("consentMarketing") === "on",
    website: formData.get("website"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (parsed.data.website) {
    redirect("/strefa-klienta");
  }

  const result = await registerClient({
    email: parsed.data.email,
    password: parsed.data.password,
    displayName: parsed.data.displayName,
    phone: parsed.data.phone,
    consentProcessing: parsed.data.consentProcessing,
    consentMarketing: parsed.data.consentMarketing ?? false,
  });

  if (!result.ok) {
    return { error: result.error };
  }

  redirect("/strefa-klienta");
}
