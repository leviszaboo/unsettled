import React from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export default function TextCard({ x, y }: { x: number, y: number }) {
  return (
    <div style={{ left: x + 30, top: y - 200 }} className='absolute flex flex-col bg-white rounded-md gap-4 p-4 z-100000'>
      <div>Add Your Story</div>
      <Textarea />
      <div className='ml-auto'>
        <Button>Save</Button>
      </div>
    </div>
  )
}
