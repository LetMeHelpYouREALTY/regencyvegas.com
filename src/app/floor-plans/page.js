import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { COLLECTIONS, COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.floorPlans);

export default function FloorPlansPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.floorPlans.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Regency at Summerlin Floor Plans
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Compare All 9 Single-Story Floor Plans
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        {COMMUNITY.name} offers nine thoughtfully designed single-story floor plans
        across three collections: Summit, Palisades, and Pinnacle. Each plan is
        optimized for 55+ living, with open-concept great rooms, oversized primary
        suites, and outdoor spaces that embrace the desert climate and mountain
        views.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Floor Plan Collections at a Glance
      </h2>
      <div className="grid gap-6 md:grid-cols-3 text-base text-gray-200 md:text-lg">
        <div className="rounded-lg border border-stone-700 bg-luxury-900 p-4">
          <h3 className="mb-1 text-lg font-semibold text-white">
            {COLLECTIONS.summit.name}
          </h3>
          <p>{COLLECTIONS.summit.sqftRange}</p>
          <p>{COLLECTIONS.summit.beds} beds • {COLLECTIONS.summit.baths} baths</p>
          <p className="mt-2 text-sm text-gray-300">
            Plans: {COLLECTIONS.summit.planNames.join(", ")}
          </p>
          <p className="mt-2 text-xs text-amber-400">
            ${(COLLECTIONS.summit.priceRange.min / 1000).toFixed(0)}K - ${(COLLECTIONS.summit.priceRange.max / 1000).toFixed(0)}K
          </p>
        </div>
        <div className="rounded-lg border border-stone-700 bg-luxury-900 p-4">
          <h3 className="mb-1 text-lg font-semibold text-white">
            {COLLECTIONS.palisades.name}
          </h3>
          <p>{COLLECTIONS.palisades.sqftRange}</p>
          <p>
            {COLLECTIONS.palisades.beds} beds + den • {COLLECTIONS.palisades.baths} baths
          </p>
          <p className="mt-2 text-sm text-gray-300">
            Plans: {COLLECTIONS.palisades.planNames.join(", ")}
          </p>
          <p className="mt-2 text-xs text-amber-400">
            ${(COLLECTIONS.palisades.priceRange.min / 1000).toFixed(0)}K - ${(COLLECTIONS.palisades.priceRange.max / 1000).toFixed(0)}K
          </p>
        </div>
        <div className="rounded-lg border border-stone-700 bg-luxury-900 p-4">
          <h3 className="mb-1 text-lg font-semibold text-white">
            {COLLECTIONS.pinnacle.name}
          </h3>
          <p>{COLLECTIONS.pinnacle.sqftRange}</p>
          <p>{COLLECTIONS.pinnacle.beds} beds • {COLLECTIONS.pinnacle.baths} baths</p>
          <p className="mt-2 text-sm text-gray-300">
            Plans: {COLLECTIONS.pinnacle.planNames.join(", ")}
          </p>
          <p className="mt-2 text-xs text-amber-400">
            ${(COLLECTIONS.pinnacle.priceRange.min / 1000).toFixed(0)}K - ${(COLLECTIONS.pinnacle.priceRange.max / 1000000).toFixed(1)}M+
          </p>
        </div>
      </div>
      <h3 className="mt-8 mb-2 text-lg font-semibold text-white">
        Get Help Choosing the Right Plan
      </h3>
      <p className="text-base text-gray-200 md:text-lg">
        Not sure which floor plan is the best fit for your lifestyle? Call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span> to review options,
        see example layouts, and match plans to current resale opportunities in{" "}
        {COMMUNITY.name}.
      </p>

      {/* Contextual Links Section */}
      <section className="mt-12 p-6 bg-luxury-900 rounded-lg border border-stone-700">
        <h2 className="text-xl font-playfair font-bold text-white mb-4">
          Comparing Floor Plans Across Communities?
        </h2>
        <p className="text-gray-200 mb-4 text-base md:text-lg">
          See how Regency&apos;s Toll Brothers floor plans compare to other 55+ communities:
        </p>
        <ul className="space-y-2 text-base text-gray-200 md:text-lg">
          <li>
            <a
              href="https://suncitysummerlinhomesforsale.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              Sun City Summerlin
            </a>
            {' '}— Del Webb floor plans from 1,200-2,800 SF
          </li>
          <li>
            <a
              href="https://heritagestonebridge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              Heritage at Stonebridge
            </a>
            {' '}— Lennar floor plans from 1,500-2,500 SF
          </li>
          <li>
            <a
              href="https://reverencesummerlinhomes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              Reverence
            </a>
            {' '}— Pulte floor plans from 1,800-2,600 SF
          </li>
        </ul>
        <div className="mt-4">
          <Link
            href="/compare-55-communities"
            className="text-amber-400 hover:text-amber-500 font-medium transition-colors"
          >
            View full 55+ community comparison →
          </Link>
        </div>
      </section>
    </main>
  );
}


