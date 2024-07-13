"use client";

import { useRef, useEffect, useState, createElement } from "react";
import mapboxgl from "mapbox-gl";
import useMapEditingStore from "@/app/hooks/useMapEditing";
import { createRoot } from "react-dom/client";
import FormCard from "./form-card";
import { FireBasePostDoc } from "@/app/types/postData";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

export default function MainMap({ posts }: { posts: FireBasePostDoc[] }) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const popupContainer = useRef<HTMLDivElement | null>(null);
  const [lng, setLng] = useState<number>(5.464995);
  const [lat, setLat] = useState<number>(52.204856);
  const [zoom, setZoom] = useState<number>(6.05);

  const { isEditing } = useMapEditingStore();

  const handleClick = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
    if (!isEditing || !map.current) return;

    const lngLat = e.lngLat;

    if (marker.current) {
      marker.current.setLngLat(lngLat);
    } else {
      marker.current = new mapboxgl.Marker()
        .setLngLat(lngLat)
        .addTo(map.current as mapboxgl.Map);
    }

    if (!popupContainer.current) {
      popupContainer.current = document.createElement("div");
    }

    const root = createRoot(popupContainer.current);
    root.render(<FormCard lng={lngLat.lng} lat={lngLat.lat} />);

    new mapboxgl.Popup({ offset: [0, -35] })
      .setLngLat(lngLat)
      .setDOMContent(popupContainer.current)
      .addTo(map.current);
  };

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: "mapbox://styles/leviszaboo/clxhbc54l008d01pf5j1o2po2",
      center: [lng, lat],
      zoom: zoom,
      maxZoom: 9.05,
      minZoom: 6.05,
      dragRotate: false,
      touchZoomRotate: false,
    });

    if (!map.current) return;

    map.current.on("move", () => {
      const center = map.current?.getCenter();
      const currentZoom = map.current?.getZoom();

      if (center && currentZoom !== undefined) {
        setLng(parseFloat(center.lng.toFixed(4)));
        setLat(parseFloat(center.lat.toFixed(4)));
        setZoom(parseFloat(currentZoom.toFixed(2)));
      }
    });
  });

  useEffect(() => {
    if (!map.current) return;

    posts.forEach((post) => {
      new mapboxgl.Marker()
        .setLngLat([post.lng, post.lat])
        .addTo(map.current as mapboxgl.Map);
    });
  }, [posts]);

  useEffect(() => {
    if (!map.current) return;

    map.current.on("click", handleClick);

    return () => {
      if (map.current) {
        map.current.off("click", handleClick);
      }
    };
  }, [isEditing]);

  useEffect(() => {
    if (!isEditing && marker.current) {
      marker.current.remove();
      marker.current = null;
    }
  }, [isEditing]);

  return <div ref={mapContainer} className="h-full w-full" />;
}
