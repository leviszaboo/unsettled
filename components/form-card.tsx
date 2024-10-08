"use client";

import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PostData } from "@/app/types/postData";
import createPost from "@/app/actions/createPost";
import useMapEditingStore from "@/app/hooks/useMapEditing";
import usePostsStore from "@/app/hooks/usePosts";
import ClosingButton from "./closing-button";

export default function FormCard({ lat, lng }: { lat: number; lng: number }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toggleEditing } = useMapEditingStore();
  const { addPost } = usePostsStore();

  const onSubmit = async (formData: FormData) => {
    setError(null);
    setSuccess(false);
    setLoading(true);

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
        addPost({ id: res.id!, ...data });

        setTimeout(() => {
          setSuccess(false);
        }, 700);
      }
    } catch {
      setError("Invalid form inputs.");
    }

    setLoading(false);
    toggleEditing();
  };

  return (
    <form action={onSubmit} className="z-100">
      <div className="flex flex-col hc-bg-blue rounded-md gap-4 p-4">
        <div className="flex items-center">
          <div className="font-semibold hc-text-secondary mr-auto">
            Add Your Story
          </div>
          <div onClick={toggleEditing} className="hover:cursor-pointer">
            <ClosingButton width={10} height={10} className="ml-auto" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <Label htmlFor="name" className="hc-text-secondary">
              Name
            </Label>
            <Input name="name" className="hc-bg-primary" required />
          </div>
          <div>
            <Label htmlFor="city" className="hc-text-secondary">
              City
            </Label>
            <Input name="city" className="hc-bg-primary" required />
          </div>
        </div>
        <Textarea name="story" className="hc-bg-primary" required />
        <div className="flex">
          {error && (
            <div className="text-sm justify-center hc-text-yellow mr-auto">
              {error}
            </div>
          )}
          {success && (
            <div className="text-sm justify-center text-green-500 mr-auto">
              Success!
            </div>
          )}
          <div className="ml-auto">
            <Button type="submit" variant={"secondary"}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
