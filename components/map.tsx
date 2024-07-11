"use client";

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

export default function MainMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState<number>(5.464995);
  const [lat, setLat] = useState<number>(52.204856);
  const [zoom, setZoom] = useState<number>(6.05);

  useEffect(() => {
    if (map.current) return; 
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: 'mapbox://styles/leviszaboo/clxhbc54l008d01pf5j1o2po2',
      center: [lng, lat],
      zoom: zoom,
      maxZoom: 9.05,
      minZoom: 6.05,
      dragRotate: false,
      touchZoomRotate: false,
    });

    if (!map.current) return;

    map.current.on('move', () => {
      const center = map.current?.getCenter();
      const currentZoom = map.current?.getZoom();
      
      if (center && currentZoom !== undefined) {
        setLng(parseFloat(center.lng.toFixed(4)));
        setLat(parseFloat(center.lat.toFixed(4)));
        setZoom(parseFloat(currentZoom.toFixed(2)));
      }
    });
  }, []);

  return (
    <div ref={mapContainer} className='h-full w-full' />
  );  
};