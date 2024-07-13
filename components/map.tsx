"use client";

import { useState, useEffect, useRef } from "react";
import ReactMapGL, { Map, Marker, Popup } from "react-map-gl";
import useMapEditingStore from "@/app/hooks/useMapEditing";
import FormCard from "./form-card";
import { FireBasePostDoc } from "@/app/types/postData";
import StoryCard from "./story-card";
import Pin from "./pin";
import Stories from "./stories";
import mapboxgl from "mapbox-gl";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const viewport = {
  latitude: 52.204856,
  longitude: 5.464995,
  zoom: 6.05,
  maxZoom: 9.05,
  minZoom: 6.05,
  dragRotate: false,
  touchZoomRotate: false,
};

export default function MainMap({ posts }: { posts: FireBasePostDoc[] }) {
  const { isEditing } = useMapEditingStore();

  const [selectedLocation, setSelectedLocation] = useState<{
    lng: number;
    lat: number;
  } | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleClick = (e: any) => {
    if (!isEditing) return;

    const { lng, lat } = e.lngLat;

    setSelectedLocation({ lng, lat });
    setShowPopup(true);
  };

  useEffect(() => {
    if (!isEditing) {
      setSelectedLocation(null);
      setShowPopup(false);
    }
  }, [isEditing]);

  return (
    <Map
      initialViewState={viewport}
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
          {showPopup && (
            <Popup
              latitude={selectedLocation.lat}
              longitude={selectedLocation.lng}
              onClose={() => setShowPopup(false)}
              closeOnClick={false}
            >
              <FormCard lng={selectedLocation.lng} lat={selectedLocation.lat} />
            </Popup>
          )}
        </>
      )}
    </Map>
  );
}
