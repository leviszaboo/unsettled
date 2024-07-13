"use client";

import { FireBasePostDoc } from "@/app/types/postData";
import { useEffect, useState } from "react";
import Pin from "./pin";
import { Marker, Popup } from "react-map-gl";
import StoryCard from "./story-card";
import useMapEditingStore from "@/app/hooks/useMapEditing";

export default function Stories({ posts }: { posts: FireBasePostDoc[] }) {
  const [activePost, setActivePost] = useState<FireBasePostDoc | null>(null);
  const { isEditing } = useMapEditingStore();

  return (
    <>
      {posts.map((post) => (
        <Marker key={post.id} latitude={post.lat} longitude={post.lng}>
          <div
            style={{ zIndex: 1000 }}
            onClick={(e) => {
              if (isEditing) return;

              e.stopPropagation();

              setActivePost(post);
            }}
          >
            <Pin />
          </div>
        </Marker>
      ))}
      {activePost && (
        <Popup
          latitude={activePost.lat}
          longitude={activePost.lng}
          onClose={() => {
            setActivePost(null);
          }}
          closeOnClick={true}
        >
          <StoryCard
            id={activePost.id}
            name={activePost.name}
            city={activePost.city}
            story={activePost.story}
          />
        </Popup>
      )}
    </>
  );
}
