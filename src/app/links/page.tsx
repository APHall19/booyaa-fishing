import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Links",
  description: "Useful fishing links and resources recommended by BOOYAA Fishing Wear.",
};

const linkCategories = [
  {
    title: "Fishing Resources",
    links: [
      { name: "California Department of Fish & Wildlife", description: "Fishing regulations, licenses, and conservation information." },
      { name: "Western Outdoor News (WON)", description: "Fishing reports and news for Western anglers." },
      { name: "Bass Angler Magazine", description: "Tips, techniques, and tournament coverage." },
    ],
  },
  {
    title: "Conservation",
    links: [
      { name: "Coastal Conservation Association", description: "Dedicated to conserving marine resources." },
      { name: "Bass Anglers Sportsman Society (B.A.S.S.)", description: "Conservation and competitive bass fishing." },
      { name: "Keep Fish Wet", description: "Science-based fish handling practices." },
    ],
  },
  {
    title: "BOOYAA Resources",
    links: [
      { name: "CA Boat Landings", href: "/resources/boat-landings", description: "Directory of California boat landings and launch ramps." },
      { name: "Conservation", href: "/resources/conservation", description: "Learn about BOOYAA's conservation efforts." },
      { name: "Size Guide", href: "/resources/size-guide", description: "Find your perfect BOOYAA fit." },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Useful <span className="text-brand-gold">Links</span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Resources for the fishing community.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {linkCategories.map((cat) => (
            <div key={cat.title}>
              <h2 className="font-heading text-2xl font-bold text-brand-navy">{cat.title}</h2>
              <div className="mt-4 space-y-3">
                {cat.links.map((link) => {
                  const isInternal = "href" in link && link.href;
                  return (
                    <div key={link.name} className="bg-brand-sand rounded-xl p-5">
                      {isInternal ? (
                        <Link href={link.href!} className="font-medium text-brand-ocean hover:underline">
                          {link.name}
                        </Link>
                      ) : (
                        <span className="font-medium text-brand-navy">{link.name}</span>
                      )}
                      <p className="mt-1 text-sm text-brand-charcoal/70">{link.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
