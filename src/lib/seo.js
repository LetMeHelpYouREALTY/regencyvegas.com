import { AGENT, COMMUNITY, PHONE, COLLECTIONS, SITE_URL } from "./constants";

const HOME_META_DESCRIPTION = `Browse ${COMMUNITY.name} 55+ homes in The Cliffs, Summerlin. Guard-gated Toll Brothers community with resort amenities. Call ${PHONE.marketing}.`;

function leafBreadcrumb(name, path) {
  return [{ name: "Home", path: "/" }, { name, path }];
}

function floorPlanBreadcrumb(name, path) {
  return [
    { name: "Home", path: "/" },
    { name: "Floor Plans", path: "/floor-plans" },
    { name, path },
  ];
}

export const baseMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Regency at Summerlin | Dr. Jan Duffy",
    default: "Regency at Summerlin 55+ Homes for Sale in Las Vegas",
  },
  description: HOME_META_DESCRIPTION,
  keywords: [
    "Regency at Summerlin",
    "Regency at Summerlin homes for sale",
    "55+ community Las Vegas",
    "Toll Brothers Las Vegas",
    "luxury active adult community",
    "Summerlin 55+",
    "guard-gated community Las Vegas",
  ],
  authors: [{ name: AGENT.name }],
  creator: AGENT.name,
  publisher: AGENT.brokerage,
  openGraph: {
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: "Regency at Summerlin by Dr. Jan Duffy",
    images: [
      {
        url: "/images/hero-mountain.jpg",
        width: 1200,
        height: 630,
        alt: "Regency at Summerlin luxury 55+ homes with Red Rock mountain views in Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero-mountain.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generatePageMetadata({ title, description, path, image }) {
  const imageUrl = image || "/images/hero-mountain.jpg";

  const openGraph = {
    title: `${title} | Regency at Summerlin`,
    description,
    url: `${SITE_URL}${path}`,
    type: "website",
    siteName: "Regency at Summerlin by Dr. Jan Duffy",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: `${title} - Regency at Summerlin in Las Vegas`,
      },
    ],
  };

  return {
    title,
    description,
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
  };
}

