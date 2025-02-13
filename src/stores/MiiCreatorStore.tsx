import { MiiA } from '@/data/defaultsMii';
import { Mii, MiiBody, MiiElement, MiiEyes, MiiFaceElement } from '@/r3f/mii/MiiRendered';
import { RecordModel } from 'pocketbase'
import { create } from 'zustand';



interface MiiCreatorStore {
    mii:Mii,
    savedMiis:Mii[],
    saveMii:(mii:Mii)=>void,
    selectedTypeID:string,
    selectedElement:(getType:(id:string) => (RecordModel|undefined))=>MiiElement|MiiFaceElement|MiiEyes|MiiBody,
    initMii: (getInit:(typeName:string)=>string, initTypeID:string) => void,
    setSelectedType:(newTypeID:string) => void,
    changeColor:(color:string,getType:(id:string) => (RecordModel|undefined))=>void,
    changeVerticalPos:(valuel:number,getType:(id:string) => (RecordModel|undefined)) => void,
    changeScale:(value:number,getType:(id:string) => (RecordModel|undefined))=>void,
    changeDistBetw:(value:number,getType:(id:string) => (RecordModel|undefined))=>void,
    changeRotation:(value:number,getType:(id:string) => (RecordModel|undefined))=>void,
    changeShrink:(value:number,getType:(id:string) => (RecordModel|undefined))=>void,
    changeElement:(value:string, getType:(id:string) => (RecordModel|undefined)) => void,
}

export const useMiiCreatorStore = create<MiiCreatorStore>((set,get) => ({
    mii:MiiA,
    savedMiis:[],
    saveMii:(mii:Mii)=> {
        const {savedMiis} = get()
        if(savedMiis.length == 10) {
            savedMiis.shift();
        }
        savedMiis.push(mii)
        set({savedMiis:savedMiis})
    },
    selectedTypeID:"",
    selectedElement:(getType:(id:string) => (RecordModel|undefined))=>{
        const {selectedTypeID, mii} = get();
        const selectedType = getType(selectedTypeID)
        const elementName = String(selectedType?.name).toLowerCase();
        return (mii as Mii)[elementName as keyof Mii]
    },
    initMii: (getInit:(typeName:string)=>string, initTypeID:string) => { 
        const initMii:Mii = MiiA

        set({mii:initMii, selectedTypeID:initTypeID})
    },
    setSelectedType: (newTypeID:string) => {set({selectedTypeID:newTypeID})},
    changeColor:(color:string, getType:(id:string) => (RecordModel|undefined)) => {
        const {selectedElement ,mii} = get();
        (selectedElement(getType) as MiiElement).color = color;
        set({mii:mii})
    },
    changeVerticalPos:(value:number, getType:(id:string) => (RecordModel|undefined)) => {
        const {selectedElement,mii} = get();
        (selectedElement(getType) as MiiFaceElement).verticalPos = value;
        set({mii:mii})
    },
    changeScale:(value:number, getType:(id:string) => (RecordModel|undefined)) =>{
        const {selectedElement,mii} = get();
        (selectedElement(getType) as MiiFaceElement).scale = value;
        set({mii:mii})
    },
    changeDistBetw:(value:number, getType:(id:string) => (RecordModel|undefined)) =>{
        const {selectedElement,mii} = get();
        (selectedElement(getType) as MiiEyes).distanceBetween = value;
        set({mii:mii})
    },
    changeRotation:(value:number, getType:(id:string) => (RecordModel|undefined)) =>{
        const {selectedElement,mii} = get();
        (selectedElement(getType) as MiiFaceElement).rotation = value;
        set({mii:mii})
    },
    changeShrink:(value:number, getType:(id:string) => (RecordModel|undefined)) =>{
        const {selectedElement,mii} = get();
        (selectedElement(getType) as MiiFaceElement).shrink = value;
        set({mii:mii})
    },
    changeElement:(elementID:string, getType:(id:string) => (RecordModel|undefined)) => {
        const {selectedElement,mii} = get();

        const miiElement = selectedElement(getType)  as MiiElement | MiiFaceElement;
        miiElement.elementID = elementID;

        set({mii:mii})
    }
}))








































