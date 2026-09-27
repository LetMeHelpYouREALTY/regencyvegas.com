import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { AGENT, BUSINESS, PHONE, COMMUNITY } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import ContactForm from "@/components/forms/ContactForm";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";
import TrackedEmailLink from "@/components/ui/TrackedEmailLink";
import GoogleMapEmbed from "@/components/ui/GoogleMapEmbed";
import GoogleActionButtons from "@/components/ui/GoogleActionButtons";

export const metadata = generatePageMetadata(PAGE_SEO.contact);

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-16 bg-luxury-black">
      <BreadcrumbJsonLd items={PAGE_SEO.contact.breadcrumbs} />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Contact {AGENT.name}
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Schedule a Tour or Ask a Question
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Whether you&apos;re just beginning to explore {COMMUNITY.name} or are ready
        to schedule a private tour, {AGENT.name} is here to help. Share your goals,
        timeline, and any questions you have about homes, amenities, or the buying
        and selling process.
      </p>

      {/* Contact Form */}
      <div className="mb-12 rounded-2xl border border-stone-700 bg-luxury-900 p-6 shadow-soft md:p-8">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Send Us a Message
        </h2>
        <ContactForm />
      </div>

      {/* Alternative Contact Methods */}
      <div className="mb-8 rounded-2xl border border-stone-700 bg-luxury-900 p-6 shadow-soft">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Or Contact Us Directly
        </h2>
        <ul className="space-y-3 text-base text-gray-200 md:text-lg">
          <li className="flex items-center">
            <span className="mr-3 text-amber-400">📞</span>
            <span>
              Phone/Text:{" "}
              <TrackedPhoneLink
                phone={PHONE.marketing}
                location="contact_page"
                className="text-amber-400 hover:text-amber-500 font-semibold"
              >
                {PHONE.marketing}
              </TrackedPhoneLink>
            </span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-amber-400">✉️</span>
            <span>
              Email:{" "}
              <TrackedEmailLink
                email={AGENT.email}
                location="contact_page"
                className="text-amber-400 hover:text-amber-500 font-semibold"
              >
                {AGENT.email}
              </TrackedEmailLink>
            </span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-amber-400">📍</span>
            <span>
              Address: <span className="font-semibold">{BUSINESS.fullAddress}</span>
            </span>
          </li>
        </ul>

        {/* Business Hours */}
        <div className="mt-6 pt-6 border-t border-stone-700">
          <h3 className="mb-3 text-lg font-semibold text-white">Business Hours</h3>
          <ul className="space-y-1 text-sm text-gray-200">
            <li className="flex justify-between">
              <span>Monday - Friday:</span>
              <span className="font-semibold">{BUSINESS.hours.monday.display}</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday - Sunday:</span>
              <span className="font-semibold">{BUSINESS.hours.saturday.display}</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-6 border-t border-stone-700">
          <GoogleActionButtons location="contact_page" />
        </div>
      </div>

      {/* Google Map */}
      <div className="mb-8 rounded-2xl border border-stone-700 bg-luxury-900 p-6 shadow-soft">
        <h2 className="mb-4 text-xl font-semibold text-white">Our Location</h2>
        <GoogleMapEmbed />
      </div>

      <div className="rounded-2xl border border-stone-700 bg-luxury-900 p-6 shadow-soft">
        <h3 className="mb-3 text-lg font-semibold text-white">
          How Can We Help?
        </h3>
        <p className="text-base text-gray-200 md:text-lg">
          Let us know if you&apos;d like listing updates, a custom home search, a
          market valuation, or simply an introduction to life at {COMMUNITY.name}. We
          look forward to connecting.
        </p>
      </div>
    </main>
  );
}


