import { create } from "zustand";

type Store = {
  isOpen: boolean;
  openAlert: () => void;
  closeAlert: () => void;
};

const useAlert = create<Store>((set) => ({
  isOpen: false,

  openAlert: () => set({ isOpen: true }),
  closeAlert: () => set({ isOpen: false }),
}));

export default useAlert;
