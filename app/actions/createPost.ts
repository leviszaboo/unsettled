"use server";

import { PostData } from "../types/postData";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { v4 as uuid } from "uuid";

async function createPost(
  postData: PostData,
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const id = uuid();

    await addDoc(collection(db, "posts"), { id, ...postData });

    return {
      success: true,
      id,
    };
  } catch (error) {
    console.error("Error creating post: ", error);
    return {
      success: false,
      error: "Error creating post",
    };
  }
}

export default createPost;
