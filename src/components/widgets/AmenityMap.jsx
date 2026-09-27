"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import AmenityMapFallback from "@/components/widgets/AmenityMapFallback";
import {
  placeToListItem,
  searchCategory,
} from "@/lib/amenityPlacesSearch";
import {
  loadGoogleMaps,
  mapsAuthFailed,
} from "@/lib/google-maps-loader";
import {
  AMENITY_CATEGORIES,
  COMMUNITY_MAP_CENTER,
  buildDirectionsUrl,
  getPlacesForCategory,
} from "@/lib/nearbyAmenities";

const MAP_HEIGHT = 420;

function buildInfoWindowContent({ title, lines, directionsHref }) {
  const wrap = document.createElement("div");
  wrap.style.maxWidth = "240px";
  const strong = document.createElement("strong");
  strong.textContent = title;
  wrap.appendChild(strong);
  lines.forEach((line) => {
    wrap.appendChild(document.createElement("br"));
    wrap.appendChild(document.createTextNode(line));
  });
  if (directionsHref) {
    wrap.appendChild(document.createElement("br"));
    const link = document.createElement("a");
    link.href = directionsHref;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Directions";
    wrap.appendChild(link);
  }
  return wrap;
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
  const [useFallback, setUseFallback] = useState(
    !apiKey || mapsAuthFailed
  );
  const [loadState, setLoadState] = useState(
    !apiKey ? "no-key" : "idle"
  );
  const initStartedRef = useRef(false);
  const [curatedPlaces, setCuratedPlaces] = useState(null);
  const [loadingPlaces, setLoadingPlaces] = useState(false);

  const height = compact ? 320 : MAP_HEIGHT;

  useEffect(() => {
    const onAuthFailure = () => setUseFallback(true);
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, []);

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
          buildInfoWindowContent({
            title: COMMUNITY_MAP_CENTER.label,
            lines: [COMMUNITY_MAP_CENTER.addressLine],
            directionsHref: buildDirectionsUrl(
              COMMUNITY_MAP_CENTER.label,
              COMMUNITY_MAP_CENTER.addressLine
            ),
          })
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
          const dirUrl =
            place.mapsUri ||
            buildDirectionsUrl(place.name, place.address || "");
          infoWindowRef.current.setContent(
            buildInfoWindowContent({
              title: place.name,
              lines: place.address ? [place.address] : [],
              directionsHref: dirUrl,
            })
          );
          infoWindowRef.current.open({ anchor: marker, map });
        });
        placeMarkersRef.current.push(marker);
      });
    },
    [clearPlaceMarkers]
  );

  useEffect(() => {
    if (useFallback || !isVisible || !apiKey || initStartedRef.current) {
      return;
    }
    if (mapsAuthFailed) {
      setUseFallback(true);
      return;
    }
    initStartedRef.current = true;
    let cancelled = false;

    loadGoogleMaps(apiKey)
      .then(async () => {
        if (cancelled || !containerRef.current) return;
        setLoadState("loading");
        const maps = window.google.maps;
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
      })
      .catch(() => {
        if (!cancelled) setUseFallback(true);
      });

    return () => {
      cancelled = true;
    };
  }, [apiKey, isVisible, mapId, showCommunityMarker, useFallback]);

  useEffect(() => {
    if (useFallback || loadState !== "ready" || !mapRef.current) return;
    const category = AMENITY_CATEGORIES.find((c) => c.id === activeCategory);
    if (!category) return;

    let cancelled = false;
    async function loadPlaces() {
      setLoadingPlaces(true);
      setCuratedPlaces(null);
      try {
        const center = {
          lat: COMMUNITY_MAP_CENTER.lat,
          lng: COMMUNITY_MAP_CENTER.lng,
        };
        const rawPlaces = await searchCategory(
          center,
          category.id,
          category.primaryTypes
        );
        if (cancelled) return;
        const results = rawPlaces.map(placeToListItem);
        const maps = window.google.maps;
        renderPlaceMarkers(mapRef.current, maps, results);
        if (results.length === 0) {
          const curated = getPlacesForCategory(category.id);
          setCuratedPlaces(curated.length > 0 ? curated : null);
        }
      } catch {
        if (!cancelled) {
          clearPlaceMarkers();
          const curated = getPlacesForCategory(category.id);
          setCuratedPlaces(curated.length > 0 ? curated : null);
        }
      } finally {
        if (!cancelled) setLoadingPlaces(false);
      }
    }
    loadPlaces();
    return () => {
      cancelled = true;
    };
  }, [
    activeCategory,
    loadState,
    renderPlaceMarkers,
    useFallback,
    clearPlaceMarkers,
  ]);

  if (useFallback) {
    return <AmenityMapFallback compact={compact} />;
  }

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
      {curatedPlaces && curatedPlaces.length > 0 && (
        <ul className="grid gap-3 sm:grid-cols-2" aria-live="polite">
          {curatedPlaces.map((place) => (
            <li
              key={place.name}
              className="rounded-lg border border-stone-700 bg-luxury-900/80 p-4"
            >
              <p className="font-semibold text-white">{place.name}</p>
              <p className="mt-1 text-sm text-gray-300">
                {place.streetAddress}, {place.city}, {place.state}{" "}
                {place.postalCode}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
