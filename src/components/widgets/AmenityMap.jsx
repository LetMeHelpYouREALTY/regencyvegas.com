"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import AmenityMapFallback from "@/components/widgets/AmenityMapFallback";
import {
  AMENITY_CATEGORIES,
  AMENITY_SEARCH_RADIUS_M,
  COMMUNITY_MAP_CENTER,
  buildDirectionsUrl,
} from "@/lib/nearbyAmenities";

const MAP_HEIGHT = 420;
const SCRIPT_ID = "google-maps-js-api";

function loadGoogleMapsScript(apiKey) {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("No window"));
      return;
    }
    if (window.google?.maps) {
      resolve(window.google.maps);
      return;
    }
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.addEventListener("load", () => resolve(window.google.maps));
      existing.addEventListener("error", reject);
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey
    )}&libraries=places&loading=async`;
    script.onload = () => resolve(window.google.maps);
    script.onerror = () => reject(new Error("Maps script failed"));
    document.head.appendChild(script);
  });
}

async function fetchPlacesForCategory(maps, category, center) {
  try {
    const placesLib = await maps.importLibrary("places");
    const { Place } = placesLib;
    if (Place?.searchNearby) {
      const { places } = await Place.searchNearby({
        fields: [
          "displayName",
          "location",
          "formattedAddress",
          "rating",
          "googleMapsURI",
        ],
        locationRestriction: {
          center: { lat: center.lat, lng: center.lng },
          radius: AMENITY_SEARCH_RADIUS_M,
        },
        includedPrimaryTypes: category.primaryTypes,
        maxResultCount: 12,
      });
      return (places || []).map((place) => ({
        name: place.displayName,
        address: place.formattedAddress,
        rating: place.rating,
        lat: place.location?.lat(),
        lng: place.location?.lng(),
        mapsUri: place.googleMapsURI,
      }));
    }
  } catch {
    // Fall through to legacy Nearby Search
  }

  return new Promise((resolve) => {
    const div = document.createElement("div");
    const service = new maps.places.PlacesService(div);
    const request = {
      location: new maps.LatLng(center.lat, center.lng),
      radius: AMENITY_SEARCH_RADIUS_M,
      type: category.legacyType,
    };
    service.nearbySearch(request, (results, status) => {
      if (status !== maps.places.PlacesServiceStatus.OK || !results) {
        resolve([]);
        return;
      }
      resolve(
        results.map((r) => ({
          name: r.name,
          address: r.vicinity,
          rating: r.rating,
          lat: r.geometry?.location?.lat(),
          lng: r.geometry?.location?.lng(),
          mapsUri: r.place_id
            ? `https://www.google.com/maps/place/?q=place_id:${r.place_id}`
            : undefined,
        }))
      );
    });
  });
}

