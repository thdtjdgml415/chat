import { create } from "zustand";

type Store = {
  isToggle: boolean;

  toggleFn: () => void;
};

const useToggle = create<Store>((set) => ({
  isToggle: true,

  toggleFn: () => set((state) => ({ isToggle: !state.isToggle })),
}));

export default useToggle;
