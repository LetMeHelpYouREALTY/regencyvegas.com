import { AGENT, BUSINESS, COMMUNITY, PHONE } from "./constants";
import {
  COMMUNITY_MAP_CENTER,
  FEATURED_NEARBY_PLACES,
} from "./nearbyAmenities";

export const agentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: AGENT.name,
  description: `Las Vegas Real Estate Expert specializing in ${COMMUNITY.name} 55+ community`,
  telephone: PHONE.marketing,
  url: "https://regencyvegas.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.zipCode,
  },
  areaServed: [
    {
      "@type": "Place",
      name: COMMUNITY.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: COMMUNITY_MAP_CENTER.lat,
        longitude: COMMUNITY_MAP_CENTER.lng,
      },
    },
    {
      "@type": "Place",
      name: "Summerlin, Las Vegas, Nevada",
    },
  ],
  priceRange: `$${(COMMUNITY.price.min / 1000).toFixed(0)}K - $${(
    COMMUNITY.price.max / 1000000
  ).toFixed(1)}M+`,
  sameAs: [
    "https://drjanduffy.com",
    "https://lasvegashomeexpert.com",
    "https://summerlinwestrealestate.com",
    "https://lasvegas55plushomes.com",
    "https://suncitysummerlinhomesforsale.com",
    "https://heritagestonebridge.com",
    "https://reverencesummerlinhomes.com",
  ],
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `${AGENT.name} - ${COMMUNITY.name} Specialist`,
  description: `Luxury 55+ real estate specialist for ${COMMUNITY.name} in Las Vegas`,
  telephone: PHONE.marketing,
  email: AGENT.email,
  url: "https://regencyvegas.com",
  priceRange: "$$$",
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
  sameAs: [
    "https://drjanduffy.com",
    "https://lasvegashomeexpert.com",
    "https://drjanduffyreviews.com",
    "https://askdrjanduffy.com",
  ],
  openingHoursSpecification: [
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

// Review schema for Google star ratings in search results
export const reviewSchema = BUSINESS.reviews.count > 0 ? {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "LocalBusiness",
    name: `${AGENT.name} - ${COMMUNITY.name} Specialist`,
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
} : null;

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
      item: `https://regencyvegas.com${item.path}`,
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
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Featured places near ${COMMUNITY.name}`,
    itemListElement: FEATURED_NEARBY_PLACES.map((place, index) => ({
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


