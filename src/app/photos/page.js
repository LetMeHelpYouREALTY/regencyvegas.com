import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.photos);

export default function PhotosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.photos.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Regency at Summerlin Photo Gallery
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Explore Homes, Amenities, and Surroundings
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        This gallery highlights the architecture, amenities, and setting that make{" "}
        {COMMUNITY.name} one of Las Vegas&apos; premier 55+ communities. From
        desert-contemporary elevations and designer kitchens to resort-style pools
        and mountain views, each image offers a glimpse of everyday life here.
      </p>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Schedule an In-Person Visit
      </h3>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        For out-of-state buyers or those who prefer a preview before visiting, explore{" "}
        <Link
          href="/virtual-tours"
          className="font-semibold text-amber-400 hover:text-amber-500 hover:underline"
        >
          virtual tours of {COMMUNITY.name} homes
        </Link>{" "}
        or browse{" "}
        <Link href="/homes-for-sale" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          current listings
        </Link>{" "}
        to see what&apos;s available.
      </p>
      <p className="text-base text-gray-200 md:text-lg">
        Photos are a great starting point, but seeing the community in person brings the
        lifestyle into focus. To arrange a private tour of homes and amenities in{" "}
        {COMMUNITY.name}, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>
    </main>
  );
}


