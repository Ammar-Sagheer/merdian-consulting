"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="rounded-md bg-primary-50 p-4 text-primary-700">
        Thanks for reaching out — we&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-primary-600 px-6 py-2 text-sm font-medium text-white hover:bg-primary-700"
      >
        Send Message
      </button>
    </form>
  );
}
