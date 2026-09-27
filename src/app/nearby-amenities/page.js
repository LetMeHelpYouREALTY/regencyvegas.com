import Link from "next/link";
import AmenityMap from "@/components/widgets/AmenityMap";
import { AGENT, BUSINESS, COMMUNITY, PHONE } from "@/lib/constants";
import {
  NEARBY_AMENITY_FAQS,
  NEARBY_CATEGORY_COPY,
  FEATURED_NEARBY_PLACES,
  formatPlaceAddress,
  buildDirectionsUrl,
} from "@/lib/nearbyAmenities";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateCommunityPlaceSchema,
  generateNearbyPlacesItemListSchema,
} from "@/lib/schema";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";
import TrackedEmailLink from "@/components/ui/TrackedEmailLink";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Nearby Amenities", path: "/nearby-amenities" },
]);
const faqSchema = generateFAQSchema(NEARBY_AMENITY_FAQS);
const communitySchema = generateCommunityPlaceSchema();
const itemListSchema = generateNearbyPlacesItemListSchema();

export const metadata = generatePageMetadata(PAGE_SEO.nearbyAmenities);

export default function NearbyAmenitiesPage() {
  return (
    <main className="bg-luxury-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(communitySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
          Nearby Amenities in {COMMUNITY.name}, Las Vegas
        </h1>
        <p className="mb-8 max-w-3xl text-base text-gray-200 md:text-lg">
          {COMMUNITY.name} sits in The Cliffs village of Summerlin South ({COMMUNITY.zipCode}),
          combining guard-gated 55+ living with quick access to shopping, healthcare, golf,
          and Red Rock Canyon. Use the interactive map below to explore by category, or read
          the hyperlocal guide for verified destinations and approximate drive times.
        </p>

        <section
          className="mb-12 rounded-2xl border border-stone-700 bg-luxury-900 p-6 shadow-soft md:p-8"
          aria-labelledby="interactive-map-heading"
        >
          <h2
            id="interactive-map-heading"
            className="mb-4 text-xl font-semibold text-white md:text-2xl"
          >
            Interactive Amenity Map
          </h2>
          <p className="mb-6 text-base text-gray-200">
            Filter restaurants, healthcare, grocery, parks, golf, and more around{" "}
            {COMMUNITY.name}. The community marker shows the Regency Square area within
            the guard-gated neighborhood.
          </p>
          <AmenityMap />
        </section>

        <section className="mb-12" aria-labelledby="featured-places-heading">
          <h2
            id="featured-places-heading"
            className="mb-6 font-playfair text-2xl text-white md:text-3xl"
          >
            Featured Nearby Places
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {FEATURED_NEARBY_PLACES.filter((p) => p.schemaType !== "Residence").map(
              (place) => {
                const address = formatPlaceAddress(place);
                return (
                  <li
                    key={place.name}
                    className="rounded-xl border border-stone-700 bg-luxury-900/90 p-5"
                  >
                    <h3 className="text-lg font-semibold text-amber-300">
                      {place.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">{address}</p>
                    <p className="mt-2 text-base text-gray-200">{place.note}</p>
                    <a
                      href={buildDirectionsUrl(place.name, address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-amber-400 hover:text-amber-300"
                    >
                      Get directions
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </section>

        <section className="mb-12 space-y-8" aria-labelledby="local-guide-heading">
          <h2
            id="local-guide-heading"
            className="font-playfair text-2xl text-white md:text-3xl"
          >
            Local Area Guide
          </h2>
          {NEARBY_CATEGORY_COPY.map((block) => (
            <article key={block.id}>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {block.title}
              </h3>
              <p className="text-base text-gray-200 md:text-lg">{block.body}</p>
            </article>
          ))}
        </section>

        <section
          className="mb-12 rounded-2xl border border-stone-700 bg-luxury-900 p-6 md:p-8"
          aria-labelledby="nearby-faq-heading"
        >
          <h2
            id="nearby-faq-heading"
            className="mb-6 font-playfair text-2xl text-white md:text-3xl"
          >
            Nearby Living FAQ
          </h2>
          <dl className="space-y-6">
            {NEARBY_AMENITY_FAQS.map((faq) => (
              <div key={faq.question}>
                <dt className="mb-2 text-lg font-semibold text-amber-300">
                  {faq.question}
                </dt>
                <dd className="text-base text-gray-200 md:text-lg">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className="rounded-2xl border border-amber-700/40 bg-linear-to-br from-navy-900 via-luxury-900 to-amber-900/30 p-8 text-center"
          aria-labelledby="agent-trust-heading"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            Your {COMMUNITY.name} Specialist
          </p>
          <h2
            id="agent-trust-heading"
            className="mb-3 font-playfair text-2xl text-white md:text-3xl"
          >
            Work with {AGENT.name}
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-base text-gray-100 md:text-lg">
            {AGENT.name} is a licensed Nevada REALTOR ({AGENT.license}) with{" "}
            {AGENT.brokerage}, specializing in {COMMUNITY.name} and Las Vegas 55+
            communities. Get hyperlocal guidance on amenities, resale values, and tours.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TrackedPhoneLink
              phone={PHONE.marketing}
              location="nearby_amenities_cta"
              className="inline-flex min-h-11 items-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-navy-900 hover:bg-amber-400"
            >
              Call/Text {PHONE.marketing}
            </TrackedPhoneLink>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full border border-amber-300/70 px-8 py-3 text-sm font-semibold text-amber-100 hover:bg-amber-100 hover:text-navy-900"
            >
              Schedule a tour
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            {BUSINESS.fullAddress} ·{" "}
            <TrackedEmailLink
              email={AGENT.email}
              location="nearby_amenities_footer"
              className="text-amber-400 hover:text-amber-300"
            >
              {AGENT.email}
            </TrackedEmailLink>
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Explore{" "}
            <Link href="/location" className="text-amber-400 hover:underline">
              community location
            </Link>
            ,{" "}
            <Link href="/amenities" className="text-amber-400 hover:underline">
              on-site amenities
            </Link>
            , and{" "}
            <Link href="/homes-for-sale" className="text-amber-400 hover:underline">
              current listings
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
