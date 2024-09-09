import { Marker } from "react-map-gl";

export default function Markers() {
  // amsterdam, groningen, rotterdam, maastricht, den haag, tilburg, breda
  const cities = [
    {
      name: "Amsterdam",
      latitude: 52.3676,
      longitude: 4.9041,
    },
    {
      name: "Groningen",
      latitude: 53.2194,
      longitude: 6.5665,
    },
    {
      name: "Rotterdam",
      latitude: 51.9225,
      longitude: 4.47917,
    },
    {
      name: "Maastricht",
      latitude: 50.8483,
      longitude: 5.6889,
    },
    {
      name: "Den Haag",
      latitude: 52.0705,
      longitude: 4.3007,
    },
    {
      name: "Breda",
      latitude: 51.5719,
      longitude: 4.7683,
    },
  ];

  return (
    <>
      {cities.map((city, i) => (
        <Marker key={i} latitude={city.latitude} longitude={city.longitude}>
          <div className="p-1 rounded-sm z-50">
            <p className="font-semibold hc-text-emphasis">{city.name}</p>
          </div>
        </Marker>
      ))}
    </>
  );
}
