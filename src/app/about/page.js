import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { AGENT, COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import FiftyPlusCommunities from "@/components/SeoLinks/FiftyPlusCommunities";

export const metadata = generatePageMetadata(PAGE_SEO.about);

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.about.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        About {AGENT.name}
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Las Vegas Real Estate Expert &amp; {COMMUNITY.name} Specialist
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        {AGENT.name} is a top-producing Las Vegas real estate professional with a
        Ph.D. in Market Research, more than $127M in closed sales, and over 500
        families served. As a dedicated {COMMUNITY.name} specialist, she combines
        data-driven insight with deep local knowledge to help clients navigate
        complex decisions with clarity and confidence.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        A Focus on 55+ and Luxury Communities
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        From pricing analysis and marketing strategy to contract negotiation and
        relocation support, {AGENT.name} offers full-service representation tailored
        to the needs of luxury and active adult buyers and sellers. Her expertise in
        {COMMUNITY.name} and surrounding 55+ neighborhoods ensures that clients
        understand all of their options before making a move.
      </p>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Connect with {AGENT.name}
      </h3>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Explore{" "}
        <Link href="/homes-for-sale" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          current {COMMUNITY.name} homes for sale
        </Link>{" "}
        or{" "}
        <Link href="/contact" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          schedule a consultation
        </Link>{" "}
        to discuss your real estate goals.
      </p>
      <p className="text-base text-gray-200 md:text-lg">
        To learn more about working with {AGENT.name}, schedule a consultation, or ask
        questions about {COMMUNITY.name}, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>

      {/* Related Communities Section */}
      <div className="mt-12">
        <FiftyPlusCommunities title="Dr. Jan Duffy Serves All Las Vegas 55+ Communities" />
      </div>
    </main>
  );
}


