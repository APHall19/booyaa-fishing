import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming fishing events, tournaments, and shows sponsored by BOOYAA Fishing Wear.",
};

const upcomingEvents = [
  {
    name: "Fred Hall Show",
    date: "March 2026",
    location: "Long Beach Convention Center, CA",
    description: "The West Coast's biggest fishing, tackle, and boat show. Visit the BOOYAA booth for exclusive show deals.",
    href: "/events/fred-hall-show",
  },
  {
    name: "BOOYAA Bass Tournament",
    date: "April 2026",
    location: "Lake Havasu, AZ",
    description: "Annual BOOYAA-sponsored bass tournament with cash prizes and gear giveaways.",
    href: "#",
  },
  {
    name: "ISE - International Sportsmen's Expo",
    date: "January 2027",
    location: "Sacramento, CA",
    description: "Come see the latest BOOYAA gear and meet the team at ISE Sacramento.",
    href: "#",
  },
];

const pastEvents = [
  { name: "Fred Hall Show 2025", location: "Long Beach, CA" },
  { name: "WON Bass Tournament 2025", location: "Lake Havasu, AZ" },
  { name: "Calico Bass Tournament 2024", location: "Dana Point, CA" },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Events & <span className="text-brand-gold">Tournaments</span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Find BOOYAA on the water and at the biggest fishing shows.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" aria-labelledby="upcoming-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="upcoming-heading" className="font-heading text-3xl font-bold text-brand-navy">
            Upcoming Events
          </h2>
          <div className="mt-8 space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.name}
                className="bg-brand-sand rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-4"
              >
                <div className="md:w-32 shrink-0">
                  <span className="inline-block bg-brand-gold text-brand-navy text-sm font-bold px-3 py-1 rounded-full">
                    {event.date}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-brand-navy">
                    {event.name}
                  </h3>
                  <p className="text-sm text-brand-ocean font-medium">{event.location}</p>
                  <p className="mt-2 text-sm text-brand-charcoal/70">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-sand" aria-labelledby="past-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="past-heading" className="font-heading text-3xl font-bold text-brand-navy">
            Past Events
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event) => (
              <div key={event.name} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-brand-navy">{event.name}</h3>
                <p className="mt-1 text-sm text-brand-charcoal/70">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-ocean text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-white">
            Fishing Trips
          </h2>
          <p className="mt-4 text-white/80">
            BOOYAA occasionally organizes guided fishing trips for the community. Follow us on social media for announcements.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
