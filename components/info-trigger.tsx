import { Asterisk, Dot } from "lucide-react";
import People from "./people";
import { Dispatch, SetStateAction } from "react";
import FadeIn from "./fade-in";
import Info from "./info";

export default function InfoTrigger({
  state,
  setter,
}: {
  state: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className="absolute top-16 pt-2 left-6 z-50 hover:cursor-pointer flex gap-2 items-center"
        onClick={() => setter(true)}
      >
        <Asterisk size={24} />
        <p className="font-semibold hc-text-emphasis text-xl">What Is This?</p>
      </div>
      <People className="absolute top-6 right-4 z-50" />
      <People className="absolute bottom-4 left-4 z-50 gap-2" flexDir="col" />
    </>
  );
}
