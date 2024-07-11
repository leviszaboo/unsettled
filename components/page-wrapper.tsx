"use client"

import React, { useState } from 'react'
import useMapEditingStore from '@/app/hooks/useMapEditing'
import Pin from './pin'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const { isEditing } = useMapEditingStore()
  const [svgPosition, setSvgPosition] = useState<{ x: number, y: number} | null>(null);
  
  const handleClick = (event: any) => {
    if (isEditing) {
      // If currently editing, remove the SVG
      setSvgPosition({ x: event.clientX, y: event.clientY });
    } else {
      setSvgPosition(null);
    }

    console.log(svgPosition);
  };
  return (
    <div className={`absolute h-screen w-screen ${isEditing ? "editing" : null}`} onClick={handleClick}>
      {children}
      {svgPosition && <Pin x={svgPosition.x} y={svgPosition.y} />}
    </div>
  ) 
}
