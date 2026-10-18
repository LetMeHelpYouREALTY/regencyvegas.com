import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import RealScoutListings from "@/components/widgets/RealScoutListings";
import RealScoutSimpleSearch from "@/components/widgets/RealScoutSimpleSearch";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";
import TrackedEmailLink from "@/components/ui/TrackedEmailLink";
import { PHONE, COMMUNITY, COLLECTIONS, AGENT } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import NearbyAmenityMapSection from "@/components/sections/NearbyAmenityMapSection";

export const metadata = generatePageMetadata(PAGE_SEO.home);

const amenities = [
  {
    title: "Indoor & Outdoor Pools",
    icon: (
      <svg
        className="h-8 w-8 md:h-10 md:w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 18c1.5 0 2.25-1 3-1s1.5 1 3 1 2.25-1 3-1 1.5 1 3 1 2.25-1 3-1 1.5 1 3 1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6h16v6H4z"
        />
      </svg>
    ),
  },
  {
    title: "Fitness & Wellness",
    icon: (
      <svg
        className="h-8 w-8 md:h-10 md:w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.75 6.75h2.5v10.5h-2.5zM14.75 6.75h2.5v10.5h-2.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 9h3M17 9h3M4 15h3M17 15h3"
        />
      </svg>
    ),
  },
  {
    title: "Tennis & Pickleball",
    icon: (
      <svg
        className="h-8 w-8 md:h-10 md:w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="9" r="4" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 14l6 6"
        />
      </svg>
    ),
  },
  {
    title: "Clubs & Social Events",
    icon: (
      <svg
        className="h-8 w-8 md:h-10 md:w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 5h14v7H5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12l7 4 7-4M9 21h6"
        />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main>
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="lazyOnload"
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero-mountain.jpg"
          alt="Regency at Summerlin luxury 55+ homes with Red Rock mountain views in Las Vegas"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          quality={50}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-900/85 via-navy-900/80 to-navy-800/70" />
        <div className="relative z-20">
          <div className="mx-auto flex min-h-[420px] max-w-6xl flex-col items-center justify-center gap-10 px-4 py-16 text-center md:min-h-[520px] md:py-20">
            <div className="max-w-xl rounded-2xl bg-black/55 px-6 py-6 text-white shadow-soft backdrop-blur-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                {COMMUNITY.name} · 55+ Luxury in {COMMUNITY.village}
              </p>
              <h1 className="mb-4 font-playfair text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Regency at Summerlin Homes for Sale
              </h1>
              <p className="mb-8 text-base text-gray-100 md:text-lg">
                Discover low-maintenance, single-story homes Built by Toll Brothers in a
                guard-gated 55+ community with resort-style amenities, sweeping Red Rock and city
                views, and lock-and-leave convenience in the heart of The Cliffs.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/homes-for-sale"
                  className="rounded-lg bg-amber-500 px-8 py-4 text-sm font-semibold text-navy-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl"
                >
                  View Available Homes
                </Link>
                <TrackedPhoneLink
                  phone={PHONE.marketing}
                  location="hero"
                  className="rounded-lg border-2 border-white/80 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                >
                  Call/Text {PHONE.marketing}
                </TrackedPhoneLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-luxury-black py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gray-200 md:mb-6">
              Regency at Summerlin Snapshot
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div className="rounded-2xl bg-luxury-900 p-4 text-center shadow-soft border border-stone-700">
              <div className="mb-1 text-3xl font-bold text-white md:text-4xl">
                {COMMUNITY.totalHomes}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-300 md:text-sm">
                Luxury Homes
              </div>
            </div>
            <div className="rounded-2xl bg-luxury-900 p-4 text-center shadow-soft border border-stone-700">
              <div className="mb-1 text-3xl font-bold text-white md:text-4xl">
                {COMMUNITY.acreage}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-300 md:text-sm">
                Acres in The Cliffs
              </div>
            </div>
            <div className="rounded-2xl bg-luxury-900 p-4 text-center shadow-soft border border-stone-700">
              <div className="mb-1 text-2xl font-bold text-white md:text-3xl">
                ${COMMUNITY.price.min.toLocaleString()} - $
                {COMMUNITY.price.max.toLocaleString()}+
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-300 md:text-sm">
                Typical Price Range
              </div>
            </div>
            <div className="rounded-2xl bg-luxury-900 p-4 text-center shadow-soft border border-stone-700">
              <div className="mb-1 text-3xl font-bold text-white md:text-4xl">
                ${COMMUNITY.hoa.total}/mo
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-300 md:text-sm">
                All-In HOA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search section */}
      <section className="bg-luxury-black py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-2 font-playfair text-3xl text-white md:text-4xl">
            Search Regency at Summerlin Homes
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-gray-200 md:text-lg">
            Find resale homes Built by Toll Brothers in this guard-gated 55+ community. Use the
            search below to see what&apos;s currently available in {COMMUNITY.name}.
          </p>
        </div>
        <div className="mx-auto max-w-4xl px-4">
          <RealScoutSimpleSearch />
        </div>
      </section>

      {/* Community overview */}
      <section className="bg-luxury-black py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-start">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
              Homes Built by Toll Brothers
            </span>
            <h2 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
              Where Luxury Meets Lock-and-Leave Living
            </h2>
            <p className="text-base leading-relaxed text-gray-200 md:text-lg">
              {COMMUNITY.name} is a luxury 55+ active adult community Built by Toll Brothers in{" "}
              {COMMUNITY.village} of Summerlin, {COMMUNITY.city}, {COMMUNITY.state}. Spanning
              over {COMMUNITY.acreage} acres of elevated desert terrain, the neighborhood is
              known for its single-story homes Built by Toll Brothers, dramatic Red Rock and city
              views, and a 22,000 sq ft resort-style clubhouse at the heart of the community.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-200 md:text-base">
              Homeowners enjoy guard-gated security, front-yard maintenance, indoor and outdoor
              pools, fitness and wellness programming, tennis and pickleball, and a full
              calendar of clubs and events curated by an on-site lifestyle director. With quick
              access to Downtown Summerlin shopping, golf, hiking at Red Rock Canyon, and the
              dining and entertainment of the Las Vegas Strip, Regency offers true
              lock-and-leave living without sacrificing luxury or convenience.
            </p>
          </div>
          <div className="rounded-2xl bg-luxury-900 p-6 shadow-soft border border-stone-700">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white">
              Regency at a Glance
            </h3>
            <dl className="space-y-3 text-sm text-gray-200">
              <div className="flex items-center justify-between">
                <dt className="font-medium">Total homes</dt>
                <dd>{COMMUNITY.totalHomes.toLocaleString()}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-medium">Year built</dt>
                <dd>{COMMUNITY.yearBuilt}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-medium">Typical price range</dt>
                <dd>
                  ${COMMUNITY.price.min.toLocaleString()} – $
                  {COMMUNITY.price.max.toLocaleString()}+
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-medium">Estimated median value</dt>
                <dd>${COMMUNITY.price.median.toLocaleString()}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-medium">Total HOA (approx.)</dt>
                <dd>${COMMUNITY.hoa.total}/mo</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-gray-400">
              Market stats are approximate and change as new homes list and sell. For the most
              current numbers and a custom market update, call {PHONE.marketing}.
            </p>
          </div>
        </div>
      </section>

      {/* Buyer / seller services */}
      <section className="bg-navy-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Buying or selling in {COMMUNITY.name}?
            </p>
            <h2 className="mb-5 font-playfair text-3xl text-white md:text-4xl">
              Resale Homes Built by Toll Brothers
            </h2>
            <p className="text-lg leading-relaxed text-white md:text-xl">
              Whether you are searching for your ideal Regency at Summerlin home or preparing to
              sell, {AGENT.name} represents buyers and sellers of resale homes Built by Toll
              Brothers throughout the community.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-700/30 bg-white/10 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-white/15">
              <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <Image
                  src="/images/photos/regency-community.jpg"
                  alt="Couple touring a Regency at Summerlin home"
                  width={640}
                  height={360}
                  className="h-40 w-full object-cover md:h-48"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                For Buyers
              </p>
              <h3 className="mb-4 font-playfair text-2xl font-semibold text-white md:text-3xl">
                Find Your Regency at Summerlin Home
              </h3>
              <p className="mb-5 text-lg leading-relaxed text-white md:text-xl">
                Get access to current MLS listings, coming-soon opportunities, and off-market
                homes in {COMMUNITY.name}. Benefit from detailed knowledge of every floor plan,
                view lot, and upgrade that adds real value.
              </p>
              <ul className="mb-5 grid grid-cols-2 gap-3 text-base text-white">
                <li className="rounded-lg bg-navy-800/80 px-4 py-3 text-center font-semibold">
                  MLS &amp; off-market access
                </li>
                <li className="rounded-lg bg-navy-800/80 px-4 py-3 text-center font-semibold">
                  Floor plan expertise
                </li>
                <li className="rounded-lg bg-navy-800/80 px-4 py-3 text-center font-semibold">
                  Private showings
                </li>
                <li className="rounded-lg bg-navy-800/80 px-4 py-3 text-center font-semibold">
                  55+ community guidance
                </li>
              </ul>
              <Link
                href="/homes-for-sale"
                className="inline-flex items-center text-base font-semibold text-amber-300 hover:text-amber-200"
              >
                Browse homes for sale
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </article>

            <article className="rounded-2xl border border-amber-700/30 bg-white/10 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-white/15">
              <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <Image
                  src="/images/photos/regency-community.jpg"
                  alt="Regency at Summerlin home prepared for sale"
                  width={640}
                  height={360}
                  className="h-40 w-full object-cover md:h-48"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                For Sellers
              </p>
              <h3 className="mb-4 font-playfair text-2xl font-semibold text-white md:text-3xl">
                Sell Your Regency at Summerlin Home
              </h3>
              <p className="mb-5 text-lg leading-relaxed text-white md:text-xl">
                Discover what your home Built by Toll Brothers is worth based on real Regency at
                Summerlin resale data—not generic online estimates. Position your home to stand
                out with targeted marketing to qualified 55+ buyers.
              </p>
              <ul className="mb-5 grid grid-cols-2 gap-3 text-base text-white">
                <li className="rounded-lg bg-navy-800/80 px-4 py-3 text-center font-semibold">
                  Complimentary valuation
                </li>
                <li className="rounded-lg bg-navy-800/80 px-4 py-3 text-center font-semibold">
                  Data-driven pricing
                </li>
                <li className="rounded-lg bg-navy-800/80 px-4 py-3 text-center font-semibold">
                  55+ buyer marketing
                </li>
                <li className="rounded-lg bg-navy-800/80 px-4 py-3 text-center font-semibold">
                  Staging &amp; prep guidance
                </li>
              </ul>
              <Link
                href="/selling"
                className="inline-flex items-center text-base font-semibold text-amber-300 hover:text-amber-200"
              >
                Learn about selling in Regency
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-center font-playfair text-3xl text-white md:text-4xl">
            Three Distinct Home Collections
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-white md:text-xl">
            Explore all nine single-story floor plans across the Summit, Palisades, and Pinnacle
            Collections—each crafted for lock-and-leave 55+ living in {COMMUNITY.name}.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { ...COLLECTIONS.summit, image: "/images/photos/regency-summit_370.png" },
              { ...COLLECTIONS.palisades, image: "/images/photos/regency-palisade_370.png" },
              { ...COLLECTIONS.pinnacle, image: "/images/photos/regency-pinnacle_370.png" },
            ].map((col) => (
              <Link
                key={col.name}
                href={
                  col.name === COLLECTIONS.summit.name
                    ? "/summit-collection"
                    : col.name === COLLECTIONS.palisades.name
                    ? "/palisades-collection"
                    : "/pinnacle-collection"
                }
                className="group block rounded-2xl border border-amber-700/30 bg-white/10 p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-white/15"
              >
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                  Built by Toll Brothers
                </div>
                <div className="mb-5 overflow-hidden rounded-2xl border border-amber-700/40 bg-black/30">
                  <Image
                    src={col.image}
                    alt={`${col.name} model home in Regency at Summerlin`}
                    width={640}
                    height={360}
                    className="h-40 w-full object-cover md:h-48"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-1">
                  <h3 className="mb-3 font-playfair text-2xl font-semibold text-amber-300 transition-colors group-hover:text-amber-200">
                    {col.name}
                  </h3>
                  <p className="mb-2 text-lg font-semibold text-white">
                    {col.sqftRange} sq ft
                  </p>
                  <p className="mb-5 text-lg text-white">
                    {col.beds} beds • {col.baths} baths • lots {col.lotSize}
                  </p>
                  <span className="inline-flex items-center justify-center text-base font-semibold text-amber-400 transition-colors group-hover:text-amber-300">
                    View Collection
                    <svg
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="bg-luxury-black py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-3 text-center font-playfair text-3xl text-white md:text-4xl">
            Homes for Sale in Regency at Summerlin
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base text-gray-200 md:text-lg">
            Included below are homes for sale and real estate in {COMMUNITY.name}. Click
            any property for full details, photos, and the option to request a private
            tour.
          </p>
          <RealScoutListings />
        </div>
      </section>

      <NearbyAmenityMapSection className="bg-navy-950 text-white" />

      {/* Amenities preview */}
      <section className="bg-navy-800 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-center font-playfair text-3xl text-white md:text-4xl">
            Resort-Style 55+ Amenities
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-white md:text-xl">
            Enjoy a private clubhouse, indoor and outdoor pools, fitness center, tennis
            and pickleball, and a full calendar of social events curated by an on-site
            lifestyle director.
          </p>
          <div className="mb-10 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {amenities.map((item) => (
              <div key={item.title} className="group">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-amber-400 transition-colors group-hover:bg-white/20">
                  {item.icon}
                </div>
                <p className="text-base font-semibold text-white">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/amenities"
              className="inline-block rounded-lg bg-amber-500 px-8 py-3 text-sm font-semibold text-navy-900 hover:bg-amber-600 transition"
            >
              Explore All Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* Agent CTA */}
      <section className="relative overflow-hidden bg-linear-to-br from-navy-900 via-navy-800 to-amber-800/60 py-16 text-white md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="mx-auto h-full max-w-6xl bg-[radial-gradient(circle_at_top,rgba(214,158,46,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(26,54,93,0.65),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
            Your Regency at Summerlin Expert
          </p>
          <h2 className="mb-3 font-playfair text-3xl md:text-4xl">
            Ready to Buy or Sell in Regency?
          </h2>
          <p className="mb-2 text-lg">
            {AGENT.name} · {AGENT.title}
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-100 md:text-lg">
            With a Ph.D. in Market Research, $127M+ in closed sales, and 500+ families served,
            {AGENT.name} provides data-driven guidance for buying or selling in {COMMUNITY.name}{" "}
            and across Las Vegas.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TrackedPhoneLink
              phone={PHONE.marketing}
              location="agent_cta"
              className="inline-flex items-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-navy-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-amber-400"
            >
              Call/Text {PHONE.marketing}
            </TrackedPhoneLink>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-amber-300/70 px-8 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100 hover:text-navy-900"
            >
              Schedule a Private Tour
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-6 text-sm text-gray-100 sm:flex-row sm:gap-10">
            <div className="text-center">
              <div className="mb-1 font-semibold tracking-[0.18em] text-amber-200">
                Phone
              </div>
              <TrackedPhoneLink
                phone={PHONE.marketing}
                location="agent_cta_contact_row"
                className="text-sm font-semibold text-white"
              >
                {PHONE.marketing}
              </TrackedPhoneLink>
            </div>
            <div className="hidden h-10 w-px bg-white/30 sm:block" />
            <div className="text-center">
              <div className="mb-1 font-semibold tracking-[0.18em] text-amber-200">
                Email
              </div>
              <TrackedEmailLink
                email={AGENT.email}
                location="agent_cta_contact_row"
                className="text-sm font-semibold text-white underline-offset-2 hover:underline"
              >
                {AGENT.email}
              </TrackedEmailLink>
            </div>
            <div className="hidden h-10 w-px bg-white/30 sm:block" />
            <div className="text-center">
              <div className="mb-1 font-semibold tracking-[0.18em] text-amber-200">
                Website
              </div>
              <Link
                href="/"
                className="text-sm font-semibold text-white underline-offset-2 hover:underline"
              >
                RegencyVegas.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
