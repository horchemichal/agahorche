"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { AdminNavList } from "@/components/admin/admin-nav-list";
import { MenuIcon, CloseIcon, LogoutIcon } from "@/components/admin/icons";
import { ADMIN_NAV } from "@/data/admin-nav";
import { cn } from "@/lib/utils";
import type { AdminProfile } from "@/types/admin";

/**
 * Desktop: persistent sidebar + content column.
 * Mobile: hamburger + full-height drawer (spec §16 UX requirement — sidebar
 * on desktop, hamburger+drawer on mobile). One client component owns the
 * drawer's open state so the topbar button and the drawer itself stay in
 * sync without prop-drilling through server layouts.
 */
export function AdminShell({
  admin,
  logoutAction,
  children,
}: {
  admin: AdminProfile;
  logoutAction: () => Promise<void>;
  children: ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const activeItem = ADMIN_NAV.find((item) => (item.exact ? pathname === item.href : pathname.startsWith(item.href)));

  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-neutral-0 lg:flex lg:flex-col">
        <div className="flex h-16 items-center border-b border-border px-5">
          <Link href="/admin" className="font-display text-lg text-neutral-900">
            Aga Admin
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-3" aria-label="Nawigacja panelu">
          <AdminNavList />
        </nav>
        <div className="border-t border-border p-3">
          <AdminAccountFooter admin={admin} logoutAction={logoutAction} />
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          drawerOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-neutral-900/40 transition-opacity duration-200",
            drawerOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-neutral-0 shadow-xl transition-transform duration-200",
            drawerOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-border px-5">
            <span className="font-display text-lg text-neutral-900">Aga Admin</span>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Zamknij menu"
              className="rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-3" aria-label="Nawigacja panelu (mobile)">
            <AdminNavList onNavigate={() => setDrawerOpen(false)} />
          </nav>
          <div className="border-t border-border p-3">
            <AdminAccountFooter admin={admin} logoutAction={logoutAction} />
          </div>
        </div>
      </div>

      {/* Content column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-neutral-0/95 px-4 backdrop-blur sm:px-6">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Otwórz menu"
            className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 lg:hidden"
          >
            <MenuIcon />
          </button>
          <h1 className="truncate text-sm font-medium text-neutral-500">
            {activeItem?.label ?? "Aga Admin"}
          </h1>
        </header>
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}

function AdminAccountFooter({
  admin,
  logoutAction,
}: {
  admin: AdminProfile;
  logoutAction: () => Promise<void>;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
        {admin.email.charAt(0).toUpperCase()}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-neutral-900">{admin.displayName}</p>
        <p className="truncate text-xs text-muted">{admin.email}</p>
      </div>
      <form action={logoutAction}>
        <button
          type="submit"
          aria-label="Wyloguj się"
          title="Wyloguj się"
          className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
        >
          <LogoutIcon width={18} height={18} />
        </button>
      </form>
    </div>
  );
}
