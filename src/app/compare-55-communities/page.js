import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import FiftyPlusCommunities from "@/components/SeoLinks/FiftyPlusCommunities";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";

export const metadata = generatePageMetadata(PAGE_SEO.compare);

export default function CompareCommunitiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.compare.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Compare Las Vegas 55+ Communities
      </h1>
      
      <p className="mb-8 text-xl text-gray-200 md:text-xl">
        Choosing the right 55+ community is a major decision. Dr. Jan Duffy specializes in 
        all Las Vegas active adult neighborhoods and can help you find your perfect match.
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto mb-12">
        <table className="w-full border-collapse border border-stone-700">
          <thead>
            <tr className="bg-navy-900 text-white">
              <th className="p-4 text-left border border-stone-700">Community</th>
              <th className="p-4 text-left border border-stone-700">Builder</th>
              <th className="p-4 text-left border border-stone-700">Price Range</th>
              <th className="p-4 text-left border border-stone-700">Homes</th>
              <th className="p-4 text-left border border-stone-700">Year Built</th>
              <th className="p-4 text-left border border-stone-700">Guard Gate</th>
            </tr>
          </thead>
          <tbody className="bg-luxury-900">
            <tr className="bg-navy-800 font-semibold">
              <td className="p-4 border border-stone-700">
                <span className="text-white">Regency at Summerlin</span>
                <span className="ml-2 text-xs bg-amber-500 text-luxury-black px-2 py-1 rounded">You&apos;re Here</span>
              </td>
              <td className="p-4 border border-stone-700 text-gray-200">Toll Brothers</td>
              <td className="p-4 border border-stone-700 text-amber-400">$700K - $1.1M+</td>
              <td className="p-4 border border-stone-700 text-gray-200">457</td>
              <td className="p-4 border border-stone-700 text-gray-200">2016-2023</td>
              <td className="p-4 border border-stone-700 text-gray-200">✅ Yes</td>
            </tr>
            <tr>
              <td className="p-4 border border-stone-700">
                <a 
                  href="https://suncitysummerlinhomesforsale.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
                >
                  Sun City Summerlin →
                </a>
              </td>
              <td className="p-4 border border-stone-700 text-gray-200">Del Webb</td>
              <td className="p-4 border border-stone-700 text-gray-200">$300K - $700K</td>
              <td className="p-4 border border-stone-700 text-gray-200">~8,000</td>
              <td className="p-4 border border-stone-700 text-gray-200">1989-2002</td>
              <td className="p-4 border border-stone-700 text-gray-200">✅ Yes</td>
            </tr>
            <tr className="bg-luxury-black">
              <td className="p-4 border border-stone-700">
                <a 
                  href="https://heritagestonebridge.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
                >
                  Heritage at Stonebridge →
                </a>
              </td>
              <td className="p-4 border border-stone-700 text-gray-200">Lennar</td>
              <td className="p-4 border border-stone-700 text-gray-200">$465K - $700K</td>
              <td className="p-4 border border-stone-700 text-gray-200">~1,000</td>
              <td className="p-4 border border-stone-700 text-gray-200">2020-Present</td>
              <td className="p-4 border border-stone-700 text-gray-200">✅ Yes</td>
            </tr>
            <tr>
              <td className="p-4 border border-stone-700">
                <a 
                  href="https://reverencesummerlinhomes.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
                >
                  Reverence →
                </a>
              </td>
              <td className="p-4 border border-stone-700 text-gray-200">Pulte</td>
              <td className="p-4 border border-stone-700 text-gray-200">$500K - $900K</td>
              <td className="p-4 border border-stone-700 text-gray-200">~1,200</td>
              <td className="p-4 border border-stone-700 text-gray-200">2018-Present</td>
              <td className="p-4 border border-stone-700 text-gray-200">✅ Yes</td>
            </tr>
            <tr className="bg-luxury-black">
              <td className="p-4 border border-stone-700">
                <a 
                  href="https://trilogysunstonehomes.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
                >
                  Trilogy Sunstone →
                </a>
              </td>
              <td className="p-4 border border-stone-700 text-gray-200">Shea Homes</td>
              <td className="p-4 border border-stone-700 text-gray-200">$400K - $800K</td>
              <td className="p-4 border border-stone-700 text-gray-200">~1,500</td>
              <td className="p-4 border border-stone-700 text-gray-200">2017-Present</td>
              <td className="p-4 border border-stone-700 text-gray-200">✅ Yes</td>
            </tr>
            <tr>
              <td className="p-4 border border-stone-700">
                <a 
                  href="https://delwebbnorthranchhomes.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-500 hover:underline transition-colors"
                >
                  Del Webb North Ranch →
                </a>
              </td>
              <td className="p-4 border border-stone-700 text-gray-200">Del Webb</td>
              <td className="p-4 border border-stone-700 text-gray-200">$350K - $600K</td>
              <td className="p-4 border border-stone-700 text-gray-200">~2,000</td>
              <td className="p-4 border border-stone-700 text-gray-200">2019-Present</td>
              <td className="p-4 border border-stone-700 text-gray-200">❌ No</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Why Regency Section */}
      <section className="bg-navy-900 p-8 rounded-lg border border-stone-700 mb-12">
        <h2 className="text-2xl font-playfair font-bold text-white mb-4">Why Choose Regency at Summerlin?</h2>
        <ul className="space-y-3 text-gray-200 text-base md:text-lg">
          <li>✅ <strong className="text-white">Newest Toll Brothers Quality</strong> - Modern 2016-2023 construction</li>
          <li>✅ <strong className="text-white">Boutique Community</strong> - Only 457 homes vs 8,000+ at Sun City</li>
          <li>✅ <strong className="text-white">Guard-Gated Security</strong> - 24/7 staffed entrance + electronic gate</li>
          <li>✅ <strong className="text-white">22,000 SF Clubhouse</strong> - Resort-style amenities</li>
          <li>✅ <strong className="text-white">Red Rock Views</strong> - Mountain and city vistas</li>
          <li>✅ <strong className="text-white">Lock-and-Leave Living</strong> - Front yard maintenance included</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-8 mb-12">
        <h2 className="text-2xl font-playfair font-bold text-white mb-4">Need Help Comparing Communities?</h2>
        <p className="text-gray-200 mb-6 text-base md:text-lg">
          Dr. Jan Duffy has helped 500+ families find their perfect 55+ home. 
          She can show you multiple communities in one day.
        </p>
        <TrackedPhoneLink
          phone={PHONE.marketing}
          location="compare-page-cta"
          className="inline-block bg-amber-500 text-luxury-black px-8 py-4 rounded-lg text-xl font-semibold hover:bg-amber-400 transition-colors"
        >
          Call/Text {PHONE.marketing}
        </TrackedPhoneLink>
      </section>

      {/* View All Link */}
      <div className="text-center mb-12">
        <a 
          href="https://lasvegas55plushomes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-500 font-medium text-lg transition-colors"
        >
          Explore All Las Vegas 55+ Communities →
        </a>
      </div>

      {/* Related Communities Component */}
      <FiftyPlusCommunities title="Explore Other 55+ Communities" />
    </main>
  );
}


