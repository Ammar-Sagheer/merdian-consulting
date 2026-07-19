import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/app/_lib/supabase-server";
import AdminNavbar from "@/app/_components/admin/AdminNavbar";

export default async function AdminLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");

  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-neutral-50">{children}</div>;
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <AdminNavbar />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
