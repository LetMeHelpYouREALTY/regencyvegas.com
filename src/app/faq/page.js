import { AGENT, COMMUNITY, PHONE } from "@/lib/constants";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/schema";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";

const buyerFaqs = [
  {
    question: "What are homes selling for in Regency right now?",
    answer: `Regency resales are averaging around $${(COMMUNITY.price.median / 1000).toFixed(0)}K with a median of about $${Math.round((COMMUNITY.price.median / 2000))}/sq ft — that's premium pricing for the 55+ market, but you're getting Toll Brothers quality with mountain views you can't find elsewhere. The guard-gated security and resort amenities justify the price point for most buyers. Want current active listings? Call or text ${PHONE.marketing}.`,
  },
  {
    question: "What's the age requirement for Regency?",
    answer: `Regency is a 55+ community — at least one resident must be 55 or older. There's no maximum age, and younger spouses/partners are welcome. It's perfect for active adults who want low-maintenance living without feeling "old." The Lifestyle Director keeps the calendar packed with activities. Ready to see what's available? Call or text ${AGENT.name} at ${PHONE.marketing}.`,
  },
  {
    question: "How does Regency compare to Sun City Summerlin?",
    answer: `Great question! Sun City has ~8,000 homes and 3 golf courses — it's massive and established. Regency is boutique luxury: ${COMMUNITY.totalHomes} homes, newer construction (${COMMUNITY.yearBuilt}), and that modern Toll Brothers aesthetic with 10-foot ceilings. Sun City averages $400K-$600K; Regency runs $${(COMMUNITY.price.min / 1000).toFixed(0)}K-$${(COMMUNITY.price.max / 1000000).toFixed(1)}M+. Both are guard-gated with amazing amenities. The choice depends on your priorities — size vs. intimacy, established vs. new, price point. We can show you both in one day. Call or text ${PHONE.marketing}.`,
  },
  {
    question: "What floor plan should I choose?",
    answer: `Depends on your lifestyle! Summit Collection (1,665-1,792 sq ft) is perfect for "right-sizing" — quality over quantity. Palisades (2,003-2,223 sq ft) adds a den and more outdoor space — great for entertaining. Pinnacle (2,235-2,428 sq ft) is the premium tier with designer appointments; the Marlette is the only one with a 3-car garage. What's your must-have? Call or text ${PHONE.marketing} to discuss.`,
  },
  {
    question: "Are there any new construction homes available?",
    answer: `Toll Brothers completed most of Regency's ${COMMUNITY.totalHomes} homes between ${COMMUNITY.yearBuilt}. New construction is very limited now. The good news? Resales often have $50K-$100K+ in upgrades already installed. Plus you skip the 6-12 month build wait. We track every listing daily — let us find you the perfect match. Call or text ${PHONE.marketing}.`,
  },
];

const sellerFaqs = [
  {
    question: "What's my Regency home worth?",
    answer: `Online estimates miss 80% of what makes Regency special — your view, your upgrades, your lot position. Pinnacle homes with Strip views are commanding 10-15% premiums. We'll do a detailed walkthrough and show you exactly where you stand against current competition. Let's uncover your home's true market value — call or text ${PHONE.marketing}.`,
  },
  {
    question: "How long are homes taking to sell?",
    answer: `Priced right, Regency homes are moving quickly. The key is positioning — 55+ buyers from California and the Midwest know exactly what they want. Overpriced listings sit; market-priced listings attract multiple showings. We'll help you find that sweet spot. Ready to discuss strategy? Call or text ${PHONE.marketing}.`,
  },
  {
    question: "What upgrades add the most value?",
    answer: `In Regency, buyers pay premiums for: extended covered patios (outdoor living is huge), upgraded flooring, solar panels (electric bills matter at 55+), and pool/spa additions. Kitchen and bath upgrades help but don't over-improve — you won't recoup $100K in custom finishes. Let us evaluate what you have and what's worth highlighting. Call or text ${PHONE.marketing}.`,
  },
  {
    question: "Should I sell before buying my next home?",
    answer: `With 500+ families guided through Vegas moves, here's our advice: know your equity position first. If you're downsizing or relocating, your Regency equity likely covers a healthy down payment elsewhere. We can coordinate timing to minimize double-moves or carrying costs. Every situation is different — let's map out your specific scenario. Call or text ${PHONE.marketing}.`,
  },
];

