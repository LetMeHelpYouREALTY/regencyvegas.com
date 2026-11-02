import Link from "next/link";
import Navigation from "./Navigation";
import { PHONE } from "@/lib/constants";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";

export default function Header() {
  return (
    <header className="w-full border-b border-stone-700 bg-luxury-black/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-playfair text-xl md:text-2xl font-bold text-white">
            Regency at Summerlin
          </span>
          <span className="text-xs md:text-sm text-gray-300">
            by Dr. Jan Duffy, Las Vegas Real Estate Expert
          </span>
        </Link>
        <div className="flex items-center gap-3 md:gap-6 shrink-0">
          <a
            href="https://calendly.com/drjanduffy/showing?utm_source=regencyvegas.com&utm_medium=website&utm_content=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-amber-400 hover:text-amber-500 underline-offset-2 hover:underline whitespace-nowrap"
          >
            Book a showing
          </a>
          <div className="hidden md:flex items-center gap-6">
            <Navigation />
            <TrackedPhoneLink
              phone={PHONE.marketing}
              location="header"
              className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-amber-600 transition"
            >
              Call/Text {PHONE.marketing}
            </TrackedPhoneLink>
          </div>
        </div>
      </div>
    </header>
  );
}


