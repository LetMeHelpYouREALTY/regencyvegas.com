import { COMMUNITY } from "./constants";

/**
 * Map center for Regency at Summerlin (clubhouse / Regency Square area).
 * Coordinates align with documented listings on Regency Square Ave within the
 * guard-gated community (Compass / MapQuest). Agent office NAP remains in BUSINESS.
 */
export const COMMUNITY_MAP_CENTER = {
  lat: 36.068108,
  lng: -115.311106,
  label: COMMUNITY.name,
  addressLine: "Regency Square Ave, Las Vegas, NV 89148",
};

/** Default search radius in meters (~5 miles) */
export const AMENITY_SEARCH_RADIUS_M = 8000;

/**
 * Category config for 55+ active adult — healthcare and recreation first;
 * schools last and optional in UI copy.
 */
export const AMENITY_CATEGORIES = [
  {
    id: "healthcare",
    label: "Healthcare",
    ariaLabel: "Show hospitals and medical offices near Regency at Summerlin",
    primaryTypes: ["hospital", "doctor"],
  },
  {
    id: "golf",
    label: "Golf",
    ariaLabel: "Show golf courses near Regency at Summerlin",
    primaryTypes: ["golf_course"],
  },
  {
    id: "parks",
    label: "Parks",
    ariaLabel: "Show parks and outdoor recreation near Regency at Summerlin",
    primaryTypes: ["park"],
  },
  {
    id: "community",
    label: "Recreation",
    ariaLabel: "Show community and recreation centers near Regency at Summerlin",
    primaryTypes: ["community_center"],
  },
  {
    id: "grocery",
    label: "Grocery",
    ariaLabel: "Show grocery stores near Regency at Summerlin",
    primaryTypes: ["grocery_store", "supermarket"],
  },
  {
    id: "restaurants",
    label: "Restaurants",
    ariaLabel: "Show restaurants near Regency at Summerlin",
    primaryTypes: ["restaurant"],
  },
  {
    id: "cafes",
    label: "Cafes",
    ariaLabel: "Show cafes near Regency at Summerlin",
    primaryTypes: ["cafe", "coffee_shop"],
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    ariaLabel: "Show pharmacies near Regency at Summerlin",
    primaryTypes: ["pharmacy"],
  },
  {
    id: "shopping",
    label: "Shopping",
    ariaLabel: "Show shopping near Regency at Summerlin",
    primaryTypes: ["shopping_mall"],
  },
  {
    id: "fitness",
    label: "Fitness",
    ariaLabel: "Show gyms and fitness centers near Regency at Summerlin",
    primaryTypes: ["gym"],
  },
  {
    id: "parking",
    label: "Parking",
    ariaLabel: "Show public parking near Regency at Summerlin",
    primaryTypes: ["parking"],
  },
  {
    id: "schools",
    label: "Schools",
    ariaLabel: "Show schools near Regency at Summerlin",
    primaryTypes: ["school"],
    deemphasized: true,
  },
];

/** Verified nearby destinations for static HTML, fallback list, and ItemList schema */
export const FEATURED_NEARBY_PLACES = [
  {
    name: "Downtown Summerlin",
    schemaType: "ShoppingCenter",
    streetAddress: "1980 Festival Plaza Dr",
    city: "Las Vegas",
    state: "NV",
    postalCode: "89135",
    category: "shopping",
    sourceUrl: "https://www.downtownsummerlin.com/",
    note: "Open-air shopping, dining, and seasonal events in Summerlin.",
  },
  {
    name: "Red Rock Casino Resort & Spa",
    schemaType: "Resort",
    streetAddress: "11011 W Charleston Blvd",
    city: "Las Vegas",
    state: "NV",
    postalCode: "89135",
    category: "dining",
    sourceUrl: "https://redrockresort.com/",
    note: "Dining, entertainment, and resort amenities at the base of Red Rock Canyon.",
  },
  {
    name: "Summerlin Hospital Medical Center",
    schemaType: "Hospital",
    streetAddress: "657 N. Town Center Dr",
    city: "Las Vegas",
    state: "NV",
    postalCode: "89144",
    category: "healthcare",
    sourceUrl: "https://www.summerlinhospital.com/about/contact-us",
    note: "Full-service hospital serving the Summerlin area.",
  },
  {
    name: "Whole Foods Market",
    schemaType: "GroceryStore",
    streetAddress: "2475 S Town Center Dr",
    city: "Las Vegas",
    state: "NV",
    postalCode: "89135",
    category: "grocery",
    sourceUrl: "https://www.wholefoodsmarket.com/stores/summerlin",
    note: "Grocery and prepared foods at Downtown Summerlin.",
  },
  {
    name: "TPC Las Vegas",
    schemaType: "GolfCourse",
    streetAddress: "9851 Canyon Run Dr",
    city: "Las Vegas",
    state: "NV",
    postalCode: "89144",
    category: "golf",
    sourceUrl: "https://tpc.com/lasvegas/",
    note: "Public PGA TOUR championship golf course in Summerlin.",
  },
  {
    name: "Red Rock Canyon National Conservation Area",
    schemaType: "Park",
    streetAddress: "1000 Scenic Loop Dr",
    city: "Las Vegas",
    state: "NV",
    postalCode: "89161",
    category: "parks",
    sourceUrl:
      "https://www.blm.gov/visit/red-rock-canyon-national-conservation-area",
    note: "Scenic desert recreation and hiking west of Summerlin.",
  },
];

