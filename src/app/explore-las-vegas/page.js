import Link from 'next/link';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { PAGE_SEO, generatePageMetadata } from '@/lib/seo';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { PHONE } from '@/lib/constants';

export const metadata = generatePageMetadata(PAGE_SEO.exploreLasVegas);

export default function ExploreLasVegas() {
  const networkSites = {
    fiftyPlus: [
      { name: 'Regency at Summerlin', url: '/', current: true },
      { name: 'Sun City Summerlin', url: 'https://suncitysummerlinhomesforsale.com' },
      { name: 'Heritage at Stonebridge', url: 'https://heritagestonebridge.com' },
      { name: 'All 55+ Communities', url: 'https://lasvegas55plushomes.com' },
    ],
    summerlin: [
      { name: 'Summerlin West', url: 'https://summerlinwestrealestate.com' },
      { name: 'The Vistas', url: 'https://thevistassummerlin.com' },
      { name: 'Shawood Luxury', url: 'https://shawoodhomes.com' },
      { name: 'The Ridges', url: 'https://theridgessummerlinhomes.com' },
    ],
    henderson: [
      { name: 'Henderson Homes', url: 'https://searchforhomesinhenderson.com' },
      { name: 'Inspirada', url: 'https://inspiradahomes.com' },
      { name: 'Cadence', url: 'https://cadencehenderson.com' },
      { name: 'MacDonald Highlands', url: 'https://macdonaldhighlandshomes.com' },
    ],
    northLV: [
      { name: 'North Las Vegas', url: 'https://searchnorthlasvegashomes.com' },
      { name: 'Skye Canyon', url: 'https://skyecanyonhomesforsale.com' },
      { name: 'Aliante', url: 'https://aliantehomesforsale.com' },
      { name: 'Centennial Hills', url: 'https://centennialhillshomesforsale.com' },
    ],
    luxury: [
      { name: 'Strip High-Rises', url: 'https://lasvegasstriphighrises.com' },
      { name: 'Spanish Trail', url: 'https://spanishtrailhomes.com' },
      { name: 'Tournament Hills', url: 'https://tournamenthillshomes.com' },
    ],
    services: [
      { name: 'Cash Home Offers', url: 'https://speedycashhomeoffers.com' },
      { name: 'Relocation Services', url: 'https://lasvegasrelocationservices.com' },
      { name: 'Estate Planning', url: 'https://wealthtransitionplanning.com' },
      { name: 'Open Houses', url: 'https://openhousemarketplace.com' },
    ],
  };

  const categoryLabels = {
    fiftyPlus: '55+ Communities',
    summerlin: 'Summerlin',
    henderson: 'Henderson',
    northLV: 'North Las Vegas',
    luxury: 'Luxury',
    services: 'Services',
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.exploreLasVegas.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl text-center">
        Explore Las Vegas Real Estate
      </h1>
      <p className="mb-12 text-xl text-gray-200 text-center md:text-xl">
        Dr. Jan Duffy serves all Las Vegas communities. Find your perfect neighborhood.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Object.entries(networkSites).map(([category, sites]) => (
          <div key={category} className="bg-luxury-900 rounded-lg border border-stone-700 shadow-lg p-6">
            <h2 className="text-xl font-playfair font-bold text-white mb-4">
              {categoryLabels[category]}
            </h2>
            <ul className="space-y-2">
              {sites.map((site) => (
                <li key={site.url}>
                  {site.current ? (
                    <span className="text-amber-400 font-semibold">
                      {site.name}
                      <span className="ml-2 text-xs text-gray-400">(Current)</span>
                    </span>
                  ) : (
                    <a
                      href={site.url}
                      className="text-gray-300 hover:text-amber-400 transition-colors block"
                      target={site.url.startsWith('http') ? '_blank' : undefined}
                      rel={site.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {site.name} →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-navy-900 rounded-lg border border-stone-700 p-8 text-center mb-12">
        <h2 className="text-2xl font-playfair font-bold text-white mb-4">
          Need Help Finding Your Perfect Community?
        </h2>
        <p className="text-gray-200 mb-6 text-base md:text-lg">
          Dr. Jan Duffy specializes in helping buyers find the right neighborhood. 
          Whether you&apos;re looking for 55+ living, luxury homes, or family communities, 
          she can guide you through all your options.
        </p>
        <TrackedPhoneLink
          phone={PHONE.marketing}
          location="explore-page-cta"
          className="inline-block bg-amber-500 text-luxury-black px-8 py-4 rounded-lg text-xl font-semibold hover:bg-amber-400 transition-colors"
        >
          Call {PHONE.marketing}
        </TrackedPhoneLink>
      </div>

      <div className="text-center">
        <a
          href="https://searchforlasvegashomes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-navy-800 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-navy-700 transition-colors"
        >
          Search All Las Vegas Homes →
        </a>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/compare-55-communities"
          className="text-amber-400 hover:text-amber-500 font-medium text-lg transition-colors"
        >
          Compare 55+ Communities →
        </Link>
      </div>
    </main>
  );
}

