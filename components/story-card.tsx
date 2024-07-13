import { FireBasePostDoc } from "@/app/types/postData";

export default function StoryCard({
  id,
  name,
  city,
  story,
  lat,
  lng,
}: FireBasePostDoc) {
  return (
    <div>
      <div className="absolute flex flex-col bg-white rounded-md gap-4 p-4">
        <div>
          <span className="font-semibold">{name}, </span>
          <span className="italic">{city}</span>
        </div>
      </div>
    </div>
  );
}
