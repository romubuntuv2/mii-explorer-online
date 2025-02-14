import { create } from "zustand";

interface ControlsStore {
    isChatOpen:boolean,
    isMapOpen:boolean,
    isEmoteOpen:boolean,
    tpPosition:[number, number, number]|null
    toogleMap:()=>void,
    toogleEmote:()=>void,
    toogleChat:()=>void,
    setTP:(pos:[number, number, number]|null)=> void,
    animation:{animating:boolean, animationString:string},
    startAnimation:(animationString:string) => void,
    stopAnimation:()=>void,
    msg:string,
    setMsg:(msg:string) => void
}


export const useControlsStore = create<ControlsStore>((set, get) => ({
    isChatOpen:false,
    isMapOpen:false,
    isEmoteOpen:false,
    tpPosition:null,
    msg:"",
    animation:{animating:false, animationString:""},
    startAnimation:(animationString:string)=> {
        const anim = {animating:true, animationString:animationString}
        set({animation:anim})
    },
    stopAnimation:()=> {
        const anim = {animating:false, animationString:""}
        set({animation:anim})
    },
    setTP:(pos:[number, number, number]|null)=> {
        set({tpPosition:pos})
    },
    toogleMap:()=> {
        const {isMapOpen} = get()
        const newIsMapOpen = !isMapOpen;
        set({isMapOpen:newIsMapOpen}) 
    },
    toogleEmote:()=> {
        const {isEmoteOpen} = get()
        const newisEmoteOpen = !isEmoteOpen;
        set({isEmoteOpen:newisEmoteOpen}) 
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