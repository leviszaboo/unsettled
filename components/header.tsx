"use client";

import { useState } from "react";
import Info from "./info";
import FadeIn from "./fade-in";
import ClosingButton from "./closing-button";
import People from "./people";
import { Asterisk, Dot } from "lucide-react";
import InfoTrigger from "./info-trigger";
import Title from "./title";

export default function Header() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <Title />
      {!showInfo && <InfoTrigger setter={setShowInfo} state={showInfo} />}
      {showInfo && (
        <div
          className="absolute top-6 right-6 z-50 hover:cursor-pointer"
          onClick={() => setShowInfo(false)}
        >
          <ClosingButton />
        </div>
      )}
      <FadeIn
        state={showInfo}
        className="z-40 absolute h-screen w-screen hc-bg-primary"
      >
        <Info />
      </FadeIn>
    </>
  );
}
