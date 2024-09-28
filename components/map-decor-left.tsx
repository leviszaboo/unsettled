"use client";

import { useWindowSize } from "rooks";
import People from "./people";

export default function MapDecorLeft() {
  const { innerWidth } = useWindowSize();

  return (
    <People
      className="absolute bottom-4 left-4 z-50 gap-2"
      flexDir="col"
      numPeople={!innerWidth || innerWidth < 600 ? 6 : 8}
    />
  );
}
