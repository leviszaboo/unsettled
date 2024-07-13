"use server";

import { PostData } from "../types/postData";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";

async function createPost(postData: PostData) {
  try {
    await addDoc(collection(db, "posts"), postData);

    return {
      success: true,
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
