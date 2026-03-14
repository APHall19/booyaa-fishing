import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/config";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from BOOYAA Fishing Wear events, tournaments, and on the water.",
};

const galleryImages = [
  { src: "/images/photo-collage.jpg", alt: "BOOYAA photo collage — fishing events and on the water", wide: true },
  { src: "/images/home-collage-2.jpg", alt: "BOOYAA gear collage — product showcase", wide: true },
  { src: "/images/products/shorts.jpg", alt: "BOOYAA fishing shorts" },
  { src: "/images/products/crew_shirt.jpg", alt: "BOOYAA crew neck shirt" },
  { src: "/images/products/hoodedjacket.jpg", alt: "BOOYAA hooded jacket" },
  { src: "/images/hats2.jpg", alt: "BOOYAA hats collection" },
  { src: "/images/products/sweatshirts-2.jpg", alt: "BOOYAA sweatshirts" },
  { src: "/images/products/ladies/ladies9.jpg", alt: "BOOYAA ladies fitted tee" },
  { src: "/images/products/ladies/ladies10.jpg", alt: "BOOYAA ladies v-neck" },
  { src: "/images/products/ladies/ladies11.jpg", alt: "BOOYAA ladies tank top" },
  { src: "/images/products/hats/trucker.jpg", alt: "BOOYAA trucker hat" },
  { src: "/images/products/hats/skull_beanies.jpg", alt: "BOOYAA skull beanies" },
  { src: "/images/products/jackets/pullover-wind-breaker.jpg", alt: "BOOYAA pullover windbreaker" },
  { src: "/images/products/jackets/wind-breaker.jpg", alt: "BOOYAA windbreaker" },
  { src: "/images/products/overnight_bag.jpg", alt: "BOOYAA overnight bag" },
  { src: "/images/jewelry.jpg", alt: "BOOYAA jewelry and accessories" },
  { src: "/images/products/rodsock-255.jpg", alt: "BOOYAA rod socks" },
  { src: "/images/products/pants.jpg", alt: "BOOYAA fishing pants" },
  { src: "/images/beanies.jpg", alt: "BOOYAA beanies" },
  { src: "/images/visors.jpg", alt: "BOOYAA visors" },
  { src: "/images/banners/hastings.jpg", alt: "Hastings banner" },
  { src: "/images/lone_wolf.jpg", alt: "Lone Wolf" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Photo <span className="text-brand-gold">Gallery</span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            BOOYAA on the water, at the shows, and in the wild.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((photo) => (
              <div
                key={photo.src}
                className="break-inside-avoid rounded-xl overflow-hidden bg-brand-sand"
              >
                <Image
                  src={img(photo.src)}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-brand-sand rounded-xl p-8">
            <h2 className="font-heading text-2xl font-bold text-brand-navy">
              Share Your BOOYAA Photos
            </h2>
            <p className="mt-3 text-brand-charcoal/70 max-w-lg mx-auto">
              Tag us on Instagram or send us your best fishing photos wearing BOOYAA gear. You might get featured in our gallery!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
