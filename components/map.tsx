"use client";

import { useState, useEffect, useRef } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import useMapEditingStore from "@/app/hooks/useMapEditing";
import FormCard from "./form-card";
import { FireBasePostDoc } from "@/app/types/postData";
import Pin from "./pin";
import Stories from "./stories";
import usePostsStore from "@/app/hooks/usePosts";
import Markers from "./markers";
import { useWindowSize } from "rooks";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

export default function MainMap({
  fetchedPosts,
}: {
  fetchedPosts: FireBasePostDoc[];
}) {
  const { isEditing } = useMapEditingStore();
  const { posts, setPosts } = usePostsStore();
  const { innerWidth } = useWindowSize();

  const viewport = {
    latitude: 52.204856,
    longitude: 5.564995,
    zoom: !innerWidth || innerWidth < 600 ? 5.65 : 6.25,
    maxZoom: 9.05,
    minZoom: !innerWidth || innerWidth < 600 ? 5.65 : 6.25,
  };

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
    <div className="absolute h-screen w-screen">
      <Map
        initialViewState={{ ...viewport }}
        mapStyle="mapbox://styles/leviszaboo/clxhbc54l008d01pf5j1o2po2"
        mapboxAccessToken={MAPBOX_TOKEN}
        onClick={handleClick}
      >
        <Markers />
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
    </div>
  );
}
