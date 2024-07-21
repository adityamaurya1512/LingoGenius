
import {create} from "zustand";
type ExitModalState={
    isOpen: boolean;
    open:()=>void;
    close:()=>void;
}

export const useExitModal = create<ExitModalState>((set)=>({
    isOpen:false, // todore
     open:()=>set({isOpen:true}),
    close:()=>set({isOpen:false}),
}))