import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CA Boat Landings",
  description: "Directory of California boat landings and launch ramps for anglers.",
};

const regions = [
  {
    name: "Southern California",
    landings: [
      { name: "Lake Perris Marina", location: "Perris, CA" },
      { name: "Lake Elsinore Launch Ramp", location: "Lake Elsinore, CA" },
      { name: "Diamond Valley Lake Marina", location: "Hemet, CA" },
      { name: "Lake Skinner", location: "Temecula, CA" },
      { name: "Irvine Lake", location: "Orange, CA" },
      { name: "Dana Point Harbor", location: "Dana Point, CA" },
    ],
  },
  {
    name: "Central California",
    landings: [
      { name: "Lake Castaic", location: "Castaic, CA" },
      { name: "Pyramid Lake", location: "Gorman, CA" },
      { name: "Lake Isabella", location: "Kernville, CA" },
      { name: "Lake Nacimiento Resort", location: "Bradley, CA" },
    ],
  },
  {
    name: "Northern California",
    landings: [
      { name: "Clear Lake — Redbud Park", location: "Clearlake, CA" },
      { name: "Lake Oroville — Bidwell Canyon", location: "Oroville, CA" },
      { name: "Folsom Lake — Granite Bay", location: "Granite Bay, CA" },
      { name: "Sacramento River — Garcia Bend", location: "Sacramento, CA" },
    ],
  },
];

export default function BoatLandingsPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            California <span className="text-brand-gold">Boat Landings</span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Popular launch ramps and marinas across California.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {regions.map((region) => (
            <div key={region.name}>
              <h2 className="font-heading text-2xl font-bold text-brand-navy">{region.name}</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {region.landings.map((landing) => (
                  <div key={landing.name} className="bg-brand-sand rounded-lg p-4">
                    <h3 className="font-medium text-brand-navy">{landing.name}</h3>
                    <p className="text-sm text-brand-charcoal/70">{landing.location}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
