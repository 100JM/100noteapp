import { create } from "zustand";
import { Ui } from "../type/ui";

const useUi = create<Ui>((set) => ({
    registForm: false,
    setRegistForm: (isShow: boolean) => set({ registForm: isShow })
}));

export default useUi;