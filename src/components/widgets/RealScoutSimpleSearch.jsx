'use client';

import { useEffect, useState } from "react";
import { AGENT } from "@/lib/constants";

export default function RealScoutSimpleSearch({ className = "" }) {
  const [status, setStatus] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.customElements?.get("realscout-simple-search")
    ) {
      return "ready";
    }
    return "loading";
  });

  useEffect(() => {
    if (status !== "loading") return;

    if (typeof window === "undefined" || !window.customElements) {
      const fallbackTimeout = setTimeout(() => {
        setStatus((current) => (current === "loading" ? "error" : current));
      }, 10000);

      return () => clearTimeout(fallbackTimeout);
    }

    const checkId = setInterval(() => {
      if (window.customElements.get("realscout-simple-search")) {
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

  return (
    <div className={`w-full ${className}`}>
      {status === "loading" && (
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-stone-700 bg-luxury-black/90 px-6 py-10 text-base text-gray-200 shadow-soft">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full border-2 border-stone-700" />
            <div className="absolute inset-0 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
          </div>
          <p>Loading Regency at Summerlin home search…</p>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-stone-700 bg-luxury-900 px-6 py-8 text-center text-base text-gray-200 shadow-soft">
          <p className="mb-2">
            We&apos;re having trouble loading the search widget right now.
          </p>
          <p>
            Please refresh the page or contact {AGENT.name} directly for a
            custom list of available homes.
          </p>
        </div>
      )}

      {status === "ready" && (
        <div className="rounded-2xl border border-stone-700 bg-luxury-black px-4 py-6 shadow-soft md:px-6 md:py-8">
          <realscout-simple-search agent-encoded-id={AGENT.realscoutId} />
        </div>
      )}
    </div>
  );
}


