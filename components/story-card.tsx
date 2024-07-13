import { FireBasePostDoc } from "@/app/types/postData";

export default function StoryCard({
  id,
  name,
  city,
  story,
}: Omit<FireBasePostDoc, "lat" | "lng">) {
  return (
    <div>
      <div className="flex flex-col bg-white rounded-md gap-4 p-4">
        <div>
          <span className="font-semibold">{name}, </span>
          <span className="italic">{city}</span>
        </div>
      </div>
    </div>
  );
}
