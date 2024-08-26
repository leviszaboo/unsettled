"use client";

import { useState } from "react";
import Info from "./info";
import FadeIn from "./fade-in";
import ClosingButton from "./closing-button";
import People from "./people";
import { Asterisk } from "lucide-react";

export default function InfoTrigger() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      {!showInfo && (
        <>
          <div
            className="absolute top-4 left-4 z-50 hover:cursor-pointer flex gap-2 items-center"
            onClick={() => setShowInfo(true)}
          >
            <Asterisk size={24} />
            <p className="font-semibold hc-text-emphasis">What Is This?</p>
          </div>
          <People className="absolute top-4 right-4 z-50" />
          <People
            className="absolute bottom-4 left-4 z-50 gap-2"
            flexDir="col"
          />
        </>
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
