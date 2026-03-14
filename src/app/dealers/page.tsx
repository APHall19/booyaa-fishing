import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/config";

export const metadata: Metadata = {
  title: "Find a Dealer",
  description: "Find BOOYAA Fishing Wear retailers and authorized dealers near you.",
};

const dealers = [
  { name: "Bass Pro Shops — Rancho Cucamonga", location: "Rancho Cucamonga, CA", phone: "(909) 922-5500" },
  { name: "Turner's Outdoorsman", location: "Various locations, Southern CA", phone: "(888) 888-8888" },
  { name: "Fisherman's Warehouse", location: "Sacramento, CA", phone: "(916) 362-1200" },
  { name: "Bob's Bait & Tackle", location: "Lake Elsinore, CA", phone: "(951) 674-5051" },
  { name: "Anglers Marine", location: "Anaheim, CA", phone: "(714) 999-1975" },
  { name: "Lake Perris Tackle Shop", location: "Perris, CA", phone: "(951) 940-5600" },
];

export default function DealersPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Find a <span className="text-brand-gold">Dealer</span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            BOOYAA Fishing Wear is available at these fine retailers.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {dealers.map((dealer) => (
              <div
                key={dealer.name}
                className="bg-brand-sand rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div>
                  <h2 className="font-heading text-lg font-semibold text-brand-navy">
                    {dealer.name}
                  </h2>
                  <p className="text-sm text-brand-charcoal/70">{dealer.location}</p>
                </div>
                <a
                  href={`tel:${dealer.phone.replace(/\D/g, "")}`}
                  className="text-sm font-medium text-brand-ocean hover:underline whitespace-nowrap"
                >
                  {dealer.phone}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Image
              src={img("/images/dealer-logos.gif")}
              alt="BOOYAA authorized dealer logos"
              width={500}
              height={80}
              className="mx-auto"
            />
          </div>

          <div className="mt-12 bg-brand-navy rounded-xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-white">
              Become a BOOYAA Dealer
            </h2>
            <p className="mt-3 text-white/70">
              Interested in carrying BOOYAA Fishing Wear in your shop? We&apos;d love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block mt-6 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Contact Us for Wholesale
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
