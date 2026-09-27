import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(PAGE_SEO.amenities);

const amenitiesFaqs = [
  {
    question: "What amenities are included for residents at Regency at Summerlin?",
    answer: `Residents at ${COMMUNITY.name} enjoy a private clubhouse with indoor and outdoor pools, fitness and movement studios, lounges, and multi-purpose rooms. Outdoor amenities typically include tennis and pickleball courts, walking paths, and spaces designed for wellness and social gatherings.`,
  },
  {
    question: "Is there a lifestyle or activities program at Regency?",
    answer: `Yes. ${COMMUNITY.name} has lifestyle programming coordinated by an on-site team and resident committees. Activities may include fitness classes, clubs, social events, and educational programs throughout the year.`,
  },
  {
    question: "Can I tour the clubhouse and amenities before buying?",
    answer: `Prospective buyers can often arrange a community tour to see the clubhouse and common areas. For current tour availability and scheduling, call or text ${PHONE.marketing}.`,
  },
];

const amenitiesFaqSchema = generateFAQSchema(amenitiesFaqs);

export default function AmenitiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.amenities.breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(amenitiesFaqSchema) }}
      />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Amenities at Regency at Summerlin
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Resort-Style Clubhouse and Lifestyle
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        {COMMUNITY.name} offers amenities that rival high-end resorts, anchored by a
        private clubhouse where neighbors gather to work out, relax, and socialize.
        Residents enjoy indoor and outdoor pools, a state-of-the-art fitness center,
        movement studios, multi-purpose rooms, and comfortable lounges designed for
        connection and community.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Fitness, Sports, and Wellness
      </h2>
      <p className="mb-2 text-base text-gray-200 md:text-lg">
        Wellness is a core part of life at {COMMUNITY.name}. Outdoor amenities may
        include:
      </p>
      <ul className="mb-4 list-disc pl-5 text-base text-gray-200 md:text-lg">
        <li>Resort-style outdoor pool and spa</li>
        <li>Indoor lap or fitness pool (community-specific)</li>
        <li>Tennis and pickleball courts</li>
        <li>Walking paths and opportunities for outdoor fitness</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Social Events and Clubs
      </h3>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        A dedicated lifestyle team and active resident committees help coordinate
        events, clubs, and activities throughout the year. From fitness classes and
        educational seminars to holiday parties and hobby groups, there is always
        something happening at {COMMUNITY.name}. Explore{" "}
        <Link href="/lifestyle" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          more about the active adult lifestyle at {COMMUNITY.name}
        </Link>{" "}
        and the full range of programming available to residents.
      </p>
      <section className="mb-8" aria-labelledby="amenities-faq-heading">
        <h2 id="amenities-faq-heading" className="mb-4 text-2xl font-semibold text-white">
          Amenities FAQ
        </h2>
        <div className="space-y-4">
          {amenitiesFaqs.map((item) => (
            <details
              key={item.question}
              className="rounded-lg border border-stone-700 bg-luxury-900 p-4"
            >
              <summary className="cursor-pointer text-base font-semibold text-white hover:text-amber-400 transition-colors md:text-lg">
                {item.question}
              </summary>
              <p className="mt-3 text-base text-gray-200 md:text-lg leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
      <p className="text-base text-gray-200 md:text-lg">
        For a detailed amenities overview or current activity calendar, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>
    </main>
  );
}
