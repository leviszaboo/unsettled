import { Asterisk } from "lucide-react";
import FadeIn from "./fade-in";

export default function Info() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col gap-8 p-6 w-5/6 h-screen justify-center">
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <Asterisk size={24} />
            <h2 className="hc-text-emphasis text-xl font-bold">
              What is this?
            </h2>
          </div>
          <p className="hc-text-primary text-xl font-medium">
            Have you ever lived in a sketchy household, been scammed,
            couch-surfed, or gotten kicked out of your apartment? <br />
            You&apos;re not alone. <br />
            We are the team of the documentary called{" "}
            <span className="font-bold">Unsettled</span> and we created this
            website to connect and provide an open space for sharing for
            students who are/have been affected by the housing crisis in the
            Netherlands. Even though we are making a documentary, we can only do
            as much as raising awareness and giving a platform to some stories,
            but there are hundreds and thousands more of you! On this website,
            you can read other students&apos; experiences and stories regarding
            their struggle with housing, and even add yours if you feel
            comfortable with sharing. And don&apos;t forget: you are not alone
            in this, and your stories matter!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <Asterisk size={24} />
            <h2 className="hc-text-emphasis text-xl font-bold">Instructions</h2>
          </div>
          <ol className="hc-text-primary text-xl font-medium">
            <li>
              1. <span className="font-bold">Add a pin</span> to the city you
              are in/had your experience in
            </li>
            <li>
              2. Share your <span className="font-bold">name</span> if
              you&apos;d like, but feel free to use fake names or usernames
            </li>
            <li>
              3. Write down the name of your chosen{" "}
              <span className="font-bold">city</span>
            </li>
            <li>
              4. Share your <span className="font-bold">story</span> in detail,
              or just add a <span className="font-bold">comment</span> or{" "}
              <span className="font-bold">message</span> that you&apos;d like
              for others to see
            </li>
            <li>
              5. If you feel comfortable, share a{" "}
              <span className="font-bold">social media handle</span> so people
              can connect with you based on your story/note
            </li>
          </ol>
        </div>
      </div>
      <div className="hc-bg-blue w-1/6 h-screen flex flex-col justify-center items-center"></div>
    </div>
  );
}
