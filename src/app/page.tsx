import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Shorts",
    href: "/products/shorts",
    image: "/images/products/shorts.jpg",
  },
  {
    name: "Shirts",
    href: "/products/shirts",
    image: "/images/products/crew_shirt.jpg",
  },
  {
    name: "Hats",
    href: "/products/hats",
    image: "/images/hats2.jpg",
  },
  {
    name: "Jackets",
    href: "/products/jackets",
    image: "/images/products/hoodedjacket.jpg",
  },
  {
    name: "Sweatshirts",
    href: "/products/sweatshirts",
    image: "/images/products/sweatshirts-2.jpg",
  },
  {
    name: "Accessories",
    href: "/products/accessories",
    image: "/images/jewelry.jpg",
  },
];

const features = [
  {
    title: "Built for Anglers",
    description:
      "Every piece of BOOYAA gear is designed by fishermen, for fishermen. We know what works on the water.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "Premium Quality",
    description:
      "Durable fabrics and construction that stand up to sun, salt, and long days on the lake.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Bold Style",
    description:
      "Stand out at the dock and on the water with designs that show your passion for fishing.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden min-h-[70vh] flex items-center">
        <Image
          src="/images/home-collage-2.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/40 to-brand-navy" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 text-center">
          <Image
            src="/images/logo-dark.png"
            alt="BOOYAA Fishing Wear"
            width={800}
            height={450}
            className="mx-auto mb-8 w-72 md:w-[28rem]"
            priority
          />
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-brand-gold font-semibold">
            Premium Fishing Clothing &amp; Accessories
          </p>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Gear that works as hard as you do. Designed by anglers, built for the water.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Shop the Collection
            </Link>
            <Link
              href="/about"
              className="inline-block border border-white/20 hover:border-brand-gold/60 text-white/80 hover:text-brand-gold font-semibold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
            What We Make
          </p>
          <h2
            id="categories-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-brand-navy text-center mt-2"
          >
            Shop by Category
          </h2>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative block aspect-square rounded-lg overflow-hidden bg-brand-charcoal"
              >
                <Image
                  src={cat.image}
                  alt={`BOOYAA ${cat.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                    {cat.name}
                  </h3>
                  <span className="inline-block mt-1 text-xs md:text-sm font-medium text-brand-gold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Shop Now &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-block text-sm font-semibold text-brand-ocean hover:text-brand-navy uppercase tracking-wider transition-colors border-b-2 border-brand-ocean/30 hover:border-brand-navy pb-1"
            >
              View All Categories &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-brand-sand/50" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
            The BOOYAA Difference
          </p>
          <h2
            id="features-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-brand-navy text-center mt-2"
          >
            Why BOOYAA?
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-navy/5 text-brand-navy mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-navy">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-brand-charcoal/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen In */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-charcoal/40 font-semibold mb-6">As Featured In</p>
          <Image
            src="/images/home/field_and_stream_sm.jpg"
            alt="Featured in Field & Stream"
            width={180}
            height={50}
            className="mx-auto opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/photo-collage.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/85" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
            Ready to Gear Up?
          </h2>
          <p className="mt-5 text-white/60 text-lg leading-relaxed">
            Browse our full collection and find your next favorite piece of fishing gear.
          </p>
          <Link
            href="/products"
            className="inline-block mt-8 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-10 py-4 rounded text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View All Products
          </Link>
        </div>
      </section>
    </>
  );
}
