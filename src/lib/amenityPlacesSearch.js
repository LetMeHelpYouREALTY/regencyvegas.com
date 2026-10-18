import { AMENITY_SEARCH_RADIUS_M } from "./nearbyAmenities";

/** One Places request per category per page session */
const cache = new Map();

export function searchCategory(center, categoryId, types) {
  let pending = cache.get(categoryId);
  if (!pending) {
    pending = (async () => {
      const { Place } = await google.maps.importLibrary("places");
      const { places } = await Place.searchNearby({
        fields: [
          "displayName",
          "location",
          "formattedAddress",
          "googleMapsURI",
        ],
        locationRestriction: {
          center,
          radius: AMENITY_SEARCH_RADIUS_M,
        },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        rankPreference: "POPULARITY",
      });
      return places ?? [];
    })();
    pending.catch(() => cache.delete(categoryId));
    cache.set(categoryId, pending);
  }
  return pending;
}

export function placeToListItem(place) {
  const loc = place.location;
  let lat;
  let lng;
  if (loc) {
    if (typeof loc.lat === "function") {
      lat = loc.lat();
      lng = loc.lng();
    } else if (typeof loc.toJSON === "function") {
      const json = loc.toJSON();
      lat = json.lat;
      lng = json.lng;
    }
  }
  const name =
    typeof place.displayName === "string"
      ? place.displayName
      : place.displayName?.text || "Place";
  return {
    name,
    address: place.formattedAddress,
    lat,
    lng,
    mapsUri: place.googleMapsURI,
  };
}
