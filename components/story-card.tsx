import { PostData } from "@/app/types/postData";

export default function StoryCard({
  name,
  city,
  story,
}: Omit<PostData, "lat" | "lng">) {
  return (
    <div className="flex flex-col bg-white rounded-md gap-4 p-4 w-48">
      <div className="flex">
        <div className="mr-auto text-base">
          <span className="font-semibold">{name}, </span>
          <span className="italic">{city}</span>
        </div>
      </div>
      <div className="max-h-64 min-h-4">
        <p className="text-sm">{story}</p>
      </div>
    </div>
  );
}
