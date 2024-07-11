"use client"

import { MouseEventHandler, useState } from 'react'
import { Button } from './ui/button'
import useMapEditingStore from '@/app/hooks/useMapEditing'

export default function PinButton() {
  const { isEditing, toggleEditing } = useMapEditingStore()

  const handleClick = (event: any) => {
    toggleEditing();
  };

  return (
    <div className="absolute bottom-3 right-3">
      <Button onClick={handleClick}>
        {isEditing ? "Cancel" : "Add Your Story"}
      </Button>
    </div>
  )
}