export const PAGE_SEO = {
  home: {
    title: "Regency at Summerlin 55+ Homes for Sale in Las Vegas",
    description: HOME_META_DESCRIPTION,
    path: "/",
  },
  homesForSale: {
    title: "Homes for Sale in Regency at Summerlin",
    description: `View all current listings in ${COMMUNITY.name}, a Toll Brothers 55+ guard-gated community with ${COMMUNITY.totalHomes} single-story homes. Updated frequently from the Las Vegas MLS. Call ${PHONE.marketing}.`,
    path: "/homes-for-sale",
    breadcrumbs: leafBreadcrumb("Homes for Sale", "/homes-for-sale"),
  },
  recentlySold: {
    title: "Recently Sold Homes in Regency at Summerlin",
    description: `See what homes sold for in ${COMMUNITY.name}. Recent sales data, price trends, and market analysis. Free home valuation. Call ${PHONE.marketing}.`,
    path: "/recently-sold",
    breadcrumbs: leafBreadcrumb("Recently Sold", "/recently-sold"),
  },
  summit: {
    title: "Summit Collection | Regency at Summerlin Floor Plans",
    description: `Summit Collection homes at ${COMMUNITY.name}: ${COLLECTIONS.summit.sqftRange} sq ft, ${COLLECTIONS.summit.beds} beds, ${COLLECTIONS.summit.baths} baths. Entry-level luxury. Call ${PHONE.marketing}.`,
    path: "/summit-collection",
    breadcrumbs: floorPlanBreadcrumb("Summit Collection", "/summit-collection"),
  },
  palisades: {
    title: "Palisades Collection | Regency at Summerlin Floor Plans",
    description: `Palisades Collection homes at ${COMMUNITY.name}: ${COLLECTIONS.palisades.sqftRange} sq ft, ${COLLECTIONS.palisades.beds} beds + den. Mid-luxury living. Call ${PHONE.marketing}.`,
    path: "/palisades-collection",
    breadcrumbs: floorPlanBreadcrumb("Palisades Collection", "/palisades-collection"),
  },
  pinnacle: {
    title: "Pinnacle Collection | Regency at Summerlin Floor Plans",
    description: `Pinnacle Collection - the largest homes at ${COMMUNITY.name}: ${COLLECTIONS.pinnacle.sqftRange} sq ft. Premium luxury with mountain views. Call ${PHONE.marketing}.`,
    path: "/pinnacle-collection",
    breadcrumbs: floorPlanBreadcrumb("Pinnacle Collection", "/pinnacle-collection"),
  },
  floorPlans: {
    title: "All 9 Floor Plans at Regency at Summerlin",
    description: `Compare all 9 floor plans at ${COMMUNITY.name}. Summit, Palisades & Pinnacle Collections from 1,665-2,659 sq ft. Single-story luxury. Call ${PHONE.marketing}.`,
    path: "/floor-plans",
    breadcrumbs: leafBreadcrumb("Floor Plans", "/floor-plans"),
  },
  amenities: {
    title: "Amenities at Regency at Summerlin | 22,000 Sq Ft Clubhouse",
    description: `Resort-style amenities at ${COMMUNITY.name}: 22,000 sq ft clubhouse, indoor/outdoor pools, tennis, pickleball, fitness center, lifestyle director. Call ${PHONE.marketing}.`,
    path: "/amenities",
    breadcrumbs: leafBreadcrumb("Amenities", "/amenities"),
  },
  lifestyle: {
    title: "Active Adult Lifestyle at Regency at Summerlin",
    description: `Discover the 55+ lifestyle at ${COMMUNITY.name}. Full calendar of activities, clubs, fitness classes, social events. On-site lifestyle director. Call ${PHONE.marketing}.`,
    path: "/lifestyle",
    breadcrumbs: leafBreadcrumb("Lifestyle", "/lifestyle"),
  },
  hoaFees: {
    title: "HOA Fees at Regency at Summerlin | What's Included",
    description: `${COMMUNITY.name} HOA fees: $${COMMUNITY.hoa.total}/month total. Includes guard gate, front yard maintenance, clubhouse access, all amenities. Call ${PHONE.marketing}.`,
    path: "/hoa-fees",
    breadcrumbs: leafBreadcrumb("HOA Fees", "/hoa-fees"),
  },
  location: {
    title: "Location | Regency at Summerlin in The Cliffs Village",
    description: `${COMMUNITY.name} is located in The Cliffs Village, Summerlin South (${COMMUNITY.zipCode}). Minutes from Downtown Summerlin, Red Rock, Las Vegas Strip. Call ${PHONE.marketing}.`,
    path: "/location",
    breadcrumbs: leafBreadcrumb("Location", "/location"),
  },
  nearbyAmenities: {
    title: "Nearby Amenities in Regency at Summerlin, Las Vegas",
    description: `Interactive map and local guide to dining, golf, healthcare, grocery, and shopping near ${COMMUNITY.name} in Summerlin South. Verified destinations and drive times. Call ${PHONE.marketing}.`,
    path: "/nearby-amenities",
    breadcrumbs: leafBreadcrumb("Nearby Amenities", "/nearby-amenities"),
  },
  buyingGuide: {
    title: "How to Buy a Home in Regency at Summerlin",
    description: `Complete guide to buying in ${COMMUNITY.name}. Age requirements, resale process, financing options, timeline. Expert guidance. Call ${PHONE.marketing}.`,
    path: "/buying-guide",
    breadcrumbs: leafBreadcrumb("Buying Guide", "/buying-guide"),
  },
  selling: {
    title: "Sell Your Regency at Summerlin Home | Free Valuation",
    description: `Thinking of selling your ${COMMUNITY.name} home? Free market analysis, expert 55+ marketing, proven results. Call ${PHONE.marketing}.`,
    path: "/selling",
    breadcrumbs: leafBreadcrumb("Selling", "/selling"),
  },
  marketReport: {
    title: "Regency at Summerlin Market Report | Prices & Trends",
    description: `Current ${COMMUNITY.name} market data: median $${(
      COMMUNITY.price.median / 1000
    ).toFixed(0)}K. Monthly reports, price trends, inventory analysis. Call ${
      PHONE.marketing
    }.`,
    path: "/market-report",
    breadcrumbs: leafBreadcrumb("Market Report", "/market-report"),
  },
  compare: {
    title: "Compare 55+ Communities in Las Vegas | Regency vs Sun City vs Heritage",
    description: `Compare ${COMMUNITY.name} to Sun City, Heritage at Stonebridge, Reverence, and other Las Vegas 55+ communities. Expert guidance from Dr. Jan Duffy. Call ${PHONE.marketing}.`,
    path: "/compare-55-communities",
    breadcrumbs: leafBreadcrumb("Compare 55+ Communities", "/compare-55-communities"),
  },
  exploreLasVegas: {
    title: "Explore Las Vegas Real Estate | Dr. Jan Duffy Network",
    description: `Search homes across Las Vegas, Henderson, Summerlin, and North Las Vegas. Dr. Jan Duffy serves all communities. Call ${PHONE.marketing}.`,
    path: "/explore-las-vegas",
    breadcrumbs: leafBreadcrumb("Explore Las Vegas", "/explore-las-vegas"),
  },
  photos: {
    title: "Photo Gallery | Regency at Summerlin Homes & Amenities",
    description: `Browse photos of ${COMMUNITY.name} homes, clubhouse, pools, and mountain views. Desert contemporary architecture by Toll Brothers. Call ${PHONE.marketing}.`,
    path: "/photos",
    breadcrumbs: leafBreadcrumb("Photos", "/photos"),
  },
  virtualTours: {
    title: "Virtual Tours | Regency at Summerlin Homes",
    description: `Take virtual tours of ${COMMUNITY.name} homes. 3D walkthroughs, video tours, interactive floor plans. Out-of-state buyers welcome. Call ${PHONE.marketing}.`,
    path: "/virtual-tours",
    breadcrumbs: leafBreadcrumb("Virtual Tours", "/virtual-tours"),
  },
  faq: {
    title: "FAQ | Regency at Summerlin Questions Answered",
    description: `Common questions about ${COMMUNITY.name}: age requirements, HOA rules, pets, amenities, pricing. Get answers. Call ${PHONE.marketing}.`,
    path: "/faq",
    breadcrumbs: leafBreadcrumb("FAQ", "/faq"),
  },
  about: {
    title: "About Dr. Jan Duffy | Regency at Summerlin Expert",
    description: `${AGENT.name} - Top 1% Las Vegas Realtor, Ph.D., $127M+ sales, 500+ families. Your ${COMMUNITY.name} specialist. Call ${PHONE.marketing}.`,
    path: "/about",
    breadcrumbs: leafBreadcrumb("About", "/about"),
  },
  contact: {
    title: "Contact Dr. Jan Duffy | Schedule a Tour",
    description: `Contact ${AGENT.name} for ${COMMUNITY.name} real estate. Schedule private tour, get listings, home valuation. Call/text ${PHONE.marketing}.`,
    path: "/contact",
    breadcrumbs: leafBreadcrumb("Contact", "/contact"),
  },
  blog: {
    title: "Blog | Regency at Summerlin News & Tips",
    description: `Latest news, market updates, and tips for ${COMMUNITY.name} and Las Vegas 55+ living. Expert insights from ${AGENT.name}. Call ${PHONE.marketing}.`,
    path: "/blog",
    breadcrumbs: leafBreadcrumb("Blog", "/blog"),
  },
};
