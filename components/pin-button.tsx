"use client";

import { Button } from "./ui/button";
import useMapEditingStore from "@/app/hooks/useMapEditing";

export default function PinButton() {
  const { isEditing, toggleEditing } = useMapEditingStore();

  const handleClick = () => {
    toggleEditing();
  };

  return (
    <div className="absolute bottom-3 right-3">
      <Button onClick={handleClick} className="hc-bg-black">
        {isEditing ? "Cancel" : "Add Your Story"}
      </Button>
    </div>
  );
}
