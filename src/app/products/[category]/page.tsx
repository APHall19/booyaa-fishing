import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const categoryData: Record<string, { title: string; description: string; products: { name: string; price: string; description: string; image?: string }[] }> = {
  shorts: {
    title: "Shorts",
    description: "Performance fishing shorts built for all-day comfort on the water.",
    products: [
      { name: "BOOYAA Pro Board Short", price: "$49.99", description: "Quick-dry board shorts with reinforced stitching and side pockets.", image: "/images/products/shorts.jpg" },
      { name: "BOOYAA Cargo Fishing Short", price: "$54.99", description: "Multi-pocket cargo shorts with stretch waistband for all-day comfort.", image: "/images/products/shorts-pocket.jpg" },
      { name: "BOOYAA Classic Short", price: "$39.99", description: "Lightweight classic fit shorts with BOOYAA embroidered logo." },
    ],
  },
  shirts: {
    title: "Shirts",
    description: "Breathable fishing shirts with bold BOOYAA style.",
    products: [
      { name: "BOOYAA Crew Neck Tee", price: "$34.99", description: "Classic crew neck tee with full-color BOOYAA graphics.", image: "/images/products/crew_shirt.jpg" },
      { name: "BOOYAA Beefy Tee", price: "$34.99", description: "Heavyweight cotton tee with screen-printed BOOYAA design.", image: "/images/products/beefy-t.1.jpg" },
      { name: "BOOYAA Long Sleeve Performance", price: "$44.99", description: "UPF 50+ long sleeve performance shirt for sun protection.", image: "/images/products/longsleeve-shirt2.jpg" },
    ],
  },
  sweatshirts: {
    title: "Sweatshirts",
    description: "Warm layers for early morning launches and cool evenings.",
    products: [
      { name: "BOOYAA Heavyweight Hoodie", price: "$64.99", description: "Premium heavyweight hoodie with embroidered logo and kangaroo pocket.", image: "/images/products/sweatshirts-2.jpg" },
      { name: "BOOYAA Crew Neck Sweatshirt", price: "$54.99", description: "Classic crew neck sweatshirt with screen-printed graphics." },
    ],
  },
  jackets: {
    title: "Jackets",
    description: "Weather-ready jackets for any condition on the water.",
    products: [
      { name: "BOOYAA Pullover Windbreaker", price: "$79.99", description: "Half-zip pullover windbreaker with water-resistant shell.", image: "/images/products/jackets/pullover-wind-breaker.jpg" },
      { name: "BOOYAA Full-Zip Windbreaker", price: "$89.99", description: "Full-zip windbreaker with hood and sealed seams.", image: "/images/products/jackets/wind-breaker.jpg" },
      { name: "BOOYAA Hooded Jacket", price: "$99.99", description: "Insulated hooded jacket for cold weather fishing.", image: "/images/products/hoodedjacket.jpg" },
    ],
  },
  ladies: {
    title: "Ladies",
    description: "Women's fishing apparel designed for performance and style.",
    products: [
      { name: "BOOYAA Women's Fitted Tee", price: "$29.99", description: "Soft cotton-blend fitted tee with feminine cut and BOOYAA logo.", image: "/images/products/ladies/ladies9.jpg" },
      { name: "BOOYAA Women's V-Neck", price: "$29.99", description: "Relaxed v-neck tee perfect for warm days on the water.", image: "/images/products/ladies/ladies10.jpg" },
      { name: "BOOYAA Women's Tank Top", price: "$24.99", description: "Lightweight tank top with BOOYAA graphic print.", image: "/images/products/ladies/ladies11.jpg" },
    ],
  },
  hats: {
    title: "Hats",
    description: "Sun protection that looks great on the water.",
    products: [
      { name: "BOOYAA Skull Beanie", price: "$24.99", description: "Embroidered skull design beanie for cold mornings.", image: "/images/products/hats/skull_beanies.jpg" },
      { name: "BOOYAA Tribal Beanie", price: "$24.99", description: "Tribal pattern knit beanie with BOOYAA patch.", image: "/images/products/hats/skull_tribal_beanies.jpg" },
      { name: "BOOYAA Trucker Hat", price: "$27.99", description: "Classic mesh-back trucker hat with embroidered logo.", image: "/images/products/hats/trucker.jpg" },
      { name: "BOOYAA Cross Trucker", price: "$27.99", description: "Trucker hat with cross design and BOOYAA branding.", image: "/images/products/hats/trucker-cross.jpg" },
      { name: "BOOYAA Visor", price: "$22.99", description: "Performance visor with moisture-wicking sweatband.", image: "/images/visors.jpg" },
    ],
  },
  pants: {
    title: "Pants",
    description: "Durable fishing pants with stretch fabric and reinforced construction.",
    products: [
      { name: "BOOYAA Cargo Pant", price: "$64.99", description: "Multi-pocket cargo pants with stretch waistband and reinforced knees.", image: "/images/products/pants.jpg" },
      { name: "BOOYAA Quick-Dry Pant", price: "$59.99", description: "Lightweight quick-dry pants that convert to shorts with zip-off legs.", image: "/images/products/pants2.jpg" },
    ],
  },
  "rod-covers": {
    title: "Rod Covers",
    description: "Protective rod socks to keep your gear safe during transport.",
    products: [
      { name: "BOOYAA Rod Sock - Spinning", price: "$14.99", description: "Stretchy neoprene rod sock for spinning rods up to 7'.", image: "/images/products/rodsock-255.jpg" },
      { name: "BOOYAA Rod Sock - Casting", price: "$14.99", description: "Stretchy neoprene rod sock for casting rods up to 7'6\"." },
      { name: "BOOYAA Rod Sock - Oversized", price: "$17.99", description: "Extra-wide rod sock for swimbaits and heavy action rods." },
    ],
  },
  accessories: {
    title: "Accessories",
    description: "Jewelry, keychains, and accessories to show your BOOYAA pride.",
    products: [
      { name: "BOOYAA Gold Chain Pendant", price: "$49.99", description: "Gold-plated BOOYAA pendant on stainless steel chain.", image: "/images/jewelry.jpg" },
      { name: "BOOYAA Keychain", price: "$12.99", description: "Metal BOOYAA logo keychain with carabiner clip." },
      { name: "BOOYAA Sticker Pack", price: "$9.99", description: "Pack of 5 vinyl die-cut BOOYAA stickers." },
    ],
  },
  bags: {
    title: "Bags",
    description: "Overnight bags and gear bags built tough for the traveling angler.",
    products: [
      { name: "BOOYAA Overnight Duffle", price: "$79.99", description: "Heavy-duty overnight duffle with padded shoulder strap and shoe compartment.", image: "/images/products/overnight_bag.jpg" },
      { name: "BOOYAA Tackle Backpack", price: "$69.99", description: "Water-resistant backpack with dedicated tackle box compartments." },
    ],
  },
};

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = categoryData[category];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} — Shop`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({ category }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const data = categoryData[category];
  if (!data) notFound();

  return (
    <>
      <section className="bg-brand-navy py-14 md:py-18">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="mb-4 text-xs uppercase tracking-wider text-white/40">
            <Link href="/products" className="hover:text-brand-gold transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">{data.title}</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white">
            {data.title}
          </h1>
          <p className="mt-3 text-base text-white/50">{data.description}</p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.products.map((product) => (
              <div
                key={product.name}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square bg-gray-100">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-sm text-gray-300 uppercase tracking-wider">Coming Soon</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h2 className="font-heading text-base font-bold text-brand-navy">
                    {product.name}
                  </h2>
                  <p className="mt-1.5 text-sm text-brand-charcoal/50 leading-relaxed">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-navy">{product.price}</span>
                    <button className="bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold px-4 py-2.5 rounded uppercase tracking-wider transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
