import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";

export const metadata = generatePageMetadata(PAGE_SEO.buyingGuide);

export default function BuyingGuidePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.buyingGuide.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        How to Buy a Home in Regency at Summerlin
      </h1>
      <h2 className="mb-4 text-xl font-semibold text-white">
        Why Buyers Choose {COMMUNITY.name}
      </h2>
      <div className="mb-8 rounded-2xl border border-stone-700 bg-luxury-900 p-6 shadow-soft">
        <ul className="space-y-3 text-base text-gray-200 md:text-lg">
          <li className="flex items-start">
            <span className="mr-3 text-amber-400">•</span>
            <span>
              <strong className="text-white">{COMMUNITY.totalHomes} single-story homes</strong> across {COMMUNITY.acreage} acres in The Cliffs village of Summerlin
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-amber-400">•</span>
            <span>
              <strong className="text-white">22,000 sq ft private clubhouse</strong> with indoor and outdoor pools, state-of-the-art fitness center, tennis and pickleball courts
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-amber-400">•</span>
            <span>
              <strong className="text-white">Desert contemporary architecture</strong> and low-maintenance living designed for active adults
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-amber-400">•</span>
            <span>
              <strong className="text-white">Prime location:</strong> Minutes to Downtown Summerlin shopping, Red Rock Canyon hiking, and the Las Vegas Strip
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-300 md:text-base">
          Call or text{" "}
          <TrackedPhoneLink
            phone={PHONE.marketing}
            location="buying_guide"
            className="font-semibold text-amber-400 hover:text-amber-500 underline-offset-2 hover:underline"
          >
            {PHONE.marketing}
          </TrackedPhoneLink>{" "}
          for current off-market and coming-soon opportunities.
        </p>
      </div>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Step-by-Step Guide to Purchasing in a 55+ Community
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Buying in {COMMUNITY.name} is a bit different from purchasing in a
        traditional neighborhood. Age-qualification rules, HOA structures, and the
        limited number of resale homes mean it pays to have a clear plan and a local
        expert on your side from the beginning.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Key Steps in the Regency at Summerlin Buying Process
      </h2>
      <ol className="mb-4 list-decimal pl-5 text-base text-gray-200 md:text-lg">
        <li>Clarify your needs, budget, and ideal move-in timeline.</li>
        <li>Review current and upcoming listings in {COMMUNITY.name}.</li>
        <li>Tour the community, clubhouse, and example floor plans.</li>
        <li>Evaluate HOA details, fees, and lifestyle programming.</li>
        <li>Prepare financing or proof of funds with a trusted lender.</li>
        <li>Make a competitive offer when the right home appears.</li>
      </ol>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Talk Through Your Plan with an Expert
      </h3>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Start by reviewing{" "}
        <Link href="/homes-for-sale" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          current homes for sale in {COMMUNITY.name}
        </Link>
        ,{" "}
        <Link href="/floor-plans" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          comparing all 9 floor plans
        </Link>
        , and{" "}
        <Link
          href="/compare-55-communities"
          className="font-semibold text-amber-400 hover:text-amber-500 hover:underline"
        >
          seeing how Regency compares to other Las Vegas 55+ communities
        </Link>
        .
      </p>
      <p className="text-base text-gray-200 md:text-lg">
        To discuss timing, availability, and strategy for buying in{" "}
        {COMMUNITY.name}, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span> today.
      </p>

      {/* Contextual Links Section */}
      <section className="mt-12 p-6 bg-luxury-900 rounded-lg border border-stone-700">
        <h2 className="text-xl font-playfair font-bold text-white mb-4">
          Moving from Out of State?
        </h2>
        <p className="text-gray-200 mb-4 text-base md:text-lg">
          Dr. Jan Duffy specializes in California-to-Las Vegas relocations and can help with:
        </p>
        <ul className="space-y-2 text-base text-gray-200 md:text-lg mb-4">
          <li>
            <a
              href="https://lasvegasrelocationservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              Complete relocation services →
            </a>
          </li>
          <li>
            <a
              href="https://lasvegasmultigenhomes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
            >
              Multi-generational home options →
            </a>
          </li>
        </ul>
        <p className="text-gray-200 text-base md:text-lg">
          Planning to buy and sell simultaneously? Dr. Jan Duffy coordinates both transactions 
          to ensure a smooth transition.
        </p>
      </section>
    </main>
  );
}


