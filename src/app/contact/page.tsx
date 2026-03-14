"use client";

import { useState, type FormEvent } from "react";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact Us",
//   description: "Get in touch with BOOYAA Fishing Wear for questions, wholesale inquiries, or custom orders.",
// };

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, this would POST to an API route / Formspree / etc.
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-brand-gold">Us</span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Questions? Wholesale inquiries? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">&#10003;</div>
              <h2 className="font-heading text-2xl font-bold text-brand-navy">
                Message Sent!
              </h2>
              <p className="mt-3 text-brand-charcoal/70">
                Thanks for reaching out. We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-navy">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-charcoal focus:border-brand-ocean focus:ring-2 focus:ring-brand-ocean/20 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-navy">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-charcoal focus:border-brand-ocean focus:ring-2 focus:ring-brand-ocean/20 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-navy">
                  Phone <span className="text-white/50">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-charcoal focus:border-brand-ocean focus:ring-2 focus:ring-brand-ocean/20 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brand-navy">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-charcoal focus:border-brand-ocean focus:ring-2 focus:ring-brand-ocean/20 outline-none transition bg-white"
                >
                  <option value="">Select a topic...</option>
                  <option value="general">General Inquiry</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="returns">Returns</option>
                  <option value="custom">Custom Orders</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-navy">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-brand-charcoal focus:border-brand-ocean focus:ring-2 focus:ring-brand-ocean/20 outline-none transition resize-y"
                />
              </div>

              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold py-3 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
