import { create } from "zustand";

interface ControlsStore {
    isChatOpen:boolean,
    toogleChat:()=>void,
    msg:string,
    setMsg:(msg:string) => void
}


export const useControlsStore = create<ControlsStore>((set, get) => ({
    isChatOpen:false,
    msg:"",
    toogleChat:()=> {
        const {isChatOpen} = get()
        const newIsChatOpen = !isChatOpen;
        set({isChatOpen:newIsChatOpen})
    },
    setMsg:(newMsg:string) => {
        set({msg:newMsg})
    }
}))