import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BOOYAA Fishing Wear — our story, our mission, and our passion for fishing.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy py-16 md:py-24 overflow-hidden">
        <Image
          src={img("/images/home-collage-2.jpg")}
          alt="BOOYAA Fishing Wear collection"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src={img("/images/logo-light.png")}
            alt="BOOYAA logo"
            width={960}
            height={540}
            className="mx-auto mb-8 w-48 md:w-64"
          />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            About <span className="text-brand-gold">BOOYAA</span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Born on the water. Built for anglers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="story-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="story-heading" className="font-heading text-3xl font-bold text-brand-navy">
            Our Story
          </h2>
          <div className="mt-6 space-y-6 text-brand-charcoal/80 leading-relaxed">
            <p>
              BOOYAA Fishing Wear was founded with one simple mission: create clothing that
              anglers are proud to wear both on and off the water. We started as a group of
              passionate fishermen in Southern California who couldn&apos;t find gear that combined
              performance, durability, and bold style.
            </p>
            <p>
              So we built our own. Every piece of BOOYAA gear is designed by people who spend
              their weekends at the lake, on the ocean, or chasing bass in the delta. We know
              what works because we live it.
            </p>
            <p>
              From our signature shorts and shirts to our hats and accessories, every product
              is crafted with the same attention to quality and detail. We use fabrics that
              stand up to sun, salt, and long tournament days — because your gear should work
              as hard as you do.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-brand-sand" aria-labelledby="values-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="font-heading text-3xl font-bold text-brand-navy text-center">
            What We Stand For
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                text: "We never cut corners. Premium materials, reinforced stitching, and fabrics that last season after season.",
              },
              {
                title: "Conservation",
                text: "We believe in protecting the waters we fish. BOOYAA supports catch-and-release practices and conservation efforts.",
              },
              {
                title: "Community",
                text: "Fishing brings people together. We sponsor tournaments, events, and support the fishing community at every level.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-brand-navy">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-brand-charcoal/70 leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
