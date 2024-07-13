"use client";

import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PostData } from "@/app/types/postData";
import createPost from "@/app/actions/createPost";
import useMapEditingStore from "@/app/hooks/useMapEditing";

//{ x, y }: { x: number; y: number }         style={{ left: adjustedX, top: adjustedY }}

export default function FormCard({ lat, lng }: { lat: number; lng: number }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toggleEditing } = useMapEditingStore();

  const onSubmit = async (formData: FormData) => {
    setError(null);
    setSuccess(false);

    try {
      const data: PostData = {
        name: formData.get("name") as string,
        city: formData.get("city") as string,
        story: formData.get("story") as string,
        lat,
        lng,
      };

      const res = await createPost(data);

      if (!res.success) {
        setError("Something went wrong.");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("Invalid form inputs.");
    }

    setLoading(false);
    toggleEditing();
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col bg-white rounded-md gap-4 p-4">
        <div className="font-semibold">Add Your Story</div>
        <div className="flex flex-col gap-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input name="name" required />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input name="city" required />
          </div>
        </div>
        <Textarea name="story" required />
        <div className="flex">
          {error && (
            <div className="text-sm justify-center text-red-500 mr-auto">
              {error}
            </div>
          )}
          {success && (
            <div className="text-sm justify-center text-green-500 mr-auto">
              Success!
            </div>
          )}
          <div className="ml-auto">
            <Button type="submit" onClick={() => setLoading(true)}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
