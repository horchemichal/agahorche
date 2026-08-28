"use server";

import { redirect } from "next/navigation";
import { signInAdmin } from "@/lib/auth/admin-auth";

export type LoginState = { error: string | null };

export async function loginAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  const result = await signInAdmin(email, password);
  if (!result.ok) {
    return { error: result.error };
  }

  redirect(next.startsWith("/admin") ? next : "/admin");
}
