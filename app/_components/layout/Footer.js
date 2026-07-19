import { SITE_CONFIG } from "@/app/_lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600">
        <p className="font-medium text-neutral-900">{SITE_CONFIG.firmName}</p>
        <p className="mt-1">{SITE_CONFIG.contact.address}</p>
        <p className="mt-1">
          {SITE_CONFIG.contact.phone} · {SITE_CONFIG.contact.email}
        </p>
        <p className="mt-4 text-neutral-400">
          © {new Date().getFullYear()} {SITE_CONFIG.firmName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
