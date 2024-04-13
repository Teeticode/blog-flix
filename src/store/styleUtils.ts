import { create } from "zustand";

interface StylesUtil {
  sideBarOpen: boolean;
  setSideBarOpen: (sideBarOpen: boolean) => void;
}

const useStyleStore = create<StylesUtil>((set) => ({
  sideBarOpen: false,
  setSideBarOpen: (sideBarOpen) => {
    set({
      sideBarOpen: sideBarOpen,
    });
  },
}));

export default useStyleStore;
