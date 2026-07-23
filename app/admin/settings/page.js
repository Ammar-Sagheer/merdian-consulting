import Link from "next/link";
import { getSiteSettings } from "@/app/_lib/data-service";
import SettingsForm from "@/app/_components/admin/SettingsForm";
import AdminFadeIn from "@/app/_components/admin/AdminFadeIn";
import { SITE_CONFIG } from "@/app/_lib/siteConfig";

export default async function AdminSettingsPage() {
  const settings = await getSiteSettings();

  const initialSettings = settings || {
    contact_email: SITE_CONFIG.contact.email,
    contact_phone: SITE_CONFIG.contact.phone,
    contact_address: SITE_CONFIG.contact.address,
  };

  return (
    <AdminFadeIn>
      <div data-admin-fade className="mb-6">
        <Link
          href="/admin"
          className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50"
        >
          <span aria-hidden="true">←</span> Back to leads
        </Link>
      </div>

      <h1
        className="mb-6 text-2xl font-semibold text-neutral-900"
        data-admin-fade
      >
        Settings
      </h1>
      <div data-admin-fade>
        <SettingsForm initialSettings={initialSettings} />
      </div>
    </AdminFadeIn>
  );
}
