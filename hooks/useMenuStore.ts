import create from "zustand";

type MenuState = {
  activeMenu: number;
  setActiveMenu: (menu: number) => void;
};

const useMenuStore = create<MenuState>((set) => ({
  activeMenu: 1,
  setActiveMenu: (menu) => set({ activeMenu: menu }),
}));

export default useMenuStore;
