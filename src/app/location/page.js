import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { BUSINESS, COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import GoogleMapEmbed from "@/components/ui/GoogleMapEmbed";
import GoogleActionButtons from "@/components/ui/GoogleActionButtons";
import NearbyAmenityMapSection from "@/components/sections/NearbyAmenityMapSection";

export const metadata = generatePageMetadata(PAGE_SEO.location);

export default function LocationPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.location.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Regency at Summerlin Location
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        In the Heart of The Cliffs Village, Summerlin South
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        {COMMUNITY.name} is located in The Cliffs village of Summerlin South, zip{" "}
        {COMMUNITY.zipCode}. The elevated desert terrain and views of surrounding
        ridges create a dramatic backdrop, while nearby roadways provide convenient
        access to Downtown Summerlin, Red Rock Canyon, and the Las Vegas Strip.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Nearby Destinations
      </h2>
      <ul className="mb-4 list-disc pl-5 text-base text-gray-200 md:text-lg">
        <li>Downtown Summerlin shopping, dining, and entertainment</li>
        <li>Red Rock Casino Resort &amp; Spa</li>
        <li>Red Rock Canyon National Conservation Area</li>
        <li>Medical centers and professional services in Summerlin</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Get Directions or Schedule a Tour
      </h3>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Learn more about{" "}
        <Link
          href="/nearby-amenities"
          className="font-semibold text-amber-400 hover:text-amber-500 hover:underline"
        >
          shopping, dining, and services near {COMMUNITY.name}
        </Link>{" "}
        and{" "}
        <Link href="/amenities" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          the resort-style amenities within the community
        </Link>
        .
      </p>
      <p className="mb-6 text-base text-gray-200 md:text-lg">
        For exact directions, a tour map, or to coordinate a guided visit to{" "}
        {COMMUNITY.name}, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>

      {/* Action Buttons */}
      <div className="mb-8">
        <GoogleActionButtons location="location_page" />
      </div>

      {/* Google Map */}
      <div className="mb-8 rounded-2xl border border-stone-700 bg-luxury-900 p-6 shadow-soft">
        <h2 className="mb-4 text-xl font-semibold text-white">
          {COMMUNITY.name} Location Map
        </h2>
        <p className="mb-4 text-base text-gray-200">
          {COMMUNITY.name} is located at {BUSINESS.fullAddress} in The Cliffs village of Summerlin South.
        </p>
        <GoogleMapEmbed />
      </div>

      <NearbyAmenityMapSection
        className="bg-luxury-black"
        compact
        title={`What's Nearby ${COMMUNITY.name}`}
        description={`See healthcare, grocery, golf, and dining around The Cliffs village — with an interactive map and directions to verified Summerlin destinations.`}
      />

      {/* Contextual Links Section */}
      <section className="mt-12 p-6 bg-luxury-900 rounded-lg border border-stone-700">
        <h2 className="text-xl font-playfair font-bold text-white mb-4">
          Explore Other Summerlin Communities
        </h2>
        <p className="text-gray-200 mb-4 text-base md:text-lg">
          Dr. Jan Duffy specializes in all Summerlin neighborhoods. If you&apos;re considering other communities in the area:
        </p>
        <ul className="space-y-2 text-base text-gray-200 md:text-lg">
          <li>
            <a
              href="https://summerlinwestrealestate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              Summerlin West homes →
            </a>
          </li>
          <li>
            <a
              href="https://thevistassummerlin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              The Vistas Summerlin →
            </a>
          </li>
          <li>
            <a
              href="https://shawoodhomes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              Shawood luxury homes →
            </a>
          </li>
          <li>
            <a
              href="https://searchforhomesinsummerlin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors font-medium"
            >
              Search all Summerlin homes →
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}


