export type PostData = {
  name: string;
  city: string;
  story: string;
  lat: number;
  lng: number;
};

export type FireBasePostDoc = {
  id: string;
} & PostData;
