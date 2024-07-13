"use client";

import React, { use, useEffect, useState } from "react";
import useMapEditingStore from "@/app/hooks/useMapEditing";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEditing } = useMapEditingStore();

  return (
    <div
      className={`absolute h-screen w-screen ${isEditing ? "editing" : null}`}
    >
      {children}
    </div>
  );
}
