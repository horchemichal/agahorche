"use server";

import { redirect } from "next/navigation";
import { signOutAdmin } from "@/lib/auth/admin-auth";

export async function logoutAction(): Promise<void> {
  await signOutAdmin();
  redirect("/admin/login");
}
