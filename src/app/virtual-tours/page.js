import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.virtualTours);

export default function VirtualToursPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.virtualTours.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Regency at Summerlin Virtual Tours
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Tour Regency Homes from Wherever You Are
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Whether you&apos;re out of state, still planning your move, or prefer to
        preview homes before visiting in person, virtual tours are a convenient way
        to experience floor plans and finishes in {COMMUNITY.name}. We offer video
        walkthroughs, 3D tours, and live video appointments.
      </p>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Request Virtual Tours and Custom Walkthroughs
      </h3>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Browse{" "}
        <Link href="/photos" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          the photo gallery of {COMMUNITY.name} homes and amenities
        </Link>{" "}
        and{" "}
        <Link href="/homes-for-sale" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          view current listings
        </Link>{" "}
        to identify which homes you&apos;d like to tour virtually.
      </p>
      <p className="text-base text-gray-200 md:text-lg">
        To receive links to existing tours or schedule a live video walkthrough of
        specific homes in {COMMUNITY.name}, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>. We&apos;ll tailor the
        experience to the plans and features that matter most to you.
      </p>
    </main>
  );
}


