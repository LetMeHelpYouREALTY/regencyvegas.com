'use client';

import { useEffect, useState } from "react";
import { AGENT, COMMUNITY, PHONE } from "@/lib/constants";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";

export default function RealScoutListings({
  priceMin = COMMUNITY.price.min,
  priceMax = COMMUNITY.price.max,
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
  propertyTypes = ",SFR",
  className = "",
}) {
  const [status, setStatus] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.customElements?.get("realscout-office-listings")
    ) {
      return "ready";
    }
    return "loading";
  }); // loading | ready | error

  useEffect(() => {
    if (status !== "loading") return;

    if (typeof window === "undefined" || !window.customElements) {
      const fallbackTimeout = setTimeout(() => {
        setStatus((current) => (current === "loading" ? "error" : current));
      }, 10000);

      return () => clearTimeout(fallbackTimeout);
    }

    const checkId = setInterval(() => {
      if (window.customElements.get("realscout-office-listings")) {
        setStatus("ready");
        clearInterval(checkId);
      }
    }, 250);

    const timeoutId = setTimeout(() => {
      setStatus((current) => (current === "loading" ? "error" : current));
      clearInterval(checkId);
    }, 10000);

    return () => {
      clearInterval(checkId);
      clearTimeout(timeoutId);
    };
  }, [status]);

  // Fix GLVAR disclaimer text color after widget loads
  useEffect(() => {
    if (status !== "ready") return;

    const fixDisclaimerText = () => {
      // Find the widget element
      const widget = document.querySelector("realscout-office-listings");
      if (!widget) return;

      // Try to access shadow root, fallback to widget itself
      const root = widget.shadowRoot || widget;

      // Find and style elements containing disclaimer text
      const allElements = root.querySelectorAll
        ? root.querySelectorAll("*")
        : [];
      allElements.forEach((el) => {
        const text = el.textContent || "";
        if (
          text.includes("GLVAR") ||
          text.includes("Greater Las Vegas Association") ||
          text.includes("Information Deemed Reliable")
        ) {
          // Check if text is white
          const computedStyle = window.getComputedStyle(el);
          const color = computedStyle.color;
          if (
            color === "rgb(255, 255, 255)" ||
            color.includes("255, 255, 255") ||
            el.style.color === "white" ||
            el.style.color === "#fff" ||
            el.style.color === "#ffffff" ||
            el.style.color === "rgb(255, 255, 255)"
          ) {
            el.style.color = "#4b5563"; // gray-600
            el.style.fontSize = "0.75rem";
          }
        }
      });
    };

    // Use MutationObserver to watch for widget content changes
    const widget = document.querySelector("realscout-office-listings");
    if (!widget) return;

    const root = widget.shadowRoot || widget;
    const observer = new MutationObserver(() => {
      fixDisclaimerText();
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    // Run fixes at intervals to catch async content
    const timer1 = setTimeout(fixDisclaimerText, 500);
    const timer2 = setTimeout(fixDisclaimerText, 1500);
    const timer3 = setTimeout(fixDisclaimerText, 3000);
    const interval = setInterval(fixDisclaimerText, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, [status]);

  return (
    <div className={`realscout-container min-h-[320px] w-full ${className}`}>
      {status === "loading" && (
        <div className="flex flex-col items-center justify-center py-16 text-gray-300">
          <div className="relative mb-4 h-12 w-12">
            <div className="absolute inset-0 rounded-full border-4 border-stone-700" />
            <div className="absolute inset-0 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
          </div>
          <p className="text-base text-gray-200">Loading available Regency at Summerlin homes...</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex flex-col items-center justify-center rounded-xl bg-luxury-900 border border-stone-700 px-4 py-16 text-center">
          <p className="mb-4 text-base text-gray-200">
            We&apos;re having trouble loading live listings right now. Please refresh the page
            or contact us directly for current availability in Regency at Summerlin.
          </p>
          <TrackedPhoneLink
            phone={PHONE.marketing}
            location="listings_error"
            className="rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-navy-900 transition hover:bg-amber-600"
          >
            Call {PHONE.marketing}
          </TrackedPhoneLink>
        </div>
      )}

      {status === "ready" && (
        <div className="realscout-widget-wrapper">
          <realscout-office-listings
            agent-encoded-id={AGENT.realscoutId}
            sort-order={sortOrder}
            listing-status={listingStatus}
            property-types={propertyTypes}
            price-min={priceMin.toString()}
            price-max={priceMax.toString()}
          />
        </div>
      )}
    </div>
  );
}

