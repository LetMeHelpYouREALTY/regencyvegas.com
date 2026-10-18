import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import Script from "next/script";
import RealScoutListings from "@/components/widgets/RealScoutListings";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import NearbyAmenityMapSection from "@/components/sections/NearbyAmenityMapSection";

export const metadata = generatePageMetadata(PAGE_SEO.homesForSale);

export default function HomesForSalePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.homesForSale.breadcrumbs} />
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="lazyOnload"
      />
      <section className="mb-10">
        <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
          Regency at Summerlin Homes &amp; Real Estate for Sale
        </h1>
        <h2 className="mb-3 text-xl font-semibold text-white">
          Browse Available Homes in Regency at Summerlin
        </h2>
        <p className="mb-4 text-base text-gray-200 md:text-lg">
          Included below are homes for sale and real estate listings in{" "}
          {COMMUNITY.name}. Listings are updated frequently, allowing you to see the
          latest opportunities in this luxury 55+ guard-gated community in Summerlin.
          Explore single-story floor plans, premium lots, and lock-and-leave homes
          designed for upscale active adult living.
        </p>
        <p className="mb-4 text-base text-gray-200 md:text-lg">
          You can also review{" "}
          <Link
            href="/recently-sold"
            className="font-semibold text-amber-400 hover:text-amber-500 hover:underline"
          >
            recently sold homes in {COMMUNITY.name}
          </Link>{" "}
          and{" "}
          <Link
            href="/floor-plans"
            className="font-semibold text-amber-400 hover:text-amber-500 hover:underline"
          >
            explore all 9 floor plans
          </Link>{" "}
          to better understand pricing, layouts, and options in this premier 55+
          community.
        </p>
        <h2 className="mb-3 text-xl font-semibold text-white">
          Request Details or Schedule a Private Tour
        </h2>
        <p className="mb-4 text-base text-gray-200 md:text-lg">
          If you would like more information on any of these {COMMUNITY.name} homes,
          just click on a property to view full details. From there you can request
          additional information, ask questions about HOA fees or recent sales, or
          schedule a private tour. We are happy to provide disclosures, past sales
          history, dates and prices of recently sold properties nearby, and guidance
          on how each home compares within the community.
        </p>
        <h3 className="mb-2 text-lg font-semibold text-white">
          Work with a Local Regency at Summerlin Specialist
        </h3>
        <p className="text-base text-gray-200 md:text-lg">
          When you&apos;re ready to take the next step, call or text{" "}
          <span className="font-semibold">{PHONE.marketing}</span> to connect with a
          {` ${COMMUNITY.name}`} expert who understands the nuances of this Toll
          Brothers community and the broader Las Vegas 55+ market.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-white">
          Current Regency at Summerlin Listings
        </h2>
        <RealScoutListings />
      </section>

      <NearbyAmenityMapSection
        className="bg-luxury-black"
        compact
        title="What's Near Your Next Home"
        description={`Buyers often ask about grocery, healthcare, and entertainment near ${COMMUNITY.name}. Explore the interactive map and full amenities guide before you tour.`}
      />
    </main>
  );
}


