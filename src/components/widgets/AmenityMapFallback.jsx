import {
  AMENITY_CATEGORIES,
  buildEmbedFallbackUrl,
  COMMUNITY_MAP_CENTER,
  FEATURED_NEARBY_PLACES,
  formatPlaceAddress,
  buildDirectionsUrl,
} from "@/lib/nearbyAmenities";

/**
 * Keyless map embed plus curated amenity list when Maps JS API is unavailable.
 */
export default function AmenityMapFallback({
  compact = false,
  places = null,
}) {
  const embedUrl = buildEmbedFallbackUrl();
  const height = compact ? 320 : 400;
  const listPlaces =
    places ??
    FEATURED_NEARBY_PLACES.filter((p) => p.schemaType !== "Residence");

  return (
    <div className="space-y-6">
      <div
        className="w-full overflow-hidden rounded-lg border border-stone-700 bg-luxury-900"
        style={{ minHeight: height }}
      >
        <iframe
          src={embedUrl}
          width="100%"
          height={height}
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map centered on ${COMMUNITY_MAP_CENTER.label} in Las Vegas`}
        />
      </div>
      <p className="text-sm text-gray-400">
        Showing a map overview and verified nearby destinations below. Category
        search is available when the interactive map loads successfully.
      </p>
      <div>
        <h3 className="mb-3 text-lg font-semibold text-white">
          Featured places near {COMMUNITY_MAP_CENTER.label}
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {listPlaces.map((place) => {
            const address = formatPlaceAddress(place);
            return (
              <li
                key={place.name}
                className="rounded-lg border border-stone-700 bg-luxury-900/80 p-4"
              >
                <p className="font-semibold text-white">{place.name}</p>
                <p className="mt-1 text-sm text-gray-300">{address}</p>
                {place.note && (
                  <p className="mt-2 text-sm text-gray-400">{place.note}</p>
                )}
                <a
                  href={buildDirectionsUrl(place.name, address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-amber-400 hover:text-amber-300"
                >
                  Directions
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-xs text-gray-500" aria-hidden="true">
        Categories:{" "}
        {AMENITY_CATEGORIES.map((c) => c.label).join(", ")}
      </p>
    </div>
  );
}
