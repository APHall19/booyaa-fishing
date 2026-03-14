import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conservation",
  description: "BOOYAA Fishing Wear's commitment to conservation and protecting our waterways.",
};

export default function ConservationPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Conservation
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Protecting the waters we love to fish.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-brand-charcoal/80 leading-relaxed">
            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-navy">Our Commitment</h2>
              <p className="mt-3">
                At BOOYAA, we believe that every angler has a responsibility to protect the
                waters we fish. Our lakes, rivers, and oceans are the reason we do what we
                do — and we&apos;re committed to keeping them healthy for future generations.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-navy">Catch &amp; Release</h2>
              <p className="mt-3">
                We strongly support catch-and-release practices, especially for trophy-class
                fish. Proper handling — wet hands, barbless hooks, quick release — gives
                fish the best chance of survival and keeps our fisheries thriving.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-navy">Clean Water Initiatives</h2>
              <p className="mt-3">
                BOOYAA supports local clean-water initiatives and lake cleanup events across
                Southern California. We believe in leaving every body of water better than
                we found it.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-navy">Pack It Out</h2>
              <p className="mt-3">
                Line, hooks, bait containers, and plastic — if you brought it to the water,
                bring it home. Fishing-related litter is one of the biggest threats to
                wildlife. Do your part.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
