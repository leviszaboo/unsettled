import { PostData } from "@/app/types/postData";
import FadeIn from "./fade-in";

export default function StoryCard({
  name,
  city,
  story,
  state,
}: Omit<PostData, "lat" | "lng"> & { state: boolean }) {
  return (
    <FadeIn
      className="flex flex-col bg-white rounded-md gap-4 p-4 w-48"
      state={state}
      duration={0.25}
    >
      <div className="flex">
        <div className="mr-auto text-base">
          <span className="font-semibold">{name}, </span>
          <span className="italic">{city}</span>
        </div>
      </div>
      <div className="max-h-64 min-h-4">
        <p className="text-sm">{story}</p>
      </div>
    </FadeIn>
  );
}
