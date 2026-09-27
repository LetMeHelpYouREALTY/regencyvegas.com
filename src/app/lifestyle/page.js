import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.lifestyle);

export default function LifestylePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.lifestyle.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Active Adult Lifestyle at Regency at Summerlin
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        A Community Designed for 55+ Living
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Life at {COMMUNITY.name} is about more than beautiful homes. It&apos;s about
        connection, wellness, and enjoying a thoughtfully curated 55+ lifestyle.
        Residents can choose from an array of social events, fitness options, and
        clubs—or simply enjoy the quiet comfort of a guard-gated community with
        like-minded neighbors.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Social Events, Clubs, and Activities
      </h2>
      <p className="mb-2 text-base text-gray-200 md:text-lg">
        Typical offerings in a Regency community may include:
      </p>
      <ul className="mb-4 list-disc pl-5 text-base text-gray-200 md:text-lg">
        <li>Holiday celebrations and community parties</li>
        <li>Fitness and wellness classes</li>
        <li>Book clubs, card groups, and hobby circles</li>
        <li>Outings to local restaurants, shows, and attractions</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Create the Retirement Lifestyle You Want
      </h3>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Whether you prefer a full social calendar or a more relaxed pace,{" "}
        {COMMUNITY.name} gives you the flexibility to shape your days. Learn more about{" "}
        <Link href="/amenities" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          the amenities and clubhouse facilities
        </Link>{" "}
        and{" "}
        <Link href="/location" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          the community location
        </Link>{" "}
        that support this active 55+ lifestyle.
      </p>
      <p className="text-base text-gray-200 md:text-lg">
        To learn more about current lifestyle programming or to talk about whether this
        community fits your goals, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>
    </main>
  );
}


