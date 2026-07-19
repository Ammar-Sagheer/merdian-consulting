import { SITE_CONFIG } from "@/app/_lib/siteConfig";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-semibold text-neutral-900">
        About {SITE_CONFIG.firmName}
      </h1>

      <p className="mt-6 text-neutral-700">{SITE_CONFIG.aboutBlurb}</p>

      <h2 className="mt-12 text-xl font-semibold text-neutral-900">
        Our Approach
      </h2>
      <p className="mt-4 text-neutral-700">
        We believe good technology work starts with listening. Every engagement
        begins with understanding what you actually need — not what&apos;s
        trendiest — and ends with something your team can maintain long after
        we&apos;ve handed it off.
      </p>

      <h2 className="mt-12 text-xl font-semibold text-neutral-900">Contact</h2>
      <address className="mt-4 not-italic text-neutral-700">
        {SITE_CONFIG.contact.address}
        <br />
        {SITE_CONFIG.contact.phone}
        <br />
        {SITE_CONFIG.contact.email}
      </address>
    </div>
  );
}
