"use client";

import { Asterisk } from "lucide-react";
import People from "./people";
import { Dispatch, SetStateAction } from "react";
import { useWindowSize } from "rooks";

export default function InfoTrigger({
  setter,
}: {
  state: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}) {
  const { innerWidth } = useWindowSize();

  return (
    <>
      <div
        className="absolute top-16 pt-4 left-6 z-50 hover:cursor-pointer flex gap-2 items-center"
        onClick={() => setter(true)}
      >
        <Asterisk size={24} />
        <p className="font-bold hc-text-emphasis text-xl underline">
          What Is This?
        </p>
      </div>
    </>
  );
}
