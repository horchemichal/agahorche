import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/auth/admin-auth";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Logowanie — Aga Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: PageProps<"/admin/login">) {
  const admin = await getCurrentAdmin();
  if (admin) {
    redirect("/admin");
  }

  const params = await searchParams;
  const nextParam = params?.next;
  const next = typeof nextParam === "string" && nextParam.startsWith("/admin") ? nextParam : "/admin";

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-sm rounded-lg border border-border bg-neutral-0 p-8 shadow-[var(--shadow-card)]">
        <h1 className="mb-1 font-display text-xl text-neutral-900">Aga Admin</h1>
        <p className="mb-6 text-sm text-muted">Zaloguj się, aby zarządzać serwisem.</p>
        <LoginForm next={next} />
      </div>
    </main>
  );
}
