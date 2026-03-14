import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fred Hall Show",
  description: "Visit BOOYAA Fishing Wear at the Fred Hall Show — the West Coast's biggest fishing, tackle, and boat show.",
};

export default function FredHallPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="mb-4 text-sm text-white/50">
            <Link href="/events" className="hover:text-brand-gold transition-colors">Events</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Fred Hall Show</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Fred Hall <span className="text-brand-gold">Show</span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            The West Coast&apos;s premier fishing, tackle, and boat show.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-navy">About the Show</h2>
            <p className="mt-3 text-brand-charcoal/80 leading-relaxed">
              The Fred Hall Show is one of the largest fishing, tackle, and boat shows on the West
              Coast. Held annually at the Long Beach Convention Center, it brings together anglers,
              gear manufacturers, and fishing enthusiasts from across California and beyond.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-navy">BOOYAA at the Show</h2>
            <p className="mt-3 text-brand-charcoal/80 leading-relaxed">
              Visit the BOOYAA booth to check out the latest gear, grab exclusive show-only deals,
              and meet the team. We bring our full product lineup and often debut new designs at
              the Fred Hall Show first.
            </p>
          </div>

          <div className="bg-brand-sand rounded-xl p-6">
            <h2 className="font-heading text-xl font-bold text-brand-navy">Show Details</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="font-semibold text-brand-navy w-24 shrink-0">When:</dt>
                <dd className="text-brand-charcoal/80">March 2026 (check back for exact dates)</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-semibold text-brand-navy w-24 shrink-0">Where:</dt>
                <dd className="text-brand-charcoal/80">Long Beach Convention Center, Long Beach, CA</dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-semibold text-brand-navy w-24 shrink-0">Booth:</dt>
                <dd className="text-brand-charcoal/80">Check back for booth number</dd>
              </div>
            </dl>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/events"
              className="text-brand-ocean hover:underline font-medium"
            >
              &larr; Back to All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
