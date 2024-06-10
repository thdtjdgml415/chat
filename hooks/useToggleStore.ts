import { create } from "zustand";

type Store = {
  isOpen: boolean;

  toggleSide: () => void;
};

const useToggle = create<Store>((set) => ({
  isOpen: false,

  toggleSide: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useToggle;
