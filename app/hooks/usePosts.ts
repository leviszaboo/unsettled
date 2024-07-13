import { create } from "zustand";
import { FireBasePostDoc } from "../types/postData";

interface PostsStore {
  posts: FireBasePostDoc[];
  setPosts: (posts: FireBasePostDoc[]) => void;
  addPost: (post: FireBasePostDoc) => void;
}

const usePostsStore = create<PostsStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
}));

export default usePostsStore;
