"use client";

import Link from "next/link";
import AmenityMap from "@/components/widgets/AmenityMap";
import { COMMUNITY } from "@/lib/constants";

/**
 * Reusable "What's Nearby" section with link to full amenities page.
 */
export default function NearbyAmenityMapSection({
  title = `Life Near ${COMMUNITY.name}`,
  description = `Explore healthcare, golf, grocery, dining, and recreation around ${COMMUNITY.name} in Summerlin South — then dive into the full interactive map and local guide.`,
  compact = false,
  className = "",
}) {
  return (
    <section
      className={`py-16 md:py-20 ${className}`}
      aria-labelledby="nearby-amenity-map-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center md:mb-10">
          <h2
            id="nearby-amenity-map-heading"
            className="mb-4 font-playfair text-3xl text-white md:text-4xl"
          >
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-200 md:text-lg">
            {description}
          </p>
        </div>
        <AmenityMap compact={compact} />
        <div className="mt-8 text-center">
          <Link
            href="/nearby-amenities"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-amber-500 px-8 py-3 text-sm font-semibold text-navy-900 transition hover:bg-amber-400"
          >
            View full nearby amenities guide
          </Link>
        </div>
      </div>
    </section>
  );
}
