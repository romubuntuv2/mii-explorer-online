import { create } from "zustand";


interface MainMenuStore {
    menu:string,
    changeMenu:(menu:string)=> void
    isStartMenu:()=>boolean,
    isModeMenu:()=> boolean,
    isExploration:()=>boolean,
    isCustomMii:()=>boolean,
}

export const useMainMenuStore = create<MainMenuStore>((set, get) => ({
    menu:"StartMenu",
    changeMenu:(menu:string) => {
        set({menu:menu})
    },
    isStartMenu:()=>{
        const {menu}= get()
        return menu=="StartMenu"
    },
    isModeMenu:()=>{
        const {menu}= get()
        return menu=="ModeMenu"
    },
    isExploration:()=>{
        const {menu}= get()
        return menu=="Exploration"
    },
    isCustomMii:()=>{
        const {menu}= get()
        return menu=="CustomMii"
    },
}
))