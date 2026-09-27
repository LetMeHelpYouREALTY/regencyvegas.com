import { COLLECTIONS, COMMUNITY, PHONE } from "@/lib/constants";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import { generateFloorPlanSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(PAGE_SEO.summit);

export default function SummitCollectionPage() {
  const col = COLLECTIONS.summit;
  const schema = generateFloorPlanSchema({
    name: col.name,
    description: `Single-story homes in the ${col.name} at ${COMMUNITY.name}, offering ${col.sqftRange} with ${col.beds} bedrooms and ${col.baths} baths in a Toll Brothers 55+ guard-gated community in Las Vegas.`,
  });
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.summit.breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        {col.name} Homes in Regency at Summerlin
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Entry-Level Luxury in a Premier 55+ Community
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        The {col.name} offers thoughtfully designed single-story homes in{" "}
        {COMMUNITY.name}, ideal for buyers seeking lock-and-leave convenience without
        sacrificing style. Floor plans range from {col.sqftRange} and feature{" "}
        {col.beds} bedrooms and {col.baths} baths, with open-concept living areas,
        modern kitchens, and outdoor spaces perfect for enjoying the desert climate.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Summit Collection Floor Plans
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        {col.description}
      </p>
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {col.plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-lg border border-stone-700 bg-luxury-900 p-4"
          >
            <h3 className="mb-2 text-lg font-semibold text-white">{plan.name}</h3>
            <p className="mb-1 text-sm text-gray-300">{plan.sqft.toLocaleString()} sq ft</p>
            <p className="mb-1 text-sm text-gray-300">{plan.beds} BD / {plan.baths} BA</p>
            <p className="mb-2 text-sm text-gray-300">{plan.garage}</p>
            <p className="text-sm text-amber-400">{plan.features}</p>
          </div>
        ))}
      </div>
      <div className="mb-6 rounded-lg border border-stone-700 bg-luxury-900 p-4">
        <p className="text-base text-gray-200">
          <span className="font-semibold text-white">Price Range:</span> ${(col.priceRange.min / 1000).toFixed(0)}K - ${(col.priceRange.max / 1000).toFixed(0)}K (resale)
        </p>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Learn More or Schedule a Tour
      </h3>
      <p className="text-base text-gray-200 md:text-lg">
        To learn which {col.name} floor plan best fits your lifestyle, or to see
        current availability, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span> for personalized
        guidance.
      </p>
    </main>
  );
}


