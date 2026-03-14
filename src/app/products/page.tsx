import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { img } from "@/lib/config";

export const metadata: Metadata = {
  title: "Shop All Products",
  description: "Browse the full BOOYAA Fishing Wear collection — shorts, shirts, hats, jackets, and more.",
};

const categories = [
  { name: "Shorts", slug: "shorts", image: "/images/products/shorts.jpg" },
  { name: "Shirts", slug: "shirts", image: "/images/products/crew_shirt.jpg" },
  { name: "Sweatshirts", slug: "sweatshirts", image: "/images/products/sweatshirts-2.jpg" },
  { name: "Jackets", slug: "jackets", image: "/images/products/hoodedjacket.jpg" },
  { name: "Ladies", slug: "ladies", image: "/images/products/ladies/ladies9.jpg" },
  { name: "Hats", slug: "hats", image: "/images/hats2.jpg" },
  { name: "Pants", slug: "pants", image: "/images/products/pants.jpg" },
  { name: "Rod Covers", slug: "rod-covers", image: "/images/products/rodsock-255.jpg" },
  { name: "Accessories", slug: "accessories", image: "/images/jewelry.jpg" },
  { name: "Bags", slug: "bags", image: "/images/products/overnight_bag.jpg" },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-2">
            BOOYAA Fishing Wear
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Shop All Products
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group relative block aspect-[3/4] rounded-lg overflow-hidden bg-brand-charcoal"
              >
                <Image
                  src={img(cat.image)}
                  alt={`BOOYAA ${cat.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="font-heading text-lg font-bold text-white">
                    {cat.name}
                  </h2>
                  <span className="text-xs font-medium text-brand-gold uppercase tracking-wider">
                    Shop &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
