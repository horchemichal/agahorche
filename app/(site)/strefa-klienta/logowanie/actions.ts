"use server";

import { redirect } from "next/navigation";
import { signInClient } from "@/lib/auth/client-auth";

export type ClientLoginState = { error: string | null };

export async function clientLoginAction(_prevState: ClientLoginState, formData: FormData): Promise<ClientLoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/strefa-klienta");

  const result = await signInClient(email, password);
  if (!result.ok) {
    return { error: result.error };
  }

  redirect(next.startsWith("/strefa-klienta") ? next : "/strefa-klienta");
}
