import { create } from "zustand";

interface MapEditingStore {
  isEditing: boolean;
  toggleEditing: () => void;
}

const useMapEditingStore = create<MapEditingStore>((set) => ({
  isEditing: false,
  toggleEditing: () => set((state) => ({ isEditing: !state.isEditing })),
}));

export default useMapEditingStore;  