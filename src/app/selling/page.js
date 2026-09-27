import { COMMUNITY, PHONE } from "@/lib/constants";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.selling);

export default function SellingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.selling.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Sell Your Regency at Summerlin Home
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Maximize Your Return in a High-Demand 55+ Community
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Homes in {COMMUNITY.name} are highly sought after, and the right pricing and
        marketing strategy can make a meaningful difference in your final sale price.
        We combine hyper-local knowledge, data-driven market analysis, and targeted
        55+ marketing to position your home for success.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        What&apos;s Included with Our Listing Services
      </h2>
      <ul className="mb-4 list-disc pl-5 text-base text-gray-200 md:text-lg">
        <li>Comprehensive pricing analysis using recent Regency sales</li>
        <li>Professional photography and optional video/virtual tours</li>
        <li>Targeted marketing to active adult and relocation buyers</li>
        <li>Staging recommendations and showing strategy</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Request a Free Home Valuation
      </h3>
      <p className="text-base text-gray-200 md:text-lg">
        To receive a personalized valuation and strategy session for your{" "}
        {COMMUNITY.name} home, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>. We&apos;ll
        discuss timing, preparation, and what today&apos;s buyers are looking for in
        this community.
      </p>

      {/* Contextual Links Section */}
      <section className="mt-12 p-6 bg-navy-900 rounded-lg border border-stone-700">
        <h2 className="text-xl font-playfair font-bold text-white mb-4">
          Need to Sell Quickly?
        </h2>
        <p className="text-gray-200 mb-4 text-base md:text-lg">
          If you need a fast, hassle-free sale, Dr. Jan Duffy also offers:
        </p>
        <ul className="space-y-2 text-base text-gray-200 md:text-lg">
          <li>
            <a
              href="https://speedycashhomeoffers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              Cash offers in 24-48 hours →
            </a>
          </li>
          <li>
            <a
              href="https://wealthtransitionplanning.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              Estate & probate property sales →
            </a>
          </li>
          <li>
            <a
              href="https://probaterealestatesales.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              Probate real estate services →
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}


