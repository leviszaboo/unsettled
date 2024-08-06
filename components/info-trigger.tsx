"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Info from "./info";
import FadeIn from "./fade-in";

export default function InfoTrigger() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div
        className="absolute top-3 left-3 z-50 hover:cursor-pointer"
        onClick={() => setShowInfo(!showInfo)}
      >
        <p className="font-semibold hc-text-primary">What Is This?</p>
      </div>
      <FadeIn
        state={showInfo}
        className="z-40 absolute h-screen w-screen hc-bg-primary"
      >
        <Info />
      </FadeIn>
    </>
  );
}
