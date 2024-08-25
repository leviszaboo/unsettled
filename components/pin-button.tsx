"use client";

import { Button } from "./ui/button";
import useMapEditingStore from "@/app/hooks/useMapEditing";

export default function PinButton() {
  const { isEditing, toggleEditing } = useMapEditingStore();

  const handleClick = () => {
    toggleEditing();
  };

  return (
    <div className="absolute bottom-4 right-4">
      <Button onClick={handleClick}>
        {isEditing ? "Cancel" : "Add Your Story"}
      </Button>
    </div>
  );
}
