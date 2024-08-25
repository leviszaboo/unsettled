"use client";

import { useState, useEffect, useRef } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import useMapEditingStore from "@/app/hooks/useMapEditing";
import FormCard from "./form-card";
import { FireBasePostDoc } from "@/app/types/postData";
import Pin from "./pin";
import Stories from "./stories";
import usePostsStore from "@/app/hooks/usePosts";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const bounds = [
  48.440258,
  -0.90593, // Southwest coordinates
  55.291129,
  -1.164164, // Northeast coordinates
];

// latitude: 52.204856,
// longitude: 5.464995

const viewport = {
  latitude: 52.204856,
  longitude: 5.464995,
  zoom: 6.25,
  maxZoom: 9.05,
  minZoom: 6.25,
  dragRotate: false,
  touchZoomRotate: false,
  // maxBounds: [[bounds[1], bounds[0]], [bounds[3], bounds[2]]]
};

export default function MainMap({
  fetchedPosts,
}: {
  fetchedPosts: FireBasePostDoc[];
}) {
  const { isEditing } = useMapEditingStore();
  const { posts, setPosts } = usePostsStore();

  const [selectedLocation, setSelectedLocation] = useState<{
    lng: number;
    lat: number;
  } | null>(null);

  const handleClick = (e: any) => {
    if (!isEditing) return;

    const { lng, lat } = e.lngLat;

    setSelectedLocation({ lng, lat });
  };

  useEffect(() => {
    if (!isEditing) {
      setSelectedLocation(null);
    }
  }, [isEditing]);

  useEffect(() => {
    setPosts(fetchedPosts);
  }, [fetchedPosts, setPosts]);

  return (
    <Map
      initialViewState={viewport}
      // maxBounds={[[bounds[1], bounds[0]], [bounds[3], bounds[2]]]}
      mapStyle="mapbox://styles/leviszaboo/clxhbc54l008d01pf5j1o2po2"
      mapboxAccessToken={MAPBOX_TOKEN}
      onClick={handleClick}
    >
      <Stories posts={posts} />
      {selectedLocation && isEditing && (
        <>
          <Marker
            latitude={selectedLocation.lat}
            longitude={selectedLocation.lng}
          >
            <Pin />
          </Marker>
          <Popup
            latitude={selectedLocation.lat}
            longitude={selectedLocation.lng}
            onClose={() => setSelectedLocation(null)}
            closeOnClick={false}
          >
            <FormCard lng={selectedLocation.lng} lat={selectedLocation.lat} />
          </Popup>
        </>
      )}
    </Map>
  );
}
