"use client";

import { useState } from "react";
import Info from "./info";
import FadeIn from "./fade-in";
import ClosingButton from "./closing-button";
import People from "./people";
import { Asterisk, Dot } from "lucide-react";
import InfoTrigger from "./info-trigger";
import Title from "./title";
import { useWindowSize } from "rooks";
import MapDecorLeft from "./map-decor-left";

export default function Header() {
  const [showInfo, setShowInfo] = useState(false);
  const { innerWidth } = useWindowSize();

  return (
    <>
      <div className="flex p-6 pb-8 absolute top-0 left-0 justify-between w-screen items-center hc-bg-primary z-100">
        <Title />
        {!showInfo && (
          <>
            <People
              className="z-50"
              numPeople={!innerWidth || innerWidth < 600 ? 6 : 8}
            />
            <InfoTrigger setter={setShowInfo} state={showInfo} />
          </>
        )}
        {showInfo && (
          <div
            className="right-6 z-50 hover:cursor-pointer"
            onClick={() => setShowInfo(false)}
          >
            <ClosingButton />
          </div>
        )}
      </div>
      <FadeIn
        state={showInfo}
        className="z-40 absolute h-screen w-screen hc-bg-primary"
      >
        <Info />
      </FadeIn>
      {!showInfo && <MapDecorLeft />}
    </>
  );
}
