import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.hoaFees);

export default function HoaFeesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.hoaFees.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        HOA Fees at Regency at Summerlin
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Understanding Monthly Costs
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Homeowners in {COMMUNITY.name} pay both a community-specific HOA and a
        master-planned Summerlin fee. Together, these typically total around $
        {COMMUNITY.hoa.total}/month, covering amenities, common-area maintenance,
        security, and other services that protect the community&apos;s quality and
        appearance.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        What&apos;s Typically Included
      </h2>
      <ul className="mb-4 list-disc pl-5 text-base text-gray-200 md:text-lg">
        <li>Guard-gated entry and neighborhood security</li>
        <li>Access to clubhouse, pools, and fitness facilities</li>
        <li>Maintenance of common areas and landscaping</li>
        <li>Contribution to Summerlin master amenities and parks</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Request Up-to-Date HOA Information
      </h3>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        The HOA fees cover access to{" "}
        <Link href="/amenities" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          resort-style amenities and the 22,000 sq ft clubhouse
        </Link>{" "}
        as well as the guard-gated security and maintenance that support the{" "}
        <Link href="/lifestyle" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          55+ active adult lifestyle
        </Link>{" "}
        at {COMMUNITY.name}.
      </p>
      <p className="text-base text-gray-200 md:text-lg">
        HOA structures and dues can change over time. For the most accurate, current
        information for a specific home or collection in {COMMUNITY.name}, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span> and we will provide a
        detailed breakdown.
      </p>
    </main>
  );
}