export default function AmenityMap({ compact = false }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;
  const groupId = useId();
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const communityMarkerRef = useRef(null);
  const placeMarkersRef = useRef([]);
  const infoWindowRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    AMENITY_CATEGORIES[0].id
  );
  const [loadState, setLoadState] = useState(apiKey ? "idle" : "no-key");
  const initStartedRef = useRef(false);
  const [places, setPlaces] = useState([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((m) => m.setMap(null));
    placeMarkersRef.current = [];
  }, []);

  const showCommunityMarker = useCallback(
    async (map, maps) => {
      if (communityMarkerRef.current) {
        communityMarkerRef.current.setMap(null);
      }
      const position = {
        lat: COMMUNITY_MAP_CENTER.lat,
        lng: COMMUNITY_MAP_CENTER.lng,
      };
      let marker;
      if (mapId && maps.marker?.AdvancedMarkerElement) {
        try {
          const { AdvancedMarkerElement } = await maps.importLibrary("marker");
          marker = new AdvancedMarkerElement({
            map,
            position,
            title: COMMUNITY_MAP_CENTER.label,
          });
        } catch {
          marker = new maps.Marker({
            map,
            position,
            title: COMMUNITY_MAP_CENTER.label,
            zIndex: 1000,
          });
        }
      } else {
        marker = new maps.Marker({
          map,
          position,
          title: COMMUNITY_MAP_CENTER.label,
          zIndex: 1000,
        });
      }
      communityMarkerRef.current = marker;
      if (!infoWindowRef.current) {
        infoWindowRef.current = new maps.InfoWindow();
      }
      marker.addListener("click", () => {
        infoWindowRef.current.setContent(
          `<div style="max-width:220px"><strong>${COMMUNITY_MAP_CENTER.label}</strong><br/>${COMMUNITY_MAP_CENTER.addressLine}<br/><a href="${buildDirectionsUrl(
            COMMUNITY_MAP_CENTER.label,
            COMMUNITY_MAP_CENTER.addressLine
          )}" target="_blank" rel="noopener">Directions</a></div>`
        );
        infoWindowRef.current.open({ anchor: marker, map });
      });
    },
    [mapId]
  );

  const renderPlaceMarkers = useCallback(
    (map, maps, items) => {
      clearPlaceMarkers();
      if (!infoWindowRef.current) {
        infoWindowRef.current = new maps.InfoWindow();
      }
      items.forEach((place) => {
        if (place.lat == null || place.lng == null) return;
        const marker = new maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener("click", () => {
          const ratingText =
            place.rating != null ? `Rating: ${place.rating}/5<br/>` : "";
          const dirUrl =
            place.mapsUri ||
            buildDirectionsUrl(place.name, place.address || "");
          infoWindowRef.current.setContent(
            `<div style="max-width:240px"><strong>${place.name}</strong><br/>${ratingText}${place.address || ""}<br/><a href="${dirUrl}" target="_blank" rel="noopener">Directions</a></div>`
          );
          infoWindowRef.current.open({ anchor: marker, map });
        });
        placeMarkersRef.current.push(marker);
      });
    },
    [clearPlaceMarkers]
  );

  useEffect(() => {
    if (!isVisible || !apiKey || initStartedRef.current) return;
    initStartedRef.current = true;
    let cancelled = false;

    async function init() {
      setLoadState("loading");
      try {
        const maps = await loadGoogleMapsScript(apiKey);
        if (cancelled || !containerRef.current) return;
        const mapOptions = {
          center: {
            lat: COMMUNITY_MAP_CENTER.lat,
            lng: COMMUNITY_MAP_CENTER.lng,
          },
          zoom: 13,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        };
        if (mapId) {
          mapOptions.mapId = mapId;
        }
        const map = new maps.Map(containerRef.current, mapOptions);
        mapRef.current = map;
        await showCommunityMarker(map, maps);
        setLoadState("ready");
      } catch {
        if (!cancelled) setLoadState("error");
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, [apiKey, isVisible, mapId, showCommunityMarker]);

  useEffect(() => {
    if (loadState !== "ready" || !mapRef.current) return;
    const category = AMENITY_CATEGORIES.find((c) => c.id === activeCategory);
    if (!category) return;

    let cancelled = false;
    async function loadPlaces() {
      setLoadingPlaces(true);
      try {
        const maps = window.google.maps;
        const results = await fetchPlacesForCategory(
          maps,
          category,
          COMMUNITY_MAP_CENTER
        );
        if (!cancelled) {
          setPlaces(results);
          renderPlaceMarkers(mapRef.current, maps, results);
        }
      } catch {
        if (!cancelled) setPlaces([]);
      } finally {
        if (!cancelled) setLoadingPlaces(false);
      }
    }
    loadPlaces();
    return () => {
      cancelled = true;
    };
  }, [activeCategory, loadState, renderPlaceMarkers]);

  if (!apiKey || loadState === "error") {
    return <AmenityMapFallback compact={compact} />;
  }

  const height = compact ? 320 : MAP_HEIGHT;

  return (
    <div className="space-y-4">
      <div
        role="group"
        aria-labelledby={`${groupId}-label`}
        className="flex flex-wrap gap-2"
      >
        <span id={`${groupId}-label`} className="sr-only">
          Filter nearby amenities by category
        </span>
        {AMENITY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            aria-label={cat.ariaLabel}
            aria-pressed={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              cat.deemphasized ? "opacity-80" : ""
            } ${
              activeCategory === cat.id
                ? "bg-amber-500 text-navy-900"
                : "border border-stone-600 bg-luxury-900 text-gray-200 hover:border-amber-500/60"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div
        className="relative w-full overflow-hidden rounded-lg border border-stone-700 bg-stone-900"
        style={{ minHeight: height }}
      >
        <div
          ref={containerRef}
          className="h-full w-full"
          style={{ height }}
          role="application"
          aria-label={`Interactive map of amenities near ${COMMUNITY_MAP_CENTER.label}`}
        />
        {(loadState === "loading" || loadingPlaces) && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-luxury-900/70 text-sm text-gray-200"
            aria-live="polite"
          >
            Loading map…
          </div>
        )}
      </div>
      {places.length > 0 && (
        <p className="text-sm text-gray-400" aria-live="polite">
          Showing {places.length} {AMENITY_CATEGORIES.find((c) => c.id === activeCategory)?.label?.toLowerCase()}{" "}
          results near {COMMUNITY_MAP_CENTER.label}.
        </p>
      )}
    </div>
  );
}
