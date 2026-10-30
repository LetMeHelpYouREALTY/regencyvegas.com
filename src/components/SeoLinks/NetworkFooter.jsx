import Link from 'next/link';
import { AGENT, PHONE, BUSINESS } from '@/lib/constants';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import TrackedEmailLink from '@/components/ui/TrackedEmailLink';

export default function NetworkFooter() {
  return (
    <footer className="w-full border-t border-stone-700 bg-luxury-black">
      <div className="mx-auto max-w-7xl px-4 py-12 text-base text-gray-200">
        {/* Brand Section */}
        <div className="mb-8 text-center border-b border-stone-700 pb-8">
          <p className="text-xl font-playfair font-bold text-white mb-2">
            Dr. Jan Duffy | Las Vegas Real Estate Expert
          </p>
          <div className="mt-3">
            <TrackedPhoneLink
              phone={PHONE.marketing}
              location="footer"
              className="text-xl font-semibold text-amber-400 hover:text-amber-500"
            >
              {PHONE.marketing}
            </TrackedPhoneLink>
          </div>
          <div className="mt-2">
            <TrackedEmailLink
              email={AGENT.email}
              location="footer"
              className="text-amber-400 hover:text-amber-500"
            >
              {AGENT.email}
            </TrackedEmailLink>
          </div>
        </div>

        {/* Network Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm mb-8">
          {/* 55+ Communities */}
          <div>
            <h4 className="font-bold text-white mb-3 text-base">55+ Communities</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-amber-400 font-semibold">Regency at Summerlin</span>
                <span className="ml-2 text-xs text-gray-500">(You&apos;re here)</span>
              </li>
              <li>
                <a
                  href="https://suncitysummerlinhomesforsale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Sun City Summerlin
                </a>
              </li>
              <li>
                <a
                  href="https://heritagestonebridge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Heritage Stonebridge
                </a>
              </li>
              <li>
                <a
                  href="https://reverencesummerlinhomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Reverence
                </a>
              </li>
              <li>
                <a
                  href="https://lasvegas55plushomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-500 font-medium"
                >
                  All 55+ Communities →
                </a>
              </li>
            </ul>
          </div>

          {/* Summerlin */}
          <div>
            <h4 className="font-bold text-white mb-3 text-base">Summerlin</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://summerlinwestrealestate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Summerlin West
                </a>
              </li>
              <li>
                <a
                  href="https://thevistassummerlin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  The Vistas
                </a>
              </li>
              <li>
                <a
                  href="https://shawoodhomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Shawood Luxury
                </a>
              </li>
              <li>
                <a
                  href="https://theridgessummerlinhomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  The Ridges
                </a>
              </li>
              <li>
                <a
                  href="https://searchforhomesinsummerlin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-500 font-medium"
                >
                  Search Summerlin →
                </a>
              </li>
            </ul>
          </div>

          {/* Henderson */}
          <div>
            <h4 className="font-bold text-white mb-3 text-base">Henderson</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://searchforhomesinhenderson.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Henderson Homes
                </a>
              </li>
              <li>
                <a
                  href="https://inspiradahomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Inspirada
                </a>
              </li>
              <li>
                <a
                  href="https://cadencehenderson.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Cadence
                </a>
              </li>
              <li>
                <a
                  href="https://macdonaldhighlandshomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  MacDonald Highlands
                </a>
              </li>
              <li>
                <a
                  href="https://trilogysunstonehomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Trilogy Sunstone
                </a>
              </li>
            </ul>
          </div>

          {/* North Las Vegas */}
          <div>
            <h4 className="font-bold text-white mb-3 text-base">North Las Vegas</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://searchnorthlasvegashomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  NLV Homes
                </a>
              </li>
              <li>
                <a
                  href="https://skyecanyonhomesforsale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Skye Canyon
                </a>
              </li>
              <li>
                <a
                  href="https://aliantehomesforsale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Aliante
                </a>
              </li>
              <li>
                <a
                  href="https://centennialhillshomesforsale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Centennial Hills
                </a>
              </li>
              <li>
                <a
                  href="https://delwebbnorthranchhomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Del Webb North Ranch
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-3 text-base">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://speedycashhomeoffers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Cash Offers
                </a>
              </li>
              <li>
                <a
                  href="https://lasvegasrelocationservices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Relocation
                </a>
              </li>
              <li>
                <a
                  href="https://wealthtransitionplanning.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Estate Planning
                </a>
              </li>
              <li>
                <a
                  href="https://assumablehomefinder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Assumable Loans
                </a>
              </li>
              <li>
                <a
                  href="https://openhousemarketplace.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Open Houses
                </a>
              </li>
            </ul>
          </div>

          {/* Luxury */}
          <div>
            <h4 className="font-bold text-white mb-3 text-base">Luxury</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://lasvegasstriphighrises.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Strip High-Rises
                </a>
              </li>
              <li>
                <a
                  href="https://spanishtrailhomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Spanish Trail
                </a>
              </li>
              <li>
                <a
                  href="https://tournamenthillshomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Tournament Hills
                </a>
              </li>
              <li>
                <a
                  href="https://shawoodhomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Shawood
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Internal Site Links */}
        <div className="border-t border-stone-700 pt-8 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <h4 className="font-bold text-white mb-3">Regency at Summerlin</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/homes-for-sale" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Homes for Sale
                  </Link>
                </li>
                <li>
                  <Link href="/floor-plans" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Floor Plans
                  </Link>
                </li>
                <li>
                  <Link href="/amenities" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link href="/location" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Location
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Collections</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/summit-collection" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Summit Collection
                  </Link>
                </li>
                <li>
                  <Link href="/palisades-collection" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Palisades Collection
                  </Link>
                </li>
                <li>
                  <Link href="/pinnacle-collection" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Pinnacle Collection
                  </Link>
                </li>
                <li>
                  <Link href="/compare-55-communities" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Compare 55+ Communities
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/buying-guide" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Buying Guide
                  </Link>
                </li>
                <li>
                  <Link href="/selling" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Selling Guide
                  </Link>
                </li>
                <li>
                  <Link href="/market-report" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Market Report
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-amber-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                    About Dr. Jan Duffy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/explore-las-vegas" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Explore Las Vegas
                  </Link>
                </li>
                <li>
                  <a
                    href="https://drjanduffy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    Dr. Jan Duffy →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-700 bg-luxury-900 py-4 text-center text-sm text-gray-300">
        <p>© {new Date().getFullYear()} RegencyVegas.com · All Rights Reserved</p>
        <p className="mt-1">Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC</p>
        <p className="mt-2 text-xs text-gray-400">
          &quot;Let Me Help You!&quot; — Empower, Protect, Stress-Free Home Buying & Selling
        </p>
        <p className="mt-1 text-xs text-gray-500">{BUSINESS.fullAddress}</p>
      </div>
    </footer>
  );
}

