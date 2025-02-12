import { create } from "zustand";

interface ControlsStore {
    isChatOpen:boolean,
    isMapOpen:boolean,
    tpPosition:[number, number, number]|null
    toogleMap:()=>void,
    toogleChat:()=>void,
    setTP:(pos:[number, number, number]|null)=> void,

    msg:string,
    setMsg:(msg:string) => void
}


export const useControlsStore = create<ControlsStore>((set, get) => ({
    isChatOpen:false,
    isMapOpen:false,
    tpPosition:null,
    msg:"",
    setTP:(pos:[number, number, number]|null)=> {
        set({tpPosition:pos})
    },
    toogleMap:()=> {
        const {isMapOpen} = get()
        const newIsMapOpen = !isMapOpen;
        set({isMapOpen:newIsMapOpen}) 
    },
    toogleChat:()=> {
        const {isChatOpen} = get()
        const newIsChatOpen = !isChatOpen;
        set({isChatOpen:newIsChatOpen})
    },
    setMsg:(newMsg:string) => {
        set({msg:newMsg})
    }
}))