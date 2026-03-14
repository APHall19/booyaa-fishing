import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BOOYAA Fishing Wear privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Privacy <span className="text-brand-gold">Policy</span>
          </h1>
          <p className="mt-4 text-sm text-white/50">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm prose-headings:font-heading prose-headings:text-brand-navy text-brand-charcoal/80">
          <h2 className="font-heading text-2xl font-bold text-brand-navy">Information We Collect</h2>
          <p>When you visit our website or make a purchase, we may collect the following information:</p>
          <ul>
            <li>Name, email address, and phone number (when you submit a contact form or place an order)</li>
            <li>Shipping and billing address (when you place an order)</li>
            <li>Payment information (processed securely through our payment provider — we do not store card details)</li>
            <li>Browser type, IP address, and browsing behavior (collected automatically via cookies and analytics)</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-brand-navy mt-8">How We Use Your Information</h2>
          <ul>
            <li>To process and fulfill your orders</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send promotional emails (only with your consent — you can unsubscribe anytime)</li>
            <li>To improve our website and products</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-brand-navy mt-8">Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with trusted third-party
            service providers (payment processors, shipping carriers, analytics) solely to operate
            our business.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-navy mt-8">Your Rights (CCPA)</h2>
          <p>
            California residents have the right to know what personal data we collect, request
            deletion of their data, and opt out of the sale of personal information. Contact us
            to exercise these rights.
          </p>

          <h2 className="font-heading text-2xl font-bold text-brand-navy mt-8">Contact</h2>
          <p>
            Questions about this policy? Contact us at{" "}
            <a href="/contact" className="text-brand-ocean hover:underline">our contact page</a>.
          </p>
        </div>
      </section>
    </>
  );
}
