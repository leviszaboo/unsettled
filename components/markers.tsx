import { Marker } from "react-map-gl";

type CityInfo = {
  name: string;
  latitude: number;
  longitude: number;
};

const cities: CityInfo[] = [
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
  {
    name: "Wageningen",
    latitude: 51.9612,
    longitude: 5.6584,
  },
  {
    name: "Nijmegen",
    latitude: 51.8433,
    longitude: 5.8609,
  },
  {
    name: "Delft",
    latitude: 52.0116,
    longitude: 4.3571,
  },
  {
    name: "Enschede",
    latitude: 52.2215,
    longitude: 6.8937,
  },
  {
    name: "Utrecht",
    latitude: 52.0907,
    longitude: 5.1214,
  },
  {
    name: "Haarlem",
    latitude: 52.3874,
    longitude: 4.6462,
  },
  {
    name: "Leeuwarden",
    latitude: 53.2194,
    longitude: 5.5667,
  },
  {
    name: "Eindhoven",
    latitude: 51.4416,
    longitude: 5.4697,
  },
];

export default function Markers() {
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
