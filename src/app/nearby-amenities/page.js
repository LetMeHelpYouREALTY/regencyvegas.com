import { COMMUNITY, PHONE } from "@/lib/constants";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.nearbyAmenities);

export default function NearbyAmenitiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.nearbyAmenities.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Shopping, Dining &amp; Services Near Regency at Summerlin
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Everyday Convenience Minutes from Home
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Living in {COMMUNITY.name} means enjoying a quiet, guard-gated 55+ community
        while staying close to everything you need. From grocery stores and
        restaurants to healthcare and entertainment, most daily errands can be
        completed within a short drive of the community.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Highlights Around {COMMUNITY.name}
      </h2>
      <ul className="mb-4 list-disc pl-5 text-base text-gray-200 md:text-lg">
        <li>Downtown Summerlin for shopping, dining, and events</li>
        <li>Red Rock Casino for dining, movies, and nightlife</li>
        <li>Nearby grocery stores, pharmacies, and essential services</li>
        <li>Access to medical offices and hospital facilities in Summerlin</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Learn More About the Area
      </h3>
      <p className="text-base text-gray-200 md:text-lg">
        For a curated list of nearby restaurants, golf courses, shopping centers,
        and healthcare providers that best match your lifestyle, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>
    </main>
  );
}


