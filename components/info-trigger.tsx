"use client";

import { useState } from "react";
import Info from "./info";
import FadeIn from "./fade-in";
import ClosingButton from "./closing-button";

export default function InfoTrigger() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      {!showInfo && (
        <div
          className="absolute top-4 left-4 z-50 hover:cursor-pointer"
          onClick={() => setShowInfo(true)}
        >
          <p className="font-semibold hc-text-primary">What Is This?</p>
        </div>
      )}
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
