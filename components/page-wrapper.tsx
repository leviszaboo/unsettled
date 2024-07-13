"use client";

import React, { use, useEffect, useState } from "react";
import useMapEditingStore from "@/app/hooks/useMapEditing";
import Pin from "./pin";
import FormCard from "./form-card";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEditing } = useMapEditingStore();
  const [svgPosition, setSvgPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleClick = (event: any) => {
    if (isEditing && !svgPosition) {
      // If currently editing, remove the SVG
      setSvgPosition({ x: event.clientX, y: event.clientY });
    } else {
      setSvgPosition(null);
    }

    console.log(svgPosition);
  };

  useEffect(() => {
    if (!isEditing) {
      setSvgPosition(null);
    }
  }, [isEditing]);

  return (
    <>
      <div
        className={`absolute h-screen w-screen ${isEditing && !svgPosition ? "editing" : null}`}
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
}
