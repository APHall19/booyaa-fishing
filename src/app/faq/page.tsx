import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about BOOYAA Fishing Wear — shipping, returns, sizing, and more.",
};

const faqs = [
  {
    q: "What is your shipping policy?",
    a: "We ship via USPS Priority Mail within the continental United States. Orders placed before 2 PM PST on business days ship same-day. Standard shipping takes 2-5 business days.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Currently we only ship within the United States. We're working on expanding to international markets — follow us on social media for updates.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 30 days of purchase for unworn, unwashed items with tags attached. Contact us to initiate a return and we'll send you a prepaid shipping label.",
  },
  {
    q: "How do I find my size?",
    a: "Check out our Size Guide page for detailed measurement instructions and size charts for both men's and women's apparel.",
  },
  {
    q: "Do you offer wholesale pricing?",
    a: "Yes! We work with retailers, fishing guides, and tournament organizers. Contact us through our Contact page and select 'Wholesale' as the subject.",
  },
  {
    q: "Can I get custom BOOYAA gear for my tournament or team?",
    a: "Absolutely. We offer custom orders for tournaments, fishing teams, and events. Minimum order quantities apply. Reach out via our Contact page with details about your project.",
  },
  {
    q: "Where can I buy BOOYAA gear in person?",
    a: "Check our Dealers page for a list of authorized retailers. We're also at major fishing shows like the Fred Hall Show throughout the year.",
  },
  {
    q: "How do I care for my BOOYAA gear?",
    a: "Machine wash cold with like colors. Tumble dry low or hang dry. Do not bleach. Do not iron directly on printed graphics. Following these instructions will keep your gear looking great for years.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-sand rounded-xl p-6">
                <h2 className="font-heading text-lg font-semibold text-brand-navy">{faq.q}</h2>
                <p className="mt-2 text-sm text-brand-charcoal/80 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
