import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PostData } from "@/app/types/postData";
import createPost from "@/app/actions/createPost";

export default function TextCard({ x, y }: { x: number; y: number }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const windowWidth = window.innerWidth;
  const cardWidth = 300;

  const adjustedX =
    x + 30 + cardWidth > windowWidth ? windowWidth - cardWidth - 20 : x + 30;
  const adjustedY = y - 200 < 0 ? 20 : y - 200;

  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      const data: PostData = {
        name: formData.get("name") as string,
        city: formData.get("city") as string,
        story: formData.get("story") as string,
        x,
        y,
      };

      const res = await createPost(data);

      if (!res.success) {
        setError("Something went wrong.");
      }
    } catch {
      setError("Invalid form inputs.");
    }

    setLoading(false);
  };

  return (
    <form action={onSubmit}>
      <div
        style={{ left: adjustedX, top: adjustedY }}
        className="absolute flex flex-col bg-white rounded-md gap-4 p-4"
      >
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
          <div className="ml-auto">
            <Button type="submit">{loading ? "Saving..." : "Save"}</Button>
          </div>
        </div>
      </div>
    </form>
  );
}