const generalFaqs = [
  {
    question: "What amenities does Regency offer?",
    answer: `The 22,000 sq ft clubhouse is the heart of Regency: indoor lap pool, outdoor resort pools, state-of-the-art fitness center, game rooms, and social lounges. Outside you've got tennis courts, 6 pickleball courts, 2 bocce ball courts, plus miles of walking trails with mountain views. The on-site Lifestyle Director plans everything from wine tastings to group trips. It's like living at a resort. Want a tour? Call or text ${PHONE.marketing}.`,
  },
  {
    question: "Is Regency safe?",
    answer: `Regency has both a staffed guard gate AND an electronic resident-only gate — double security. The 55+ age restriction means a quieter, established community. You'll know your neighbors. Many residents mention the "peace of mind" factor as a top reason they chose Regency. It's one of the most secure 55+ communities in Vegas. Ready to see it in person? Call or text ${PHONE.marketing}.`,
  },
  {
    question: "How far is Regency from the Strip/airport/hospitals?",
    answer: `Location is a Regency strength: 12 miles to Harry Reid Airport (20-25 min), 15 miles to the Strip, and immediate access to the 215 Beltway. Summerlin Hospital is 10 minutes away. Downtown Summerlin shopping/dining is 5 minutes. You get mountain serenity without sacrificing convenience. We can drive you the routes during a tour. Call or text ${PHONE.marketing}.`,
  },
  {
    question: "What are the HOA fees?",
    answer: `Regency HOA is approximately $${COMMUNITY.hoa.regency}/month (includes front yard maintenance, amenities, guard gate) plus the Summerlin Master Plan fee of approximately $${COMMUNITY.hoa.master}/month, for a total of around $${COMMUNITY.hoa.total}/month. This covers all the resort-style amenities, security, and maintenance that make Regency special.`,
  },
  {
    question: "Are pets allowed in Regency?",
    answer: `Most 55+ communities in Las Vegas, including Regency at Summerlin, allow pets with certain limitations on number, size, and breed. Always review the most current CC&Rs and HOA guidelines for specifics. Many residents enjoy walking their pets on the community trails with mountain views.`,
  },
];

// Combine all FAQs for schema
const allFaqs = [...buyerFaqs, ...sellerFaqs, ...generalFaqs];

const faqSchema = generateFAQSchema(allFaqs);

export const metadata = generatePageMetadata(PAGE_SEO.faq);

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.faq.breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Regency at Summerlin FAQ
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Common Questions About Living in Regency at Summerlin
      </h2>
      <p className="mb-8 text-base text-gray-200 md:text-lg">
        Below are answers to frequently asked questions about{" "}
        {COMMUNITY.name}, organized by topic. If you don&apos;t see your question here, reach out
        anytime—our goal is to make your decision as clear and confident as
        possible.
      </p>

      {/* Buyer FAQs */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-white">Questions for Buyers</h2>
        <div className="space-y-4">
          {buyerFaqs.map((item) => (
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

      {/* Seller FAQs */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-white">Questions for Sellers</h2>
        <div className="space-y-4">
          {sellerFaqs.map((item) => (
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

      {/* General/Lifestyle FAQs */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-white">General & Lifestyle Questions</h2>
        <div className="space-y-4">
          {generalFaqs.map((item) => (
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

      {/* CTA Section */}
      <div className="mt-12 rounded-2xl border border-stone-700 bg-luxury-900 p-6 md:p-8">
        <h3 className="mb-3 text-xl font-semibold text-white">
          Have More Questions?
        </h3>
        <p className="mb-4 text-base text-gray-200 md:text-lg">
          For detailed, up-to-date answers tailored to your situation,{" "}
          <TrackedPhoneLink
            phone={PHONE.marketing}
            location="faq_page"
            className="font-semibold text-amber-400 hover:text-amber-500"
          >
            call or text {PHONE.marketing}
          </TrackedPhoneLink>
          . We&apos;re here to help you navigate every aspect of buying or selling in {COMMUNITY.name}.
        </p>
      </div>
    </main>
  );
}


