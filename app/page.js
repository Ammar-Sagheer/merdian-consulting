import Link from "next/link";
import { SITE_CONFIG } from "@/app/_lib/siteConfig";
import { SERVICES } from "@/app/_data/services";
import { TESTIMONIALS } from "@/app/_data/testimonials";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          {SITE_CONFIG.tagline}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
          {SITE_CONFIG.aboutBlurb}
        </p>
        <Link
          href="/intake"
          className="mt-8 inline-block rounded-md bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700"
        >
          Start Your Project
        </Link>
      </section>

      {/* Services */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Our Services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="rounded-lg border border-neutral-200 bg-white p-6"
              >
                <h3 className="font-medium text-neutral-900">{service.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {service.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            What Clients Say
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => (
              <blockquote
                key={testimonial.id}
                className="rounded-lg border border-neutral-200 bg-white p-6"
              >
                <p className="text-neutral-700">"{testimonial.quote}"</p>
                <footer className="mt-4 text-sm font-medium text-neutral-900">
                  {testimonial.name}
                  <span className="font-normal text-neutral-500">
                    {" "}
                    — {testimonial.company}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
