"use client";

import { FireBasePostDoc } from "@/app/types/postData";
import { useEffect, useState } from "react";
import Pin from "./pin";

export default function Stories({ posts }: { posts: FireBasePostDoc[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    console.log("activeId", activeId);
  }, [activeId]);

  return (
    <>
      {activeId && (
        <div className="absolute flex flex-col bg-white rounded-md gap-4 p-4">
          <div>
            <span className="font-semibold">
              {posts.find((post) => post.id === activeId)?.name},{" "}
            </span>
            <span className="italic">
              {posts.find((post) => post.id === activeId)?.city}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
