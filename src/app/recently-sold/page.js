import { COMMUNITY, PHONE } from "@/lib/constants";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.recentlySold);

export default function RecentlySoldPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.recentlySold.breadcrumbs} />
      <section className="mb-10">
        <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
          Recently Sold Homes in Regency at Summerlin
        </h1>
        <h2 className="mb-3 text-xl font-semibold text-white">
          Understand Today&apos;s Regency at Summerlin Market
        </h2>
        <p className="mb-4 text-base text-gray-200 md:text-lg">
          Reviewing recently sold homes in {COMMUNITY.name} is one of the best ways to
          understand true market value. Asking prices tell part of the story, but
          closed sales reveal what buyers are actually willing to pay for specific
          floor plans, views, and upgrades in this luxury 55+ community.
        </p>
        <h2 className="mb-3 text-xl font-semibold text-white">
          Request a Custom Sold Report
        </h2>
        <p className="mb-4 text-base text-gray-200 md:text-lg">
          If you&apos;re considering buying or selling in {COMMUNITY.name}, we can
          prepare a detailed report showing closed prices, days on market, and
          pricing trends for homes similar to yours or those you are interested in.
          This context is invaluable when crafting an offer or setting the right
          list price.
        </p>
        <h3 className="mb-2 text-lg font-semibold text-white">
          Talk with a Regency Market Expert
        </h3>
        <p className="text-base text-gray-200 md:text-lg">
          Call or text <span className="font-semibold">{PHONE.marketing}</span> to
          discuss the most recent sales in {COMMUNITY.name} and how they may impact
          your plans as a buyer or seller.
        </p>
      </section>
    </main>
  );
}


