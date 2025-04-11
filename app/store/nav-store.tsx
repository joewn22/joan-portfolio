import { create } from "zustand";
import { Menu } from "~/lib/type";

interface NavState {
	activeMenu: Menu | null;
	setActiveMenu: (menu: Menu) => void;
	headerTitle: string;
	setHeaderTitle: (headerTitle: string) => void;
	headerSubTitle: string;
	setHeaderSubTitle: (headerSubTitle: string) => void;
}

const useNavStore = create<NavState>()((set) => ({
	activeMenu: null,
	setActiveMenu: (menu) => set({ activeMenu: menu }),
	headerTitle: "",
	setHeaderTitle: (headerTitle) => set({ headerTitle: headerTitle }),
	headerSubTitle: "",
	setHeaderSubTitle: (headerSubTitle) =>
		set({ headerSubTitle: headerSubTitle }),
}));

export default useNavStore;
