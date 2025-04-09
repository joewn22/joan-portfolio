import { create } from "zustand";
import { Menu } from "~/lib/type";

interface NavState {
	activeMenu: Menu | null;
	setActiveMenu: (menu: Menu) => void;
}

const useNavStore = create<NavState>()((set) => ({
	activeMenu: null,
	setActiveMenu: (menu) => set({ activeMenu: menu }),
}));

export default useNavStore;
