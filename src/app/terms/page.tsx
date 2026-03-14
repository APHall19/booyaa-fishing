import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "BOOYAA Fishing Wear terms of service.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Terms of <span className="text-brand-gold">Service</span>
          </h1>
          <p className="mt-4 text-sm text-white/50">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-brand-charcoal/80 leading-relaxed">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-navy">Overview</h2>
            <p className="mt-3">
              This website is operated by BOOYAA Fishing Wear. By visiting our site and/or purchasing
              something from us, you agree to be bound by these terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-navy">Products &amp; Pricing</h2>
            <p className="mt-3">
              We reserve the right to modify prices at any time without notice. All prices are listed
              in USD. Product images are for illustration purposes — actual colors may vary slightly.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-navy">Orders &amp; Payment</h2>
            <p className="mt-3">
              We reserve the right to refuse any order. Payment must be received before orders are
              processed. We accept major credit cards and PayPal.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-navy">Shipping</h2>
            <p className="mt-3">
              We ship within the continental United States via USPS. Shipping times are estimates
              and not guaranteed. BOOYAA is not responsible for delays caused by the carrier.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-navy">Returns &amp; Exchanges</h2>
            <p className="mt-3">
              Items may be returned within 30 days of purchase in original, unworn condition with
              tags attached. Customer is responsible for return shipping unless the item is defective.
              Refunds are processed within 5-7 business days of receiving the return.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-navy">Limitation of Liability</h2>
            <p className="mt-3">
              BOOYAA Fishing Wear shall not be liable for any damages arising from the use of our
              products or website beyond the purchase price of the product.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-navy">Contact</h2>
            <p className="mt-3">
              Questions about these terms? Contact us at{" "}
              <a href="/contact" className="text-brand-ocean hover:underline">our contact page</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
