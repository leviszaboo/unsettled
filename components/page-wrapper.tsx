"use client";

import useMapEditingStore from "@/app/hooks/useMapEditing";
import { useEffect } from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEditing } = useMapEditingStore();

  useEffect(() => {
    const canvas = document.querySelector(
      ".mapboxgl-canvas-container",
    ) as HTMLElement;

    if (!canvas) return;

    canvas.style.cursor = "auto";

    if (isEditing) {
      canvas.classList.add("editing");
    } else {
      canvas.classList.remove("editing");
    }
  }, [isEditing]);

  return <div className="absolute h-screen w-screen">{children}</div>;
}
