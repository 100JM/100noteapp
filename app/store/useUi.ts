import { create } from "zustand";
import { Ui } from "../type/note";

const useUi = create<Ui>((set) => ({
    registForm: false,
    setRegistForm: (isShow: boolean) => set({ registForm: isShow })
}));

export default useUi;