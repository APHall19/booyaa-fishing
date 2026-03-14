import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Guide",
  description: "BOOYAA Fishing Wear size chart and measurement guide.",
};

const mensSizes = [
  { size: "S", chest: "34-36", waist: "28-30", hips: "35-37" },
  { size: "M", chest: "38-40", waist: "32-34", hips: "38-40" },
  { size: "L", chest: "42-44", waist: "36-38", hips: "41-43" },
  { size: "XL", chest: "46-48", waist: "40-42", hips: "44-46" },
  { size: "2XL", chest: "50-52", waist: "44-46", hips: "47-49" },
];

const womensSizes = [
  { size: "XS", chest: "30-32", waist: "24-26", hips: "33-35" },
  { size: "S", chest: "32-34", waist: "26-28", hips: "35-37" },
  { size: "M", chest: "34-36", waist: "28-30", hips: "37-39" },
  { size: "L", chest: "38-40", waist: "32-34", hips: "40-42" },
  { size: "XL", chest: "42-44", waist: "36-38", hips: "43-45" },
];

function SizeTable({ title, sizes }: { title: string; sizes: typeof mensSizes }) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-brand-navy">{title}</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-navy text-white">
              <th className="px-4 py-3 text-left font-heading font-semibold">Size</th>
              <th className="px-4 py-3 text-left font-heading font-semibold">Chest (in)</th>
              <th className="px-4 py-3 text-left font-heading font-semibold">Waist (in)</th>
              <th className="px-4 py-3 text-left font-heading font-semibold">Hips (in)</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((row, i) => (
              <tr key={row.size} className={i % 2 === 0 ? "bg-brand-sand" : "bg-white"}>
                <td className="px-4 py-3 font-semibold text-brand-navy">{row.size}</td>
                <td className="px-4 py-3 text-brand-charcoal/80">{row.chest}</td>
                <td className="px-4 py-3 text-brand-charcoal/80">{row.waist}</td>
                <td className="px-4 py-3 text-brand-charcoal/80">{row.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SizeGuidePage() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Size <span className="text-brand-gold">Guide</span>
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Find your perfect BOOYAA fit.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-brand-sand rounded-xl p-6">
            <h2 className="font-heading text-xl font-bold text-brand-navy">How to Measure</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-charcoal/80">
              <li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape level.</li>
              <li><strong>Waist:</strong> Measure around your natural waistline, just above the hip bone.</li>
              <li><strong>Hips:</strong> Measure around the fullest part of your hips.</li>
            </ul>
          </div>

          <SizeTable title="Men's Sizes" sizes={mensSizes} />
          <SizeTable title="Women's Sizes" sizes={womensSizes} />

          <div className="bg-brand-sand rounded-xl p-6 text-sm text-brand-charcoal/80">
            <p>
              <strong>Note:</strong> Sizes are approximate. For the best fit, we recommend
              ordering your usual size. If you&apos;re between sizes, size up for a relaxed fit
              or size down for a tighter fit. Hats are one-size-fits-most (FlexFit S/M and L/XL available).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
