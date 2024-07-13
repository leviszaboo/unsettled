import MainMap from "@/components/map";
import PageWrapper from "@/components/page-wrapper";
import PinButton from "@/components/pin-button";
import { db } from "@/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { cache } from "react";
import { FireBasePostDoc } from "../types/postData";

export const revalidate = 0;

const fetchDocs = cache(async (ref: string) => {
  try {
    const querySnapshot = await getDocs(query(collection(db, ref)));

    const docs = querySnapshot.docs.map((doc) => {
      const { createdAt, ...data } = doc.data();

      return data as FireBasePostDoc;
    });

    return docs;
  } catch (error) {
    return [];
  }
});

export default async function Home() {
  const ref = "posts";

  const posts = await fetchDocs(ref);

  return (
    <PageWrapper>
      <MainMap fetchedPosts={posts} />
      <PinButton />
    </PageWrapper>
  );
}
