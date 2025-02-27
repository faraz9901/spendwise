import { create } from "zustand";
import { ModalTypes } from "../types";

interface ModalType {
    show: boolean;
    type: ModalTypes;
    showModal: (type: ModalTypes) => void;
    hideModal: () => void;
}

const useModal = create<ModalType>((set) => ({
    show: false,

    type: ModalTypes.ExpenseEdit,

    showModal(type) {
        set({ show: true, type })
    },

    hideModal() {
        set({ show: false, type: ModalTypes.ExpenseAdd })
    },

}));


export default useModal