import { AGENT, BUSINESS, COMMUNITY, PHONE, SITE_URL } from "./constants";
import {
  COMMUNITY_MAP_CENTER,
  FEATURED_NEARBY_PLACES,
} from "./nearbyAmenities";

export const AGENT_SCHEMA_ID = `${SITE_URL}/#realestate-agent`;

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Monday",
    opens: BUSINESS.hours.monday.open,
    closes: BUSINESS.hours.monday.close,
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Tuesday",
    opens: BUSINESS.hours.tuesday.open,
    closes: BUSINESS.hours.tuesday.close,
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Wednesday",
    opens: BUSINESS.hours.wednesday.open,
    closes: BUSINESS.hours.wednesday.close,
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Thursday",
    opens: BUSINESS.hours.thursday.open,
    closes: BUSINESS.hours.thursday.close,
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Friday",
    opens: BUSINESS.hours.friday.open,
    closes: BUSINESS.hours.friday.close,
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: BUSINESS.hours.saturday.open,
    closes: BUSINESS.hours.saturday.close,
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: BUSINESS.hours.sunday.open,
    closes: BUSINESS.hours.sunday.close,
  },
];

export const agentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": AGENT_SCHEMA_ID,
  name: AGENT.name,
  description: `Las Vegas real estate expert specializing in ${COMMUNITY.name}, a Toll Brothers 55+ guard-gated community in Summerlin.`,
  telephone: PHONE.marketing,
  email: AGENT.email,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.zipCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.066444",
    longitude: "-115.313180",
  },
  areaServed: {
    "@type": "Place",
    name: "Summerlin, Las Vegas, Nevada",
  },
  priceRange: `$${(COMMUNITY.price.min / 1000).toFixed(0)}K - $${(
    COMMUNITY.price.max / 1000000
  ).toFixed(1)}M+`,
  memberOf: {
    "@type": "Organization",
    name: AGENT.brokerage,
  },
  openingHoursSpecification,
  sameAs: [
    "https://drjanduffy.com",
    "https://lasvegashomeexpert.com",
    "https://summerlinwestrealestate.com",
    "https://lasvegas55plushomes.com",
    "https://suncitysummerlinhomesforsale.com",
    "https://heritagestonebridge.com",
    "https://reverencesummerlinhomes.com",
    "https://drjanduffyreviews.com",
    "https://askdrjanduffy.com",
  ],
  ...(BUSINESS.reviews.count > 0 && {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.reviews.rating.toString(),
      reviewCount: BUSINESS.reviews.count.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  }),
};

export const reviewSchema =
  BUSINESS.reviews.count > 0
    ? {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@id": AGENT_SCHEMA_ID,
        },
        author: {
          "@type": "Organization",
          name: "Google Reviews",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: BUSINESS.reviews.rating.toString(),
          bestRating: "5",
          worstRating: "1",
        },
      }
    : null;

export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function generateCommunityPlaceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: COMMUNITY.name,
    description: `Toll Brothers 55+ guard-gated community in The Cliffs village, ${COMMUNITY.city}, ${COMMUNITY.state}.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMMUNITY.city,
      addressRegion: COMMUNITY.state,
      postalCode: COMMUNITY.zipCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMMUNITY_MAP_CENTER.lat,
      longitude: COMMUNITY_MAP_CENTER.lng,
    },
  };
}

export function generateNearbyPlacesItemListSchema() {
  const listPlaces = FEATURED_NEARBY_PLACES.filter(
    (place) => place.schemaType !== "Residence" && place.streetAddress
  );

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Featured places near ${COMMUNITY.name}`,
    itemListElement: listPlaces.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.streetAddress,
          addressLocality: place.city,
          addressRegion: place.state,
          postalCode: place.postalCode,
          addressCountry: "US",
        },
      },
    })),
  };
}

export function generateFloorPlanSchema(plan) {
  const base = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${plan.name} - ${COMMUNITY.name}`,
    description: plan.description,
    brand: {
      "@type": "Brand",
      name: "Toll Brothers",
    },
  };
  if (plan.priceMin && plan.priceMax) {
    return {
      ...base,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: plan.priceMin,
        highPrice: plan.priceMax,
        offerCount: plan.available || "Multiple",
      },
    };
  }
  return base;
}