export const NEARBY_AMENITY_FAQS = [
  {
    question: `What grocery stores are near ${COMMUNITY.name}?`,
    answer: `Whole Foods Market at 2475 S Town Center Dr in Downtown Summerlin is one of the closest full-service grocers, with additional supermarkets along Charleston Blvd and throughout Summerlin South — typically within a short drive of ${COMMUNITY.name}.`,
  },
  {
    question: `How far is ${COMMUNITY.name} from the Las Vegas Strip?`,
    answer: `The Las Vegas Strip is roughly 12–15 miles east of ${COMMUNITY.name}; drive time is approximately 25–35 minutes depending on traffic and your destination on the Strip.`,
  },
  {
    question: `Are there hospitals near ${COMMUNITY.name}?`,
    answer: `Yes. Summerlin Hospital Medical Center on Town Center Drive is a major hospital serving the area, with additional medical offices and urgent care options throughout Summerlin.`,
  },
  {
    question: `Where do residents shop and dine close to ${COMMUNITY.name}?`,
    answer: `Downtown Summerlin is the primary hub for shopping and restaurants, with Red Rock Casino Resort & Spa nearby for additional dining and entertainment.`,
  },
  {
    question: `Is golf available near ${COMMUNITY.name}?`,
    answer: `TPC Las Vegas and several other courses serve the Summerlin area; ${COMMUNITY.name} also offers on-site tennis, pickleball, and clubhouse fitness amenities.`,
  },
  {
    question: `How far is Harry Reid International Airport from ${COMMUNITY.name}?`,
    answer: `Harry Reid International Airport is approximately 12 miles from ${COMMUNITY.name}; plan on roughly 20–30 minutes by car in typical traffic.`,
  },
  {
    question: `What outdoor recreation is near ${COMMUNITY.name}?`,
    answer: `Red Rock Canyon National Conservation Area is minutes west of Summerlin for hiking and scenic drives, and ${COMMUNITY.name} includes walking paths within the guard-gated community.`,
  },
  {
    question: `How close is Downtown Summerlin to ${COMMUNITY.name}?`,
    answer: `Downtown Summerlin is approximately 5–10 minutes by car from ${COMMUNITY.name}, offering shopping, dining, and services without crossing town.`,
  },
];

/** Hyperlocal copy blocks for the nearby amenities page (server-rendered) */
export const NEARBY_CATEGORY_COPY = [
  {
    id: "healthcare",
    title: "Healthcare & Medical Services",
    body: `Residents of ${COMMUNITY.name} are served by Summerlin Hospital Medical Center and a network of physician offices and specialty clinics throughout Summerlin. For routine care, pharmacies and urgent care locations are accessible along Charleston Blvd and in Downtown Summerlin.`,
  },
  {
    id: "golf",
    title: "Golf & Country Clubs",
    body: `Summerlin is known for golf. TPC Las Vegas and other public and private courses are a short drive from ${COMMUNITY.name}. Inside the community, residents enjoy tennis, pickleball, bocce, and a fitness center at the clubhouse.`,
  },
  {
    id: "parks",
    title: "Parks & Outdoor Recreation",
    body: `Red Rock Canyon National Conservation Area offers desert hiking and scenic loops west of the community. Within ${COMMUNITY.name}, landscaped walking paths and mountain views support daily outdoor activity.`,
  },
  {
    id: "dining",
    title: "Dining & Entertainment",
    body: `Downtown Summerlin concentrates restaurants from casual to upscale. Red Rock Casino Resort & Spa adds additional dining, movies, and entertainment at the edge of Summerlin near Red Rock Canyon.`,
  },
  {
    id: "shopping",
    title: "Shopping & Services",
    body: `Downtown Summerlin is the main retail destination for ${COMMUNITY.name} residents, with national retailers, local boutiques, and everyday services. Additional shopping corridors lie along Charleston Blvd and the 215 Beltway.`,
  },
  {
    id: "commute",
    title: "Commute & Key Destinations",
    body: `From ${COMMUNITY.name} in The Cliffs village (${COMMUNITY.zipCode}), approximate drive times are: Downtown Summerlin 5–10 minutes; Summerlin Hospital area 10–15 minutes; Las Vegas Strip 25–35 minutes; Harry Reid International Airport 20–30 minutes. Times vary with traffic.`,
  },
];

const CATEGORY_TO_CURATED = {
  healthcare: ["healthcare"],
  golf: ["golf"],
  parks: ["parks"],
  community: [],
  grocery: ["grocery"],
  restaurants: ["dining"],
  cafes: ["dining"],
  pharmacies: ["healthcare"],
  shopping: ["shopping"],
  fitness: [],
  parking: [],
  schools: [],
};

export function getPlacesForCategory(categoryId) {
  const keys = CATEGORY_TO_CURATED[categoryId] ?? [];
  if (keys.length === 0) return [];
  return FEATURED_NEARBY_PLACES.filter((p) => keys.includes(p.category));
}

export function formatPlaceAddress(place) {
  return `${place.streetAddress}, ${place.city}, ${place.state} ${place.postalCode}`;
}

export function buildDirectionsUrl(placeName, address) {
  const query = encodeURIComponent(`${placeName}, ${address}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}

export function buildEmbedFallbackUrl() {
  const { lat, lng } = COMMUNITY_MAP_CENTER;
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}
